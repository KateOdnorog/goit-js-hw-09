import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */document.querySelector("body").style.backgroundColor="white";const o="feedback-form-state",l={form:document.querySelector(".feedback-form")};l.form.addEventListener("input",e=>{const t=e.currentTarget.elements.email.value,a=e.currentTarget.elements.message.value;n(o,{email:t,message:a})});function r(){const e=m(o);l.form.elements.email.value=(e==null?void 0:e.email)||"",l.form.elements.message.value=(e==null?void 0:e.message)||""}r();l.form.addEventListener("submit",e=>{e.preventDefault();const t=e.currentTarget.elements.email.value,a=e.currentTarget.elements.message.value,s={email:t,message:a};if(!s.email||!s.message){alert("Fill please all fields");return}if(console.log(s),!s.email||!s.message){alert("Fill please all fields");return}localStorage.removeItem(o),e.target.reset()});function n(e,t){const a=JSON.stringify(t);localStorage.setItem(e,a)}function m(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}
//# sourceMappingURL=2-form.js.map
