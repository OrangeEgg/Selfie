var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();

function Start(){
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}
Recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    if(Content == "take my selfie"){
        SpeakMe();
    }

}
 
function SpeakMe(){
    var Synthesis = window.speechSynthesis;
    var GetData = "Taking Your Selfie In 5 Seconds";
    var ConvertedData = new SpeechSynthesisUtterance(GetData);
    Synthesis.speak(ConvertedData);
    Webcam.attach(Store78);
   setTimeout(function(){
     SnapMeOut();
     Save();
   },5000);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

var Store78 = document.getElementById("camera");

function SnapMeOut(){
    Webcam.snap(function(data_uri){
        document.getElementById("resultados").innerHTML = '<img id="selfie" src="' + data_uri + '" >';
        console.log("HELLO");
    });
}

function Save(){
    var LinkRef = document.getElementById("link");
    var Imagey = document.getElementById("selfie").src;
    LinkRef.href = Imagey;
    LinkRef.click();
}