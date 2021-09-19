document.querySelector('button.Get').addEventListener('click',()=>{
let all =`<li class="web-ponto_sports_events-event_item">
<a href="${document.querySelector('input.Link').value}">
<div class="web-ponto_sports_events-event_mask">
<div class="event_mask_inner">
<div class="h3 web-ponto_sports_events-event_mask_inner_text ">
شاهد المباراة </div>
 </div>
</div>
<div class="event_inner">
<div class="team-aria team-first">
<div class="web-ponto-team_logo">
<img src="${document.querySelector('input.fareq1').value}" class="imgclub" alt="${document.querySelector('input.asm1').value}" width="100" height="100" /> </div>
<div class="web-ponto_sports_events-team_title">${document.querySelector('input.asm1').value}</div>
</div>
<div class="event_title_wrapper">
<div class="events-team_score numb">${document.querySelector('input.Natejaa1').value}</div>
<div class="event_status_inner_coming">
<div class="none-class">${document.querySelector('input.Hour').value}</div>
</div>
<div class="events-team_score numb">${document.querySelector('input.Natejaa2').value}</div>
</div>
<div class="team-aria team-second">
<div class="web-ponto-team_logo">
<img src="${document.querySelector('input.fareq2').value}" class="imgclub" alt="${document.querySelector('input.asm2').value}" width="100" height="100" /> </div>
<div class="h2 web-ponto_sports_events-team_title">${document.querySelector('input.asm2').value}</div>
</div>
</div>
<div class="events-info">
<span class="mic"><i aria-hidden="true" class="fa fa-microphone"></i> ${document.querySelector('input.Almsia').value}</span>
<span class="tv hidden-xs hidden-sm"><i aria-hidden="true" class="fa fa-television">
</i> ${document.querySelector('input.Alqnah').value}</span>
<span class="cup"><i aria-hidden="true" class="fa fa-trophy"></i> ${document.querySelector('input.Aldwry').value}</span>
</div>
</a></li>` 

document.querySelector('.Code').innerHTML=all;
