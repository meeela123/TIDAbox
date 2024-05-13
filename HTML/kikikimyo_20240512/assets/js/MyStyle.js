// chapter
class ChapterStyle extends HTMLElement {
	constructor() {
	  super();
	  const content = this.innerHTML.trim();
	  this.innerHTML = `
		<div class="sample_chapter text-center">
		  ${content}
		</div>
	  `;
	}
  }
customElements.define("chapter-style", ChapterStyle);


//  section
  class SectionStyle extends HTMLElement {
	constructor() {
	  super();
  	  const content = this.innerHTML.trim();
	  this.innerHTML = `
	  	<div class="sample_section">
			<div class="sample_section--border mx-auto text-center">
			${content}
			</div>
		</div>
	  `;
	}
  }
customElements.define("section-style", SectionStyle);

//  paragraph
class ParagraphStyle extends HTMLElement {
	constructor() {
	  super();
  	  const content = this.innerHTML.trim();
	  this.innerHTML = `
		<div class="sample_paragraph mx-auto">
		  ${content}
		</div>
	  `;
	}
  }
customElements.define("paragraph-style", ParagraphStyle);

// item
class ItemStyle extends HTMLElement {
	constructor() {
	  super();
  	  const content = this.innerHTML.trim();
	  this.innerHTML = `
		<div class="sample_item mx-auto">
		  ${content}
		</div>
	  `;
	}
  }
customElements.define("item-style", ItemStyle);

//  本文テキスト
class MainTextStyle extends HTMLElement {
	constructor() {
	  super();
  	  const content = this.innerHTML.trim();
	  this.innerHTML = `
		<div class="sample_section_inner my-2 mx-auto">
		  ${content}
		</div>
	  `;
	}
  }
customElements.define("main-text", MainTextStyle);

// ハイライト
class HighlightStyle extends HTMLElement {
	constructor() {
	  super();
  	  const content = this.innerHTML.trim();
	  this.innerHTML = `<span class="highlight-style fw-bold">${content}</span>`;
	}
  }
customElements.define("highlight-style", HighlightStyle);

// 探索箇所ハイライト
class HighlightMapStyle extends HTMLElement {
	constructor() {
	  super();
  	  const content = this.innerHTML.trim();
	  this.innerHTML = `
		<div class="highlight-map fw-bold me-auto"><img class="icon mt-0 me-2" src="./assets/images/map.svg">${content}</div>`;
	}
  }
customElements.define("highlight-map", HighlightMapStyle);

// ロールハイライト
class HighlightRollStyle extends HTMLElement {
	constructor() {
	  super();
  	  const content = this.innerHTML.trim();
	  this.innerHTML = `
		<span class="highlight-roll fw-bold me-auto"><img class="icon mt-0 me-2" src="./assets/images/dice.svg">${content}</span>`;
	}
  }
customElements.define("highlight-roll", HighlightRollStyle);

// 探索行動ハイライト
class HighlightSearchStyle extends HTMLElement {
	constructor() {
	  super();
  	  const content = this.innerHTML.trim();
	  this.innerHTML = `
		<span class="highlight-search fw-bold"><img class="icon mt-0 me-2" src="./assets/images/search.svg">${content}</span>`;
	}
  }
customElements.define("highlight-search", HighlightSearchStyle);

// 質疑応答見出し
class HighlightBubbleStyle extends HTMLElement {
	constructor() {
	  super();
  	  const content = this.innerHTML.trim();
	  this.innerHTML = `
		<div class="highlight-bubble fw-bold"><img class="icon mt-0 me-2" src="./assets/images/bubble.svg">${content}</div>`;
	}
  }
customElements.define("highlight-bubble", HighlightBubbleStyle);

// 質疑応答ハイライト
class HighlightQuestionStyle extends HTMLElement {
	constructor() {
	  super();
  	  const content = this.innerHTML.trim();
	  this.innerHTML = `
		<div class="highlight-question fw-bold"><img class="icon mt-0 me-2" src="./assets/images/question.svg">${content}</div>`;
	}
  }
customElements.define("highlight-question", HighlightQuestionStyle);

// 文字小さく
class SmallStyle extends HTMLElement {
	constructor() {
	  super();
  	  const content = this.innerHTML.trim();
	  this.innerHTML = `
		<span class="small-style">${content}</span>`;
	}
  }
customElements.define("small-style", SmallStyle);

// 文字大きく
class BigStyle extends HTMLElement {
	constructor() {
	  super();
  	  const content = this.innerHTML.trim();
	  this.innerHTML = `
		<span class="big-style">${content}</span>`;
	}
  }
customElements.define("big-style", BigStyle);

// NPCセリフ
class NPCLine extends HTMLElement {
	constructor() {
	  super();
  	  const content = this.innerHTML.trim();
	  this.innerHTML = `
		<span class="npc-line">${content}</span>`;
	}
  }
customElements.define("npc-line", NPCLine);

// NPCセリフハイライト
class NPCLineHighlight extends HTMLElement {
	constructor() {
	  super();
  	  const content = this.innerHTML.trim();
	  this.innerHTML = `
		<div class="highlight-style highlight-style--NPC mb-1">${content}</div>`;
	}
  }
customElements.define("highlight-npc-line", NPCLineHighlight);

//  KP向けテキスト
class ForKPTextStyle extends HTMLElement {
	constructor() {
	  super();
  	  const content = this.innerHTML.trim();
	  this.innerHTML = `
		<div class="sample_section_inner sample_section_inner--for-GM my-2 mx-auto p-3">
		  ${content}
		</div>
	  `;
	}
  }
customElements.define("for-kp-text", ForKPTextStyle);

//  情報テキスト
class InfoTextStyle extends HTMLElement {
	constructor() {
	  super();
  	  const content = this.innerHTML.trim();
	  this.innerHTML = `
		<div class="sample_section_inner sample_section_inner--info-box my-2 mx-auto p-3">
		  ${content}
		</div>
	  `;
	}
  }
customElements.define("info-text", InfoTextStyle);

//  技能判定成功
class SuccessRollStyle extends HTMLElement {
	constructor() {
	  super();
  	  const content = this.innerHTML.trim();
	  this.innerHTML = `<span class="text-roll text-roll--success">${content}</span>`;
	}
  }
customElements.define("success-roll", SuccessRollStyle);

//  技能判定失敗
class FailureRollStyle extends HTMLElement {
	constructor() {
	  super();
  	  const content = this.innerHTML.trim();
	  this.innerHTML = `<span class="text-roll text-roll--failure">${content}</span>`;
	}
  }
customElements.define("failure-roll", FailureRollStyle);

//  SANチェック
class SanRollStyle extends HTMLElement {
	constructor() {
	  super();
  	  const content = this.innerHTML.trim();
	  this.innerHTML = `<span class="text-roll text-roll--san fw-bold">${content}</span>`;
	}
  }
customElements.define("san-roll", SanRollStyle);

//  その他技能
class RollStyle extends HTMLElement {
	constructor() {
	  super();
  	  const content = this.innerHTML.trim();
	  this.innerHTML = `<span class="text-roll">${content}</span>`;
	}
  }
customElements.define("roll-style", RollStyle);

// bold
class BoldStyle extends HTMLElement {
	constructor() {
		super();
		const content = this.innerHTML.trim();
		this.innerHTML = `<span class="fw-bold">${content}</span>`;
		}
	}
customElements.define("bold-style", BoldStyle);

// リンク
class LinkStyle extends HTMLElement {
	constructor() {
		super();
		const content = this.innerHTML.trim();
		const href = this.getAttribute('link');
		this.innerHTML = `
			<a href="${href}" class="text-link text-link--main">
			${content}
			</a>
		`;
		}
	}
customElements.define("link-style", LinkStyle);

// リスト
class ListStyle extends HTMLElement {
	constructor() {
		super();
		const content = this.innerHTML.trim();
		this.innerHTML = `
			<div class="sample_section_inner my-2 mx-auto">
				<ul class="sample_section_inner--for-GM_list ms-3">
					${content}
				</ul>
			</div>
		`;
	  }
	}
customElements.define("list-style", ListStyle);

// リストアイテム
class ListItemStyle extends HTMLElement {
	constructor() {
		super();
		const content = this.innerHTML.trim();
		this.innerHTML = `
			<li>
				<span class="sample_section_inner--for-GM_list_text">
				${content}
				</span>
			</li>
		`;
	  }
	}
customElements.define("list-item", ListItemStyle);

// データリスト
class DataListStyle extends HTMLElement {
	constructor() {
		super();
		const content = this.innerHTML.trim();
		this.innerHTML = `
			<div class="sample_section_inner my-2 mx-auto">
				<dl class="row col-11 my-2 ms-2">
					${content}
				</dl>
			</div>
		`;
	  }
	}
customElements.define("data-list-style", DataListStyle);

// NPC情報
class NPCData extends HTMLElement {
	constructor() {
		super();
		const content = this.innerHTML.trim();
		this.innerHTML = `
			<div class="sample_section_inner sample_section_inner--NPC mt-5 mb-3 mx-auto">
				<div class="row col-12 mx-auto">
				${content}
				<div>
			</div>
		`;
	  }
	}
customElements.define("npc-data", NPCData);

// info
class NPCname extends HTMLElement {
	constructor() {
		super();
		const content = this.innerHTML.trim();
		this.innerHTML = `
			<div class="col-12 row mx-auto mb-2">
				<div class="d-md-flex align-items-center text-center text-md-start col-12 my-3 my-md-0 pb-3 pb-md-1 sample_section_inner--NPC__name">${content}</div>
			</div>
		`;
	  }
	}
customElements.define("npc-name", NPCname);

// status
class NPCstatus extends HTMLElement {
	constructor() {
		super();
		const str = this.getAttribute('str');
		const con = this.getAttribute('con');
		const pow = this.getAttribute('pow');
		const dex = this.getAttribute('dex');
		const app = this.getAttribute('app');
		const siz = this.getAttribute('siz');
		const int = this.getAttribute('int');
		const edu = this.getAttribute('edu');
		const san = this.getAttribute('san');
		const hp = this.getAttribute('hp');
		const mp = this.getAttribute('mp');
		const db = this.getAttribute('db');
		this.innerHTML = `
			<div class="row col-12 mx-auto">
				<div class="col-12 row pb-2">
					<div class="fw-bold pb-2">ステータス</div>
					<div class="NPC__status col-auto px-0 mb-2 mx-1 row text-center">
						<div class="NPC__item px-1">STR</div>
						<div class="NPC__value fw-bold px-1">${str}</div>
					</div>
					<div class="NPC__status col-auto px-0 mb-2 mx-1 row text-center">
						<div class="NPC__item px-1">CON</div>
						<div class="NPC__value fw-bold px-1">${con}</div>
					</div>
					<div class="NPC__status col-auto px-0 mb-2 mx-1 row text-center">
						<div class="NPC__item px-1">POW</div>
						<div class="NPC__value fw-bold px-1">${pow}</div>
					</div>
					<div class="NPC__status col-auto px-0 mb-2 mx-1 row text-center">
						<div class="NPC__item px-1">DEX</div>
						<div class="NPC__value fw-bold px-1">${dex}</div>
					</div>
					<div class="NPC__status col-auto px-0 mb-2 mx-1 row text-center">
						<div class="NPC__item px-1">APP</div>
						<div class="NPC__value fw-bold px-1">${app}</div>
					</div>
					<div class="NPC__status col-auto px-0 mb-2 mx-1 row text-center">
						<div class="NPC__item px-1">SIZ</div>
						<div class="NPC__value fw-bold px-1">${siz}</div>
					</div>
					<div class="NPC__status col-auto px-0 mb-2 mx-1 row text-center">
						<div class="NPC__item px-1">INT</div>
						<div class="NPC__value fw-bold px-1">${int}</div>
					</div>
					<div class="NPC__status col-auto px-0 mb-2 mx-1 row text-center">
						<div class="NPC__item px-1">EDU</div>
						<div class="NPC__value fw-bold px-1">${edu}</div>
					</div>
				</div>
				<div class="col-12 row pb-4">
					<div class="col-auto NPC__other-status mx-2">SAN ${san}</div>
					<div class="col-auto NPC__other-status mx-2">HP ${hp}</div>
					<div class="col-auto NPC__other-status mx-2">MP ${mp}</div>
					<div class="col-auto NPC__other-status mx-2">DB ${db}</div>
				</div>
			</div>
		`;
	  }
	}
customElements.define("npc-status", NPCstatus);

// 技能
class NPCroll extends HTMLElement {
	constructor() {
		super();
		const content = this.innerHTML.trim();
		this.innerHTML = `
			<div class="row col-12 mx-auto">
				<div class="col-12 row pb-4">
					<div class="fw-bold pb-2">技能</div>
					${content}
				</div>
			</div>
		`;
	  }
	}
customElements.define("npc-roll", NPCroll);

// NPCメモ
class NPCmemo extends HTMLElement {
	constructor() {
		super();
		const content = this.innerHTML.trim();
		this.innerHTML = `
			<div class="row col-12 mx-auto">
				<div class="col-12 pb-3">
					${content}
				</div>
			</div>
		`;
	  }
	}
customElements.define("npc-memo", NPCmemo);