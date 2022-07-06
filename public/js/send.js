/**
 * Method to upload the form information to DB 
 */
function upload() {

  let id = document.getElementsByTagName("input")[0].value;
  let type = document.getElementsByTagName("input")[1].value;
  let gamer1 = document.getElementsByTagName("input")[2].value;
  let gamer2 = document.getElementsByTagName("input")[3].value;
  let gamer3 = document.getElementsByTagName("input")[4].value;
  
  const data = {
    id: `${id}`,
    type: `${type}`,
    gamers: [gamer1,gamer2,gamer3],
    gamerBet:['0','0','0']

  }

  console.log('upload is OK');

  let post = JSON.stringify(data)

  const url = "http://localhost:8080/createGame"
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
