import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("movies")
export class Movie {
  @PrimaryGeneratedColumn()
  id : number;

  @Column()
  title : String;

  @Column()
  description : String;
}