Promise.all([
	import('./a'),
	import('./b')
]).then(modules => {
	console.log(modules);
});
