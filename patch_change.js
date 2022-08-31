#!/usr/bin/env node
'use strict';

var arg = process.argv[2];
var cc  = '0';

if (arg){
  switch (true){
    case (arg >= 0 && arg <= 127):
        cc = '0';
        break;
    case (arg >= 128 && arg <= 255):
        cc = '1';
        break;
    case (arg > 255):
        cc = '2';
        break;
  }
}

changePatch(cc);


function changePatch(patchId){
  var exec = require('child_process').exec;
  var cmd = './dep/DHSendMIDI --channel 2 --cc 0 ' + String(patchId) + '; ./dep/DHSendMIDI --program-change ' + arg + ' --channel 2';
  // ./dep/DHSendMIDI --channel 2 --cc 0 0; ./dep/DHSendMIDI --program-change 026 --channel 2
  
  exec(cmd, function(error, stdout, stderr) {
    //console.log(stdout);
  });
}
