
//let url = 'https://finnhub.io/api/v1/company-news?symbol=' + Stock + '&from=2020-04-30&to=2020-05-01&token=bu76rin48v6rajd4sul0'
// set stock to a user input value
// if i ever want to add multiple fetches. Promise.all([
//Promise.all([ assign these too an array to print them all

fetch('https://finnhub.io/api/v1/stock/price-target?symbol=NFLX&token=bu76rin48v6rajd4sul0'),
fetch('https://finnhub.io/api/v1/stock/earnings?symbol=AAPL&token=bu76rin48v6rajd4sul0'),
fetch('https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2020-04-30&to=2020-05-01&token=bu76rin48v6rajd4sul0')
    .then((resp => resp.json()))
    .then(data => console.log(data[0]))
    .catch(error =>console.log('error'))


    document.getElementById("example").innerHTML = boi; 





