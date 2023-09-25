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
      <Accordion />
    </div>
  );
}

function Accordion() {
  return (
    <div className="accordion">
      {faqs.map((item) => (
        <AccordionItem item={item} />
      ))}
    </div>
  );
}

function AccordionItem({ item }) {
  const [clicked, setClicked] = useState(false);

  function handleClicked(e) {
    setClicked(!clicked);
  }

  return (
    <div className="item" onClick={(e) => handleClicked(e)}>
      <span className="number">1</span>
      <span className="title">{item.title}</span>
      <span className="icon">+</span>
      {clicked && <div className="content-box">{item.text}</div>}
    </div>
  );
}
