import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BoolService } from './bool.service';
import { CreateBoolDto } from './dto/create-bool.dto';
import { UpdateBoolDto } from './dto/update-bool.dto';

@Controller('bool')
export class BoolController {
  constructor(private readonly boolService: BoolService) {}

  @Post()
  create(@Body() createBoolDto: CreateBoolDto) {
    return this.boolService.create(createBoolDto);
  }

  @Get()
  findAll() { 
    return this.boolService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boolService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBoolDto: UpdateBoolDto) {
    return this.boolService.update(id, updateBoolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boolService.remove(id);
  }
}
