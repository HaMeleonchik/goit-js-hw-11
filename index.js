import{S as y,i as g,a as v}from"./assets/vendor-sgmfR4h7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const f=document.querySelector(".loader"),n=document.querySelector(".gallery");let L=new y(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){let r=o.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:s,comments:p,downloads:h})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${a}">
		    <img 
		      class="gallery-image" 
		      src="${i}" 
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
    `).join("");n.innerHTML=r,L.refresh()}function l(){n&&(n.innerHTML="")}function u(){g.show({titleColor:"white",backgroundColor:"red",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",maxWidth:"322",position:"topRight",iconUrl:"icon/error.svg"})}function x(){f.style.display="block"}function d(){f.style.display="none"}function q(o){return v("https://pixabay.com/api/",{params:{key:"29412071-9345ed042e2c0766a655100be",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits)}const m=document.querySelector(".form"),c=m.querySelector("input");c.required=!1;m.addEventListener("submit",w);function w(o){o.preventDefault(),x(),l();const r=c.value.trim();if(r===""){u(),l(),d();return}q(r).then(i=>{i.length===0?(u(),l()):b(i)}).catch(i=>console.log(i)).finally(()=>{d(),c.value=""})}
//# sourceMappingURL=index.js.map
