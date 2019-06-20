AFRAME.registerComponent('round_handler', {

    init: function() {
        var round = 0;

        const button = document.querySelector("#next-round-button");

        button.addEventListener('click', function(){

            if (round%3 === 0) {
                var src = button.getAttribute('nextRoundIMG0');
                document.querySelector("#round-change-a-image").setAttribute('src', src);
                src = button.getAttribute('nextRoundIMG1');
                document.querySelector("#round-change-a-image-alt").setAttribute('src', src);
            } else if (round%3 === 1) {
                var src = button.getAttribute('nextRoundIMG1');
                document.querySelector("#round-change-a-image").setAttribute('src', src);
                src = button.getAttribute('nextRoundIMG2');
                document.querySelector("#round-change-a-image-alt").setAttribute('src', src);
            } else {
                var src = button.getAttribute('nextRoundIMG2');
                document.querySelector("#round-change-a-image").setAttribute('src', src);
                src = button.getAttribute('nextRoundIMG0');
                document.querySelector("#round-change-a-image-alt").setAttribute('src', src);
            }
            round += 1;
        });
    }});