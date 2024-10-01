

function comparar(){
let texto1 = document.getElementById("texto1").value;
let texto2 = document.getElementById("texto2").value;


if(texto1 == texto2){
  document.getElementById("equal").innerHTML = "Son iguales";
}else{
  document.getElementById("equal").innerHTML = "No son iguales";
}
}

document.getElementById("texto1").addEventListener("keyup", comparar, false);
document.getElementById("texto2").addEventListener("keyup", comparar, false);


function contar(){
  let contpa = document.getElementById("contpa");
  
  let resultado = contpa.value.length;
  console.log(resultado);
  
  document.getElementById("letritas").innerHTML = resultado;
}



document.getElementById("contpa").addEventListener("keyup",contar , false);


function raiz(){
  let resultado = Math.sqrt(document.getElementById("num").value);
  document.getElementById("resultadoraiz").innerHTML = resultado;

  }

  document.getElementById("num").addEventListener("keyup",raiz , false);





  function concatena() {
    let t1 = document.getElementById("t1").value; 
    let t2 = document.getElementById("t2").value; 
    let juntar = t1 + " " + t2; 
    
    document.getElementById("juntar").innerHTML = juntar; 
}





let header = document.getElementById('header')
let footer = document.getElementById('footer')

function color1(){
header.style.background = "blue";
footer.style.background = "blue";
}
function color2(){
  header.style.background = "green";
  footer.style.background = "green";
  }
  function color3(){
    header.style.background = "yellow";
    footer.style.background = "yellow";
    }
  
    document.getElementById("but1").addEventListener('click', color1, false);
    document.getElementById("but2").addEventListener('click', color2, false);
    document.getElementById("but3").addEventListener('click', color3, false);
 




    let altura = document.getElementById('alto');
    let anchura = document.getElementById('ancho');
    let imagen = document.getElementById('imagen');
     


    function cambiarTamaño() {
      let nuevaAltura = altura.value;  
      let nuevaAnchura = anchura.value;
   
   
      if (nuevaAltura !== "") {
          imagen.style.height = nuevaAltura + 'px';  
      }
     
      if (nuevaAnchura !== "") {
          imagen.style.width = nuevaAnchura + 'px';  
      }
  }
   
   
  altura.addEventListener('input', cambiarTamaño);
  anchura.addEventListener('input', cambiarTamaño);