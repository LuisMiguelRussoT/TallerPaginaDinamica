/**
 * Method to set up bet of each player on the game 
 */

function bet() {
  let id = document.getElementsByTagName("input")[0].value;

  let id1 = document.getElementsByTagName("input")[0].value;
  let bet1 = document.getElementsByTagName("input")[1].value;
  let id2 = document.getElementsByTagName("input")[2].value;
  let bet2 = document.getElementsByTagName("input")[3].value;
  let id3 = document.getElementsByTagName("input")[4].value;
  let bet3 = document.getElementsByTagName("input")[5].value;
  
  const data = {
    id: `${id}`,
    type: ``,
    gamerBet:`{
      ${id1} : ${bet1},
      ${id2} : ${bet2},
      ${id3} : ${bet3}
    }`
  }

  console.log('upload is OK');

  let post = JSON.stringify(data)

  const url = "http://localhost:8080/startGame"
  let xhr = new XMLHttpRequest()

  xhr.open('POST', url, true)
  xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
  
  xhr.send(post);
  xhr.onerror = function(error){
    console.log(error);
  }

  xhr.onload = function () {
    if (xhr.status === 201) {
      console.log("Post successfully created!")
    
    }
  }
}
