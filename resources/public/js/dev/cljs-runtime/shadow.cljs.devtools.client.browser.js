goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61817 = arguments.length;
var i__4731__auto___61819 = (0);
while(true){
if((i__4731__auto___61819 < len__4730__auto___61817)){
args__4736__auto__.push((arguments[i__4731__auto___61819]));

var G__61820 = (i__4731__auto___61819 + (1));
i__4731__auto___61819 = G__61820;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq61392){
var G__61393 = cljs.core.first(seq61392);
var seq61392__$1 = cljs.core.next(seq61392);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61393,seq61392__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__61413 = cljs.core.seq(sources);
var chunk__61414 = null;
var count__61415 = (0);
var i__61416 = (0);
while(true){
if((i__61416 < count__61415)){
var map__61434 = chunk__61414.cljs$core$IIndexed$_nth$arity$2(null,i__61416);
var map__61434__$1 = (((((!((map__61434 == null))))?(((((map__61434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61434):map__61434);
var src = map__61434__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61434__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61434__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61434__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61434__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e61437){var e_61830 = e61437;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_61830);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_61830.message)].join('')));
}

var G__61832 = seq__61413;
var G__61833 = chunk__61414;
var G__61834 = count__61415;
var G__61835 = (i__61416 + (1));
seq__61413 = G__61832;
chunk__61414 = G__61833;
count__61415 = G__61834;
i__61416 = G__61835;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61413);
if(temp__5735__auto__){
var seq__61413__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61413__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__61413__$1);
var G__61836 = cljs.core.chunk_rest(seq__61413__$1);
var G__61837 = c__4550__auto__;
var G__61838 = cljs.core.count(c__4550__auto__);
var G__61839 = (0);
seq__61413 = G__61836;
chunk__61414 = G__61837;
count__61415 = G__61838;
i__61416 = G__61839;
continue;
} else {
var map__61442 = cljs.core.first(seq__61413__$1);
var map__61442__$1 = (((((!((map__61442 == null))))?(((((map__61442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61442):map__61442);
var src = map__61442__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61442__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61442__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61442__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61442__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e61448){var e_61841 = e61448;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_61841);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_61841.message)].join('')));
}

var G__61843 = cljs.core.next(seq__61413__$1);
var G__61844 = null;
var G__61845 = (0);
var G__61846 = (0);
seq__61413 = G__61843;
chunk__61414 = G__61844;
count__61415 = G__61845;
i__61416 = G__61846;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__61461 = cljs.core.seq(js_requires);
var chunk__61462 = null;
var count__61463 = (0);
var i__61464 = (0);
while(true){
if((i__61464 < count__61463)){
var js_ns = chunk__61462.cljs$core$IIndexed$_nth$arity$2(null,i__61464);
var require_str_61849 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_61849);


var G__61850 = seq__61461;
var G__61851 = chunk__61462;
var G__61852 = count__61463;
var G__61853 = (i__61464 + (1));
seq__61461 = G__61850;
chunk__61462 = G__61851;
count__61463 = G__61852;
i__61464 = G__61853;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61461);
if(temp__5735__auto__){
var seq__61461__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61461__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__61461__$1);
var G__61855 = cljs.core.chunk_rest(seq__61461__$1);
var G__61856 = c__4550__auto__;
var G__61857 = cljs.core.count(c__4550__auto__);
var G__61858 = (0);
seq__61461 = G__61855;
chunk__61462 = G__61856;
count__61463 = G__61857;
i__61464 = G__61858;
continue;
} else {
var js_ns = cljs.core.first(seq__61461__$1);
var require_str_61859 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_61859);


var G__61860 = cljs.core.next(seq__61461__$1);
var G__61861 = null;
var G__61862 = (0);
var G__61863 = (0);
seq__61461 = G__61860;
chunk__61462 = G__61861;
count__61463 = G__61862;
i__61464 = G__61863;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__61486){
var map__61487 = p__61486;
var map__61487__$1 = (((((!((map__61487 == null))))?(((((map__61487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61487):map__61487);
var msg = map__61487__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61487__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61487__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61495(s__61496){
return (new cljs.core.LazySeq(null,(function (){
var s__61496__$1 = s__61496;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__61496__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__61502 = cljs.core.first(xs__6292__auto__);
var map__61502__$1 = (((((!((map__61502 == null))))?(((((map__61502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61502):map__61502);
var src = map__61502__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61502__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61502__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__61496__$1,map__61502,map__61502__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__61487,map__61487__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61495_$_iter__61497(s__61498){
return (new cljs.core.LazySeq(null,((function (s__61496__$1,map__61502,map__61502__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__61487,map__61487__$1,msg,info,reload_info){
return (function (){
var s__61498__$1 = s__61498;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__61498__$1);
if(temp__5735__auto____$1){
var s__61498__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__61498__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__61498__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__61500 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__61499 = (0);
while(true){
if((i__61499 < size__4522__auto__)){
var warning = cljs.core._nth(c__4521__auto__,i__61499);
cljs.core.chunk_append(b__61500,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__61874 = (i__61499 + (1));
i__61499 = G__61874;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61500),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61495_$_iter__61497(cljs.core.chunk_rest(s__61498__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61500),null);
}
} else {
var warning = cljs.core.first(s__61498__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61495_$_iter__61497(cljs.core.rest(s__61498__$2)));
}
} else {
return null;
}
break;
}
});})(s__61496__$1,map__61502,map__61502__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__61487,map__61487__$1,msg,info,reload_info))
,null,null));
});})(s__61496__$1,map__61502,map__61502__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__61487,map__61487__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__61495(cljs.core.rest(s__61496__$1)));
} else {
var G__61876 = cljs.core.rest(s__61496__$1);
s__61496__$1 = G__61876;
continue;
}
} else {
var G__61877 = cljs.core.rest(s__61496__$1);
s__61496__$1 = G__61877;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__61515_61879 = cljs.core.seq(warnings);
var chunk__61516_61880 = null;
var count__61517_61881 = (0);
var i__61518_61882 = (0);
while(true){
if((i__61518_61882 < count__61517_61881)){
var map__61543_61883 = chunk__61516_61880.cljs$core$IIndexed$_nth$arity$2(null,i__61518_61882);
var map__61543_61884__$1 = (((((!((map__61543_61883 == null))))?(((((map__61543_61883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61543_61883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61543_61883):map__61543_61883);
var w_61885 = map__61543_61884__$1;
var msg_61886__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61543_61884__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_61887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61543_61884__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_61888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61543_61884__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_61889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61543_61884__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_61889)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_61887),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_61888),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_61886__$1)].join(''));


var G__61892 = seq__61515_61879;
var G__61893 = chunk__61516_61880;
var G__61894 = count__61517_61881;
var G__61895 = (i__61518_61882 + (1));
seq__61515_61879 = G__61892;
chunk__61516_61880 = G__61893;
count__61517_61881 = G__61894;
i__61518_61882 = G__61895;
continue;
} else {
var temp__5735__auto___61897 = cljs.core.seq(seq__61515_61879);
if(temp__5735__auto___61897){
var seq__61515_61898__$1 = temp__5735__auto___61897;
if(cljs.core.chunked_seq_QMARK_(seq__61515_61898__$1)){
var c__4550__auto___61899 = cljs.core.chunk_first(seq__61515_61898__$1);
var G__61900 = cljs.core.chunk_rest(seq__61515_61898__$1);
var G__61901 = c__4550__auto___61899;
var G__61902 = cljs.core.count(c__4550__auto___61899);
var G__61903 = (0);
seq__61515_61879 = G__61900;
chunk__61516_61880 = G__61901;
count__61517_61881 = G__61902;
i__61518_61882 = G__61903;
continue;
} else {
var map__61557_61904 = cljs.core.first(seq__61515_61898__$1);
var map__61557_61905__$1 = (((((!((map__61557_61904 == null))))?(((((map__61557_61904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61557_61904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61557_61904):map__61557_61904);
var w_61906 = map__61557_61905__$1;
var msg_61907__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61557_61905__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_61908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61557_61905__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_61909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61557_61905__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_61910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61557_61905__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_61910)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_61908),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_61909),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_61907__$1)].join(''));


var G__61915 = cljs.core.next(seq__61515_61898__$1);
var G__61916 = null;
var G__61917 = (0);
var G__61918 = (0);
seq__61515_61879 = G__61915;
chunk__61516_61880 = G__61916;
count__61517_61881 = G__61917;
i__61518_61882 = G__61918;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__61479_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__61479_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__61574){
var map__61575 = p__61574;
var map__61575__$1 = (((((!((map__61575 == null))))?(((((map__61575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61575):map__61575);
var msg = map__61575__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61575__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__61577 = cljs.core.seq(updates);
var chunk__61580 = null;
var count__61581 = (0);
var i__61582 = (0);
while(true){
if((i__61582 < count__61581)){
var path = chunk__61580.cljs$core$IIndexed$_nth$arity$2(null,i__61582);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__61653_61927 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__61657_61928 = null;
var count__61658_61929 = (0);
var i__61659_61930 = (0);
while(true){
if((i__61659_61930 < count__61658_61929)){
var node_61932 = chunk__61657_61928.cljs$core$IIndexed$_nth$arity$2(null,i__61659_61930);
if(cljs.core.not(node_61932.shadow$old)){
var path_match_61933 = shadow.cljs.devtools.client.browser.match_paths(node_61932.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61933)){
var new_link_61934 = (function (){var G__61686 = node_61932.cloneNode(true);
G__61686.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61933),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61686;
})();
(node_61932.shadow$old = true);

(new_link_61934.onload = ((function (seq__61653_61927,chunk__61657_61928,count__61658_61929,i__61659_61930,seq__61577,chunk__61580,count__61581,i__61582,new_link_61934,path_match_61933,node_61932,path,map__61575,map__61575__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_61932);
});})(seq__61653_61927,chunk__61657_61928,count__61658_61929,i__61659_61930,seq__61577,chunk__61580,count__61581,i__61582,new_link_61934,path_match_61933,node_61932,path,map__61575,map__61575__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61933], 0));

goog.dom.insertSiblingAfter(new_link_61934,node_61932);


var G__61939 = seq__61653_61927;
var G__61940 = chunk__61657_61928;
var G__61941 = count__61658_61929;
var G__61942 = (i__61659_61930 + (1));
seq__61653_61927 = G__61939;
chunk__61657_61928 = G__61940;
count__61658_61929 = G__61941;
i__61659_61930 = G__61942;
continue;
} else {
var G__61944 = seq__61653_61927;
var G__61945 = chunk__61657_61928;
var G__61946 = count__61658_61929;
var G__61947 = (i__61659_61930 + (1));
seq__61653_61927 = G__61944;
chunk__61657_61928 = G__61945;
count__61658_61929 = G__61946;
i__61659_61930 = G__61947;
continue;
}
} else {
var G__61950 = seq__61653_61927;
var G__61951 = chunk__61657_61928;
var G__61952 = count__61658_61929;
var G__61953 = (i__61659_61930 + (1));
seq__61653_61927 = G__61950;
chunk__61657_61928 = G__61951;
count__61658_61929 = G__61952;
i__61659_61930 = G__61953;
continue;
}
} else {
var temp__5735__auto___61954 = cljs.core.seq(seq__61653_61927);
if(temp__5735__auto___61954){
var seq__61653_61955__$1 = temp__5735__auto___61954;
if(cljs.core.chunked_seq_QMARK_(seq__61653_61955__$1)){
var c__4550__auto___61956 = cljs.core.chunk_first(seq__61653_61955__$1);
var G__61957 = cljs.core.chunk_rest(seq__61653_61955__$1);
var G__61958 = c__4550__auto___61956;
var G__61959 = cljs.core.count(c__4550__auto___61956);
var G__61960 = (0);
seq__61653_61927 = G__61957;
chunk__61657_61928 = G__61958;
count__61658_61929 = G__61959;
i__61659_61930 = G__61960;
continue;
} else {
var node_61961 = cljs.core.first(seq__61653_61955__$1);
if(cljs.core.not(node_61961.shadow$old)){
var path_match_61962 = shadow.cljs.devtools.client.browser.match_paths(node_61961.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61962)){
var new_link_61964 = (function (){var G__61694 = node_61961.cloneNode(true);
G__61694.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61962),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61694;
})();
(node_61961.shadow$old = true);

(new_link_61964.onload = ((function (seq__61653_61927,chunk__61657_61928,count__61658_61929,i__61659_61930,seq__61577,chunk__61580,count__61581,i__61582,new_link_61964,path_match_61962,node_61961,seq__61653_61955__$1,temp__5735__auto___61954,path,map__61575,map__61575__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_61961);
});})(seq__61653_61927,chunk__61657_61928,count__61658_61929,i__61659_61930,seq__61577,chunk__61580,count__61581,i__61582,new_link_61964,path_match_61962,node_61961,seq__61653_61955__$1,temp__5735__auto___61954,path,map__61575,map__61575__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61962], 0));

goog.dom.insertSiblingAfter(new_link_61964,node_61961);


var G__61965 = cljs.core.next(seq__61653_61955__$1);
var G__61966 = null;
var G__61967 = (0);
var G__61968 = (0);
seq__61653_61927 = G__61965;
chunk__61657_61928 = G__61966;
count__61658_61929 = G__61967;
i__61659_61930 = G__61968;
continue;
} else {
var G__61970 = cljs.core.next(seq__61653_61955__$1);
var G__61971 = null;
var G__61972 = (0);
var G__61973 = (0);
seq__61653_61927 = G__61970;
chunk__61657_61928 = G__61971;
count__61658_61929 = G__61972;
i__61659_61930 = G__61973;
continue;
}
} else {
var G__61975 = cljs.core.next(seq__61653_61955__$1);
var G__61976 = null;
var G__61977 = (0);
var G__61978 = (0);
seq__61653_61927 = G__61975;
chunk__61657_61928 = G__61976;
count__61658_61929 = G__61977;
i__61659_61930 = G__61978;
continue;
}
}
} else {
}
}
break;
}


var G__61981 = seq__61577;
var G__61982 = chunk__61580;
var G__61983 = count__61581;
var G__61984 = (i__61582 + (1));
seq__61577 = G__61981;
chunk__61580 = G__61982;
count__61581 = G__61983;
i__61582 = G__61984;
continue;
} else {
var G__61985 = seq__61577;
var G__61986 = chunk__61580;
var G__61987 = count__61581;
var G__61988 = (i__61582 + (1));
seq__61577 = G__61985;
chunk__61580 = G__61986;
count__61581 = G__61987;
i__61582 = G__61988;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61577);
if(temp__5735__auto__){
var seq__61577__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61577__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__61577__$1);
var G__61989 = cljs.core.chunk_rest(seq__61577__$1);
var G__61990 = c__4550__auto__;
var G__61991 = cljs.core.count(c__4550__auto__);
var G__61992 = (0);
seq__61577 = G__61989;
chunk__61580 = G__61990;
count__61581 = G__61991;
i__61582 = G__61992;
continue;
} else {
var path = cljs.core.first(seq__61577__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__61695_61994 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__61699_61995 = null;
var count__61700_61996 = (0);
var i__61701_61997 = (0);
while(true){
if((i__61701_61997 < count__61700_61996)){
var node_62000 = chunk__61699_61995.cljs$core$IIndexed$_nth$arity$2(null,i__61701_61997);
if(cljs.core.not(node_62000.shadow$old)){
var path_match_62001 = shadow.cljs.devtools.client.browser.match_paths(node_62000.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62001)){
var new_link_62002 = (function (){var G__61717 = node_62000.cloneNode(true);
G__61717.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62001),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61717;
})();
(node_62000.shadow$old = true);

(new_link_62002.onload = ((function (seq__61695_61994,chunk__61699_61995,count__61700_61996,i__61701_61997,seq__61577,chunk__61580,count__61581,i__61582,new_link_62002,path_match_62001,node_62000,path,seq__61577__$1,temp__5735__auto__,map__61575,map__61575__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_62000);
});})(seq__61695_61994,chunk__61699_61995,count__61700_61996,i__61701_61997,seq__61577,chunk__61580,count__61581,i__61582,new_link_62002,path_match_62001,node_62000,path,seq__61577__$1,temp__5735__auto__,map__61575,map__61575__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62001], 0));

goog.dom.insertSiblingAfter(new_link_62002,node_62000);


var G__62007 = seq__61695_61994;
var G__62008 = chunk__61699_61995;
var G__62009 = count__61700_61996;
var G__62010 = (i__61701_61997 + (1));
seq__61695_61994 = G__62007;
chunk__61699_61995 = G__62008;
count__61700_61996 = G__62009;
i__61701_61997 = G__62010;
continue;
} else {
var G__62011 = seq__61695_61994;
var G__62012 = chunk__61699_61995;
var G__62013 = count__61700_61996;
var G__62014 = (i__61701_61997 + (1));
seq__61695_61994 = G__62011;
chunk__61699_61995 = G__62012;
count__61700_61996 = G__62013;
i__61701_61997 = G__62014;
continue;
}
} else {
var G__62015 = seq__61695_61994;
var G__62016 = chunk__61699_61995;
var G__62017 = count__61700_61996;
var G__62018 = (i__61701_61997 + (1));
seq__61695_61994 = G__62015;
chunk__61699_61995 = G__62016;
count__61700_61996 = G__62017;
i__61701_61997 = G__62018;
continue;
}
} else {
var temp__5735__auto___62019__$1 = cljs.core.seq(seq__61695_61994);
if(temp__5735__auto___62019__$1){
var seq__61695_62021__$1 = temp__5735__auto___62019__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61695_62021__$1)){
var c__4550__auto___62023 = cljs.core.chunk_first(seq__61695_62021__$1);
var G__62024 = cljs.core.chunk_rest(seq__61695_62021__$1);
var G__62025 = c__4550__auto___62023;
var G__62026 = cljs.core.count(c__4550__auto___62023);
var G__62027 = (0);
seq__61695_61994 = G__62024;
chunk__61699_61995 = G__62025;
count__61700_61996 = G__62026;
i__61701_61997 = G__62027;
continue;
} else {
var node_62028 = cljs.core.first(seq__61695_62021__$1);
if(cljs.core.not(node_62028.shadow$old)){
var path_match_62029 = shadow.cljs.devtools.client.browser.match_paths(node_62028.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62029)){
var new_link_62030 = (function (){var G__61722 = node_62028.cloneNode(true);
G__61722.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62029),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61722;
})();
(node_62028.shadow$old = true);

(new_link_62030.onload = ((function (seq__61695_61994,chunk__61699_61995,count__61700_61996,i__61701_61997,seq__61577,chunk__61580,count__61581,i__61582,new_link_62030,path_match_62029,node_62028,seq__61695_62021__$1,temp__5735__auto___62019__$1,path,seq__61577__$1,temp__5735__auto__,map__61575,map__61575__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_62028);
});})(seq__61695_61994,chunk__61699_61995,count__61700_61996,i__61701_61997,seq__61577,chunk__61580,count__61581,i__61582,new_link_62030,path_match_62029,node_62028,seq__61695_62021__$1,temp__5735__auto___62019__$1,path,seq__61577__$1,temp__5735__auto__,map__61575,map__61575__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62029], 0));

goog.dom.insertSiblingAfter(new_link_62030,node_62028);


var G__62031 = cljs.core.next(seq__61695_62021__$1);
var G__62032 = null;
var G__62033 = (0);
var G__62034 = (0);
seq__61695_61994 = G__62031;
chunk__61699_61995 = G__62032;
count__61700_61996 = G__62033;
i__61701_61997 = G__62034;
continue;
} else {
var G__62035 = cljs.core.next(seq__61695_62021__$1);
var G__62036 = null;
var G__62037 = (0);
var G__62038 = (0);
seq__61695_61994 = G__62035;
chunk__61699_61995 = G__62036;
count__61700_61996 = G__62037;
i__61701_61997 = G__62038;
continue;
}
} else {
var G__62040 = cljs.core.next(seq__61695_62021__$1);
var G__62041 = null;
var G__62042 = (0);
var G__62043 = (0);
seq__61695_61994 = G__62040;
chunk__61699_61995 = G__62041;
count__61700_61996 = G__62042;
i__61701_61997 = G__62043;
continue;
}
}
} else {
}
}
break;
}


var G__62044 = cljs.core.next(seq__61577__$1);
var G__62045 = null;
var G__62046 = (0);
var G__62047 = (0);
seq__61577 = G__62044;
chunk__61580 = G__62045;
count__61581 = G__62046;
i__61582 = G__62047;
continue;
} else {
var G__62048 = cljs.core.next(seq__61577__$1);
var G__62049 = null;
var G__62050 = (0);
var G__62051 = (0);
seq__61577 = G__62048;
chunk__61580 = G__62049;
count__61581 = G__62050;
i__61582 = G__62051;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__61726){
var map__61728 = p__61726;
var map__61728__$1 = (((((!((map__61728 == null))))?(((((map__61728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61728):map__61728);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61728__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__61745){
var map__61747 = p__61745;
var map__61747__$1 = (((((!((map__61747 == null))))?(((((map__61747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61747):map__61747);
var _ = map__61747__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61747__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__61754,done,error){
var map__61755 = p__61754;
var map__61755__$1 = (((((!((map__61755 == null))))?(((((map__61755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61755):map__61755);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61755__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__61761,done,error){
var map__61762 = p__61761;
var map__61762__$1 = (((((!((map__61762 == null))))?(((((map__61762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61762):map__61762);
var msg = map__61762__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61762__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61762__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61762__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__61769){
var map__61771 = p__61769;
var map__61771__$1 = (((((!((map__61771 == null))))?(((((map__61771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61771):map__61771);
var src = map__61771__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61771__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4109__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4109__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4109__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__61773 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__61773) : done.call(null,G__61773));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__61777){
var map__61778 = p__61777;
var map__61778__$1 = (((((!((map__61778 == null))))?(((((map__61778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61778):map__61778);
var msg__$1 = map__61778__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61778__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e61783){var ex = e61783;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__61786){
var map__61788 = p__61786;
var map__61788__$1 = (((((!((map__61788 == null))))?(((((map__61788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61788):map__61788);
var env = map__61788__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61788__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__61794){
var map__61795 = p__61794;
var map__61795__$1 = (((((!((map__61795 == null))))?(((((map__61795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61795):map__61795);
var msg = map__61795__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61795__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__61802){
var map__61803 = p__61802;
var map__61803__$1 = (((((!((map__61803 == null))))?(((((map__61803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61803):map__61803);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61803__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61803__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__61809){
var map__61810 = p__61809;
var map__61810__$1 = (((((!((map__61810 == null))))?(((((map__61810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61810):map__61810);
var svc = map__61810__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61810__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
