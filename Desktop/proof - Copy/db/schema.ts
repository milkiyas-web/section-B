import { pgTable, serial, text, varchar, integer, boolean, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { timestamp } from "drizzle-orm/mysql-core";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: text("description"),
  url: text("url"),
  userId: varchar("user_id"),
});

export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  projectId: uuid('projectId'),
  customerName: text("customerName"),
  customerEmail: varchar("customerEmail"),
  review: text("review"),
})
