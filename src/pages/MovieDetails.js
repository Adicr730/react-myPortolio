import React,{useState,useEffect} from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {MovieState} from "../movieState";
//Animations
import {motion} from "framer-motion";
import {workpageAnimation} from "../animation";

import ScrollTop from "../components/ScrollTop";

const MovieDetail= () =>{
	const history = useHistory();
	const url = history.location.pathname;
	const [movies,setMovies] = useState(MovieState);
	const [movie,setMovie] = useState(null);

	useEffect(()=>{
		const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
		setMovie(currentMovie[0]);
	},[movies,url]);

	return(
		<>
		{movie && (
		<Details variants={workpageAnimation} initial="hidden" animate="show" exit="exit">
			<HeadLine>
				<h2>{movie.title}</h2>
				<img src={movie.mainImg} alt="movie"/>
			</HeadLine>
			<Description>
			<ReactPlayer className="player" url={movie.youtube} controls="true" light={movie.videoImg} width="60%" height="550px" playing="true" />
			<div className="text">
				<h2>{movie.Team}</h2>
				<h2>{movie.role}</h2>
			</div>
			</Description>
			<ImageDisplay>
				<img src={movie.secondaryImg} alt="movie2"/>
			</ImageDisplay>
			<ScrollTop/>
		</Details>
		)}
		</>
		);
};

const Details = styled(motion.div)`
	color: rgb(230,230,230);
`;

const HeadLine = styled.div`
	display:flex;
	flex-direction :column;
	min-height:90vh;
	position: relative;
	align-items:center;
	h2{
		font-size:400%;
		padding:2rem 0rem;
		color:rgb(210,210,210,0.35);
		}
	img{
		width:98%;
		height:200vh;
		object-fit:cover;
		object-position:100% 15%;
	}
	@media(max-width:1300px){
		padding:2rem 2rem;
		img{
		width:100%;
		height:200vh;
		object-fit:cover;
		object-position:50% 15%;
	}
	}
`;

const ImageDisplay = styled.div`
	img{
		width:100%;
		height:200vh;
		object-fit:cover;
		object-position:100% 15%;
	}
`;

const Description = styled.div`
	padding:1rem 0rem 0.2rem 0rem;
	display:flex;
	flex-direction:column;
	align-items:center;
	.player:hover{
		opacity:0.8;
	}
	h2{
		font-size:130%;
		padding:0.5rem 0rem;
		color:rgb(210,210,210,0.8);
	}
	.text{
		display:flex;
		flex-direction:row;
		width:73%;
		justify-content :space-between;
	}
`;



export default MovieDetail;