<HTML>

<HEAD>
  <meta charset="utf-8" />
  <title>1人対戦</title>
  <script type="text/javascript" src="cookie.js"></script>
  <script>
    var bare_url = "http://www.waseda.jp/student/weekly/contents/2007b/137j01.jpg";
    var counter = 0; //シャッフルゲームで使用
    var hantei; // シャッフルゲームで使用
    var bgflug = false; //シャッフルゲームの背景変化用
    var player1_score = 0; //player1用スコア
    var player2_score = 0; //player2用スコア
    var turncounter = 0; //ターン数
    var com_mem = ["", "", "", "", "", ""]; //com用記憶メモリ
    var userName;
    var ranking = new Array();
    var comboMax = 0;
    var comboN = 0;

    var beeps = new Audio(); //beep音
    beeps.src = "../sound/se02.wav";

    var correct = new Audio(); // 正解音
    correct.src = "../sound/correct.mp3";　

    function resetRanking() {
      var scoreboard = document.getElementById("scoreboard");
      while (scoreboard.rows[1]) scoreboard.deleteRow(1);
      ranking = [];
    }

    function resetGame(flug) {
      if(flug){
      var resetboardYesNo = window.confirm("ランキングをリセットしますか？");
      if (resetboardYesNo) {
        resetRanking()
        }
      }
      counter = 0;
      hantei = 0;
      bgflug = false;
      player1_score = 0;
      player2_score = 0;
      var turncounter = 0;
      var comboMax = 0;
      var comboN = 0;
      document.getElementById("player2_score").value = player2_score;
      document.getElementById("player1_score").value = player1_score;
    }

    function saveRanking() {
      ranking.push(userName, player1_score, comboMax);
    }

    function writeRankingBoard() {
      //debugger;
      var scoreboard = document.getElementById("scoreboard");
      while (scoreboard.rows[1]) scoreboard.deleteRow(1);
      for (var i = 0; i < ranking.length; i += 3) {
        var row = scoreboard.insertRow(-1);
        var td0 = row.insertCell(0);
        td0.innerHTML = ranking[i];
        td0.align = "center";
        var td1 = row.insertCell(1);
        td1.innerHTML = ranking[i + 1];
        td1.align = "center";
        var td2 = row.insertCell(2);
        td2.innerHTML = ranking[i + 2];
        td2.align = "center";
      }

    }

    function saveUserName() {
      var regex = /^.{4}$/;
      userName = window.prompt("名前を入力して下さい！（４文字）例：おおくま", userName);
      if (!regex.test(userName)) {
        alert("４文字しかだめだよ！！！");
        saveUserName();
      }
    }

    // Flicker Photo Searchの実行
    function imageSearch() {
      // ユーザ入力のクエリを取得
      var query = document.getElementById("searchText").value;
      // FlickerPhotoSearchを実行するためのスクリプトを生成
      var new_script = document.createElement('script');
      new_script.src = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=451d37330ac9a67946aa2f662d922935&format=json&jsoncallback=showResults&safe_search=1&sort=relevance&tags=" + query;
      // 生成したスクリプトを自HTMLの先頭に追加してブラウザに実行させる
      document.head.appendChild(new_script);
    }

    // 検索結果の表示（dataに検索結果が入る（FlickerがJSON形式で入れてくれる））
    function showResults(data) {
      // Flickerから戻るdata形式は https://www.flickr.com/services/api/flickr.photos.search.htmlのexample results
      clearResults(1); //演習a
      if (data.stat != "ok") { // 検索が成功しているかどうか確認、失敗の時はstatusを表示して戻る
        document.write(data.stat);
        return;
      }
      //最初の8個のデータのみ利用
      var max_num = 8;
      if (data.photos.photo.length < 8) max_num = data.photos.photo.length; //8個より検索結果が少ない場合の処理
      for (var i = 0; i < max_num; i++) {
        var photo = data.photos.photo[i];
        // imgエレメントを生成
        var new_image = document.createElement('img');
        // imgのsrcにi番目の結果(URL)を設定 (
        var url = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_m.jpg";
        new_image.src = url;
        new_image.width = "100"; // 幅を100ピクセルに設定
        // imgエレメントを検索結果のi番目のセルに追加
        document.getElementById("r" + String(i)).appendChild(new_image);
      }
    }

    function clearResults(flg) {
      switch (flg) {
        case 1: //検索結果クリア
          for (i = 0; i < 8; i++) {
            var node = document.getElementById("r" + String(i));
            //nodeにchildがあればchildnodeを削除
            while (node.firstChild) {
              node.removeChild(node.lastChild);
            }
          }
          break;
        case 2: //演習c
          var node = document.getElementById("s");
          while (node.firstChild) {
            node.removeChild(node.lastChild);
          }
          break;
        case 3: //演習d
          //保存領域のエレメントをnodeに設定
          var node = document.getElementById("s");
          //比較元画像番号: 保存領域内の画像枚数を取得し最後の画像番号をbase_numに設定
          var base_num = node.childNodes.length - 1;
          //比較先画像番号:base_num番目の画像の一つ前の画像番号をcheck_numに設定
          var check_num = base_num - 1;
          while (base_num >= 0) { //比較元画像がある限り実行
            while (check_num >= 0) { //比較先画像がある限り実行
              //比較元と比較先の画像が同じかどうかチェック（URLが等しいか）
              if (node.childNodes[check_num].src == node.childNodes[base_num].src) {
                //同一であれば比較元の画像を削除
                node.removeChild(node.childNodes[base_num]);
                break;
              }
              check_num--; //比較先をひとつ前の画像へ
            }
            base_num--; //比較元を一つ前の画像に
            check_num = base_num - 1; //比較先を比較元の一つ前に
          }
          break;
      }
    }

    function onClickDo(node) { //演習e
      var parent_node = document.getElementById("s");

      //削除する命令
      //parent_node.removeChild(node);

      //画像を隠す
      //node.style.visibility="hidden";

      //画像の大きさとトグルを変える
      //node.width = "200";
      //if(node.width == 100) node.width="200";
      //else node.width="100";

      //画像を早稲田ベアに変更(クリックするたび元画像と切り替え)
      if (node.src != bare_url) {
        node.alt = node.src;
        node.src = bare_url;
      } else {
        node.src = node.alt;
      }

    }

    function saveResult(flg) { //演習b
      //imgエレメントを生成,saved_imageと命名
      var saved_image = document.createElement('img');
      saved_image.src = document.getElementById("r" + String(flg)).firstChild.src;
      //flg番目の検索結果画像URLをsaved_imageのscrタグに設定
      saved_image.width = "100";
      //saved_imageエレメントを画像領域に追加
      document.getElementById("s").appendChild(saved_image);
      //マウスクリック時にonClickDo関数を実行するようにイベントリスナを設定
      document.getElementById("s").lastChild.addEventListener("click", function() {
        onClickDo(this);
      });

    }

    function randomizeImage() { //演習g h
      clearResults(3); //重複画像を消します
      //debugger;
      counter = 0;
      hantei = 0;
      bgflug = false;
      player1_score = 0;
      player2_score = 0;
      var turncounter = 0;
      var comboMax = 0;
      var comboN = 0;
      document.getElementById("player2_score").value = player2_score;
      document.getElementById("player1_score").value = player1_score;
      var node = document.getElementById("s");
      var gazouNumber = node.childNodes.length; //あらかじめ画像数を求めておきます
      for (var i = 0; i < gazouNumber; i++) { //画像数だけforを回します
        var saved_image = document.createElement('img'); //imgエレメントをcreateします
        saved_image.src = node.childNodes[i].src; //画像srcをコピーします
        saved_image.width = "100";
        node.appendChild(saved_image); // id="s" に追加します
      }
      shuffle(); //演習gの内容はshuffle()関数にまとめた

      for (var i = 0; i < node.childNodes.length; i++) { //画像をまとめて裏返す作業
        node.childNodes[i].alt = node.childNodes[i].src; //altに前urlを格納
        node.childNodes[i].src = bare_url; // bare_urlを上書き
        node.childNodes[i].addEventListener("click", function() {
          onClickDo_game(this);
        });
      } //onClickDo_gameイベントリスナー設定

      alert("ゲームスタート！");
      saveUserName();
      alert(userName + "のターン！");
    }

    function shuffle() {
      var node = document.getElementById("s");
      var base_num = node.childNodes.length - 1;
      //シャッフル
      for (var i = 0; i <= base_num * 3; i++) { //画像をbase_num*3回ランダムにシャッフル
        var a = Math.floor(Math.random() * base_num) //0〜base_num-1までの乱数発生
        var b = Math.floor(Math.random() * base_num) //0〜base_num-1までの乱数発生
        var tmp = node.childNodes[b].src;
        node.childNodes[b].src = node.childNodes[a].src;
        node.childNodes[a].src = tmp;
      }
    }

    function onClickDo_game(node) { //シャッフルゲーム用クリックリスナー
      switch (counter) { //一回目のクリックか２回目のクリックかcounterで判定
        case 0: //一回目のクリック
          colorchange(1); //背景色と判定の変数をリセット
          node.src = node.alt; //表側表示で召喚
          counter++; //カウンターを足す
          hantei = node; //1回目に選んだものをスコープの外で管理

          break;
        case 1:
          node.src = node.alt;
          counter = 0; //カウンタをリセット
          if (node == hantei) {
            alert("同じものを２回選んじゃダメ！"); //同じものを２回選ばないようにバグ防止
            node.src = bare_url;
            break;
          }
          if (node.src == hantei.src) { //２回目と一致してたら
            window.setTimeout(function() {
              document.getElementById("s").removeChild(node); //２枚目を消す
              document.getElementById("s").removeChild(hantei); //１枚目を消す
              //debugger;
              beeps.play();
              colorchange(2); //背景色変える
              turncheck(1);
            }, 1000); //すぐ消えると無理ゲーになるのでしばらく表側で表示
            //debugger;
            //console.log(document.getElementById("s").childNodes.length);
          } else { //間違っていた場合
            window.setTimeout(function() {
              node.src = bare_url; //2枚目裏側に戻す
              hantei.src = bare_url; //1枚目裏側に戻す
              colorchange(1); //背景色変える
              com_mem[0] = node;
              for (var i = 5; i > 0; i--) {
                com_mem[i] = com_mem[i - 1];
              }
              turncheck(0);
            }, 1000); //すぐ裏返すと無理ゲーになるのでしばらく一秒待つ
          }
          break;
      }
    }

    function colorchange(flug) { //背景色を変える関数
      switch (flug) {
        case 1:
          if (bgflug) { //間違えた場合の処理
            document.bgColor = "red"
            bgflug = false;
          } else {
            document.bgColor = "white"; //正解の場合の処理
            bgflug = true;
          }
          break;
        case 2:
          if (bgflug) {
            document.bgColor = "blue";
            bgflug = false;
          } else {
            document.bgColor = "white";
            bgcolor = true;
          }
          break;
      }
    }

    function turncheck(flug) {
      //debugger;
      switch (flug) {
        case 0:
          turncounter++;
          if (turncounter % 2 == 0) {
            alert(userName + "のターン！");
          } else {
            comboChecker(0);
            //console.log(comboN);
            //console.log(comboMax);
            alert("AIのターン");
            window.setTimeout(complay1(), 2000);
          }
          break;
        case 1:

          if (turncounter % 2 == 0) {
            player1_score = player1_score + ((document.getElementById("s").childNodes.length + 2) / 2) * 100;
            comboChecker(1);
            //console.log(comboN);
            //console.log(comboMax);
            document.getElementById("player1_score").value = player1_score;
            if (document.getElementById("s").childNodes.length == 0) {
              switch (winchecker()) {
                case 1:
                  alert("終了〜！！" + userName + "の勝利！！！");
                  break;
                case 2:
                  alert("終了〜！ ひきわけ");
                  break;
                case 3:
                  alert("終了〜！！AIの勝利！！！");
                  break;
              }
              saveRanking();
              writeRankingBoard();
              resetGame();
              document.bgColor = "white";
            } else {
              alert(userName + "のターン！");
            }
          } else {
            player2_score = player2_score + ((document.getElementById("s").childNodes.length + 2) / 2) * 100;
            document.getElementById("player2_score").value = player2_score;
            if (document.getElementById("s").childNodes.length == 0) {
              switch (winchecker()) {
                case 1:
                  alert("終了〜！！" + userName + "の勝利！！！");
                  break;
                case 2:
                  alert("終了〜！ ひきわけ");
                  break;
                case 3:
                  alert("終了〜！！AIの勝利！！！");
                  break;
              }
              saveRanking();
              writeRankingBoard();
              resetGame();
              document.bgColor = "white";
            } else {
              comboChecker(0);
              alert("AIのターン");
              window.setTimeout(complay1(), 1000);
            }
            break;
          }

      }
    }

    function comboChecker(flug) {
      switch (flug) {
        case 0:
          comboN = 0;
          break;
        case 1:
          comboN++;
          if (comboMax < comboN) {
            comboMax = comboN;
          }
      }

    }

    function winchecker() {
      if (player1_score > player2_score) {
        return 1;
      } else if (player1_score == player2_score) {
        return 2;
      } else {
        return 3;
      }
    }

    function complay1() {
      //debugger;
      var select1 = document.getElementById("s").childNodes[com_ramdomsel()];
      window.setTimeout(onClickDo_game(select1), 1000);
      window.setTimeout(complay2_1(select1), 2000);
    }

    function complay2_1(select1) {
      var select2 = document.getElementById("s").childNodes[com_ramdomsel()];
      while (select2 == select1) {
        var select2 = document.getElementById("s").childNodes[com_ramdomsel()];
      }
      window.setTimeout(onClickDo_game(select2), 1000);
    }

    function com_ramdomsel() {
      var card_num = document.getElementById("s").childNodes.length;
      var select_card = getRandomInt(0, card_num - 1);
      return select_card;
    }

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  </script>

  <style type = "text/css">

    body {
      background-color: black;
      text-align: center;
      color: white;
    }

    table{
      border:solid 1px orange;
      border-spacing:0px; 
      margin-bottom:16px; 
      margin-right: auto; 
      margin-left: auto;}
    
    th,td{
      border:solid 1px orange;
      padding:4px;
    }

    #contents{
      width: 900px;
      margin: 0 auto;
    }

    #battle{
      width: 720px;
    }

    #score{
      width: 210px;
    }

    #score{
      position:absolute;
      top:0;
      right: 200px;
    }

    
  </style>
</HEAD>

<BODY>
  <div id = "contents">

    <div id = "battle">
  
      <div id = "button">
        <!-- ボタンの配置 -->
        <input id="searchText" type="text" />
        <input id="searchButton" type="button" value="検索" onclick="imageSearch()" />
        <input id="clearButton" type="button" value="検索結果クリア" onclick="clearResults(1)" />
        <input id="clearButton" type="button" value="保存領域クリア" onclick="clearResults(2)" />
        <br/>
        <input id="clearButton" type="button" value="保存領域の重複画像クリア" onclick="clearResults(3)" />
        <input id="clearButton" type="button" value="ランキングをリセットする" onclick="resetRanking(true)" />
        <br/>
      </div>

  <div id = "result">

    <h1>画像検索結果</h1>
    <!-- 画像検索結果を8個表示するための領域をテーブルにより構築 -->
    <table border="4" bordercolor="#ffffff" bgcolor="#cccccc">
      <tr bgcolor="#ffffff">
        <!-- onclickで各領域がクリックされた時にsaveResultを実行するように設定 -->
        <td id="r0" onclick="saveResult(0)" width="100" height="100"></td>
        <td id="r1" onclick="saveResult(1)" width="100"></td>
        <td id="r2" onclick="saveResult(2)" width="100"></td>
        <td id="r3" onclick="saveResult(3)" width="100"></td>
        <td id="r4" onclick="saveResult(4)" width="100"></td>
        <td id="r5" onclick="saveResult(5)" width="100"></td>
        <td id="r6" onclick="saveResult(6)" width="100"></td>
        <td id="r7" onclick="saveResult(7)" width="100"></td>
      </tr>
    </table>
  </div>

      <div id = "storage">
          <h1>画像保存領域</h1>
          <input id="searchButton" type="button" value="シャッフル" onclick="randomizeImage()" />
          あなたのスコア
          <input id="player1_score" type=text value="0" />
          AIのスコア
          <input id="player2_score" type=text value="0" />
          <!-- 画像保存領域はテーブル１セルで構成 -->
          <table border="4" bordercolor="#ffffff" bgcolor="#cccccc">
            <tr align="top">
              <td id="s" width="800" height="100"></td>
            </tr>
          </table>
      </div>
    </div> <!-- battle-->

  <div id = "score">
    <table id="scoreboard">
      <tr>
        <td align="center">名前</td>
        <td align="center">スコア</td>
        <td align="center">コンボ数</td>
      </tr>
    </table>
  </div>
</div> <!--contents-->
</BODY>

</HTML>
