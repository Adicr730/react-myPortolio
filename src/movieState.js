//Import Images
import unrest from "./img/unrest.JPG";
import unrest2 from "./img/video/unrest2.JPG"
import KY from "./img/KY.JPG";
import KY2 from "./img/video/KY2.JPG";
import goa1 from "./img/video/goa1.jpeg";
import goa2 from "./img/video/goa2.jpg";
import goamain from "./img/video/goamain.JPG";
import sikkimvideo from "./img/video/Sikkim.mp4";
import Sikkim from "./img/sikkim pano.jpg";
import sikkim1 from "./img/video/sikkim1.jpg";
import sikkim2 from "./img/video/sikkim2.jpg";
import sikkim3 from "./img/video/sikkim3.jpeg";
import sikkimmain from "./img/video/sikkimmain.jpeg";
import varanasi1 from "./img/video/varanasi1.jpeg";
import varanasi2 from "./img/video/varanasi2.jpg";
import varanasi3 from "./img/video/varanasi3.jpeg";
import varanasi4 from "./img/video/varanasi4.jpeg";
import varanasi5 from "./img/video/varanasi5.jpeg";
import varanasimain from "./img/video/varanasimain.jpeg";

export const MovieState = () =>{
	return [
		{
			title: "Goa 2021 : Coming Soon",
			mainImg: goamain,
			secondaryImg: goa1,
			videoImg:goa2,
			url:"/videos/goa-video",
			youtube:"none",
		},
		{
			title: "Welcome to Varanasi",
			mainImg: varanasi3,
			secondaryImg: varanasi2,
			videoImg:varanasi4,
			url:"/videos/welcome-to-varanasi",
			Team: "Video Credits : FMC IIT (BHU) Varanasi",
			youtube:"https://youtu.be/QdrIHAtdXB0",
			role:"Role : Director, Editior and Cinematographer",
		},
		{
			title: "Sikkim - A Short Glimpse",
			mainImg: sikkim2,
			secondaryImg: sikkim1,
			videoImg:sikkim3,
			url:"/videos/sikkim-video",
			youtube:sikkimvideo,
		},
		{
			title: "Kashiyatra'19 After Movie",
			mainImg: KY,
			secondaryImg: null,
			videoImg:KY2,
			url:"/videos/KYaftermovie",
			Team: "Video Credits : FMC IIT (BHU) Varanasi",
			youtube:"https://youtu.be/mrLQ_TPQ6tI",
			role:"Role : Director, Editior and Cinematographer",
		},
		{
			title: "Unrest - A Short Film",
			mainImg: unrest,
			secondaryImg: null,
			videoImg:unrest2,
			url:"/videos/unrest",
			Team: "Video Credits : FMC IIT (BHU) Varanasi",
			youtube:"https://youtu.be/OhUDKCunqok",
			role:"Role : Cinematographer",
		},
	];
};