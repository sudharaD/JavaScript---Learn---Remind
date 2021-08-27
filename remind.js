const todos = [{
    text: 'Order cat food',
    completed: 'false'
}, {
    text: 'Clean Kitchen',
    completed: 'true'
}, {
    text: 'Buy food',
    completed: 'false'
}, {
    text: 'Do work',
    completed: 'true'
}, {
    text: 'Exercise',
    completed: 'true'
}]

console.log(todos)

const sortTodos = function(todos) {
    todos.sort(function(a, b) {
        if (a.completed > b.completed) {
            return -1
        }
    })
    return todos
}

console.log(sortTodos(todos))

const getThingsReady = (list) => {
    return list.filter(function(note) {
        if(note.completed.toLowerCase().includes('false')) {
            return true
        }
    })
}

console.log(getThingsReady(todos))

const filter = function(todosArray, query) {
    return todosArray.filter(function(note) {
        const textResult = note.text.toLowerCase().includes(query.toLowerCase())
        const completedResult = note.completed.toLowerCase().includes(query.toLowerCase())
        return textResult || completedResult
    })
    
}

console.log(filter(todos, 'true'))

const notes = [{
    title: 'My',
    body: 'I'
}, {
    title: 'Habbits',
    body: 'Exercise'
}, {
    title: 'Office',
    body: 'Get'
}]

console.log(notes)

const sortedArray = function(notes) {
    notes.sort(function(a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        }
        return 0
    }) 
    return notes
} 

console.log(sortedArray(notes))

let _name = 'sudhara'
let $name = 'sudhara'

console.log(_name)
console.log($name)

let sumAgain = function (a,b,c) {
    return a+b+c
}

let sumValue = sumAgain(1,60,3)

console.log(sumValue)

let getScore = function(name = 'Player', score = 100) {
    console.log(name)
    console.log(score)
}

getScore(undefined,50)

let myObject = {
    id: 001,
    name: 'object 1',
    date: '27-08-2021'
}

console.log(myObject)
console.log(myObject.id)
myObject.id++
console.log(myObject.id)




















