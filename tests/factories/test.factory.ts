import { TestParams } from '../../src/protocols/Test';

const createBody = () => {
  const newExam: TestParams = {
    url: 'https://arquivo.pciconcursos.com.br/provas/10305450/805c1b260f85/prova1_comum.pdf',
    year: 2021,
    semester: 2,
    name: '2021.2',
    teacherId: 1,
    categoryId: 1,
    disciplineId: 1,
  };

  return newExam;
};

export {
  createBody,
};
