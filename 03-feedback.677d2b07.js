function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var o,r,i,u,a,f,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function T(e){return c=e,a=setTimeout(O,t),l?b(e):u}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function O(){var e=v();if(S(e))return j(e);a=setTimeout(O,function(e){var n=t-(e-f);return s?m(n,i-(e-c)):n}(e))}function j(e){return a=void 0,g&&o?b(e):(o=r=void 0,u)}function h(){var e=v(),n=S(e);if(o=arguments,r=this,f=e,n){if(void 0===a)return T(f);if(s)return a=setTimeout(O,t),b(f)}return void 0===a&&(a=setTimeout(O,t)),u}return t=y(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=f=r=a=void 0},h.flush=function(){return void 0===a?u:j(v())},h}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form"),T=document.querySelector('[name="email"]'),S=document.querySelector('[name="message"]');console.log(S);let O={};b.addEventListener("input",e(t)((function(e){O[e.target.name]=e.target.value,localStorage.setItem("STORAGE_DATA",JSON.stringify(O))}),500)),b.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("STORAGE_DATA"),console.log(O)}));const j=localStorage.getItem("STORAGE_DATA"),h=JSON.parse(j);j&&(O=h,T.value=h.email,S.value=h.message);
//# sourceMappingURL=03-feedback.677d2b07.js.map