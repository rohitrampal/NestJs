import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('quiz')
export class QuizEntity extends BaseEntity{
    @PrimaryGeneratedColumn({
        comment:"this column should identify uniquely",
    })
    id:number;

    @Column({
        type:'varchar',
    })
    title:string;

    @Column({
        type:'varchar',
    })
    description:string;
}