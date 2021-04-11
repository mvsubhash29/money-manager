(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1191:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(69),_clientLogger=__webpack_require__(47),_configFilename=__webpack_require__(1192);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1192:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1193:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(462).configure)([__webpack_require__(1194),__webpack_require__(1195)],module,!1)}).call(this,__webpack_require__(148)(module))},1194:function(module,exports,__webpack_require__){var map={"./stories/Introduction.stories.mdx":1207};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1194},1195:function(module,exports,__webpack_require__){var map={"./components/LedgerDetail/LedgerDetail.stories.tsx":1210,"./components/LedgerForm/LedgerForm.stories.tsx":1208,"./components/LedgerTile/LedgerTile.stories.tsx":1211,"./stories/Button.stories.tsx":1200,"./stories/Header.stories.tsx":306,"./stories/Page.stories.tsx":1212};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1195},1200:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large})),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small}));var _Users_runner_work_money_manager_money_manager_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(34),_Button__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(167)),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3);__webpack_exports__.default={title:"Example/Button",component:_Button__WEBPACK_IMPORTED_MODULE_2__.a,argTypes:{backgroundColor:{control:"color"}}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.a,Object(_Users_runner_work_money_manager_money_manager_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))},Primary=Template.bind({});Primary.args={primary:!0,label:"Button"};var Secondary=Template.bind({});Secondary.args={label:"Button"};var Large=Template.bind({});Large.args={size:"large",label:"Button"};var Small=Template.bind({});Small.args={size:"small",label:"Button"},Primary.parameters=Object(_Users_runner_work_money_manager_money_manager_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Button {...args} />"}},Primary.parameters),Secondary.parameters=Object(_Users_runner_work_money_manager_money_manager_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Button {...args} />"}},Secondary.parameters),Large.parameters=Object(_Users_runner_work_money_manager_money_manager_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Button {...args} />"}},Large.parameters),Small.parameters=Object(_Users_runner_work_money_manager_money_manager_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Button {...args} />"}},Small.parameters)},1201:function(module,exports,__webpack_require__){},1202:function(module,exports,__webpack_require__){},1203:function(module,exports,__webpack_require__){},1207:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(0);var esm=__webpack_require__(13),blocks=__webpack_require__(300),code_brackets=__webpack_require__.p+"static/media/code-brackets.2e1112d7.svg",colors=__webpack_require__.p+"static/media/colors.a4bd0486.svg",comments=__webpack_require__.p+"static/media/comments.a3859089.svg",direction=__webpack_require__.p+"static/media/direction.b770f9af.svg",flow=__webpack_require__.p+"static/media/flow.edad2ac1.svg",assets_plugin=__webpack_require__.p+"static/media/plugin.d494b228.svg",repo=__webpack_require__.p+"static/media/repo.6d496322.svg",stackalt=__webpack_require__.p+"static/media/stackalt.dba9fbb3.svg";function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return Object(esm.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.mdx)(blocks.Meta,{title:"Example/Introduction",mdxType:"Meta"}),Object(esm.mdx)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"),Object(esm.mdx)("h1",{id:"welcome-to-storybook"},"Welcome to Storybook"),Object(esm.mdx)("p",null,"Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",Object(esm.mdx)("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),Object(esm.mdx)("p",null,"Browse example stories now by navigating to them in the sidebar.\nView their code in the ",Object(esm.mdx)("inlineCode",{parentName:"p"},"src/stories")," directory to learn how they work.\nWe recommend building UIs with a ",Object(esm.mdx)("a",{parentName:"p",href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer"},Object(esm.mdx)("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),Object(esm.mdx)("div",{className:"subheading"},"Configure"),Object(esm.mdx)("div",{className:"link-list"},Object(esm.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},Object(esm.mdx)("img",{src:assets_plugin,alt:"plugin"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),Object(esm.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},Object(esm.mdx)("img",{src:stackalt,alt:"Build"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Build configuration"),"How to customize webpack and Babel")),Object(esm.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},Object(esm.mdx)("img",{src:colors,alt:"colors"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Styling"),"How to load and configure CSS libraries")),Object(esm.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},Object(esm.mdx)("img",{src:flow,alt:"flow"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Data"),"Providers and mocking for data libraries"))),Object(esm.mdx)("div",{className:"subheading"},"Learn"),Object(esm.mdx)("div",{className:"link-list"},Object(esm.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},Object(esm.mdx)("img",{src:repo,alt:"repo"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Storybook documentation"),"Configure, customize, and extend")),Object(esm.mdx)("a",{className:"link-item",href:"https://www.learnstorybook.com",target:"_blank"},Object(esm.mdx)("img",{src:direction,alt:"direction"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"In-depth guides"),"Best practices from leading teams")),Object(esm.mdx)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},Object(esm.mdx)("img",{src:code_brackets,alt:"code"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"GitHub project"),"View the source and add issues")),Object(esm.mdx)("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},Object(esm.mdx)("img",{src:comments,alt:"comments"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Discord chat"),"Chat with maintainers and the community"))),Object(esm.mdx)("div",{className:"tip-wrapper"},Object(esm.mdx)("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",Object(esm.mdx)("code",null,"src/stories/Introduction.stories.mdx")))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Example/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(esm.mdx)(blocks.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(esm.mdx)(MDXContent,null))};__webpack_exports__.default=componentMeta},1208:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LedgerForm",(function(){return LedgerForm_stories_LedgerForm}));var objectSpread2=__webpack_require__(34),react=__webpack_require__(0),dist=__webpack_require__(288),es=__webpack_require__(307),slicedToArray=__webpack_require__(587),formik_esm=__webpack_require__(586),Paper=__webpack_require__(1261),FormControl=__webpack_require__(1216),FormLabel=__webpack_require__(1217),RadioGroup=__webpack_require__(1270),FormControlLabel=__webpack_require__(1265),Radio=__webpack_require__(1269),InputLabel=__webpack_require__(1218),Select=__webpack_require__(1222),MenuItem=__webpack_require__(1272),FormHelperText=__webpack_require__(1221),TextField=__webpack_require__(1266),Grid=__webpack_require__(1263),Button=__webpack_require__(1264),yup_es=__webpack_require__(237),validationSchema=yup_es.b({description:yup_es.c().required("Description is required"),amount:yup_es.a().required("Amount is required"),categoryName:yup_es.c().required("CategoryName is required")}),makeStyles=__webpack_require__(1259),createStyles=__webpack_require__(1271),useStyles=Object(makeStyles.a)((function(theme){return Object(createStyles.a)({btn:{marginTop:theme.spacing(2)},root:{padding:theme.spacing(2)}})})),jsx_runtime=__webpack_require__(3),LedgerForm_LedgerForm=function LedgerForm(props){var initialValues=props.initialValues,onSubmit=props.onSubmit,onCancel=props.onCancel,classes=useStyles(),categories=Object(es.b)((function(state){return state.categories})),_useState=Object(react.useState)(),_useState2=Object(slicedToArray.a)(_useState,2),categoryItems=_useState2[0],setCategoriesItems=_useState2[1];var formik=Object(formik_esm.a)({initialValues:initialValues,validationSchema:validationSchema,onSubmit:function onFormSubmit(values){onSubmit(values)}}),ref=Object(react.useRef)(formik.values.ledgerType);return ref.current!==formik.values.ledgerType&&(ref.current=formik.values.ledgerType),Object(react.useEffect)((function(){ref.current&&setCategoriesItems(categories[ref.current])}),[ref.current]),Object(jsx_runtime.jsx)(Paper.a,{className:classes.root,children:Object(jsx_runtime.jsxs)("form",{onSubmit:formik.handleSubmit,children:[Object(jsx_runtime.jsxs)(FormControl.a,{component:"fieldset",children:[Object(jsx_runtime.jsx)(FormLabel.a,{component:"legend",children:"Choose your Ledger entry type"}),Object(jsx_runtime.jsxs)(RadioGroup.a,{"aria-label":"ledger type",name:"ledgerType",row:!0,value:formik.values.ledgerType,onChange:formik.handleChange,children:[Object(jsx_runtime.jsx)(FormControlLabel.a,{value:"expense",control:Object(jsx_runtime.jsx)(Radio.a,{}),label:"Expense"}),Object(jsx_runtime.jsx)(FormControlLabel.a,{value:"income",control:Object(jsx_runtime.jsx)(Radio.a,{}),label:"Income"})]})]}),Object(jsx_runtime.jsxs)(FormControl.a,{component:"fieldset",fullWidth:!0,error:formik.touched.categoryName&&Boolean(formik.errors.categoryName),children:[Object(jsx_runtime.jsx)(InputLabel.a,{id:"category",children:"Category Name"}),Object(jsx_runtime.jsx)(Select.a,{labelId:"category",id:"category",fullWidth:!0,name:"categoryName",value:formik.values.categoryName,onChange:formik.handleChange,children:categoryItems&&categoryItems.map((function(category){return Object(jsx_runtime.jsx)(MenuItem.a,{value:category.name,children:category.title},category.name)}))}),Object(jsx_runtime.jsx)(FormHelperText.a,{children:formik.touched.categoryName&&formik.errors.categoryName})]}),Object(jsx_runtime.jsx)(TextField.a,{fullWidth:!0,id:"description",name:"description",label:"Description",value:formik.values.description,onChange:formik.handleChange,error:formik.touched.description&&Boolean(formik.errors.description),helperText:formik.touched.description&&formik.errors.description}),Object(jsx_runtime.jsx)(TextField.a,{fullWidth:!0,id:"amount",name:"amount",label:"Amount",value:formik.values.amount,onChange:formik.handleChange,error:formik.touched.amount&&Boolean(formik.errors.amount),helperText:formik.touched.amount&&formik.errors.amount}),Object(jsx_runtime.jsxs)(Grid.a,{container:!0,justify:"space-between",children:[Object(jsx_runtime.jsx)(Button.a,{className:classes.btn,color:"primary",variant:"outlined",type:"button",onClick:onCancel,children:"Back"}),Object(jsx_runtime.jsx)(Button.a,{className:classes.btn,color:"primary",variant:"contained",type:"submit",children:"Submit"})]})]})})};try{LedgerForm_LedgerForm.displayName="LedgerForm",LedgerForm_LedgerForm.__docgenInfo={description:"",displayName:"LedgerForm",props:{initialValues:{defaultValue:null,description:"",name:"initialValues",required:!0,type:{name:"LedgerFormValues"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(values: LedgerFormValues) => void"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LedgerForm/LedgerForm.tsx#LedgerForm"]={docgenInfo:LedgerForm_LedgerForm.__docgenInfo,name:"LedgerForm",path:"src/components/LedgerForm/LedgerForm.tsx#LedgerForm"})}catch(__react_docgen_typescript_loader_error){}var store={getState:function getState(){return{categories:{expense:[{type:"expense",title:"Food",name:"food",icon:"food"},{type:"expense",title:"Transport",name:"transport",icon:"transport"}],income:[{type:"income",title:"Salary",name:"salary",icon:"salary"}]}}},subscribe:function subscribe(){return 0},dispatch:Object(dist.action)("dispatch")},LedgerForm_stories_LedgerForm=(__webpack_exports__.default={title:"Components/LedgerForm",component:LedgerForm_LedgerForm,decorators:[function(story){return Object(jsx_runtime.jsx)(es.a,{store:store,children:story()})}],argTypes:{onSubmit:{action:"formSubmit"},onCancel:{action:"cancel"}}},function Template(args){return Object(jsx_runtime.jsx)(LedgerForm_LedgerForm,Object(objectSpread2.a)({},args))}.bind({}));LedgerForm_stories_LedgerForm.args={initialValues:{categoryName:"transport",amount:200,description:"Transport",ledgerType:"expense"}},LedgerForm_stories_LedgerForm.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => (\n  <LedgerFormComponent {...args} />\n)"}},LedgerForm_stories_LedgerForm.parameters)},1210:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LedgerDetail",(function(){return LedgerDetail_stories_LedgerDetail}));var objectSpread2=__webpack_require__(34),Paper=(__webpack_require__(0),__webpack_require__(1261)),Grid=__webpack_require__(1263),Typography=__webpack_require__(1215),Button=__webpack_require__(1264),makeStyles=__webpack_require__(1259),createStyles=__webpack_require__(1271),useStyles=Object(makeStyles.a)((function(theme){return Object(createStyles.a)({title:{fontSize:14},mtb16:{marginTop:theme.spacing(2),marginBottom:theme.spacing(2)},root:{marginBottom:theme.spacing(2)},paper:{padding:theme.spacing(2),margin:"auto",maxWidth:500}})})),jsx_runtime=__webpack_require__(3),LedgerDetail_LedgerDetail=function LedgerDetail(props){var onEdit=props.onEdit,onBack=props.onBack,date=props.date,ledger=props.ledger,amount=ledger.amount,description=ledger.description,isExpense=ledger.isExpense,classes=useStyles();return Object(jsx_runtime.jsx)(Paper.a,{className:classes.paper,children:Object(jsx_runtime.jsxs)(Grid.a,{container:!0,children:[Object(jsx_runtime.jsx)(Grid.a,{item:!0,xs:12,children:Object(jsx_runtime.jsxs)(Typography.a,{variant:"h5",children:[" ",description]})}),Object(jsx_runtime.jsxs)(Grid.a,{className:classes.mtb16,item:!0,container:!0,direction:"row",justify:"space-between",children:[Object(jsx_runtime.jsxs)(Grid.a,{item:!0,children:[Object(jsx_runtime.jsx)(Typography.a,{variant:"body2",color:"textSecondary",children:"Category"}),Object(jsx_runtime.jsx)(Typography.a,{variant:"body2",color:"textSecondary",children:"Amount"}),Object(jsx_runtime.jsx)(Typography.a,{variant:"body2",color:"textSecondary",children:"Date"}),Object(jsx_runtime.jsx)(Typography.a,{variant:"body2",color:"textSecondary",children:"Description"})]}),Object(jsx_runtime.jsxs)(Grid.a,{item:!0,children:[Object(jsx_runtime.jsx)(Typography.a,{variant:"body2",children:isExpense?"Expense":"Income"}),Object(jsx_runtime.jsx)(Typography.a,{variant:"body2",children:amount}),Object(jsx_runtime.jsx)(Typography.a,{variant:"body2",children:date}),Object(jsx_runtime.jsx)(Typography.a,{variant:"body2",children:description})]})]}),Object(jsx_runtime.jsxs)(Grid.a,{item:!0,container:!0,xs:12,justify:"space-between",children:[Object(jsx_runtime.jsx)(Button.a,{color:"primary",variant:"outlined",size:"small",onClick:onBack,children:"Back"}),Object(jsx_runtime.jsx)(Button.a,{color:"primary",variant:"contained",onClick:onEdit,children:"Edit"})]})]})})};try{LedgerDetail_LedgerDetail.displayName="LedgerDetail",LedgerDetail_LedgerDetail.__docgenInfo={description:"",displayName:"LedgerDetail",props:{onEdit:{defaultValue:null,description:"",name:"onEdit",required:!0,type:{name:"() => void"}},onBack:{defaultValue:null,description:"",name:"onBack",required:!0,type:{name:"() => void"}},ledger:{defaultValue:null,description:"",name:"ledger",required:!0,type:{name:"LedgerDailyDetails"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LedgerDetail/LedgerDetail.tsx#LedgerDetail"]={docgenInfo:LedgerDetail_LedgerDetail.__docgenInfo,name:"LedgerDetail",path:"src/components/LedgerDetail/LedgerDetail.tsx#LedgerDetail"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Components/LedgerDetail",component:LedgerDetail_LedgerDetail,argTypes:{onEdit:{action:"clicked"},onBack:{action:"clicked"}}};var LedgerDetail_stories_LedgerDetail=function Template(args){return Object(jsx_runtime.jsx)(LedgerDetail_LedgerDetail,Object(objectSpread2.a)({},args))}.bind({});LedgerDetail_stories_LedgerDetail.args={ledger:{amount:100,isExpense:!1,description:"Food",ledgerType:"income",categoryName:"food"},date:"03/02 Sun"},LedgerDetail_stories_LedgerDetail.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => (\n  <LedgerDetailComponent {...args} />\n)"}},LedgerDetail_stories_LedgerDetail.parameters)},1211:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LedgerTile",(function(){return LedgerTile_stories_LedgerTile}));var objectSpread2=__webpack_require__(34),Box=(__webpack_require__(0),__webpack_require__(1268)),Icon=__webpack_require__(1267),Typography=__webpack_require__(1215),green=__webpack_require__(312),makeStyles=__webpack_require__(1259),createStyles=__webpack_require__(1271),useStyles=Object(makeStyles.a)((function(theme){return Object(createStyles.a)({categoryName:{marginLeft:theme.spacing(1)},container:{"&:hover":{backgroundColor:theme.palette.divider},padding:theme.spacing(1),cursor:"pointer"}})})),jsx_runtime=__webpack_require__(3),LedgerTile_LedgerTile=function LedgerTile(props){var ledger=props.ledger,onLedgerEntryClick=props.onLedgerEntryClick,description=ledger.description,isExpense=ledger.isExpense,amount=ledger.amount,classes=useStyles();return Object(jsx_runtime.jsxs)(Box.a,{className:classes.container,display:"flex",alignItems:"center",justifyContent:"space-between",onClick:function onClick(){return onLedgerEntryClick(Object(objectSpread2.a)({},ledger))},children:[Object(jsx_runtime.jsxs)(Box.a,{display:"flex",alignItems:"center",children:[Object(jsx_runtime.jsx)(Icon.a,{style:{color:green.a[500]},children:"start"}),Object(jsx_runtime.jsx)(Typography.a,{className:classes.categoryName,variant:"body2",component:"p",children:description})]}),Object(jsx_runtime.jsxs)(Typography.a,{color:"textSecondary",children:[isExpense?"-":""," ",amount]})]})};try{LedgerTile_LedgerTile.displayName="LedgerTile",LedgerTile_LedgerTile.__docgenInfo={description:"",displayName:"LedgerTile",props:{onLedgerEntryClick:{defaultValue:null,description:"",name:"onLedgerEntryClick",required:!0,type:{name:"(ledgerEntryDetails: LedgerDailyDetails) => void"}},ledger:{defaultValue:null,description:"",name:"ledger",required:!0,type:{name:"LedgerDailyDetails"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LedgerTile/LedgerTile.tsx#LedgerTile"]={docgenInfo:LedgerTile_LedgerTile.__docgenInfo,name:"LedgerTile",path:"src/components/LedgerTile/LedgerTile.tsx#LedgerTile"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Components/LedgerTile",component:LedgerTile_LedgerTile,argTypes:{onLedgerEntryClick:{action:"clicked"}}};var LedgerTile_stories_LedgerTile=function Template(args){return Object(jsx_runtime.jsx)(LedgerTile_LedgerTile,Object(objectSpread2.a)({},args))}.bind({});LedgerTile_stories_LedgerTile.args={ledger:{categoryName:"Food",amount:100,isExpense:!1,description:"Food",ledgerType:"income"}},LedgerTile_stories_LedgerTile.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => (\n  <LedgerTileComponent {...args} />\n)"}},LedgerTile_stories_LedgerTile.parameters)},1212:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoggedIn",(function(){return LoggedIn})),__webpack_require__.d(__webpack_exports__,"LoggedOut",(function(){return LoggedOut}));var objectSpread2=__webpack_require__(34),Header=(__webpack_require__(0),__webpack_require__(235)),jsx_runtime=(__webpack_require__(1203),__webpack_require__(3)),Page_Page=function Page(_ref){var user=_ref.user,onLogin=_ref.onLogin,onLogout=_ref.onLogout,onCreateAccount=_ref.onCreateAccount;return Object(jsx_runtime.jsxs)("article",{children:[Object(jsx_runtime.jsx)(Header.a,{user:user,onLogin:onLogin,onLogout:onLogout,onCreateAccount:onCreateAccount}),Object(jsx_runtime.jsxs)("section",{children:[Object(jsx_runtime.jsx)("h2",{children:"Pages in Storybook"}),Object(jsx_runtime.jsxs)("p",{children:["We recommend building UIs with a"," ",Object(jsx_runtime.jsx)("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer",children:Object(jsx_runtime.jsx)("strong",{children:"component-driven"})})," ","process starting with atomic components and ending with pages."]}),Object(jsx_runtime.jsx)("p",{children:"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"}),Object(jsx_runtime.jsxs)("ul",{children:[Object(jsx_runtime.jsx)("li",{children:"Use a higher-level connected component. Storybook helps you compose such data from the &quoat;args&quoat; of child component stories"}),Object(jsx_runtime.jsx)("li",{children:"Assemble data in the page component from your services. You can mock these services out using Storybook."})]}),Object(jsx_runtime.jsxs)("p",{children:["Get a guided tutorial on component-driven development at"," ",Object(jsx_runtime.jsx)("a",{href:"https://www.learnstorybook.com",target:"_blank",rel:"noopener noreferrer",children:"Learn Storybook"}),". Read more in the"," ",Object(jsx_runtime.jsx)("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer",children:"docs"}),"."]}),Object(jsx_runtime.jsxs)("div",{className:"tip-wrapper",children:[Object(jsx_runtime.jsx)("span",{className:"tip",children:"Tip"})," Adjust the width of the canvas with the"," ",Object(jsx_runtime.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:Object(jsx_runtime.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(jsx_runtime.jsx)("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"})})}),"Viewports addon in the toolbar"]})]})]})};try{Page_Page.displayName="Page",Page_Page.__docgenInfo={description:"",displayName:"Page",props:{user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"Record<string, unknown>"}},onLogin:{defaultValue:null,description:"",name:"onLogin",required:!0,type:{name:"() => void"}},onLogout:{defaultValue:null,description:"",name:"onLogout",required:!0,type:{name:"() => void"}},onCreateAccount:{defaultValue:null,description:"",name:"onCreateAccount",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Page.tsx#Page"]={docgenInfo:Page_Page.__docgenInfo,name:"Page",path:"src/stories/Page.tsx#Page"})}catch(__react_docgen_typescript_loader_error){}var Header_stories=__webpack_require__(306),Page_stories_Template=(__webpack_exports__.default={title:"Example/Page",component:Page_Page},function Template(args){return Object(jsx_runtime.jsx)(Page_Page,Object(objectSpread2.a)({},args))}),LoggedIn=Page_stories_Template.bind({});LoggedIn.args=Object(objectSpread2.a)({},Header_stories.LoggedIn.args);var LoggedOut=Page_stories_Template.bind({});LoggedOut.args=Object(objectSpread2.a)({},Header_stories.LoggedOut.args),LoggedIn.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Page {...args} />"}},LoggedIn.parameters),LoggedOut.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Page {...args} />"}},LoggedOut.parameters)},167:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Button}));var _Users_runner_work_money_manager_money_manager_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(34),_Users_runner_work_money_manager_money_manager_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(588),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__(0),__webpack_require__(1201),__webpack_require__(3)),Button=function Button(_ref){var _ref$primary=_ref.primary,primary=void 0!==_ref$primary&&_ref$primary,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,backgroundColor=_ref.backgroundColor,label=_ref.label,props=Object(_Users_runner_work_money_manager_money_manager_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.a)(_ref,["primary","size","backgroundColor","label"]),mode=primary?"storybook-button--primary":"storybook-button--secondary";return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",Object(_Users_runner_work_money_manager_money_manager_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_runner_work_money_manager_money_manager_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({type:"button",className:["storybook-button","storybook-button--".concat(size),mode].join(" "),style:{backgroundColor:backgroundColor}},props),{},{children:label}))};try{Button.displayName="Button",Button.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:!1},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/stories/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},235:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Header}));__webpack_require__(0);var _Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(167),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(1202),__webpack_require__(3)),Header=function Header(_ref){var user=_ref.user,onLogin=_ref.onLogin,onLogout=_ref.onLogout,onCreateAccount=_ref.onCreateAccount;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("header",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"wrapper",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1",{children:"Acme"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:user?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{size:"small",onClick:onLogout,label:"Log out"}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{size:"small",onClick:onLogin,label:"Log in"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{primary:!0,size:"small",onClick:onCreateAccount,label:"Sign up"})]})})]})})};try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"Record<string, unknown>"}},onLogin:{defaultValue:null,description:"",name:"onLogin",required:!0,type:{name:"() => void"}},onLogout:{defaultValue:null,description:"",name:"onLogout",required:!0,type:{name:"() => void"}},onCreateAccount:{defaultValue:null,description:"",name:"onCreateAccount",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"src/stories/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}},306:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoggedIn",(function(){return LoggedIn})),__webpack_require__.d(__webpack_exports__,"LoggedOut",(function(){return LoggedOut}));var _Users_runner_work_money_manager_money_manager_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(34),_Header__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(235)),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3);__webpack_exports__.default={title:"Example/Header",component:_Header__WEBPACK_IMPORTED_MODULE_2__.a};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_2__.a,Object(_Users_runner_work_money_manager_money_manager_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))},LoggedIn=Template.bind({});LoggedIn.args={user:{}};var LoggedOut=Template.bind({});LoggedOut.args={},LoggedIn.parameters=Object(_Users_runner_work_money_manager_money_manager_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Header {...args} />"}},LoggedIn.parameters),LoggedOut.parameters=Object(_Users_runner_work_money_manager_money_manager_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Header {...args} />"}},LoggedOut.parameters)},601:function(module,exports,__webpack_require__){__webpack_require__(602),__webpack_require__(758),__webpack_require__(759),__webpack_require__(914),__webpack_require__(1132),__webpack_require__(1165),__webpack_require__(1170),__webpack_require__(1182),__webpack_require__(1184),__webpack_require__(1189),__webpack_require__(1191),module.exports=__webpack_require__(1193)},669:function(module,exports){},759:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(462)}},[[601,1,2]]]);
//# sourceMappingURL=main.5cb207f95769bf4f9e96.bundle.js.map