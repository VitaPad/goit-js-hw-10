import"./assets/styles-9bf54c80.js";import{f as d,i as y}from"./assets/vendor-77e16229.js";const c=document.querySelector("button"),l=document.getElementById("datetime-picker");document.querySelector(".timer");const S=document.querySelector("[data-days]"),D=document.querySelector("[data-hours]"),E=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]");let n;c.addEventListener("click",T);function T(){d(l,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){n=o[0],n>new Date?c.disabled=!0:(c.disabled=!1,y.error({title:"Error",message:"Please choose a date in the future"}))}});const t=d.parseDate(l.value);t&&(n=t,a(),setInterval(a,1e3))}function a(){const e=new Date,t=n.getTime()-e.getTime(),{days:o,hours:u,minutes:i,seconds:s}=q(t);S.textContent=r(o),D.textContent=r(u),E.textContent=r(i),p.textContent=r(s)}function q(e){const s=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:m,minutes:f,seconds:h}}function r(e){return`${e}`}n&&setInterval(a,1e3);
//# sourceMappingURL=commonHelpers.js.map