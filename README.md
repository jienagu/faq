
<!-- README.md is generated from README.Rmd. Please edit that file -->

# faq

<!-- badges: start -->

<!-- badges: end -->

This is package is to create a FAQ (Frequently Asked Questions) page for
Shiny application with desired data.frame.

## Installation

``` r
install.packages("faq")
```

## Introduction

Simply create a data frame with `question` column and `answer` column.
Then put this data frame into `faq()` function, we will get a nice FAQ
page.

``` r
library(faq)
df <- data.frame(
  question = c("Question1", "Question2", "Question3"),
  answer = c("answer for question1", 
             "question2 answer", 
             "answer3")
)
faq::faq(data = df, elementId = "faq", title = "Frequently Asked Questions")
```

<!--html_preserve-->

<div id="faq" class="faq html-widget" style="width:100%;height:480px;">

</div>

<script type="application/json" data-for="faq">{"x":{"data":{"question":["Question1","Question2","Question3"],"answer":["answer for question1","question2 answer","answer3"]},"title":"Frequently Asked Questions"},"evals":[],"jsHooks":[]}</script>

<!--/html_preserve-->
