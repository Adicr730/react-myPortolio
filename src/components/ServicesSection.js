import React from "react";
import {useScroll} from "./useScroll";
import {fade,workpageAnimation2,pageAnimation,workpageAnimation,photoAnim,lineAnim} from "../animation";
import {motion} from "framer-motion";
// import icons
import professional from "../img/photo-video-solid.svg";
import money from "../img/money-bill-wave-solid.svg";
import gear from "../img/camera-retro-solid.svg";
import onsite from "../img/plane-departure-solid.svg";
import home2 from "../img/me.jpg";
//Styles
import {About, Description,Image,Hide} from "../styles"
import styled from "styled-components";

const ServicesSection= () =>{
	const [element,controls] = useScroll();
	return(
		<Services>
			<Descrip>
				<h2>High <span>quality</span> services</h2>
				<Cards variants={fade} animate={controls} initial="hidden" ref={element}>
					<Card>
						<div className="icon">
							<img src={professional} alt="icon"/>
							<h3>Professional Quality</h3>
						</div>
						<p>Get professional quality Films and Photos.</p>
					</Card>
					<Card>
						<div className="icon">
							<img src={money} alt="icon"/>
							<h3>Affordable</h3>
						</div>
						<p>Get your work done in Minimal Cost.</p>
					</Card>
					<Card>
						<div className="icon">
							<img src={gear} alt="icon"/>
							<h3>Pro Grade Gear</h3>
						</div>
						<p>Get your work done with Professional Gear.</p>
					</Card>
					<Card>
						<div className="icon">
							<img src={onsite} alt="icon"/>
							<h3>Get Onsite Service</h3>
						</div>
						<p>Ready to travel for you. (Tickets cost extra)</p>
					</Card>
				</Cards>
			</Descrip>
			<Image variants={fade} animate={controls} initial="hidden" ref={element}>
				<img src={home2} alt="hero photo"/>
			</Image>
		</Services>
		);
};

const Services = styled(About)`
	z-index:2;
	h2{
		padding-bottom:5rem;
	}
	p{
		width:70%;
		padding:2rem 0rem 4rem 0rem;
	}
`;

const Descrip = styled(Description)`
h2{
	font-size:5rem;
}
`

const Cards = styled(motion.div)`
	display :flex;
	flex-wrap:wrap;
`;

const Card = styled.div`
	flex-basis:20rem;
	.icon{
		display:flex;
		align-items:center;
		h3{
			margin-left:1rem;
			background :white;
			color:black;
			padding:.7rem;
		}
		img{
			filter:invert(.3);
			max-height:2.2rem;
		}
	}
`;

export default ServicesSection;