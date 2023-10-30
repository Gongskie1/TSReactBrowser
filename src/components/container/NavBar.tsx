import {NavLink } from "react-router-dom";
import CustomButton from "./CustomButton";

const NavBar = () => {
  
  const navLinksStyles = ({isActive} : {isActive:boolean}) => {
    return {
      color: isActive ? "#333333" :""
    }
  }

  return (
    <div className="flex list-none justify-between items-center p-[16px_60px]">
      <h2 className="text-[25px]">lobe</h2>
      <div className=" flex flex-row justify-center items-center">
        <NavLink style={navLinksStyles}
        className={`mx-4 text-[18px] text-[#767676] cursor-pointer`} 
          to="/examples">Examples</NavLink>
        
        <NavLink style={navLinksStyles} 
        className={`mx-4 text-[18px] text-[#767676] cursor-pointer`} 
          to="/overview">Overview</NavLink>
        
        <NavLink style={navLinksStyles} 
        className={`mx-4 text-[18px] text-[#767676] cursor-pointer`} 
          to="/">Tour</NavLink>
        
        <NavLink style={navLinksStyles} 
        className={`mx-4 text-[18px] text-[#767676] cursor-pointer`} 
          to="/blog">Blog</NavLink>
        
        <NavLink style={navLinksStyles} 
        className={`mx-4 text-[18px] text-[#767676] cursor-pointer`} 
        to="help">Help</NavLink>
      </div>
      <CustomButton
        buttonStyles="text-[18px] p-[10px_20px] font-semibold text-[white] bg-[#04DDB2] rounded-[50px] cursor-pointer"
        buttonText="Download"
        buttonType="button"
      />
    </div>
  );
};

export default NavBar;
