import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@Entity()
export class Cliente {

@Column()
@PrimaryGeneratedColumn()
id:number

@Column()
nombre: string

@Column()
direccion:string 

@Column({length:10})
telefono:string

@Column({length:40})
@IsEmail()
correo:string

}
