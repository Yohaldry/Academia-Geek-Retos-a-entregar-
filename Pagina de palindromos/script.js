function reverse(form) {

    if (form.expr.value == "")
      alert ("Ingrese un texto.");
    else { 
      var n = "";
      for (var i = form.expr.value.length; i>0; i--) {
        n = n + (form.expr.value.substring(i,i-1));
        }
      form.result.value = n;
      if (form.expr.value == form.result.value)
        alert ("¡Éste es un palíndromo!");
      else 
        alert ("Éste NO es un palíndromo."); 
    }
  }
  
  function clear(form) {
    form.result.value = "";
    form.expr.value = "";
  }
  
  function MakeArray(n) {
    this.length = n;
    for (var i = 1;i <= n; i++) {
      this[i] =0
    }
    return this;
  }