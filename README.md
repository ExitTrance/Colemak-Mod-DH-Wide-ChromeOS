# Colemak Mod-DH Wide for ChromeOS (QWERTY)
Little extension to enable the Colemak Mod-DH Wide layout for ChromeOS with specifcally a QWERTY UK Layout.

### Mod-DH Wide Layout

![Picture of the Layout](https://colemakmods.github.io/mod-dh/gfx/mod_dh_keyb_iso_wide.png)

### How to use it
1. Place `main.js` and `manifest.json` in a folder. 
2. Go to `chrome://extensions/` and enable Developer mode.
3. Click on 'Load unpacked' and select the folder where both files are located at.
4. Go to the following link `chrome://settings/inputMethods` or `chrome://settings/languages` and navigate to 'Input method' -> 'Manage input methods'.
5. Select 'UK Colemak Mod-DH Wide'. 
6. Use Ctrl+Space to switch between layouts.

### How to modify the layout
If you want to modify the layout for whatever purpose, you can do so using `main.js`.  For example, you could switch this from a QWERTY to a QWERTZ layout by swapping the Z and Y keys around. Granted, you'll have to swap around a lot more, and add special Characters like Umlaute.



```javascript
//QWERTZ
// "Actual Key" : "Desired Key"

var chars = {
...
  "Z": "{",   "z": "[",
...
  "Y": "X",   "y": "x",
...
}
```



### Credit

[Chrome API Documentation](https://developer.chrome.com/extensions/input_ime)

[Layout Mod-DH](https://colemakmods.github.io/mod-dh/keyboards.html)




