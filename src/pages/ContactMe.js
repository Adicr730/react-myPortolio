import React from "react";
import styled from "styled-components";
//Animations
import {motion} from "framer-motion";
import {pageAnimation,frameContainer,frames,fade, titleAnim} from "../animation";

import ScrollTop from "../components/ScrollTop";

const ContactMe = () =>{
	return(
		<ContactStyle variants={pageAnimation} initial="hidden" animate="show" exit="exit">

		<Title>
		<Hide>
			<motion.h1 variants={titleAnim}>Get in touch.</motion.h1>
		</Hide>
		</Title>

		<div>
		<Hide>
		<Social variants={titleAnim}>
			<Circle />
			<h2>Send Me A Message</h2>
		</Social>
		</Hide>
		<Hide>
		<Social variants={titleAnim}>
			<Circle />
			<h2>Send An Email</h2>
		</Social>
		</Hide>
		<Hide>
		<Social variants={titleAnim}>
			<Circle />
			<h2>Social Media</h2>
		</Social>
		</Hide>
		</div>
		<ScrollTop/>
		</ContactStyle>
		);
};
const ContactStyle = styled(motion.div)`
	padding:1rem 10rem;
	min-height:90vh;
	background:rgb(230,230,230);
	@media(max-width:1500px){
		padding:2rem;
		font-size:1rem;
	}
`;

const Title = styled.div`
	margin-bottom: 4rem;
	color:#353535;
	@media(max-width:1300px){
		margin-top:5rem;
	}
`;

const Hide = styled.div`
	overflow:hidden;
`;

const Circle = styled.div`
	border-radius:50%;
	width:3rem;
	height:3rem;
	background:#353535;
`;

const Social = styled(motion.div)`
	display:flex;
	align-items:center;
	h2{
		margin:2rem;
		color:#353535;
	}
`;


export default ContactMe;