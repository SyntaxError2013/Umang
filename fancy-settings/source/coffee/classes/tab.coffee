###
## Fancy Settings by Frank Kohlhepp
## Copyright (c) 2011 - 2012 Frank Kohlhepp
## https://github.com/frankkohlhepp/fancy-settings
## License: MIT-license
###
class Bundle
  constructor: (@creator, @name) ->
    @tab = new Element "div", class: "tab"
    @content = new Element "div", class: "tab-content"
    @tab.addEvent "click", @setActive
  
  setActive: =>
    @creator.activeBundle?.unsetActive() unless @creator.activeBundle is this
    
    @tab.addClass "active"
    @content.addClass "show"
    
    $("content").scrollTo 0 unless @creator.activeBundle is this
    @creator.activeBundle = this
    @setHash()
    this
  
  unsetActive: =>
    @tab.removeClass "active"
    @content.removeClass "show"
    @creator.activeBundle = null
    @setHash()
    this
  
  setHash: =>
    if !@creator.searchString
      document.location.hash = @name if document.location.hash.substring(1).split("/")[0] isnt @name
    else
      document.location.hash = "#{@name}/#{@creator.searchString}" if document.location.hash.substring(1).split("/")[0] isnt @name

window.Tab = class Tab
  constructor: (@tabContainer, @tabContentContainer) ->
    @autoselect = document.location.hash.substring(1).split("/")[0] or "1"
    @searchString = document.location.hash.substring(1).split("/")[1]
    @tabs = {}
    @counter = 1
    
    window.addEventListener "hashchange", =>
      select = document.location.hash.substring(1).split("/")[0] or "1"
      @searchString = document.location.hash.substring(1).split("/")[1]
      unless @activeBundle.name isnt select
        return
      
      if @tabs[select]?
        @tabs[select].setActive()
      else
        @tabs[1]?.setActive()
  
  new: =>
    bundle = new Bundle this, (@counter++).toString()
    bundle.tab.inject @tabContainer
    bundle.content.inject @tabContentContainer
    bundle.setActive() if !@activeBundle? or bundle.name is @autoselect
    @tabs[bundle.name] = bundle
