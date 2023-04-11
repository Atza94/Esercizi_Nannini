
var array=[]
for (let i = 0; i < 100; i++) {
   array.push(i)
   
}
console.log(array); 

function loadpage(){
  let strload = '<fieldset>'
   strload += '<legend>Numeri Pari</legend>'
   strload+='<div id=div0>'
   strload+='</div>'
   strload+='</fieldset>'
   strload+='<br>'
   strload+='<input type="button" value="Genera numeri" onclick="exNumPari(array)">'
   document.getElementById("body_content").innerHTML=(strload);
}



function exNumPari(array){
   let pari=[];
   let dispari=[];
   for (let num = 0; num < array.length; num++) {
       const elements = array[num];
       if (elements %2==0) {
           pari.push(num)
           
       }
       else {
           dispari.push(num)
       }
   }
   let box_pari= document.getElementById("div0");
   box_pari.innerHTML=pari;
   console.log(pari);
   console.log(dispari);

   } 