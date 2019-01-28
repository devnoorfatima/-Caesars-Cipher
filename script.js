function rot13(str) {
    return str.split('')
      .map.call(str, function(char) {
        x = char.charCodeAt(0);
        if (x < 65 || x > 90) {
          return String.fromCharCode(x); 
        }
        else if (x < 78) {
          return String.fromCharCode(x + 13);
        }
        return String.fromCharCode(x - 13);
      }).join('');  
  }
 const input =document.getElementById("input");
  function check(){
    let value = input.value;
    document.getElementById("p").innerHTML= rot13(value);
}
input.addEventListener("keypress", function(x){
  if (x.keyCode === 13){
      check();
  }
  });