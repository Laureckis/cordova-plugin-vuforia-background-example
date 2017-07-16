var vapp = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('vuforiaready', this.onVuforiaReady.bind(this), false);
        document.addEventListener('vuforiamarker', function(event){
            alert('Marker detected: '+event.detail.result.name);
        });
    },

    // vuforiaready Event Handler
    onVuforiaReady: function() {
        this.receivedEvent();
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

vapp.initialize();