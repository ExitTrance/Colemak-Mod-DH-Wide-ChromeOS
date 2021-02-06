# Colemak Mod-DH Wide (+ Extend Mod) for ChromeOS (QWERTY)

Chrome extension to enable the Colemak Mod-DH Wide layout for ChromeOS with specifically a QWERTY UK Layout. Tested and working on the Dell CB13 7310 on ChromeOS 84.04147.37 (Beta). Does not require the ChromeOS Developer Mode to be turned on, as far as I know. This can be modified to accommodate any layout, as it simply converts binded keys to some user defined text when typed. As it is an extension, it does not work on the lock/login screen. According to [Extra Keyboards for ChromeOS](https://github.com/google/extra-keyboards-for-chrome-os), and through own testing using [this](https://codepen.io/Sohail05/pen/yOpeBm) codepen, I have found that ChromeOS defaults to your main keyboard for any password fields.

I doubt anyone will use this, but this is more so for keeping save the effort I made to make Colemak work on ChromeOS. Sadly you are NOT able to activate Search, Assistant, or any of the ChromeOS wide shortcuts like switching Desks yet, which would have made this mod so much more enjoyable. However, you are able to use one click Copy, Cut, and Paste (Undo does not work for some odd reason.)!! Also, moving Ctrl, Shift (and Backspace) to the homerow or close to it, has allowed me to make working with text a lot more comfortable.

### Mod-DH Wide Layout
Choice of Extend key is Capslock here which has been remapped to be in the location of the Search Key on ChromeOS. Too lazy to provide a graphic of the Extend mapping since it is very personal. 

![Picture of the Layout](https://colemakmods.github.io/ergonomic-mods/gfx/wide/colemak_dh_keyb_iso_angle_wide.png)


### How to use it

1. Place `background.js` and `manifest.json` in a folder. 
2. Go to `chrome://extensions/` and enable the 'Developer mode'.
3. Click on 'Load unpacked' and select the folder where both files are located at.
4. Go to the following link `chrome://settings/inputMethods` or `chrome://settings/languages` and navigate to 'Input method' -> 'Manage input methods'.
5. Select 'UK Colemak Mod-DH Wide'. 
6. Use Ctrl+Space to switch between layouts.


### How to modify the layout

If you want to modify the layout for whatever purpose, you can do so by modifying the 'dic' object inside `background.js`. For simple remapping of non-shifted and shifted keys, simply use the first two entries in the array. For extended mapping, use 3rd entry as the actual key to be pressed, and the 4th entry whether shift/alt/ctrl are pressed during the key extended key. Note that for remapping Control/Shift/Alt, you have to have the respective key set to pressed as well as shown below.
```javascript
// "Actual Key" : ["non-shift", "shifted", "extended mapping key", "shiftKey, altKey, ctrlKey"]

"KeyD": ["s", "S", null, null],
"KeyF": ["t", "T", "Control", "ctrlKey"],

```

### Credit

[Chrome API Documentation](https://developer.chrome.com/extensions/input_ime)

[Layout Mod-DH](https://colemakmods.github.io/mod-dh/keyboards.html)
