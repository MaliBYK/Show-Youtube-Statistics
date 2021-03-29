const apiKey = "AIzaSyAoig1xivyTjsgD5lfNYt3ppQ_AKgdIZVQ";
const input = document.querySelector(".link-input");
const searchBtn = document.querySelector(".search");
const channelKey;

searchBtn.addEventListener("click",function(){
  if (input.value.split("/channel/").length > 1){
    channelKey = input.value.split("/channel/").split[1];
  }
  else console.log("Hata");
})