const add = (a, b) => {
	return new Promise((resolve, reject) => {
		if(isNaN(a) || isNaN(b)) {
			reject("params is required");
		}
		resolve(a + b);
		
	});
};

const sub = (a, b) => {
	return new Promise((resolve, reject) => {
		if(isNaN(a) || isNaN(b)) {
			reject("params is required");
		}
		resolve(a - b);
		
	});
};

const mul = (a, b) => {
	return new Promise((resolve, reject) => {
		if(isNaN(a) || isNaN(b)) {
			reject("params is required");
		}
		resolve(a * b);
		
	});
};

const cub = a => {
	return new Promise((resolve, reject) => {
		if(isNaN(a)) {
			reject("params is required");
		}
		resolve(a * a * a);
		
	});
};

module.exports = {
	add,
	sub,
	mul,
	cub
};