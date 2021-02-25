import {createGlobalStyle} from 'styled-components';

import bg from "../img/bg.jpg";

const GlobalStyle = createGlobalStyle`


*{
	margin:0;
	padding:0;
	box-sizing: border-box;
}

html{

	@media(max-width:1700px){
		font-size:75%;
	}
}

body{
	background: url(${bg}) no-repeat center center fixed;
	-webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
	background-color : rgb(17,20,20);
	font-family:"Inter", sans-serif;
	overflow-x:hidden;
	
}

button{
	font-family:"Inter", sans-serif;
	font-weight: bold;
	font-size:1.1rem;
	cursor:pointer;
	padding : .5rem 1rem;
	border: 3px solid rgb(213, 0, 0);
	background : transparent;
	color:rgb(230,230,230);
	transition: all 0.5s ease;
	&:hover{
		background-color:rgb(213, 0, 0);
		color:rgb(230,230,230);
	}
}

h2{
	color :rgb(230,230,230);
	font-weight: lighter;
	font-size: 4rem;
}

h3{
	color: rgb(230,230,230);
}

h4{
	font-weight:bold;
	font-size:1.765rem;
	color :rgb(230,230,230);
}



a{
	font-size:1.1rem; 
}

p{
	padding: 3rem 0rem;
	color: #ccc;
	font-size:1.15rem;
	line-height: 150%;
	word-spacing:.12rem;
}

span{
	font-weight:bold;
	color:rgb(213, 0, 0);
}

img{
	max-height:90vh;
}


`

export default GlobalStyle;