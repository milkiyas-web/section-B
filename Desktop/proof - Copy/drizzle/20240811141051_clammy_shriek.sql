CREATE TABLE IF NOT EXISTS "reviews" (
	"id" serial PRIMARY KEY NOT NULL,
	"projectId" uuid,
	"customerName" text,
	"customerEmail" varchar,
	"review" text,
	"rating" integer
);
--> statement-breakpoint
ALTER TABLE "projects" ADD COLUMN "user_id" varchar;