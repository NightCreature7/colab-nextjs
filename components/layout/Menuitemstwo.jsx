import { menuItems } from "../../public/array";
import Menubar from "./Menubar";
import menuStyles from "../../styles/Menuitemstwo.module.css";

const Menuitems = () => {
  return (
    <nav>
      <ul className={menuStyles.menus}>
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <Menubar items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default Menuitems;
