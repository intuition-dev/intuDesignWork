depp.require([], function() {
    console.log('ready:', Date.now() - _start)
    depp.require(['DOM'], function() {

        depp.done('commentoPre')

        depp.require('lazysizes')

    })
})

// 7 fonts
loadFonts(['Open+Sans:300,300i,400,400i', 'PT+Serif:400,400i,700i'])