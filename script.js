let btncolor = document.querySelector('#btntextcolor')

let p1 = document.querySelector('#p1')
let p2 = document.querySelector('#p2')
let p3 = document.querySelector('#p3')
let p4 = document.querySelector('#p4')
let p5 = document.querySelector('#p5')
let stardata = document.querySelector('#stardata')

//fetch json, generate 5 random numbers,
//use random numbers to index the array in the json
btncolor.onclick = function() {
    let randcolor1 = Math.floor(Math.random() * 90)
    let randcolor2 = Math.floor(Math.random() * 90)
    let randcolor3 = Math.floor(Math.random() * 90)
    let randcolor4 = Math.floor(Math.random() * 90)
    let randcolor5 = Math.floor(Math.random() * 90)
    //fetch('./hslcolors.json')
    fetch('https://api.jsonbin.io/v3/b/68b9b2c4d0ea881f4071a00a', {
        headers: {
            'X-Access-Key' : '$2a$10$n.AAe2Qmq7Yl6Z1BES.nu.sHmnTm4RMMix0P2wnwHDel//REP0XFC'
        }
    })
    .then(function(response) {
        //console.log(response)
        response.json().then(function(data) {
            console.log(data)
            p1.style.color = data.record.hslColors[randcolor1]
            p2.style.color = data.record.hslColors[randcolor2]
            p3.style.color = data.record.hslColors[randcolor3]
            p4.style.color = data.record.hslColors[randcolor4]
            p5.style.color = data.record.hslColors[randcolor5]
        })
    })

    fetch('./stars.json')
    .then(function(response) {
        //console.log(response)
        response.json().then(function(data) {
            //console.log(data)
            randomstar = data[Math.floor(Math.random() * data.length)]
            stardata.innerHTML = 'Name: ' + randomstar.source_id + '<br>Right ascension: ' + randomstar.ra + ' <br>Declination: ' + randomstar.dec + ' <br>Magnitude: ' + randomstar.phot_g_mean_mag + ' <br>Color: ' + randomstar.bp_rp
        })
    })
}