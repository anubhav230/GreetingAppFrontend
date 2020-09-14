
// let list = [
//     {
//         message: "Hello",
//         name: "Anubhav Singh"

//     },
//     {
//         message: "Hello",
//         name: "Krishna"

//     },
//     {
//         message: "Hello",
//         name: "Krishna"

//     },
// ]

function showList() {
    location.reload();
}

let url = "http://localhost:3000"

function getAllMessages() {
    fetch(`${url}`)
        .then(data => { return data.json() })
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
        id.innerText = "ObjectId(" + list[i]._id + ")";
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


function add() {
    let firstName = document.getElementById('addFirstName').value;
    let lastName = document.getElementById('addLastName').value;
    console.log(firstName);
    console.log(lastName);

    addMessage(firstName, lastName);
}

function addMessage(firstname, lastname) {
    // await fetch(`${url}/${firstname}/${lastname}`,{
    //     method: 'POST'
    // });
    // let greeting = {
    //     firstname: firstname,
    //     lastname: lastname,
    // }

    fetch('http://localhost:3000/', {
        method: "POST",
        body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(data => { return data.json()})
        .then(res => {
            console.log(res);
        }).catch(err => { return err });
}


function deleteGrerting() {
    let id = document.getElementById('addId').value;
    deleteMessage(id);
}

function deleteMessage(id){
    console.log(id);
    fetch('http://localhost:3000/'+id,{
        headers:{
            "content-type":"application/json; charset=UTF-8"
        },
        method: "DELETE"
    })
    .then(data => {return data.json()})
    .then(res => {
        console.log(res);
    })
    .catch(err => console.log(err));
}





