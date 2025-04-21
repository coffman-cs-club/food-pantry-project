import { int, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";

// Read https://orm.drizzle.team/docs/sql-schema-declaration and https://orm.drizzle.team/docs/rqb for more details

export const users = sqliteTable("users_table", {
    id: int().primaryKey({ autoIncrement: true }),
    firstName: text("first_name").notNull(),
    lastName: int("last_name").notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
    sessions: many(sessions),
}));

export const sessions = sqliteTable("sessions_table", {
    id: int().primaryKey({ autoIncrement: true }),
    userId: int("user_id").notNull(),
    start: integer({ mode: "timestamp" }).notNull(),
    end: integer({ mode: "timestamp" }),
    ongoing: integer({ mode: "boolean" })
});

export const sessionsRelations = relations(sessions, ({ one }) => ({
    user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

