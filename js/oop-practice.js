// STEP 1
// function Cat() {
//     console.log(`You created a new cat`)
// }
// const Dog = function() {
//     console.log('You created a new dog')
// }
// STEP 2
// const catNew = new Cat()
// const dogNew = new Dog()
// STEP 3
// function Animal() {
//     console.log(`The Animal has been created`)
// }
// const animalNew = new Animal()
// STEP 4
// function Animal(name) {
//     console.log(`You created a new animal named ${name}`)
// }
// const animalNew = new Animal('Peter')
// STEP 5
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.length = length
//     }
// }
// const animalNew = new Animal('Cat','Tabby','Orange','5 inches', '12 inches')
// STEP 6
// let attributes = ""
// for(let x in animalNew) {
//     attributes += `${x}: ${animalNew[x]}\n`
// }
// console.log(attributes)
// // STEP 7
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.length = length
//     }
//     speak = function() {
//         if (this.type === 'dog') {
//             console.log(`The ${this.color} dog is barking!`)
//         } else if (this.type === 'cat') {
//             console.log(`The ${this.color} cat is meowing!`)
//         }
//     }
// }
// const cat = new Animal('cat','Tabby','orange','5 inches', '12 inches')
// cat.speak()
// STEP 8
// function Animal(type, breed, color, height, length) {
//     let _type = type
//     let _breed = breed
//     let _color = color
//     let _height = height
//     let _length = length
//     let checkType = function() {
//         if (_type === 'dog') {
//             console.log(`The dog has made a noise!`)
//         } else {
//             console.log(`The cat has made a noise!`)
//         }
//         return 'x'
//     }
//     this.speak = function() {
//         checkType()
//     }
// }
// const Cat = new Animal('cat','Tabby','Orange','5 inches', '12 inches')
// Cat.speak()
// STEP 9
// class String {
//     constructor(paragraph, word) {
//         this.paragraph = paragraph.toLowerCase()
//         this.word = word
//     }

//     findWords = function() {
//         let reg = new RegExp(this.word, 'g')
//         let count = (this.paragraph.match(reg) || []).length
//         alert(`The word <${this.word}> was found ${count} times.`)
//     }

// }
// const string1 = new String('This boat is this really this way.', 'this')
// string1.findWords()