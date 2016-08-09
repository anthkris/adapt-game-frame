/*
* adapt-game-frame
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Kristin Anthony (kristin@knanthony.com)
*/
define(function(require) {

    var ComponentView = require("coreViews/componentView");
    var Adapt = require("coreJS/adapt");
    var fired = false;


    var GameIframe = ComponentView.extend({
        events: {
            'inview':'inview'
        },

        preRender: function() {
        },

        postRender: function() {
            var that = this;
            /*this.$('.gameIframe-iframe').ready(function() {
                that.setReadyStatus();
            });*/
            this.$('.gameIframe-object').ready(function() {
                that.setReadyStatus();
            });
        },
        /* This function only allows the data or src of the game frame to be set once */
        once: function(fired) {
          if (!fired) {
            /* Options included to allow for using either the iframe or the object tag */
            this.$('.gameIframe-object').attr('data', this.model.get('_source'));
            // this.$('.gameIframe-iframe').attr('src', this.model.get('_source'));
          } else {
            return;
          }
        },

        gameComplete: function(e) {
          if (e.origin === this.model.get('_originURL')) {
            this.setCompletionStatus();
          }
        },

        inview: function(event, visible) {
            if (visible) {
              this.once(fired);
              fired = true;
              window.addEventListener('message', this.gameComplete.bind(this), false);
            }
        }

    });

    Adapt.register("game-frame", GameIframe);

});
