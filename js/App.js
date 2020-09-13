

let list = [
    {
        message: "Hello",
        name: "Anubhav Singh"

    },
    {
        message: "Hello",
        name: "Krishna"

    },
    {
        message: "Hello",
        name: "Krishna"

    },
]

let url = "http://localhost:3000"

function getAllMessages() {
    fetch(`${url}`)
    .then(data => {return data.json()})
        .then(res => {
            console.log(res.message);
            displayData(res.message)
        })
        .catch(err => console.log(err));
}
getAllMessages();



function displayData(list) {
    let listOfContent = document.querySelector(".list-of-greeting");
    // console.log(listOfContent);
    let box = document.createElement("div");
    for (let i = 0; i < list.length; i++) {
        let messageContent = document.createElement("div");
        messageContent.className = "message-content-box";
        let id = document.createElement("div");
        id.className = "id-div";
        id.innerText = list[i]._id
        id.innerText = "ObjectId("+list[i]._id+")";
        // let name = document.createElement("div");
        // name.className = "name-div";
        // name.innerText = list[i].name;
        let message = document.createElement("div");
        message.className = "message-div";
        message.innerText = list[i].message;
        let time = document.createElement("div");
        time.className = "time-div";
        time.innerText = "15 min ago"
        messageContent.appendChild(id);
        messageContent.appendChild(message);
        messageContent.appendChild(time);
        listOfContent.appendChild(messageContent);
    };
}



