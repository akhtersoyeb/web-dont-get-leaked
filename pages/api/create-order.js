import Razorpay from "razorpay"
import { getAuth } from "@clerk/nextjs/server"

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
})

export default async function handler(req, res) {
  const { userId } = getAuth(req)

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" })
  }

  try {
    const order = await razorpay.orders.create({
      amount: Number(process.env.NEXT_PUBLIC_LIFETIME_BASIC_PRICE),
      currency: process.env.NEXT_PUBLIC_PAYMENT_CURRENCY,
      receipt: `receipt_${Math.random().toString(36).substring(7)}`,
    })
    res.status(200).json({
      data: order,
    })
  } catch (error) {
    console.error("Error creating order: ", error)
    res.status(500).json({ error: error.message })
  }
}
