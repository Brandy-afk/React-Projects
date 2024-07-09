import { HiOutlineCheckCircle } from "react-icons/hi";
import { HiOutlineExclamation } from "react-icons/hi";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { HiOutlineCursorClick } from "react-icons/hi";
import { HiOutlineThumbUp } from "react-icons/hi";

import AccordionPage from "./Page/AccordionPage";
import DropDownPage from "./Page/DropDownPage";
import ButtonPage from "./Page/ButtonPage";
import SideBar from "./Components/SideBar";
import ModalPage from "./Page/ModalPage";
import TablePage from "./Page/TablePage";
import Route from "./Components/Route";

export default function App({}) {
  const paths = [
    { path: "/accordion", body: "Accordion" },
    { path: "/dropdown", body: "Drop down" },
    { path: "/button", body: "Button" },
    { path: "/modal", body: "Modal" },
    { path: "/table", body: "Table" },
  ];

  return (
    <div className="flex justify-between m-3">
      <SideBar paths={paths} />

      <Route path={"/accordion"}>
        <AccordionPage />
      </Route>
      <Route path={"/dropdown"}>
        <DropDownPage />
      </Route>
      <Route path={"/button"}>
        <ButtonPage />
      </Route>
      <Route path={"/modal"}>
        <ModalPage />
      </Route>
      <Route path={"/table"}>
        <TablePage />
      </Route>
    </div>
  );
}
