//time elements
var currentDayEl= $("#currentDay");
setInterval(function()
{currentDayEl.text(moment().format('dddd MMM Do YYYY')), 100000})


//handling block colouring
setInterval(blockColorHandler, 1000)

var hoursArr= ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

var currentHour= moment().format("HH")

function blockColorHandler(){
    for (let index = 0; index < hoursArr.length; index++) {
        var hours= hoursArr[index];
        var hoursParsed= JSON.parse(hours)
        currentHourParsed=JSON.parse(currentHour)
        if(hoursParsed< currentHourParsed){
            document.getElementById(JSON.parse(hours)).style.backgroundColor = 'gray' ;
            } 
            if(hoursParsed > currentHourParsed){
                document.getElementById(hours).style.backgroundColor = 'yellow' ;
                } 
            if (currentHourParsed===hoursParsed){
                document.getElementById(hours).style.backgroundColor = 'green' ;
        }  
}}



//text area elements 
textArea9El= $("textarea#textarea9")
textArea10El= $("textarea#textarea10")
textArea11El= $("textarea#textarea11")
textArea12El= $("textarea#textarea12")
textArea13El= $("textarea#textarea13")
textArea14El= $("textarea#textarea14")
textArea15El= $("textarea#textarea15")
textArea16El= $("textarea#textarea16")
textArea17El= $("textarea#textarea17")

//getting all my save button elements
var saveBtn9El=$(".saveBtn9")
var saveBtn10El=$(".saveBtn10")
var saveBtn11El=$(".saveBtn11")
var saveBtn12El=$(".saveBtn12")
var saveBtn13El=$(".saveBtn13")
var saveBtn14El=$(".saveBtn14")
var saveBtn15El=$(".saveBtn15")
var saveBtn16El=$(".saveBtn16")
var saveBtn17El=$(".saveBtn17")



//getting textarea value and saving to local storage on button click
saveBtn9handler=()=>{
    textArea9Val= $("textarea#textarea9").val();
    localStorage.setItem("textarea9val", textArea9Val)}
saveBtn10handler=()=>{
    textArea10Val= $("textarea#textarea10").val();
    localStorage.setItem("textarea10val", textArea10Val)}
 saveBtn11handler=()=>{
     console.log("hi")
     textArea11Val= $("textarea#textarea11").val();
     localStorage.setItem("textarea11val", textArea11Val)}
 saveBtn12handler=()=>{
     textArea12al= $("textarea#textarea12").val();
     localStorage.setItem("textarea12val", textArea12Val)}
  saveBtn13handler=()=>{
     textArea13Val= $("textarea#textarea13").val();
     localStorage.setItem("textarea13val", textArea13Val)}
 saveBtn14handler=()=>{
     textArea14Val= $("textarea#textarea14").val();
     localStorage.setItem("textarea14val", textArea14Val)}
  saveBtn15handler=()=>{
      textArea15Val= $("textarea#textarea15").val();
      localStorage.setItem("textarea15val", textArea15Val)}
  saveBtn16handler=()=>{
      textArea16Val= $("textarea#textarea16").val();
      localStorage.setItem("textarea16val", textArea16Val)}
saveBtn17handler=()=>{
        textArea17Val= $("textarea#textarea17").val();
        localStorage.setItem("textarea17val", textArea17Val)}

saveBtn9El.on("click", saveBtn9handler)
saveBtn10El.on("click", saveBtn10handler)
saveBtn11El.on("click", saveBtn11handler)
saveBtn12El.on("click", saveBtn12handler)
saveBtn13El.on("click", saveBtn13handler)
saveBtn14El.on("click", saveBtn14handler)
saveBtn15El.on("click", saveBtn15handler)
saveBtn16El.on("click", saveBtn16handler)
saveBtn17El.on("click", saveBtn17handler)

//repopulate textarea from localstorage on reload
var textArea9Val;
var textArea10Val;
var textArea11Val;
var textArea12Val;
var textArea13Val;
var textArea14Val;
var textArea15Val;
var textArea16Val;
var textArea17Val;

function getTextAreaValue(){
    textArea9Val= $("textarea#textarea9").val();
    textArea10Val= $("textarea#textarea10").val();
    textArea11Val= $("textarea#textarea11").val();
    textArea12Val= $("textarea#textarea12").val();
    textArea13Val= $("textarea#textarea13").val();
    textArea14Val= $("textarea#textarea14").val();
    textArea15Val= $("textarea#textarea15").val();
    textArea16Val= $("textarea#textarea16").val();
    textArea17Val= $("textarea#textarea17").val();
   }   

function init(){
    getTextAreaValue();
textArea9El.text(localStorage.getItem("textarea9val"))
textArea10El.text(localStorage.getItem("textarea10val"))
textArea11El.text(localStorage.getItem("textarea11val"))
textArea12El.text(localStorage.getItem("textarea12val"))
textArea13El.text(localStorage.getItem("textarea13val"))
textArea14El.text(localStorage.getItem("textarea14val"))
textArea15El.text(localStorage.getItem("textarea15val"))
textArea16El.text(localStorage.getItem("textarea16val"))
textArea17El.text(localStorage.getItem("textarea17val"))
}

init();
