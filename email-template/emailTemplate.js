module.exports = (template, data) => {
  template = template.split(" ");

  template = template
    .map((word, index) => {
      if (word.includes("{") && word.includes("},")) {
        word = word.slice(1, -2);
        console.log(word, data[word]);
        return data[word] + ",";
      } else if (word.includes("{") && word.includes("}")) {
        word = word.slice(1, -1);
        return data[word];
      } else {
        return word;
      }
    })
    .join(" ");

  return template;
};
