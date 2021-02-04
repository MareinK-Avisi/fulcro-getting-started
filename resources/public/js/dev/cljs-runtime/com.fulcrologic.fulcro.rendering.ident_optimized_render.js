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
var map__58090 = app__$1;
var map__58090__$1 = (((((!((map__58090 == null))))?(((((map__58090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58090):map__58090);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58090__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
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
}),null)),null,-1773893933);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",com.fulcrologic.fulcro.components.class__GT_registry_key(com.fulcrologic.fulcro.components.react_type(c)),"queries for data that changed, but does not have an ident."], null);
}),null)),null,1961139529);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__58125 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__58126 = null;
var count__58127 = (0);
var i__58128 = (0);
while(true){
if((i__58128 < count__58127)){
var c = chunk__58126.cljs$core$IIndexed$_nth$arity$2(null,i__58128);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__58583 = seq__58125;
var G__58584 = chunk__58126;
var G__58585 = count__58127;
var G__58586 = (i__58128 + (1));
seq__58125 = G__58583;
chunk__58126 = G__58584;
count__58127 = G__58585;
i__58128 = G__58586;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58125);
if(temp__5735__auto__){
var seq__58125__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58125__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58125__$1);
var G__58587 = cljs.core.chunk_rest(seq__58125__$1);
var G__58588 = c__4550__auto__;
var G__58589 = cljs.core.count(c__4550__auto__);
var G__58590 = (0);
seq__58125 = G__58587;
chunk__58126 = G__58588;
count__58127 = G__58589;
i__58128 = G__58590;
continue;
} else {
var c = cljs.core.first(seq__58125__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__58593 = cljs.core.next(seq__58125__$1);
var G__58594 = null;
var G__58595 = (0);
var G__58596 = (0);
seq__58125 = G__58593;
chunk__58126 = G__58594;
count__58127 = G__58595;
i__58128 = G__58596;
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

var map__58147 = app__$1;
var map__58147__$1 = (((((!((map__58147 == null))))?(((((map__58147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58147):map__58147);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58147__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__58148 = cljs.core.deref(runtime_atom);
var map__58148__$1 = (((((!((map__58148 == null))))?(((((map__58148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58148):map__58148);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58148__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__58149 = indexes;
var map__58149__$1 = (((((!((map__58149 == null))))?(((((map__58149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58149):map__58149);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58149__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58149__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58149__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
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
var seq__58190 = cljs.core.seq(classes);
var chunk__58191 = null;
var count__58192 = (0);
var i__58193 = (0);
while(true){
if((i__58193 < count__58192)){
var class$ = chunk__58191.cljs$core$IIndexed$_nth$arity$2(null,i__58193);
var seq__58311_58601 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__58313_58602 = null;
var count__58314_58603 = (0);
var i__58315_58604 = (0);
while(true){
if((i__58315_58604 < count__58314_58603)){
var component_58605 = chunk__58313_58602.cljs$core$IIndexed$_nth$arity$2(null,i__58315_58604);
var component_ident_58606 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_58605);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_58606,component_58605);


var G__58607 = seq__58311_58601;
var G__58608 = chunk__58313_58602;
var G__58609 = count__58314_58603;
var G__58610 = (i__58315_58604 + (1));
seq__58311_58601 = G__58607;
chunk__58313_58602 = G__58608;
count__58314_58603 = G__58609;
i__58315_58604 = G__58610;
continue;
} else {
var temp__5735__auto___58611 = cljs.core.seq(seq__58311_58601);
if(temp__5735__auto___58611){
var seq__58311_58612__$1 = temp__5735__auto___58611;
if(cljs.core.chunked_seq_QMARK_(seq__58311_58612__$1)){
var c__4550__auto___58613 = cljs.core.chunk_first(seq__58311_58612__$1);
var G__58615 = cljs.core.chunk_rest(seq__58311_58612__$1);
var G__58616 = c__4550__auto___58613;
var G__58617 = cljs.core.count(c__4550__auto___58613);
var G__58618 = (0);
seq__58311_58601 = G__58615;
chunk__58313_58602 = G__58616;
count__58314_58603 = G__58617;
i__58315_58604 = G__58618;
continue;
} else {
var component_58620 = cljs.core.first(seq__58311_58612__$1);
var component_ident_58621 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_58620);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_58621,component_58620);


var G__58622 = cljs.core.next(seq__58311_58612__$1);
var G__58623 = null;
var G__58624 = (0);
var G__58625 = (0);
seq__58311_58601 = G__58622;
chunk__58313_58602 = G__58623;
count__58314_58603 = G__58624;
i__58315_58604 = G__58625;
continue;
}
} else {
}
}
break;
}


var G__58626 = seq__58190;
var G__58627 = chunk__58191;
var G__58628 = count__58192;
var G__58629 = (i__58193 + (1));
seq__58190 = G__58626;
chunk__58191 = G__58627;
count__58192 = G__58628;
i__58193 = G__58629;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58190);
if(temp__5735__auto__){
var seq__58190__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58190__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58190__$1);
var G__58633 = cljs.core.chunk_rest(seq__58190__$1);
var G__58634 = c__4550__auto__;
var G__58635 = cljs.core.count(c__4550__auto__);
var G__58636 = (0);
seq__58190 = G__58633;
chunk__58191 = G__58634;
count__58192 = G__58635;
i__58193 = G__58636;
continue;
} else {
var class$ = cljs.core.first(seq__58190__$1);
var seq__58361_58640 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__58363_58641 = null;
var count__58364_58642 = (0);
var i__58365_58643 = (0);
while(true){
if((i__58365_58643 < count__58364_58642)){
var component_58645 = chunk__58363_58641.cljs$core$IIndexed$_nth$arity$2(null,i__58365_58643);
var component_ident_58647 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_58645);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_58647,component_58645);


var G__58648 = seq__58361_58640;
var G__58649 = chunk__58363_58641;
var G__58650 = count__58364_58642;
var G__58651 = (i__58365_58643 + (1));
seq__58361_58640 = G__58648;
chunk__58363_58641 = G__58649;
count__58364_58642 = G__58650;
i__58365_58643 = G__58651;
continue;
} else {
var temp__5735__auto___58653__$1 = cljs.core.seq(seq__58361_58640);
if(temp__5735__auto___58653__$1){
var seq__58361_58654__$1 = temp__5735__auto___58653__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58361_58654__$1)){
var c__4550__auto___58655 = cljs.core.chunk_first(seq__58361_58654__$1);
var G__58656 = cljs.core.chunk_rest(seq__58361_58654__$1);
var G__58657 = c__4550__auto___58655;
var G__58658 = cljs.core.count(c__4550__auto___58655);
var G__58659 = (0);
seq__58361_58640 = G__58656;
chunk__58363_58641 = G__58657;
count__58364_58642 = G__58658;
i__58365_58643 = G__58659;
continue;
} else {
var component_58660 = cljs.core.first(seq__58361_58654__$1);
var component_ident_58661 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_58660);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_58661,component_58660);


var G__58666 = cljs.core.next(seq__58361_58654__$1);
var G__58667 = null;
var G__58668 = (0);
var G__58669 = (0);
seq__58361_58640 = G__58666;
chunk__58363_58641 = G__58667;
count__58364_58642 = G__58668;
i__58365_58643 = G__58669;
continue;
}
} else {
}
}
break;
}


var G__58670 = cljs.core.next(seq__58190__$1);
var G__58671 = null;
var G__58672 = (0);
var G__58673 = (0);
seq__58190 = G__58670;
chunk__58191 = G__58671;
count__58192 = G__58672;
i__58193 = G__58673;
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
var map__58396 = app__$1;
var map__58396__$1 = (((((!((map__58396 == null))))?(((((map__58396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58396):map__58396);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58396__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__58397 = cljs.core.deref(runtime_atom);
var map__58397__$1 = (((((!((map__58397 == null))))?(((((map__58397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58397):map__58397);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58397__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__58398 = indexes;
var map__58398__$1 = (((((!((map__58398 == null))))?(((((map__58398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58398):map__58398);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58398__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58398__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__58389_SHARP_,p2__58390_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__58389_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__58390_SHARP_) : class__GT_components.call(null,p2__58390_SHARP_)));
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
var map__58438 = app__$1;
var map__58438__$1 = (((((!((map__58438 == null))))?(((((map__58438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58438):map__58438);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58438__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58438__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__58439 = cljs.core.deref(runtime_atom);
var map__58439__$1 = (((((!((map__58439 == null))))?(((((map__58439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58439):map__58439);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58439__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58439__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58439__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58439__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__58440 = indexes;
var map__58440__$1 = (((((!((map__58440 == null))))?(((((map__58440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58440):map__58440);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58440__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58440__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58440__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58440__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__58484 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__58484__$1 = (((((!((map__58484 == null))))?(((((map__58484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58484):map__58484);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58484__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58484__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__58496_58689 = cljs.core.seq(limited_to_render);
var chunk__58498_58690 = null;
var count__58499_58691 = (0);
var i__58500_58692 = (0);
while(true){
if((i__58500_58692 < count__58499_58691)){
var c_58695 = chunk__58498_58690.cljs$core$IIndexed$_nth$arity$2(null,i__58500_58692);
var ident_58696 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_58695);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_58696,c_58695);


var G__58697 = seq__58496_58689;
var G__58698 = chunk__58498_58690;
var G__58699 = count__58499_58691;
var G__58700 = (i__58500_58692 + (1));
seq__58496_58689 = G__58697;
chunk__58498_58690 = G__58698;
count__58499_58691 = G__58699;
i__58500_58692 = G__58700;
continue;
} else {
var temp__5735__auto___58703 = cljs.core.seq(seq__58496_58689);
if(temp__5735__auto___58703){
var seq__58496_58704__$1 = temp__5735__auto___58703;
if(cljs.core.chunked_seq_QMARK_(seq__58496_58704__$1)){
var c__4550__auto___58705 = cljs.core.chunk_first(seq__58496_58704__$1);
var G__58706 = cljs.core.chunk_rest(seq__58496_58704__$1);
var G__58707 = c__4550__auto___58705;
var G__58708 = cljs.core.count(c__4550__auto___58705);
var G__58709 = (0);
seq__58496_58689 = G__58706;
chunk__58498_58690 = G__58707;
count__58499_58691 = G__58708;
i__58500_58692 = G__58709;
continue;
} else {
var c_58711 = cljs.core.first(seq__58496_58704__$1);
var ident_58712 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_58711);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_58712,c_58711);


var G__58714 = cljs.core.next(seq__58496_58704__$1);
var G__58715 = null;
var G__58716 = (0);
var G__58717 = (0);
seq__58496_58689 = G__58714;
chunk__58498_58690 = G__58715;
count__58499_58691 = G__58716;
i__58500_58692 = G__58717;
continue;
}
} else {
}
}
break;
}

var seq__58511 = cljs.core.seq(limited_idents);
var chunk__58512 = null;
var count__58513 = (0);
var i__58514 = (0);
while(true){
if((i__58514 < count__58513)){
var i = chunk__58512.cljs$core$IIndexed$_nth$arity$2(null,i__58514);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__58720 = seq__58511;
var G__58721 = chunk__58512;
var G__58722 = count__58513;
var G__58723 = (i__58514 + (1));
seq__58511 = G__58720;
chunk__58512 = G__58721;
count__58513 = G__58722;
i__58514 = G__58723;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58511);
if(temp__5735__auto__){
var seq__58511__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58511__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58511__$1);
var G__58724 = cljs.core.chunk_rest(seq__58511__$1);
var G__58725 = c__4550__auto__;
var G__58726 = cljs.core.count(c__4550__auto__);
var G__58727 = (0);
seq__58511 = G__58724;
chunk__58512 = G__58725;
count__58513 = G__58726;
i__58514 = G__58727;
continue;
} else {
var i = cljs.core.first(seq__58511__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__58728 = cljs.core.next(seq__58511__$1);
var G__58729 = null;
var G__58730 = (0);
var G__58731 = (0);
seq__58511 = G__58728;
chunk__58512 = G__58729;
count__58513 = G__58730;
i__58514 = G__58731;
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
var map__58525 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__58525__$1 = (((((!((map__58525 == null))))?(((((map__58525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58525):map__58525);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58525__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58525__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__58530_58744 = cljs.core.seq(all_idents);
var chunk__58531_58745 = null;
var count__58532_58746 = (0);
var i__58533_58747 = (0);
while(true){
if((i__58533_58747 < count__58532_58746)){
var i_58749 = chunk__58531_58745.cljs$core$IIndexed$_nth$arity$2(null,i__58533_58747);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_58749);


var G__58751 = seq__58530_58744;
var G__58752 = chunk__58531_58745;
var G__58753 = count__58532_58746;
var G__58754 = (i__58533_58747 + (1));
seq__58530_58744 = G__58751;
chunk__58531_58745 = G__58752;
count__58532_58746 = G__58753;
i__58533_58747 = G__58754;
continue;
} else {
var temp__5735__auto___58755 = cljs.core.seq(seq__58530_58744);
if(temp__5735__auto___58755){
var seq__58530_58756__$1 = temp__5735__auto___58755;
if(cljs.core.chunked_seq_QMARK_(seq__58530_58756__$1)){
var c__4550__auto___58757 = cljs.core.chunk_first(seq__58530_58756__$1);
var G__58758 = cljs.core.chunk_rest(seq__58530_58756__$1);
var G__58759 = c__4550__auto___58757;
var G__58760 = cljs.core.count(c__4550__auto___58757);
var G__58761 = (0);
seq__58530_58744 = G__58758;
chunk__58531_58745 = G__58759;
count__58532_58746 = G__58760;
i__58533_58747 = G__58761;
continue;
} else {
var i_58762 = cljs.core.first(seq__58530_58756__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_58762);


var G__58763 = cljs.core.next(seq__58530_58756__$1);
var G__58764 = null;
var G__58765 = (0);
var G__58766 = (0);
seq__58530_58744 = G__58763;
chunk__58531_58745 = G__58764;
count__58532_58746 = G__58765;
i__58533_58747 = G__58766;
continue;
}
} else {
}
}
break;
}

var seq__58536 = cljs.core.seq(extra_to_force);
var chunk__58537 = null;
var count__58538 = (0);
var i__58539 = (0);
while(true){
if((i__58539 < count__58538)){
var c = chunk__58537.cljs$core$IIndexed$_nth$arity$2(null,i__58539);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__58770 = seq__58536;
var G__58771 = chunk__58537;
var G__58772 = count__58538;
var G__58773 = (i__58539 + (1));
seq__58536 = G__58770;
chunk__58537 = G__58771;
count__58538 = G__58772;
i__58539 = G__58773;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58536);
if(temp__5735__auto__){
var seq__58536__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58536__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58536__$1);
var G__58778 = cljs.core.chunk_rest(seq__58536__$1);
var G__58779 = c__4550__auto__;
var G__58780 = cljs.core.count(c__4550__auto__);
var G__58781 = (0);
seq__58536 = G__58778;
chunk__58537 = G__58779;
count__58538 = G__58780;
i__58539 = G__58781;
continue;
} else {
var c = cljs.core.first(seq__58536__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__58782 = cljs.core.next(seq__58536__$1);
var G__58783 = null;
var G__58784 = (0);
var G__58785 = (0);
seq__58536 = G__58782;
chunk__58537 = G__58783;
count__58538 = G__58784;
i__58539 = G__58785;
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
var G__58547 = arguments.length;
switch (G__58547) {
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

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__58550){
var map__58551 = p__58550;
var map__58551__$1 = (((((!((map__58551 == null))))?(((((map__58551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58551):map__58551);
var options = map__58551__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58551__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58551__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
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
}catch (e58553){var e = e58553;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,1695711138);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
