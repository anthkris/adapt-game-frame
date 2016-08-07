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
            this.$('.responsiveIframe-iframe').ready(function() {
                that.setReadyStatus();
            });
        },

        once: function(fired) {
          if (!fired) {
            this.$('.responsiveIframe-iframe').attr('src', this.model.get('_source'));
          } else {
            return;
          }
        },

        gameComplete: function(e) {
          console.log("The game is complete");
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

    Adapt.register("gameIframe", GameIframe);

});
