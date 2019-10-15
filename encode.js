const urlEncode = function(text) {
let sample ='';
for (var i = 0; i < text.length; i++) {
if (text[i] === " ") {
sample = text.replace(/ /g, "%20");
}
}
for (let x = 0; x < text.length; x++) {
  if ((text.charAt(0) || text.length() - 1) === " ") {
return sample.slice(3, -3);
}else{
  return sample;
} } };

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));