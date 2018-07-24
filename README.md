# Colemak Mod-DH Wide for ChromeOS (QWERTY)

Little extension to enable the Colemak Mod-DH Wide layout for ChromeOS with specifically a QWERTY UK Layout. Tested and working on the Dell CB13 7310. Does not require the ChromeOS Developer Mode to be turned on, as far as I know. This can be modified to accommodate any layout, as it simply converts binded keys to some user defined text when typed. As it is an extension, it does not work on the lock/login screen. According to [Extra Keyboards for ChromeOS](https://github.com/google/extra-keyboards-for-chrome-os), and through own testing using [this](https://codepen.io/Sohail05/pen/yOpeBm) codepen, I have found that ChromeOS defaults to your main keyboard for any password fields.


### Mod-DH Wide Layout

![Picture of the Layout](https://colemakmods.github.io/mod-dh/gfx/mod_dh_keyb_iso_wide.png)


### How to use it

1. Place `main.js` and `manifest.json` in a folder. 
2. Go to `chrome://extensions/` and enable the 'Developer mode'.
3. Click on 'Load unpacked' and select the folder where both files are located at.
4. Go to the following link `chrome://settings/inputMethods` or `chrome://settings/languages` and navigate to 'Input method' -> 'Manage input methods'.
5. Select 'UK Colemak Mod-DH Wide'. 
6. Use Ctrl+Space to switch between layouts.


### How to modify the layout

If you want to modify the layout for whatever purpose, you can do so by modifying the 'chars' object inside `main.js`. For example, you could switch the Z and Y keys around in the case of a QWERTZ keyboard.

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
