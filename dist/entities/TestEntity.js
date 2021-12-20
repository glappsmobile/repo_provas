var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, } from 'typeorm';
import CategoryEntity from './CategoryEntity';
import TeacherEntity from './TeacherEntity';
import DisciplineEntity from './DisciplineEntity';
let TestEntity = class TestEntity {
    getTest() {
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
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], TestEntity.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], TestEntity.prototype, "url", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], TestEntity.prototype, "name", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], TestEntity.prototype, "year", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], TestEntity.prototype, "semester", void 0);
__decorate([
    Column({ name: 'category_id' }),
    __metadata("design:type", Number)
], TestEntity.prototype, "categoryId", void 0);
__decorate([
    Column({ name: 'teacher_id' }),
    __metadata("design:type", Number)
], TestEntity.prototype, "teacherId", void 0);
__decorate([
    Column({ name: 'discipline_id' }),
    __metadata("design:type", Number)
], TestEntity.prototype, "disciplineId", void 0);
__decorate([
    OneToOne(() => CategoryEntity, (category) => category.id, { eager: true }),
    JoinColumn({ name: 'category_id' }),
    __metadata("design:type", CategoryEntity)
], TestEntity.prototype, "category", void 0);
__decorate([
    ManyToOne(() => TeacherEntity, (teacher) => teacher.id, { eager: true }),
    JoinColumn({ name: 'teacher_id' }),
    __metadata("design:type", TeacherEntity)
], TestEntity.prototype, "teacher", void 0);
__decorate([
    ManyToOne(() => DisciplineEntity, (discipline) => discipline.id, { eager: true }),
    JoinColumn({ name: 'discipline_id' }),
    __metadata("design:type", DisciplineEntity)
], TestEntity.prototype, "discipline", void 0);
TestEntity = __decorate([
    Entity('tests')
], TestEntity);
export default TestEntity;
