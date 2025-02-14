import { Button } from "@/components/ui/button"
import { SignOutButton } from "@clerk/nextjs"
import { getAuth, createClerkClient } from "@clerk/nextjs/server"

export const getServerSideProps = async (context) => {
  const { userId } = getAuth(context.req)

  const clerkClient = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
  })
  const user = await clerkClient.users.getUser(userId)

  if (!user.publicMetadata.role) {
    return {
      redirect: {
        permanent: false,
        destination: "/payment",
      },
      props: {},
    }
  } else {
    return {
      props: {},
    }
  }
}
export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <p className="text-center font-semibold text-lg">Congratulations!</p>
      <p className="text-center">You can now access premium integration from our chrome extension!</p>
      <SignOutButton>
        <Button variant='link'>
          Want to Sign Out?
        </Button>
      </SignOutButton>
    </div>
  )
}
