import {
  pgTable,
  uuid,
  text,
  boolean,
  varchar,
  timestamp,
} from "drizzle-orm/pg-core";

//this is just for testing purpose
export const Posts = pgTable("posts", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content"),
  owner: varchar("owner").default(""),
  published: boolean("published").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});
