let generate_btn = document.querySelector(".generate_btn");
generate_btn.addEventListener("click",fetchPics);

function fetchPics() {

    let cats = document.querySelector(".cats")
    cats.innerHTML = ''

    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then((data) => {
        let catsurl = data[0].url
        let catselem = document.createElement("img")
        catselem.setAttribute('src',`${catsurl}`)
        catselem.classList.add("showcase")
        
        let cats = document.querySelector(".cats")
        cats.appendChild(catselem)

    })
    
    .catch(err => console.log(err))

}