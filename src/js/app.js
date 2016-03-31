import React from 'react';
import User from './user';

var users = {
results: [
{
user: {
gender: "female",
name: {
title: "miss",
first: "jadira",
last: "silva"
},
location: {
street: "9272 rua amazonas",
city: "londrina",
state: "mato grosso",
zip: 20608
},
email: "jadira.silva@example.com",
username: "goldenlion554",
password: "robinson",
salt: "pE8WRkuS",
md5: "01a192cbf5aef20d26cd6e190bd96332",
sha1: "f4a67854439481b34f2b4d60e53b217480f7541d",
sha256: "4a1fc1bbe1fd9116f8c74260ce1cfb85dd84028533a4d5ae9941d3e58de36adf",
registered: 1015016923,
dob: 1286246683,
phone: "(02) 1124-7657",
cell: "(10) 6723-8357",
picture: {
large: "https://randomuser.me/api/portraits/women/44.jpg",
medium: "https://randomuser.me/api/portraits/med/women/44.jpg",
thumbnail: "https://randomuser.me/api/portraits/thumb/women/44.jpg"
}
}
},
{
user: {
gender: "male",
name: {
title: "mr",
first: "josué",
last: "oliveira"
},
location: {
street: "9708 rua quatro",
city: "bragança",
state: "goiás",
zip: 10914
},
email: "josué.oliveira@example.com",
username: "redtiger345",
password: "waldo1",
salt: "jRBlKXMs",
md5: "7f6ec35d4c3049eaf81b13348c10aff9",
sha1: "beb3e3eadfa115268b0ed8fc51e01e1615480eff",
sha256: "212fb472525be9d592e879c12a56f45c41a307b966101955c7ac85a646811288",
registered: 1203158212,
dob: 92249064,
phone: "(69) 1082-3595",
cell: "(31) 4152-4825",
picture: {
large: "https://randomuser.me/api/portraits/men/13.jpg",
medium: "https://randomuser.me/api/portraits/med/men/13.jpg",
thumbnail: "https://randomuser.me/api/portraits/thumb/men/13.jpg"
}
}
},
{
user: {
gender: "female",
name: {
title: "miss",
first: "nanci",
last: "moura"
},
location: {
street: "4348 rua vinte e dois",
city: "caruaru",
state: "mato grosso do sul",
zip: 69958
},
email: "nanci.moura@example.com",
username: "orangewolf603",
password: "butterfly",
salt: "noGS2ttl",
md5: "4a6697f41a5017968a03c21fc1ef8235",
sha1: "1cd4bdc20368ecbd6a3956b83cffdfa5bea45549",
sha256: "50d9bf13437212ab6fb54a920ecd927dfc80d75640bdaf1cb695435307883038",
registered: 1045761575,
dob: 302414188,
phone: "(47) 1816-0092",
cell: "(20) 6429-0612",
picture: {
large: "https://randomuser.me/api/portraits/women/68.jpg",
medium: "https://randomuser.me/api/portraits/med/women/68.jpg",
thumbnail: "https://randomuser.me/api/portraits/thumb/women/68.jpg"
}
}
},
{
user: {
gender: "male",
name: {
title: "mr",
first: "virgulino",
last: "ribeiro"
},
location: {
street: "5469 avenida da democracia",
city: "conselheiro lafaiete",
state: "mato grosso",
zip: 85627
},
email: "virgulino.ribeiro@example.com",
username: "redfrog599",
password: "shag",
salt: "RN8nLxMV",
md5: "78d64be8e69cfd1e138d7d670aa2b304",
sha1: "8528808b10a1d860850fbb3026845425ec2c2280",
sha256: "0d435738a1dfe90ca1ec5d3b5155f7d15a4469e2c359f3e3ae70e6f8a1434ce7",
registered: 989503403,
dob: 1272602925,
phone: "(87) 8840-3036",
cell: "(33) 2947-3618",
picture: {
large: "https://randomuser.me/api/portraits/men/35.jpg",
medium: "https://randomuser.me/api/portraits/med/men/35.jpg",
thumbnail: "https://randomuser.me/api/portraits/thumb/men/35.jpg"
}
}
}
],
nationality: "BR",
seed: "9c8b59d7f964ef5201",
version: "0.8"
};

var userData = users.results;

var userDataHtml = userData.map(function(user){
	var images = user.picture.large;
	var first = user.first;
	var last = user.last; 
})

function makeUser(url) {
	return (
		<User url={url}/>
		);
}


export default class App extends React.Component {
	render() {
		return (
			<div className="wrapper">
			<div>
			{users.map(makeUser)}
			</div>
		);
	}
}