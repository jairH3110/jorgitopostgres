import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { DistribuidorService } from './distribuidor.service';
import { CreateDistribuidorDto } from './dto/create-distribuidor.dto';
import { UpdateDistribuidorDto } from './dto/update-distribuidor.dto';

@Controller('distribuidor')
export class DistribuidorController {
  constructor(private readonly distribuidorService: DistribuidorService) {}

  @Post()
  create(@Body()  createDistribuidorDto: CreateDistribuidorDto) {
    return this.distribuidorService.create(createDistribuidorDto);
  }

  @Get()
  findAll() {
    return this.distribuidorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.distribuidorService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateDistribuidorDto:UpdateDistribuidorDto) {
    return this.distribuidorService.update(+id, updateDistribuidorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.distribuidorService.remove(+id);
  }
}