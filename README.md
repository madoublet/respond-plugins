# Respond 6 Plugins
Plugins for Respond 6.  https://respondcms.com

### General Installation
1. Copy the contents of the plugin folder (e.g. fetch) into your public/sites/[site-name]/plugins folder.  The plugin file (e.g. fetch.html) should be at public/sites/plugins/fetch.html.
2. The plugin JS is located at [plugin-name]/[plugin-name]/plugin.js.  Copy this into your plugins array at resources/sites/[site-name]/plugins.js. This adds the plugin to your editor menu.
3. Follow any special instructions for the plugin below.

### Fetch
1. Follow the General Installation above.
2. Add a reference to the fetch.js in pages that utilize fetch.
```
<script src="plugins/fetch/fetch.js"></script>
```