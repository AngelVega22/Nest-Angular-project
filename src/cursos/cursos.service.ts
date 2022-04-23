import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Curso } from './interfaces/cursos.interface';
import { CrearCursoDTO } from './dto/cursos.dto';

@Injectable()
export class CursosService {
    constructor(@InjectModel('Curso') private readonly cursoModel: Model<Curso>) { }

    // Get all cursos
    async getCursos(): Promise<Curso[]> {

        const cursos = await this.cursoModel.find();
        return cursos;
    }

    // Get a single cursos
    async getCurso(cursoID: string): Promise<Curso> {
        const curso = await this.cursoModel.findById(cursoID);
        return curso;
    }

    // Post a single curso
    async createCurso(crearCursoDTO: CrearCursoDTO): Promise<Curso> {
        const newCurso = new this.cursoModel(crearCursoDTO);
        return newCurso.save();
    }

    // Delete curso
    async deleteCurso(cursoID: any): Promise<Curso> {
        const deletedCurso = await this.cursoModel.findOneAndDelete(cursoID);
        return deletedCurso;
    }

    // Put a single curso
    async updateCurso(cursoID: string, crearCursoDTO: CrearCursoDTO): Promise<Curso> {
        const updatedCurso = await this.cursoModel
            .findByIdAndUpdate(cursoID, crearCursoDTO, { new: true });
        return updatedCurso;
    }
}
