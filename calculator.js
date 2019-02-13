const add = (a, b) => {
	if(isNaN(a) || isNaN(b)) {
		return "params is required";
	}
	return a + b;
};

const sub = (a, b) => {
	if(isNaN(a) || isNaN(b)) {
		return "params is required";
	}
	return a - b;
};

const mul = (a, b) => {
	if(isNaN(a) || isNaN(b)) {
		return "params is required";
	}
	return a * b;
};

const cub = a => {
	if(isNaN(a)) {
		return "param is required";
	}
	return a * a * a;
};

module.exports = {
	add,
	sub,
	mul,
	cub
};