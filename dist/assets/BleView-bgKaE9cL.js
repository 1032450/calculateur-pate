import{_ as m,r as f,b as x,o as i,c as d,d as e,F as b,e as E,t as n,f as T,w as M,v as S,g as A,p as B,h as F}from"./index-6BhNm1cH.js";import{P as V}from"./PainInput-7ckxKZka.js";const t=c=>(B("data-v-e7fea49b"),c=c(),F(),c),g=t(()=>e("h1",{class:"titre"}," Blé ",-1)),P={class:"pain"},k=t(()=>e("hr",null,null,-1)),w={class:"poids-total"},y=t(()=>e("div",{class:"texte-centre"}," Poids total ",-1)),I={class:"texte"},C=t(()=>e("span",null,"Avec eau",-1)),N=t(()=>e("hr",null,null,-1)),D={class:"texte"},L=t(()=>e("span",null,"Sans eau",-1)),q=t(()=>e("hr",{class:"grosse-ligne-point"},null,-1)),K={class:"texte"},R=t(()=>e("span",null,"Poids voulu",-1)),U={class:"input"},X={class:"recette"},j=t(()=>e("div",{class:"texte-centre"}," Recette ",-1)),z={class:"texte"},G=t(()=>e("span",null,"Blé",-1)),H=t(()=>e("hr",null,null,-1)),J={class:"texte"},O=t(()=>e("span",null,"Blanc",-1)),Q=t(()=>e("hr",null,null,-1)),W={class:"texte"},Y=t(()=>e("span",null,"Eau",-1)),Z=t(()=>e("hr",null,null,-1)),$={class:"texte"},ee=t(()=>e("span",null,"Sel",-1)),te=t(()=>e("hr",null,null,-1)),se={class:"texte"},oe=t(()=>e("span",null,"Levure",-1)),le=t(()=>e("hr",null,null,-1)),ne={class:"texte"},ae=t(()=>e("span",null,"Pâte Fermentée",-1)),ce=t(()=>e("hr",null,null,-1)),p=.65,ue=.65,ie=.35,de=.02,_e=.006,re=.15,pe={__name:"BleView",setup(c){const o=f(""),a=[{nom:"Carré",poids:650,total:0},{nom:"Miche",poids:650,total:0}],s=x({poidsTotalAvecEau:0,poidsTotalSansEau:0,ble:0,blanc:0,eau:0,sel:0,levure:0,pateFermentee:0});function h(r,u){s.poidsTotalAvecEau=0;for(let l=0;l<a.length;l++)a[l].nom===r&&(a[l].total=u),s.poidsTotalAvecEau+=a[l].total;s.poidsTotalAvecEau=Math.round(s.poidsTotalAvecEau),s.poidsTotalSansEau=Math.round(s.poidsTotalAvecEau/(1+p))}function v(){o.value!==""&&(o.value="",_())}function _(){s.ble=Math.round(o.value*ue),s.blanc=Math.round(o.value*ie),s.eau=Math.round(o.value*p),s.sel=Math.round(o.value*de),s.levure=Math.round(o.value*_e),s.pateFermentee=Math.round(o.value*re)}return(r,u)=>(i(),d("div",null,[g,e("div",P,[(i(),d(b,null,E(a,l=>e("div",{key:l.nom},[k,A(V,{nom:l.nom,poids:l.poids,onCalculer:h},null,8,["nom","poids"])])),64))]),e("div",w,[y,e("div",I,[C,e("span",null,n(s.poidsTotalAvecEau||""),1)]),N,e("div",D,[L,e("span",null,n(s.poidsTotalSansEau||""),1)]),q,e("div",K,[R,e("span",U,[o.value!==""?(i(),d("button",{key:0,class:"button",onClick:v}," X ")):T("",!0),M(e("input",{class:"qte",type:"number","onUpdate:modelValue":u[0]||(u[0]=l=>o.value=l),onKeyup:_},null,544),[[S,o.value]])])])]),e("div",X,[j,e("div",z,[G,e("span",null,n(s.ble||""),1)]),H,e("div",J,[O,e("span",null,n(s.blanc||""),1)]),Q,e("div",W,[Y,e("span",null,n(s.eau||""),1)]),Z,e("div",$,[ee,e("span",null,n(s.sel||""),1)]),te,e("div",se,[oe,e("span",null,n(s.levure||""),1)]),le,e("div",ne,[ae,e("span",null,n(s.pateFermentee||""),1)])]),ce]))}},me=m(pe,[["__scopeId","data-v-e7fea49b"]]);export{me as default};
