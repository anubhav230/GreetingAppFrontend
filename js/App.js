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
        .catch(err => console.log(err)

        );
}
getAllMessages();

function displayData(list) {
    console.log(list)
    let listOfContent = document.querySelector(".list-of-greeting");
    // let box = document.createElement("div");
    for (let i = 0; i < list.length; i++) {
        let messageContent = document.createElement("div");
        messageContent.className = "message-content-box";
        let id = document.createElement("div");
        id.className = "id-div";
        id.innerText = "ObjectId(" + list[i]._id + ")";
        let name = document.createElement("div")
        name.className = "name-div"
        name.innerText = list[i].firstName + " " + list[i].lastName;
        let message = document.createElement("div");
        message.className = "message-div";
        message.innerText = "Hello";
        let time = document.createElement("div");
        time.className = "time-div";
        time.innerText = "15 min ago"
        messageContent.appendChild(id);
        if (list[i].firstName == undefined && list[i].lastName == undefined) {
            message.innerText = "Hello World"
            messageContent.appendChild(message);
        } else {
            messageContent.appendChild(message);
            messageContent.appendChild(name); 
        }
        messageContent.appendChild(time);
        listOfContent.appendChild(messageContent);
    };
}


function add() {
    let firstName = document.getElementById('addFirstName').value;
    let lastName = document.getElementById('addLastName').value;

    addMessage(firstName, lastName);
}

function addMessage(firstname, lastname) {
    fetch('http://localhost:3000/', {

        headers: {
            'Accept': 'application/json',
            "Content-type": "application/json; charset=UTF-8"
        },
        method: "POST",
        body: JSON.stringify({
            firstName: firstname,
            lastName: lastname,
        })

    })
        .then(data => { return data.json() })
        .then(res => {
            console.log(res);
            alert("Success");
            location.reload();
        }).catch(err => { return err });
}


function deleteGrerting() {
    let id = document.getElementById('addId').value;
    deleteMessage(id);
}

function deleteMessage(id) {
    console.log(id);
    fetch('http://localhost:3000/' + id, {
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        method: "DELETE"
    })
        .then(data => { return data.json() })
        .then(res => {
            console.log(res);
            alert("Success");
            location.reload();
        })
        .catch(err => console.log(err));
}