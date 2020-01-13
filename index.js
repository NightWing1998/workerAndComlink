import * as Comlink from "https://unpkg.com/comlink@4.2.0/dist/esm/comlink.mjs";

const x = [4, 25698347, 25698341, 25698343, 25698349];

document.getElementById("worker").innerHTML += `All the values in x are:- ${x.join(" ")}<br />`;

async function start() {
	const wrapped = Comlink.wrap(new Worker("./working.js"));

	//the promise way
	wrapped.primeCheck(x)
		.then(ans => {
			document.getElementById("worker").innerHTML += `All the primes in x are:- ${ans.join(" ")}<br />`;
		}).catch((err) => {
			console.error(err);
		});

	// The callback way
	wrapped.dataProcessing("./data.csv", Comlink.proxy(ans => {
		document.getElementById("worker").innerHTML += `Avg age:- ${ans}<br />`;
	}));
}

const primeCheck = (x) => {
	let t1 = Date.now();
	x.forEach(number => {
		let res = null;
		for (let i = 2; i < number; i++) {
			if (number % i === 0) {
				res = i;
				break;
			}
		}
		if (res === null) {
			console.log(`# - ${number} is prime`);
		} else {
			console.log(`# - ${number} is divisible by ${res}`);
		}
	});
	console.log(`# - Total time : - ${Date.now() - t1}`);
}

start();
primeCheck(x);