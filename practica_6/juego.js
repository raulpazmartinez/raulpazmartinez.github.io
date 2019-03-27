let  num_tableros = 4;
let imagenes = [
    {id:40, dir:'./imagenes/alacran.png', name:"El alacrán"},
    {id:38, dir:'./imagenes/apache.png', name:"El apache"},
    {id:33, dir:'./imagenes/arana.png', name:"La araña"},
    {id:10, dir:'./imagenes/arbol.png', name:"El árbol"},
    {id:53, dir:'./imagenes/arpa.png', name:"El arpa"},
    {id:16, dir:'./imagenes/bandera.png', name:"La bandera"},
    {id:17, dir:'./imagenes/bandolon.png', name:"El bandolón"},
    {id:9,  dir:'./imagenes/barril.png', name:"El barril"},
    {id:25, dir:'./imagenes/borracho.png', name:"El borracho"},
    {id:22, dir:'./imagenes/bota.png', name:"La bota"},
    {id:8,  dir:'./imagenes/botella.png', name:"La botella"},
    {id:42, dir:'./imagenes/calavera.png', name:"La calavera"},
    {id:30, dir:'./imagenes/camaron.png', name:"El camarón"},
    {id:43, dir:'./imagenes/campana.png', name:"La campana"},
    {id:44, dir:'./imagenes/cantarito.png', name:"El cantarito"},
    {id:4,  dir:'./imagenes/catrin.png', name:"El catrín"},
    {id:36, dir:'./imagenes/cazo.png', name:"El cazo"},
    {id:48, dir:'./imagenes/chalupa.png', name:"La chalupa"},
    {id:27, dir:'./imagenes/corazon.png', name:"El corazón"},
    {id:47, dir:'./imagenes/corona.png', name:"La corona"},
    {id:24, dir:'./imagenes/cotorro.png', name:"El cotorro"},
    {id:3,  dir:'./imagenes/dama.png', name:"La dama"},
    {id:2,  dir:'./imagenes/diablo.png', name:"El diablo"},
    {id:7,  dir:'./imagenes/escalera.png', name:"La escalera"},
    {id:35, dir:'./imagenes/estrella.png', name:"La estrella"},
    {id:1, dir:'./imagenes/gallo.png', name:"El gallo"},
    {id:19, dir:'./imagenes/garza.png', name:"La garza"},
    {id:13, dir:'./imagenes/gorrito.png', name:"El gorrito"},
    {id:31, dir:'./imagenes/jaras.png', name:"Las jaras"},
    {id:23, dir:'./imagenes/luna.png', name:"La luna"},
    {id:52, dir:'./imagenes/maceta.png', name:"La maceta"},
    {id:21, dir:'./imagenes/mano.png', name:"La mano"},
    {id:11, dir:'./imagenes/melon.png', name:"El melón"},
    {id:14, dir:'./imagenes/muerte.png', name:"La muerte"},
    {id:37, dir:'./imagenes/mundo.png', name:"El mundo"},
    {id:32, dir:'./imagenes/musico.png', name:"El músico"},
    {id:26, dir:'./imagenes/negrito.png', name:"El negrito"},
    {id:39, dir:'./imagenes/nopal.png', name:"El nopal"},
    {id:20, dir:'./imagenes/pajaro.png', name:"El pajáro"},
    {id:51, dir:'./imagenes/palma.png', name:"La palma"},
    {id:5,  dir:'./imagenes/paraguas.png', name:"El paraguas"},
    {id:15, dir:'./imagenes/pera.png', name:"La pera"},
    {id:50, dir:'./imagenes/pescado.png', name:"El pescado"},
    {id:49, dir:'./imagenes/pino.png', name:"El pino"},
    {id:54, dir:'./imagenes/rana.png', name:"La rana"},
    {id:41, dir:'./imagenes/rosa.png', name:"La rosa"},
    {id:28, dir:'./imagenes/sandia.png', name:"La sandía"},
    {id:6,  dir:'./imagenes/sirena.png', name:"La sirena"},
    {id:46, dir:'./imagenes/sol.png', name:"El sol"},
    {id:34, dir:'./imagenes/soldado.png', name:"El soldado"},
    {id:29, dir:'./imagenes/tambor.png', name:"El tambor"},
    {id:12, dir:'./imagenes/valiente.png', name:"El valiente"},
    {id:45, dir:'./imagenes/venado.png', name:"El venado"},
    {id:18, dir:'./imagenes/violoncello.png', name:"El violoncello"}
];

let img_consultado = [];
let img_mezclado = [];
let img_obtenido = [];

function obtenerImagenAleatoria(){ 
    do{
        img_consultado = imagenes[Math.floor(Math.random()*imagenes.length)];
        if(img_mezclado.includes(img_consultado) == false){
            img_mezclado.push(img_consultado);
            return img_consultado;
        }
    }while(img_mezclado.includes(img_consultado));
    
}

function crearTablero(){
    for(i=1; i <= num_tableros; i++){
        //declaro mi componente
        let tablero = document.createElement("div");
        //Atributos de mi boton
        tablero.id = "tablero"+i;
        document.getElementById("cTablero").appendChild(tablero);
        document.getElementById("tablero"+i).style = "float:left";
        document.getElementById("tablero"+i).style.width = "310px";
        document.getElementById("tablero"+i).style.marginLeft = "10px";
        document.getElementById("tablero"+i).style.marginBottom = "5px";
        document.getElementById("tablero"+i).style.backgroundColor = "#EDEDEC";
        document.getElementById("tablero"+i).style.borderRadius = "10px";
        document.getElementById("tablero"+i).style.padding = "3px";
        
       // document.getElementById("Tablero"+i).style.border = "solid 2px #ccc";
        
        for(j=1; j <= 16; j++){
            let carta_Tab = document.createElement("div");
            let imagen = document.createElement("img");
            let num_carta = document.createElement("div");
            let name_carta = document.createElement("div");
        
            carta_Tab.id = "Tab_"+i+"Carta"+j;
            imagen.id = "Tab_"+i+"img"+j;
            num_carta.id = "Tab_"+i+"num"+j;
            name_carta.id = "Tab_"+i+"name"+j;
            
            img_obtenido = obtenerImagenAleatoria();
           // document.writeln(""+img_obtenido+" "+j)
            
            document.getElementById("tablero"+i).appendChild(carta_Tab);
            document.getElementById("Tab_"+i+"Carta"+j).appendChild(num_carta); 
            document.getElementById("Tab_"+i+"Carta"+j).appendChild(imagen);
            document.getElementById("Tab_"+i+"Carta"+j).appendChild(name_carta);
            
            document.getElementById("Tab_"+i+"Carta"+j).style = "float:left";
            document.getElementById("Tab_"+i+"Carta"+j).style.margin = "1px";
            document.getElementById("Tab_"+i+"Carta"+j).style.border = "solid 2px #ccc";
            
            document.getElementById("Tab_"+i+"num"+j).innerHTML= img_obtenido.id;
            document.getElementById("Tab_"+i+"num"+j).style.fontSize = "10px";
            document.getElementById("Tab_"+i+"num"+j).style.paddingLeft = "5px";
            document.getElementById("Tab_"+i+"num"+j).style.color = "black";
           
            document.getElementById("Tab_"+i+"img"+j).src = img_obtenido.dir;
            document.getElementById("Tab_"+i+"img"+j).style.padding = "5px";
            document.getElementById("Tab_"+i+"img"+j).style.height = "70px";
            document.getElementById("Tab_"+i+"img"+j).style.width = "70px";
            

            document.getElementById("Tab_"+i+"name"+j).innerHTML= img_obtenido.name;
            document.getElementById("Tab_"+i+"name"+j).style.marginTop = "5px";
            document.getElementById("Tab_"+i+"name"+j).style.fontSize = "10px" ;
            document.getElementById("Tab_"+i+"name"+j).className= "centrar";
            document.getElementById("Tab_"+i+"name"+j).style.color = "black";

            if(j == 16){
                img_mezclado.splice(0, 16);
            }
  
        }
               
    }
    
}

crearTablero();
