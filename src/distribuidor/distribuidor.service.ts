import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDistribuidorDto } from './dto/create-distribuidor.dto';
import { UpdateDistribuidorDto } from './dto/update-distribuidor.dto';
import { Distribuidor } from './entities/distribuidor.entity';

@Injectable()
export class DistribuidorService {


 constructor(
  @InjectRepository(Distribuidor) private distriRepo: Repository<Distribuidor>
 ){}

  create(createDistribuidorDto: CreateDistribuidorDto) {
    const newdis= this.distriRepo.create(createDistribuidorDto);
    return this.distriRepo.save(newdis);
  }

  findAll() {
    return this.distriRepo.find();
  }

  findOne(idistribuidor: number) {
    return this.distriRepo.findOne({where:{idistribuidor:idistribuidor}});
  }

 async update(idistribuidor: number, createDistribuidorDto: CreateDistribuidorDto) {
  const distrin = await this.distriRepo.findOne({where:{idistribuidor:idistribuidor}})  ;
  this.distriRepo.merge(distrin,createDistribuidorDto);
  return this.distriRepo.save(distrin) ;
  }

 async remove(idistribuidor: number) {
  await this.distriRepo.delete(idistribuidor);  
  return true;
  }
}
