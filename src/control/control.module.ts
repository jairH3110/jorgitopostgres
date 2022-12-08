import { Module } from '@nestjs/common';
import { ControlService } from './control.service';
import { ControlController } from './control.controller';
import { Control } from './entities/control.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([Control])
  ],
  controllers: [ControlController],
  providers: [ControlService]
})
export class ControlModule {}
