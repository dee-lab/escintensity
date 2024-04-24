import Accordion from "../../ui/components/accordion";

const FAQ = () => {
  return (
    <section className="bg-white py-16">
      <div className="flex flex-col text-zinc-900 items-center gap-8 ms-auto me-auto max-w-[80%]">
        <h3 className="text-4xl my-5 uppercase text-center">Frequently asked questions</h3>
        <div className="w-full">
          <Accordion header="Lorem ipsum dolor sit amet"
            summary={["Consectetur adipiscing elit. Ut finibus lorem in gravida blandit. Fusce dictum ut risus sed semper. Fusce vel volutpat nulla. Duis vitae sem eget enim posuere vestibulum sit amet mattis nunc. "]} />
          <Accordion header="Aliquam semper vestibulum urna sed porta."
            summary={["Phasellus congue eu erat id vestibulum. Nulla facilisi. In gravida nibh quis leo tincidunt, vitae ultricies tellus dignissim. Pellentesque sed consequat erat, quis feugiat lectus. "]} />
        </div>
      </div>
    </section>
  )
}

export default FAQ;