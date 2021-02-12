import React from "react";

import styled from "styled-components";

import {Link} from "react-router-dom";
//Images
import VideoThumbnail from "../img/sikkim pano.jpg"
import Photo from "../img/sikkim.jpg"
import unrest from "../img/unrest.JPG";
import unrest2 from "../img/video/unrest2.JPG"
import KY from "../img/KY.JPG";
import KY2 from "../img/video/KY2.JPG";
import goa1 from "../img/video/goa1.jpeg";
import goa2 from "../img/video/goa2.jpg";
import goamain from "../img/video/goamain.JPG";
import Sikkim from "../img/sikkim pano.jpg";
import sikkim1 from "../img/video/sikkim1.jpg";
import sikkim2 from "../img/video/sikkim2.jpg";
import sikkim3 from "../img/video/sikkim3.jpeg";
import sikkimmain from "../img/video/sikkimmain.jpeg";
import varanasi1 from "../img/video/varanasi1.jpeg";
import varanasi2 from "../img/video/varanasi2.jpg";
import varanasi3 from "../img/video/varanasi3.jpeg";
import varanasi4 from "../img/video/varanasi4.jpeg";
import varanasi5 from "../img/video/varanasi5.jpeg";
import varanasimain from "../img/video/varanasimain.jpeg";
//Animations
import {motion} from "framer-motion";
import {workpageAnimation , fade , photoAnim, lineAnim ,frames, frameContainer} from "../animation";

const Videos = () =>{
	return(
		<Work variants={workpageAnimation} initial="hidden" animate="show" exit="exit">
		<motion.div variants={frameContainer}>
		<Frame1 variants={frames}></Frame1>
		<Frame2 variants={frames}></Frame2>
		<Frame3 variants={frames}></Frame3>
		<Frame4 variants={frames}></Frame4>
		<Frame5 variants={frames}></Frame5>
		</motion.div>
			<Thumbnail>
				<motion.h2 variants={fade}>Goa2021</motion.h2>
				<motion.div variants={lineAnim} className="line"></motion.div>
				<Link to="/videos/goa-video">
					<Hide>
					<motion.img variants={photoAnim} src={goamain} alt="videos"/>
					</Hide>
				</Link>
			</Thumbnail>
			<Thumbnail>
				<motion.h2 variants={fade}>Welcome to Varanasi</motion.h2>
				<motion.div variants={lineAnim}  className="line"></motion.div> 
				<Link to="/videos/welcome-to-varanasi">
				<Hide>
					<motion.img variants={photoAnim}  src={varanasi5} alt="photos"/>
				</Hide>
				</Link>
			</Thumbnail>
			<Thumbnail>
				<motion.h2 variants={fade}>Sikkim - A Short Glimpse</motion.h2>
				<motion.div variants={lineAnim}  className="line"></motion.div>
				<Link to="/videos/sikkim-video">
				<Hide>
					<motion.img variants={photoAnim} src={sikkim3} alt="photos"/>
				</Hide>
				</Link>
			</Thumbnail>
			<Thumbnail>
				<motion.h2 variants={fade}>Kashiyatra'19 After Movie</motion.h2>
				<motion.div variants={lineAnim}  className="line"></motion.div>
				<Link to="/videos/KYaftermovie">
				<Hide>
					<motion.img variants={photoAnim}  src={KY} alt="photos"/>
				</Hide>
				</Link>
			</Thumbnail>
			<Thumbnail>
				<motion.h2 variants={fade}>Unrest - A Short Film</motion.h2>
				<motion.div variants={lineAnim}  className="line"></motion.div>
				<Link to="/videos/unrest">
				<Hide>
					<motion.img variants={photoAnim}  src={unrest} alt="photos"/>
				</Hide>
				</Link>
			</Thumbnail>
		</Work>
		);
};

const Work = styled(motion.div)`
	min-height: 100vh;
	overflow: hidden;
	padding:3rem 10rem;
	h2{
		padding:.25rem 0rem;	
		font-size:3rem;
	}
`;

const Thumbnail = styled.div`
	padding-bottom: 7rem;
	.line{
		height:0.3rem;
		background :rgb(213,0,0);
		margin-bottom:1.5rem;
	}
	img{
		width:100%;
		height:70vh;
		object-fit:cover;
	}
`;

const Hide = styled.div`
	overflow:hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
	position:fixed;
	left:0;
	top:9%;
	width:100%;
	height:100vh;
	background:rgb(230,0,0);
	z-index:2;
`;

const Frame2 = styled(Frame1)`
	background:rgb(180,0,0);
`;


const Frame3 = styled(Frame1)`
	background:rgb(120,0,0);
`;


const Frame4 = styled(Frame1)`
	background:rgb(60,0,0);
`;


const Frame5 = styled(Frame1)`
	background:rgb(30,0,0);
`;

export default Videos;