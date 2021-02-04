goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_61386 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_61386(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_61389 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_61389(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__60096 = coll;
var G__60097 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__60096,G__60097) : shadow.dom.lazy_native_coll_seq.call(null,G__60096,G__60097));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4120__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__60197 = arguments.length;
switch (G__60197) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__60210 = arguments.length;
switch (G__60210) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__60216 = arguments.length;
switch (G__60216) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__60225 = arguments.length;
switch (G__60225) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__60246 = arguments.length;
switch (G__60246) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__60270 = arguments.length;
switch (G__60270) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4120__auto__ = (!((typeof document !== 'undefined')));
if(or__4120__auto__){
return or__4120__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e60285){if((e60285 instanceof Object)){
var e = e60285;
return console.log("didnt support attachEvent",el,e);
} else {
throw e60285;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4120__auto__ = (!((typeof document !== 'undefined')));
if(or__4120__auto__){
return or__4120__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__60292 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__60293 = null;
var count__60294 = (0);
var i__60295 = (0);
while(true){
if((i__60295 < count__60294)){
var el = chunk__60293.cljs$core$IIndexed$_nth$arity$2(null,i__60295);
var handler_61441__$1 = ((function (seq__60292,chunk__60293,count__60294,i__60295,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__60292,chunk__60293,count__60294,i__60295,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_61441__$1);


var G__61443 = seq__60292;
var G__61444 = chunk__60293;
var G__61445 = count__60294;
var G__61446 = (i__60295 + (1));
seq__60292 = G__61443;
chunk__60293 = G__61444;
count__60294 = G__61445;
i__60295 = G__61446;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60292);
if(temp__5735__auto__){
var seq__60292__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60292__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__60292__$1);
var G__61447 = cljs.core.chunk_rest(seq__60292__$1);
var G__61448 = c__4550__auto__;
var G__61449 = cljs.core.count(c__4550__auto__);
var G__61450 = (0);
seq__60292 = G__61447;
chunk__60293 = G__61448;
count__60294 = G__61449;
i__60295 = G__61450;
continue;
} else {
var el = cljs.core.first(seq__60292__$1);
var handler_61455__$1 = ((function (seq__60292,chunk__60293,count__60294,i__60295,el,seq__60292__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__60292,chunk__60293,count__60294,i__60295,el,seq__60292__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_61455__$1);


var G__61458 = cljs.core.next(seq__60292__$1);
var G__61459 = null;
var G__61460 = (0);
var G__61461 = (0);
seq__60292 = G__61458;
chunk__60293 = G__61459;
count__60294 = G__61460;
i__60295 = G__61461;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__60329 = arguments.length;
switch (G__60329) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__60337 = cljs.core.seq(events);
var chunk__60338 = null;
var count__60339 = (0);
var i__60340 = (0);
while(true){
if((i__60340 < count__60339)){
var vec__60352 = chunk__60338.cljs$core$IIndexed$_nth$arity$2(null,i__60340);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60352,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60352,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__61472 = seq__60337;
var G__61473 = chunk__60338;
var G__61474 = count__60339;
var G__61475 = (i__60340 + (1));
seq__60337 = G__61472;
chunk__60338 = G__61473;
count__60339 = G__61474;
i__60340 = G__61475;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60337);
if(temp__5735__auto__){
var seq__60337__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60337__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__60337__$1);
var G__61478 = cljs.core.chunk_rest(seq__60337__$1);
var G__61479 = c__4550__auto__;
var G__61480 = cljs.core.count(c__4550__auto__);
var G__61481 = (0);
seq__60337 = G__61478;
chunk__60338 = G__61479;
count__60339 = G__61480;
i__60340 = G__61481;
continue;
} else {
var vec__60363 = cljs.core.first(seq__60337__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60363,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60363,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__61488 = cljs.core.next(seq__60337__$1);
var G__61489 = null;
var G__61490 = (0);
var G__61491 = (0);
seq__60337 = G__61488;
chunk__60338 = G__61489;
count__60339 = G__61490;
i__60340 = G__61491;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__60370 = cljs.core.seq(styles);
var chunk__60371 = null;
var count__60372 = (0);
var i__60373 = (0);
while(true){
if((i__60373 < count__60372)){
var vec__60384 = chunk__60371.cljs$core$IIndexed$_nth$arity$2(null,i__60373);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60384,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60384,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__61494 = seq__60370;
var G__61495 = chunk__60371;
var G__61496 = count__60372;
var G__61497 = (i__60373 + (1));
seq__60370 = G__61494;
chunk__60371 = G__61495;
count__60372 = G__61496;
i__60373 = G__61497;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60370);
if(temp__5735__auto__){
var seq__60370__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60370__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__60370__$1);
var G__61499 = cljs.core.chunk_rest(seq__60370__$1);
var G__61500 = c__4550__auto__;
var G__61501 = cljs.core.count(c__4550__auto__);
var G__61502 = (0);
seq__60370 = G__61499;
chunk__60371 = G__61500;
count__60372 = G__61501;
i__60373 = G__61502;
continue;
} else {
var vec__60388 = cljs.core.first(seq__60370__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60388,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60388,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__61505 = cljs.core.next(seq__60370__$1);
var G__61506 = null;
var G__61507 = (0);
var G__61508 = (0);
seq__60370 = G__61505;
chunk__60371 = G__61506;
count__60372 = G__61507;
i__60373 = G__61508;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__60396_61512 = key;
var G__60396_61513__$1 = (((G__60396_61512 instanceof cljs.core.Keyword))?G__60396_61512.fqn:null);
switch (G__60396_61513__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_61522 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4120__auto__ = goog.string.startsWith(ks_61522,"data-");
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return goog.string.startsWith(ks_61522,"aria-");
}
})())){
el.setAttribute(ks_61522,value);
} else {
(el[ks_61522] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__60415){
var map__60416 = p__60415;
var map__60416__$1 = (((((!((map__60416 == null))))?(((((map__60416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60416):map__60416);
var props = map__60416__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60416__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__60424 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60424,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60424,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60424,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__60427 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__60427,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__60427;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__60433 = arguments.length;
switch (G__60433) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__60445){
var vec__60447 = p__60445;
var seq__60448 = cljs.core.seq(vec__60447);
var first__60449 = cljs.core.first(seq__60448);
var seq__60448__$1 = cljs.core.next(seq__60448);
var nn = first__60449;
var first__60449__$1 = cljs.core.first(seq__60448__$1);
var seq__60448__$2 = cljs.core.next(seq__60448__$1);
var np = first__60449__$1;
var nc = seq__60448__$2;
var node = vec__60447;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60459 = nn;
var G__60460 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__60459,G__60460) : create_fn.call(null,G__60459,G__60460));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60462 = nn;
var G__60463 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__60462,G__60463) : create_fn.call(null,G__60462,G__60463));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__60465 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60465,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60465,(1),null);
var seq__60469_61558 = cljs.core.seq(node_children);
var chunk__60470_61559 = null;
var count__60471_61560 = (0);
var i__60472_61561 = (0);
while(true){
if((i__60472_61561 < count__60471_61560)){
var child_struct_61562 = chunk__60470_61559.cljs$core$IIndexed$_nth$arity$2(null,i__60472_61561);
var children_61563 = shadow.dom.dom_node(child_struct_61562);
if(cljs.core.seq_QMARK_(children_61563)){
var seq__60505_61564 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_61563));
var chunk__60507_61565 = null;
var count__60508_61566 = (0);
var i__60509_61567 = (0);
while(true){
if((i__60509_61567 < count__60508_61566)){
var child_61570 = chunk__60507_61565.cljs$core$IIndexed$_nth$arity$2(null,i__60509_61567);
if(cljs.core.truth_(child_61570)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61570);


var G__61571 = seq__60505_61564;
var G__61572 = chunk__60507_61565;
var G__61573 = count__60508_61566;
var G__61574 = (i__60509_61567 + (1));
seq__60505_61564 = G__61571;
chunk__60507_61565 = G__61572;
count__60508_61566 = G__61573;
i__60509_61567 = G__61574;
continue;
} else {
var G__61576 = seq__60505_61564;
var G__61577 = chunk__60507_61565;
var G__61578 = count__60508_61566;
var G__61579 = (i__60509_61567 + (1));
seq__60505_61564 = G__61576;
chunk__60507_61565 = G__61577;
count__60508_61566 = G__61578;
i__60509_61567 = G__61579;
continue;
}
} else {
var temp__5735__auto___61581 = cljs.core.seq(seq__60505_61564);
if(temp__5735__auto___61581){
var seq__60505_61583__$1 = temp__5735__auto___61581;
if(cljs.core.chunked_seq_QMARK_(seq__60505_61583__$1)){
var c__4550__auto___61584 = cljs.core.chunk_first(seq__60505_61583__$1);
var G__61585 = cljs.core.chunk_rest(seq__60505_61583__$1);
var G__61586 = c__4550__auto___61584;
var G__61587 = cljs.core.count(c__4550__auto___61584);
var G__61588 = (0);
seq__60505_61564 = G__61585;
chunk__60507_61565 = G__61586;
count__60508_61566 = G__61587;
i__60509_61567 = G__61588;
continue;
} else {
var child_61591 = cljs.core.first(seq__60505_61583__$1);
if(cljs.core.truth_(child_61591)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61591);


var G__61593 = cljs.core.next(seq__60505_61583__$1);
var G__61594 = null;
var G__61595 = (0);
var G__61596 = (0);
seq__60505_61564 = G__61593;
chunk__60507_61565 = G__61594;
count__60508_61566 = G__61595;
i__60509_61567 = G__61596;
continue;
} else {
var G__61597 = cljs.core.next(seq__60505_61583__$1);
var G__61598 = null;
var G__61599 = (0);
var G__61600 = (0);
seq__60505_61564 = G__61597;
chunk__60507_61565 = G__61598;
count__60508_61566 = G__61599;
i__60509_61567 = G__61600;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_61563);
}


var G__61602 = seq__60469_61558;
var G__61603 = chunk__60470_61559;
var G__61604 = count__60471_61560;
var G__61605 = (i__60472_61561 + (1));
seq__60469_61558 = G__61602;
chunk__60470_61559 = G__61603;
count__60471_61560 = G__61604;
i__60472_61561 = G__61605;
continue;
} else {
var temp__5735__auto___61608 = cljs.core.seq(seq__60469_61558);
if(temp__5735__auto___61608){
var seq__60469_61609__$1 = temp__5735__auto___61608;
if(cljs.core.chunked_seq_QMARK_(seq__60469_61609__$1)){
var c__4550__auto___61610 = cljs.core.chunk_first(seq__60469_61609__$1);
var G__61611 = cljs.core.chunk_rest(seq__60469_61609__$1);
var G__61612 = c__4550__auto___61610;
var G__61613 = cljs.core.count(c__4550__auto___61610);
var G__61614 = (0);
seq__60469_61558 = G__61611;
chunk__60470_61559 = G__61612;
count__60471_61560 = G__61613;
i__60472_61561 = G__61614;
continue;
} else {
var child_struct_61615 = cljs.core.first(seq__60469_61609__$1);
var children_61616 = shadow.dom.dom_node(child_struct_61615);
if(cljs.core.seq_QMARK_(children_61616)){
var seq__60520_61617 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_61616));
var chunk__60522_61618 = null;
var count__60523_61619 = (0);
var i__60524_61620 = (0);
while(true){
if((i__60524_61620 < count__60523_61619)){
var child_61621 = chunk__60522_61618.cljs$core$IIndexed$_nth$arity$2(null,i__60524_61620);
if(cljs.core.truth_(child_61621)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61621);


var G__61625 = seq__60520_61617;
var G__61626 = chunk__60522_61618;
var G__61627 = count__60523_61619;
var G__61628 = (i__60524_61620 + (1));
seq__60520_61617 = G__61625;
chunk__60522_61618 = G__61626;
count__60523_61619 = G__61627;
i__60524_61620 = G__61628;
continue;
} else {
var G__61630 = seq__60520_61617;
var G__61631 = chunk__60522_61618;
var G__61632 = count__60523_61619;
var G__61633 = (i__60524_61620 + (1));
seq__60520_61617 = G__61630;
chunk__60522_61618 = G__61631;
count__60523_61619 = G__61632;
i__60524_61620 = G__61633;
continue;
}
} else {
var temp__5735__auto___61635__$1 = cljs.core.seq(seq__60520_61617);
if(temp__5735__auto___61635__$1){
var seq__60520_61636__$1 = temp__5735__auto___61635__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60520_61636__$1)){
var c__4550__auto___61638 = cljs.core.chunk_first(seq__60520_61636__$1);
var G__61639 = cljs.core.chunk_rest(seq__60520_61636__$1);
var G__61640 = c__4550__auto___61638;
var G__61641 = cljs.core.count(c__4550__auto___61638);
var G__61642 = (0);
seq__60520_61617 = G__61639;
chunk__60522_61618 = G__61640;
count__60523_61619 = G__61641;
i__60524_61620 = G__61642;
continue;
} else {
var child_61643 = cljs.core.first(seq__60520_61636__$1);
if(cljs.core.truth_(child_61643)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61643);


var G__61644 = cljs.core.next(seq__60520_61636__$1);
var G__61645 = null;
var G__61646 = (0);
var G__61647 = (0);
seq__60520_61617 = G__61644;
chunk__60522_61618 = G__61645;
count__60523_61619 = G__61646;
i__60524_61620 = G__61647;
continue;
} else {
var G__61648 = cljs.core.next(seq__60520_61636__$1);
var G__61649 = null;
var G__61650 = (0);
var G__61651 = (0);
seq__60520_61617 = G__61648;
chunk__60522_61618 = G__61649;
count__60523_61619 = G__61650;
i__60524_61620 = G__61651;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_61616);
}


var G__61655 = cljs.core.next(seq__60469_61609__$1);
var G__61656 = null;
var G__61657 = (0);
var G__61658 = (0);
seq__60469_61558 = G__61655;
chunk__60470_61559 = G__61656;
count__60471_61560 = G__61657;
i__60472_61561 = G__61658;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__60558 = cljs.core.seq(node);
var chunk__60559 = null;
var count__60560 = (0);
var i__60561 = (0);
while(true){
if((i__60561 < count__60560)){
var n = chunk__60559.cljs$core$IIndexed$_nth$arity$2(null,i__60561);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__61659 = seq__60558;
var G__61660 = chunk__60559;
var G__61661 = count__60560;
var G__61662 = (i__60561 + (1));
seq__60558 = G__61659;
chunk__60559 = G__61660;
count__60560 = G__61661;
i__60561 = G__61662;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60558);
if(temp__5735__auto__){
var seq__60558__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60558__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__60558__$1);
var G__61663 = cljs.core.chunk_rest(seq__60558__$1);
var G__61664 = c__4550__auto__;
var G__61665 = cljs.core.count(c__4550__auto__);
var G__61666 = (0);
seq__60558 = G__61663;
chunk__60559 = G__61664;
count__60560 = G__61665;
i__60561 = G__61666;
continue;
} else {
var n = cljs.core.first(seq__60558__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__61667 = cljs.core.next(seq__60558__$1);
var G__61668 = null;
var G__61669 = (0);
var G__61670 = (0);
seq__60558 = G__61667;
chunk__60559 = G__61668;
count__60560 = G__61669;
i__60561 = G__61670;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__60584 = arguments.length;
switch (G__60584) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__60598 = arguments.length;
switch (G__60598) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__60616 = arguments.length;
switch (G__60616) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4120__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61700 = arguments.length;
var i__4731__auto___61702 = (0);
while(true){
if((i__4731__auto___61702 < len__4730__auto___61700)){
args__4736__auto__.push((arguments[i__4731__auto___61702]));

var G__61703 = (i__4731__auto___61702 + (1));
i__4731__auto___61702 = G__61703;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__60652_61707 = cljs.core.seq(nodes);
var chunk__60653_61708 = null;
var count__60654_61709 = (0);
var i__60655_61710 = (0);
while(true){
if((i__60655_61710 < count__60654_61709)){
var node_61713 = chunk__60653_61708.cljs$core$IIndexed$_nth$arity$2(null,i__60655_61710);
fragment.appendChild(shadow.dom._to_dom(node_61713));


var G__61715 = seq__60652_61707;
var G__61716 = chunk__60653_61708;
var G__61717 = count__60654_61709;
var G__61718 = (i__60655_61710 + (1));
seq__60652_61707 = G__61715;
chunk__60653_61708 = G__61716;
count__60654_61709 = G__61717;
i__60655_61710 = G__61718;
continue;
} else {
var temp__5735__auto___61720 = cljs.core.seq(seq__60652_61707);
if(temp__5735__auto___61720){
var seq__60652_61721__$1 = temp__5735__auto___61720;
if(cljs.core.chunked_seq_QMARK_(seq__60652_61721__$1)){
var c__4550__auto___61722 = cljs.core.chunk_first(seq__60652_61721__$1);
var G__61723 = cljs.core.chunk_rest(seq__60652_61721__$1);
var G__61724 = c__4550__auto___61722;
var G__61725 = cljs.core.count(c__4550__auto___61722);
var G__61726 = (0);
seq__60652_61707 = G__61723;
chunk__60653_61708 = G__61724;
count__60654_61709 = G__61725;
i__60655_61710 = G__61726;
continue;
} else {
var node_61727 = cljs.core.first(seq__60652_61721__$1);
fragment.appendChild(shadow.dom._to_dom(node_61727));


var G__61728 = cljs.core.next(seq__60652_61721__$1);
var G__61729 = null;
var G__61730 = (0);
var G__61731 = (0);
seq__60652_61707 = G__61728;
chunk__60653_61708 = G__61729;
count__60654_61709 = G__61730;
i__60655_61710 = G__61731;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq60642){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60642));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__60681_61734 = cljs.core.seq(scripts);
var chunk__60682_61735 = null;
var count__60683_61736 = (0);
var i__60684_61737 = (0);
while(true){
if((i__60684_61737 < count__60683_61736)){
var vec__60699_61738 = chunk__60682_61735.cljs$core$IIndexed$_nth$arity$2(null,i__60684_61737);
var script_tag_61739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60699_61738,(0),null);
var script_body_61740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60699_61738,(1),null);
eval(script_body_61740);


var G__61741 = seq__60681_61734;
var G__61742 = chunk__60682_61735;
var G__61743 = count__60683_61736;
var G__61744 = (i__60684_61737 + (1));
seq__60681_61734 = G__61741;
chunk__60682_61735 = G__61742;
count__60683_61736 = G__61743;
i__60684_61737 = G__61744;
continue;
} else {
var temp__5735__auto___61746 = cljs.core.seq(seq__60681_61734);
if(temp__5735__auto___61746){
var seq__60681_61752__$1 = temp__5735__auto___61746;
if(cljs.core.chunked_seq_QMARK_(seq__60681_61752__$1)){
var c__4550__auto___61753 = cljs.core.chunk_first(seq__60681_61752__$1);
var G__61754 = cljs.core.chunk_rest(seq__60681_61752__$1);
var G__61755 = c__4550__auto___61753;
var G__61756 = cljs.core.count(c__4550__auto___61753);
var G__61757 = (0);
seq__60681_61734 = G__61754;
chunk__60682_61735 = G__61755;
count__60683_61736 = G__61756;
i__60684_61737 = G__61757;
continue;
} else {
var vec__60711_61758 = cljs.core.first(seq__60681_61752__$1);
var script_tag_61759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60711_61758,(0),null);
var script_body_61760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60711_61758,(1),null);
eval(script_body_61760);


var G__61761 = cljs.core.next(seq__60681_61752__$1);
var G__61762 = null;
var G__61763 = (0);
var G__61764 = (0);
seq__60681_61734 = G__61761;
chunk__60682_61735 = G__61762;
count__60683_61736 = G__61763;
i__60684_61737 = G__61764;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__60720){
var vec__60721 = p__60720;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60721,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60721,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__60732 = arguments.length;
switch (G__60732) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__60756 = cljs.core.seq(style_keys);
var chunk__60758 = null;
var count__60759 = (0);
var i__60760 = (0);
while(true){
if((i__60760 < count__60759)){
var it = chunk__60758.cljs$core$IIndexed$_nth$arity$2(null,i__60760);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__61784 = seq__60756;
var G__61785 = chunk__60758;
var G__61786 = count__60759;
var G__61787 = (i__60760 + (1));
seq__60756 = G__61784;
chunk__60758 = G__61785;
count__60759 = G__61786;
i__60760 = G__61787;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60756);
if(temp__5735__auto__){
var seq__60756__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60756__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__60756__$1);
var G__61790 = cljs.core.chunk_rest(seq__60756__$1);
var G__61791 = c__4550__auto__;
var G__61792 = cljs.core.count(c__4550__auto__);
var G__61793 = (0);
seq__60756 = G__61790;
chunk__60758 = G__61791;
count__60759 = G__61792;
i__60760 = G__61793;
continue;
} else {
var it = cljs.core.first(seq__60756__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__61796 = cljs.core.next(seq__60756__$1);
var G__61797 = null;
var G__61798 = (0);
var G__61799 = (0);
seq__60756 = G__61796;
chunk__60758 = G__61797;
count__60759 = G__61798;
i__60760 = G__61799;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4374__auto__,k__4375__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
return this__4374__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4375__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4376__auto__,k60779,else__4377__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var G__60798 = k60779;
var G__60798__$1 = (((G__60798 instanceof cljs.core.Keyword))?G__60798.fqn:null);
switch (G__60798__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60779,else__4377__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4393__auto__,f__4394__auto__,init__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4396__auto__,p__60804){
var vec__60805 = p__60804;
var k__4397__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60805,(0),null);
var v__4398__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60805,(1),null);
return (f__4394__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4394__auto__.cljs$core$IFn$_invoke$arity$3(ret__4396__auto__,k__4397__auto__,v__4398__auto__) : f__4394__auto__.call(null,ret__4396__auto__,k__4397__auto__,v__4398__auto__));
}),init__4395__auto__,this__4393__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4388__auto__,writer__4389__auto__,opts__4390__auto__){
var self__ = this;
var this__4388__auto____$1 = this;
var pr_pair__4391__auto__ = (function (keyval__4392__auto__){
return cljs.core.pr_sequential_writer(writer__4389__auto__,cljs.core.pr_writer,""," ","",opts__4390__auto__,keyval__4392__auto__);
});
return cljs.core.pr_sequential_writer(writer__4389__auto__,pr_pair__4391__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4390__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60778){
var self__ = this;
var G__60778__$1 = this;
return (new cljs.core.RecordIter((0),G__60778__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4372__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4369__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var h__4232__auto__ = self__.__hash;
if((!((h__4232__auto__ == null)))){
return h__4232__auto__;
} else {
var h__4232__auto____$1 = (function (coll__4371__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4371__auto__));
})(this__4370__auto____$1);
(self__.__hash = h__4232__auto____$1);

return h__4232__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60780,other60781){
var self__ = this;
var this60780__$1 = this;
return (((!((other60781 == null)))) && ((this60780__$1.constructor === other60781.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60780__$1.x,other60781.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60780__$1.y,other60781.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60780__$1.__extmap,other60781.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4383__auto__,k__4384__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4384__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4383__auto____$1),self__.__meta),k__4384__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4384__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4381__auto__,k__4382__auto__,G__60778){
var self__ = this;
var this__4381__auto____$1 = this;
var pred__60846 = cljs.core.keyword_identical_QMARK_;
var expr__60847 = k__4382__auto__;
if(cljs.core.truth_((pred__60846.cljs$core$IFn$_invoke$arity$2 ? pred__60846.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__60847) : pred__60846.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__60847)))){
return (new shadow.dom.Coordinate(G__60778,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60846.cljs$core$IFn$_invoke$arity$2 ? pred__60846.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__60847) : pred__60846.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__60847)))){
return (new shadow.dom.Coordinate(self__.x,G__60778,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4382__auto__,G__60778),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4386__auto__){
var self__ = this;
var this__4386__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4373__auto__,G__60778){
var self__ = this;
var this__4373__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__60778,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4379__auto__,entry__4380__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4380__auto__)){
return this__4379__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4380__auto__,(0)),cljs.core._nth(entry__4380__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4379__auto____$1,entry__4380__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4417__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4417__auto__,writer__4418__auto__){
return cljs.core._write(writer__4418__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__60785){
var extmap__4413__auto__ = (function (){var G__60875 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60785,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__60785)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60875);
} else {
return G__60875;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__60785),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__60785),null,cljs.core.not_empty(extmap__4413__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4374__auto__,k__4375__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
return this__4374__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4375__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4376__auto__,k60885,else__4377__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var G__60899 = k60885;
var G__60899__$1 = (((G__60899 instanceof cljs.core.Keyword))?G__60899.fqn:null);
switch (G__60899__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60885,else__4377__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4393__auto__,f__4394__auto__,init__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4396__auto__,p__60901){
var vec__60902 = p__60901;
var k__4397__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60902,(0),null);
var v__4398__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60902,(1),null);
return (f__4394__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4394__auto__.cljs$core$IFn$_invoke$arity$3(ret__4396__auto__,k__4397__auto__,v__4398__auto__) : f__4394__auto__.call(null,ret__4396__auto__,k__4397__auto__,v__4398__auto__));
}),init__4395__auto__,this__4393__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4388__auto__,writer__4389__auto__,opts__4390__auto__){
var self__ = this;
var this__4388__auto____$1 = this;
var pr_pair__4391__auto__ = (function (keyval__4392__auto__){
return cljs.core.pr_sequential_writer(writer__4389__auto__,cljs.core.pr_writer,""," ","",opts__4390__auto__,keyval__4392__auto__);
});
return cljs.core.pr_sequential_writer(writer__4389__auto__,pr_pair__4391__auto__,"#shadow.dom.Size{",", ","}",opts__4390__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60884){
var self__ = this;
var G__60884__$1 = this;
return (new cljs.core.RecordIter((0),G__60884__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4372__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4369__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var h__4232__auto__ = self__.__hash;
if((!((h__4232__auto__ == null)))){
return h__4232__auto__;
} else {
var h__4232__auto____$1 = (function (coll__4371__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4371__auto__));
})(this__4370__auto____$1);
(self__.__hash = h__4232__auto____$1);

return h__4232__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60886,other60887){
var self__ = this;
var this60886__$1 = this;
return (((!((other60887 == null)))) && ((this60886__$1.constructor === other60887.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60886__$1.w,other60887.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60886__$1.h,other60887.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60886__$1.__extmap,other60887.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4383__auto__,k__4384__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4384__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4383__auto____$1),self__.__meta),k__4384__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4384__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4381__auto__,k__4382__auto__,G__60884){
var self__ = this;
var this__4381__auto____$1 = this;
var pred__60960 = cljs.core.keyword_identical_QMARK_;
var expr__60961 = k__4382__auto__;
if(cljs.core.truth_((pred__60960.cljs$core$IFn$_invoke$arity$2 ? pred__60960.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__60961) : pred__60960.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__60961)))){
return (new shadow.dom.Size(G__60884,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60960.cljs$core$IFn$_invoke$arity$2 ? pred__60960.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__60961) : pred__60960.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__60961)))){
return (new shadow.dom.Size(self__.w,G__60884,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4382__auto__,G__60884),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4386__auto__){
var self__ = this;
var this__4386__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4373__auto__,G__60884){
var self__ = this;
var this__4373__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__60884,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4379__auto__,entry__4380__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4380__auto__)){
return this__4379__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4380__auto__,(0)),cljs.core._nth(entry__4380__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4379__auto____$1,entry__4380__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4417__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4417__auto__,writer__4418__auto__){
return cljs.core._write(writer__4418__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__60894){
var extmap__4413__auto__ = (function (){var G__60991 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60894,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__60894)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60991);
} else {
return G__60991;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__60894),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__60894),null,cljs.core.not_empty(extmap__4413__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__61925 = (i + (1));
var G__61926 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__61925;
ret = G__61926;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61054){
var vec__61055 = p__61054;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61055,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61055,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__61074 = arguments.length;
switch (G__61074) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__61941 = ps;
var G__61942 = (i + (1));
el__$1 = G__61941;
i = G__61942;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__61141 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61141,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61141,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61141,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__61146_61955 = cljs.core.seq(props);
var chunk__61147_61956 = null;
var count__61148_61957 = (0);
var i__61149_61958 = (0);
while(true){
if((i__61149_61958 < count__61148_61957)){
var vec__61168_61960 = chunk__61147_61956.cljs$core$IIndexed$_nth$arity$2(null,i__61149_61958);
var k_61961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61168_61960,(0),null);
var v_61962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61168_61960,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_61961);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_61961),v_61962);


var G__61976 = seq__61146_61955;
var G__61977 = chunk__61147_61956;
var G__61978 = count__61148_61957;
var G__61979 = (i__61149_61958 + (1));
seq__61146_61955 = G__61976;
chunk__61147_61956 = G__61977;
count__61148_61957 = G__61978;
i__61149_61958 = G__61979;
continue;
} else {
var temp__5735__auto___61981 = cljs.core.seq(seq__61146_61955);
if(temp__5735__auto___61981){
var seq__61146_61982__$1 = temp__5735__auto___61981;
if(cljs.core.chunked_seq_QMARK_(seq__61146_61982__$1)){
var c__4550__auto___61983 = cljs.core.chunk_first(seq__61146_61982__$1);
var G__61986 = cljs.core.chunk_rest(seq__61146_61982__$1);
var G__61987 = c__4550__auto___61983;
var G__61988 = cljs.core.count(c__4550__auto___61983);
var G__61989 = (0);
seq__61146_61955 = G__61986;
chunk__61147_61956 = G__61987;
count__61148_61957 = G__61988;
i__61149_61958 = G__61989;
continue;
} else {
var vec__61176_61994 = cljs.core.first(seq__61146_61982__$1);
var k_61995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61176_61994,(0),null);
var v_61996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61176_61994,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_61995);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_61995),v_61996);


var G__61997 = cljs.core.next(seq__61146_61982__$1);
var G__61998 = null;
var G__61999 = (0);
var G__62000 = (0);
seq__61146_61955 = G__61997;
chunk__61147_61956 = G__61998;
count__61148_61957 = G__61999;
i__61149_61958 = G__62000;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__61192 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61192,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61192,(1),null);
var seq__61195_62010 = cljs.core.seq(node_children);
var chunk__61197_62011 = null;
var count__61199_62012 = (0);
var i__61200_62013 = (0);
while(true){
if((i__61200_62013 < count__61199_62012)){
var child_struct_62015 = chunk__61197_62011.cljs$core$IIndexed$_nth$arity$2(null,i__61200_62013);
if((!((child_struct_62015 == null)))){
if(typeof child_struct_62015 === 'string'){
var text_62019 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_62019),child_struct_62015].join(''));
} else {
var children_62021 = shadow.dom.svg_node(child_struct_62015);
if(cljs.core.seq_QMARK_(children_62021)){
var seq__61249_62022 = cljs.core.seq(children_62021);
var chunk__61251_62023 = null;
var count__61252_62024 = (0);
var i__61253_62025 = (0);
while(true){
if((i__61253_62025 < count__61252_62024)){
var child_62031 = chunk__61251_62023.cljs$core$IIndexed$_nth$arity$2(null,i__61253_62025);
if(cljs.core.truth_(child_62031)){
node.appendChild(child_62031);


var G__62036 = seq__61249_62022;
var G__62037 = chunk__61251_62023;
var G__62038 = count__61252_62024;
var G__62039 = (i__61253_62025 + (1));
seq__61249_62022 = G__62036;
chunk__61251_62023 = G__62037;
count__61252_62024 = G__62038;
i__61253_62025 = G__62039;
continue;
} else {
var G__62041 = seq__61249_62022;
var G__62042 = chunk__61251_62023;
var G__62043 = count__61252_62024;
var G__62044 = (i__61253_62025 + (1));
seq__61249_62022 = G__62041;
chunk__61251_62023 = G__62042;
count__61252_62024 = G__62043;
i__61253_62025 = G__62044;
continue;
}
} else {
var temp__5735__auto___62045 = cljs.core.seq(seq__61249_62022);
if(temp__5735__auto___62045){
var seq__61249_62046__$1 = temp__5735__auto___62045;
if(cljs.core.chunked_seq_QMARK_(seq__61249_62046__$1)){
var c__4550__auto___62047 = cljs.core.chunk_first(seq__61249_62046__$1);
var G__62048 = cljs.core.chunk_rest(seq__61249_62046__$1);
var G__62049 = c__4550__auto___62047;
var G__62050 = cljs.core.count(c__4550__auto___62047);
var G__62051 = (0);
seq__61249_62022 = G__62048;
chunk__61251_62023 = G__62049;
count__61252_62024 = G__62050;
i__61253_62025 = G__62051;
continue;
} else {
var child_62052 = cljs.core.first(seq__61249_62046__$1);
if(cljs.core.truth_(child_62052)){
node.appendChild(child_62052);


var G__62058 = cljs.core.next(seq__61249_62046__$1);
var G__62059 = null;
var G__62060 = (0);
var G__62061 = (0);
seq__61249_62022 = G__62058;
chunk__61251_62023 = G__62059;
count__61252_62024 = G__62060;
i__61253_62025 = G__62061;
continue;
} else {
var G__62064 = cljs.core.next(seq__61249_62046__$1);
var G__62065 = null;
var G__62066 = (0);
var G__62067 = (0);
seq__61249_62022 = G__62064;
chunk__61251_62023 = G__62065;
count__61252_62024 = G__62066;
i__61253_62025 = G__62067;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_62021);
}
}


var G__62071 = seq__61195_62010;
var G__62072 = chunk__61197_62011;
var G__62073 = count__61199_62012;
var G__62074 = (i__61200_62013 + (1));
seq__61195_62010 = G__62071;
chunk__61197_62011 = G__62072;
count__61199_62012 = G__62073;
i__61200_62013 = G__62074;
continue;
} else {
var G__62082 = seq__61195_62010;
var G__62083 = chunk__61197_62011;
var G__62084 = count__61199_62012;
var G__62085 = (i__61200_62013 + (1));
seq__61195_62010 = G__62082;
chunk__61197_62011 = G__62083;
count__61199_62012 = G__62084;
i__61200_62013 = G__62085;
continue;
}
} else {
var temp__5735__auto___62087 = cljs.core.seq(seq__61195_62010);
if(temp__5735__auto___62087){
var seq__61195_62089__$1 = temp__5735__auto___62087;
if(cljs.core.chunked_seq_QMARK_(seq__61195_62089__$1)){
var c__4550__auto___62090 = cljs.core.chunk_first(seq__61195_62089__$1);
var G__62091 = cljs.core.chunk_rest(seq__61195_62089__$1);
var G__62092 = c__4550__auto___62090;
var G__62093 = cljs.core.count(c__4550__auto___62090);
var G__62094 = (0);
seq__61195_62010 = G__62091;
chunk__61197_62011 = G__62092;
count__61199_62012 = G__62093;
i__61200_62013 = G__62094;
continue;
} else {
var child_struct_62098 = cljs.core.first(seq__61195_62089__$1);
if((!((child_struct_62098 == null)))){
if(typeof child_struct_62098 === 'string'){
var text_62100 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_62100),child_struct_62098].join(''));
} else {
var children_62103 = shadow.dom.svg_node(child_struct_62098);
if(cljs.core.seq_QMARK_(children_62103)){
var seq__61276_62104 = cljs.core.seq(children_62103);
var chunk__61278_62105 = null;
var count__61279_62106 = (0);
var i__61280_62107 = (0);
while(true){
if((i__61280_62107 < count__61279_62106)){
var child_62113 = chunk__61278_62105.cljs$core$IIndexed$_nth$arity$2(null,i__61280_62107);
if(cljs.core.truth_(child_62113)){
node.appendChild(child_62113);


var G__62117 = seq__61276_62104;
var G__62118 = chunk__61278_62105;
var G__62119 = count__61279_62106;
var G__62120 = (i__61280_62107 + (1));
seq__61276_62104 = G__62117;
chunk__61278_62105 = G__62118;
count__61279_62106 = G__62119;
i__61280_62107 = G__62120;
continue;
} else {
var G__62122 = seq__61276_62104;
var G__62123 = chunk__61278_62105;
var G__62124 = count__61279_62106;
var G__62125 = (i__61280_62107 + (1));
seq__61276_62104 = G__62122;
chunk__61278_62105 = G__62123;
count__61279_62106 = G__62124;
i__61280_62107 = G__62125;
continue;
}
} else {
var temp__5735__auto___62127__$1 = cljs.core.seq(seq__61276_62104);
if(temp__5735__auto___62127__$1){
var seq__61276_62129__$1 = temp__5735__auto___62127__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61276_62129__$1)){
var c__4550__auto___62131 = cljs.core.chunk_first(seq__61276_62129__$1);
var G__62133 = cljs.core.chunk_rest(seq__61276_62129__$1);
var G__62134 = c__4550__auto___62131;
var G__62135 = cljs.core.count(c__4550__auto___62131);
var G__62136 = (0);
seq__61276_62104 = G__62133;
chunk__61278_62105 = G__62134;
count__61279_62106 = G__62135;
i__61280_62107 = G__62136;
continue;
} else {
var child_62138 = cljs.core.first(seq__61276_62129__$1);
if(cljs.core.truth_(child_62138)){
node.appendChild(child_62138);


var G__62141 = cljs.core.next(seq__61276_62129__$1);
var G__62142 = null;
var G__62143 = (0);
var G__62144 = (0);
seq__61276_62104 = G__62141;
chunk__61278_62105 = G__62142;
count__61279_62106 = G__62143;
i__61280_62107 = G__62144;
continue;
} else {
var G__62146 = cljs.core.next(seq__61276_62129__$1);
var G__62147 = null;
var G__62148 = (0);
var G__62149 = (0);
seq__61276_62104 = G__62146;
chunk__61278_62105 = G__62147;
count__61279_62106 = G__62148;
i__61280_62107 = G__62149;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_62103);
}
}


var G__62150 = cljs.core.next(seq__61195_62089__$1);
var G__62151 = null;
var G__62152 = (0);
var G__62153 = (0);
seq__61195_62010 = G__62150;
chunk__61197_62011 = G__62151;
count__61199_62012 = G__62152;
i__61200_62013 = G__62153;
continue;
} else {
var G__62156 = cljs.core.next(seq__61195_62089__$1);
var G__62157 = null;
var G__62158 = (0);
var G__62159 = (0);
seq__61195_62010 = G__62156;
chunk__61197_62011 = G__62157;
count__61199_62012 = G__62158;
i__61200_62013 = G__62159;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62189 = arguments.length;
var i__4731__auto___62190 = (0);
while(true){
if((i__4731__auto___62190 < len__4730__auto___62189)){
args__4736__auto__.push((arguments[i__4731__auto___62190]));

var G__62195 = (i__4731__auto___62190 + (1));
i__4731__auto___62190 = G__62195;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq61307){
var G__61308 = cljs.core.first(seq61307);
var seq61307__$1 = cljs.core.next(seq61307);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61308,seq61307__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__61325 = arguments.length;
switch (G__61325) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4109__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4109__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4109__auto__;
}
})())){
var c__50709__auto___62216 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50710__auto__ = (function (){var switch__50435__auto__ = (function (state_61346){
var state_val_61347 = (state_61346[(1)]);
if((state_val_61347 === (1))){
var state_61346__$1 = state_61346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61346__$1,(2),once_or_cleanup);
} else {
if((state_val_61347 === (2))){
var inst_61343 = (state_61346[(2)]);
var inst_61344 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_61346__$1 = (function (){var statearr_61350 = state_61346;
(statearr_61350[(7)] = inst_61343);

return statearr_61350;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_61346__$1,inst_61344);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__50436__auto__ = null;
var shadow$dom$state_machine__50436__auto____0 = (function (){
var statearr_61351 = [null,null,null,null,null,null,null,null];
(statearr_61351[(0)] = shadow$dom$state_machine__50436__auto__);

(statearr_61351[(1)] = (1));

return statearr_61351;
});
var shadow$dom$state_machine__50436__auto____1 = (function (state_61346){
while(true){
var ret_value__50437__auto__ = (function (){try{while(true){
var result__50438__auto__ = switch__50435__auto__(state_61346);
if(cljs.core.keyword_identical_QMARK_(result__50438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50438__auto__;
}
break;
}
}catch (e61355){var ex__50439__auto__ = e61355;
var statearr_61356_62228 = state_61346;
(statearr_61356_62228[(2)] = ex__50439__auto__);


if(cljs.core.seq((state_61346[(4)]))){
var statearr_61357_62229 = state_61346;
(statearr_61357_62229[(1)] = cljs.core.first((state_61346[(4)])));

} else {
throw ex__50439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62231 = state_61346;
state_61346 = G__62231;
continue;
} else {
return ret_value__50437__auto__;
}
break;
}
});
shadow$dom$state_machine__50436__auto__ = function(state_61346){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__50436__auto____0.call(this);
case 1:
return shadow$dom$state_machine__50436__auto____1.call(this,state_61346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__50436__auto____0;
shadow$dom$state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__50436__auto____1;
return shadow$dom$state_machine__50436__auto__;
})()
})();
var state__50711__auto__ = (function (){var statearr_61363 = f__50710__auto__();
(statearr_61363[(6)] = c__50709__auto___62216);

return statearr_61363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50711__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
