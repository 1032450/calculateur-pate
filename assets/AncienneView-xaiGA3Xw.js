import{_ as v,r as m,b as g,o as u,c as _,a as e,F as b,d as x,t as l,w as M,v as f,e as E,p as T,f as A}from"./index-TZqbvgz3.js";import{P as S}from"./PainInput-AUu-exaU.js";const t=i=>(T("data-v-fdcac0be"),i=i(),A(),i),I=t(()=>e("h1",{class:"titre"}," Ancienne ",-1)),P={class:"pain"},B=t(()=>e("hr",null,null,-1)),F={class:"poids-total"},V=t(()=>e("div",{class:"texte-centre"}," Poids total ",-1)),w={class:"texte"},y=t(()=>e("span",null,"Avec eau",-1)),k=t(()=>e("hr",null,null,-1)),C={class:"texte"},L=t(()=>e("span",null,"Sans eau",-1)),q=t(()=>e("hr",{class:"grosse-ligne-point"},null,-1)),D={class:"texte"},N=t(()=>e("span",null,"Poids voulu",-1)),K={class:"recette"},R=t(()=>e("div",{class:"texte-centre"}," Recette ",-1)),U={class:"texte"},j=t(()=>e("span",null,"Blanche",-1)),z=t(()=>e("hr",null,null,-1)),G={class:"texte"},H=t(()=>e("span",null,"Blé",-1)),J=t(()=>e("hr",null,null,-1)),O={class:"texte"},Q=t(()=>e("span",null,"Seigle",-1)),W=t(()=>e("hr",null,null,-1)),X={class:"texte"},Y=t(()=>e("span",null,"Eau",-1)),Z=t(()=>e("hr",null,null,-1)),$={class:"texte"},ee=t(()=>e("span",null,"Sel",-1)),te=t(()=>e("hr",null,null,-1)),ne={class:"texte"},se=t(()=>e("span",null,"Levure",-1)),oe=t(()=>e("hr",null,null,-1)),le={class:"texte"},ae=t(()=>e("span",null,"Pâte Fermentée",-1)),ie=t(()=>e("hr",null,null,-1)),r=.63,de=.8,ce=.15,ue=.05,_e=.02,re=.006,pe=.15,he={__name:"AncienneView",setup(i){const o=m(""),a=[{nom:"Carré",poids:650,total:0},{nom:"Miche",poids:650,total:0},{nom:"Parisien",poids:550,total:0},{nom:"Belge",poids:450,total:0},{nom:"Bagette",poids:350,total:0},{nom:"Multigrain",poids:1100/2,total:0,nbIngredient:2,ingredient1:{nom:"m.g.",qte:50},ingredient2:{nom:"m.c.",qte:50}},{nom:"Multicéréale",poids:1100/2,total:0},{nom:"Tournesol",poids:1150/2,total:0},{nom:"Citrouille",poids:1150/2,total:0},{nom:"Sésame",poids:1200/2,total:0},{nom:"Lin",poids:1200/2,total:0},{nom:"Pomme et date",poids:1100/2,total:0},{nom:"Millet",poids:1150/2,total:0}],n=g({poidsTotalAvecEau:0,poidsTotalSansEau:0,blanche:0,ble:0,seigle:0,eau:0,sel:0,levure:0,pateFermentee:0});function p(c,d){n.poidsTotalAvecEau=0;for(let s=0;s<a.length;s++)a[s].nom===c&&(a[s].total=d),n.poidsTotalAvecEau+=a[s].total;n.poidsTotalAvecEau=Math.round(n.poidsTotalAvecEau),n.poidsTotalSansEau=Math.round(n.poidsTotalAvecEau/(1+r))}function h(){n.blanche=Math.round(o.value*de),n.ble=Math.round(o.value*ce),n.seigle=Math.round(o.value*ue),n.eau=Math.round(o.value*r),n.sel=Math.round(o.value*_e),n.levure=Math.round(o.value*re),n.pateFermentee=Math.round(o.value*pe)}return(c,d)=>(u(),_("div",null,[I,e("div",P,[(u(),_(b,null,x(a,s=>e("div",{key:s.nom},[B,E(S,{nom:s.nom,poids:s.poids,nbIngredient:s.nbIngredient,ingredient1:s.ingredient1,ingredient2:s.ingredient2,onCalculer:p},null,8,["nom","poids","nbIngredient","ingredient1","ingredient2"])])),64))]),e("div",F,[V,e("div",w,[y,e("span",null,l(n.poidsTotalAvecEau),1)]),k,e("div",C,[L,e("span",null,l(n.poidsTotalSansEau),1)]),q,e("div",D,[N,M(e("input",{type:"number","onUpdate:modelValue":d[0]||(d[0]=s=>o.value=s),onKeyup:h},null,544),[[f,o.value]])])]),e("div",K,[R,e("div",U,[j,e("span",null,l(n.blanche),1)]),z,e("div",G,[H,e("span",null,l(n.ble),1)]),J,e("div",O,[Q,e("span",null,l(n.seigle),1)]),W,e("div",X,[Y,e("span",null,l(n.eau),1)]),Z,e("div",$,[ee,e("span",null,l(n.sel),1)]),te,e("div",ne,[se,e("span",null,l(n.levure),1)]),oe,e("div",le,[ae,e("span",null,l(n.pateFermentee),1)])]),ie]))}},ge=v(he,[["__scopeId","data-v-fdcac0be"]]);export{ge as default};
