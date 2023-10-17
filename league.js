//*navigations *//
window.onscroll = function() {myFunction()};
    var navbar = document.getElementById('nav1');
    var sticky = navbar.offsetTop;

    function myFunction(){
        if(window.pageYOffset > sticky) {
            navbar.classList.add('sticky');
            navbar.classList.toggle('expanded');
        } else {
            navbar.classList.remove('sticky');
            navbar.classList.remove('expanded');
        }
    }

//*navitagions-close*//

//* playMusic*//

 function openFunction(){
    

    

    var about0 = document.getElementById('about0');

    if (about0.style.display === 'block'){
        about0.style.dispaly = 'none';
    } else {
        about0.style.display = 'block';
    }
    
    
       
        
  




    var forEach = document.getElementById('PlayButton');
    if (forEach.textContent === '▶'){
        forEach.textContent = '||' ;
    } else {
        forEach.textContent = '▶';
    }
    
    
    var invisible = document.getElementById('musics');
    if (invisible.style.display === 'block'){
        invisible.style.display = 'block';
    } else {
        invisible.style.display = 'block';
        
    }

    
    
 }
 

 function open1Function(){
    var overlay = document.getElementById('overlay');
    var bmw1 = document.getElementById('bmw');
  
    if (bmw1.style.display === 'block'){
        bmw1.style.display = 'block';
        overlay.style.dispaly = 'none';
    } else {
       


        bmw1.style.display = 'block';
        overlay.style.display = 'block';
    }

    var playButton11 = document.getElementById('PlayButton1');
    if (playButton11){
        playButton11.style.fontSize = '3.5rem';
        playButton11.style.position = 'fixed';
        playButton11.style.left = '1085px';
        playButton11.style.top = '670px';
        playButton11.style.zIndex = '11111111111111111111111111111';
        
    } else {
        playButton11.style.fontsize = '4rem';
        playButton11.style.position = 'relative';
        playButton11.style.top = '-275px';
        playButton11.style.left = '680px';
        playButton11.style.zIndex = '1001';

    }



   var hidden1 = document.getElementById('hidden1');
    if (hidden1.style.display === 'block'){
        hidden1.style.display = 'block';
    } else {
        hidden1.style.display = 'block';
    }
   




    var forEach = document.getElementById('PlayButton1');
    if (forEach.textContent === '▶'){
        forEach.textContent = '||' ;
    } else {
        forEach.textContent = '▶';
    }
    
    
    var invisible = document.getElementById('musics');
    if (invisible.style.display === 'block'){
        invisible.style.display = 'block';
    } else {
        invisible.style.display = 'block';
    }

}
function open2Function(){
    var hidden2 = document.getElementById('hidden2');
    var overlay1 = document.getElementById('overlay1');
    var eastside = document.getElementById('east');
    if (eastside.style.display === 'block'){
        overlay1.style.display = 'none';
        eastside.style.dispaly = 'block';
        hidden2.style.display = 'block';
    } else {
        overlay1.style.display = 'block';
        eastside.style.display = 'block';
        hidden2.style.display = 'block';
    }



    var forEach = document.getElementById('PlayButton2');
    if (forEach.textContent === '▶'){
        forEach.textContent = '||' ;
    } else {
        forEach.textContent = '▶';
    }
    
    var invisible = document.getElementById('musics');
    if (invisible.style.display === 'block'){
        invisible.style.display = 'block';
    } else {
        invisible.style.display = 'block';
    }
}

function open3Function(){


    




    var forEach = document.getElementById('PlayButton3');
    if (forEach.textContent === '▶'){
        forEach.textContent = '||' ;
    } else {
        forEach.textContent = '▶';
    }
    
    var invisible = document.getElementById('musics');
    if (invisible.style.display === 'block'){
        invisible.style.display = 'block';
    } else {
        invisible.style.display = 'block';
    }
}



function open4Function(){
    var forEach = document.getElementById('PlayButton4');
    if (forEach.textContent === '▶'){
        forEach.textContent = '||' ;
    } else {
        forEach.textContent = '▶';
    }
    
    var invisible = document.getElementById('musics');
    if (invisible.style.display === 'block'){
        invisible.style.display = 'block';
    } else {
        invisible.style.display = 'block';
    }
}

function open5Function(){
    var forEach = document.getElementById('PlayButton5');
    if (forEach.textContent === '▶'){
        forEach.textContent = '||' ;
    } else {
        forEach.textContent = '▶';
    }
    var invisible = document.getElementById('musics');
    if (invisible.style.display === 'block'){
        invisible.style.display = 'block';
    } else {
        invisible.style.display = 'block';
    }
}






document.addEventListener("DOMContentLoaded", function() {
    var playButton = document.getElementById("PlayButton");
    var music = document.getElementById("musics");
    
  
   
});




//* PlayMusic-close*//
//* lyrics*//


const draggableDiv = document.getElementById('hidden0');
let offsetX, offsetY, isDragging = false;

draggableDiv.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - draggableDiv.getBoundingClientRect().left;
    offsetY = e.clientY - draggableDiv.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        draggableDiv.style.left = e.clientX - offsetX + 'px';
        draggableDiv.style.top = e.clientY - offsetY + 'px';
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});



// * cancel lyrics *//
function cancelFunction(){
    var lyric0 = document.getElementById('hidden0');
    if (lyric0.style.display === 'block'){
        lyric0.style.display = 'none';

    } else {
        lyric0.style.display = 'block';  
    }
   
}
//* cancel lyrics-cancel*//
//* lyrics-close*//
/*play-music 1*/
document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.PlayButton');
    var music = document.getElementById('musics');
    var currentSrc = "";

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var newSrc = this.getAttribute('data-src');

            // Check if the new source is the same as the current source
            if (newSrc !== currentSrc) {
                // Stop the current music
                if (!music.paused) {
                    music.pause();
                }
                // Set new source and controls
                music.src = newSrc;
                music.setAttribute('controls', 'controls');
                // Play the new music
                music.play();
                // Update current source
                currentSrc = newSrc;
            } else {
                // Toggle play/pause for the current music
                if (music.paused) {
                    music.play();
                } else {
                    music.pause();
                }
            }
        });
    });
});

 
/*play-music 1-close*/

//*play-music 2*/

//*div contents*//
function discoverFunction(){
    var discover = document.getElementById('discoverp');

    if (discover.style.display === 'block'){
        discover.style.display = 'none';
    } else {
        discover.style.display = 'block';
    }
}
//*div contents-close*//

//* lyric*/
function lyricFunction(){
    var hidden00 = document.getElementById('hidden0');

    if (hidden00.style.display === 'block'){
        hidden00.style.display = 'none';
    } else {
        hidden00.style.display = 'block';
    }
}

function lyric1Function(){
    var bmw = document.getElementById('bmwlyric');

    if (bmw.style.display === 'block'){
        bmw.style.display = 'none';
    } else {
        bmw.style.display = 'block';
    }
}
function lyric2Function(){
    var east = document.getElementById('eastlyric');

    if (east.style.display === 'block'){
        east.style.display = 'none';
    } else {
        east.style.display = 'block';
    }
}

/*lyric-close*/

/* cancelFunctions*/
function cancel1Function(){
    var about0 = document.getElementById('about0');
    if (about0.style.display === 'none'){
        about0.style.display = 'block';
    } else {
        about0.style.display = 'none';
    }
}

function cancel2Function(){
    var bmwlyric = document.getElementById('bmwlyric');

    if (bmwlyric.style.display === 'none'){
        bmwlyric.style.dispaly = 'block';
    } else {
        bmwlyric.style.display = 'none';
    }
}

function cancel3Function(){
    var bmw = document.getElementById('bmw');
    var overlay = document.getElementById('overlay');
 
    if (bmw.style.display === 'none'){
        overlay.style.display = 'block';
        bmw.style.display = 'block';
       

    } else {
       
        overlay.style.display = 'none';
        bmw.style.display = 'none';
    }
     var opera = document.getElementById('PlayButton1');

     if (opera){
        opera.style.fontsize = '4rem';
        opera.style.position = 'relative';
        opera.style.top = '-275px';
        opera.style.left = '680px';
        opera.style.zIndex = '1001';
     } else {
        playButton11.style.fontSize = '3.5rem';
        playButton11.style.position = 'fixed';
        playButton11.style.left = '1085px';
        playButton11.style.top = '670px';
        playButton11.style.zIndex = '11111111111111111111111111111';

     }
}
function cancel4Function(){
    



    var hidden1 = document.getElementById('hidden1');
    if (hidden1.style.display === 'none'){
        hidden1.style.display = 'block';
    } else {
        hidden1.style.display = 'none';
    }


}
function cancel5Function(){
    var overlay1 = document.getElementById('overlay1');

    var hidden25 = document.getElementById('east');
    

    if (hidden25.style.display === 'none'){
        overlay1.style.dispaly = 'block';
        hidden25.style.dispaly = 'block';
    } else {
        overlay1.style.display = 'none';
        hidden25.style.display = 'none';
    }
}

function cancel6Function(){

    var hiddenbro = document.getElementById('hidden2');
    if (hiddenbro.style.display === 'block'){
        hiddenbro.style.display = 'none';
    } else {
        hiddenbro.style.dispaly = 'none';
    }
}

function cancel7Function(){
    var eastly = document.getElementById('eastlyric');
    if (eastly.style.display === 'block'){
        eastly.style.display = 'none';
    } else {
        eastly.style.display = 'block';
    }
}
/*cancelFunctioncs-close */