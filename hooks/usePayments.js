import { loadRazorpay } from "@/lib/razorypay"
import { useAuth } from "@clerk/nextjs"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/router"

export default function usePayments() {
  const { userId } = useAuth()
  const router = useRouter()


  async function updateUserMetadata({ role = "", paymentId = "" }) {
    try {
      const res = await fetch("/api/update-user-role", {
        method: "POST",
        body: JSON.stringify({
          role: role,
          paymentId: paymentId,
        }),
      })
      const data = await res.json()
      if (res.status === 200) {
        return {
          success: true,
          data: data,
          message: "User role updated successfully.",
        }
      } else {
        throw new Error("Failed to update user.")
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: "Failed to create order",
      }
    }
  }

  const updateUserMetadataMutation = useMutation({
    mutationFn: updateUserMetadata,
    onSuccess: (res) => {
      if (router.pathname === "/payment") {
        router.reload()
      }
    },
    onError: (error) => {
    },
    onSettled: () => {
    },
  })

  // collect lifetime fee
  async function collectLifetimeFee() {
    try {
      const response = await fetch(`/api/create-order`, {
        method: "POST",
      })
      const order = await response.json()
      const isRazorpayLoaded = await loadRazorpay()

      if (!isRazorpayLoaded) {
        throw new Error("Failed to load razorpay script.")
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.data.amount,
        currency: order.data.currency,
        name: "Dont Get Leaked",
        description: "Thank you for choosing us to protect you from spying eyes.",
        order_id: order.data.id,
        handler: async (res) => {
          updateUserMetadataMutation.mutateAsync({
            role: "BASIC LIFETIME MEMBER",
            paymentId: res.razorpay_payment_id,
          })
          router.push('/dashboard')
        },
        modal: {
          ondismiss: async function() {
            router.reload()
          }
        }      
      }

      const rzp1 = new window.Razorpay(options)
      rzp1.open()
      
    } catch (err) {
      console.log("Failed to create order: ", err)
      return {
        success: false,
        error: err.message,
        message: "Failed to create order",
      }
    }
  }

  const collectLifetimeFeeMutation = useMutation({
    mutationFn: collectLifetimeFee,
    onSuccess: (res) => {
    },
    onError: (error) => {
    },
    onSettled: () => {
    },
  })

  function prices() {
    return [
      {
        id: "basic-lifetime",
        name: "Basic Lifetime Membership",
        description: "One-time",
        // take from .env and format it to 2 decimal places
        price: Math.round(process.env.NEXT_PUBLIC_LIFETIME_BASIC_PRICE * 100) / 10000,
      }
    ]
  }

  return {
    prices,
    updateUserMetadataMutation,
    collectLifetimeFeeMutation,
  }
}
