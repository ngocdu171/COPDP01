import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Entity, CreateDateColumn, UpdateDateColumn, Column, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Apartment extends BaseEntity {
    @Field(_type => ID)
    @PrimaryGeneratedColumn()
    id!: number

    @Field()
    @Column()
    name: string

    @Field()
    @Column()
    price: number

    @Field()
    @Column()
    address: string

    @Field()
    @Column()
    floor: string

    @Field()
    @Column()
    vacant: boolean

    @Field()
    @Column()
    elevator: boolean

    @Field()
    @Column()
    rooms: string

    @Field()
    @Column()
    year: number

    @Field()
    @Column()
    square: string

    @Field()
    @Column()
    water: number

    @Field()
    @Column()
    balcony: string

    @Field()
    @Column()
    park: number

    @Field()
    @CreateDateColumn({type: 'timestamptz'})
    createdAt: Date

    @Field()
    @UpdateDateColumn({type: 'timestamptz'})
    updatedAt: Date
}