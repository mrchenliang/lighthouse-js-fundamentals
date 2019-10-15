const instructorWithLongestName = function(instructors) {
var length = 0;
var lName= "";
for (var i =0; i < instructors.length; i++){
  if (length < instructors[i].name.length) {
  lName = instructors[i];
  length = instructors[i].name.length;
}
}
return lName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));