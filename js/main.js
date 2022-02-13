window.onload = function () {
	let list = document.getElementById('table_of_contents');

	const tableOfContents = [
		{
			label: 'Week 6 - To Do List Project',
			url: '/wdd330portfolio/week06/'
		},
		{
			label: 'Week 5 Notes',
			url: '/wdd330portfolio/week05/'
		},
		{
			label: 'Week 4 Notes',
			url: '/wdd330portfolio/week04/'
		},
		{
			label: 'Week 3 Notes',
			url: '/wdd330portfolio/week03/'
		},
		{
			label: 'Week 2 Notes',
			url: '/wdd330portfolio/week02/'
		},
		{
			label: 'Week 1 Notes',
			url: '/wdd330portfolio/week01/'
		}
	];

	for (var i = tableOfContents.length - 1; i >= 0; i--) {
		let li = document.createElement('li');
		let a = document.createElement('a');
		a.textContent = tableOfContents[i].label;
		a.setAttribute('href', tableOfContents[i].url);
		li.append(a);
		list.append(li);
	}
}
