HTMLWidgets.widget({

  name: 'faq',

  type: 'output',

  factory: function(el, width, height) {

    return {

      renderValue: function(x) {

        faq(el, x);

      },

      resize: function(width, height) {}

    };
  }
});


function faq(el, x){
  var jsonData = x.data

var faq = document.getElementById(el.id);
faq.classList.add("faq-package");

var faqtitle = document.createElement("H2");
var titletext = document.createTextNode(x.faqtitle);
faqtitle.appendChild(titletext);
faq.appendChild(faqtitle);

 let faqallexpand = document.createElement("button");
    faqallexpand.classList.add("faq-expand-all");
    faqallexpand.innerHTML = x.expand_all_button_text;

    var allcontent = document.getElementsByClassName("faqcontent");
    var allcollapsible = document.getElementsByClassName("faqcollapsible");
    faqallexpand.addEventListener("click", function() {
      if (faqallexpand.innerHTML === x.expand_all_button_text) {
             faqallexpand.innerHTML = x.collapse_all_button_text;
            } else {
             faqallexpand.innerHTML = x.expand_all_button_text;
            }
    for (i = 0; i < allcontent.length; i++) {
      if (faqallexpand.innerHTML === x.expand_all_button_text){
        allcontent[i].style.maxHeight = null;
        allcollapsible[i].classList.remove("active");
      } else {
        allcontent[i].style.maxHeight = allcontent[i].scrollHeight + "px";
        allcollapsible[i].classList.add("active");
      }
    }
  });

faq.appendChild(faqallexpand);

for (var i = 0; i < jsonData.answer.length; i++) {

   let wrapperdiv = document.createElement("div");
       wrapperdiv.classList.add("faqwrapper");
   let contentdiv = document.createElement("div");
    contentdiv.classList.add("faqcontent");
   let ptag = document.createElement("p");
   ptag.innerHTML = jsonData.answer[i];
   contentdiv.appendChild(ptag);

    let questiondiv = document.createElement("button");
    questiondiv.classList.add("faqcollapsible");
    questiondiv.innerHTML = jsonData.question[i];

    questiondiv.addEventListener("click", function() {
    this.classList.toggle("active");
    var faqcontent = this.nextElementSibling;
    if (faqcontent.style.maxHeight){
      faqcontent.style.maxHeight = null;
    } else {
      faqcontent.style.maxHeight = faqcontent.scrollHeight + "px";
    }
  });
  contentdiv.style.background = x.content_background_color;
  wrapperdiv.appendChild(questiondiv);
  wrapperdiv.appendChild(contentdiv);
  faq.appendChild(wrapperdiv);
}
}
