/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }


// ...additional event handlers here...

var Camera = navigator.camera;

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function takeNewPicture() {
    var options = {
        // Some common settings are 20, 50, and 100 
        quality: 100,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery 
        sourceType: Camera.PictureSourceType.CAMERA,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: true,
        correctOrientation: true  //Corrects Android orientation quirks 
    };
    navigator.camera.getPicture(onSuccess, onFail, options);
}
    
function onSuccess(imageData) {
    var image = document.getElementById('image');
    image.src = imageData;
    
    // imageData is a string that contains the location
    // of the image.  In here, we should send this to the 
    // google cloud to be processed.
    
    document.getElementById('image_loc').innerHTML = imageData;
    
    alert("sending data to flask server")
    
    httpGetAsync('http://104.39.111.109:5000?text='+"Tbis is a nie pichure", response_func);
    
    
}

function response_func(text) {
    console.log(text);
}
                      

function onFail(message) {
    console.log('Failed because: ' + message);
}

