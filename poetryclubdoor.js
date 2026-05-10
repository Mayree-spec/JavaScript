export function frontDoorResponse(line) {
    return line[0];
}

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

export function backDoorResponse(line) {
    let ignorespace = line.trimEnd();
  return ignorespace[ignorespace.length-1]
}

export function backDoorPassword(word) {
  let result = ""
 let capitalized = frontDoorPassword(word);
  let please = "please"
  result = capitalized +", "+please
  return result
}
  
