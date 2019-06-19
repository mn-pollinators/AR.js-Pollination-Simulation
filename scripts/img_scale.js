//Modified from Nicolò Carpignoli @ https://medium.com/swlh/how-to-handle-click-events-on-ar-js-f397ea5994d


AFRAME.registerComponent('size_handler', {

    init: function() {
        console.log("img_scale hit");
        // const marker = document.querySelector("#round-change-marker");
        const aImg = document.querySelector("#round-change-a-image");

        const buttonImgBigger = document.querySelector("#scale-bigger");
        const buttonImgSmaller = document.querySelector("#scale-smaller");

        buttonImgBigger.addEventListener('click', function() {
            const scale = aImg.getAttribute('scale');
            Object.keys(scale).forEach((key) => scale[key] = scale[key] * 1.1);
            aImg.setAttribute('scale', scale);
            console.log("img bigger");
        });

        buttonImgSmaller.addEventListener('click', function() {
            const scale = aImg.getAttribute('scale');
            console.log(scale);
            Object.keys(scale).forEach((key) => scale[key] = scale[key] * 0.9);
            aImg.setAttribute('scale', scale);
            console.log("img smaller");
        });

    }});