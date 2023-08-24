let text = document.getElementById("text");
let spinner = document.getElementById("spin-run");
let todisplay;

function button() {
  console.log("things are working ");
  let enter_text = document.getElementById("input-text").value;
  fetchdata(enter_text);
}

async function fetchdata(api_data) {
  let spinner = `  <div id="spin-run" class="spinner universal">
    <img src="./img/loading.gif" alt="">
</div>`;
text.innerHTML = spinner
try{
    const api = `https://api.dictionaryapi.dev/api/v2/entries/en/${api_data}`;
    let url = await fetch(api);
    let parseddata = await url.json();
    console.log(parseddata)
    displaydata(parseddata);
}
catch(error){
    console.log("there is a error")
    todisplay=`<h1> No definitions found! Check your word </h1>`
}
text.innerHTML = todisplay
}

function displaydata(data) {
        todisplay = ` <h1>${data[0].word}</h1>
          <div class="universal extra ">
              <h3>${data[0].meanings[0].partOfSpeech || " "}</h3>
              <h3>${data[0].phonetic || " "}</h3>
              <h3>${data[0].meanings[0].synonyms[0] || data[0].meanings[0].
                antonyms[0] || " " }</h3>
          </div>
          <p class="defination">${data[0].meanings[0].definitions[0].definition}</p>`;

  text.innerHTML = todisplay;
}
