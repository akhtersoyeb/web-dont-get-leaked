import usePayments from "@/hooks/usePayments"
import { getAuth, createClerkClient } from "@clerk/nextjs/server"
import { useEffect } from "react"

export const getServerSideProps = async (context) => {
  const { userId } = getAuth(context.req)

  const clerkClient = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
  })
  const user = await clerkClient.users.getUser(userId)

  if (user.publicMetadata.role) {
    return {
      redirect: {
        permanent: false,
        destination: "/dashboard",
      },
      props: {},
    }
  } else {
    return {
      props: {},
    }
  }
}

export default function AccountActivationPage() {
  const { collectLifetimeFeeMutation, updateUserMetadataMutation } =
    usePayments()

  useEffect(() => {
    collectLifetimeFeeMutation.mutateAsync()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <p>Processing...</p>
    </div>
  )
}
