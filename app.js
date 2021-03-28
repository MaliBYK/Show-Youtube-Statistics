const apiKey = "AIzaSyAoig1xivyTjsgD5lfNYt3ppQ_AKgdIZVQ";
const input = document.querySelector(".link-input");
const searchBtn = document.querySelector(".search");

let channelKey;
const youtube = new Youtube();

searchBtn.addEventListener("click", search);

function search(e) {
  value = input.value;
  channelKey = value.split("/channel/");
  console.log(channelKey);
  if (channelKey.length > 1) {
    channelKey = channelKey[1];
    youtube.getSubscribers(channelKey, apiKey).then(data => console.log(data));
  } else {
    console.log("HATA");
  }
}
