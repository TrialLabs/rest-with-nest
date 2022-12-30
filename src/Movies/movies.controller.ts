import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService){}

  @Get()
  getMovies() : any {
      return this.movieService.getMovies();
  }

  @Post()
  create() : any {
      
  }

  @Put()
  update() : any {

  }

  @Delete()
  delete() : any {

  }
}
