interface Test {
  url: string;
  name: string;
  year: number;
  semester: number;
}

interface TestParams extends Test {
  teacherId: number;
  categoryId: number;
  disciplineId: number;
}

interface FullTest extends Test {
  id: number;
  category: any;
  teacher: any;
  discipline: any;
}

export {
  Test,
  TestParams,
  FullTest,
};
