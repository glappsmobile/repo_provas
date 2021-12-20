INSERT INTO "categories" ("id", "name") VALUES
  (1, 'P1'),
  (2, 'P2'),
  (3, 'P3'),
  (4, '2ch'),
  (5, 'Outras');

INSERT INTO "disciplines" ("id", "name") VALUES
  (1, 'Cálculo diferencial e integral I'),
  (2, 'Cálculo diferencial e integral II'),
  (3, 'Cálculo diferencial e integral III'),
  (4, 'Cálculo diferencial e integral IV'),
  (5, 'Física I'),
  (6, 'Física II');

INSERT INTO "teachers" ("id", "name") VALUES
  (1, 'André Soares Leopoldo'),
  (2, 'Danilo Sales Bocalini'),
  (3, 'Felipe Quintão de Almeida'),
  (4, 'Ivan Marcelo Gomes'),
  (5, 'Mauricio dos Santos de Oliveira'),
  (6, 'Omar Schneider'),
  (7, 'Ana Carolina Capellini Rigoni'),
  (8, 'Ana Paula Lima Leopoldo'),
  (9, 'Liana Abrão Romera'),
  (10, 'Luciana Carletti'),
  (11, 'Mariana Zuaneti Martins'),
  (12, 'Natalia Madalena Rinaldi');
  
INSERT INTO "teachers_disciplines" ("id", "teacher_id", "discipline_id") VALUES
  (1, 1, 1),
  (2, 1, 2),
  (3, 1, 3),
  (4, 2, 1),
  (5, 3, 1),
  (6, 3, 2),
  (7, 4, 3),
  (8, 4, 4),
  (9, 5, 4),
  (10, 6, 1),
  (11, 6, 2),
  (12, 6, 3),
  (13, 6, 4),
  (14, 7, 5),
  (15, 8, 5),
  (16, 9, 5),
  (17, 9, 6),
  (18, 10, 5),
  (19, 10, 6),
  (20, 11, 6),
  (21, 12, 6);