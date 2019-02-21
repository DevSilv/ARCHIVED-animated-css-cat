// Architecture thought:
//  the choice of the following "navigationElementClick"
//  function parameters does not seem to be the best.
//  But there seemed to be no other way of passing
//  both the current element (since the function is to be
//  called as a callback) and the list of elements
//  that the function uses.

"use strict";

function navigationElementClick(navigationElement, navigationElementList) {
    const navigationElementID = navigationElement.getAttribute("id");
    const activeNavigationElementList = Array.from(navigationElementList).filter(
        elem => elem.classList.contains("active") &&
        elem.getAttribute("id") !== navigationElementID
    );
    if (activeNavigationElementList.length !== 0) {
        // There was clicked another element than the current one.

        // Mark active element as not active.
        activeNavigationElementList[0].classList.remove("active");

        // The following code is currently off,
        //  maybe for future improvements.

        // Fade out old elements to invisible.
        // const homeContent = document.getElementsByClassName("home-content")[0];
        // homeContent.classList.add("invisible");
        // const catContainer = document.getElementsByClassName("cat-container")[0];
        // for (let childElement of Array.from(catContainer.children)) {
        //     childElement.classList.add("invisible");
        // }

        const mainContent = document.getElementsByClassName("main-content")[0];
        let fadeInOpacity = 1; //parseFloat(el.style.opacity);

        let fadeInTimer = setInterval(function () {
            if (fadeInOpacity <= 0.1) {
                clearInterval(fadeInTimer);

                // Improvement thought:
                //  probably here would a loader activity be ended,
                //  if the content would be so huge that the website
                //  would need a loader.

                // Remove the current content and load the new content.
                changeToContent(navigationElementID).then(function () {
                    // The following code is currently off,
                    //  maybe for future improvements.

                    // Fade in new elements to visible.
                    // const newHomeContent = document.getElementsByClassName("home-content")[0];
                    // newHomeContent.classList.remove("invisible");
                    // const newCatContainer = document.getElementsByClassName("cat-container")[0];
                    // if (navigationElementID !== "home-content") {
                    //     // There was requested cat content.
                    //     for (let childElement of Array.from(newCatContainer.children)) {
                    //         childElement.classList.remove("invisible");
                    //     }
                    // }

                    // Improvement thought:
                    //  probably here would a loader activity be ended,
                    //  if the content would be so huge that the website
                    //  would need a loader.

                    let mainContent2 = document.getElementsByClassName("main-content")[0];
                    let fadeOutOpacity = parseFloat(mainContent2.style.opacity);

                    let fadeOutTimer = setInterval(function () {
                        if (fadeOutOpacity >= 1.0) {
                            clearInterval(fadeOutTimer);
                        }
                        fadeOutOpacity += 0.1;
                        mainContent2.style.opacity = fadeOutOpacity;
                    }, 50);
                });
            }
            fadeInOpacity -= 0.1;
            mainContent.style.opacity = fadeInOpacity;
        }, 50);

        // Mark the current element as active.
        navigationElement.classList.add("active");
    } else {
        // The current element has been clicked, nothing to do.
    }
}