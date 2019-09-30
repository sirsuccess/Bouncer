// console.log("hello word");

const teamLead = num => {
  teamNUM = $(".teamNUM");
  if (!(parseInt(teamNUM.val()) > 0) && teamNUM.val().trim().length > 0) {
    return alert("invalid team number ");
  }

  $("li").remove("");
  num = parseInt(teamNUM.val());
  let alph = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
//   console.log(num);
  for (let index = 0; index < num; index++) {
    $("ol").append(`<li><input type="text" class="teamLi${index}" 
        id="groupList('Team:${alph[index]}')" 
        value="Team: ${alph[index % 26]}"></li>`);
  }

};

groupList = () => {
    //check for invalid input
    $(".clear").remove("");
    $(".headItem").remove("");
    teamNUM = $(".teamNUM");
  if (!(parseInt(teamNUM.val()) > 0)) {
    return alert("invalid team number");
  }

  let memberArr = $(".members").val().split(",");
  newArr = [];
  var length = memberArr.length;
  //array randomness
  for (let index = 0; index < length; index++) {
    let randNum = parseInt(Math.random() * length);
    while (newArr.includes(memberArr[randNum])) {
      randNum = parseInt(Math.random() * length);
    }
    newArr.push(memberArr[randNum]);

    // console.log(randNum);
  }

// get group lead
  var ul = document.getElementById("foo");
  var single = $(".members").val().split(",");
    var items = ul.getElementsByTagName("input");
    itemsLength = single.length
    groupLen = $(".teamNUM").val()
  newLength = Math.ceil(itemsLength/groupLen)
  console.log("new length"+newLength)
  console.log("group"+groupLen)
  console.log("item"+itemsLength)
  console.log("item single"+ items.length)
  // var j = 0;
  counter = 0

  for (let i = 0; i <groupLen; ++i) {

      console.log(items[i].value)
    //   console.log("this is j before"+j)
    $("#teamM").append(`<li class="clear" id="head${i}"><b>${items[i].value}</b></li>`)
    
    // console.log(`head${i}`)
    for (let j=0; j <newLength ; j++) {
        $(`#head${i}`).append(`<li class="headItem">${newArr[counter]}</li>`)
        counter++
      }

}

  console.log(newArr);
};

// let arr =["amani", "kanu", "adam", "joel", "peter", "alex"]
// let counter = 0;
// // num = 4.5
// // teamLead(num)
// // console.log("am here")
// for(let x=0; x<(arr.length/2); x++){
//   console.log("am here")
//   for(let y=0; y<=1; y++){
//     console.log(arr[counter]);
//     counter += 1;
//   }
//   console.log("\n")
// }

