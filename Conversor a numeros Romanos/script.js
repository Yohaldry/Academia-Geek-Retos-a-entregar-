function romano(a,b,c,d)
{
	var x=Number(a.value); // Variables Predeterminadas
    var y=Number(b.value);
    var w=Number(c.value);
    var z=Number(d.value);
	var letra;
    var letra1;
	var letra2;
	var letra3;
	var mensaje;           // Variables Predeterminadas
	if (z>9 || z<0)
	{
		alert("Introduzca un numero entre 1 y 10")
	}
	else 
	{
		switch (z) // Del 1 al 9
		{
			case 1:letra="I"; break;
			case 2:letra="II"; break;
			case 3:letra="III"; break;
			case 4:letra="IV"; break;
			case 5:letra="V"; break;
			case 6:letra="VI"; break;
			case 7:letra="VII"; break;
			case 8:letra="VIII"; break;
			case 9:letra="IX";break;
			case 0:letra="";break;
			case "":letra=""; break;
		
		}
        switch (w) // Del 10 al 90
		{
			case 1:letra1="X"; break;
			case 2:letra1="XX"; break;
			case 3:letra1="XXX"; break;
			case 4:letra1="XL"; break;
			case 5:letra1="L"; break;
			case 6:letra1="LX"; break;
			case 7:letra1="LXX"; break;
			case 8:letra1="LXXX"; break;
			case 9:letra1="XC";break;
			case 0:letra1="";break;
			case "":letra1=""; break;
		
		}
		
		switch (y) // Del 100 al 900
		{
			case 1:letra2="C"; break;
			case 2:letra2="CC"; break;
			case 3:letra2="CCC"; break;
			case 4:letra2="CD"; break;
			case 5:letra2="D"; break;
			case 6:letra2="DC"; break;
			case 7:letra2="DCC"; break;
			case 8:letra2="DCCC"; break;
			case 9:letra2="CM";break;
			case 0:letra2="";break;
			case "":letra2=""; break;
		
		}

		switch (x) // del 1.000 al 3.000
		{
			case 1:letra3="M"; break;
			case 2:letra3="MM"; break;
			case 3:letra3="MMM"; break;
			case 0:letra3=""; break;
			case "":letra3=""; break;
		
		}
	}
	mensaje="<p> El numero: "+x+""+y+""+w+""+z+" en romano es:  "+letra3+""+letra2+""+letra1+""+letra+"</p>";
	document.getElementById("salida").innerHTML=mensaje;
}