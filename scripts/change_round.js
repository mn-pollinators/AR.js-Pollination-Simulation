AFRAME.registerComponent('round_handler', {

    init: function() {
        const button = document.querySelector("#next-round-button");
        const button1 = document.querySelector("#next-round-button-next");


        button.addEventListener('click', function(){
            const src = button.getAttribute('nextRoundIMG');
            document.querySelector("#round-change-a-image").setAttribute('src', src)
        });


        button1.addEventListener('click', function(){
            const src = button1.getAttribute('nextRoundIMG');
            document.querySelector("#round-change-a-image").setAttribute('src', src)
        });
    }});