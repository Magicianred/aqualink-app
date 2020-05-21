import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ReefDto } from './interfaces/reefs.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ReefRepository } from './reefs.repository';

@Controller('reefs')
export class ReefsController {
  constructor(
      @InjectRepository(ReefRepository) private readonly reefRepository: ReefRepository,
      ) {}
      
      @Post()
      create(@Body() reefDto: ReefDto) {
      return this.reefRepository.createReef(reefDto);
      }

  @Get()
  findAll() {
    return this.reefRepository.find();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reefRepository.findOneReef(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() reefDto: ReefDto) {
    return this.reefRepository.updateReef(id, reefDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reefRepository.removeReef(id);
  }
}
