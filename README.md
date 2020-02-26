
## FE FWs

Default Theme is mini css. Two examples are made, one with NavBar js (in navjBar folder, used in webSite and linkCMS examples), and one with OffScreen js.

Default for forms is gridforms.

But there are many FE FWs, you'll end up learning a few. Even then, most intricate things, like navigation, ends up custom. You should know how to solve a problem, such as nav.

You should know CSS basics, like when/how to use absolute in a relative.

# Leveraging FW Goals:

Minimal custom CSS. It is tiring to write your own CSS.

- SASS is code/programming
- Minimal DIY
- Minimal code that does not extend FW
- In the page, list BLOCKs
Clear 'sections' indicating the page that is is for. eg:

//page one
.pl_one{}
.bl_blockOne{}
.c_password{}

//page two
.pl_two{}
.bl_blockTwo{}
.c_logo{}

- Maintainable by others
- Blocks could/should be reusable, extend
- Narrow. Use fewer classes. Leverage SASS to create the formula. Program in SASS. Separate style out of markup. Minimize typing in DOM
- If not IE11 leverage, else you  have to check in ie11 (Browserstack) calc() 
- SASS for our code, scss for 3rd party code.
- Average developer, so non Designers can read it.
- All environment-influencing things like margins should not be a part of your css-component classes so it's easier to reuse them later on. Layout should be in BLOCK(BEM) layout
- Page layout can leverage FW grid or ignore it.  2 layouts: page layout and block layout.(bl and pl)
- Favor padding over margins.
- anything starts with .js-name not for styling, but for using in javascript
- Put styles for pages into file pages.sass
- To style the page: .pl-name (page layout)
- to style block/component: .bl-name
- to style element within the block: .bl-name__elementName
- to extend block styling: .bl-name--redColor
- Location Independence: Not to style things based on where they are , but based on what they are!
- Selector Performance: how quickly a browser can match the selectors your write in CSS up with the nodes it finds in the DOM. The longer a selector is (i.e. the more component parts) the slower it is:
	body.home div.header ul { } -- …is a far less efficient selector than:.primary-nav { }

## IMPORTANT: NO FONT FACE # IN TOP CSS

topCss is layout to prevent jumping.

fullCss is loaded last, after fonts.

By not having font name before font is loaded it prevents FOUT.

## IMPORTANT: Images:
- Image for the page is stored in that folder.
- CSS for the image, eg: background is stored in that page or markup. (to avoid bit-rot)
- Else in assets if needed 2X. 
- Components should be designed to be external on CDN - and (CSS) FW agnostic: A FW should not style inside the component. Use YIELD if needed.
- Same with loader.js or such. Page specific is in the page folder. More than one or site wise is assets.
- For SVG use object - http://svgtutorial.com/adding-svg-to-your-template-code

## Effects and animation:
Avoid @keyframes or animation in CSS/SASS. Instead use GSAP or other .js libs


## Recommended workflow:
0. Mock up with CSS from CDN
1. Create a style page with local css of basic controls(button)
2. Check cross browsers support.
2. Make 2 SASS files, top in head is for layout of Blocks - no jumping. Check by not loading bottom.
3. Bottom is for controls(buttons), fonts, etc. 
4. Check https://gtmetrix.com waterfall for loading size. Check locally with browser's devtool's network set to slow.

# IE 11
If IE11, test w/ Browserstack.

## Architecture that that best leverages a Front End (CSS) Framework:

Leverage extends and mixins.
Leverage MCSS or even .single-class
- http://css-tricks.com/methods-organize-css
But avoid wide Atomic, AMCSS, SMACSS



