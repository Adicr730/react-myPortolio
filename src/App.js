import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyles";
//Pages
import AboutUs from "./pages/AboutUs";
import ContactMe from "./pages/ContactMe";
import MyWork from "./pages/MyWork";
import Photos from "./pages/Photos";
import Videos from "./pages/Videos";
import MovieDetails from "./pages/MovieDetails";

import Nav from "./components/Nav";

//Router
import {Switch, Route, useLocation } from "react-router-dom";
//Animation
import {AnimatePresence} from "framer-motion";

function App() {
	const location=useLocation();
  return (
    <div className="App">
    	<GlobalStyle />
    	<Nav />
    	<AnimatePresence exitBeforeEnter>
	   		<Switch location={location} key={location.pathname}>
			    <Route path="/" exact>
			      <AboutUs />
			    </Route>

			    <Route path="/work">
			      <MyWork/>
			    </Route>
			    
			    <Route path="/contact">
			      <ContactMe/>
			    </Route>

			    <Route path="/videos" exact>
			      <Videos/>
			    </Route>

			    <Route path="/photos">
			      <Photos/>
			    </Route>

			    <Route path="/videos/:id">
			    	<MovieDetails/>
			    </Route>
		    </Switch>
	    </AnimatePresence>
    </div>
  );
}

export default App;
