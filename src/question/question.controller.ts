import { QuestionService } from './question.service';
import { CreateQuestionDto } from '../dto/createQuestion.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}
  @Post()
  saveQuestion(@Body() question: CreateQuestionDto) {
    return this.questionService.createNewQuestion(question);
  }
}
