//https://teachablemachine.withgoogle.com/models/pHdVwXaq3/

Webcam.set({
    height: 280,
    width: 370,
    image_format: "png",
    png_quality: 100
});
camera = document.getElementById("camera");
Webcam.attach("camera");

function capture() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='captured_image' src=" + data_uri + ">";
    });
}
console.log("ml5version", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6B5uOW5Dy/model.json", modeluploaded);

function modeluploaded() {
    console.log("model Loaded");
}