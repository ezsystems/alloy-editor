YUI.add("button-subscript",function(t){"use strict";var s=t.Lang,i=t.Base.create("subscript",t.Plugin.Base,[t.ButtonBase],{TPL_CONTENT:'<i class="alloy-editor-icon-subscript"></i>',_onClick:function(){var t=this.get("host").get("editor");t.execCommand("subscript")}},{NAME:"subscript",NS:"subscript",ATTRS:{element:{validator:s.isString,value:"sub"},strings:{validator:s.isObject,value:{label:"Subscript"}}}});t.ButtonSubscript=i},"",{requires:["button-base"]});