import { IsNumber, IsString, Length, MaxLength, Min } from "class-validator";
import { ValidationMessages } from "src/helpers/validation.messages";

export class CreateDistribuidorDto {

@MaxLength(80,{message: ValidationMessages.DIMENSIONES})
@IsString({message: ValidationMessages.ES_CADENA + '$property'}) 
idistribuidor:number


@MaxLength(80,{message: ValidationMessages.DIMENSIONES})
@IsString({message: ValidationMessages.ES_CADENA + '$property'})
nombrecomercial:string


@MaxLength(80,{message: ValidationMessages.DIMENSIONES})
@IsString({message: ValidationMessages.ES_CADENA + '$property'})
    direccion:string 
        

@MaxLength(80,{message: ValidationMessages.DIMENSIONES})
@IsString({message: ValidationMessages.ES_CADENA + '$property'})
telefono:string


@MaxLength(80,{message: ValidationMessages.DIMENSIONES})
@IsString({message: ValidationMessages.ES_CADENA + '$property'})
ciudad:string


@MaxLength(80,{message: ValidationMessages.DIMENSIONES})
@IsString({message: ValidationMessages.ES_CADENA + '$property'})
nombrecontacto:string
    


}
