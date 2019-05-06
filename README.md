

# FE FWs

Default Theme is Spectre. Two version are made, one with NavBar js (in navjBar folder, used in webSite and linkCMS examples), and one with OffScreen js (simple and default, use in 4 examples, both are 3rd party Open Source libraries.

Also made is gridform and navbar.

But there are many FE FWs, you'll end up learning a few. Even then, most intricate things, like navigation, ends up custom. You should know how to solve a problem, such as nav, in at least FE FW.

http://github.com/thednp/navbar.js

http://github.com/vmitsaras/js-offcanvas


## Leveraging FW:

Architecture that that best leverages CSS framework Spectre
Leverage mixin and extends
Leverage MCSS or even .single-class
- http://css-tricks.com/methods-organize-css
But avoid wide Atomic, AMCSS,  SMACSS
In any case reduce wide

The foundation is framework|Spectre
A module should be a screen/page; or component/riot; extending Spectre|FW

All environment-influencing things like margins should not be a part of your css-component classes so it's easier to reuse them later on.

## Recomended workflow:
1. Get an understanding of what UI-components you'll mainly use. Forms, buttons, menus, etc. 
2. Get an understanding of what layout you'd like your project to have. 
3. Build a basic CSS-components library with just pure FW so you'll be seeing your future elements. 
4. Come up with your main colors fonts and other constant things throughout the app. Put them in variables.scss file and make sure they are corresponding to variables of your CSS library. If during step 5 you find yourself changing some base colors/sizes check if you could accomplish this with variables.
5. Before going to step 6 try to meet your goals by extending mixins of your library.
6. Write your own CSS for pages you need it onto. If you find yourself duplicating code for some UI-components probably you should have unified class for it in a separate file.

### SASS project structure:
```
assets
|
|_____sass
      |
      |
      |_____style.sass
      |
      |_____variables.sass // custom fw variables
      |
      |_____button.sass // extending fw button
      |
      |_____... // some other fw extends
      |
      |_____custom_code
            |
            |_____custom_layout.sass
            |
            |_____button.sass // custom button
            |
            |_____pages
                  |
                  |_____home_page.sass
                  |
                  |_____login_page.sass
```
