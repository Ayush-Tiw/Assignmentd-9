// b. Get all the countries with a population of less than 2 lakhs using Filter function

// Answer-->

var xhr=new XMLHttpRequest();
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
xhr.send();
xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300){
        var data=JSON.parse(xhr.response);
        let countryBelow2L =data.filter(function(country){
            if(country.population<200000){
                console.log(country.name)
            }
        })
        console.log(countryBelow2L);
    }
    
    else{
        //we should print error or data not available
        console.log("Data is not available")
    }
};