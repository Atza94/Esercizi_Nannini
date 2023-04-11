function ScriviTag() {
let div = document.getElementById("idTag");
let elementoCreato=generaTagObj('p','grande mario','idp','tre','gtrd');
div.appendChild(elementoCreato);
}


function generaTagObj(tag,innerText,id,classe,url) {
//let strTag = ""
let lowerTag= tag.toLowerCase();
let elemento;
switch (lowerTag) {
    case 'p':
    case 'h1':
    case 'h3':
    case 'span':

        elemento.setAttribute("id",id);
        elemento.setAttribute('ciao mondo',innerText)
        elemento.setAttribute('class',classe);
        elemento.setAttribute('url',url)
        elemento =document.createElement(lowerTag);
        console.log(elemento);    
        break;
    case 'a':
        elemento =document.createElement(lowerTag);
        console.log(elemento);
        break;
    default:
        elemento=null;
        break;
}
}