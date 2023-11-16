import React from "react";
import './Nav.scss'
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Link, NavLink } from "react-router-dom";
class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <a><NavLink to={'/'} className="active" >Home</NavLink></a>
                <a><NavLink to={'/todo'}>ToDos</NavLink></a>
            </div>
        )
    }
}

export default Nav;