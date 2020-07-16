#' FAQ page
#'
#' Create FAQ page
#'
#' @param data df with question and answer columns
#' @param width width of this widget
#' @param height height of this widget
#' @param elementId ellement ID of this widget
#' @param faqtitle title for this widgets
#'
#' @import htmlwidgets
#' @examples
#' df <- data.frame(
#' question = c("Question1", "Question2", "Question3"),
#' answer = c("answer for question1",
#'            "question2 answer",
#'            "answer3")
#' )
#' faq::faq(data = df, elementId = "faq", faqtitle = "Frequently Asked Questions")
#'
#' @export
faq <- function(data, width = NULL, height = NULL, elementId = NULL,
                faqtitle = "Frequently Asked Questions") {

  # forward options using x
  x = list(
    data = jsonlite::toJSON(
      data, dataframe = "columns", null = "null", na = "null", auto_unbox = TRUE,
      use_signif = TRUE, force = TRUE,
      POSIXt = "ISO8601", UTC = TRUE, rownames = FALSE, keep_vec_names = TRUE,
      json_verbatim = TRUE
    ),
    faqtitle = faqtitle
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'faq',
    x,
    width = width,
    height = height,
    package = 'faq',
    elementId = elementId
  )
}

#' Shiny bindings for faq
#'
#' Output and render functions for using faq within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width width of the widget
#' @param height height of the widget
#' @param expr An expression that generates a faq
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name faq-shiny
#'
#' @export
faqOutput <- function(outputId, width = '100%', height = '100%'){
  htmlwidgets::shinyWidgetOutput(outputId, 'faq', width, height, package = 'faq')
}

#' @rdname faq-shiny
#' @export
renderFaq <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, faqOutput, env, quoted = TRUE)
}
