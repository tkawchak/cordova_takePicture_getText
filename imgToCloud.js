var request = require('request');
var fs = require('fs');
var headers = {
    'Authorization': 'Bearer ya29.GlwoBBjiRA92DmS1SCuH3QN-3hXULL-MaPZyWK5x5LOwxFwsuXnJhgUBNIXiVsjviA4m-f4s_zSwDjq_Wt_gRfXsvS9IRi9_Y1DmSSPnhq8t9blGlhQsuitJqbh5xg',
    'Content-Type': 'image/jpeg'
};

var dataString = fs.createReadStream('test_img2.jpg');

var options = {
    url: 'https://www.googleapis.com/upload/storage/v1/b/tom_image_bucket/o?uploadType=media&name=text_image_2.jpg',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
    else {
      console.log(body);
    }
}

request(options, callback);
