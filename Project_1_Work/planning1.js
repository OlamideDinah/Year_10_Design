
   Promise.all([
	fetch('https://finnhub.io/api/v1/stock/earnings?symbol=AAPL&token=bu76rin48v6rajd4sul0'),
    fetch('https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2020-04-30&to=2020-05-01&token=bu76rin48v6rajd4sul0'),
    fetch('https://finnhub.io/api/v1/stock/price-target?symbol=AAPL&token=bu76rin48v6rajd4sul0')
    
]).then(responses => { // function calls itself on page load but does not repeat
	return Promise.all(responses.map(response => { // JS arrow functions are more efficient than normal functions
        return response.json(); // returning the response 
	}));
}).then(data => { // data from this api is already parsed (in an array) makes this process super easy
    console.log(data);
}).catch(error => {
	// if there's an error, log it
	console.log(error);
});




