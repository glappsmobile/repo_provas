import {
  Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne,
} from 'typeorm';
import { FullTest } from '../protocols/Test';
import CategoryEntity from './CategoryEntity';
import TeacherEntity from './TeacherEntity';
import DisciplineEntity from './DisciplineEntity';

@Entity('tests')
class TestEntity {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    url: string;

  @Column()
    name: string;

  @Column()
    year: number;

  @Column()
    semester: number;

  @Column({ name: 'category_id' })
    categoryId: number;

  @Column({ name: 'teacher_id' })
    teacherId: number;

  @Column({ name: 'discipline_id' })
    disciplineId: number;

  @OneToOne(() => CategoryEntity, (category) => category.id, { eager: true })
  @JoinColumn({ name: 'category_id' })
    category: CategoryEntity;

  @ManyToOne(() => TeacherEntity, (teacher) => teacher.id, { eager: true })
  @JoinColumn({ name: 'teacher_id' })
    teacher: TeacherEntity;

  @ManyToOne(() => DisciplineEntity, (discipline) => discipline.id, { eager: true })
  @JoinColumn({ name: 'discipline_id' })
    discipline: DisciplineEntity;

  getTest(): FullTest {
    return {
      id: this.id,
      url: this.url,
      name: this.name,
      year: this.year,
      semester: this.semester,
      category: this.category,
      teacher: this.teacher,
      discipline: this.discipline,
    };
  }
}

export default TestEntity;
