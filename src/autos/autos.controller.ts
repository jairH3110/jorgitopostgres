import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UpdateControlDto } from 'src/control/dto/update-control.dto';
import { AutosService } from './autos.service';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';

@Controller('autos')
export class AutosController {
  constructor(private readonly autosService: AutosService) {}

  @Post()
  create(@Body() createAutoDto:CreateAutoDto) {
    return this.autosService.create(createAutoDto);
  }

  @Get()
  findAll() {
    return this.autosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateAutoDto:UpdateAutoDto) {
    return this.autosService.update(+id, updateAutoDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autosService.remove(+id);
  }
}
