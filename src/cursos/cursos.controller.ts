import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import { CrearCursoDTO } from './dto/cursos.dto';

import { CursosService } from './cursos.service';

@Controller('cursos')
export class CursosController {


    constructor(private cursosService: CursosService) {

    }

    @Post('/crear')
    async createPost(@Res() res, @Body() crearCursoDTO: CrearCursoDTO) {
        // console.log(crearCursoDTO)
        const curso = await this.cursosService.createCurso(crearCursoDTO)
        return res.status(HttpStatus.OK).json({
            message: 'curso creado recibido',
            curso: curso
        })
    }

    // Get Products /product
    // @Get('/list')
    @Get('/')
    async getCursos(@Res() res) {
        const cursos = await this.cursosService.getCursos();
        return res.status(HttpStatus.OK).json(cursos);
    }

    // GET single product: /product/5c9d46100e2e5c44c444b2d1
    @Get('/:cursoID')
    async getCurso(@Res() res, @Param('cursoID') cursoID) {
        const curso = await this.cursosService.getCurso(cursoID);
        if (!curso) throw new NotFoundException('Curso does not exist!');
        return res.status(HttpStatus.OK).json(curso);
    }

    // Delete Product: /delete?productID=5c9d45e705ea4843c8d0e8f7
    @Delete('/delete')
    async deleteCurso(@Res() res, @Query('cursoID') cursoID) {
        const cursoDeleted = await this.cursosService.deleteCurso(cursoID);
        if (!cursoDeleted) throw new NotFoundException('Curso does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'curso Deleted Successfully',
            cursoDeleted
        });
    }

    // Update Product: /update?productID=5c9d45e705ea4843c8d0e8f7
    @Put('/update')
    async updateCurso(@Res() res, @Body() crearCursoDTO: CrearCursoDTO, @Query('cursoID') cursoID) {
        const updatedCurso = await this.cursosService.updateCurso(cursoID, crearCursoDTO);
        if (!updatedCurso) throw new NotFoundException('Curso does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Curso Updated Successfully',
            updatedCurso
        });
    }
}
