let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};


let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};


let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

if (produtoA.internacional == true){
  let valordoimposto = produtoA.valor * 1.2

    console.log("o produto é internacional")
    console.log(valordoimposto)

} else {
  let valordoimposto = produtoB.valor * 1.2
    
    console.log("o produto é nacional")
    console.log(valordoimposto)
}

if (produtoB.internacional == true){
  let valordoimposto = produtoB.valor * 1.2
  
  console.log("o produto é internacional")
  console.log(valordoimposto)
} else {
    console.log("o produto é nacional")
    console.log(valordoimposto)
} 
if (produtoC.internacional == true){
  let valordoimposto = produtoC.valor * 1.2
    
    console.log("o produto é internacional")
    console.log(valordoimposto)
} else {
  let valordoimposto = produtoC.valor * 1.12
    
    console.log("o produto é nacional")
    console.log(valordoimposto)

}





