
//全然分からない...

//グローバル変数の定義
var SCREEN_SIZE = 500; //キャンパスのサイズ
var SIDE_CELLS = 200; // 一片のマスの数
var CELL_SIZE = SCREEN_SIZE / SIDE_CELLS; // １マスの幅
var FPS = 200; // フレームレート（1秒間に何回画面を書き換えることができるかを表す指標）
var canvas; // キャンパス
var context; // コンテキスト（キャンパスの筆のような概念です）

//アリの方向用配列
var dirs = [
  {'row': -1, 'col': 0}, // 上
  {'row': 0, 'col': 1}, //右
  {'row': 1, 'col': 0}, // 下
  {'row': 0, 'col': -1}, //　左
];

//　まずは初期化処理
window.onload = function(){
  canvas = document.getElementById('world'); // キャンパスの書6
  context = canvas.getContext('2d'); // コンテキストの所得
  canvas.width = canvas.height = SCREEN_SIZE; //キャンパスの画面サイズ設定
  var scaleRate = Math.min(window.innerHeight/SCREEN_SIZE,
      window.innerHeight/SCREEN_SIZE); //画面引き伸ばし率
  canvas.style.height = canvas.style.width = SCREEN_SIZE
            * scaleRate + 'px';　// 画面引き伸ばし
  var field = new Array(SIDE_CELLS); // フィールド情報
  for (var i = 0; i < SIDE_CELLS; i++){ // マス全てに０を格納して初期化
    field[i] = new Array(SIDE_CELLS);
    for (var j = 0; j < SIDE_CELLS; j++){
      field[i][j] = 0;
    }
  }
  //アリ　どうやらjavascriptではコンストラクタもこう書くみたい
  var ant = {'dir': 0, 'row': SIDE_CELLS / 2 - 1,
                'col': SIDE_CELLS / 2 -1};
  simulate(field, ant);　//シュミレート開始
};

function simulate(field, ant){
  if(field[ant.row][ant.col]){ // アリの現在地が白の場合
    //??どうしてこれが白なのかわからない...
    ant.dir--;
    context.fillStyle = 'rgb(0, 0, 0,)';
  } else {
    ant.dir++;
    context.fillStyle = 'rgb(0, 255, 255)';
  }
  field[ant.row][ant.col] = 1 - field[ant.row][ant.col]; // アリのいるマスを反転
  context.fillRect(ant.col * CELL_SIZE, ant.row * CELL_SIZE,
          CELL_SIZE, CELL_SIZE); // アリの居るマスの色を描く
  ant.dir =(ant.dir + 4) % 4; // アリの向きを修正
  ant.row += dirs[ant.dir].row; //アリを移動
  ant.col += dirs[ant.dir].col; //アリを移動
  context.fillStyle = 'rgb(0, 0, 255)'; //アリの色の設定
  context.fillRect(ant.col * CELL_SIZE, ant.row * CELL_SIZE,
      CELL_SIZE, CELL_SIZE); // アリを描く
  if(ant.row < 0 || ant.row >= SIDE_CELLS || ant.col < 0 ||　
      ant.col >= SIDE_CELLS){　//壁判定
    alert("The ant has ran away.");
  } else {
    setTimeout(simulate, 1000/FPS, field, ant);
  }
}
