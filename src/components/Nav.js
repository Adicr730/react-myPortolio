import React from "react";
import styled from "styled-components";

import logoi from "../img/Logo.png";

import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {useLocation} from "react-router-dom";

const Nav = () =>{
	const {pathname} = useLocation();
	return(
		<StyledNav>
			<StyledLogo>
				<img src={logoi} alt="logo"/>
				<h1><Link id="logo" to="/">ADICR7</Link></h1>
			</StyledLogo>
			<ul>
				<li>
			    	<Link to="/">About Me</Link>
			    	<Line transition={{duratkion:0.75}} initial={{width:"0%"}} animate={{width:pathname === "/" ? "50%" : "0%"}} />
				</li>
				<li>
			    	<Link to="/work">My Work</Link>
			    	<Line transition={{duratkion:0.75}} initial={{width:"0%"}} animate={{width:pathname === "/work" ? "50%" : "0%"}} />
				</li>
				<li> 
			    	<Link to="/contact">Contact Me</Link>
			    	<Line transition={{duratkion:0.75}} initial={{width:"0%"}} animate={{width:pathname === "/contact" ? "50%" : "0%"}} />
				</li>
			</ul>
		</StyledNav>
		);
};

const StyledNav = styled.nav`
	position :sticky;
	top:0;
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
	@media(max-width:1300px){
		flex-direction:column;
		padding:2.5rem 1rem 0rem 0rem;
		align-items:center;
		ul{
			padding:2rem;
			justify-content :space-around;
			width:100%;
			li{
				padding:0;
			}
		}
	}
`;

const Line = styled(motion.div)`
	height:0.3rem;
	background:rgb(215,0,0);
	width:0%;
	position:absolute;
	bottom:-80%;
	left:53%;

	@media(max-width:1300px)
	{
		left:0%;
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