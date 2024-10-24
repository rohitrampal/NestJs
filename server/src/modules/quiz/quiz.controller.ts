import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { QuizService } from "./quiz.service";
import { QuizDto } from "./dto/quiz.dto";

@Controller('quiz')
export class QuizController{
    constructor( private readonly quizService:QuizService ){}
    @Get('/get')
    getQuiz():string{
        return this.quizService.getQuiz();
    }

    @Post('/post')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    postQuiz( @Body() quizData:QuizDto ){
        return {
            data:quizData
        }
    }
}