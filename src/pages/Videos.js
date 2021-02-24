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
import {useScroll} from "../components/useScroll";

import ScrollTop from "../components/ScrollTop";

const Videos = () =>{
	const [element,controls] = useScroll();
	const [element1,controls1] = useScroll();
	const [element2,controls2] = useScroll();
	const [element3,controls3] = useScroll();
	const [element4,controls4] = useScroll();
	return(
		<Work variants={workpageAnimation} initial="hidden" animate="show" exit="exit">
			<Thumbnail variants={fade} animate={controls} initial="hidden" ref={element}>
				<motion.h2 variants={fade}>Goa2021</motion.h2>
				<motion.div variants={lineAnim} className="line"></motion.div>
				<Link to="/videos/goa-video">
					<Hide>
					<motion.img variants={photoAnim} src={goamain} alt="videos"/>
					</Hide>
				</Link>
			</Thumbnail>
			<Thumbnail variants={fade} animate={controls1} initial="hidden" ref={element1}>
				<motion.h2 variants={fade}>Welcome to Varanasi</motion.h2>
				<motion.div variants={lineAnim}  className="line"></motion.div> 
				<Link to="/videos/welcome-to-varanasi">
				<Hide>
					<motion.img variants={photoAnim}  src={varanasi5} alt="photos"/>
				</Hide>
				</Link>
			</Thumbnail>
			<Thumbnail variants={fade} animate={controls2} initial="hidden" ref={element2}>
				<motion.h2 variants={fade}>Sikkim - A Short Glimpse</motion.h2>
				<motion.div variants={lineAnim}  className="line"></motion.div>
				<Link to="/videos/sikkim-video">
				<Hide>
					<motion.img variants={photoAnim} src={sikkim3} alt="photos"/>
				</Hide>
				</Link>
			</Thumbnail>
			<Thumbnail variants={fade} animate={controls3} initial="hidden" ref={element3}>
				<motion.h2 variants={fade}>Kashiyatra'19 After Movie</motion.h2>
				<motion.div variants={lineAnim}  className="line"></motion.div>
				<Link to="/videos/KYaftermovie">
				<Hide>
					<motion.img variants={photoAnim}  src={KY} alt="photos"/>
				</Hide>
				</Link>
			</Thumbnail>
			<Thumbnail variants={fade} animate={controls4} initial="hidden" ref={element4}>
				<motion.h2 variants={fade}>Unrest - A Short Film</motion.h2>
				<motion.div variants={lineAnim}  className="line"></motion.div>
				<Link to="/videos/unrest">
				<Hide>
					<motion.img variants={photoAnim}  src={unrest} alt="photos"/>
				</Hide>
				</Link>
			</Thumbnail>
			<ScrollTop/>
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
	@media(max-width:1300px){
		padding:2rem 2rem;
	}
`;

const Thumbnail = styled(motion.div)`
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



export default Videos;