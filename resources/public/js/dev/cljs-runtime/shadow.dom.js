goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_56576 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_56576(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_56582 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_56582(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__55317 = coll;
var G__55318 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__55317,G__55318) : shadow.dom.lazy_native_coll_seq.call(null,G__55317,G__55318));
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
var G__55344 = arguments.length;
switch (G__55344) {
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
var G__55347 = arguments.length;
switch (G__55347) {
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
var G__55373 = arguments.length;
switch (G__55373) {
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
var G__55381 = arguments.length;
switch (G__55381) {
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
var G__55400 = arguments.length;
switch (G__55400) {
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
var G__55420 = arguments.length;
switch (G__55420) {
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
}catch (e55438){if((e55438 instanceof Object)){
var e = e55438;
return console.log("didnt support attachEvent",el,e);
} else {
throw e55438;

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
var seq__55475 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__55476 = null;
var count__55477 = (0);
var i__55478 = (0);
while(true){
if((i__55478 < count__55477)){
var el = chunk__55476.cljs$core$IIndexed$_nth$arity$2(null,i__55478);
var handler_56645__$1 = ((function (seq__55475,chunk__55476,count__55477,i__55478,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__55475,chunk__55476,count__55477,i__55478,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_56645__$1);


var G__56652 = seq__55475;
var G__56653 = chunk__55476;
var G__56654 = count__55477;
var G__56655 = (i__55478 + (1));
seq__55475 = G__56652;
chunk__55476 = G__56653;
count__55477 = G__56654;
i__55478 = G__56655;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55475);
if(temp__5735__auto__){
var seq__55475__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55475__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__55475__$1);
var G__56657 = cljs.core.chunk_rest(seq__55475__$1);
var G__56658 = c__4550__auto__;
var G__56659 = cljs.core.count(c__4550__auto__);
var G__56660 = (0);
seq__55475 = G__56657;
chunk__55476 = G__56658;
count__55477 = G__56659;
i__55478 = G__56660;
continue;
} else {
var el = cljs.core.first(seq__55475__$1);
var handler_56664__$1 = ((function (seq__55475,chunk__55476,count__55477,i__55478,el,seq__55475__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__55475,chunk__55476,count__55477,i__55478,el,seq__55475__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_56664__$1);


var G__56666 = cljs.core.next(seq__55475__$1);
var G__56667 = null;
var G__56668 = (0);
var G__56669 = (0);
seq__55475 = G__56666;
chunk__55476 = G__56667;
count__55477 = G__56668;
i__55478 = G__56669;
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
var G__55524 = arguments.length;
switch (G__55524) {
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
var seq__55574 = cljs.core.seq(events);
var chunk__55575 = null;
var count__55576 = (0);
var i__55577 = (0);
while(true){
if((i__55577 < count__55576)){
var vec__55592 = chunk__55575.cljs$core$IIndexed$_nth$arity$2(null,i__55577);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55592,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55592,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__56681 = seq__55574;
var G__56682 = chunk__55575;
var G__56683 = count__55576;
var G__56684 = (i__55577 + (1));
seq__55574 = G__56681;
chunk__55575 = G__56682;
count__55576 = G__56683;
i__55577 = G__56684;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55574);
if(temp__5735__auto__){
var seq__55574__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55574__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__55574__$1);
var G__56686 = cljs.core.chunk_rest(seq__55574__$1);
var G__56687 = c__4550__auto__;
var G__56688 = cljs.core.count(c__4550__auto__);
var G__56689 = (0);
seq__55574 = G__56686;
chunk__55575 = G__56687;
count__55576 = G__56688;
i__55577 = G__56689;
continue;
} else {
var vec__55597 = cljs.core.first(seq__55574__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55597,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55597,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__56693 = cljs.core.next(seq__55574__$1);
var G__56694 = null;
var G__56695 = (0);
var G__56696 = (0);
seq__55574 = G__56693;
chunk__55575 = G__56694;
count__55576 = G__56695;
i__55577 = G__56696;
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
var seq__55601 = cljs.core.seq(styles);
var chunk__55602 = null;
var count__55603 = (0);
var i__55604 = (0);
while(true){
if((i__55604 < count__55603)){
var vec__55615 = chunk__55602.cljs$core$IIndexed$_nth$arity$2(null,i__55604);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55615,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55615,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__56700 = seq__55601;
var G__56701 = chunk__55602;
var G__56702 = count__55603;
var G__56703 = (i__55604 + (1));
seq__55601 = G__56700;
chunk__55602 = G__56701;
count__55603 = G__56702;
i__55604 = G__56703;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55601);
if(temp__5735__auto__){
var seq__55601__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55601__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__55601__$1);
var G__56708 = cljs.core.chunk_rest(seq__55601__$1);
var G__56709 = c__4550__auto__;
var G__56710 = cljs.core.count(c__4550__auto__);
var G__56711 = (0);
seq__55601 = G__56708;
chunk__55602 = G__56709;
count__55603 = G__56710;
i__55604 = G__56711;
continue;
} else {
var vec__55625 = cljs.core.first(seq__55601__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55625,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55625,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__56713 = cljs.core.next(seq__55601__$1);
var G__56714 = null;
var G__56715 = (0);
var G__56716 = (0);
seq__55601 = G__56713;
chunk__55602 = G__56714;
count__55603 = G__56715;
i__55604 = G__56716;
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
var G__55639_56717 = key;
var G__55639_56718__$1 = (((G__55639_56717 instanceof cljs.core.Keyword))?G__55639_56717.fqn:null);
switch (G__55639_56718__$1) {
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
var ks_56723 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4120__auto__ = goog.string.startsWith(ks_56723,"data-");
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return goog.string.startsWith(ks_56723,"aria-");
}
})())){
el.setAttribute(ks_56723,value);
} else {
(el[ks_56723] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__55674){
var map__55675 = p__55674;
var map__55675__$1 = (((((!((map__55675 == null))))?(((((map__55675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55675):map__55675);
var props = map__55675__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55675__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__55677 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55677,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55677,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55677,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__55680 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__55680,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__55680;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__55682 = arguments.length;
switch (G__55682) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__55706){
var vec__55712 = p__55706;
var seq__55713 = cljs.core.seq(vec__55712);
var first__55714 = cljs.core.first(seq__55713);
var seq__55713__$1 = cljs.core.next(seq__55713);
var nn = first__55714;
var first__55714__$1 = cljs.core.first(seq__55713__$1);
var seq__55713__$2 = cljs.core.next(seq__55713__$1);
var np = first__55714__$1;
var nc = seq__55713__$2;
var node = vec__55712;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__55722 = nn;
var G__55723 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__55722,G__55723) : create_fn.call(null,G__55722,G__55723));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__55724 = nn;
var G__55725 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__55724,G__55725) : create_fn.call(null,G__55724,G__55725));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__55727 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55727,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55727,(1),null);
var seq__55734_56767 = cljs.core.seq(node_children);
var chunk__55735_56768 = null;
var count__55736_56769 = (0);
var i__55737_56770 = (0);
while(true){
if((i__55737_56770 < count__55736_56769)){
var child_struct_56772 = chunk__55735_56768.cljs$core$IIndexed$_nth$arity$2(null,i__55737_56770);
var children_56773 = shadow.dom.dom_node(child_struct_56772);
if(cljs.core.seq_QMARK_(children_56773)){
var seq__55776_56774 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_56773));
var chunk__55778_56775 = null;
var count__55779_56776 = (0);
var i__55780_56777 = (0);
while(true){
if((i__55780_56777 < count__55779_56776)){
var child_56779 = chunk__55778_56775.cljs$core$IIndexed$_nth$arity$2(null,i__55780_56777);
if(cljs.core.truth_(child_56779)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56779);


var G__56780 = seq__55776_56774;
var G__56781 = chunk__55778_56775;
var G__56782 = count__55779_56776;
var G__56783 = (i__55780_56777 + (1));
seq__55776_56774 = G__56780;
chunk__55778_56775 = G__56781;
count__55779_56776 = G__56782;
i__55780_56777 = G__56783;
continue;
} else {
var G__56785 = seq__55776_56774;
var G__56786 = chunk__55778_56775;
var G__56787 = count__55779_56776;
var G__56788 = (i__55780_56777 + (1));
seq__55776_56774 = G__56785;
chunk__55778_56775 = G__56786;
count__55779_56776 = G__56787;
i__55780_56777 = G__56788;
continue;
}
} else {
var temp__5735__auto___56789 = cljs.core.seq(seq__55776_56774);
if(temp__5735__auto___56789){
var seq__55776_56791__$1 = temp__5735__auto___56789;
if(cljs.core.chunked_seq_QMARK_(seq__55776_56791__$1)){
var c__4550__auto___56794 = cljs.core.chunk_first(seq__55776_56791__$1);
var G__56796 = cljs.core.chunk_rest(seq__55776_56791__$1);
var G__56797 = c__4550__auto___56794;
var G__56798 = cljs.core.count(c__4550__auto___56794);
var G__56799 = (0);
seq__55776_56774 = G__56796;
chunk__55778_56775 = G__56797;
count__55779_56776 = G__56798;
i__55780_56777 = G__56799;
continue;
} else {
var child_56800 = cljs.core.first(seq__55776_56791__$1);
if(cljs.core.truth_(child_56800)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56800);


var G__56802 = cljs.core.next(seq__55776_56791__$1);
var G__56803 = null;
var G__56804 = (0);
var G__56805 = (0);
seq__55776_56774 = G__56802;
chunk__55778_56775 = G__56803;
count__55779_56776 = G__56804;
i__55780_56777 = G__56805;
continue;
} else {
var G__56808 = cljs.core.next(seq__55776_56791__$1);
var G__56809 = null;
var G__56810 = (0);
var G__56811 = (0);
seq__55776_56774 = G__56808;
chunk__55778_56775 = G__56809;
count__55779_56776 = G__56810;
i__55780_56777 = G__56811;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_56773);
}


var G__56814 = seq__55734_56767;
var G__56815 = chunk__55735_56768;
var G__56816 = count__55736_56769;
var G__56817 = (i__55737_56770 + (1));
seq__55734_56767 = G__56814;
chunk__55735_56768 = G__56815;
count__55736_56769 = G__56816;
i__55737_56770 = G__56817;
continue;
} else {
var temp__5735__auto___56820 = cljs.core.seq(seq__55734_56767);
if(temp__5735__auto___56820){
var seq__55734_56821__$1 = temp__5735__auto___56820;
if(cljs.core.chunked_seq_QMARK_(seq__55734_56821__$1)){
var c__4550__auto___56822 = cljs.core.chunk_first(seq__55734_56821__$1);
var G__56823 = cljs.core.chunk_rest(seq__55734_56821__$1);
var G__56824 = c__4550__auto___56822;
var G__56825 = cljs.core.count(c__4550__auto___56822);
var G__56826 = (0);
seq__55734_56767 = G__56823;
chunk__55735_56768 = G__56824;
count__55736_56769 = G__56825;
i__55737_56770 = G__56826;
continue;
} else {
var child_struct_56830 = cljs.core.first(seq__55734_56821__$1);
var children_56832 = shadow.dom.dom_node(child_struct_56830);
if(cljs.core.seq_QMARK_(children_56832)){
var seq__55806_56833 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_56832));
var chunk__55808_56834 = null;
var count__55809_56835 = (0);
var i__55810_56836 = (0);
while(true){
if((i__55810_56836 < count__55809_56835)){
var child_56838 = chunk__55808_56834.cljs$core$IIndexed$_nth$arity$2(null,i__55810_56836);
if(cljs.core.truth_(child_56838)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56838);


var G__56842 = seq__55806_56833;
var G__56843 = chunk__55808_56834;
var G__56844 = count__55809_56835;
var G__56845 = (i__55810_56836 + (1));
seq__55806_56833 = G__56842;
chunk__55808_56834 = G__56843;
count__55809_56835 = G__56844;
i__55810_56836 = G__56845;
continue;
} else {
var G__56847 = seq__55806_56833;
var G__56848 = chunk__55808_56834;
var G__56849 = count__55809_56835;
var G__56850 = (i__55810_56836 + (1));
seq__55806_56833 = G__56847;
chunk__55808_56834 = G__56848;
count__55809_56835 = G__56849;
i__55810_56836 = G__56850;
continue;
}
} else {
var temp__5735__auto___56852__$1 = cljs.core.seq(seq__55806_56833);
if(temp__5735__auto___56852__$1){
var seq__55806_56853__$1 = temp__5735__auto___56852__$1;
if(cljs.core.chunked_seq_QMARK_(seq__55806_56853__$1)){
var c__4550__auto___56854 = cljs.core.chunk_first(seq__55806_56853__$1);
var G__56856 = cljs.core.chunk_rest(seq__55806_56853__$1);
var G__56857 = c__4550__auto___56854;
var G__56858 = cljs.core.count(c__4550__auto___56854);
var G__56859 = (0);
seq__55806_56833 = G__56856;
chunk__55808_56834 = G__56857;
count__55809_56835 = G__56858;
i__55810_56836 = G__56859;
continue;
} else {
var child_56863 = cljs.core.first(seq__55806_56853__$1);
if(cljs.core.truth_(child_56863)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56863);


var G__56864 = cljs.core.next(seq__55806_56853__$1);
var G__56865 = null;
var G__56866 = (0);
var G__56867 = (0);
seq__55806_56833 = G__56864;
chunk__55808_56834 = G__56865;
count__55809_56835 = G__56866;
i__55810_56836 = G__56867;
continue;
} else {
var G__56869 = cljs.core.next(seq__55806_56853__$1);
var G__56870 = null;
var G__56871 = (0);
var G__56872 = (0);
seq__55806_56833 = G__56869;
chunk__55808_56834 = G__56870;
count__55809_56835 = G__56871;
i__55810_56836 = G__56872;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_56832);
}


var G__56873 = cljs.core.next(seq__55734_56821__$1);
var G__56874 = null;
var G__56875 = (0);
var G__56876 = (0);
seq__55734_56767 = G__56873;
chunk__55735_56768 = G__56874;
count__55736_56769 = G__56875;
i__55737_56770 = G__56876;
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
var seq__55850 = cljs.core.seq(node);
var chunk__55851 = null;
var count__55852 = (0);
var i__55853 = (0);
while(true){
if((i__55853 < count__55852)){
var n = chunk__55851.cljs$core$IIndexed$_nth$arity$2(null,i__55853);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__56887 = seq__55850;
var G__56888 = chunk__55851;
var G__56889 = count__55852;
var G__56890 = (i__55853 + (1));
seq__55850 = G__56887;
chunk__55851 = G__56888;
count__55852 = G__56889;
i__55853 = G__56890;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55850);
if(temp__5735__auto__){
var seq__55850__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55850__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__55850__$1);
var G__56892 = cljs.core.chunk_rest(seq__55850__$1);
var G__56893 = c__4550__auto__;
var G__56894 = cljs.core.count(c__4550__auto__);
var G__56895 = (0);
seq__55850 = G__56892;
chunk__55851 = G__56893;
count__55852 = G__56894;
i__55853 = G__56895;
continue;
} else {
var n = cljs.core.first(seq__55850__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__56897 = cljs.core.next(seq__55850__$1);
var G__56898 = null;
var G__56899 = (0);
var G__56900 = (0);
seq__55850 = G__56897;
chunk__55851 = G__56898;
count__55852 = G__56899;
i__55853 = G__56900;
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
var G__55878 = arguments.length;
switch (G__55878) {
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
var G__55885 = arguments.length;
switch (G__55885) {
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
var G__55901 = arguments.length;
switch (G__55901) {
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
var len__4730__auto___56947 = arguments.length;
var i__4731__auto___56948 = (0);
while(true){
if((i__4731__auto___56948 < len__4730__auto___56947)){
args__4736__auto__.push((arguments[i__4731__auto___56948]));

var G__56949 = (i__4731__auto___56948 + (1));
i__4731__auto___56948 = G__56949;
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
var seq__55924_56951 = cljs.core.seq(nodes);
var chunk__55925_56952 = null;
var count__55926_56953 = (0);
var i__55927_56954 = (0);
while(true){
if((i__55927_56954 < count__55926_56953)){
var node_56956 = chunk__55925_56952.cljs$core$IIndexed$_nth$arity$2(null,i__55927_56954);
fragment.appendChild(shadow.dom._to_dom(node_56956));


var G__56957 = seq__55924_56951;
var G__56958 = chunk__55925_56952;
var G__56959 = count__55926_56953;
var G__56960 = (i__55927_56954 + (1));
seq__55924_56951 = G__56957;
chunk__55925_56952 = G__56958;
count__55926_56953 = G__56959;
i__55927_56954 = G__56960;
continue;
} else {
var temp__5735__auto___56961 = cljs.core.seq(seq__55924_56951);
if(temp__5735__auto___56961){
var seq__55924_56962__$1 = temp__5735__auto___56961;
if(cljs.core.chunked_seq_QMARK_(seq__55924_56962__$1)){
var c__4550__auto___56964 = cljs.core.chunk_first(seq__55924_56962__$1);
var G__56965 = cljs.core.chunk_rest(seq__55924_56962__$1);
var G__56966 = c__4550__auto___56964;
var G__56967 = cljs.core.count(c__4550__auto___56964);
var G__56968 = (0);
seq__55924_56951 = G__56965;
chunk__55925_56952 = G__56966;
count__55926_56953 = G__56967;
i__55927_56954 = G__56968;
continue;
} else {
var node_56970 = cljs.core.first(seq__55924_56962__$1);
fragment.appendChild(shadow.dom._to_dom(node_56970));


var G__56974 = cljs.core.next(seq__55924_56962__$1);
var G__56975 = null;
var G__56976 = (0);
var G__56977 = (0);
seq__55924_56951 = G__56974;
chunk__55925_56952 = G__56975;
count__55926_56953 = G__56976;
i__55927_56954 = G__56977;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq55920){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55920));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__55941_56985 = cljs.core.seq(scripts);
var chunk__55942_56986 = null;
var count__55943_56987 = (0);
var i__55944_56988 = (0);
while(true){
if((i__55944_56988 < count__55943_56987)){
var vec__55963_56989 = chunk__55942_56986.cljs$core$IIndexed$_nth$arity$2(null,i__55944_56988);
var script_tag_56990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55963_56989,(0),null);
var script_body_56991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55963_56989,(1),null);
eval(script_body_56991);


var G__56992 = seq__55941_56985;
var G__56993 = chunk__55942_56986;
var G__56994 = count__55943_56987;
var G__56995 = (i__55944_56988 + (1));
seq__55941_56985 = G__56992;
chunk__55942_56986 = G__56993;
count__55943_56987 = G__56994;
i__55944_56988 = G__56995;
continue;
} else {
var temp__5735__auto___56998 = cljs.core.seq(seq__55941_56985);
if(temp__5735__auto___56998){
var seq__55941_56999__$1 = temp__5735__auto___56998;
if(cljs.core.chunked_seq_QMARK_(seq__55941_56999__$1)){
var c__4550__auto___57000 = cljs.core.chunk_first(seq__55941_56999__$1);
var G__57001 = cljs.core.chunk_rest(seq__55941_56999__$1);
var G__57002 = c__4550__auto___57000;
var G__57003 = cljs.core.count(c__4550__auto___57000);
var G__57004 = (0);
seq__55941_56985 = G__57001;
chunk__55942_56986 = G__57002;
count__55943_56987 = G__57003;
i__55944_56988 = G__57004;
continue;
} else {
var vec__55974_57006 = cljs.core.first(seq__55941_56999__$1);
var script_tag_57007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55974_57006,(0),null);
var script_body_57008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55974_57006,(1),null);
eval(script_body_57008);


var G__57011 = cljs.core.next(seq__55941_56999__$1);
var G__57012 = null;
var G__57013 = (0);
var G__57014 = (0);
seq__55941_56985 = G__57011;
chunk__55942_56986 = G__57012;
count__55943_56987 = G__57013;
i__55944_56988 = G__57014;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__55977){
var vec__55978 = p__55977;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55978,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55978,(1),null);
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
var G__55995 = arguments.length;
switch (G__55995) {
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
var seq__56021 = cljs.core.seq(style_keys);
var chunk__56022 = null;
var count__56023 = (0);
var i__56024 = (0);
while(true){
if((i__56024 < count__56023)){
var it = chunk__56022.cljs$core$IIndexed$_nth$arity$2(null,i__56024);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__57034 = seq__56021;
var G__57035 = chunk__56022;
var G__57036 = count__56023;
var G__57037 = (i__56024 + (1));
seq__56021 = G__57034;
chunk__56022 = G__57035;
count__56023 = G__57036;
i__56024 = G__57037;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56021);
if(temp__5735__auto__){
var seq__56021__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56021__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56021__$1);
var G__57040 = cljs.core.chunk_rest(seq__56021__$1);
var G__57041 = c__4550__auto__;
var G__57042 = cljs.core.count(c__4550__auto__);
var G__57043 = (0);
seq__56021 = G__57040;
chunk__56022 = G__57041;
count__56023 = G__57042;
i__56024 = G__57043;
continue;
} else {
var it = cljs.core.first(seq__56021__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__57044 = cljs.core.next(seq__56021__$1);
var G__57045 = null;
var G__57046 = (0);
var G__57047 = (0);
seq__56021 = G__57044;
chunk__56022 = G__57045;
count__56023 = G__57046;
i__56024 = G__57047;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4376__auto__,k56041,else__4377__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var G__56085 = k56041;
var G__56085__$1 = (((G__56085 instanceof cljs.core.Keyword))?G__56085.fqn:null);
switch (G__56085__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56041,else__4377__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4393__auto__,f__4394__auto__,init__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4396__auto__,p__56090){
var vec__56094 = p__56090;
var k__4397__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56094,(0),null);
var v__4398__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56094,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56040){
var self__ = this;
var G__56040__$1 = this;
return (new cljs.core.RecordIter((0),G__56040__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56043,other56044){
var self__ = this;
var this56043__$1 = this;
return (((!((other56044 == null)))) && ((this56043__$1.constructor === other56044.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56043__$1.x,other56044.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56043__$1.y,other56044.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56043__$1.__extmap,other56044.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4381__auto__,k__4382__auto__,G__56040){
var self__ = this;
var this__4381__auto____$1 = this;
var pred__56132 = cljs.core.keyword_identical_QMARK_;
var expr__56133 = k__4382__auto__;
if(cljs.core.truth_((pred__56132.cljs$core$IFn$_invoke$arity$2 ? pred__56132.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__56133) : pred__56132.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__56133)))){
return (new shadow.dom.Coordinate(G__56040,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56132.cljs$core$IFn$_invoke$arity$2 ? pred__56132.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__56133) : pred__56132.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__56133)))){
return (new shadow.dom.Coordinate(self__.x,G__56040,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4382__auto__,G__56040),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4386__auto__){
var self__ = this;
var this__4386__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4373__auto__,G__56040){
var self__ = this;
var this__4373__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__56040,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__56064){
var extmap__4413__auto__ = (function (){var G__56147 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56064,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__56064)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56147);
} else {
return G__56147;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__56064),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__56064),null,cljs.core.not_empty(extmap__4413__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4376__auto__,k56165,else__4377__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var G__56175 = k56165;
var G__56175__$1 = (((G__56175 instanceof cljs.core.Keyword))?G__56175.fqn:null);
switch (G__56175__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56165,else__4377__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4393__auto__,f__4394__auto__,init__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4396__auto__,p__56178){
var vec__56179 = p__56178;
var k__4397__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56179,(0),null);
var v__4398__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56179,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56164){
var self__ = this;
var G__56164__$1 = this;
return (new cljs.core.RecordIter((0),G__56164__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56166,other56167){
var self__ = this;
var this56166__$1 = this;
return (((!((other56167 == null)))) && ((this56166__$1.constructor === other56167.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56166__$1.w,other56167.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56166__$1.h,other56167.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56166__$1.__extmap,other56167.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4381__auto__,k__4382__auto__,G__56164){
var self__ = this;
var this__4381__auto____$1 = this;
var pred__56248 = cljs.core.keyword_identical_QMARK_;
var expr__56249 = k__4382__auto__;
if(cljs.core.truth_((pred__56248.cljs$core$IFn$_invoke$arity$2 ? pred__56248.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__56249) : pred__56248.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__56249)))){
return (new shadow.dom.Size(G__56164,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56248.cljs$core$IFn$_invoke$arity$2 ? pred__56248.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__56249) : pred__56248.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__56249)))){
return (new shadow.dom.Size(self__.w,G__56164,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4382__auto__,G__56164),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4386__auto__){
var self__ = this;
var this__4386__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4373__auto__,G__56164){
var self__ = this;
var this__4373__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__56164,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__56168){
var extmap__4413__auto__ = (function (){var G__56292 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56168,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__56168)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56292);
} else {
return G__56292;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__56168),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__56168),null,cljs.core.not_empty(extmap__4413__auto__),null));
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
var G__57096 = (i + (1));
var G__57097 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__57096;
ret = G__57097;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56311){
var vec__56312 = p__56311;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56312,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56312,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__56333 = arguments.length;
switch (G__56333) {
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
var G__57110 = ps;
var G__57111 = (i + (1));
el__$1 = G__57110;
i = G__57111;
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
var vec__56347 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56347,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56347,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56347,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__56352_57121 = cljs.core.seq(props);
var chunk__56353_57122 = null;
var count__56354_57123 = (0);
var i__56355_57124 = (0);
while(true){
if((i__56355_57124 < count__56354_57123)){
var vec__56368_57125 = chunk__56353_57122.cljs$core$IIndexed$_nth$arity$2(null,i__56355_57124);
var k_57126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56368_57125,(0),null);
var v_57127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56368_57125,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_57126);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_57126),v_57127);


var G__57128 = seq__56352_57121;
var G__57129 = chunk__56353_57122;
var G__57130 = count__56354_57123;
var G__57131 = (i__56355_57124 + (1));
seq__56352_57121 = G__57128;
chunk__56353_57122 = G__57129;
count__56354_57123 = G__57130;
i__56355_57124 = G__57131;
continue;
} else {
var temp__5735__auto___57132 = cljs.core.seq(seq__56352_57121);
if(temp__5735__auto___57132){
var seq__56352_57133__$1 = temp__5735__auto___57132;
if(cljs.core.chunked_seq_QMARK_(seq__56352_57133__$1)){
var c__4550__auto___57134 = cljs.core.chunk_first(seq__56352_57133__$1);
var G__57135 = cljs.core.chunk_rest(seq__56352_57133__$1);
var G__57136 = c__4550__auto___57134;
var G__57137 = cljs.core.count(c__4550__auto___57134);
var G__57138 = (0);
seq__56352_57121 = G__57135;
chunk__56353_57122 = G__57136;
count__56354_57123 = G__57137;
i__56355_57124 = G__57138;
continue;
} else {
var vec__56376_57139 = cljs.core.first(seq__56352_57133__$1);
var k_57140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56376_57139,(0),null);
var v_57141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56376_57139,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_57140);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_57140),v_57141);


var G__57143 = cljs.core.next(seq__56352_57133__$1);
var G__57144 = null;
var G__57145 = (0);
var G__57146 = (0);
seq__56352_57121 = G__57143;
chunk__56353_57122 = G__57144;
count__56354_57123 = G__57145;
i__56355_57124 = G__57146;
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
var vec__56389 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56389,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56389,(1),null);
var seq__56394_57147 = cljs.core.seq(node_children);
var chunk__56396_57148 = null;
var count__56397_57149 = (0);
var i__56398_57150 = (0);
while(true){
if((i__56398_57150 < count__56397_57149)){
var child_struct_57151 = chunk__56396_57148.cljs$core$IIndexed$_nth$arity$2(null,i__56398_57150);
if((!((child_struct_57151 == null)))){
if(typeof child_struct_57151 === 'string'){
var text_57152 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_57152),child_struct_57151].join(''));
} else {
var children_57154 = shadow.dom.svg_node(child_struct_57151);
if(cljs.core.seq_QMARK_(children_57154)){
var seq__56443_57155 = cljs.core.seq(children_57154);
var chunk__56445_57156 = null;
var count__56446_57157 = (0);
var i__56447_57158 = (0);
while(true){
if((i__56447_57158 < count__56446_57157)){
var child_57160 = chunk__56445_57156.cljs$core$IIndexed$_nth$arity$2(null,i__56447_57158);
if(cljs.core.truth_(child_57160)){
node.appendChild(child_57160);


var G__57161 = seq__56443_57155;
var G__57162 = chunk__56445_57156;
var G__57163 = count__56446_57157;
var G__57164 = (i__56447_57158 + (1));
seq__56443_57155 = G__57161;
chunk__56445_57156 = G__57162;
count__56446_57157 = G__57163;
i__56447_57158 = G__57164;
continue;
} else {
var G__57165 = seq__56443_57155;
var G__57166 = chunk__56445_57156;
var G__57167 = count__56446_57157;
var G__57168 = (i__56447_57158 + (1));
seq__56443_57155 = G__57165;
chunk__56445_57156 = G__57166;
count__56446_57157 = G__57167;
i__56447_57158 = G__57168;
continue;
}
} else {
var temp__5735__auto___57170 = cljs.core.seq(seq__56443_57155);
if(temp__5735__auto___57170){
var seq__56443_57171__$1 = temp__5735__auto___57170;
if(cljs.core.chunked_seq_QMARK_(seq__56443_57171__$1)){
var c__4550__auto___57172 = cljs.core.chunk_first(seq__56443_57171__$1);
var G__57174 = cljs.core.chunk_rest(seq__56443_57171__$1);
var G__57175 = c__4550__auto___57172;
var G__57176 = cljs.core.count(c__4550__auto___57172);
var G__57177 = (0);
seq__56443_57155 = G__57174;
chunk__56445_57156 = G__57175;
count__56446_57157 = G__57176;
i__56447_57158 = G__57177;
continue;
} else {
var child_57179 = cljs.core.first(seq__56443_57171__$1);
if(cljs.core.truth_(child_57179)){
node.appendChild(child_57179);


var G__57180 = cljs.core.next(seq__56443_57171__$1);
var G__57181 = null;
var G__57182 = (0);
var G__57183 = (0);
seq__56443_57155 = G__57180;
chunk__56445_57156 = G__57181;
count__56446_57157 = G__57182;
i__56447_57158 = G__57183;
continue;
} else {
var G__57185 = cljs.core.next(seq__56443_57171__$1);
var G__57186 = null;
var G__57187 = (0);
var G__57188 = (0);
seq__56443_57155 = G__57185;
chunk__56445_57156 = G__57186;
count__56446_57157 = G__57187;
i__56447_57158 = G__57188;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_57154);
}
}


var G__57189 = seq__56394_57147;
var G__57190 = chunk__56396_57148;
var G__57191 = count__56397_57149;
var G__57192 = (i__56398_57150 + (1));
seq__56394_57147 = G__57189;
chunk__56396_57148 = G__57190;
count__56397_57149 = G__57191;
i__56398_57150 = G__57192;
continue;
} else {
var G__57193 = seq__56394_57147;
var G__57194 = chunk__56396_57148;
var G__57195 = count__56397_57149;
var G__57196 = (i__56398_57150 + (1));
seq__56394_57147 = G__57193;
chunk__56396_57148 = G__57194;
count__56397_57149 = G__57195;
i__56398_57150 = G__57196;
continue;
}
} else {
var temp__5735__auto___57198 = cljs.core.seq(seq__56394_57147);
if(temp__5735__auto___57198){
var seq__56394_57199__$1 = temp__5735__auto___57198;
if(cljs.core.chunked_seq_QMARK_(seq__56394_57199__$1)){
var c__4550__auto___57200 = cljs.core.chunk_first(seq__56394_57199__$1);
var G__57201 = cljs.core.chunk_rest(seq__56394_57199__$1);
var G__57202 = c__4550__auto___57200;
var G__57203 = cljs.core.count(c__4550__auto___57200);
var G__57204 = (0);
seq__56394_57147 = G__57201;
chunk__56396_57148 = G__57202;
count__56397_57149 = G__57203;
i__56398_57150 = G__57204;
continue;
} else {
var child_struct_57205 = cljs.core.first(seq__56394_57199__$1);
if((!((child_struct_57205 == null)))){
if(typeof child_struct_57205 === 'string'){
var text_57206 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_57206),child_struct_57205].join(''));
} else {
var children_57207 = shadow.dom.svg_node(child_struct_57205);
if(cljs.core.seq_QMARK_(children_57207)){
var seq__56479_57208 = cljs.core.seq(children_57207);
var chunk__56481_57209 = null;
var count__56482_57210 = (0);
var i__56483_57211 = (0);
while(true){
if((i__56483_57211 < count__56482_57210)){
var child_57212 = chunk__56481_57209.cljs$core$IIndexed$_nth$arity$2(null,i__56483_57211);
if(cljs.core.truth_(child_57212)){
node.appendChild(child_57212);


var G__57213 = seq__56479_57208;
var G__57214 = chunk__56481_57209;
var G__57215 = count__56482_57210;
var G__57216 = (i__56483_57211 + (1));
seq__56479_57208 = G__57213;
chunk__56481_57209 = G__57214;
count__56482_57210 = G__57215;
i__56483_57211 = G__57216;
continue;
} else {
var G__57217 = seq__56479_57208;
var G__57218 = chunk__56481_57209;
var G__57219 = count__56482_57210;
var G__57220 = (i__56483_57211 + (1));
seq__56479_57208 = G__57217;
chunk__56481_57209 = G__57218;
count__56482_57210 = G__57219;
i__56483_57211 = G__57220;
continue;
}
} else {
var temp__5735__auto___57221__$1 = cljs.core.seq(seq__56479_57208);
if(temp__5735__auto___57221__$1){
var seq__56479_57224__$1 = temp__5735__auto___57221__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56479_57224__$1)){
var c__4550__auto___57225 = cljs.core.chunk_first(seq__56479_57224__$1);
var G__57227 = cljs.core.chunk_rest(seq__56479_57224__$1);
var G__57228 = c__4550__auto___57225;
var G__57229 = cljs.core.count(c__4550__auto___57225);
var G__57230 = (0);
seq__56479_57208 = G__57227;
chunk__56481_57209 = G__57228;
count__56482_57210 = G__57229;
i__56483_57211 = G__57230;
continue;
} else {
var child_57231 = cljs.core.first(seq__56479_57224__$1);
if(cljs.core.truth_(child_57231)){
node.appendChild(child_57231);


var G__57232 = cljs.core.next(seq__56479_57224__$1);
var G__57233 = null;
var G__57234 = (0);
var G__57235 = (0);
seq__56479_57208 = G__57232;
chunk__56481_57209 = G__57233;
count__56482_57210 = G__57234;
i__56483_57211 = G__57235;
continue;
} else {
var G__57236 = cljs.core.next(seq__56479_57224__$1);
var G__57237 = null;
var G__57238 = (0);
var G__57239 = (0);
seq__56479_57208 = G__57236;
chunk__56481_57209 = G__57237;
count__56482_57210 = G__57238;
i__56483_57211 = G__57239;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_57207);
}
}


var G__57240 = cljs.core.next(seq__56394_57199__$1);
var G__57241 = null;
var G__57242 = (0);
var G__57243 = (0);
seq__56394_57147 = G__57240;
chunk__56396_57148 = G__57241;
count__56397_57149 = G__57242;
i__56398_57150 = G__57243;
continue;
} else {
var G__57244 = cljs.core.next(seq__56394_57199__$1);
var G__57245 = null;
var G__57246 = (0);
var G__57247 = (0);
seq__56394_57147 = G__57244;
chunk__56396_57148 = G__57245;
count__56397_57149 = G__57246;
i__56398_57150 = G__57247;
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
var len__4730__auto___57254 = arguments.length;
var i__4731__auto___57255 = (0);
while(true){
if((i__4731__auto___57255 < len__4730__auto___57254)){
args__4736__auto__.push((arguments[i__4731__auto___57255]));

var G__57256 = (i__4731__auto___57255 + (1));
i__4731__auto___57255 = G__57256;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq56501){
var G__56503 = cljs.core.first(seq56501);
var seq56501__$1 = cljs.core.next(seq56501);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56503,seq56501__$1);
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
var G__56516 = arguments.length;
switch (G__56516) {
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
var c__50116__auto___57263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50117__auto__ = (function (){var switch__49967__auto__ = (function (state_56532){
var state_val_56533 = (state_56532[(1)]);
if((state_val_56533 === (1))){
var state_56532__$1 = state_56532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56532__$1,(2),once_or_cleanup);
} else {
if((state_val_56533 === (2))){
var inst_56529 = (state_56532[(2)]);
var inst_56530 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_56532__$1 = (function (){var statearr_56542 = state_56532;
(statearr_56542[(7)] = inst_56529);

return statearr_56542;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56532__$1,inst_56530);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__49968__auto__ = null;
var shadow$dom$state_machine__49968__auto____0 = (function (){
var statearr_56543 = [null,null,null,null,null,null,null,null];
(statearr_56543[(0)] = shadow$dom$state_machine__49968__auto__);

(statearr_56543[(1)] = (1));

return statearr_56543;
});
var shadow$dom$state_machine__49968__auto____1 = (function (state_56532){
while(true){
var ret_value__49969__auto__ = (function (){try{while(true){
var result__49970__auto__ = switch__49967__auto__(state_56532);
if(cljs.core.keyword_identical_QMARK_(result__49970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49970__auto__;
}
break;
}
}catch (e56544){var ex__49971__auto__ = e56544;
var statearr_56546_57271 = state_56532;
(statearr_56546_57271[(2)] = ex__49971__auto__);


if(cljs.core.seq((state_56532[(4)]))){
var statearr_56550_57272 = state_56532;
(statearr_56550_57272[(1)] = cljs.core.first((state_56532[(4)])));

} else {
throw ex__49971__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57276 = state_56532;
state_56532 = G__57276;
continue;
} else {
return ret_value__49969__auto__;
}
break;
}
});
shadow$dom$state_machine__49968__auto__ = function(state_56532){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__49968__auto____0.call(this);
case 1:
return shadow$dom$state_machine__49968__auto____1.call(this,state_56532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__49968__auto____0;
shadow$dom$state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__49968__auto____1;
return shadow$dom$state_machine__49968__auto__;
})()
})();
var state__50118__auto__ = (function (){var statearr_56551 = f__50117__auto__();
(statearr_56551[(6)] = c__50116__auto___57263);

return statearr_56551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50118__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
