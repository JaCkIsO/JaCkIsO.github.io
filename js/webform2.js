"use strict";

$(function(){
    $("form").submit(function(event){
        event.preventDefault();
        var div = $("<div>");
        $("form").after(div
        .text(
            "Product Number: "+  $("#productNumber").val() + "\n" +
            "Name: "+  $("#name").val() + "\n" +
            "Unit Price: "+  $("#unitPrice").val() + "\n" +
            "Quantity In Stock: "+  $("#quantityInStock").val() + "\n" +
            "Supplier: "+  $("#supplier").val() + "\n" +
            "Date Supplied: "+  $("#dateSupplied").val() + "\n" 
        )
        )
    });
});
