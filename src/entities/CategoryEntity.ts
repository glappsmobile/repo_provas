import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('categories')
class CategoriesEntity {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;
}

export default CategoriesEntity;
