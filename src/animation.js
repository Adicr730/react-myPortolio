export const workpageAnimation={
	hidden:{
		opacity :0,
	},
	show:{
		opacity :1,
		transition:{
			duration:0.5,
			delay:0.5,
			ease:"easeOut",
			when:"beforeChildren",
			staggerChildren:0.25,
		},
	},
	exit:{
		opacity :0,
		transition:{
			duration:0.5,
		},
	},
};

export const workpageAnimation2={
	hidden:{
		opacity :0,
		y:300,
	},
	show:{
		opacity :1,
		y:0,
		transition:{
			duration:0.5,
			ease:"easeOut",
			when:"beforeChildren",
			staggerChildren:0,
		},
	},
	exit:{
		opacity :0,
		transition:{
			duration:0.5,
		},
	},
};

export const pageAnimation={
	hidden:{
		opacity :0,
		y:300,
	},
	show:{
		opacity :1,
		y:1,
		transition:{
			delay:0.3,
			duration:0.35,
			ease:"easeOut",
			when: "beforeChildren",
			staggerChildren:.35,
		},
	},
	exit:{
		opacity :0,
		y:300,
		transition:{
			duration:0.5,
		},
	},
};

export const titleAnim = {
	hidden:{y :200,},
	show:{
		y:0,
		transition:{
			duration:.55,
			ease:"easeOut",
		},
	},
};

export const fade = {
	hidden:{opacity:0,transition:{
			duration:1,
			ease:"easeOut",
		},},
	show:{
		opacity:0.8,
		transition:{
			duration:1,
			ease:"easeOut",
		},
	},
};

export const photoAnim = {
	hidden:{
		scale:1.5,
		opacity:0,
	},
	show:{
		scale:1,
		opacity:1,
		transition:{
			ease:"easeOut",
			duration:0.5,
		},
	},
};

export const lineAnim = {
	hidden:{
		width:'0%',
	},
	show:{
		width:'100%',
		transition:{
			duration:0.75,
		},
	},
};

export const frames = {
	hidden:{ x:'-130%', skew:'45deg',},
	show:{x:'100%', skew:'0deg', transition:{ease:"easeOut", duration:.75}}
};

export const frameContainer = {
	hidden:{opacity:1,},
	show:{opacity:1, transition:{staggerChildren:0.1, ease:"easeOut"}},
};