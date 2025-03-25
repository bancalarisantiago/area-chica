import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    passwordHash: v.string(), // Store hashed passwords
    phone: v.optional(v.string()),
    role: v.union(v.literal('owner'), v.literal('admin'), v.literal('player')),
    avatarUrl: v.optional(v.string()),
  }).index('by_email', ['email']),

  fields: defineTable({
    name: v.string(),
    sportType: v.union(v.literal('soccer'), v.literal('paddle')),
    location: v.string(),
    pricePerHour: v.number(),
    ownerId: v.id('users'),
  }).index('by_owner', ['ownerId']),

  bookings: defineTable({
    userId: v.id('users'),
    fieldId: v.id('fields'),
    date: v.string(), // Store as ISO 8601 date string
    timeSlot: v.string(), // Example: "18:00-19:00"
    status: v.union(
      v.literal('pending'),
      v.literal('confirmed'),
      v.literal('canceled'),
      v.literal('completed'),
    ),
    paymentStatus: v.union(v.literal('pending'), v.literal('paid'), v.literal('refunded')),
  })
    .index('by_user', ['userId'])
    .index('by_field', ['fieldId']),

  payments: defineTable({
    bookingId: v.id('bookings'),
    userId: v.id('users'),
    amount: v.number(),
    method: v.union(v.literal('mercadopago'), v.literal('bank_transfer')),
    status: v.union(v.literal('pending'), v.literal('approved'), v.literal('rejected')),
  })
    .index('by_user', ['userId'])
    .index('by_booking', ['bookingId']),

  reviews: defineTable({
    userId: v.id('users'),
    fieldId: v.id('fields'),
    rating: v.number(),
    comment: v.optional(v.string()),
  }).index('by_field', ['fieldId']),

  notifications: defineTable({
    userId: v.id('users'),
    message: v.string(),
    type: v.union(
      v.literal('booking_confirmation'),
      v.literal('reminder'),
      v.literal('cancellation'),
    ),
    sentAt: v.number(),
    read: v.boolean(),
  }).index('by_user', ['userId']),
});
