tabris.ui.set("toolbarVisible", false);
var page = new tabris.Page({
topLevel: true
}).open();

//---------------------------------------------------------------------------------------------------------------------------

var color = "rgb(120,120,120)";
var number1 = 0;
var number2 = 0;
var equal;

//värillinen tausta
var calculator = new tabris.Composite({
 layoutData: {bottom: 5, left: 5, right: 5, top: 60},
  background: "rgb(230,220,180)",
  cornerRadius: 5
}).appendTo(page);

//ensimmäisen luvunsyötön tausta
var value1 = new tabris.Composite({
  layoutData: {top: 65, right: 15, left: 15, height: 50},
  background: "white",
  cornerRadius: 5
}).appendTo(calculator);

//toisen luvunsyötön tausta
var value2 = new tabris.Composite({
  layoutData: {top: 125, right: 15, left: 15, height: 50},
  background: "white",
  cornerRadius: 5
}).appendTo(calculator);

//tuloksen tausta
var equals = new tabris.Composite({
  layoutData: {top: 185, right: 15, height: 40, width: 120},
  background: "white",
  cornerRadius: 5
}).appendTo(calculator);

//lukujen yhteenlasku
new tabris.Composite({
  layoutData: {bottom: 140, left: 10, width: 160, height: 120},
  background: color,
  cornerRadius: 5,
  highlightOnTouch: true
}).on("tap", function(widget,value){
  page.find("#calculate").set("text", (equal = -number1-number2)*(-1));
}).on("resize", function(widget,value){
  new tabris.TextView({
    layoutData: {centerX: 0, centerY: 0},
    alignment: "center",
    font: "50px",
    text: "+",
    textColor: "white"
  }).appendTo(widget);
}).appendTo(calculator);

//lukujen vähennyslasku
new tabris.Composite({
  layoutData: {bottom: 140, right: 10, width: 160, height: 120},
  background: color,
  cornerRadius: 5,
  highlightOnTouch: true
}).on("tap", function(widget,value){
  page.find("#calculate").set("text", (equal = number1-number2));
}).on("resize", function(widget,value){
  new tabris.TextView({
    layoutData: {centerX: 0, centerY: 0},
    alignment: "center",
    font: "50px",
    text: "–",
    textColor: "white"
  }).appendTo(widget);
}).appendTo(calculator);

//lukujen jakolasku
new tabris.Composite({
  layoutData: {bottom: 10, left: 10, width: 160, height: 120},
  background: color,
  cornerRadius: 5,
  highlightOnTouch: true
}).on("tap", function(widget,value){
  page.find("#calculate").set("text", (equal = number1/number2));
}).on("resize", function(widget,value){
  new tabris.TextView({
    layoutData: {centerX: 0, centerY: 0},
    alignment: "center",
    font: "50px",
    text: "÷",
    textColor: "white"
  }).appendTo(widget);
}).appendTo(calculator);

//lukujen kertolasku
new tabris.Composite({
  layoutData: {bottom: 10, right: 10, width: 160, height: 120},
  background: color,
  cornerRadius: 5,
  highlightOnTouch: true
}).on("tap", function(widget, value){
  page.find("#calculate").set("text", (equal = number1*number2));
}).on("resize", function(widget,value){
  new tabris.TextView({
    layoutData: {centerX: 0, centerY: 0},
    alignment: "center",
    font: "50px",
    text: "×",
    textColor: "white"
  }).appendTo(widget);
}).appendTo(calculator);

//ensimmäisen luvun syöttö
 new tabris.TextInput({
  id: "values1",
  layoutData: {right: 1, left: 1, top: 0, bottom: 0},
  keyboard: "number",
  message: "Insert value1",
  alignment: "center",
  font: "24px",
  background: "white"
}).on("change:text", function(widget, text){
   number1 = text
}).appendTo(value1);  

//toisen luvun syöttö
 new tabris.TextInput({
  id: "values2",
  layoutData: {right: 1, left: 1, top: 0, bottom: 0},
  alignment: "center",
  keyboard: "number",
  message: "Insert value2",
  font: "24px",
  background: "white"
}).on("change:text", function(widget, text){
   number2 = text
}).appendTo(value2);  

//tulos
 new tabris.TextView({
  id: "calculate",
  layoutData: {centerX: 0, top: 0, bottom: 0},
  alignment: "right",
  font: "18px",
  background: "white"
}).appendTo(equals);

//lisäketeksti
 new tabris.TextView({
  layoutData: {centerX: 0, top: 192.5},
  alignment: "left",
  text: "=",
  font: "18px"
}).appendTo(calculator);  
