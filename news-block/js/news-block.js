/*
 * Cycles through a news block
 * Usage:
 * respond.newsBlock.setup();
 */
respond.newsBlock = (function() {

  'use strict';

  return {

    version: '0.0.1',

    /**
     * Creates the component
     */
    setup: function() {

      var x, el, blocks, time=5, animation="bounceIn";

      blocks = document.querySelectorAll('.news-block');

      // cycle
      function cycle(block, time, animation) {

          setInterval(function() {

              var parent, next, els, el, next, x;

              // get parent
              el = block.querySelector('[active]');

              next = el.nextSibling;

              // cycle to first item
              if(next == null) {
                  next = block.querySelector('[respond-plugin]');
              }

              // clearout old items
              els = block.querySelectorAll('[respond-plugin]');

              for(x=0; x<els.length; x++) {
                  els[x].removeAttribute('active');
                  els[x].classList.remove('animated');
                  els[x].classList.remove(animation);
              }

              // set active
              if(next != null) {
                next.setAttribute('active', '');
                next.classList.add('animated');
                next.classList.add(animation);
              }

          }, time*1000);

      }

      // set
      for(x=0; x<blocks.length; x++) {

          if(blocks[x].hasAttribute('animation')) {
            animation = blocks[x].getAttribute('animation');
          }

          // set first one active
          el = blocks[x].querySelector('[respond-plugin]');

          if(el != null) {
              el.setAttribute('active', '');
              el.classList.add('animated');
              el.classList.add(animation);
          }

          cycle(blocks[x], time, animation);

      }

    }

  }

})();

respond.newsBlock.setup();