// pega a div que existe no html
const div = document.querySelector("div")
// cria a funçao que atualiza o relogio 
function atualizarRelogio() {
// cria a referencia da data atual 
    const data = new Date()
// pega a hora atual
    const hora = data.getHours()
    console.log(hora)
// pega o minuto atual
    const minutos = data.getMinutes()
    console.log(minutos)
// pega os segundos atuais
    const segundos = data.getSeconds()
    console.log(segundos)
//  div.innerHTML ele insere os spans dentro da div que existe no html
// Abro e fecho a crase ``
// Insiro o ${nomedaminhavarialaquidentro}

div.innerHTML = `<span>${String(hora).padStart(2, "0")}:</span>
<span>${String(minutos).padStart(2, "0")}:</span>
<span>${String(segundos).padStart(2, "0")}</span>`;

}

// 

setInterval(atualizarRelogio, 1000)