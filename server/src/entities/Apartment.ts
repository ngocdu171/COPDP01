import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Apartment extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name: string

    @Column()
    price: number

    @Column()
    address: string

    @Column()
    floor: string

    @Column()
    vacant: boolean

    @Column()
    elevator: boolean

    @Column()
    rooms: string

    @Column()
    year: number

    @Column()
    square: number

    @Column()
    water: number

    @Column()
    balcony: string

    @Column()
    park: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}