import { query, mutation } from './_generated/server';
import { v } from 'convex/values';
export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('users').collect();
  },
});

export const createUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    passwordHash: v.string(), // Store hashed passwords, not raw passwords!
    phone: v.optional(v.string()),
    role: v.union(v.literal('owner'), v.literal('admin'), v.literal('player')),
    avatarUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query('users')
      .withIndex('by_email', (q) => q.eq('email', args.email))
      .first();

    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    const userId = await ctx.db.insert('users', {
      ...args,
    });

    return { userId };
  },
});
