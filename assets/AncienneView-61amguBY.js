import{_ as m,r as g,b,o as d,c as u,d as e,F as x,e as f,t as l,f as M,w as E,v as T,g as A,p as S,h as I}from"./index-5zetSMtT.js";import{P}from"./PainInput-FcWo4AFu.js";const t=i=>(S("data-v-9c5ac4c1"),i=i(),I(),i),B=t(()=>e("h1",{class:"titre"}," Ancienne ",-1)),F={class:"pain"},V=t(()=>e("hr",null,null,-1)),k={class:"poids-total"},w=t(()=>e("div",{class:"texte-centre"}," Poids total ",-1)),y={class:"texte"},C=t(()=>e("span",null,"Avec eau",-1)),q=t(()=>e("hr",null,null,-1)),L={class:"texte"},N=t(()=>e("span",null,"Sans eau",-1)),D=t(()=>e("hr",{class:"grosse-ligne-point"},null,-1)),K={class:"texte"},R=t(()=>e("span",null,"Poids voulu",-1)),U={class:"input"},X={class:"recette"},j=t(()=>e("div",{class:"texte-centre"}," Recette ",-1)),z={class:"texte"},G=t(()=>e("span",null,"Blanche",-1)),H=t(()=>e("hr",null,null,-1)),J={class:"texte"},O=t(()=>e("span",null,"Blé",-1)),Q=t(()=>e("hr",null,null,-1)),W={class:"texte"},Y=t(()=>e("span",null,"Seigle",-1)),Z=t(()=>e("hr",null,null,-1)),$={class:"texte"},ee=t(()=>e("span",null,"Eau",-1)),te=t(()=>e("hr",null,null,-1)),ne={class:"texte"},se=t(()=>e("span",null,"Sel",-1)),oe=t(()=>e("hr",null,null,-1)),le={class:"texte"},ae=t(()=>e("span",null,"Levure",-1)),ie=t(()=>e("hr",null,null,-1)),ce={class:"texte"},de=t(()=>e("span",null,"Pâte Fermentée",-1)),ue=t(()=>e("hr",null,null,-1)),p=.63,_e=.8,re=.15,pe=.05,he=.02,ve=.006,me=.15,ge={__name:"AncienneView",setup(i){const o=g(""),a=[{nom:"Carré",poids:650,total:0},{nom:"Miche",poids:650,total:0},{nom:"Parisien",poids:550,total:0},{nom:"Belge",poids:450,total:0},{nom:"Bagette",poids:350,total:0},{nom:"Multigrain",poids:1100/2,total:0,nbIngredient:2,ingredient1:{nom:"m.g.",qte:50},ingredient2:{nom:"m.c.",qte:50}},{nom:"Multicéréale",poids:1100/2,total:0},{nom:"Tournesol",poids:1150/2,total:0},{nom:"Citrouille",poids:1150/2,total:0},{nom:"Sésame",poids:1200/2,total:0},{nom:"Lin",poids:1200/2,total:0},{nom:"Pomme et date",poids:1100/2,total:0},{nom:"Millet",poids:1150/2,total:0}],n=b({poidsTotalAvecEau:0,poidsTotalSansEau:0,blanche:0,ble:0,seigle:0,eau:0,sel:0,levure:0,pateFermentee:0});function h(r,c){n.poidsTotalAvecEau=0;for(let s=0;s<a.length;s++)a[s].nom===r&&(a[s].total=c),n.poidsTotalAvecEau+=a[s].total;n.poidsTotalAvecEau=Math.round(n.poidsTotalAvecEau),n.poidsTotalSansEau=Math.round(n.poidsTotalAvecEau/(1+p))}function v(){o.value!==""&&(o.value="",_())}function _(){n.blanche=Math.round(o.value*_e),n.ble=Math.round(o.value*re),n.seigle=Math.round(o.value*pe),n.eau=Math.round(o.value*p),n.sel=Math.round(o.value*he),n.levure=Math.round(o.value*ve),n.pateFermentee=Math.round(o.value*me)}return(r,c)=>(d(),u("div",null,[B,e("div",F,[(d(),u(x,null,f(a,s=>e("div",{key:s.nom},[V,A(P,{nom:s.nom,poids:s.poids,nbIngredient:s.nbIngredient,ingredient1:s.ingredient1,ingredient2:s.ingredient2,onCalculer:h},null,8,["nom","poids","nbIngredient","ingredient1","ingredient2"])])),64))]),e("div",k,[w,e("div",y,[C,e("span",null,l(n.poidsTotalAvecEau||""),1)]),q,e("div",L,[N,e("span",null,l(n.poidsTotalSansEau||""),1)]),D,e("div",K,[R,e("span",U,[o.value!==""?(d(),u("button",{key:0,class:"button",onClick:v}," X ")):M("",!0),E(e("input",{class:"qte",type:"number","onUpdate:modelValue":c[0]||(c[0]=s=>o.value=s),onKeyup:_},null,544),[[T,o.value]])])])]),e("div",X,[j,e("div",z,[G,e("span",null,l(n.blanche||""),1)]),H,e("div",J,[O,e("span",null,l(n.ble||""),1)]),Q,e("div",W,[Y,e("span",null,l(n.seigle||""),1)]),Z,e("div",$,[ee,e("span",null,l(n.eau||""),1)]),te,e("div",ne,[se,e("span",null,l(n.sel||""),1)]),oe,e("div",le,[ae,e("span",null,l(n.levure||""),1)]),ie,e("div",ce,[de,e("span",null,l(n.pateFermentee||""),1)])]),ue]))}},fe=m(ge,[["__scopeId","data-v-9c5ac4c1"]]);export{fe as default};