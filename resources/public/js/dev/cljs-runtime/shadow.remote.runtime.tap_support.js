goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__56182,p__56183){
var map__56184 = p__56182;
var map__56184__$1 = (((((!((map__56184 == null))))?(((((map__56184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56184):map__56184);
var svc = map__56184__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56184__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56184__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56184__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__56185 = p__56183;
var map__56185__$1 = (((((!((map__56185 == null))))?(((((map__56185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56185):map__56185);
var msg = map__56185__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56185__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56185__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56185__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56185__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__56198,p__56199){
var map__56200 = p__56198;
var map__56200__$1 = (((((!((map__56200 == null))))?(((((map__56200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56200):map__56200);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56200__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__56201 = p__56199;
var map__56201__$1 = (((((!((map__56201 == null))))?(((((map__56201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56201):map__56201);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56201__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__56216,p__56217){
var map__56218 = p__56216;
var map__56218__$1 = (((((!((map__56218 == null))))?(((((map__56218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56218):map__56218);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56218__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56218__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__56219 = p__56217;
var map__56219__$1 = (((((!((map__56219 == null))))?(((((map__56219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56219):map__56219);
var msg = map__56219__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56219__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__56235,tid){
var map__56236 = p__56235;
var map__56236__$1 = (((((!((map__56236 == null))))?(((((map__56236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56236):map__56236);
var svc = map__56236__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56236__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__56258 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__56259 = null;
var count__56260 = (0);
var i__56261 = (0);
while(true){
if((i__56261 < count__56260)){
var vec__56277 = chunk__56259.cljs$core$IIndexed$_nth$arity$2(null,i__56261);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56277,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56277,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__56315 = seq__56258;
var G__56316 = chunk__56259;
var G__56317 = count__56260;
var G__56318 = (i__56261 + (1));
seq__56258 = G__56315;
chunk__56259 = G__56316;
count__56260 = G__56317;
i__56261 = G__56318;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56258);
if(temp__5735__auto__){
var seq__56258__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56258__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56258__$1);
var G__56319 = cljs.core.chunk_rest(seq__56258__$1);
var G__56320 = c__4550__auto__;
var G__56321 = cljs.core.count(c__4550__auto__);
var G__56322 = (0);
seq__56258 = G__56319;
chunk__56259 = G__56320;
count__56260 = G__56321;
i__56261 = G__56322;
continue;
} else {
var vec__56285 = cljs.core.first(seq__56258__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56285,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56285,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__56328 = cljs.core.next(seq__56258__$1);
var G__56329 = null;
var G__56330 = (0);
var G__56331 = (0);
seq__56258 = G__56328;
chunk__56259 = G__56329;
count__56260 = G__56330;
i__56261 = G__56331;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__56242_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__56242_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__56245_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__56245_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__56246_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__56246_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__56247_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__56247_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__56293){
var map__56294 = p__56293;
var map__56294__$1 = (((((!((map__56294 == null))))?(((((map__56294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56294):map__56294);
var svc = map__56294__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56294__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56294__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
