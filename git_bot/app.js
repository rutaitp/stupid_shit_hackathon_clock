//using the Twit node package
var Twit = require('twit');

//get authentication codes
var config = require('./config.js');

var fs = require('fs');

//make a Twit object
var T = new Twit(config);

//set interval to tweet every second
setInterval(tweet, 1000);

function tweet() {

	//load the image
	var b64content = fs.readFileSync('twitterAlert.png', {encoding: 'base64'})

	T.post('media/upload', { media_data: b64content}, uploaded);

	function uploaded(err, data, response) {
		var mediaIdStr = data.media_id_string;
		var params = {status: "" + new Date(), media_ids: [mediaIdStr]};

		//Post a tweet
		T.post('statuses/update', params, tweeted);
	}

	function tweeted(err, data, response) {
		if(err) {
			console.log(err);
		} else {
			console.log('Success: ' + data.text);
		}
	};
}