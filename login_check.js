let name = prompt("What is your name?", "")

if (name === "Admin") {

    let password = prompt("Enter password: ")

    if (password === "" || password === null) {
        alert("Cancelled")
    } else if (password === "I am the main") {
        alert("Hello!")
    } else {
        alert("Wrong password")
    }
    
} else if (name === "" || name === null) {
    alert("Cancelled")
} else {
    alert("I don't know you")
}