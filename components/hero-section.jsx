import { Button } from "@/components/ui/button"
import { InteractiveGrid } from "@/components/ui/interactive-grid"
import { ShineBorder } from "@/components/ui/shine-border"
import { Play } from "lucide-react"
import Image from "next/image"
import { ShowcaseSection } from "./showcase-section"
import { SignUpButton } from "@clerk/nextjs"

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden bg-black">
      <InteractiveGrid containerClassName="absolute inset-0" className="opacity-30" points={40} />

      <ShineBorder
        className="relative z-10 max-w-6xl mx-auto px-6 py-6"
        borderClassName="border border-white/10 rounded-xl overflow-hidden"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            no more
            <br />
            <span className="">Ooops!</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Dont get leaked during screen sharing. We will blur your private chats, emails, search history from websites so that you can share your screen without any worries.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" className="gap-2 border-white/10 bg-white/5 hover:bg-white/10">
              {/* <img src="/chrome.svg" alt="Chrome Logo" width={24} height={24} className="w-6 h-6" /> */}
              Unlock Premium for Life at $49.99 only
            </Button>
            <SignUpButton>
              <Button onClick={() => console.log('signup')} variant="secondary" className="bg-white z-20 text-black hover:bg-gray-100">
                Get Started
              </Button>
            </SignUpButton>
          </div>
        </div>

        {/* <ShineBorder className="relative mx-auto" borderClassName="border border-white/10 rounded-xl overflow-hidden"> */}
          <ShowcaseSection />
          {/* <div className="relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero%20image.jpg-mE5vAT4d864MlVhdkcrk1Vn2WcNONq.jpeg"
              alt="Background Gradient"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
            <div className="absolute inset-0 flex items-end justify-center pb-16">
              <div className="bg-black/20 backdrop-blur-sm p-4 rounded-xl w-[90%] h-[70%] flex">
                <div className="flex-1 pr-2">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Browser-HZNDOssbyLixIa4lABR27yelWXveQ0.png"
                    alt="Browser Preview"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover rounded-lg"
                    priority
                  />
                </div>
                <div className="flex-1 pl-2">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Editor%20Window-sJ4sXlXpgDhv7gLvQylqH5VTb3L0rc.png"
                    alt="Code Editor"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div> */}
        </ShineBorder>
      {/* </ShineBorder> */}
    </section>
  )
}

