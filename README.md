#Currently Broken#


OldBrowserDetector
https://github.com/korylprince/OldBrowserDetector

Because of the incompatibility of browser-update.org with https sites, and because I could find no other alternative, I gutted the code and wrote my own (simpler) version. You can host this version yourself (or use this repo as a CDN, though it's not recommended.) You'll find this code much simpler (and cleaner) but perhaps not as pretty (I call it "lightweight.")

#Usage#
There are a few options you can configure. This code detects versions on IE, Firefox, Chrome, Opera, and Safari (and Netscape Navigator, but it's dead, so all versions get the message.) The default versions are: IE(7), Firefox(4), Chrome(15), Opera(10.6), and Safari(4). Note that the number is highest version that will *still* display the message; i.e., Firefox 4 will display the message.

The language is detected from the browser. There exists several translations. Unknown languages default to English. You can also force a language. If you'd like a translation to be included send me a pull request.

You can set the URL to whatever you like, optionally including the two-letter language code. The default is the browser-update.org site because it has all the translations. If you're using only English I suggest http://browsehappy.com/ .

To add this to your site, host detect.min.js somewhere, paste the code, and modify it to meet your options:

    <script type="text/javascript"> 
        var options = { //delete this variable and remove from below, or set options = {} for defaults
        versions: {i:7,f:4,c:15,o:10.6,s:4,n:10}, //Set versions. Letter is first letter of browser name
        language: 'en', //Force the language. Leave off to let browser select
        url: 'http://browser-update.org/%s/update.html' //url for the link. %s resolves to language code
    };  
    var $win = window.onload; 
    window.onload=function(){ 
        try {if ($win) $win();}catch (e) {}
        var e = document.createElement("script"); 
        e.setAttribute("type", "text/javascript"); 
        e.setAttribute("src", "detect.min.js"); // set this url to where you have the script hosted 
        document.body.appendChild(e); 
        detectOldBrowser(options); // remove options here if using defaults
    }   
    </script>

Most of the magic lies in the Browser Detection code and translations by browser-update.org. I only modified it to return the language and check the Chrome version 15 seemed like a good number.

If you have any issues or questions, email the email address below, or open an issue at: https://github.com/korylprince/OldBrowserDetector/issues

#Debugging#

To force the message to show run the following in a javascript console:

    detectOldBrowser($options, true);

Where $options is in the format above. (Or just {} for defaults.)

You can check the output of the browser detector by running:

    getBrowser()

#Translating#

Find your language code by opening a javascript console and running:

    (window.navigator["language"]||window.navigator["userLanguage"]||document.documentElement.getAttribute("lang")||"en").substring(0,2)

Now translate the following message:

    Your browser (%s) is <b>out of date</b>. It has known <b>security flaws</b> and may <b>not display all features</b> of this and other websites. <a%s>Learn how to update your browser</a>

Leaving html tags and %s in place. You can create a pull request, or simply open an issue with the translation and I will add it.

#Copyright Information#
Copyright 2013 Kory Prince (korylprince AT gmail DAWT com). Some code (GetBrower, getTranslation) is Copyright 2007-2009 browser-update.org.

Minified with http://jscompress.com/ .

License is a MIT Style License included in this repo.
