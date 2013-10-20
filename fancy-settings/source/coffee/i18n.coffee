###
## Fancy Settings by Frank Kohlhepp
## Copyright (c) 2011 - 2012 Frank Kohlhepp
## https://github.com/frankkohlhepp/fancy-settings
## License: MIT-license
###
lang = navigator.language.split("-")[0]

window.i18n ?= {}
window.i18n.get = (value, myLang = lang) ->
  return myLang if value == "lang"
  
  if @[value]?
    value = @[value]
    if value[myLang]?
      value[myLang]
    else if value.en?
      value.en
    else
      Object.values(value)[0]
  else
    value
