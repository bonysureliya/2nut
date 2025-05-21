import nutLogo from "../assets/2 Nut logo main.svg";
import searchIcon from "../assets/search.svg";
import personIcon from "../assets/person.svg";
import shoppingBag from "../assets/shopping_bag.svg";
import chevronDown from "../assets/Icon.svg";

const Topbar = () => {
  return (
    <div className="bg-[#F7DEDE] w-full flex justify-between px-[72px] items-center">
      <div className="text-[#CD1C18] font-poppins font-semibold">SHOP</div>
      <div>
        <img src={nutLogo} className="h-[65px] aspect-square" />
      </div>
      <div className="flex gap-6 items-center">
        <div>
          <img src={searchIcon} />
        </div>
        <div>
          <img src={personIcon} />
        </div>
        <div className="flex gap-3 items-center">
          <img src={shoppingBag} />
          <img src={chevronDown} className="w-[15px]" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;