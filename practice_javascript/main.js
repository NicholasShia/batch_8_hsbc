

// fetch('data.json').then(result => result.json()).then(data => {
//     displayData(data)
// })




fetch('data.json').then(result => {
    const data = result
    console.log(data)
})



function displayData(data) {
    //ambil elemen container
    const container = document.getElementById('container')

    data.forEach(item => {
        const listElm = document.createElement('div')
        if (item.age == 16) {
            listElm.innerHTML = `<div style="color:blue"> hallo world : ${item.name}<div>`
        } else {
            listElm.innerHTML = `<div style="color:red"> hallo world : ${item.name}<div>`
        }

        container.appendChild(listElm)
    })


}

// displayData(data)