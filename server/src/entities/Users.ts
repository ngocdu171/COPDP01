import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Entity, CreateDateColumn, UpdateDateColumn, Column, PrimaryGeneratedColumn } from 'typeorm'

@ObjectType()
@Entity()
export class Tb_user extends BaseEntity {
    @Field(_type => ID)
    @PrimaryGeneratedColumn()
    id!: number

    @Field()
    @Column({ unique: true })
    username!: string

    @Field()
    @Column({ unique: true })
    email!: string

    @Field()
    @Column()
    admin: boolean

    @Column()
    password!: string

    @Field()
    @CreateDateColumn()
    createdAt!: Date

    @Field()
    @UpdateDateColumn()
    updatedAt!: Date
}