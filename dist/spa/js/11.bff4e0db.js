(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{e5f0:function(e,l,t){"use strict";t.r(l);var a=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"items-start"},[t("div",{staticClass:"q-pa-md  q-gutter-md"},[t("q-select",{attrs:{filled:"",multiple:"",options:e.optionsTonner,"use-chips":"","stack-label":"",label:"Tonner"},model:{value:e.tonner,callback:function(l){e.tonner=l},expression:"tonner"}}),t("q-select",{attrs:{filled:"",multiple:"",options:e.optionsDrum,"use-chips":"","stack-label":"",label:"Drum"},model:{value:e.drum,callback:function(l){e.drum=l},expression:"drum"}}),t("q-select",{attrs:{filled:"",multiple:"",options:e.optionsTrays,"use-chips":"","stack-label":"",label:"Trays"},model:{value:e.trays,callback:function(l){e.trays=l},expression:"trays"}}),t("q-checkbox",{attrs:{label:"Tonner Collection Unit"},model:{value:e.tonnerCollection,callback:function(l){e.tonnerCollection=l},expression:"tonnerCollection"}}),t("q-checkbox",{attrs:{label:"Fuser"},model:{value:e.fuser,callback:function(l){e.fuser=l},expression:"fuser"}}),t("q-checkbox",{attrs:{label:"ADF Rollers "},model:{value:e.adfRollers,callback:function(l){e.adfRollers=l},expression:"adfRollers"}}),t("q-input",{attrs:{label:"Description",outlined:"",type:"textarea"},model:{value:e.description,callback:function(l){e.description=l},expression:"description"}}),t("div",{staticClass:"row"},[t("q-uploader",{staticClass:"col-12",attrs:{url:"http://localhost:4444/upload",label:"Photos",multiple:"",batch:""}})],1)],1),t("q-footer",{staticClass:"shadow-up-5"},[t("q-btn",{staticClass:"col-12 q-pa-md full-width",attrs:{color:"blue",label:"Save"},on:{click:e.saveService}})],1)],1)},o=[],s={name:"Printer_Service",data(){return{tonner:null,drum:null,tonnerCollection:!1,fuser:!1,adfRollers:!1,trays:null,description:null,optionsTonner:["Black","Yellow","Cyan","Magenta"],optionsDrum:["Black","Yellow","Cyan","Magenta"],optionsTrays:["Tray 1","Tray 2","Tray 3","Tray 4"]}},methods:{saveService:function(){this.$notify.success("Saved service")}}},n=s,r=t("2877"),c=t("ddd8"),i=t("8f8e"),u=t("27f9"),p=t("ee89"),d=t("7ff0"),f=t("9c40"),b=t("eebe"),m=t.n(b),v=Object(r["a"])(n,a,o,!1,null,null,null);l["default"]=v.exports;m()(v,"components",{QSelect:c["a"],QCheckbox:i["a"],QInput:u["a"],QUploader:p["a"],QFooter:d["a"],QBtn:f["a"]})}}]);