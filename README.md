# cfdialog
使用方法：
npm install cfdialog
require('cfdialog')
此时有一个全局变量 Dialog

初始化：
 var dialog = new Dialog({
    title:'提示',
    content:'出错了'
})
显示：
dialog.show()
隐藏：
dialog.hide()