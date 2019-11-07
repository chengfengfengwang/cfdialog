import './style.css';

function Dialog(prop) {
	this.dialog = document.createElement('div');
	this.id = prop.id || 'cfDialog';
	this.title = prop.title || '标题';
	this.content = prop.content || '内容';
	this.init()
}
Dialog.prototype.init = function () {
	this.dialog.innerHTML = `
  <div class="mask">
		<div class="dialog">
			<div class="dialog_header">
				${this.title}
			</div>
			<div class="dialog_content">
			${this.content}
			</div>
			<div class="dialog_footer">
				确认
			</div>
		</div>
	</div>`;
	this.dialog.setAttribute('id', this.id);
}

Dialog.prototype.show = function () {
	document.body.appendChild(this.dialog);
	this.bindEve()
}
Dialog.prototype.bindEve = function () {
	var that = this;
	document.body.appendChild(this.dialog)
	this.confirmBtn = document.querySelector('.dialog_footer')
	this.confirmBtn.addEventListener('click', function () {
		that.hide()
	})
}
Dialog.prototype.hide = function () {
	this.dialog.remove()
}
window.Dialog = Dialog
