import { CreateApartmentInput } from "../type/CreateApartmentInput";
import { checkAdmin } from "../middleware/checkAuth";
import {
  Arg,
  ID,
  Int,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { ApartmentMutationResponse } from "../type/ApartmentMutationResponse";
import { UpdateApartmentInput } from "../type/UpdateApartmentInput";
import { Apartment } from "../entities/Apartments";
import { PaginatedApartments } from "../type/PaginatedApartments";
import { LessThan } from "typeorm";

@Resolver()
export class ApartmentResolver {
  @Query((_return) => PaginatedApartments, { nullable: true })
  async apartments(
    @Arg("limit", (_type) => Int) limit: number,
    @Arg("cursor", { nullable: true }) cursor?: string
  ) {
    try {
      const totalApartmentCount = await Apartment.count();
      const realLimit = Math.min(10, limit);

      const findOptions: { [key: string]: any } = {
        order: {
          createdAt: "DESC",
        },
        take: realLimit,
      };

      let lastApartment: Apartment[] = [];
      if (cursor) {
        findOptions.where = { createdAt: LessThan(cursor) };

        lastApartment = await Apartment.find({
          order: { createdAt: "ASC" },
          take: 1,
        });
      }
      const apartments = await Apartment.find(findOptions);
      return {
        totalCount: totalApartmentCount,
        cursor: apartments[apartments.length - 1].createdAt,
        hasMore: cursor
          ? apartments[apartments.length - 1].createdAt.toString() !==
            lastApartment[0].createdAt.toString()
          : apartments.length !== totalApartmentCount,
        paginatedApartments: apartments,
      };
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  @Query((_return) => Apartment, { nullable: true })
  async apartment(@Arg("id", (_type) => ID) id: number) {
    try {
      const FindItem = await Apartment.findOne(id);
      return FindItem;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  @Mutation((_return) => ApartmentMutationResponse)
  @UseMiddleware(checkAdmin)
  async createApartment(
    @Arg("createApartmentInput") createApartmentInput: CreateApartmentInput
  ) {
    try {
      const {
        name,
        price,
        address,
        floor,
        vacant,
        elevator,
        rooms,
        year,
        square,
        water,
        balcony,
        park,
      } = createApartmentInput;
      const newApartment = Apartment.create({
        name,
        price,
        address,
        floor,
        vacant,
        elevator,
        rooms,
        year,
        square,
        water,
        balcony,
        park,
      });

      await newApartment.save();
      return {
        code: 200,
        success: true,
        message: "Apartment created successfully",
        apartment: newApartment,
      };
    } catch (error) {
      console.log(error);
      return {
        code: 500,
        success: false,
        message: `Internal server error ${error.message}`,
      };
    }
  }

  @Mutation((_return) => ApartmentMutationResponse)
  @UseMiddleware(checkAdmin)
  async updateApartment(
    @Arg("updateApartmentInput") updateApartmentInput: UpdateApartmentInput
  ) {
    try {
      const {
        id,
        name,
        price,
        address,
        floor,
        vacant,
        elevator,
        rooms,
        year,
        square,
        water,
        balcony,
        park,
      } = updateApartmentInput;
      const FindItem = await Apartment.findOne(id);
      if (!FindItem) {
        return {
          code: 400,
          success: false,
          message: "Apartment not found",
        };
      }
      FindItem.name = name;
      FindItem.price = price;
      FindItem.address = address;
      FindItem.floor = floor;
      FindItem.vacant = vacant;
      FindItem.elevator = elevator;
      FindItem.rooms = rooms;
      FindItem.year = year;
      FindItem.square = square;
      FindItem.water = water;
      FindItem.balcony = balcony;
      FindItem.park = park;
      await FindItem.save();
      return {
        code: 200,
        success: true,
        message: "Apartment updated successfully",
        apartment: FindItem,
      };
    } catch (error) {
      console.log(error);
      return {
        code: 500,
        success: false,
        message: `Internal server error ${error.message}`,
      };
    }
  }

  @Mutation((_return) => ApartmentMutationResponse)
  @UseMiddleware(checkAdmin)
  async deleteApartment(@Arg("_id", (_type) => ID) _id: number) {
    const FindItem = await Apartment.findOne(_id);
    if (!FindItem)
      return {
        code: 400,
        success: false,
        message: "Apartment not found",
      };

    await Apartment.delete({ id: _id });
    return {
      code: 200,
      success: true,
      message: "Apartment deleted successfully",
    };
  }
}
