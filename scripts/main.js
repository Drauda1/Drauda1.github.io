// Calculate number of seconds in 90 days for cookie expiration date
const secondsInADay = 24 * 60 * 60;
const targetDurationInDays = 90;
const secondsIn90Days = targetDurationInDays * secondsInADay;


/* Check if specified cookie exists. If not, or value is null,
    set specified cookie to the current UTM parameters with exp date 90 days from now */
    function setCookieWithParams(cookieName) {
    var utmParams = window.location.search;
    var tempdate = new Date();
    tempdate.setTime(tempdate.getTime() + (secondsIn90Days * 1000));


    var existingCookie = getCookie(cookieName);


    if (!existingCookie) {
        document.cookie = cookieName + "=" + utmParams + "; expires=" + tempdate.toUTCString() + "; path=/";
        console.log("UTM Cookie Set");
    }
}


// Retrieve cookie by cookie name
function getCookie(cookieName) {
    var cookieRetrieved = document.cookie.match('(^|;)\\s*' + cookieName + '\\s*=\\s*([^;]+)')?.pop() || '';
    return cookieRetrieved ? cookieRetrieved : null;
}


/* Pass the UTM params stored in specified cookie to
    the src attribute of iframed form */
function customizeIframeWithCookie(cookieName) {
    // Find the iframe element with the class "targetIframeUTMCustomImplementation"
    var iframe = document.querySelector('.targetIframeUTMCustomImplementation');


    // Check if the iframe element was found
    if (!iframe) {
        console.error("No iframe element with class 'targetIframeUTMCustomImplementation' found.");
        return; // Exit the function if no iframe is found
    }


    var alreadyLoaded = false;


    // Attach onload event listener to the iframe
    iframe.onload = function() {
        if (!alreadyLoaded) {
            // Retrieve the value of the specified cookie
            var cookieValue = getCookie(cookieName);


            if (cookieValue !== null) {
                // Append the cookie value to the src attribute of the iframe
                iframe.src = iframe.src + cookieValue;
                alreadyLoaded = true;
                console.log("Iframed customized with UTM Cookie");
            } else {
                console.error("Cookie '" + cookieName + "' not found.");
            }
        }
    };
}


var cookieName = "utmParametersCustomCookie";


document.addEventListener("DOMContentLoaded", function() {
    var existingParams = window.location.search;


    if (existingParams) {
        setCookieWithParams(cookieName);
        customizeIframeWithCookie(cookieName);
    } else if (getCookie(cookieName)) {
        customizeIframeWithCookie(cookieName);
        console.log("UTM Cookie Found");
    } else {
        console.log("No URL parameters to retrieve and UTM Cookie not set.");
        return;
    }
});


function customizeLinkWithCookie(cookieName) {
    // Find the iframe element with the class "targetIframeUTMCustomImplementation"
    var iframe = document.querySelector('.targetIframeUTMCustomImplementation');


    // Check if the iframe element was found
    if (!iframe) {
        console.error("No iframe element with class 'targetIframeUTMCustomImplementation' found.");
        return; // Exit the function if no iframe is found
    }


    var alreadyLoaded = false;


    // Attach onload event listener to the iframe
    iframe.onload = function() {
        if (!alreadyLoaded) {
            // Retrieve the value of the specified cookie
            var cookieValue = getCookie(cookieName);

            if (cookieValue !== null) {
                // Append the cookie value to the src attribute of the iframe
                iframe.src = iframe.src + cookieValue;
                alreadyLoaded = true;
                console.log("Iframed customized with UTM Cookie");
            } else {
                console.error("Cookie '" + cookieName + "' not found.");
            }
        }
    };
}