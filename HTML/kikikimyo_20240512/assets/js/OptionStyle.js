// 名前変換

class NameChange extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
			<div class="sample_section_inner mt-4 mb-2 mx-auto">
				<div class="col-10 col-md-12 offset-1 offset-md-0">
					<div class="col-10 col-md-8 offset-1 offset-md-2 text-start">
						<span class="namechange-item mb-1 col-5">HO1-愛煙家</span><input class="namechange-input py-1 px-2 mb-1 offset-lg-1 col-lg-6 col-12" type="text" data-text="名称1" />
					</div>
				</div>
				<div class="col-10 col-md-12 offset-1 offset-md-0 text-start">
					<div class="col-10 col-md-8 offset-1 offset-md-2">
						<span class="namechange-item col-lg-5 col-12">HO2-嫌煙家</span><input class="namechange-input py-1 px-2 mb-1 offset-lg-1 col-lg-6 col-12" type="text" data-text="名称2" />
					</div>
				</div>
				<div class="my-1 col-10 col-md-6 offset-1 offset-md-3">
					<div class="col-4 offset-4 mt-3 mb-1">
						<input class="namechange-button namechange-button--submit col-12" type="submit" id="changeSet" value="変換" />
					</div>
					<div class="col-4 offset-4 mb-3">
						<input class="namechange-button namechange-button--clear col-12" type="submit" id="changeClr" value="リセット" />
					</div>
			</div>
			</div>
		`;
	}
}
customElements.define("name-change", NameChange);

class NameCheck extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
		<div class="sample_section_inner mt-4 mb-2 mx-auto">
				<div class="namechange-opution-box p-4 mt-5 offset-lg-2 col-lg-8">
				<div class="namechange-opution-box__text mb-2">現在の設定</div>
				<div class="row text-start">
				<div class="namechange-item col-5 text-center">HO1-愛煙家</div><div class="namechange-text col-7">#名称1#</div>
				</div>
				<div class="row text-start">
				<div class="namechange-item col-5 text-center">HO2-嫌煙家</div><div class="namechange-text col-7">#名称2#</div>
				</div>
			</div>
			</div>
		`;
	}
}
customElements.define("name-check", NameCheck);


// ルビ

class RubyStyle extends HTMLElement {
	constructor() {
		super();
		const content = this.innerHTML.trim();
		const ruby = this.getAttribute('ruby');
		this.innerHTML = `<ruby><rb>${content}</rb><rp>(</rp><rt>${ruby}</rt><rp>)</rp></ruby>`;
		}
	}
customElements.define("ruby-style", RubyStyle);


// ルビ機能なしコピー（共通情報）
class NonRubyCopy extends HTMLElement {
	constructor() {
		super();
		const content = this.innerHTML.trim();
		const id = this.getAttribute('copy-id');
		const button = this.getAttribute('copy-id') + 'button';
		this.innerHTML = `
			<div class="sample_section_inner sample_section_inner--info-box my-2 mx-auto p-3" id="${id}">${content}</div>
			<div class="sample_section_inner my-2 mx-auto d-flex justify-content-end mt-1">
				<button id="${button}" type="button" class="btn btn-outline-primary copy-button" onclick="copyButton('${id}','${button}')"><span><img class="copy" src="assets/images/copy.svg"></span></button>
			</div>
		`;
		}
	}
customElements.define("copy-text", NonRubyCopy);

// ルビ機能なし秘匿（HO1）
class NonRubyCopyHo1 extends HTMLElement {
	constructor() {
		super();
		const content = this.innerHTML.trim();
		const id = this.getAttribute('copy-id');
		const button = this.getAttribute('copy-id') + 'button';
		this.innerHTML = `
			<div class="sample_section_inner sample_section_inner--ho-box-head mx-auto p-3 pb-0"><img class="icon mt-0 mx-2" src="./assets/images/HO1.svg">HO1秘匿</div>
			<div class="sample_section_inner sample_section_inner--info-box sample_section_inner--ho-box mb-2 mx-auto p-3" id="${id}">${content}</div>
			<div class="sample_section_inner my-2 mx-auto d-flex justify-content-end mt-1">
				<button id="${button}" type="button" class="btn btn-outline-primary copy-button" onclick="copyButton('${id}','${button}')"><span><img class="copy" src="assets/images/copy.svg"></span></button>
			</div>
		`;
		}
	}
customElements.define("copy-text-ho1", NonRubyCopyHo1);

// ルビ機能なし秘匿（HO2）
class NonRubyCopyHo2 extends HTMLElement {
	constructor() {
		super();
		const content = this.innerHTML.trim();
		const id = this.getAttribute('copy-id');
		const button = this.getAttribute('copy-id') + 'button';
		this.innerHTML = `
			<div class="sample_section_inner sample_section_inner--ho-box-head mx-auto p-3 pb-0"><img class="icon mt-0 mx-2" src="./assets/images/HO2.svg">HO2秘匿</div>
			<div class="sample_section_inner sample_section_inner--info-box sample_section_inner--ho-box mb-2 mx-auto p-3" id="${id}">${content}</div>
			<div class="sample_section_inner my-2 mx-auto d-flex justify-content-end mt-1">
				<button id="${button}" type="button" class="btn btn-outline-primary copy-button" onclick="copyButton('${id}','${button}')"><span><img class="copy" src="assets/images/copy.svg"></span></button>
			</div>
		`;
		}
	}
customElements.define("copy-text-ho2", NonRubyCopyHo2);

// 共通秘匿コピー
class NonRubyCopyHo extends HTMLElement {
	constructor() {
		super();
		const content = this.innerHTML.trim();
		const id = this.getAttribute('copy-id');
		const button = this.getAttribute('copy-id') + 'button';
		this.innerHTML = `
			<div class="sample_section_inner sample_section_inner--ho-box-head mx-auto p-3 pb-0"><img class="icon mt-0 ms-2 me-1" src="./assets/images/HO1.svg"><img class="icon mt-0 ms-1 me-2" src="./assets/images/HO2.svg">秘匿</div>
			<div class="sample_section_inner sample_section_inner--info-box sample_section_inner--ho-box mb-2 mx-auto p-3" id="${id}">${content}</div>
			<div class="sample_section_inner my-2 mx-auto d-flex justify-content-end mt-1">
				<button id="${button}" type="button" class="btn btn-outline-primary copy-button" onclick="copyButton('${id}','${button}')"><span><img class="copy" src="assets/images/copy.svg"></span></button>
			</div>
		`;
		}
	}
customElements.define("copy-text-ho", NonRubyCopyHo);

// ルビ機能ありコピー
class RubyCopy extends HTMLElement {
	constructor() {
		super();
		const content = this.innerHTML.trim();
		const id = this.getAttribute('copy-id');
		const rubybutton = this.getAttribute('copy-id') + 'rubybutton';
		const nonrubybutton = this.getAttribute('copy-id') + 'nonrubybutton';
		this.innerHTML = `
			<div class="sample_section_inner sample_section_inner--info-box my-2 mx-auto p-3">
				<div id="${id}">${content}</div>
			</div>
			<div class="sample_section_inner my-2 mx-auto d-flex justify-content-end mt-1">
				<button id="${rubybutton}" type="button" class="btn btn-outline-primary copy-button me-3" onclick="copyButton('${id}','${rubybutton}')"><span><img class="copy" src="assets/images/copy.svg"></span>ふりがなあり</button>
				<button id="${nonrubybutton}" type="button" class="btn btn-outline-primary copy-button" onclick="copyButtonNonRuby('${id}','${nonrubybutton}')"><span><img class="copy" src="assets/images/copy.svg"></span>ふりがななし</button>
			</div>
		`;
		}
	}
customElements.define("ruby-copy-text", RubyCopy);