import Accordion from "../Components/Accordion/Accordion";

export default function AccordionPage({}) {
  const options = [
    {
      id: "2323",
      label: "Monkey",
      content: "A monkey jumping around screaming...",
    },
    {
      id: "23543",
      label: "Gorilla",
      content: "A silverback hitting the ground to show dominance...",
    },
    {
      id: "212312",
      label: "SUPER MONKEY",
      content: "A super monkey flying in the air...",
    },
  ];

  return (
    <div>
      <Accordion items={options} />
    </div>
  );
}
