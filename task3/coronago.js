
let countryNameData = document.querySelector(".country-name-data");
let casesData = document.querySelector(".cases-data");
let deathsData = document.querySelector(".deaths-data");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '40e36029camsh5a43d6340de1d23p188b54jsn95a2c638f237',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};

//'3746d5a02dmsh90fcea13e010052p19336djsnd40a1a1a060f',

// TO GET DATA FROM THE RESOURCE - GET REQUEST
fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const nameOfFirstCountry = data.countries_stat[0].country_name;
        console.log(nameOfFirstCountry);
        const totalCases = data.world_total.total_cases;
        console.log(totalCases);
        let tableData;
        data.countries_stat.map(object => {
          tableData += `<tr>
          <td class = "country-name-data">${object.country_name}</td>
          <td class = "cases-data">${object.cases}</td>
          <td class = "deaths-data">${object.deaths}</td>
       </tr>`;
        })
        let tableBody = document.querySelector(".table-body");
        tableBody.innerHTML = tableData
    })
    .catch(err => console.error(err));
