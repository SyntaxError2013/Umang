// SAMPLE
window.manifest = {
  "name": "My Extension",
  "settings": [
    {
      "tab": "Tab 1",
      "group": "Group 1",
      "name": "myUsername",
      "type": "text",
      "label": i18n.get("Enter username:"),
      "placeholder": "e.g. \"frank.kohlhepp\"",
      "masked": false,
      "default": ""
    },
    {
      "tab": "Tab 1",
      "group": "Group 1",
      "name": "myPassword",
      "type": "text",
      "label": i18n.get("Enter password:"),
      "placeholder": "e.g. \"dn4l§8D§L&Hb%l/3jhf\"",
      "masked": true,
      "default": ""
    },
    {
      "tab": "Tab 1",
      "group": "Group 1",
      "name": "myNumber",
      "type": "number",
      "label": "Enter number:",
      "min": 0,
      "max": 100,
      "step": 5,
      "default": 0
    },
    {
      "tab": "Tab 1",
      "group": "Group 1",
      "name": "myTextarea",
      "type": "textarea",
      "label": "Enter some text:",
      "placeholder": "e.g. a story about your last holiday",
      "default": ""
    },
    {
      "tab": "Tab 1",
      "group": "Group 2",
      "name": "myPushButton",
      "type": "pushButton",
      "label": "Press this button:",
      "value": "Login"
    },
    {
      "tab": "Tab 1",
      "group": "Group 2",
      "name": "myLabel",
      "type": "label",
      "label": "This is some descriptive text and may span over multiple lines.\
                There is no maximum length, you can write whatever you want.\
                Lines will automatically break.<br>\
                Or you can break them manually."
    },
    {
      "tab": "Tab 1",
      "group": "Group 2",
      "name": "myCheckbox",
      "type": "checkbox",
      "label": "Enable some Feature",
      "default": false
    },
    {
      "tab": "Tab 2",
      "group": "Group 1",
      "name": "mySlider",
      "type": "slider",
      "label": "Volume:",
      "min": 0,
      "max": 100,
      "step": 1,
      "display": true,
      "displayModifier": function (value) {
        return value + "%";
      },
      "default": 50
    },
    {
      "tab": "Tab 2",
      "group": "Group 2",
      "name": "myPopupButton",
      "type": "popupButton",
      "label": "Choose something:",
      "options": [
        ["opt1", "Option 1"],
        ["opt2", "Option 2"],
        ["Option 3"],
        ["opt4", "Option 4", "Group 1"],
        ["Option 5", null, "Group 1"],
        ["opt6", "Option 6", "Group 2"],
        ["Option 7", null, "Group 2"],
      ],
      "default": "opt2"
    },
    {
      "tab": "Tab 2",
      "group": "Group 2",
      "name": "myRadioGroup",
      "type": "radioGroup",
      "label": "Choose another thing:",
      "options": [
        ["opt1", "Option 1"],
        ["opt2", "Option 2"],
        ["Option 3"],
        ["opt4", "Option 4", "Group 1"],
        ["Option 5", null, "Group 1"],
        ["opt6", "Option 6", "Group 2"],
        ["Option 7", null, "Group 2"],
      ],
      "default": "opt2"
    },
    
    // TESTS
    
    // text
    {
      "tab": "Tests",
      "group": "Alignment tests",
      "name": "testText1",
      "type": "text",
      "label": "Something:",
      "default": ""
    },
    {
      "tab": "Tests",
      "group": "Alignment tests",
      "name": "testText2",
      "type": "text",
      "label": "Something else:",
      "default": ""
    },
    
    // number
    {
      "tab": "Tests",
      "group": "Alignment tests",
      "name": "testNumber1",
      "type": "number",
      "label": "Something:",
      "min": 0,
      "max": 100,
      "step": 5,
      "default": 0
    },
    {
      "tab": "Tests",
      "group": "Alignment tests",
      "name": "testNumber2",
      "type": "number",
      "label": "Something else:",
      "min": 0,
      "max": 100,
      "step": 5,
      "default": 0
    },
    
    // pushButton
    {
      "tab": "Tests",
      "group": "Alignment tests",
      "name": "testPushButton1",
      "type": "pushButton",
      "label": "Something:",
      "value": "Do it!"
    },
    {
      "tab": "Tests",
      "group": "Alignment tests",
      "name": "testPushButton2",
      "type": "pushButton",
      "label": "Something else:",
      "value": "Do it!"
    },
    
    // slider
    {
      "tab": "Tests",
      "group": "Alignment tests",
      "name": "testSlider1",
      "type": "slider",
      "label": "Something:",
      "min": 0,
      "max": 100,
      "step": 1,
      "display": true,
      "displayModifier": function (value) {
        return value + "%";
      },
      "default": 50
    },
    {
      "tab": "Tests",
      "group": "Alignment tests",
      "name": "testSlider2",
      "type": "slider",
      "label": "Something else:",
      "min": 0,
      "max": 100,
      "step": 1,
      "display": true,
      "displayModifier": function (value) {
        return value + "%";
      },
      "default": 50
    },
    
    // popupButton
    {
      "tab": "Tests",
      "group": "Alignment tests",
      "name": "testPopupButton1",
      "type": "popupButton",
      "label": "Something:",
      "options": [
        ["opt1", "Option 1"],
        ["opt2", "Option 2"],
        ["Option 3"],
        ["opt4", "Option 4", "Group 1"],
        ["Option 5", null, "Group 1"],
        ["opt6", "Option 6", "Group 2"],
        ["Option 7", null, "Group 2"],
      ],
      "default": "opt2"
    },
    {
      "tab": "Tests",
      "group": "Alignment tests",
      "name": "testPopupButton2",
      "type": "popupButton",
      "label": "Something else:",
      "options": [
        ["opt1", "Option 1"],
        ["opt2", "Option 2"],
        ["Option 3"],
        ["opt4", "Option 4", "Group 1"],
        ["Option 5", null, "Group 1"],
        ["opt6", "Option 6", "Group 2"],
        ["Option 7", null, "Group 2"],
      ],
      "default": "opt2"
    }
  ],
  "alignment": [
    [
      "myUsername",
      "myPassword",
      "myNumber"
    ],
    [
      "testText1",
      "testText2",
      "testNumber1",
      "testNumber2",
      "testPushButton1",
      "testPushButton2",
      "testSlider1",
      "testSlider2",
      "testPopupButton1",
      "testPopupButton2"
    ]
  ]
};
