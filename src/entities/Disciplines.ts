import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('disciplines')
class Disciplines {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;
}

export default Disciplines;
