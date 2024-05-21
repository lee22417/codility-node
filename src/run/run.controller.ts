import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { RunService } from './run.service';

@Controller('run')
export class RunController {
  constructor(private readonly runService: RunService) {}

  @Get()
  find(@Query('input') input) {
    return this.runService.run(input);
  }
}
