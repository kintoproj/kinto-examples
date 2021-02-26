CREATE TABLE "public"."todo"("id" serial NOT NULL, "task" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "status" text NOT NULL DEFAULT 'ACTIVE', PRIMARY KEY ("id") , UNIQUE ("id"));
