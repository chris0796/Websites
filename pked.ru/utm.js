//calltracking free script from trackads
//

function addEvent(evnt, elem, func) {
   if (elem.addEventListener)  // W3C DOM
      elem.addEventListener(evnt,func,false);
   else if (elem.attachEvent) { // IE DOM
      elem.attachEvent("on"+evnt, func);
   }
   else { // No much to do
      elem["on"+evnt] = func;
   }
}

addEvent('DOMContentLoaded', document, function() {
	trackads.init();
});


var trackads = {
	//prefix for cookie
	cookie_prefix: 'trackads_',
	//lifetime cookie
	cookie_lifetime: 31,
	
	//main method
	init: function(){
		this.setUtm();
	},
	//set utm to cookie
	setUtm: function(){
		var utm = this.getMainParameters();
		
		if (!this.isEmptyObject(utm))
		{
			var utm_campaign = '';
			var utm_content = '';
			var utm_medium = '';
			var utm_source = '';
			var utm_term = '';
			
			if (typeof utm.utm_campaign != 'undefined')
				utm_campaign = utm.utm_campaign;
		
			if (typeof utm.utm_content != 'undefined')
				utm_content = utm.utm_content;
			
			if (typeof utm.utm_medium != 'undefined')
				utm_medium = utm.utm_medium;
			
			if (typeof utm.utm_source != 'undefined')
				utm_source = utm.utm_source;
			
			if (typeof utm.utm_term != 'undefined')
				utm_term = utm.utm_term;
			
			this.setCookie(this.cookieName('utm_campaign'), utm_campaign, this.cookie_lifetime);
			this.setCookie(this.cookieName('utm_content'), utm_content, this.cookie_lifetime);
			this.setCookie(this.cookieName('utm_medium'), utm_medium, this.cookie_lifetime);
			this.setCookie(this.cookieName('utm_source'), utm_source, this.cookie_lifetime);
			this.setCookie(this.cookieName('utm_term'), utm_term, this.cookie_lifetime);
		}
	},
	//return cookie name
	cookieName: function(name)
	{
		return this.cookie_prefix + name;
	},
	//get utm from GET parameters
	getMainParameters: function()
	{
		var result = {};
		
		var requests = this.GET(window.location.search.substring(1));
		
		if (typeof requests.utm_campaign != 'undefined' && requests.utm_campaign != '')
			result.utm_campaign = requests.utm_campaign;
		
		if (typeof requests.utm_content != 'undefined' && requests.utm_content != '')
			result.utm_content = requests.utm_content;
		
		if (typeof requests.utm_medium != 'undefined' && requests.utm_medium != '')
			result.utm_medium = requests.utm_medium;
		
		if (typeof requests.utm_source != 'undefined' && requests.utm_source != '')
			result.utm_source = requests.utm_source;
		
		if (typeof requests.utm_term != 'undefined' && requests.utm_term != '')
			result.utm_term = requests.utm_term;
				
		return result;
	},
	//check object is empty
	isEmptyObject: function(obj) {
		for(var prop in obj) {
			if(obj.hasOwnProperty(prop))
				return false;
		}

		return JSON.stringify(obj) === JSON.stringify({});
	},
	//set cookie
	setCookie: function(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	},
	//get cookie
	getCookie: function(cname){
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i <ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	},
	//GET params
	GET: function(query) {
	  var vars = query.split("&");
	  var query_string = {};
	  for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		// If first entry with this name
		if (typeof query_string[pair[0]] === "undefined") {
		  query_string[pair[0]] = decodeURIComponent(pair[1]);
		  // If second entry with this name
		} else if (typeof query_string[pair[0]] === "string") {
		  var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
		  query_string[pair[0]] = arr;
		  // If third or later entry with this name
		} else {
		  query_string[pair[0]].push(decodeURIComponent(pair[1]));
		}
	  }
	  return query_string;
	}
}


//thanks to 
//https://www.w3schools.com/js/js_cookies.asp
//https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
//https://stackoverflow.com/questions/22678346/convert-javascript-object-to-url-parameters