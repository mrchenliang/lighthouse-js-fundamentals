const makeCase = function(input, casingStyle) {
  // convert casingStyle to an array
  var casingStyleArray = [];
  if (typeof casingStyle === "string") {
    casingStyleArray = casingStyle.split();
  } else {
    casingStyleArray = casingStyle;
  }
  // loop over all values of casingStyleArray and apply casing styles
  for (var i = 0; i < casingStyleArray.length; i++) {
    if (casingStyleArray[i] === "camel") {
      // camelCase
      input = input.replace(/^(\w{1})/, x => x.toLowerCase());
      input = input.replace(/[-_ ](\w{1})/g, x => x.toUpperCase());
      input = input.replace(/[-_ ]/g, "");
    } else if (casingStyleArray[i] === "pascal") {
      // PascalCase
      input = input.replace(/[-_ ](\w{1})/g, x => x.toUpperCase());
      input = input.replace(/^(\w{1})/, x => x.toUpperCase());
      input = input.replace(/[-_ ]/g, "");
    } else if (casingStyleArray[i] === "snake") {
      // snake_case
      input = input.replace(/[- ]/g, "_");
    } else if (casingStyleArray[i] === "kebab") {
      // kebab-case
      input = input.replace(/[_ ]/g, "-");
    } else if (casingStyleArray[i] === "title") {
      // Title Case
      input = input.replace(/[-_ ](\w{1})/g, x => x.toUpperCase());
      input = input.replace(/^(\w{1})/, x => x.toUpperCase());
    } else if (casingStyleArray[i] === "vowel") {
      // vOwEl cAsE
      input = input.replace(/[^aeiou]/gi, x => x.toLowerCase());
      input = input.replace(/[aeiou]/g, x => x.toUpperCase());
    } else if (casingStyleArray[i] === "consonant") {
      // CoNSoNaNT CaSe
      input = input.replace(/[aeiou]/gi, x => x.toLowerCase());
      input = input.replace(/[^aeiou]/g, x => x.toUpperCase());
    } else if (casingStyleArray[i] === "upper") {
      // UPPERCASE
      input = input.replace(/\w/g, x => x.toUpperCase());
    } else if (casingStyleArray[i] === "lower") {
      // lowercase
      input = input.replace(/\w/g, x => x.toLowerCase());
    }
  }

  // return converted input string
  return input;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
