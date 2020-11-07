
   Promise.all([
	fetch('https://finnhub.io/api/v1/stock/earnings?symbol=AAPL&token=bu76rin48v6rajd4sul0'),
    fetch('https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2020-04-30&to=2020-05-01&token=bu76rin48v6rajd4sul0'),
    fetch('https://finnhub.io/api/v1/stock/price-target?symbol=NFLX&token=bu76rin48v6rajd4sul0')
    
]).then(responses => { // function calls itself on page load but does not repeat
	return Promise.all(responses.map(response => { // JS arrow functions are more efficient than normal functions
        return response.json(); // returning the response 
	}));
}).then(data => { // data from this api is already parsed (in an array) makes this process super easy

    // You would do something with both sets of data here

    var earnings = data[0] // so this variable is being set to the data returned from my first fetch
    document.getElementById("actual").innerHTML = 'Actual Value' + ": " + earnings[0].actual // the first element in ok
    document.getElementById("estimated").innerHTML = 'Estimated Value' + ": " + earnings[0].estimate
    document.getElementById("symbol").innerHTML = 'Company Symbol' + ": " + earnings[0].symbol

    var news = data[1] // so this variable is being set to the data returned from my first fetch
    document.getElementById("headline").innerHTML = 'Actual Value' + ": " + news[0].headline // the first element in ok
    document.getElementById("source").innerHTML = 'Estimated Value' + ": " + news[0].source
   
    var targets = data[2] // so this variable is being set to the data returned from my first fetch
    document.getElementById("headline").innerHTML = 'Actual Value' + ": " + news[0].headline // the first element in ok
    document.getElementById("source").innerHTML = 'Estimated Value' + ": " + news[0].source
   


   /* var ok = data[0] // so this variable is being set to the data returned from my first fetch
    document.getElementById("actual").innerHTML = 'Actual Value' + ": " + ok[0].actual // the first element in ok
    document.getElementById("estimated").innerHTML = 'Estimated Value' + ": " + ok[0].estimate
    document.getElementById("symbol").innerHTML = 'Company Symbol' + ": " + ok[0].symbol
    */
    console.log(data[2]);

}).catch(error => {
	// if there's an error, log it
	console.log(error);
});




