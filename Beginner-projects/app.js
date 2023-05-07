var counter=0;
var colors=["red",
    "blue",
    "green",
    "yellow",
    "purple",
    "pink",
    "orange",
    "brown",
    "black",
    "gray",
    "gold",
    "silver",
    "teal",
    "indigo",
    "magenta",
    "violet",
    "khaki",
    "salmon",
    "crimson",
    "lavender",
    "plum",
    "olive",
    "cyan",
    "maroon",
    "beige",
    "white",
]

function random(){

    
    
}

$("#Increase").click(function () { 
    
    var rand=Math.floor(Math.random()*colors.length);
    var randColor=colors[rand];
    counter++;
    $("h2").text(counter);
    $("body").css("background-color",randColor);
    console.log(randColor);

    $(".color").html("The background color is <u><u><strong><i>"+randColor+"</u></strong></i>");
    if (randColor==="white"){
        $(".color").css("color", "black");
    }
    else{
        $(".color").css("color", "white");
    }
});

$("#Decrease").click(function () { 
    counter--;
    $("h2").text(counter);
    
    
    var rand=Math.floor(Math.random()*colors.length);
    var randColor=colors[rand];
    $("body").css("background-color",randColor);
    console.log(randColor);
   
    $(".color").html("The background color is <u><u><strong><i>"+randColor+"</u></strong></i>");
    if (randColor==="white"){
        $(".color").css("color", "black");
    }
    else{
        $(".color").css("color", "white");
    }
});

$("#Reset").click(function () { 
    counter=0;
    $("h2").text(counter);
   
    $("body").css("background-color","#FFFFFF");
    
    $(".color").html("The background color is <u><strong><i>white</u></strong></i>");
   
    $(".color").css("color","black");
});

