import {Entity, Column, PrimaryGeneratedColumn,OneToOne,JoinColumn, ManyToMany, OneToMany} from 'typeorm';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Distribuidor } from 'src/distribuidor/entities/distribuidor.entity';

@Entity()
export class Auto {
    
   
    
    @Column()
    @PrimaryGeneratedColumn()
    idauto:number
    
    @Column()
    placas:string
    
    @Column()
    marcha:string 
    
    @Column()
    modelo:string
    
    @Column()
    color:string

    @Column()
    fecha:string

    @Column()
    rentad:number
   

    @Column()
    distribuidor:number
    
       
}