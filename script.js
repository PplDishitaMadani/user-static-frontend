retrievedData = [];
userData = [
  { "id": "6203f8137f95b7ba4938e82b", "userName": "XYZ" },
  { "id": "6204a42a85015ec6372f981b", "userName": "aaaaa" },
  { "id": "6204a43885015ec6372f981c", "userName": "abcd" },
];

const userDetails = document.querySelector(".userList");
const userNameId = document.querySelector(".userListId");
const getUserBtn = document.getElementById("get-users");

const url = "userDetails.json";

var userListById = [];
var userList = [];

function getUsers() {
  var obj = JSON.parse(JSON.stringify(userData));
  for(var i = 0; i< obj.length; i++){
    userList += `<div class="users">Name: ${obj[i].userName} (ID: ${obj[i].id})</div>`;
  }
  userDetails.innerHTML = userList;
}

function getUserById(){

  var id = document.getElementById("id").value;
  console.log(id);
  
  var obj = JSON.parse(JSON.stringify(userData));
  for(var i = 0; i< obj.length; i++){
    if(obj[i].id === id){
      userListById = `<div class="user-by-id">Name: ${obj[i].userName}</div>`;
    }
  }
  userNameId.innerHTML = userListById;
}

getUserBtn.addEventListener("click", getUsers);
