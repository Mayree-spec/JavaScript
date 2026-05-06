export function canExecuteFastAttack(knightIsAwake) {
  if (knightIsAwake) {
    return false
  } else {
    return true
  }
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
 if (!archerIsAwake && prisonerIsAwake) {
   return true
 }else{
   return false
 }
  
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
return (petDogIsPresent && !archerIsAwake) || (prisonerIsAwake && !knightIsAwake && !archerIsAwake);
}
  
       