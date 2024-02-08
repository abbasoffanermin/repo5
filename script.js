
//Task1
//Part1
const stocks = [
  { symbol: 'Stock1', price: 10, sector: 'stock_sector1' },
  { symbol: 'Stock2', price: 20, sector: 'stock_sector2' },
  { symbol: 'Stock3', price: 30, sector: 'stock_sector3' }
]



//Part2
let prices=stocks[0].price
const update_price=setInterval(() => {
  prices+=Math.random()*10
  console.log('new price->',prices);
}, 1000);
//ve ya

const update_prices=setInterval(() => {
  for (let index = 0; index < stocks.length; index++) {
    stocks[index].price+=prices+=Math.random()*10   
  }
}, 1000);


//Part3
let ar = stocks.filter((item) => {
  return item
})
console.log(ar);

//Part4
setTimeout(() => {
  for (let index = 0; index < stocks.length; index++) {
    if (stocks[index].price >= 30) {
      console.log(`xeberdarliq: ${stocks[index].symbol} 30dan boyukdur.Price:${stocks[index].price}`);
    }
  }
}, 2000);

//Task2
//1.
let arr1 = stocks.filter((item) => {
  return item
})
console.log(arr1);

let arr2 = stocks.map((item) => {
  return item
})
console.log(arr2);

let arr3 = stocks.forEach((item) => {
  return item
})
console.log(arr3);

//2.

let data=stocks[0].price
const update_data=setInterval(() => {
  data+=Math.random()*10
  console.log('data->',data);
}, 1000);

setTimeout(() => {
  clearInterval(update_data)
}, 5000);


//3.

let data_1=stocks[1].price
const data_update= setInterval(() => {
  data_1+=5
if(data_1>5 && data_1<10){
  console.log('Data 5 ile 10 arasindadir',data_1);
}
if(data_1>10 && data_1<20){
  console.log('Data 10 ile 20 arasindadir',data_1);
}
if(data_1>20 && data_1<30){
  console.log('Data 20 ile 30 arasindadir',data_1);
}
if(data_1>30 && data_1<40){
  console.log('Data 5 ile 10 arasindadir',data_1);
}
}, 1000);

setTimeout(() => {
  clearInterval(data_update)
}, 10000);
