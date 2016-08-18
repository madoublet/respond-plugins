var fetch = [
  {
        action: "respond.fetch",
        selector: "[respond-plugin][type=fetch]",
        title: "Fetch a URL from the server",
        display: '<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="100%" viewBox="0 0 24 24" width="100%"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z"/></svg>',
        view: '<div class="respond-plugin"><svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="100%" viewBox="0 0 24 24" width="100%"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z"/></svg><span>' + hashedit.i18n('Fetch') + '</span></div>',
        html: '<div respond-plugin type="fetch" url="plugins/resources/example.php"></div>',
        attributes: [
        {
          attr: 'url',
          label: 'URL',
          type: 'text'
        }
      ]
  }];