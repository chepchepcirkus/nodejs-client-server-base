var CHEPK = (function($){
	try{
		// Check if jQuery is available
		// TODO
		
		// Init
		if(window.CHEPK === undefined) {
			window.CHEPK = {};
		}
		var CHEPK = window.CHEPK;
		CHEPK.url = '';

		/**
		 * Check template variabkle is loaded
		 */
		if(CHEPK.template === undefined) {
			throw('CHEPK.template is not loaded');
		}

		/**
		 * Connector object
		 * 
		 * use to deal with bdd
		 */
		CHEPK.Client = {
            request : function(query, data) {
                var options = {
                    url : 'http://nodejs-client-server-base.local/hello' + query,
                    contentType : 'application/json; charset=utf-8',
                    success: function (data) {
                        this.renderResponse(data);
                    }.bind(this),
                    error : function () {
                        this.renderResponse({error:'request server failed'});
                    }.bind(this)
                };
                if(data != undefined) {
                    options['method'] = 'post';
                    options['data'] = data;
                    options['dataType'] = 'json';
                }

                $.ajax(options).done(function (data) {
                	console.log(data);
				});
            },

            buildQuery : function(action, params) {
				this.request(action, params);
            },

			renderResponse : function(data) {
				//var data = JSON.parse(data);
				var html = {};

				if(typeof data === 'object') {
					if(data['test'] != undefined) {
                        $("#result").html(CHEPK.template.data.list(data['test']));
					}
					if(data['error'] != undefined) {
						$("#messages").html(CHEPK.template.messages.error(data['error']));
					}
					if(data['success'] != undefined) {
						$("#messages").html(CHEPK.template.messages.success(data['success']));
					}
					if(data['data'] != undefined) {
						$("#result").html(CHEPK.template.data.list(data['data']));
					}
				} else {
					html = 'an error occured';
					$("#messages").html(html);
				}
			}
		};
		return CHEPK;
		
	} catch(exception) {
		// Display error
		document.getElementById('messages').innerHTML = '<div class="error"> ERROR : ' + exception + '</div>';
	}
})(jQuery.noConflict())
