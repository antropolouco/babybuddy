if("undefined"==typeof jQuery)throw new Error("Baby Buddy requires jQuery.");var BabyBuddy={};function preventDoubleSubmit(){return!1}BabyBuddy.PullToRefresh=function(e){return{init:function(){e.init({mainElement:"body",onRefresh:this.onRefresh})},onRefresh:function(){window.location.reload()}}}(PullToRefresh),$("form").off("submit",preventDoubleSubmit),$("form").on("submit",function(){$(this).on("submit",preventDoubleSubmit)}),BabyBuddy.Timer=function(e){var n=null,t=null,i=null,d=new Date,r=null,o={run:function(d,u){return t=d,0===(i=e("#"+u)).length?(console.error("BBTimer: Timer element not found."),!1):0===i.find(".timer-seconds").length||0===i.find(".timer-minutes").length||0===i.find(".timer-hours").length?(console.error("BBTimer: Element does not contain expected children."),!1):(n=setInterval(this.tick,1e3),void 0!==document.hidden?r="hidden":void 0!==document.msHidden?r="msHidden":void 0!==document.webkitHidden&&(r="webkitHidden"),void window.addEventListener("focus",o.handleVisibilityChange,!1))},handleVisibilityChange:function(){!document[r]&&new Date-d>1&&o.update()},tick:function(){var e=i.find(".timer-seconds"),n=Number(e.text());if(n<59)e.text(n+1);else{e.text(0);var t=i.find(".timer-minutes"),d=Number(t.text());if(d<59)t.text(d+1);else{t.text(0);var r=i.find(".timer-hours"),o=Number(r.text());r.text(o+1)}}},update:function(){e.get("/api/timers/"+t+"/",function(e){if(e&&"duration"in e){clearInterval(n);var t=e.duration.split(/[\s:.]/);5===t.length&&(t[0]=24*parseInt(t[0])+parseInt(t[1]),t[1]=t[2],t[2]=t[3]),i.find(".timer-hours").text(parseInt(t[0])),i.find(".timer-minutes").text(parseInt(t[1])),i.find(".timer-seconds").text(parseInt(t[2])),d=new Date,n=setInterval(o.tick,1e3)}})}};return o}(jQuery),BabyBuddy.Dashboard=function(e){var n=null,t={watch:function(i,d){if(0==e("#"+i).length)return console.error("Baby Buddy: Dashboard element not found."),!1;void 0!==document.hidden?n="hidden":void 0!==document.msHidden?n="msHidden":void 0!==document.webkitHidden&&(n="webkitHidden"),void 0===window.addEventListener||void 0===document.hidden?d&&setInterval(this.update,d):(window.addEventListener("focus",t.handleVisibilityChange,!1),d&&setInterval(t.handleVisibilityChange,d))},handleVisibilityChange:function(){document[n]||t.update()},update:function(){location.reload()}};return t}(jQuery);