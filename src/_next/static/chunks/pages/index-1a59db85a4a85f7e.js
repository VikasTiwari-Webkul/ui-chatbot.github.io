(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(6246)}])},6246:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return L}});var a=s(5893),n={src:".//_next/static/media/message-icon.fb60bf0f.png",height:50,width:52,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAVklEQVR42mMAgX/M/1hAkAEC/jGCKRj4xwTEWf8W/Jvyr/4fI1g5EJ/9t+/f4X/v/7HBBLb8e/bv/7+7/5jAJgCx5D/1f/7//MAGYAKwqn9M/5ggtgEAr7YqlktjP1UAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},l=s(7294);let r={POST:"POST"},i={STREAMING:"streaming"},o={PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"},c={UNABLE_TO_PROCEED:"Unable to proceed your request!"},d=e=>{let[t,s]=(0,l.useState)(null),[a,n]=(0,l.useState)(null),[o,d]=(0,l.useState)(!1);return{getResponse:async function(t){if(arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.STREAMING,t&&e){d(!0);try{let l="",o=await fetch("".concat(e),{method:r.POST,headers:{"Content-Type":"application/json"},body:(i.STREAMING,JSON.stringify({query:t}))}).catch(e=>{n({statusCode:(null==e?void 0:e.status)||500,cause:(null==e?void 0:e.cause)||{},message:a.message||c.UNABLE_TO_PROCEED})}),d=o.body.getReader();if(o.ok&&(null==d?void 0:d.read())){let e=await d.read().then(function e(t){let{done:s,value:a}=t,n=new TextDecoder().decode(a);return(l+=n,s)?l:d.read().then(e)});s(e)}l?s(l):l||(l=c.UNABLE_TO_PROCEED,n({statusCode:404,cause:{},message:l}))}catch(e){n({statusCode:(null==a?void 0:a.status)||404,cause:(null==a?void 0:a.cause)||{},message:c.UNABLE_TO_PROCEED})}}d(!1)},error:a,response:t,loading:o}};var u=()=>(0,a.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 500 500",children:(0,a.jsx)("g",{children:(0,a.jsx)("g",{children:(0,a.jsx)("polygon",{points:"0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75"})})})});function m(){return(0,a.jsxs)("div",{className:"load",children:[(0,a.jsx)("div",{className:"progress"}),(0,a.jsx)("div",{className:"progress"}),(0,a.jsx)("div",{className:"progress"})]})}function h(e){let{onSend:t,isLoading1:s,isError:n}=e,[r,i]=(0,l.useState)(""),o=e=>{e.preventDefault(),t(r),i("")};return n?"":(0,a.jsx)("div",{className:"search-form-container",children:(0,a.jsx)("div",{className:"search-form-content",children:(0,a.jsx)("form",{onSubmit:o,children:s?(0,a.jsx)("span",{className:"loader-container",children:(0,a.jsx)(m,{})}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("textarea",{autoFocus:!0,id:"chat-input",placeholder:"Send your query directly to seller",onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),o(e))},onChange:e=>{i(e.target.value)},value:r}),(0,a.jsx)("button",{type:"submit",disabled:!r.trim(),className:"".concat(r.trim()?"btn":"btn-disable"),children:(0,a.jsx)(u,{})})]})})})})}var g=()=>(0,a.jsx)("svg",{viewBox:"0 0 24 24",fill:"#505050",className:"copy-icon",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 1.25H10.944C9.106 1.25 7.65 1.25 6.511 1.403C5.339 1.561 4.39 1.893 3.641 2.641C2.893 3.39 2.561 4.339 2.403 5.511C2.25 6.651 2.25 8.106 2.25 9.944V16C2.25002 16.8934 2.56894 17.7575 3.14934 18.4367C3.72974 19.1159 4.53351 19.5657 5.416 19.705C5.553 20.469 5.818 21.121 6.348 21.652C6.95 22.254 7.708 22.512 8.608 22.634C9.475 22.75 10.578 22.75 11.945 22.75H15.055C16.422 22.75 17.525 22.75 18.392 22.634C19.292 22.512 20.05 22.254 20.652 21.652C21.254 21.05 21.512 20.292 21.634 19.392C21.75 18.525 21.75 17.422 21.75 16.055V10.945C21.75 9.578 21.75 8.475 21.634 7.608C21.512 6.708 21.254 5.95 20.652 5.348C20.121 4.818 19.469 4.553 18.705 4.416C18.5657 3.53351 18.1159 2.72974 17.4367 2.14934C16.7575 1.56894 15.8934 1.25002 15 1.25ZM17.13 4.271C16.9779 3.827 16.6909 3.44166 16.3089 3.16893C15.927 2.89619 15.4693 2.74971 15 2.75H11C9.093 2.75 7.739 2.752 6.71 2.89C5.705 3.025 5.125 3.279 4.702 3.702C4.279 4.125 4.025 4.705 3.89 5.711C3.752 6.739 3.75 8.093 3.75 10V16C3.74971 16.4693 3.89619 16.927 4.16892 17.3089C4.44166 17.6908 4.827 17.9779 5.271 18.13C5.25 17.52 5.25 16.83 5.25 16.055V10.945C5.25 9.578 5.25 8.475 5.367 7.608C5.487 6.708 5.747 5.95 6.348 5.348C6.95 4.746 7.708 4.488 8.608 4.367C9.475 4.25 10.578 4.25 11.945 4.25H15.055C15.83 4.25 16.52 4.25 17.13 4.271ZM7.408 6.41C7.685 6.133 8.073 5.953 8.808 5.854C9.562 5.753 10.564 5.751 11.999 5.751H14.999C16.434 5.751 17.435 5.753 18.191 5.854C18.925 5.953 19.313 6.134 19.59 6.41C19.867 6.687 20.047 7.075 20.146 7.81C20.247 8.564 20.249 9.566 20.249 11.001V16.001C20.249 17.436 20.247 18.437 20.146 19.193C20.047 19.927 19.866 20.315 19.59 20.592C19.313 20.869 18.925 21.049 18.19 21.148C17.435 21.249 16.434 21.251 14.999 21.251H11.999C10.564 21.251 9.562 21.249 8.807 21.148C8.073 21.049 7.685 20.868 7.408 20.592C7.131 20.315 6.951 19.927 6.852 19.192C6.751 18.437 6.749 17.436 6.749 16.001V11.001C6.749 9.566 6.751 8.564 6.852 7.809C6.951 7.075 7.132 6.687 7.408 6.41Z",className:"copy-icon"})});function p(e){return(0,a.jsx)("svg",{fill:"none",strokeWidth:1.5,stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",...e,children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"})})}var x=e=>{let{clipText:t}=e,[s,n]=(0,l.useState)(!1),r=e=>{try{n(!0),setTimeout(()=>{n(!1)},1500),window.parent.postMessage({type:"clipBoardData",clipBoardData:e},"*")}catch(e){var t;console.error("Failed to copy: ",null!==(t=null==e?void 0:e.message)&&void 0!==t?t:e)}};return(0,a.jsx)("button",{className:"copy-btn",onClick:()=>r(t),children:s?(0,a.jsx)(p,{className:"check-icon"}):(0,a.jsx)(g,{})})},v=s(8600),j=s(7437),C=s(8683),f=s(4283);let A=(0,l.memo)(e=>{let{language:t,value:s}=e;return(0,a.jsxs)("div",{className:"relative min-w-full font-sans rounded-md codeblock bg-zinc-950",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between w-full px-4 py-2 text-white rounded-t-md bg-zinc-800",children:[(0,a.jsx)("span",{className:"font-sans text-xs font-medium capitalize text-zinc-50",children:t}),(0,a.jsx)("div",{className:"flex items-center gap-x-4"})]}),(0,a.jsx)(C.Z,{language:t,style:f.vk,customStyle:{margin:0,width:"100%",background:"transparent"},codeTagProps:{style:{fontSize:"14px",fontFamily:"var(--font-mono)"}},children:s})]})});A.displayName="MessageCodeBlock";var N=s(4265);let E=(0,l.memo)(N.U,(e,t)=>e.children===t.children&&e.className===t.className),w=e=>{let{content:t}=e;return(0,a.jsx)(E,{className:"min-w-full space-y-6 prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0",remarkPlugins:[v.Z,j.Z],components:{p(e){let{children:t}=e;return(0,a.jsx)("p",{className:"mb-2 last:mb-0",children:t})},img(e){let{...t}=e;return(0,a.jsx)("img",{alt:"img",className:"max-w-[67%]",...t})},ul(e){let{children:t}=e;return(0,a.jsx)("ul",{className:"list-disc list-inside mark-down-list-padding mb-2",children:t})},ol(e){let{children:t}=e;return(0,a.jsx)("ol",{className:"list-decimal list-inside mark-down-list-padding-ol mb-2",children:t})},li(e){let{children:t}=e;return(0,a.jsx)("li",{className:"mb-2 last:mb-0",children:t})},a(e){var t,s,n,l;let{children:r,...i}=e,o=(null==i?void 0:i.hasOwnProperty("href"))?null==i?void 0:null===(l=i.href)||void 0===l?void 0:null===(n=l.split("/"))||void 0===n?void 0:null===(s=n.at(-1))||void 0===s?void 0:null===(t=s.split("."))||void 0===t?void 0:t.at(0):r;return(0,a.jsx)("a",{className:"text-blue-600 hover:underline mark-down-link ",target:"_blank",...i,children:o})},code(e){let{className:t,children:s,...n}=e,r=l.Children.toArray(s),i=r[0],o=(0,l.isValidElement)(i)?i.props.children:i;if("▍"===o)return(0,a.jsx)("span",{className:"mt-1 cursor-default animate-pulse",children:"▍"});"string"==typeof o&&(r[0]=o.replace("`▍`","▍"));let c=/language-(\w+)/.exec(t||"");return"string"!=typeof o||o.includes("\n")?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(A,{language:c&&c[1],value:String(r).replace(/\n$/,""),...n},Math.random())}):(0,a.jsx)("code",{className:t,...n,children:r})}},children:t})};function b(e){let t=String(e.getDate()).padStart(2,"0"),s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],a=e.getFullYear(),n=String(e.getHours()).padStart(2,"0"),l=String(e.getMinutes()).padStart(2,"0");return"".concat(t," ").concat(s," ").concat(a,", ").concat(n,":").concat(l)}var S={src:".//_next/static/media/logo.656da4c9.png",height:40,width:40,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8klEQVR42iWPQStEYRSGT36B/AA1I5srZGaaWI3EYpTJlYXij9hZ2FnYCKkJw4JY2Cq6fUrKH5ExH93v3Oa758v0Ou6ces459bybl/5neZujmRYnU2scFJlusVnZ4aiQjS196s4qoIoyq8wrNWcLR+TMUbuPm4dcDs/6OD73uL73cnrpQZQmpEsenwXd3gAf3UFxP79+8fQSoC4QjXFoX30D8Ojc5Ti5yAHk6Nz+gEZZiCayZHff4vXdCzUYNMcwb172DnqgcTZUWU+jkaXMUsmh3HSYXHWgsrKY2VqcDpvUN9KoGjujASk1XajGnCxsDuUfYfiXnrv+fT8AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},y=s(5675),k=s.n(y);function D(e){let{error:t,answer:s,status:n,date:r,chatBotIcon:i,updateScroll:c}=e,d=t||s,[u,m]=(0,l.useState)(0),h=(0,l.useMemo)(()=>"string"==typeof d&&(null==d?void 0:d.slice(0,u)),[d,u]);return(0,l.useEffect)(()=>{let e=setInterval(()=>{c(),m(t=>t<d.length?t+1:(clearInterval(e),t))},6);return()=>clearInterval(e)},[d,c]),(0,a.jsx)("div",{className:"message-container",children:(0,a.jsxs)("div",{className:"bot-message-container",children:[(0,a.jsx)(k(),{src:null!=i?i:S,alt:"Bagisto Logo"}),(0,a.jsxs)("div",{className:"bot-message-content",children:[(0,a.jsx)("div",{className:"bot-message ".concat(n===o.REJECTED&&"bot-message-error"),children:n===o.PENDING?"...":n===o.REJECTED?h:(0,a.jsx)(w,{content:h})}),(0,a.jsxs)("div",{className:"bot-info-message",children:[(0,a.jsx)(x,{clipText:d}),(0,a.jsx)("small",{children:b(r)})]})]})]})})}function R(e){let{date:t,query:s,status:n}=e,l=b(t);return(0,a.jsx)("div",{className:"message-container",children:(0,a.jsxs)("div",{className:"user-message-content",children:[(0,a.jsx)("div",{className:"user-message",children:s}),(0,a.jsxs)("div",{className:"user-info-message",children:[(0,a.jsx)("small",{children:l}),(0,a.jsx)(x,{clipText:s})]})]})})}var T=()=>(0,a.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M6.70711 5.29286C6.31658 4.90234 5.68342 4.90234 5.29289 5.29286C4.90237 5.68339 4.90237 6.31655 5.29289 6.70708L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29286Z",fill:"#F8F9FA"})}),U=e=>{let{close:t,postData:s}=e,[n,r]=(0,l.useState)(""),[i,o]=(0,l.useState)({alt:"Webkul_Store_Log",logoUrl:""});return(0,l.useEffect)(()=>{s&&(r((null==s?void 0:s.appName)||"Webkul-ChatBot"),o({alt:null==s?void 0:s.imageAlt,logoUrl:(null==s?void 0:s.logoUrl)||"Webkul_Store_Log"}))},[s]),(0,a.jsxs)("div",{className:"chat-header",children:[(0,a.jsxs)("div",{className:"chat-left-header",children:[((null==i?void 0:i.logoUrl)||S)&&(0,a.jsx)(k(),{src:(null==i?void 0:i.logoUrl)||S,id:"chatbot-logo",alt:null==i?void 0:i.alt}),(0,a.jsx)("h1",{children:n})]}),(0,a.jsx)("div",{className:"chat-right-header",children:(0,a.jsx)("button",{onClick:t,children:(0,a.jsx)(T,{})})})]})};let O=e=>{let{queryStack:t,chatBotIcon:s}=e,n=()=>{let e=document.getElementById("bot-container");e.scrollTop=e.scrollHeight};return(0,a.jsx)("div",{className:"message-container bot-container",children:(0,a.jsx)("div",{className:"messages",id:"bot-container",children:null==t?void 0:t.map((e,t)=>(0,a.jsxs)(l.Fragment,{children:[t>0&&(0,a.jsx)(R,{status:e.status,query:e.query,date:e.date}),e.status!==o.PENDING&&(0,a.jsx)(D,{error:e.error,answer:e.answer,status:e.status,date:e.date,chatBotIcon:s,updateScroll:n},e.time)]},e.time))})})};function _(e){let{apiEndpoint:t,postData:s,buttonLogo:n}=e,[r,i]=(0,l.useState)(!1),[c,u]=(0,l.useState)(!1),[m,g]=(0,l.useState)([]),{getResponse:p,error:x,loading:v,response:j}=d(t);(0,l.useEffect)(()=>{if(j&&(null==m?void 0:m.length)>0&&!v){r||i(!0);let e={...m.at(m.length-1)};e.answer=j,e.status=o.RESOLVED;let t=[...m];t.forEach((s,a)=>{s.time===e.time&&(t[a]=e)}),g(t)}},[j,null==m?void 0:m.length,v]),(0,l.useEffect)(()=>{if(x&&!j){let e={...m.at(m.length-1)};e.answer=x.statusCode,e.status=o.REJECTED,e.error=x.message||ERROR_MSGS.UNABLE_TO_PROCEED;let t=[...m];t.forEach((s,a)=>{s.time===e.time&&(t[a]=e)}),g(t)}},[x,j]);let C=(0,l.useCallback)(e=>{g([...m,{query:e,answer:202,date:new Date,time:new Date().getTime(),status:o.PENDING,error:null}]),p(e)});(0,l.useEffect)(()=>{!r&&t&&C("hi")},[r,t]);let f=()=>{u(!c),c?window.parent.postMessage("chatbot.formOpen","*"):window.parent.postMessage("chatbot.formClose","*")};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"chatbot-container",children:[(0,a.jsx)("button",{className:"open-button",onClick:f,children:(0,a.jsx)(k(),{src:n,alt:"logo Image"})}),(0,a.jsx)("div",{className:"chat-popup ".concat(c?"popup-show":"popup-hide"),children:(0,a.jsxs)("div",{className:"chatbot",children:[(0,a.jsx)(U,{postData:s,close:f}),(0,a.jsx)(O,{queryStack:m,chatBotIcon:null==s?void 0:s.chatBotIcon}),(0,a.jsx)(h,{isLoading1:v,onSend:C,isError:x})]})})]})})}function L(){let[e,t]=(0,l.useState)("http://192.168.15.253:1111/chat"),[s,r]=(0,l.useState)(null);return(0,l.useEffect)(()=>{window.addEventListener("message",s=>{e||t(s.data.url),r(s.data)},!1)},[e]),(0,a.jsx)(_,{apiEndpoint:e,postData:s,buttonLogo:n})}}},function(e){e.O(0,[901,888,774,179],function(){return e(e.s=5728)}),_N_E=e.O()}]);