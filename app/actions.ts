"use server"

import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"
import { headers } from "next/headers"

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || "",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || "",
})

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "1 h"),
})

const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL

export async function submitContactForm(formData: FormData) {
  const headersList = headers()
  const ip = headersList.get("x-forwarded-for") || "127.0.0.1"

  const { success } = await ratelimit.limit(ip)

  if (!success) {
    return { error: "Too many requests. Please try again later." }
  }

  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  if (!name || !email || !message) {
    return { error: "All fields are required" }
  }

  try {
    await fetch(WEBHOOK_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: null,
        embeds: [
          {
            title: "New Contact Form Submission",
            fields: [
              { name: "Name", value: name.toString(), inline: true },
              { name: "Email", value: email.toString(), inline: true },
              { name: "Message", value: message.toString() },
            ],
            color: 5793266,
          },
        ],
      }),
    })
    return { success: true }
  } catch (error) {
    return { error: "Failed to send message" }
  }
}

