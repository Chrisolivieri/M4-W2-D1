


// fetch("https://api.pexels.com/v1/search/?page=5&per_page=16&query=dog", {
//     method: "GET",
//     headers: {
//         "authorization": "QVKoZAeN3Ctag1Vi7ZVgnV5zkkCWAujAwPf5Lxn21rpbYqvi0QYKHVzq",
//         "content-type": "application/json"
//     }
// }).then((response) => {
//     response.json()
//         .then((cani) => {
//             console.log(cani)

//             let card = ""
            
//             cani.photos.map((item, i) => {
//                 card += ` <div class="card" style="width: 18rem;">
//                 <img src= ${item.src.medium} class="card-img-top" alt="...">
//                 <div class="card-body">
//                   <h5 class="card-title"><b>Descrizione</b></h5>
//                   <p class="card-text">${item.alt}</p>
//                 </div>
//                 <ul class="list-group list-group-flush">
//                   <li class="list-group-item"><b>Fotografo</b>: ${item.photographer}</li>
//                   <li class="list-group-item"><b>URL fotografo</b>: ${item.photographer_url}</li>
//                   <li class="list-group-item"><b>ID foto</b>: ${item.id}</li>
//                 </ul>
                
//               </div> `


//             })
//             document.getElementById("card").innerHTML = card
//         })
// })

function search(){

  let img = document.getElementById("searchImg").value

  fetch("https://api.pexels.com/v1/search/?page=1&locale=it-IT&per_page=16&query=" + img, {
    method: "GET",
    headers: {
        "authorization": "QVKoZAeN3Ctag1Vi7ZVgnV5zkkCWAujAwPf5Lxn21rpbYqvi0QYKHVzq",
        "content-type": "application/json"
    }
}).then((response) => {
    response.json()
        .then((data) => {
            console.log(data)
            
            let card = ""
            
            data.photos.map((item, i) => {
                card += ` <div class="card" style="width: 18rem;">
                <img src= ${item.src.medium} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title"><b>Descrizione</b></h5>
                  <p class="card-text">${item.alt}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><b>Fotografo</b>: ${item.photographer}</li>
                  <li class="list-group-item"><b>URL fotografo</b>: ${item.photographer_url}</li>
                  <li class="list-group-item"><b>ID foto</b>: ${item.id}</li>
                </ul>
                
              </div> `


            })
            document.getElementById("searchTitle").innerHTML = `<h2>Risultati ricerca per: ${img}</h2>`
            document.getElementById("card").innerHTML = card

            
            
        })
})

}

document.getElementById('searchImg').addEventListener('keypress', function(event) {
  if (event.keyCode === 13) { 
    search();
  }
})