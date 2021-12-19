import joi from 'joi';

const findTeachersByDisciplineId = joi.object({
  disciplineId: joi.number().required(),
});

export {
  findTeachersByDisciplineId,
};
