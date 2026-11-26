/* FreshCart - all page behaviour (Group F). Runs fully in the browser, no server. */
const P=[
// Daily
{id:'d1',t:'daily',c:'Dairy & Eggs',bn:'তাজা দুধ',en:'Fresh milk',u:'1 L',p:95,e:'🥛'},
{id:'d2',t:'daily',c:'Dairy & Eggs',bn:'ডিম',en:'Eggs',u:'dozen',p:150,e:'🥚'},
{id:'d3',t:'daily',c:'Dairy & Eggs',bn:'দই',en:'Curd',u:'500 g',p:110,e:'🍶'},
{id:'d4',t:'daily',c:'Bakery',bn:'পাউরুটি',en:'Bread loaf',u:'400 g',p:60,e:'🍞'},
{id:'d5',t:'daily',c:'Vegetables',bn:'আলু',en:'Potato',u:'1 kg',p:50,e:'🥔'},
{id:'d6',t:'daily',c:'Vegetables',bn:'পেঁয়াজ',en:'Onion',u:'1 kg',p:70,e:'🧅'},
{id:'d7',t:'daily',c:'Vegetables',bn:'টমেটো',en:'Tomato',u:'500 g',p:45,e:'🍅'},
{id:'d8',t:'daily',c:'Vegetables',bn:'কাঁচা মরিচ',en:'Green chili',u:'100 g',p:15,e:'🌶️'},
{id:'d9',t:'daily',c:'Fruits',bn:'কলা',en:'Bananas',u:'dozen',p:90,e:'🍌'},
{id:'d10',t:'daily',c:'Fruits',bn:'পেয়ারা',en:'Guava',u:'1 kg',p:120,e:'🍈'},
{id:'d11',t:'daily',c:'Fish & Meat',bn:'রুই মাছ',en:'Rui fish',u:'1 kg',p:420,e:'🐟'},
{id:'d12',t:'daily',c:'Fish & Meat',bn:'ব্রয়লার মুরগি',en:'Broiler chicken',u:'1 kg',p:230,e:'🍗'},
// Monthly
{id:'m1',t:'monthly',c:'Grains',bn:'মিনিকেট চাল',en:'Miniket rice',u:'25 kg sack',p:1700,e:'🍚'},
{id:'m2',t:'monthly',c:'Grains',bn:'আটা',en:'Wheat flour',u:'5 kg',p:290,e:'🌾'},
{id:'m3',t:'monthly',c:'Pulses & Oil',bn:'মসুর ডাল',en:'Red lentils',u:'5 kg',p:700,e:'🫘'},
{id:'m4',t:'monthly',c:'Pulses & Oil',bn:'সয়াবিন তেল',en:'Soybean oil',u:'5 L',p:880,e:'🛢️'},
{id:'m5',t:'monthly',c:'Pantry',bn:'চিনি',en:'Sugar',u:'2 kg',p:250,e:'🧂'},
{id:'m6',t:'monthly',c:'Pantry',bn:'লবণ',en:'Salt',u:'2 kg',p:80,e:'🧂'},
{id:'m7',t:'monthly',c:'Pantry',bn:'চা পাতা',en:'Tea leaves',u:'400 g',p:260,e:'🍵'},
{id:'m8',t:'monthly',c:'Spices',bn:'হলুদ গুঁড়া',en:'Turmeric powder',u:'500 g',p:210,e:'🟡'},
{id:'m9',t:'monthly',c:'Spices',bn:'জিরা',en:'Cumin',u:'200 g',p:140,e:'🌿'},
{id:'m10',t:'monthly',c:'Household',bn:'ডিটারজেন্ট পাউডার',en:'Detergent powder',u:'2 kg',p:330,e:'🧺'},
{id:'m11',t:'monthly',c:'Household',bn:'সাবান (৪টি)',en:'Bath soap, 4 pack',u:'pack',p:220,e:'🧼'},
{id:'m12',t:'monthly',c:'Household',bn:'টিস্যু বক্স',en:'Tissue box',u:'6 boxes',p:300,e:'📦'},
{id:'d13',t:'daily',c:'Noodles & Snacks',bn:'ইনস্ট্যান্ট নুডলস',en:'Instant noodles',u:'4 packs',p:85,e:'🍜'},
{id:'d14',t:'daily',c:'Noodles & Snacks',bn:'কাপ নুডলস',en:'Cup noodles',u:'1 cup',p:70,e:'🥡'},
{id:'d15',t:'daily',c:'Frozen Foods',bn:'ফ্রোজেন পরোটা',en:'Frozen paratha',u:'20 pcs',p:260,e:'🫓'},
{id:'d16',t:'daily',c:'Frozen Foods',bn:'চিকেন নাগেটস',en:'Chicken nuggets',u:'500 g',p:380,e:'🍗'},
{id:'d17',t:'daily',c:'Frozen Foods',bn:'ফ্রোজেন সমুচা',en:'Frozen samosa',u:'20 pcs',p:240,e:'🥟'},
{id:'d18',t:'daily',c:'Frozen Foods',bn:'ফিশ ফিঙ্গার',en:'Fish fingers',u:'400 g',p:420,e:'🐟'},
{id:'m13',t:'monthly',c:'Noodles & Snacks',bn:'নুডলস ফ্যামিলি প্যাক',en:'Noodles family pack',u:'24 packs',p:480,e:'🍜'},
{id:'m14',t:'monthly',c:'Frozen Foods',bn:'ফ্রোজেন মিক্স সবজি',en:'Frozen mixed vegetables',u:'2 kg',p:360,e:'🥦'},
{id:'m15',t:'monthly',c:'Personal Care',bn:'রেজার (৫টি)',en:'Razors',u:'5 pack',p:150,e:'🪒'},
{id:'m16',t:'monthly',c:'Personal Care',bn:'শেভিং ফোম',en:'Shaving foam',u:'200 ml',p:290,e:'🧴'},
{id:'m17',t:'monthly',c:'Personal Care',bn:'বডি স্প্রে',en:'Body spray',u:'150 ml',p:340,e:'💨'},
{id:'m18',t:'monthly',c:'Personal Care',bn:'রোল-অন ডিওডোরেন্ট',en:'Roll-on deodorant',u:'50 ml',p:210,e:'🧴'},
{id:'m19',t:'monthly',c:'Household',bn:'মশা মারার স্প্রে',en:'Insect killer spray',u:'400 ml',p:320,e:'🦟'},
{id:'m20',t:'monthly',c:'Household',bn:'এয়ার ফ্রেশনার',en:'Air freshener',u:'300 ml',p:280,e:'🌺'},
{id:'m21',t:'monthly',c:'Household',bn:'মশার কয়েল',en:'Mosquito coils',u:'10 coils',p:90,e:'🌀'},
{id:'d19',t:'daily',c:'Vegetables',bn:'শসা',en:'Cucumber',u:'1 kg',p:60,e:'🥒'},
{id:'d20',t:'daily',c:'Vegetables',bn:'গাজর',en:'Carrot',u:'500 g',p:40,e:'🥕'},
{id:'d21',t:'daily',c:'Vegetables',bn:'পালং শাক',en:'Spinach',u:'1 bunch',p:30,e:'🥬'},
{id:'d22',t:'daily',c:'Vegetables',bn:'বেগুন',en:'Brinjal',u:'1 kg',p:80,e:'🍆'},
{id:'d23',t:'daily',c:'Vegetables',bn:'রসুন',en:'Garlic',u:'250 g',p:55,e:'🧄'},
{id:'d24',t:'daily',c:'Vegetables',bn:'লেবু',en:'Lemon',u:'4 pcs',p:40,e:'🍋'},
{id:'d25',t:'daily',c:'Fruits',bn:'আপেল',en:'Apple',u:'1 kg',p:260,e:'🍎'},
{id:'d26',t:'daily',c:'Fruits',bn:'কমলা',en:'Orange',u:'1 kg',p:180,e:'🍊'},
{id:'d27',t:'daily',c:'Fruits',bn:'তরমুজ',en:'Watermelon',u:'1 pc',p:250,e:'🍉'},
{id:'d28',t:'daily',c:'Fruits',bn:'পেঁপে',en:'Papaya',u:'1 kg',p:60,e:'🥭'},
{id:'d29',t:'daily',c:'Dairy & Eggs',bn:'মাখন',en:'Butter',u:'200 g',p:260,e:'🧈'},
{id:'d30',t:'daily',c:'Dairy & Eggs',bn:'চিজ স্লাইস',en:'Cheese slices',u:'10 pcs',p:220,e:'🧀'},
{id:'d31',t:'daily',c:'Bakery',bn:'বিস্কুট',en:'Biscuits',u:'1 pack',p:40,e:'🍪'},
{id:'d32',t:'daily',c:'Bakery',bn:'বান রুটি',en:'Bun',u:'4 pcs',p:50,e:'🥖'},
{id:'d33',t:'daily',c:'Fish & Meat',bn:'ইলিশ মাছ',en:'Hilsa fish',u:'1 kg',p:1500,e:'🐟'},
{id:'d34',t:'daily',c:'Fish & Meat',bn:'গরুর মাংস',en:'Beef',u:'1 kg',p:800,e:'🥩'},
{id:'d35',t:'daily',c:'Fish & Meat',bn:'চিংড়ি',en:'Prawn',u:'500 g',p:650,e:'🦐'},
{id:'d36',t:'daily',c:'Drinks',bn:'খাওয়ার পানি',en:'Drinking water',u:'2 L',p:40,e:'💧'},
{id:'d37',t:'daily',c:'Drinks',bn:'কমলার জুস',en:'Orange juice',u:'1 L',p:150,e:'🧃'},
{id:'d38',t:'daily',c:'Drinks',bn:'স্ন্যাক্স ড্রিংক',en:'Soft drink',u:'1.25 L',p:85,e:'🥤'},
{id:'m22',t:'monthly',c:'Pantry',bn:'ঘি',en:'Ghee',u:'500 g',p:780,e:'🧈'},
{id:'m23',t:'monthly',c:'Pulses & Oil',bn:'সরিষার তেল',en:'Mustard oil',u:'1 L',p:230,e:'🛢️'},
{id:'m24',t:'monthly',c:'Pulses & Oil',bn:'ছোলা',en:'Chickpeas',u:'2 kg',p:240,e:'🫘'},
{id:'m25',t:'monthly',c:'Pulses & Oil',bn:'মুগ ডাল',en:'Moong dal',u:'2 kg',p:300,e:'🫘'},
{id:'m26',t:'monthly',c:'Grains',bn:'পোলাওয়ের চাল',en:'Polao rice',u:'5 kg',p:750,e:'🍚'},
{id:'m27',t:'monthly',c:'Pantry',bn:'গুঁড়া দুধ',en:'Powdered milk',u:'1 kg',p:780,e:'🥛'},
{id:'m28',t:'monthly',c:'Pantry',bn:'কফি',en:'Coffee',u:'100 g',p:320,e:'☕'},
{id:'m29',t:'monthly',c:'Pantry',bn:'মধু',en:'Honey',u:'500 g',p:550,e:'🍯'},
{id:'m30',t:'monthly',c:'Pantry',bn:'কর্নফ্লেক্স',en:'Cornflakes',u:'500 g',p:380,e:'🥣'},
{id:'m31',t:'monthly',c:'Pantry',bn:'নারিকেল তেল',en:'Coconut oil',u:'250 ml',p:220,e:'🥥'},
{id:'m32',t:'monthly',c:'Household',bn:'ডিশওয়াশ লিকুইড',en:'Dishwash liquid',u:'500 ml',p:130,e:'🧽'},
{id:'m33',t:'monthly',c:'Household',bn:'টয়লেট ক্লিনার',en:'Toilet cleaner',u:'500 ml',p:170,e:'🪣'},
{id:'m34',t:'monthly',c:'Household',bn:'ময়লার ব্যাগ',en:'Garbage bags',u:'30 pcs',p:120,e:'🗑️'},
{id:'m35',t:'monthly',c:'Personal Care',bn:'টুথপেস্ট',en:'Toothpaste',u:'150 g',p:130,e:'🪥'},
{id:'m36',t:'monthly',c:'Personal Care',bn:'শ্যাম্পু',en:'Shampoo',u:'340 ml',p:380,e:'🧴'},
{id:'m37',t:'monthly',c:'Personal Care',bn:'হ্যান্ডওয়াশ',en:'Hand wash',u:'250 ml',p:120,e:'🧼'}
];
const $=s=>document.querySelector(s), tk=n=>'৳'+n.toLocaleString('en-IN');
let tab='daily',cat='All',q='',cart={},promo=null,shopView=null;
const PROMOS={FRESH10:{label:'10% off',need:'',f:(d,m)=>Math.round((d+m)*.1)},MONTH150:{label:'৳150 off',need:'MONTH150 needs ৳2,000 of monthly items.',f:(d,m)=>m>=2000?150:0}};
const STOCK={d2:4,d11:3,d3:5,m7:2};
const COL={'Dairy & Eggs':'#2563eb','Bakery':'#b45309','Vegetables':'#15803d','Fruits':'#be123c','Fish & Meat':'#b91c1c','Grains':'#a16207','Pulses & Oil':'#92400e','Pantry':'#6d28d9','Spices':'#c2410c','Household':'#0e7490','Noodles & Snacks':'#c2410c','Frozen Foods':'#0369a1','Personal Care':'#be185d','Drinks':'#0f766e'};
// Product photos: built-in products look for images/<id>.jpg (see the photo checklist).
// If a photo is missing the emoji shows instead.
P.forEach(x=>{if(!x.img)x.img='images/'+x.id+'.jpg'});
document.addEventListener('load',e=>{if(e.target.tagName==='IMG')e.target.parentNode.classList.add('photo')},true);
document.addEventListener('error',e=>{if(e.target.tagName==='IMG')e.target.remove()},true);
const stock=id=>{const x=byId(id);return x.s!=null?x.s:(STOCK[id]??(x.t==='daily'?20:15))};
try{const s=JSON.parse(localStorage.getItem('freshcart-cart')||'{}');if(s&&typeof s==='object')cart=s}catch(e){}
const save=()=>{try{localStorage.setItem('freshcart-cart',JSON.stringify(cart))}catch(e){}};
const byId=id=>P.find(x=>x.id===id);

function renderCats(){
  if(tab==='shops'){$('#cats').innerHTML='';return}
  const cs=['All',...(P.some(x=>x.t===tab&&x.p<100)?['Under ৳100']:[]),...new Set(P.filter(x=>x.t===tab).map(x=>x.c))];
  $('#cats').innerHTML=cs.map(c=>`<button class="chip" aria-pressed="${c===cat}" data-cat="${c}">${c}</button>`).join('');
}
function renderGrid(){
  const s=q.trim().toLowerCase();
  if(tab==='shops'&&!shopView){$('#note').textContent='Search shops by name, area or product, or browse them all.';$('#grid').className='grid';$('#grid').innerHTML=shopCards(s);return}
  const list=shopView?P.filter(x=>x.sid===shopView&&(!s||(x.bn+x.en+x.c).toLowerCase().includes(s))):P.filter(x=>x.t===tab&&(cat==='All'||(cat==='Under ৳100'?x.p<100:x.c===cat))&&(!s||(x.bn+x.en+x.c+shopName(x)).toLowerCase().includes(s)));
  $('#note').innerHTML=shopView?shopHeader():tab==='daily'?'Order by 9 PM for next-morning delivery between 7 and 9 AM.':'Monthly packs deliver once, on the date you choose at checkout.';
  $('#grid').className='grid '+tab;
  $('#grid').innerHTML=shopStrip(s)+(list.length?list.map(x=>{
    const n=cart[x.id]||0;
    return `<article class="card" style="--c:${COL[x.c]||'#1f6b3a'}"><div class="emo" aria-hidden="true">${x.e}${x.img?`<img src="${att(x.img)}" alt="${att(x.en)}" loading="lazy">`:''}</div><h3>${lang==='bn'?x.bn:x.en}</h3><div class="en">${lang==='bn'?x.en:x.bn}</div>
    <div class="price">${x.mrp?`<s style="font-weight:400;color:var(--mute);font-size:.9rem">${tk(x.mrp)}</s> `:''}${tk(x.p)} <small>/ ${x.u}</small></div>${stock(x.id)<=5?`<div class="badge">${stock(x.id)?'Only '+stock(x.id)+' left':'Sold out'}</div>`:''}${x.sid&&sellers[x.sid]?`<div class="en">🏪 ${sellers[x.sid].shop}${sellers[x.sid].ret&&sellers[x.sid].ret.days?' · '+sellers[x.sid].ret.days+'-day returns':' · No returns'}</div>`:''}
    ${n?`<div class="qty"><button data-dec="${x.id}" aria-label="Remove one ${x.en}">−</button><span>${n}</span><button data-inc="${x.id}" aria-label="Add one ${x.en}">+</button></div>`
       :`<button class="add" data-inc="${x.id}" ${stock(x.id)<1?'disabled':''}>${stock(x.id)<1?'Out of stock':'Add to cart'}</button>`}</article>`}).join('')
    :'<p class="empty">No items match your search. Try a shorter word or pick “All”.</p>');
}
function totals(){
  let d=0,m=0,c=0;
  for(const id in cart){const x=byId(id);if(!x)continue;const v=x.p*cart[id];c+=cart[id];x.t==='daily'?d+=v:m+=v}
  const sub=d+m,disc=promo?Math.min(PROMOS[promo].f(d,m),sub):0,net=sub-disc,vat=Math.round(net*.05),fee=sub===0||net>=1500?0:50;
  return{d,m,c,disc,vat,fee,total:net+vat+fee};
}
function renderCart(){
  const T=totals();
  $('#cnt').textContent=T.c;$('#sd').textContent=tk(T.d);$('#sm').textContent=tk(T.m);
  $('#sf').textContent=T.fee?tk(T.fee):'Free';$('#st').textContent=tk(T.total);
  $('#sdisc').textContent=T.disc?'−'+tk(T.disc):'৳0';$('#svat').textContent=tk(T.vat);
  $('#perr').textContent=promo?(T.disc?promo+' applied: '+PROMOS[promo].label:PROMOS[promo].need):'';
  $('#gifts').innerHTML=giftInfo().map(g=>g.ok?'🎁 Free gift from '+att(g.shop)+': '+att(g.text):'Add '+tk(g.min-g.tot)+' more from '+att(g.shop)+' for a free gift: '+att(g.text)).join('<br>');
  $('#checkout').disabled=!T.c;
  const row=x=>`<div class="line"><span aria-hidden="true" style="font-size:1.6rem">${x.e}</span><div><div>${lang==='bn'?x.bn:x.en}</div><small style="color:var(--mute)">${tk(x.p)} × ${cart[x.id]} · ${x.u}</small></div>
   <div><div class="qty"><button data-dec="${x.id}" aria-label="Remove one ${x.en}">−</button><span>${cart[x.id]}</span><button data-inc="${x.id}" aria-label="Add one ${x.en}">+</button></div></div></div>`;
  const items=t=>P.filter(x=>x.t===t&&cart[x.id]).map(row).join('');
  const dh=items('daily'),mh=items('monthly');
  $('#lines').innerHTML=T.c?(dh?`<div class="sec">Daily Essentials</div>${dh}`:'')+(mh?`<div class="sec m">Monthly Bazar</div>${mh}`:''):'<p class="empty">Your cart is empty. Add something from Daily or Monthly.</p>';
}
function change(id,d){
  const n=Math.min((cart[id]||0)+d,stock(id));
  if(d>0&&n===(cart[id]||0))toast('Only '+stock(id)+' in stock');
  if(n<=0)delete cart[id];else cart[id]=n;
  save();renderGrid();renderCart();
}
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove('on'),1800)}
function drawer(on){$('#drawer').classList.toggle('on',on);$('#scrim').classList.toggle('on',on);$('#drawer').setAttribute('aria-hidden',!on);if(on)$('#close').focus()}

document.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.dataset.inc){change(b.dataset.inc,1);if((cart[b.dataset.inc]||0)===1)toast('Added to cart')}
  else if(b.dataset.dec)change(b.dataset.dec,-1);
  else if(b.dataset.promo)applyPromo(b.dataset.promo);
  else if(b.dataset.role)authModal(b.dataset.mode,b.dataset.role);
  else if(b.dataset.st){sTab=b.dataset.st;renderSeller()}
  else if(b.dataset.shop)openShop(b.dataset.shop);
  else if(b.dataset.back){shopView=null;renderCats();renderGrid()}
  else if(b.dataset.hp)helpModal(b.dataset.hp);
  else if(b.dataset.lang){setLang(b.dataset.lang);closeModal()}
  else if(b.dataset.go){const g=b.dataset.go.split('|');tab=g[0];cat=g[1];shopView=null;q='';$('#q').value='';document.querySelectorAll('.tab').forEach(t=>t.setAttribute('aria-selected',t.dataset.tab===tab));renderCats();renderGrid();$('#cats').scrollIntoView({behavior:'smooth'})}
  else if(b.dataset.tab){tab=b.dataset.tab;cat='All';shopView=null;document.querySelectorAll('.tab').forEach(t=>t.setAttribute('aria-selected',t===b));renderCats();renderGrid()}
  else if(b.dataset.cat){cat=b.dataset.cat;renderCats();renderGrid()}
});
$('#q').addEventListener('input',e=>{q=e.target.value;renderGrid()});
$('#cartBtn').onclick=()=>drawer(true);$('#close').onclick=()=>drawer(false);$('#scrim').onclick=()=>drawer(false);
$('#clear').onclick=()=>{cart={};save();renderGrid();renderCart()};
$('#theme').onclick=()=>{const r=document.documentElement,dark=getComputedStyle(r).colorScheme==='dark';r.dataset.theme=dark?'light':'dark'};
document.addEventListener('keydown',e=>{if(e.key==='Escape'){drawer(false);closeModal()}});

function closeModal(){$('#modal').classList.remove('on')}
$('#mscrim').onclick=closeModal;
$('#checkout').onclick=()=>{
  const T=totals(),hasD=T.d>0,hasM=T.m>0;
  const mn=new Date(Date.now()+864e5).toISOString().slice(0,10);
  $('#mbox').innerHTML=`<h2>Delivery details</h2>
  <label>Full name<input id="fn" autocomplete="name" value="${att(me&&users[me].name)}"></label>
  <label>Phone (01XXXXXXXXX)<input id="fp" inputmode="tel" autocomplete="tel" value="${att(me&&users[me].phone)}"></label>
  <label>Address<input id="fa" autocomplete="street-address" value="${att((me&&users[me].addr)||loc.area)}"></label>
  ${hasM?`<label>Monthly bazar delivery date<input id="fd" type="date" min="${mn}" value="${mn}"></label>`:''}
  ${hasD?`<label>Daily delivery slot<select id="fslot"><option>7–9 AM</option><option>5–7 PM</option></select></label>`:''}
  <label>Payment<select id="fpay"><option>Cash on delivery</option><option>bKash on delivery</option></select></label>
  <div class="err" id="err" role="alert"></div>
  <button class="go" id="confirm">Confirm order · ${tk(T.total)}</button>
  <button class="link" id="cancel" style="margin-top:8px">Back to cart</button>`;
  $('#modal').classList.add('on');$('#fn').focus();
  $('#cancel').onclick=closeModal;
  $('#confirm').onclick=()=>{
    const n=$('#fn').value.trim(),p=$('#fp').value.trim(),a=$('#fa').value.trim();
    if(!n||!a){$('#err').textContent='Enter your name and delivery address.';return}
    if(!/^01[3-9]\d{8}$/.test(p)){$('#err').textContent='Enter a valid Bangladeshi mobile number, like 01712345678.';return}
    const id='FC-'+Date.now().toString().slice(-6),date=hasM?$('#fd').value:null;
    const o={gifts:earnedGifts(),ph:p,id,n,a,date,slot:hasD?$('#fslot').value:null,pay:$('#fpay').value,promo,T,at:new Date().toLocaleString('en-GB'),lines:P.filter(x=>cart[x.id]).map(x=>[x.bn,cart[x.id],x.p,x.sid||''])};
    o.u=me;hist.unshift(o);try{localStorage.setItem('freshcart-orders',JSON.stringify(hist.slice(0,20)))}catch(e){}
    for(const k in cart){const x=byId(k);if(x&&x.s!=null)x.s=Math.max(0,x.s-cart[k])}saveProds();
    cart={};promo=null;save();renderGrid();renderCart();drawer(false);ratingModal(o);
  };
};
let hist=[];try{hist=JSON.parse(localStorage.getItem('freshcart-orders')||'[]')}catch(e){}
function applyPromo(c){c=c.trim().toUpperCase();if(!PROMOS[c]){$('#perr').textContent='Code not valid. Try FRESH10 or MONTH150.';return}promo=c;renderCart();toast(c+' applied to your cart')}
$('#applyPromo').onclick=()=>applyPromo($('#promo').value);
function receipt(o,isNew){
  const e=s=>String(s).replace(/[<>&]/g,'');
  $('#mbox').innerHTML=`<h2>${isNew?'Order placed ✔':'Receipt'}</h2><p>FreshCart · <b>${o.id}</b><br>${o.at}</p><p>${e(o.n)}, ${e(o.a)}</p>
  <table class="rc">${o.lines.map(l=>`<tr><td>${l[0]} × ${l[1]}</td><td>${tk(l[1]*l[2])}</td></tr>`).join('')}
  <tr><td>Subtotal</td><td>${tk(o.T.d+o.T.m)}</td></tr>${o.T.disc?`<tr><td>Promo ${o.promo}</td><td>−${tk(o.T.disc)}</td></tr>`:''}
  <tr><td>VAT (5%)</td><td>${tk(o.T.vat)}</td></tr><tr><td>Delivery</td><td>${o.T.fee?tk(o.T.fee):'Free'}</td></tr>
  <tr><td><b>Total</b></td><td><b>${tk(o.T.total)}</b></td></tr></table>
  <p>${o.slot?'Daily items: tomorrow, '+o.slot+'. ':''}${o.date?'Monthly bazar: '+o.date+'. ':''}Pay by ${o.pay.toLowerCase()}.</p>
  ${(o.gifts||[]).map(g=>`<p>🎁 Free gift: ${e(g)}</p>`).join('')}
  <button class="go" id="prt">Print receipt</button><button class="link" id="done" style="margin-top:8px">Keep shopping</button>`;
  $('#modal').classList.add('on');$('#prt').onclick=()=>window.print();$('#done').onclick=closeModal;
}
$('#ordersBtn').onclick=()=>{
  $('#mbox').innerHTML=`<h2>Order history</h2>${mineOrders().length?mineOrders().map(([o,i])=>`<button class="ord" data-o="${i}"><span>${o.id}</span><span>${tk(o.T.total)}</span></button>`).join(''):'<p>No orders yet. Place an order and it will appear here.</p>'}<button class="link" id="done" style="margin-top:12px">Close</button>`;
  $('#modal').classList.add('on');$('#done').onclick=closeModal;
  document.querySelectorAll('[data-o]').forEach(b=>b.onclick=()=>receipt(hist[b.dataset.o]));
};
const mineOrders=()=>hist.map((o,i)=>[o,i]).filter(([o])=>(o.u||null)===me);
let users={},me=null;
try{users=JSON.parse(localStorage.getItem('freshcart-users')||'{}');me=localStorage.getItem('freshcart-session')}catch(e){}
if(me&&!users[me])me=null;
const att=s=>String(s||'').replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';');
const saveU=()=>{try{localStorage.setItem('freshcart-users',JSON.stringify(users))}catch(e){}};
const sha=async s=>[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)))].map(b=>b.toString(16).padStart(2,'0')).join('');
function paintAcct(){document.body.classList.toggle('sm',!!sme);$('#acctBtn').textContent=sme?'Sign out':me?users[me].name.split(' ')[0]:'Sign in';if(sme)renderSeller()}
function setMe(v){me=v;if(v&&sme)setSme(null);try{v?localStorage.setItem('freshcart-session',v):localStorage.removeItem('freshcart-session')}catch(e){}paintAcct()}
const okPhone=p=>/^01[3-9]\d{8}$/.test(p);
function authModal(mode,role){role==='s'?sellerAuth(mode):custAuth(mode)}
const roleTabs=(r,up)=>`<div style='display:flex;gap:6px;margin-bottom:12px'><button class='chip' aria-pressed='${r==='c'}' data-role='c' data-mode='${up?'up':'in'}'>Customer</button><button class='chip' aria-pressed='${r==='s'}' data-role='s' data-mode='${up?'up':'in'}'>Seller</button></div>`;
function custAuth(mode){
  const up=mode==='up';
  $('#mbox').innerHTML=`${roleTabs('c',up)}<h2>${up?'Create account':'Sign in'}</h2><p style="color:var(--mute);margin:4px 0 0">${up?'Save your details once and skip typing them at checkout.':'Welcome back.'}</p>
  ${up?'<label>Full name<input id="an" autocomplete="name"></label><label>Phone (01XXXXXXXXX)<input id="ap" inputmode="tel" autocomplete="tel"></label><label>Delivery address<input id="aa" autocomplete="street-address"></label>':''}
  <label>Email<input id="ae" type="email" autocomplete="email"></label>
  <label>Password (6+ characters)<input id="aw" type="password" autocomplete="${up?'new-password':'current-password'}"></label>
  <div class="err" id="err" role="alert"></div>
  <button class="go" id="asub">${up?'Create account':'Sign in'}</button>
  <button class="link" id="aswap" style="margin-top:8px">${up?'Already have an account? Sign in':'New here? Create an account'}</button>`;
  $('#modal').classList.add('on');$(up?'#an':'#ae').focus();
  $('#aswap').onclick=()=>authModal(up?'in':'up');
  $('#asub').onclick=async()=>{
    const em=$('#ae').value.trim().toLowerCase(),pw=$('#aw').value,er=m=>{$('#err').textContent=m};
    if(!/^\S+@\S+\.\S+$/.test(em))return er('Enter a valid email, like name@example.com.');
    if(pw.length<6)return er('Password needs at least 6 characters.');
    if(up){
      const n=$('#an').value.trim(),p=$('#ap').value.trim(),a=$('#aa').value.trim();
      if(!n||!a)return er('Enter your name and delivery address.');
      if(!okPhone(p))return er('Enter a valid Bangladeshi mobile number, like 01712345678.');
      if(users[em])return er('This email already has an account. Sign in instead.');
      const salt=Math.random().toString(36).slice(2);
      users[em]={name:n,phone:p,addr:a,salt,hash:await sha(salt+pw)};saveU();setMe(em);toast('Account created');closeModal();
    }else{
      const u=users[em];
      if(!u||u.hash!==await sha(u.salt+pw))return er('Email or password is incorrect.');
      setMe(em);toast('Signed in');closeModal();
    }
  };
}
function profileModal(){
  const u=users[me];
  $('#mbox').innerHTML=`<h2>Your profile</h2><p style="color:var(--mute);margin:4px 0 0">${att(me)}</p>
  <label>Full name<input id="pn" value="${att(u.name)}"></label><label>Phone<input id="pp" value="${att(u.phone)}"></label><label>Delivery address<input id="pa" value="${att(u.addr)}"></label>
  <div class="err" id="err" role="alert"></div>
  <button class="go" id="psave">Save details</button><button class="link" id="pout" style="margin-top:8px">Sign out</button>`;
  $('#modal').classList.add('on');
  $('#psave').onclick=()=>{
    const n=$('#pn').value.trim(),p=$('#pp').value.trim(),a=$('#pa').value.trim();
    if(!n||!a)return $('#err').textContent='Enter your name and delivery address.';
    if(!okPhone(p))return $('#err').textContent='Enter a valid Bangladeshi mobile number, like 01712345678.';
    Object.assign(u,{name:n,phone:p,addr:a});saveU();paintAcct();toast('Profile saved');closeModal();
  };
  $('#pout').onclick=()=>{setMe(null);toast('Signed out');closeModal()};
}
$('#acctBtn').onclick=()=>{if(sme){setSme(null);toast('Signed out')}else if(me)profileModal();else authModal('in')};
const san=s=>String(s).replace(/[<>'"`]/g,'');
let sellers={},prods=[],sme=null,sTab='profile';
try{sellers=JSON.parse(localStorage.getItem('freshcart-sellers')||'{}');prods=JSON.parse(localStorage.getItem('freshcart-products')||'[]');sme=localStorage.getItem('freshcart-seller')}catch(e){}
if(sme&&!sellers[sme])sme=null;
P.push(...prods);
const saveS=()=>{try{localStorage.setItem('freshcart-sellers',JSON.stringify(sellers))}catch(e){}};
const saveProds=()=>{try{localStorage.setItem('freshcart-products',JSON.stringify(prods))}catch(e){}};
function setSme(v){sme=v;if(v){me=null;try{localStorage.removeItem('freshcart-session')}catch(e){}}try{v?localStorage.setItem('freshcart-seller',v):localStorage.removeItem('freshcart-seller')}catch(e){}paintAcct();renderCats();renderGrid();renderCart()}
function syncPromos(){
  for(const k in PROMOS)if(PROMOS[k].sid)delete PROMOS[k];
  for(const s in sellers)(sellers[s].promos||[]).forEach(p=>{
    PROMOS[p.code]={sid:s,label:(p.type==='pct'?p.val+'%':tk(p.val))+' off at '+sellers[s].shop,need:p.code+' needs '+tk(p.min)+' of items from '+sellers[s].shop+'.',
    f:()=>{let t=0;for(const id in cart){const x=byId(id);if(x&&x.sid===s)t+=x.p*cart[id]}return t>0&&t>=p.min?(p.type==='pct'?Math.round(t*p.val/100):p.val):0}}});
  if(promo&&!PROMOS[promo])promo=null;
}
syncPromos();
function giftInfo(){const out=[];for(const s in sellers)(sellers[s].gifts||[]).forEach(g=>{let tot=0;for(const id in cart){const x=byId(id);if(x&&x.sid===s)tot+=x.p*cart[id]}if(tot>0)out.push({shop:sellers[s].shop,text:g.text,min:g.min,tot,ok:tot>=g.min})});return out}
const earnedGifts=()=>giftInfo().filter(g=>g.ok).map(g=>g.text+' (from '+g.shop+')');
function sellerAuth(mode){
  const up=mode==='up';
  $('#mbox').innerHTML=`${roleTabs('s',up)}<h2>${up?'Open your shop':'Seller sign in'}</h2>
  ${up?`<p style='color:var(--mute);margin:4px 0 0'>We ask for a trade license and NID to confirm real shops.</p>
  <label>Owner full name<input id='sn' autocomplete='name'></label><label>Shop name<input id='ss'></label>
  <label>Shop category<select id='sc'><option>Grocery</option><option>Vegetables & Fruits</option><option>Fish & Meat</option><option>Dairy & Bakery</option><option>Household</option><option>Other</option></select></label>
  <label>Phone (01XXXXXXXXX)<input id='sp' inputmode='tel'></label><label>Shop address<input id='sa'></label>
  <label>Trade license number<input id='stl' placeholder='e.g. TRAD-123456'></label>
  <label>National ID (NID) number<input id='snid' inputmode='numeric' placeholder='10, 13 or 17 digits'></label>`:''}
  <label>Email<input id='se' type='email' autocomplete='email'></label>
  <label>Password (6+ characters)<input id='sw' type='password' autocomplete='${up?'new-password':'current-password'}'></label>
  ${up?`<label style='display:flex;gap:8px;align-items:flex-start;font-weight:400'><input id='sok' type='checkbox' style='width:auto;margin-top:5px'>I confirm these details are true and I agree to the FreshCart seller terms.</label>`:''}
  <div class='err' id='err' role='alert'></div>
  <button class='go' id='asub'>${up?'Create seller account':'Sign in as seller'}</button>
  <button class='link' id='aswap' style='margin-top:8px'>${up?'Already a seller? Sign in':'New seller? Open a shop'}</button>`;
  $('#modal').classList.add('on');
  $('#aswap').onclick=()=>sellerAuth(up?'in':'up');
  $('#asub').onclick=async()=>{
    const V=id=>$('#'+id).value.trim(),er=m=>{$('#err').textContent=m},em=V('se').toLowerCase(),pw=$('#sw').value;
    if(!/^\S+@\S+\.\S+$/.test(em))return er('Enter a valid email, like shop@example.com.');
    if(pw.length<6)return er('Password needs at least 6 characters.');
    if(!up){const s=sellers[em];if(!s||s.hash!==await sha(s.salt+pw))return er('Email or password is incorrect.');sTab='profile';setSme(em);toast('Welcome back, '+s.shop);closeModal();return}
    const o=V('sn'),sh=V('ss'),ph=V('sp'),ad=V('sa'),tl=V('stl').toUpperCase(),nid=V('snid');
    if(!o||!sh||!ad)return er('Enter owner name, shop name and shop address.');
    if(!okPhone(ph))return er('Enter a valid Bangladeshi mobile number, like 01712345678.');
    if(!/^[A-Z0-9-]{6,25}$/.test(tl))return er('Trade license number should be 6 to 25 letters, digits or dashes.');
    if(!/^(\d{10}|\d{13}|\d{17})$/.test(nid))return er('NID must be 10, 13 or 17 digits.');
    if(!$('#sok').checked)return er('Please confirm the details are true.');
    if(sellers[em])return er('This email already has a seller account. Sign in instead.');
    if(Object.values(sellers).some(s=>s.tl===tl||s.nid===nid))return er('This trade license or NID is already registered.');
    const salt=Math.random().toString(36).slice(2);
    sellers[em]={owner:san(o),shop:san(sh),cat:$('#sc').value,phone:ph,addr:san(ad),tl,nid,salt,hash:await sha(salt+pw),status:'Verification submitted (demo)',pf:{emoji:'🏪',desc:'',hours:'',area:''},promos:[],gifts:[],ret:{days:7,remedy:'Refund or replacement',note:''}};
    saveS();sTab='profile';setSme(em);toast('Shop created');closeModal();
  };
}
// Reads a photo chosen by the seller and shrinks it so it fits in browser storage.
function readPhoto(f){
  return new Promise(done=>{
    if(!f||!f.type.startsWith('image/'))return done('');
    const r=new FileReader();
    r.onload=()=>{
      const im=new Image();
      im.onload=()=>{
        const k=Math.min(1,320/Math.max(im.width,im.height)),c=document.createElement('canvas');
        c.width=im.width*k;c.height=im.height*k;
        c.getContext('2d').drawImage(im,0,0,c.width,c.height);
        done(c.toDataURL('image/jpeg',0.7));
      };
      im.onerror=()=>done('');
      im.src=r.result;
    };
    r.onerror=()=>done('');
    r.readAsDataURL(f);
  });
}
function renderSeller(){
  const s=sellers[sme];if(!s)return;
  const TB=[['profile','Shop profile'],['products','Products'],['offers','Offers & promos'],['gifts','Gifts'],['returns','Return policy'],['orders','Orders'],['ratings','Ratings']];
  const mine=prods.filter(p=>p.sid===sme),B=()=>$('#sbody'),v=id=>$('#'+id).value.trim(),er=m=>{$('#serr').textContent=m};
  $('#sellerApp').innerHTML=`<h1 style='font-size:1.8rem'>${s.pf.emoji} ${s.shop}</h1><p style='color:var(--mute);margin:4px 0 12px'>Seller dashboard · ${mine.length} products · ${s.status}</p>
  <div class='bar' style='padding:0;margin:0;max-width:none'>${TB.map(t=>`<button class='chip' aria-pressed='${t[0]===sTab}' data-st='${t[0]}'>${t[1]}</button>`).join('')}</div><div class='pn' id='sbody'></div>`;
  const E=`<div class='err' id='serr' role='alert'></div>`;
  if(sTab==='profile'){
    B().innerHTML=`<h2>Shop profile</h2><div class='fg'><label>Shop name<input id='f1' value='${att(s.shop)}'></label><label>Logo emoji<input id='f2' maxlength='4' value='${att(s.pf.emoji)}'></label><label>Phone<input id='f3' value='${att(s.phone)}'></label><label>Address<input id='f4' value='${att(s.addr)}'></label><label>Opening hours<input id='f5' placeholder='7 AM – 10 PM' value='${att(s.pf.hours)}'></label><label>Delivery area<input id='f6' placeholder='e.g. Mirpur, Dhanmondi' value='${att(s.pf.area)}'></label></div>
    <label style='margin-top:10px'>About your shop<textarea id='f7' rows='3'>${att(s.pf.desc)}</textarea></label>
    <p style='color:var(--mute)'>Owner: ${s.owner} · ${s.cat} · Trade license: <b>${att(s.tl)}</b> · NID: <b>••••${att(s.nid.slice(-4))}</b></p>${E}<button class='go' id='fsave' style='max-width:220px'>Save shop profile</button>`;
    $('#fsave').onclick=()=>{
      if(!v('f1'))return er('Shop name cannot be empty.');if(!okPhone(v('f3')))return er('Enter a valid Bangladeshi mobile number.');
      Object.assign(s,{shop:san(v('f1')),phone:v('f3'),addr:san(v('f4'))});Object.assign(s.pf,{emoji:san(v('f2'))||'🏪',hours:san(v('f5')),area:san(v('f6')),desc:san(v('f7'))});
      saveS();syncPromos();toast('Shop profile saved');renderSeller();
    };
  }else if(sTab==='products'){
    const cats=[...new Set(P.map(x=>x.c))];
    B().innerHTML=`<h2>Add a product</h2><div class='fg'>
    <label>Name (Bangla, optional)<input id='a1'></label><label>Name (English)<input id='a2'></label>
    <label>Section<select id='a3'><option value='daily'>Daily Essentials</option><option value='monthly'>Monthly Bazar</option></select></label>
    <label>Category<input id='a4' list='dl-c' placeholder='e.g. Dairy & Eggs'></label>
    <label>Weight / pack size<input id='a5' list='dl-u' placeholder='e.g. 500 g'></label>
    <label>Regular price (৳)<input id='a6' type='number' min='1'></label><label>Offer price (৳, optional)<input id='a7' type='number' min='1'></label>
    <label>Stock (units)<input id='a8' type='number' min='0' value='10'></label><label>Emoji<input id='a9' maxlength='4' placeholder='🥛'></label><label>Photo (optional)<input id='a10' type='file' accept='image/*'></label></div>
    <datalist id='dl-c'>${cats.map(c=>`<option>${c}</option>`).join('')}</datalist><datalist id='dl-u'>${['250 g','500 g','1 kg','2 kg','5 kg','25 kg sack','500 ml','1 L','5 L','dozen','pack'].map(u=>`<option>${u}</option>`).join('')}</datalist>
    ${E}<button class='go' id='padd' style='max-width:220px'>Add product</button>
    <h2 style='margin-top:22px'>Your products (${mine.length})</h2>${mine.length?`<div style='overflow-x:auto'><table class='rc' style='min-width:520px'>${mine.map(x=>`<tr><td>${x.e} ${x.bn}<br><small style='color:var(--mute)'>${x.c} · ${x.u} · ${x.t}</small></td><td>${x.mrp?`<s>${tk(x.mrp)}</s> `:''}${tk(x.p)}</td><td><input type='number' min='0' value='${x.s}' data-pst='${x.id}' style='width:84px' aria-label='Stock'></td><td><button class='link' data-pdel='${x.id}'>Delete</button></td></tr>`).join('')}</table></div>`:'<p>No products yet. Add your first one above.</p>'}`;
    $('#padd').onclick=async()=>{
      const bn=v('a1'),en=v('a2'),price=+v('a6'),off=v('a7')?+v('a7'):0,st=Math.floor(+v('a8')),c=v('a4'),u=v('a5');
      if(!bn&&!en)return er('Enter a product name.');if(!c||!u)return er('Enter a category and a weight / pack size.');
      if(!(price>0))return er('Enter a regular price above zero.');if(off&&!(off<price))return er('Offer price must be lower than the regular price.');
      if(!(st>=0))return er('Stock must be zero or more.');
      const x={id:'s'+Date.now().toString(36),t:v('a3'),c:san(c),bn:san(bn||en),en:san(en||bn),u:san(u),p:off||price,mrp:off?price:null,e:v('a9')?san(v('a9')):'🛒',s:st,sid:sme,img:await readPhoto($('#a10').files[0])};
      prods.push(x);P.push(x);saveProds();toast('Product added');renderSeller();
    };
    B().querySelectorAll('[data-pst]').forEach(i=>i.onchange=()=>{const x=byId(i.dataset.pst);x.s=Math.max(0,Math.floor(+i.value)||0);saveProds();toast('Stock updated')});
    B().querySelectorAll('[data-pdel]').forEach(b=>b.onclick=()=>{const id=b.dataset.pdel;prods=prods.filter(p=>p.id!==id);const i=P.findIndex(p=>p.id===id);if(i>-1)P.splice(i,1);delete cart[id];save();saveProds();renderSeller()});
  }else if(sTab==='offers'){
    const pl=s.promos||[];
    B().innerHTML=`<h2>Create a promo code</h2><p style='color:var(--mute);margin:0 0 8px'>Customers enter the code in their cart. It applies to your shop's items only. For a product offer price, use “Offer price” when adding a product.</p>
    <div class='fg'><label>Code<input id='o1' placeholder='EID20'></label><label>Type<select id='o2'><option value='pct'>Percent off</option><option value='flat'>Flat ৳ off</option></select></label><label>Value<input id='o3' type='number' min='1'></label><label>Min. spend on your items (৳)<input id='o4' type='number' min='0' value='0'></label></div>${E}<button class='go' id='oadd' style='max-width:220px'>Create promo</button>
    <h2 style='margin-top:22px'>Your promos</h2>${pl.length?pl.map((p,i)=>`<div class='ord' style='cursor:default'><span><b>${p.code}</b> · ${p.type==='pct'?p.val+'%':tk(p.val)} off · min ${tk(p.min)}</span><button class='link' data-odel='${i}'>Delete</button></div>`).join(''):'<p>No promos yet.</p>'}`;
    $('#oadd').onclick=()=>{
      const code=v('o1').toUpperCase(),type=v('o2'),val=Math.floor(+v('o3')),min=Math.floor(+v('o4'))||0;
      if(!/^[A-Z0-9]{3,12}$/.test(code))return er('Code should be 3 to 12 letters or digits.');if(PROMOS[code])return er('That code is already in use. Pick another.');
      if(!(val>0)||(type==='pct'&&val>90))return er('Enter a value above zero (percent must be 90 or less).');
      s.promos=[...pl,{code,type,val,min}];saveS();syncPromos();toast('Promo created');renderSeller();
    };
    B().querySelectorAll('[data-odel]').forEach(b=>b.onclick=()=>{s.promos=pl.filter((p,i)=>i!==+b.dataset.odel);saveS();syncPromos();renderSeller()});
  }else if(sTab==='gifts'){
    const gl=s.gifts||[];
    B().innerHTML=`<h2>Free gifts</h2><p style='color:var(--mute);margin:0 0 8px'>Reward big baskets. Customers see the gift in their cart once they spend enough on your items.</p>
    <div class='fg'><label>Minimum spend (৳)<input id='g1' type='number' min='1'></label><label>Gift<input id='g2' placeholder='e.g. 500 g sugar'></label></div>${E}<button class='go' id='gadd' style='max-width:220px'>Add gift offer</button>
    <h2 style='margin-top:22px'>Your gift offers</h2>${gl.length?gl.map((g,i)=>`<div class='ord' style='cursor:default'><span>Spend ${tk(g.min)} → ${g.text}</span><button class='link' data-gdel='${i}'>Delete</button></div>`).join(''):'<p>No gift offers yet.</p>'}`;
    $('#gadd').onclick=()=>{
      const min=Math.floor(+v('g1')),text=san(v('g2'));
      if(!(min>0)||!text)return er('Enter a minimum spend and a gift description.');
      s.gifts=[...gl,{min,text}];saveS();toast('Gift offer added');renderSeller();
    };
    B().querySelectorAll('[data-gdel]').forEach(b=>b.onclick=()=>{s.gifts=gl.filter((g,i)=>i!==+b.dataset.gdel);saveS();renderSeller()});
  }else if(sTab==='returns'){
    const r=s.ret||{};
    B().innerHTML=`<h2>Return policy</h2><div class='fg'><label>Return window<select id='r1'>${[[0,'No returns'],[1,'1 day'],[3,'3 days'],[7,'7 days'],[14,'14 days']].map(o=>`<option value='${o[0]}' ${+r.days===o[0]?'selected':''}>${o[1]}</option>`).join('')}</select></label>
    <label>Remedy<select id='r2'>${['Refund','Replacement','Refund or replacement'].map(o=>`<option ${r.remedy===o?'selected':''}>${o}</option>`).join('')}</select></label></div>
    <label style='margin-top:10px'>Conditions<textarea id='r3' rows='3' placeholder='e.g. Fresh produce must be reported within 2 hours of delivery.'>${att(r.note)}</textarea></label>${E}<button class='go' id='rsave' style='max-width:220px'>Save policy</button>`;
    $('#rsave').onclick=()=>{s.ret={days:+v('r1'),remedy:v('r2'),note:san(v('r3'))};saveS();renderGrid();toast('Return policy saved')};
  }else if(sTab==='ratings'){
    const sr=shopRating(sme),rl=rates.filter(r=>r.shops&&r.shops[sme]);
    B().innerHTML=`<h2>Customer ratings</h2><p style='font-size:1.3rem;margin:4px 0'>${sr.n?'★ '+sr.avg.toFixed(1)+' average from '+sr.n+' rating'+(sr.n>1?'s':''):'No ratings yet'}</p>${rl.map(r=>`<div class='ord' style='cursor:default;display:block'><b>${starRow(r.shops[sme])}</b> · ${r.at}${r.comment?'<br>'+r.comment:''}</div>`).join('')}`;
  }else{
    const od=hist.filter(o=>o.lines.some(l=>l[3]===sme));
    B().innerHTML=`<h2>Orders for your shop</h2>${od.length?od.map(o=>{const ls=o.lines.filter(l=>l[3]===sme);return `<div class='ord' style='cursor:default;display:block'><b>${o.id}</b> · ${o.at}<br>${att(o.n)} · ${att(o.ph||'')} · ${att(o.a)}<br>${ls.map(l=>l[0]+' × '+l[1]).join(', ')} · <b>${tk(ls.reduce((a,l)=>a+l[1]*l[2],0))}</b></div>`}).join(''):'<p>No orders for your shop yet.</p>'}`;
  }
}
const okMail=e=>/^\S+@\S+\.\S+$/.test(e);
const AREAS={'Mirpur':[23.8042,90.3667],'Dhanmondi':[23.7461,90.3742],'Gulshan':[23.7925,90.4078],'Uttara':[23.8759,90.3795],'Mohammadpur':[23.7662,90.3586],'Motijheel':[23.7330,90.4172],'Bashundhara':[23.8193,90.4526],'Farmgate':[23.7561,90.3872],'Badda':[23.7806,90.4262],'Rampura':[23.7612,90.4256],'Old Dhaka':[23.7104,90.4074],'Tejgaon':[23.7639,90.3925],'Khilgaon':[23.7489,90.4297],'Malibagh':[23.7497,90.4126]};
let loc={};try{loc=JSON.parse(localStorage.getItem('freshcart-loc')||'{}')||{}}catch(e){}
const saveLoc=()=>{try{localStorage.setItem('freshcart-loc',JSON.stringify(loc))}catch(e){}};
function paintLoc(){$('#locBtn').textContent='📍 '+(loc.area||'Set location')}
function nearShop(sv){const t=(loc.area||'').toLowerCase().split(/[\s,]+/).filter(w=>w.length>2&&!/^\d+$/.test(w)&&w!=='dhaka');const h=((sv.pf.area||'')+' '+sv.addr).toLowerCase();return t.some(w=>h.includes(w))}
function locModal(){
  $('#mbox').innerHTML=`<h2>Your delivery location</h2><p style='color:var(--mute);margin:4px 0 0'>We use it to show nearby shops and fill in your address at checkout.</p>
  <label>Area / address<input id='la' list='dl-a' value='${att(loc.area)}' placeholder='e.g. Mirpur 10, Dhaka'></label><datalist id='dl-a'>${Object.keys(AREAS).map(a=>`<option>${a}, Dhaka</option>`).join('')}</datalist>
  <button class='link' id='lgeo' style='margin-top:8px;color:var(--leaf-d)'>📡 Use my current location</button>
  <div class='err' id='err' role='alert'></div><button class='go' id='lsave'>Save location</button><button class='link' id='lclear' style='margin-top:8px'>Clear location</button>`;
  $('#modal').classList.add('on');$('#la').focus();
  $('#lgeo').onclick=()=>{
    if(!navigator.geolocation)return $('#err').textContent='Your browser cannot share location. Type your area instead.';
    $('#err').textContent='Finding you…';
    navigator.geolocation.getCurrentPosition(p=>{
      let best=null,bd=1e9;for(const a in AREAS){const d=(AREAS[a][0]-p.coords.latitude)**2+(AREAS[a][1]-p.coords.longitude)**2;if(d<bd){bd=d;best=a}}
      if(bd>0.01){$('#err').textContent='You seem to be outside our Dhaka areas. Type your area instead.';return}
      $('#la').value=best+', Dhaka';$('#err').textContent='Detected near '+best+'. Check it, then save.';
    },()=>{$('#err').textContent='Could not get your location. Allow location access or type your area.'},{timeout:8000});
  };
  $('#lsave').onclick=()=>{const a=san($('#la').value.trim());if(a.length<3)return $('#err').textContent='Enter your area or address.';loc.area=a;saveLoc();paintLoc();renderGrid();toast('Location saved');closeModal()};
  $('#lclear').onclick=()=>{loc={};saveLoc();paintLoc();renderGrid();closeModal()};
}
const shopName=x=>x.sid&&sellers[x.sid]?sellers[x.sid].shop:'';
function shopCards(s){
  const all=Object.entries(sellers);
  const list=all.filter(([e,sv])=>!s||(sv.shop+sv.cat+sv.addr+(sv.pf.area||'')+(sv.pf.desc||'')+P.filter(x=>x.sid===e).map(x=>x.bn+x.en).join(' ')).toLowerCase().includes(s)).sort((a,b)=>nearShop(b[1])-nearShop(a[1]));
  if(!list.length)return `<p class='empty'>${all.length?'No shops match your search.':'No shops have joined yet. Sellers can open one from Sign in → Seller.'}</p>`;
  return list.map(([e,sv])=>`<article class='card'><div class='emo' aria-hidden='true'>${sv.pf.emoji}</div><h3>${sv.shop}</h3><div class='en'>${sv.cat} · ${P.filter(x=>x.sid===e).length} products · ${rateText(e)}</div><div class='en'>📍 ${sv.pf.area||sv.addr}</div>${nearShop(sv)?`<div class='badge' style='color:var(--leaf-d)'>Delivers near you</div>`:''}<button class='add' data-shop='${att(e)}' style='margin-top:8px'>Visit shop</button></article>`).join('');
}
function shopStrip(s){
  if(!s||shopView)return '';
  const m=Object.entries(sellers).filter(([e,sv])=>(sv.shop+sv.cat+(sv.pf.area||'')+sv.addr).toLowerCase().includes(s)||P.some(x=>x.sid===e&&(x.bn+x.en).toLowerCase().includes(s)));
  return m.length?`<div style='grid-column:1/-1'><b>Shops:</b> ${m.map(([e,sv])=>`<button class='chip' data-shop='${att(e)}'>${sv.pf.emoji} ${sv.shop}</button>`).join(' ')}</div>`:'';
}
function shopHeader(){
  const sv=sellers[shopView];if(!sv)return '';
  const g=(sv.gifts||[]).map(x=>'Spend '+tk(x.min)+' → '+x.text),p=(sv.promos||[]).map(x=>x.code+' ('+(x.type==='pct'?x.val+'%':tk(x.val))+' off)'),r=sv.ret||{};
  return `<button class='link' data-back='1' style='color:var(--leaf-d)'>← All shops</button><br><b style='font-size:1.2rem;color:var(--ink)'>${sv.pf.emoji} ${sv.shop}</b> · ${sv.cat} · ${rateText(shopView)}<br>📍 ${sv.addr}${sv.pf.hours?' · 🕒 '+sv.pf.hours:''}${sv.pf.area?' · Delivers: '+sv.pf.area:''} · ☎ ${sv.phone}<br>${sv.pf.desc?sv.pf.desc+'<br>':''}↩ ${r.days?r.days+'-day returns, '+(r.remedy||'').toLowerCase():'No returns'}${p.length?'<br>🏷 Promo codes: '+p.join(', '):''}${g.length?'<br>🎁 '+g.join(' · '):''}`;
}
function openShop(e){tab='shops';shopView=e;q='';$('#q').value='';document.querySelectorAll('.tab').forEach(t=>t.setAttribute('aria-selected',t.dataset.tab==='shops'));renderCats();renderGrid();window.scrollTo(0,0)}
const FAQ=[['How do I check or change an order?','Open Orders in the top bar to see your receipts. To change a daily item, contact support within one hour of ordering.'],['Which promo codes work?','Type a code in your cart. FRESH10 and MONTH150 are site-wide; a shop\'s own code only applies to that shop\'s items. One code at a time.'],['How do Daily and Monthly deliveries differ?','Daily Essentials arrive in the 7–9 AM or 5–7 PM slot you pick. Monthly Bazar arrives once, on the date you choose at checkout.'],['How do returns work?','Each shop sets its own return window. You can see it on the product card and on the shop page. If a shop does not respond, open a support ticket.'],['I forgot my password','Passwords are stored only on this device and cannot be reset. Create a new account with a different email, or contact support.'],['How do I sell on FreshCart?','Choose Sign in, then Seller, then Open a shop. You need a trade license number, your NID number, and your shop details.'],['Why is an item out of stock?','Shops set their own stock. Sold-out items cannot be added to the cart until the shop restocks.'],['How do I set my location?','Press the location button in the top bar. Type your area or use your current location. We use it to show nearby shops and fill in your address.']];
let tickets=[];try{tickets=JSON.parse(localStorage.getItem('freshcart-tickets')||'[]')}catch(e){}
function helpModal(view){
  view=view||'faq';const who=me||sme||'';
  const TB=[['faq','Help topics'],['new','Contact support'],['mine','My tickets']];
  let body='';
  if(view==='faq')body=`<input id='hq' placeholder='Search help…' aria-label='Search help' style='width:100%;padding:9px 12px;border:1px solid var(--line);border-radius:8px;background:var(--bg);color:var(--ink);font:inherit;margin:6px 0'><div class='faq' id='faq'>${FAQ.map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join('')}</div><p style='color:var(--mute)'>Still stuck? Choose <b>Contact support</b> above. Support hours: 9 AM – 9 PM, every day.</p>`;
  else if(view==='new')body=`<label>Your email<input id='tm' type='email' value='${att(who)}'></label><label>Topic<select id='tt'><option>Order or delivery</option><option>Payment or promo</option><option>Return or refund</option><option>Account or sign-in</option><option>Seller account</option><option>Other</option></select></label><label>Order ID (optional)<input id='to' placeholder='FC-123456'></label><label>How can we help?<textarea id='tg' rows='4' style='width:100%;margin-top:4px;padding:9px 12px;border:1px solid var(--line);border-radius:8px;background:var(--bg);color:var(--ink);font:inherit'></textarea></label><div class='err' id='err' role='alert'></div><button class='go' id='tsub'>Send to support</button><p style='color:var(--mute);font-size:.85rem'>Prototype note: tickets are saved in this browser and no email is sent.</p>`;
  else{const mt=tickets.filter(t=>t.u===who);body=mt.length?mt.map(t=>`<div class='ord' style='cursor:default;display:block'><b>${t.id}</b> · ${t.topic} · ${t.status}<br><small style='color:var(--mute)'>${t.at}${t.order?' · Order '+t.order:''}</small><br>${t.msg}</div>`).join(''):`<p>You have no tickets yet.</p>`}
  $('#mbox').innerHTML=`<h2>Customer support</h2><div style='display:flex;gap:6px;flex-wrap:wrap;margin:8px 0'>${TB.map(t=>`<button class='chip' aria-pressed='${t[0]===view}' data-hp='${t[0]}'>${t[1]}</button>`).join('')}</div>${body}<button class='link' id='done' style='margin-top:12px'>Close</button>`;
  $('#modal').classList.add('on');$('#done').onclick=closeModal;
  if(view==='faq')$('#hq').oninput=e=>{const s=e.target.value.toLowerCase();document.querySelectorAll('#faq details').forEach(d=>{d.hidden=!!s&&!d.textContent.toLowerCase().includes(s)})};
  if(view==='new')$('#tsub').onclick=()=>{
    const em=$('#tm').value.trim().toLowerCase(),ms=san($('#tg').value.trim()),er=m=>{$('#err').textContent=m};
    if(!okMail(em))return er('Enter a valid email so we can reply.');
    if(ms.length<10)return er('Please describe the problem in at least 10 characters.');
    const t={id:'FC-T'+Date.now().toString().slice(-6),u:who,email:att(em),topic:$('#tt').value,order:san($('#to').value.trim()),msg:ms,at:new Date().toLocaleString('en-GB'),status:'Open · reply within 24 h'};
    tickets.unshift(t);try{localStorage.setItem('freshcart-tickets',JSON.stringify(tickets.slice(0,30)))}catch(e){}
    toast('Ticket '+t.id+' created');helpModal('mine');
  };
}
$('#locBtn').onclick=locModal;$('#helpBtn').onclick=()=>helpModal('faq');
// ---------- Language (English / Bangla) ----------
// The page is written in English. When Bangla is chosen, every piece of text that
// matches an entry in the BN dictionary is swapped for its Bangla version.
let lang='';try{lang=localStorage.getItem('freshcart-lang')||''}catch(e){}
const firstVisit=!lang;if(!lang)lang='en';
const BN={
'Daily & Monthly Grocery':'দৈনিক ও মাসিক বাজার','Cart':'ঝুড়ি','Help':'সহায়তা','Orders':'অর্ডার','Sign in':'সাইন ইন','Sign out':'সাইন আউট','📍 Set location':'📍 অবস্থান দিন',
'Search rice, চাল, milk…':'চাল, ডাল, দুধ খুঁজুন…','Promo code':'প্রোমো কোড','Search help…':'সহায়তা খুঁজুন…',
'Fresh every morning. Stocked for the month.':'প্রতিদিন সকালে তাজা, পুরো মাসের জন্য মজুত।',
'Order today’s bread and vegetables on one list, and the month’s rice, dal and oil on another. One cart, two clear totals, no server.':'সকালের রুটি ও সবজি এক তালিকায়, মাসের চাল-ডাল-তেল আরেক তালিকায়। একটি ঝুড়ি, দুটি পরিষ্কার হিসাব, কোনো সার্ভার ছাড়াই।',
'Deals:':'অফার:','FRESH10 · 10% off':'FRESH10 · ১০% ছাড়','MONTH150 · ৳150 off bazar over ৳2,000':'MONTH150 · ৳২,০০০ এর বেশি মাসিক বাজারে ৳১৫০ ছাড়',
'Fresh Veg':'তাজা সবজি','Dairy & Eggs':'দুধ ও ডিম','Frozen Foods':'ফ্রোজেন খাবার','Noodles':'নুডলস','Personal Care':'ব্যক্তিগত যত্ন','Household':'ঘরের জিনিস',
'Daily Essentials · নিত্য':'নিত্য প্রয়োজনীয়','Monthly Bazar · মাসিক':'মাসিক বাজার','Shops · দোকান':'দোকানসমূহ',
'Fresh items, delivered 7–9 AM':'তাজা পণ্য, সকাল ৭–৯টায় ডেলিভারি','Bulk packs, lower price per kg':'বড় প্যাক, কেজিপ্রতি কম দাম','Find sellers near you':'কাছের বিক্রেতা খুঁজুন',
'Order by 9 PM for next-morning delivery between 7 and 9 AM.':'পরের সকাল ৭–৯টায় ডেলিভারির জন্য রাত ৯টার মধ্যে অর্ডার করুন।','Monthly packs deliver once, on the date you choose at checkout.':'মাসিক প্যাক একবারই পৌঁছাবে, চেকআউটে বেছে নেওয়া তারিখে।','Search shops by name, area or product, or browse them all.':'নাম, এলাকা বা পণ্য দিয়ে দোকান খুঁজুন, অথবা সব দেখুন।',
'All':'সব','Under ৳100':'৳১০০ এর নিচে','Bakery':'বেকারি','Vegetables':'সবজি','Fruits':'ফল','Fish & Meat':'মাছ ও মাংস','Grains':'চাল ও আটা','Pulses & Oil':'ডাল ও তেল','Pantry':'মুদি','Spices':'মসলা','Drinks':'পানীয়','How was your order?':'আপনার অর্ডার কেমন লেগেছে?','Rate your order':'অর্ডারটি রেট করুন','Submit rating':'রেটিং জমা দিন','Skip':'এড়িয়ে যান','Add a comment (optional)':'মন্তব্য লিখুন (ঐচ্ছিক)','No ratings yet':'এখনো কোনো রেটিং নেই','Noodles & Snacks':'নুডলস ও স্ন্যাক্স',
'Add to cart':'ঝুড়িতে দিন','Out of stock':'স্টক নেই','Sold out':'শেষ',
'Your cart · আপনার ঝুড়ি':'আপনার ঝুড়ি','Close':'বন্ধ করুন','Apply':'প্রয়োগ','Daily items':'নিত্য পণ্য','Monthly bazar':'মাসিক বাজার','Promo savings':'প্রোমো সাশ্রয়','VAT (5%)':'ভ্যাট (৫%)','Delivery (free over ৳1,500)':'ডেলিভারি (৳১,৫০০ এর বেশি ফ্রি)','Total':'মোট','Place order':'অর্ডার করুন','Clear cart':'ঝুড়ি খালি করুন','Daily Essentials':'নিত্য প্রয়োজনীয়','Monthly Bazar':'মাসিক বাজার','Your cart is empty. Add something from Daily or Monthly.':'আপনার ঝুড়ি খালি। নিত্য বা মাসিক থেকে কিছু যোগ করুন।',
'Delivery details':'ডেলিভারির তথ্য','Full name':'পূর্ণ নাম','Phone (01XXXXXXXXX)':'ফোন (01XXXXXXXXX)','Address':'ঠিকানা','Daily delivery slot':'নিত্য পণ্যের ডেলিভারি সময়','7–9 AM':'সকাল ৭–৯টা','5–7 PM':'বিকাল ৫–৭টা','Payment':'পেমেন্ট','Cash on delivery':'ক্যাশ অন ডেলিভারি','bKash on delivery':'ডেলিভারিতে বিকাশ','Monthly bazar delivery date':'মাসিক বাজার ডেলিভারির তারিখ','Back to cart':'ঝুড়িতে ফিরুন',
'Customer':'ক্রেতা','Seller':'বিক্রেতা','Create account':'অ্যাকাউন্ট খুলুন','Welcome back.':'স্বাগতম।','Save your details once and skip typing them at checkout.':'একবার তথ্য সংরক্ষণ করুন, চেকআউটে আর লিখতে হবে না।','Phone':'ফোন','Delivery address':'ডেলিভারির ঠিকানা','Email':'ইমেইল','Password (6+ characters)':'পাসওয়ার্ড (৬+ অক্ষর)','Already have an account? Sign in':'অ্যাকাউন্ট আছে? সাইন ইন করুন','New here? Create an account':'নতুন? অ্যাকাউন্ট খুলুন','Your profile':'আপনার প্রোফাইল','Save details':'তথ্য সংরক্ষণ',
'Your delivery location':'আপনার ডেলিভারি অবস্থান','Area / address':'এলাকা / ঠিকানা','Save location':'অবস্থান সংরক্ষণ','Clear location':'অবস্থান মুছুন','📡 Use my current location':'📡 আমার বর্তমান অবস্থান','We use it to show nearby shops and fill in your address at checkout.':'কাছের দোকান দেখাতে ও চেকআউটে ঠিকানা পূরণ করতে এটি ব্যবহার হয়।',
'Customer support':'গ্রাহক সহায়তা','Help topics':'সহায়তার বিষয়','Contact support':'সহায়তায় যোগাযোগ','My tickets':'আমার টিকেট','Send to support':'সহায়তায় পাঠান','Your email':'আপনার ইমেইল','Topic':'বিষয়','How can we help?':'আমরা কীভাবে সাহায্য করতে পারি?',
'Order placed ✔':'অর্ডার সম্পন্ন ✔','Receipt':'রসিদ','Print receipt':'রসিদ প্রিন্ট','Keep shopping':'কেনাকাটা চালিয়ে যান','Order history':'অর্ডারের ইতিহাস','Subtotal':'উপমোট','Delivery':'ডেলিভারি','Free':'ফ্রি',
'FreshCart · Group F · A client-side e-commerce project built with HTML, CSS, DHTML and JavaScript · Delivering across Dhaka':'ফ্রেশকার্ট · গ্রুপ F · HTML, CSS, DHTML ও JavaScript দিয়ে তৈরি ক্লায়েন্ট-সাইড ই-কমার্স প্রজেক্ট · ঢাকাজুড়ে ডেলিভারি'
};
const BNX=[[/^Only (\d+) left$/,'মাত্র $1টি বাকি'],[/^Confirm order · (.+)$/,'অর্ডার নিশ্চিত করুন · $1']];
function bnOf(s){
  const k=s.trim();if(!k)return null;
  let r=BN[k];
  if(!r)for(const p of BNX){if(p[0].test(k)){r=k.replace(p[0],p[1]);break}}
  return r?s.replace(k,r):null;
}
// Goes through every piece of text on the page and swaps it to the chosen language.
function walk(){
  const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),nodes=[];
  while(w.nextNode())nodes.push(w.currentNode);
  nodes.forEach(n=>{
    if(/^(SCRIPT|STYLE|TEXTAREA)$/.test(n.parentNode.nodeName))return;
    if(lang==='bn'&&n.en===undefined){const r=bnOf(n.nodeValue);if(r!==null){n.en=n.nodeValue;n.nodeValue=r}}
    else if(lang!=='bn'&&n.en!==undefined){n.nodeValue=n.en;delete n.en}
  });
  document.querySelectorAll('[placeholder]').forEach(el=>{
    if(lang==='bn'&&!el.dataset.en&&BN[el.placeholder]){el.dataset.en=el.placeholder;el.placeholder=BN[el.dataset.en]}
    else if(lang!=='bn'&&el.dataset.en){el.placeholder=el.dataset.en;delete el.dataset.en}
  });
}
const watcher=new MutationObserver(walk);
function setLang(l,noSave){
  lang=l;if(!noSave){try{localStorage.setItem('freshcart-lang',l)}catch(e){}}
  document.documentElement.lang=l==='bn'?'bn':'en';
  $('#langBtn').textContent=l==='bn'?'English':'বাংলা';
  renderCats();renderGrid();renderCart();paintLoc();paintAcct();walk();
}
function langPrompt(){
  $('#mbox').innerHTML=`<h2 style='text-align:center'>Choose your language<br>ভাষা বেছে নিন</h2><div style='display:grid;gap:10px;margin-top:16px'><button class='go' data-lang='en'>English</button><button class='go' data-lang='bn' style='background:var(--turmeric);color:#3b2a00'>বাংলা</button></div>`;
  $('#modal').classList.add('on');
}
// ---------- Ratings (shown right after an order is placed) ----------
let rates=[];try{rates=JSON.parse(localStorage.getItem('freshcart-ratings')||'[]')}catch(e){}
function shopRating(e){const l=rates.filter(r=>r.shops&&r.shops[e]);return{n:l.length,avg:l.length?l.reduce((a,r)=>a+r.shops[e],0)/l.length:0}}
function rateText(e){const r=shopRating(e);return r.n?'★ '+r.avg.toFixed(1)+' ('+r.n+')':'No ratings yet'}
const starRow=n=>'★'.repeat(n)+'☆'.repeat(5-n);
function ratingModal(o){
  const shops=[...new Set(o.lines.map(l=>l[3]).filter(s=>s&&sellers[s]))],pick={};
  const row=(key,label)=>`<div style='margin-top:12px'><b>${label}</b><div data-key='${att(key)}'>${[1,2,3,4,5].map(n=>`<button class='star' data-sr='${n}' aria-label='${n} stars'>☆</button>`).join('')}</div></div>`;
  $('#mbox').innerHTML=`<h2>How was your order?</h2><p style='color:var(--mute);margin:4px 0 0'>Order ${o.id} is placed. Tell us how it went.</p>${row('all','Rate your order')}${shops.map(s=>row(s,'Rate '+sellers[s].shop)).join('')}<label>Add a comment (optional)<textarea id='rc' rows='3' maxlength='200'></textarea></label><div class='err' id='err' role='alert'></div><button class='go' id='rsub'>Submit rating</button><button class='link' id='rskip' style='margin-top:8px'>Skip</button>`;
  $('#modal').classList.add('on');
  document.querySelectorAll('.star').forEach(b=>b.onclick=()=>{
    const k=b.parentNode.dataset.key,n=+b.dataset.sr;pick[k]=n;
    b.parentNode.querySelectorAll('.star').forEach((s,i)=>{s.textContent=i<n?'★':'☆'});
  });
  $('#rsub').onclick=()=>{
    if(!pick.all)return $('#err').textContent='Please tap a star rating, or press Skip.';
    const sh={};shops.forEach(s=>{if(pick[s])sh[s]=pick[s]});
    rates.unshift({id:o.id,u:me||'',stars:pick.all,shops:sh,comment:san($('#rc').value.trim()),at:new Date().toLocaleString('en-GB')});
    try{localStorage.setItem('freshcart-ratings',JSON.stringify(rates.slice(0,200)))}catch(e){}
    toast('Thanks for rating!');receipt(o,true);
  };
  $('#rskip').onclick=()=>receipt(o,true);
}
$('#langBtn').onclick=()=>setLang(lang==='bn'?'en':'bn');
paintLoc();
paintAcct();
renderCats();renderGrid();renderCart();
setLang(lang,true);
watcher.observe(document.body,{childList:true,subtree:true});
if(firstVisit)langPrompt();
