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
          <div hidden className="p-6">
              <a href="https://dev.dllr6w2z0a4pi.amplifyapp.com/" target="_blank" >Dev Version</a>
          </div>
          <div className="p-6" hidden>
            <NavLink className="" to="/projects">
              Demo Projects
            </NavLink>
          </div>
          <div className="p-6">
            <NavLink className="" to="/racetimes">
              Race Times
            </NavLink>
          </div>
          <div className="p-6">
            <NavLink className="" to="/tttasks">
              Task Timer
            </NavLink>
          </div>
          <div hidden className="p-6">
            <NavLink className="" to="/contactus">
              Contact Us
            </NavLink>
          </div>
          <div className="p-6">
            <NavLink className="" to="/todos">
              To Dos
            </NavLink>
          </div>

        </div>
      </div>
    </>
       );
}

export default Navbar;