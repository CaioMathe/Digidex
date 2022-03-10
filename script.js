const url = "https://digimon-api.vercel.app/api/digimon"
let valores = '';
fetch(url).then(resposta =>{
  
return resposta.json()

}).then(corpo =>{
    
    corpo.forEach(element => {
        console.log(element.index)
        JSON.stringify(element)
            valores += `<li>
            <img src="${element.img}" alt="${element.name}" class="imgs" >
            <span class="text">${element.name}</span>
            <span class="text">${element.level}</span>
            </li>`
           
        
      document.querySelector('.ul').innerHTML = valores
        
    });
})
