import { Injectable } from '@nestjs/common';
import { Movie } from './movies.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(Movie)
        private movieRepository : Repository<Movie>,
    ){}

    getMovies() : Promise<Movie[]> {
        return this.movieRepository.find()
    }
}
