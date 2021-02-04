goog.provide('com.fulcrologic.fulcro.dom');





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return React.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__61481){
var vec__61483 = p__61481;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61483,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61483,(1),null);
var pair = vec__61483;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__61490){
var vec__61492 = p__61490;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61492,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61492,(1),null);
var pair = vec__61492;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__61506){
var vec__61507 = p__61506;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61507,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61507,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__61510 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61510,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__61510;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return ReactDOM.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must make sure js/ReactDOMServer is defined (e.g. require cljsjs.react.dom.server) to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__61519 = arguments.length;
switch (G__61519) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return ReactDOM.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__61530 = component.refs;
var G__61530__$1 = (((G__61530 == null))?null:goog.object.get(G__61530,name));
if((G__61530__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__61530__$1);
}
}));

(com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2);

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return (function (props){
var temp__5733__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5733__auto__)){
var ref = temp__5733__auto__;
var G__61541 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__61542 = (function (){var G__61544 = r;
if((G__61544 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__61544);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__61542) : ref.call(null,G__61542));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__61541) : factory.call(null,G__61541));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
}
});
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__61556 = arguments.length;
switch (G__61556) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___64405 = arguments.length;
var i__4731__auto___64406 = (0);
while(true){
if((i__4731__auto___64406 < len__4730__auto___64405)){
args_arr__4751__auto__.push((arguments[i__4731__auto___64406]));

var G__64407 = (i__4731__auto___64406 + (1));
i__4731__auto___64406 = G__64407;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return React.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq61553){
var G__61554 = cljs.core.first(seq61553);
var seq61553__$1 = cljs.core.next(seq61553);
var G__61555 = cljs.core.first(seq61553__$1);
var seq61553__$2 = cljs.core.next(seq61553__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61554,G__61555,seq61553__$2);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2));

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return React.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = goog.object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = goog.object.get(next_props,"inputRef");
goog.object.extend(next_state,next_props,({"onChange": on_change}));

goog.object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
goog.object.remove(next_state,"inputRef");

goog.object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__4109__auto__ = tag;
if(cljs.core.truth_(and__4109__auto__)){
var G__61585 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__61585) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__61585));
} else {
return and__4109__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": goog.object.get(props,"inputRef")});
goog.object.extend(state,props,({"onChange": goog.bind(goog.object.get(this$,"onChange"),this$)}));

goog.object.remove(state,"inputRef");

return ({"cached-props": state});
})());

return React.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,React.Component);

var x61602_64414 = ctor.prototype;
(x61602_64414.onChange = (function (event){
var this$ = this;
var temp__5735__auto__ = goog.object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5735__auto__)){
var handler = temp__5735__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,goog.object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x61602_64414.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state","cached-props","value");
var this_node = ReactDOM.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__61597_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__61597_SHARP_);
})));
var element_value = goog.object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__4109__auto__ = state_value;
if(cljs.core.truth_(and__4109__auto__)){
var and__4109__auto____$1 = element_value;
if(cljs.core.truth_(and__4109__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__4109__auto____$1;
}
} else {
return and__4109__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements."], null);
}),null)),null,-1527710036);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,goog.object.get(new_props,"value"));
}
}));

(x61602_64414.render = (function (){
var this$ = this;
return React.createElement(element,goog.object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__64419__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.createElement,ctor,args);
};
var G__64419 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64420__i = 0, G__64420__a = new Array(arguments.length -  0);
while (G__64420__i < G__64420__a.length) {G__64420__a[G__64420__i] = arguments[G__64420__i + 0]; ++G__64420__i;}
  args = new cljs.core.IndexedSeq(G__64420__a,0,null);
} 
return G__64419__delegate.call(this,args);};
G__64419.cljs$lang$maxFixedArity = 0;
G__64419.cljs$lang$applyTo = (function (arglist__64421){
var args = cljs.core.seq(arglist__64421);
return G__64419__delegate(args);
});
G__64419.cljs$core$IFn$_invoke$arity$variadic = G__64419__delegate;
return G__64419;
})()
;
return (function() { 
var G__64422__delegate = function (props,children){
var t = goog.object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"input",props,children);
} else {
var temp__5733__auto__ = goog.object.get(props,"ref");
if(cljs.core.truth_(temp__5733__auto__)){
var r = temp__5733__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
goog.object.extend(p,props);

goog.object.set(p,"inputRef",r);

goog.object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__64422 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__64423__i = 0, G__64423__a = new Array(arguments.length -  1);
while (G__64423__i < G__64423__a.length) {G__64423__a[G__64423__i] = arguments[G__64423__i + 1]; ++G__64423__i;}
  children = new cljs.core.IndexedSeq(G__64423__a,0,null);
} 
return G__64422__delegate.call(this,props,children);};
G__64422.cljs$lang$maxFixedArity = 1;
G__64422.cljs$lang$applyTo = (function (arglist__64424){
var props = cljs.core.first(arglist__64424);
var children = cljs.core.rest(arglist__64424);
return G__64422__delegate(props,children);
});
G__64422.cljs$core$IFn$_invoke$arity$variadic = G__64422__delegate;
return G__64422;
})()
;
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__61629 = tag;
switch (G__61629) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61629)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__61635 = arguments.length;
switch (G__61635) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__61637 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__61638 = cljs.core.seq(vec__61637);
var first__61639 = cljs.core.first(seq__61638);
var seq__61638__$1 = cljs.core.next(seq__61638);
var head = first__61639;
var tail = seq__61638__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__61640 = (function (){var G__61641 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__61641,tail);

return G__61641;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__61640) : f.call(null,G__61640));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__61642 = (function (){var G__61644 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__61644,args);

return G__61644;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__61642) : f.call(null,G__61642));
} else {
if(cljs.core.object_QMARK_(head)){
var G__61646 = (function (){var G__61647 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__61647,tail);

return G__61647;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__61646) : f.call(null,G__61646));
} else {
if(cljs.core.map_QMARK_(head)){
var G__61649 = (function (){var G__61650 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__61650,tail);

return G__61650;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__61649) : f.call(null,G__61649));
} else {
var G__61651 = (function (){var G__61652 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__61652,args);

return G__61652;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__61651) : f.call(null,G__61651));

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__61668 = arguments.length;
switch (G__61668) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__61672 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__61673 = cljs.core.seq(vec__61672);
var first__61674 = cljs.core.first(seq__61673);
var seq__61673__$1 = cljs.core.next(seq__61673);
var head = first__61674;
var tail = seq__61673__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__61675 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__61675,tail);

return G__61675;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__61679 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__61679,args);

return G__61679;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__61680 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__61680,tail);

return G__61680;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__61681 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__61681,tail);

return G__61681;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__61682 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__61682,args);

return G__61682;
})());

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3);

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64428 = arguments.length;
var i__4731__auto___64429 = (0);
while(true){
if((i__4731__auto___64429 < len__4730__auto___64428)){
args__4736__auto__.push((arguments[i__4731__auto___64429]));

var G__64430 = (i__4731__auto___64429 + (1));
i__4731__auto___64429 = G__64430;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61713 = conformed_args__60079__auto__;
var map__61713__$1 = (((((!((map__61713 == null))))?(((((map__61713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61713):map__61713);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61713__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61713__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61713__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq61707){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61707));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64431 = arguments.length;
var i__4731__auto___64432 = (0);
while(true){
if((i__4731__auto___64432 < len__4730__auto___64431)){
args__4736__auto__.push((arguments[i__4731__auto___64432]));

var G__64433 = (i__4731__auto___64432 + (1));
i__4731__auto___64432 = G__64433;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61720 = conformed_args__60079__auto__;
var map__61720__$1 = (((((!((map__61720 == null))))?(((((map__61720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61720):map__61720);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61720__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61720__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61720__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq61716){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61716));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64441 = arguments.length;
var i__4731__auto___64442 = (0);
while(true){
if((i__4731__auto___64442 < len__4730__auto___64441)){
args__4736__auto__.push((arguments[i__4731__auto___64442]));

var G__64443 = (i__4731__auto___64442 + (1));
i__4731__auto___64442 = G__64443;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61727 = conformed_args__60079__auto__;
var map__61727__$1 = (((((!((map__61727 == null))))?(((((map__61727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61727):map__61727);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61727__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61727__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61727__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq61723){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61723));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64447 = arguments.length;
var i__4731__auto___64448 = (0);
while(true){
if((i__4731__auto___64448 < len__4730__auto___64447)){
args__4736__auto__.push((arguments[i__4731__auto___64448]));

var G__64449 = (i__4731__auto___64448 + (1));
i__4731__auto___64448 = G__64449;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61739 = conformed_args__60079__auto__;
var map__61739__$1 = (((((!((map__61739 == null))))?(((((map__61739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61739):map__61739);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61739__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61739__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61739__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq61736){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61736));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64454 = arguments.length;
var i__4731__auto___64456 = (0);
while(true){
if((i__4731__auto___64456 < len__4730__auto___64454)){
args__4736__auto__.push((arguments[i__4731__auto___64456]));

var G__64457 = (i__4731__auto___64456 + (1));
i__4731__auto___64456 = G__64457;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61749 = conformed_args__60079__auto__;
var map__61749__$1 = (((((!((map__61749 == null))))?(((((map__61749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61749):map__61749);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61749__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61749__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61749__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq61743){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61743));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64460 = arguments.length;
var i__4731__auto___64461 = (0);
while(true){
if((i__4731__auto___64461 < len__4730__auto___64460)){
args__4736__auto__.push((arguments[i__4731__auto___64461]));

var G__64462 = (i__4731__auto___64461 + (1));
i__4731__auto___64461 = G__64462;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61768 = conformed_args__60079__auto__;
var map__61768__$1 = (((((!((map__61768 == null))))?(((((map__61768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61768):map__61768);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61768__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61768__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61768__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq61760){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61760));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64469 = arguments.length;
var i__4731__auto___64470 = (0);
while(true){
if((i__4731__auto___64470 < len__4730__auto___64469)){
args__4736__auto__.push((arguments[i__4731__auto___64470]));

var G__64471 = (i__4731__auto___64470 + (1));
i__4731__auto___64470 = G__64471;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61784 = conformed_args__60079__auto__;
var map__61784__$1 = (((((!((map__61784 == null))))?(((((map__61784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61784):map__61784);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61784__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61784__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61784__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq61775){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61775));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64473 = arguments.length;
var i__4731__auto___64474 = (0);
while(true){
if((i__4731__auto___64474 < len__4730__auto___64473)){
args__4736__auto__.push((arguments[i__4731__auto___64474]));

var G__64476 = (i__4731__auto___64474 + (1));
i__4731__auto___64474 = G__64476;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61797 = conformed_args__60079__auto__;
var map__61797__$1 = (((((!((map__61797 == null))))?(((((map__61797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61797):map__61797);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61797__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61797__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61797__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq61791){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61791));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64481 = arguments.length;
var i__4731__auto___64482 = (0);
while(true){
if((i__4731__auto___64482 < len__4730__auto___64481)){
args__4736__auto__.push((arguments[i__4731__auto___64482]));

var G__64485 = (i__4731__auto___64482 + (1));
i__4731__auto___64482 = G__64485;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61805 = conformed_args__60079__auto__;
var map__61805__$1 = (((((!((map__61805 == null))))?(((((map__61805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61805):map__61805);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61805__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61805__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61805__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq61801){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61801));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64487 = arguments.length;
var i__4731__auto___64488 = (0);
while(true){
if((i__4731__auto___64488 < len__4730__auto___64487)){
args__4736__auto__.push((arguments[i__4731__auto___64488]));

var G__64489 = (i__4731__auto___64488 + (1));
i__4731__auto___64488 = G__64489;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61815 = conformed_args__60079__auto__;
var map__61815__$1 = (((((!((map__61815 == null))))?(((((map__61815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61815):map__61815);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61815__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61815__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61815__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq61812){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61812));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64490 = arguments.length;
var i__4731__auto___64491 = (0);
while(true){
if((i__4731__auto___64491 < len__4730__auto___64490)){
args__4736__auto__.push((arguments[i__4731__auto___64491]));

var G__64492 = (i__4731__auto___64491 + (1));
i__4731__auto___64491 = G__64492;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61829 = conformed_args__60079__auto__;
var map__61829__$1 = (((((!((map__61829 == null))))?(((((map__61829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61829):map__61829);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61829__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61829__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61829__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq61824){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61824));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64496 = arguments.length;
var i__4731__auto___64497 = (0);
while(true){
if((i__4731__auto___64497 < len__4730__auto___64496)){
args__4736__auto__.push((arguments[i__4731__auto___64497]));

var G__64498 = (i__4731__auto___64497 + (1));
i__4731__auto___64497 = G__64498;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61847 = conformed_args__60079__auto__;
var map__61847__$1 = (((((!((map__61847 == null))))?(((((map__61847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61847):map__61847);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61847__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61847__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61847__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq61840){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61840));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64499 = arguments.length;
var i__4731__auto___64500 = (0);
while(true){
if((i__4731__auto___64500 < len__4730__auto___64499)){
args__4736__auto__.push((arguments[i__4731__auto___64500]));

var G__64501 = (i__4731__auto___64500 + (1));
i__4731__auto___64500 = G__64501;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61868 = conformed_args__60079__auto__;
var map__61868__$1 = (((((!((map__61868 == null))))?(((((map__61868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61868):map__61868);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61868__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61868__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61868__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq61864){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61864));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64502 = arguments.length;
var i__4731__auto___64503 = (0);
while(true){
if((i__4731__auto___64503 < len__4730__auto___64502)){
args__4736__auto__.push((arguments[i__4731__auto___64503]));

var G__64504 = (i__4731__auto___64503 + (1));
i__4731__auto___64503 = G__64504;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61890 = conformed_args__60079__auto__;
var map__61890__$1 = (((((!((map__61890 == null))))?(((((map__61890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61890):map__61890);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61890__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61890__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61890__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq61875){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61875));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64508 = arguments.length;
var i__4731__auto___64509 = (0);
while(true){
if((i__4731__auto___64509 < len__4730__auto___64508)){
args__4736__auto__.push((arguments[i__4731__auto___64509]));

var G__64510 = (i__4731__auto___64509 + (1));
i__4731__auto___64509 = G__64510;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61919 = conformed_args__60079__auto__;
var map__61919__$1 = (((((!((map__61919 == null))))?(((((map__61919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61919):map__61919);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61919__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61919__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61919__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq61911){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61911));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64511 = arguments.length;
var i__4731__auto___64512 = (0);
while(true){
if((i__4731__auto___64512 < len__4730__auto___64511)){
args__4736__auto__.push((arguments[i__4731__auto___64512]));

var G__64513 = (i__4731__auto___64512 + (1));
i__4731__auto___64512 = G__64513;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61937 = conformed_args__60079__auto__;
var map__61937__$1 = (((((!((map__61937 == null))))?(((((map__61937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61937):map__61937);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61937__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61937__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61937__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq61924){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61924));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64516 = arguments.length;
var i__4731__auto___64517 = (0);
while(true){
if((i__4731__auto___64517 < len__4730__auto___64516)){
args__4736__auto__.push((arguments[i__4731__auto___64517]));

var G__64518 = (i__4731__auto___64517 + (1));
i__4731__auto___64517 = G__64518;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61974 = conformed_args__60079__auto__;
var map__61974__$1 = (((((!((map__61974 == null))))?(((((map__61974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61974):map__61974);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61974__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61974__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61974__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq61963){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61963));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64519 = arguments.length;
var i__4731__auto___64520 = (0);
while(true){
if((i__4731__auto___64520 < len__4730__auto___64519)){
args__4736__auto__.push((arguments[i__4731__auto___64520]));

var G__64521 = (i__4731__auto___64520 + (1));
i__4731__auto___64520 = G__64521;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62020 = conformed_args__60079__auto__;
var map__62020__$1 = (((((!((map__62020 == null))))?(((((map__62020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62020):map__62020);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62020__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62020__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62020__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq62003){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62003));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64522 = arguments.length;
var i__4731__auto___64523 = (0);
while(true){
if((i__4731__auto___64523 < len__4730__auto___64522)){
args__4736__auto__.push((arguments[i__4731__auto___64523]));

var G__64524 = (i__4731__auto___64523 + (1));
i__4731__auto___64523 = G__64524;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62054 = conformed_args__60079__auto__;
var map__62054__$1 = (((((!((map__62054 == null))))?(((((map__62054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62054):map__62054);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62054__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62054__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62054__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq62039){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62039));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64525 = arguments.length;
var i__4731__auto___64526 = (0);
while(true){
if((i__4731__auto___64526 < len__4730__auto___64525)){
args__4736__auto__.push((arguments[i__4731__auto___64526]));

var G__64527 = (i__4731__auto___64526 + (1));
i__4731__auto___64526 = G__64527;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62058 = conformed_args__60079__auto__;
var map__62058__$1 = (((((!((map__62058 == null))))?(((((map__62058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62058):map__62058);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62058__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62058__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62058__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq62056){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62056));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64528 = arguments.length;
var i__4731__auto___64529 = (0);
while(true){
if((i__4731__auto___64529 < len__4730__auto___64528)){
args__4736__auto__.push((arguments[i__4731__auto___64529]));

var G__64530 = (i__4731__auto___64529 + (1));
i__4731__auto___64529 = G__64530;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62067 = conformed_args__60079__auto__;
var map__62067__$1 = (((((!((map__62067 == null))))?(((((map__62067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62067):map__62067);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62067__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62067__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62067__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq62066){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62066));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64531 = arguments.length;
var i__4731__auto___64532 = (0);
while(true){
if((i__4731__auto___64532 < len__4730__auto___64531)){
args__4736__auto__.push((arguments[i__4731__auto___64532]));

var G__64533 = (i__4731__auto___64532 + (1));
i__4731__auto___64532 = G__64533;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62073 = conformed_args__60079__auto__;
var map__62073__$1 = (((((!((map__62073 == null))))?(((((map__62073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62073):map__62073);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62073__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62073__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62073__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq62072){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62072));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64534 = arguments.length;
var i__4731__auto___64535 = (0);
while(true){
if((i__4731__auto___64535 < len__4730__auto___64534)){
args__4736__auto__.push((arguments[i__4731__auto___64535]));

var G__64536 = (i__4731__auto___64535 + (1));
i__4731__auto___64535 = G__64536;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62082 = conformed_args__60079__auto__;
var map__62082__$1 = (((((!((map__62082 == null))))?(((((map__62082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62082):map__62082);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62082__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62082__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62082__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq62078){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62078));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64537 = arguments.length;
var i__4731__auto___64538 = (0);
while(true){
if((i__4731__auto___64538 < len__4730__auto___64537)){
args__4736__auto__.push((arguments[i__4731__auto___64538]));

var G__64539 = (i__4731__auto___64538 + (1));
i__4731__auto___64538 = G__64539;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62091 = conformed_args__60079__auto__;
var map__62091__$1 = (((((!((map__62091 == null))))?(((((map__62091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62091):map__62091);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62091__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62091__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62091__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq62087){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62087));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64540 = arguments.length;
var i__4731__auto___64541 = (0);
while(true){
if((i__4731__auto___64541 < len__4730__auto___64540)){
args__4736__auto__.push((arguments[i__4731__auto___64541]));

var G__64542 = (i__4731__auto___64541 + (1));
i__4731__auto___64541 = G__64542;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62097 = conformed_args__60079__auto__;
var map__62097__$1 = (((((!((map__62097 == null))))?(((((map__62097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62097):map__62097);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62097__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62097__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62097__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq62096){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62096));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64543 = arguments.length;
var i__4731__auto___64544 = (0);
while(true){
if((i__4731__auto___64544 < len__4730__auto___64543)){
args__4736__auto__.push((arguments[i__4731__auto___64544]));

var G__64545 = (i__4731__auto___64544 + (1));
i__4731__auto___64544 = G__64545;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62104 = conformed_args__60079__auto__;
var map__62104__$1 = (((((!((map__62104 == null))))?(((((map__62104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62104):map__62104);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62104__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62104__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62104__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq62102){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62102));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64546 = arguments.length;
var i__4731__auto___64547 = (0);
while(true){
if((i__4731__auto___64547 < len__4730__auto___64546)){
args__4736__auto__.push((arguments[i__4731__auto___64547]));

var G__64548 = (i__4731__auto___64547 + (1));
i__4731__auto___64547 = G__64548;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62113 = conformed_args__60079__auto__;
var map__62113__$1 = (((((!((map__62113 == null))))?(((((map__62113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62113):map__62113);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62113__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62113__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62113__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq62109){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62109));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64549 = arguments.length;
var i__4731__auto___64550 = (0);
while(true){
if((i__4731__auto___64550 < len__4730__auto___64549)){
args__4736__auto__.push((arguments[i__4731__auto___64550]));

var G__64551 = (i__4731__auto___64550 + (1));
i__4731__auto___64550 = G__64551;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62121 = conformed_args__60079__auto__;
var map__62121__$1 = (((((!((map__62121 == null))))?(((((map__62121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62121):map__62121);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62121__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62121__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62121__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq62118){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62118));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64552 = arguments.length;
var i__4731__auto___64553 = (0);
while(true){
if((i__4731__auto___64553 < len__4730__auto___64552)){
args__4736__auto__.push((arguments[i__4731__auto___64553]));

var G__64554 = (i__4731__auto___64553 + (1));
i__4731__auto___64553 = G__64554;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62136 = conformed_args__60079__auto__;
var map__62136__$1 = (((((!((map__62136 == null))))?(((((map__62136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62136):map__62136);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62136__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62136__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62136__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq62132){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62132));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64555 = arguments.length;
var i__4731__auto___64556 = (0);
while(true){
if((i__4731__auto___64556 < len__4730__auto___64555)){
args__4736__auto__.push((arguments[i__4731__auto___64556]));

var G__64557 = (i__4731__auto___64556 + (1));
i__4731__auto___64556 = G__64557;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62147 = conformed_args__60079__auto__;
var map__62147__$1 = (((((!((map__62147 == null))))?(((((map__62147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62147):map__62147);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62147__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62147__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62147__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq62143){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62143));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64558 = arguments.length;
var i__4731__auto___64559 = (0);
while(true){
if((i__4731__auto___64559 < len__4730__auto___64558)){
args__4736__auto__.push((arguments[i__4731__auto___64559]));

var G__64560 = (i__4731__auto___64559 + (1));
i__4731__auto___64559 = G__64560;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62155 = conformed_args__60079__auto__;
var map__62155__$1 = (((((!((map__62155 == null))))?(((((map__62155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62155):map__62155);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62155__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62155__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62155__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq62151){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62151));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64561 = arguments.length;
var i__4731__auto___64562 = (0);
while(true){
if((i__4731__auto___64562 < len__4730__auto___64561)){
args__4736__auto__.push((arguments[i__4731__auto___64562]));

var G__64563 = (i__4731__auto___64562 + (1));
i__4731__auto___64562 = G__64563;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62161 = conformed_args__60079__auto__;
var map__62161__$1 = (((((!((map__62161 == null))))?(((((map__62161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62161):map__62161);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62161__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62161__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62161__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq62158){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62158));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64564 = arguments.length;
var i__4731__auto___64565 = (0);
while(true){
if((i__4731__auto___64565 < len__4730__auto___64564)){
args__4736__auto__.push((arguments[i__4731__auto___64565]));

var G__64566 = (i__4731__auto___64565 + (1));
i__4731__auto___64565 = G__64566;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62170 = conformed_args__60079__auto__;
var map__62170__$1 = (((((!((map__62170 == null))))?(((((map__62170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62170):map__62170);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62170__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62170__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62170__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq62169){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62169));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64567 = arguments.length;
var i__4731__auto___64568 = (0);
while(true){
if((i__4731__auto___64568 < len__4730__auto___64567)){
args__4736__auto__.push((arguments[i__4731__auto___64568]));

var G__64569 = (i__4731__auto___64568 + (1));
i__4731__auto___64568 = G__64569;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62176 = conformed_args__60079__auto__;
var map__62176__$1 = (((((!((map__62176 == null))))?(((((map__62176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62176):map__62176);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62176__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62176__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62176__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq62172){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62172));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64570 = arguments.length;
var i__4731__auto___64571 = (0);
while(true){
if((i__4731__auto___64571 < len__4730__auto___64570)){
args__4736__auto__.push((arguments[i__4731__auto___64571]));

var G__64572 = (i__4731__auto___64571 + (1));
i__4731__auto___64571 = G__64572;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62183 = conformed_args__60079__auto__;
var map__62183__$1 = (((((!((map__62183 == null))))?(((((map__62183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62183):map__62183);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62183__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62183__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62183__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq62179){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62179));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64573 = arguments.length;
var i__4731__auto___64574 = (0);
while(true){
if((i__4731__auto___64574 < len__4730__auto___64573)){
args__4736__auto__.push((arguments[i__4731__auto___64574]));

var G__64575 = (i__4731__auto___64574 + (1));
i__4731__auto___64574 = G__64575;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62188 = conformed_args__60079__auto__;
var map__62188__$1 = (((((!((map__62188 == null))))?(((((map__62188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62188):map__62188);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62188__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62188__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62188__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq62187){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62187));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64576 = arguments.length;
var i__4731__auto___64577 = (0);
while(true){
if((i__4731__auto___64577 < len__4730__auto___64576)){
args__4736__auto__.push((arguments[i__4731__auto___64577]));

var G__64578 = (i__4731__auto___64577 + (1));
i__4731__auto___64577 = G__64578;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62194 = conformed_args__60079__auto__;
var map__62194__$1 = (((((!((map__62194 == null))))?(((((map__62194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62194):map__62194);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62194__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62194__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62194__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq62192){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62192));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64579 = arguments.length;
var i__4731__auto___64580 = (0);
while(true){
if((i__4731__auto___64580 < len__4730__auto___64579)){
args__4736__auto__.push((arguments[i__4731__auto___64580]));

var G__64581 = (i__4731__auto___64580 + (1));
i__4731__auto___64580 = G__64581;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62205 = conformed_args__60079__auto__;
var map__62205__$1 = (((((!((map__62205 == null))))?(((((map__62205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62205):map__62205);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62205__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62205__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62205__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq62203){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62203));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64582 = arguments.length;
var i__4731__auto___64583 = (0);
while(true){
if((i__4731__auto___64583 < len__4730__auto___64582)){
args__4736__auto__.push((arguments[i__4731__auto___64583]));

var G__64584 = (i__4731__auto___64583 + (1));
i__4731__auto___64583 = G__64584;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62213 = conformed_args__60079__auto__;
var map__62213__$1 = (((((!((map__62213 == null))))?(((((map__62213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62213):map__62213);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62213__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62213__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62213__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq62209){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62209));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64585 = arguments.length;
var i__4731__auto___64586 = (0);
while(true){
if((i__4731__auto___64586 < len__4730__auto___64585)){
args__4736__auto__.push((arguments[i__4731__auto___64586]));

var G__64587 = (i__4731__auto___64586 + (1));
i__4731__auto___64586 = G__64587;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62220 = conformed_args__60079__auto__;
var map__62220__$1 = (((((!((map__62220 == null))))?(((((map__62220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62220):map__62220);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62220__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62220__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62220__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq62219){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62219));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64588 = arguments.length;
var i__4731__auto___64589 = (0);
while(true){
if((i__4731__auto___64589 < len__4730__auto___64588)){
args__4736__auto__.push((arguments[i__4731__auto___64589]));

var G__64590 = (i__4731__auto___64589 + (1));
i__4731__auto___64589 = G__64590;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62227 = conformed_args__60079__auto__;
var map__62227__$1 = (((((!((map__62227 == null))))?(((((map__62227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62227):map__62227);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62227__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62227__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62227__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq62226){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62226));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64591 = arguments.length;
var i__4731__auto___64592 = (0);
while(true){
if((i__4731__auto___64592 < len__4730__auto___64591)){
args__4736__auto__.push((arguments[i__4731__auto___64592]));

var G__64593 = (i__4731__auto___64592 + (1));
i__4731__auto___64592 = G__64593;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62248 = conformed_args__60079__auto__;
var map__62248__$1 = (((((!((map__62248 == null))))?(((((map__62248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62248):map__62248);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62248__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62248__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62248__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq62245){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62245));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64594 = arguments.length;
var i__4731__auto___64595 = (0);
while(true){
if((i__4731__auto___64595 < len__4730__auto___64594)){
args__4736__auto__.push((arguments[i__4731__auto___64595]));

var G__64596 = (i__4731__auto___64595 + (1));
i__4731__auto___64595 = G__64596;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62255 = conformed_args__60079__auto__;
var map__62255__$1 = (((((!((map__62255 == null))))?(((((map__62255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62255):map__62255);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62255__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62255__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62255__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq62252){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62252));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64597 = arguments.length;
var i__4731__auto___64598 = (0);
while(true){
if((i__4731__auto___64598 < len__4730__auto___64597)){
args__4736__auto__.push((arguments[i__4731__auto___64598]));

var G__64599 = (i__4731__auto___64598 + (1));
i__4731__auto___64598 = G__64599;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62261 = conformed_args__60079__auto__;
var map__62261__$1 = (((((!((map__62261 == null))))?(((((map__62261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62261):map__62261);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62261__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62261__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62261__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq62259){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62259));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64600 = arguments.length;
var i__4731__auto___64601 = (0);
while(true){
if((i__4731__auto___64601 < len__4730__auto___64600)){
args__4736__auto__.push((arguments[i__4731__auto___64601]));

var G__64602 = (i__4731__auto___64601 + (1));
i__4731__auto___64601 = G__64602;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62268 = conformed_args__60079__auto__;
var map__62268__$1 = (((((!((map__62268 == null))))?(((((map__62268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62268):map__62268);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62268__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62268__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62268__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq62266){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62266));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64603 = arguments.length;
var i__4731__auto___64604 = (0);
while(true){
if((i__4731__auto___64604 < len__4730__auto___64603)){
args__4736__auto__.push((arguments[i__4731__auto___64604]));

var G__64605 = (i__4731__auto___64604 + (1));
i__4731__auto___64604 = G__64605;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62275 = conformed_args__60079__auto__;
var map__62275__$1 = (((((!((map__62275 == null))))?(((((map__62275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62275):map__62275);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62275__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62275__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62275__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq62272){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62272));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64606 = arguments.length;
var i__4731__auto___64607 = (0);
while(true){
if((i__4731__auto___64607 < len__4730__auto___64606)){
args__4736__auto__.push((arguments[i__4731__auto___64607]));

var G__64608 = (i__4731__auto___64607 + (1));
i__4731__auto___64607 = G__64608;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62281 = conformed_args__60079__auto__;
var map__62281__$1 = (((((!((map__62281 == null))))?(((((map__62281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62281):map__62281);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62281__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62281__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62281__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq62279){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62279));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64609 = arguments.length;
var i__4731__auto___64610 = (0);
while(true){
if((i__4731__auto___64610 < len__4730__auto___64609)){
args__4736__auto__.push((arguments[i__4731__auto___64610]));

var G__64611 = (i__4731__auto___64610 + (1));
i__4731__auto___64610 = G__64611;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62288 = conformed_args__60079__auto__;
var map__62288__$1 = (((((!((map__62288 == null))))?(((((map__62288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62288):map__62288);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62288__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62288__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62288__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq62286){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62286));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64612 = arguments.length;
var i__4731__auto___64613 = (0);
while(true){
if((i__4731__auto___64613 < len__4730__auto___64612)){
args__4736__auto__.push((arguments[i__4731__auto___64613]));

var G__64614 = (i__4731__auto___64613 + (1));
i__4731__auto___64613 = G__64614;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62294 = conformed_args__60079__auto__;
var map__62294__$1 = (((((!((map__62294 == null))))?(((((map__62294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62294):map__62294);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62294__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62294__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62294__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq62292){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62292));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64615 = arguments.length;
var i__4731__auto___64616 = (0);
while(true){
if((i__4731__auto___64616 < len__4730__auto___64615)){
args__4736__auto__.push((arguments[i__4731__auto___64616]));

var G__64617 = (i__4731__auto___64616 + (1));
i__4731__auto___64616 = G__64617;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62302 = conformed_args__60079__auto__;
var map__62302__$1 = (((((!((map__62302 == null))))?(((((map__62302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62302):map__62302);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62302__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62302__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62302__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq62298){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62298));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64618 = arguments.length;
var i__4731__auto___64619 = (0);
while(true){
if((i__4731__auto___64619 < len__4730__auto___64618)){
args__4736__auto__.push((arguments[i__4731__auto___64619]));

var G__64620 = (i__4731__auto___64619 + (1));
i__4731__auto___64619 = G__64620;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62308 = conformed_args__60079__auto__;
var map__62308__$1 = (((((!((map__62308 == null))))?(((((map__62308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62308):map__62308);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62308__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62308__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62308__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq62305){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62305));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64621 = arguments.length;
var i__4731__auto___64622 = (0);
while(true){
if((i__4731__auto___64622 < len__4730__auto___64621)){
args__4736__auto__.push((arguments[i__4731__auto___64622]));

var G__64623 = (i__4731__auto___64622 + (1));
i__4731__auto___64622 = G__64623;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62315 = conformed_args__60079__auto__;
var map__62315__$1 = (((((!((map__62315 == null))))?(((((map__62315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62315):map__62315);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62315__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62315__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62315__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq62312){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62312));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64624 = arguments.length;
var i__4731__auto___64625 = (0);
while(true){
if((i__4731__auto___64625 < len__4730__auto___64624)){
args__4736__auto__.push((arguments[i__4731__auto___64625]));

var G__64626 = (i__4731__auto___64625 + (1));
i__4731__auto___64625 = G__64626;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62319 = conformed_args__60079__auto__;
var map__62319__$1 = (((((!((map__62319 == null))))?(((((map__62319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62319):map__62319);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62319__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62319__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62319__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq62318){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62318));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64627 = arguments.length;
var i__4731__auto___64628 = (0);
while(true){
if((i__4731__auto___64628 < len__4730__auto___64627)){
args__4736__auto__.push((arguments[i__4731__auto___64628]));

var G__64629 = (i__4731__auto___64628 + (1));
i__4731__auto___64628 = G__64629;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62322 = conformed_args__60079__auto__;
var map__62322__$1 = (((((!((map__62322 == null))))?(((((map__62322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62322):map__62322);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62322__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62322__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62322__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq62321){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62321));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64630 = arguments.length;
var i__4731__auto___64631 = (0);
while(true){
if((i__4731__auto___64631 < len__4730__auto___64630)){
args__4736__auto__.push((arguments[i__4731__auto___64631]));

var G__64632 = (i__4731__auto___64631 + (1));
i__4731__auto___64631 = G__64632;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62327 = conformed_args__60079__auto__;
var map__62327__$1 = (((((!((map__62327 == null))))?(((((map__62327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62327):map__62327);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62327__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62327__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62327__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq62324){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62324));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64633 = arguments.length;
var i__4731__auto___64634 = (0);
while(true){
if((i__4731__auto___64634 < len__4730__auto___64633)){
args__4736__auto__.push((arguments[i__4731__auto___64634]));

var G__64635 = (i__4731__auto___64634 + (1));
i__4731__auto___64634 = G__64635;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62336 = conformed_args__60079__auto__;
var map__62336__$1 = (((((!((map__62336 == null))))?(((((map__62336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62336):map__62336);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62336__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62336__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62336__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq62335){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62335));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64636 = arguments.length;
var i__4731__auto___64637 = (0);
while(true){
if((i__4731__auto___64637 < len__4730__auto___64636)){
args__4736__auto__.push((arguments[i__4731__auto___64637]));

var G__64638 = (i__4731__auto___64637 + (1));
i__4731__auto___64637 = G__64638;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62343 = conformed_args__60079__auto__;
var map__62343__$1 = (((((!((map__62343 == null))))?(((((map__62343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62343):map__62343);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62343__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62343__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62343__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq62338){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62338));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64639 = arguments.length;
var i__4731__auto___64640 = (0);
while(true){
if((i__4731__auto___64640 < len__4730__auto___64639)){
args__4736__auto__.push((arguments[i__4731__auto___64640]));

var G__64641 = (i__4731__auto___64640 + (1));
i__4731__auto___64640 = G__64641;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62350 = conformed_args__60079__auto__;
var map__62350__$1 = (((((!((map__62350 == null))))?(((((map__62350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62350):map__62350);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62350__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62350__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62350__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq62349){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62349));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64642 = arguments.length;
var i__4731__auto___64643 = (0);
while(true){
if((i__4731__auto___64643 < len__4730__auto___64642)){
args__4736__auto__.push((arguments[i__4731__auto___64643]));

var G__64644 = (i__4731__auto___64643 + (1));
i__4731__auto___64643 = G__64644;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62361 = conformed_args__60079__auto__;
var map__62361__$1 = (((((!((map__62361 == null))))?(((((map__62361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62361):map__62361);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62361__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62361__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62361__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq62358){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62358));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64645 = arguments.length;
var i__4731__auto___64646 = (0);
while(true){
if((i__4731__auto___64646 < len__4730__auto___64645)){
args__4736__auto__.push((arguments[i__4731__auto___64646]));

var G__64647 = (i__4731__auto___64646 + (1));
i__4731__auto___64646 = G__64647;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62391 = conformed_args__60079__auto__;
var map__62391__$1 = (((((!((map__62391 == null))))?(((((map__62391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62391):map__62391);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62391__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62391__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62391__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq62382){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62382));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64648 = arguments.length;
var i__4731__auto___64649 = (0);
while(true){
if((i__4731__auto___64649 < len__4730__auto___64648)){
args__4736__auto__.push((arguments[i__4731__auto___64649]));

var G__64650 = (i__4731__auto___64649 + (1));
i__4731__auto___64649 = G__64650;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62421 = conformed_args__60079__auto__;
var map__62421__$1 = (((((!((map__62421 == null))))?(((((map__62421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62421):map__62421);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62421__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62421__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62421__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq62403){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62403));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64651 = arguments.length;
var i__4731__auto___64652 = (0);
while(true){
if((i__4731__auto___64652 < len__4730__auto___64651)){
args__4736__auto__.push((arguments[i__4731__auto___64652]));

var G__64653 = (i__4731__auto___64652 + (1));
i__4731__auto___64652 = G__64653;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62435 = conformed_args__60079__auto__;
var map__62435__$1 = (((((!((map__62435 == null))))?(((((map__62435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62435):map__62435);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62435__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62435__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62435__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq62429){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62429));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64654 = arguments.length;
var i__4731__auto___64655 = (0);
while(true){
if((i__4731__auto___64655 < len__4730__auto___64654)){
args__4736__auto__.push((arguments[i__4731__auto___64655]));

var G__64656 = (i__4731__auto___64655 + (1));
i__4731__auto___64655 = G__64656;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62458 = conformed_args__60079__auto__;
var map__62458__$1 = (((((!((map__62458 == null))))?(((((map__62458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62458):map__62458);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62458__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62458__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62458__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq62451){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62451));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64657 = arguments.length;
var i__4731__auto___64658 = (0);
while(true){
if((i__4731__auto___64658 < len__4730__auto___64657)){
args__4736__auto__.push((arguments[i__4731__auto___64658]));

var G__64659 = (i__4731__auto___64658 + (1));
i__4731__auto___64658 = G__64659;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62478 = conformed_args__60079__auto__;
var map__62478__$1 = (((((!((map__62478 == null))))?(((((map__62478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62478):map__62478);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62478__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62478__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62478__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq62471){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62471));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64660 = arguments.length;
var i__4731__auto___64661 = (0);
while(true){
if((i__4731__auto___64661 < len__4730__auto___64660)){
args__4736__auto__.push((arguments[i__4731__auto___64661]));

var G__64662 = (i__4731__auto___64661 + (1));
i__4731__auto___64661 = G__64662;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62513 = conformed_args__60079__auto__;
var map__62513__$1 = (((((!((map__62513 == null))))?(((((map__62513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62513):map__62513);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62513__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62513__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62513__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq62499){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62499));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64663 = arguments.length;
var i__4731__auto___64664 = (0);
while(true){
if((i__4731__auto___64664 < len__4730__auto___64663)){
args__4736__auto__.push((arguments[i__4731__auto___64664]));

var G__64665 = (i__4731__auto___64664 + (1));
i__4731__auto___64664 = G__64665;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62552 = conformed_args__60079__auto__;
var map__62552__$1 = (((((!((map__62552 == null))))?(((((map__62552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62552):map__62552);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62552__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62552__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62552__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq62531){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62531));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64666 = arguments.length;
var i__4731__auto___64667 = (0);
while(true){
if((i__4731__auto___64667 < len__4730__auto___64666)){
args__4736__auto__.push((arguments[i__4731__auto___64667]));

var G__64668 = (i__4731__auto___64667 + (1));
i__4731__auto___64667 = G__64668;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62563 = conformed_args__60079__auto__;
var map__62563__$1 = (((((!((map__62563 == null))))?(((((map__62563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62563):map__62563);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62563__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62563__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62563__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq62558){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62558));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64669 = arguments.length;
var i__4731__auto___64670 = (0);
while(true){
if((i__4731__auto___64670 < len__4730__auto___64669)){
args__4736__auto__.push((arguments[i__4731__auto___64670]));

var G__64671 = (i__4731__auto___64670 + (1));
i__4731__auto___64670 = G__64671;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62578 = conformed_args__60079__auto__;
var map__62578__$1 = (((((!((map__62578 == null))))?(((((map__62578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62578):map__62578);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62578__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62578__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62578__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq62569){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62569));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64672 = arguments.length;
var i__4731__auto___64673 = (0);
while(true){
if((i__4731__auto___64673 < len__4730__auto___64672)){
args__4736__auto__.push((arguments[i__4731__auto___64673]));

var G__64674 = (i__4731__auto___64673 + (1));
i__4731__auto___64673 = G__64674;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62598 = conformed_args__60079__auto__;
var map__62598__$1 = (((((!((map__62598 == null))))?(((((map__62598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62598):map__62598);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62598__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62598__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62598__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq62591){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62591));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64675 = arguments.length;
var i__4731__auto___64676 = (0);
while(true){
if((i__4731__auto___64676 < len__4730__auto___64675)){
args__4736__auto__.push((arguments[i__4731__auto___64676]));

var G__64677 = (i__4731__auto___64676 + (1));
i__4731__auto___64676 = G__64677;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62627 = conformed_args__60079__auto__;
var map__62627__$1 = (((((!((map__62627 == null))))?(((((map__62627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62627):map__62627);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62627__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62627__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62627__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq62616){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62616));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64678 = arguments.length;
var i__4731__auto___64679 = (0);
while(true){
if((i__4731__auto___64679 < len__4730__auto___64678)){
args__4736__auto__.push((arguments[i__4731__auto___64679]));

var G__64680 = (i__4731__auto___64679 + (1));
i__4731__auto___64679 = G__64680;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62654 = conformed_args__60079__auto__;
var map__62654__$1 = (((((!((map__62654 == null))))?(((((map__62654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62654):map__62654);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62654__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62654__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62654__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq62645){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62645));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64681 = arguments.length;
var i__4731__auto___64682 = (0);
while(true){
if((i__4731__auto___64682 < len__4730__auto___64681)){
args__4736__auto__.push((arguments[i__4731__auto___64682]));

var G__64683 = (i__4731__auto___64682 + (1));
i__4731__auto___64682 = G__64683;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62684 = conformed_args__60079__auto__;
var map__62684__$1 = (((((!((map__62684 == null))))?(((((map__62684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62684):map__62684);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62684__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62684__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62684__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq62678){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62678));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64684 = arguments.length;
var i__4731__auto___64685 = (0);
while(true){
if((i__4731__auto___64685 < len__4730__auto___64684)){
args__4736__auto__.push((arguments[i__4731__auto___64685]));

var G__64686 = (i__4731__auto___64685 + (1));
i__4731__auto___64685 = G__64686;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62704 = conformed_args__60079__auto__;
var map__62704__$1 = (((((!((map__62704 == null))))?(((((map__62704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62704):map__62704);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62704__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62704__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62704__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq62695){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62695));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64687 = arguments.length;
var i__4731__auto___64688 = (0);
while(true){
if((i__4731__auto___64688 < len__4730__auto___64687)){
args__4736__auto__.push((arguments[i__4731__auto___64688]));

var G__64689 = (i__4731__auto___64688 + (1));
i__4731__auto___64688 = G__64689;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62729 = conformed_args__60079__auto__;
var map__62729__$1 = (((((!((map__62729 == null))))?(((((map__62729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62729):map__62729);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62729__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62729__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62729__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq62720){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62720));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64690 = arguments.length;
var i__4731__auto___64691 = (0);
while(true){
if((i__4731__auto___64691 < len__4730__auto___64690)){
args__4736__auto__.push((arguments[i__4731__auto___64691]));

var G__64692 = (i__4731__auto___64691 + (1));
i__4731__auto___64691 = G__64692;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62762 = conformed_args__60079__auto__;
var map__62762__$1 = (((((!((map__62762 == null))))?(((((map__62762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62762):map__62762);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62762__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62762__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62762__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq62740){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62740));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64693 = arguments.length;
var i__4731__auto___64694 = (0);
while(true){
if((i__4731__auto___64694 < len__4730__auto___64693)){
args__4736__auto__.push((arguments[i__4731__auto___64694]));

var G__64695 = (i__4731__auto___64694 + (1));
i__4731__auto___64694 = G__64695;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62784 = conformed_args__60079__auto__;
var map__62784__$1 = (((((!((map__62784 == null))))?(((((map__62784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62784):map__62784);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62784__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62784__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62784__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq62783){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62783));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64696 = arguments.length;
var i__4731__auto___64697 = (0);
while(true){
if((i__4731__auto___64697 < len__4730__auto___64696)){
args__4736__auto__.push((arguments[i__4731__auto___64697]));

var G__64698 = (i__4731__auto___64697 + (1));
i__4731__auto___64697 = G__64698;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62823 = conformed_args__60079__auto__;
var map__62823__$1 = (((((!((map__62823 == null))))?(((((map__62823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62823):map__62823);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62823__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62823__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62823__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq62803){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62803));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64699 = arguments.length;
var i__4731__auto___64700 = (0);
while(true){
if((i__4731__auto___64700 < len__4730__auto___64699)){
args__4736__auto__.push((arguments[i__4731__auto___64700]));

var G__64701 = (i__4731__auto___64700 + (1));
i__4731__auto___64700 = G__64701;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62840 = conformed_args__60079__auto__;
var map__62840__$1 = (((((!((map__62840 == null))))?(((((map__62840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62840):map__62840);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62840__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62840__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62840__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq62830){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62830));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64702 = arguments.length;
var i__4731__auto___64703 = (0);
while(true){
if((i__4731__auto___64703 < len__4730__auto___64702)){
args__4736__auto__.push((arguments[i__4731__auto___64703]));

var G__64704 = (i__4731__auto___64703 + (1));
i__4731__auto___64703 = G__64704;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62849 = conformed_args__60079__auto__;
var map__62849__$1 = (((((!((map__62849 == null))))?(((((map__62849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62849):map__62849);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62849__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62849__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62849__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq62846){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62846));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64705 = arguments.length;
var i__4731__auto___64706 = (0);
while(true){
if((i__4731__auto___64706 < len__4730__auto___64705)){
args__4736__auto__.push((arguments[i__4731__auto___64706]));

var G__64707 = (i__4731__auto___64706 + (1));
i__4731__auto___64706 = G__64707;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62863 = conformed_args__60079__auto__;
var map__62863__$1 = (((((!((map__62863 == null))))?(((((map__62863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62863):map__62863);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62863__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62863__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62863__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq62860){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62860));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64708 = arguments.length;
var i__4731__auto___64709 = (0);
while(true){
if((i__4731__auto___64709 < len__4730__auto___64708)){
args__4736__auto__.push((arguments[i__4731__auto___64709]));

var G__64710 = (i__4731__auto___64709 + (1));
i__4731__auto___64709 = G__64710;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62878 = conformed_args__60079__auto__;
var map__62878__$1 = (((((!((map__62878 == null))))?(((((map__62878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62878):map__62878);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62878__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62878__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62878__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq62870){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62870));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64711 = arguments.length;
var i__4731__auto___64712 = (0);
while(true){
if((i__4731__auto___64712 < len__4730__auto___64711)){
args__4736__auto__.push((arguments[i__4731__auto___64712]));

var G__64713 = (i__4731__auto___64712 + (1));
i__4731__auto___64712 = G__64713;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62895 = conformed_args__60079__auto__;
var map__62895__$1 = (((((!((map__62895 == null))))?(((((map__62895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62895):map__62895);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62895__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62895__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62895__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq62889){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62889));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64714 = arguments.length;
var i__4731__auto___64715 = (0);
while(true){
if((i__4731__auto___64715 < len__4730__auto___64714)){
args__4736__auto__.push((arguments[i__4731__auto___64715]));

var G__64716 = (i__4731__auto___64715 + (1));
i__4731__auto___64715 = G__64716;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62919 = conformed_args__60079__auto__;
var map__62919__$1 = (((((!((map__62919 == null))))?(((((map__62919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62919):map__62919);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62919__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62919__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62919__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq62902){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62902));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64717 = arguments.length;
var i__4731__auto___64718 = (0);
while(true){
if((i__4731__auto___64718 < len__4730__auto___64717)){
args__4736__auto__.push((arguments[i__4731__auto___64718]));

var G__64719 = (i__4731__auto___64718 + (1));
i__4731__auto___64718 = G__64719;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62947 = conformed_args__60079__auto__;
var map__62947__$1 = (((((!((map__62947 == null))))?(((((map__62947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62947):map__62947);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62947__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62947__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62947__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq62934){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62934));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64720 = arguments.length;
var i__4731__auto___64721 = (0);
while(true){
if((i__4731__auto___64721 < len__4730__auto___64720)){
args__4736__auto__.push((arguments[i__4731__auto___64721]));

var G__64722 = (i__4731__auto___64721 + (1));
i__4731__auto___64721 = G__64722;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62964 = conformed_args__60079__auto__;
var map__62964__$1 = (((((!((map__62964 == null))))?(((((map__62964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62964):map__62964);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62964__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62964__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62964__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq62954){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62954));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64723 = arguments.length;
var i__4731__auto___64724 = (0);
while(true){
if((i__4731__auto___64724 < len__4730__auto___64723)){
args__4736__auto__.push((arguments[i__4731__auto___64724]));

var G__64725 = (i__4731__auto___64724 + (1));
i__4731__auto___64724 = G__64725;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__62998 = conformed_args__60079__auto__;
var map__62998__$1 = (((((!((map__62998 == null))))?(((((map__62998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62998):map__62998);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62998__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62998__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62998__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq62987){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62987));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64726 = arguments.length;
var i__4731__auto___64727 = (0);
while(true){
if((i__4731__auto___64727 < len__4730__auto___64726)){
args__4736__auto__.push((arguments[i__4731__auto___64727]));

var G__64728 = (i__4731__auto___64727 + (1));
i__4731__auto___64727 = G__64728;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63023 = conformed_args__60079__auto__;
var map__63023__$1 = (((((!((map__63023 == null))))?(((((map__63023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63023):map__63023);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63023__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63023__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63023__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq63016){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63016));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64729 = arguments.length;
var i__4731__auto___64730 = (0);
while(true){
if((i__4731__auto___64730 < len__4730__auto___64729)){
args__4736__auto__.push((arguments[i__4731__auto___64730]));

var G__64731 = (i__4731__auto___64730 + (1));
i__4731__auto___64730 = G__64731;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63037 = conformed_args__60079__auto__;
var map__63037__$1 = (((((!((map__63037 == null))))?(((((map__63037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63037):map__63037);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63037__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63037__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63037__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq63034){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63034));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64732 = arguments.length;
var i__4731__auto___64733 = (0);
while(true){
if((i__4731__auto___64733 < len__4730__auto___64732)){
args__4736__auto__.push((arguments[i__4731__auto___64733]));

var G__64734 = (i__4731__auto___64733 + (1));
i__4731__auto___64733 = G__64734;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63050 = conformed_args__60079__auto__;
var map__63050__$1 = (((((!((map__63050 == null))))?(((((map__63050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63050):map__63050);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63050__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63050__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63050__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq63044){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63044));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64735 = arguments.length;
var i__4731__auto___64736 = (0);
while(true){
if((i__4731__auto___64736 < len__4730__auto___64735)){
args__4736__auto__.push((arguments[i__4731__auto___64736]));

var G__64737 = (i__4731__auto___64736 + (1));
i__4731__auto___64736 = G__64737;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63068 = conformed_args__60079__auto__;
var map__63068__$1 = (((((!((map__63068 == null))))?(((((map__63068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63068):map__63068);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63068__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63068__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63068__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq63057){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63057));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64738 = arguments.length;
var i__4731__auto___64739 = (0);
while(true){
if((i__4731__auto___64739 < len__4730__auto___64738)){
args__4736__auto__.push((arguments[i__4731__auto___64739]));

var G__64740 = (i__4731__auto___64739 + (1));
i__4731__auto___64739 = G__64740;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63087 = conformed_args__60079__auto__;
var map__63087__$1 = (((((!((map__63087 == null))))?(((((map__63087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63087):map__63087);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63087__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63087__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63087__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq63080){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63080));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64741 = arguments.length;
var i__4731__auto___64742 = (0);
while(true){
if((i__4731__auto___64742 < len__4730__auto___64741)){
args__4736__auto__.push((arguments[i__4731__auto___64742]));

var G__64743 = (i__4731__auto___64742 + (1));
i__4731__auto___64742 = G__64743;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63099 = conformed_args__60079__auto__;
var map__63099__$1 = (((((!((map__63099 == null))))?(((((map__63099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63099):map__63099);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63099__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63099__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63099__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq63097){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63097));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64744 = arguments.length;
var i__4731__auto___64745 = (0);
while(true){
if((i__4731__auto___64745 < len__4730__auto___64744)){
args__4736__auto__.push((arguments[i__4731__auto___64745]));

var G__64746 = (i__4731__auto___64745 + (1));
i__4731__auto___64745 = G__64746;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63113 = conformed_args__60079__auto__;
var map__63113__$1 = (((((!((map__63113 == null))))?(((((map__63113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63113):map__63113);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63113__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63113__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63113__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq63105){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63105));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64747 = arguments.length;
var i__4731__auto___64748 = (0);
while(true){
if((i__4731__auto___64748 < len__4730__auto___64747)){
args__4736__auto__.push((arguments[i__4731__auto___64748]));

var G__64749 = (i__4731__auto___64748 + (1));
i__4731__auto___64748 = G__64749;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63136 = conformed_args__60079__auto__;
var map__63136__$1 = (((((!((map__63136 == null))))?(((((map__63136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63136):map__63136);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63136__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63136__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63136__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq63126){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63126));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64750 = arguments.length;
var i__4731__auto___64751 = (0);
while(true){
if((i__4731__auto___64751 < len__4730__auto___64750)){
args__4736__auto__.push((arguments[i__4731__auto___64751]));

var G__64752 = (i__4731__auto___64751 + (1));
i__4731__auto___64751 = G__64752;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63162 = conformed_args__60079__auto__;
var map__63162__$1 = (((((!((map__63162 == null))))?(((((map__63162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63162):map__63162);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63162__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63162__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63162__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq63151){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63151));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64753 = arguments.length;
var i__4731__auto___64754 = (0);
while(true){
if((i__4731__auto___64754 < len__4730__auto___64753)){
args__4736__auto__.push((arguments[i__4731__auto___64754]));

var G__64755 = (i__4731__auto___64754 + (1));
i__4731__auto___64754 = G__64755;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63188 = conformed_args__60079__auto__;
var map__63188__$1 = (((((!((map__63188 == null))))?(((((map__63188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63188):map__63188);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63188__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63188__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63188__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq63176){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63176));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64756 = arguments.length;
var i__4731__auto___64757 = (0);
while(true){
if((i__4731__auto___64757 < len__4730__auto___64756)){
args__4736__auto__.push((arguments[i__4731__auto___64757]));

var G__64758 = (i__4731__auto___64757 + (1));
i__4731__auto___64757 = G__64758;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63220 = conformed_args__60079__auto__;
var map__63220__$1 = (((((!((map__63220 == null))))?(((((map__63220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63220):map__63220);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63220__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63220__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63220__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq63209){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63209));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64759 = arguments.length;
var i__4731__auto___64760 = (0);
while(true){
if((i__4731__auto___64760 < len__4730__auto___64759)){
args__4736__auto__.push((arguments[i__4731__auto___64760]));

var G__64761 = (i__4731__auto___64760 + (1));
i__4731__auto___64760 = G__64761;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63243 = conformed_args__60079__auto__;
var map__63243__$1 = (((((!((map__63243 == null))))?(((((map__63243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63243):map__63243);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63243__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63243__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63243__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq63234){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63234));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64762 = arguments.length;
var i__4731__auto___64763 = (0);
while(true){
if((i__4731__auto___64763 < len__4730__auto___64762)){
args__4736__auto__.push((arguments[i__4731__auto___64763]));

var G__64764 = (i__4731__auto___64763 + (1));
i__4731__auto___64763 = G__64764;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63272 = conformed_args__60079__auto__;
var map__63272__$1 = (((((!((map__63272 == null))))?(((((map__63272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63272):map__63272);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63272__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63272__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63272__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq63264){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63264));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64765 = arguments.length;
var i__4731__auto___64766 = (0);
while(true){
if((i__4731__auto___64766 < len__4730__auto___64765)){
args__4736__auto__.push((arguments[i__4731__auto___64766]));

var G__64767 = (i__4731__auto___64766 + (1));
i__4731__auto___64766 = G__64767;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63294 = conformed_args__60079__auto__;
var map__63294__$1 = (((((!((map__63294 == null))))?(((((map__63294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63294):map__63294);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63294__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63294__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63294__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq63288){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63288));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64768 = arguments.length;
var i__4731__auto___64769 = (0);
while(true){
if((i__4731__auto___64769 < len__4730__auto___64768)){
args__4736__auto__.push((arguments[i__4731__auto___64769]));

var G__64770 = (i__4731__auto___64769 + (1));
i__4731__auto___64769 = G__64770;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63313 = conformed_args__60079__auto__;
var map__63313__$1 = (((((!((map__63313 == null))))?(((((map__63313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63313):map__63313);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63313__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63313__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63313__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq63305){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63305));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64771 = arguments.length;
var i__4731__auto___64772 = (0);
while(true){
if((i__4731__auto___64772 < len__4730__auto___64771)){
args__4736__auto__.push((arguments[i__4731__auto___64772]));

var G__64773 = (i__4731__auto___64772 + (1));
i__4731__auto___64772 = G__64773;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63340 = conformed_args__60079__auto__;
var map__63340__$1 = (((((!((map__63340 == null))))?(((((map__63340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63340):map__63340);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63340__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63340__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63340__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq63333){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63333));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64774 = arguments.length;
var i__4731__auto___64775 = (0);
while(true){
if((i__4731__auto___64775 < len__4730__auto___64774)){
args__4736__auto__.push((arguments[i__4731__auto___64775]));

var G__64776 = (i__4731__auto___64775 + (1));
i__4731__auto___64775 = G__64776;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63359 = conformed_args__60079__auto__;
var map__63359__$1 = (((((!((map__63359 == null))))?(((((map__63359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63359):map__63359);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63359__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63359__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63359__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq63351){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63351));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64777 = arguments.length;
var i__4731__auto___64778 = (0);
while(true){
if((i__4731__auto___64778 < len__4730__auto___64777)){
args__4736__auto__.push((arguments[i__4731__auto___64778]));

var G__64779 = (i__4731__auto___64778 + (1));
i__4731__auto___64778 = G__64779;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63377 = conformed_args__60079__auto__;
var map__63377__$1 = (((((!((map__63377 == null))))?(((((map__63377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63377):map__63377);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63377__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63377__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63377__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq63368){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63368));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64780 = arguments.length;
var i__4731__auto___64781 = (0);
while(true){
if((i__4731__auto___64781 < len__4730__auto___64780)){
args__4736__auto__.push((arguments[i__4731__auto___64781]));

var G__64782 = (i__4731__auto___64781 + (1));
i__4731__auto___64781 = G__64782;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63393 = conformed_args__60079__auto__;
var map__63393__$1 = (((((!((map__63393 == null))))?(((((map__63393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63393):map__63393);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63393__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63393__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63393__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq63387){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63387));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64783 = arguments.length;
var i__4731__auto___64784 = (0);
while(true){
if((i__4731__auto___64784 < len__4730__auto___64783)){
args__4736__auto__.push((arguments[i__4731__auto___64784]));

var G__64785 = (i__4731__auto___64784 + (1));
i__4731__auto___64784 = G__64785;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63414 = conformed_args__60079__auto__;
var map__63414__$1 = (((((!((map__63414 == null))))?(((((map__63414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63414):map__63414);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63414__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63414__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63414__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq63406){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63406));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64786 = arguments.length;
var i__4731__auto___64787 = (0);
while(true){
if((i__4731__auto___64787 < len__4730__auto___64786)){
args__4736__auto__.push((arguments[i__4731__auto___64787]));

var G__64788 = (i__4731__auto___64787 + (1));
i__4731__auto___64787 = G__64788;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63432 = conformed_args__60079__auto__;
var map__63432__$1 = (((((!((map__63432 == null))))?(((((map__63432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63432):map__63432);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63432__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63432__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63432__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq63426){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63426));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64789 = arguments.length;
var i__4731__auto___64790 = (0);
while(true){
if((i__4731__auto___64790 < len__4730__auto___64789)){
args__4736__auto__.push((arguments[i__4731__auto___64790]));

var G__64791 = (i__4731__auto___64790 + (1));
i__4731__auto___64790 = G__64791;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63462 = conformed_args__60079__auto__;
var map__63462__$1 = (((((!((map__63462 == null))))?(((((map__63462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63462):map__63462);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63462__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63462__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63462__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq63452){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63452));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64792 = arguments.length;
var i__4731__auto___64793 = (0);
while(true){
if((i__4731__auto___64793 < len__4730__auto___64792)){
args__4736__auto__.push((arguments[i__4731__auto___64793]));

var G__64794 = (i__4731__auto___64793 + (1));
i__4731__auto___64793 = G__64794;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63487 = conformed_args__60079__auto__;
var map__63487__$1 = (((((!((map__63487 == null))))?(((((map__63487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63487):map__63487);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63487__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63487__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63487__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq63472){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63472));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64795 = arguments.length;
var i__4731__auto___64796 = (0);
while(true){
if((i__4731__auto___64796 < len__4730__auto___64795)){
args__4736__auto__.push((arguments[i__4731__auto___64796]));

var G__64797 = (i__4731__auto___64796 + (1));
i__4731__auto___64796 = G__64797;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63501 = conformed_args__60079__auto__;
var map__63501__$1 = (((((!((map__63501 == null))))?(((((map__63501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63501):map__63501);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63501__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63501__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63501__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq63496){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63496));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64798 = arguments.length;
var i__4731__auto___64799 = (0);
while(true){
if((i__4731__auto___64799 < len__4730__auto___64798)){
args__4736__auto__.push((arguments[i__4731__auto___64799]));

var G__64800 = (i__4731__auto___64799 + (1));
i__4731__auto___64799 = G__64800;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63513 = conformed_args__60079__auto__;
var map__63513__$1 = (((((!((map__63513 == null))))?(((((map__63513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63513):map__63513);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63513__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63513__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63513__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq63509){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63509));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64801 = arguments.length;
var i__4731__auto___64802 = (0);
while(true){
if((i__4731__auto___64802 < len__4730__auto___64801)){
args__4736__auto__.push((arguments[i__4731__auto___64802]));

var G__64803 = (i__4731__auto___64802 + (1));
i__4731__auto___64802 = G__64803;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63521 = conformed_args__60079__auto__;
var map__63521__$1 = (((((!((map__63521 == null))))?(((((map__63521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63521):map__63521);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63521__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63521__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63521__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq63518){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63518));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64804 = arguments.length;
var i__4731__auto___64805 = (0);
while(true){
if((i__4731__auto___64805 < len__4730__auto___64804)){
args__4736__auto__.push((arguments[i__4731__auto___64805]));

var G__64806 = (i__4731__auto___64805 + (1));
i__4731__auto___64805 = G__64806;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63534 = conformed_args__60079__auto__;
var map__63534__$1 = (((((!((map__63534 == null))))?(((((map__63534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63534):map__63534);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63534__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63534__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63534__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq63527){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63527));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64807 = arguments.length;
var i__4731__auto___64808 = (0);
while(true){
if((i__4731__auto___64808 < len__4730__auto___64807)){
args__4736__auto__.push((arguments[i__4731__auto___64808]));

var G__64809 = (i__4731__auto___64808 + (1));
i__4731__auto___64808 = G__64809;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63555 = conformed_args__60079__auto__;
var map__63555__$1 = (((((!((map__63555 == null))))?(((((map__63555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63555):map__63555);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63555__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63555__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63555__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq63547){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63547));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64810 = arguments.length;
var i__4731__auto___64811 = (0);
while(true){
if((i__4731__auto___64811 < len__4730__auto___64810)){
args__4736__auto__.push((arguments[i__4731__auto___64811]));

var G__64812 = (i__4731__auto___64811 + (1));
i__4731__auto___64811 = G__64812;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63571 = conformed_args__60079__auto__;
var map__63571__$1 = (((((!((map__63571 == null))))?(((((map__63571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63571):map__63571);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63571__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63571__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63571__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq63565){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63565));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64813 = arguments.length;
var i__4731__auto___64814 = (0);
while(true){
if((i__4731__auto___64814 < len__4730__auto___64813)){
args__4736__auto__.push((arguments[i__4731__auto___64814]));

var G__64815 = (i__4731__auto___64814 + (1));
i__4731__auto___64814 = G__64815;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63583 = conformed_args__60079__auto__;
var map__63583__$1 = (((((!((map__63583 == null))))?(((((map__63583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63583):map__63583);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63583__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63583__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63583__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq63579){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63579));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64816 = arguments.length;
var i__4731__auto___64817 = (0);
while(true){
if((i__4731__auto___64817 < len__4730__auto___64816)){
args__4736__auto__.push((arguments[i__4731__auto___64817]));

var G__64818 = (i__4731__auto___64817 + (1));
i__4731__auto___64817 = G__64818;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63600 = conformed_args__60079__auto__;
var map__63600__$1 = (((((!((map__63600 == null))))?(((((map__63600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63600):map__63600);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63600__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63600__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63600__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq63593){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63593));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64819 = arguments.length;
var i__4731__auto___64820 = (0);
while(true){
if((i__4731__auto___64820 < len__4730__auto___64819)){
args__4736__auto__.push((arguments[i__4731__auto___64820]));

var G__64821 = (i__4731__auto___64820 + (1));
i__4731__auto___64820 = G__64821;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63619 = conformed_args__60079__auto__;
var map__63619__$1 = (((((!((map__63619 == null))))?(((((map__63619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63619):map__63619);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63619__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63619__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63619__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq63611){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63611));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64822 = arguments.length;
var i__4731__auto___64823 = (0);
while(true){
if((i__4731__auto___64823 < len__4730__auto___64822)){
args__4736__auto__.push((arguments[i__4731__auto___64823]));

var G__64824 = (i__4731__auto___64823 + (1));
i__4731__auto___64823 = G__64824;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63643 = conformed_args__60079__auto__;
var map__63643__$1 = (((((!((map__63643 == null))))?(((((map__63643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63643):map__63643);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63643__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63643__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63643__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq63629){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63629));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64825 = arguments.length;
var i__4731__auto___64826 = (0);
while(true){
if((i__4731__auto___64826 < len__4730__auto___64825)){
args__4736__auto__.push((arguments[i__4731__auto___64826]));

var G__64827 = (i__4731__auto___64826 + (1));
i__4731__auto___64826 = G__64827;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63669 = conformed_args__60079__auto__;
var map__63669__$1 = (((((!((map__63669 == null))))?(((((map__63669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63669):map__63669);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63669__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63669__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63669__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq63659){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63659));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64828 = arguments.length;
var i__4731__auto___64829 = (0);
while(true){
if((i__4731__auto___64829 < len__4730__auto___64828)){
args__4736__auto__.push((arguments[i__4731__auto___64829]));

var G__64830 = (i__4731__auto___64829 + (1));
i__4731__auto___64829 = G__64830;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63688 = conformed_args__60079__auto__;
var map__63688__$1 = (((((!((map__63688 == null))))?(((((map__63688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63688):map__63688);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63688__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63688__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63688__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq63680){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63680));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64831 = arguments.length;
var i__4731__auto___64832 = (0);
while(true){
if((i__4731__auto___64832 < len__4730__auto___64831)){
args__4736__auto__.push((arguments[i__4731__auto___64832]));

var G__64833 = (i__4731__auto___64832 + (1));
i__4731__auto___64832 = G__64833;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63701 = conformed_args__60079__auto__;
var map__63701__$1 = (((((!((map__63701 == null))))?(((((map__63701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63701):map__63701);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63701__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63701__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63701__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq63695){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63695));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64834 = arguments.length;
var i__4731__auto___64835 = (0);
while(true){
if((i__4731__auto___64835 < len__4730__auto___64834)){
args__4736__auto__.push((arguments[i__4731__auto___64835]));

var G__64836 = (i__4731__auto___64835 + (1));
i__4731__auto___64835 = G__64836;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63712 = conformed_args__60079__auto__;
var map__63712__$1 = (((((!((map__63712 == null))))?(((((map__63712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63712):map__63712);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63712__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63712__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63712__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq63706){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63706));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64837 = arguments.length;
var i__4731__auto___64838 = (0);
while(true){
if((i__4731__auto___64838 < len__4730__auto___64837)){
args__4736__auto__.push((arguments[i__4731__auto___64838]));

var G__64839 = (i__4731__auto___64838 + (1));
i__4731__auto___64838 = G__64839;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63729 = conformed_args__60079__auto__;
var map__63729__$1 = (((((!((map__63729 == null))))?(((((map__63729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63729):map__63729);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63729__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63729__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63729__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq63719){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63719));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64840 = arguments.length;
var i__4731__auto___64841 = (0);
while(true){
if((i__4731__auto___64841 < len__4730__auto___64840)){
args__4736__auto__.push((arguments[i__4731__auto___64841]));

var G__64842 = (i__4731__auto___64841 + (1));
i__4731__auto___64841 = G__64842;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63739 = conformed_args__60079__auto__;
var map__63739__$1 = (((((!((map__63739 == null))))?(((((map__63739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63739):map__63739);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63739__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63739__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63739__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq63735){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63735));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64843 = arguments.length;
var i__4731__auto___64844 = (0);
while(true){
if((i__4731__auto___64844 < len__4730__auto___64843)){
args__4736__auto__.push((arguments[i__4731__auto___64844]));

var G__64845 = (i__4731__auto___64844 + (1));
i__4731__auto___64844 = G__64845;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63746 = conformed_args__60079__auto__;
var map__63746__$1 = (((((!((map__63746 == null))))?(((((map__63746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63746):map__63746);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63746__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63746__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63746__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq63742){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63742));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64846 = arguments.length;
var i__4731__auto___64847 = (0);
while(true){
if((i__4731__auto___64847 < len__4730__auto___64846)){
args__4736__auto__.push((arguments[i__4731__auto___64847]));

var G__64848 = (i__4731__auto___64847 + (1));
i__4731__auto___64847 = G__64848;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63752 = conformed_args__60079__auto__;
var map__63752__$1 = (((((!((map__63752 == null))))?(((((map__63752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63752):map__63752);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63752__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63752__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63752__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq63750){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63750));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64849 = arguments.length;
var i__4731__auto___64850 = (0);
while(true){
if((i__4731__auto___64850 < len__4730__auto___64849)){
args__4736__auto__.push((arguments[i__4731__auto___64850]));

var G__64851 = (i__4731__auto___64850 + (1));
i__4731__auto___64850 = G__64851;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63760 = conformed_args__60079__auto__;
var map__63760__$1 = (((((!((map__63760 == null))))?(((((map__63760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63760):map__63760);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63760__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63760__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63760__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq63759){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63759));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64852 = arguments.length;
var i__4731__auto___64853 = (0);
while(true){
if((i__4731__auto___64853 < len__4730__auto___64852)){
args__4736__auto__.push((arguments[i__4731__auto___64853]));

var G__64854 = (i__4731__auto___64853 + (1));
i__4731__auto___64853 = G__64854;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63768 = conformed_args__60079__auto__;
var map__63768__$1 = (((((!((map__63768 == null))))?(((((map__63768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63768):map__63768);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63768__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63768__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63768__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq63764){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63764));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64855 = arguments.length;
var i__4731__auto___64856 = (0);
while(true){
if((i__4731__auto___64856 < len__4730__auto___64855)){
args__4736__auto__.push((arguments[i__4731__auto___64856]));

var G__64857 = (i__4731__auto___64856 + (1));
i__4731__auto___64856 = G__64857;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63775 = conformed_args__60079__auto__;
var map__63775__$1 = (((((!((map__63775 == null))))?(((((map__63775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63775):map__63775);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63775__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63775__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63775__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq63770){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63770));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64858 = arguments.length;
var i__4731__auto___64859 = (0);
while(true){
if((i__4731__auto___64859 < len__4730__auto___64858)){
args__4736__auto__.push((arguments[i__4731__auto___64859]));

var G__64860 = (i__4731__auto___64859 + (1));
i__4731__auto___64859 = G__64860;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63780 = conformed_args__60079__auto__;
var map__63780__$1 = (((((!((map__63780 == null))))?(((((map__63780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63780):map__63780);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63780__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63780__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63780__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq63777){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63777));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64861 = arguments.length;
var i__4731__auto___64862 = (0);
while(true){
if((i__4731__auto___64862 < len__4730__auto___64861)){
args__4736__auto__.push((arguments[i__4731__auto___64862]));

var G__64863 = (i__4731__auto___64862 + (1));
i__4731__auto___64862 = G__64863;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63792 = conformed_args__60079__auto__;
var map__63792__$1 = (((((!((map__63792 == null))))?(((((map__63792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63792):map__63792);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63792__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63792__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63792__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq63788){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63788));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64864 = arguments.length;
var i__4731__auto___64865 = (0);
while(true){
if((i__4731__auto___64865 < len__4730__auto___64864)){
args__4736__auto__.push((arguments[i__4731__auto___64865]));

var G__64866 = (i__4731__auto___64865 + (1));
i__4731__auto___64865 = G__64866;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63804 = conformed_args__60079__auto__;
var map__63804__$1 = (((((!((map__63804 == null))))?(((((map__63804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63804):map__63804);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63804__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63804__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63804__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq63802){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63802));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64867 = arguments.length;
var i__4731__auto___64868 = (0);
while(true){
if((i__4731__auto___64868 < len__4730__auto___64867)){
args__4736__auto__.push((arguments[i__4731__auto___64868]));

var G__64869 = (i__4731__auto___64868 + (1));
i__4731__auto___64868 = G__64869;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63815 = conformed_args__60079__auto__;
var map__63815__$1 = (((((!((map__63815 == null))))?(((((map__63815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63815):map__63815);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63815__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63815__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63815__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq63814){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63814));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64870 = arguments.length;
var i__4731__auto___64871 = (0);
while(true){
if((i__4731__auto___64871 < len__4730__auto___64870)){
args__4736__auto__.push((arguments[i__4731__auto___64871]));

var G__64872 = (i__4731__auto___64871 + (1));
i__4731__auto___64871 = G__64872;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63828 = conformed_args__60079__auto__;
var map__63828__$1 = (((((!((map__63828 == null))))?(((((map__63828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63828):map__63828);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63828__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63828__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63828__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq63825){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63825));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64873 = arguments.length;
var i__4731__auto___64874 = (0);
while(true){
if((i__4731__auto___64874 < len__4730__auto___64873)){
args__4736__auto__.push((arguments[i__4731__auto___64874]));

var G__64875 = (i__4731__auto___64874 + (1));
i__4731__auto___64874 = G__64875;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63841 = conformed_args__60079__auto__;
var map__63841__$1 = (((((!((map__63841 == null))))?(((((map__63841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63841):map__63841);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63841__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63841__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63841__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq63833){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63833));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64876 = arguments.length;
var i__4731__auto___64877 = (0);
while(true){
if((i__4731__auto___64877 < len__4730__auto___64876)){
args__4736__auto__.push((arguments[i__4731__auto___64877]));

var G__64878 = (i__4731__auto___64877 + (1));
i__4731__auto___64877 = G__64878;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63855 = conformed_args__60079__auto__;
var map__63855__$1 = (((((!((map__63855 == null))))?(((((map__63855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63855):map__63855);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63855__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63855__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63855__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq63849){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63849));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64879 = arguments.length;
var i__4731__auto___64880 = (0);
while(true){
if((i__4731__auto___64880 < len__4730__auto___64879)){
args__4736__auto__.push((arguments[i__4731__auto___64880]));

var G__64881 = (i__4731__auto___64880 + (1));
i__4731__auto___64880 = G__64881;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63860 = conformed_args__60079__auto__;
var map__63860__$1 = (((((!((map__63860 == null))))?(((((map__63860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63860):map__63860);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63860__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63860__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63860__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq63857){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63857));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64882 = arguments.length;
var i__4731__auto___64883 = (0);
while(true){
if((i__4731__auto___64883 < len__4730__auto___64882)){
args__4736__auto__.push((arguments[i__4731__auto___64883]));

var G__64884 = (i__4731__auto___64883 + (1));
i__4731__auto___64883 = G__64884;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63874 = conformed_args__60079__auto__;
var map__63874__$1 = (((((!((map__63874 == null))))?(((((map__63874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63874):map__63874);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63874__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63874__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63874__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq63870){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63870));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64885 = arguments.length;
var i__4731__auto___64886 = (0);
while(true){
if((i__4731__auto___64886 < len__4730__auto___64885)){
args__4736__auto__.push((arguments[i__4731__auto___64886]));

var G__64887 = (i__4731__auto___64886 + (1));
i__4731__auto___64886 = G__64887;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63885 = conformed_args__60079__auto__;
var map__63885__$1 = (((((!((map__63885 == null))))?(((((map__63885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63885):map__63885);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63885__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63885__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63885__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq63879){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63879));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64888 = arguments.length;
var i__4731__auto___64889 = (0);
while(true){
if((i__4731__auto___64889 < len__4730__auto___64888)){
args__4736__auto__.push((arguments[i__4731__auto___64889]));

var G__64890 = (i__4731__auto___64889 + (1));
i__4731__auto___64889 = G__64890;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63895 = conformed_args__60079__auto__;
var map__63895__$1 = (((((!((map__63895 == null))))?(((((map__63895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63895):map__63895);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63895__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63895__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63895__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq63893){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63893));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64891 = arguments.length;
var i__4731__auto___64892 = (0);
while(true){
if((i__4731__auto___64892 < len__4730__auto___64891)){
args__4736__auto__.push((arguments[i__4731__auto___64892]));

var G__64893 = (i__4731__auto___64892 + (1));
i__4731__auto___64892 = G__64893;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63903 = conformed_args__60079__auto__;
var map__63903__$1 = (((((!((map__63903 == null))))?(((((map__63903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63903):map__63903);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63903__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63903__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63903__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq63901){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63901));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64894 = arguments.length;
var i__4731__auto___64895 = (0);
while(true){
if((i__4731__auto___64895 < len__4730__auto___64894)){
args__4736__auto__.push((arguments[i__4731__auto___64895]));

var G__64896 = (i__4731__auto___64895 + (1));
i__4731__auto___64895 = G__64896;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63917 = conformed_args__60079__auto__;
var map__63917__$1 = (((((!((map__63917 == null))))?(((((map__63917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63917):map__63917);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63917__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63917__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63917__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq63916){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63916));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64897 = arguments.length;
var i__4731__auto___64898 = (0);
while(true){
if((i__4731__auto___64898 < len__4730__auto___64897)){
args__4736__auto__.push((arguments[i__4731__auto___64898]));

var G__64899 = (i__4731__auto___64898 + (1));
i__4731__auto___64898 = G__64899;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63925 = conformed_args__60079__auto__;
var map__63925__$1 = (((((!((map__63925 == null))))?(((((map__63925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63925):map__63925);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63925__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63925__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63925__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq63921){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63921));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64900 = arguments.length;
var i__4731__auto___64901 = (0);
while(true){
if((i__4731__auto___64901 < len__4730__auto___64900)){
args__4736__auto__.push((arguments[i__4731__auto___64901]));

var G__64902 = (i__4731__auto___64901 + (1));
i__4731__auto___64901 = G__64902;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63933 = conformed_args__60079__auto__;
var map__63933__$1 = (((((!((map__63933 == null))))?(((((map__63933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63933):map__63933);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63933__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63933__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63933__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq63931){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63931));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64903 = arguments.length;
var i__4731__auto___64904 = (0);
while(true){
if((i__4731__auto___64904 < len__4730__auto___64903)){
args__4736__auto__.push((arguments[i__4731__auto___64904]));

var G__64905 = (i__4731__auto___64904 + (1));
i__4731__auto___64904 = G__64905;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63944 = conformed_args__60079__auto__;
var map__63944__$1 = (((((!((map__63944 == null))))?(((((map__63944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63944):map__63944);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63944__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63944__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63944__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq63943){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63943));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64906 = arguments.length;
var i__4731__auto___64907 = (0);
while(true){
if((i__4731__auto___64907 < len__4730__auto___64906)){
args__4736__auto__.push((arguments[i__4731__auto___64907]));

var G__64908 = (i__4731__auto___64907 + (1));
i__4731__auto___64907 = G__64908;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63949 = conformed_args__60079__auto__;
var map__63949__$1 = (((((!((map__63949 == null))))?(((((map__63949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63949):map__63949);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63949__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63949__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63949__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq63948){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63948));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64909 = arguments.length;
var i__4731__auto___64910 = (0);
while(true){
if((i__4731__auto___64910 < len__4730__auto___64909)){
args__4736__auto__.push((arguments[i__4731__auto___64910]));

var G__64911 = (i__4731__auto___64910 + (1));
i__4731__auto___64910 = G__64911;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63961 = conformed_args__60079__auto__;
var map__63961__$1 = (((((!((map__63961 == null))))?(((((map__63961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63961):map__63961);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63961__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63961__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63961__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq63960){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63960));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64912 = arguments.length;
var i__4731__auto___64913 = (0);
while(true){
if((i__4731__auto___64913 < len__4730__auto___64912)){
args__4736__auto__.push((arguments[i__4731__auto___64913]));

var G__64914 = (i__4731__auto___64913 + (1));
i__4731__auto___64913 = G__64914;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63971 = conformed_args__60079__auto__;
var map__63971__$1 = (((((!((map__63971 == null))))?(((((map__63971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63971):map__63971);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63971__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63971__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63971__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq63969){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63969));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64915 = arguments.length;
var i__4731__auto___64916 = (0);
while(true){
if((i__4731__auto___64916 < len__4730__auto___64915)){
args__4736__auto__.push((arguments[i__4731__auto___64916]));

var G__64917 = (i__4731__auto___64916 + (1));
i__4731__auto___64916 = G__64917;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63977 = conformed_args__60079__auto__;
var map__63977__$1 = (((((!((map__63977 == null))))?(((((map__63977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63977):map__63977);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63977__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63977__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63977__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq63976){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63976));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64918 = arguments.length;
var i__4731__auto___64919 = (0);
while(true){
if((i__4731__auto___64919 < len__4730__auto___64918)){
args__4736__auto__.push((arguments[i__4731__auto___64919]));

var G__64920 = (i__4731__auto___64919 + (1));
i__4731__auto___64919 = G__64920;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63984 = conformed_args__60079__auto__;
var map__63984__$1 = (((((!((map__63984 == null))))?(((((map__63984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63984):map__63984);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63984__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63984__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63984__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq63981){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63981));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64921 = arguments.length;
var i__4731__auto___64922 = (0);
while(true){
if((i__4731__auto___64922 < len__4730__auto___64921)){
args__4736__auto__.push((arguments[i__4731__auto___64922]));

var G__64923 = (i__4731__auto___64922 + (1));
i__4731__auto___64922 = G__64923;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63990 = conformed_args__60079__auto__;
var map__63990__$1 = (((((!((map__63990 == null))))?(((((map__63990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63990):map__63990);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63990__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63990__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63990__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq63988){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63988));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64924 = arguments.length;
var i__4731__auto___64925 = (0);
while(true){
if((i__4731__auto___64925 < len__4730__auto___64924)){
args__4736__auto__.push((arguments[i__4731__auto___64925]));

var G__64926 = (i__4731__auto___64925 + (1));
i__4731__auto___64925 = G__64926;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__63997 = conformed_args__60079__auto__;
var map__63997__$1 = (((((!((map__63997 == null))))?(((((map__63997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63997):map__63997);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63997__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63997__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63997__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq63995){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63995));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64927 = arguments.length;
var i__4731__auto___64928 = (0);
while(true){
if((i__4731__auto___64928 < len__4730__auto___64927)){
args__4736__auto__.push((arguments[i__4731__auto___64928]));

var G__64929 = (i__4731__auto___64928 + (1));
i__4731__auto___64928 = G__64929;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64004 = conformed_args__60079__auto__;
var map__64004__$1 = (((((!((map__64004 == null))))?(((((map__64004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64004):map__64004);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64004__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64004__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64004__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq64001){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64001));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64930 = arguments.length;
var i__4731__auto___64931 = (0);
while(true){
if((i__4731__auto___64931 < len__4730__auto___64930)){
args__4736__auto__.push((arguments[i__4731__auto___64931]));

var G__64932 = (i__4731__auto___64931 + (1));
i__4731__auto___64931 = G__64932;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64012 = conformed_args__60079__auto__;
var map__64012__$1 = (((((!((map__64012 == null))))?(((((map__64012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64012):map__64012);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64012__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64012__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64012__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq64010){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64010));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64933 = arguments.length;
var i__4731__auto___64934 = (0);
while(true){
if((i__4731__auto___64934 < len__4730__auto___64933)){
args__4736__auto__.push((arguments[i__4731__auto___64934]));

var G__64935 = (i__4731__auto___64934 + (1));
i__4731__auto___64934 = G__64935;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64016 = conformed_args__60079__auto__;
var map__64016__$1 = (((((!((map__64016 == null))))?(((((map__64016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64016):map__64016);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64016__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64016__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64016__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq64015){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64015));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64936 = arguments.length;
var i__4731__auto___64937 = (0);
while(true){
if((i__4731__auto___64937 < len__4730__auto___64936)){
args__4736__auto__.push((arguments[i__4731__auto___64937]));

var G__64938 = (i__4731__auto___64937 + (1));
i__4731__auto___64937 = G__64938;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64019 = conformed_args__60079__auto__;
var map__64019__$1 = (((((!((map__64019 == null))))?(((((map__64019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64019):map__64019);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64019__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64019__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64019__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq64018){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64018));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64939 = arguments.length;
var i__4731__auto___64940 = (0);
while(true){
if((i__4731__auto___64940 < len__4730__auto___64939)){
args__4736__auto__.push((arguments[i__4731__auto___64940]));

var G__64941 = (i__4731__auto___64940 + (1));
i__4731__auto___64940 = G__64941;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64029 = conformed_args__60079__auto__;
var map__64029__$1 = (((((!((map__64029 == null))))?(((((map__64029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64029):map__64029);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64029__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64029__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64029__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq64024){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64024));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64942 = arguments.length;
var i__4731__auto___64943 = (0);
while(true){
if((i__4731__auto___64943 < len__4730__auto___64942)){
args__4736__auto__.push((arguments[i__4731__auto___64943]));

var G__64944 = (i__4731__auto___64943 + (1));
i__4731__auto___64943 = G__64944;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64037 = conformed_args__60079__auto__;
var map__64037__$1 = (((((!((map__64037 == null))))?(((((map__64037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64037):map__64037);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64037__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64037__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64037__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq64036){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64036));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64945 = arguments.length;
var i__4731__auto___64946 = (0);
while(true){
if((i__4731__auto___64946 < len__4730__auto___64945)){
args__4736__auto__.push((arguments[i__4731__auto___64946]));

var G__64947 = (i__4731__auto___64946 + (1));
i__4731__auto___64946 = G__64947;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64046 = conformed_args__60079__auto__;
var map__64046__$1 = (((((!((map__64046 == null))))?(((((map__64046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64046):map__64046);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64046__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64046__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64046__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq64042){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64042));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64948 = arguments.length;
var i__4731__auto___64949 = (0);
while(true){
if((i__4731__auto___64949 < len__4730__auto___64948)){
args__4736__auto__.push((arguments[i__4731__auto___64949]));

var G__64950 = (i__4731__auto___64949 + (1));
i__4731__auto___64949 = G__64950;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64077 = conformed_args__60079__auto__;
var map__64077__$1 = (((((!((map__64077 == null))))?(((((map__64077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64077):map__64077);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64077__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64077__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64077__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq64066){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64066));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64951 = arguments.length;
var i__4731__auto___64952 = (0);
while(true){
if((i__4731__auto___64952 < len__4730__auto___64951)){
args__4736__auto__.push((arguments[i__4731__auto___64952]));

var G__64953 = (i__4731__auto___64952 + (1));
i__4731__auto___64952 = G__64953;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64084 = conformed_args__60079__auto__;
var map__64084__$1 = (((((!((map__64084 == null))))?(((((map__64084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64084):map__64084);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64084__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64084__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64084__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq64080){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64080));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64954 = arguments.length;
var i__4731__auto___64955 = (0);
while(true){
if((i__4731__auto___64955 < len__4730__auto___64954)){
args__4736__auto__.push((arguments[i__4731__auto___64955]));

var G__64956 = (i__4731__auto___64955 + (1));
i__4731__auto___64955 = G__64956;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64096 = conformed_args__60079__auto__;
var map__64096__$1 = (((((!((map__64096 == null))))?(((((map__64096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64096):map__64096);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64096__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64096__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64096__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq64090){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64090));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64957 = arguments.length;
var i__4731__auto___64958 = (0);
while(true){
if((i__4731__auto___64958 < len__4730__auto___64957)){
args__4736__auto__.push((arguments[i__4731__auto___64958]));

var G__64959 = (i__4731__auto___64958 + (1));
i__4731__auto___64958 = G__64959;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64112 = conformed_args__60079__auto__;
var map__64112__$1 = (((((!((map__64112 == null))))?(((((map__64112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64112):map__64112);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64112__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64112__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64112__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq64109){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64109));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64960 = arguments.length;
var i__4731__auto___64961 = (0);
while(true){
if((i__4731__auto___64961 < len__4730__auto___64960)){
args__4736__auto__.push((arguments[i__4731__auto___64961]));

var G__64962 = (i__4731__auto___64961 + (1));
i__4731__auto___64961 = G__64962;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64122 = conformed_args__60079__auto__;
var map__64122__$1 = (((((!((map__64122 == null))))?(((((map__64122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64122):map__64122);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64122__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64122__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64122__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq64120){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64120));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64963 = arguments.length;
var i__4731__auto___64964 = (0);
while(true){
if((i__4731__auto___64964 < len__4730__auto___64963)){
args__4736__auto__.push((arguments[i__4731__auto___64964]));

var G__64965 = (i__4731__auto___64964 + (1));
i__4731__auto___64964 = G__64965;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64128 = conformed_args__60079__auto__;
var map__64128__$1 = (((((!((map__64128 == null))))?(((((map__64128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64128):map__64128);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64128__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64128__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64128__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq64125){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64125));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64966 = arguments.length;
var i__4731__auto___64967 = (0);
while(true){
if((i__4731__auto___64967 < len__4730__auto___64966)){
args__4736__auto__.push((arguments[i__4731__auto___64967]));

var G__64968 = (i__4731__auto___64967 + (1));
i__4731__auto___64967 = G__64968;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64149 = conformed_args__60079__auto__;
var map__64149__$1 = (((((!((map__64149 == null))))?(((((map__64149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64149):map__64149);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64149__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64149__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64149__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq64132){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64132));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64969 = arguments.length;
var i__4731__auto___64970 = (0);
while(true){
if((i__4731__auto___64970 < len__4730__auto___64969)){
args__4736__auto__.push((arguments[i__4731__auto___64970]));

var G__64971 = (i__4731__auto___64970 + (1));
i__4731__auto___64970 = G__64971;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64178 = conformed_args__60079__auto__;
var map__64178__$1 = (((((!((map__64178 == null))))?(((((map__64178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64178):map__64178);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64178__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64178__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64178__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq64169){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64169));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64972 = arguments.length;
var i__4731__auto___64973 = (0);
while(true){
if((i__4731__auto___64973 < len__4730__auto___64972)){
args__4736__auto__.push((arguments[i__4731__auto___64973]));

var G__64974 = (i__4731__auto___64973 + (1));
i__4731__auto___64973 = G__64974;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64215 = conformed_args__60079__auto__;
var map__64215__$1 = (((((!((map__64215 == null))))?(((((map__64215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64215):map__64215);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64215__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64215__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64215__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq64198){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64198));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64975 = arguments.length;
var i__4731__auto___64976 = (0);
while(true){
if((i__4731__auto___64976 < len__4730__auto___64975)){
args__4736__auto__.push((arguments[i__4731__auto___64976]));

var G__64977 = (i__4731__auto___64976 + (1));
i__4731__auto___64976 = G__64977;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64243 = conformed_args__60079__auto__;
var map__64243__$1 = (((((!((map__64243 == null))))?(((((map__64243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64243):map__64243);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64243__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64243__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64243__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq64227){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64227));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64978 = arguments.length;
var i__4731__auto___64979 = (0);
while(true){
if((i__4731__auto___64979 < len__4730__auto___64978)){
args__4736__auto__.push((arguments[i__4731__auto___64979]));

var G__64980 = (i__4731__auto___64979 + (1));
i__4731__auto___64979 = G__64980;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64247 = conformed_args__60079__auto__;
var map__64247__$1 = (((((!((map__64247 == null))))?(((((map__64247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64247):map__64247);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64247__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64247__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64247__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq64245){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64245));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64981 = arguments.length;
var i__4731__auto___64982 = (0);
while(true){
if((i__4731__auto___64982 < len__4730__auto___64981)){
args__4736__auto__.push((arguments[i__4731__auto___64982]));

var G__64983 = (i__4731__auto___64982 + (1));
i__4731__auto___64982 = G__64983;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64256 = conformed_args__60079__auto__;
var map__64256__$1 = (((((!((map__64256 == null))))?(((((map__64256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64256):map__64256);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64256__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64256__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64256__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq64253){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64253));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64984 = arguments.length;
var i__4731__auto___64985 = (0);
while(true){
if((i__4731__auto___64985 < len__4730__auto___64984)){
args__4736__auto__.push((arguments[i__4731__auto___64985]));

var G__64986 = (i__4731__auto___64985 + (1));
i__4731__auto___64985 = G__64986;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64271 = conformed_args__60079__auto__;
var map__64271__$1 = (((((!((map__64271 == null))))?(((((map__64271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64271):map__64271);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64271__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64271__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64271__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq64267){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64267));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64987 = arguments.length;
var i__4731__auto___64988 = (0);
while(true){
if((i__4731__auto___64988 < len__4730__auto___64987)){
args__4736__auto__.push((arguments[i__4731__auto___64988]));

var G__64989 = (i__4731__auto___64988 + (1));
i__4731__auto___64988 = G__64989;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64281 = conformed_args__60079__auto__;
var map__64281__$1 = (((((!((map__64281 == null))))?(((((map__64281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64281):map__64281);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64281__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64281__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64281__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq64277){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64277));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64990 = arguments.length;
var i__4731__auto___64991 = (0);
while(true){
if((i__4731__auto___64991 < len__4730__auto___64990)){
args__4736__auto__.push((arguments[i__4731__auto___64991]));

var G__64992 = (i__4731__auto___64991 + (1));
i__4731__auto___64991 = G__64992;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64286 = conformed_args__60079__auto__;
var map__64286__$1 = (((((!((map__64286 == null))))?(((((map__64286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64286):map__64286);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64286__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64286__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64286__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq64285){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64285));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64993 = arguments.length;
var i__4731__auto___64994 = (0);
while(true){
if((i__4731__auto___64994 < len__4730__auto___64993)){
args__4736__auto__.push((arguments[i__4731__auto___64994]));

var G__64995 = (i__4731__auto___64994 + (1));
i__4731__auto___64994 = G__64995;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64291 = conformed_args__60079__auto__;
var map__64291__$1 = (((((!((map__64291 == null))))?(((((map__64291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64291):map__64291);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64291__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64291__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64291__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq64288){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64288));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64996 = arguments.length;
var i__4731__auto___64997 = (0);
while(true){
if((i__4731__auto___64997 < len__4730__auto___64996)){
args__4736__auto__.push((arguments[i__4731__auto___64997]));

var G__64998 = (i__4731__auto___64997 + (1));
i__4731__auto___64997 = G__64998;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64299 = conformed_args__60079__auto__;
var map__64299__$1 = (((((!((map__64299 == null))))?(((((map__64299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64299):map__64299);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64299__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64299__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64299__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq64295){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64295));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___64999 = arguments.length;
var i__4731__auto___65000 = (0);
while(true){
if((i__4731__auto___65000 < len__4730__auto___64999)){
args__4736__auto__.push((arguments[i__4731__auto___65000]));

var G__65001 = (i__4731__auto___65000 + (1));
i__4731__auto___65000 = G__65001;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64304 = conformed_args__60079__auto__;
var map__64304__$1 = (((((!((map__64304 == null))))?(((((map__64304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64304):map__64304);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64304__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64304__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64304__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq64301){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64301));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65002 = arguments.length;
var i__4731__auto___65003 = (0);
while(true){
if((i__4731__auto___65003 < len__4730__auto___65002)){
args__4736__auto__.push((arguments[i__4731__auto___65003]));

var G__65004 = (i__4731__auto___65003 + (1));
i__4731__auto___65003 = G__65004;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64308 = conformed_args__60079__auto__;
var map__64308__$1 = (((((!((map__64308 == null))))?(((((map__64308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64308):map__64308);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64308__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64308__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64308__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq64306){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64306));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65005 = arguments.length;
var i__4731__auto___65006 = (0);
while(true){
if((i__4731__auto___65006 < len__4730__auto___65005)){
args__4736__auto__.push((arguments[i__4731__auto___65006]));

var G__65007 = (i__4731__auto___65006 + (1));
i__4731__auto___65006 = G__65007;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64312 = conformed_args__60079__auto__;
var map__64312__$1 = (((((!((map__64312 == null))))?(((((map__64312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64312):map__64312);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64312__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64312__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64312__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq64311){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64311));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65008 = arguments.length;
var i__4731__auto___65009 = (0);
while(true){
if((i__4731__auto___65009 < len__4730__auto___65008)){
args__4736__auto__.push((arguments[i__4731__auto___65009]));

var G__65010 = (i__4731__auto___65009 + (1));
i__4731__auto___65009 = G__65010;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64316 = conformed_args__60079__auto__;
var map__64316__$1 = (((((!((map__64316 == null))))?(((((map__64316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64316):map__64316);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64316__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64316__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64316__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq64315){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64315));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65011 = arguments.length;
var i__4731__auto___65012 = (0);
while(true){
if((i__4731__auto___65012 < len__4730__auto___65011)){
args__4736__auto__.push((arguments[i__4731__auto___65012]));

var G__65013 = (i__4731__auto___65012 + (1));
i__4731__auto___65012 = G__65013;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64319 = conformed_args__60079__auto__;
var map__64319__$1 = (((((!((map__64319 == null))))?(((((map__64319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64319):map__64319);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64319__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64319__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64319__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq64318){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64318));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65014 = arguments.length;
var i__4731__auto___65015 = (0);
while(true){
if((i__4731__auto___65015 < len__4730__auto___65014)){
args__4736__auto__.push((arguments[i__4731__auto___65015]));

var G__65016 = (i__4731__auto___65015 + (1));
i__4731__auto___65015 = G__65016;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64326 = conformed_args__60079__auto__;
var map__64326__$1 = (((((!((map__64326 == null))))?(((((map__64326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64326):map__64326);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64326__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64326__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64326__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq64322){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64322));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65017 = arguments.length;
var i__4731__auto___65018 = (0);
while(true){
if((i__4731__auto___65018 < len__4730__auto___65017)){
args__4736__auto__.push((arguments[i__4731__auto___65018]));

var G__65019 = (i__4731__auto___65018 + (1));
i__4731__auto___65018 = G__65019;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64340 = conformed_args__60079__auto__;
var map__64340__$1 = (((((!((map__64340 == null))))?(((((map__64340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64340):map__64340);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64340__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64340__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64340__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq64338){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64338));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65020 = arguments.length;
var i__4731__auto___65021 = (0);
while(true){
if((i__4731__auto___65021 < len__4730__auto___65020)){
args__4736__auto__.push((arguments[i__4731__auto___65021]));

var G__65022 = (i__4731__auto___65021 + (1));
i__4731__auto___65021 = G__65022;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64358 = conformed_args__60079__auto__;
var map__64358__$1 = (((((!((map__64358 == null))))?(((((map__64358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64358):map__64358);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64358__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64358__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64358__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq64351){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64351));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65023 = arguments.length;
var i__4731__auto___65024 = (0);
while(true){
if((i__4731__auto___65024 < len__4730__auto___65023)){
args__4736__auto__.push((arguments[i__4731__auto___65024]));

var G__65025 = (i__4731__auto___65024 + (1));
i__4731__auto___65024 = G__65025;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64361 = conformed_args__60079__auto__;
var map__64361__$1 = (((((!((map__64361 == null))))?(((((map__64361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64361):map__64361);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64361__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64361__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64361__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq64360){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64360));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65026 = arguments.length;
var i__4731__auto___65027 = (0);
while(true){
if((i__4731__auto___65027 < len__4730__auto___65026)){
args__4736__auto__.push((arguments[i__4731__auto___65027]));

var G__65028 = (i__4731__auto___65027 + (1));
i__4731__auto___65027 = G__65028;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64365 = conformed_args__60079__auto__;
var map__64365__$1 = (((((!((map__64365 == null))))?(((((map__64365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64365):map__64365);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64365__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64365__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64365__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq64364){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64364));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65029 = arguments.length;
var i__4731__auto___65030 = (0);
while(true){
if((i__4731__auto___65030 < len__4730__auto___65029)){
args__4736__auto__.push((arguments[i__4731__auto___65030]));

var G__65031 = (i__4731__auto___65030 + (1));
i__4731__auto___65030 = G__65031;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64368 = conformed_args__60079__auto__;
var map__64368__$1 = (((((!((map__64368 == null))))?(((((map__64368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64368):map__64368);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64368__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64368__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64368__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq64367){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64367));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65032 = arguments.length;
var i__4731__auto___65033 = (0);
while(true){
if((i__4731__auto___65033 < len__4730__auto___65032)){
args__4736__auto__.push((arguments[i__4731__auto___65033]));

var G__65034 = (i__4731__auto___65033 + (1));
i__4731__auto___65033 = G__65034;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64371 = conformed_args__60079__auto__;
var map__64371__$1 = (((((!((map__64371 == null))))?(((((map__64371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64371):map__64371);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64371__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64371__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64371__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq64370){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64370));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65035 = arguments.length;
var i__4731__auto___65036 = (0);
while(true){
if((i__4731__auto___65036 < len__4730__auto___65035)){
args__4736__auto__.push((arguments[i__4731__auto___65036]));

var G__65037 = (i__4731__auto___65036 + (1));
i__4731__auto___65036 = G__65037;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64375 = conformed_args__60079__auto__;
var map__64375__$1 = (((((!((map__64375 == null))))?(((((map__64375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64375):map__64375);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64375__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64375__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64375__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq64373){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64373));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65038 = arguments.length;
var i__4731__auto___65039 = (0);
while(true){
if((i__4731__auto___65039 < len__4730__auto___65038)){
args__4736__auto__.push((arguments[i__4731__auto___65039]));

var G__65040 = (i__4731__auto___65039 + (1));
i__4731__auto___65039 = G__65040;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64378 = conformed_args__60079__auto__;
var map__64378__$1 = (((((!((map__64378 == null))))?(((((map__64378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64378):map__64378);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64378__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64378__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64378__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq64377){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64377));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65041 = arguments.length;
var i__4731__auto___65042 = (0);
while(true){
if((i__4731__auto___65042 < len__4730__auto___65041)){
args__4736__auto__.push((arguments[i__4731__auto___65042]));

var G__65043 = (i__4731__auto___65042 + (1));
i__4731__auto___65042 = G__65043;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64381 = conformed_args__60079__auto__;
var map__64381__$1 = (((((!((map__64381 == null))))?(((((map__64381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64381):map__64381);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64381__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64381__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64381__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq64380){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64380));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65044 = arguments.length;
var i__4731__auto___65045 = (0);
while(true){
if((i__4731__auto___65045 < len__4730__auto___65044)){
args__4736__auto__.push((arguments[i__4731__auto___65045]));

var G__65046 = (i__4731__auto___65045 + (1));
i__4731__auto___65045 = G__65046;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64385 = conformed_args__60079__auto__;
var map__64385__$1 = (((((!((map__64385 == null))))?(((((map__64385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64385):map__64385);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64385__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64385__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64385__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq64384){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64384));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65047 = arguments.length;
var i__4731__auto___65048 = (0);
while(true){
if((i__4731__auto___65048 < len__4730__auto___65047)){
args__4736__auto__.push((arguments[i__4731__auto___65048]));

var G__65049 = (i__4731__auto___65048 + (1));
i__4731__auto___65048 = G__65049;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64389 = conformed_args__60079__auto__;
var map__64389__$1 = (((((!((map__64389 == null))))?(((((map__64389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64389):map__64389);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64389__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64389__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64389__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq64387){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64387));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65050 = arguments.length;
var i__4731__auto___65051 = (0);
while(true){
if((i__4731__auto___65051 < len__4730__auto___65050)){
args__4736__auto__.push((arguments[i__4731__auto___65051]));

var G__65052 = (i__4731__auto___65051 + (1));
i__4731__auto___65051 = G__65052;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64392 = conformed_args__60079__auto__;
var map__64392__$1 = (((((!((map__64392 == null))))?(((((map__64392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64392):map__64392);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64392__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64392__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64392__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq64391){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64391));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65053 = arguments.length;
var i__4731__auto___65054 = (0);
while(true){
if((i__4731__auto___65054 < len__4730__auto___65053)){
args__4736__auto__.push((arguments[i__4731__auto___65054]));

var G__65055 = (i__4731__auto___65054 + (1));
i__4731__auto___65054 = G__65055;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64395 = conformed_args__60079__auto__;
var map__64395__$1 = (((((!((map__64395 == null))))?(((((map__64395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64395):map__64395);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64395__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64395__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64395__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq64394){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64394));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65056 = arguments.length;
var i__4731__auto___65057 = (0);
while(true){
if((i__4731__auto___65057 < len__4730__auto___65056)){
args__4736__auto__.push((arguments[i__4731__auto___65057]));

var G__65058 = (i__4731__auto___65057 + (1));
i__4731__auto___65057 = G__65058;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64398 = conformed_args__60079__auto__;
var map__64398__$1 = (((((!((map__64398 == null))))?(((((map__64398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64398):map__64398);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64398__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64398__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64398__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq64397){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64397));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65059 = arguments.length;
var i__4731__auto___65060 = (0);
while(true){
if((i__4731__auto___65060 < len__4730__auto___65059)){
args__4736__auto__.push((arguments[i__4731__auto___65060]));

var G__65061 = (i__4731__auto___65060 + (1));
i__4731__auto___65060 = G__65061;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__60079__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__64401 = conformed_args__60079__auto__;
var map__64401__$1 = (((((!((map__64401 == null))))?(((((map__64401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64401):map__64401);
var attrs__60080__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64401__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__60081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64401__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__60082__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64401__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__60081__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__60081__auto__);
var attrs_value__60083__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__60080__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__60083__auto__], null),children__60081__auto____$1),css__60082__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq64400){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64400));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
