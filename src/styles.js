import styled from "styled-components";

export const About = styled.div`
	min-height: 90vh;
	display : flex;
	align-items: center;
	justify-content : space-between;
	padding: 3rem 10rem;
	color= white;
`;

export const Description = styled.div`
	flex:1;
	padding-right:5rem;
	z-index:2;
	h2{
		font-weight:lighter;
	}
	.line {
		background : rgb(213,0,0);
		height:0.2rem;
		margin:5rem 0rem 0rem 0rem;
		width:100%;
	}
	p{
		padding:.5rem 0rem 5rem 0rem;
	}
`;

export const Image = styled.div`
	flex:.73;
	overflow :hidden;
	z-index:2;
	img{
		width:100%;
		height :80vh;
		object-fit:cover;
	}
`;

export const Hide =styled.div`
	overflow :hidden;
	display :flex;
	align-items:center;
	justify-content :space-between;
	width:13rem;
	padding:0.1rem 0rem;
	img{
		max-height:2.2rem;
		filter:invert(0.3);
	}
	h2{
		font-size:3rem;
	}
	span{
		font-weight:normal;
	}
`;