var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/./ui/components/popovers/docs.mdx.js"]=function(e){function t(t){for(var a,o,i=t[0],r=t[1],c=t[2],m=0,u=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);for(d&&d(t);u.length;)u.shift()();return s.push.apply(s,c||[]),l()}function l(){for(var e,t=0;t<s.length;t++){for(var l=s[t],a=!0,i=1;i<l.length;i++){var r=l[i];0!==n[r]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=l[0]))}return e}var a={},n={56:0},s=[];function o(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=a,o.d=function(e,t,l){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(l,a,function(t){return e[t]}.bind(null,a));return l},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=r;return s.push([652,0]),l()}({0:function(e,t){e.exports=React},19:function(e,t){e.exports=ReactDOM},20:function(e,t){e.exports=JSBeautify},652:function(e,t,l){"use strict";l.r(t),l.d(t,"getElement",(function(){return Q})),l.d(t,"getContents",(function(){return X}));var a=l(0),n=l.n(a),s=l(4),o=l(2),i=(l(25),l(15)),r=l(27),c=l(46),d=l(38),m=l(10),u=function(e){return e.symbol?n.a.createElement("div",{className:"slds-media"},n.a.createElement("div",{className:"slds-media__figure"},n.a.createElement("span",{className:"slds-icon_container",title:"description of icon when needed"},n.a.createElement(m.a,{className:"slds-icon slds-icon_small",sprite:"utility",symbol:"favorite"}),n.a.createElement("span",{className:"slds-assistive-text"},"Description of icon"))),n.a.createElement("div",{className:"slds-media__body"},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))):n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")},b=(d.a,d.a,d.a,d.a,d.a,d.a,d.a,d.a,l(7)),p=function(e){return n.a.createElement("section",{"aria-label":"Dialog title","aria-describedby":"popover-body-id",className:"slds-popover slds-nubbin_".concat(e.nubbinPosition),role:"dialog"},n.a.createElement(b.b,{className:"slds-button_icon slds-button_icon-small slds-float_right slds-popover__close",symbol:"close",assistiveText:"Close dialog",title:"Close dialog"}),n.a.createElement("div",{id:"popover-body-id",className:"slds-popover__body"},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quaerat? Accusamus excepturi eos, molestias expedita distinctio eligendi ut esse quasi!")))},h=[{context:"Nubbins",id:"left",label:"Nubbin Left",element:n.a.createElement(p,{nubbinPosition:"left"})},{context:"Nubbins",id:"left-top",label:"Nubbin Left (top)",element:n.a.createElement(p,{nubbinPosition:"left-top"})},{context:"Nubbins",id:"left-top-corner",label:"Nubbin Left (top corner)",element:n.a.createElement(p,{nubbinPosition:"left-top-corner"})},{context:"Nubbins",id:"left-bottom",label:"Nubbin Left (bottom)",element:n.a.createElement(p,{nubbinPosition:"left-bottom"})},{context:"Nubbins",id:"left-bottom-corner",label:"Nubbin Left (bottom corner)",element:n.a.createElement(p,{nubbinPosition:"left-bottom-corner"})},{context:"Nubbins",id:"top",label:"Nubbin Top",element:n.a.createElement(p,{nubbinPosition:"top"})},{context:"Nubbins",id:"top-left",label:"Nubbin Top (left)",element:n.a.createElement(p,{nubbinPosition:"top-left"})},{context:"Nubbins",id:"top-left-corner",label:"Nubbin Top (left corner)",element:n.a.createElement(p,{nubbinPosition:"top-left-corner"})},{context:"Nubbins",id:"top-right",label:"Nubbin Top (right)",element:n.a.createElement(p,{nubbinPosition:"top-right"})},{context:"Nubbins",id:"top-right-corner",label:"Nubbin Top (right corner)",element:n.a.createElement(p,{nubbinPosition:"top-right-corner"})},{context:"Nubbins",id:"right",label:"Nubbin Right",element:n.a.createElement(p,{nubbinPosition:"right"})},{context:"Nubbins",id:"right-top",label:"Nubbin Right (top)",element:n.a.createElement(p,{nubbinPosition:"right-top"})},{context:"Nubbins",id:"right-top-corner",label:"Nubbin Right (top corner)",element:n.a.createElement(p,{nubbinPosition:"right-top-corner"})},{context:"Nubbins",id:"right-bottom",label:"Nubbin Right (bottom)",element:n.a.createElement(p,{nubbinPosition:"right-bottom"})},{context:"Nubbins",id:"right-bottom-corner",label:"Nubbin Right (bottom corner)",element:n.a.createElement(p,{nubbinPosition:"right-bottom-corner"})},{context:"Nubbins",id:"bottom",label:"Nubbin Bottom",element:n.a.createElement(p,{nubbinPosition:"bottom"})},{context:"Nubbins",id:"bottom-left",label:"Nubbin Bottom (left)",element:n.a.createElement(p,{nubbinPosition:"bottom-left"})},{context:"Nubbins",id:"bottom-left-corner",label:"Nubbin Bottom (left corner)",element:n.a.createElement(p,{nubbinPosition:"bottom-left-corner"})},{context:"Nubbins",id:"bottom-right",label:"Nubbin Bottom (right)",element:n.a.createElement(p,{nubbinPosition:"bottom-right"})},{context:"Nubbins",id:"bottom-right-corner",label:"Nubbin Bottom (right corner)",element:n.a.createElement(p,{nubbinPosition:"bottom-right-corner"})}],f=l(77),E=l(60),g=l(1),_=g.d.uniqueId("dialog-heading-id-"),v=[{context:"Warning",id:"warning-default",label:"Warning – default",element:n.a.createElement(E.a,{className:"slds-popover_warning slds-nubbin_bottom-left",headingId:_,bodyClassName:"slds-popover_warning__body",header:n.a.createElement(f.b,{headingId:_,title:"Review warning",symbol:"warning",iconDefault:!0}),closeButton:!0},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore."," ",n.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()},title:"Learn More"},"Learn More")))}],N=[{context:"Warning",id:"with-top-nubbin",label:"Warning With Top Nubbin",element:n.a.createElement(E.a,{className:"slds-popover_warning slds-nubbin_top",bodyClassName:"slds-popover_warning__body",headingId:_,header:n.a.createElement(f.b,{headingId:_,title:"Review warning",symbol:"warning",iconDefault:!0}),closeButton:!0},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore."," ",n.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()},title:"Learn More"},"Learn More")))},{context:"Warning",id:"with-footer",label:"Warning With Footer",element:n.a.createElement(E.a,{className:"slds-popover_warning slds-nubbin_bottom-left",bodyClassName:"slds-popover_warning__body",headingId:_,header:n.a.createElement(f.b,{headingId:_,title:"Review warning",symbol:"warning",iconDefault:!0}),footer:n.a.createElement(f.a,null),closeButton:!0},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore."," ",n.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()},title:"Learn More"},"Learn More")))}],x=g.d.uniqueId("dialog-heading-id-"),y=function(e){return n.a.createElement("header",{className:"slds-popover__header slds-p-vertical_medium"},n.a.createElement("h2",{id:x,className:"slds-text-heading_medium"},e.title))},O=function(e){return n.a.createElement("div",{className:"slds-grid slds-grid_vertical-align-center"},e.steps?n.a.createElement("span",{className:"slds-text-title"},"Step 2 of 4"):null,e.skipButton?n.a.createElement("button",{className:"slds-button slds-button_inverse slds-col_bump-left"},"Skip"):null,e.setupButton?n.a.createElement("button",{className:"slds-button slds-button_success slds-col_bump-left"},"Setup Email"):null,e.nextButton?n.a.createElement("button",{className:"slds-button slds-button_brand slds-col_bump-left"},"Next"):null,e.learnMoreButton?n.a.createElement("button",{className:"slds-button slds-button_neutral slds-col_bump-left"},"Learn More"):null)},j=[{context:"Walkthrough",deprecated:!0,id:"walkthrough-default",label:"Deprecated – Walkthrough default",element:n.a.createElement(E.a,{className:"slds-popover_walkthrough slds-nubbin_left",headingId:x,header:n.a.createElement(y,{title:"Manage your channels"}),footer:n.a.createElement(O,{steps:!0,nextButton:!0}),closeButton:!0,inverse:!0},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))}],w=[{context:"Walkthrough",deprecated:!0,id:"micro-setup",label:"Deprecated – Micro Setup",element:n.a.createElement(E.a,{className:"slds-popover_walkthrough slds-nubbin_left",headingId:x,header:n.a.createElement(y,{title:"Manage your channels"}),footer:n.a.createElement(O,{steps:!0,setupButton:!0,nextButton:!0}),closeButton:!0,inverse:!0},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))},{context:"Walkthrough",deprecated:!0,id:"micro-setup-alternate",label:"Deprecated – Micro Setup - Alternate",element:n.a.createElement(E.a,{className:"slds-popover_walkthrough slds-nubbin_left",headingId:x,header:n.a.createElement(y,{title:"Manage your channels"}),footer:n.a.createElement(O,{steps:!0,skipButton:!0,setupButton:!0}),closeButton:!0,inverse:!0},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))},{context:"Walkthrough",deprecated:!0,id:"micro-setup-in-page",label:"Deprecated – Micro Setup - In Page",element:n.a.createElement(E.a,{className:"slds-popover_walkthrough slds-nubbin_bottom",headingId:x,header:n.a.createElement(y,{title:"Manage your channels"}),footer:n.a.createElement(O,{steps:!0,skipButton:!0}),closeButton:!0,inverse:!0},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))},{context:"Walkthrough",deprecated:!0,id:"micro-setup-inline-form",label:"Deprecated – Micro Setup - Inline Form",element:n.a.createElement(E.a,{className:"slds-popover_walkthrough slds-nubbin_left",headingId:x,header:n.a.createElement(y,{title:"Manage your channels"}),footer:n.a.createElement(O,{steps:!0,skipButton:!0,nextButton:!0}),closeButton:!0,inverse:!0},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),n.a.createElement("div",{className:"slds-form-element slds-p-top_small"},n.a.createElement("label",{className:"slds-form-element__label slds-assistive-text",htmlFor:"email-text-input-01"},"Email Address"),n.a.createElement("div",{className:"slds-form-element__control"},n.a.createElement("input",{id:"email-text-input-01",className:"slds-input",type:"text",placeholder:"Email Address"}))))},{context:"Walkthrough",deprecated:!0,id:"action-popover",label:"Deprecated – Action Popover",element:n.a.createElement(E.a,{className:"slds-popover_walkthrough slds-popover_walkthrough-alt slds-nubbin_left",title:"Dialog Title",closeButton:!0,inverse:!0},n.a.createElement("div",{className:"slds-media"},n.a.createElement("div",{className:"slds-media__figure"},n.a.createElement("span",{className:"slds-icon_container",title:"description of icon when needed"},n.a.createElement(m.a,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"utility",symbol:"touch_action"}),n.a.createElement("span",{className:"slds-assistive-text"},"Description of icon"))),n.a.createElement("div",{className:"slds-media__body"},n.a.createElement("p",{className:"slds-text-heading_small"},"Text that describes the action"),n.a.createElement("p",{className:"slds-m-top_medium slds-text-title"},"Step 3 of 4"))))},{context:"Walkthrough",deprecated:!0,id:"action-popover-heading",label:"Deprecated – Action Popover - With Heading",element:n.a.createElement(E.a,{className:"slds-popover_walkthrough slds-popover_walkthrough-alt slds-nubbin_left",headingId:x,closeButton:!0,inverse:!0},n.a.createElement("div",{className:"slds-media"},n.a.createElement("div",{className:"slds-media__figure"},n.a.createElement("span",{className:"slds-icon_container",title:"description of icon when needed"},n.a.createElement(m.a,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"utility",symbol:"touch_action"}),n.a.createElement("span",{className:"slds-assistive-text"},"Description of icon"))),n.a.createElement("div",{className:"slds-media__body"},n.a.createElement("h2",{id:x,className:"slds-text-heading_small"},"Title"),n.a.createElement("p",null,"Text that describes the action"),n.a.createElement("p",{className:"slds-m-top_medium slds-text-title"},"Step 3 of 4"))))},{context:"Walkthrough",deprecated:!0,id:"action-popover-with-link",label:"Deprecated – Action Popover - With Link",element:n.a.createElement(E.a,{className:"slds-popover_walkthrough slds-popover_walkthrough-alt slds-nubbin_left",headingId:x,closeButton:!0,inverse:!0},n.a.createElement("div",{className:"slds-media"},n.a.createElement("div",{className:"slds-media__figure"},n.a.createElement("span",{className:"slds-icon_container",title:"description of icon when needed"},n.a.createElement(m.a,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"utility",symbol:"touch_action"}),n.a.createElement("span",{className:"slds-assistive-text"},"Description of icon"))),n.a.createElement("div",{className:"slds-media__body"},n.a.createElement("h2",{id:x,className:"slds-text-heading_small"},"Title"),n.a.createElement("p",null,"Text that describes the action"),n.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Take Action"),n.a.createElement("p",{className:"slds-m-top_medium slds-text-title"},"Step 3 of 4"))))}],k=g.d.uniqueId("dialog-heading-id-"),P=[{context:"Feature",deprecated:!0,id:"feature-default",label:"Deprecated – Feature default",element:n.a.createElement(d.a,{className:"slds-popover_walkthrough slds-popover_feature slds-nubbin_left",title:"Dialog Title",closeButton:!0,inverse:!0},n.a.createElement("div",{className:"slds-media"},n.a.createElement("div",{className:"slds-media__body"},n.a.createElement("p",{className:"slds-text-heading_small"},"Shelly, it seems you frequent this record. Try favoriting it for easy access."))))}],S=[{context:"Feature",deprecated:!0,id:"icon-text",label:"Deprecated – With icon and text",element:n.a.createElement(d.a,{className:"slds-popover_walkthrough slds-popover_feature slds-nubbin_left",title:"Dialog Title",closeButton:!0,inverse:!0},n.a.createElement("div",{className:"slds-media"},n.a.createElement("div",{className:"slds-media__figure"},n.a.createElement("span",{className:"slds-icon_container",title:"description of icon when needed"},n.a.createElement(m.a,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"utility",symbol:"favorite"}),n.a.createElement("span",{className:"slds-assistive-text"},"Description of icon"))),n.a.createElement("div",{className:"slds-media__body"},n.a.createElement("p",{className:"slds-text-heading_small"},"Shelly, it seems you frequent this record. Try favoriting it for easy access."))))},{context:"Feature",deprecated:!0,id:"icon-header-text-link",label:"Deprecated – With icon, header, text, and link",element:n.a.createElement(d.a,{className:"slds-popover_walkthrough slds-popover_feature slds-nubbin_left",headingId:k,closeButton:!0,inverse:!0},n.a.createElement("div",{className:"slds-media"},n.a.createElement("div",{className:"slds-media__figure"},n.a.createElement("span",{className:"slds-icon_container",title:"description of icon when needed"},n.a.createElement(m.a,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"utility",symbol:"smiley_and_people"}),n.a.createElement("span",{className:"slds-assistive-text"},"Description of icon"))),n.a.createElement("div",{className:"slds-media__body"},n.a.createElement("h2",{id:k,className:"slds-text-heading_small"},"Title"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."," ",n.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Learn more")))))},{context:"Feature",deprecated:!0,id:"icon-header-text",label:"Deprecated – With icon, header, and text",element:n.a.createElement(d.a,{className:"slds-popover_walkthrough slds-popover_feature slds-nubbin_left",headingId:k,closeButton:!0,inverse:!0},n.a.createElement("div",{className:"slds-media"},n.a.createElement("div",{className:"slds-media__figure"},n.a.createElement("span",{className:"slds-icon_container",title:"description of icon when needed"},n.a.createElement(m.a,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"utility",symbol:"description"}),n.a.createElement("span",{className:"slds-assistive-text"},"Description of icon"))),n.a.createElement("div",{className:"slds-media__body"},n.a.createElement("h2",{id:k,className:"slds-text-heading_small"},"Title"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))},{context:"Feature",deprecated:!0,id:"icon-header-text-footer",label:"Deprecated – With icon, header, text, and footer",element:n.a.createElement(d.a,{className:"slds-popover_walkthrough slds-popover_feature slds-nubbin_left",headingId:k,footer:n.a.createElement(O,{learnMoreButton:!0}),closeButton:!0,inverse:!0},n.a.createElement("div",{className:"slds-media"},n.a.createElement("div",{className:"slds-media__figure"},n.a.createElement("span",{className:"slds-icon_container",title:"description of icon when needed"},n.a.createElement(m.a,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"utility",symbol:"favorite"}),n.a.createElement("span",{className:"slds-assistive-text"},"Description of icon"))),n.a.createElement("div",{className:"slds-media__body"},n.a.createElement("h2",{id:k,className:"slds-text-heading_small"},"Title"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))}],D=l(76),W=n.a.createElement("span",{className:"slds-icon_container slds-icon-standard-opportunity"},n.a.createElement(m.a,{className:"slds-icon slds-icon_small",sprite:"standard",symbol:"opportunity"}),n.a.createElement("span",{className:"slds-assistive-text"},"Opportunities")),L=n.a.createElement("span",{className:"slds-icon_container slds-icon-standard-case"},n.a.createElement(m.a,{className:"slds-icon slds-icon_small",sprite:"standard",symbol:"case"}),n.a.createElement("span",{className:"slds-assistive-text"},"Cases")),B=function(){return n.a.createElement("dd",{className:"slds-m-top_x-small slds-text-align_right"},n.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()},title:"View all Opportunities"},"View All"))},T=[{id:"panels-default",label:"Panels – default",element:n.a.createElement("section",{"aria-labelledby":"panel-heading-id",className:"slds-popover slds-popover_panel slds-nubbin_left-top",role:"dialog"},n.a.createElement(b.b,{className:"slds-button_icon slds-button_icon-small slds-float_right slds-popover__close",symbol:"close",assistiveText:"Close dialog",title:"Close dialog"}),n.a.createElement("div",{className:"slds-popover__header"},n.a.createElement("header",{className:"slds-media slds-media_center slds-m-bottom_small"},n.a.createElement("span",{className:"slds-icon_container slds-icon-standard-account slds-media__figure"},n.a.createElement(m.a,{className:"slds-icon slds-icon_small",sprite:"standard",symbol:"account"})),n.a.createElement("div",{className:"slds-media__body"},n.a.createElement("h2",{className:"slds-text-heading_medium slds-hyphenate",id:"panel-heading-id"},n.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Tesla Motors")))),n.a.createElement("footer",{className:"slds-grid slds-wrap slds-grid_pull-padded"},n.a.createElement("div",{className:"slds-p-horizontal_small slds-size_1-of-2 slds-p-bottom_x-small"},n.a.createElement("dl",null,n.a.createElement("dt",null,n.a.createElement("p",{className:"slds-popover_panel__label slds-truncate",title:"Billing Address"},"Billing Address")),n.a.createElement("dd",null,n.a.createElement("p",{className:"slds-truncate",title:"3500 Deer Creek Rd."},"3500 Deer Creek Rd."),n.a.createElement("p",{className:"slds-truncate",title:"Palo Alto, CA 94304"},"Palo Alto, CA 94304")))),n.a.createElement("div",{className:"slds-p-horizontal_small slds-size_1-of-2 slds-p-bottom_x-small"},n.a.createElement("dl",null,n.a.createElement("dt",null,n.a.createElement("p",{className:"slds-popover_panel__label slds-truncate",title:"Phone"},"Phone")),n.a.createElement("dd",null,n.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"212-345-3485")))),n.a.createElement("div",{className:"slds-p-horizontal_small slds-size_1-of-2 slds-p-bottom_x-small"},n.a.createElement("dl",null,n.a.createElement("dt",null,n.a.createElement("p",{className:"slds-popover_panel__label slds-truncate",title:"Website"},"Website")),n.a.createElement("dd",null,n.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"teslamotors.com")))),n.a.createElement("div",{className:"slds-p-horizontal_small slds-size_1-of-2 slds-p-bottom_x-small"},n.a.createElement("dl",null,n.a.createElement("dt",null,n.a.createElement("p",{className:"slds-popover_panel__label slds-truncate",title:"Account Owner"},"Account Owner")),n.a.createElement("dd",null,n.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Jeff Maguire")))))),n.a.createElement("div",{className:"slds-popover__body"},n.a.createElement("dl",{className:"slds-popover__body-list"},n.a.createElement("dt",{className:"slds-m-bottom_small"},n.a.createElement(D.a,{figureLeft:W,flavor:"center"},n.a.createElement("p",{className:"slds-text-heading_small slds-hyphenate"},"Opportunities (2+)"))),n.a.createElement("dd",{className:"slds-m-top_x-small"},n.a.createElement("p",{className:"slds-truncate",title:"Tesla - Mule ESB"},n.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Tesla - Mule ESB")),n.a.createElement("dl",{className:"slds-list_horizontal slds-wrap slds-text-body_small"},n.a.createElement("dt",{className:"slds-item_label slds-text-color_weak slds-truncate",title:"Value"},"Value"),n.a.createElement("dd",{className:"slds-item_detail slds-text-color_weak slds-truncate",title:"$500,000"},"$500,000"),n.a.createElement("dt",{className:"slds-item_label slds-text-color_weak slds-truncate",title:"Close Date"},"Close Date"),n.a.createElement("dd",{className:"slds-item_detail slds-text-color_weak slds-truncate",title:"Dec 15, 2015"},"Dec 15, 2015"))),n.a.createElement("dd",{className:"slds-m-top_x-small"},n.a.createElement("p",{className:"slds-truncate",title:"Tesla - Anypoint Studios"},n.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Tesla - Anypoint Studios")),n.a.createElement("dl",{className:"slds-list_horizontal slds-wrap slds-text-body_small"},n.a.createElement("dt",{className:"slds-item_label slds-text-color_weak slds-truncate",title:"Value"},"Value"),n.a.createElement("dd",{className:"slds-item_detail slds-text-color_weak slds-truncate",title:"$60,000"},"$60,000"),n.a.createElement("dt",{className:"slds-item_label slds-text-color_weak slds-truncate",title:"Close Date"},"Close Date"),n.a.createElement("dd",{className:"slds-item_detail slds-text-color_weak slds-truncate",title:"Jan 15, 2016"},"Jan 15, 2016"))),n.a.createElement(B,null)),n.a.createElement("dl",{className:"slds-popover__body-list"},n.a.createElement("dt",{className:"slds-m-bottom_small"},n.a.createElement(D.a,{figureLeft:L,flavor:"center"},n.a.createElement("p",{className:"slds-text-heading_small slds-hyphenate"},"Cases (1)"))),n.a.createElement("dd",{className:"slds-m-top_x-small"},n.a.createElement("p",{className:"slds-truncate",title:"Tesla - Anypoint Studios"},n.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Tesla - Anypoint Studios")),n.a.createElement("dl",{className:"slds-list_horizontal slds-wrap slds-text-body_small"},n.a.createElement("dt",{className:"slds-item_label slds-text-color_weak slds-truncate",title:"Value"},"Value"),n.a.createElement("dd",{className:"slds-item_detail slds-text-color_weak slds-truncate",title:"$60,000"},"$60,000"),n.a.createElement("dt",{className:"slds-item_label slds-text-color_weak slds-truncate",title:"Close Date"},"Close Date"),n.a.createElement("dd",{className:"slds-item_detail slds-text-color_weak slds-truncate",title:"Jan 15, 2016"},"Jan 15, 2016"))),n.a.createElement(B,null))))}],C=l(5),A=l.n(C),M="height: 13rem;",F=g.d.uniqueId("dialog-heading-id-"),I=function(e){return n.a.createElement("div",{className:"slds-grid slds-grid_vertical-align-center"},e.dismissButtonLabel&&n.a.createElement("button",{className:"slds-button slds-button_neutral slds-col_bump-right"},e.dismissButtonLabel),e.actionLinkText&&n.a.createElement("span",{className:"slds-popover_prompt__action-link"},n.a.createElement("a",{href:"#",className:"slds-button"},e.actionLinkText)),e.brandButtonLabel&&n.a.createElement("button",{className:"slds-button slds-button_brand"},e.brandButtonLabel))},q=function(e){var t={"slds-popover_prompt_top":"top"===e.position,"slds-popover_prompt_top-right":"top-right"===e.position,"slds-popover_prompt_top-left":"top-left"===e.position,"slds-popover_prompt_bottom":"bottom"===e.position,"slds-popover_prompt_bottom-left":"bottom-left"===e.position,"slds-popover_prompt_bottom-right":"bottom-right"===e.position};return n.a.createElement(d.a,{className:A()("slds-popover_prompt",t,e.className),bodyClassName:e.bodyClassName,headingId:F,footer:e.showFooter&&n.a.createElement(I,{dismissButtonLabel:"Dismiss",actionLinkText:"Learn more",brandButtonLabel:"Save"}),closeButton:!0},n.a.createElement("div",{className:"slds-media"},e.symbol&&n.a.createElement("div",{className:"slds-media__figure"},n.a.createElement("span",{className:"slds-icon_container",title:e.assistiveText},n.a.createElement(m.a,{className:A()("slds-icon slds-icon_small slds-icon-text-default",e.iconClassName),sprite:"utility",symbol:e.symbol}),n.a.createElement("span",{className:"slds-assistive-text"},e.assistiveText))),n.a.createElement("div",{className:"slds-media__body"},n.a.createElement("h2",{id:F,className:"slds-popover_prompt__heading"},"Title"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))},R=[{context:"Prompt",id:"prompt-default",label:"Prompt – default",element:n.a.createElement(q,{symbol:"prompt"})}],z=[{context:"Prompt",id:"top-left",label:"Positioned: top left",demoStyles:M,storybookStyles:!0,element:n.a.createElement(q,{symbol:"prompt",showFooter:!0,position:"top-left"})},{context:"Prompt",id:"top-center",label:"Positioned: top center",demoStyles:M,storybookStyles:!0,element:n.a.createElement(q,{symbol:"prompt",showFooter:!0,position:"top"})},{context:"Prompt",id:"top-right",label:"Positioned: top right",demoStyles:M,storybookStyles:!0,element:n.a.createElement(q,{symbol:"prompt",showFooter:!0,position:"top-right"})},{context:"Prompt",id:"bottom-right",label:"Positioned: bottom right",demoStyles:M,storybookStyles:!0,element:n.a.createElement(q,{symbol:"prompt",showFooter:!0,position:"bottom-right"})},{context:"Prompt",id:"bottom-center",label:"Positioned: bottom center",demoStyles:M,storybookStyles:!0,element:n.a.createElement(q,{symbol:"prompt",showFooter:!0,position:"bottom"})},{context:"Prompt",id:"bottom-left",label:"Positioned: bottom left",demoStyles:M,storybookStyles:!0,element:n.a.createElement(q,{symbol:"prompt",showFooter:!0,position:"bottom-left"})},{context:"Prompt",id:"brand-with-footer",label:"Prompt: branded with footer",demoStyles:M,storybookStyles:!0,element:n.a.createElement(q,{symbol:"prompt",position:"top",showFooter:!0,className:"slds-popover_brand",iconClassName:"slds-popover__icon"})},{context:"Prompt",id:"brand-without-footer",label:"Prompt: branded without footer",demoStyles:M,storybookStyles:!0,element:n.a.createElement(q,{symbol:"prompt",position:"top",className:"slds-popover_brand slds-popover_brand-bottom",iconClassName:"slds-popover__icon"})}],H=(l(37),s.c.code),J=s.c.h2,V=s.c.h3,$=s.c.h4,U=s.c.li,Y=s.c.p,G=s.c.strong,K=s.c.ul,Q=function(){return Object(a.createElement)(s.b,{},Object(a.createElement)("div",{className:"doc lead"},"A popover is a non-modal dialog. The component should be paired with a clickable trigger element and contain at least one focusable element."),Object(a.createElement)(o.a,{exampleOnly:!0},Object(g.f)(h,"bottom")),J({id:"About-Popovers"},"About Popovers"),Y({},"A popover is used to display contextual information to the user."),Y({},"A popover can accept the following nubbin position classes, ",H({},".slds-nubbin_left"),", ",H({},".slds-nubbin_left-top"),", ",H({},".slds-nubbin_left-bottom"),", ",H({},".slds-nubbin_top-left"),", ",H({},".slds-nubbin_top-right"),", ",H({},".slds-nubbin_right-top"),", ",H({},".slds-nubbin_right-bottom"),", ",H({},".slds-nubbin_bottom-left"),", ",H({},".slds-nubbin_bottom-right"),"."),V({id:"Accessibility"},"Accessibility"),$({id:"Notable-features"},"Notable features"),K({},U({},"Popovers ",G({},"must")," come with a triggering button"),U({},"They ",G({},"must")," have at least one focusable element inside"),U({},"They ",G({},"should")," be implemented as a keyboard focus trap"),U({},"When triggered, user focus should be placed on the first focusable element that isn't the close button. If the close button is the only focusable element, focus should be placed there"),U({},"Pressing the Escape the key as well as clicking the close button should close the Popover"),U({},"User focus should be placed back on the triggering button when the popover is closed")),Y({},"Panel Popovers can be shown on mouse hover but for keyboard or screen reader users, a button should be present ",G({},"in addition")," and next to the hover trigger. This is due to the focus moving and trapping nature of non-modal dialogs. You ",G({},"should not")," move a user's focus without their expressed intent."),$({id:"Notable-attributes"},"Notable attributes"),K({},U({},"The Popover element should have ",H({},'role="dialog"')," applied"),U({},"The ",H({},"dialog")," should be labelled, this can be achieved in two ways:",K({},U({},"Apply the ",H({},"aria-labelledby")," attribute to the ",H({},"dialog")," element and set the value to be the ID of the main Heading element in the Popover (if it provides a good and meaningful title to the ",H({},"dialog"),")"),U({},"If no Heading element is present, use the ",H({},"aria-label")," attribute and set the value to be a meaningful title of the ",H({},"dialog")))),U({},"The ",H({},"dialog")," should be described where possible. This can be achieved by applying the ",H({},"aria-describedby")," attribute to the ",H({},"dialog")," element and set the value to be the id of the Popover body"),U({},"The triggering element ",G({},"must")," have ",H({},'aria-haspopup="true"')," when the popover is opened and ",H({},'aria-haspopup="false"')," when the popover is closed")),J({id:"Base"},"Base"),Object(a.createElement)(o.a,null,Object(g.f)(d.b)),V({id:"With-Header"},"With Header"),Object(a.createElement)(o.a,null,Object(g.f)(d.c,"header")),V({id:"With-Footer"},"With Footer"),Object(a.createElement)(o.a,null,Object(g.f)(d.c,"footer")),V({id:"With-Badge"},"With Badge"),Object(a.createElement)(o.a,null,Object(g.f)(d.c,"badge")),V({id:"Scrolling-region-with-max-height"},"Scrolling region with max-height"),Object(a.createElement)(o.a,null,Object(g.f)(d.c,"scrolling")),J({id:"Widths"},"Widths"),V({id:"Small"},"Small"),Object(a.createElement)(o.a,null,Object(g.f)(d.c,"width-small")),V({id:"Medium"},"Medium"),Object(a.createElement)(o.a,null,Object(g.f)(d.c,"width-medium")),V({id:"Large"},"Large"),Object(a.createElement)(o.a,null,Object(g.f)(d.c,"width-large")),V({id:"Full-Width"},"Full Width"),Object(a.createElement)(o.a,null,Object(g.f)(d.c,"width-full-width")),J({id:"Nubbins"},"Nubbins"),V({id:"Left"},"Left"),Object(a.createElement)(c.a,null,Object(a.createElement)(r.a,null,Object(a.createElement)("strong",null,"Left"),Object(a.createElement)(o.a,null,Object(g.f)(h,"left"))),Object(a.createElement)(r.a,null,Object(a.createElement)("strong",null,"Left Top"),Object(a.createElement)(o.a,null,Object(g.f)(h,"left-top"))),Object(a.createElement)(r.a,null,Object(a.createElement)("strong",null,"Left Bottom"),Object(a.createElement)(o.a,null,Object(g.f)(h,"left-bottom"))),Object(a.createElement)(r.a,null,Object(a.createElement)("strong",null,"Top"),Object(a.createElement)(o.a,null,Object(g.f)(h,"top"))),Object(a.createElement)(r.a,null,Object(a.createElement)("strong",null,"Top Left"),Object(a.createElement)(o.a,null,Object(g.f)(h,"top-left"))),Object(a.createElement)(r.a,null,Object(a.createElement)("strong",null,"Top Right"),Object(a.createElement)(o.a,null,Object(g.f)(h,"top-right"))),Object(a.createElement)(r.a,null,Object(a.createElement)("strong",null,"Right"),Object(a.createElement)(o.a,null,Object(g.f)(h,"right"))),Object(a.createElement)(r.a,null,Object(a.createElement)("strong",null,"Right Top"),Object(a.createElement)(o.a,null,Object(g.f)(h,"right-top"))),Object(a.createElement)(r.a,null,Object(a.createElement)("strong",null,"Right Bottom"),Object(a.createElement)(o.a,null,Object(g.f)(h,"right-bottom"))),Object(a.createElement)(r.a,null,Object(a.createElement)("strong",null,"Bottom"),Object(a.createElement)(o.a,null,Object(g.f)(h,"bottom"))),Object(a.createElement)(r.a,null,Object(a.createElement)("strong",null,"Bottom Left"),Object(a.createElement)(o.a,null,Object(g.f)(h,"bottom-left"))),Object(a.createElement)(r.a,null,Object(a.createElement)("strong",null,"Bottom Right"),Object(a.createElement)(o.a,null,Object(g.f)(h,"bottom-right")))),J({id:"Feedback-States"},"Feedback States"),V({id:"Error"},"Error"),Object(a.createElement)(o.a,null,Object(g.f)(f.c)),$({id:"With-Footer-2"},"With Footer"),Object(a.createElement)(o.a,null,Object(g.f)(f.d,"with-footer")),V({id:"Warning"},"Warning"),Object(a.createElement)(o.a,null,Object(g.f)(v)),$({id:"With-Footer-3"},"With Footer"),Object(a.createElement)(o.a,null,Object(g.f)(N,"with-footer")),J({id:"Examples"},"Examples"),V({id:"Walkthrough"},"Walkthrough"),Object(a.createElement)(o.a,null,Object(g.f)(j)),$({id:"Micro-Setup"},"Micro Setup"),Object(a.createElement)(o.a,null,Object(g.f)(w,"micro-setup")),$({id:"Micro-Setup-Alternate"},"Micro Setup - Alternate"),Object(a.createElement)(o.a,null,Object(g.f)(w,"micro-setup-alternate")),$({id:"Micro-Setup-In-Page"},"Micro Setup - In Page"),Object(a.createElement)(o.a,null,Object(g.f)(w,"micro-setup-in-page")),$({id:"Micro-Setup-Inline-Form"},"Micro Setup - Inline Form"),Object(a.createElement)(o.a,null,Object(g.f)(w,"micro-setup-inline-form")),$({id:"Action"},"Action"),Object(a.createElement)(o.a,null,Object(g.f)(w,"action-popover")),$({id:"Action-With-Heading"},"Action - With Heading"),Object(a.createElement)(o.a,null,Object(g.f)(w,"action-popover-heading")),$({id:"Action-With-Link"},"Action - With Link"),Object(a.createElement)(o.a,null,Object(g.f)(w,"action-popover-with-link")),V({id:"Feature"},"Feature"),Object(a.createElement)(o.a,null,Object(g.f)(P)),$({id:"With-icon-and-text"},"With icon and text"),Object(a.createElement)(o.a,null,Object(g.f)(S,"icon-text")),$({id:"With-icon-header-and-text"},"With icon, header, and text"),Object(a.createElement)(o.a,null,Object(g.f)(S,"icon-header-text")),$({id:"With-icon-header-text-and-link"},"With icon, header, text and link"),Object(a.createElement)(o.a,null,Object(g.f)(S,"icon-header-text-link")),$({id:"With-icon-header-text-and-footer"},"With icon, header, text and footer"),Object(a.createElement)(o.a,null,Object(g.f)(S,"icon-header-text-footer")),V({id:"Record-Preview-Panel"},"Record Preview Panel"),Object(a.createElement)(o.a,null,Object(g.f)(T)),V({id:"Prompt"},"Prompt"),Object(a.createElement)(o.a,null,Object(g.f)(R)),$({id:"Positioned-top-left"},"Positioned top left"),Object(a.createElement)(o.a,{demoStyles:"height: 250px;"},Object(g.f)(z,"top-left")),$({id:"Positioned-top-center"},"Positioned top center"),Object(a.createElement)(o.a,{demoStyles:"height: 250px;"},Object(g.f)(z,"top-center")),$({id:"Positioned-top-right"},"Positioned top right"),Object(a.createElement)(o.a,{demoStyles:"height: 250px;"},Object(g.f)(z,"top-right")),$({id:"Positioned-bottom-right"},"Positioned bottom right"),Object(a.createElement)(o.a,{demoStyles:"height: 250px;"},Object(g.f)(z,"bottom-right")),$({id:"Positioned-bottom-center"},"Positioned bottom center"),Object(a.createElement)(o.a,{demoStyles:"height: 250px;"},Object(g.f)(z,"bottom-center")),$({id:"Positioned-bottom-left"},"Positioned bottom left"),Object(a.createElement)(o.a,{demoStyles:"height: 250px;"},Object(g.f)(z,"bottom-left")),$({id:"With-brand-color-and-footer"},"With brand color and footer"),Object(a.createElement)(o.a,{demoStyles:"height: 250px;"},Object(g.f)(z,"brand-with-footer")),$({id:"With-brand-color-no-footer"},"With brand color - no footer"),Object(a.createElement)(o.a,{demoStyles:"height: 250px;"},Object(g.f)(z,"brand-without-footer")),J({id:"Styling-Hooks-Overview"},"Styling Hooks Overview"),Object(a.createElement)(i.a,{header:"A Note About z-index"},Object(a.createElement)("p",null,"By default, Popovers use the ",Object(a.createElement)("code",null,"$z-index-dialog")," (",Object(a.createElement)("a",{href:"/design-tokens/#category-z-index"},"value of 6000"),") token. This allows the Popover to appear above the element that triggered it, and in the vast majority of cases should work well out of the box. However, depending on where the Popover code lives when it's triggered, layout issues could arise."),Object(a.createElement)("p",null,"For this particular use case, the ",Object(a.createElement)("code",null,"--slds-c-popover-position-zindex")," ",Object(a.createElement)("a",{href:"/platforms/lightning/styling-hooks/"},"Styling Hook")," allows developers to change the z-index value. ",Object(a.createElement)("strong",null,"Please note"),": when this value is changed, the responsibility is on the developer to maintain the CSS stacking order.")))},X=function(){return Object(s.a)(Q())}}});