//2022年11月3日の講座
console.log("HELL-O"); // HELL-Oとコンソールログに表示
// ここから足し算を行う
console.log(1+1);
console.log("1+1"); // 文字列「1+1」
// 足し算終わり

// 三種の変数（この講座ではvarを基本使う)
var f_name ="RINA"; //再代入も再宣言（var ○○をもう一回）もできる
let l_name ="NISHIGUCI";    //再代入はできる、再宣言はできない
const n_name="yopipi";  //constは再代入も再宣言ができない

// 変数の呼び出し
console.log("I am " + f_name +" " + l_name + ". " + "My nickname is " + n_name + ".");

// 再代入
l_name ="YOSHIDA";
console.log(l_name);

// 変数に式を代入する。
var intro ="私は"+f_name+"です。";
console.log(intro);

// 数字を入れる
var count = 1;
// 再代入
count = count+1;
// 特殊な書き方 count = count+1;と同じ意味
count += 1;
// +1、-1だけなら
count++
count--
// 前に置いても可
++count
--count
console.log(count);

//書き方の違い
var x1 = 1;
console.log(++x1);  // 2が出る(プラス１をした後に表示する)
console.log(x1);    // 2が出る

var x2 = 1;
console.log(x2++);  //1が出る(表示した後にプラス１する）
console.log(x2);    //2が出る

// 分割
var prefect= "京都、香川、千葉、滋賀、佐賀、北海道";
var pref= prefect.split("、");  //「、」で区切る
console.log(pref);

//配列
var prof= ["宇宙","高エネルギー加速器","cyberspace","香川県"]    //左から0、1、2、3番と数える
// 配列の呼び出し
console.log(prof[2]+ "は電脳空間と訳されニューロマンサーの用語です。");
console.log("私の出身地は"+ prof[3]+ "です。");
//再代入
prof[1]= "ハンバーグ";
console.log("私は"+ prof[1]+ "が好きです。");

//オブジェクト（連想配列）
var region={
    kagawa:"うどん",
    chiba:"ディズニー",
    tokyo:"スカイツリー"
};
console.log(region.chiba);

//2022年11月4日の講座
// var nun={
//     FFood: "チキン南蛮",
//     FSports: "バスケ",
//     FMusic: "サザン",
//     FYouTuber: "東オン"
// };

// 複数人のプロフィールを書くのは面倒なのでまとめる
var pf ={
    nun: {
        FFood: "チキン南蛮",
        FSports: "バスケ",
        FMusic: "サザン",
        FStar: "東オン"
    },

    meme: {
        FFood: "焼肉",
        FSports: "バレーボール",
        FMusic: "B's",
        FStar: "ジョニー・デップ"
    },

    yopipi: {
        FFood: "餃子",
        FSports: "バドミントン",
        FMusic: "バンク",
        FStar: "金属バット"
    }

};

console.log("ぬんの好きな食べ物は" + pf.nun.FFood + "です。");
console.log("ぬんの好きな食べ物は" + pf["nun"]["FFood"] + "です。");
console.log(pf.nun.FFood === "餃子");
console.log(pf.nun.FFood !== "餃子");

var pf2 =[
    {name:"ぬん", date: ["チキン南蛮","バスケ","サザン","東オン"]},
    {name:"めめ", date: ["焼肉","バレーボール","B's","ジョニー・デップ" ]},
    {name:"よぴぴ", date: [ "餃子","バドミントン","バンク","金属バット" ]}
];

//for分で1～100まで表示する
// for (let index = 0; index < 101; index++) {
//     console.log(index);
    
// };

for (let index = 0; index < pf2.length; index++) {
    var test = pf2[index];
    console.log(test["name"]);
    console.log(test["date"]);
};

// for (let index = 0; index < pf2.nun.length; index++) {
//     console.log("ぬんの好きなものは" + pf2["nun"][index] + "です。");
//     console.log("めめの好きなものは" + pf2["meme"][index] + "です。");
//     console.log("よぴぴの好きなものは" + pf2["yopipi"][index] + "です。");
    
// };

//if文 条件分岐
const license = 1;
if(license == 0){
    console.log("運転免許を取得してください");
}else if(license == 1) {
    console.log("おめでとう");
}else {
    consol.log("我が国で有効な免許を提示してください");
};

// 宿題「じゃんけん」
//VScode上で出す手を入力すると勝ち負けを表示してください。

//PLAN A
// 自分の手を決める
var my_hand = "パー";
// コンピューターの手を決める
var com_hand = "チョキ";
// 自分の手とコンピューターの手をifで分岐
// 自分（グー）相手（チョキ）、自分（チョキ）相手（パー）、自分（パー）相手（グー）
// の時は「勝ち」
if(my_hand == "グー"&&com_hand == "チョキ"||my_hand == "チョキ"&&com_hand == "パー"||my_hand == "パー"&&com_hand == "グー"){
    console.log("勝ち");
}else if(my_hand == com_hand){
    // 同じなら「あいこ」
    console.log("あいこ");
    // その他は「負け」
}else{
    console.log("まけ");
}

//PLAN B
// グー1, チョキ2,パー3
//自分：ぐー 相手:ちょき
var my_hand = 1;
var com_hand = 2;
//最初に「自分の手ー相手の手」（1-2=-1）
var first = my_hand - com_hand;
//次に3を足す
var second = first + 3;
//次に3で割って余りを出す
var third =second % 3;
//もしその結果が0なら「あいこ」
if (third==0){
    console.log("あいこ");
}
//もしその結果が1なら「負け」
else if(third==1){
    console.log("負け");
}
//それ以外は「勝ち」
else{
    console.log("勝ち");
}

//宿題「fizz buzz」
//0～100で3の倍数でfizz、5の倍数でbuzz、両方の倍数でfizzbuzzと表示してください。

// iという箱を作って100になるまで+1を繰り返す
for (var i = 0;i <=100; i++){
    // iが0の時はそのままiの中身を表示する
    if (i === 0){
        console.log(i);
    }
    // もし15で割って余り0ならFizzBuzzを表示
    else if (i % 15 === 0){
        console.log("Fizzbuzz");
    }
    // もし5で割って余り0ならBuzzを表示
    else if (i % 5 === 0){
        console.log("Buzz");
    }
    // もし3で割って余り0ならFizzを表示
    else if(i % 3 === 0){
        console.log("Fizz");
    }
    // それ以外はiの中にある数字をそのまま表示
    else{
        console.log(i);
    }
}

//js.htmlに対して
var text_node = document.getElementById("text");
console.log(text_node);
text_node.textContent = "おはよう！";
// text_node = "<h1>こんばんは</h1>";
