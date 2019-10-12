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

const getGroupLead = () => {
  // get group lead
  const ul = document.getElementById("foo");
  const single = $(".members")
    .val()
    .split(",");
  const items = ul.getElementsByTagName("input");
  itemsLength = single.length;
  groupLen = $(".teamNUM").val();
  newLength = Math.ceil(itemsLength / groupLen);
  for (let i = 0; i < groupLen; ++i) {
    $("#teamM").append(
      `<li class="clear" id="head${i}"><b>${items[i].value}</b></li>`
    );
  }
};

const randomness = () => {
  let memberArr = $(".members")
    .val()
    .split(",");
  newArr = [];
  const length = memberArr.length;
  //array randomness
  for (let index = 0; index < length; index++) {
    let randNum = parseInt(Math.random() * length);
    while (newArr.includes(memberArr[randNum])) {
      randNum = parseInt(Math.random() * length);
    }
    newArr.push(memberArr[randNum]);
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

  randomness();

  // console.log(randNum);

  getGroupLead();

  counter = 0;
  let j = 0;
  for (j; j <= itemsLength; j++) {
    if (j == groupLen) {
      j = 0;
    }
    console.log(`head${j}`);

    $(`#head${j}`).append(`<li class="headItem">${newArr[counter]}</li>`);
    counter++;

    if (counter == itemsLength) {
      break;
    }
  }
$(".card").show()
  // let arr =["amani", "kanu", "adam", "joel", "peter", "alex"]
};
