console.log("hello word");

const teamLead=(num)=>{
    teamNUM = $(".teamNUM")
    $("li").remove("")
    num = parseInt(teamNUM.val())
    let alph ="abcdefghijklmnopqrstuvwxyz".toUpperCase()
    console.log(num)
    for (let index = 0; index < num; index++) {
        $("ol").append(`<li><input type="text" class="teamLi${index}" id="groupList('Team:${alph[index]}" onblur="groupList('Team:${alph[index]}')" value="Team: ${alph[index%26]}"></li>`)
        console.log(alph[index])
    }
}
groupList=(listId)=>{
    console.log(listId)
    console.log($("#listId").val())
    // listId.val()=listId.val()
    // console.log(listId.val())
}


num = 4.5
teamLead(num)