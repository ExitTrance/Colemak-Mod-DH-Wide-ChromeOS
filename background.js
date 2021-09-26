/*
Copyright 2018 The Extra Keyboards for Chrome OS Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var mod_keys  = {shiftKey: false, ctrlKey: false}
 
var contextID = 0;

var dic = {
    "Digit1": ["!", "1", null, null],
    "Digit2": ["\"", "2", null, null],
    "Digit3": ["£", "3", null, null],
    "Digit4": ["$", "4", null, null],
    "Digit5": ["%", "5", null, null],
    "Digit6": ["=", "+", null, null],
    "Digit7": ["^", "6", null, null],
    "Digit8": ["&", "7", null, null],
    "Digit9": ["*", "8", null, null],
    "Digit0": ["(", "9", null, null],
    "Minus":  [")", "0", null, null],
    "Equal":  ["-", "_", null, null],

    "KeyQ": ["q", "Q", null, null],
    "KeyW": ["w", "W", null, null],
    "KeyE": ["f", "F", "Escape", null],
    "KeyR": ["p", "P", null, null],
    "KeyT": ["b", "B", null, null],
    "KeyY": ["[", "{", null, null],
    "KeyU": ["j", "J", null, null],
    "KeyI": ["l", "L", null, null],
    "KeyO": ["u", "U", "ArrowUp", null],
    "KeyP": ["y", "Y", null, null],
    "BracketLeft": [";", ":", null, null],
    "BracketRight": ["/", "?", null, null],
    
    "KeyA": ["a", "A", null, null],
    "KeyS": ["r", "R", null, null],
    "KeyD": ["s", "S", "Shift", "shiftKey"],
    "KeyF": ["t", "T", "Control", "ctrlKey"],
    "KeyG": ["g", "G", "KeyA", null],
    "KeyH": ["]", "}", null, null],
    "KeyJ": ["m", "M", null, null],
    "KeyK": ["n", "N", "ArrowLeft", null],
    "KeyL": ["e", "E", "ArrowDown", null],
    "Semicolon": ["i", "I", "ArrowRight", null],
    "Quote": ["o", "O", "Shift", "shiftKey"],
    //~ and # on UK keyboards
    "Backslash": ["'", "@", null],

    "IntlBackslash": ["z", "Z", "Undo", null],
    "KeyZ": ["x", "X", "Cut", null],
    "KeyX": ["c", "C", "Copy", null],
    "KeyC": ["d", "D", "Paste", null],
    "KeyV": ["v", "V", "Backspace", null],
    "KeyB": ["\\", "|", "LaunchAssistant", null],
    "KeyN": ["#", "~", null, null],
    "KeyM": ["k", "K", null, null],
    "Comma": ["h", "H", null, null],
    "Period": [",", "<", null, null],
    "Slash": [".", ">", null, null],
    
};



chrome.input.ime.onFocus.addListener(
    function(context) {
        contextID = context.contextID;
    }
);

chrome.input.ime.onBlur.addListener(() => {
    contextID = -1;
})



chrome.input.ime.onKeyEvent.addListener(


    function(engineID, keyData) {
        var handled = false;
        //console.log(keyData)
        if (keyData.type == "keydown") {
        
            if (dic[keyData.code]) {
                let shifted = false ^ keyData.shiftKey;
                let emit = dic[keyData.code][shifted];

                if (keyData.capsLock) {
                    original_key = keyData.code
                    keyData.code = dic[keyData.code][2];
                    if (keyData.code != null) {
                        keyData.key = ""

                        if(dic[original_key][3] != null) {
                            mod_keys[dic[original_key][3]] = true
                        }
                        
                        keyData.ctrlKey  = keyData.ctrlKey   || mod_keys["ctrlKey"] 
                        keyData.shiftKey = keyData.shiftKey  || mod_keys["shiftKey"] 
                        console.log(keyData)
                        chrome.input.ime.sendKeyEvents({
                            "contextID": contextID,
                            "keyData": [keyData]
                        });
                        
                       
                        
                    }

                } else if (emit != null && contextID != 0) {
                    chrome.input.ime.commitText({
                        "contextID": contextID,
                        "text": emit,
                    }, () => {
                        if (chrome.runtime.lastError) {
                            console.error('Error committing text:', chrome.runtime.lastError);
                            return;
                        }
                    });
                }

                handled = true;
            }


        }else if(keyData.type == "keyup"){
            if(dic[keyData.code] && keyData.capsLock ){
                original_key = keyData.code
                keyData.code = dic[keyData.code][2];
                
                if(keyData.code != null) {
                    if(dic[original_key][3] != null) {
                        mod_keys[dic[original_key][3]] = false
                    }

                    keyData.ctrlKey  = keyData.ctrlKey   || mod_keys["ctrlKey"] 
                    keyData.shiftKey = keyData.shiftKey  || mod_keys["shiftKey"] 
                    
                    console.log(keyData)
                    chrome.input.ime.sendKeyEvents({
                        "contextID": contextID,
                        "keyData": [keyData]
                    });
                }
              
                
                handled = true;
            }
            
            
        }
        
        
        
        return handled;
    });
