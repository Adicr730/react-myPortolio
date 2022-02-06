import React from "react";
import styled from "styled-components";
//Animations
import {motion} from "framer-motion";
import {pageAnimation,frameContainer,frames,fade, titleAnim} from "../animation";

import ScrollTop from "../components/ScrollTop";

import contact from "../img/contact.jpg";
import insta from "../img/instagram.svg";
import yout from "../img/youtube.svg";

const ContactMe = () =>{
	return(
		<Main>
		<ContactStyle variants={pageAnimation} initial="hidden" animate="show" exit="exit">

		<Form>
		<Title>
		<Hide>
			<motion.h1 variants={titleAnim}>Get in touch.</motion.h1>
		</Hide>
		</Title>

		<Hide>
		<Social variants={fade}>
		<form name="contact" netlify>
				
					<input id="first-name" type="text" name="first-name" placeholder="First name"/>

					<input type="text" name="last-name" placeholder="Last name"/>

					<input id="email"  type="text" name="email" placeholder="Email                                        eg - example@email.com"/>
	
					<input id="phone" type="text" name="phone" placeholder="Phone Number                               eg- +91 80000 00000"/>

					<textarea id="message" name="message" placeholder="Work Query (Description of service required)"></textarea>

					<button type="submit">
						Send Message
					</button>

			</form>
		</Social>
		</Hide>

			<Hide>
			<Address variants={titleAnim}>

						<span>
							Address :  Sector Pi, Greater Noida
						</span>

						<span>
							Lets Talk : +91-7678207504
						</span>

						<span>
							General Support : adicr730@gmail.com
						</span>
			</Address>
			</Hide>
		<Socialmedia variants={fade}>
			<img src={yout} alt="youtube"/>
			<a href="https://www.instagram.com/adicr7_05"><img src={insta} alt="insta"/></a>
		</Socialmedia>
		</Form>

		<img src={contact} alt="contact img"/>

		</ContactStyle>
		</Main>
		);
};

const Main= styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;
`;

const ContactStyle = styled(motion.div)`
	display:flex;
	justify-content :space-between;
	margin-left:0rem;
	margin-top:2rem;
	padding:0rem 0rem;
	width:83%;
	height:83vh;
	background-color:rgb(50,50,50,0.35);
	overflow :hidden;
	@media(max-width:1500px){
		font-size:1rem;
		margin-left:1rem;
	}
	img{
		width:40%;
		height :150vh;
		object-fit:cover;
		opacity:0.9;
	}
`;

const Title = styled.div`
	padding:0rem;
	color:rgb(230,230,230);
	margin-bottom:2rem;
`;

const Hide = styled.div`
	overflow:hidden;
`;

const Circle = styled.div`
	border-radius:50%;
	width:1rem;
	height:1rem;
	background:rgb(230,230,230);
	margin:1rem;
`;

const Social = styled(motion.div)`
	display:flex;
	align-items:center;
	h2{
		margin:2rem;
		color:#353535;
	}
`;

const Address = styled(motion.div)`
	margin-top:2rem;
	display:flex;
	flex-direction:column;
	
	span{
		padding:0.1rem 0rem;
		color:rgb(230,230,230);
		font-size:140%;
		font-weight:lighter;
	}
`;

const Form = styled.div`
	width:60%;
	padding:3rem;
	display:flex;
	flex-direction:column;
	justify-content :space-between;
	position:relative;
	input{
		padding:1rem;
		background:rgb(50,50,50,0.3);
		border :none;
		width:65vh;
		height:3rem;
		color:rgb(230,230,230);
		font-size:140%;
		margin:0.4rem 0rem;
		outline: none;
	}
	textarea{
		padding:1rem;
		background:rgb(50,50,50,0.3);
		border :none;
		width:80vh;
		height:7rem;
		color:rgb(230,230,230);
		font-size:140%;
		margin:0.4rem 0rem;
  		resize: none;
  		outline: none;
	}
	button{
		margin-top:2rem;
	}
`;

const Socialmedia =styled(motion.div)`
	display :flex;
	align-items:center;
	z-index:3;
	width:15rem;
	padding:0.1rem 0rem;
	position :absolute;
	left:82%;
	top:5%;
	img{
		padding: 0.8rem;
		max-height:4rem;
		filter:invert(0.9);
		margin:0rem 0.5rem;
	}
	a{
		padding:0;
	}
`;

export default ContactMe;
