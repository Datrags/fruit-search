const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	//filter through results that match the substring
	if (str === "") return results;
	results = fruit.filter( f => {
		return f.toLowerCase().includes(str.toLowerCase())
	})

	return results;
}

function searchHandler(e) {
	// TODO
	//reset suggestions
	suggestions.innerHTML = "";
	
	//get results
	let results = search(input.value);

	//make new li element, add mouseover event, append to suggestions
	for (let r of results) {
		let newElem = document.createElement('li');
		newElem.addEventListener('mouseover', () =>{
			return;
		});
		newElem.textContent = r;
		suggestions.appendChild(newElem);
	}
}

// function suggests(e){
// 	e.srcElement.addClass("hover")
// }

//on click, user suggestions will populate the input field
function useSuggestion(e) {
	input.value = e.srcElement.innerHTML;
}

input.addEventListener('keyup', searchHandler);

suggestions.addEventListener('click', useSuggestion);