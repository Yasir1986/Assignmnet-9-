//all data JSON//

let  allData;

fetch("https://api.coinmarketcap.com/v1/ticker/?limit=50")
        .then(function(response) {
        return response.json();
      })
        .then(function(myJson) {
       // console.log(myJson);
        allData = myJson;
      });       
+
     setTimeout(function(){
      // console.log(allData);
     

    //Name of coin

      let  name1 = document.querySelector("#coinName");
      name1.textContent = 'Name: ' + allData[1].name;
      console.log(allData[1].name);

    //Rank of coin
    allData.forEach(element => {
      
    });
       
       let rank1 = document.querySelector("#coinRank");
       rank1.textContent = 'Rank: ' + allData[1].rank;
       console.log(allData[1].rank);

      //Symbol of coin

      let  symbol1 = document.querySelector("#coinSymbol");
      symbol1.textContent = 'Symbol :' + allData[1].symbol;
      console.log(allData[1].symbol);

      //Price of coin

      let  price1 = document.querySelector("#coinPrice");
      price1.textContent= 'Pirce: ' + allData[1].price_usd;
      console.log(allData[1].price_usd);


      //change of Price of coin
       
        let price2 = document.querySelector("#coinPriceChange");
        price2.textContent = 'Change in 24h: ' + allData[1].percent_change_24h + '%';
        console.log(allData[1].percent_change_24h);

    },250);







      
      
   

    //    const Price = document.querySelector("coinPrice");


      // const details = document.createElement("div");
        
      //let coinsec= document.createElement("div"),


      // coinsec.appendChild(coindiv);

