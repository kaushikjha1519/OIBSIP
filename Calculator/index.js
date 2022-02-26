let display = document.getElementById('display');
buttons = document.querySelectorAll('button');
let screenValue="";
function number(value){
    screenValue +=value;
    display.value=screenValue;
}
function sin(){
    screenValue=(Math.PI)*(screenValue)/180;
    screenValue =Math.sin(screenValue);
    display.value=screenValue;
}
function cos(){
    screenValue=(Math.PI)*(screenValue)/180;
    screenValue =Math.cos(screenValue);
    display.value=screenValue;
}
function tan(){
    screenValue=(Math.PI)*(screenValue)/180;
    screenValue =Math.tan(screenValue);
    display.value=screenValue;
}
function percent(){
    let k =(screenValue)*1.0/100;
    display.value=k;
    screenValue=k;
    

}

function remove(){
    screenValue="";
    display.value=screenValue;
}
function backspace(){
    let a= screenValue;
    screenValue =a.substring(0,a.length-1);
    display.value=screenValue;
}
function calculate(){
    
    let k= eval(screenValue);
    if(k==undefined){
        display.value="";
        return;
    }
    display.value= k;
    screenValue= display.value;
}
function sqrt(){
    
    screenValue= Math.pow(screenValue,1/2);
    display.value=screenValue;
}
function ln(){
    let k= Math.log(screenValue);
    if(k== -Infinity){
        display.value="";
        return;
    }
    screenValue = Math.log(screenValue);
    display.value=screenValue;
}

