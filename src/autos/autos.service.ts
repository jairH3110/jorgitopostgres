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



 async create(body :any) {
    const distribuidor = new Distribuidor();
    distribuidor.nombrecontacto = body.distribuidor;
    distribuidor.nombrecomercial = body.nombrecomercial;
    distribuidor.direccion = body.direccion;
    distribuidor.telefono = body.telefono;
    distribuidor.ciudad = body.ciudad ;
    distribuidor.nombrecontacto = body.nombrecontacto;

    const newDistribuidor = await this.disRepo.save(distribuidor);
    
    const autos = new Auto();
    autos.idauto = body.idauto; 
    autos.placas = body.placas; 
    autos.marcha = body.marcha
    autos.modelo = body.modelo; 
    autos.color = body.color; 
    autos.fecha = body.fecha; 
    autos.rentad = body.rentad; 
    autos.fkdistribuidor = newDistribuidor; 
        
    return this.autoRepo.save(autos);

  }

  findAll() {
    return this.autoRepo.find({relations: ['distribuidor']});
  }

  findOne(idauto: number) {
    return this.autoRepo.findOne({where:{idauto:idauto}});
  }

 async update(idauto: number, body:any) {
   
  const auto = await this.autoRepo.findOne({where:{idauto:idauto}});
  
  this.autoRepo.merge(auto,body);
  return this.autoRepo.save(auto);

}

 async remove(idauto: number) {
   await this.autoRepo.delete(idauto);  
  return true;
  }
}