(this["webpackJsonpreact-formik-wizard-example"]=this["webpackJsonpreact-formik-wizard-example"]||[]).push([[0],{64:function(e,t,n){e.exports=n(82)},65:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);n(65);var a=n(0),r=n.n(a),l=n(23),i=n.n(l),o=n(41),c=n(42),u=n(57),s=n(19),d=n(95),m=n(83),p=n(101),b=n(99),f=n(100),h=n(96),E=n(26),v=n(98),g=n(3),y=n(55),x=n(94),S=function(e){var t=e.steps,n=e.currentStep,a=e.completedSteps,l=e.setCurrentStep,i=function(e){return n===e},o=function(e){return function(e){return a[e]}(e)?"green":i(e)||n>e?"black":"lightgrey"};return r.a.createElement("div",{style:{display:"flex",height:"40px"}},t.map((function(e,t){return r.a.createElement("div",{key:e.name,style:{display:"flex",alignItems:"center"}},!!t&&r.a.createElement("div",{style:{width:"120px",height:"1px",borderRight:0,borderLeft:0,backgroundColor:o(t),transition:"0.3s linear background-color"}}),r.a.createElement("button",{style:{borderRadius:"50%",backgroundColor:i(t)||n>t?"black":"white",width:i(t)?"60px":"40px",height:i(t)?"60px":"40px",borderWidth:i(t)?"3px":"1px",borderColor:"white",outline:"none",color:i(t)||n>t?"white":"black",transition:".1s ease height"},onClick:function(){return l(t)}},t+1))})))},k=function(e){var t=e.currentStep,n=e.children;return r.a.createElement("div",null,n[t])},w=function(e){var t=e.step,n=e.field,a=Object(E.d)().setFieldValue;return r.a.createElement(p.a,{label:function(){return n.label}},r.a.createElement(E.a,{name:"".concat(t.id,".").concat(n.id)},(function(e){var t=e.field;return function(e){switch(e.type){case"text":return r.a.createElement(b.a,Object.assign({},e,{value:"hello",initialState:{value:e.value}}));case"number":return r.a.createElement(b.a,Object.assign({type:"number"},e));case"combobox":return r.a.createElement(f.a,Object.assign({options:e.options,mapOptionToString:function(e){return e.label}},e));case"date":return r.a.createElement(h.a,{value:e.value,onChange:function(t){var n=t.date;return a(e.name,n)}});default:return r.a.createElement(b.a,Object.assign({},e))}}(Object(c.a)(Object(c.a)({},n),t))})))},C=function(e){var t=e.step;return r.a.createElement("div",null,r.a.createElement("h2",null,t.name),r.a.createElement("div",null,t.sections.map((function(e){return r.a.createElement("div",{key:t.id},r.a.createElement("h3",null,e.name),e.fields.map((function(e){return r.a.createElement(w,{field:e,step:t,key:e.id})})))}))))};function O(e){var t=r.a.useState(0),n=Object(o.a)(t,2),a=n[0],l=n[1],i=r.a.useState({}),c=Object(o.a)(i,1)[0],u=e.wizard;return r.a.createElement("div",null,r.a.createElement("h1",null,u.name),r.a.createElement(S,{currentStep:a,steps:u.steps,completedSteps:c,setCurrentStep:l}),r.a.createElement(E.c,{initialValues:{personal_info:{first_name:"hello"}},onSubmit:function(t){return e.onComplete(t)}},r.a.createElement(E.b,null,r.a.createElement(k,{currentStep:a},u.steps.map((function(e,t){return r.a.createElement(C,{step:e,key:t})}))),r.a.createElement(y.b,null,r.a.createElement(x.a,{span:[3,3,3]},0!==a&&r.a.createElement(v.a,{onClick:function(){return l(0===a?0:a-1)},shape:g.b.pill},"Previous")),r.a.createElement(x.a,{span:[1,4,3]},a===u.steps.length-1?r.a.createElement(v.a,{shape:g.b.pill,type:"submit"},"Save"):r.a.createElement(v.a,{shape:g.b.pill,onClick:function(){return l(a===u.steps.length-1?0:a+1)}},"Next"))))))}var _=function(e){var t=e.wizard,n=e.onComplete,a=new u.a;return r.a.createElement(s.a,{value:a},r.a.createElement(d.a,{theme:m.a},r.a.createElement(O,{wizard:t,onComplete:n})))},j=(n(81),function(){return r.a.createElement(_,{wizard:{name:"JSON Wizard",settings:{disableNextUntilValid:!0,disableSubmitUntilValid:!0,useSections:!0},steps:[{name:"Personal Info",id:"personal_info",sections:[{name:"Biodata",fields:[{label:"First Name",id:"first_name",type:"text",required:!0},{label:"Last Name",id:"last_name",type:"text",required:!0},{label:"Date of Birth",id:"dob",type:"date",required:!0}]}]},{name:"Education",id:"education",sections:[{name:"High School",fields:[{label:"Name",id:"highschool_name",type:"text",required:!0},{label:"GPA",id:"highschool_gpa",type:"number",required:!0}]}]},{name:"Medical",id:"medical",sections:[{name:"Current conditions",fields:[{label:"Do you have any current conditions?",id:"current_conditions_available",type:"select",options:[{id:"1",label:"Yes"},{id:"2",label:"No"}],required:!0},{label:"If yes, list all conditions you have",id:"all_conditions",type:"combobox",options:[{id:"1",label:"Diabetes"},{id:"2",label:"HBP"}],required:!0}]}]}],validations:{}},onComplete:function(e){console.log(e)}})});i.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.4c91335c.chunk.js.map