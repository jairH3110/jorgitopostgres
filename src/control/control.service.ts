import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateControlDto } from './dto/create-control.dto';
import { UpdateControlDto } from './dto/update-control.dto';
import { Control } from './entities/control.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class ControlService {
  constructor(
    @InjectRepository(Control) private controlrepo:Repository<Control>
  ){}
  create(createControlDto: CreateControlDto) {
    
    const newcontrol= this.controlrepo.create(createControlDto);
    return this.controlrepo.save(newcontrol);
  }

  findAll() {
    return this.controlrepo.find();
  }

  findOne(idcontrol: number) {
    return this.controlrepo.findOne({where:{idcontrol:idcontrol}}) ;
  }

 async update(idcontrol: number, createControlDto: CreateControlDto) {
const controln = await this.controlrepo.findOne({where:{idcontrol:idcontrol}});
this.controlrepo.merge(controln,createControlDto);

    return this.controlrepo.save(controln);
  }

 async remove(idcontrol: number) {
    return await this.controlrepo.delete(idcontrol);
  }
}
