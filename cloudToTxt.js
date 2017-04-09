var request = require('request');

var headers = {
    'Authorization': 'Bearer ya29.GlwoBBjiRA92DmS1SCuH3QN-3hXULL-MaPZyWK5x5LOwxFwsuXnJhgUBNIXiVsjviA4m-f4s_zSwDjq_Wt_gRfXsvS9IRi9_Y1DmSSPnhq8t9blGlhQsuitJqbh5xg'
};

var options = {
    url: 'https://www.googleapis.com/storage/v1/b/tom_text_bucket/o/text_image_2.jpg_to_en.txt?alt=media',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
