function copyButton(elementId,buttonID) {
	// 指定したIDの要素のテキストを取得
	var elementText = document.getElementById(elementId).textContent;

	// ボタンのラベル要素を取得
	var btn = document.getElementById(buttonID);
	var btnText = btn.innerHTML;

	// テキスト要素内の改行以外の空白を削除
	// 一行目の改行削除
	elementText = elementText.replace(/^\s+/g,"");
	// 半角スペース削除
	elementText = elementText.replace(/ /g, "");

	// テキストをクリップボードにコピー
	navigator.clipboard.writeText(elementText);
	btn.innerHTML = 'コピーしました'; // ボタンの文字変更
  	setTimeout(() => (btn.innerHTML = btnText), 1000); // ボタンの文字を戻す
}

function copyButtonNonRuby(elementId,buttonID) {
	// 指定したIDの要素のテキストを取得
	var elementText = document.getElementById(elementId).textContent;

	// ボタンのラベル要素を取得
	var btn = document.getElementById(buttonID);
	var btnText = btn.innerHTML;

	// テキスト要素内の改行以外の空白を削除
	// 一行目の改行削除
	elementText = elementText.replace(/^\s+/g,"");
	// 半角スペース削除
	elementText = elementText.replace(/ /g, "");
	// ルビ削除
	elementText = elementText.replace(/\([^)]*\)/g, "");

	// テキストをクリップボードにコピー
	navigator.clipboard.writeText(elementText);
	btn.innerHTML = 'コピーしました'; // ボタンの文字変更
  	setTimeout(() => (btn.innerHTML = btnText), 1000); // ボタンの文字を戻す
}
