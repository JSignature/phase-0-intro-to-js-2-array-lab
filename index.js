const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {

    cats.push("Ralph")

}

function destructivelyPrependCat() {

    cats.unshift("Bob")

}


function destructivelyRemoveLastCat() {
    cats.pop()

}

function destructivelyRemoveFirstCat() {
    cats.shift()

}

function appendCat(name) {
    return [...cats, name]
}

function prependCat(name) {
    return [name, ...cats]

}

function removeLastCat(name) {
    return cats.slice(0, -1)

}

function removeFirstCat(name) {
    return cats.slice(1, 3)

}