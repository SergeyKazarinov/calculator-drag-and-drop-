"use strict";(self.webpackChunkcalc=self.webpackChunkcalc||[]).push([[526],{2526:function(e,c,t){t.r(c),t.d(c,{default:function(){return xe}});var n,i=t(4456),s=t(4046),r="styles_filterCheckbox__JGt6Z",l="styles_switch__vVoz5",a="styles_input__pff3F",o="styles_slider__c62qi",u=t(184),_=function(){var e=(0,i.CG)((function(e){return e.checkbox.checkbox})),c=(0,i.TL)();return(0,u.jsx)("div",{className:r,children:(0,u.jsxs)("label",{className:l,htmlFor:"checkbox",children:[(0,u.jsx)("input",{type:"checkbox",id:"checkbox",defaultChecked:e,className:a,onChange:function(){c(s.Q.changeCheckbox())}}),(0,u.jsx)("div",{className:o})]})})},d="styles_cardElements__9lyWx",f="styles_cardElements_inactive__lAGv1",m=t(885),D=t(1067);!function(e){e.DISPLAY="display",e.EQUALS="equals",e.OPERAND="operand",e.DIGITS="digits"}(n||(n={}));var y=n,x="styles_container__JUFzM",g="styles_container_inactive__MO-Md",v="styles_display__wic0e",p=function(){var e=(0,i.CG)((function(e){return e.calcElmts.isDisplay})),c=(0,D.c)({type:"calcElement",item:{id:y.DISPLAY},collect:function(e){return{isDrag:e.isDragging()}}}),t=(0,m.Z)(c,2),n=t[0].isDrag,s=t[1];return(0,u.jsx)("div",{className:"".concat(x," ").concat((e||n)&&g),ref:e?null:s,children:(0,u.jsx)("div",{className:v,children:"0"})})},h=[7,8,9,4,5,6,1,2,3,0,","],b=["/","x","-","+"],E=t(914),j="styles_keyboard__mgWJ6",C="styles_grid__qOWDf",k="styles_grid_inactive__3nR1r",I=function(){var e=(0,i.CG)((function(e){return e.calcElmts.calcElements})).some((function(e){return e===y.DIGITS})),c=(0,D.c)({type:"calcElement",item:{id:y.DIGITS},collect:function(e){return{isDrag:e.isDragging()}}}),t=(0,m.Z)(c,2),n=t[0].isDrag,s=t[1],r=h.map((function(e,c){return 0===e?(0,u.jsx)(E.z,{type:"zero",title:e,disabled:!0},c):(0,u.jsx)(E.z,{type:y.DIGITS,title:e,disabled:!0},c)}));return(0,u.jsx)("div",{className:"".concat(j," ").concat(C," ").concat((e||n)&&k),ref:e?null:s,children:r})},N=t(2791),L="styles_container__Ytj5G",A="styles_container_inactive__SeMdA",S=function(){var e=(0,i.CG)((function(e){return e.calcElmts.calcElements})).some((function(e){return e===y.OPERAND})),c=(0,D.c)({type:"calcElement",item:{id:y.OPERAND},collect:function(e){return{isDrag:e.isDragging()}}}),t=(0,m.Z)(c,2),n=t[0].isDrag,s=t[1],r=(0,N.useMemo)((function(){return b.map((function(e,c){return(0,u.jsx)(E.z,{type:y.OPERAND,title:e,disabled:!0},c)}))}),[b]);return(0,u.jsx)("div",{className:"".concat(L," ").concat((e||n)&&A),ref:e?null:s,children:r})},T="styles_container__9aTrY",G="styles_container_inactive__c8jUp",P=function(){var e=(0,i.CG)((function(e){return e.calcElmts.calcElements})).some((function(e){return e===y.EQUALS})),c=(0,D.c)({type:"calcElement",item:{id:y.EQUALS},collect:function(e){return{isDrag:e.isDragging()}}}),t=(0,m.Z)(c,2),n=t[0].isDrag,s=t[1];return(0,u.jsx)("div",{className:"".concat(T," ").concat((e||n)&&G),ref:e?null:s,children:(0,u.jsx)(E.z,{type:y.EQUALS,title:"=",disabled:!0})})},O=function(){var e=(0,i.CG)((function(e){return e.checkbox.checkbox}));return(0,u.jsxs)("div",{className:"".concat(d," ").concat(!e&&f),children:[(0,u.jsx)(p,{}),(0,u.jsx)(S,{}),(0,u.jsx)(I,{}),(0,u.jsx)(P,{})]})},Q=t(8422),R=t(8677),Y="styles_container__Tr0f0",z="styles_container_inactive__hAkP+",H="styles_container_dropLine__21MQm",Z="styles_title__-WdXQ",U="styles_subtitle__NTCeK";var V=t.p+"static/media/icon.ff2a0d409c14819260b08f919e659b64.svg",M=function(e){var c=e.isHover,t=e.hasCalcElement,n=e.dropTarget,i=e.getItem,s=!t&&c&&i.id!==y.DISPLAY;return(0,u.jsxs)("div",{className:"".concat(Y," ").concat(s&&H," ").concat(!t&&z),ref:n,children:[t&&(0,u.jsx)("img",{src:V,alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438"}),t&&(0,u.jsx)("h2",{className:"title ".concat(Z),children:"\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0441\u044e\u0434\u0430"}),t&&(0,u.jsx)("p",{className:"title ".concat(U),children:"\u043b\u044e\u0431\u043e\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0438\u0437 \u043b\u0435\u0432\u043e\u0439 \u043f\u0430\u043d\u0435\u043b\u0438"})]})},q=t(1478),w="styles_container__vrAY+",W="styles_display__zaVqm",F=function(){var e=(0,i.TL)(),c=(0,i.CG)((function(e){return e.checkbox.checkbox})),t=(0,i.CG)((function(e){return e.calculator.display}));(0,N.useEffect)((function(){c&&e(q.c.clearCalculator())}),[c]);return(0,u.jsx)("div",{className:"".concat(w),onDoubleClick:function(){c&&e(R.V.setDisplay(!1))},children:(0,u.jsx)("div",{className:W,children:t})})},J="styles_container__C4wDl",K="styles_hoverDrop__TagIq",X="styles_dropLine__ykKhQ",B=function(e,c,t){var n=(0,i.TL)(),s=(0,Q.L)({accept:e,drop:function(e){e.id===y.DISPLAY?n(R.V.setDisplay(!0)):n(R.V.setCalcElement({id:e.id,arrayId:t}))},collect:function(e){return{isHover:e.isOver(),getItem:e.getItem()}}}),r=(0,m.Z)(s,2),l=r[0],a=l.isHover,o=l.getItem,u=r[1],_=(0,D.c)({type:c,item:{id:t},collect:function(e){return{isDrag:e.isDragging()}}}),d=(0,m.Z)(_,2),f=d[0].isDrag;return{isHover:a,getItem:o,dropTarget:u,dragRef:d[1],isDrag:f}},$=t(8200),ee="styles_container__EDTMh",ce="styles_container_inactive__OJFEN",te="styles_dropLine__LWAQS",ne=function(e){var c=e.onDoubleClick,t=(0,i.TL)(),n=(0,i.CG)((function(e){return e.checkbox.checkbox})),s=B("calcElement","calcElement",y.OPERAND),r=s.isHover,l=s.getItem,a=s.isDrag,o=s.dropTarget,_=s.dragRef,d=function(e){n&&c(e)},f=function(e){t(q.c.setOperator(e))},m=(0,N.useMemo)((function(){return $.DZ.map((function(e,c){return(0,u.jsx)(E.z,{type:y.OPERAND,title:e,disabled:n,onClick:f},c)}))}),[$.DZ,n]);return(0,u.jsx)("div",{ref:n?_:null,children:(0,u.jsx)("div",{className:"".concat(ee," ").concat(a&&ce," ").concat(r&&l.id!==y.DISPLAY&&te),onDoubleClick:function(){return d(y.OPERAND)},ref:o,children:m})})},ie="styles_keyboard__Nae6K",se="styles_keyboard_inactive__Cr5TC",re="styles_grid__Vqxo5",le="styles_dropLine__9YCyb",ae=function(e){var c=e.onDoubleClick,t=B("calcElement","calcElement",y.DIGITS),n=t.isHover,s=t.getItem,r=t.dropTarget,l=t.dragRef,a=t.isDrag,o=(0,i.CG)((function(e){return e.checkbox.checkbox})),_=(0,i.TL)(),d=function(e){o&&c(e)},f=function(e){_(q.c.setNumber(e))},m=$.jd.map((function(e,c){return 0===e?(0,u.jsx)(E.z,{type:"zero",title:e,disabled:o,onClick:f},c):(0,u.jsx)(E.z,{type:y.DIGITS,title:e,disabled:o,onClick:f},c)}));return(0,u.jsx)("div",{className:"".concat(ie," ").concat(n&&s.id!==y.DISPLAY&&le," ").concat(a&&se),ref:r,children:(0,u.jsx)("div",{className:"".concat(re),onDoubleClick:function(){d(y.DIGITS)},ref:o?l:null,children:m})})},oe="styles_container__fS-gN",ue="styles_container_inactive__1kbY6",_e="styles_dropLine__Zs5Hw",de=function(e){var c=e.onDoubleClick,t=B("calcElement","calcElement",y.EQUALS),n=t.isHover,s=t.getItem,r=t.isDrag,l=t.dropTarget,a=t.dragRef,o=(0,i.CG)((function(e){return e.checkbox.checkbox})),_=(0,i.TL)(),d=function(e){o&&c(e)};return(0,u.jsx)("div",{ref:o?a:null,children:(0,u.jsx)("div",{className:"".concat(oe," ").concat(r&&ue," ").concat(n&&s.id!==y.DISPLAY&&_e),onDoubleClick:function(){d(y.EQUALS)},ref:l,children:(0,u.jsx)(E.z,{type:y.EQUALS,title:"=",disabled:o,onClick:function(){_(q.c.setEqualNumber())}})})})},fe=function(){var e=(0,i.TL)(),c=(0,i.CG)((function(e){return e.calcElmts.isDisplay})),t=(0,i.CG)((function(e){return e.calcElmts.calcElements})),n=(0,Q.L)({accept:"calcElement",drop:function(c){!function(c){c.id===y.DISPLAY?e(R.V.setDisplay(!0)):e(R.V.addCalcElement(c.id))}(c)},collect:function(e){return{isHover:e.isOver(),getItem:e.getItem(),canDrop:e.canDrop()}}}),s=(0,m.Z)(n,2),r=s[0],l=r.isHover,a=r.getItem,o=r.canDrop,_=s[1],d=!c&&!t.length,f=o&&!c&&a.id===y.DISPLAY,D=function(c){e(R.V.removeCalcElement(c))},x=t.map((function(e){return e===y.OPERAND?(0,u.jsx)(ne,{onDoubleClick:D},y.OPERAND):e===y.DIGITS?(0,u.jsx)(ae,{onDoubleClick:D},y.DIGITS):(0,u.jsx)(de,{onDoubleClick:D},y.EQUALS)}));return(0,u.jsxs)("div",{className:"".concat(J," ").concat(l&&!!d&&K," ").concat(f&&X),children:[c&&(0,u.jsx)(F,{}),x,(0,u.jsx)(M,{isHover:l,hasCalcElement:d,isDisplay:c,dropTarget:_,getItem:a})]})},me=t(5287),De=t(6401),ye="style_mainGrid__TFgOQ",xe=function(){return(0,u.jsxs)("section",{className:ye,children:[(0,u.jsx)(_,{}),(0,u.jsxs)(me.W,{backend:De.PD,children:[(0,u.jsx)(O,{}),(0,u.jsx)(fe,{})]})]})}}}]);
//# sourceMappingURL=526.29282bda.chunk.js.map