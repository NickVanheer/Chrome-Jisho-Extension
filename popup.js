/*
This extension allows you to look up a word on the popular Japanese dictionary website Jisho. 
You can click the extension icon and enter a word to look up, 
or you can select a word to look up on the webpage you're viewing first.

A popular extension similar like this, Rikaikun, already exists, but it only allows you to translate Japanese words.
With this plugin you can easily get all information related to both English and Japanese words on Jisho.org. 
Furthermore it's also a great tool when you're watching Japanese movies/trailers etc. in your browser 
and you don't want to tab back and forth between Jisho and your viewing tab to look up Japanese words.

Made by Nick. ~ (Student Japanology @ KUL, Belgium)
www.twitter.com/@MoogleKupoCake 
www.nickvanheer.com
*/

chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {

	var urlSearch = "http://jisho.org/search/";
	
	if(selection[0].toString().length > 0)
		document.getElementById("frameURL").src = urlSearch + selection[0];
});