import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';
import { ValidationMessages } from 'src/helpers/validation.messages';
import { IsNumber, IsString, Length, MaxLength, Min } from "class-validator";
export class UpdateClienteDto extends PartialType(CreateClienteDto) {

    @MaxLength(10,{message: ValidationMessages.DIMENSIONES})
    @IsNumber({allowNaN:false},{message: ValidationMessages.ES_numero})
    id:number
    
    @MaxLength(80,{message: ValidationMessages.DIMENSIONES})
    @IsString({message: ValidationMessages.ES_CADENA + '$property'})
    nombre: string
    
    @MaxLength(50,{message: ValidationMessages.DIMENSIONES})
    @IsString({message: ValidationMessages.ES_CADENA + '$property'})
    direccion:string 
    
    @MaxLength(10,{message: ValidationMessages.DIMENSIONES})
    @IsString({message: ValidationMessages.ES_CADENA + '$property'})
    telefono:string
    
    @MaxLength(25,{message: ValidationMessages.DIMENSIONES})
    @IsString({message: ValidationMessages.ES_CADENA + '$property'})
    correo:string



}
