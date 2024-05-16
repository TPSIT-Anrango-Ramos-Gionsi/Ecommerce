window.onload=start;

var prodotti=[

]

var carrello=[
    
]

var elencoProdotti; //HTML
var elencoProdottiCarrello;  //HTML
var totaleCarrello;

var costoCarrello;

var ID=0;
function start(){
    for(let i=0;i<10;i++)
    prodotti.push({costo:Math.round(Math.random()*(100-20)+20),id:++ID});
    
    elencoProdotti=document.querySelector("main section div");
    elencoProdottiCarrello=document.querySelector("main section:last-child div");
    costoCarrello=0;
    totaleCarrello=document.querySelector("main section:last-child p")
    caricaProdotti();

    document.querySelector("header button:last-child").onclick=mostraCarrello;
    document.querySelector("header button:last-child").onclick=mostraAggNuovoProd;
}
function mostraAggNuovoProd(){


}
function mostraCarrello(){

    if(document.querySelector("main section:last-child").style.display=="none") 
        {
            document.querySelector("main section:last-child").style.display="block"
            document.querySelector("main section:first-child").style.width="40%"
            
            
        }
        else {
            document.querySelector("main section:last-child").style.display="none"
            document.querySelector("main section:first-child").style.width="100%"

        }
}
function caricaProdotti(){
    elencoProdotti.innerHTML="";
    for (let item of prodotti) {
            article=document.createElement("article");
            for (let key in item) {
                span=document.createElement("span");
                span.innerHTML=item[key];
                article.appendChild(span);
            }
            
            article.setAttribute("id",item["id"]);
            article.setAttribute("costo",item["costo"]);
            article.onclick=compraProdotto;
            elencoProdotti.appendChild(article);
    }
  
}

function compraProdotto(event){
    let prodotto=event.currentTarget;
    funzione=prodotto.onclick;
    prodotto.onclick="";
    let pacchettoCarrello=document.createElement("div")
    pacchettoCarrello.innerHTML+=(prodotto.outerHTML)
    prodotto.onclick=funzione;

    pacchettoCarrello.innerHTML+=`<span idprodotto="${prodotto.id}" class="material-symbols-outlined" onclick="elimina(event)">
    close
    </span>`
    pacchettoCarrello.classList="carrelloPackage"
    elencoProdottiCarrello.appendChild(pacchettoCarrello)
    costoCarrello+=parseInt(prodotto.attributes[1].value);
    totaleCarrello.innerHTML=costoCarrello;
    
    
}
//currentTarget - srcElement

function elimina(event){
    idElmina=event.currentTarget.attributes[0].value
    pacco=document.querySelector(`.carrelloPackage:has(span[idprodotto="${idElmina}"])`);
    
    costoCarrello-=pacco.children[0].attributes[1].value;
    pacco.outerHTML="";
    totaleCarrello.innerHTML=costoCarrello;
}   //il padre
