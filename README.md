# Cyrillo _(Firefox Extension)_

![logo1](https://github.com/TheAdnan/Cyrillo/blob/master/icons/icon.png?raw=true) _Convert latin to cyrillic letters on any website_ ![logo2](https://github.com/TheAdnan/Cyrillo/blob/master/icons/icon.png?raw=true)
<br>

This WebExtension can be downloaded here: [addons.mozilla.org/en-US/firefox/addon/cyrillo/](https://addons.mozilla.org/en-US/firefox/addon/cyrillo/).

## To Build the Extension for Chrome

Visit [chrome://extensions](chrome://extensions).
![... menu, more tools, extensions](https://i.imgur.com/5cGL2Mo.png)

Click "Load Unpacked Extension" and select the Cyrillo folder.
This will compile and enable the extension in your browser. Test it out. If is well, it's time to pack the extension.
![extension page header](https://i.imgur.com/6SBTwqr.png)


Go back to the extensions page and click "Pack Extension". Select the Cyrillo Folder as the "Extension Root Directory"
*You do not need to select a Private Key if this is the first time you have built the extension. A .pem key will be generated automatically. Save this key in case you need to rebuild the extension later. If you have packed this extension before, you should select your previously generated .pem key.*

You should now find files named **Cyrillo.crx** and **Cyrillo.pem** in the same directory as your Cyrillo folder. Drag the .crx file into any chrome browser to enable the extension.
