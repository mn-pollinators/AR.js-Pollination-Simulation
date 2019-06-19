// Credit to Jerome Etienne @
//https://github.com/jeromeetienne/AR.js/blob/6350b439077bd67b11999114fb79050e532bc969/aframe/examples/marker-events.html#L7

AFRAME.registerComponent('registerevents', {

    init: function () {

        const detectStatusDiv = document.querySelector("#detect-status");
        detectStatusDiv.innerHTML = "Marker: Not Found";

        var marker = this.el;
        marker.addEventListener('markerFound', function() {
            var markerId = marker.id;
            console.log('markerFound', markerId);

            detectStatusDiv.innerHTML = "Marker: Found";
        });
        marker.addEventListener('markerLost', function() {
            var markerId = marker.id;
            console.log('markerLost', markerId);

            detectStatusDiv.innerHTML = "Marker: Lost";
        });
    }
});