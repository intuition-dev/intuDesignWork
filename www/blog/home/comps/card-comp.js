
riot.tag2('card-comp', '<div class="cards-container"> <div class="columns"> <virtual each="{item, index in this.items}"> <div class="column col-4 col-md-6 col- col-sm-12"> <div class="card"> <div class="card-image"><a href="{item.url}"><img class="img-responsive" riot-src="{item.image}{item.postImg}"></a></div> <div class="card-header"> <div class="card-title h5">{item.title}</div> </div> <div class="card-body four-line-text" style="-webkit-box-orient: vertical">{item.content_text}</div> <div class="card-footer"> <button class="btn btn-primary">{item.tags}</button> </div> </div> </div> </virtual> </div> </div>', '', '', function(opts) {
    console.info('oh hi tag');
    this.on('*', function(evt) {
            console.info('riot', evt);
    });
    this.items = [];
    thiz = this;

    this.render = function(data) {
        if(!data ) {
            thiz.items = [];
            thiz.update();
            return;
        }

        let cloned = JSON.parse(JSON.stringify(data));
        thiz.items = cloned;

        let sz = thiz.items.length;
        for(i = 0; i < sz; i++) {
            var item = thiz.items[i];

            item.image = ROOT + 'posts/' + item.url + '/';
            item.url = '/posts/' + item.url;
            item.tags = item.tags;
        }
        thiz.update();
    }.bind(this)
});