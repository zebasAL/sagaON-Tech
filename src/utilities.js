/**
 * validates characters and replace duplicated characters
 * @param {string} message 
 * @returns {string}
 */
export const handlesRepeatedValues = (message) => {
  return message.toLowerCase().replace(/[^\w\s]|(.)\1{1,}/g, (str, match) => {
    return match;
  })
};

/**
 * handlesMatchedValues
 * @param {string} instruction 
 * @param {string} message 
 * @returns {boolean}
 */
export const handlesMatchedValues = (instruction, message) =>{
  const fixedMessage = handlesRepeatedValues(message);
  if (fixedMessage.includes(instruction.toLowerCase())) {
    return true
  }
    return false
}

/**
 * rulesChallenge1
 * @returns {string}
 */
export const rulesChallenge1 = () =>{ 
  return(
      `Text file consists in four Rows.
      The first row are three numbers: M1, M2 and N. M1 and M2 is the number of
      characters of the two instructions and N is the number of characters in the
      message.
        - N will always be between 3 and 5000 inclusive
        - M1 and M2 will always be between 2 and 50 inclusive
        -The second row contains the first instruction
        -The third row contains the second instruction
        -The fourth row contains the message`
  )
}

/**
 * rulesChallenge2
 * @returns {string}
 */
 export const rulesChallenge2 = () =>{ 
  return(
    `The program is a text file consisting of several lines.
    -The first line is a number less or equal to 10000 indicating the number of rounds.
    -Then there is one row per round with the markers of the two players
    `
  )
}