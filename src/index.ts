/**
 * This program is a dice guessing game
 *
 * By:      Aidan Lalonde-Novales
 * Version: 1.0
 * Since:   2022-09-22
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

let counter = 1

// Generate the correct number, from 1 to 6
const min = 1
const max = 6
const randomNumber = Math.floor(Math.random() * max + min)

console.log('Welcome to the Dice Game!')

// Game loop
while (true) {
  // Input
  console.log('')
  const guessedNumberString = prompt('Guess a number from 1 to 6: ')
  const guessedNumber = parseInt(guessedNumberString)

  // Process
  if (guessedNumber === randomNumber) {
    break
  } else if (guessedNumber < randomNumber && guessedNumber > 0) {
    counter++
    console.log('\nIncorrect. The number is higher!')
  } else if (guessedNumber > randomNumber && guessedNumber < 7) {
    counter++
    console.log('\nIncorrect. The number is lower!')
  } else {
    counter++
    console.log('\nInvalid Input. Please make sure you are using numbers 1-6.')
  }
}

// Output
console.log(`\nYou Guessed Correctly! Tries: ${counter}.`)

console.log('\nDone.')
