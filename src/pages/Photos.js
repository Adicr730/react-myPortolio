import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "../photoState";

import styled from "styled-components";

import {Link} from "react-router-dom";
//Animations
import {motion} from "framer-motion";
import {pageAnimation , fade , photoAnim, lineAnim ,frames, frameContainer} from "../animation";

const Photos = () =>{
	return(
		<Work variants={pageAnimation} intitial="hidden" animate="show" exit="exit" >
		<Gallery photos={photos} direction="column"  margin="6"/>
		</Work>
		);
};

const Work = styled(motion.div)`
	min-height: 100vh;
	overflow: hidden;
	padding:3rem 3rem;
`;


export default Photos;