import{a as y,S as g,i as v}from"./assets/vendor-sgmfR4h7.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function L(r){y("https://pixabay.com/api/",{params:{key:"29412071-9345ed042e2c0766a655100be",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(i=>i.data.hits)}const f=document.querySelector(".loader"),l=document.querySelector(".gallery"),n=document.querySelector("input");function b(r){r.preventDefault(),S();const i=n.value.trim();if(!i){u(),c(),d();return}L(i).then(o=>{o.data.hits.length===0?(u(),c()):x(o.data.hits)}).catch(o=>console.log(o)).finally(()=>{d(),n.value=""})}let q=new g(".gallery a",{captionsData:"alt",captionDelay:250});function x(r){let i=r.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:s,comments:p,downloads:h})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${a}">
		    <img 
		      class="gallery-image" 
		      src="${o}" 
		      alt="${e}" 
	    	/>
            <div class="gallery-info">
        <div class="info-item">
            <h3 class="title">Likes</h3>
            <p class="text">${t}</p>
        </div>
        <div class="info-item">
            <h3 class="title">Views</h3>
            <p class="text">${s}</p>
        </div>
        <div class="info-item">
            <h3 class="title">Comments</h3>
            <p class="text">${p}</p>
        </div>
        <div class="info-item">
            <h3 class="title">Downloads</h3>
            <p class="text">${h}</p>
        </div>
    </div>
	</a>
    </li>
    `).join("");l.innerHTML=i,q.refresh()}function c(){l&&(l.innerHTML="")}function u(){v.show({titleColor:"white",backgroundColor:"red",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",maxWidth:"322",position:"topRight",iconUrl:"icon/error.svg"})}function S(){f.style.display="block"}function d(){f.style.display="none"}const m=document.querySelector(".form"),w=m.querySelector("input");m.addEventListener("submit",b);w.required=!1;
//# sourceMappingURL=index.js.map
