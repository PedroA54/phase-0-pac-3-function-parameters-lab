function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  function introductionWithLanguage(name, language) {
    return "Hi, my name is " + name + " and I am learning to program in " + language + ".";
  } 
  describe('introductionWithLanguageOptional(name, language)', function() {
    it('takes in two arguments, a name and a language, and language defaults to JavaScript', function() {
      expect(introductionWithLanguageOptional("Gracie")).toEqual("Hi, my name is Gracie and I am learning to program in JavaScript.");
    })
  })