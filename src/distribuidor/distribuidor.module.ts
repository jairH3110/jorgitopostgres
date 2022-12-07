import { Module } from '@nestjs/common';
import { DistribuidorService } from './distribuidor.service';
import { DistribuidorController } from './distribuidor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Distribuidor } from './entities/distribuidor.entity';
@Module({
  imports:[
    TypeOrmModule.forFeature([Distribuidor])
  ],
  controllers: [DistribuidorController],
  providers: [DistribuidorService]
})
export class DistribuidorModule {}
