import {Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn} from 'typeorm';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Auto } from 'src/autos/entities/auto.entity';
@Entity()
export class Distribuidor {


@Column()
@PrimaryGeneratedColumn()
idistribuidor:number
    
@Column()
nombrecomercial:string
    
@Column()
direccion:string 
    
@Column()
telefono:string
    
@Column()
ciudad:string
    
@Column()
nombrecontacto:string




}
