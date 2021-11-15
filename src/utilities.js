/**
 * validates characters and replace duplicated characters
 * @param {string} message 
 * @returns {string}
 */
export const handlesRepeatedValues = (message) => {
  return message.toLowerCase().replace(/[^\w\s]|(.)\1{1,}/g, (str, match) => {
    return match[0];
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






