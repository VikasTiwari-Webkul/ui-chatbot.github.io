(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(7126)}])},7126:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return B}});var a=s(5893),n={src:".//_next/static/media/message-icon.fb60bf0f.png",height:50,width:52,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAVklEQVR42mMAgX/M/1hAkAEC/jGCKRj4xwTEWf8W/Jvyr/4fI1g5EJ/9t+/f4X/v/7HBBLb8e/bv/7+7/5jAJgCx5D/1f/7//MAGYAKwqn9M/5ggtgEAr7YqlktjP1UAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},l=s(7294);let r={STRING:"string"},o={POST:"POST"},i={STREAMING:"streaming"},c={PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"},d={UNABLE_TO_PROCEED:"Unable to proceed your request!"},u=e=>{let[t,s]=(0,l.useState)(null),[a,n]=(0,l.useState)(null),[r,c]=(0,l.useState)(!1);return{getResponse:async function(t){if(arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.STREAMING,t&&e){c(!0);try{let l="",r=await fetch("".concat(e),{method:o.POST,headers:{"Content-Type":"application/json"},body:(i.STREAMING,JSON.stringify({query:t}))}).catch(e=>{n({statusCode:(null==e?void 0:e.status)||500,cause:(null==e?void 0:e.cause)||{},message:a.message||d.UNABLE_TO_PROCEED})}),c=r.body.getReader();if(r.ok&&(null==c?void 0:c.read())){let e=await c.read().then(function e(t){let{done:s,value:a}=t,n=new TextDecoder().decode(a);return(l+=n,s)?l:c.read().then(e)});s(e)}l?s(l):l||(l=d.UNABLE_TO_PROCEED,n({statusCode:404,cause:{},message:l}))}catch(e){n({statusCode:(null==a?void 0:a.status)||404,cause:(null==a?void 0:a.cause)||{},message:d.UNABLE_TO_PROCEED})}}c(!1)},error:a,response:t,loading:r}};var m=()=>(0,a.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 500 500",children:(0,a.jsx)("g",{children:(0,a.jsx)("g",{children:(0,a.jsx)("polygon",{points:"0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75"})})})});function h(){return(0,a.jsxs)("div",{className:"load",children:[(0,a.jsx)("div",{className:"progress"}),(0,a.jsx)("div",{className:"progress"}),(0,a.jsx)("div",{className:"progress"})]})}function g(e){let{onSend:t,isLoading1:s,isError:n}=e,[r,o]=(0,l.useState)(""),i=e=>{e.preventDefault(),t(r),o("")};return n?"":(0,a.jsx)("div",{className:"search-form-container",children:(0,a.jsx)("div",{className:"search-form-content",children:(0,a.jsx)("form",{onSubmit:i,children:s?(0,a.jsx)("span",{className:"loader-container",children:(0,a.jsx)(h,{})}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("textarea",{autoFocus:!0,id:"chat-input",placeholder:"Send your query directly to seller",onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),i(e))},onChange:e=>{o(e.target.value)},value:r}),(0,a.jsx)("button",{type:"submit",disabled:!r.trim(),className:"".concat(r.trim()?"btn":"btn-disable"),children:(0,a.jsx)(m,{})})]})})})})}var x=()=>(0,a.jsx)("svg",{viewBox:"0 0 24 24",fill:"#505050",className:"copy-icon",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 1.25H10.944C9.106 1.25 7.65 1.25 6.511 1.403C5.339 1.561 4.39 1.893 3.641 2.641C2.893 3.39 2.561 4.339 2.403 5.511C2.25 6.651 2.25 8.106 2.25 9.944V16C2.25002 16.8934 2.56894 17.7575 3.14934 18.4367C3.72974 19.1159 4.53351 19.5657 5.416 19.705C5.553 20.469 5.818 21.121 6.348 21.652C6.95 22.254 7.708 22.512 8.608 22.634C9.475 22.75 10.578 22.75 11.945 22.75H15.055C16.422 22.75 17.525 22.75 18.392 22.634C19.292 22.512 20.05 22.254 20.652 21.652C21.254 21.05 21.512 20.292 21.634 19.392C21.75 18.525 21.75 17.422 21.75 16.055V10.945C21.75 9.578 21.75 8.475 21.634 7.608C21.512 6.708 21.254 5.95 20.652 5.348C20.121 4.818 19.469 4.553 18.705 4.416C18.5657 3.53351 18.1159 2.72974 17.4367 2.14934C16.7575 1.56894 15.8934 1.25002 15 1.25ZM17.13 4.271C16.9779 3.827 16.6909 3.44166 16.3089 3.16893C15.927 2.89619 15.4693 2.74971 15 2.75H11C9.093 2.75 7.739 2.752 6.71 2.89C5.705 3.025 5.125 3.279 4.702 3.702C4.279 4.125 4.025 4.705 3.89 5.711C3.752 6.739 3.75 8.093 3.75 10V16C3.74971 16.4693 3.89619 16.927 4.16892 17.3089C4.44166 17.6908 4.827 17.9779 5.271 18.13C5.25 17.52 5.25 16.83 5.25 16.055V10.945C5.25 9.578 5.25 8.475 5.367 7.608C5.487 6.708 5.747 5.95 6.348 5.348C6.95 4.746 7.708 4.488 8.608 4.367C9.475 4.25 10.578 4.25 11.945 4.25H15.055C15.83 4.25 16.52 4.25 17.13 4.271ZM7.408 6.41C7.685 6.133 8.073 5.953 8.808 5.854C9.562 5.753 10.564 5.751 11.999 5.751H14.999C16.434 5.751 17.435 5.753 18.191 5.854C18.925 5.953 19.313 6.134 19.59 6.41C19.867 6.687 20.047 7.075 20.146 7.81C20.247 8.564 20.249 9.566 20.249 11.001V16.001C20.249 17.436 20.247 18.437 20.146 19.193C20.047 19.927 19.866 20.315 19.59 20.592C19.313 20.869 18.925 21.049 18.19 21.148C17.435 21.249 16.434 21.251 14.999 21.251H11.999C10.564 21.251 9.562 21.249 8.807 21.148C8.073 21.049 7.685 20.868 7.408 20.592C7.131 20.315 6.951 19.927 6.852 19.192C6.751 18.437 6.749 17.436 6.749 16.001V11.001C6.749 9.566 6.751 8.564 6.852 7.809C6.951 7.075 7.132 6.687 7.408 6.41Z",className:"copy-icon"})});function p(e){return(0,a.jsx)("svg",{fill:"none",strokeWidth:1.5,stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",...e,children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"})})}var v=e=>{let{clipText:t}=e,[s,n]=(0,l.useState)(!1),r=e=>{try{n(!0),setTimeout(()=>{n(!1)},1500),window.parent.postMessage({type:"clipBoardData",clipBoardData:e},"*")}catch(e){var t;console.error("Failed to copy: ",null!==(t=null==e?void 0:e.message)&&void 0!==t?t:e)}};return(0,a.jsx)("button",{className:"copy-btn",onClick:()=>r(t),children:s?(0,a.jsx)(p,{className:"check-icon"}):(0,a.jsx)(x,{})})},j=s(8600),C=s(7437),f=s(8683),N=s(4283);let w=(0,l.memo)(e=>{let{language:t,value:s}=e;return(0,a.jsxs)("div",{className:"relative min-w-full font-sans rounded-md codeblock bg-zinc-950",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between w-full px-4 py-2 text-white rounded-t-md bg-zinc-800",children:[(0,a.jsx)("span",{className:"font-sans text-xs font-medium capitalize text-zinc-50",children:t}),(0,a.jsx)("div",{className:"flex items-center gap-x-4"})]}),(0,a.jsx)(f.Z,{language:t,style:N.vk,customStyle:{margin:0,width:"100%",background:"transparent"},codeTagProps:{style:{fontSize:"14px",fontFamily:"var(--font-mono)"}},children:s})]})});w.displayName="MessageCodeBlock";var E=s(4265);let b=(0,l.memo)(E.U,(e,t)=>e.children===t.children&&e.className===t.className),A=e=>{let{content:t}=e;return(0,a.jsx)(b,{className:"min-w-full space-y-6 prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0",remarkPlugins:[j.Z,C.Z],components:{p(e){let{children:t}=e;return(0,a.jsx)("p",{className:"mb-2 last:mb-0",children:t})},img(e){let{...t}=e;return(0,a.jsx)("img",{alt:"img",className:"max-w-[67%]",...t})},ul(e){let{children:t}=e;return(0,a.jsx)("ul",{className:"list-disc list-inside mark-down-list-padding mb-2",children:t})},ol(e){let{children:t}=e;return(0,a.jsx)("ol",{className:"list-decimal list-inside mark-down-list-padding-ol mb-2",children:t})},li(e){let{children:t}=e;return(0,a.jsx)("li",{className:"mb-2 last:mb-0",children:t})},a(e){var t,s,n,l;let{children:r,...o}=e,i=(null==o?void 0:o.hasOwnProperty("href"))?null==o?void 0:null===(l=o.href)||void 0===l?void 0:null===(n=l.split("/"))||void 0===n?void 0:null===(s=n.at(-1))||void 0===s?void 0:null===(t=s.split("."))||void 0===t?void 0:t.at(0):r;return(0,a.jsx)("a",{className:"text-blue-600 hover:underline mark-down-link ",target:"_blank",...o,children:i})},code(e){let{className:t,children:s,...n}=e,r=l.Children.toArray(s),o=r[0],i=(0,l.isValidElement)(o)?o.props.children:o;if("▍"===i)return(0,a.jsx)("span",{className:"mt-1 cursor-default animate-pulse",children:"▍"});"string"==typeof i&&(r[0]=i.replace("`▍`","▍"));let c=/language-(\w+)/.exec(t||"");return"string"!=typeof i||i.includes("\n")?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(w,{language:c&&c[1],value:String(r).replace(/\n$/,""),...n},Math.random())}):(0,a.jsx)("code",{className:t,...n,children:r})}},children:t})};function S(e){let t=String(e.getDate()).padStart(2,"0"),s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],a=e.getFullYear(),n=String(e.getHours()).padStart(2,"0"),l=String(e.getMinutes()).padStart(2,"0");return"".concat(t," ").concat(s," ").concat(a,", ").concat(n,":").concat(l)}let y=e=>e&&Object.keys(e).length>0&&e.constructor===Object;var k={src:".//_next/static/media/logo.656da4c9.png",height:40,width:40,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8klEQVR42iWPQStEYRSGT36B/AA1I5srZGaaWI3EYpTJlYXij9hZ2FnYCKkJw4JY2Cq6fUrKH5ExH93v3Oa758v0Ou6ces459bybl/5neZujmRYnU2scFJlusVnZ4aiQjS196s4qoIoyq8wrNWcLR+TMUbuPm4dcDs/6OD73uL73cnrpQZQmpEsenwXd3gAf3UFxP79+8fQSoC4QjXFoX30D8Ojc5Ti5yAHk6Nz+gEZZiCayZHff4vXdCzUYNMcwb172DnqgcTZUWU+jkaXMUsmh3HSYXHWgsrKY2VqcDpvUN9KoGjujASk1XajGnCxsDuUfYfiXnrv+fT8AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},D=s(5675),R=s.n(D);function T(e){let{error:t,answer:s,status:n,date:o,chatBotIcon:i,updateScroll:d,time:u,streamed:m,setFlagStreamed:h}=e,g=t||s,[x,p]=(0,l.useState)(0),j=(0,l.useMemo)(()=>m?g:typeof g===r.STRING&&(null==g?void 0:g.slice(0,x)),[g,m,x]);return(0,l.useEffect)(()=>{let e=setInterval(()=>{d(),p(t=>t<g.length?t+1:(clearInterval(e),t))},6);return()=>clearInterval(e)},[g]),(0,l.useEffect)(()=>{u&&g===j&&!m&&h(u)},[u,g,j,m,h]),(0,a.jsx)("div",{className:"message-container",children:(0,a.jsxs)("div",{className:"bot-message-container",children:[(0,a.jsx)(R(),{src:null!=i?i:k,alt:"Bagisto Logo"}),(0,a.jsxs)("div",{className:"bot-message-content",children:[(0,a.jsx)("div",{className:"bot-message ".concat(n===c.REJECTED&&"bot-message-error"),children:n===c.PENDING?"...":n===c.REJECTED?j:(0,a.jsx)(A,{content:j})}),(0,a.jsxs)("div",{className:"bot-info-message",children:[(0,a.jsx)(v,{clipText:g}),(0,a.jsx)("small",{children:S(o)})]})]})]})})}function O(e){let{date:t,query:s,status:n}=e,l=S(t);return(0,a.jsx)("div",{className:"message-container",children:(0,a.jsxs)("div",{className:"user-message-content",children:[(0,a.jsx)("div",{className:"user-message",children:s}),(0,a.jsxs)("div",{className:"user-info-message",children:[(0,a.jsx)("small",{children:l}),(0,a.jsx)(v,{clipText:s})]})]})})}var U=e=>{let{width:t=24,height:s=24}=e;return(0,a.jsx)("svg",{width:t,height:s,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M6.70711 5.29286C6.31658 4.90234 5.68342 4.90234 5.29289 5.29286C4.90237 5.68339 4.90237 6.31655 5.29289 6.70708L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29286Z",fill:"#F8F9FA"})})},L=e=>{let{close:t,postData:s}=e,[n,r]=(0,l.useState)(""),[o,i]=(0,l.useState)({alt:"Webkul_Store_Log",logoUrl:""});return(0,l.useEffect)(()=>{s&&(r((null==s?void 0:s.appName)||"Webkul-ChatBot"),i({alt:null==s?void 0:s.imageAlt,logoUrl:(null==s?void 0:s.logoUrl)||"Webkul_Store_Log"}))},[s]),(0,a.jsxs)("div",{className:"chat-header",children:[(0,a.jsxs)("div",{className:"chat-left-header",children:[((null==o?void 0:o.logoUrl)||k)&&(0,a.jsx)(R(),{src:(null==o?void 0:o.logoUrl)||k,id:"chatbot-logo",alt:null==o?void 0:o.alt}),(0,a.jsx)("h1",{children:n})]}),(0,a.jsx)("div",{className:"chat-right-header",children:(0,a.jsx)("button",{onClick:t,children:(0,a.jsx)(U,{})})})]})};let _=e=>{let{isWelcomeNote:t,welcomeNote:s,toggleWelcomeNote:n,clickEvent:l}=e;return t&&s&&(0,a.jsx)("div",{className:"bot-context-wrapper",children:(0,a.jsxs)("div",{className:"bot-inner-container",children:[(0,a.jsx)("span",{className:"bot-cross",children:(0,a.jsx)("span",{className:"bot-cross-icon",onClick:n,children:(0,a.jsx)(U,{width:13,height:13})})}),(0,a.jsx)("div",{className:"bot-context",onClick:l,children:(0,a.jsx)("div",{className:"bot-img",children:(0,a.jsx)("p",{children:s})})})]})})},I=e=>{let{queryStack:t,chatBotIcon:s,setFlagStreamed:n}=e,r=()=>{let e=document.getElementById("bot-container");e.scrollTop=e.scrollHeight};return(0,a.jsx)("div",{className:"message-container bot-container",children:(0,a.jsx)("div",{className:"messages",id:"bot-container",children:null==t?void 0:t.map((e,t)=>(0,a.jsxs)(l.Fragment,{children:[t>0&&(0,a.jsx)(O,{status:e.status,query:e.query,date:e.date}),e.status!==c.PENDING&&(0,a.jsx)(T,{error:e.error,answer:e.answer,status:e.status,date:e.date,time:e.time,streamed:e.streamed,chatBotIcon:s,updateScroll:r,setFlagStreamed:n},e.time)]},e.time))})})};function M(e){let{apiEndpoint:t,postData:s,buttonLogo:n,isWelcomeNote:r,setWelcomeNote:o}=e,[i,d]=(0,l.useState)(!1),[m,h]=(0,l.useState)(!1),[x,p]=(0,l.useState)([]),{getResponse:v,error:j,loading:C,response:f}=u(t);(0,l.useEffect)(()=>{t&&y(s)&&(i||d(!0))},[t,i,s]),(0,l.useEffect)(()=>{if(f&&(null==x?void 0:x.length)>0&&!C){let e={...x.at(x.length-1)};e.answer=f,e.status=c.RESOLVED;let t=[...x];t.forEach((s,a)=>{s.time===e.time&&(t[a]=e)}),p(t)}},[f,null==x?void 0:x.length,C]),(0,l.useEffect)(()=>{if(j&&!f){let e={...x.at(x.length-1)};e.answer=j.statusCode,e.status=c.REJECTED,e.error=j.message||ERROR_MSGS.UNABLE_TO_PROCEED;let t=[...x];t.forEach((s,a)=>{s.time===e.time&&(t[a]=e)}),p(t)}},[j]);let N=(0,l.useCallback)(e=>{p([...x,{query:e,answer:202,date:new Date,time:new Date().getTime(),status:c.PENDING,error:null,streamed:!1}]),v(e)});(0,l.useEffect)(()=>{i&&N("hi")},[i]);let w=()=>{o(!r),window.parent.postMessage("chatbot.welcomeNoteClose","*")},E=()=>{i&&(h(!m),m?(r&&w(),window.parent.postMessage("chatbot.formOpen","*")):window.parent.postMessage("chatbot.formClose","*"))};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"chatbot-container",children:[(0,a.jsx)(_,{isWelcomeNote:r&&i,toggleWelcomeNote:w,clickEvent:E,welcomeNote:null==s?void 0:s.welcomeNote}),(0,a.jsx)("button",{className:"open-button ".concat(i?"cursor-pointer":"cursor-none"),onClick:E,children:(0,a.jsx)(R(),{src:n,alt:"logo Image"})}),m&&(0,a.jsx)("div",{className:"chat-popup ".concat(m?"popup-show":"popup-hide"),children:(0,a.jsxs)("div",{className:"chatbot",children:[(0,a.jsx)(L,{postData:s,close:E}),(0,a.jsx)(I,{queryStack:x,chatBotIcon:null==s?void 0:s.chatBotIcon,setFlagStreamed:e=>{let t=[...x];t.forEach((s,a)=>{s.time===e&&(t[a].streamed=!0)}),p(t)}}),(0,a.jsx)(g,{isLoading1:C,onSend:N,isError:j})]})})]})})}function B(){let[e,t]=(0,l.useState)(""),[s,r]=(0,l.useState)(!0),[o,i]=(0,l.useState)(null);return(0,l.useEffect)(()=>{window.addEventListener("message",s=>{e||t(s.data.url),o||i(s.data)},!1)},[e,o]),(0,l.useEffect)(()=>{window.addEventListener("message",e=>{let t=e.data;"chatbot.welcomeNoteOpen"===t?r(!0):"chatbot.welcomeNoteClose"===t&&r(!1)},!1)}),(0,a.jsx)(M,{apiEndpoint:e,postData:o,buttonLogo:n,isWelcomeNote:s,setWelcomeNote:r})}}},function(e){e.O(0,[901,888,774,179],function(){return e(e.s=5728)}),_N_E=e.O()}]);