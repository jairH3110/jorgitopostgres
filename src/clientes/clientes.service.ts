import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';



@Injectable()
export class ClientesService {

  constructor(
    @InjectRepository(Cliente) private clienteRepo: Repository<Cliente>
  ){}





  create(body: any) {
    const newCliente= new Cliente();
    newCliente.nombre=body.nombre;
    newCliente.direccion=body.direccion;
    newCliente.telefono=body.telefono;
    newCliente.correo=body.correo;

     return this.clienteRepo.save(newCliente);   
// tutorial minuto 43 segundo 51

  }

  findAll() {
   return this.clienteRepo.find();
  }

  findOne(id: number) {
    return this.clienteRepo.findOne({where:{id:id}});
  }

  async update(id: number, body: any) {
    const cliente= await this.clienteRepo.findOne({where:{id:id}});

    this.clienteRepo.merge(cliente, body);
    return this.clienteRepo.save(cliente);

  }

 async remove(id: number) {
   await this.clienteRepo.delete(id);
    return true;
  }
}
