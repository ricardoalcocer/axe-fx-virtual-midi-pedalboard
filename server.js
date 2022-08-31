var express = require('express');
var app = express();

function changePatch(cc,patchId){
// https://wiki.fractalaudio.com/gen1/index.php?title=MIDI
  var exec = require('child_process').exec;
  var cmd = './dep/DHSendMIDI --channel 2 --cc 0 ' + String(cc) + '; ./dep/DHSendMIDI --program-change ' + patchId + ' --channel 2';
  // ./dep/DHSendMIDI --channel 2 --cc 0 0; ./dep/DHSendMIDI --program-change 026 --channel 2
  
  exec(cmd, function(error, stdout, stderr) {
    //console.log(stdout);
  });
}

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

app.get('/change/:id', function(req, res) {
    patchId = req.params.id;

    var arg = patchId;
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

    changePatch(cc,patchId);
    
    res.send('OK ' + patchId)
});

// about page
// app.get('/about', function(req, res) {
//   res.render('pages/about');
// });

app.listen(8080);
console.log('Server is listening on http://localhost:8080');