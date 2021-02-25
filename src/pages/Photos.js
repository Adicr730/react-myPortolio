import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "../photoState";

import styled from "styled-components";

import {Link} from "react-router-dom";
//Animations
import {motion} from "framer-motion";
import {pageAnimation , fade , photoAnim, lineAnim ,frames, frameContainer} from "../animation";

import ScrollTop from "../components/ScrollTop";

const Photos = () =>{
	return(
		<Work variants={pageAnimation} intitial="hidden" animate="show" exit="exit" >
		<Gallery photos={photos} direction="column"  margin="6"/>
		<ScrollTop/>
		</Work>
		);
};

const Work = styled(motion.div)`
	min-height: 100vh;
	overflow: hidden;
	padding:2rem 3rem;
`;



export default Photos;