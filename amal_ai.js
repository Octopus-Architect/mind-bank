function speak(t) {
    window.speechSynthesis.cancel();
    const m = new SpeechSynthesisUtterance(t);
    m.lang = 'ar-SA'; m.rate = 0.8; // الصوت الهادئ
    window.speechSynthesis.speak(m);
}

function handleForgotPass() {
    speak("انتظر مني الرمز على الموبايل يا محمود");
    let code = Math.floor(100000 + Math.random() * 900000); 
    alert("رمز الاسترجاع (6 أرقام): " + code);
    let userCode = prompt("أدخل الرمز للمتابعة:");
    if(userCode == code) {
        window.location.href = 'client_data.html';
    } else {
        speak("الرمز خطأ");
    }
}
