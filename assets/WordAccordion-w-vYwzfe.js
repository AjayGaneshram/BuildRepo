import{r as e,u as r,j as t}from"./main-DItXElZY.js";const s=({currentPage:e,totalPages:r,handlePageChange:s})=>t.jsxs("ul",{className:"flex flex-wrap justify-center gap-2 m-4",children:[e>1&&t.jsx("li",{children:t.jsx("button",{onClick:()=>s(e-1),className:"px-3 py-1 font-semibold border border-red-200 rounded text-red-500 bg-red-50",children:"« முந்தைய"})}),Array.from({length:r},((e,r)=>r+1)).map((r=>t.jsx("li",{children:t.jsx("button",{onClick:()=>s(r),className:"px-3 py-1 border border-red-200 rounded "+(r===e?"bg-red-600 text-white":""),children:r})},r))),e<r&&t.jsx("li",{children:t.jsx("button",{onClick:()=>s(e+1),className:"px-3 py-1 font-semibold border rounded text-red-500 bg-red-50",children:"அடுத்து »"})})]}),a=({title:r,items:a,renderItem:n})=>{const[o,l]=e.useState(1),[d,i]=e.useState(10);e.useEffect((()=>{const e=()=>{window.innerWidth>1200?i(20):window.innerWidth>900?i(16):window.innerWidth>600?i(12):i(8)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);const c=Math.ceil(a.length/d),m=(o-1)*d,h=a.slice(m,m+d);return t.jsxs("div",{className:"mb-4",children:[t.jsx("h3",{className:"text-red-800 font-bold text-lg mb-2",children:r}),t.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4",children:h.map(n)}),c>1&&t.jsx(s,{currentPage:o,totalPages:c,handlePageChange:l})]})},n=({wordData:s,component:n})=>{const[o,l]=e.useState(""),[d,i]=e.useState({}),c=r(),m=[...s].sort(((e,r)=>e.wordName.localeCompare(r.wordName,"ta")));let h={};"book"===n?h=m.reduce(((e,r)=>{var t,s;const a=(null==(s=null==(t=r.bookNames)?void 0:t[0])?void 0:s.wordIyal)||"சொற்கள்";e[a]||(e[a]={});const n=r.wordName.charAt(0);return e[a][n]||(e[a][n]=[]),e[a][n].push(r),e}),{}):"maraiMoozhi"===n&&(h=m.reduce(((e,r)=>{var t;if(null==(t=r.maraiMoozhiNames)||t.forEach((t=>{const s=r.bookNames||[];if(0===s.length){const t="சொற்கள்",s="சொற்கள்";e[t]||(e[t]={}),e[t][s]||(e[t][s]=[]),e[t][s].push(r)}else s.forEach((t=>{const s=t.bookName||"சொற்கள்",a=t.wordIyal||"சொற்கள்";e[s]||(e[s]={}),e[s][a]||(e[s][a]=[]),e[s][a].push(r)}))})),!r.maraiMoozhiNames||0===r.maraiMoozhiNames.length){const t="சொற்கள்",s="சொற்கள்";e[t]||(e[t]={}),e[t][s]||(e[t][s]=[]),e[t][s].push(r)}return e}),{}));const u=h||{},x=Object.entries(u).map((([e,r])=>{const t=Object.entries(r).filter((([e,r])=>Array.isArray(r)?r.some((e=>e.wordName.includes(o))):Object.values(r).flat().some((e=>e.wordName.includes(o)))));return t.length>0?[e,Object.fromEntries(t)]:null})).filter(Boolean);return t.jsxs("div",{className:"w-full max-w-3xl mx-auto",children:[t.jsx("div",{className:"flex items-center mb-4 border border-red-500 rounded-lg p-2",children:t.jsx("input",{type:"text",placeholder:"சொற்களை தேடுக",value:o,onChange:e=>l(e.target.value),className:"flex-1 p-2 outline-none text-lg bg-transparent border-b-2 border-red-500"})}),x.length>0?x.map((([e,r])=>t.jsxs("div",{className:"mb-6",children:[t.jsxs("button",{onClick:()=>{return r=e,void i((e=>({...e,[r]:!e[r]})));var r},className:"w-full text-left font-bold text-lg p-3 text-red-800 rounded-lg",children:[e," ",d[e]?"《":"》"]}),d[e]&&t.jsx("div",{className:"ml-4",children:Object.entries(r).map((([e,r])=>t.jsx(a,{title:e,items:r,renderItem:({wordName:e})=>t.jsx("span",{className:"mb-4 p-2 bg-gray-100 text-center rounded-lg hover:bg-red-800 hover:text-white transition-all cursor-pointer",onClick:()=>c(`/Word-Search-App/words/${e}`),children:e})},e)))})]},e))):t.jsx("p",{className:"text-gray-500",children:"சொற்கள் கிடைக்கவில்லை."})]})};export{n as W};
