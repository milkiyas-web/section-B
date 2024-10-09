ALTER TABLE "reviews" RENAME COLUMN "projectId" TO "project_id";--> statement-breakpoint
ALTER TABLE "reviews" RENAME COLUMN "customerName" TO "customer_name";--> statement-breakpoint
ALTER TABLE "reviews" RENAME COLUMN "customerEmail" TO "customer_email";--> statement-breakpoint
ALTER TABLE "reviews" ALTER COLUMN "project_id" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "reviews" ALTER COLUMN "customer_email" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "reviews" DROP COLUMN IF EXISTS "rating";