function genera_tabla(){
  var body= document.getElementsByTagName("body")[0];//referencia del elemento body
  var tabla=document.createElement("table");//crea un elemento tabla
  var tablaBody=document.createElement("tbody")//crea un elemento tbody

  //crea las celdas
  for(var i =0;i<4;i++){
    //crea las hileras de la tabla
    var hilera=document.createElement("tr");
    var valorHilera=hilera.value;

    for (var j=0;j<4;j++){
      var celda= document.createElement("td");//se crea un elemento fila de la tabla
      celda.width = '50';
      celda.height = '50';

      console.log(valorCelda);
      //var celdaB= document.createElement("button");
      var textoCelda=document.createTextNode("");//se crea nodo de texto en celda
      //celda.appendChild(celdaB);
      celda.appendChild(textoCelda);//textocelda es hijo de celda
      hilera.appendChild(celda);//celda es hijo de hilera
      celda.addEventListener("click",numerosX);
      var valorCelda=celda.value;
    }
    tablaBody.appendChild(hilera);//hilera es hijo de tbody
  }
  tabla.appendChild(tablaBody);//tbody es hijo de tabla
  body.appendChild(tabla);//tabla es hijo de body
  tabla.setAttribute("border","5");//se dan atributos en el borde de la tabla


  function numerosX(){
    var numerosRandom=Math.floor((Math.random()*3)+2);

    if(numerosRandom<=3){
      console.log(numerosRandom);
    }else{
      console.log("blanco");
    }
    console.log(this);
  }
}
