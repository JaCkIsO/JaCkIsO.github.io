"use strict";
window.onload = function () {

    let year = document.getElementById("year");
    let month = document.getElementById("month");
    let date = document.getElementById("date");
    let hour = document.getElementById("hour");
    let minute = document.getElementById("minute");
    let second = document.getElementById("second");

    function setTime() {
        let now = new Date();
        year.innerHTML = now.getFullYear();
        month.innerHTML = now.getMonth();
        date.innerHTML = now.getDate();
        hour.innerHTML = now.getHours();
        minute.innerHTML = now.getMinutes();
        second.innerHTML = now.getSeconds();
    }
    setInterval(setTime, 1000);
}