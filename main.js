const calcularValorAposta=(razao, totalAcumulado)=> {
    var valorAposta = (2 * totalAcumulado) / (razao - 2);
    return valorAposta;
}
const abrirformulario = () => {
//     document.getElementById('resultado').classList.add('d-none')
    document.getElementById('formulario').classList.remove('d-none')
}

const formatarValor =(valor) =>{
    var valor = valor
    valor =parseFloat(valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return String(valor)
}
const fecharformulario = () => {
//     document.getElementById('formulario').classList.add('d-none')
    document.getElementById('resultado').classList.remove('d-none')
}

const imprime_resultado = () => {
    totalAcumulado= document.getElementById('totalAcumulado').value;
    razao= document.getElementById('razao').value;
    resultado=calcularValorAposta(parseFloat(razao),parseFloat(totalAcumulado))
    premio=resultado*razao
    lucro=premio-totalAcumulado-resultado
    acumuladonovo=parseFloat(totalAcumulado)+parseFloat(resultado)
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
    <th>${formatarValor(totalAcumulado)}</th>
    <th>${formatarValor(resultado)}</th>
    <th>${(razao)}</th>
    <th>${formatarValor(premio)}</th>
    <th>${formatarValor(lucro)}</th>
    
    `
    document.querySelector('#tabela>tbody').appendChild(newRow)
    fecharformulario()

}

document.getElementById('calcular')
.addEventListener('click', imprime_resultado)


document.getElementById('retornar')
.addEventListener('click', abrirformulario)
