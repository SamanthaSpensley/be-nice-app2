var niceThings = ['Your smile is contagious.', "You're a smart cookie.", 'I bet you make babies smile.', 'You have the best laugh.', 'I appreciate you.', 'You are the most perfect you there is.', "You're an awesome friend.", 'You deserve a hug right now.', "You've got all the right moves!", "You're all that and a super-size bag of chips.", "On a scale from 1 to 10, you're an 11.", 'If cartoon bluebirds were real, a bunch of them would be sitting on your shoulders singing right now.', "You're like sunshine on a rainy day.", 'I bet you sweat glitter.', 'Babies and small animals probably love you.', "You're even better than a unicorn, because you're real.", ]

function generate() {
  return Math.floor(Math.random() * niceThings.length);
}
console.log(generate());

$('button').click(function(){
  $('#result h1').html(niceThings[generate()]);
})
