import { Module } from '@nestjs/common';
import { AutosService } from './autos.service';
import { AutosController } from './autos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auto } from './entities/auto.entity';
import { Distribuidor } from 'src/distribuidor/entities/distribuidor.entity';
@Module({
  imports:[
    TypeOrmModule.forFeature([Auto,Distribuidor])
  ],
  controllers: [AutosController],
  providers: [AutosService]
})
export class AutosModule {}
