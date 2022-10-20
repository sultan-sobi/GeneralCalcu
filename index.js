console.clear();
var resultText=$(".inputValue")
function getValue(x){
  var totalValue= resultText.val()
resultText.val(totalValue + x)

}

function calculate(){
   var result=eval(resultText.val());
   resultText.val(result);
}

function delet(){

  var currentV=resultText.val()
  if(currentV!=''){

    resultText.val(currentV.slice(0,-1));
  }

}

function reset(){
  resultText.val('')
  $(".dd").css({"backgroundColor":"black"})
}
function start(){
  $(".dd").css({
    "backgroundColor":"white"
    
  })
}
