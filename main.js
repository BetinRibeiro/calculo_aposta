const calcularValorAposta=(razao, totalAcumulado,fator)=> {
    var valorAposta = (fator * totalAcumulado) / (razao - 2);
    return valorAposta;
}
const abrirformulario = () => {
    // document.getElementById('resultado').classList.add('d-none')
    document.getElementById('formulario').classList.remove('d-none')
}
const calcularFatorMultiplicador=(numero)=> {
    numero = 100 - numero;
    var valor = 1 / (numero / 100);
    console.log(valor);
    return valor;
}
const formatarValor =(valor) =>{
    var valor = valor
    valor =parseFloat(valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return String(valor)
}
const fecharformulario = () => {
    // document.getElementById('formulario').classList.add('d-none')
    document.getElementById('resultado').classList.remove('d-none')
}

const imprime_resultado = () => {
    totalAcumulado= document.getElementById('totalAcumulado').value;
    razao= document.getElementById('razao').value;
    fator= document.getElementById('fator').value;
    resultado=calcularValorAposta(parseFloat(razao),parseFloat(totalAcumulado),calcularFatorMultiplicador(parseFloat(fator)))
    premio=resultado*razao
    lucro=premio-totalAcumulado-resultado
    acumuladonovo=parseFloat(totalAcumulado)+parseFloat(resultado)
    console.log(acumuladonovo);
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
    <th>${formatarValor(totalAcumulado)}</th>
    <th class="text-success">${formatarValor(resultado)}</th>
    <th>${(razao)}</th>
    <th>${formatarValor(premio)}</th>
    <th class="text-info">${formatarValor(lucro)}</th>
    <th class="text-danger">${formatarValor(acumuladonovo)}</th>
    
    `
    document.querySelector('#tabela>tbody').appendChild(newRow)
    fecharformulario()

}

document.getElementById('calcular')
.addEventListener('click', imprime_resultado)


document.getElementById('retornar')
.addEventListener('click', abrirformulario)
