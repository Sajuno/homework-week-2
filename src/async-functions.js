function giveItBackLater(value, callback) {
    setTimeout(() => callback(value), 100)
}

function promiseToGiveItBackLater(value) {
    return new Promise((resolve) => {
        giveItBackLater(value, resolve)
    })
}

function addSomePromises(somePromise) {
    return somePromise
        .then(val => val.repeat(2))
        .catch(val => val.repeat(3))
}

module.exports = {giveItBackLater, addSomePromises, promiseToGiveItBackLater}