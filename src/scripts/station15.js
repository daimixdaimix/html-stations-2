const fruitsDiv = document.getElementById('fruits');
function displayList() {
    // 1. div#fruitsを取得
    const fruitsDiv = document.getElementById('fruits');
    
    // 2. 中身を空にする
    fruitsDiv.innerHTML = "";
    
    // 3. 新しい内容を作って入れる（これは次のステップ！）
    fruitsDiv.innerHTML = `
        <ul>
            <li>リンゴ</li>
            <li>イチゴ</li>
            <li>ブドウ</li>
        </ul>
    `;
}