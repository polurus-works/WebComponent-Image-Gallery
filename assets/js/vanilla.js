/**
 * --------------------------------------------------------------------------
 * @title: Adobe Creative Design Component
 * @author: Subrahmanyam Poluru
 * @email: subbu.uiux@gmail.com
 * @filename: vanilla.js
 * @description: Using Vanilla JavaScript for Adobe Creative Design Theme
 * --------------------------------------------------------------------------
 */
'use strict';

var data = [{
 	title: 'Adobe Color',
 	description: 'One Lorem Ipsum is simply dummy text of the printing and typesetting industry',
 	mainImg: 'adjust-color-banner.png',
 	hoverImg: 'adjust-color-banner-animated.gif'
 }, {
 	title: 'Adobe Lighting',
 	description: 'Two Lorem Ipsum is simply dummy text of the printing and typesetting industry',
 	mainImg: 'adjust-lighting-banner.png',
 	hoverImg: 'adjust-lighting-banner-animated.gif'
 }, {
 	title: 'Adobe Blur',
 	description: 'Three Lorem Ipsum is simply dummy text of the printing and typesetting industry',
 	mainImg: 'blur-banner.png',
 	hoverImg: 'blur-banner-animated.gif'
 }, {
 	title: 'Adobe Enhance',
 	description: 'Three Lorem Ipsum is simply dummy text of the printing and typesetting industry',
 	mainImg: 'enhance-details-banner.png',
 	hoverImg: 'enhance-details-banner-animated.gif'
 }];

 
(function(){
	var div = document.getElementsByClassName('adobe-creative-design')[0],
 		frag = document.createDocumentFragment();
 	data.forEach(function(v, i) {
 		var item = document.createElement('div');
			item.className='list-items';
 		var	title = document.createElement('h5'),
 			content = document.createTextNode(v.title);
 		var	description = document.createElement('p'),
 			contentdescription = document.createTextNode(v.description);
 		var	imgs = document.createElement('img'),
 			galleryImg = imgs.setAttribute('src', 'assets/images/' + v.mainImg + ''),
 			hoverImg = imgs.setAttribute('data-src', 'assets/images/' + v.hoverImg + '');
 		var toolbar = document.createElement('div');
			toolbar.className='toolbar';
 			toolbar.innerHTML = '<ul><li><a href="#"><img src="assets/icons/add.svg" data-src="assets/icons/add.svg" alt="Add Effects" title="Add Effects"></a></li><li><a href="#"><img src="assets/icons/favorite.svg" data-src="assets/icons/favorite.svg" alt="Add Faviorite" title="Add Faviorite"></a></li><li><a href="#"><img src="assets/icons/remove.svg" data-src="assets/icons/remove.svg" alt="Remove Faviorite" title="Remove Faviorite"></a></li></ul>';
 		//console.log(imgs);
 		title.appendChild(content);
 		description.appendChild(contentdescription);
 		item.appendChild(title);
 		item.appendChild(description);
 		item.appendChild(imgs);
 		item.appendChild(toolbar);
 		frag.appendChild(item);
 	});
 	div.appendChild(frag);
 	const items = document.querySelectorAll('.list-items');
 	for (const item of items) {
 		item.addEventListener('mouseover', function(e) {
 			let getSrcVal = e.target.getAttribute("src");
 			e.target.setAttribute("src", e.target.getAttribute("data-src"));
 			e.target.setAttribute("data-src", getSrcVal);
 		});
 		item.addEventListener('mouseout', function(e) {
 			let getSrcVal = e.target.getAttribute("src");
 			e.target.setAttribute("src", e.target.getAttribute("data-src"));
 			e.target.setAttribute("data-src", getSrcVal);
 		});
 	}
})();


var btn = document.querySelector('.list-items');
 
