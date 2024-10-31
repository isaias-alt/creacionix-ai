import { pgTable, serial, varchar, text } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aiOutput', {
  id: serial('id').primaryKey(),
  formData: varchar('formData').notNull(),
  aiResponse: text('aiResponse'),
  templateSlug: text('templateSlug').notNull(),
  createdBy: varchar('createdBy').notNull(),
  createdAt: varchar('createdAt')
})