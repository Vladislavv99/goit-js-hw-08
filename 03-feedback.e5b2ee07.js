!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,m=c||d||Function("return this")(),s=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return m.Date.now()};function b(e,t,n){var r,i,f,u,a,l,c=0,d=!1,m=!1,s=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function E(e){return c=e,a=setTimeout(O,t),d?b(e):u}function h(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=f}function O(){var e=p();if(h(e))return w(e);a=setTimeout(O,function(e){var n=t-(e-l);return m?g(n,f-(e-c)):n}(e))}function w(e){return a=void 0,s&&r?b(e):(r=i=void 0,u)}function S(){var e=p(),n=h(e);if(r=arguments,i=this,l=e,n){if(void 0===a)return E(l);if(m)return a=setTimeout(O,t),b(l)}return void 0===a&&(a=setTimeout(O,t)),u}return t=j(t)||0,y(n)&&(d=!!n.leading,f=(m="maxWait"in n)?v(j(n.maxWait)||0,t):f,s="trailing"in n?!!n.trailing:s),S.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=l=i=a=void 0},S.flush=function(){return void 0===a?u:w(p())},S}function y(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var o=u.test(e);return o||a.test(e)?l(e.slice(2),o?2:8):f.test(e)?NaN:+e}n=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var E={formElem:document.querySelector(".feedback-form")};E.formElem.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("formData"),console.log(h),h={},E.formElem.reset()})),E.formElem.addEventListener("input",n((function(e){var t=e.target.value,n=e.target.name;h[n]=t,function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}("feedback-form-state",h)}),500));var h=function(e){var t=localStorage.getItem(e);try{return JSON.parse(t)}catch(e){return t}}("feedback-form-state")||{};E.formElem.elements.email.value=(null==h?void 0:h.email)||"",E.formElem.elements.message.value=(null==h?void 0:h.message)||""}();
//# sourceMappingURL=03-feedback.e5b2ee07.js.map
