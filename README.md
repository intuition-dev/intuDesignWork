

# FE FWs

Default Theme is Spectre. Two version are made, one with NavBar js (in navjBar folder, used in webSite and linkCMS examples), and one with OffScreen js (simple and default, use in 4 examples, both are 3rd party Open Source libraries.

Also made is gridform and navbar.

But there are many FE FWs, you'll end up learning a few. Even then, most intricate things, like navigation, ends up custom. You should know how to solve a problem, such as nav, in at least FE FW.

http://github.com/thednp/navbar.js

http://github.com/vmitsaras/js-offcanvas

(
   http://github.com/SubZane/flyPanels
)


## Leveraging FW:

Architecture that that best leverages CSS framework Spectre
Leverage mixin and extends
Leverage MCSS or even .single-class
- http://css-tricks.com/methods-organize-css
But avoid wide Atomic, AMCSS,  SMACSS
In any case reduce wide

The foundation is framework|Spectre
A module should be a screen/page; or component/riot; extending Spectre|FW
Call the file: _pages.scss and _comps.scss

Important: we are not writing a FW. We are tarying to leverage a FW.
