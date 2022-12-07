import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Control {

@Column()
@PrimaryGeneratedColumn()
idcontrol:number

@Column()
folio:string

@Column()
placas:string

@Column()
fechasalida:string

@Column()
fechaentrada:string

@Column()
nombrecliente:string

@Column()
telefono:string

@Column()
correo:string


}