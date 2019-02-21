// Improvement thought:
//  in this website, the usage of the "contentVersion" parameter
//  seems not to be the most appropriate, since this parameter
//  indicates both class names and file names (or part of them).

"use strict";

document.addEventListener("readystatechange", function () {
    if (document.readyState === "complete") {
        const navigationElementList = document.querySelectorAll(".main-menu .navigation-element");
        //  Below there is used the "Array.from()" method,
        //  because the following "navigationElementList"
        //  is an HTMLCollection (not an array).
        for (let navigationElement of Array.from(navigationElementList)) {
            navigationElement.addEventListener("click", () => {
                navigationElementClick(navigationElement, navigationElementList);
            });
        }
    }
});