import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const t={email:"",message:""},s="feedback-form-state";function m(e){const a=localStorage.getItem(s);try{const n=JSON.parse(a);Object.assign(t,n),e.elements.email.value=t.email,e.elements.message.value=t.message}catch{}}function l(e){const a=e.target;a.name!=="email"&&a.name!=="message"||(t[a.name]=a.value.trim(),localStorage.setItem(s,JSON.stringify(t)))}function o(e){const a=e.target.elements;if(e.preventDefault(),t.email===""||t.message===""){window.alert("Fill please all fields");return}console.log(t),localStorage.removeItem(s),[t.email,t.message,a.email.value,a.message.value]=["","","",""]}function r(){const e=document.querySelector(".feedback-form");m(e),e.addEventListener("input",l),e.addEventListener("submit",o)}r();
//# sourceMappingURL=2-form.js.map