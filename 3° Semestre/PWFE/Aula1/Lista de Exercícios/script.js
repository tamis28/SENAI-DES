//Atividade 1
function calcularBonus(){
    let preco = Number(document.getElementById('preco').value);
    let resultado = document.getElementById('resultado');
    let bonos = 0;

    if(preco > 2000){
        bonos = preco * (10 / 100);
    }
        
    let bonosFinal = preco - bonos;

    resultado.innerHTML = 
        `O valor do bônos é de R$ ${bonos.toFixed(2)} <br>O salário final R$ ${bonosFinal.toFixed(2)}`; 
}
document.getElementById('preco').addEventListener("keypress",function(event){
    if(event.ket === "Enter"){
        calcularBonus();
    }
});

//Atividade 2
function calcularFrete(){
    let preco = Number(document.getElementById('preco').value);
    let resultado = document.getElementById('resultado');
    let frete = 0;

    if(preco < 150){
        frete = 20;
    }
        
    let freteFinal = preco + frete;

    resultado.innerHTML = 
        `O valor do frete é de R$ ${frete.toFixed(2)} <br>O valor total da compra é R$ ${freteFinal.toFixed(2)}`; 
}
document.getElementById('preco').addEventListener("keypress",function(event){
    if(event.ket === "Enter"){
        calcularFrete();
    }
});

//Atividade 3
function calcularDesconto(){
    let preco = Number(document.getElementById('preco').value);
    let resultado = document.getElementById('resultado');
    let desconto = 0;

    if(preco > 200){
        desconto = preco * (5 / 100);
    }
        
    let descontoFinal = preco - desconto;

    resultado.innerHTML = 
        `O valor do desconto é de R$ ${desconto.toFixed(2)} <br>O valor final a pagar é R$ ${descontoFinal.toFixed(2)}`; 
}
document.getElementById('preco').addEventListener("keypress",function(event){
    if(event.ket === "Enter"){
        calcularDesconto();
    }
});

//Atividade 4
function calcularTaxa(){
    let preco = Number(document.getElementById('preco').value);
    let resultado = document.getElementById('resultado');
    let taxa = 0;

    if(preco < 100){
        taxa = preco * (10 / 100);
    }else{
        taxa = 0
    }
        
    let taxaFinal = preco + taxa;

    resultado.innerHTML = 
        `O valor da taxa é de R$ ${taxa.toFixed(2)} <br>O valor total da conta é R$ ${taxaFinal.toFixed(2)}`; 
}
document.getElementById('preco').addEventListener("keypress",function(event){
    if(event.ket === "Enter"){
        calcularTaxa();
    }
});

//Atividade 5
function calcularMulta(){
    let preco = Number(document.getElementById('preco').value);
    let dia = Number(document.getElementById('dia').value);
    let resultado = document.getElementById('resultado');
    let multa = 0;

    if(dia > 0){
        multa = preco * (2 / 100);
    }

    let multaFinal = preco + multa;

    resultado.innerHTML = 
        `O valor da multa é de R$ ${multa.toFixed(2)} <br>O valor total a pagar é R$ ${multaFinal.toFixed(2)}`; 
}
document.getElementById('preco').addEventListener("keypress",function(event){
   if(event.ket === "Enter"){
       calcularMulta();
   }
});

//Atividade 6
function calcularCompra(){
    let preco = Number(document.getElementById('preco').value);
    let resultado = document.getElementById('resultado');
    let Cashback = 0;

    if(preco > 300){
        Cashback = preco * (5 / 100);
    }
        
    let cashbackFinal = preco - Cashback;

    resultado.innerHTML = 
        `O valor do cashback é de R$ ${Cashback.toFixed(2)} <br>O valor líquido da compra R$ ${cashbackFinal.toFixed(2)}`; 
}
document.getElementById('preco').addEventListener("keypress",function(event){
    if(event.ket === "Enter"){
        calcularCompra();
    }
});