import { PartialType } from '@nestjs/mapped-types';
import { CreateControlDto } from './create-control.dto';
import { ValidationMessages } from 'src/helpers/validation.messages';
import { IsDate, IsDateString, IsEmail, IsNumber, IsString, Length, MaxLength, Min } from "class-validator";
export class UpdateControlDto extends PartialType(CreateControlDto) {



@MaxLength(80,{message: ValidationMessages.DIMENSIONES})
@IsString({message: ValidationMessages.ES_CADENA + '$property'})
folio:string

@MaxLength(10,{message: ValidationMessages.DIMENSIONES})
@IsString({message: ValidationMessages.ES_CADENA + '$property'})
placas:string

@MaxLength(80,{message: ValidationMessages.DIMENSIONES})
@IsDate({message: ValidationMessages.ES_CADENA + '$property'})
fechasalida:string


@MaxLength(80,{message: ValidationMessages.DIMENSIONES})
@IsDate({message: ValidationMessages.ES_CADENA + '$property'})
fechaentrada:string

@MaxLength(80,{message: ValidationMessages.DIMENSIONES})
@IsString({message: ValidationMessages.ES_CADENA + '$property'})
nombrecliente:string

@MaxLength(80,{message: ValidationMessages.DIMENSIONES})
@IsString({message: ValidationMessages.ES_CADENA + '$property'})
telefono:string

@MaxLength(80,{message: ValidationMessages.DIMENSIONES})
@IsEmail()
correo:string
}
