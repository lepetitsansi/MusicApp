window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];



  window.addEventListener("keydown", function(e) {
    
    if (e.keyCode == "88") {
      sounds[0].currentTime = 0;
      sounds[0].play();
      createBubble(0);
    } 
    else if (e.keyCode == "67") {
      sounds[1].currentTime = 0;
      sounds[1].play();
      createBubble(1);
    }
    else if (e.keyCode == "86") {
      sounds[2].currentTime = 0;
      sounds[2].play();
      createBubble(2);
    }
    else if (e.keyCode == "66") {
      sounds[3].currentTime = 0;
      sounds[3].play();
      createBubble(3);
    }
    else if (e.keyCode == "78") {
      sounds[4].currentTime = 0;
      sounds[4].play();
      createBubble(4);
    }
    else if (e.keyCode == "77") {
      sounds[5].currentTime = 0;
      sounds[5].play();
      createBubble(5);
    }
  });



  /*pads.forEach((pad, index) => {
    pad.addEventListener("keypress", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });*/
  



  const createBubble = index => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
