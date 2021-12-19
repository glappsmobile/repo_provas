import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('teachers')
class Teacher {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;
}

export default Teacher;
