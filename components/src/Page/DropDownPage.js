import DropDown from "../Components/Dropdown";

export default function DropDownPage({}) {
  const options = [
    { label: "Monkey", value: "monkey" },
    { label: "Gorilla", value: "gorilla" },
    { label: "SUPER MONKEY", value: "super" },
  ];

  return (
    <div style={{ margin: "100px auto" }}>
      <DropDown options={options} />
    </div>
  );
}
