(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[608],{1567:function(e,t,a){Promise.resolve().then(a.bind(a,3095)),Promise.resolve().then(a.t.bind(a,1749,23))},3095:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var n=a(7437);function s(e){return(0,n.jsx)("label",{className:e.className,htmlFor:e.htmlFor,children:e.text})}function o(e){return(0,n.jsx)("input",{defaultChecked:e.defaultChecked,id:e.id,checked:e.checked,type:"checkbox",name:e.name,onChange:t=>e.onChange(t)})}var i=a(2265);function c(e){return(0,n.jsx)("button",{className:e.className,disabled:e.disabled,onClick:t=>e.onClick(t),children:e.title})}function l(e){return(0,n.jsx)("input",{type:"text",id:e.id,defaultValue:e.defaultValue,readOnly:e.readOnly,className:e.className})}function r(e){return(0,n.jsx)("input",{type:"number",min:e.min,max:e.max,id:e.id,value:e.value,onChange:t=>e.onChange(t),disabled:e.disabled,className:e.className})}function d(e){return(0,n.jsx)("input",{step:e.step,type:"range",min:e.min,max:e.max,id:e.id,value:e.value,onChange:t=>e.onChange(t)})}var u=a(5003),m=a.n(u);function p(){let[e,t]=(0,i.useState)(!0),[a,u]=(0,i.useState)(!0),[p,h]=(0,i.useState)(!0),[x,b]=(0,i.useState)(!1),[j,f]=(0,i.useState)(!1),[_,C]=(0,i.useState)(10),[g,v]=(0,i.useState)(1),[w,N]=(0,i.useState)(!1),[k,F]=(0,i.useState)(!1),[O,y]=(0,i.useState)(0),[S,R]=(0,i.useState)("");async function P(n){switch(n.target.id){case"uppercaseOption":a||p||x?t(!e):(t(!e),u(!0));break;case"lowercaseOption":e||p||x?u(!a):(u(!a),t(!0));break;case"digitsOption":e||!p||x||a?h(!p):(h(!p),u(!0)),N(!0);break;case"specialCharOptions":e||p||!x||a?b(!x):(b(!x),u(!0)),F(!0),console.log("special char count ".concat(O))}j&&(f(!1),A())}async function E(t){t.preventDefault();let n=await fetch("".concat("http://127.0.0.1:8000/api/passwd/","?passw_length=").concat(_,"&uppercase=").concat(e,"&lowercase=").concat(a,"&min_digits=").concat(g,"&min_spec_chars=").concat(O,"&digits=").concat(p,"&spec_chars=").concat(x));R((await n.json()).gen_password),f(!0)}function I(e){C(e.target.value),j&&(f(!1),A())}async function L(e){e.preventDefault();try{await navigator.clipboard.writeText(S),alert("Text copied to clipboard")}catch(e){alert("Error copying to clipboard",e)}}function A(){R(""),f(!1)}return(0,i.useEffect)(()=>{k&&(x?y(1):x||y(0),F(!1)),w&&(p?v(1):p||v(0),N(!1))}),(0,n.jsxs)("form",{className:m().mainForm,children:[(0,n.jsxs)("div",{className:m().optionCountRow,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{checked:e,id:"uppercaseOption",onChange:P}),(0,n.jsx)(s,{className:m().optionLabels,text:"A-Z",htmlFor:"uppercaseOption"})]}),(0,n.jsx)("div",{children:(0,n.jsx)(r,{min:10,max:50,value:_,id:"password-length-number",onChange:I,className:m().numberAdjust})})]}),(0,n.jsxs)("div",{className:m().optionCountRow,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{checked:a,id:"lowercaseOption",onChange:P}),(0,n.jsx)(s,{className:m().optionLabels,text:"a-z",htmlFor:"lowercaseOption"})]}),(0,n.jsx)(d,{min:10,max:50,value:_,id:"password-length-slider",onChange:I})]}),(0,n.jsxs)("div",{className:m().optionCountRow,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{checked:p,id:"digitsOption",onChange:P}),(0,n.jsx)(s,{className:m().optionLabels,text:"0-9",htmlFor:"digitsOption"})]}),(0,n.jsx)(r,{min:"1",max:_-2-O,disabled:p?"":"disabled",value:g,id:"digits-count",onChange:function(e){v(e.target.value),j&&(f(!1),A())}})]}),(0,n.jsxs)("div",{className:m().optionCountRow,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{checked:x,id:"specialCharOptions",onChange:P}),(0,n.jsx)(s,{className:m().optionLabels,text:"!@#$%^&*",htmlFor:"specialCharOptions"})]}),(0,n.jsx)(r,{min:"0",max:_-2-g,disabled:x?"":"disabled",value:O,id:"spec-char-count",onChange:function(e){y(e.target.value),j&&(f(!1),A())}})]}),(0,n.jsxs)("div",{className:m().buttonRow,children:[(0,n.jsx)(c,{title:j?"Regenerate Password":"Generate Password",onClick:E,className:m().buttonItem}),(0,n.jsx)(c,{title:"Copy to Clipboard",onClick:L,disabled:j?"":"disabled",className:m().buttonItem}),(0,n.jsx)(c,{title:"Clear Password",onClick:A,disabled:j?"":"disabled",className:m().buttonItem})]}),(0,n.jsx)(l,{id:"generatedPassword",defaultValue:S,readOnly:"readonly",className:m().textBox}),(0,n.jsx)("br",{})]})}},5003:function(e){e.exports={mainForm:"Form_mainForm__kRjiX",optionCountRow:"Form_optionCountRow__ou_9z",numberAdjust:"Form_numberAdjust__KH_3_",optionLabels:"Form_optionLabels__BvfV0",buttonRow:"Form_buttonRow__EfPeF",textBox:"Form_textBox__59jqu",buttonItem:"Form_buttonItem__mISk3"}}},function(e){e.O(0,[749,971,69,744],function(){return e(e.s=1567)}),_N_E=e.O()}]);