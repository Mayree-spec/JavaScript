 */
export function frontDoorResponse(line) {
    return line[0];
}

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
 export function frontDoorPassword(word) {
  let final = "";
  let newpassword = word[0].toUpperCase();
  let newresult = "";

  for (let i = 1; i < word.length; i++) {
    newresult += word[i].toLowerCase();
  }

  final = newpassword + newresult;
  return final;
}


/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
export function backDoorResponse(line) {
    return line[line.length - 1]
}

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
export function backDoorPassword(word) {
  let result = ""
 for (let i=0; i<=line.lenght; i++){
  toUpperCase(i[0]);
   result = i + "please";
   }
  return result
}
  
