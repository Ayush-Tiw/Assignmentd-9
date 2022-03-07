// c. Print the following details name,capital,flag using forEach function
// Answer-->

var xhr=new XMLHttpRequest();
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
xhr.send();
xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300){
        var data=JSON.parse(xhr.response);        
        data.forEach(function(country){
            console.log(country.name);
            console.log(country.capital);
            console.log(country.flag);
        })
    }
    else{
        console.log("Data is not available");
    }
};