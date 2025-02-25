import{j as e,r,a as s,u as t,D as a}from"./main-DItXElZY.js";import{F as o}from"./index-BFuzHq3F.js";const n=({currentPage:r,totalPages:s,handlePageChange:t})=>{const a=[];for(let e=1;e<=s;e++)a.push(e);return e.jsxs("ul",{className:"flex flex-wrap justify-center gap-2 m-4",children:[r>1&&e.jsx("li",{children:e.jsx("button",{onClick:()=>t(r-1),className:"px-3 py-1 font-semibold border border-red-200 rounded text-red-500 bg-red-50",children:"« முந்தைய"})}),a.map((s=>e.jsx("li",{children:e.jsx("button",{onClick:()=>t(s),className:"px-3 py-1 border border-red-200 rounded "+(s===r?"bg-red-600 text-white":""),children:s})},s))),r<s&&e.jsx("li",{children:e.jsx("button",{onClick:()=>t(r+1),className:"px-3 py-1 font-semibold border rounded text-red-500 bg-red-50",children:"அடுத்து »"})})]})},l=({title:s,items:t,renderItem:a,itemsPerPage:o=4,layout:l})=>{const[i,d]=r.useState(1),c=Math.ceil(t.length/o),m=(i-1)*o,x=t.slice(m,m+o).sort();return e.jsxs("div",{className:"mb-8",children:[e.jsx("h2",{className:"text-2xl font-bold text-red-600 mb-4 pb-2 text-center underline underline-offset-1",children:s}),"row"===l?e.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:x.map(a).sort()}):e.jsx("ul",{className:"divide-y divide-gray-300",children:x.map(a).sort()}),c>1&&e.jsx(n,{currentPage:i,totalPages:c,handlePageChange:d})]})},i=({wordDetails:r,handleNavigate:s,maraimoozhiHandleNavigate:t})=>e.jsxs("div",{className:"border-b-2 border-red-200 mb-8 p-4",children:[r.books.length>0&&e.jsx(l,{title:"நூல்கள்",items:r.books.sort(),layout:"row",renderItem:(r,t)=>e.jsxs("li",{className:"flex items-center justify-center p-3  rounded-lg hover:bg-red-50 transition cursor-pointer gap-2",onClick:()=>s(r.bookName),children:[r.bookName," ",e.jsxs("span",{className:"text-red-500",children:["  ",e.jsx(o,{})]})]},t)}),r.maraimoozhis.length>0&&e.jsx(l,{title:"மறை மொழிகள்",items:r.maraimoozhis.sort(),renderItem:(r,s)=>e.jsxs("li",{className:"flex items-center justify-center p-3 rounded-lg hover:bg-red-50 transition cursor-pointer gap-2",onClick:()=>t(r.maraiMoozhiName),children:[r.maraiMoozhiName," ",e.jsxs("span",{className:"text-red-500",children:["  ",e.jsx(o,{})]})]},s)}),r.youtubeNames.length>0&&e.jsx(l,{title:"உரைகள்",items:r.youtubeNames.sort(),renderItem:(r,s)=>e.jsx("li",{className:"flex items-center justify-center p-3 rounded-lg hover:bg-red-50 transition gap-2",children:e.jsxs("a",{href:r.youTubeURL,target:"_blank",rel:"noopener noreferrer",className:"hover:text-orange-700  flex items-center gap-2",children:[r.youtubeName," ",e.jsxs("span",{className:"text-red-500",children:["  ",e.jsx(o,{})]})]})},s)})]}),d=()=>{const[o,n]=r.useState([]),{wordName:l}=s(),d=decodeURIComponent(l),c=t(),{outputJson:m}=r.useContext(a);r.useEffect((()=>{(async()=>{n(m.eachWord[d])})()}),[]);return e.jsx("div",{children:e.jsxs("div",{className:"p-6 max-w-4xl mx-auto bg-gray-50 min-h-screen",children:[e.jsx("button",{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},className:"fixed bottom-6 right-6 w-8 h-8 bg-red-800 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-900 transition-all",title:"Scroll to Top",children:"↑"}),e.jsx("div",{className:"mb-4",children:e.jsxs("a",{className:"text-red-500 hover:text-orange-700 transition text-lg flex items-center",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),e.jsx("span",{className:"cursor-pointer",onClick:()=>{c("/Word-Search-App/home")},children:"முகப்புப்பக்கம்"})]})}),0!=o.length&&e.jsxs("div",{children:[e.jsxs("div",{className:"mb-8 text-center",children:[e.jsx("h1",{className:"text-4xl font-extrabold text-red-500 underline",children:o.wordName}),e.jsxs("p",{className:"text-gray-700 mt-4 text-lg",children:[e.jsx("b",{className:"text-red-600",children:"பொருள்:"})," ",o.wordNameDescription]})]}),e.jsx(i,{wordDetails:o,handleNavigate:e=>{c(`/Word-Search-App/book/${e}`)},maraimoozhiHandleNavigate:e=>{c(`/Word-Search-App/maraiMozhi/${e}`)}})]})]})})};export{d as default};
