const newArray = [];

function get(){
    // Fetch a new user multiple times and store them in an array.
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            newArray.push(data.results[0])
            console.log(newArray);
        })
        // Used this to stop the array from repeating itself on the page
        document.getElementById("contacts").innerHTML = " ";

        // Then list out all the user in your address book array by name and picture.
        newArray.map(person => {
            console.log(person);
            let createLi = document.createElement("li");
            let contactList = document.getElementById("contacts");
            let image = document.createElement("img");
            let button = document.createElement('button');
            button.addEventListener("click",(e) => {
                let textBox = document.createElement('p');
                let pText = document.createTextNode("Cell: " + person.cell + " " + "Age: " + person.dob.age);
                textBox.appendChild(pText);
                createLi.appendChild(textBox);
            })
            image.src = person.picture.thumbnail;
            createLi.appendChild(image);
            createLi.appendChild(document.createTextNode(person.name.first + " " + person.name.last));
            createLi.appendChild(button);
            let buttonText = document.createTextNode("More Info");
            button.appendChild(buttonText);
            contactList.append(createLi);
        })
}
get();

let multipleArray = [];

function allUsers() {
    fetch('https://randomuser.me/api/?results=15')
        .then (res => res.json())
        .then(data => {
            multipleArray.push(data.results)
            console.log(multipleArray);
        })
        // Used this to stop the array from repeating itself on the page
        document.getElementById("allContacts").innerHTML = " ";
        
        // Then list out all the user in your address book array by name and picture.
        multipleArray[0].map(person => {
            console.log(person);
            let createLi = document.createElement("li");
            let contactList = document.getElementById("allContacts");
            let image = document.createElement("img");
            let button = document.createElement('button');
            button.addEventListener("click",(e) => {
                let textBox = document.createElement('p');
                let pText = document.createTextNode("Cell: " + person.cell + " " + "Age: " + person.dob.age);
                textBox.appendChild(pText);
                createLi.appendChild(textBox);
            })
            image.src = person.picture.thumbnail;
            createLi.appendChild(image);
            createLi.appendChild(document.createTextNode(person.name.first + " " + person.name.last));
            createLi.appendChild(button);
            let buttonText = document.createTextNode("More Info");
            button.appendChild(buttonText);
            contactList.append(createLi);
        });
    multipleArray = [];
}

function delayFunction () {
setTimeout(function(){allUsers();}, 500);
}
delayFunction();

window.onload = function() {
    allUsers()
}