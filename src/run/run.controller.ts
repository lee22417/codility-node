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
import { CreateRunDto } from './dto/create-run.dto';
import { UpdateRunDto } from './dto/update-run.dto';

@Controller('run')
export class RunController {
  constructor(private readonly runService: RunService) {}

  @Get()
  find() {
    return this.runService.findAll();
  }
}
