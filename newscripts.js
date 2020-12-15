var name = "";
var price = "";
var description = "";
var image = "";
const arrayTotal =[]  


function stringProduct() {
  let test = localStorage.getItem("productStorage");
  test = JSON.parse(test);

  for (let i = 0; i < test.length; i++) {
    name = test[i].name;
    price = Number(test[i].price);
    description = test[i].description;
    image = test[i].image;

    let ul = document.querySelector("#listItem");
    let li = document.createElement("li");
    let item = document.createElement("div");
    let aboutItem = document.createElement("div");
    let img = document.createElement("img");
    let h4 = document.createElement("h4");
    let p = document.createElement("p");
    let span = document.createElement("span");
    let itemQuantity = document.createElement("input");

    itemQuantity.type = "number";
    itemQuantity.value = "1";      
    itemQuantity.min = "1";
    itemQuantity.classList.add("main")

    item.classList.add("item");
    aboutItem.classList.add("aboutItem");

    img.src = image;
    h4.textContent = name;
    p.textContent = description;
    span.textContent = price;

    li.appendChild(item);

    item.appendChild(img);
    item.appendChild(aboutItem);

    aboutItem.appendChild(h4);
    aboutItem.appendChild(p);
    aboutItem.appendChild(span);

    li.appendChild(itemQuantity);

    ul.appendChild(li);

   let push= itemQuantity.value * Number(test[i].price) 
   arrayTotal.push(push) ;

    calculateSubTotal()
  }
}

//funcion para calcular largura cantidad de items//

function calculateSubTotal() {
  let subtotal = document.querySelector("#subtotal")
  let taxes = document.querySelector("#taxes")
  let total = document.querySelector('#total')

  let pricesubTotal =0;
  let taxesTotal =0;
  let priceTotal =0;
   arrayTotal.forEach (function(item){
  priceTotal += item;
  taxesTotal = priceTotal % 5;
  pricesubTotal = priceTotal - taxesTotal ;
  });  
  subtotal.textContent ="$"+ pricesubTotal;
  taxes.textContent ="$"+ taxesTotal.toFixed(2) ;
  total.textContent ="$"+ priceTotal;
} 