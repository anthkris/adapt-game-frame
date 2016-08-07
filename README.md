# adapt-game-frame

**Game Frame** is a *presentation component* for the [Adapt framework](https://github.com/adaptlearning/adapt_framework).  

<img src="https://github.com/anthkris/adapt-game-frame/raw/master/about/iframe-screenshot.png" alt="sample game iframe component" align="center">

**Game Frame** is based on the [Responsive Iframe](https://github.com/adaptlearning/adapt-contrib-responsiveIframe) plugin and is built to allow you to embed responsive HTML5 games from tools like PhaserJS into your course and block the course from continuing until the game is complete.

[Visit the **Game Frame** wiki](https://github.com/adaptlearning/adapt-game-frame/wiki) for more information about its functionality and for explanations of key properties.

##Installation

With the [Adapt CLI](https://github.com/adaptlearning/adapt-cli) installed, run the following from the command line:  
`adapt install adapt-game-frame`

    Alternatively, this component can also be installed by adding the following line of code to the *adapt.json* file:  
    `"adapt-game-frame": "*"`  
    Then running the command:  
    `adapt install`  
    (This second method will reinstall all plug-ins listed in *adapt.json*.)  

## Settings Overview

The attributes listed below are used in *components.json* to configure **Game Frame**, and are properly formatted as JSON in [*example.json*](https://github.com/anthkris/adapt-game-frame/example.json).

### Attributes

[**core model attributes**](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes): These are inherited by every Adapt component. [Read more](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes).

**_component** (string): This value must be: `game-frame`.

**_classes** (string): CSS class name to be applied to **Game Frame**’s containing `div`. The class must be predefined in one of the Less files. Separate multiple classes with a space.

**_layout** (string): This defines the horizontal position of the component in the block. Acceptable values are `full`.  

**instruction** (string): This optional text appears above the component. It is frequently used to
guide the learner’s interaction with the component.  

**_source** (string): The source of the game's index.html (e.g. course/en/game/index.html)

**_loadingImg** (string): The source of an image that can show to prevent an empty black square when the user hasn't clicked on the game.

**_originURL** (string): This is the URL of the **adapt course**. This allows the game to pass a message to the course using the postMessage API, e.g. http://localhost:9001

## Limitations

No known limitations.  

----------------------------
**Version number:**  1.0.0 
**Framework versions:** 2.0  
**Author / maintainer:** Kristin Anthony  
**Accessibility support:** Unknown  
**RTL support:** no  
**Cross-platform coverage:** Chrome
