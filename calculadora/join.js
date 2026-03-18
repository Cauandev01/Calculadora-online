let display = document.getElementById("display") ;

function digitar(valor) {
  if (valor === "*") {
    display.value += "×";
  } else {
    display.value += valor;
  }
}


function limpar(){
    display.value = ""
}

function apagarUltimo() {
  display.value = display.value.slice(0, -1);
}


function calcular() {
  try {
    if (display.value.trim() === "") {
      return;
    }

   
    let expressao = display.value.replace(/×/g, "*");

    let resultado = eval(expressao);

    if (resultado === undefined || resultado === null) {
      display.value = "";
    } else {
      display.value = resultado;
    }
  } catch {
    display.value = "Erro";
  }
}

document.addEventListener("keydown", function(event) {
    const tecla = event.key

    if(!isNaN(tecla)|| tecla ==="."){
        digitar(tecla)
        }

        if (tecla === "+") digitar ("+")
             if (tecla === "-") digitar ("-")
                 if (tecla === "/") digitar ("/")
                     if (tecla === "*") digitar ("*")

                        if (tecla === "Enter"){
                            calcular();
                        }

                        if (tecla === "Backspace"){
                            apagarUltimo();
                        }

                        if (tecla === "Escape"){
                            limpar();
                        }
})
