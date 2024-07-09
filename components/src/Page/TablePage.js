import Table from "../Components/Table";
import { CiApple } from "react-icons/ci";
import { LuBanana } from "react-icons/lu";
import { GiOrange } from "react-icons/gi";
import { GiStrawberry } from "react-icons/gi";
import { GiPineapple } from "react-icons/gi";
import { GiGrapes } from "react-icons/gi";
import { GiWatermelon } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";

export default function TablePage({}) {
  const data = [
    {
      name: "Orange",
      color: "bg-orange-500",
      score: 5,
      picture: <GiOrange className="w-10 h-10" />,
      origin: "China",
      season: "Winter",
      price: 0.8,
    },
    {
      name: "Banana",
      color: "bg-yellow-500",
      score: 4,
      picture: <LuBanana className="w-10 h-10" />,
      origin: "Ecuador",
      season: "All Year",
      price: 0.6,
    },
    {
      name: "Strawberry",
      color: "bg-red-200",
      score: 1,
      picture: <GiStrawberry className="w-10 h-10" />,
      origin: "USA",
      season: "Spring",
      price: 2.5,
    },
    {
      name: "Apple",
      color: "bg-red-700",
      score: 10,
      picture: <CiApple className="w-10 h-10" />,
      origin: "Turkey",
      season: "Fall",
      price: 1.2,
    },
    {
      name: "Mango",
      color: "bg-yellow-600",
      score: 8,
      picture: <GiFruitBowl className="w-10 h-10" />,
      origin: "India",
      season: "Summer",
      price: 1.8,
    },
    {
      name: "Pineapple",
      color: "bg-yellow-300",
      score: 6,
      picture: <GiPineapple className="w-10 h-10" />,
      origin: "Brazil",
      season: "Summer",
      price: 2.2,
    },
    {
      name: "Grapes",
      color: "bg-purple-500",
      score: 7,
      picture: <GiGrapes className="w-10 h-10" />,
      origin: "Italy",
      season: "Fall",
      price: 1.5,
    },
    {
      name: "Watermelon",
      color: "bg-green-500",
      score: 9,
      picture: <GiWatermelon className="w-10 h-10" />,
      origin: "Egypt",
      season: "Summer",
      price: 0.9,
    },
  ];

  const config = [
    {
      label: "Fruits",
      render: (fruit) => fruit.name,
      sort: (a, b) => a.name.localeCompare(b.name),
    },
    {
      label: "Color",
      render: (fruit) => (
        <div className={`${fruit.color} w-6 h-6 border-2`}></div>
      ),
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sort: (a, b) => a.score - b.score,
    },
    {
      label: "Picture",
      render: (fruit) => fruit.picture,
    },
    {
      label: "Origin",
      render: (fruit) => fruit.origin,
      sort: (a, b) => a.origin.localeCompare(b.origin),
    },
    {
      label: "Season",
      render: (fruit) => fruit.season,
      sort: (a, b) => a.season.localeCompare(b.season),
    },
    {
      label: "Price",
      render: (fruit) => `$${fruit.price.toFixed(2)}`,
      sort: (a, b) => a.price - b.price,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <Table data={data} config={config} createKey={keyFn} />
    </div>
  );
}
