/*
感謝您觀看這份程式碼
作品名稱: 醫學海龜湯
作者: 陳光穎 Bruce Chen
聯絡方式
  Facebook連結: https://www.facebook.com/bruce.chen.372
  LINE ID: brucechen0
最後修改日期: 2022/9/19
版本: 1.0.0.3
發表於: https://brucechen034020.github.io/
程式碼尺度
  N/A
智慧財產權:
    本作品作者與使用者約定如下:
      1. 您（使用者）可以複製、發行、展覽、表演、放映、廣播或通過資訊網路傳播本作品；不需標示作者姓名。
      2. 您可以自由複製、散布、展示及演出本作品。
      3. 您可以自由以任何形式改變、轉變或更改本作品。
      4. 您得為教育、娛樂、學術、公益、報導、評論目的而使用本作品，不限所利用之質量及其在整個著作所占之比例。
作者註解:
  1. 如本網頁有 bug 請用 Facebook(Messenger) 通知 Bruce Chen，謝謝。
  2. 如有任何建議，請用 Facebook(Messenger) 通知 Bruce Chen，謝謝。
  */

/* Global variables */
var QuestionsCount; // 資料庫題數. Untitled1.exe 產生的 pre題庫.txt 的程式碼中會自動設定此參數 (int)
var ButtonContinue; // 「繼續」按鈕 (Button)
var LabelQA; // 展示題目和答案 (p)
var QAStatus = 1; // LabelQA顯示狀態. 0: 正在展示問題. 1: 正在展示答案 (int)
var QuestionNumber; // 目前的題號 (int)
var database; // firebase database
var ip; // ip adress of the client (string)
var city; // city of the client (string)

/* p5 functions */
function setup(){
  /* Disable right click */
  //$('body').on('contextmenu', 'canvas', function(e){ return false; });

  /* Acquire IP adress */
  $.getJSON('https://api.ipstack.com/check?access_key=47879be4894b337833120069966fef8d', function(data) {
    console.log(JSON.stringify(data, null, 2));
    var userName = data['ip'];
    userName += ' (' + (data['country_name']) + ')';
    localStorage.setItem("name", userName);
    ip = userName.replace('.', '-');
    ip = ip.replace('.', '-');
    ip = ip.replace('.', '-');
    ip = ip.replace('.', '-');
    ip = ip.replace(' ', '-');
    ip = ip.replace('(', '');
    ip = ip.replace(')', '');
    ip = '-' + ip;
    city = data['city'];
  });

  /* Initialize 題庫 */
  QuestionsAnswers_initialization();
  console.log(QuestionsAnswers);

  /* Initiallize document.body elements */
  createP('醫學海龜湯');
  createP('本程式隨機輸出一些症狀或labs/findings，請你猜出病因。按「繼續」輸出題目。再按「繼續」看參考答案。答案之大括號代表科別。如欲複製文字，選取後按右鍵，或Ctrl+c。看完答案後，按「繼續」進入下一題。');
  ButtonContinue = createButton('繼續');
  ButtonContinue.mousePressed(button1_Clicked);
  LabelQA = createP('');

  /* Initialize Firebase */
  database = firebase.database();

  /* Initialize timed events */
  setTimeout(sendOnline, 10000);
}

function draw(){
  // This function is currently empty
}

/* User defined functions */
