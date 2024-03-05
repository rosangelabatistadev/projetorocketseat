function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    // pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir a img
    if(html.classList.contains("light")) {
        //se tiver light , adicionar a img light
        img.setAttribute("src", "./assets/avatar-light.png") 
    } else {
        //se tiver sem light, manter a dark
        img.setAttribute("src", "./assets/avatar.png")
    }
}