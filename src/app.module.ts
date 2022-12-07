import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AutosModule } from './autos/autos.module';
import { DistribuidorModule } from './distribuidor/distribuidor.module';
import { ControlModule } from './control/control.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '3110',
    database: 'nueva',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),ClientesModule, AutosModule, DistribuidorModule, ControlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
