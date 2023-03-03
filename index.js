const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c44de9273msh0850216d0ca870fp14ceeejsnc7d5412f7757',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

const songSearchInput=document.getElementById("searchSong");
const songSearchButton= document.getElementById("searchBtn");

songSearchButton.addEventListener('click',function(){
	if(songSearchInput.value){
		fetchMusic(`https://spotify23.p.rapidapi.com/search/?q=${songSearchInput.value}&type=multi&offset=0&limit=10&numberOfTopResults=5`)
	}

})

	
	
	async function fetchMusic(url){
		var response=await fetch(url,options);
		var data=await response.json();
		console.log(data);
		// processData(data.Stages)
	}

	// function processData(info){
	// 	// for(let i=0;i<info.length;i++){
	// 	// 	console.log(info[i].Cnm)
	// 	// }
	// }


