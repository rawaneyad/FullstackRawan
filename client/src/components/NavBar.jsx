import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/products'>Products</Link>
            </li>
            <li>
                <Link to='/posts'>Posts</Link>
            </li>
            <li>
                <Link to='/admin'>Admin</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar