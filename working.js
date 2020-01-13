importScripts("https://unpkg.com/axios/dist/axios.min.js");
importScripts("https://unpkg.com/comlink/dist/umd/comlink.js");

const primeCheck = (x) => {
	let t1 = Date.now();
	let ans = [];
	x.forEach(number => {
		let res = null;
		for (let i = 2; i < number; i++) {
			if (number % i === 0) {
				res = i;
				break;
			}
		}
		if (res === null) {
			ans.push(number);
		}
	});
	console.log("@@Inside worker:-", Date.now() - t1);
	return ans;
}

const dataProcessing = (path, callback) => {
	axios.get(path)
		.then(res => {
			console.log("received data file : ", res.data);
			// Process data set here
			let {
				data
			} = res;
			data = data.split("\n");
			data = data.slice(1);
			let avgAge = 0;
			data.forEach(tuple => {
				let age = parseInt(tuple.split(",")[0]);
				avgAge += age;
			});
			avgAge = avgAge / (data.length !== 0 ? data.length : 1);
			callback(avgAge);
		})
		.catch(err => {
			throw err;
		});
};

const allFunctions = {
	primeCheck,
	dataProcessing
}

Comlink.expose(allFunctions);