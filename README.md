
<!-- README.md is generated from README.Rmd. Please edit that file -->

# faq <img src="faq_logo.png"  width="180px" align="right"/>

<!-- README.md is generated from README.Rmd. Please edit that file -->
[![CRAN_Status_Badge](https://www.r-pkg.org/badges/version/faq)](https://cran.r-project.org/package=faq)
[![Rdoc](https://www.rdocumentation.org/badges/version/faq)](https://www.rdocumentation.org/packages/faq) 
[![Download](https://cranlogs.r-pkg.org/badges/grand-total/faq)](https://cranlogs.r-pkg.org/badges/grand-total/faq)
<!-- badges: end -->

This is package is to create a FAQ (Frequently Asked Questions) page for
Shiny application with desired data.frame.

Live podcast tutorial on 25:33 : https://shinydevseries.com/post/episode-16-jmclellan/

## Installation

from CRAN
``` r
install.packages("faq")
```
Dev version

``` r
devtools::install_github("jienagu/faq")
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
faq::faq(data = df, elementId = "faq", faqtitle = "Frequently Asked Questions")
```

![demo_gif](faq_gif.gif)

## NEWS

# faq 0.1.1
* Add `expand_all_button_text` (customizing text on expand all button) and `collapse_all_button_text` (customizing text on collapse all button) arguments

* Add `content_background_color` arguments for customizing answer background color

See example:

```
library(faq)
df <- data.frame(
  question = c("Question1", "Question2", "Question3"),
  answer = c("answer for question1", 
             "question2 answer", 
             "answer3")
)
faq::faq(data = df, elementId = "faq", faqtitle = "Frequently Asked Questions",
         expand_all_button_text = "+ montrer tout", 
         collapse_all_button_text = "- cacher tout",
         content_background_color = "#f0f0f0")
```
All questions and answers are rendered as `innerHTML()` so we can embed any html tag including images. See example
```
df <- data.frame(
  question = c("Question1", "Question2", "Question3"),
  answer = c("Répondre <b>key word</b>", 
             "Répondre 2 <img src=\"https://media.giphy.com/media/oF5oUYTOhvFnO/giphy.gif\">", 
             "Répondre 3")
)
faq::faq(data = df, elementId = "faq", faqtitle = "Questions fréquemment posées",
         expand_all_button_text = "+ montrer tout", 
         collapse_all_button_text = "- cacher tout",
         content_background_color = "white")

```
Inserting an image in answer:
```
library(faq)
df <- data.frame(
  question = c("Question1", "Question2", "Question3"),
  answer = c("Répondre <b>key word</b>",
             "Répondre 2 <img src=\"https://raw.githubusercontent.com/jienagu/faq/master/faq_logo.png\">",
             "Répondre 3")
)
faq::faq(data = df, elementId = "faq", faqtitle = "FAQ")
```
