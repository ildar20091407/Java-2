 alert(" Задание 1");

 console.log(" Задание 1");
 
 console.log("Привет !");

 alert("Привет !");



 console.log("Ваше имя?");

 var myname = prompt("Ваше имя?")

 console.log("Моё имя " + myname);



 console.log("Cколько вам лет?" );

 var myage = +prompt("Cколько вам лет?")

 console.log("Mне " + myage + " лет");

 if (myage >= 0 && myage < 18 ){
     console.log("Вы еще молоды, Вам нужно учиться");
     alert("Вы еще молоды, Вам нужно учиться");
 } else if (myage >= 18 && myage < 50 ){
     console.log("“Вам нужно работать”");
     alert("“Вам нужно работать”");
 }else if (myage >= 50 && myage < 59 ){
    console.log("Вам скоро на пенсию");
     alert("Вам скоро на пенсию");
 }else if (myage >= 59 && myage < 100 ){
     console.log("Вы пенсионер");
     alert("Вы пенсионер");
 }else {
     console.log("Что-то пошло не так");
     alert("Что-то пошло не так");
 }

 alert(" Задание 2");

 console.log(" Задание 2");

 var time = +prompt("Введите время")

 switch  (time){

  case 1 :{
     console.log("1 час ночи");
     alert("1 часа ночи");
    break
  }
  case 2:{
     console.log("2 часа ночи");
     alert("2 часа ночи");
     break
 }
 case 3:{
     console.log("3 часа ночи");
    alert("3 часа ночи");     
break
  }
  case 4:{
     console.log("4 часа ночи");
     alert("4 часа ночи");
     break
 }
  case 5:{
     console.log("5 часа ночи");
     alert("5 часа ночи");
     break
  }
  case 6:{
     console.log("5 часа ночи");
     alert("6 часа ночи");
     break
  }
  case 7:{
     console.log("7 часов утра");
     alert("7 часов утра");
     break
  }
  case 8:{
     console.log("8 часов утра");
     alert("8 часов утра");
     break
 }  case 9:{
     console.log("9 часов утра");
     alert("9 часов утра");
     break
  }
  case 10:{
     console.log("10 часов утра");
     alert("10 часов утра");
     break
  }
  case 11:{
  console.log("11 часов дня");     alert("11 часов дня");
     break
  }
  case 12:{
     console.log("12 часов дня");
     alert("12 часов дня");
     break
 }
  case 13:{
     console.log("1 час дня");
     alert("1 час дня");
     break
  }
   case 14:{     console.log("2 часа дня");
    alert("2 часа дня");
 }
  case 15:{
     console.log("3 часа дн");
     alert("3 часа дн");
     break
  }
  case 16:{
     console.log("4 часа дня");
     alert("4 часа дня");
     break
  }
  case 17:{
     console.log("5 часов дня");
     alert("5 часов дня");
     break
  }
 case 18:{
     console.log("6 часов вечера");
    alert("6 часов вечера");
     break
 }
 case 19:{
    console.log("7 часов вечера");
     alert("7 часов вечера");
     break
  }
  case 20:{
     console.log("8 часов вечера");
     alert("8 часов вечера");
     break
  }
  case 21:{
     console.log("9 часов вечера");
    alert("9 часов вечера");
     break
 }
 case 22:{
    console.log("10 часов вечера");
     alert("10 часов вечера");
     break
 }
  case 23:{
     console.log("11 часов вечера");
     alert("11 часов вечера");
     break
  }
  case 0:{
    console.log("12 часов вечера");
    alert("12 часов вечера");
    break
 }
}




alert(" Задание 3");

console.log(" Задание 3");




var x = +prompt("Первое значение (X) = ");

console.log("Первое значение (X) = " +  x );

alert("Первое значение (X) = " +  x);


var y = +prompt("Второе значение (Y) = ")

console.log("Второе значение (Y) = " +  y) ;

alert("Второе значение (Y) = " +  y);


var z = +prompt("Третье значение (Z) = ");

console.log("Третье значение (Z) = " +  z);

alert("Третье значение (Z) = " +  z);


if ( x > z  && z > y || y > z  &&  z > x) {
   console.log("Ваше значение  = " +  z) ;

   alert("Ваше значение = " +  z); 

}else if( y > x  &&  x > z || z > x  && x > y){
   console.log("Ваше значение  = " +  x) ;

   alert("Ваше значение = " +  x); 
}

else if( x > y  && y > z ||  z > y && y > x){
   console.log("Ваше значение  = " +  y) ;

   alert("Ваше значение = " +  y); 
}
