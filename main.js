// Copyright 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/docs/examples/api/input.ime/basic/main.js

var ime_api = chrome.input.ime;

var context_id = -1;

console.log("Initializing IME");

ime_api.onFocus.addListener(function(context) {
  console.log('onFocus:' + context.contextID);
  context_id = context.contextID;
});
ime_api.onBlur.addListener(function(contextID) {
  console.log('onBlur:' + contextID);
  context_id = -1;
});

ime_api.onActivate.addListener(function(engineID) {
  console.log('onActivate:' + engineID);
});
ime_api.onDeactivated.addListener(function(engineID) {
  console.log('onDeactivated:' + engineID);
});

ime_api.onKeyEvent.addListener(
function(engineID, keyData) {
  console.log('onKeyEvent:' + keyData.key + " context: " + context_id);
  if (keyData.type == "keydown" && keyData.key.match(/^[a-zA-Z0-9.!@?#"$%&:';()*\+,\/;\-=[\\\]\^_{|}<>~` ]+$/)){
    var chars = {
        "6": "=",   "^": "+",
        "7": "6",   "&": "^",
        "8": "7",   "*": "&",
        "9": "8",   "(": "*",       
        "0": "9",   ")": "(",
        "-": "0",   "_": ")",
        "=": "-",   "+": "_",
        
        "Q": "Q",   "q": "q",
        "W": "W",   "w": "w",
        "E": "F",   "e": "f",
        "R": "P",   "r": "p",
        "T": "B",   "t": "b",
        "Y": "{",   "y": "[",
        "U": "J",   "u": "j",
        "I": "L",   "i": "l",
        "O": "U",   "o": "u",
        "P": "Y",   "p": "y",
        "{": ":",   "[": ";",
        "}": "?",   "]": "/",
        
        "A": "A",   "a": "a",
        "S": "R",   "s": "r",
        "D": "S",   "d": "s",
        "F": "T",   "f": "t",
        "G": "G",   "g": "g",
        "H": "}",   "h": "]",
        "J": "K",   "j": "k",
        "K": "N",   "k": "n",
        "L": "E",   "l": "e",
        ":": "I",   ";": "i",
        "@": "O",   "'": "o",
        "~": "@",   "#": "'",
        
        "|": "Z",   "\\": "z",
        "Z": "X",   "z": "x",
        "X": "C",   "x": "c",
        "C": "D",   "c": "d",
        "V": "V",   "v": "v",
        "B": "|",   "b": "\\",
        "N": "~",   "n": "#",
        "M": "M",   "m": "m",
        "<": "H",   ",": "h",
        ">": "<",   ".": ",",
        "?": ">",   "/": ".",
    };
        
    chrome.input.ime.commitText({"contextID": context_id, "text": chars[keyData.key]});
    return true;
  }
    

  return false
});
