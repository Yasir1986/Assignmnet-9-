


const coinsContainer = document.querySelector('#coins-container');
const current = document.querySelector('#current');

let coins = [];


const filterCoins = function(val){
  return coins.filter(coin => (coin.name).toUpperCase().match((val.toUpperCase())) != null);
}

//SearchBar 

document.querySelector('#SearchBar').addEventListener('input',(e) => {
  cryptoUI(filterCoins(e.target.value));
  });

 
  //Sort by Name

    document.querySelector("#byName").addEventListener("click", function(){
      reset();
      const sorted = allData.sort(( a , b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if(nameA < nameB){
          return -1;
        } 
        if (nameA > nameB){
        return 1;
        }
        return 0;
      });
     // break;

      cryptoUI(sorted)

});

const reset =() => {
  document.getElementById("coins-container").innerHTML = "";
}

// Sort By Price 

document.querySelector("#byPrice").addEventListener("click", function(){
  reset();
  const sorted1 = allData.sort(( a , b) => {
      return a.price_usd - b.price_usd ; 
  });

  cryptoUI(sorted1)

});

// Sort by Rank

document.querySelector("#byRank").addEventListener("click", function(){
  reset();
  const sorted2 = allData.sort(( a , b) => {
      return a.rank - b.rank ; 
  });

  cryptoUI(sorted2)

});


function clearList(parent){
   while (parent.firstChild) {
     parent.removeChild(parent.firstChild);
   }
}

  // const coinsN = function(coinN){
  //   allData = cryptoUI;
  //   clearList(coinsContainer);
  //   let numberOfCoins = obj.length;
  //   let h2 = document.createElement('h2');
  //   clearList(h2);
  //   h2.textContent = `Currently there are ${numberOfCoins} crypto coins.` ;
  //   coinsContainer.prepend(h2)
  // };

  //  cryptoUI(coinsN)

const cryptoUI = function(obj){

   clearList(coinsContainer);
   let numberOfCoins = obj.length;
   let h2 = document.createElement('h2');
   clearList(current);
   
   h2.textContent = `Currently there are ${numberOfCoins} crypto coins.` ;
   current.prepend(h2)
   
  // coinsCointainer.innerHTML = ""
  // const coinsCointainer = document.querySelector("#coins-container")
  
    obj.forEach(function(coin,i){
    let coinDiv = document.createElement("div");
    coinDiv.className = "coin"
    let coinName = document.createElement("p");
    let coinSymbol = document.createElement("p");
    let coinRank = document.createElement("p");
    let coinPrice = document.createElement("p");
    let coinChangePrice = document.createElement("p");

    coinName.textContent = 'Name: ' + coin.name;
    coinSymbol.textContent = 'Symbol: ' + coin.symbol;
    coinRank.textContent = 'Rank: ' + coin.rank;
    coinPrice.textContent = 'Price: ' + coin.price_usd;
    coinChangePrice.textContent = 'Change in 24h: ' + coin.percent_change_24h;
    
    coinDiv.appendChild(coinName);
    coinDiv.appendChild(coinSymbol);
    coinDiv.appendChild(coinRank);
    coinDiv.appendChild(coinPrice);
    coinDiv.appendChild(coinChangePrice);

  coinsContainer.appendChild(coinDiv)
    
  });

}


  let allData;

fetch("https://api.coinmarketcap.com/v1/ticker/?limit=1650")
        .then(function(response) {
        return response.json();
      })

        .then(function(myJson) {

          allData = myJson
    
        cryptoUI(myJson)
        
        coins.push.apply(coins, myJson)

      

       // console.log(myJson)       
        
        

        });