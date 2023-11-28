import { Activity, LocationAdd, Lock1, Setting2, User } from "iconsax-react";
import { NavLink } from "react-router-dom";
function SideBar() {
  return (
    <div>
      <div className="flex fixed flex-col justify-start left-0 bottom-0 top-[160px] w-32 bg-gray-500 bg-opacity-20 ">
        <div className=" w-12 pb-0 click p-5  ml-6 space-y-1 rounded-md mt-3 ">
          <User className="ml-3" size="22" color="#FF8A65" />
          <div className="text-sm ml-3">User </div>
          <NavLink to={"/"}></NavLink>
        </div>

        <div className=" w-12  pb-0 click p-5  ml-6 space-y-1 rounded-md mt-[20px]">
          <Lock1 className="ml-3" size="22" color="#FF8A65" />{" "}
          <div className="text-sm ml-3">locks</div>
          <NavLink to={"/"}></NavLink>
        </div>

        <div className=" w-12 pb-0 click p-5  ml-6 space-y-1 rounded-md mt-[20px]">
          <LocationAdd className="ml-3" size="22" color="#FF8A65" />{" "}
          <div className="text-sm ml-1">Location </div>
          <NavLink to={"/"}></NavLink>
        </div>
        <div className=" w-12  pb-0 click p-5  ml-6 space-y-1 rounded-md mt-[20px]">
          <Activity className="ml-3" size="22" color="#FF8A65" />{" "}
          <div className="text-sm ">Dashboard </div>
          <NavLink to={"/"}></NavLink>
        </div>

        <div className=" w-12 pb-0 click p-5  ml-6 space-y-1 rounded-md mt-[20px]">
          <Setting2 className="ml-3" size="22" color="#FF8A65" />{" "}
          <div className="text-sm ml-1">Setting</div>
          <NavLink to={"/"}></NavLink>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
