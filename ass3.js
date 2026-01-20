let temperatures = [32, 35, 28, 40, 38, 30, 42];
//filter temperatures above 35
let hotDays = temperatures.filter(temp => temp > 35);
console.log('above 35°C:', hotDays);
//map() to convert all temperatures from Celsius → Fahrenheit
let fahrenheitTemps = temperatures.map(temp => (temp * 9/5) + 32);
console.log('Fahrenheit temperatures:', fahrenheitTemps);
//reduce() to calculate average temperature
let totalTemp = temperatures.reduce((acc, temp) => acc + temp, 0);
let avgTemp = totalTemp / temperatures.length;
console.log('Average temp:', avgTemp);
//find() first temperature above 40
let firstHotDay = temperatures.find(temp => temp > 40);
console.log('First temperature above 40°C:', firstHotDay);
//findIndex() of temperature 28
let indexOf28 = temperatures.findIndex(temp => temp === 28);
console.log('Index of temperature 28°C:', indexOf28);