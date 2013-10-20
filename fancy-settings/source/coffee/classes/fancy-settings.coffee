###
## Fancy Settings by Frank Kohlhepp
## Copyright (c) 2011 - 2012 Frank Kohlhepp
## https://github.com/frankkohlhepp/fancy-settings
## License: MIT-license
###
window.FancySettings = class FancySettings
  constructor: (@name) ->
    @tabs = {}
    @settings = {}
    
    $("title").set "text", @name
    $("name").set "text", @name
    
    $("search-tab").set "text", i18n.get "Search"
    $("search-tab-name").set "text", i18n.get "Search Results"
    $("search").set "placeholder", i18n.get("Search") + "..."
    $("nothing-found").set "text", i18n.get "No matches were found."
    
    @tab = new Tab $("tab-container"), $("content")
    @search = new Search $("search")
  
  getTab: (name) =>
    return @tabs[name] if @tabs[name]?
    
    # Create new tab
    tab = @tab.new()
    tab.groups = {}
    
    tab.tab.set "text", name
    @search.bind tab.tab
    
    tab.content.name = (new Element "h2",
      class: "tab-name"
      text: name
    ).inject tab.content
    
    tab.content.settings = (new Element "div",
      class: "tab-settings"
    ).inject tab.content
    
    @tabs[name] = tab
  
  getGroup: (name, tab) =>
    return tab.groups[name] if tab.groups[name]?
    
    # Create new group
    group = (new Element "div",
      class: "setting group"
    ).inject tab.content.settings
    
    group.name = (new Element "div",
      class: "setting group-name"
      text: name
    ).inject group
    
    group.content = (new Element "div",
      class: "setting group-content"
    ).inject group
    
    group.setting = new Setting group.content
    tab.groups[name] = group
  
  check: (param, value) =>
    success = typeOf(value) is "string" and !!value
    throw """Error: "#{param}" is a required parameter. Check your manifest!""" unless success
    this
  
  new: (params) =>
    # Check required basic values
    @check "tab", params.tab
    @check "group", params.group
    @check "name", params.name
    @check "type", params.type
    
    if @settings[params.name]?
      throw """Error: A setting with name "#{params.name}" already exists."""
    
    tab = @getTab params.tab
    group = @getGroup params.group, tab
    
    # Create and index the setting
    setting = group.setting.new params
    setting.tab = tab
    setting.group = group
    
    @settings[params.name] = setting
    @search.index setting
    setting
  
  align: (settings) =>
    settings = settings.map (name) =>
      @settings[name]
    
    maxOffset = 0
    types = [
      "text"
      "number"
      "pushButton"
      "slider"
      "popupButton"
    ]
    
    document.html.addClass "measuring"
    settings.each (setting) =>
      unless types.contains setting.params.type
        throw """Error: Type "#{setting.params.type}" can't be aligned."""
      
      if setting.params.type is "pushButton" or "slider" or "popupButton"
        offset = setting.label.offsetWidth + 3
      else
        offset = setting.label.offsetWidth
      
      if offset > maxOffset
        maxOffset = offset
    
    settings.each (setting) =>
      offset = setting.label.offsetWidth
      if offset < maxOffset
        setting.element.setStyle "margin-left", (maxOffset - offset) + "px"
    document.html.removeClass "measuring"

FancySettings.initWithManifest = (callback) ->
  fancySettings = new FancySettings manifest.name
  
  manifest.settings.each (params) =>
    fancySettings.new params
  
  if manifest.alignment?
    manifest.alignment.each (group) =>
      fancySettings.align group
  
  callback fancySettings if callback?
  this
