import { useState } from "react";
import LInk from "../link/LInk";
import { CiMenuFries } from "react-icons/ci";
import { MdRestaurantMenu } from "react-icons/md";

const Navber = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Blog", path: "/blog" }
      ];

    return (
       <nav>
        <div className="md:hidden bg-yellow-300 p-5" onClick={()=>setOpen(!open)}>
            {
                open === true ? <CiMenuFries className="text-3xl"></CiMenuFries> : <MdRestaurantMenu className="text-3xl"></MdRestaurantMenu>
            }

            
        </div>
        <ul className={`md:flex absolute md:static duration-500 p-6 bg-yellow-300 md:w-full  ${open ? '-top-96' :'top-12  '}`}>
            {
                routes.map(rout=><LInk key={rout.id} rout={rout}></LInk>)
            }
        </ul>
       </nav>
    );
};

export default Navber;