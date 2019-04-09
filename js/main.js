//Get time when page was opened
function getStamp() {
    var aeg = Date();
    aeg.toLocaleString();
    return aeg
}

// Time stamp
const theTime = getStamp();
const theTimeMs = new Date().getTime();
//current link the user is on
const fromWhere= location.pathname.substring(location.pathname.lastIndexOf("/") + 1);



//formatting time for database
const dbTime = new Date().toJSON().slice(0, 19).replace('T', ' ');

//get cliked link href
var all = document.querySelector("body");
const part= "localhost";
let toWhere = '';


function proof(evt) {
    var elementName = 'A';
    var aElement = null;

    if (elementName === 'A') {  /* wenn Ziel ein Link ist */
        aElement = event.target;
        aElementTarget = aElement.getAttribute("target");
        toWhere = aElement.getAttribute("href");
        console.log(aElementTarget);
        console.log(toWhere);
        console.log(fromWhere);
        console.log(typeof fromWhere);

        if (fromWhere.includes(part)) { /* Logik */
            console.log("yes");
            // if (!aElement.href.includes("banda")) {
            //     console.log("YES!")


            // if (aElementTarget != "_blank") {
            //     evt.preventDefault(); /* Link nicht ausführen - abfangen .. */
            //     console.log("prevent");
            // }



            // }else{
            //     console.log("No");
            // };

        } else {
            console.log("weiter auf Bewerberportal");
        }
    }else{
        console.log("nain");
    }

}

//new varaibles for next function
let leavingTime= '';
let timeDiff= '';


all.addEventListener("click", proof); /* Event Delegation -> Links mit JavaScript abfangen */
const xhr = new XMLHttpRequest();

$(document).ready(function() {
    $(window).bind('beforeunload', function () {

        console.log("sending...");
        xhr.onload = function(){
            alert ("sending info...");

        };
        leavingTime= new Date().getTime();
        timeDiff = (leavingTime - theTimeMs);

        //function to chang milliseconds to string
        var getTimeString = function(timeInMs) {
            var delim = ":";
            var hours = Math.floor(timeInMs / (1000 * 60 * 60) % 60);
            var minutes = Math.floor(timeInMs / (1000 * 60) % 60);
            var seconds = Math.floor(timeInMs / 1000 % 60);

            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            return hours + delim + minutes + delim + seconds;
        };
        var sec = Math.floor(timeDiff /1000);
        var mins = Math.floor(sec / 60);
        var hrs = Math.floor(mins / 60);

        let duration = getTimeString(timeDiff);
        console.log(duration);


        //AJAX
        xhr.open("POST", "main.php");
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        // xhr.send("theTime="+theTime);
        xhr.send("dbTime="+dbTime+"&toWhere=" + toWhere+"&fromWhere="+fromWhere+"&duration="+duration);
    });
    console.log(theTime);
});

// console.log(linkHref);
// console.log(typeof linkHref);

// const xhr = new XMLHttpRequest();

// xhr.onload = function(){
//     const serverResponse = document.getElementById("serverResponse");
//     serverResponse.innerHTML = this.responseText;
// };
// xhr.open("POST", "main.php");
// xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// xhr.send ("time="+theTime+"&linkUrl="+linkHref);
//
// const xhr2 = new XMLHttpRequest();
//
// xhr2.onload = function(){
//     const serverResponse2 = document.getElementById("serverResponse2");
//     serverResponse2.innerHTML = this.responseText;
// };
// xhr2.open("POST", "test.php");
// xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// xhr2.send("linkUrl="+linkHref);

// document.body.addEventListener(event, function() {
//     var i = new Image();
//     i.src = 'script.php?target=' + event.target;
// }, false);

//before leaving page
// const xhr = new XMLHttpRequest();
//
// $(document).ready(function() {
//     $(window).bind('beforeunload', function () {
//
//         console.log("sending...");
//         xhr.onload = function(){
//             alert ("sending info...");
//
//         };
//
//         xhr.open("POST", "main.php");
//         xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//         // xhr.send("theTime="+theTime);
//         xhr.send("theTime="+theTime+"&toWhere=" + toWhere+"&fromWhere="+fromWhere);
//     });
//     console.log(theTime);
// })
