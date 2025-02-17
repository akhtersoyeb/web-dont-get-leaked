import Link from "next/link"

export default function Footer() {
  return (
    <div className="container mx-auto py-8 text-center text-sm text-zinc-500 flex items-center justify-between">
      <p>
        &copy; {new Date().getFullYear()} Dont get leaked. All rights reserved.
      </p>
      <Link href={"/privacy-policy"}>Privacy Policy</Link>
      <Link href={"/terms-of-use"}>Terms of use</Link>
      <Link href={"/contact"}>Contact us</Link>
    </div>
  )
}
