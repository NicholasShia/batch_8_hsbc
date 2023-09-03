// function satu() {
//     console.log('satu')
// }

// function dua() {
//     console.log('ambil data dua')
//     setTimeout(() => {
//         console.log('dua')
//     }, 2000)
// }

// function tiga() {
//     console.log('tiga')
// }

// satu()
// dua()
// tiga()

function login(username) {
    return new Promise((success, failed) => {
        setTimeout(() => {
            if (username) {
                const token = Math.random() * 12345678
                success({ token: token, username: username })
            } else {
                failed('Username Tidak temukan')
            }
        }, 0)
    })

}
function getUser(token, callback) {
    return new Promise((success, failed) => {
        setTimeout(() => {
            if (token) {
                const apiKey = "xy9090"
                success(apiKey)
            }
        }, 0)
    })
}

function getPicture(apiKey, callback) {
    return new Promise((success, failed) => {
        setTimeout(() => {
            if (apiKey) {
                const picture = ["1.jpg", "2.jpg", "3.jpg"]

                success(picture)
            }
        }, 0)
    })
}


// const apiKey = getUser(token)
// const picture = getPicture(apiKey)
// console.log(picture, 'pic')

//Promise
// login("rizal").then((res) => {
//     const { token } = res
//     getUser(token).then((apiKey) => {
//         getPicture(apiKey).then((pic) => {
//             console.log(pic)

//         })

//     })

// }).catch((res) => {
//     console.log(res)
// })
//Callback
// login("rizal", function (res) {
//     const { token } = res
//     getUser(token, function (apiKey) {
//         getPicture(apiKey, function (pic) {
//             console.log(pic, 'res')
//         })
//     })
// })


//Async
async function displayUser() {
    const { token } = await login("rizal")
    const apikey = await getUser(token)
    const pic = await getPicture(apikey)
    console.log(pic)
}

displayUser()
