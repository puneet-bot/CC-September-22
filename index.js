const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c44de9273msh0850216d0ca870fp14ceeejsnc7d5412f7757',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

const songSearchInput = document.getElementById("searchSong");
const songSearchButton = document.getElementById("searchBtn");

songSearchButton.addEventListener('click', function () {
	// localStorage.clear();
	if (songSearchInput.value) {
		fetchMusic(`https://spotify23.p.rapidapi.com/search/?q=${songSearchInput.value}&type=multi&offset=0&limit=10&numberOfTopResults=5`, songSearchInput.value)
	}

})



async function fetchMusic(url, query) {
	var response = await fetch(url, options);
	var data = await response.json();
	console.log(data);
	processData(data.albums.items)
	// localStorage.setItem(query,JSON.stringify(data));
	// secondfunction(query);

}

async function processData(info) {
	console.log(info)
	alert('here')
	if(info.length>=1){
		for(let i=0;i<info.length;i++){
			// if(info[i].data)
			alert('hhhh')
			await localStorage.setItem(`Song-${i}`,info[i].data.uri);
		}
		// secondfunction();
	}
}


