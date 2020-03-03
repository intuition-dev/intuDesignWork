
var fsm = new StateMachine({
   init: 'loaded',
   transitions: [
      { name: 'load',  from: 'animate', to: 'loaded' },
      { name: 'clone', from: 'loaded',  to: 'cloned' },
      { name: 'split', from: 'cloned',  to: 'animate' },
      { name: 'fade',  from: 'loaded',  to: 'animate' },
   ],
   methods: {
      onBeforeClone: function () { //clone the dom
         cloneDom($('#router'))
      },
      onBeforeSplit: function () {
         splitAnimation($('#routerFx')) //play split animation
      },
      onFade: function (lifecycle, arg1) {
         fadeAnimation(arg1)
      },
   }
})


//what is the states? page loaded, copied
//need to copy dom to routefx, and then animate it
if (window.location.href.indexOf('landing') > -1) {
   fsm.clone()
}
console.log(fsm.state, '--init state')
SPArouter.init(onNavigate);

function onNavigate(evt) {
   if (evt.detail.type == SPArouter.NavSTART) { //start


      //later TODO
      // var toLink = evt.detail.type
      // $('.navbar').find('a').each(function(){
      //    var $this = $(this);
      //    console.log('this', $this.attr('href'), toLink)
      //    //- if the current path is like this link, make it active
      //    $this.removeClass('active')
      //    if(typeof $this.attr('href') !='undefined' && $this.attr('href').indexOf(toLink) !== -1){
      //       $this.addClass('active');
      //    }
      // })


      if (evt.detail.fromHref.indexOf('landing') > -1) {
         // fsm.split() //do nothing here
      }
   } else if (evt.detail.type == SPArouter.NavDONE) {
      if (evt.detail.fromHref.indexOf('landing') > -1) {

         console.log(fsm.state, 'loading from split page router')
         $('#router').html(evt.detail.newContent)
         fsm.split() //run animation only after new page loaded
      } else if (evt.detail.toHref.indexOf('landing') > -1) {
         console.log(fsm.state, 'else if 2 navigating to landing')
         $('#router').html(evt.detail.newContent)
         if (fsm.is('animate')) {
            fsm.load()
         }
         fsm.clone()
      } else {

         console.log(fsm.state, 'else  inner page', evt)
         var newContent = $(evt.detail.newContent).filter('.l-wrapper')
         $('#router').find('.l-wrapper').html(newContent.html())
         fsm.fade()
      }
      // window.scrollTo(0, 0)
   }
}

//====================================================================

function cloneDom($cont_) {

   // compute endpoints math to split screen
   let haf = $(window).width() / 2
   let he = $(window).height() + 'px ' //
   let lft = '-' + $(window).height() + 'px '
   haf = haf + 'px'

   // /* top, right, bottom, left , set clip path, the visible area*/
   let fr = 'inset(0px ' + haf + ' 0px 0px)'
   let cr = 'inset(0px 0px 0px ' + haf + ')'

   //clone, wrap and re-attach

   let $firstSl = $cont_.clone(true)
   $firstSl.find().remove('script')//script no work w/ split

   //cloned
   let $cloneSl = $firstSl.clone(true)
   $('#routerFx').append($firstSl)
   $firstSl.wrapAll('<div id="firstSl" class="firstSl"/>')

   // point to clone and wrap
   $('#routerFx').append($cloneSl)
   $cloneSl.wrapAll('<div id="cloneSl" class="cloneSl"/>')

   // =============================================================
   //css clip computed

   TweenLite.set('#firstSl', { clipPath: fr, x: 0, y: 0, z: 0, zIndex: 8, minHeight: he, width: '100vw', '-webkit-clip-path': fr });
   $('#firstSl').addClass('will-change')
   $('#firstSl *').addClass('will-change')


   TweenLite.set('#cloneSl', { clipPath: cr, x: 0, y: -$(window).height(), z: 0, zIndex: 9, minHeight: he, width: '100vw', '-webkit-clip-path': cr });
   $('#cloneSl').addClass('will-change')
   $('#cloneSl *').addClass('will-change')

   $('#routerFx').addClass('d-none');

}//()

function splitAnimation($contFx) {
   $contFx.removeClass('d-none');

   TweenLite.to($contFx.find("#firstSl"), 1, {
      y: $(window).height(),
      // delay: .5,
      force3D: true,
      ease: Power0.easeNone,
      z: 0.1, // use if jitter or shaking is really bad
      rotationZ: 0.01, // use if jitter or shaking is really bad
   })
   TweenLite.to($contFx.find("#cloneSl"), 1, {
      y: -$(window).height() * 2,
      ease: Power0.easeNone,
      // delay: .5,
      force3D: true,
      z: 0.1, // use if jitter or shaking is really bad
      rotationZ: 0.01, // use if jitter or shaking is really bad
      onComplete: function () {
         $contFx.empty()
         fsm.load()
         mobileMenu() //init top navigation when coming from landing page
      }
   })
   var a1 = TweenLite.getTweensOf($contFx.find("#firstSl")); //finds 2 tweens
}

function fadeAnimation() {
   TweenLite.fromTo($('.l-wrapper'), 1, { opacity: 0 },
      {
         opacity: 1,
         ease: Power0.easeNone,
         // delay: .5,
         onComplete: function () {
            fsm.load() //restart the cycle
         }
      })
   // fsm.load() 
   console.log('---restart the cycle:', fsm.state)


}