import React from "react";
import dp from "../img/Sikkim_dp.jpg";
import kick from "../img/futbol-solid.svg";
import click from "../img/camera-solid.svg";
import code from "../img/code-solid.svg";
import bg from "../img/bg.jpg";
import Wave from "./Wave";
import insta from "../img/instagram.svg";
import yout from "../img/youtube.svg";
//Styled
import {About, Description,Image,Hide,Social} from "../styles"
//Framer Motion
import {motion} from "framer-motion";
import {titleAnim , fade ,photoAnim} from "../animation";

import {Link} from "react-router-dom";

const AboutSection = () => {
	return(
		<About>
			<Description>
				<div className="title">
					<Hide>
						<h2>Kick.</h2>
						<img src={kick} alt="kick" />
					</Hide>
					<Hide>
						<h2>Click.</h2>
						<img src={click} alt="click" />
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnim}><span>Code.</span></motion.h2>
						<img src={code} alt="code" />
					</Hide>
					<div className="line"></div>
					<motion.p variants={fade}>
						{"<description> " + "Aspiring FilmMaker / Photographer who can Kick some Balls and Code. ( Yes i made this website myself ) "+ "</description>"}
					</motion.p>
					<motion.button variants={fade}><Link to="/contact">Contact Me</Link></motion.button>
				</div>
			</Description>
			<Image>
				<motion.img variants={photoAnim} src={dp} alt="my picture" />
			</Image>
			<Social variants={fade}>
			<img src={yout} alt="youtube"/>
			<a href="https://www.instagram.com/adicr7_05"><img src={insta} alt="insta"/></a>
			</Social>
			<Wave/>
		</About>
		);
};

//Styled component

export default AboutSection;