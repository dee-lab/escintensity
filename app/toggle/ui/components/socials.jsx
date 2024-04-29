import Image from "next/image";

const Socials = () => {
  return (
    <section className="flex flex-nowrap justify-center py-8 md:py-0 gap-4">
      <Image
        src="/Facebook_Logo.png"
        width={29}
        height={29}
        alt="Facebook Logo" />
        <Image
        src="/Instagram_Logo.png"
        width={29}
        height={29}
        alt="Instagram Logo" />
    </section>
  )
};

export default Socials;