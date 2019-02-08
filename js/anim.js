document.addEventListener("load",function(){
    let results= "normal";
    var red = document.getElementById("red");
        var blue = document.getElementById("blue");
        var result = document.getElementById("result");
        var img=document.getElementById("imgheart");

    if(results!=='')
    {
        console.log("sscsc");
        // img.src = '';
        if(results==="normal"){
            result.style.display = "block";
            blue.style.display = "none";
            red.style.display = "block";
            document.getElementById("textheart").innerHTML="Your Heart is Normal";
        }
        else if(results==="abnormal"){
            result.style.display = "block";
            red.style.display = "none";
            blue.style.display = "block";
            document.getElementById("textheart").innerHTML="Your Heart is abNormal";
        }
    }
    if(results==='')
    {
        var red = document.getElementById("red");
        red.style.display = "none";
    }
});