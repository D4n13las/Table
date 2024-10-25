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
/**
 * 
 * @param {*} htmlElement 
 * @param {string} inerHTML
 * @param {HTMLTableRowElement} parentElement
 * @returns {Html_tag}
 */
function createTableCell(htmlElement, inerHTML,parentElement){
    const tag = document.createElement(htmlElement)
    tag.innerHTML = inerHTML
    parentElement.appendChild(tag)
    return tag
}
function createHtmlElement(tag,id,parentElement){
    const a = document.createElement(tag)
    a.id = id
    parentElement.appendChild(a)
}
function createHtmlElementWParentId(tag,id,parentId){
    const parent = document.getElementById(parentId)
    if (parent != undefined){
        createHtmlElement(tag,id,parent)
    }
}