//'use strict';

const key = 'abc123';

const assert = require('assert');

// const newArray = [];

// function get(){
//     // Fetch a new user multiple times and store them in an array.
//     fetch('https://randomuser.me/api/')
//         .then(res => res.json())
//         .then(data => {
//             newArray.push(data.results[0])
//             console.log(newArray);
//         })
//         // Used this to stop the array from repeating itself on the page
//         document.getElementById("contacts").innerHTML = " ";

//         // Then list out all the user in your address book array by name and picture.
//         newArray.map(person => {
//             console.log(person);
//             let createLi = document.createElement("li");
//             let contactList = document.getElementById("contacts");
//             let image = document.createElement("img");
//             let button = document.createElement('button');
//             button.addEventListener("click",(e) => {
//                 let textBox = document.createElement('p');
//                 let pText = document.createTextNode("Cell: " + person.cell + " " + "Age: " + person.dob.age);
//                 textBox.appendChild(pText);
//                 createLi.appendChild(textBox);
//             })
//             image.src = person.picture.thumbnail;
//             createLi.appendChild(image);
//             createLi.appendChild(document.createTextNode(person.name.first + " " + person.name.last));
//             createLi.appendChild(button);
//             let buttonText = document.createTextNode("More Info");
//             button.appendChild(buttonText);
//             contactList.append(createLi);
//         })
// }
// get();

let multipleArray = [];

function allUsers(fetch, number) {
    fetch('https://randomuser.me/api/?results=' + number)
        .then (res => res.json())
        .then(data => {
            multipleArray.push(data.results)
            console.log(multipleArray);
        })
        // Used this to stop the array from repeating itself on the page
        //document.getElementById("allContacts").innerHTML = " ";
        
        // Then list out all the user in your address book array by name and picture.
        // multipleArray[0].map(person => {
        //     console.log(person);
        //     let createLi = document.createElement("li");
        //     let contactList = document.getElementById("allContacts");
        //     let image = document.createElement("img");
        //     let button = document.createElement('button');
        //     button.addEventListener("click",(e) => {
        //         let textBox = document.createElement('p');
        //         let pText = document.createTextNode("Cell: " + person.cell + " " + "Age: " + person.dob.age);
        //         textBox.appendChild(pText);
        //         createLi.appendChild(textBox);
        //     })
        //     image.src = person.picture.thumbnail;
        //     createLi.appendChild(image);
        //     createLi.appendChild(document.createTextNode(person.name.first + " " + person.name.last));
        //     createLi.appendChild(button);
        //     let buttonText = document.createTextNode("More Info");
        //     button.appendChild(buttonText);
        //     contactList.append(createLi);
        // });
    multipleArray = [];
}

function delayFunction () {
setTimeout(function(){allUsers();}, 500);
}
delayFunction();

// window.onload = function() {
//     allUsers()
// }

describe('allUsers', () => {
    it ('tests fetch and numbers', () => {
        const testFetch = url => {
            assert (
                url === 'https://randomuser.me/api/?results=15'
            )
            return new Promise(function(){})
        }
        allUsers(testFetch, 15)
    })
    it ('tests fetch and numbers', () => {
        const testFetch = url => {
            assert (
                url === 'https://randomuser.me/api/?results=5001'
            )
            return new Promise(function(){})
        }
        allUsers(testFetch, 5001)
    })
})
