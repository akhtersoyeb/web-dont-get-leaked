import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const integrations = [
  {
    name: "AWS",
    img: "/logos/aws.png",
  },
  {
    name: "Azure",
    img: "/logos/azure.png",
  },
  {
    name: "Bank of America",
    img: "/logos/bankofamerica.png",
  },
  {
    name: "Binance",
    img: "/logos/binance.png",
  },
  {
    name: "Bitbucket",
    img: "/logos/bitbucket.png",
  },
  {
    name: "Chase",
    img: "/logos/chase.png",
  },
  {
    name: "Coinbase",
    img: "/logos/coinbase.png",
  },
  {
    name: "Confluence",
    img: "/logos/confluence.png",
  },
  {
    name: "Datadog",
    img: "/logos/datadoghq.png",
  },
  {
    name: "Discord",
    img: "/logos/discord.png",
  },
  {
    name: "Docker",
    img: "/logos/docker.png",
  },
  {
    name: "Etrade",
    img: "/logos/etrade.png",
  },
  {
    name: "Facebook",
    img: "/logos/facebook.png",
  },
  {
    name: "Fansly",
    img: "/logos/fansly.png",
  },
  {
    name: "Firebase",
    img: "/logos/firebase.png",
  },
  {
    name: "Github",
    img: "/logos/github.png",
  },
  {
    name: "Gitlab",
    img: "/logos/gitlab.png",
  },
  {
    name: "Gmail",
    img: "/logos/gmail.png",
  },
  {
    name: "Google Cloud",
    img: "/logos/google-cloud.png",
  },
  {
    name: "Drive",
    img: "/logos/google-drive.png",
  },
  {
    name: "Grafana",
    img: "/logos/grafana.png",
  },
  {
    name: "Heroku",
    img: "/logos/heroku.png",
  },
  {
    name: "Instagram",
    img: "/logos/instagram.png",
  },
  {
    name: "IRS",
    img: "/logos/irs.png",
  },
  {
    name: "Jenkins",
    img: "/logos/jenkins.png",
  },
  {
    name: "Jira",
    img: "/logos/jira.png",
  },
  {
    name: "Kick",
    img: "/logos/kick.png",
  },
  {
    name: "Linkedin",
    img: "/logos/linkedin.png",
  },
  {
    name: "Outlook",
    img: "/logos/microsoft-outlook.png",
  },
  {
    name: "Netlify",
    img: "/logos/netlify.png",
  },
  {
    name: "ngrok",
    img: "/logos/ngrok.png",
  },
  {
    name: "Notion",
    img: "/logos/notion.png",
  },
  {
    name: "Onlyfans",
    img: "/logos/onlyfans.png",
  },
  {
    name: "Patreon",
    img: "/logos/patreon.png",
  },
  {
    name: "Paypal",
    img: "/logos/paypal.png",
  },
  {
    name: "Postman",
    img: "/logos/postman.png",
  },
  {
    name: "Reddit",
    img: "/logos/reddit.png",
  },
  {
    name: "Restream",
    img: "/logos/restream.png",
  },
  {
    name: "Robinhood",
    img: "/logos/robinhood.png",
  },
  {
    name: "Sentry",
    img: "/logos/sentry.png",
  },
  {
    name: "Slack",
    img: "/logos/slack.png",
  },
  {
    name: "Snapchat",
    img: "/logos/snapchat.png",
  },
  {
    name: "Stripe",
    img: "/logos/stripe.png",
  },
  {
    name: "Trello",
    img: "/logos/trello.png",
  },
  {
    name: "Twitch",
    img: "/logos/twitch.png",
  },
  {
    name: "Vercel",
    img: "/logos/vercel.png",
  },
  {
    name: "Whatsapp",
    img: "/logos/whatsapp.png",
  },
  {
    name: "X",
    img: "/logos/x.png",
  },
  {
    name: "Youtube",
    img: "/logos/youtube.png",
  },
  
]

const firstRow = integrations.slice(0, integrations.length / 2)
const secondRow = integrations.slice(integrations.length / 2)

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{name}</figcaption>
          {/* <p className="text-xs font-medium">{username}</p> */}
        </div>
      </div>
      {/* <blockquote className="mt-2 text-sm">{body}</blockquote> */}
    </figure>
  )
}

export function IntegrationSection() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-black md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:120s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:120s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
    </div>
  )
}
