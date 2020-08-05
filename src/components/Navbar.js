import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg'
import FontAwesome from 'react-fontawesome';



class Navbar extends Component {
	render () {
		return (
			<nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
				<Link to='/'>
					<img src={logo} alt="" className="navbar-brand"/>
				</Link>
				<ul className="navbar-nav align-items-center">
					<li className="nav-item ml-5">
						<Link to="/" className="nav-link">
						Products
						</Link>

					</li>
				</ul>
				<Link to='/cart' classname="ml-auto">
					<button>
						<FontAwesome className="fas fa-cart-plus" />
						My cart
					</button>
				</Link>
			</nav>
			)
	}
} 

export default Navbar