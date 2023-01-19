import React from 'react'
import { NavLink } from 'react-router-dom'

import logoWealthHealth from '../../assets/img/healthWealthLogo.png'

/**
 *
 * @function Header
 *
 * @returns the Header component
 *
 */

export default function Header() {
	return (
		<header>
			<div className='top-bar'>
				<div className='logo'>
					<img
						className='logo-image'
						src={logoWealthHealth}
						alt='Wealth Health logo'
					/>
					<h1 className='logo-title'>Wealth Health | HRNet</h1>
				</div>
			</div>
			<nav className='main-nav'>
				<div>
					<NavLink
						to='employees-list'
						className={({ isActive }) => {
							return isActive ? 'main-nav-item active-nav' : 'main-nav-item'
						}}
					>
						Employees
					</NavLink>
				</div>
				<div>
					<NavLink
						to='new-employee'
						className={({ isActive }) => {
							return isActive ? 'main-nav-item active-nav' : 'main-nav-item'
						}}
					>
						Create new
					</NavLink>
				</div>
			</nav>
		</header>
	)
}
