
const marsLink = document.querySelector('#mars'); 
const planetName = document.getElementById("planets-name");
const earthLink = document.querySelector('#earth');
const jupiterLink =  document.querySelector('#jupiter');
const MercuryLink= document.querySelector('#Mercury');
const venusLink= document.querySelector('#venus');
const saturnLink = document.querySelector('#saturn');
const UranusLink = document.querySelector('#Uranus');
const NeptuneLink   =  document.querySelector('#Neptune');
const planetimage   =  document.querySelector('#planet-image');
const contentdiv = document.querySelector("#content-div");
const background = document.querySelector("#background");
const maincontent = document.querySelector("#main-content");
marsLink.addEventListener("click", function (event) {
    event.preventDefault(); 
    planetName.innerText = "Mars - The Red Planet"; 
    planetimage.style.backgroundImage = "url('mars.gif')"; 
    planetimage.style.backgroundSize = "cover";
    planetimage.style.backgroundPosition = "center"; 
    planetimage.style.backgroundPosition = "content";
    contentdiv.style.backgroundImage = "url('star2.gif')";
    maincontent.style.innerText = "The view on Mars is characterized by a barren, reddish-orange landscape stretching as far as the eye can see, punctuated by towering volcanoes like Olympus Mons, the largest volcano in the solar system, and sprawling canyons like Valles Marineris, the longest canyon in the solar system. "
});



earthLink.addEventListener("click", function (event) {
    event.preventDefault(); 
    planetName.innerText = "Earth - Our Home Planet"; 
     planetimage.style.backgroundImage = "url('earth.gif')"; 
    planetimage.style.backgroundPosition = "center"; 
    planetimage.style.backgroundRepeat = "no-repeat";
    

});
jupiterLink.addEventListener("click", function (event) {
    event.preventDefault(); 
    planetName.innerText = "Jupiter"; 
    planetimage.style.backgroundImage = "url('jupiter.webp')"; 
    planetimage.style.backgroundPosition = "center"; 
    planetimage.style.backgroundRepeat = "no-repeat";
});


MercuryLink.addEventListener("click", function (event) {
    event.preventDefault(); 
    planetName.innerText = "Mercury- Our Home Planet"; 
    planetimage.style.backgroundImage = "url('mercury.gif')"; 
    planetimage.style.backgroundPosition = "center"; 
    planetimage.style.backgroundRepeat = "no-repeat";
});

venusLink.addEventListener("click", function (event) {
    event.preventDefault(); 
    planetName.innerText = "venus- Our Home Planet"; 
    planetimage.style.backgroundImage = "url('venus.gif')"; 
   planetimage.style.backgroundPosition = "center"; 
   planetimage.style.backgroundRepeat = "no-repeat";
});

saturnLink.addEventListener("click", function (event) {
    event.preventDefault(); 
    planetName.innerText = "Saturn"; 
    planetimage.style.backgroundImage = "url('saturn.jpg')"; 
   planetimage.style.backgroundPosition = "center"; 
   planetimage.style.backgroundRepeat = "no-repeat";
});

UranusLink.addEventListener("click", function (event) {
    event.preventDefault(); 
    planetName.innerText = "Uranus"; 
    planetimage.style.backgroundImage = "url('uranus.gif')"; 
   planetimage.style.backgroundPosition = "center"; 
   planetimage.style.backgroundRepeat = "no-repeat";
});


NeptuneLink.addEventListener("click", function (event) {
    event.preventDefault(); 
    planetName.innerText = " Neptune- Our Home Planet"; 
    planetimage.style.backgroundImage = "url('neptune.webp')"; 
   planetimage.style.backgroundPosition = "center"; 
   planetimage.style.backgroundRepeat = "no-repeat";
});

let btn = document.getElementById("send-btn")
console.log(btn)
btn.addEventListener("click",function(){
alert("Message send successfully")
})