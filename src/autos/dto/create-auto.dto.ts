import { IsNumber, IsString, Length, MaxLength, Min } from "class-validator";
import { ValidationMessages } from "src/helpers/validation.messages";
export class CreateAutoDto {
    @MaxLength(10,{message: ValidationMessages.DIMENSIONES})
    @IsNumber({allowNaN:false},{message: ValidationMessages.ES_numero})
    idauto:number
   
   
    @MaxLength(25,{message: ValidationMessages.DIMENSIONES})
    @IsString({message: ValidationMessages.ES_CADENA + '$property'})
    placas:string
   
   
    @MaxLength(25,{message: ValidationMessages.DIMENSIONES})
    @IsString({message: ValidationMessages.ES_CADENA + '$property'})
    marcha:string 
   
   
    @MaxLength(15,{message: ValidationMessages.DIMENSIONES})
    @IsString({message: ValidationMessages.ES_CADENA + '$property'})
    modelo:string
   
   
    @MaxLength(10,{message: ValidationMessages.DIMENSIONES})
    @IsString({message: ValidationMessages.ES_CADENA + '$property'})
    color:string
   
    @MaxLength(10,{message: ValidationMessages.DIMENSIONES})
    @IsString({message: ValidationMessages.ES_CADENA + '$property'})
    fecha:string
    
    @Min(1,{message: ValidationMessages.DIMENSIONES})
    @IsNumber({allowNaN:false}, {message:ValidationMessages.ES_numero})
    rentad:number
    
    @Min(1,{message: ValidationMessages.DIMENSIONES})
    @IsNumber({allowNaN:false}, {message:ValidationMessages.ES_numero})
    distribuidor:number
}
