ALTER TABLE `sessions_table` RENAME COLUMN "status" TO "ongoing";--> statement-breakpoint
ALTER TABLE `sessions_table` ALTER COLUMN "ongoing" TO "ongoing" integer;