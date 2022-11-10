let dolarEmRelacaoAoReal = 5.34

do {
 alert("1 Dólar americano igual a " +  dolarEmRelacaoAoReal + " Real brasileiro");

  dolarEmRelacaoAoReal -= 0.21;
  if (dolarEmRelacaoAoReal == 4.08) {
     alert('o Dólar está diminuindo radicalmente em relação ao real! Um bom momento para fazer umas compras no exterior hein!')
  }
} while (dolarEmRelacaoAoReal >= 3.24)
