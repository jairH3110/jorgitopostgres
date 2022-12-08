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





  create(createClienteDto:  CreateClienteDto) {
    const newCliente= new Cliente();
    newCliente.nombre=createClienteDto.nombre;
    newCliente.direccion=createClienteDto.direccion;
    newCliente.telefono=createClienteDto.telefono;
    newCliente.correo=createClienteDto.correo;

     return this.clienteRepo.save(newCliente);   
// tutorial minuto 43 segundo 51

  }

  findAll() {
   return this.clienteRepo.find();
  }

  findOne(id: number) {
    return this.clienteRepo.findOne({where:{id:id}});
  }

  async update(id: number, createClienteDto:  CreateClienteDto) {
    const cliente= await this.clienteRepo.findOne({where:{id:id}});

    this.clienteRepo.merge(cliente, createClienteDto);
    return this.clienteRepo.save(cliente);

  }

 async remove(id: number) {
   await this.clienteRepo.delete(id);
    return true;
  }
}
