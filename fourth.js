//  d. Print the population of countries using reduce function
// Answer-->

var xhr=new XMLHttpRequest();
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
xhr.send();
xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300){
        var data=JSON.parse(xhr.response);
        let TotalPopulaion= data.reduce((actual,current)=>{
            return actual+current.population;
        },0)
        console.log(TotalPopulaion)
    }
    else{
        console.log("Data is not available")
    }
};


