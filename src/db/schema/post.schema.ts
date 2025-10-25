import {
  pgTable,
  uuid,
  text,
  boolean,
  varchar,
  timestamp,
} from "drizzle-orm/pg-core";
import { user } from "./auth.schema";

//this is just for testing purpose
export const Posts = pgTable("posts", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content").default("").notNull(),
  owner: varchar("owner")
    .references(() => user.id)
    .notNull(),
  published: boolean("published").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
