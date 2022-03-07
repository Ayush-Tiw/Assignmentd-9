// Question-1) Solving problems using array functions on rest countries data
// a. Get all the countries from Asia continent/region using Filter function
// Answer-->

// set up an http request
var xhr=new XMLHttpRequest();
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
xhr.send();

// setup a listner where server listen our request
xhr.onload=function(){
    //process the request and server will  return the data in response
    if(xhr.status>=200 && xhr.status<300){
         // console.log(this.response);//by this we will not get readable data
        //convert raw data into js notation format
        var data=JSON.parse(xhr.response);
        let asianCountry=data.filter(function(country){
            if(country.region=="Asia"){
                console.log(country.name)
            }
        })
        console.log(asianCountry);
    }
    
    else{
        //we should print error or data not available
        console.log("Data is not available")
    }
};

