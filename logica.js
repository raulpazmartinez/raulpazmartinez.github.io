let num = prompt("Indica un número mayor o igual a 20:");

if(num >= 20){
   crearBtn();
}else{
    alert("Error");

}

function crearBtn(){
    for(i=1; i <= num; i++){
        //declaro mi boton
        let boton = document.createElement("input");
        //Atributos de mi boton
        boton.id = "boton_"+i;
        boton.type = "button";
        boton.value = ""+i;
        boton.className = "celda2";
        //inserto mi boton al html
        
        document.getElementById("cboton").appendChild(boton);
        document.getElementById("boton_"+i).style.height = "35px";
        document.getElementById("boton_"+i).style.width = "35px";
        document.getElementById("boton_"+i).style.backgroundColor = "#058085";
        document.getElementById("boton_"+i).style.border = "0px";
        document.getElementById("boton_"+i).style.marginLeft = "2px";
        document.getElementById("boton_"+i).style.marginBottom = "2px";
    }
}

let btn1 = document.getElementById("mul2");
let btn2 = document.getElementById("mul3");
let btn3 = document.getElementById("mul4");
let btn4 = document.getElementById("mul5");
let btn5 = document.getElementById("mul6");
let btn6 = document.getElementById("mul7");
let btn7 = document.getElementById("mul8");
let btn8 = document.getElementById("mul9");
let btn9 = document.getElementById("mulP");
let btn10 = document.getElementById("clear");

let ocupados=[];
let primos=[];
btn1.onclick=function(){
    for(i=1; i<=num; i++){
        if(i % 2 == 0 && ocupados.includes(i)== false){
            document.getElementById("boton_"+i).style.backgroundColor="#F4D03F";
            ocupados.push(i);
        }
    }
}
btn2.onclick=function(){
    for(i=1; i<=num; i++){
        if(i % 3 == 0 && ocupados.includes(i)== false){
            document.getElementById("boton_"+i).style.backgroundColor="#AF7AC5";
            ocupados.push(i);
        }
    }
}
btn3.onclick=function(){
    for(i=1; i<=num; i++){
        if(i % 4 == 0 && ocupados.includes(i)== false){
            document.getElementById("boton_"+i).style.backgroundColor="#2980b9";
            ocupados.push(i);
        }
    }
}
btn4.onclick=function(){
    for(i=1; i<=num; i++){
        if(i % 5 == 0 && ocupados.includes(i)== false){
            document.getElementById("boton_"+i).style.backgroundColor="#A1887F";
            ocupados.push(i);
        }
    }
}
btn5.onclick=function(){
    for(i=1; i<=num; i++){
        if(i % 6 == 0 && ocupados.includes(i)== false){
            document.getElementById("boton_"+i).style.backgroundColor="#FAD7A0";
            ocupados.push(i);
        }
    }
}
btn6.onclick=function(){
    for(i=1; i<=num; i++){
        if(i % 7 == 0 && ocupados.includes(i)== false){
            document.getElementById("boton_"+i).style.backgroundColor="#F6DDCC";
            ocupados.push(i);
        }
    }
}
btn7.onclick=function(){
    for(i=1; i<=num; i++){
        if(i % 8 == 0 && ocupados.includes(i)== false){
            document.getElementById("boton_"+i).style.backgroundColor="#FFCDD2";
            ocupados.push(i);
        }
    }
}
btn8.onclick=function(){
    for(i=1; i<=num; i++){
        if(i % 9 == 0 && ocupados.includes(i)== false){
            document.getElementById("boton_"+i).style.backgroundColor="#D7DBDD";
            ocupados.push(i);
        }
    }
}

let j = 0;
let numA=0;
btn9.onclick=function(){
    for(i=2; i<=num; i++){
        numA=i;
        for(k=1;k<=numA;k++){
            if(i % k == 0){
                j++;
            }
        }
        if(j == 2 && primos.includes(i)==false){
            j=0;
            document.getElementById("boton_"+i).style.backgroundColor= "#2E4053";
            document.getElementById("boton_"+i).style.color= "#ffffff";
            primos.push(i);
            ocupados.push(i);
        }else if(j>2){
            j=0;
        }
    }
}
btn10.onclick=function(){
    for(i=1; i<=num; i++){
       document.getElementById("boton_"+i).style.backgroundColor="#058085";
       document.getElementById("boton_"+i).style.color="#000000";
       primos.splice(0,num);
       ocupados.splice(0,num);

    }
}