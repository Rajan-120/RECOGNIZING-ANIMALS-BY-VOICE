function StartClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    var classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/YenoJpF4c/model.json', modelReady);
}

function modelReady()
{
    console.log("Model is Loaded 😉");
    classifier.classify(gotResults);
}

function gotResults()
{
    if (error)
    {
        console.error(error);
    } else {
        console.log(results);
    }
}