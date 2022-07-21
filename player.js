
  var vid = document.getElementById("myVideo"); 
  var data = window.APP_DATA;
  var sceneElements = document.querySelectorAll('#sceneList .scene');
  var sceneNameElement = document.querySelector('#titleBar .sceneName');


  /*function FindScene() {
    
    for (var i = 0; i < data.scenes.length; i++) {
      if (data.scenes[i].name === sname) {
        console.log(data.scenes[i].name);
        return data.scenes[i];
      }
    }
    console.log("nothinng");
    return null;
  }*/


  function playVid() { 
    vid.style.display="block";
    let sname=sceneNameElement.innerHTML;
    if(sname=="Account")
    {
      vid.src="mixkit-surprised-man-and-a-green-screen-23839-medium_1.webm";
    }
    if(sname=="parking")
    {
      vid.src="mixkit-surprised-man-and-a-green-screen-23839-medium.webm";
    }
    vid.load();
    vid.play(); 
  } 
  
  function pauseVid() { 
    vid.pause(); 
  }



