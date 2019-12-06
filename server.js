const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https')
const app = express();


const apiKey = 'abs456';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {data: null, error: null});
})

app.post('/send', function (req, response) {
 
    let data =  {

      "Inputs": {

              "input1":
              {
                  "ColumnNames": ["is_goal", "fast_break", "loc_centre_box", "loc_diff_angle_lr", "diff_angle_left", "diff_angle_right", "left_side_box", "left_side_6ybox", "right_side_box", "right_side_6ybox", "close_range", "penalty", "outside_box", "long_range", "more_35y", "more_40y", "not_recorded", "right_foot", "left_foot", "header", "no_assist", "assist_pass", "assist_cross", "assist_header", "assist_through_ball", "open_play", "set_piece", "corner", "free_kick"],
                  "Values": [[
                    req.body.is_goal,
                    req.body.fast_break,
                    req.body.loc_centre_box,
                    req.body.loc_diff_angle_lr,
                    req.body.diff_angle_left,
                    req.body.diff_angle_right,
                    req.body.left_side_box,
                    req.body.left_side_6ybox,
                    req.body.right_side_box,
                    req.body.right_side_6ybox,
                    req.body.close_range,
                    req.body.penalty,
                    req.body.outside_box,
                    req.body.long_range,
                    req.body.more_35y,
                    req.body.more_40y,
                    req.body.not_recorded,
                    req.body.right_foot,
                    req.body.left_foot,
                    req.body.header,
                    req.body.no_assist,
                    req.body.assist_pass,
                    req.body.assist_cross,
                    req.body.assist_header,
                    req.body.assist_through_ball,
                    req.body.open_play,
                    req.body.set_piece,
                    req.body.corner,
                    req.body.free_kick
                    ],[
                      req.body.is_goal,
                      req.body.fast_break,
                      req.body.loc_centre_box,
                      req.body.loc_diff_angle_lr,
                      req.body.diff_angle_left,
                      req.body.diff_angle_right,
                      req.body.left_side_box,
                      req.body.left_side_6ybox,
                      req.body.right_side_box,
                      req.body.right_side_6ybox,
                      req.body.close_range,
                      req.body.penalty,
                      req.body.outside_box,
                      req.body.long_range,
                      req.body.more_35y,
                      req.body.more_40y,
                      req.body.not_recorded,
                      req.body.right_foot,
                      req.body.left_foot,
                      req.body.header,
                      req.body.no_assist,
                      req.body.assist_pass,
                      req.body.assist_cross,
                      req.body.assist_header,
                      req.body.assist_through_ball,
                      req.body.open_play,
                      req.body.set_piece,
                      req.body.corner,
                      req.body.free_kick
                      ],]
              },        
            },
          "GlobalParameters": {
          }
  }
 
  const options = {
    method: 'POST',
    uri: 'https://ussouthcentral.services.azureml.net/workspaces/545e912001d148d28db99929a9cefdae/services/ef8161de8e7a4d668df43b268cb185f2/execute?api-version=2.0&details=true',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+'kbmgaTnG2TMSsVGtAPzd32524L3QBHzZJvrxM7LC/FO5I3r42sl/mMDgXE0z9ykpjNXEbLJxocmR/eSd5nA99w==',
    }
  }

request(options, (err, res, body) => {
  if (!err && res.statusCode == 200) {
    data= JSON.parse(body);
    console.log(typeof(data));
    let dataText = `Expected goals ${data.Results.output1.value.Values[0].pop()}`;
    response.render('index', {data: dataText, error: null});
    

  } else {
    response.render('index', {data: null, error: 'Error, please try again'});
  }
});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})




