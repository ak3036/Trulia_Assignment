import Hamburger from "hamburger-react";
import { useState } from "react";

const HamburgerComponent = () => {
  const [Open, setOpen] = useState(false);
  return (
    <div className="text-[#007882]">
      <Hamburger size={18} />
    </div>
  );
};
export default HamburgerComponent;
