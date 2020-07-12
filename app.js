var min=0
var sec=0
var msec=0

var minheading = document.getElementById('min')

var secheading =document.getElementById('sec')

var msecheading =document.getElementById('msec')

var interval;

function timer(){
 
    msec++
    
    msecheading.innerHTML=msec

    if(msec>=100){

   sec++

   secheading.innerHTML=sec

   msec=0


    }

    else if(sec>=60){

min++
minheading.innerHTML=min

 sec=0


    }



}





function stop(){


    clearInterval(interval)

    // document.getElementById('btn2').disabled = false;

    btn1.disabled=false

    
}

function reset(){

    var min=0
    var sec=0
    var msec=0 
    msecheading.innerHTML=msec
    secheading.innerHTML=sec
    minheading.innerHTML=min

    stop()

    // document.getElementById('btn3').disabled = false;

   btn1.disabled=false


}


function start(){


    interval =setInterval(timer,10)

    
    // const button = document.querySelector('button')
    // button.disabled = true
    // button.disabled = false

    document.getElementById('btn1').disabled = true;


    // document.getElementById('btn1').disabled = false;


    // var inputs = document.getElementsById('')
    // for (var i = 0; i < inputs.length; i++) {
    //     if (inputs[i].type == "button" || inputs[i].type == "submit") {
    //         inputs[i].disabled = true;
    //     }
    // }

   

    
}







