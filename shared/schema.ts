import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const zodiacProfiles = pgTable("zodiac_profiles", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  birthDate: text("birth_date").notNull(),
  zodiacSign: text("zodiac_sign").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const horoscopeReads = pgTable("horoscope_reads", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  zodiacSign: text("zodiac_sign").notNull(),
  date: text("date").notNull(),
  mode: text("mode").notNull(), // 'vibe' or 'roast'
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const compatibilityChecks = pgTable("compatibility_checks", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  sign1: text("sign1").notNull(),
  sign2: text("sign2").notNull(),
  score: integer("score").notNull(),
  verdict: text("verdict").notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const nftCollection = pgTable("nft_collection", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  tokenId: text("token_id"),
  nftType: text("nft_type").notNull(), // 'horoscope', 'sticker', 'compatibility'
  metadata: jsonb("metadata").notNull(),
  mintedAt: timestamp("minted_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertZodiacProfileSchema = createInsertSchema(zodiacProfiles).omit({
  id: true,
  createdAt: true,
  zodiacSign: true, // We calculate this on the server
}).extend({
  userId: z.number().optional(),
});

export const insertHoroscopeReadSchema = createInsertSchema(horoscopeReads).omit({
  id: true,
  createdAt: true,
});

export const insertCompatibilityCheckSchema = createInsertSchema(compatibilityChecks).omit({
  id: true,
  createdAt: true,
});

export const insertNftCollectionSchema = createInsertSchema(nftCollection).omit({
  id: true,
  mintedAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type ZodiacProfile = typeof zodiacProfiles.$inferSelect;
export type InsertZodiacProfile = z.infer<typeof insertZodiacProfileSchema>;
export type HoroscopeRead = typeof horoscopeReads.$inferSelect;
export type InsertHoroscopeRead = z.infer<typeof insertHoroscopeReadSchema>;
export type CompatibilityCheck = typeof compatibilityChecks.$inferSelect;
export type InsertCompatibilityCheck = z.infer<typeof insertCompatibilityCheckSchema>;
export type NftCollection = typeof nftCollection.$inferSelect;
export type InsertNftCollection = z.infer<typeof insertNftCollectionSchema>;
