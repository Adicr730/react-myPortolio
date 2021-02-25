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
			    	<Line transition={{duratkion:0.75}} initial={{width:"0%"}} animate={{width:pathname === "/" ? "100%" : "0%"}} />
				</li>
				<li>
			    	<Link to="/work">My Work</Link>
			    	<Line transition={{duratkion:0.75}} initial={{width:"0%"}} animate={{width:pathname === "/work" ? "100%" : "0%"}} />
				</li>
				<li> 
			    	<Link to="/contact">Contact Me</Link>
			    	<Line transition={{duratkion:0.75}} initial={{width:"0%"}} animate={{width:pathname === "/contact" ? "100%" : "0%"}} />
				</li>
			</ul>
		</StyledNav>
		);
};

const StyledNav = styled.nav`
	position :sticky;
	top:0;
	z-index:100;
	min-height:7.5vh;
	display: flex;
	margin: auto;
	justify-content :space-between;
	align-items:center;
	padding:0rem 10rem;
	background : rgb(0,0,0,0.4);
	a{
		color:rgb(230,230,230);
		text-decoration : none;
		padding:0.2rem;
	}
	ul{
		display:flex;
		color:rgb(230,230,230);
		list-style:none;
	}
	li{
		margin-left:2rem;
		padding:1rem;
		position:relative;
	}
	li:hover{
		background:rgb(250,250,250,0.08);
		border-radius:5%;
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
	bottom:0%;
	left:2%;

	@media(max-width:1300px)
	{
		bottom :-60%;
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