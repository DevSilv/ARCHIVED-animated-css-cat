// "use strict";
// 
// The following code is currently off,
//  maybe for future improvements.
// 
// document.onreadystatechange = function () {
//     if (document.readyState == "complete") {
//         let cat = document.getElementsByClassName("cat")[0];
//         let scalingCatSlider = document.getElementsByClassName("scaling-cat-slider")[0];
//         // Not "change" event, because it waits for losing
//         //  focus, and input event does not wait
//         scalingCatSlider.addEventListener("input", function () {
//             let newValue = this.value / 100;
//             cat.style.transform = `scale(${newValue}, ${newValue})`;
            // It seems that the z-index axis value is lost after 3D transformation
            //  ("scale" in this case), at least in Firefox 65.0 - see
            //  hxxps://stackoverflow.com/questions/5472802/css-z-index-lost-after-webkit-transform-translate3d
            //  so I cannot scale the cat to be bigger or smaller. Sorry :(
//             let catTail = document.getElementsByClassName("cat-tail")[0];
//             let catShadow = document.getElementsByClassName("cat-shadow")[0];
//             cat.style.transformStyle = "flat";
//             catTail.style.transformStyle = "flat";
//             catShadow.style.transformStyle = "flat";
//             console.log(window.getComputedStyle(catTail).getPropertyValue("z-index"));
//             console.log(window.getComputedStyle(catShadow).getPropertyValue("z-index"));
//             catTail.style.zIndex = -1;
//             catShadow.style.zIndex = -2;
//         });
// 
//     }
// }