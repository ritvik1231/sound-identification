//https://teachablemachine.withgoogle.com/models/BJq0gq45B/


function start(){
   navigator.mediaDevices.getUserMedia({audio:true});
   var classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/BJq0gq45B/model.json",modelReady)

}

function modelReady(){
    classifier.classify(gotResult)
}