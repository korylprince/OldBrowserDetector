OldBrowserDetector
https://github.com/korylprince/OldBrowserDetector

Because of the incompatibility of browser-update.org with https sites, and because I could find no other alternative, I gutted the code and wrote my own (simpler) version. You can host this version yourself or use this repo as a CDN, using the gh-pages branch (see below.) You'll find this code much simpler (and cleaner) but perhaps not as pretty (I call it "lightweight.")

#Usage#
There are a few options you can configure. This code detects versions on IE, Firefox, Chrome, Opera, and Safari (and Netscape Navigator, but it's dead, so all versions get the message.) The default versions are: IE(7), Firefox(4), Chrome(15), Opera(10.6), and Safari(4). Note that the number is highest version that will *still* display the message; i.e., Firefox 4 will display the message.

The language is detected from the browser. There exists several translations. Unknown languages default to English. You can also force a language. If you'd like a translation to be included send me a pull request.

You can set the URL to whatever you like, optionally including the two-letter language code. The default is the browser-update.org site because it has all the translations. If you're using only English I suggest http://browsehappy.com/ .

To add this to your site, simply paste this code into the bottom of your page (See CDN section below for more info):

    <script src="//korylprince.github.com/OldBrowserDetector/detect.min.js" type="text/javascript"></script>

This will use all the default options. See the included index.html for each option.

Note that while using the above url is fine for http sites, if you use it on an https site several browsers will give you sass. At that point you should host it yourself. All you do differently is put the file somewhere on an https server and use that url instead.

Most of the magic lies in the Browser Detection code and translations by browser-update.org. I only modified it to return the language and check the Chrome version; 15 seemed like a good number.

Since version 1.0.0, the style is also updated.

If you have any issues or questions, email the email address below, or open an issue at: https://github.com/korylprince/OldBrowserDetector/issues

#CDN#

You can use the gh-pages branch of this repo as a CDN. To link to the current stable version use:

    //korylprince.github.io/OldBrowserDetector/detect.min.js

Note, however, that while I will try not to ever break anything, I can't make any promises. If you find a version that works for you, you can link to it like:

    //korylprince.github.io/OldBrowserDetector/detect-1.0.0.min.js

For more information about using Github as a CDN see [here](http://code.lancepollard.com/github-as-a-cdn/).

If you're wondering why there are no longer `http:`'s in front, Github now has HTTPS support on Github Pages which means we can use the CDN over SSL now. The `//` scheme will make the browser choose `http:` or `https:` depending on how the calling page is loaded.

#Debugging and Developing#

The included index.html now automatically checks for a local detect.js first before pointing to the latest stable in the CDN. This allows you to test local changes easier.

To force the message to show run the following in a javascript console:

    detectOldBrowser(this.detectOptions);

Where this.detectOptions.debug = true.

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
