"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Nicolas Catlin
   Date: 05/06/2019

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/
window.addEventListener("load", setStyles); // Event listener for page load that runs setStyles

function randInt(size) { // provided function for random integer
	
   return Math.floor(size*Math.random());
   
}

function setStyles() { // setStyles function for random generation of different style sheets for page load
	
	var styleNum = randInt(5); // sets random int to a variable with paramater of 0 through 4
	
	var stFile = "na_style_" + styleNum + ".css";  // creates the link with variable num
	var linkElem = document.createElement("link"); // creates element stored in variable
	linkElem.setAttribute("rel", "stylesheet"); // sets rel attribute
	linkElem.setAttribute("type", "text/css"); // sets type attribute
	linkElem.setAttribute("id", "fancySheet"); // sets id
	linkElem.setAttribute("href", stFile); // sets link
	
	document.getElementsByTagName("head")[0].appendChild(linkElem); // appends the link to the header
	
	var figBox = document.createElement("figure"); //creates figure element
	figBox.setAttribute("id", "styleThumbs"); // sets id attribute of figure
	document.getElementById("box").appendChild(figBox); // appends box element to figbox
	
	for (var i = 0; i < 5; i++) { // for loop for thumbnail imgs
		var sheetImg = document.createElement("img"); // creates img element for sheetImg
		sheetImg.setAttribute("src", "na_small_" + i + ".png"); // sets attribute for thumb picture
		sheetImg.setAttribute("alt", "na_style_" + i + ".css"); // sets attribute for css style
		
		sheetImg.addEventListener("click", function(e) { // adds event listener for click on thumbnails
				document.getElementById("fancySheet").setAttribute("href", e.target.getAttribute("alt")); //gets element fancySheet, sets href attribute, and adds function for click
			});
		
		figBox.appendChild(sheetImg); // appends sheetImg
	}
}

var thumbStyles = document.createElement("style"); // declares thumbStyles variable with style stored
var styleString = "figure#styleThumbs {position: absolute; left: 0px; bottom: 0px;}" // stores css into variable
styleString += "figure#styleThumbs img {outline: 1px solid black; cursor: pointer; opacity: 0.75;}" // appends concat css string
styleString += "figure#styleThumbs img:hover {outline: 1px solid red; opacity: 1.0;}" // appends concat css string
thumbStyles.style.cssText = styleString; // stores styleString in thumbStyle
thumbStyles.appendChild(document.createTextNode(styleString)); // creates/appends text node
document.getElementsByTagName("head")[0].appendChild(thumbStyles); // appends thumbStyle to head