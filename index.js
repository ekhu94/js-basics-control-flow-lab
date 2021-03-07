function scuberGreetingForFeet(d){
  if (d <= 400) {
    return 'This one is on me!';
  } else if (d > 2000 && d <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (d > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(d){
  return d === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(d){
  switch(d) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}