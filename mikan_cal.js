// 「スーパーでみかんの合計金額を計算するプログラムの開発」
//
// Aさんが1個100円のみかんを、13個買いました。
// Aさんの支払金額はいくらになるか計算して、結果を変数xに代入。
// 合計金額xをコンソールに出力するプログラムを書いてみましょう。
// ※消費税は考慮しないものとする。

function getMikancal(price, num) {
  return price * num;
}

console.log(getMikancal(100, 13));
