import Image from "next/image";
import Link from "next/link";

const Socials = () => {
  return (
    <section className="flex flex-nowrap justify-center py-8 md:py-0 gap-4">
      {/* <Image
        src="/Facebook_Logo.png"
        width={29}
        height={29}
        alt="Facebook Logo" /> */}
      <Link href="https://www.instagram.com/escintensity/">
        <Image
          src="/Instagram_Logo.png"
          width={29}
          height={29}
          alt="Instagram Logo" />
      </Link>
    </section>
  )
};

export default Socials;