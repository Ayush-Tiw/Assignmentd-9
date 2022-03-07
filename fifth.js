// e. Print the country which uses US Dollars as currency.

// Answer-->

var xhr=new XMLHttpRequest();
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
xhr.send();
xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300){
        var data=JSON.parse(xhr.response);
        let countryDollars=data.filter(function(country){
            if(country.currencies[0].symbol=="$"){
                console.log(country.name)
            }
        })
        console.log(countryDollars)
    }
    
    else{
        console.log("Data is not available")
    }
};