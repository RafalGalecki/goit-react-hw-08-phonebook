"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[174],{1174:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var a,s=n(2791),o=n(9434),r=n(6907),c=n(3634),u=n(5984),i=function(e){return e.contacts.items},l=function(e){return e.contacts.isLoading},d=function(e){return e.contacts.error},m=n(1686),h=n.n(m),f="ContactForm_formBox__cXiHe",x="ContactForm_labelled__4AQPz",_="ContactForm_inputName__a8jFO",p="ContactForm_label__-cVXI",b="ContactForm_btn__wll+u",j=n(3329),v=function(){var e=(0,o.I0)(),t=(0,o.v9)(i),n=(0,u.x0)(),a=(0,u.x0)();return(0,j.jsxs)("form",{className:f,onSubmit:function(n){n.preventDefault();var a,s=n.target;t.forEach((function(e){s.name.value.toLowerCase()===e.name.toLowerCase()&&(a=!0)})),a&&m.Notify.warning("".concat(s.name.value," is already in your Contacts."),{backgroundColor:"#FF1493",timeout:3e3,position:"left-top"}),a||(e((0,c.uK)({name:s.name.value,number:s.number.value})),m.Notify.success("".concat(s.name.value," has been added to your Contacts."),{timeout:3e3,position:"left-top",background:"#FF1493"})),s.reset()},children:[(0,j.jsxs)("div",{className:x,children:[(0,j.jsx)("label",{className:p,htmlFor:n,children:"Name"}),(0,j.jsx)("input",{id:n,type:"text",name:"name",className:_,placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f\\u0104\\u0105\\u0106\\u0107\\u0118\\u0119\\u0141\\u0142\\u0143\\u0144\\u00D3\\u00F3\\u015A\\u015B\\u0179\\u017A\\u017B\\u017C]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f \\u0104\\u0105\\u0106\\u0107\\u0118\\u0119\\u0141\\u0142\\u0143\\u0144\\u00D3\\u00F3\\u015A\\u015B\\u0179\\u017A\\u017B\\u017C])?[a-zA-Z\u0430-\u044f\u0410-\u042f \\u0104\\u0105\\u0106\\u0107\\u0118\\u0119\\u0141\\u0142\\u0143\\u0144\\u00D3\\u00F3\\u015A\\u015B\\u0179\\u017A\\u017B\\u017C]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,j.jsxs)("div",{className:x,children:[(0,j.jsx)("label",{className:p,htmlFor:a,children:"Number"}),(0,j.jsx)("input",{id:a,type:"tel",name:"number",className:_,placeholder:"Enter number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,j.jsx)("button",{type:"submit",className:b,name:"submit",children:"Add contact"})]})},C=n(1634),N="Filter_filter__vxThR",F="Filter_inputFilter__8QMOp",w="Filter_labelled__pfixk",g=function(){var e=(0,o.I0)(),t=(0,u.x0)();return(0,j.jsx)("div",{className:N,children:(0,j.jsxs)("div",{className:w,children:[(0,j.jsx)("label",{htmlFor:t,children:"Find contacts"}),(0,j.jsx)("input",{className:F,id:t,type:"search",placeholder:"Enter name",onChange:function(t){return function(t){e((0,C.T)(t.currentTarget.value))}(t)}})]})})},y=n(3433),L=(0,n(6916).P1)([i,function(e){return e.filter}],(function(e,t){return(0,y.Z)(e).sort((function(e,t){return e.name.localeCompare(t.name)})).filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),A=n(7829),k="ContactsListElement_contactLi__fsEDQ",E="ContactsListElement_contact__8RVfB",Z="ContactsListElement_btnDelete__RZfFE",B=n(9135),z=function(e){var t=e.contact,n=(0,o.I0)();return(0,j.jsxs)("div",{className:k,children:[(0,j.jsxs)("p",{className:E,children:[(0,j.jsx)("span",{style:{color:"#".concat(Math.floor(16777215*Math.random()).toString(16)),textShadow:"1px 1px black"},children:"\u273f"})," ",t.name,":"]}),(0,j.jsx)("p",{className:E,children:t.number}),(0,j.jsx)("button",{type:"button",className:Z,onClick:function(){h().Confirm.show("Please confirm","Are you sure to delete ".concat(t.name,"?"),"Yes","No",(function(){n((0,c.GK)(t.id))}))},children:(0,j.jsx)(B._Pm,{})})]})},P=n(9439),D=n(168),I=n(6444).ZP.div(a||(a=(0,D.Z)(["\n  position: fixed;\n  width: 100%;\n  left: 50%;\n  bottom: 40px;\n  height: 20px;\n  font-size: 3rem;\n  z-index: 25;\n  cursor: pointer;\n  color: rgba(55, 0, 201, 0.5);\n"]))),T=function(){var e=(0,s.useState)(!1),t=(0,P.Z)(e,2),n=t[0],a=t[1];return window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop;e>100?a(!0):e<=100&&a(!1)})),(0,j.jsx)(I,{children:(0,j.jsx)(B.nbd,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:n?"inline":"none"}})})},M={contactsList:"ContactsList_contactsList__ZQI1L",title:"ContactsList_title__Nc-fb"},Q=function(){var e=(0,o.v9)(L),t=(0,o.v9)(l);return(0,j.jsxs)("div",{className:M.contactsListBox,children:[(0,j.jsxs)("h4",{className:M.title,children:["You have ",e.length," contact",1===e.length?null:"s"]}),(0,j.jsxs)("ul",{className:M.contactsList,children:[!!t&&(0,j.jsx)(A.Z,{}),!!e&&e.map((function(e){return(0,j.jsx)("li",{children:(0,j.jsx)(z,{contact:e})},e.id)})),(0,j.jsx)(T,{})]})]})};function S(){var e=(0,o.I0)(),t=(0,o.v9)(l),n=(0,o.v9)(d);return(0,s.useEffect)((function(){e((0,c.yF)())}),[e]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r.ql,{children:(0,j.jsx)("title",{children:"Phonebook"})}),(0,j.jsx)(v,{}),(0,j.jsx)(g,{}),(0,j.jsx)(Q,{}),!!t&&!n&&(0,j.jsx)(A.Z,{})]})}}}]);
//# sourceMappingURL=174.6eb04d20.chunk.js.map