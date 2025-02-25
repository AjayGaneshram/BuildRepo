import{r as e,u as s,D as t,j as r}from"./main-DItXElZY.js";import{F as o}from"./index-BFuzHq3F.js";const l=()=>{const[o,l]=e.useState({words:[],books:[],maraiMoozhis:[]}),[a,i]=e.useState(""),[n,d]=e.useState(["words","books","maraiMoozhis"]),[c,m]=e.useState({words:[],books:[],maraiMoozhis:[]}),[h,x]=e.useState(!1),u=s(),{outputJson:g,setSearchResults:b,searchResults:p}=e.useContext(t),j=e.useRef(null);e.useEffect((()=>{const e=e=>{j.current&&!j.current.contains(e.target)&&x(!1)},s=e=>{"Escape"===e.key&&x(!1)};return document.addEventListener("mousedown",e),document.addEventListener("keydown",s),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("keydown",s)}}),[]),e.useEffect((()=>{if(g){const e={words:g.wordList.sort().map(((e,s)=>({id:s+1,word:e}))),books:g.bookList.sort().map(((e,s)=>({id:s+1,bookName:e}))),maraiMoozhis:g.maraiMoozhiList.sort().map(((e,s)=>({id:s+1,maraiMoozhiName:e})))};l(e),m(e)}}),[g]);const w=(e,s=n)=>{i(e);const t=e.toLowerCase();if(!e.trim())return void m(o);if(!o.words.length)return;const r={words:s.includes("words")?o.words.filter((e=>e.word.toLowerCase().includes(t))):[],books:s.includes("books")?o.books.filter((e=>e.bookName.toLowerCase().includes(t))):[],maraiMoozhis:s.includes("maraiMoozhis")?o.maraiMoozhis.filter((e=>e.maraiMoozhiName.toLowerCase().includes(t))):[]};m(r),b(r)},f={"சொல்":"words","நூல்":"books","மறை மொழி":"maraiMoozhis"},N=n.length>0?`${n.sort().map((e=>Object.keys(f).find((s=>f[s]===e)))).join(", ")} தேடுக`:"தேடுக";return r.jsxs("div",{className:"p-8",children:[r.jsx("div",{className:"flex gap-2",children:Object.keys(f).sort().map((e=>r.jsxs("button",{onClick:()=>(e=>{const s=n.includes(e)?n.filter((s=>s!==e)):[...n,e];d(s),w(a,s)})(f[e]),className:"flex items-center gap-1 px-3 py-1 rounded-lg text-sm "+(n.includes(f[e])?"bg-red-800 text-white font-bold":"bg-gray-200 text-gray-800"),children:[e,r.jsx("span",{className:"text-lg font-bold",children:n.includes(f[e])?"x":"+"})]},e)))}),r.jsxs("div",{ref:j,className:"relative mt-4",children:[r.jsxs("div",{className:"flex items-center gap-2 mb-4 border border-red-500 rounded-lg p-2 bg-white relative",children:[r.jsx("span",{className:"p-2 text-red-800",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M10 2a8 8 0 0 1 6.32 12.9l4.39 4.39a1 1 0 1 1-1.42 1.42l-4.39-4.39A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 4.24 10.24A6 6 0 0 0 10 4z"})})}),r.jsx("input",{type:"text",value:a,onChange:e=>w(e.target.value),placeholder:N,className:"flex-1 p-2 text-lg border-b-2 border-red-500 focus:outline-none w-full bg-white",onFocus:()=>x(!0)}),a.length>0&&r.jsx("button",{onClick:()=>{x(!1),i(""),m(o),b(c)},className:"p-2 bg-red-800 text-white rounded-full hover:bg-red-700 transition-all flex items-center justify-center",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"white",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M18.3 5.7a1 1 0 0 0-1.4-1.4L12 9.59 7.1 4.7a1 1 0 1 0-1.4 1.4L10.59 12l-4.89 4.9a1 1 0 1 0 1.4 1.4L12 14.41l4.9 4.89a1 1 0 1 0 1.4-1.4L13.41 12l4.89-4.9z"})})})]}),h&&r.jsx("div",{className:"absolute bg-white border border-red-300 rounded-lg w-full mt-2 max-h-64 overflow-y-auto z-10",children:0===c.words.length&&0===c.books.length&&0===c.maraiMoozhis.length?r.jsx("p",{className:"p-4 text-gray-500",children:"தேடல் முடிவுகள் இல்லை"}):r.jsxs(r.Fragment,{children:[n.includes("words")&&c.words.length>0&&r.jsxs("div",{className:"p-2",children:[r.jsx("h2",{className:"text-lg font-bold text-red-600",children:"சொற்கள்"}),r.jsx("ul",{children:c.words.sort().map((e=>r.jsxs("li",{className:"p-4 hover:bg-red-50 rounded-md transition flex items-center justify-between",onClick:()=>x(!1),children:[r.jsx("span",{className:"text-gray-700 font-medium",children:e.word}),r.jsx("button",{onClick:()=>{x(!1),u(`/Word-Search-App/words/${e.word}`)},className:"text-sm text-red-500 hover:text-orange-700 transition",children:"மேலும் அறிக"})]},e.id)))})]}),n.includes("books")&&c.books.length>0&&r.jsxs("div",{className:"p-2",children:[r.jsx("h2",{className:"text-lg font-bold text-red-600",children:"நூல்கள்"}),r.jsx("ul",{children:c.books.sort().map((e=>r.jsxs("li",{className:"p-4 hover:bg-red-50 rounded-md transition flex items-center justify-between",children:[r.jsx("span",{className:"text-gray-700 font-medium",children:e.bookName}),r.jsx("button",{onClick:()=>{x(!1),u(`/Word-Search-App/book/${e.bookName}`)},className:"text-sm text-red-500 hover:text-orange-700 transition",children:"மேலும் அறிக"})]},e.id)))})]}),n.includes("maraiMoozhis")&&c.maraiMoozhis.length>0&&r.jsxs("div",{className:"p-2",children:[r.jsx("h2",{className:"text-lg font-bold text-red-600",children:"மறை மொழிகள்"}),r.jsx("ul",{children:c.maraiMoozhis.sort().map((e=>r.jsxs("li",{className:"p-4 hover:bg-red-50 rounded-md transition flex items-center justify-between",children:[r.jsx("span",{className:"text-gray-700 font-medium",children:e.maraiMoozhiName}),r.jsx("button",{onClick:()=>{x(!1),u(`/Word-Search-App/maraiMozhi/${e.maraiMoozhiName}`)},className:"text-sm text-red-500 hover:text-orange-700 transition",children:"மேலும் அறிக"})]},e.id)))})]})]})})]})]})},a=({itemsPerPageOptions:s,itemsPerPage:t,setItemsPerPage:o,setCurrentPage:l})=>{const[a,i]=e.useState(!1);return r.jsxs("div",{className:"relative inline-block w-full sm:w-auto",children:[r.jsxs("button",{onClick:()=>i(!a),className:"flex justify-around p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 w-full sm:w-72 md:w-80 lg:w-96 text-center",children:[t," சொற்களாக வடி"," ",!a&&r.jsx("h1",{className:"text-red-500",children:"▼"})," ",a&&r.jsx("h1",{className:"text-red-500",children:"▲"})]}),a&&r.jsx("ul",{className:"absolute left-0 mt-4 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10",children:s.sort().map((e=>r.jsxs("li",{onClick:()=>(e=>{o(e),l(1),i(!1)})(e),className:"px-4 py-2 text-center cursor-pointer hover:bg-red-100",children:[e," சொற்களாக வடி"]},e)))})]})},i=[8,16,24,32],n=()=>{const[n,d]=e.useState([]),{outputJson:c,searchResults:m}=e.useContext(t),[h,x]=e.useState(1),[u,g]=e.useState(i[0]),b=s();e.useEffect((()=>{c&&d(c.words)}),[c]);const p=m&&(m.words.length||m.books.length||m.maraiMoozhis.length)?c.words.filter((e=>m.words.some((s=>s.word===e.wordName))||m.books.some((s=>e.books.includes(s.bookName)))||m.maraiMoozhis.some((s=>e.maraimoozhis.includes(s.maraiMoozhiName))))).sort(((e,s)=>e.wordName.localeCompare(s.wordName))):c?c.words.sort(((e,s)=>e.wordName.localeCompare(s.wordName))):[],j=Math.ceil(p.length/u),w=p.slice((h-1)*u,h*u),f=e=>{e>=1&&e<=j&&x(e)},N=e=>b(`/Word-Search-App/words/${e}`),k=({uniqueDetails:s})=>{const[t,l]=e.useState(!1),[a,i]=e.useState(!1);return r.jsxs("div",{className:"m-4 p-6 w-full max-w-sm bg-white shadow-lg rounded-lg border border-red-200 shadow-xl",children:[r.jsxs("div",{className:"flex items-center justify-between gap-2",children:[r.jsx("h1",{className:"text-xl md:text-2xl text-red-500 font-bold underline underline-offset-4 cursor-pointer",onClick:()=>N(s.wordName),children:s.wordName}),r.jsxs("span",{className:"text-red-500  cursor-pointer",onClick:()=>N(s.wordName),children:[" ",r.jsx(o,{}),"  "]})]}),r.jsxs("div",{className:"mt-4 flex flex-wrap",children:[r.jsx("b",{className:"text-gray-800",children:"பொருள் "}),r.jsx("p",{className:"break-words overflow-hidden text-ellipsis",children:s.wordNameDescription})]}),s.maraimoozhis.length>0&&r.jsxs("ul",{className:"mt-4",children:[r.jsx("b",{className:"text-gray-800",children:"மறை மொழிகள்"}),s.maraimoozhis.slice(0,t?s.maraimoozhis.length:2).sort().map(((e,s)=>r.jsx("li",{className:"list-disc ml-4 text-gray-600",children:e},s))),s.maraimoozhis.length>2&&r.jsx("button",{onClick:()=>l((e=>!e)),className:"text-blue-500 mt-2",children:t?"சுருக்குக":"மேலும் காண்க"})]}),s.books.length>0&&r.jsxs("ul",{className:"mt-4",children:[r.jsx("b",{className:"text-gray-800",children:"நூல்கள்: "}),s.books.slice(0,a?s.books.length:3).sort().map(((e,t)=>r.jsxs("span",{className:"text-gray-600",children:[e,t<s.books.length-1&&", "]},t))),s.books.length>3&&r.jsx("button",{onClick:()=>i((e=>!e)),className:"text-blue-500 mt-2",children:a?"சுருக்குக":"மேலும் காண்க"})]})]})};return r.jsx("div",{className:"bg-stone-50",children:r.jsxs("div",{className:"",children:[r.jsx("div",{className:"mb-4 p-6",children:r.jsxs("a",{className:"text-red-500 hover:text-orange-700 transition text-lg flex items-center",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),r.jsx("span",{className:"cursor-pointer",onClick:()=>{b("/Word-Search-App/home")},children:"முகப்புப்பக்கம்"})]})}),r.jsx("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"fixed bottom-6 right-6 w-8 h-8 bg-red-800 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-900 transition-all",title:"Scroll to Top",children:"↑"}),r.jsx("div",{children:r.jsx("h1",{className:"text-3xl font-bold text-center text-red-500 mb-6",children:"திரட்டு"})}),r.jsx(l,{}),r.jsxs("div",{className:"p-4",children:[r.jsxs("div",{className:"mb-4 flex flex-col sm:flex-row justify-center items-center gap-4",children:[r.jsxs("label",{className:"font-bold text-red-500",children:[p.length==n.length&&r.jsxs(r.Fragment,{children:["மொத்த சொற்கள்: ",p.length]}),p.length!=n.length&&r.jsxs(r.Fragment,{children:["தேடப்பட்ட முடிவுகள்: ",p.length]})]}),r.jsx(a,{itemsPerPageOptions:i,itemsPerPage:u,setItemsPerPage:g,setCurrentPage:x})]}),(()=>{const e=[];if(j<=5)for(let s=1;s<=j;s++)e.push(s);else{e.push(1),h>3&&e.push("...");for(let s=Math.max(2,h-1);s<=Math.min(j-1,h+1);s++)e.push(s);h<j-2&&e.push("..."),e.push(j)}return r.jsxs("ul",{className:"flex flex-wrap justify-center gap-2 m-4",children:[h>1&&r.jsx("li",{children:r.jsx("button",{onClick:()=>f(h-1),className:"px-3 py-1 font-semibold border border-red-200  rounded text-red-500 bg-red-50",children:"« முந்தைய"})}),e.sort().map(((e,s)=>r.jsx("li",{children:"..."===e?r.jsx("span",{className:"px-3 py-1",children:e}):r.jsx("button",{onClick:()=>f(e),className:"px-3 py-1 border border-red-200 rounded "+(e===h?"bg-red-600 text-white":""),children:e})},s))),h<j&&r.jsx("li",{children:r.jsx("button",{onClick:()=>f(h+1),className:"px-3 py-1 font-semibold border rounded text-red-500 bg-red-50",children:"அடுத்து »"})})]})})(),r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 justify-items-center",children:w.sort().map((e=>r.jsx(k,{uniqueDetails:e},e.wordName)))})]})]})})};export{n as default};
