

function classificaTriangulo(texto) {
    var lados = texto.split(",");
    var nros = [0, 0, 0];
    var resp = "";
    if (lados.length != 3) {
        resp = "ERRO: numero de argumentos invalido!";
    } else {
        ok = true;
        for (i = 0; i < lados.length; i++) {
            nros[i] = parseInt(lados[i]);
            if (nros[1] == NaN) {
                ok = false;
            }
        }
        if (ok == true) {
            //nros.sort();
            if (nros[0]+nros[1] < nros[2]){
                resp = "ERRO: nao e um triangulo";
            } else if ((nros[0] == nros[1]) && (nros[1] == nros[2])) {
                resp = "Classificacao: equilatero";
            } else if ((nros[0] == nros[1]) && (nros[1] != nros[2])) {
                resp = "Classificacao: isoceles";
            } else {
                resp = "Classificacao: escaleno";
            }
        } else {
            resp = "ERRO: formato invalido!";
        }
    }
    document.getElementById("resposta").innerHTML = resp;
}

// --- início do programa

// Esconde a main page deixando apenas a pagina de configuração aparecendo
let butOk = document.getElementById("butOk");
let tfLados = document.getElementById("lados");
butOk.onclick = function () {
    let texto = tfLados.value;
    classificaTriangulo(texto);
};



