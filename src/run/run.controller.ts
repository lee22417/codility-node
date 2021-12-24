import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RunService } from './run.service';

@Controller('run')
export class RunController {
  constructor(private readonly runService: RunService) {}

  @Get()
  find() {
    return this.runService.run();
  }
}
