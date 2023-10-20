// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

//const cohort = "Golf 2023"
 //console.log(cohort.split(" "))

// a) Your answer: ["G", "o", "l", "f", " ", "2","0", "2", "3"]
// b) Verify and explain: the .split will spit out the answer in an array.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: `Hello, ${name}!` did not have "return" in front of it to make it work"

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
 //console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: .filter function will filter out any number modulo 2 not equal to 0

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
 //console.log(myCodingSkills.languages[0])

// a) Your answer: javascript
// b) Verify and explain: the console.log targeted the 0 index of the key languages

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Golf"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
 //console.log(learnStudent)

// a) Your answer: George
// b) Verify and explain: the entire class displays, however the George string confused me as to what it is connected to.
