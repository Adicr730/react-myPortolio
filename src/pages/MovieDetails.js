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
			<ReactPlayer url={movie.youtube} controls="true" light={movie.videoImg} width="100%" height="980px" playing="true" />
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
	min-height:90vh;
	padding-top:0vh;
	position: relative;
	h2{
		background : rgb(0,0,0,.3);
		border-radius:4%;
		padding:.6rem;
		font-weight:light;
		position :absolute;
		top:80%;
		left:59%;
		transform:tranlate(-50%,-10%);
		}
	img{
		width:100%;
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
	padding:2rem 0rem;
	display:flex;
	flex-direction:column;
	align-items:center;
`;

export default MovieDetail;