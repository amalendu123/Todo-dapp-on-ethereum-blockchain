import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className="flex  justify-between">
        <div><CiMenuFries /></div>
        <h3 className='text-3xl'>Todo DApp</h3>
        <div className='flex gap-5'>
            <CiSearch />
            <IoIosNotifications />
        </div>
    </div>
  )
}
export default Navbar;