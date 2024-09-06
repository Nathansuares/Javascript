const display= document.getElementById("display");
let timer= null;
let Starttime=0;
let Elapsedtime=0;
let isRunning= false;

function start(){
    if(!isRunning){
      Starttime= Date.now() - Elapsedtime;
      timer = setInterval(update, 10);
      isRunning= true;
    }
}

function stop(){
    if(isRunning){
      clearInterval(timer);
      Elapsedtime= Date.now()-Starttime;
      isRunning=false;
    }
}

function reset(){
    clearInterval(timer);
    Starttime=0;
    Elapsedtime=0;
    isRunning=false;
    display.textContent="00:00:00:00";
}

function update(){
    const currentime= Date.now();
    Elapsedtime= currentime - Starttime;
    let hours= Math.floor(Elapsedtime/(1000*60*60));
    let minutes= Math.floor(Elapsedtime/(1000*60)%60);
    let seconds =Math.floor(Elapsedtime/1000%60);
    let milliseconds= Math.floor(Elapsedtime%1000/10);
    console.log(seconds);
    hours=String(hours).padStart(2, "0");
    minutes=String(minutes).padStart(2, "0");
    seconds=String(seconds).padStart(2, "0");
    milliseconds=String(milliseconds).padStart(2, "0");
    
    display.textContent= `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
