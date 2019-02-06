alert("page under construction!!! some minor details are missing")
var coming = "coming soon!!!";

$("#projects, #something ").on('click', function(event){
    alert(coming);
})
function show(){
    $("#middleDivContent").show();
    $("#middleDiv").empty();

}
// function to generate about
$("#about").on('click', function(event){
    var aboutDiv = $("<div>");
    aboutDiv.attr('id', 'new-about');
    var p = $("<p>");
    var b = $("<button>Back</button>");
    b.on('click', _=> show());
    p.text("Hi there! my name is William and I'm a web-developer on the making! In this page you can find more information about my self");
    aboutDiv.append(p, b);
    $("#middleDivContent").hide();
    $("#middleDiv").empty();
    $("#middleDiv").append(aboutDiv);
})

// function to generate contact
$("#message-btn").on('click', function(event){
    var messageDiv = $("<div>");
    messageDiv.attr('id', 'new-message');
    var p = $("<p>Name</p>");
    var i = $("<input id='name-input'><br>");
    var p2 = $("<p>E-mail</p>");
    var i2 = $("<input id='eamil-input'><br>");
    var p3 = $("<p>Message</p>");
    var i3 = $("<textarea id='messageInput' rows='4' cols='30'></textarea><br>");
    var b = $("<button>Back</button>");

    b.on('click', _=> show());
    messageDiv.append(p, i, p2, i2, p3, i3, b);
    $("#middleDivContent").hide();
    $("#middleDiv").empty();
    $("#middleDiv").append(messageDiv);
})

