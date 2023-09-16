import{H as b,d as W,r as m,o as X,I as V,k as s,a as U,c as z,j as a,l as r,e as t,h as x,b as A,y,m as Y,s as Z,E as _,_ as F}from"./index-67559f5a.js";const ee=(d,k)=>b.get(`/admin/product/baseTrademark/${d}/${k}`),le=d=>d.id?b.put("/admin/product/baseTrademark/update",d):b({url:"/admin/product/baseTrademark/save",method:"post",data:d}),ae=d=>b({url:`/admin/product/baseTrademark/remove/${d}`,method:"delete"}),te=["src"],oe={class:"demo-pagination-block like2"},ne=["src"],re=W({__name:"pinpai",setup(d){let k=()=>{var e,l;n.logoUrl="",n.tmName="",n.id="",i.value=!0,(e=p.value)==null||e.clearValidate("tmName"),(l=p.value)==null||l.clearValidate("logoUrl"),Z(()=>{console.log(p.value,33333)})},h=m([]),u=m(1),g=m(3),C=m(0),f=async()=>{const e=await ee(u.value,g.value);e.code==200&&(C.value=e.data.total,e.data.records[0].tmName=="小米"&&(e.data.records[0].logoUrl="http://39.98.123.211/group1/M00/03/D9/rBHu8mHmKC6AQ-j2AAAb72A3EO0942.jpg"),h.value=e.data.records)};X(()=>f());let w=e=>{console.log(e),f()},G=()=>{u.value=1,f()},i=m(!1),n=V({logoUrl:"",tmName:""});const P=e=>e.type=="image/jpeg"||e.type=="image/png"||e.type=="image/gif"?e.size/1024/1024<4?!0:(_({type:"error",message:"图片不能大于4mb"}),!1):(_({type:"error",message:"请注意图片格式"}),!1),S=(e,l)=>{console.log(e,l),n.logoUrl=e.data,p.value.clearValidate("logoUrl")};let p=m(),E=async()=>{await p.value.validate(),(await le(n)).code==200?(i.value=!1,_({type:"success",message:n.id?"修改品牌成功":"新增品牌成功"}),f()):_({type:"error",message:n.id?"修改品牌失败":"新增品牌失败"})},T=e=>{var l,c;i.value=!0,console.log(e),n.tmName=e.tmName,n.logoUrl=e.logoUrl,n.id=e.id,(l=p.value)==null||l.clearValidate("tmName"),(c=p.value)==null||c.clearValidate("logoUrl")},$=V({tmName:[{required:!0,message:"品牌名称不能为空",trigger:"blur"},{max:10,min:2,message:"长度控制在2-10个字符",trigger:"blur"}],logoUrl:[{required:!0,vaildator:(e,l)=>{e?l():l(new Error("logo图片不能为空"))},message:"品牌logo不能为空"}]}),j=async e=>{(await ae(e.id)).code==200?(_({type:"success",message:"删除成功"}),f()):_({type:"error",message:"系统数据无法删除"})};return(e,l)=>{const c=s("el-button"),v=s("el-table-column"),B=s("el-popconfirm"),O=s("el-table"),D=s("el-pagination"),H=s("el-card"),M=s("el-input"),N=s("el-form-item"),R=s("Plus"),q=s("el-icon"),I=s("el-upload"),L=s("el-form"),K=s("el-dialog");return U(),z("div",null,[a(H,{class:"box-card"},{default:r(()=>[a(c,{type:"primary",icon:"Plus",onClick:t(k)},{default:r(()=>[x(" 添加品牌 ")]),_:1},8,["onClick"]),a(O,{style:{width:"100%"},border:"",data:t(h),class:"like"},{default:r(()=>[a(v,{label:"序号",width:"70px",align:"center",type:"index"}),a(v,{label:"品牌名称",align:"center",prop:"tmName"}),a(v,{label:"品牌LOGO",align:"center"},{default:r(({row:o,$index:Q})=>[A("img",{src:o.logoUrl,style:{width:"100px",height:"100px"},alt:"没有图片"},null,8,te)]),_:1}),a(v,{label:"品牌操作",align:"center"},{default:r(({row:o,$index:Q})=>[a(c,{type:"primary",size:"small",icon:"Edit",onClick:J=>t(T)(o)},null,8,["onClick"]),a(B,{title:`确认删除${o.tmName}`,width:"250px",icon:"Delete",onConfirm:J=>t(j)(o)},{reference:r(()=>[a(c,{type:"primary",size:"small",icon:"Delete"})]),_:2},1032,["title","onConfirm"])]),_:1})]),_:1},8,["data"]),A("div",oe,[a(D,{"current-page":t(u),"onUpdate:currentPage":l[0]||(l[0]=o=>y(u)?u.value=o:u=o),"page-size":t(g),"onUpdate:pageSize":l[1]||(l[1]=o=>y(g)?g.value=o:g=o),"page-sizes":[3,5,10,15,20],background:!0,layout:" prev, pager, next, jumper, ->, sizes,total",total:t(C),onCurrentChange:t(w),onSizeChange:t(G)},null,8,["current-page","page-size","total","onCurrentChange","onSizeChange"])])]),_:1}),a(K,{modelValue:t(i),"onUpdate:modelValue":l[4]||(l[4]=o=>y(i)?i.value=o:i=o),title:t(n).id?"修改品牌":"添加品牌"},{footer:r(()=>[a(c,{type:"primary",onClick:l[3]||(l[3]=o=>y(i)?i.value=!1:i=!1)},{default:r(()=>[x("取消")]),_:1}),a(c,{type:"primary",onClick:t(E)},{default:r(()=>[x("确定")]),_:1},8,["onClick"])]),default:r(()=>[a(L,{style:{width:"80%"},model:t(n),rules:t($),ref_key:"formRef",ref:p},{default:r(()=>[a(N,{label:"品牌名称","label-width":"80px",prop:"tmName"},{default:r(()=>[a(M,{placeholder:"请输入品牌名称","label-width":"80px",modelValue:t(n).tmName,"onUpdate:modelValue":l[2]||(l[2]=o=>t(n).tmName=o)},null,8,["modelValue"])]),_:1}),a(N,{label:"品名LOGO",prop:"logoUrl"},{default:r(()=>[a(I,{class:"avatar-uploader",action:"/admin/product/fileUpload","show-file-list":!1,"on-success":S,"before-upload":P},{default:r(()=>[t(n).logoUrl?(U(),z("img",{key:0,src:t(n).logoUrl,class:"avatar"},null,8,ne)):(U(),Y(q,{key:1,class:"avatar-uploader-icon"},{default:r(()=>[a(R)]),_:1}))]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});const de=F(re,[["__scopeId","data-v-32ba8757"]]);export{de as default};
