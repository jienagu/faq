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
var faqtitle = document.createElement("H1");
var titletext = document.createTextNode(x.faqtitle);
faqtitle.appendChild(titletext);
faq.appendChild(faqtitle);

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
  wrapperdiv.appendChild(questiondiv);
  wrapperdiv.appendChild(contentdiv);
  faq.appendChild(wrapperdiv);
}
}
