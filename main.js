Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality :90

});

my_cam = document.getElementById("camera");


Webcam.attach(my_cam);

function Cap_image(){
    

    Webcam.snap(function(picture){

        document.getElementById("result").innerHTML= "<img id = 'web_snap' src = '" + picture + "'>";
    });

    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/TMr4IJUsD/model.json", model_loaded);

}


