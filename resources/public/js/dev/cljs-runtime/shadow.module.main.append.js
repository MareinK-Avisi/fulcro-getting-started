
shadow.cljs.devtools.client.env.module_loaded('main');

try { app.client.init(); } catch (e) { console.error("An error occurred when calling (app.client/init)"); throw(e); }