goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__55260){
var map__55262 = p__55260;
var map__55262__$1 = (((((!((map__55262 == null))))?(((((map__55262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55262):map__55262);
var m = map__55262__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55262__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55262__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__55269_55485 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55270_55486 = null;
var count__55271_55487 = (0);
var i__55272_55488 = (0);
while(true){
if((i__55272_55488 < count__55271_55487)){
var f_55489 = chunk__55270_55486.cljs$core$IIndexed$_nth$arity$2(null,i__55272_55488);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_55489], 0));


var G__55490 = seq__55269_55485;
var G__55491 = chunk__55270_55486;
var G__55492 = count__55271_55487;
var G__55493 = (i__55272_55488 + (1));
seq__55269_55485 = G__55490;
chunk__55270_55486 = G__55491;
count__55271_55487 = G__55492;
i__55272_55488 = G__55493;
continue;
} else {
var temp__5735__auto___55495 = cljs.core.seq(seq__55269_55485);
if(temp__5735__auto___55495){
var seq__55269_55497__$1 = temp__5735__auto___55495;
if(cljs.core.chunked_seq_QMARK_(seq__55269_55497__$1)){
var c__4550__auto___55499 = cljs.core.chunk_first(seq__55269_55497__$1);
var G__55500 = cljs.core.chunk_rest(seq__55269_55497__$1);
var G__55501 = c__4550__auto___55499;
var G__55502 = cljs.core.count(c__4550__auto___55499);
var G__55503 = (0);
seq__55269_55485 = G__55500;
chunk__55270_55486 = G__55501;
count__55271_55487 = G__55502;
i__55272_55488 = G__55503;
continue;
} else {
var f_55504 = cljs.core.first(seq__55269_55497__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_55504], 0));


var G__55505 = cljs.core.next(seq__55269_55497__$1);
var G__55506 = null;
var G__55507 = (0);
var G__55508 = (0);
seq__55269_55485 = G__55505;
chunk__55270_55486 = G__55506;
count__55271_55487 = G__55507;
i__55272_55488 = G__55508;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_55509 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4120__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_55509], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_55509)))?cljs.core.second(arglists_55509):arglists_55509)], 0));
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
var seq__55289_55513 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55290_55514 = null;
var count__55291_55515 = (0);
var i__55292_55516 = (0);
while(true){
if((i__55292_55516 < count__55291_55515)){
var vec__55306_55517 = chunk__55290_55514.cljs$core$IIndexed$_nth$arity$2(null,i__55292_55516);
var name_55518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55306_55517,(0),null);
var map__55309_55519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55306_55517,(1),null);
var map__55309_55520__$1 = (((((!((map__55309_55519 == null))))?(((((map__55309_55519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55309_55519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55309_55519):map__55309_55519);
var doc_55521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55309_55520__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_55522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55309_55520__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_55518], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_55522], 0));

if(cljs.core.truth_(doc_55521)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_55521], 0));
} else {
}


var G__55525 = seq__55289_55513;
var G__55526 = chunk__55290_55514;
var G__55527 = count__55291_55515;
var G__55528 = (i__55292_55516 + (1));
seq__55289_55513 = G__55525;
chunk__55290_55514 = G__55526;
count__55291_55515 = G__55527;
i__55292_55516 = G__55528;
continue;
} else {
var temp__5735__auto___55529 = cljs.core.seq(seq__55289_55513);
if(temp__5735__auto___55529){
var seq__55289_55530__$1 = temp__5735__auto___55529;
if(cljs.core.chunked_seq_QMARK_(seq__55289_55530__$1)){
var c__4550__auto___55531 = cljs.core.chunk_first(seq__55289_55530__$1);
var G__55532 = cljs.core.chunk_rest(seq__55289_55530__$1);
var G__55533 = c__4550__auto___55531;
var G__55534 = cljs.core.count(c__4550__auto___55531);
var G__55535 = (0);
seq__55289_55513 = G__55532;
chunk__55290_55514 = G__55533;
count__55291_55515 = G__55534;
i__55292_55516 = G__55535;
continue;
} else {
var vec__55313_55536 = cljs.core.first(seq__55289_55530__$1);
var name_55537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55313_55536,(0),null);
var map__55316_55538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55313_55536,(1),null);
var map__55316_55539__$1 = (((((!((map__55316_55538 == null))))?(((((map__55316_55538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55316_55538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55316_55538):map__55316_55538);
var doc_55540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55316_55539__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_55541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55316_55539__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_55537], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_55541], 0));

if(cljs.core.truth_(doc_55540)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_55540], 0));
} else {
}


var G__55547 = cljs.core.next(seq__55289_55530__$1);
var G__55548 = null;
var G__55549 = (0);
var G__55550 = (0);
seq__55289_55513 = G__55547;
chunk__55290_55514 = G__55548;
count__55291_55515 = G__55549;
i__55292_55516 = G__55550;
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

var seq__55325 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__55326 = null;
var count__55327 = (0);
var i__55328 = (0);
while(true){
if((i__55328 < count__55327)){
var role = chunk__55326.cljs$core$IIndexed$_nth$arity$2(null,i__55328);
var temp__5735__auto___55552__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___55552__$1)){
var spec_55553 = temp__5735__auto___55552__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_55553)], 0));
} else {
}


var G__55554 = seq__55325;
var G__55555 = chunk__55326;
var G__55556 = count__55327;
var G__55557 = (i__55328 + (1));
seq__55325 = G__55554;
chunk__55326 = G__55555;
count__55327 = G__55556;
i__55328 = G__55557;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__55325);
if(temp__5735__auto____$1){
var seq__55325__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__55325__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__55325__$1);
var G__55558 = cljs.core.chunk_rest(seq__55325__$1);
var G__55559 = c__4550__auto__;
var G__55560 = cljs.core.count(c__4550__auto__);
var G__55561 = (0);
seq__55325 = G__55558;
chunk__55326 = G__55559;
count__55327 = G__55560;
i__55328 = G__55561;
continue;
} else {
var role = cljs.core.first(seq__55325__$1);
var temp__5735__auto___55562__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___55562__$2)){
var spec_55563 = temp__5735__auto___55562__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_55563)], 0));
} else {
}


var G__55564 = cljs.core.next(seq__55325__$1);
var G__55565 = null;
var G__55566 = (0);
var G__55567 = (0);
seq__55325 = G__55564;
chunk__55326 = G__55565;
count__55327 = G__55566;
i__55328 = G__55567;
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
var G__55583 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__55584 = cljs.core.ex_cause(t);
via = G__55583;
t = G__55584;
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
var map__55366 = datafied_throwable;
var map__55366__$1 = (((((!((map__55366 == null))))?(((((map__55366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55366):map__55366);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55366__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55366__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55366__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__55367 = cljs.core.last(via);
var map__55367__$1 = (((((!((map__55367 == null))))?(((((map__55367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55367):map__55367);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55367__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55367__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55367__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__55368 = data;
var map__55368__$1 = (((((!((map__55368 == null))))?(((((map__55368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55368):map__55368);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55368__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55368__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55368__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__55369 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__55369__$1 = (((((!((map__55369 == null))))?(((((map__55369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55369):map__55369);
var top_data = map__55369__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55369__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__55380 = phase;
var G__55380__$1 = (((G__55380 instanceof cljs.core.Keyword))?G__55380.fqn:null);
switch (G__55380__$1) {
case "read-source":
var map__55382 = data;
var map__55382__$1 = (((((!((map__55382 == null))))?(((((map__55382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55382):map__55382);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55382__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55382__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__55384 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__55384__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55384,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__55384);
var G__55384__$2 = (cljs.core.truth_((function (){var fexpr__55386 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__55386.cljs$core$IFn$_invoke$arity$1 ? fexpr__55386.cljs$core$IFn$_invoke$arity$1(source) : fexpr__55386.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__55384__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__55384__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55384__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__55384__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__55388 = top_data;
var G__55388__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55388,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__55388);
var G__55388__$2 = (cljs.core.truth_((function (){var fexpr__55389 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__55389.cljs$core$IFn$_invoke$arity$1 ? fexpr__55389.cljs$core$IFn$_invoke$arity$1(source) : fexpr__55389.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__55388__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__55388__$1);
var G__55388__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55388__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__55388__$2);
var G__55388__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55388__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__55388__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55388__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__55388__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__55394 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55394,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55394,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55394,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55394,(3),null);
var G__55399 = top_data;
var G__55399__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55399,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__55399);
var G__55399__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55399__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__55399__$1);
var G__55399__$3 = (cljs.core.truth_((function (){var and__4109__auto__ = source__$1;
if(cljs.core.truth_(and__4109__auto__)){
return method;
} else {
return and__4109__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55399__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__55399__$2);
var G__55399__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55399__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__55399__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55399__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__55399__$4;
}

break;
case "execution":
var vec__55403 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55403,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55403,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55403,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55403,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__55365_SHARP_){
var or__4120__auto__ = (p1__55365_SHARP_ == null);
if(or__4120__auto__){
return or__4120__auto__;
} else {
var fexpr__55409 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__55409.cljs$core$IFn$_invoke$arity$1 ? fexpr__55409.cljs$core$IFn$_invoke$arity$1(p1__55365_SHARP_) : fexpr__55409.call(null,p1__55365_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4120__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return line;
}
})();
var G__55412 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__55412__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55412,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__55412);
var G__55412__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55412__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__55412__$1);
var G__55412__$3 = (cljs.core.truth_((function (){var or__4120__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55412__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4120__auto__ = fn;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__55412__$2);
var G__55412__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55412__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__55412__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55412__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__55412__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55380__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__55421){
var map__55422 = p__55421;
var map__55422__$1 = (((((!((map__55422 == null))))?(((((map__55422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55422):map__55422);
var triage_data = map__55422__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55422__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55422__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55422__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55422__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55422__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55422__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55422__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55422__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__55429 = phase;
var G__55429__$1 = (((G__55429 instanceof cljs.core.Keyword))?G__55429.fqn:null);
switch (G__55429__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__55430 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__55431 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__55432 = loc;
var G__55433 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__55434_55658 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__55435_55659 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__55436_55660 = true;
var _STAR_print_fn_STAR__temp_val__55437_55661 = (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__55436_55660);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__55437_55661);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55416_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__55416_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__55435_55659);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__55434_55658);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__55430,G__55431,G__55432,G__55433) : format.call(null,G__55430,G__55431,G__55432,G__55433));

break;
case "macroexpansion":
var G__55444 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__55445 = cause_type;
var G__55446 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__55447 = loc;
var G__55448 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__55444,G__55445,G__55446,G__55447,G__55448) : format.call(null,G__55444,G__55445,G__55446,G__55447,G__55448));

break;
case "compile-syntax-check":
var G__55449 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__55450 = cause_type;
var G__55451 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__55452 = loc;
var G__55453 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__55449,G__55450,G__55451,G__55452,G__55453) : format.call(null,G__55449,G__55450,G__55451,G__55452,G__55453));

break;
case "compilation":
var G__55455 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__55456 = cause_type;
var G__55457 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__55458 = loc;
var G__55459 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__55455,G__55456,G__55457,G__55458,G__55459) : format.call(null,G__55455,G__55456,G__55457,G__55458,G__55459));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__55460 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__55461 = symbol;
var G__55462 = loc;
var G__55463 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__55464_55669 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__55465_55670 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__55466_55671 = true;
var _STAR_print_fn_STAR__temp_val__55467_55672 = (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__55466_55671);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__55467_55672);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55419_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__55419_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__55465_55670);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__55464_55669);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__55460,G__55461,G__55462,G__55463) : format.call(null,G__55460,G__55461,G__55462,G__55463));
} else {
var G__55470 = "Execution error%s at %s(%s).\n%s\n";
var G__55471 = cause_type;
var G__55472 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__55473 = loc;
var G__55474 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__55470,G__55471,G__55472,G__55473,G__55474) : format.call(null,G__55470,G__55471,G__55472,G__55473,G__55474));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55429__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
