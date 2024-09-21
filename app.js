function convertor(){
    let value =  parseFloat (document.getElementById("temperature").value)
    let from = document.getElementById("fromUnit").value
    let to= document.getElementById("toUnit").value
     let result


     if (from === "Cel" && to === "Fah"){
        result = (value * 9/5 + 32);

     } else if (from === "Fah" && to === "Cel"){
        result = (value - 32) * (5 / 9);
     }  else result = value;

    
    
     document.getElementById("convert").innerHTML = result.toFixed(2);
}