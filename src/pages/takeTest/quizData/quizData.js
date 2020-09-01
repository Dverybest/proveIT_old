var quiz = {
    html: [
        {
            question: 'Which html tag is used to display a table?',
            option: ['<table>', '<tbody>', '<td>', '<thead>'],
            answer: '<table>'
        },
        {
            question: 'one of these is not a form element type in html5',
            option: ['email', 'number', 'date', 'web'],
            answer: 'web'
        },
        {
            question: 'Which statement is false about the <!Doctype html> declaration',
            option: ['Its used to instruct the browser about the type of html', 'Its a html tag', 'Its used to declare the document type',
                'All of the above'],
            answer: ''
        },
        {
            question: 'Which one is not a list element in html?',
            option: ['ul', 'em', 'ol', 'dl'],
            answer: 'em'
        },
        {
            question: 'Which of these tags is not used to for html semantics',
            option: ['<header>', '<footer>', '<strong>', '<aside>'],
            answer: '<strong>'
        },
        {
            question: 'One amongst these browsers does not support HTML5',
            option: ['chrome', 'safari', 'firefox', 'internet explorer'],
            answer: 'internet explorer'
        },
        {
            question: 'What is the correct HTML element for inserting a line break?            ' ,
            option: ['<br>', '<break>', '<lb>', '</lb>'],
            answer: '<br>'

        },
        {
            question: 'Which character is used to indicate an end tag? ',
            option: ['<', '/', '`', '</>'],
            answer: '</>'
        },
        {
            question: 'one of these is not a html entity characters',
            option: ['$', '&nbsp', '&lt', '&gt'],
            answer: '$'
        },
        {
            question: 'Which of these is not a html5 Api',
            option: ['geolocation api', 'local storage', 'cookie storage','drag and drop'],
            answer: 'cookie storage'
        }

    ],

    javascript: [
        {
            question: 'One of these is not a data type in javascript',
            option: ['null', 'undefined', 'object', 'int'],
            answer: 'int'
        },
        {
            question: 'Which of these is an array method in javascript',
            option: ['unshift()', 'toUpper()', 'NaN()', 'sum()'],
            answer: 'unshift()'
        },
        {
            question: 'One of these is not used to declare data types in javascript',
            option: ['var', 'const', 'def', 'let'],
            answer: 'def'

        },

        {
            question: 'Which of these is not a js method for accessing html element',
            option: ['getElementById', 'querySelector', 'getElementsByClassname', 'getElementByTag'],
            answer: 'getElementByTag'
        },
        {
            question: 'What value is returned when the item in indexOf() is not found',
            option: ['0', '1' , 'true', '-1'],
            answer: '-1'
        },
        {
            question: 'One of these is not used to declare data a type in javascript',
            option: ['var', 'const', 'def', 'let'],
            answer: 'def'
        },
        {
            question: 'Which one is true about == and === operator',
            option: ['=== operators compares only value while == compares the type', 'They both return a boolean value', '== checks only type while === checks both type and value',
                '=== checks type and value while == checks value'],
            answer: 'def'

        },
        {
            question: 'What would the output of this code function() {var a = b = "3"; console.log((typeof a)); console.log((typeof b)) }',
            option: ['string undefined', 'string string', 'undefined number', 'string undefined' ],
            answer: ''
        },
        {
            question: 'What would be the output of this code console.log(0.1 + 0.2 == 0.3)',
            option: ['true', 'false', 'not declared', 'null'],
            answer: 'false'

        },
        {
            question: 'What would be the output of this code console.log(false == 0);console.log(false === 0)',
            option: ['true  false', 'true true', 'false true', 'undefined null'],
            answer: 'true false'

        }
        
        
        


    ],
    css: [
        {
            question: 'one of these is not a way to link css to a file',
            option: ['inline', 'external', 'internal', 'outer'],
            answer: 'outer'
        },
        {
            question: 'Where in an HTML document is the correct place to link a an external style sheet?',
            option: ['body', 'head', 'after the body', 'end of the document'],
            answer: 'head'
        },
        {
            question: 'Which of the css linking method has the heightest precedence',
            option: ['inline css', 'external css', 'internal css', 'embeded css'],
            answer: 'inline css'

        },
        {
            question: 'What is the css !important rule used for?',
            option: ['Shows that a class is visible', 'shows that the id should be visible', 'shows that the property overides everyother part in the page',
             'none of the abover', ''],
            answer: 'shows that the property overides everyother part in the page'

        },
        {
            question: 'Which one is not a css selector',
            option: ['tag selector', 'type selector', 'id selector', 'class selector' ],
            answer: 'tag selector'

        },
        {
            question: 'Which one is not color value type',
            option: ['hsl', 'rgba()', 'html hue', '#000'],
            answer: 'html hue'

        },
        {
            question: 'Which is a way to create rounded corners in css',
            option: ['border style', 'background-redius', 'border-radius', 'border'],
            answer: 'border-radius'
        },
        {   question: 'Which is not a css flex-box properties',
            option: ['justify-content', 'flex-flow', 'flow-role', 'align-content'],
            answer: 'flex-role'
        },
        {
            question: 'tag selector',
            option: ['{body: color=blue}', 'body{color: blue}', '{body;color: blue;}', 'body:color=black;'],
            answer: ''
        },
        {
            question: 'How do you insert a single line comment in a CSS file?',
            option: ['// this is a comment', '//this is a commit //', '/* this is a comment */', '*this is a comment*' ]
        }
    ]

}

export {quiz};