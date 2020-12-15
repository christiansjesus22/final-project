//funcion subir imagen //

window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.querySelector('#myImage'); 
          img.src = URL.createObjectURL(this.files[0]); 
      }
  });
});

//funcion boton inputs a el js con queryselector//

function selectproduct() {
  let form= document.querySelector('form')
  
  let nameSelect= document.querySelector('input[name="product_name"]')
  let priceSelect= document.querySelector('input[name="product_price"]')
  let descriptionSelect= document.querySelector('#msg') 
  let imageselect = document.querySelector('#myImage')
  let nameError = document.querySelector("#nameError")
  let priceError = document.querySelector("#priceError")
  let descriptionError = document.querySelector("#descriptionError")

if (!nameSelect.value) {
  nameSelect.classList.add("error")
  nameError.classList.remove("wthioutError")
  nameError.classList.add("withError")
  return
}
else if (nameSelect.value && !priceSelect.value){
   priceSelect.classList.add("error");
   priceError.classList.remove("wthioutError");
   priceError.classList.add("withError");
   return
}
else if (!descriptionSelect.value){
  descriptionSelect.classList.add("error");
  descriptionError.classList.remove("wthioutError");
  descriptionError.classList.add("withError");
  return
}

  var nameProduct = nameSelect.value;
  var priceProduct = priceSelect.value;
  var descriptionProduct = descriptionSelect.value;
  var imageProduct = imageselect.src;

  objproduct(nameProduct,priceProduct,descriptionProduct,imageProduct); 

form.reset()
}

//creando objeto de producto y conviriendo en un string//

const listProducObjt = localStorage.getItem("productStorage") ? JSON.parse(localStorage.getItem("productStorage")) : [];
var productObj ={};

function objproduct(nameProduct,priceProduct,descriptionProduct,imageProduct) {
  
    productObj = {
    name: nameProduct,
    price: priceProduct,
    description: descriptionProduct,
    image: imageProduct
  };

  listProducObjt.push(productObj)
  
  let productObjeto = JSON.stringify(listProducObjt);
  
  localStorage.setItem('productStorage',productObjeto);
  
  console.log("working")
  alert() 
}

function alert() {
  if(confirm("já adicionó um produto, quer adicionar mais um?") === true)
  { return}
  else{
    window.location.replace('http://127.0.0.1:5501/listProduct.html')}
  }
