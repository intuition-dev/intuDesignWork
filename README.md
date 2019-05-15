
## FE FWs

Default Theme is Spectre. Two examples are made, one with NavBar js (in navjBar folder, used in webSite and linkCMS examples), and one with OffScreen js.

Default for forms is gridforms.

But there are many FE FWs, you'll end up learning a few. Even then, most intricate things, like navigation, ends up custom. You should know how to solve a problem, such as nav.

You should know CSS basics, like when/how to use absolute in a relative.

# Leveraging FW Goals:

It is tiring to write your own CSS.

- Minimal DIY
- Minimal code that does not extend FW
- In the page, list BLOCKs
Clear 'sections' indicating the page that is is for. eg:

//page one
.blockOne{}
//page two
.blockTwo{}

- Blocks could/should be reusable, extend
- Narrow. Use fewer classes. Leverage SASS to create the formula. Program in SASS. Separate style out of markup. Minimize typing in DOM
- If not IE11 leverage calc() 
- SASS for our code, scss for 3rd party code.

## IMPORTANT: Images:
- Image for the page is stored in that folder.
- CSS for the image, eg: background is stored in that page or markup. (to avoid bit-rot)
- Else in assets if needed 2X. 
- Components should be designed to be external on CDN - and (CSS) FW agnostic: A FW should not style inside the component. Use YIELD if needed.


## Recommended workflow:
0. Mock up with CSS from CDN
1. Create a style page with local css of basic controls(button)
2. Make 2 SASS files, top in head is for layout of Blocks - no jumping
3. Bottom is for controls(buttons), fonts, etc.


## Architecture that that best leverages a Front End (CSS) Framework:

Leverage extends and mixins.
Leverage MCSS or even .single-class
- http://css-tricks.com/methods-organize-css
But avoid wide Atomic, AMCSS, SMACSS


?? All environment-influencing things like margins should not be a part of your css-component classes so it's easier to reuse them later on.

