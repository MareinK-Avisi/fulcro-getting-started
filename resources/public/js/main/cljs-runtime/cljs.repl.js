goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__60570){
var map__60573 = p__60570;
var map__60573__$1 = (((((!((map__60573 == null))))?(((((map__60573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60573):map__60573);
var m = map__60573__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60573__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60573__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4120__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__60589_60996 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__60591_60997 = null;
var count__60592_60998 = (0);
var i__60593_60999 = (0);
while(true){
if((i__60593_60999 < count__60592_60998)){
var f_61000 = chunk__60591_60997.cljs$core$IIndexed$_nth$arity$2(null,i__60593_60999);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_61000], 0));


var G__61001 = seq__60589_60996;
var G__61002 = chunk__60591_60997;
var G__61003 = count__60592_60998;
var G__61004 = (i__60593_60999 + (1));
seq__60589_60996 = G__61001;
chunk__60591_60997 = G__61002;
count__60592_60998 = G__61003;
i__60593_60999 = G__61004;
continue;
} else {
var temp__5735__auto___61005 = cljs.core.seq(seq__60589_60996);
if(temp__5735__auto___61005){
var seq__60589_61006__$1 = temp__5735__auto___61005;
if(cljs.core.chunked_seq_QMARK_(seq__60589_61006__$1)){
var c__4550__auto___61008 = cljs.core.chunk_first(seq__60589_61006__$1);
var G__61011 = cljs.core.chunk_rest(seq__60589_61006__$1);
var G__61012 = c__4550__auto___61008;
var G__61013 = cljs.core.count(c__4550__auto___61008);
var G__61014 = (0);
seq__60589_60996 = G__61011;
chunk__60591_60997 = G__61012;
count__60592_60998 = G__61013;
i__60593_60999 = G__61014;
continue;
} else {
var f_61017 = cljs.core.first(seq__60589_61006__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_61017], 0));


var G__61018 = cljs.core.next(seq__60589_61006__$1);
var G__61019 = null;
var G__61020 = (0);
var G__61021 = (0);
seq__60589_60996 = G__61018;
chunk__60591_60997 = G__61019;
count__60592_60998 = G__61020;
i__60593_60999 = G__61021;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_61026 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4120__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_61026], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_61026)))?cljs.core.second(arglists_61026):arglists_61026)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__60625_61031 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__60626_61032 = null;
var count__60627_61033 = (0);
var i__60628_61034 = (0);
while(true){
if((i__60628_61034 < count__60627_61033)){
var vec__60663_61041 = chunk__60626_61032.cljs$core$IIndexed$_nth$arity$2(null,i__60628_61034);
var name_61042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60663_61041,(0),null);
var map__60666_61043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60663_61041,(1),null);
var map__60666_61045__$1 = (((((!((map__60666_61043 == null))))?(((((map__60666_61043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60666_61043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60666_61043):map__60666_61043);
var doc_61046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60666_61045__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_61047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60666_61045__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_61042], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_61047], 0));

if(cljs.core.truth_(doc_61046)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_61046], 0));
} else {
}


var G__61058 = seq__60625_61031;
var G__61059 = chunk__60626_61032;
var G__61060 = count__60627_61033;
var G__61061 = (i__60628_61034 + (1));
seq__60625_61031 = G__61058;
chunk__60626_61032 = G__61059;
count__60627_61033 = G__61060;
i__60628_61034 = G__61061;
continue;
} else {
var temp__5735__auto___61062 = cljs.core.seq(seq__60625_61031);
if(temp__5735__auto___61062){
var seq__60625_61063__$1 = temp__5735__auto___61062;
if(cljs.core.chunked_seq_QMARK_(seq__60625_61063__$1)){
var c__4550__auto___61065 = cljs.core.chunk_first(seq__60625_61063__$1);
var G__61069 = cljs.core.chunk_rest(seq__60625_61063__$1);
var G__61070 = c__4550__auto___61065;
var G__61071 = cljs.core.count(c__4550__auto___61065);
var G__61072 = (0);
seq__60625_61031 = G__61069;
chunk__60626_61032 = G__61070;
count__60627_61033 = G__61071;
i__60628_61034 = G__61072;
continue;
} else {
var vec__60685_61075 = cljs.core.first(seq__60625_61063__$1);
var name_61076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60685_61075,(0),null);
var map__60688_61077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60685_61075,(1),null);
var map__60688_61078__$1 = (((((!((map__60688_61077 == null))))?(((((map__60688_61077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60688_61077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60688_61077):map__60688_61077);
var doc_61079 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60688_61078__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_61080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60688_61078__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_61076], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_61080], 0));

if(cljs.core.truth_(doc_61079)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_61079], 0));
} else {
}


var G__61083 = cljs.core.next(seq__60625_61063__$1);
var G__61084 = null;
var G__61085 = (0);
var G__61086 = (0);
seq__60625_61031 = G__61083;
chunk__60626_61032 = G__61084;
count__60627_61033 = G__61085;
i__60628_61034 = G__61086;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__60707 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__60708 = null;
var count__60709 = (0);
var i__60710 = (0);
while(true){
if((i__60710 < count__60709)){
var role = chunk__60708.cljs$core$IIndexed$_nth$arity$2(null,i__60710);
var temp__5735__auto___61090__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___61090__$1)){
var spec_61091 = temp__5735__auto___61090__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_61091)], 0));
} else {
}


var G__61092 = seq__60707;
var G__61093 = chunk__60708;
var G__61094 = count__60709;
var G__61095 = (i__60710 + (1));
seq__60707 = G__61092;
chunk__60708 = G__61093;
count__60709 = G__61094;
i__60710 = G__61095;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__60707);
if(temp__5735__auto____$1){
var seq__60707__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__60707__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__60707__$1);
var G__61099 = cljs.core.chunk_rest(seq__60707__$1);
var G__61100 = c__4550__auto__;
var G__61101 = cljs.core.count(c__4550__auto__);
var G__61102 = (0);
seq__60707 = G__61099;
chunk__60708 = G__61100;
count__60709 = G__61101;
i__60710 = G__61102;
continue;
} else {
var role = cljs.core.first(seq__60707__$1);
var temp__5735__auto___61104__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___61104__$2)){
var spec_61105 = temp__5735__auto___61104__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_61105)], 0));
} else {
}


var G__61113 = cljs.core.next(seq__60707__$1);
var G__61114 = null;
var G__61115 = (0);
var G__61116 = (0);
seq__60707 = G__61113;
chunk__60708 = G__61114;
count__60709 = G__61115;
i__60710 = G__61116;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__61126 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__61127 = cljs.core.ex_cause(t);
via = G__61126;
t = G__61127;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__60789 = datafied_throwable;
var map__60789__$1 = (((((!((map__60789 == null))))?(((((map__60789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60789):map__60789);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60789__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60789__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60789__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__60790 = cljs.core.last(via);
var map__60790__$1 = (((((!((map__60790 == null))))?(((((map__60790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60790):map__60790);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60790__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60790__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60790__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__60791 = data;
var map__60791__$1 = (((((!((map__60791 == null))))?(((((map__60791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60791):map__60791);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60791__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60791__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60791__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__60792 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__60792__$1 = (((((!((map__60792 == null))))?(((((map__60792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60792):map__60792);
var top_data = map__60792__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60792__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__60815 = phase;
var G__60815__$1 = (((G__60815 instanceof cljs.core.Keyword))?G__60815.fqn:null);
switch (G__60815__$1) {
case "read-source":
var map__60819 = data;
var map__60819__$1 = (((((!((map__60819 == null))))?(((((map__60819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60819):map__60819);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60819__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60819__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__60822 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__60822__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60822,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__60822);
var G__60822__$2 = (cljs.core.truth_((function (){var fexpr__60828 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__60828.cljs$core$IFn$_invoke$arity$1 ? fexpr__60828.cljs$core$IFn$_invoke$arity$1(source) : fexpr__60828.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60822__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__60822__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60822__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__60822__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__60832 = top_data;
var G__60832__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60832,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__60832);
var G__60832__$2 = (cljs.core.truth_((function (){var fexpr__60833 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__60833.cljs$core$IFn$_invoke$arity$1 ? fexpr__60833.cljs$core$IFn$_invoke$arity$1(source) : fexpr__60833.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60832__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__60832__$1);
var G__60832__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60832__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__60832__$2);
var G__60832__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60832__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__60832__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60832__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__60832__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__60849 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60849,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60849,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60849,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60849,(3),null);
var G__60856 = top_data;
var G__60856__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60856,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__60856);
var G__60856__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60856__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__60856__$1);
var G__60856__$3 = (cljs.core.truth_((function (){var and__4109__auto__ = source__$1;
if(cljs.core.truth_(and__4109__auto__)){
return method;
} else {
return and__4109__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60856__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__60856__$2);
var G__60856__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60856__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__60856__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60856__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__60856__$4;
}

break;
case "execution":
var vec__60867 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60867,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60867,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60867,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60867,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__60786_SHARP_){
var or__4120__auto__ = (p1__60786_SHARP_ == null);
if(or__4120__auto__){
return or__4120__auto__;
} else {
var fexpr__60874 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__60874.cljs$core$IFn$_invoke$arity$1 ? fexpr__60874.cljs$core$IFn$_invoke$arity$1(p1__60786_SHARP_) : fexpr__60874.call(null,p1__60786_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4120__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return line;
}
})();
var G__60877 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__60877__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60877,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__60877);
var G__60877__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60877__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__60877__$1);
var G__60877__$3 = (cljs.core.truth_((function (){var or__4120__auto__ = fn;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
var and__4109__auto__ = source__$1;
if(cljs.core.truth_(and__4109__auto__)){
return method;
} else {
return and__4109__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60877__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4120__auto__ = fn;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__60877__$2);
var G__60877__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60877__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__60877__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60877__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__60877__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60815__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__60896){
var map__60897 = p__60896;
var map__60897__$1 = (((((!((map__60897 == null))))?(((((map__60897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60897):map__60897);
var triage_data = map__60897__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60897__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60897__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60897__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60897__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60897__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60897__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60897__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60897__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4120__auto__ = source;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4120__auto__ = line;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4120__auto__ = class$;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__60910 = phase;
var G__60910__$1 = (((G__60910 instanceof cljs.core.Keyword))?G__60910.fqn:null);
switch (G__60910__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__60911 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__60912 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60913 = loc;
var G__60914 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60915_61243 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60916_61244 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60917_61245 = true;
var _STAR_print_fn_STAR__temp_val__60918_61246 = (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60917_61245);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60918_61246);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60881_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__60881_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60916_61244);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60915_61243);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__60911,G__60912,G__60913,G__60914) : format.call(null,G__60911,G__60912,G__60913,G__60914));

break;
case "macroexpansion":
var G__60924 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__60925 = cause_type;
var G__60926 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60927 = loc;
var G__60928 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60924,G__60925,G__60926,G__60927,G__60928) : format.call(null,G__60924,G__60925,G__60926,G__60927,G__60928));

break;
case "compile-syntax-check":
var G__60930 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__60931 = cause_type;
var G__60932 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60933 = loc;
var G__60934 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60930,G__60931,G__60932,G__60933,G__60934) : format.call(null,G__60930,G__60931,G__60932,G__60933,G__60934));

break;
case "compilation":
var G__60936 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__60937 = cause_type;
var G__60939 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60940 = loc;
var G__60941 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60936,G__60937,G__60939,G__60940,G__60941) : format.call(null,G__60936,G__60937,G__60939,G__60940,G__60941));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__60943 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__60944 = symbol;
var G__60945 = loc;
var G__60946 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60952_61271 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60953_61272 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60954_61273 = true;
var _STAR_print_fn_STAR__temp_val__60955_61274 = (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60954_61273);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60955_61274);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60892_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__60892_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60953_61272);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60952_61271);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__60943,G__60944,G__60945,G__60946) : format.call(null,G__60943,G__60944,G__60945,G__60946));
} else {
var G__60980 = "Execution error%s at %s(%s).\n%s\n";
var G__60981 = cause_type;
var G__60982 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60983 = loc;
var G__60984 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60980,G__60981,G__60982,G__60983,G__60984) : format.call(null,G__60980,G__60981,G__60982,G__60983,G__60984));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60910__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
