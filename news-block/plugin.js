var plugins = [
  {
      action: "respond.newsBlock",
      selector: "[respond-plugin][type=news-block]",
      title: "News",
      display: '<svg fill="#000000" height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z"/></svg>',
      view: '<div class="respond-plugin"><svg fill="#000000" height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z"/></svg><span>' + hashedit.i18n('News') + '</span></div>',
      html: '<div respond-plugin type="news-block" route="/news" animation="fadeIn" cycle="10"></div>',
      attributes: [
        {
          attr: 'route',
          label: 'Component Directory',
          type: 'select',
          values: ['respond.components.routes']
        },
        {
          attr: 'animation',
          label: 'Animation',
          type: 'select',
          values: ['fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeinRightBig', 'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'flipInX', 'flipInY', 'lightSpeedIn', 'lightSpeedOut', 'rotateIn', 'slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight']
        },
        {
          attr: 'cycle',
          label: 'Cycle Time',
          type: 'select',
          values: ['5', '10', '15', '20', '25']
        }
      ]
  }
];