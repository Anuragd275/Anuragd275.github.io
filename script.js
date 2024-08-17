// function toggleTheme() {
//     // Check if body has class "dark"

//     let bodyClass = document.body.className;
    
//     // Gather elements to be changed
//     let h1Elements = document.querySelectorAll("h1")
//     let pElements = document.querySelectorAll("p")
//     let iconElements = document.querySelectorAll("i")

//     console.log(h1Elements)

//     if (bodyClass == "light") {
//         console.log("Curently in Light Mode")
//         bodyClass.classList.remove("light");
//         bodyClass.classList.add("dark");
//     } else {
//         h1Elements.style.color = "black"
//     }
    
//     console.log(bodyClass);
// }

function toggleTheme() {
    // Check if body has class "dark"
    let bodyClass = document.body.classList;
    
    // Gather elements to be changed
    let h1Elements = document.querySelectorAll("h1");
    let pElements = document.querySelectorAll("p");
    let iconElements = document.querySelectorAll("i");
    let docbody = document.body;
    let themeToggler = document.getElementById("themeToggler");
    let anchorElements = document.querySelectorAll("a");
    if (bodyClass.contains("light")) {
        console.log("Currently in Light Mode");
        // Switch to dark mode
        bodyClass.remove("light");
        bodyClass.add("dark");

        // Update styles for dark mode
        docbody.style.backgroundColor = "black"
        themeToggler.innerHTML = "Light Theme"
        h1Elements.forEach(h1 => h1.style.color = "white");
        pElements.forEach(p => p.style.color = "lightgray");
        iconElements.forEach(icon => icon.style.color = "white");
        anchorElements.forEach(a => a.style.color = "white")

    } else {
        console.log("Currently in Dark Mode");
        // Switch to light mode
        bodyClass.remove("dark");
        bodyClass.add("light");

        // Update styles for light mode
        docbody.style.backgroundColor = "#F0F8FF"
        themeToggler.innerHTML = "Dark Theme"
        h1Elements.forEach(h1 => h1.style.color = "black");
        pElements.forEach(p => p.style.color = "black");
        iconElements.forEach(icon => icon.style.color = "black");
        anchorElements.forEach(a => a.style.color = "black")

    }
}
