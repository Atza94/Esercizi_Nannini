function ScriviTag() {
let Div_box = document.createElement('div');
Div_box.setAttribute('Id','idTag');
Div_box.setAttribute('innerText','Ciao Mondo');
let div = document.getElementById("idTag");
let elementoCreato=generaTagObj('p','grande mario','idpara','','');
div.innerText=generaTagObj();
}


function generaTagObj(tag='',innerText,id,classe,url) {
let lowerTag= tag.toLowerCase();
let elemento = '';
switch (lowerTag) {
    case 'p':
    case 'h1':
    case 'h3':
    case 'span':
        elemento = document.createElement(lowerTag);
        elemento.setAttribute('id',id);
        elemento.setAttribute('innerText',innerText);
        elemento.setAttribute('class',classe);
        elemento.setAttribute('url',url)
        
        console.log(elemento);    
        break;
    case 'a':
        elemento =document.createElement(lowerTag);
        console.log(elemento);
        break;
    default:
        elemento=null;
        break;
}return elemento
}