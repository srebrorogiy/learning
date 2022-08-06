//function fn(x) {
//    return x.flip();
    
//  }
//function showBrowser(browser) {
//
//  if (browser == 'Edge') {
//    alert( "You've got the Edge!" );
//  } else if (browser == 'Chrome' 
//    || browser == 'Firefox' 
//    || browser == 'Safari' 
//    || browser == 'Opera') {
//      alert( 'Okay we support these browsers too' );
//  } else {
//    alert( 'We hope that this page looks ok!' );
//  }
//}
//
//showBrowser()

//const number = +prompt('Введите число между 0 и 3', '');//

//switch(number) {
//  case 0:
//    alert('Вы ввели число 0');
//    break;
//  case 1:
//    alert('Вы ввели число 1');
//    break;
//  case 2:
//  case 3:
//    alert('Вы ввели число 2, a может и 3');
//    break;
//}

//function checkAge(age) {
//  if (age > 18) {
//    return true;
//  } else {
//    return confirm('Родители разрешили?');
//  }
//}
//
//let age = prompt('Сколько вам лет?', 18);
//
//if ( checkAge(age) ) {
//  alert( 'Доступ получен' );
//} else {
//  alert( 'Доступ закрыт' );
//}

//function checkAge(age) {
//  let n = age;
//  prompt('Сколько лет?', n)
//  let message = (age > 18) ? true : confirm('Родители разрешили?');
//
//  alert(message);
//}
//
//checkAge()
//
//function checkAge(age) {
//  return (age > 18) || confirm('Родители разрешили?');
//}

//function pow(x,n) {
//  let result = x ** n;
//  return result;
//}
//
//console.log(pow(1, 100))

//function pow(x, n) {
//  prompt('первое число:', x);
//
//  prompt('второе число:', n);
//  if (n > 1) {
//    let result = x ** n;
//    return alert(result);
//  }
//
//}
//  let n = 
//
//  if (n > 1) {
//    let result = first ** sec
//
//  }
//}

//pow(3, 3)

// OBJECTS

// добавление объектов
//let user = {};
//user.name = 'John';
//user.surname = 'Smith';
//user.name = "pete";
//
//alert(user.name);
//
//delete user.name;

//let schedule = {};
//
//alert( isEmpty(schedule) ); // true
//
//
//schedule["8:30"] = "get up";
//
//alert( isEmpty(schedule) ); // false
//
//function isEmpty(obj) {
//  for (let key in obj) {
//    return false;
//  } 
//  return true; 
//  }

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

// очень плохой код, при добавлении свойства в объект придется изменять код

//let sum = salaries.Ann + salaries.John + salaries.Pete;

// хороший

//let sum = 0
//for (let key in salaries) {
//  sum += salaries[key];
//}
//alert(sum)

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(obj) {
  let key = typeof Number;
  key *= 2;  
};

multiplyNumeric(menu)


// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};