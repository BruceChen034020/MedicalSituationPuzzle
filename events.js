/* events
版本: 1.0.0.4
2022/9/19
*/

/* Timed Events */
function sendOnline(){ // send a message to show you are online to the server
  var ref = Ref(database, 'online/' + ip);
  var d = new Date();
  var data = {
    Ip: ip,
    time: d.toString(),
    City: city
  }
  Set(ref, data);
  setTimeout(sendOnline, 10000);
}

/* Click Events */
function button1_Clicked(){ // click (void)
  if(QAStatus){
    QuestionNumber = Math.floor(Math.random() * QuestionsCount);
    console.log(QuestionNumber);
    LabelQA.html('Q: ' + QuestionsAnswers[QuestionNumber][0] + '<br>');
    QAStatus = 0;
  }else {
    console.log(QuestionNumber);
    LabelQA.html('A: ' + QuestionsAnswers[QuestionNumber][1] + '<br>', true);
    QAStatus = 1;
  }
}

/* Value Events */
