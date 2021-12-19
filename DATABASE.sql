CREATE TABLE "teachers" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "teachers_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "tests" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"year" int NOT NULL,
	"semestrer" smallint NOT NULL,
	"teacher_id" integer NOT NULL,
	"discipline_id" integer NOT NULL,
	"category_id" integer NOT NULL,
	"createdAt" timestamp with time zone NOT NULL DEFAULT now(),
	CONSTRAINT "tests_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "disciplines" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "disciplines_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "categories" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "categories_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "teachers_disciplines" (
	"id" serial NOT NULL,
	"teacher_id" integer NOT NULL,
	"discipline_id" integer NOT NULL,
	CONSTRAINT "teachers_disciplines_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "tests" ADD CONSTRAINT "tests_fk0" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id");
ALTER TABLE "tests" ADD CONSTRAINT "tests_fk1" FOREIGN KEY ("discipline_id") REFERENCES "disciplines"("id");
ALTER TABLE "tests" ADD CONSTRAINT "tests_fk2" FOREIGN KEY ("category_id") REFERENCES "categories"("id");

ALTER TABLE "teachers_disciplines" ADD CONSTRAINT "teachers_disciplines_fk0" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id");
ALTER TABLE "teachers_disciplines" ADD CONSTRAINT "teachers_disciplines_fk1" FOREIGN KEY ("discipline_id") REFERENCES "disciplines"("id");