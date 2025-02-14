import { AnnouncementBar } from "@/components/announcement-bar"
import { FeaturesSection } from "@/components/features-section"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { IntegrationSection } from "@/components/integration-section"
import { getAuth } from "@clerk/nextjs/server"



export const getServerSideProps = async (context) => {
  const { userId } = getAuth(context.req)

  if (userId) {
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

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <AnnouncementBar />
      <IntegrationSection />
    </main>
  )
}

