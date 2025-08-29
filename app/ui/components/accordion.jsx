import { useState } from "react";

const Accordion = (props) => {
  const { header, summary } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-zinc-200 rounded-md w-full my-4 py-4  bg-zinc-100 text-left hover:cursor-pointer">
      <button
        type="button"
        isOpen={isOpen}
        onClick={handleClick}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between px-4 border-none rounded"
      >
        <h4 className="font-bold">{header}</h4>
        <span className={`material-symbols-outlined ${ isOpen ? 'rotate-90' : '-rotate-0' }`} isOpen={isOpen}>
          chevron_right
        </span>
      </button>
      <p className={`${ isOpen ? 'block' : 'hidden'} m-0 px-4 pt-4`} isOpen={isOpen} aria-hidden={!isOpen}>
        {summary}
      </p>
    </div>
  );
};

export default Accordion;
