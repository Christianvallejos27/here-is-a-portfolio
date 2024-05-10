import {Link, Outlet} from "react-router-dom"
import React from 'react'

const Root = () => {
  return (
    <div>
        <ul className="nav"> 
            <li>
                <Link className="nav-item" to="/">home</Link>
            </li>
            
            <li>
                <Link className="nav-item" to="/project">project</Link>
            </li>
            
            <li>
                <Link className="nav-item" to="/contact">contact</Link>
            </li>
            
            <li>
                <Link className="nav-item" to="/resume">resume</Link>
            </li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Root