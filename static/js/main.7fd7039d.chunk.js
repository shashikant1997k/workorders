(this.webpackJsonpworkorder=this.webpackJsonpworkorder||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('{"job":[{"jobname":"job#221","workorders":[{"name":"WorkOrder#1","Date":"2020-04-20T00:00:00.000Z"},{"name":"WorkOrder#2","Date":"2020-04-21T00:00:00.000Z"},{"name":"WorkOrder#3","Date":"2020-04-22T00:00:00.000Z"},{"name":"WorkOrder#4","Date":"2020-04-25T00:00:00.000Z"}]},{"jobname":"job#222","workorders":[{"name":"WorkOrder#1","Date":"2020-04-21T00:00:00.000Z"},{"name":"WorkOrder#2","Date":"2020-04-23T00:00:00.000Z"},{"name":"WorkOrder#3","Date":"2020-04-25T00:00:00.000Z"}]}]}')},,,function(e){e.exports=JSON.parse('{"Employess":[{"Name":"Alice"},{"Name":"Bob"},{"Name":"Carol"}]}')},,,,,function(e,r,n){},function(e,r,n){},function(e,r,n){},,function(e,r,n){"use strict";n.r(r);var t=n(1),a=n.n(t),o=n(8),c=n.n(o),s=(n(14),n(15),n(7)),i=n(4),d=n(9),j=n(6),m=(n(16),n(0));var u=function(){var e=Object(t.useState)([]),r=Object(i.a)(e,2),n=r[0],a=r[1],o=Object(t.useState)([]),c=Object(i.a)(o,2),u=c[0],b=c[1],l=Object(t.useState)([]),f=Object(i.a)(l,2),O=f[0],h=f[1];return Object(t.useEffect)((function(){var e=[],r=[],n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];j.job.forEach((function(t,a){t.workorders.forEach((function(t){var a="".concat(new Date(t.Date).getDate(),"-").concat(n[new Date(t.Date).getMonth()],"-").concat(new Date(t.Date).getFullYear());e.push(a),r.push(t.Date)}))})),e=Object(s.a)(new Set(e)),r=Object(s.a)(new Set(r)),e.sort((function(e,r){return new Date(e)-new Date(r)})),r.sort((function(e,r){return new Date(e)-new Date(r)})),a(e);var t=[];d.Employess.forEach((function(r,n){e.forEach((function(e,a){if(void 0===t[n]){t[n]={},t[n].name=r.Name;var o={date:e,name:"",jobname:""};t[n].workorders=[],t[n].workorders.push(o)}else{t[n].name=r.Name;var c={date:e,name:"",jobname:""};t[n].workorders.push(c)}}))})),h(t);var o,c=[];j.job.forEach((function(e,n){c[n]={},c[n].jobname=e.jobname,c[n].workorders=[],o=[],e.workorders.forEach((function(e){if(r.includes(e.Date)){o.push(r.indexOf(e.Date));var t={name:e.name,Date:e.Date};c[n].workorders.push(t)}}));r.forEach((function(e,r){var t,a;o.includes(r)||(t=r,a={name:"",Date:e},c[n].workorders.splice(t,0,a))}))})),b(c)}),[]),Object(m.jsxs)("div",{className:"assigned",children:[Object(m.jsx)("div",{className:"saveButton",children:Object(m.jsx)("button",{onClick:function(){console.log(O)},children:"Save"})}),Object(m.jsxs)("table",{children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{}),n.map((function(e,r){return Object(m.jsx)("th",{children:e},r)}))]})}),Object(m.jsx)("tbody",{children:O.map((function(e,r){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{className:"empName",children:e.name}),e.workorders.map((function(e,n){return Object(m.jsx)("td",{className:"workAssign","data-id":e.date,onDrop:function(e){return function(e,r){var n=JSON.parse(e.dataTransfer.getData("params"));if(""!==e.target.innerHTML)return alert("Already work assigned"),!1;if(new Date(e.target.dataset.id).toDateString()===new Date(n.item.Date).toDateString()){var t=u.map((function(e){return e.jobname===n.jobname?{jobname:e.jobname,workorders:e.workorders.map((function(e,r){return e.name===n.item.name?{name:"",Date:n.item.Date}:e}))}:{jobname:e.jobname,workorders:e.workorders}}));b(t);var a=O.map((function(e,t){if(t===r.ind){var a=e.workorders.map((function(e,t){return t===r.i?{date:e.date,name:n.item.name,jobname:n.jobname}:e}));return{name:e.name,workorders:a}}return e}));h(a)}else alert("Date mismatch")}(e,{ind:r,i:n})},onDragOver:function(e){return function(e){e.stopPropagation(),e.preventDefault()}(e)},children:""!==e.name?Object(m.jsxs)("div",{className:"con1",children:[Object(m.jsx)("div",{children:e.name}),Object(m.jsx)("div",{children:e.jobname})]}):null},n)}))]},r)}))})]}),Object(m.jsx)("table",{className:"unassigned",children:Object(m.jsx)("tbody",{children:u.map((function(e,r){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{className:"workTD"}),e.workorders.map((function(n,t){return""!==n.name?Object(m.jsx)("td",{className:"workTD",children:Object(m.jsxs)("div",{className:"con1",draggable:!0,onDragStart:function(t){return function(e,r){e.dataTransfer.setData("params",JSON.stringify(r))}(t,{item:n,jobname:e.jobname,ind:r})},children:[Object(m.jsx)("div",{children:n.name}),Object(m.jsx)("div",{children:e.jobname})]})},t):Object(m.jsx)("td",{className:"unassigned"},t)}))]},r)}))})})]})};var b=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(u,{})})};c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(b,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.7fd7039d.chunk.js.map