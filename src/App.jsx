import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((item, i) => (
        <AccordionItem title={item.title} text={item.text} number={i} key={i} />
      ))}
    </div>
  );
}

function AccordionItem({ title, text, number }) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen((open) => !open);
  }

  return (
    <div className={`item ${open ? "open" : ""}`} onClick={() => handleOpen()}>
      <span className="number">
        {number < 9 ? `0${number + 1}` : number + 1}
      </span>
      <span className="title">{title}</span>
      <span className="icon">{open ? "-" : "+"}</span>
      {open && <div className="content-box">{text}</div>}
    </div>
  );
}
