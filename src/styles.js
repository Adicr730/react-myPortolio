import styled from "styled-components";
import {motion} from "framer-motion";

export const About = styled(motion.div)`
	min-height: 90vh;
	display : flex;
	align-items: center;
	justify-content : space-between;
	padding: 3rem 10rem;
	color= white;
	@media(max-width:1300px){
		display:block;
		padding:2rem 2rem;
	}
`;

export const Description = styled.div`
	flex:1;
	padding-right:5rem;
	z-index:2;
	h2{
		font-weight:lighter;
	}
	.line {
		background : rgb(213,0,0);
		height:0.2rem;
		margin:5rem 0rem 0rem 0rem;
		width:100%;
	}
	p{
		padding:.5rem 0rem 5rem 0rem;
	}
	a{
		color:rgb(230,230,230);
		text-decoration : none;
	}
	@media(max-width:1300px){
		padding:0;
		button{
			margin:0rem 0rem 5rem 0rem;
		}
	}
`;

export const Image = styled(motion.div)`
	flex:.73;
	opacity:0.8;
	overflow :hidden;
	z-index:2;
	position:relative;
	img{
		width:100%;
		height :80vh;
		object-fit:cover;
		box-shadow:
		  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
		  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
		  0 12.5px 10px rgba(0, 0, 0, 0.06),
		  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
		  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
		  0 100px 80px rgba(0, 0, 0, 0.12)
		;
	}
`;

export const Hide =styled.div`
	overflow :hidden;
	display :flex;
	align-items:center;
	justify-content :space-between;
	width:13rem;
	padding:0.1rem 0rem;
	img{
		max-height:2.2rem;
		filter:invert(0.3);
	}
	h2{
		font-size:3rem;
	}
	span{
		font-weight:normal;
	}
`;

export const Social =styled(motion.div)`
	overflow :hidden;
	display :flex;
	align-items:center;
	z-index:3;
	width:13rem;
	padding:0.1rem 0rem;
	position :absolute;
	left:84.2%;
	top:28.6%;
	img{
		max-height:2.4rem;
		filter:invert(0.9);
		margin:0.5rem;
	}
`;