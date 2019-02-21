"use strict";

function changeToContent(contentVersion) {
    return new Promise(function (resolve) {
        if (contentVersion === "home-content") {
            // The home content was reqested.

            if (contentVersion !== currentContentVersion) {
                // The requested content is not the current one.

                //  Remove the cat container's content.
                const catContainer = document.getElementsByClassName("cat-container")[0];
                for (let childElement of Array.from(catContainer.children)) {
                    childElement.remove();
                }

                // Show the home content.
                const homeContentContainer = document.getElementsByClassName("home-content")[0];
                homeContentContainer.removeAttribute("hidden");

                currentContentVersion = "home-content";

                resolve();
            } else {
                // The home content is the current one, nothing to do.
            }
        } else if (currentContentVersion !== contentVersion) {
            // The cat content was requested.

            const catContainer = document.getElementsByClassName("cat-container")[0];
            if (currentContentVersion === "home-content") {
                // The home content is the current one.

                const containerList = document.getElementsByClassName("home-content");
                const container = containerList[0];
                container.setAttribute("hidden", "");
            } else {
                // The current one is another cat content version.

                for (let childElement of Array.from(catContainer.children)) {
                    childElement.remove();
                }
            }

            const headElement = document.getElementsByTagName("head")[0];

            // Remove all existing CSS stylesheets for the previous cat content versions.
            const linkElementList = headElement.getElementsByTagName("link");
            for (let linkElement of Array.from(linkElementList)) {
                const stylesheetName = linkElement.href.substr(linkElement.href.lastIndexOf("/") + 1);
                if (stylesheetName.includes("cat")) {
                    linkElement.remove(linkElement);
                }
            }

            // Put the appropriate CSS stylesheet for the current cat content version.
            const linkElement = document.createElement("link");
            linkElement.rel = "stylesheet";
            linkElement.type = "text/css";
            linkElement.href = `./css/${contentVersion}.css`;
            headElement.appendChild(linkElement);

            const catDescriptionURL = `./json/${contentVersion}-description.json`;
            const catURL = `./json/cat-css.json`;

            Promise.all([
                getJavaScriptObjectFromJSON(catDescriptionURL)
                .then(function (javaScriptObjectContent) {
                    const catDescriptionContentContainer = document.createElement("section");
                    catDescriptionContentContainer.classList.add("cat-description-content");
                    const HTMLContent = convertJavaScriptObjectCatDescriptionToHTMLCatDescription(javaScriptObjectContent);
                    catDescriptionContentContainer.appendChild(HTMLContent);
                    catContainer.appendChild(catDescriptionContentContainer);
                }),
                getJavaScriptObjectFromJSON(catURL)
                .then(function (javaScriptObjectContent) {
                    const catContentContainer = document.createElement("section");
                    catContentContainer.classList.add("cat-content");
                    const HTMLContent = convertJavaScriptObjectCatToHTMLCat(javaScriptObjectContent);
                    catContentContainer.appendChild(HTMLContent);
                    catContainer.appendChild(catContentContainer);
                })
            ]).then(() => resolve());
        }

        currentContentVersion = contentVersion;
    });
}