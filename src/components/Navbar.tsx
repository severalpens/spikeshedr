import {  useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {  signOut } from "aws-amplify/auth";




function Navbar({isLoggedIn}: {isLoggedIn: boolean}) {

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
          {isLoggedIn && 
        <div className="flex justify-end">
          <button onClick={() => signOut()} className="">
            Sign out
          </button>
        </div>
        }
        </div>
      </div>
    </>
       );
}

export default Navbar;