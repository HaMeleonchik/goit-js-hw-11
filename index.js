import{a as y,S as g,i as v}from"./assets/vendor-sgmfR4h7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();function L(o){y("https://pixabay.com/api/",{params:{key:"29412071-9345ed042e2c0766a655100be",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>{t.data.hits.length===0?(d(),u()):x(t.data.hits)}).catch(t=>console.log(t)).finally(()=>{f()})}const c=document.querySelector(".loader"),l=document.querySelector(".gallery"),n=document.querySelector("input");function b(o){o.preventDefault(),S();const t=n.value.trim();if(!t){d(),u(),f();return}L(t),n.value=""}let q=new g(".gallery a",{captionsData:"alt",captionDelay:250});function x(o){let t=o.map(({webformatURL:a,largeImageURL:s,tags:e,likes:i,views:r,comments:p,downloads:h})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${s}">
		    <img 
		      class="gallery-image" 
		      src="${a}" 
		      alt="${e}" 
	    	/>
            <div class="gallery-info">
        <div class="info-item">
            <h3 class="title">Likes</h3>
            <p class="text">${i}</p>
        </div>
        <div class="info-item">
            <h3 class="title">Views</h3>
            <p class="text">${r}</p>
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
    `).join("");l.innerHTML=t,q.refresh()}function u(){l&&(l.innerHTML="")}function d(){v.show({titleColor:"white",backgroundColor:"red",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",maxWidth:"322",position:"topRight",iconUrl:"icon/error.svg"})}function S(){c.style.display="block"}function f(){c.style.display="none"}const m=document.querySelector(".form"),w=m.querySelector("input");m.addEventListener("submit",b);w.required=!1;
//# sourceMappingURL=index.js.map
