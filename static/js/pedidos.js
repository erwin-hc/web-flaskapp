
// ----------------------------------------    
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

// ----------------------------------------
    window.onload = function() {
    document.getElementById('link_pedidos').className = 'active';
    };


// ----------------------------------------
    function searchTableColumns() {
        // Declare variables 
        var input, filter, table, tr, i, j, column_length, count_td;
        column_length = document.getElementById("tabelaDados").rows[0].cells.length;
        input = document.getElementById("inputSearch");
        filter = input.value.toUpperCase();
        table = document.getElementById("tabelaDados");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) { // except first(heading) row
            count_td = 0;
            for (j = 0; j < column_length; j++) { // except first column
                td = tr[i].getElementsByTagName("td")[j];
                /* ADD columns here that you want you to filter to be used on */
                if (td) {
                    if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                        count_td++;
                    }
                }
            }
            if (count_td > 0) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }

    }
// ----------------------------------------
    function producao() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        filter = "PRODUCAO";
        table = document.getElementById("tabelaDados");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[8];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].classList.add("producao");
                } else {
                    // tr[i].style.display = "none";
                }
            }
        }
    }
// ----------------------------------------
    function coletado() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        filter = "COLETADO";
        table = document.getElementById("tabelaDados");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[8];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].classList.add("coletado")
                } else {
                    // tr[i].style.display = "none";
                }
            }
        }
    }

// ----------------------------------------
    function cancelado() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        filter = "CANCELADO";
        table = document.getElementById("tabelaDados");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[8];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].classList.add("cancelado");
                } else {
                    // tr[i].style.display = "none";
                }
            }
        }
    }

// ----------------------------------------

function vazio() {
var td;
var table = document.getElementById("tabelaDados");
var tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        tr[i].innerHTML = tr[i].innerHTML.replace("None", "")
    }
} 
// ----------------------------------------

   function zera_cancelado() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        filter = "CANCELADO";
        table = document.getElementById("tabelaDados");
        tr = table.getElementsByTagName("tr");

        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[8];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].getElementsByTagName("td")[4].innerHTML = "";
                    tr[i].getElementsByTagName("td")[5].innerHTML = "";
                    tr[i].getElementsByTagName("td")[6].innerHTML = "";
                }
            }
        }


    }
// ----------------------------------------

   function zera_producao() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        filter = "PRODUCAO";
        table = document.getElementById("tabelaDados");
        tr = table.getElementsByTagName("tr");

        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[8];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].getElementsByTagName("td")[5].innerHTML = "";
                    tr[i].getElementsByTagName("td")[6].innerHTML = "";
                    tr[i].getElementsByTagName("td")[7].innerHTML = "";
                }
            }
        }
    }
    // ----------------------------------------

   function zera_coletado() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        filter = "COLETADO";
        table = document.getElementById("tabelaDados");
        tr = table.getElementsByTagName("tr");

        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[8];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].getElementsByTagName("td")[4].innerHTML = "";
                }
            }
        }
    }
// ----------------------------------------

   function zera_cliente_retira() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        filter = "CLIENTE RETIRA";
        table = document.getElementById("tabelaDados");
        tr = table.getElementsByTagName("tr");

        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[5];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                   tr[i].getElementsByTagName("td")[6].innerHTML = "";
                   tr[i].getElementsByTagName("td")[7].innerHTML = "";
                }
            }
        }
    }

// ----------------------------------------

   function replace_jadlog() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        filter = "JADLOG LOGISTICA LTDA";
        table = document.getElementById("tabelaDados");
        tr = table.getElementsByTagName("tr");

        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[5];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                   tr[i].getElementsByTagName("td")[5].innerHTML = "JADLOG";
                }
            }
        }
    }

// ----------------------------------------

   function replace_expresso() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        filter = "EXPRESSO SAO MIGUEL LTDA";
        table = document.getElementById("tabelaDados");
        tr = table.getElementsByTagName("tr");

        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[5];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                   tr[i].getElementsByTagName("td")[5].innerHTML = "SAO-MIGUEL";
                }
            }
        }
    }

// ----------------------------------------

   function replace_aceville() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        filter = "ACEVILLE TRANSPORTES LTDA";
        table = document.getElementById("tabelaDados");
        tr = table.getElementsByTagName("tr");

        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[5];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                   tr[i].getElementsByTagName("td")[5].innerHTML = "ACEVILLE";
                }
            }
        }
    }

    // ----------------------------------------

   function replace_fedex() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        filter = "FEDEX BRASIL LTDA";
        table = document.getElementById("tabelaDados");
        tr = table.getElementsByTagName("tr");

        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[5];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                   tr[i].getElementsByTagName("td")[5].innerHTML = "FEDEX";
                }
            }
        }
    }




