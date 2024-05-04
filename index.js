/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convBtn = document.getElementById("convert-btn")
const pLength  = document.getElementById("p-length")
const pVolume  = document.getElementById("p-volume")
const pMass  = document.getElementById("p-mass")
const inputEl = document.getElementById("input-el")

function convert(){
    let value = Number(inputEl.value)
    if(Boolean(value)){
        pLength.textContent = `${value} metres = ${Number(value * 3.281).toFixed(3)} feet |
                                ${value} feet = ${Number(value / 3.281).toFixed(3)} metres`;
        
        pVolume.textContent = `${value} litres = ${Number(value * 0.264).toFixed(3)} gallons |
                                ${value} gallons = ${Number(value / 0.264).toFixed(3)} litres`;

        pMass.textContent = `${value} kilos = ${Number(value * 2.204).toFixed(3)} pounds |
                                ${value} pounds = ${Number(value / 2.204).toFixed(3)} kilos`;
    }
}

convBtn.addEventListener('click', () => convert())
inputEl.oninput = function(event){
    if (Number(inputEl.value.length) === 0) {
        pLength.textContent = ""
        pVolume.textContent = ""
        pMass.textContent = ""
        inputEl.style.width = `${inputEl.value.length + 2}ch`
    }
    if((Number(inputEl.value.length) > 1) && (Number(inputEl.value.length) < 11)){
        inputEl.style.width = `${inputEl.value.length + 1}ch`
    }
    inputEl.style.boxShadow = "0 0 16px cyan, 0 0 32px hotpink"
    setTimeout(()=>{inputEl.style.boxShadow="0 0 16px hotpink, 0 0 32px cyan"}, 150)
}


