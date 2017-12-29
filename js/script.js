var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur =  'triceratops';
var dinosaurUpperCase = dinosaur.toUpperCase();
var textCorrected = text.replace('Velociraptor', dinosaurUpperCase);
    var half = textCorrected.length/2;
    var officalText = textCorrected.slice(0, half);

console.log(text);
console.log('Change the dinosaur with', dinosaur);
console.log(textCorrected);
console.log('');
console.log(officalText);