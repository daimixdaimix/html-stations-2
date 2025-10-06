function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  // チェックボックスの要素を取得
  const checkbox = document.getElementById('check');
  const textElement = document.getElementById('text');

  // チェックされてるかどうかを調べる
  checkbox.checked  // これがtrue（チェック済み）かfalse（未チェック）を返すよ
  if (checkbox.checked) {
    textElement.style.backgroundColor = "red";
  } else {
    textElement.style.backgroundColor = "white";
  }
}
