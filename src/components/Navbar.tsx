import {  useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {

  useEffect(() => {
    async function fetchData() {
    }
    fetchData();
  }, [])

  return (
    <>
      <div className="container flex justify-between mx-auto  border m-4 border-black px-4 rounded-3xl">
        <div className="p-6 columns-2  flex ">
          <div className="p-6 ">
            <NavLink className="font-bold" to="/">
              Home
            </NavLink>
          </div>
          <div className="p-6">
            <NavLink className="" to="/projects">
              Demo Projects
            </NavLink>
          </div>
          <div className="p-6">
            <NavLink className="" to="/racetimes">
              Race Times
            </NavLink>
          </div>
        </div>
        <div className="p-6 columns-2">
        </div>
      </div>
    </>
       );
}

export default Navbar;