import React from "react";

import styled from "styled-components";

import {Link} from "react-router-dom";
//Images
import VideoThumbnail from "../img/video/varanasimain.jpeg";
import Photo from "../img/video/varanasi1.jpeg";
import arrow from "../img/arrow-up-solid.svg";
//Animations
import {motion} from "framer-motion";
import {workpageAnimation,photoAnim,fade} from "../animation";

import ScrollTop from "../components/ScrollTop";

const MyWork = () =>{
	return(
		<Work variants={workpageAnimation} initial="hidden" animate="show" exit="exit">
			<Thumbnail>
				<Title>
				<img src={arrow} alt="arrow"/>
				<motion.h2>VIDEOS</motion.h2>
				</Title>
				<Link to="/videos">
					<img src={VideoThumbnail} alt="videos"/>
				</Link>
			</Thumbnail>
			<div className="line"></div>
			<Thumbnail>
				<Link to="/photos">
					<img src={Photo} alt="photos"/>
				</Link>
				<Title>
				<motion.h2>PHOTOS</motion.h2>
				<img src={arrow} alt="arrow"/>
				</Title>
			</Thumbnail>
			<ScrollTop/>
		</Work>
		);
};

const Work = styled(motion.div)`
	margin:20rem -2rem;
	width:100%;
	display :flex;
	flex-direction:column;
	align-items:flex-end;
	transform:rotate(270deg);
	min-height: 90vh;
	padding:0rem;
	h2{
		padding:1rem 0rem;
	}
	.line {
		background : rgb(213,0,0);
		height:0.2rem;
		margin:0rem 0rem 0rem 0rem;
		width:23.5%;
	}
	@media(max-width:1600px){
		display :flex;
		flex-direction:column;
		align-items:center;
		transform:rotate(0deg);
		margin:0rem 0rem;
		padding:2rem;
		.line{
			width:70%;
		}
		h2{
			font-size:250%;
		}
	}
`;

const Thumbnail = styled.div`
	display :flex;
	flex-direction:column;
	align-items:flex-end;
	height:90vh;
	padding: 0rem 0rem 0rem 0rem;
	img{
		padding:0;
		transform:rotate(90deg);
		width:55vh;
		height:80vh;
		object-fit:cover;
	}
	@media(max-width:1600px){
		img{
		transform:rotate(0deg);
		padding:1rem 0rem 0rem 0rem;
		}
	}
`;


const Title = styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;
	img{
		max-height:1vh;
		padding:0;
		transform:rotate(180deg);
		filter:invert(.8);
	}
`;

export default MyWork;