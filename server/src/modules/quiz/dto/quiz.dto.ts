import { IsNotEmpty, Length } from "class-validator";

export class QuizDto{

    @IsNotEmpty({ message:"field should not be empty" })
    @Length(5,255)
    title:string;

    @Length(5,255)
    description:string;
}