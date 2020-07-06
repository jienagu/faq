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
var title = document.createElement("H1");
var titletext = document.createTextNode(x.title);
title.appendChild(titletext);
faq.appendChild(title);

for (var i = 0; i < jsonData.answer.length; i++) {

   let wrapperdiv = document.createElement("div");
       wrapperdiv.classList.add("wrapper");
   let contentdiv = document.createElement("div");
    contentdiv.classList.add("content");
   let ptag = document.createElement("p");
   ptag.innerHTML = jsonData.answer[i];
   contentdiv.appendChild(ptag);

    let questiondiv = document.createElement("button");
    questiondiv.classList.add("collapsible");
    questiondiv.innerHTML = jsonData.question[i];

    questiondiv.addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
  wrapperdiv.appendChild(questiondiv);
  wrapperdiv.appendChild(contentdiv);
  faq.appendChild(wrapperdiv);
}
}
