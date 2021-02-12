import React from "react";
import styled from "styled-components";

import logoi from "../img/Logo.png";

import {Link} from "react-router-dom";

const Nav = () =>{
	return(
		<StyledNav>
			<StyledLogo>
				<img src={logoi} alt="logo"/>
				<h1><Link id="logo" to="/">ADICR7</Link></h1>
			</StyledLogo>
			<ul>
				<li>
			    	<Link to="/">About Me</Link>
				</li>
				<li>
			    	<Link to="/work">My Work</Link>
				</li>
				<li>
			    	<Link to="/contact">Contact Me</Link>
				</li>
			</ul>
		</StyledNav>
		);
};

const StyledNav = styled.nav`
	position :relative;
	z-index:100;
	min-height:9vh;
	display: flex;
	margin: auto;
	justify-content :space-between;
	align-items:center;
	padding:0rem 10rem;
	background : rgb(30,32,32);
	a{
		color:rgb(230,230,230);
		text-decoration : none;
	}
	ul{
		display:flex;
		color:rgb(230,230,230);
		list-style:none;
	}
	li{
		padding-left:6rem;
		position:relative;
	}
`;

const StyledLogo = styled.div`
	z-index:100;
	display:flex;
	align-items:center;
	img{
		padding:0;
		max-height:1.9rem;
	}
	#logo{
		font-size:1.4rem;
		font-weight:lighter;
		padding:0rem 0rem 0rem .5rem;
	}
`;

export default Nav;