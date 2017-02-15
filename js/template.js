/**
 * Templating
 *
 * @type {{messages: {info: CHEPK.template.messages.info, warning: CHEPK.template.messages.warning, error: CHEPK.template.messages.error, success: CHEPK.template.messages.success}, data: {list: CHEPK.template.data.list}}}
 */
// Init
if(window.CHEPK === undefined) {
    window.CHEPK = {};
}
var CHEPK = window.CHEPK;
CHEPK.template = {
    messages : {
        info : function(message) {
            return '<li class="info">' + message + '</li>';
        },
        warning : function(message) {
            return '<li class="warning">' + message + '</li>';
        },
        error : function(message) {
            return '<li class="error">' + message + '</li>';
        },
        success : function(message) {
            return '<li class="success">' + message + '</li>';
        }
    },
    data : {
        list : function(data) {

            html = '<p class="count">' + data.length + '</p>';
            html += '<ul>';
            for(var i in data) {
                html += '<li id="tasks-' + i + '">' +
                    '<p>' + data[i].timestamp + '</p>' +
                    '<p>' + data[i].type + '</p>';
                if(data[i].error != undefined) {
                    html += '<p>' + data[i].error + '</p>';
                }
                if(data[i].trace != undefined) {
                    html += '<p>' + data[i].trace + '</p>';
                }
                html += '</li>';
            }
            html += '</ul>';
            return html;
        }
    }
};