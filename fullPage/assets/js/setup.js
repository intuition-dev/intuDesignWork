
$(document).ready(function () {
   // are we running in native app or in a browser?
   window.isphone = false
   if (document.URL.indexOf("http://") === -1
      && document.URL.indexOf("https://") === -1) {
      window.isphone = true
   }

   console.log('phonegap?', window.isphone)
   if (window.isphone) { // //file is a browser
      document.addEventListener("deviceready", onDeviceReady, false)
   } else {
      onDeviceReady()
   }
})

loadjs([
    //'https://cdn.jsdelivr.net/npm/signals@1.0.0/dist/signals.min.js'
   //'//cdn.jsdelivr.net/npm/intersection-observer@0.5.0/intersection-observer.js'
     'https://unpkg.com/vivid-icons@1.0.3/dist/vivid-icons.min.js'
   , 'https://unpkg.com/js-offcanvas/dist/_js/js-offcanvas.pkgd.min.js'
   , 'https://unpkg.com/js-offcanvas/dist/_css/prefixed/js-offcanvas.css'
   , ROOT + '/assets/css/gridforms/gridforms.css'
   , ROOT + '/assets/js/lorem.js'
], 'cssJs')

function onDeviceReady() { // nothing will work before this
   console.log('deviceready!')
   loadjs.done('device')
}

function cssLoaded() {// called by the style sheet in layout
   loadjs.done('css')
}

loadjs.ready(['css', 'device', 'cssJs', 'fullPage'], function () {
   loadjs.done('style')
})

// usage: ////////////////////////////////////////////////////////////////////
loadjs.ready(['style'], function () {// 'show' page, ex: unhide

   $('#off-canvas').offcanvas({
      triggerButton: '#off-cbut' // btn to open offcanvas
   })
   let offcanvas = $('#off-canvas').data('offcanvas-component')
   $('#offItems').click(function () {
      console.log('#offItems')
      offcanvas.close()
   })
   $('.delayShowing').removeClass('delayShowing') // show

   console.log('style done', Date.now() - _start)
})//ready

//load full page:
loadjs([
   '//cdn.jsdelivr.net/npm/fullpage.js@2.9.7/dist/jquery.fullpage.css',
   '//cdn.jsdelivr.net/npm/fullpage.js@2.9.7/vendors/scrolloverflow.min.js',
   '//cdn.jsdelivr.net/npm/fullpage.js@2.9.7/dist/jquery.fullpage.js'
], 'fullPage')

loadjs.ready(['device', 'fullPage'], function () {
   console.log('onFullPage')
   $('#fullPage').fullpage({
      scrollOverflow: true,
      bxigSectionsDestination: top,
      pxaddingTop: '1.25em',
      verticalCentered: false,

      css3: false,
      loopBottom: true,
      lazyLoading: true
   })
})//()
