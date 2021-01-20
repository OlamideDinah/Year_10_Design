
// Olamide Dinah
// Upper Canada College
// 2021 Stock Website
// Coding Unit 2: Criterion c

function stocks() {  
var stock = document.getElementById('search').value; // getting input from search bar
// Calling API's below with promise.all
Promise.all([ 
	fetch('https://finnhub.io/api/v1/stock/earnings?symbol=' + stock + '&token=bu76rin48v6rajd4sul0'), // for potential future use
  fetch('https://finnhub.io/api/v1/company-news?symbol=' + stock + '&from=2020-04-30&to=2020-05-01&token=bu76rin48v6rajd4sul0'),
  fetch('https://finnhub.io/api/v1/stock/price-target?symbol=' + stock + '&token=bu76rin48v6rajd4sul0'),
  fetch('https://finnhub.io/api/v1/news?category=general&token=bu76rin48v6rajd4sul0')
]).then(responses => { // function calls itself on page load but does not repeat
	return Promise.all(responses.map(response => { // JS arrow functions are more efficient than normal functions
        return response.json(); // returning the response 
	}));
}).then(data => { // data from this api is already parsed (in an array) makes this process super easy

    var news = data[1] // so this variable is being set to the data returned from my second fetch
    var marketnews = data[3] // fourth fetch
    // generating random numbers to be used for the market news section
    var arr = [];
    while(arr.length < 3){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
    var int1 = arr[0]
    var int2 = arr[1]
    var int3 = arr[2]
  } // Hyperlink for first marketnews
    var marketurl = document.getElementById('marketurl');
    marketurl.innerHTML = '<a href=' + JSON.stringify(marketnews[int1].url) + '>' + marketnews[int1].headline + '</a>'; 
    // Hyperlink for second marketnews
    var marketurl2 = document.getElementById('marketurl2'); 
    marketurl2.innerHTML = '<a href=' + JSON.stringify(marketnews[int2].url) + '>' + marketnews[int2].headline + '</a>'; 
    // Hyperlink for third marketnews
    var marketurl3 = document.getElementById('marketurl3'); 
    marketurl3.innerHTML = '<a href=' + JSON.stringify(marketnews[int3].url) + '>' + marketnews[int3].headline + '</a>'; 
    //document.getElementById("source").innerHTML = 'Source' + ": " + news[0].source // calling an element from JS object
    var url = document.getElementById('url');
    url.innerHTML = '<a href=' + JSON.stringify(news[0].url) + '>' + news[0].headline + '</a>'; // hyperlinked title on html page
  // note* stringify turns link into a string - used just below to act as a hyperlink
    var url2 = document.getElementById('url2');
    url2.innerHTML = '<a href=' + JSON.stringify(news[1].url) + '>' + news[1].headline + '</a>'; // hyperlinked title on html page
    // below is final headline for company news
    var url3 = document.getElementById('url3');
    url3.innerHTML = '<a href=' + JSON.stringify(news[2].url) + '>' + news[2].headline + '</a>'; // hyperlinked title on html page
    // setting prices to the third api fetch
    var prices = data[2] 
    document.getElementById("targethigh").innerHTML = 'Highest Price Estimate' + ": " + prices.targetHigh + " USD" // Formatting
    document.getElementById("targetlow").innerHTML = 'Lowest Price Estimate' + ": " + prices.targetLow + " USD"
    document.getElementById("targetmean").innerHTML = 'Mean Price Estimate' + ": " + prices.targetMean + " USD"
    console.log(data[1]);
}).catch(error => {
	// if there's an error with the input, log it
    console.log(error);``
    alert(); // modular
   });
 }
    function alert() { // modular
      window.alert("Invalid Stock Symbol"); // Displays a pop-up to user
    }
