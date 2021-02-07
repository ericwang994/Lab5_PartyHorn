// main.js

// TODO



// Input field that serves as the textual indicator of sound level
var textInput = document.getElementById("volume-number");
var slider = document.getElementById("volume-slider");


textInput.oninput = function () {
    value = textInput.value;
    slider.value = value;
    button_control(value);
    soundLevel (value);
};

slider.oninput = function(){
    value = slider.value;
    textInput.value = value;
    button_control(value);
    soundLevel (value);
};

//Volume icon that change depending on the sound level

var honkButton = document.getElementById("honk-btn");
var volume_icon = document.getElementById("volume-image");

function button_control(val){
    if(val == 0){
        honkButton.disabled = true; 
    }else{
        honkButton.disabled = false; 
    }
}

function soundLevel(val) {
    if (val == 0) {
        volume_icon.src = "./assets/media/icons/volume-level-0.svg";
    } else if (val == 100) {
        volume_icon.src = "./assets/media/icons/volume-level-3.svg";
    } else if(val < 67 && val > 34){
        volume_icon.src = "./assets/media/icons/volume-level-2.svg";
    } else if(val < 34 && val > 1){
        volume_icon.src = "./assets/media/icons/volume-level-1.svg";
    }

};


//Radio that switches between different horn sounds
var soundImage = document.getElementById("sound-image");
var airHorn = document.getElementById("radio-air-horn");
var carHorn = document.getElementById("radio-car-horn");
var partyHorn = document.getElementById("radio-party-horn");
var horn_sound = document.getElementById("horn-sound");


airHorn.onclick = function () {
    soundImage.src = "./assets/media/images/air-horn.svg";
    horn_sound.src = "./assets/media/audio/air-horn.mp3";
};

carHorn.onclick = function () {
    soundImage.src = "./assets/media/images/car.svg";
    horn_sound.src = "./assets/media/audio/car-horn.mp3";
};

partyHorn.onclick = function () {
    soundImage.src = "./assets/media/images/party-horn.svg";
    horn_sound.src = "./assets/media/audio/party-horn.mp3";
};

//Button that plays the horn sound

honkButton.onclick = function (event) {
    event.preventDefault();
    horn_sound.volume = document.getElementById("volume-number").value / 100;
    horn_sound.play();

}


