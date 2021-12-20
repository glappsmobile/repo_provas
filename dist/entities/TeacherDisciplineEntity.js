var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, } from 'typeorm';
import TeacherEntity from './TeacherEntity';
let TeacherDisciplineEntity = class TeacherDisciplineEntity {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], TeacherDisciplineEntity.prototype, "id", void 0);
__decorate([
    Column({ name: 'teacher_id' }),
    __metadata("design:type", Number)
], TeacherDisciplineEntity.prototype, "teacherId", void 0);
__decorate([
    Column({ name: 'discipline_id' }),
    __metadata("design:type", Number)
], TeacherDisciplineEntity.prototype, "disciplineId", void 0);
__decorate([
    ManyToOne(() => TeacherEntity, (teacher) => teacher.id),
    JoinColumn({ name: 'teacher_id' }),
    __metadata("design:type", TeacherEntity)
], TeacherDisciplineEntity.prototype, "teacher", void 0);
TeacherDisciplineEntity = __decorate([
    Entity('teachers_disciplines')
], TeacherDisciplineEntity);
export default TeacherDisciplineEntity;
