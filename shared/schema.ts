import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Website templates schema
export const templates = pgTable("templates", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  thumbnail: text("thumbnail"),
  content: jsonb("content").notNull(), // GrapesJS JSON data
  userId: integer("user_id").references(() => users.id),
  isPublic: boolean("is_public").default(false),
  createdAt: text("created_at").notNull(), // ISO date string
});

export const insertTemplateSchema = createInsertSchema(templates).pick({
  name: true,
  description: true,
  thumbnail: true,
  content: true,
  userId: true,
  isPublic: true,
});

export type InsertTemplate = z.infer<typeof insertTemplateSchema>;
export type Template = typeof templates.$inferSelect;

// Website projects schema
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  content: jsonb("content").notNull(), // GrapesJS JSON data
  userId: integer("user_id").references(() => users.id),
  lastModified: text("last_modified").notNull(), // ISO date string
});

export const insertProjectSchema = createInsertSchema(projects).pick({
  name: true,
  description: true,
  content: true,
  userId: true,
});

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;
