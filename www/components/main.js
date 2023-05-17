function calcularTotal() {
    var checkboxes = document.getElementsByName("item");
    var total = 0;
    
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        total += parseInt(checkboxes[i].value);
      }
    }
    
    document.getElementById("total").innerHTML = "Total: R$ " + total.toFixed(2);
  }


