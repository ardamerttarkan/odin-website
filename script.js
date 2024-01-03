const langSec = document.querySelector(".languageSection");
const buttons = document.querySelectorAll("a");
const MerhabaTitle = document.querySelector(".MerhabaTitle");
const OdinTitle = document.querySelector(".OdinTitle");
const KayboldumTitle = document.querySelector(".KayboldumTitle");
const AciklamaTitle = document.querySelector(".AciklamaTitle");
const btnCall = document.querySelector(".btnCall");


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        langSec.classList.toggle("active");
        const lang = button.getAttribute("language");
        MerhabaTitle.innerHTML = data[lang].MerhabaTitle;
        OdinTitle.innerHTML = data[lang].OdinTitle;
        KayboldumTitle.innerHTML = data[lang].KayboldumTitle;
        AciklamaTitle.innerHTML = data[lang].AciklamaTitle;
        btnCall.innerHTML = data[lang].btnCall;
    });
});



const data = {

    "turkish":
    {
    "MerhabaTitle": "Merhaba! Benim Adım,",
    "OdinTitle": "Odin",
    "KayboldumTitle": "Sanırım Kayboldum 😿",
    "AciklamaTitle": "Lütfen Sahibime Ulaşmama Yardım Eder Misiniz? Kendisi Çok Endişelenmiş Olmalı.<br> Ona Aşağıdaki Butonlardan Ulaşabilirsiniz. Yardımınız İçin Teşekkür Ederiz.",
    "btnCall": "Ara Beni"
    },

    "english":
    {
    "MerhabaTitle": "Hello! My name Is,",
    "OdinTitle": "Odin",
    "KayboldumTitle": "I Think I'm Lost 😿",
    "AciklamaTitle": "Can You Please Help Me Reach My Owner? He Must Be Very Worried.<br> You Can Reach Him Using the Buttons Below. Thank You For Your Help.",
    "btnCall": "Call Me"
    },


    "arabic":
    {
        "MerhabaTitle": "مرحبًا! اسمي,",
        "OdinTitle": "Odin",
        "KayboldumTitle": "أعتقد أنني ضعت 😿",
        "AciklamaTitle": "هل يمكنك مساعدتي في الوصول إلى مالكي؟ لا بد أنه قلق جدًا.<br> يمكنك الوصول إليه باستخدام الأزرار الموجودة أدناه. شكرا لك على مساعدتك.",
        "btnCall": "اتصل بي"
    ,}

}

function gotoWhatsapp(link){
    window.open(link.value);
}

function CallMe(){
    window.open("tel:+9005432014890");
}
