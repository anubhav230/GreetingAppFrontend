let list = [
    {        
        message:"Hello",
        name: "Anubhav Singh"
      
    },
    {
        message:"Hello",
        name: "Anubhav Singh"
    },    
    {
        message:"Hello",
        name: "Anubhav Singh"
    },
    {
        message:"Hello",
        name: "Anubhav Singh"
    },
    {
        message:"Hello",
        name: "Anubhav Singh"
    },
    {
        message:"Hello",
        name: "Anubhav Singh"
    }
]

let listOfContent = document.querySelector(".list-of-greeting");
// console.log(listOfContent);
let box = document.createElement("div");
for(let i = 0; i< list.length; i++){
    let messageContent = document.createElement("div");
    messageContent.className = "message-content-box";
    let name = document.createElement("div");
    name.className = "name-div";
    name.innerText = list[i].name;
    let message = document.createElement("div");
    message.className = "message-div";
    message.innerText = list[i].message;
    let time = document.createElement("div");
    time.className = "time-div";
    time.innerText = "15 min ago"
    messageContent.appendChild(message);
    messageContent.appendChild(name);
    listOfContent.appendChild(messageContent);
};
