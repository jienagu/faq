##################################################
###  tree helper Tests  #################
##################################################

library(testthat)
library(here)
library(faq)
context("test faq is functioning properly")


testthat::test_that(
  "faq() produces expected", {
    df <- data.frame(
      question = c("Question1", "Question2", "Question3"),
      answer = c("answer for question1",
                 "question2 answer",
                 "answer3")
    )
    result <- faq::faq(data = df, elementId = "faq", faqtitle = "Frequently Asked Questions")
    as.character(result$x$data) %>%
      expect_equal("{\"question\":[\"Question1\",\"Question2\",\"Question3\"],\"answer\":[\"answer for question1\",\"question2 answer\",\"answer3\"]}")
  }
)
