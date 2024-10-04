const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]
let table = document.createElement('table')
document.body.appendChild(table)
let tablethaed = document.createElement("thead")
table.appendChild(tablethaed)
let tablerow = document.createElement("tr")
tablethaed.appendChild(tablerow)
let th = document.createElement("th")
tablerow.appendChild(th)
th.innerHTML = "Sándor"
let tbody = document.createElement("tbody")
table.appendChild(tbody)
for (let person of array) {
    let tr = document.createElement("tr")
    tbody.appendChild(tr)
    const lastname = document.createElement("td")
    tr.appendChild(lastname)
    tablerow.appendChild(th)
    lastname.innerHTML = person.lastname
    const firstname = document.createElement("td")
    tr.appendChild(firstname)
    tablerow.appendChild(th)
    firstname.innerHTML = person.firstname1
    if (person.firstname2 != undefined){
        const firstname2 = document.createElement("td")
        tr.appendChild(firstname2)
        tablerow.appendChild(th)
        firstname2.innerHTML = person.firstname2
    }
    else{
        firstname.colSpan = 2
    }
    tr.addEventListener("click", function(e){
        console.log("click")
        const selected = tbody.querySelector(".selected")
        if (selected != undefined){
            selected.classList.remove("selected")
        }
        e.currentTarget.classList.add('selected')
    })
}