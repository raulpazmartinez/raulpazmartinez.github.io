

let num = prompt("Indica el número de botones mayores a 20:");
if (num >= 20) {
    crearBtn();
} else {
    alert("Sigue las indicaciones");

}

function crearBtn() {
    for (i = 1; i <= num; i++) {
        let boton = document.createElement("input");
        boton.id = "btn_" + i;
        boton.type = "button";
        boton.value = "" + i;
        boton.className = "celda2";

        document.getElementById("cboton").appendChild(boton);
        document.getElementById("btn_" + i).style.height = "35px";
        document.getElementById("btn_" + i).style.width = "35px";
        document.getElementById("btn_" + i).style.backgroundColor = "#dda0dd";
        document.getElementById("btn_" + i).style.border = "0px";
        document.getElementById("btn_" + i).style.marginLeft = "2px";
        document.getElementById("btn_" + i).style.marginBottom = "2px";
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

let ocupados = [];
let primos = [];
btn1.onclick = function () {
    for (i = 1; i <= num; i++) {
        if (i % 2 == 0 && ocupados.includes(i) == false) {
            document.getElementById("btn_" + i).style.backgroundColor = "#9acd32";
            ocupados.push(i);
        }
    }
}
btn2.onclick = function () {
    for (i = 1; i <= num; i++) {
        if (i % 3 == 0 && ocupados.includes(i) == false) {
            document.getElementById("btn_" + i).style.backgroundColor = "#6b8e23";
            ocupados.push(i);
        }
    }
}
btn3.onclick = function () {
    for (i = 1; i <= num; i++) {
        if (i % 4 == 0 && ocupados.includes(i) == false) {
            document.getElementById("btn_" + i).style.backgroundColor = "#808000";
            ocupados.push(i);
        }
    }
}
btn4.onclick = function () {
    for (i = 1; i <= num; i++) {
        if (i % 5 == 0 && ocupados.includes(i) == false) {
            document.getElementById("btn_" + i).style.backgroundColor = "#4682b4";
            ocupados.push(i);
        }
    }
}
btn5.onclick = function () {
    for (i = 1; i <= num; i++) {
        if (i % 6 == 0 && ocupados.includes(i) == false) {
            document.getElementById("btn_" + i).style.backgroundColor = "#b0c4de";
            ocupados.push(i);
        }
    }
}
btn6.onclick = function () {
    for (i = 1; i <= num; i++) {
        if (i % 7 == 0 && ocupados.includes(i) == false) {
            document.getElementById("btn_" + i).style.backgroundColor = "#b0e0e6";
            ocupados.push(i);
        }
    }
}
btn7.onclick = function () {
    for (i = 1; i <= num; i++) {
        if (i % 8 == 0 && ocupados.includes(i) == false) {
            document.getElementById("btn_" + i).style.backgroundColor = "#ffb6c1";
            ocupados.push(i);
        }
    }
}
btn8.onclick = function () {
    for (i = 1; i <= num; i++) {
        if (i % 9 == 0 && ocupados.includes(i) == false) {
            document.getElementById("btn_" + i).style.backgroundColor = "#ff69b4";
            ocupados.push(i);
        }
    }
}

let j = 0;
let numA = 0;
btn9.onclick = function () {
    for (i = 2; i <= num; i++) {
        numA = i;
        for (k = 1; k <= numA; k++) {
            if (i % k == 0) {
                j++;
            }
        }
        if (j == 2 && primos.includes(i) == false) {
            j = 0;
            document.getElementById("btn_" + i).style.backgroundColor = "#c71585";
            document.getElementById("btn_" + i).style.color = "#ffffff";
            primos.push(i);
            ocupados.push(i);
        } else if (j > 2) {
            j = 0;
        }
    }
}
btn10.onclick = function () {
    for (i = 1; i <= num; i++) {
        document.getElementById("btn_" + i).style.backgroundColor = "#dda0dd";
        document.getElementById("btn_" + i).style.color = "#000000";
        primos.splice(0, num);
        ocupados.splice(0, num);

    }
}