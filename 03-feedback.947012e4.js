var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=a||u||Function("return this")(),c=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return l.Date.now()};function v(e,t,n){var o,r,i,f,a,u,l=0,c=!1,v=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,l=t,f=e.apply(i,n)}function E(e){return l=e,a=setTimeout(j,t),c?b(e):f}function h(e){var n=e-u;return void 0===u||n>=t||n<0||v&&e-l>=i}function j(){var e=d();if(h(e))return w(e);a=setTimeout(j,function(e){var n=t-(e-u);return v?m(n,i-(e-l)):n}(e))}function w(e){return a=void 0,y&&o?b(e):(o=r=void 0,f)}function O(){var e=d(),n=h(e);if(o=arguments,r=this,u=e,n){if(void 0===a)return E(u);if(v)return a=setTimeout(j,t),b(u)}return void 0===a&&(a=setTimeout(j,t)),f}return t=g(t)||0,p(n)&&(c=!!n.leading,i=(v="maxWait"in n)?s(g(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=u=r=a=void 0},O.flush=function(){return void 0===a?f:w(d())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var a=r.test(e);return a||i.test(e)?f(e.slice(2),a?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const y={formElem:document.querySelector(".feedback-form")};y.formElem.addEventListener("submit",(e=>{e.preventDefault(),localStorage.removeItem("formData"),console.log(b),b={},y.formElem.reset()})),y.formElem.addEventListener("input",t((e=>{const t=e.target.value,n=e.target.name;b[n]=t,function(e,t){const n=JSON.stringify(t);localStorage.setItem(e,n)}("feedback-form-state",b)}),500));let b=function(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}("feedback-form-state")||{};y.formElem.elements.email.value=(null==b?void 0:b.email)||"",y.formElem.elements.message.value=(null==b?void 0:b.message)||"";
//# sourceMappingURL=03-feedback.947012e4.js.map
