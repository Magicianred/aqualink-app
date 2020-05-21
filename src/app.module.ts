import { Module } from '@nestjs/common';
import { ReefsModule } from './reefs/reefs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ReefsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
