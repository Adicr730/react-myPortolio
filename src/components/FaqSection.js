import React from "react";
//Styled
import styled from "styled-components";
import {About} from "../styles";

import Toggle from "./Toggle";

import {AnimateSharedLayout} from "framer-motion";

const FaqSection = () =>{
	return(
		<Faq>
			<h2>Any Questions? <span>FAQ</span></h2>
			<AnimateSharedLayout>
			<Toggle title="How do I Start ?">

				<div className="ans">
					<p>- Click on contact me button and submit your requirements there.</p>
					<p>- I'll reach you within 2 hours of submitting your query.</p>
				</div>

			</Toggle>
			<Toggle title="What kind of work can you look forward to ?">

				<div className="ans">
					<p>- If you are looking for an editor to edit your videos,</p>
					<p>- Or are looking for a Photographer/Cinematographer, I am the one.</p>
				</div>

			</Toggle>
			<Toggle title="What is the time i take to give you the final product ?">

				<div className="ans">
					<p>- It actually depends on the type of assignment.</p>
					<p>- But generally it takes 4-7 days.</p>
				</div>

			</Toggle>
			<Toggle title="What is the Pricing ?">

				<div className="ans">
					<p>- It depends on how many hours your project will take and the Gear it needs.</p>
					<p>- I generally charge Rs. 5000 for shooting and editing a 5 min Video :)</p>
				</div>

			</Toggle>
			</AnimateSharedLayout>
		</Faq>
		);
};

const Faq = styled(About)`
	display:block;
	span{
		display:block;
	}
	h2{
		padding-botttom:1rem;
		font-weight:lighter;
	}
	.faq-line {
		background : #cccccc;
		height:0.2rem;
		margin:2rem 0rem;
		width:100%;
	}
	.question{
		padding:2rem 0rem;
		cursor:pointer;
	}
	.ans{
		padding: 2rem 0rem;
		p{
			padding:1rem 0rem;
		}
	}
`;

export default FaqSection;