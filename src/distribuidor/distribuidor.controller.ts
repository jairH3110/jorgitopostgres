import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DistribuidorService } from './distribuidor.service';
import { CreateDistribuidorDto } from './dto/create-distribuidor.dto';
import { UpdateDistribuidorDto } from './dto/update-distribuidor.dto';

@Controller('distribuidor')
export class DistribuidorController {
  constructor(private readonly distribuidorService: DistribuidorService) {}

  @Post()
  create(@Body() body: any) {
    return this.distribuidorService.create(body);
  }

  @Get()
  findAll() {
    return this.distribuidorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.distribuidorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.distribuidorService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.distribuidorService.remove(+id);
  }
}