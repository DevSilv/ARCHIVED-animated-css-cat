"use strict";

function getJavaScriptObjectFromJSON(URL) {
    return new Promise(function (resolve) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", URL);
        // The following "overrideMimeType" method
        //  was added because of the error shown in
        //  the Firefox's console: "XML Parsing Error:
        //  not well-formed". I do not know why it works,
        //  but now this error is gone... And I do not know
        //  why the error occured, and what is responsible
        //  for it. It seems that the "send" method
        //  of the "XmlHttpRequest" object may be a candidate.
        xhr.overrideMimeType("application/json");
        // The following call to the "addEventListener" method
        //  has been causing the xhr object not to work,
        //  but I do not know, why...
        // xhr.addEventListener("readyStateChanged",
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status == 200) {
                // The website has been loaded without problems.

                const JSONcontent = xhr.response;
                const javaScriptObjectContent = JSON.parse(JSONcontent);
                resolve(javaScriptObjectContent);
            }
        }
        xhr.send();
    });
}

function convertJavaScriptObjectCatDescriptionToHTMLCatDescription(javaScriptObjectCatDescription) {
    const paragraphElement = document.createElement("p");
    const description = document.createTextNode(javaScriptObjectCatDescription);
    paragraphElement.appendChild(description);
    return paragraphElement;
}

function convertJavaScriptObjectCatToHTMLCat(javaScriptObjectCat) {
    const elementTag = javaScriptObjectCat["tag"];
    const element = document.createElement(elementTag);

    const classNameValue = javaScriptObjectCat["className"];
    element["className"] = classNameValue;

    const childrenElementList = javaScriptObjectCat["childElements"];
    childrenElementList.forEach(childElement => {
        element.appendChild(convertJavaScriptObjectCatToHTMLCat(childElement));
    });

    return element;
}