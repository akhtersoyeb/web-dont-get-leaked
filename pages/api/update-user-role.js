import { getAuth, createClerkClient } from "@clerk/nextjs/server"

export default async function handler(req, res) {
  const { userId } = getAuth(req)

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  const { role, paymentId } = JSON.parse(req.body)

  if (!role || !paymentId) {
    res.status(500).json({ error: "role and paymentId required." })
  }

  try {
    const clerkClient = createClerkClient({
      secretKey: process.env.CLERK_SECRET_KEY,
    })
    const response = await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        role: `${role}`,
      },
      privateMetadata: {
        paymentId: `${paymentId}`,
      },
    })
    res.status(200).json({ data: response })
  } catch (error) {
    console.error("Failed to update clerk user: ", error)
    res.status(500).json({ error: error.message })
  }
}
