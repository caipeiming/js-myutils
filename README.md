#dialog-对话框:

##1. 正在加载提示框

使用javascript、css设置半透明遮罩层缓冲效果，兼容ie、火狐、google chome等浏览器

打开缓冲层： $.myloading();

或者 $.myloading({title: "正在处理..."});

关闭缓冲层： $.myloading("hide");

参考： http://blog.jdk5.com/zh/javascript-create-isloading-dialog/

##2. alert提示框
```javascript
$.myalert({
	content: "相关标题",
	confirm_btn_click: function (e){	//确认按钮点击事件
		$.myalert("getDialog").mydialog("hide");
	}
});
```
参考： http://blog.jdk5.com/zh/javascript-custom-alert-dialog/

##3. confirm提示框
```javascript
var options = {
	//width: width+"px", 	//默认为页面宽度的80%
	//title: "提示", 			//标题默认为提示
	content: "您确定要删除吗？",	//提示内容
	//cancel_btn_title: "取消", 	//取消按钮的文本
	//confirm_btn_title: "确认",	//确认按钮的文本
	cancel_btn_click: function (e){	//取消按钮点击事件
		$.myconfirm("getDialog").mydialog("hide");
		alert("cancel");
	},
	confirm_btn_click: function (e){	//确认按钮点击事件
		$.myconfirm("getDialog").mydialog("hide");
		alert("confirm");
	}
};
$.myconfirm(options);
```
参考： http://blog.jdk5.com/zh/javascript-custom-confirm-dialog/

#IDValidator-身份证号码有效性验证
```javascript
//新建普通实例
var Validator = new IDValidator();
//验证号码是否合法，合法返回true，不合法返回false
Validator.isValid(code);
//号码合法时返回分析信息（地区、出生日期、性别、校验位），不合法返回false
Validator.getInfo(code);
//仿造一个身份证号
Validator.makeID()
//新建普通实例
var Validator = new IDValidator();
//验证号码是否合法，合法返回true，不合法返回false
Validator.isValid(code);
//号码合法时返回分析信息（地区、出生日期、性别、校验位），不合法返回false
Validator.getInfo(code);
//仿造一个18位身份证号
Validator.makeID(
//仿造一个15位身份证号
Validator.makeID(true)
```
##参考资料
GB 11643-1999 公民身份证号码

GB 2260-1995 中华人民共和国行政区划代码

参考： http://blog.jdk5.com/zh/javascript-chinese-personal-id-card-validation/

#validate
##numeric-input 输入框控件只允许输入数字
```javascript
$("#positive_number").myvalidate({
	filter_type: "positiveNumber", 
	enterCallback: function (obj){
		//enter key callback
		alert(parseFloat(obj.val()));
	}, valCallback: function (val){
		//pressup callback,  return value
		$("div").html(val);
	}
});
$("#positive_number").focus();
```

参考： http://blog.jdk5.com/zh/javascript-html-input-allow-only-numeric-input/