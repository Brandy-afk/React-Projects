import { HiOutlineCheckCircle } from "react-icons/hi";
import { HiOutlineExclamation } from "react-icons/hi";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { HiOutlineCursorClick } from "react-icons/hi";
import { HiOutlineThumbUp } from "react-icons/hi";

import Button from "../Components/Button";

export default function ButtonPage({}) {
  return (
    <div>
      <div>
        <Button primary roundedFull className="mb-1">
          <HiOutlineThumbUp />
          Buy me!
        </Button>
      </div>
      <div>
        <Button secondary outline className="mb-1">
          <HiOutlineCursorClick />
          Send me!
        </Button>
      </div>
      <div>
        <Button danger roundedMed outline className="mb-1">
          <HiOutlineExclamation />
          Cancel me!
        </Button>
      </div>
      <div>
        <Button success roundedFull className="mb-1">
          <HiOutlineCheckCircle />
          Purchase
        </Button>
      </div>
      <div>
        <Button warning roundedMed className="mb-1">
          <HiOutlineExclamationCircle />
          Press me!
        </Button>
      </div>
    </div>
  );
}
