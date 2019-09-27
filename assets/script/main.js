// alert("page under construction!!! some minor details are missing(images in the boxes)")
// var coming = "coming soon!!!";



$("#projects, #something ").on('click', function(event){
    alert(coming);
})
function show(){
    $("#middleDiv").empty();
    $("#middleDivContent").show();
}

// animations
function ani(){
    $("#new-about").animate({opacity:"0.6"});
}

function animationMove(){
    $(".about").animate({top:"0px"});
    $(".message").animate({bottom:"0px"});
    
}

function animationMove2(){
    $(".projects").animate({top:"0px"});
    $(".something").animate({bottom:"0px"});
    
}

function messageBoxAnimation(){
    $(".message").animate({height:"300px"});
    $(".message").animate({bottom:"300px"});

}



// function to generate about
$("#about").on('click', function(event){
    var aboutDiv = $("<div class='greet1'>");
    aboutDiv.attr('id', 'new-about');
    var h = $("<h3>");
    h.text('About me');
    var p = $("<p>");
    var b = $("<button class='btn btn-sm btn-dark'>Back</button>");
    b.on('click', _=> show());
    p.text("Hi there! My name is William Navas, I'm a new web developer looking for opportunities to grow in the field. I'm filled with passion to develop great websites. My goal is to keep on learning new technologies that are introduced on a regular basis to strengthen my academic foundation in programming languages. With enthusiasm and effort, I have learned the principles of web development using different technologies currently available. I have worked in personal projects and contributed working with other developers, I also believe in teamwork which is the key to success.I'm also a self-driven person that has self-taught himself photography. I'm a freelancer web-developer and professional wedding photographer willing to take new challenges. You can reach me at williamanavas@gmail.com.");
    aboutDiv.append(h, p);
    //$("#middleDivContent").hide();
    $("#content-area").empty();
    $("#content-area").append(aboutDiv);
    $("#new-about").animate({opacity:"0.8"});
    //$("#middleDivContent").hide();
})
// function to generate contact
$("#message-btn").on('click', function(event){
    var messageDiv = $("<div class='message-div greet1'>");
    messageDiv.attr('id', 'new-message');
    var h2 = $("<h3>Contact me</h3>")
    var p = $("<tag>Name</tag>");
    var i = $("<input id='name-input' type='text' class='col-12'><br>");
    var p2 = $("<tag>E-mail</tag>");
    var i2 = $("<input id='eamil-input' type='email' class='col-12'><br>");
    var p3 = $("<tag>Message</tag>");
    var i3 = $("<textarea id='messageInput' rows='2' class='col-12'></textarea><br>");
    var bSubmit = $("<button class='message-button-form'>Submit</button>")
    var b = $("<button class='btn btn-sm btn-dark'>Back</button>");

    b.on('click', _=> show());
    messageDiv.append(h2, p, i, p2, i2, p3, i3, bSubmit);
    //$("#middleDivContent").hide();
    $("#content-area").empty();
    $("#content-area").append(messageDiv);
    $("#new-message").animate({opacity:"1"});
    // $("#middleDivContent").hide();
})


animationMove();
animationMove2();