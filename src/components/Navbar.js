import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (

            <nav className="navbar navbar-light  navbar-expand-lg d-flex justify-content-end" style={{ "backgroundColor": "#00FA9A" }} >
                <Link to="/" className="navbar-brand flex-grow-1">Tracker</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Exercises</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Exercise Log</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to='/users' className="nav-link">Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}
export default Navbar