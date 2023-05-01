"use strict";(self.webpackChunkgoit_react_hw_07_phonebook=self.webpackChunkgoit_react_hw_07_phonebook||[]).push([[384],{2384:function(t,e,n){n.r(e),n.d(e,{default:function(){return D}});var a=n(2791),s=n(9434),c=n(6907),r=n(3634),u=n(5984),o=function(t){return t.contacts.items},i=function(t){return t.contacts.isLoading},l=function(t){return t.contacts.error},m=n(1686),d="ContactForm_formBox__cXiHe",h="ContactForm_labelled__4AQPz",_="ContactForm_inputName__a8jFO",x="ContactForm_label__-cVXI",f="ContactForm_btn__wll+u",p=n(3329),b=function(){var t=(0,s.I0)(),e=(0,s.v9)(o),n=(0,u.x0)(),a=(0,u.x0)();return(0,p.jsxs)("form",{className:d,onSubmit:function(n){n.preventDefault();var a,s=n.target;e.forEach((function(t){s.name.value.toLowerCase()===t.name.toLowerCase()&&(a=!0)})),a?m.Notify.warning("".concat(s.name.value," is already in your Contacts."),{timeout:3e3,position:"left-top",closeButton:!0}):t((0,r.uK)({name:s.name.value,number:s.number.value})),s.reset()},children:[(0,p.jsxs)("div",{className:h,children:[(0,p.jsx)("label",{className:x,htmlFor:n,children:"Name"}),(0,p.jsx)("input",{id:n,type:"text",name:"name",className:_,placeholder:"Enter contact's name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f\\u0104\\u0105\\u0106\\u0107\\u0118\\u0119\\u0141\\u0142\\u0143\\u0144\\u00D3\\u00F3\\u015A\\u015B\\u0179\\u017A\\u017B\\u017C]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f \\u0104\\u0105\\u0106\\u0107\\u0118\\u0119\\u0141\\u0142\\u0143\\u0144\\u00D3\\u00F3\\u015A\\u015B\\u0179\\u017A\\u017B\\u017C])?[a-zA-Z\u0430-\u044f\u0410-\u042f \\u0104\\u0105\\u0106\\u0107\\u0118\\u0119\\u0141\\u0142\\u0143\\u0144\\u00D3\\u00F3\\u015A\\u015B\\u0179\\u017A\\u017B\\u017C]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,p.jsxs)("div",{className:h,children:[(0,p.jsx)("label",{className:x,htmlFor:a,children:"Number"}),(0,p.jsx)("input",{id:a,type:"tel",name:"number",className:_,placeholder:"Enter contact's number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,p.jsx)("button",{type:"submit",className:f,name:"submit",children:"Add contact"})]})},j=n(1634),v="Filter_filter__vxThR",C="Filter_inputFilter__8QMOp",N="Filter_labelled__pfixk",F=function(){var t=(0,s.I0)(),e=(0,u.x0)();return(0,p.jsx)("div",{className:v,children:(0,p.jsxs)("div",{className:N,children:[(0,p.jsx)("label",{htmlFor:e,children:"Find contacts"}),(0,p.jsx)("input",{className:C,id:e,type:"search",placeholder:"Find contacts by name",onChange:function(e){return function(e){t((0,j.T)(e.currentTarget.value))}(e)}})]})})},L=n(3433),g=(0,n(6916).P1)([o,function(t){return t.filter}],(function(t,e){return(0,L.Z)(t).sort((function(t,e){return t.name.localeCompare(e.name)})).filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),y="ContactsListElement_contactLi__fsEDQ",A="ContactsListElement_contact__8RVfB",w="ContactsListElement_btnDelete__RZfFE",B=function(t){var e=t.contact,n=(0,s.I0)();return(0,p.jsxs)("div",{className:y,children:[(0,p.jsxs)("p",{className:A,children:[(0,p.jsx)("span",{style:{color:"#".concat(Math.floor(16777215*Math.random()).toString(16)),textShadow:"1px 1px black"},children:"\u273f"})," ",e.name,":"]}),(0,p.jsx)("p",{className:A,children:e.number}),(0,p.jsx)("button",{type:"button",className:w,onClick:function(){n((0,r.GK)(e.id))},children:"\u2620"})]})},k={contactsList:"ContactsList_contactsList__ZQI1L",title:"ContactsList_title__Nc-fb"},E=function(){var t=(0,s.v9)(g),e=(0,s.v9)(i);return(0,p.jsxs)("div",{className:k.contactsListBox,children:[(0,p.jsxs)("h4",{className:k.title,children:["You have ",t.length," contact",1===t.length?null:"s"]}),(0,p.jsxs)("ul",{className:k.contactsList,children:[!!e&&(0,p.jsx)("b",{children:"Loading contacts..."}),!!t&&t.map((function(t){return(0,p.jsx)("li",{children:(0,p.jsx)(B,{contact:t})},t.id)}))]})]})};function D(){var t=(0,s.I0)(),e=(0,s.v9)(i),n=(0,s.v9)(l);return(0,a.useEffect)((function(){t((0,r.yF)())}),[t]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c.ql,{children:(0,p.jsx)("title",{children:"Phonebook"})}),(0,p.jsx)(b,{}),(0,p.jsx)(F,{}),(0,p.jsx)(E,{}),!!e&&!n&&(0,p.jsx)("b",{children:"Request in progress..."})]})}}}]);
//# sourceMappingURL=384.4c516b22.chunk.js.map