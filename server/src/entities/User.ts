import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() // db table
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ unique: true })
    username!: string

    @Column({ unique: true })
    email!: string

    @Column()
    password!: string

    @Column()
    createdAt: Date

    @Column()
    updatedAt: Date
}