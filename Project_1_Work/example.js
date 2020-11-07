
   Promise.all([
	fetch('https://finnhub.io/api/v1/stock/earnings?symbol=AAPL&token=bu76rin48v6rajd4sul0'),
    fetch('https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2020-04-30&to=2020-05-01&token=bu76rin48v6rajd4sul0'),
    fetch('https://finnhub.io/api/v1/stock/price-target?symbol=AAPL&token=bu76rin48v6rajd4sul0')
    
]).then(responses => { // function calls itself on page load but does not repeat
	return Promise.all(responses.map(response => { // JS arrow functions are more efficient than normal functions
        return response.json(); // returning the response 
	}));
}).then(data => { // data from this api is already parsed (in an array) makes this process super easy

    // Below section works but isn't being used right now

    /* var earnings = data[0] // so this variable is being set to the data returned from my first fetch
    document.getElementById("actual").innerHTML = 'Actual Value' + ": " + earnings[0].actual // the first element in ok
    document.getElementById("estimated").innerHTML = 'Estimated Value' + ": " + earnings[0].estimate
    document.getElementById("symbol").innerHTML = 'Company Symbol' + ": " + earnings[0].symbol
*/
    var news = data[1] // so this variable is being set to the data returned from my first fetch
    title = news[0].headline
 
    currency = 'usd'

    document.getElementById("source").innerHTML = 'Source' + ": " + news[0].source
    link = JSON.stringify(news[0].url);

    var url = document.getElementById('url');
    url.innerHTML = '<a href=' + link + '>' + title + '</a>';


    var prices = data[2]
    document.getElementById("targethigh").innerHTML = 'Highest Price Estimate' + ": " + prices.targetHigh + " " + currency // the first element in ok
    document.getElementById("targetlow").innerHTML = 'Lowest Price Estimate' + ": " + prices.targetLow + " " + currency // no need to delve further into the object its only 1 layer
    document.getElementById("targetmean").innerHTML = 'Mean Price Estimate' + ": " + prices.targetMean + " " + currency


  



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




