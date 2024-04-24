
var values = []
function calculator(value) {
    values.push(value)
    console.log(value)
    document.getElementById("display").value += value
}

function dispaly() {

}

function displayClear() {
    document.getElementById("display").value = ''
}

function removeOneValue() {
    console.log(values)
    // document.getElementById("display").value -= values.pop()
}