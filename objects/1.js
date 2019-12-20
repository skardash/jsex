let user = {
  name: "John",
  age: 30,
  "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
};

alert(user["likes birds"]); // true
alert(user["age"]); // true
alert(user[age]); // true
