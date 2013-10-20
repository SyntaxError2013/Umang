###
## Fancy Settings by Frank Kohlhepp
## Copyright (c) 2011 - 2012 Frank Kohlhepp
## https://github.com/frankkohlhepp/fancy-settings
## License: MIT-license
###
window.Search = class Search
  constructor: (@search) ->
    @settings = []
    
    # Wire up search box
    find = =>
      @find @search.get "value"
    
    @search.addEvent "keyup", (event) =>
      if event.key is "esc"
        @reset()
      else
        find()
    
    @search.addEventListener "search", find
    
    # Wire up search string in hash
    searchString = (decodeURI document.location.hash.substring(1).split("/")[1] or "").trim()
    if searchString
      @search.focus()
      @search.set "value", searchString
      @find searchString
    
    window.addEventListener "hashchange", =>
      searchString = (decodeURI document.location.hash.substring(1).split("/")[1] or "").trim()
      if searchString isnt @search.get("value").trim()
        if searchString
          @search.focus()
          @search.set "value", searchString
          @find searchString
        else
          @reset()
  
  bind: (tab) =>
    tab.addEvent "click", @reset
    this
  
  index: (setting) =>
    @settings.push setting
    @find @search.get("value")
    this
  
  find: (searchString) =>
    # Set searchString in hash
    if searchString.trim() and (decodeURI document.location.hash.substring(1).split("/")[1] or "").trim() isnt searchString.trim()
      document.location.hash = "#{document.location.hash.substring(1).split("/")[0]}/#{encodeURI searchString.trim()}"
    
    # Exit search mode
    if !searchString.trim()
      document.location.hash = document.location.hash.substring(1).split("/")[0]
      document.html.removeClass "searching"
      return this
    
    # Or enter search mode
    
    # Reset results
    $("nothing-found").removeClass "match"
    @settings.each (setting) =>
      setting.bundle.removeClass "match"
      setting.group.removeClass "match"
      setting.tab.content.removeClass "match"
    document.html.addClass "searching"
    
    # Filter settings
    results = @settings.filter (setting) =>
      if setting.searchString.toLowerCase().contains searchString.trim().toLowerCase()
        true
      else
        false
    
    # Display results
    if !results.length
      $("nothing-found").addClass "match"
    else
      results.each (setting) =>
        setting.bundle.addClass "match"
        setting.group.addClass "match"
        setting.tab.content.addClass "match"
    
    this
  
  reset: =>
    @search.set "value", ""
    @search.blur()
    @find ""
