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
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/pHdVwXaq3/model.json", modeluploaded);

function modeluploaded() {
    console.log("model Loaded");
}

function speech() {
    var synth = window.speechSynthesis;
    data1 = "The first prediction is " + predict1;
    data2 = "The second prediction is " + predict2;
    var utterance = new SpeechSynthesisUtterance(data1 + data2);
    synth.speak(utterance);
}

function predict() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

// gotresult function

function gotResult(error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
        predict1 = result[0].label;
        predict2 = result[1].label;
        speech();
        if (predict1 == "Amazing") {
            document.getElementById("emotion1").innerHTML = "This is looking amazing";
            document.getElementById("updateemoji1").innerHTML = "&#128076;";
        } else if (predict1 == "Victory") {
            document.getElementById("emotion1").innerHTML = "That was a marvelous victory";
            document.getElementById("updateemoji1").innerHTML = "&#9996;";
        } else if (predict1 == "Best") {
            document.getElementById("emotion1").innerHTML = "All the best";
            document.getElementById("updateemoji1").innerHTML = "&#128077;";
        }
        if (predict2 == "Amazing") {
            document.getElementById("emotion2").innerHTML = "This is looking amazing";
            document.getElementById("updateemoji2").innerHTML = "&#128076;";
        } else if (predict2 == "Victory") {
            document.getElementById("emotion2").innerHTML = "That was a marvelous victory";
            document.getElementById("updateemoji2").innerHTML = "&#9996;";
        } else if (predict2 == "Best") {
            document.getElementById("emotion2").innerHTML = "All the best";
            document.getElementById("updateemoji2").innerHTML = "&#128077;";
        }
    }
}