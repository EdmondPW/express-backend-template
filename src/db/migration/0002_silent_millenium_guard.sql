CREATE TABLE "jwks" (
	"id" text PRIMARY KEY NOT NULL,
	"public_key" text NOT NULL,
	"private_key" text NOT NULL,
	"created_at" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "content" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "content" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "owner" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "published" SET NOT NULL;