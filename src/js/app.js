import scrollByJq from "./query";
import scrollFunc from "./scroll";

window.addEventListener('DOMContentLoaded', () => {
   

//Burger

const burger = document.querySelector('.burger'),
nav = document.querySelector('.nav');




burger.addEventListener('click', () => {
nav.classList.toggle('active');
burger.classList.toggle('burger_active');
});

//Scroll




//Modal

const closeModal = document.querySelector('.modal_close'),
openModal = document.querySelectorAll('.btn_open'),
modal = document.querySelector('.modal'),
scrollModal = calcScroll();

function openModalPhone() {
modal.classList.remove('hide');
modal.classList.add('show');
document.body.style.marginRight = `${scrollModal}px`;
document.body.style.overflow = 'hidden';
}

function closeModalPhone() {
modal.classList.remove('show');
modal.classList.add('hide');
document.body.style.overflow = '';
document.body.style.marginRight = '0px';
}


function calcScroll() {
   let div = document.createElement('div');

   div.style.width = '50px';
   div.style.height = '50px';
   div.style.overflowY = 'scroll';
   div.style.visibility = 'hidden';

   document.body.appendChild(div);

   let scrollWidth = div.offsetWidth - div.clientWidth;
   div.remove();

   return scrollWidth;
}


openModal.forEach(item => {
item.addEventListener('click', openModalPhone);
});


modal.addEventListener('click', e => {
if (e.target === modal || e.target === closeModal) {
closeModalPhone();
}
});


// forms

const nameError = document.querySelector('#name-error'),
phoneError = document.querySelector('#phone-error'),
subError = document.querySelector('#sub-error'),

cNameError = document.querySelector('#sub-name-error'),
cPhneError = document.querySelector('#sub-phone-error'),
cEmailError = document.querySelector('#c-email-error'),
cBtnError = document.querySelector('#btn-error'),

qNameError = document.querySelector('#ques_name_error'),
qPhneError = document.querySelector('#ques_phone_error'),
qEmailError = document.querySelector('#ques_email_error'),
qBtnError = document.querySelector('#ques_btn_error'),
qTextError = document.querySelector('#ques_text_error'),


contactBtn = document.querySelector('#contact-btn'),
subBtn = document.querySelector('.sub_btn'),
quesBtn = document.querySelector('.quesition_btn'),


contName = document.querySelector('#contact-name'),
contPhone = document.querySelector('#contact-phone'),

consultName = document.querySelector('#consul_name'),
consultPhone = document.querySelector('#consul_phone'),
consultEmail = document.querySelector('#consul_email'),

quesName = document.querySelector('#ques_name'),
quesPhone = document.querySelector('#ques_phone'),
quesEmail = document.querySelector('#ques_email'),
quesText = document.querySelector('#ques_text');



function formValidete(selector, nameSelector) {
   const name = document.querySelector(selector).value;

   if (name.value ='') {
      nameSelector.innerHTML = 'Требуется имя';
      return false;
   }

   if(!name.match(/^[A-zA-a]*\s{1}[A-Za-z]*$/)) {
      nameSelector.innerHTML = 'Напишите полное имя';
      return false;
   }

   nameSelector.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
   return true;
   
}

function phoneValidete(selector, phoneSelector) {
   const phone = document.querySelector(selector).value;

   if (phone.length == 0) {
      phoneSelector.innerHTML = 'Требуется номер телефона';
      return false;
   }

   if(phone.length !== 10) {
      phoneSelector.innerHTML = 'номер телефона должен состоять из 10 цифр';
      return false;
   }

   if(!phone.match(/^[0-9]{10}$/)) {
      phoneSelector.innerHTML = 'Требуется номер телефона';
      return false;
   }



   phoneSelector.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
   return true;
}

function emailValidete(selector, emailSelector) {
   const email = document.querySelector(selector).value;

   if (email.length == 0) {
      emailSelector.innerHTML = 'Электронная почта обязательна';
      return false;
   }

   if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      emailSelector.innerHTML = 'Электронная почта недействительна';
      return false;
   }

   emailSelector.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
   return true;
}

function textValidete(selector, textSelector) {
   const text = document.querySelector(selector).value;

   if (text.length == 0) {
      textSelector.innerHTML = 'Заполните текстовая поле';
      return false;
   }

   textSelector.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
   return true;

}


function subValidete(selector) {
   if (!formValidete('#contact-name', nameError) || !phoneValidete('#contact-phone', phoneError)) {
      selector.style.display = 'block';
      selector.innerHTML = 'пожалуйста, исправьте ошибку, чтобы отправить';
      setTimeout( () => {
         selector.style.display = 'none';
      }, 3000);
      return false;
   }

   return true;
}

function ConsulsubValidete(selector) {
   if (!formValidete('#contact-name', nameError) || !phoneValidete('#contact-phone', phoneError) || !emailValidete('#consul_email', cEmailError)) {
      selector.style.display = 'block';
      selector.innerHTML = 'пожалуйста, исправьте ошибку, чтобы отправить';
      setTimeout( () => {
         selector.style.display = 'none';
      }, 3000);
      return false;
   }

   return true;
}



contName.addEventListener('keyup', () => {
   formValidete('#contact-name', nameError);
});
contPhone.addEventListener('keyup', () => {
   phoneValidete('#contact-phone', phoneError);
});

consultName.addEventListener('keyup', () => {
   formValidete('#consul_name', cNameError);
});

consultPhone.addEventListener('keyup', () => {
   phoneValidete('#consul_phone', cPhneError);
});

consultEmail.addEventListener('keyup', () => {
   emailValidete('#consul_email', cEmailError);
});

quesName.addEventListener('keyup', () => {
   formValidete('#ques_name', qNameError);
});

quesPhone.addEventListener('keyup', () => {
   phoneValidete('#ques_phone', qPhneError);
});

quesEmail.addEventListener('keyup', () => {
   emailValidete('#ques_email', qEmailError);
});

quesText.addEventListener('keyup', () => {
   textValidete('#ques_text', qTextError);
});

function quesBtnValid(selector) {
   if (!formValidete('#ques_name', qNameError) || !phoneValidete('#ques_phone', qPhneError) || !emailValidete('#ques_email', qEmailError) || !textValidete('#ques_text', qTextError)) {
      selector.style.display = 'block';
      selector.innerHTML = 'пожалуйста, исправьте ошибку, чтобы отправить';
      setTimeout( () => {
         selector.style.display = 'none';
      }, 3000);
      return false;
   } 

   return true;
}





contactBtn.addEventListener('click', () => {
   subValidete(subError);
});

subBtn.addEventListener('click', () => {
   ConsulsubValidete(cBtnError);
});

quesBtn.addEventListener('click', () => {
   quesBtnValid(qBtnError);
});

// Fetch


const form = document.querySelector('.consultion_form');
const input = document.querySelectorAll('.consultion_input');


function clearInput() {
   input.forEach(e => {
      e.value = '';
   });
}


function req(e) {
   e.preventDefault();

   let formData = new FormData(form);
   formData.append("id", Math.random());

   let obj = {};
   formData.forEach((value, key) => {
      obj[key] = value;
      
   });

   // let json = JSON.stringify(obj);

   // const request = new XMLHttpRequest();
   // request.open('POST', 'http://localhost:3000/people');
   // request.setRequestHeader('Content-type', 'application/json; charset=utf=8');
   // request.send(json);
   // request.addEventListener('load', () => {
   //    if (request.status == 200) {
   //       let data = JSON.parse(request.response);
   //       console.log(data);
   //    } else {
   //       console.error("Not correct");
   //    }
   // });

   getResource('http://localhost:3000/people', obj)
   .then(data => console.log(data));
   let der = document.createElement('span');

   der.append(`${obj.name}! Спасибо, ваша заявка принята! Мы свяжемся с вами в ближайшее время.`);

   document.querySelector('.simple').append(der);

   // clearInput();
}


form.addEventListener('submit', (e) => req(e), {'once': true});

async function getResource(url, data) {
   const res = await fetch(`${url}`, {
      method: 'POST',
      headers: {
         'Content-type': 'application/json'
      },
      body: JSON.stringify(data),
   });

   if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
   }

   return await res.json();
}






// Timer 

const days= document.querySelector('#days'),
hours = document.querySelector('#hours'),
minutes = document.querySelector('#minutes'),
seconds = document.querySelector('#seconds');

let deadline = '2023-04-31';

function timeLIne() {
   const t = Date.parse(deadline) - Date.parse(new Date()),
   day = Math.floor( (t/(1000 * 60 * 60 *24)) ),
   hour = Math.floor( (t/(1000*60*60) % 24) ),
   minute = Math.floor( (t/1000/60) % 60 ),
   secon = Math.floor( (t/(1000) % 60));

   function getZero(num) {
      if (num >= 0 && num < 10) {
         return '0' + num;
      } else {
         return num;
      }
   }

   days.innerHTML = `${getZero(day)}`;
   hours.innerHTML = `${getZero(hour)}`;
   minutes.innerHTML = `${getZero(minute)}`;
   seconds.innerHTML = `${getZero(secon)}`;

   if (t <= 0) {
      clearInterval(b);
   }
   
}

let b = setInterval(timeLIne, 1000);



// Slider

const inner = document.querySelector('.slider_inner'),
      item = document.querySelectorAll('.slider_item'),
      prevBtn = document.querySelector('.prev'),
      nextBtn = document.querySelector('.next');

let offset = 0;
let step = 0;

function prevSlider() {
   offset -= 615;
   if (offset < -615) {
      offset = 615;
   }

   inner.style.left = -offset + 'px';
}

function nextSlider() {
   offset += 615;
   if (offset > 615) {
      offset = -615;
   }

   inner.style.left = -offset + 'px';
}

prevBtn.addEventListener('click', prevSlider);
nextBtn.addEventListener('click', nextSlider);


// Scroll2

function addListMu(selector, id) {
   const blockId = document.querySelector(selector);
   blockId.addEventListener('click', (e) => {
      e.preventDefault();
      scrollByJq(id);
   });
}

scrollFunc();



});

