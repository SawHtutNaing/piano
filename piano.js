//memmory
var memory = [];
let displaycord = document.getElementById("cords");
let memoryList = document.getElementById("memoryList");
let edit = false;
let edit_id = "";

function run(sound) {
    let audio = new Audio(`audio/${sound}.mp3`)
    audio.play();
    if (displaycord.value.length == 0) {
        console.log("true")
        displaycord.value += sound;
    } else {
        displaycord.value += " , " + sound;

    }

}





// function to run playlist
function runPlayList(arr, delay = 1000) {
    console.log(arr)
    arr.split(",").map(el => {
        let trimel = el.trim()
        setTimeout(run, delay, trimel);
        delay += 1000;

    })
    console.log(arr)
};


//save Cord

function saveCord() {
    let input = displaycord.value;
    let arr = input.split(",");

    if (edit) {
        memory[edit_id] = arr;

    }
    else if (input.length == 0) {
        alert("please play the code first")
    }
    else {
        memory.push(arr);

    }
    memoryList.innerHTML = " ";
    memory.map((el, id) => {
        displayInList(el, id)
    });
    displaycord.value = "";

};

// function to display in div // not work with id well when edit so i stop using this

function displayInList(content, id) {
    // let li = document.createElement("li");
    // let text = document.createTextNode(content);
    // let btn = document.createElement("button");
    // // let idtext = document.createTextNode(id)
    // btn.append(idtext)
    // li.append(text);
    // memoryList.appendChild(li);
    console.log(content)
    memoryList.innerHTML += `<li class="mt-2"> ${content.join("-")}  <button class="btn btn-outline-primary" onclick="runPlayList('${content.map(el => el.trim())}')"}>Play it </button> <button class="btn btn-outline-primary" onclick="del(${id})">Delete</button> <button class="btn btn-outline-primary" onclick="Edit(${id})">Edit</button></li>`
    console.log(content)
};

// delete 
function del(id) {
    memory.splice(id, 1);
    memoryList.innerHTML = " ";
    memory.map((el, id) => {
        displayInList(el, id)
    });
}

// Edit
function Edit(id) {
    edit = true;
    edit_id = id;
    displaycord.value = memory[id];
}

