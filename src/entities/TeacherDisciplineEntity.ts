import {
  Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn,
} from 'typeorm';
import TeacherEntity from './TeacherEntity';

@Entity('teachers_disciplines')
class TeacherDisciplineEntity {
  @PrimaryGeneratedColumn()
    id: number;

  @Column({ name: 'teacher_id' })
    teacherId: number;

  @Column({ name: 'discipline_id' })
    disciplineId: number;

  @ManyToOne(() => TeacherEntity, (teacher) => teacher.id)
  @JoinColumn({ name: 'teacher_id' })
    teacher: TeacherEntity;
}

export default TeacherDisciplineEntity;
