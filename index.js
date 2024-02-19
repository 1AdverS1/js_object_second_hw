//Task 1

const test1 = {
    name: 'Igor',
    surname: 'Sergeev',
}

delete test1.name;
delete test1.surname;
console.log(test1);

//Task 2

const test2 = {
    name: 'Vasya',
    surname: 'Pupkin',
}

    if('name' in test2){
        console.log(true);
    }else{
        console.log(false)
    }

//Task 3

const student = {
    name: 'John',
    age: 19,
    isHappy: true
  };
  
  for (let key in student) {
    console.log(key);
  }
  

  for (let key in student) {
    console.log(student[key]);
  }

  //Task 4

  const colors = {
    'ru pum pu ru rum': {
      red: 'красный',
      green: 'зеленый',
      blue: 'синий'
    },
  };
  
  console.log(colors['ru pum pu ru rum'].red);
  
  console.log(colors['ru pum pu ru rum'].blue);

//Task 5

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    igor: 664,
    alexandra: 199
  };
  

  let sum = 0;
  for (let employee in salaries) {
    sum += salaries[employee];
  }
  

  let averageSalary = sum /Object.keys(salaries).length;
  
  console.log(averageSalary);


  //Task 6


  let user = {};


  function registerUser() {
    user.login = prompt("Введите логин:");
    user.password = prompt("Введите пароль:");
  }
  
  
  function confirmUser() {
    let enteredLogin = prompt("Введите логин для подтверждения:");
    let enteredPassword = prompt("Введите пароль для подтверждения:");
  
  
    if (enteredLogin === user.login && enteredPassword === user.password) {
      alert("Добро пожаловать");
    } else {
      alert("Ты не пройдешь!");
    }
  }

registerUser();
confirmUser();


  


  

  
  
