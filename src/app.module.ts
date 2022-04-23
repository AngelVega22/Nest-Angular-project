import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CursosModule } from './cursos/cursos.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [CursosModule, MongooseModule.forRoot('mongodb://localhost/cursos-nest', {
    useNewUrlParser: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
