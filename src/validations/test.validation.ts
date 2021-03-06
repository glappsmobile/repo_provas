import joi from 'joi';

const createTest = joi.object({
  url: joi.string().required(),
  name: joi.string().min(0).allow('').allow(null),
  year: joi.number().required(),
  semester: joi.number().required(),
  categoryId: joi.number().required(),
  teacherId: joi.number().required(),
  disciplineId: joi.number().required(),
});

const findTestsByDisciplineId = joi.object({
  disciplineId: joi.number().required(),
});

const findTestsByTeacherId = joi.object({
  teacherId: joi.number().required(),
});

export {
  createTest,
  findTestsByDisciplineId,
  findTestsByTeacherId,
};
