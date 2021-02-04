goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app__$1,ident,c){
if(cljs.core.truth_((function (){var and__4109__auto__ = c;
if(cljs.core.truth_(and__4109__auto__)){
return ident;
} else {
return and__4109__auto__;
}
})())){
var map__56745 = app__$1;
var map__56745__$1 = (((((!((map__56745 == null))))?(((((map__56745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56745):map__56745);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56745__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__4120__auto__ = com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = com.fulcrologic.fulcro.components.computed(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident),prior_computed);
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c)], null);
}),null)),null,-1161475724);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",com.fulcrologic.fulcro.components.class__GT_registry_key(com.fulcrologic.fulcro.components.react_type(c)),"queries for data that changed, but does not have an ident."], null);
}),null)),null,-1966114364);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__56765 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__56767 = null;
var count__56768 = (0);
var i__56769 = (0);
while(true){
if((i__56769 < count__56768)){
var c = chunk__56767.cljs$core$IIndexed$_nth$arity$2(null,i__56769);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__57024 = seq__56765;
var G__57025 = chunk__56767;
var G__57026 = count__56768;
var G__57027 = (i__56769 + (1));
seq__56765 = G__57024;
chunk__56767 = G__57025;
count__56768 = G__57026;
i__56769 = G__57027;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56765);
if(temp__5735__auto__){
var seq__56765__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56765__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56765__$1);
var G__57028 = cljs.core.chunk_rest(seq__56765__$1);
var G__57029 = c__4550__auto__;
var G__57030 = cljs.core.count(c__4550__auto__);
var G__57031 = (0);
seq__56765 = G__57028;
chunk__56767 = G__57029;
count__56768 = G__57030;
i__56769 = G__57031;
continue;
} else {
var c = cljs.core.first(seq__56765__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__57033 = cljs.core.next(seq__56765__$1);
var G__57034 = null;
var G__57035 = (0);
var G__57036 = (0);
seq__56765 = G__57033;
chunk__56767 = G__57034;
count__56768 = G__57035;
i__56769 = G__57036;
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
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app__$1,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,ident);

var map__56775 = app__$1;
var map__56775__$1 = (((((!((map__56775 == null))))?(((((map__56775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56775):map__56775);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56775__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__56776 = cljs.core.deref(runtime_atom);
var map__56776__$1 = (((((!((map__56776 == null))))?(((((map__56776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56776):map__56776);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56776__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__56777 = indexes;
var map__56777__$1 = (((((!((map__56777 == null))))?(((((map__56777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56777):map__56777);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56777__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56777__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56777__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__4120__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__56790 = cljs.core.seq(classes);
var chunk__56791 = null;
var count__56792 = (0);
var i__56793 = (0);
while(true){
if((i__56793 < count__56792)){
var class$ = chunk__56791.cljs$core$IIndexed$_nth$arity$2(null,i__56793);
var seq__56816_57054 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__56818_57055 = null;
var count__56819_57056 = (0);
var i__56820_57057 = (0);
while(true){
if((i__56820_57057 < count__56819_57056)){
var component_57058 = chunk__56818_57055.cljs$core$IIndexed$_nth$arity$2(null,i__56820_57057);
var component_ident_57061 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_57058);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_57061,component_57058);


var G__57062 = seq__56816_57054;
var G__57063 = chunk__56818_57055;
var G__57064 = count__56819_57056;
var G__57065 = (i__56820_57057 + (1));
seq__56816_57054 = G__57062;
chunk__56818_57055 = G__57063;
count__56819_57056 = G__57064;
i__56820_57057 = G__57065;
continue;
} else {
var temp__5735__auto___57070 = cljs.core.seq(seq__56816_57054);
if(temp__5735__auto___57070){
var seq__56816_57071__$1 = temp__5735__auto___57070;
if(cljs.core.chunked_seq_QMARK_(seq__56816_57071__$1)){
var c__4550__auto___57072 = cljs.core.chunk_first(seq__56816_57071__$1);
var G__57073 = cljs.core.chunk_rest(seq__56816_57071__$1);
var G__57074 = c__4550__auto___57072;
var G__57075 = cljs.core.count(c__4550__auto___57072);
var G__57076 = (0);
seq__56816_57054 = G__57073;
chunk__56818_57055 = G__57074;
count__56819_57056 = G__57075;
i__56820_57057 = G__57076;
continue;
} else {
var component_57078 = cljs.core.first(seq__56816_57071__$1);
var component_ident_57080 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_57078);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_57080,component_57078);


var G__57081 = cljs.core.next(seq__56816_57071__$1);
var G__57082 = null;
var G__57083 = (0);
var G__57084 = (0);
seq__56816_57054 = G__57081;
chunk__56818_57055 = G__57082;
count__56819_57056 = G__57083;
i__56820_57057 = G__57084;
continue;
}
} else {
}
}
break;
}


var G__57089 = seq__56790;
var G__57090 = chunk__56791;
var G__57091 = count__56792;
var G__57092 = (i__56793 + (1));
seq__56790 = G__57089;
chunk__56791 = G__57090;
count__56792 = G__57091;
i__56793 = G__57092;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56790);
if(temp__5735__auto__){
var seq__56790__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56790__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56790__$1);
var G__57094 = cljs.core.chunk_rest(seq__56790__$1);
var G__57095 = c__4550__auto__;
var G__57096 = cljs.core.count(c__4550__auto__);
var G__57097 = (0);
seq__56790 = G__57094;
chunk__56791 = G__57095;
count__56792 = G__57096;
i__56793 = G__57097;
continue;
} else {
var class$ = cljs.core.first(seq__56790__$1);
var seq__56833_57101 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__56835_57102 = null;
var count__56836_57103 = (0);
var i__56837_57104 = (0);
while(true){
if((i__56837_57104 < count__56836_57103)){
var component_57109 = chunk__56835_57102.cljs$core$IIndexed$_nth$arity$2(null,i__56837_57104);
var component_ident_57110 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_57109);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_57110,component_57109);


var G__57111 = seq__56833_57101;
var G__57112 = chunk__56835_57102;
var G__57113 = count__56836_57103;
var G__57114 = (i__56837_57104 + (1));
seq__56833_57101 = G__57111;
chunk__56835_57102 = G__57112;
count__56836_57103 = G__57113;
i__56837_57104 = G__57114;
continue;
} else {
var temp__5735__auto___57116__$1 = cljs.core.seq(seq__56833_57101);
if(temp__5735__auto___57116__$1){
var seq__56833_57119__$1 = temp__5735__auto___57116__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56833_57119__$1)){
var c__4550__auto___57120 = cljs.core.chunk_first(seq__56833_57119__$1);
var G__57121 = cljs.core.chunk_rest(seq__56833_57119__$1);
var G__57122 = c__4550__auto___57120;
var G__57123 = cljs.core.count(c__4550__auto___57120);
var G__57124 = (0);
seq__56833_57101 = G__57121;
chunk__56835_57102 = G__57122;
count__56836_57103 = G__57123;
i__56837_57104 = G__57124;
continue;
} else {
var component_57128 = cljs.core.first(seq__56833_57119__$1);
var component_ident_57131 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_57128);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_57131,component_57128);


var G__57133 = cljs.core.next(seq__56833_57119__$1);
var G__57134 = null;
var G__57135 = (0);
var G__57136 = (0);
seq__56833_57101 = G__57133;
chunk__56835_57102 = G__57134;
count__56836_57103 = G__57135;
i__56837_57104 = G__57136;
continue;
}
} else {
}
}
break;
}


var G__57139 = cljs.core.next(seq__56790__$1);
var G__57140 = null;
var G__57141 = (0);
var G__57142 = (0);
seq__56790 = G__57139;
chunk__56791 = G__57140;
count__56792 = G__57141;
i__56793 = G__57142;
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
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app__$1,property_set){
if(cljs.core.seq(property_set)){
var map__56868 = app__$1;
var map__56868__$1 = (((((!((map__56868 == null))))?(((((map__56868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56868):map__56868);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56868__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__56869 = cljs.core.deref(runtime_atom);
var map__56869__$1 = (((((!((map__56869 == null))))?(((((map__56869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56869):map__56869);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56869__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__56870 = indexes;
var map__56870__$1 = (((((!((map__56870 == null))))?(((((map__56870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56870):map__56870);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56870__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56870__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__56866_SHARP_,p2__56867_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__56866_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__56867_SHARP_) : class__GT_components.call(null,p2__56867_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app__$1){
var map__56888 = app__$1;
var map__56888__$1 = (((((!((map__56888 == null))))?(((((map__56888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56888):map__56888);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56888__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56888__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__56889 = cljs.core.deref(runtime_atom);
var map__56889__$1 = (((((!((map__56889 == null))))?(((((map__56889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56889):map__56889);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56889__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56889__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56889__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56889__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__56890 = indexes;
var map__56890__$1 = (((((!((map__56890 == null))))?(((((map__56890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56890):map__56890);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56890__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56890__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56890__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56890__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__56899 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__56899__$1 = (((((!((map__56899 == null))))?(((((map__56899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56899):map__56899);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56899__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56899__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__56904_57175 = cljs.core.seq(limited_to_render);
var chunk__56906_57176 = null;
var count__56907_57177 = (0);
var i__56908_57178 = (0);
while(true){
if((i__56908_57178 < count__56907_57177)){
var c_57181 = chunk__56906_57176.cljs$core$IIndexed$_nth$arity$2(null,i__56908_57178);
var ident_57182 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_57181);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_57182,c_57181);


var G__57183 = seq__56904_57175;
var G__57184 = chunk__56906_57176;
var G__57185 = count__56907_57177;
var G__57186 = (i__56908_57178 + (1));
seq__56904_57175 = G__57183;
chunk__56906_57176 = G__57184;
count__56907_57177 = G__57185;
i__56908_57178 = G__57186;
continue;
} else {
var temp__5735__auto___57189 = cljs.core.seq(seq__56904_57175);
if(temp__5735__auto___57189){
var seq__56904_57190__$1 = temp__5735__auto___57189;
if(cljs.core.chunked_seq_QMARK_(seq__56904_57190__$1)){
var c__4550__auto___57191 = cljs.core.chunk_first(seq__56904_57190__$1);
var G__57194 = cljs.core.chunk_rest(seq__56904_57190__$1);
var G__57195 = c__4550__auto___57191;
var G__57196 = cljs.core.count(c__4550__auto___57191);
var G__57197 = (0);
seq__56904_57175 = G__57194;
chunk__56906_57176 = G__57195;
count__56907_57177 = G__57196;
i__56908_57178 = G__57197;
continue;
} else {
var c_57200 = cljs.core.first(seq__56904_57190__$1);
var ident_57201 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_57200);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_57201,c_57200);


var G__57202 = cljs.core.next(seq__56904_57190__$1);
var G__57203 = null;
var G__57204 = (0);
var G__57205 = (0);
seq__56904_57175 = G__57202;
chunk__56906_57176 = G__57203;
count__56907_57177 = G__57204;
i__56908_57178 = G__57205;
continue;
}
} else {
}
}
break;
}

var seq__56920 = cljs.core.seq(limited_idents);
var chunk__56921 = null;
var count__56922 = (0);
var i__56923 = (0);
while(true){
if((i__56923 < count__56922)){
var i = chunk__56921.cljs$core$IIndexed$_nth$arity$2(null,i__56923);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__57208 = seq__56920;
var G__57209 = chunk__56921;
var G__57210 = count__56922;
var G__57211 = (i__56923 + (1));
seq__56920 = G__57208;
chunk__56921 = G__57209;
count__56922 = G__57210;
i__56923 = G__57211;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56920);
if(temp__5735__auto__){
var seq__56920__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56920__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56920__$1);
var G__57216 = cljs.core.chunk_rest(seq__56920__$1);
var G__57217 = c__4550__auto__;
var G__57218 = cljs.core.count(c__4550__auto__);
var G__57219 = (0);
seq__56920 = G__57216;
chunk__56921 = G__57217;
count__56922 = G__57218;
i__56923 = G__57219;
continue;
} else {
var i = cljs.core.first(seq__56920__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__57220 = cljs.core.next(seq__56920__$1);
var G__57221 = null;
var G__57222 = (0);
var G__57223 = (0);
seq__56920 = G__57220;
chunk__56921 = G__57221;
count__56922 = G__57222;
i__56923 = G__57223;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__4120__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__56946 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__56946__$1 = (((((!((map__56946 == null))))?(((((map__56946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56946):map__56946);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56946__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56946__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__56959_57232 = cljs.core.seq(all_idents);
var chunk__56960_57233 = null;
var count__56961_57234 = (0);
var i__56962_57235 = (0);
while(true){
if((i__56962_57235 < count__56961_57234)){
var i_57238 = chunk__56960_57233.cljs$core$IIndexed$_nth$arity$2(null,i__56962_57235);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_57238);


var G__57241 = seq__56959_57232;
var G__57242 = chunk__56960_57233;
var G__57243 = count__56961_57234;
var G__57244 = (i__56962_57235 + (1));
seq__56959_57232 = G__57241;
chunk__56960_57233 = G__57242;
count__56961_57234 = G__57243;
i__56962_57235 = G__57244;
continue;
} else {
var temp__5735__auto___57245 = cljs.core.seq(seq__56959_57232);
if(temp__5735__auto___57245){
var seq__56959_57246__$1 = temp__5735__auto___57245;
if(cljs.core.chunked_seq_QMARK_(seq__56959_57246__$1)){
var c__4550__auto___57247 = cljs.core.chunk_first(seq__56959_57246__$1);
var G__57248 = cljs.core.chunk_rest(seq__56959_57246__$1);
var G__57249 = c__4550__auto___57247;
var G__57250 = cljs.core.count(c__4550__auto___57247);
var G__57251 = (0);
seq__56959_57232 = G__57248;
chunk__56960_57233 = G__57249;
count__56961_57234 = G__57250;
i__56962_57235 = G__57251;
continue;
} else {
var i_57254 = cljs.core.first(seq__56959_57246__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_57254);


var G__57256 = cljs.core.next(seq__56959_57246__$1);
var G__57257 = null;
var G__57258 = (0);
var G__57259 = (0);
seq__56959_57232 = G__57256;
chunk__56960_57233 = G__57257;
count__56961_57234 = G__57258;
i__56962_57235 = G__57259;
continue;
}
} else {
}
}
break;
}

var seq__56978 = cljs.core.seq(extra_to_force);
var chunk__56979 = null;
var count__56980 = (0);
var i__56981 = (0);
while(true){
if((i__56981 < count__56980)){
var c = chunk__56979.cljs$core$IIndexed$_nth$arity$2(null,i__56981);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__57263 = seq__56978;
var G__57264 = chunk__56979;
var G__57265 = count__56980;
var G__57266 = (i__56981 + (1));
seq__56978 = G__57263;
chunk__56979 = G__57264;
count__56980 = G__57265;
i__56981 = G__57266;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56978);
if(temp__5735__auto__){
var seq__56978__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56978__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56978__$1);
var G__57267 = cljs.core.chunk_rest(seq__56978__$1);
var G__57268 = c__4550__auto__;
var G__57269 = cljs.core.count(c__4550__auto__);
var G__57270 = (0);
seq__56978 = G__57267;
chunk__56979 = G__57268;
count__56980 = G__57269;
i__56981 = G__57270;
continue;
} else {
var c = cljs.core.first(seq__56978__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__57273 = cljs.core.next(seq__56978__$1);
var G__57274 = null;
var G__57275 = (0);
var G__57276 = (0);
seq__56978 = G__57273;
chunk__56979 = G__57274;
count__56980 = G__57275;
i__56981 = G__57276;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__56997 = arguments.length;
switch (G__56997) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__56999){
var map__57000 = p__56999;
var map__57000__$1 = (((((!((map__57000 == null))))?(((((map__57000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57000):map__57000);
var options = map__57000__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57000__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57000__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4120__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e57006){var e = e57006;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,527829144);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
