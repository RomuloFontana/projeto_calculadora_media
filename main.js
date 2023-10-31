const forma = document.getElementById("forma-ativ")
const imgAprov = `<img src="./images/aprovado.png" alt="Emoji comemorando" />`
const imgReprov = `<img src="./images/reprovado.png" alt="Emoji triste"/> `
let linhas = ""

const notaMin = parseInt(prompt("Digite a nota mínima."))
const medNomes = []
const medNotas = []
const resultado = document.querySelector("span")
forma.addEventListener("submit", function(teste) {
    teste.preventDefault();
    addLinha();
    updateTab();
    mediaUpdate();
    });

    function addLinha(){
        const atividade = document.getElementById("inpt1");
        const nota =  document.getElementById("inpt2");
        
        if (medNomes.includes(atividade.value)) {
            alert(`A atividade ${atividade.value} ja foi inserida, tentre outro nome.`)
            
        } else {
            
            medNomes.push(atividade.value)
            medNotas.push(parseFloat(nota.value))
            
            let novaLinha = '<tr>';
            novaLinha += `<th>${atividade.value}</th>`;
            novaLinha += `<th>${nota.value}</th>`;
            novaLinha += `<th>${nota.value > notaMin ? imgAprov : imgReprov}</th>`;
            novaLinha += '</tr>';
            
            linhas += novaLinha;
        
        }
        document.getElementById("inpt1").value = "";
        document.getElementById("inpt2").value = "";
        
    };
    
    function updateTab(){
        const tcorpo = document.getElementById("tabCorpo"); 
        tcorpo.innerHTML = linhas;
        }

function mediaUpdate(){
    let somaNumeros = 0

    for (let i = 0; i < medNotas.length; i++) {
        somaNumeros +=  medNotas[i]
        
    }
    
    const media = somaNumeros / medNotas.length
    const textoM = document.getElementById("textoMedia")
    const notaM = document.getElementById("notaMedia")

    if (media <= notaMin ) {
        resultado.innerHTML = "Reprovado";
        resultado.style.background = "red";
        resultado.style.display = "inline";
        textoM.innerHTML = "Média"
        notaM.innerHTML = `${media.toFixed(2)}`
        
    } else {
        resultado.innerHTML = "Aprovado"
        resultado.style.background = "green"
        resultado.style.display = "inline"
        textoM.innerHTML = "Média"
        notaM.innerHTML = `${media.toFixed(2)}`
    }

    
}
