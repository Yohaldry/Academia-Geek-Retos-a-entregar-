function multiplicar(){
  
    var cantidad = Number(document.getElementById('cantidad').value);

            var valorcompra = cantidad * 820000;

    if(valorcompra < 1640000){


        document.getElementById('valordescuento').value = "No hay descuento";
        document.getElementById('valorcompra').value = valorcompra;
        document.getElementById('resultadodescuento').innerHTML = "<strong>su descuento fue de 0%</strong>";
    }

    else{

        if(valorcompra < 3280000){

            var valordescuento = valorcompra * 0.15;
            var total = valorcompra - valordescuento;

            document.getElementById('valorcompra').value = valorcompra;
            document.getElementById('valordescuento').value = valordescuento;
            document.getElementById('total').value = total;
            document.getElementById('resultadodescuento').innerHTML = "<strong>su descuento fue de 15%</strong>";


        }
        else{

            if(valorcompra < 6560000){

            var valordescuento = valorcompra * 0.25;
            var total = valorcompra - valordescuento;

            document.getElementById('valorcompra').value = valorcompra;
            document.getElementById('valordescuento').value = valordescuento;
            document.getElementById('total').value = total;
            document.getElementById('resultadodescuento').innerHTML = "<strong>su descuento fue de 25%</strong>";

        }
        else{

            if(valorcompra < 9840000){

                var valordescuento = valorcompra * 0.35;
                var total = valorcompra - valordescuento;
    
                document.getElementById('valorcompra').value = valorcompra;
                document.getElementById('valordescuento').value = valordescuento;
                document.getElementById('total').value = total;
                document.getElementById('resultadodescuento').innerHTML = "<strong>su descuento fue de 35%</strong>";
    
            }
            else{

                if(valorcompra > 9840000){

                    var valordescuento = "no Hay Descuento";
                    var total = valorcompra - valordescuento;
        
                    document.getElementById('valorcompra').value = valorcompra;
                    document.getElementById('valordescuento').value = valordescuento;
                    document.getElementById('total').value = total;
                    document.getElementById('resultadodescuento').innerHTML = "<strong>su descuento fue de 0%</strong>";
                }
            }
        }
        }
    }
}
