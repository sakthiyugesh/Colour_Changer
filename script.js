var colors = ["Orangered","Blue","Yellow","Green"];
var index = 0;

document.querySelector("#submit").addEventListener("click", () => {
  if(index > colors.length - 1)
    index = 0;
  document.body.style.backgroundColor = colors[index++];  
});
