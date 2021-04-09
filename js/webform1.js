"use strict";

$(function(){
    $("form").submit(function(event){
        event.preventDefault();
        console.log("Email: " + $("#email").val());
        console.log("Password: " + $("#password").val());
        console.log("URL: " + $("#url").val());
        console.log("Is Checked: " + $("#check-me-out").val());
    })
});
