goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65904 = arguments.length;
var i__4731__auto___65905 = (0);
while(true){
if((i__4731__auto___65905 < len__4730__auto___65904)){
args__4736__auto__.push((arguments[i__4731__auto___65905]));

var G__65906 = (i__4731__auto___65905 + (1));
i__4731__auto___65905 = G__65906;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq65437){
var G__65438 = cljs.core.first(seq65437);
var seq65437__$1 = cljs.core.next(seq65437);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65438,seq65437__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__65458 = cljs.core.seq(sources);
var chunk__65459 = null;
var count__65460 = (0);
var i__65461 = (0);
while(true){
if((i__65461 < count__65460)){
var map__65488 = chunk__65459.cljs$core$IIndexed$_nth$arity$2(null,i__65461);
var map__65488__$1 = (((((!((map__65488 == null))))?(((((map__65488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65488):map__65488);
var src = map__65488__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65488__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65488__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65488__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65488__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e65495){var e_65909 = e65495;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_65909);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_65909.message)].join('')));
}

var G__65911 = seq__65458;
var G__65912 = chunk__65459;
var G__65913 = count__65460;
var G__65914 = (i__65461 + (1));
seq__65458 = G__65911;
chunk__65459 = G__65912;
count__65460 = G__65913;
i__65461 = G__65914;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65458);
if(temp__5735__auto__){
var seq__65458__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65458__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__65458__$1);
var G__65915 = cljs.core.chunk_rest(seq__65458__$1);
var G__65916 = c__4550__auto__;
var G__65917 = cljs.core.count(c__4550__auto__);
var G__65918 = (0);
seq__65458 = G__65915;
chunk__65459 = G__65916;
count__65460 = G__65917;
i__65461 = G__65918;
continue;
} else {
var map__65502 = cljs.core.first(seq__65458__$1);
var map__65502__$1 = (((((!((map__65502 == null))))?(((((map__65502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65502):map__65502);
var src = map__65502__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65502__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65502__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65502__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65502__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e65508){var e_65919 = e65508;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_65919);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_65919.message)].join('')));
}

var G__65921 = cljs.core.next(seq__65458__$1);
var G__65922 = null;
var G__65923 = (0);
var G__65924 = (0);
seq__65458 = G__65921;
chunk__65459 = G__65922;
count__65460 = G__65923;
i__65461 = G__65924;
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
var seq__65526 = cljs.core.seq(js_requires);
var chunk__65527 = null;
var count__65528 = (0);
var i__65529 = (0);
while(true){
if((i__65529 < count__65528)){
var js_ns = chunk__65527.cljs$core$IIndexed$_nth$arity$2(null,i__65529);
var require_str_65927 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_65927);


var G__65929 = seq__65526;
var G__65930 = chunk__65527;
var G__65931 = count__65528;
var G__65932 = (i__65529 + (1));
seq__65526 = G__65929;
chunk__65527 = G__65930;
count__65528 = G__65931;
i__65529 = G__65932;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65526);
if(temp__5735__auto__){
var seq__65526__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65526__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__65526__$1);
var G__65933 = cljs.core.chunk_rest(seq__65526__$1);
var G__65934 = c__4550__auto__;
var G__65935 = cljs.core.count(c__4550__auto__);
var G__65936 = (0);
seq__65526 = G__65933;
chunk__65527 = G__65934;
count__65528 = G__65935;
i__65529 = G__65936;
continue;
} else {
var js_ns = cljs.core.first(seq__65526__$1);
var require_str_65937 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_65937);


var G__65938 = cljs.core.next(seq__65526__$1);
var G__65939 = null;
var G__65940 = (0);
var G__65941 = (0);
seq__65526 = G__65938;
chunk__65527 = G__65939;
count__65528 = G__65940;
i__65529 = G__65941;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__65537){
var map__65538 = p__65537;
var map__65538__$1 = (((((!((map__65538 == null))))?(((((map__65538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65538):map__65538);
var msg = map__65538__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65538__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65538__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65545(s__65546){
return (new cljs.core.LazySeq(null,(function (){
var s__65546__$1 = s__65546;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65546__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__65554 = cljs.core.first(xs__6292__auto__);
var map__65554__$1 = (((((!((map__65554 == null))))?(((((map__65554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65554):map__65554);
var src = map__65554__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65554__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65554__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__65546__$1,map__65554,map__65554__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__65538,map__65538__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65545_$_iter__65547(s__65548){
return (new cljs.core.LazySeq(null,((function (s__65546__$1,map__65554,map__65554__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__65538,map__65538__$1,msg,info,reload_info){
return (function (){
var s__65548__$1 = s__65548;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65548__$1);
if(temp__5735__auto____$1){
var s__65548__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65548__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__65548__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__65550 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__65549 = (0);
while(true){
if((i__65549 < size__4522__auto__)){
var warning = cljs.core._nth(c__4521__auto__,i__65549);
cljs.core.chunk_append(b__65550,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__65945 = (i__65549 + (1));
i__65549 = G__65945;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65550),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65545_$_iter__65547(cljs.core.chunk_rest(s__65548__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65550),null);
}
} else {
var warning = cljs.core.first(s__65548__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65545_$_iter__65547(cljs.core.rest(s__65548__$2)));
}
} else {
return null;
}
break;
}
});})(s__65546__$1,map__65554,map__65554__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__65538,map__65538__$1,msg,info,reload_info))
,null,null));
});})(s__65546__$1,map__65554,map__65554__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__65538,map__65538__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65545(cljs.core.rest(s__65546__$1)));
} else {
var G__65946 = cljs.core.rest(s__65546__$1);
s__65546__$1 = G__65946;
continue;
}
} else {
var G__65947 = cljs.core.rest(s__65546__$1);
s__65546__$1 = G__65947;
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
var seq__65580_65949 = cljs.core.seq(warnings);
var chunk__65582_65950 = null;
var count__65583_65951 = (0);
var i__65584_65952 = (0);
while(true){
if((i__65584_65952 < count__65583_65951)){
var map__65615_65953 = chunk__65582_65950.cljs$core$IIndexed$_nth$arity$2(null,i__65584_65952);
var map__65615_65954__$1 = (((((!((map__65615_65953 == null))))?(((((map__65615_65953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65615_65953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65615_65953):map__65615_65953);
var w_65955 = map__65615_65954__$1;
var msg_65956__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65615_65954__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_65957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65615_65954__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_65958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65615_65954__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_65959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65615_65954__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_65959)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_65957),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_65958),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_65956__$1)].join(''));


var G__65961 = seq__65580_65949;
var G__65962 = chunk__65582_65950;
var G__65963 = count__65583_65951;
var G__65964 = (i__65584_65952 + (1));
seq__65580_65949 = G__65961;
chunk__65582_65950 = G__65962;
count__65583_65951 = G__65963;
i__65584_65952 = G__65964;
continue;
} else {
var temp__5735__auto___65966 = cljs.core.seq(seq__65580_65949);
if(temp__5735__auto___65966){
var seq__65580_65967__$1 = temp__5735__auto___65966;
if(cljs.core.chunked_seq_QMARK_(seq__65580_65967__$1)){
var c__4550__auto___65968 = cljs.core.chunk_first(seq__65580_65967__$1);
var G__65969 = cljs.core.chunk_rest(seq__65580_65967__$1);
var G__65970 = c__4550__auto___65968;
var G__65971 = cljs.core.count(c__4550__auto___65968);
var G__65972 = (0);
seq__65580_65949 = G__65969;
chunk__65582_65950 = G__65970;
count__65583_65951 = G__65971;
i__65584_65952 = G__65972;
continue;
} else {
var map__65631_65973 = cljs.core.first(seq__65580_65967__$1);
var map__65631_65974__$1 = (((((!((map__65631_65973 == null))))?(((((map__65631_65973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65631_65973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65631_65973):map__65631_65973);
var w_65975 = map__65631_65974__$1;
var msg_65976__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65631_65974__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_65977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65631_65974__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_65978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65631_65974__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_65979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65631_65974__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_65979)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_65977),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_65978),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_65976__$1)].join(''));


var G__65981 = cljs.core.next(seq__65580_65967__$1);
var G__65982 = null;
var G__65983 = (0);
var G__65984 = (0);
seq__65580_65949 = G__65981;
chunk__65582_65950 = G__65982;
count__65583_65951 = G__65983;
i__65584_65952 = G__65984;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__65536_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__65536_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__65673){
var map__65674 = p__65673;
var map__65674__$1 = (((((!((map__65674 == null))))?(((((map__65674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65674):map__65674);
var msg = map__65674__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65674__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__65681 = cljs.core.seq(updates);
var chunk__65683 = null;
var count__65684 = (0);
var i__65685 = (0);
while(true){
if((i__65685 < count__65684)){
var path = chunk__65683.cljs$core$IIndexed$_nth$arity$2(null,i__65685);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__65770_65988 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__65774_65989 = null;
var count__65775_65990 = (0);
var i__65776_65991 = (0);
while(true){
if((i__65776_65991 < count__65775_65990)){
var node_65992 = chunk__65774_65989.cljs$core$IIndexed$_nth$arity$2(null,i__65776_65991);
if(cljs.core.not(node_65992.shadow$old)){
var path_match_65993 = shadow.cljs.devtools.client.browser.match_paths(node_65992.getAttribute("href"),path);
if(cljs.core.truth_(path_match_65993)){
var new_link_65994 = (function (){var G__65791 = node_65992.cloneNode(true);
G__65791.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_65993),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65791;
})();
(node_65992.shadow$old = true);

(new_link_65994.onload = ((function (seq__65770_65988,chunk__65774_65989,count__65775_65990,i__65776_65991,seq__65681,chunk__65683,count__65684,i__65685,new_link_65994,path_match_65993,node_65992,path,map__65674,map__65674__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_65992);
});})(seq__65770_65988,chunk__65774_65989,count__65775_65990,i__65776_65991,seq__65681,chunk__65683,count__65684,i__65685,new_link_65994,path_match_65993,node_65992,path,map__65674,map__65674__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_65993], 0));

goog.dom.insertSiblingAfter(new_link_65994,node_65992);


var G__65997 = seq__65770_65988;
var G__65998 = chunk__65774_65989;
var G__65999 = count__65775_65990;
var G__66000 = (i__65776_65991 + (1));
seq__65770_65988 = G__65997;
chunk__65774_65989 = G__65998;
count__65775_65990 = G__65999;
i__65776_65991 = G__66000;
continue;
} else {
var G__66001 = seq__65770_65988;
var G__66002 = chunk__65774_65989;
var G__66003 = count__65775_65990;
var G__66004 = (i__65776_65991 + (1));
seq__65770_65988 = G__66001;
chunk__65774_65989 = G__66002;
count__65775_65990 = G__66003;
i__65776_65991 = G__66004;
continue;
}
} else {
var G__66005 = seq__65770_65988;
var G__66006 = chunk__65774_65989;
var G__66007 = count__65775_65990;
var G__66008 = (i__65776_65991 + (1));
seq__65770_65988 = G__66005;
chunk__65774_65989 = G__66006;
count__65775_65990 = G__66007;
i__65776_65991 = G__66008;
continue;
}
} else {
var temp__5735__auto___66009 = cljs.core.seq(seq__65770_65988);
if(temp__5735__auto___66009){
var seq__65770_66010__$1 = temp__5735__auto___66009;
if(cljs.core.chunked_seq_QMARK_(seq__65770_66010__$1)){
var c__4550__auto___66011 = cljs.core.chunk_first(seq__65770_66010__$1);
var G__66012 = cljs.core.chunk_rest(seq__65770_66010__$1);
var G__66013 = c__4550__auto___66011;
var G__66014 = cljs.core.count(c__4550__auto___66011);
var G__66015 = (0);
seq__65770_65988 = G__66012;
chunk__65774_65989 = G__66013;
count__65775_65990 = G__66014;
i__65776_65991 = G__66015;
continue;
} else {
var node_66017 = cljs.core.first(seq__65770_66010__$1);
if(cljs.core.not(node_66017.shadow$old)){
var path_match_66019 = shadow.cljs.devtools.client.browser.match_paths(node_66017.getAttribute("href"),path);
if(cljs.core.truth_(path_match_66019)){
var new_link_66020 = (function (){var G__65797 = node_66017.cloneNode(true);
G__65797.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_66019),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65797;
})();
(node_66017.shadow$old = true);

(new_link_66020.onload = ((function (seq__65770_65988,chunk__65774_65989,count__65775_65990,i__65776_65991,seq__65681,chunk__65683,count__65684,i__65685,new_link_66020,path_match_66019,node_66017,seq__65770_66010__$1,temp__5735__auto___66009,path,map__65674,map__65674__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_66017);
});})(seq__65770_65988,chunk__65774_65989,count__65775_65990,i__65776_65991,seq__65681,chunk__65683,count__65684,i__65685,new_link_66020,path_match_66019,node_66017,seq__65770_66010__$1,temp__5735__auto___66009,path,map__65674,map__65674__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_66019], 0));

goog.dom.insertSiblingAfter(new_link_66020,node_66017);


var G__66021 = cljs.core.next(seq__65770_66010__$1);
var G__66022 = null;
var G__66023 = (0);
var G__66024 = (0);
seq__65770_65988 = G__66021;
chunk__65774_65989 = G__66022;
count__65775_65990 = G__66023;
i__65776_65991 = G__66024;
continue;
} else {
var G__66025 = cljs.core.next(seq__65770_66010__$1);
var G__66026 = null;
var G__66027 = (0);
var G__66028 = (0);
seq__65770_65988 = G__66025;
chunk__65774_65989 = G__66026;
count__65775_65990 = G__66027;
i__65776_65991 = G__66028;
continue;
}
} else {
var G__66029 = cljs.core.next(seq__65770_66010__$1);
var G__66030 = null;
var G__66031 = (0);
var G__66032 = (0);
seq__65770_65988 = G__66029;
chunk__65774_65989 = G__66030;
count__65775_65990 = G__66031;
i__65776_65991 = G__66032;
continue;
}
}
} else {
}
}
break;
}


var G__66033 = seq__65681;
var G__66034 = chunk__65683;
var G__66035 = count__65684;
var G__66036 = (i__65685 + (1));
seq__65681 = G__66033;
chunk__65683 = G__66034;
count__65684 = G__66035;
i__65685 = G__66036;
continue;
} else {
var G__66038 = seq__65681;
var G__66039 = chunk__65683;
var G__66040 = count__65684;
var G__66041 = (i__65685 + (1));
seq__65681 = G__66038;
chunk__65683 = G__66039;
count__65684 = G__66040;
i__65685 = G__66041;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65681);
if(temp__5735__auto__){
var seq__65681__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65681__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__65681__$1);
var G__66042 = cljs.core.chunk_rest(seq__65681__$1);
var G__66043 = c__4550__auto__;
var G__66044 = cljs.core.count(c__4550__auto__);
var G__66045 = (0);
seq__65681 = G__66042;
chunk__65683 = G__66043;
count__65684 = G__66044;
i__65685 = G__66045;
continue;
} else {
var path = cljs.core.first(seq__65681__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__65799_66046 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__65803_66047 = null;
var count__65804_66048 = (0);
var i__65805_66049 = (0);
while(true){
if((i__65805_66049 < count__65804_66048)){
var node_66050 = chunk__65803_66047.cljs$core$IIndexed$_nth$arity$2(null,i__65805_66049);
if(cljs.core.not(node_66050.shadow$old)){
var path_match_66051 = shadow.cljs.devtools.client.browser.match_paths(node_66050.getAttribute("href"),path);
if(cljs.core.truth_(path_match_66051)){
var new_link_66052 = (function (){var G__65816 = node_66050.cloneNode(true);
G__65816.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_66051),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65816;
})();
(node_66050.shadow$old = true);

(new_link_66052.onload = ((function (seq__65799_66046,chunk__65803_66047,count__65804_66048,i__65805_66049,seq__65681,chunk__65683,count__65684,i__65685,new_link_66052,path_match_66051,node_66050,path,seq__65681__$1,temp__5735__auto__,map__65674,map__65674__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_66050);
});})(seq__65799_66046,chunk__65803_66047,count__65804_66048,i__65805_66049,seq__65681,chunk__65683,count__65684,i__65685,new_link_66052,path_match_66051,node_66050,path,seq__65681__$1,temp__5735__auto__,map__65674,map__65674__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_66051], 0));

goog.dom.insertSiblingAfter(new_link_66052,node_66050);


var G__66055 = seq__65799_66046;
var G__66056 = chunk__65803_66047;
var G__66057 = count__65804_66048;
var G__66058 = (i__65805_66049 + (1));
seq__65799_66046 = G__66055;
chunk__65803_66047 = G__66056;
count__65804_66048 = G__66057;
i__65805_66049 = G__66058;
continue;
} else {
var G__66059 = seq__65799_66046;
var G__66060 = chunk__65803_66047;
var G__66061 = count__65804_66048;
var G__66062 = (i__65805_66049 + (1));
seq__65799_66046 = G__66059;
chunk__65803_66047 = G__66060;
count__65804_66048 = G__66061;
i__65805_66049 = G__66062;
continue;
}
} else {
var G__66063 = seq__65799_66046;
var G__66064 = chunk__65803_66047;
var G__66065 = count__65804_66048;
var G__66066 = (i__65805_66049 + (1));
seq__65799_66046 = G__66063;
chunk__65803_66047 = G__66064;
count__65804_66048 = G__66065;
i__65805_66049 = G__66066;
continue;
}
} else {
var temp__5735__auto___66067__$1 = cljs.core.seq(seq__65799_66046);
if(temp__5735__auto___66067__$1){
var seq__65799_66068__$1 = temp__5735__auto___66067__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65799_66068__$1)){
var c__4550__auto___66069 = cljs.core.chunk_first(seq__65799_66068__$1);
var G__66070 = cljs.core.chunk_rest(seq__65799_66068__$1);
var G__66071 = c__4550__auto___66069;
var G__66072 = cljs.core.count(c__4550__auto___66069);
var G__66073 = (0);
seq__65799_66046 = G__66070;
chunk__65803_66047 = G__66071;
count__65804_66048 = G__66072;
i__65805_66049 = G__66073;
continue;
} else {
var node_66074 = cljs.core.first(seq__65799_66068__$1);
if(cljs.core.not(node_66074.shadow$old)){
var path_match_66076 = shadow.cljs.devtools.client.browser.match_paths(node_66074.getAttribute("href"),path);
if(cljs.core.truth_(path_match_66076)){
var new_link_66077 = (function (){var G__65821 = node_66074.cloneNode(true);
G__65821.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_66076),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65821;
})();
(node_66074.shadow$old = true);

(new_link_66077.onload = ((function (seq__65799_66046,chunk__65803_66047,count__65804_66048,i__65805_66049,seq__65681,chunk__65683,count__65684,i__65685,new_link_66077,path_match_66076,node_66074,seq__65799_66068__$1,temp__5735__auto___66067__$1,path,seq__65681__$1,temp__5735__auto__,map__65674,map__65674__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_66074);
});})(seq__65799_66046,chunk__65803_66047,count__65804_66048,i__65805_66049,seq__65681,chunk__65683,count__65684,i__65685,new_link_66077,path_match_66076,node_66074,seq__65799_66068__$1,temp__5735__auto___66067__$1,path,seq__65681__$1,temp__5735__auto__,map__65674,map__65674__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_66076], 0));

goog.dom.insertSiblingAfter(new_link_66077,node_66074);


var G__66078 = cljs.core.next(seq__65799_66068__$1);
var G__66079 = null;
var G__66080 = (0);
var G__66081 = (0);
seq__65799_66046 = G__66078;
chunk__65803_66047 = G__66079;
count__65804_66048 = G__66080;
i__65805_66049 = G__66081;
continue;
} else {
var G__66082 = cljs.core.next(seq__65799_66068__$1);
var G__66083 = null;
var G__66084 = (0);
var G__66085 = (0);
seq__65799_66046 = G__66082;
chunk__65803_66047 = G__66083;
count__65804_66048 = G__66084;
i__65805_66049 = G__66085;
continue;
}
} else {
var G__66087 = cljs.core.next(seq__65799_66068__$1);
var G__66088 = null;
var G__66089 = (0);
var G__66090 = (0);
seq__65799_66046 = G__66087;
chunk__65803_66047 = G__66088;
count__65804_66048 = G__66089;
i__65805_66049 = G__66090;
continue;
}
}
} else {
}
}
break;
}


var G__66092 = cljs.core.next(seq__65681__$1);
var G__66093 = null;
var G__66094 = (0);
var G__66095 = (0);
seq__65681 = G__66092;
chunk__65683 = G__66093;
count__65684 = G__66094;
i__65685 = G__66095;
continue;
} else {
var G__66096 = cljs.core.next(seq__65681__$1);
var G__66097 = null;
var G__66098 = (0);
var G__66099 = (0);
seq__65681 = G__66096;
chunk__65683 = G__66097;
count__65684 = G__66098;
i__65685 = G__66099;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__65822){
var map__65824 = p__65822;
var map__65824__$1 = (((((!((map__65824 == null))))?(((((map__65824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65824):map__65824);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65824__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__65830){
var map__65831 = p__65830;
var map__65831__$1 = (((((!((map__65831 == null))))?(((((map__65831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65831):map__65831);
var _ = map__65831__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65831__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__65836,done,error){
var map__65837 = p__65836;
var map__65837__$1 = (((((!((map__65837 == null))))?(((((map__65837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65837):map__65837);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65837__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__65842,done,error){
var map__65843 = p__65842;
var map__65843__$1 = (((((!((map__65843 == null))))?(((((map__65843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65843):map__65843);
var msg = map__65843__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65843__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65843__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65843__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__65856){
var map__65857 = p__65856;
var map__65857__$1 = (((((!((map__65857 == null))))?(((((map__65857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65857):map__65857);
var src = map__65857__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65857__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4109__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4109__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4109__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__65859 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__65859) : done.call(null,G__65859));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__65861){
var map__65862 = p__65861;
var map__65862__$1 = (((((!((map__65862 == null))))?(((((map__65862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65862):map__65862);
var msg__$1 = map__65862__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65862__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e65870){var ex = e65870;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__65876){
var map__65877 = p__65876;
var map__65877__$1 = (((((!((map__65877 == null))))?(((((map__65877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65877):map__65877);
var env = map__65877__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65877__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__65886){
var map__65888 = p__65886;
var map__65888__$1 = (((((!((map__65888 == null))))?(((((map__65888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65888):map__65888);
var msg = map__65888__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65888__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__65893){
var map__65894 = p__65893;
var map__65894__$1 = (((((!((map__65894 == null))))?(((((map__65894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65894):map__65894);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65894__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65894__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__65898){
var map__65899 = p__65898;
var map__65899__$1 = (((((!((map__65899 == null))))?(((((map__65899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65899):map__65899);
var svc = map__65899__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65899__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
