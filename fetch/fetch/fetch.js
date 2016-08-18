var respond = respond || {};

/*
 * Fetches data from the server
 * Usage:
 * <div respond-fetch url="url-to-fetch.html"></div>
 */
respond.fetch = (function() {

  return {

    version: '0.0.1',

    /**
     * Setups the fetch
     */
    setup: function() {

      var el, a, els, url, data;

      els = document.querySelectorAll('[respond-plugin][type=fetch]');

      // walk through elements
      for(x=0; x<els.length; x++) {

        if(els[x].hasAttribute('url') === true) {

          el = els[x];

          // get url
          url = els[x].getAttribute('url');

          // extract url
          a = document.createElement('a');
          a.setAttribute('href', url);

          // extract url relative to base
          url = a.href;

          // get content
    			respond.fetch.getContent(el, url);

        }

      }

    },

    /**
     * Setups the fetch
     */
    getContent: function(el, url) {

      // xhr
			var xhr = new XMLHttpRequest();
			xhr.open('GET', encodeURI(url));

			xhr.onload = function() {
			    if (xhr.status === 200) {
            data = xhr.responseText;

			    	el.innerHTML =  data;
			    }
			    else {
			        console.log('[respond.error] respond-fetch: failed post, xhr.status='+xhr.status);
			    }
			};
			xhr.send();

    }


  }

})();

respond.fetch.setup();