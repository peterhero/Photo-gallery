let currentPhoto = 0;
let imagesData = [
	{
		photo: 'images/Iceland.jpg',
		title: 'The Blue Lagoon, Iceland',
		description: 'Iceland is no doubt one of the hottest new travel destinations, increasing exponentially in interest over the past few years. The #1 destination in Iceland is The Blue Lagoon. Last year, it had a record number of international visitors totally 700,000. The Blue Lagoon is a natural, geothermal spa sunk into a lava field and is known for its mineral-rich healing waters. Families book with care, as children under 2 are not allowed in the pools. Children between the ages of 2 and 8 are required to wear arm floaties.'
	},

	{
		photo: 'images/Peru.jpg',
		title: 'Machu Picchu, Peru',
		description: 'Tourists are quickly taking note of South America as they look for lesser known, undiscovered places in the world. Machu Picchu is one of the most recognizable icons of the continent and the tourism numbers reflect it. After receiving 1 million visitors in 2016, tourism officials decided to cut back on the entrance allowance in efforts to save the precious ruins from crumbling.'
	},

	{
		photo: 'images/England.jpg',
		title: 'Stonehenge, England',
		description: 'The set of historic stone monuments, date from 2000 to 3000 BC. The iconic landmark is one of the most recognizable symbols of the UK. Since Stonehenge was added to the list of UNESCO world heritage site in 1982, yearly visitors have skyrocketed to 1.3 million tourists per year. Statics are now showing a slow decline.'
	},

	{
		photo: 'images/Brazil.jpg',
		title: 'Christ the Redeemer, Brazil',
		description: 'You’ve probably seen the photos reflecting the throbs of people huddled beneath the massive, white replica of Christ. The statue is known as Christ the Redeemer and casts its shadow over some 1.8 Million visitors per year. The best or worst day to Sao Paolo, depending on how you look at it, is Easter Sunday. In recent years, the effigy welcomed a whopping 14,000 people on the date of the religious holiday.'
	},

	{
		photo: 'images/Greece.jpg',
		title: 'Acropolis of Athens, Greece',
		description: 'These ancient ruins of Athens dangle above the scenic cliff-side of Greece. Despite ongoing restoration projects, hoards of onlookers continue to flock to the site year after year. Tourism experts expect to receive an all-time high in 2018. The community is preparing for a whopping 4.5 million international visitors this year.'
	},

	{
		photo: 'images/France.jpg',
		title: 'Eiffel Tower, France',
		description: 'Located in the heart of Paris, the most romantic city in the world, the Eiffel Tower has become a universal symbol of travel. A visit to the Eiffel Tower tops many bucket lists, and it’s no surprise considering some 7 Million visitors a year are snapping selfies under the 81-story building.'
	},

	{
		photo: 'images/China.jpg',
		title: 'The Great Wall of China',
		description: 'Considered one the greatest man-made structures in the world, the Great Wall of China stretches over 13,000 miles. Receiving 10 million tourists every year, it is beneficial to know the best time to visit. Autumn is arguably the prettiest time to arrive, but unfortunately, it is still peak tourism season. Surprisingly, June is the time to visit with the lowest amount of foot traffic, especially if you want to visit when it isn’t snowing.'
	},

	{
		photo: 'images/Egypt.jpg',
		title: 'The Great Pyramid of Giza, Egypt',
		description: 'It might be surprising to learn that a desolate desert in the Middle East, has now become one of the greatest tourist destinations in the world. Unless you consider that many people desperately want to visit the Great Pyramid of Giza, one of the official 7 Wonders of the Ancient World. The tomb that was built around 2500 B.C. is now responsible for a spectacular 14.7 million visitors per year.'
	},

	{
		photo: 'images/USA-Canada.jpg',
		title: 'Niagara Falls, USA/Canada',
		description: 'And then, we arrive in North America at a tourist destination that smashes all other sites, by more than double the visitors. Niagara Falls, located on the border of New York and Ontario, Canada is a massive set of 3 waterfalls. An astounding 6 million cubic feet of water gush over the falls every minute. The site is currently hosting 30 million tourists annually.'
	},
];

let loadPhoto = (photoNumber) => {
	$('#photo').attr('src', imagesData[currentPhoto].photo);
	$('#photo-title').text(imagesData[currentPhoto].title);
	// $('#photo-description').text(imagesData[currentPhoto].description);
}

loadPhoto(currentPhoto);

$('#right-arrow').click(() => {
	currentPhoto++;
	currentPhoto = currentPhoto % 9;
	loadPhoto(currentPhoto);
});

$('#left-arrow').click(() => {
	currentPhoto--;
	currentPhoto = (currentPhoto + 9) % 9;
	loadPhoto(currentPhoto);
});

$('.text-container').hover(() => {
	$('#photo-description').text(imagesData[currentPhoto].description);
}, () => {
	$('#photo-description').text("");
});