let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
]
createHtmlElement('table','persontable',document.body)
createHtmlElement('thead','personthead',persontable)
createHtmlElement('tbody','persontody',personthead)
createHtmlElement('tr','persontr',persontody)

document.body.appendChild(table);
table.appendChild(tablehead);
table.appendChild(tablebody);
tablehead.appendChild(tableheadrow);
for (let i =0; i<valami.length;i++){
    const th = createtablecell('th',valami[i].th,tableheadrow)
    th.innerHTML=valami[i].th
    
    if (valami[i]===2){
        th.colspan =valami[i].colspan
    }
    tableheadrow.appendChild(th)
}

function make_table(given_array){
for (let person of given_array) {
    let tr = document.createElement("tr")
    tbody.appendChild(tr)
    const lastname = document.createElement("td")
    tr.appendChild(lastname)
    lastname.innerHTML = person.lastname
    const firstname = document.createElement("td")
    tr.appendChild(firstname)
    firstname.innerHTML = person.firstname1
    if (person.firstname2 != undefined){
        const firstname2 = document.createElement("td")
        tr.appendChild(firstname2)
        firstname2.innerHTML = person.firstname2
    }
    else{
        firstname.colSpan = 2
    }
    //hazas start//
    const hazas = document.createElement("td")
    tr.appendChild(hazas)
    if (person.married){ hazas.innerHTML = "✅"} else {hazas.innerHTML = "❌"}
    //hazas end//
    //allat start//
    const allat = document.createElement("td")
    tr.appendChild(allat)
    allat.innerHTML = person.pet
    //allat end//
    tr.addEventListener("click", function(e){
        console.log("click")
        const selected = tbody.querySelector(".selected")
        if (selected != undefined){
            selected.classList.remove("selected")
        }
        e.currentTarget.classList.add('selected')
    })
}}
make_table(array)
const form = document.getElementById('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const lastname = document.getElementById("lastname")
    const firstname = document.getElementById("firstname1")
    const firstname2 = document.getElementById("firstname2")
    const married = document.getElementById("married")
    const pet = document.getElementById("pet")
    const lastnamevalue = lastname.value
    const firstnamevalue = firstname.value
    const firstname2value = firstname2.value
    const marriedvalue = married.checked
    const petvalue = pet.value
    if (validate_fields(firstname,lastname,pet)){
        const new_person = {
            firstname1: firstnamevalue,
            firstname2: firstname2value === '' ? undefined : firstname2value,
            lastname: lastnamevalue,
            married: marriedvalue,
            pet: petvalue
        }
        let given_person = [new_person]
        make_table(given_person)
        form.reset()
    }
})
function validate_fields(first,last,pet)
{
    const querySelectorError = form.querySelectorAll(".error");
    for (const error of querySelectorError){
        error.innerHTML = ''
    }
    let result = true
    if (first.value === ''){
        const par = first.parentElement
        const error = par.querySelector(".error")
        error.innerHTML = 'Kötelező vezetéknév'
        result = false
    }
    if (last.value === ''){
        const par = last.parentElement
        const error = par.querySelector(".error")
        error.innerHTML = 'Kötelező Keresztnév'
        result = false
    }
    if (pet.value === ''){
        const par = pet.parentElement
        const error = par.querySelector(".error")
        error.innerHTML = 'Kötelező állat név'
        result = false
    }
    return result
}
