import{a as y,S as b,i}from"./assets/vendor-f67ecabd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&d(f)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const S="https://pixabay.com/api",v="41411708-a2ea7fc9ae3454ee0834f0813",a="hidden";y.defaults.baseURL=S;const l={message:"Sorry, there are no images matching your search query. Please try again!",color:"#EF4040",position:"topRight",icon:"icon-octagon",iconText:"",timeout:5e3,titleColor:"#fff",messageColor:"#fff",iconColor:"#fff"},h={key:v,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:20},P=document.querySelector(".form"),g=document.querySelector("ul.gallery"),u=document.querySelector(".loader"),c=document.querySelector("#show-more");let n=1,m=1,p="";const q=new b(".gallery a",{sourceAttr:"data-source",captionsData:"alt",captionDelay:250}),L=s=>{g.insertAdjacentHTML("beforeend",s.map(e=>`<li class="gallery-item">
                  <a class="gallery-link" href="${e.largeImageURL}" data-source="${e.largeImageURL}">
                    <img class="gallery-image" src="${e.webformatURL}"  alt="${e.tags}"/>
                  </a>
                </li>`).join("")),q.refresh()},x=(s,e)=>{const r=e*(s-1),d=g.children[r].getBoundingClientRect();window.scrollBy({top:d.y,left:0,behavior:"smooth"})},w=async(s,e)=>(await y.get("/",{params:{...h,q:s,page:e}})).data,E=async s=>{s.preventDefault();const e=s.target.elements.search.value.trim();s.target.elements.search.value="",c.classList.add(a),u.classList.remove(a),g.innerHTML="",n=1;try{const r=await w(e,n);if(!r.totalHits){i.show(l);return}L(r.hits),n++,p=e,m=Math.ceil(r.totalHits/h.per_page),m>1?c.classList.remove(a):i.show({...l,message:"We're sorry, but you've reached the end of search results."})}catch(r){i.show({...l,message:r.message})}finally{u.classList.add(a)}},H=async()=>{u.classList.remove(a),c.classList.add(a);try{const s=await w(p,n);L(s.hits),x(n,h.per_page),n++}catch(s){i.show({...l,message:s.message})}finally{m>=n?c.classList.add(a):i.show({...l,message:"We're sorry, but you've reached the end of search results."}),u.classList.add(a)}};P.addEventListener("submit",E);c.addEventListener("click",H);
//# sourceMappingURL=commonHelpers.js.map
