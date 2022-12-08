import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';
import { Auto } from './entities/auto.entity';
import { Distribuidor } from 'src/distribuidor/entities/distribuidor.entity';

@Injectable()
export class AutosService {
 constructor(
  @InjectRepository(Auto) private autoRepo: Repository<Auto>,
  @InjectRepository(Distribuidor) private disRepo: Repository<Distribuidor>,
){}



 async create(createAutoDto :CreateAutoDto) {
   
  const autos = this.autoRepo.create(createAutoDto);
        
    return this.autoRepo.save(autos);

  }

  findAll() {
    return this.autoRepo.find();
  }

  findOne(idauto: number) {
    return this.autoRepo.findOne({where:{idauto:idauto}});
  }

 async update(idauto: number, updateAutoDto:UpdateAutoDto) {
   
  const auto = await this.autoRepo.findOne({where:{idauto:idauto}});
  
  this.autoRepo.merge(auto,updateAutoDto);
  return this.autoRepo.save(auto);

}

 async remove(idauto: number) {
   await this.autoRepo.delete(idauto);  
  return true;
  }
}