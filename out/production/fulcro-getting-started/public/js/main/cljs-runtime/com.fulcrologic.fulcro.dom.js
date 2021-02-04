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
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__58461){
var vec__58462 = p__58461;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58462,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58462,(1),null);
var pair = vec__58462;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__58468){
var vec__58469 = p__58468;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58469,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58469,(1),null);
var pair = vec__58469;
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
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__58483){
var vec__58484 = p__58483;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58484,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58484,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__58487 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58487,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__58487;
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
var G__58503 = arguments.length;
switch (G__58503) {
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
var G__58510 = component.refs;
var G__58510__$1 = (((G__58510 == null))?null:goog.object.get(G__58510,name));
if((G__58510__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__58510__$1);
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
var G__58516 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__58517 = (function (){var G__58518 = r;
if((G__58518 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__58518);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__58517) : ref.call(null,G__58517));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__58516) : factory.call(null,G__58516));
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
var G__58532 = arguments.length;
switch (G__58532) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___61808 = arguments.length;
var i__4731__auto___61809 = (0);
while(true){
if((i__4731__auto___61809 < len__4730__auto___61808)){
args_arr__4751__auto__.push((arguments[i__4731__auto___61809]));

var G__61811 = (i__4731__auto___61809 + (1));
i__4731__auto___61809 = G__61811;
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
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq58525){
var G__58526 = cljs.core.first(seq58525);
var seq58525__$1 = cljs.core.next(seq58525);
var G__58527 = cljs.core.first(seq58525__$1);
var seq58525__$2 = cljs.core.next(seq58525__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58526,G__58527,seq58525__$2);
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
var G__58561 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__58561) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__58561));
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

var x58571_61836 = ctor.prototype;
(x58571_61836.onChange = (function (event){
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

(x58571_61836.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state","cached-props","value");
var this_node = ReactDOM.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__58565_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__58565_SHARP_);
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
}),null)),null,-838575251);
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

(x58571_61836.render = (function (){
var this$ = this;
return React.createElement(element,goog.object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__61860__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.createElement,ctor,args);
};
var G__61860 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61865__i = 0, G__61865__a = new Array(arguments.length -  0);
while (G__61865__i < G__61865__a.length) {G__61865__a[G__61865__i] = arguments[G__61865__i + 0]; ++G__61865__i;}
  args = new cljs.core.IndexedSeq(G__61865__a,0,null);
} 
return G__61860__delegate.call(this,args);};
G__61860.cljs$lang$maxFixedArity = 0;
G__61860.cljs$lang$applyTo = (function (arglist__61872){
var args = cljs.core.seq(arglist__61872);
return G__61860__delegate(args);
});
G__61860.cljs$core$IFn$_invoke$arity$variadic = G__61860__delegate;
return G__61860;
})()
;
return (function() { 
var G__61874__delegate = function (props,children){
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
var G__61874 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__61876__i = 0, G__61876__a = new Array(arguments.length -  1);
while (G__61876__i < G__61876__a.length) {G__61876__a[G__61876__i] = arguments[G__61876__i + 1]; ++G__61876__i;}
  children = new cljs.core.IndexedSeq(G__61876__a,0,null);
} 
return G__61874__delegate.call(this,props,children);};
G__61874.cljs$lang$maxFixedArity = 1;
G__61874.cljs$lang$applyTo = (function (arglist__61877){
var props = cljs.core.first(arglist__61877);
var children = cljs.core.rest(arglist__61877);
return G__61874__delegate(props,children);
});
G__61874.cljs$core$IFn$_invoke$arity$variadic = G__61874__delegate;
return G__61874;
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
var G__58608 = tag;
switch (G__58608) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58608)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__58617 = arguments.length;
switch (G__58617) {
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
var vec__58621 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__58622 = cljs.core.seq(vec__58621);
var first__58623 = cljs.core.first(seq__58622);
var seq__58622__$1 = cljs.core.next(seq__58622);
var head = first__58623;
var tail = seq__58622__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__58626 = (function (){var G__58627 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58627,tail);

return G__58627;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58626) : f.call(null,G__58626));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__58630 = (function (){var G__58632 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58632,args);

return G__58632;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58630) : f.call(null,G__58630));
} else {
if(cljs.core.object_QMARK_(head)){
var G__58634 = (function (){var G__58635 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58635,tail);

return G__58635;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58634) : f.call(null,G__58634));
} else {
if(cljs.core.map_QMARK_(head)){
var G__58638 = (function (){var G__58639 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__58639,tail);

return G__58639;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58638) : f.call(null,G__58638));
} else {
var G__58640 = (function (){var G__58641 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58641,args);

return G__58641;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58640) : f.call(null,G__58640));

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
var G__58646 = arguments.length;
switch (G__58646) {
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
var vec__58652 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__58653 = cljs.core.seq(vec__58652);
var first__58654 = cljs.core.first(seq__58653);
var seq__58653__$1 = cljs.core.next(seq__58653);
var head = first__58654;
var tail = seq__58653__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__58655 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58655,tail);

return G__58655;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__58656 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58656,args);

return G__58656;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__58657 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58657,tail);

return G__58657;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__58661 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__58661,tail);

return G__58661;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__58663 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58663,args);

return G__58663;
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
var len__4730__auto___61927 = arguments.length;
var i__4731__auto___61928 = (0);
while(true){
if((i__4731__auto___61928 < len__4730__auto___61927)){
args__4736__auto__.push((arguments[i__4731__auto___61928]));

var G__61930 = (i__4731__auto___61928 + (1));
i__4731__auto___61928 = G__61930;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58680 = conformed_args__57018__auto__;
var map__58680__$1 = (((((!((map__58680 == null))))?(((((map__58680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58680):map__58680);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58680__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58680__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58680__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq58677){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58677));
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
var len__4730__auto___61933 = arguments.length;
var i__4731__auto___61934 = (0);
while(true){
if((i__4731__auto___61934 < len__4730__auto___61933)){
args__4736__auto__.push((arguments[i__4731__auto___61934]));

var G__61935 = (i__4731__auto___61934 + (1));
i__4731__auto___61934 = G__61935;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58688 = conformed_args__57018__auto__;
var map__58688__$1 = (((((!((map__58688 == null))))?(((((map__58688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58688):map__58688);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58688__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58688__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58688__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq58684){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58684));
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
var len__4730__auto___61947 = arguments.length;
var i__4731__auto___61948 = (0);
while(true){
if((i__4731__auto___61948 < len__4730__auto___61947)){
args__4736__auto__.push((arguments[i__4731__auto___61948]));

var G__61951 = (i__4731__auto___61948 + (1));
i__4731__auto___61948 = G__61951;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58699 = conformed_args__57018__auto__;
var map__58699__$1 = (((((!((map__58699 == null))))?(((((map__58699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58699):map__58699);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58699__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58699__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58699__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq58690){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58690));
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
var len__4730__auto___61984 = arguments.length;
var i__4731__auto___61985 = (0);
while(true){
if((i__4731__auto___61985 < len__4730__auto___61984)){
args__4736__auto__.push((arguments[i__4731__auto___61985]));

var G__61993 = (i__4731__auto___61985 + (1));
i__4731__auto___61985 = G__61993;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58706 = conformed_args__57018__auto__;
var map__58706__$1 = (((((!((map__58706 == null))))?(((((map__58706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58706):map__58706);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58706__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58706__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58706__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq58705){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58705));
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
var len__4730__auto___62017 = arguments.length;
var i__4731__auto___62018 = (0);
while(true){
if((i__4731__auto___62018 < len__4730__auto___62017)){
args__4736__auto__.push((arguments[i__4731__auto___62018]));

var G__62020 = (i__4731__auto___62018 + (1));
i__4731__auto___62018 = G__62020;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58721 = conformed_args__57018__auto__;
var map__58721__$1 = (((((!((map__58721 == null))))?(((((map__58721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58721):map__58721);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58721__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58721__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58721__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq58714){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58714));
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
var len__4730__auto___62076 = arguments.length;
var i__4731__auto___62077 = (0);
while(true){
if((i__4731__auto___62077 < len__4730__auto___62076)){
args__4736__auto__.push((arguments[i__4731__auto___62077]));

var G__62086 = (i__4731__auto___62077 + (1));
i__4731__auto___62077 = G__62086;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58733 = conformed_args__57018__auto__;
var map__58733__$1 = (((((!((map__58733 == null))))?(((((map__58733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58733):map__58733);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58733__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58733__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58733__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq58728){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58728));
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
var len__4730__auto___62128 = arguments.length;
var i__4731__auto___62130 = (0);
while(true){
if((i__4731__auto___62130 < len__4730__auto___62128)){
args__4736__auto__.push((arguments[i__4731__auto___62130]));

var G__62137 = (i__4731__auto___62130 + (1));
i__4731__auto___62130 = G__62137;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58744 = conformed_args__57018__auto__;
var map__58744__$1 = (((((!((map__58744 == null))))?(((((map__58744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58744):map__58744);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58744__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58744__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58744__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq58743){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58743));
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
var len__4730__auto___62178 = arguments.length;
var i__4731__auto___62181 = (0);
while(true){
if((i__4731__auto___62181 < len__4730__auto___62178)){
args__4736__auto__.push((arguments[i__4731__auto___62181]));

var G__62184 = (i__4731__auto___62181 + (1));
i__4731__auto___62181 = G__62184;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58762 = conformed_args__57018__auto__;
var map__58762__$1 = (((((!((map__58762 == null))))?(((((map__58762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58762):map__58762);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58762__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58762__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58762__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq58754){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58754));
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
var len__4730__auto___62208 = arguments.length;
var i__4731__auto___62209 = (0);
while(true){
if((i__4731__auto___62209 < len__4730__auto___62208)){
args__4736__auto__.push((arguments[i__4731__auto___62209]));

var G__62210 = (i__4731__auto___62209 + (1));
i__4731__auto___62209 = G__62210;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58768 = conformed_args__57018__auto__;
var map__58768__$1 = (((((!((map__58768 == null))))?(((((map__58768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58768):map__58768);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58768__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58768__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58768__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq58766){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58766));
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
var len__4730__auto___62220 = arguments.length;
var i__4731__auto___62221 = (0);
while(true){
if((i__4731__auto___62221 < len__4730__auto___62220)){
args__4736__auto__.push((arguments[i__4731__auto___62221]));

var G__62223 = (i__4731__auto___62221 + (1));
i__4731__auto___62221 = G__62223;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58778 = conformed_args__57018__auto__;
var map__58778__$1 = (((((!((map__58778 == null))))?(((((map__58778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58778):map__58778);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58778__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58778__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58778__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq58776){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58776));
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
var len__4730__auto___62232 = arguments.length;
var i__4731__auto___62233 = (0);
while(true){
if((i__4731__auto___62233 < len__4730__auto___62232)){
args__4736__auto__.push((arguments[i__4731__auto___62233]));

var G__62234 = (i__4731__auto___62233 + (1));
i__4731__auto___62233 = G__62234;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58787 = conformed_args__57018__auto__;
var map__58787__$1 = (((((!((map__58787 == null))))?(((((map__58787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58787):map__58787);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58787__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58787__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58787__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq58784){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58784));
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
var len__4730__auto___62241 = arguments.length;
var i__4731__auto___62242 = (0);
while(true){
if((i__4731__auto___62242 < len__4730__auto___62241)){
args__4736__auto__.push((arguments[i__4731__auto___62242]));

var G__62243 = (i__4731__auto___62242 + (1));
i__4731__auto___62242 = G__62243;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58808 = conformed_args__57018__auto__;
var map__58808__$1 = (((((!((map__58808 == null))))?(((((map__58808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58808):map__58808);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58808__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58808__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58808__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq58801){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58801));
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
var len__4730__auto___62251 = arguments.length;
var i__4731__auto___62252 = (0);
while(true){
if((i__4731__auto___62252 < len__4730__auto___62251)){
args__4736__auto__.push((arguments[i__4731__auto___62252]));

var G__62253 = (i__4731__auto___62252 + (1));
i__4731__auto___62252 = G__62253;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58824 = conformed_args__57018__auto__;
var map__58824__$1 = (((((!((map__58824 == null))))?(((((map__58824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58824):map__58824);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58824__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58824__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58824__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq58820){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58820));
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
var len__4730__auto___62260 = arguments.length;
var i__4731__auto___62261 = (0);
while(true){
if((i__4731__auto___62261 < len__4730__auto___62260)){
args__4736__auto__.push((arguments[i__4731__auto___62261]));

var G__62262 = (i__4731__auto___62261 + (1));
i__4731__auto___62261 = G__62262;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58835 = conformed_args__57018__auto__;
var map__58835__$1 = (((((!((map__58835 == null))))?(((((map__58835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58835):map__58835);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58835__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58835__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58835__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq58833){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58833));
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
var len__4730__auto___62271 = arguments.length;
var i__4731__auto___62272 = (0);
while(true){
if((i__4731__auto___62272 < len__4730__auto___62271)){
args__4736__auto__.push((arguments[i__4731__auto___62272]));

var G__62274 = (i__4731__auto___62272 + (1));
i__4731__auto___62272 = G__62274;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58848 = conformed_args__57018__auto__;
var map__58848__$1 = (((((!((map__58848 == null))))?(((((map__58848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58848):map__58848);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58848__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58848__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58848__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq58842){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58842));
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
var len__4730__auto___62286 = arguments.length;
var i__4731__auto___62287 = (0);
while(true){
if((i__4731__auto___62287 < len__4730__auto___62286)){
args__4736__auto__.push((arguments[i__4731__auto___62287]));

var G__62290 = (i__4731__auto___62287 + (1));
i__4731__auto___62287 = G__62290;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58858 = conformed_args__57018__auto__;
var map__58858__$1 = (((((!((map__58858 == null))))?(((((map__58858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58858):map__58858);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58858__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58858__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58858__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq58850){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58850));
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
var len__4730__auto___62303 = arguments.length;
var i__4731__auto___62304 = (0);
while(true){
if((i__4731__auto___62304 < len__4730__auto___62303)){
args__4736__auto__.push((arguments[i__4731__auto___62304]));

var G__62305 = (i__4731__auto___62304 + (1));
i__4731__auto___62304 = G__62305;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58921 = conformed_args__57018__auto__;
var map__58921__$1 = (((((!((map__58921 == null))))?(((((map__58921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58921):map__58921);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58921__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58921__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58921__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq58904){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58904));
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
var len__4730__auto___62314 = arguments.length;
var i__4731__auto___62316 = (0);
while(true){
if((i__4731__auto___62316 < len__4730__auto___62314)){
args__4736__auto__.push((arguments[i__4731__auto___62316]));

var G__62317 = (i__4731__auto___62316 + (1));
i__4731__auto___62316 = G__62317;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58937 = conformed_args__57018__auto__;
var map__58937__$1 = (((((!((map__58937 == null))))?(((((map__58937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58937):map__58937);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58937__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58937__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58937__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq58935){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58935));
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
var len__4730__auto___62338 = arguments.length;
var i__4731__auto___62339 = (0);
while(true){
if((i__4731__auto___62339 < len__4730__auto___62338)){
args__4736__auto__.push((arguments[i__4731__auto___62339]));

var G__62346 = (i__4731__auto___62339 + (1));
i__4731__auto___62339 = G__62346;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58943 = conformed_args__57018__auto__;
var map__58943__$1 = (((((!((map__58943 == null))))?(((((map__58943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58943):map__58943);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58943__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58943__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58943__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq58941){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58941));
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
var len__4730__auto___62351 = arguments.length;
var i__4731__auto___62352 = (0);
while(true){
if((i__4731__auto___62352 < len__4730__auto___62351)){
args__4736__auto__.push((arguments[i__4731__auto___62352]));

var G__62353 = (i__4731__auto___62352 + (1));
i__4731__auto___62352 = G__62353;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58951 = conformed_args__57018__auto__;
var map__58951__$1 = (((((!((map__58951 == null))))?(((((map__58951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58951):map__58951);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58951__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58951__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58951__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq58950){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58950));
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
var len__4730__auto___62368 = arguments.length;
var i__4731__auto___62369 = (0);
while(true){
if((i__4731__auto___62369 < len__4730__auto___62368)){
args__4736__auto__.push((arguments[i__4731__auto___62369]));

var G__62370 = (i__4731__auto___62369 + (1));
i__4731__auto___62369 = G__62370;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58962 = conformed_args__57018__auto__;
var map__58962__$1 = (((((!((map__58962 == null))))?(((((map__58962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58962):map__58962);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58962__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58962__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58962__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq58956){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58956));
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
var len__4730__auto___62377 = arguments.length;
var i__4731__auto___62378 = (0);
while(true){
if((i__4731__auto___62378 < len__4730__auto___62377)){
args__4736__auto__.push((arguments[i__4731__auto___62378]));

var G__62380 = (i__4731__auto___62378 + (1));
i__4731__auto___62378 = G__62380;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58969 = conformed_args__57018__auto__;
var map__58969__$1 = (((((!((map__58969 == null))))?(((((map__58969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58969):map__58969);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58969__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58969__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58969__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq58968){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58968));
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
var len__4730__auto___62396 = arguments.length;
var i__4731__auto___62397 = (0);
while(true){
if((i__4731__auto___62397 < len__4730__auto___62396)){
args__4736__auto__.push((arguments[i__4731__auto___62397]));

var G__62401 = (i__4731__auto___62397 + (1));
i__4731__auto___62397 = G__62401;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58974 = conformed_args__57018__auto__;
var map__58974__$1 = (((((!((map__58974 == null))))?(((((map__58974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58974):map__58974);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58974__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58974__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58974__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq58973){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58973));
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
var len__4730__auto___62412 = arguments.length;
var i__4731__auto___62413 = (0);
while(true){
if((i__4731__auto___62413 < len__4730__auto___62412)){
args__4736__auto__.push((arguments[i__4731__auto___62413]));

var G__62414 = (i__4731__auto___62413 + (1));
i__4731__auto___62413 = G__62414;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58977 = conformed_args__57018__auto__;
var map__58977__$1 = (((((!((map__58977 == null))))?(((((map__58977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58977):map__58977);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58977__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58977__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58977__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq58976){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58976));
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
var len__4730__auto___62425 = arguments.length;
var i__4731__auto___62427 = (0);
while(true){
if((i__4731__auto___62427 < len__4730__auto___62425)){
args__4736__auto__.push((arguments[i__4731__auto___62427]));

var G__62429 = (i__4731__auto___62427 + (1));
i__4731__auto___62427 = G__62429;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58980 = conformed_args__57018__auto__;
var map__58980__$1 = (((((!((map__58980 == null))))?(((((map__58980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58980):map__58980);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58980__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58980__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58980__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq58979){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58979));
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
var len__4730__auto___62438 = arguments.length;
var i__4731__auto___62439 = (0);
while(true){
if((i__4731__auto___62439 < len__4730__auto___62438)){
args__4736__auto__.push((arguments[i__4731__auto___62439]));

var G__62440 = (i__4731__auto___62439 + (1));
i__4731__auto___62439 = G__62440;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58989 = conformed_args__57018__auto__;
var map__58989__$1 = (((((!((map__58989 == null))))?(((((map__58989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58989):map__58989);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58989__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58989__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58989__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq58984){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58984));
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
var len__4730__auto___62451 = arguments.length;
var i__4731__auto___62452 = (0);
while(true){
if((i__4731__auto___62452 < len__4730__auto___62451)){
args__4736__auto__.push((arguments[i__4731__auto___62452]));

var G__62455 = (i__4731__auto___62452 + (1));
i__4731__auto___62452 = G__62455;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58996 = conformed_args__57018__auto__;
var map__58996__$1 = (((((!((map__58996 == null))))?(((((map__58996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58996):map__58996);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58996__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58996__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58996__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq58993){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58993));
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
var len__4730__auto___62464 = arguments.length;
var i__4731__auto___62465 = (0);
while(true){
if((i__4731__auto___62465 < len__4730__auto___62464)){
args__4736__auto__.push((arguments[i__4731__auto___62465]));

var G__62466 = (i__4731__auto___62465 + (1));
i__4731__auto___62465 = G__62466;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59005 = conformed_args__57018__auto__;
var map__59005__$1 = (((((!((map__59005 == null))))?(((((map__59005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59005):map__59005);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59005__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59005__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59005__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq59004){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59004));
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
var len__4730__auto___62475 = arguments.length;
var i__4731__auto___62476 = (0);
while(true){
if((i__4731__auto___62476 < len__4730__auto___62475)){
args__4736__auto__.push((arguments[i__4731__auto___62476]));

var G__62477 = (i__4731__auto___62476 + (1));
i__4731__auto___62476 = G__62477;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59018 = conformed_args__57018__auto__;
var map__59018__$1 = (((((!((map__59018 == null))))?(((((map__59018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59018):map__59018);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59018__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59018__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59018__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq59014){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59014));
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
var len__4730__auto___62488 = arguments.length;
var i__4731__auto___62489 = (0);
while(true){
if((i__4731__auto___62489 < len__4730__auto___62488)){
args__4736__auto__.push((arguments[i__4731__auto___62489]));

var G__62492 = (i__4731__auto___62489 + (1));
i__4731__auto___62489 = G__62492;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59026 = conformed_args__57018__auto__;
var map__59026__$1 = (((((!((map__59026 == null))))?(((((map__59026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59026):map__59026);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59026__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59026__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59026__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq59023){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59023));
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
var len__4730__auto___62512 = arguments.length;
var i__4731__auto___62513 = (0);
while(true){
if((i__4731__auto___62513 < len__4730__auto___62512)){
args__4736__auto__.push((arguments[i__4731__auto___62513]));

var G__62515 = (i__4731__auto___62513 + (1));
i__4731__auto___62513 = G__62515;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59035 = conformed_args__57018__auto__;
var map__59035__$1 = (((((!((map__59035 == null))))?(((((map__59035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59035):map__59035);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59035__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59035__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59035__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq59032){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59032));
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
var len__4730__auto___62529 = arguments.length;
var i__4731__auto___62531 = (0);
while(true){
if((i__4731__auto___62531 < len__4730__auto___62529)){
args__4736__auto__.push((arguments[i__4731__auto___62531]));

var G__62532 = (i__4731__auto___62531 + (1));
i__4731__auto___62531 = G__62532;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59055 = conformed_args__57018__auto__;
var map__59055__$1 = (((((!((map__59055 == null))))?(((((map__59055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59055):map__59055);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59055__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59055__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59055__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq59048){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59048));
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
var len__4730__auto___62539 = arguments.length;
var i__4731__auto___62540 = (0);
while(true){
if((i__4731__auto___62540 < len__4730__auto___62539)){
args__4736__auto__.push((arguments[i__4731__auto___62540]));

var G__62541 = (i__4731__auto___62540 + (1));
i__4731__auto___62540 = G__62541;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59067 = conformed_args__57018__auto__;
var map__59067__$1 = (((((!((map__59067 == null))))?(((((map__59067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59067):map__59067);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59067__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59067__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59067__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq59061){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59061));
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
var len__4730__auto___62553 = arguments.length;
var i__4731__auto___62555 = (0);
while(true){
if((i__4731__auto___62555 < len__4730__auto___62553)){
args__4736__auto__.push((arguments[i__4731__auto___62555]));

var G__62558 = (i__4731__auto___62555 + (1));
i__4731__auto___62555 = G__62558;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59076 = conformed_args__57018__auto__;
var map__59076__$1 = (((((!((map__59076 == null))))?(((((map__59076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59076):map__59076);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59076__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59076__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59076__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq59072){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59072));
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
var len__4730__auto___62574 = arguments.length;
var i__4731__auto___62575 = (0);
while(true){
if((i__4731__auto___62575 < len__4730__auto___62574)){
args__4736__auto__.push((arguments[i__4731__auto___62575]));

var G__62576 = (i__4731__auto___62575 + (1));
i__4731__auto___62575 = G__62576;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59082 = conformed_args__57018__auto__;
var map__59082__$1 = (((((!((map__59082 == null))))?(((((map__59082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59082):map__59082);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59082__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59082__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59082__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq59081){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59081));
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
var len__4730__auto___62590 = arguments.length;
var i__4731__auto___62592 = (0);
while(true){
if((i__4731__auto___62592 < len__4730__auto___62590)){
args__4736__auto__.push((arguments[i__4731__auto___62592]));

var G__62593 = (i__4731__auto___62592 + (1));
i__4731__auto___62592 = G__62593;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59096 = conformed_args__57018__auto__;
var map__59096__$1 = (((((!((map__59096 == null))))?(((((map__59096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59096):map__59096);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59096__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59096__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59096__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq59094){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59094));
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
var len__4730__auto___62612 = arguments.length;
var i__4731__auto___62613 = (0);
while(true){
if((i__4731__auto___62613 < len__4730__auto___62612)){
args__4736__auto__.push((arguments[i__4731__auto___62613]));

var G__62614 = (i__4731__auto___62613 + (1));
i__4731__auto___62613 = G__62614;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59104 = conformed_args__57018__auto__;
var map__59104__$1 = (((((!((map__59104 == null))))?(((((map__59104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59104):map__59104);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59104__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59104__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59104__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq59102){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59102));
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
var len__4730__auto___62619 = arguments.length;
var i__4731__auto___62620 = (0);
while(true){
if((i__4731__auto___62620 < len__4730__auto___62619)){
args__4736__auto__.push((arguments[i__4731__auto___62620]));

var G__62621 = (i__4731__auto___62620 + (1));
i__4731__auto___62620 = G__62621;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59110 = conformed_args__57018__auto__;
var map__59110__$1 = (((((!((map__59110 == null))))?(((((map__59110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59110):map__59110);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59110__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59110__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59110__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq59108){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59108));
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
var len__4730__auto___62623 = arguments.length;
var i__4731__auto___62624 = (0);
while(true){
if((i__4731__auto___62624 < len__4730__auto___62623)){
args__4736__auto__.push((arguments[i__4731__auto___62624]));

var G__62625 = (i__4731__auto___62624 + (1));
i__4731__auto___62624 = G__62625;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59116 = conformed_args__57018__auto__;
var map__59116__$1 = (((((!((map__59116 == null))))?(((((map__59116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59116):map__59116);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59116__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59116__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59116__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq59114){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59114));
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
var len__4730__auto___62630 = arguments.length;
var i__4731__auto___62631 = (0);
while(true){
if((i__4731__auto___62631 < len__4730__auto___62630)){
args__4736__auto__.push((arguments[i__4731__auto___62631]));

var G__62634 = (i__4731__auto___62631 + (1));
i__4731__auto___62631 = G__62634;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59123 = conformed_args__57018__auto__;
var map__59123__$1 = (((((!((map__59123 == null))))?(((((map__59123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59123):map__59123);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59123__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59123__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59123__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq59120){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59120));
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
var len__4730__auto___62643 = arguments.length;
var i__4731__auto___62644 = (0);
while(true){
if((i__4731__auto___62644 < len__4730__auto___62643)){
args__4736__auto__.push((arguments[i__4731__auto___62644]));

var G__62645 = (i__4731__auto___62644 + (1));
i__4731__auto___62644 = G__62645;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59147 = conformed_args__57018__auto__;
var map__59147__$1 = (((((!((map__59147 == null))))?(((((map__59147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59147):map__59147);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59147__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59147__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59147__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq59137){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59137));
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
var len__4730__auto___62649 = arguments.length;
var i__4731__auto___62651 = (0);
while(true){
if((i__4731__auto___62651 < len__4730__auto___62649)){
args__4736__auto__.push((arguments[i__4731__auto___62651]));

var G__62652 = (i__4731__auto___62651 + (1));
i__4731__auto___62651 = G__62652;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59153 = conformed_args__57018__auto__;
var map__59153__$1 = (((((!((map__59153 == null))))?(((((map__59153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59153):map__59153);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59153__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59153__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59153__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq59151){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59151));
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
var len__4730__auto___62660 = arguments.length;
var i__4731__auto___62661 = (0);
while(true){
if((i__4731__auto___62661 < len__4730__auto___62660)){
args__4736__auto__.push((arguments[i__4731__auto___62661]));

var G__62663 = (i__4731__auto___62661 + (1));
i__4731__auto___62661 = G__62663;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59172 = conformed_args__57018__auto__;
var map__59172__$1 = (((((!((map__59172 == null))))?(((((map__59172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59172):map__59172);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59172__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59172__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59172__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq59162){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59162));
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
var len__4730__auto___62670 = arguments.length;
var i__4731__auto___62671 = (0);
while(true){
if((i__4731__auto___62671 < len__4730__auto___62670)){
args__4736__auto__.push((arguments[i__4731__auto___62671]));

var G__62672 = (i__4731__auto___62671 + (1));
i__4731__auto___62671 = G__62672;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59179 = conformed_args__57018__auto__;
var map__59179__$1 = (((((!((map__59179 == null))))?(((((map__59179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59179):map__59179);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59179__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59179__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59179__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq59174){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59174));
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
var len__4730__auto___62680 = arguments.length;
var i__4731__auto___62682 = (0);
while(true){
if((i__4731__auto___62682 < len__4730__auto___62680)){
args__4736__auto__.push((arguments[i__4731__auto___62682]));

var G__62685 = (i__4731__auto___62682 + (1));
i__4731__auto___62682 = G__62685;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59186 = conformed_args__57018__auto__;
var map__59186__$1 = (((((!((map__59186 == null))))?(((((map__59186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59186):map__59186);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59186__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59186__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59186__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq59185){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59185));
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
var len__4730__auto___62691 = arguments.length;
var i__4731__auto___62693 = (0);
while(true){
if((i__4731__auto___62693 < len__4730__auto___62691)){
args__4736__auto__.push((arguments[i__4731__auto___62693]));

var G__62694 = (i__4731__auto___62693 + (1));
i__4731__auto___62693 = G__62694;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59197 = conformed_args__57018__auto__;
var map__59197__$1 = (((((!((map__59197 == null))))?(((((map__59197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59197):map__59197);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59197__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59197__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59197__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq59195){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59195));
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
var len__4730__auto___62697 = arguments.length;
var i__4731__auto___62698 = (0);
while(true){
if((i__4731__auto___62698 < len__4730__auto___62697)){
args__4736__auto__.push((arguments[i__4731__auto___62698]));

var G__62700 = (i__4731__auto___62698 + (1));
i__4731__auto___62698 = G__62700;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59206 = conformed_args__57018__auto__;
var map__59206__$1 = (((((!((map__59206 == null))))?(((((map__59206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59206):map__59206);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59206__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq59205){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59205));
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
var len__4730__auto___62726 = arguments.length;
var i__4731__auto___62727 = (0);
while(true){
if((i__4731__auto___62727 < len__4730__auto___62726)){
args__4736__auto__.push((arguments[i__4731__auto___62727]));

var G__62728 = (i__4731__auto___62727 + (1));
i__4731__auto___62727 = G__62728;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59232 = conformed_args__57018__auto__;
var map__59232__$1 = (((((!((map__59232 == null))))?(((((map__59232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59232):map__59232);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59232__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59232__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59232__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq59216){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59216));
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
var len__4730__auto___62747 = arguments.length;
var i__4731__auto___62748 = (0);
while(true){
if((i__4731__auto___62748 < len__4730__auto___62747)){
args__4736__auto__.push((arguments[i__4731__auto___62748]));

var G__62752 = (i__4731__auto___62748 + (1));
i__4731__auto___62748 = G__62752;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59242 = conformed_args__57018__auto__;
var map__59242__$1 = (((((!((map__59242 == null))))?(((((map__59242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59242):map__59242);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59242__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59242__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59242__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq59241){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59241));
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
var len__4730__auto___62760 = arguments.length;
var i__4731__auto___62762 = (0);
while(true){
if((i__4731__auto___62762 < len__4730__auto___62760)){
args__4736__auto__.push((arguments[i__4731__auto___62762]));

var G__62765 = (i__4731__auto___62762 + (1));
i__4731__auto___62762 = G__62765;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59248 = conformed_args__57018__auto__;
var map__59248__$1 = (((((!((map__59248 == null))))?(((((map__59248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59248):map__59248);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59248__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59248__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59248__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq59245){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59245));
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
var len__4730__auto___62774 = arguments.length;
var i__4731__auto___62775 = (0);
while(true){
if((i__4731__auto___62775 < len__4730__auto___62774)){
args__4736__auto__.push((arguments[i__4731__auto___62775]));

var G__62777 = (i__4731__auto___62775 + (1));
i__4731__auto___62775 = G__62777;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59261 = conformed_args__57018__auto__;
var map__59261__$1 = (((((!((map__59261 == null))))?(((((map__59261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59261):map__59261);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59261__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59261__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59261__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq59257){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59257));
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
var len__4730__auto___62781 = arguments.length;
var i__4731__auto___62782 = (0);
while(true){
if((i__4731__auto___62782 < len__4730__auto___62781)){
args__4736__auto__.push((arguments[i__4731__auto___62782]));

var G__62783 = (i__4731__auto___62782 + (1));
i__4731__auto___62782 = G__62783;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59268 = conformed_args__57018__auto__;
var map__59268__$1 = (((((!((map__59268 == null))))?(((((map__59268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59268):map__59268);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59268__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59268__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59268__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq59265){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59265));
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
var len__4730__auto___62800 = arguments.length;
var i__4731__auto___62803 = (0);
while(true){
if((i__4731__auto___62803 < len__4730__auto___62800)){
args__4736__auto__.push((arguments[i__4731__auto___62803]));

var G__62805 = (i__4731__auto___62803 + (1));
i__4731__auto___62803 = G__62805;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59280 = conformed_args__57018__auto__;
var map__59280__$1 = (((((!((map__59280 == null))))?(((((map__59280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59280):map__59280);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59280__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59280__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59280__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq59274){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59274));
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
var len__4730__auto___62820 = arguments.length;
var i__4731__auto___62822 = (0);
while(true){
if((i__4731__auto___62822 < len__4730__auto___62820)){
args__4736__auto__.push((arguments[i__4731__auto___62822]));

var G__62827 = (i__4731__auto___62822 + (1));
i__4731__auto___62822 = G__62827;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59291 = conformed_args__57018__auto__;
var map__59291__$1 = (((((!((map__59291 == null))))?(((((map__59291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59291):map__59291);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59291__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59291__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59291__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq59287){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59287));
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
var len__4730__auto___62845 = arguments.length;
var i__4731__auto___62846 = (0);
while(true){
if((i__4731__auto___62846 < len__4730__auto___62845)){
args__4736__auto__.push((arguments[i__4731__auto___62846]));

var G__62847 = (i__4731__auto___62846 + (1));
i__4731__auto___62846 = G__62847;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59300 = conformed_args__57018__auto__;
var map__59300__$1 = (((((!((map__59300 == null))))?(((((map__59300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59300):map__59300);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59300__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59300__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59300__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq59297){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59297));
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
var len__4730__auto___62860 = arguments.length;
var i__4731__auto___62862 = (0);
while(true){
if((i__4731__auto___62862 < len__4730__auto___62860)){
args__4736__auto__.push((arguments[i__4731__auto___62862]));

var G__62863 = (i__4731__auto___62862 + (1));
i__4731__auto___62862 = G__62863;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59312 = conformed_args__57018__auto__;
var map__59312__$1 = (((((!((map__59312 == null))))?(((((map__59312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59312):map__59312);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59312__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59312__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59312__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq59306){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59306));
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
var len__4730__auto___62875 = arguments.length;
var i__4731__auto___62876 = (0);
while(true){
if((i__4731__auto___62876 < len__4730__auto___62875)){
args__4736__auto__.push((arguments[i__4731__auto___62876]));

var G__62878 = (i__4731__auto___62876 + (1));
i__4731__auto___62876 = G__62878;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59321 = conformed_args__57018__auto__;
var map__59321__$1 = (((((!((map__59321 == null))))?(((((map__59321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59321):map__59321);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59321__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59321__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59321__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq59318){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59318));
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
var len__4730__auto___62886 = arguments.length;
var i__4731__auto___62887 = (0);
while(true){
if((i__4731__auto___62887 < len__4730__auto___62886)){
args__4736__auto__.push((arguments[i__4731__auto___62887]));

var G__62889 = (i__4731__auto___62887 + (1));
i__4731__auto___62887 = G__62889;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59332 = conformed_args__57018__auto__;
var map__59332__$1 = (((((!((map__59332 == null))))?(((((map__59332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59332):map__59332);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59332__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59332__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59332__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq59330){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59330));
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
var len__4730__auto___62895 = arguments.length;
var i__4731__auto___62896 = (0);
while(true){
if((i__4731__auto___62896 < len__4730__auto___62895)){
args__4736__auto__.push((arguments[i__4731__auto___62896]));

var G__62897 = (i__4731__auto___62896 + (1));
i__4731__auto___62896 = G__62897;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59342 = conformed_args__57018__auto__;
var map__59342__$1 = (((((!((map__59342 == null))))?(((((map__59342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59342):map__59342);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59342__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59342__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59342__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq59336){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59336));
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
var len__4730__auto___62910 = arguments.length;
var i__4731__auto___62911 = (0);
while(true){
if((i__4731__auto___62911 < len__4730__auto___62910)){
args__4736__auto__.push((arguments[i__4731__auto___62911]));

var G__62912 = (i__4731__auto___62911 + (1));
i__4731__auto___62911 = G__62912;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59349 = conformed_args__57018__auto__;
var map__59349__$1 = (((((!((map__59349 == null))))?(((((map__59349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59349):map__59349);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59349__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59349__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59349__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq59346){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59346));
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
var len__4730__auto___62915 = arguments.length;
var i__4731__auto___62916 = (0);
while(true){
if((i__4731__auto___62916 < len__4730__auto___62915)){
args__4736__auto__.push((arguments[i__4731__auto___62916]));

var G__62917 = (i__4731__auto___62916 + (1));
i__4731__auto___62916 = G__62917;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59357 = conformed_args__57018__auto__;
var map__59357__$1 = (((((!((map__59357 == null))))?(((((map__59357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59357):map__59357);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59357__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59357__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59357__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq59355){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59355));
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
var len__4730__auto___62925 = arguments.length;
var i__4731__auto___62926 = (0);
while(true){
if((i__4731__auto___62926 < len__4730__auto___62925)){
args__4736__auto__.push((arguments[i__4731__auto___62926]));

var G__62928 = (i__4731__auto___62926 + (1));
i__4731__auto___62926 = G__62928;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59379 = conformed_args__57018__auto__;
var map__59379__$1 = (((((!((map__59379 == null))))?(((((map__59379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59379):map__59379);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59379__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59379__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59379__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq59375){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59375));
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
var len__4730__auto___62943 = arguments.length;
var i__4731__auto___62947 = (0);
while(true){
if((i__4731__auto___62947 < len__4730__auto___62943)){
args__4736__auto__.push((arguments[i__4731__auto___62947]));

var G__62948 = (i__4731__auto___62947 + (1));
i__4731__auto___62947 = G__62948;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59398 = conformed_args__57018__auto__;
var map__59398__$1 = (((((!((map__59398 == null))))?(((((map__59398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59398):map__59398);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59398__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59398__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59398__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq59391){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59391));
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
var len__4730__auto___62966 = arguments.length;
var i__4731__auto___62967 = (0);
while(true){
if((i__4731__auto___62967 < len__4730__auto___62966)){
args__4736__auto__.push((arguments[i__4731__auto___62967]));

var G__62972 = (i__4731__auto___62967 + (1));
i__4731__auto___62967 = G__62972;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59416 = conformed_args__57018__auto__;
var map__59416__$1 = (((((!((map__59416 == null))))?(((((map__59416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59416):map__59416);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59416__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59416__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59416__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq59410){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59410));
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
var len__4730__auto___62991 = arguments.length;
var i__4731__auto___62992 = (0);
while(true){
if((i__4731__auto___62992 < len__4730__auto___62991)){
args__4736__auto__.push((arguments[i__4731__auto___62992]));

var G__62995 = (i__4731__auto___62992 + (1));
i__4731__auto___62992 = G__62995;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59425 = conformed_args__57018__auto__;
var map__59425__$1 = (((((!((map__59425 == null))))?(((((map__59425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59425):map__59425);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59425__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59425__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59425__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq59420){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59420));
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
var len__4730__auto___63005 = arguments.length;
var i__4731__auto___63006 = (0);
while(true){
if((i__4731__auto___63006 < len__4730__auto___63005)){
args__4736__auto__.push((arguments[i__4731__auto___63006]));

var G__63007 = (i__4731__auto___63006 + (1));
i__4731__auto___63006 = G__63007;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59434 = conformed_args__57018__auto__;
var map__59434__$1 = (((((!((map__59434 == null))))?(((((map__59434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59434):map__59434);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59434__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59434__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59434__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq59428){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59428));
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
var len__4730__auto___63010 = arguments.length;
var i__4731__auto___63011 = (0);
while(true){
if((i__4731__auto___63011 < len__4730__auto___63010)){
args__4736__auto__.push((arguments[i__4731__auto___63011]));

var G__63012 = (i__4731__auto___63011 + (1));
i__4731__auto___63011 = G__63012;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59449 = conformed_args__57018__auto__;
var map__59449__$1 = (((((!((map__59449 == null))))?(((((map__59449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59449):map__59449);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59449__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59449__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59449__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq59442){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59442));
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
var len__4730__auto___63018 = arguments.length;
var i__4731__auto___63019 = (0);
while(true){
if((i__4731__auto___63019 < len__4730__auto___63018)){
args__4736__auto__.push((arguments[i__4731__auto___63019]));

var G__63020 = (i__4731__auto___63019 + (1));
i__4731__auto___63019 = G__63020;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59468 = conformed_args__57018__auto__;
var map__59468__$1 = (((((!((map__59468 == null))))?(((((map__59468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59468):map__59468);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59468__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59468__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59468__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq59460){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59460));
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
var len__4730__auto___63033 = arguments.length;
var i__4731__auto___63034 = (0);
while(true){
if((i__4731__auto___63034 < len__4730__auto___63033)){
args__4736__auto__.push((arguments[i__4731__auto___63034]));

var G__63035 = (i__4731__auto___63034 + (1));
i__4731__auto___63034 = G__63035;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59476 = conformed_args__57018__auto__;
var map__59476__$1 = (((((!((map__59476 == null))))?(((((map__59476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59476):map__59476);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59476__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59476__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59476__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq59474){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59474));
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
var len__4730__auto___63045 = arguments.length;
var i__4731__auto___63046 = (0);
while(true){
if((i__4731__auto___63046 < len__4730__auto___63045)){
args__4736__auto__.push((arguments[i__4731__auto___63046]));

var G__63048 = (i__4731__auto___63046 + (1));
i__4731__auto___63046 = G__63048;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59491 = conformed_args__57018__auto__;
var map__59491__$1 = (((((!((map__59491 == null))))?(((((map__59491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59491):map__59491);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59491__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59491__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59491__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq59485){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59485));
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
var len__4730__auto___63058 = arguments.length;
var i__4731__auto___63064 = (0);
while(true){
if((i__4731__auto___63064 < len__4730__auto___63058)){
args__4736__auto__.push((arguments[i__4731__auto___63064]));

var G__63065 = (i__4731__auto___63064 + (1));
i__4731__auto___63064 = G__63065;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59507 = conformed_args__57018__auto__;
var map__59507__$1 = (((((!((map__59507 == null))))?(((((map__59507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59507):map__59507);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59507__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59507__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59507__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq59504){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59504));
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
var len__4730__auto___63075 = arguments.length;
var i__4731__auto___63076 = (0);
while(true){
if((i__4731__auto___63076 < len__4730__auto___63075)){
args__4736__auto__.push((arguments[i__4731__auto___63076]));

var G__63078 = (i__4731__auto___63076 + (1));
i__4731__auto___63076 = G__63078;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59522 = conformed_args__57018__auto__;
var map__59522__$1 = (((((!((map__59522 == null))))?(((((map__59522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59522):map__59522);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59522__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59522__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59522__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq59516){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59516));
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
var len__4730__auto___63100 = arguments.length;
var i__4731__auto___63102 = (0);
while(true){
if((i__4731__auto___63102 < len__4730__auto___63100)){
args__4736__auto__.push((arguments[i__4731__auto___63102]));

var G__63103 = (i__4731__auto___63102 + (1));
i__4731__auto___63102 = G__63103;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59533 = conformed_args__57018__auto__;
var map__59533__$1 = (((((!((map__59533 == null))))?(((((map__59533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59533):map__59533);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59533__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59533__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59533__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq59529){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59529));
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
var len__4730__auto___63110 = arguments.length;
var i__4731__auto___63111 = (0);
while(true){
if((i__4731__auto___63111 < len__4730__auto___63110)){
args__4736__auto__.push((arguments[i__4731__auto___63111]));

var G__63116 = (i__4731__auto___63111 + (1));
i__4731__auto___63111 = G__63116;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59550 = conformed_args__57018__auto__;
var map__59550__$1 = (((((!((map__59550 == null))))?(((((map__59550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59550):map__59550);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59550__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59550__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59550__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq59540){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59540));
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
var len__4730__auto___63142 = arguments.length;
var i__4731__auto___63143 = (0);
while(true){
if((i__4731__auto___63143 < len__4730__auto___63142)){
args__4736__auto__.push((arguments[i__4731__auto___63143]));

var G__63148 = (i__4731__auto___63143 + (1));
i__4731__auto___63143 = G__63148;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59558 = conformed_args__57018__auto__;
var map__59558__$1 = (((((!((map__59558 == null))))?(((((map__59558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59558):map__59558);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59558__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59558__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59558__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq59556){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59556));
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
var len__4730__auto___63168 = arguments.length;
var i__4731__auto___63173 = (0);
while(true){
if((i__4731__auto___63173 < len__4730__auto___63168)){
args__4736__auto__.push((arguments[i__4731__auto___63173]));

var G__63175 = (i__4731__auto___63173 + (1));
i__4731__auto___63173 = G__63175;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59566 = conformed_args__57018__auto__;
var map__59566__$1 = (((((!((map__59566 == null))))?(((((map__59566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59566):map__59566);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59566__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59566__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59566__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq59564){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59564));
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
var len__4730__auto___63212 = arguments.length;
var i__4731__auto___63213 = (0);
while(true){
if((i__4731__auto___63213 < len__4730__auto___63212)){
args__4736__auto__.push((arguments[i__4731__auto___63213]));

var G__63214 = (i__4731__auto___63213 + (1));
i__4731__auto___63213 = G__63214;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59576 = conformed_args__57018__auto__;
var map__59576__$1 = (((((!((map__59576 == null))))?(((((map__59576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59576):map__59576);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59576__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59576__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59576__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq59574){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59574));
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
var len__4730__auto___63233 = arguments.length;
var i__4731__auto___63234 = (0);
while(true){
if((i__4731__auto___63234 < len__4730__auto___63233)){
args__4736__auto__.push((arguments[i__4731__auto___63234]));

var G__63235 = (i__4731__auto___63234 + (1));
i__4731__auto___63234 = G__63235;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59589 = conformed_args__57018__auto__;
var map__59589__$1 = (((((!((map__59589 == null))))?(((((map__59589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59589):map__59589);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59589__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59589__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59589__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq59583){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59583));
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
var len__4730__auto___63246 = arguments.length;
var i__4731__auto___63247 = (0);
while(true){
if((i__4731__auto___63247 < len__4730__auto___63246)){
args__4736__auto__.push((arguments[i__4731__auto___63247]));

var G__63248 = (i__4731__auto___63247 + (1));
i__4731__auto___63247 = G__63248;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59601 = conformed_args__57018__auto__;
var map__59601__$1 = (((((!((map__59601 == null))))?(((((map__59601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59601):map__59601);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59601__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59601__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59601__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq59593){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59593));
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
var len__4730__auto___63257 = arguments.length;
var i__4731__auto___63258 = (0);
while(true){
if((i__4731__auto___63258 < len__4730__auto___63257)){
args__4736__auto__.push((arguments[i__4731__auto___63258]));

var G__63259 = (i__4731__auto___63258 + (1));
i__4731__auto___63258 = G__63259;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59615 = conformed_args__57018__auto__;
var map__59615__$1 = (((((!((map__59615 == null))))?(((((map__59615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59615):map__59615);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59615__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59615__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59615__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq59608){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59608));
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
var len__4730__auto___63266 = arguments.length;
var i__4731__auto___63267 = (0);
while(true){
if((i__4731__auto___63267 < len__4730__auto___63266)){
args__4736__auto__.push((arguments[i__4731__auto___63267]));

var G__63269 = (i__4731__auto___63267 + (1));
i__4731__auto___63267 = G__63269;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59622 = conformed_args__57018__auto__;
var map__59622__$1 = (((((!((map__59622 == null))))?(((((map__59622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59622):map__59622);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59622__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59622__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59622__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq59620){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59620));
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
var len__4730__auto___63284 = arguments.length;
var i__4731__auto___63285 = (0);
while(true){
if((i__4731__auto___63285 < len__4730__auto___63284)){
args__4736__auto__.push((arguments[i__4731__auto___63285]));

var G__63286 = (i__4731__auto___63285 + (1));
i__4731__auto___63285 = G__63286;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59630 = conformed_args__57018__auto__;
var map__59630__$1 = (((((!((map__59630 == null))))?(((((map__59630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59630):map__59630);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59630__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59630__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59630__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq59626){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59626));
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
var len__4730__auto___63296 = arguments.length;
var i__4731__auto___63298 = (0);
while(true){
if((i__4731__auto___63298 < len__4730__auto___63296)){
args__4736__auto__.push((arguments[i__4731__auto___63298]));

var G__63299 = (i__4731__auto___63298 + (1));
i__4731__auto___63298 = G__63299;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59643 = conformed_args__57018__auto__;
var map__59643__$1 = (((((!((map__59643 == null))))?(((((map__59643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59643):map__59643);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59643__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59643__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59643__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq59636){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59636));
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
var len__4730__auto___63308 = arguments.length;
var i__4731__auto___63310 = (0);
while(true){
if((i__4731__auto___63310 < len__4730__auto___63308)){
args__4736__auto__.push((arguments[i__4731__auto___63310]));

var G__63311 = (i__4731__auto___63310 + (1));
i__4731__auto___63310 = G__63311;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59653 = conformed_args__57018__auto__;
var map__59653__$1 = (((((!((map__59653 == null))))?(((((map__59653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59653):map__59653);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59653__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59653__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59653__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq59648){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59648));
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
var len__4730__auto___63317 = arguments.length;
var i__4731__auto___63318 = (0);
while(true){
if((i__4731__auto___63318 < len__4730__auto___63317)){
args__4736__auto__.push((arguments[i__4731__auto___63318]));

var G__63319 = (i__4731__auto___63318 + (1));
i__4731__auto___63318 = G__63319;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59665 = conformed_args__57018__auto__;
var map__59665__$1 = (((((!((map__59665 == null))))?(((((map__59665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59665):map__59665);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59665__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59665__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59665__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq59661){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59661));
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
var len__4730__auto___63335 = arguments.length;
var i__4731__auto___63336 = (0);
while(true){
if((i__4731__auto___63336 < len__4730__auto___63335)){
args__4736__auto__.push((arguments[i__4731__auto___63336]));

var G__63337 = (i__4731__auto___63336 + (1));
i__4731__auto___63336 = G__63337;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59678 = conformed_args__57018__auto__;
var map__59678__$1 = (((((!((map__59678 == null))))?(((((map__59678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59678):map__59678);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59678__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59678__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59678__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq59672){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59672));
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
var len__4730__auto___63350 = arguments.length;
var i__4731__auto___63352 = (0);
while(true){
if((i__4731__auto___63352 < len__4730__auto___63350)){
args__4736__auto__.push((arguments[i__4731__auto___63352]));

var G__63353 = (i__4731__auto___63352 + (1));
i__4731__auto___63352 = G__63353;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59692 = conformed_args__57018__auto__;
var map__59692__$1 = (((((!((map__59692 == null))))?(((((map__59692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59692):map__59692);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59692__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59692__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59692__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq59687){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59687));
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
var len__4730__auto___63360 = arguments.length;
var i__4731__auto___63362 = (0);
while(true){
if((i__4731__auto___63362 < len__4730__auto___63360)){
args__4736__auto__.push((arguments[i__4731__auto___63362]));

var G__63363 = (i__4731__auto___63362 + (1));
i__4731__auto___63362 = G__63363;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59697 = conformed_args__57018__auto__;
var map__59697__$1 = (((((!((map__59697 == null))))?(((((map__59697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59697):map__59697);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59697__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59697__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59697__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq59695){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59695));
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
var len__4730__auto___63371 = arguments.length;
var i__4731__auto___63372 = (0);
while(true){
if((i__4731__auto___63372 < len__4730__auto___63371)){
args__4736__auto__.push((arguments[i__4731__auto___63372]));

var G__63373 = (i__4731__auto___63372 + (1));
i__4731__auto___63372 = G__63373;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59707 = conformed_args__57018__auto__;
var map__59707__$1 = (((((!((map__59707 == null))))?(((((map__59707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59707):map__59707);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59707__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59707__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59707__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq59704){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59704));
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
var len__4730__auto___63384 = arguments.length;
var i__4731__auto___63385 = (0);
while(true){
if((i__4731__auto___63385 < len__4730__auto___63384)){
args__4736__auto__.push((arguments[i__4731__auto___63385]));

var G__63387 = (i__4731__auto___63385 + (1));
i__4731__auto___63385 = G__63387;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59720 = conformed_args__57018__auto__;
var map__59720__$1 = (((((!((map__59720 == null))))?(((((map__59720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59720):map__59720);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59720__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59720__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59720__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq59718){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59718));
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
var len__4730__auto___63398 = arguments.length;
var i__4731__auto___63399 = (0);
while(true){
if((i__4731__auto___63399 < len__4730__auto___63398)){
args__4736__auto__.push((arguments[i__4731__auto___63399]));

var G__63401 = (i__4731__auto___63399 + (1));
i__4731__auto___63399 = G__63401;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59730 = conformed_args__57018__auto__;
var map__59730__$1 = (((((!((map__59730 == null))))?(((((map__59730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59730):map__59730);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59730__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59730__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59730__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq59724){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59724));
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
var len__4730__auto___63418 = arguments.length;
var i__4731__auto___63421 = (0);
while(true){
if((i__4731__auto___63421 < len__4730__auto___63418)){
args__4736__auto__.push((arguments[i__4731__auto___63421]));

var G__63427 = (i__4731__auto___63421 + (1));
i__4731__auto___63421 = G__63427;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59734 = conformed_args__57018__auto__;
var map__59734__$1 = (((((!((map__59734 == null))))?(((((map__59734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59734):map__59734);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59734__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59734__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59734__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq59733){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59733));
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
var len__4730__auto___63459 = arguments.length;
var i__4731__auto___63462 = (0);
while(true){
if((i__4731__auto___63462 < len__4730__auto___63459)){
args__4736__auto__.push((arguments[i__4731__auto___63462]));

var G__63463 = (i__4731__auto___63462 + (1));
i__4731__auto___63462 = G__63463;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59738 = conformed_args__57018__auto__;
var map__59738__$1 = (((((!((map__59738 == null))))?(((((map__59738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59738):map__59738);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59738__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59738__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59738__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq59736){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59736));
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
var len__4730__auto___63476 = arguments.length;
var i__4731__auto___63478 = (0);
while(true){
if((i__4731__auto___63478 < len__4730__auto___63476)){
args__4736__auto__.push((arguments[i__4731__auto___63478]));

var G__63479 = (i__4731__auto___63478 + (1));
i__4731__auto___63478 = G__63479;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59743 = conformed_args__57018__auto__;
var map__59743__$1 = (((((!((map__59743 == null))))?(((((map__59743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59743):map__59743);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59743__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59743__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59743__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq59741){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59741));
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
var len__4730__auto___63491 = arguments.length;
var i__4731__auto___63492 = (0);
while(true){
if((i__4731__auto___63492 < len__4730__auto___63491)){
args__4736__auto__.push((arguments[i__4731__auto___63492]));

var G__63495 = (i__4731__auto___63492 + (1));
i__4731__auto___63492 = G__63495;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59746 = conformed_args__57018__auto__;
var map__59746__$1 = (((((!((map__59746 == null))))?(((((map__59746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59746):map__59746);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59746__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59746__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59746__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq59745){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59745));
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
var len__4730__auto___63506 = arguments.length;
var i__4731__auto___63508 = (0);
while(true){
if((i__4731__auto___63508 < len__4730__auto___63506)){
args__4736__auto__.push((arguments[i__4731__auto___63508]));

var G__63509 = (i__4731__auto___63508 + (1));
i__4731__auto___63508 = G__63509;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59753 = conformed_args__57018__auto__;
var map__59753__$1 = (((((!((map__59753 == null))))?(((((map__59753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59753):map__59753);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59753__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59753__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59753__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq59750){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59750));
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
var len__4730__auto___63545 = arguments.length;
var i__4731__auto___63550 = (0);
while(true){
if((i__4731__auto___63550 < len__4730__auto___63545)){
args__4736__auto__.push((arguments[i__4731__auto___63550]));

var G__63551 = (i__4731__auto___63550 + (1));
i__4731__auto___63550 = G__63551;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59757 = conformed_args__57018__auto__;
var map__59757__$1 = (((((!((map__59757 == null))))?(((((map__59757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59757):map__59757);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59757__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59757__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59757__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq59756){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59756));
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
var len__4730__auto___63567 = arguments.length;
var i__4731__auto___63568 = (0);
while(true){
if((i__4731__auto___63568 < len__4730__auto___63567)){
args__4736__auto__.push((arguments[i__4731__auto___63568]));

var G__63570 = (i__4731__auto___63568 + (1));
i__4731__auto___63568 = G__63570;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59762 = conformed_args__57018__auto__;
var map__59762__$1 = (((((!((map__59762 == null))))?(((((map__59762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59762):map__59762);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59762__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59762__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59762__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq59761){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59761));
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
var len__4730__auto___63582 = arguments.length;
var i__4731__auto___63583 = (0);
while(true){
if((i__4731__auto___63583 < len__4730__auto___63582)){
args__4736__auto__.push((arguments[i__4731__auto___63583]));

var G__63585 = (i__4731__auto___63583 + (1));
i__4731__auto___63583 = G__63585;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59769 = conformed_args__57018__auto__;
var map__59769__$1 = (((((!((map__59769 == null))))?(((((map__59769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59769):map__59769);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59769__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59769__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59769__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq59767){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59767));
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
var len__4730__auto___63612 = arguments.length;
var i__4731__auto___63613 = (0);
while(true){
if((i__4731__auto___63613 < len__4730__auto___63612)){
args__4736__auto__.push((arguments[i__4731__auto___63613]));

var G__63617 = (i__4731__auto___63613 + (1));
i__4731__auto___63613 = G__63617;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59775 = conformed_args__57018__auto__;
var map__59775__$1 = (((((!((map__59775 == null))))?(((((map__59775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59775):map__59775);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59775__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59775__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59775__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq59771){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59771));
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
var len__4730__auto___63629 = arguments.length;
var i__4731__auto___63630 = (0);
while(true){
if((i__4731__auto___63630 < len__4730__auto___63629)){
args__4736__auto__.push((arguments[i__4731__auto___63630]));

var G__63631 = (i__4731__auto___63630 + (1));
i__4731__auto___63630 = G__63631;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59782 = conformed_args__57018__auto__;
var map__59782__$1 = (((((!((map__59782 == null))))?(((((map__59782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59782):map__59782);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59782__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59782__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59782__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq59778){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59778));
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
var len__4730__auto___63646 = arguments.length;
var i__4731__auto___63648 = (0);
while(true){
if((i__4731__auto___63648 < len__4730__auto___63646)){
args__4736__auto__.push((arguments[i__4731__auto___63648]));

var G__63651 = (i__4731__auto___63648 + (1));
i__4731__auto___63648 = G__63651;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59786 = conformed_args__57018__auto__;
var map__59786__$1 = (((((!((map__59786 == null))))?(((((map__59786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59786):map__59786);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59786__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59786__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59786__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq59785){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59785));
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
var len__4730__auto___63675 = arguments.length;
var i__4731__auto___63676 = (0);
while(true){
if((i__4731__auto___63676 < len__4730__auto___63675)){
args__4736__auto__.push((arguments[i__4731__auto___63676]));

var G__63677 = (i__4731__auto___63676 + (1));
i__4731__auto___63676 = G__63677;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59790 = conformed_args__57018__auto__;
var map__59790__$1 = (((((!((map__59790 == null))))?(((((map__59790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59790):map__59790);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59790__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59790__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59790__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq59788){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59788));
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
var len__4730__auto___63698 = arguments.length;
var i__4731__auto___63699 = (0);
while(true){
if((i__4731__auto___63699 < len__4730__auto___63698)){
args__4736__auto__.push((arguments[i__4731__auto___63699]));

var G__63702 = (i__4731__auto___63699 + (1));
i__4731__auto___63699 = G__63702;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59798 = conformed_args__57018__auto__;
var map__59798__$1 = (((((!((map__59798 == null))))?(((((map__59798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59798):map__59798);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59798__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59798__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59798__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq59792){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59792));
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
var len__4730__auto___63709 = arguments.length;
var i__4731__auto___63710 = (0);
while(true){
if((i__4731__auto___63710 < len__4730__auto___63709)){
args__4736__auto__.push((arguments[i__4731__auto___63710]));

var G__63711 = (i__4731__auto___63710 + (1));
i__4731__auto___63710 = G__63711;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59803 = conformed_args__57018__auto__;
var map__59803__$1 = (((((!((map__59803 == null))))?(((((map__59803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59803):map__59803);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59803__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59803__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59803__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq59802){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59802));
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
var len__4730__auto___63737 = arguments.length;
var i__4731__auto___63738 = (0);
while(true){
if((i__4731__auto___63738 < len__4730__auto___63737)){
args__4736__auto__.push((arguments[i__4731__auto___63738]));

var G__63742 = (i__4731__auto___63738 + (1));
i__4731__auto___63738 = G__63742;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59813 = conformed_args__57018__auto__;
var map__59813__$1 = (((((!((map__59813 == null))))?(((((map__59813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59813):map__59813);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59813__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59813__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59813__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq59808){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59808));
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
var len__4730__auto___63754 = arguments.length;
var i__4731__auto___63755 = (0);
while(true){
if((i__4731__auto___63755 < len__4730__auto___63754)){
args__4736__auto__.push((arguments[i__4731__auto___63755]));

var G__63756 = (i__4731__auto___63755 + (1));
i__4731__auto___63755 = G__63756;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59821 = conformed_args__57018__auto__;
var map__59821__$1 = (((((!((map__59821 == null))))?(((((map__59821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59821):map__59821);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59821__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59821__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59821__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq59818){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59818));
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
var len__4730__auto___63766 = arguments.length;
var i__4731__auto___63767 = (0);
while(true){
if((i__4731__auto___63767 < len__4730__auto___63766)){
args__4736__auto__.push((arguments[i__4731__auto___63767]));

var G__63768 = (i__4731__auto___63767 + (1));
i__4731__auto___63767 = G__63768;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59824 = conformed_args__57018__auto__;
var map__59824__$1 = (((((!((map__59824 == null))))?(((((map__59824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59824):map__59824);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59824__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59824__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59824__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq59823){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59823));
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
var len__4730__auto___63777 = arguments.length;
var i__4731__auto___63778 = (0);
while(true){
if((i__4731__auto___63778 < len__4730__auto___63777)){
args__4736__auto__.push((arguments[i__4731__auto___63778]));

var G__63779 = (i__4731__auto___63778 + (1));
i__4731__auto___63778 = G__63779;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59833 = conformed_args__57018__auto__;
var map__59833__$1 = (((((!((map__59833 == null))))?(((((map__59833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59833):map__59833);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59833__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59833__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59833__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq59829){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59829));
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
var len__4730__auto___63788 = arguments.length;
var i__4731__auto___63789 = (0);
while(true){
if((i__4731__auto___63789 < len__4730__auto___63788)){
args__4736__auto__.push((arguments[i__4731__auto___63789]));

var G__63790 = (i__4731__auto___63789 + (1));
i__4731__auto___63789 = G__63790;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59839 = conformed_args__57018__auto__;
var map__59839__$1 = (((((!((map__59839 == null))))?(((((map__59839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59839):map__59839);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59839__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59839__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59839__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq59835){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59835));
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
var len__4730__auto___63797 = arguments.length;
var i__4731__auto___63799 = (0);
while(true){
if((i__4731__auto___63799 < len__4730__auto___63797)){
args__4736__auto__.push((arguments[i__4731__auto___63799]));

var G__63800 = (i__4731__auto___63799 + (1));
i__4731__auto___63799 = G__63800;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59851 = conformed_args__57018__auto__;
var map__59851__$1 = (((((!((map__59851 == null))))?(((((map__59851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59851):map__59851);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59851__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59851__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59851__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq59844){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59844));
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
var len__4730__auto___63806 = arguments.length;
var i__4731__auto___63807 = (0);
while(true){
if((i__4731__auto___63807 < len__4730__auto___63806)){
args__4736__auto__.push((arguments[i__4731__auto___63807]));

var G__63808 = (i__4731__auto___63807 + (1));
i__4731__auto___63807 = G__63808;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59865 = conformed_args__57018__auto__;
var map__59865__$1 = (((((!((map__59865 == null))))?(((((map__59865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59865):map__59865);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59865__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59865__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59865__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq59856){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59856));
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
var len__4730__auto___63815 = arguments.length;
var i__4731__auto___63816 = (0);
while(true){
if((i__4731__auto___63816 < len__4730__auto___63815)){
args__4736__auto__.push((arguments[i__4731__auto___63816]));

var G__63817 = (i__4731__auto___63816 + (1));
i__4731__auto___63816 = G__63817;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59885 = conformed_args__57018__auto__;
var map__59885__$1 = (((((!((map__59885 == null))))?(((((map__59885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59885):map__59885);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59885__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59885__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59885__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq59874){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59874));
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
var len__4730__auto___63821 = arguments.length;
var i__4731__auto___63822 = (0);
while(true){
if((i__4731__auto___63822 < len__4730__auto___63821)){
args__4736__auto__.push((arguments[i__4731__auto___63822]));

var G__63823 = (i__4731__auto___63822 + (1));
i__4731__auto___63822 = G__63823;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59894 = conformed_args__57018__auto__;
var map__59894__$1 = (((((!((map__59894 == null))))?(((((map__59894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59894):map__59894);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59894__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59894__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59894__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq59890){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59890));
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
var len__4730__auto___63832 = arguments.length;
var i__4731__auto___63833 = (0);
while(true){
if((i__4731__auto___63833 < len__4730__auto___63832)){
args__4736__auto__.push((arguments[i__4731__auto___63833]));

var G__63835 = (i__4731__auto___63833 + (1));
i__4731__auto___63833 = G__63835;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59924 = conformed_args__57018__auto__;
var map__59924__$1 = (((((!((map__59924 == null))))?(((((map__59924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59924):map__59924);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59924__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59924__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59924__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq59916){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59916));
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
var len__4730__auto___63841 = arguments.length;
var i__4731__auto___63843 = (0);
while(true){
if((i__4731__auto___63843 < len__4730__auto___63841)){
args__4736__auto__.push((arguments[i__4731__auto___63843]));

var G__63844 = (i__4731__auto___63843 + (1));
i__4731__auto___63843 = G__63844;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59955 = conformed_args__57018__auto__;
var map__59955__$1 = (((((!((map__59955 == null))))?(((((map__59955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59955):map__59955);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59955__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59955__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59955__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq59935){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59935));
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
var len__4730__auto___63853 = arguments.length;
var i__4731__auto___63854 = (0);
while(true){
if((i__4731__auto___63854 < len__4730__auto___63853)){
args__4736__auto__.push((arguments[i__4731__auto___63854]));

var G__63855 = (i__4731__auto___63854 + (1));
i__4731__auto___63854 = G__63855;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59989 = conformed_args__57018__auto__;
var map__59989__$1 = (((((!((map__59989 == null))))?(((((map__59989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59989):map__59989);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59989__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59989__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59989__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq59981){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59981));
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
var len__4730__auto___63863 = arguments.length;
var i__4731__auto___63864 = (0);
while(true){
if((i__4731__auto___63864 < len__4730__auto___63863)){
args__4736__auto__.push((arguments[i__4731__auto___63864]));

var G__63865 = (i__4731__auto___63864 + (1));
i__4731__auto___63864 = G__63865;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60011 = conformed_args__57018__auto__;
var map__60011__$1 = (((((!((map__60011 == null))))?(((((map__60011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60011):map__60011);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60011__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60011__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60011__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq60003){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60003));
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
var len__4730__auto___63871 = arguments.length;
var i__4731__auto___63872 = (0);
while(true){
if((i__4731__auto___63872 < len__4730__auto___63871)){
args__4736__auto__.push((arguments[i__4731__auto___63872]));

var G__63875 = (i__4731__auto___63872 + (1));
i__4731__auto___63872 = G__63875;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60031 = conformed_args__57018__auto__;
var map__60031__$1 = (((((!((map__60031 == null))))?(((((map__60031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60031):map__60031);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60031__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60031__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60031__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq60026){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60026));
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
var len__4730__auto___63888 = arguments.length;
var i__4731__auto___63891 = (0);
while(true){
if((i__4731__auto___63891 < len__4730__auto___63888)){
args__4736__auto__.push((arguments[i__4731__auto___63891]));

var G__63892 = (i__4731__auto___63891 + (1));
i__4731__auto___63891 = G__63892;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60061 = conformed_args__57018__auto__;
var map__60061__$1 = (((((!((map__60061 == null))))?(((((map__60061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60061):map__60061);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60061__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60061__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60061__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq60047){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60047));
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
var len__4730__auto___63905 = arguments.length;
var i__4731__auto___63906 = (0);
while(true){
if((i__4731__auto___63906 < len__4730__auto___63905)){
args__4736__auto__.push((arguments[i__4731__auto___63906]));

var G__63909 = (i__4731__auto___63906 + (1));
i__4731__auto___63906 = G__63909;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60073 = conformed_args__57018__auto__;
var map__60073__$1 = (((((!((map__60073 == null))))?(((((map__60073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60073):map__60073);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60073__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60073__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60073__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq60069){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60069));
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
var len__4730__auto___63919 = arguments.length;
var i__4731__auto___63920 = (0);
while(true){
if((i__4731__auto___63920 < len__4730__auto___63919)){
args__4736__auto__.push((arguments[i__4731__auto___63920]));

var G__63922 = (i__4731__auto___63920 + (1));
i__4731__auto___63920 = G__63922;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60091 = conformed_args__57018__auto__;
var map__60091__$1 = (((((!((map__60091 == null))))?(((((map__60091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60091):map__60091);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60091__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60091__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60091__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq60085){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60085));
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
var len__4730__auto___63931 = arguments.length;
var i__4731__auto___63932 = (0);
while(true){
if((i__4731__auto___63932 < len__4730__auto___63931)){
args__4736__auto__.push((arguments[i__4731__auto___63932]));

var G__63934 = (i__4731__auto___63932 + (1));
i__4731__auto___63932 = G__63934;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60105 = conformed_args__57018__auto__;
var map__60105__$1 = (((((!((map__60105 == null))))?(((((map__60105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60105):map__60105);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60105__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60105__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60105__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq60098){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60098));
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
var len__4730__auto___63944 = arguments.length;
var i__4731__auto___63945 = (0);
while(true){
if((i__4731__auto___63945 < len__4730__auto___63944)){
args__4736__auto__.push((arguments[i__4731__auto___63945]));

var G__63946 = (i__4731__auto___63945 + (1));
i__4731__auto___63945 = G__63946;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60147 = conformed_args__57018__auto__;
var map__60147__$1 = (((((!((map__60147 == null))))?(((((map__60147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60147):map__60147);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60147__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60147__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60147__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq60133){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60133));
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
var len__4730__auto___63950 = arguments.length;
var i__4731__auto___63951 = (0);
while(true){
if((i__4731__auto___63951 < len__4730__auto___63950)){
args__4736__auto__.push((arguments[i__4731__auto___63951]));

var G__63953 = (i__4731__auto___63951 + (1));
i__4731__auto___63951 = G__63953;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60191 = conformed_args__57018__auto__;
var map__60191__$1 = (((((!((map__60191 == null))))?(((((map__60191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60191):map__60191);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60191__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60191__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60191__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq60173){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60173));
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
var len__4730__auto___63960 = arguments.length;
var i__4731__auto___63961 = (0);
while(true){
if((i__4731__auto___63961 < len__4730__auto___63960)){
args__4736__auto__.push((arguments[i__4731__auto___63961]));

var G__63962 = (i__4731__auto___63961 + (1));
i__4731__auto___63961 = G__63962;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60206 = conformed_args__57018__auto__;
var map__60206__$1 = (((((!((map__60206 == null))))?(((((map__60206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60206):map__60206);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60206__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60206__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60206__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq60199){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60199));
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
var len__4730__auto___63968 = arguments.length;
var i__4731__auto___63969 = (0);
while(true){
if((i__4731__auto___63969 < len__4730__auto___63968)){
args__4736__auto__.push((arguments[i__4731__auto___63969]));

var G__63970 = (i__4731__auto___63969 + (1));
i__4731__auto___63969 = G__63970;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60217 = conformed_args__57018__auto__;
var map__60217__$1 = (((((!((map__60217 == null))))?(((((map__60217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60217):map__60217);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60217__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60217__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60217__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq60214){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60214));
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
var len__4730__auto___63975 = arguments.length;
var i__4731__auto___63976 = (0);
while(true){
if((i__4731__auto___63976 < len__4730__auto___63975)){
args__4736__auto__.push((arguments[i__4731__auto___63976]));

var G__63978 = (i__4731__auto___63976 + (1));
i__4731__auto___63976 = G__63978;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60227 = conformed_args__57018__auto__;
var map__60227__$1 = (((((!((map__60227 == null))))?(((((map__60227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60227):map__60227);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60227__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60227__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60227__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq60223){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60223));
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
var len__4730__auto___63990 = arguments.length;
var i__4731__auto___63991 = (0);
while(true){
if((i__4731__auto___63991 < len__4730__auto___63990)){
args__4736__auto__.push((arguments[i__4731__auto___63991]));

var G__63993 = (i__4731__auto___63991 + (1));
i__4731__auto___63991 = G__63993;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60244 = conformed_args__57018__auto__;
var map__60244__$1 = (((((!((map__60244 == null))))?(((((map__60244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60244):map__60244);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60244__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60244__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60244__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq60234){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60234));
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
var len__4730__auto___63995 = arguments.length;
var i__4731__auto___63996 = (0);
while(true){
if((i__4731__auto___63996 < len__4730__auto___63995)){
args__4736__auto__.push((arguments[i__4731__auto___63996]));

var G__63999 = (i__4731__auto___63996 + (1));
i__4731__auto___63996 = G__63999;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60258 = conformed_args__57018__auto__;
var map__60258__$1 = (((((!((map__60258 == null))))?(((((map__60258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60258):map__60258);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60258__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60258__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60258__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq60251){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60251));
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
var len__4730__auto___64001 = arguments.length;
var i__4731__auto___64002 = (0);
while(true){
if((i__4731__auto___64002 < len__4730__auto___64001)){
args__4736__auto__.push((arguments[i__4731__auto___64002]));

var G__64003 = (i__4731__auto___64002 + (1));
i__4731__auto___64002 = G__64003;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60282 = conformed_args__57018__auto__;
var map__60282__$1 = (((((!((map__60282 == null))))?(((((map__60282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60282):map__60282);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60282__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60282__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60282__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq60275){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60275));
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
var len__4730__auto___64015 = arguments.length;
var i__4731__auto___64016 = (0);
while(true){
if((i__4731__auto___64016 < len__4730__auto___64015)){
args__4736__auto__.push((arguments[i__4731__auto___64016]));

var G__64017 = (i__4731__auto___64016 + (1));
i__4731__auto___64016 = G__64017;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60296 = conformed_args__57018__auto__;
var map__60296__$1 = (((((!((map__60296 == null))))?(((((map__60296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60296):map__60296);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60296__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60296__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60296__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq60288){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60288));
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
var len__4730__auto___64028 = arguments.length;
var i__4731__auto___64029 = (0);
while(true){
if((i__4731__auto___64029 < len__4730__auto___64028)){
args__4736__auto__.push((arguments[i__4731__auto___64029]));

var G__64033 = (i__4731__auto___64029 + (1));
i__4731__auto___64029 = G__64033;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60319 = conformed_args__57018__auto__;
var map__60319__$1 = (((((!((map__60319 == null))))?(((((map__60319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60319):map__60319);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60319__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60319__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60319__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq60304){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60304));
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
var len__4730__auto___64040 = arguments.length;
var i__4731__auto___64041 = (0);
while(true){
if((i__4731__auto___64041 < len__4730__auto___64040)){
args__4736__auto__.push((arguments[i__4731__auto___64041]));

var G__64046 = (i__4731__auto___64041 + (1));
i__4731__auto___64041 = G__64046;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60334 = conformed_args__57018__auto__;
var map__60334__$1 = (((((!((map__60334 == null))))?(((((map__60334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60334):map__60334);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60334__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60334__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60334__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq60330){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60330));
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
var len__4730__auto___64072 = arguments.length;
var i__4731__auto___64073 = (0);
while(true){
if((i__4731__auto___64073 < len__4730__auto___64072)){
args__4736__auto__.push((arguments[i__4731__auto___64073]));

var G__64074 = (i__4731__auto___64073 + (1));
i__4731__auto___64073 = G__64074;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60350 = conformed_args__57018__auto__;
var map__60350__$1 = (((((!((map__60350 == null))))?(((((map__60350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60350):map__60350);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60350__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60350__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60350__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq60344){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60344));
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
var len__4730__auto___64090 = arguments.length;
var i__4731__auto___64091 = (0);
while(true){
if((i__4731__auto___64091 < len__4730__auto___64090)){
args__4736__auto__.push((arguments[i__4731__auto___64091]));

var G__64092 = (i__4731__auto___64091 + (1));
i__4731__auto___64091 = G__64092;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60377 = conformed_args__57018__auto__;
var map__60377__$1 = (((((!((map__60377 == null))))?(((((map__60377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60377):map__60377);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60377__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60377__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60377__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq60369){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60369));
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
var len__4730__auto___64099 = arguments.length;
var i__4731__auto___64100 = (0);
while(true){
if((i__4731__auto___64100 < len__4730__auto___64099)){
args__4736__auto__.push((arguments[i__4731__auto___64100]));

var G__64101 = (i__4731__auto___64100 + (1));
i__4731__auto___64100 = G__64101;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60394 = conformed_args__57018__auto__;
var map__60394__$1 = (((((!((map__60394 == null))))?(((((map__60394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60394):map__60394);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60394__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60394__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60394__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq60387){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60387));
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
var len__4730__auto___64108 = arguments.length;
var i__4731__auto___64109 = (0);
while(true){
if((i__4731__auto___64109 < len__4730__auto___64108)){
args__4736__auto__.push((arguments[i__4731__auto___64109]));

var G__64111 = (i__4731__auto___64109 + (1));
i__4731__auto___64109 = G__64111;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60400 = conformed_args__57018__auto__;
var map__60400__$1 = (((((!((map__60400 == null))))?(((((map__60400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60400):map__60400);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60400__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60400__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60400__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq60399){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60399));
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
var len__4730__auto___64127 = arguments.length;
var i__4731__auto___64128 = (0);
while(true){
if((i__4731__auto___64128 < len__4730__auto___64127)){
args__4736__auto__.push((arguments[i__4731__auto___64128]));

var G__64131 = (i__4731__auto___64128 + (1));
i__4731__auto___64128 = G__64131;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60406 = conformed_args__57018__auto__;
var map__60406__$1 = (((((!((map__60406 == null))))?(((((map__60406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60406):map__60406);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60406__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60406__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60406__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq60405){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60405));
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
var len__4730__auto___64146 = arguments.length;
var i__4731__auto___64147 = (0);
while(true){
if((i__4731__auto___64147 < len__4730__auto___64146)){
args__4736__auto__.push((arguments[i__4731__auto___64147]));

var G__64148 = (i__4731__auto___64147 + (1));
i__4731__auto___64147 = G__64148;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60421 = conformed_args__57018__auto__;
var map__60421__$1 = (((((!((map__60421 == null))))?(((((map__60421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60421):map__60421);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60421__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60421__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60421__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq60411){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60411));
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
var len__4730__auto___64155 = arguments.length;
var i__4731__auto___64156 = (0);
while(true){
if((i__4731__auto___64156 < len__4730__auto___64155)){
args__4736__auto__.push((arguments[i__4731__auto___64156]));

var G__64157 = (i__4731__auto___64156 + (1));
i__4731__auto___64156 = G__64157;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60435 = conformed_args__57018__auto__;
var map__60435__$1 = (((((!((map__60435 == null))))?(((((map__60435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60435):map__60435);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60435__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60435__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60435__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq60429){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60429));
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
var len__4730__auto___64167 = arguments.length;
var i__4731__auto___64168 = (0);
while(true){
if((i__4731__auto___64168 < len__4730__auto___64167)){
args__4736__auto__.push((arguments[i__4731__auto___64168]));

var G__64169 = (i__4731__auto___64168 + (1));
i__4731__auto___64168 = G__64169;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60446 = conformed_args__57018__auto__;
var map__60446__$1 = (((((!((map__60446 == null))))?(((((map__60446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60446):map__60446);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60446__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60446__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60446__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq60442){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60442));
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
var len__4730__auto___64180 = arguments.length;
var i__4731__auto___64181 = (0);
while(true){
if((i__4731__auto___64181 < len__4730__auto___64180)){
args__4736__auto__.push((arguments[i__4731__auto___64181]));

var G__64182 = (i__4731__auto___64181 + (1));
i__4731__auto___64181 = G__64182;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60473 = conformed_args__57018__auto__;
var map__60473__$1 = (((((!((map__60473 == null))))?(((((map__60473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60473):map__60473);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60473__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60473__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60473__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq60464){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60464));
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
var len__4730__auto___64191 = arguments.length;
var i__4731__auto___64192 = (0);
while(true){
if((i__4731__auto___64192 < len__4730__auto___64191)){
args__4736__auto__.push((arguments[i__4731__auto___64192]));

var G__64193 = (i__4731__auto___64192 + (1));
i__4731__auto___64192 = G__64193;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60489 = conformed_args__57018__auto__;
var map__60489__$1 = (((((!((map__60489 == null))))?(((((map__60489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60489):map__60489);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60489__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60489__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60489__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq60483){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60483));
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
var len__4730__auto___64206 = arguments.length;
var i__4731__auto___64207 = (0);
while(true){
if((i__4731__auto___64207 < len__4730__auto___64206)){
args__4736__auto__.push((arguments[i__4731__auto___64207]));

var G__64208 = (i__4731__auto___64207 + (1));
i__4731__auto___64207 = G__64208;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60498 = conformed_args__57018__auto__;
var map__60498__$1 = (((((!((map__60498 == null))))?(((((map__60498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60498):map__60498);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60498__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60498__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60498__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq60491){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60491));
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
var len__4730__auto___64216 = arguments.length;
var i__4731__auto___64218 = (0);
while(true){
if((i__4731__auto___64218 < len__4730__auto___64216)){
args__4736__auto__.push((arguments[i__4731__auto___64218]));

var G__64220 = (i__4731__auto___64218 + (1));
i__4731__auto___64218 = G__64220;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60503 = conformed_args__57018__auto__;
var map__60503__$1 = (((((!((map__60503 == null))))?(((((map__60503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60503):map__60503);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60503__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60503__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60503__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq60502){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60502));
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
var len__4730__auto___64229 = arguments.length;
var i__4731__auto___64231 = (0);
while(true){
if((i__4731__auto___64231 < len__4730__auto___64229)){
args__4736__auto__.push((arguments[i__4731__auto___64231]));

var G__64232 = (i__4731__auto___64231 + (1));
i__4731__auto___64231 = G__64232;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60515 = conformed_args__57018__auto__;
var map__60515__$1 = (((((!((map__60515 == null))))?(((((map__60515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60515):map__60515);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60515__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60515__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60515__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq60512){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60512));
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
var len__4730__auto___64247 = arguments.length;
var i__4731__auto___64248 = (0);
while(true){
if((i__4731__auto___64248 < len__4730__auto___64247)){
args__4736__auto__.push((arguments[i__4731__auto___64248]));

var G__64249 = (i__4731__auto___64248 + (1));
i__4731__auto___64248 = G__64249;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60530 = conformed_args__57018__auto__;
var map__60530__$1 = (((((!((map__60530 == null))))?(((((map__60530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60530):map__60530);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60530__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60530__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60530__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq60528){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60528));
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
var len__4730__auto___64277 = arguments.length;
var i__4731__auto___64278 = (0);
while(true){
if((i__4731__auto___64278 < len__4730__auto___64277)){
args__4736__auto__.push((arguments[i__4731__auto___64278]));

var G__64283 = (i__4731__auto___64278 + (1));
i__4731__auto___64278 = G__64283;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60537 = conformed_args__57018__auto__;
var map__60537__$1 = (((((!((map__60537 == null))))?(((((map__60537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60537):map__60537);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60537__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60537__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60537__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq60535){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60535));
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
var len__4730__auto___64303 = arguments.length;
var i__4731__auto___64304 = (0);
while(true){
if((i__4731__auto___64304 < len__4730__auto___64303)){
args__4736__auto__.push((arguments[i__4731__auto___64304]));

var G__64305 = (i__4731__auto___64304 + (1));
i__4731__auto___64304 = G__64305;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60547 = conformed_args__57018__auto__;
var map__60547__$1 = (((((!((map__60547 == null))))?(((((map__60547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60547):map__60547);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60547__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60547__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60547__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq60544){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60544));
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
var len__4730__auto___64334 = arguments.length;
var i__4731__auto___64335 = (0);
while(true){
if((i__4731__auto___64335 < len__4730__auto___64334)){
args__4736__auto__.push((arguments[i__4731__auto___64335]));

var G__64338 = (i__4731__auto___64335 + (1));
i__4731__auto___64335 = G__64338;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60565 = conformed_args__57018__auto__;
var map__60565__$1 = (((((!((map__60565 == null))))?(((((map__60565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60565):map__60565);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60565__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60565__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60565__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq60556){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60556));
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
var len__4730__auto___64354 = arguments.length;
var i__4731__auto___64356 = (0);
while(true){
if((i__4731__auto___64356 < len__4730__auto___64354)){
args__4736__auto__.push((arguments[i__4731__auto___64356]));

var G__64357 = (i__4731__auto___64356 + (1));
i__4731__auto___64356 = G__64357;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60580 = conformed_args__57018__auto__;
var map__60580__$1 = (((((!((map__60580 == null))))?(((((map__60580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60580):map__60580);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60580__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60580__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60580__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq60569){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60569));
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
var len__4730__auto___64379 = arguments.length;
var i__4731__auto___64380 = (0);
while(true){
if((i__4731__auto___64380 < len__4730__auto___64379)){
args__4736__auto__.push((arguments[i__4731__auto___64380]));

var G__64385 = (i__4731__auto___64380 + (1));
i__4731__auto___64380 = G__64385;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60602 = conformed_args__57018__auto__;
var map__60602__$1 = (((((!((map__60602 == null))))?(((((map__60602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60602):map__60602);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60602__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60602__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60602__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq60590){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60590));
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
var len__4730__auto___64407 = arguments.length;
var i__4731__auto___64408 = (0);
while(true){
if((i__4731__auto___64408 < len__4730__auto___64407)){
args__4736__auto__.push((arguments[i__4731__auto___64408]));

var G__64409 = (i__4731__auto___64408 + (1));
i__4731__auto___64408 = G__64409;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60612 = conformed_args__57018__auto__;
var map__60612__$1 = (((((!((map__60612 == null))))?(((((map__60612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60612):map__60612);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60612__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60612__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60612__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq60611){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60611));
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
var len__4730__auto___64419 = arguments.length;
var i__4731__auto___64421 = (0);
while(true){
if((i__4731__auto___64421 < len__4730__auto___64419)){
args__4736__auto__.push((arguments[i__4731__auto___64421]));

var G__64422 = (i__4731__auto___64421 + (1));
i__4731__auto___64421 = G__64422;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60629 = conformed_args__57018__auto__;
var map__60629__$1 = (((((!((map__60629 == null))))?(((((map__60629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60629):map__60629);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60629__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60629__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60629__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq60618){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60618));
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
var len__4730__auto___64434 = arguments.length;
var i__4731__auto___64435 = (0);
while(true){
if((i__4731__auto___64435 < len__4730__auto___64434)){
args__4736__auto__.push((arguments[i__4731__auto___64435]));

var G__64436 = (i__4731__auto___64435 + (1));
i__4731__auto___64435 = G__64436;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60649 = conformed_args__57018__auto__;
var map__60649__$1 = (((((!((map__60649 == null))))?(((((map__60649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60649):map__60649);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60649__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60649__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60649__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq60640){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60640));
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
var len__4730__auto___64443 = arguments.length;
var i__4731__auto___64444 = (0);
while(true){
if((i__4731__auto___64444 < len__4730__auto___64443)){
args__4736__auto__.push((arguments[i__4731__auto___64444]));

var G__64445 = (i__4731__auto___64444 + (1));
i__4731__auto___64444 = G__64445;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60671 = conformed_args__57018__auto__;
var map__60671__$1 = (((((!((map__60671 == null))))?(((((map__60671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60671):map__60671);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60671__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60671__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60671__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq60662){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60662));
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
var len__4730__auto___64452 = arguments.length;
var i__4731__auto___64453 = (0);
while(true){
if((i__4731__auto___64453 < len__4730__auto___64452)){
args__4736__auto__.push((arguments[i__4731__auto___64453]));

var G__64455 = (i__4731__auto___64453 + (1));
i__4731__auto___64453 = G__64455;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60703 = conformed_args__57018__auto__;
var map__60703__$1 = (((((!((map__60703 == null))))?(((((map__60703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60703):map__60703);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60703__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60703__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60703__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq60695){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60695));
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
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60725 = conformed_args__57018__auto__;
var map__60725__$1 = (((((!((map__60725 == null))))?(((((map__60725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60725):map__60725);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60725__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60725__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60725__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq60724){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60724));
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
var len__4730__auto___64482 = arguments.length;
var i__4731__auto___64486 = (0);
while(true){
if((i__4731__auto___64486 < len__4730__auto___64482)){
args__4736__auto__.push((arguments[i__4731__auto___64486]));

var G__64487 = (i__4731__auto___64486 + (1));
i__4731__auto___64486 = G__64487;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60740 = conformed_args__57018__auto__;
var map__60740__$1 = (((((!((map__60740 == null))))?(((((map__60740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60740):map__60740);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60740__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60740__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60740__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq60733){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60733));
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
var len__4730__auto___64507 = arguments.length;
var i__4731__auto___64509 = (0);
while(true){
if((i__4731__auto___64509 < len__4730__auto___64507)){
args__4736__auto__.push((arguments[i__4731__auto___64509]));

var G__64515 = (i__4731__auto___64509 + (1));
i__4731__auto___64509 = G__64515;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60754 = conformed_args__57018__auto__;
var map__60754__$1 = (((((!((map__60754 == null))))?(((((map__60754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60754):map__60754);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60754__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60754__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60754__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq60751){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60751));
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
var len__4730__auto___64537 = arguments.length;
var i__4731__auto___64538 = (0);
while(true){
if((i__4731__auto___64538 < len__4730__auto___64537)){
args__4736__auto__.push((arguments[i__4731__auto___64538]));

var G__64540 = (i__4731__auto___64538 + (1));
i__4731__auto___64538 = G__64540;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60782 = conformed_args__57018__auto__;
var map__60782__$1 = (((((!((map__60782 == null))))?(((((map__60782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60782):map__60782);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60782__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60782__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60782__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq60769){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60769));
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
var len__4730__auto___64550 = arguments.length;
var i__4731__auto___64551 = (0);
while(true){
if((i__4731__auto___64551 < len__4730__auto___64550)){
args__4736__auto__.push((arguments[i__4731__auto___64551]));

var G__64553 = (i__4731__auto___64551 + (1));
i__4731__auto___64551 = G__64553;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60808 = conformed_args__57018__auto__;
var map__60808__$1 = (((((!((map__60808 == null))))?(((((map__60808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60808):map__60808);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60808__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60808__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60808__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq60800){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60800));
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
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60823 = conformed_args__57018__auto__;
var map__60823__$1 = (((((!((map__60823 == null))))?(((((map__60823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60823):map__60823);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60823__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60823__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60823__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq60817){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60817));
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
var len__4730__auto___64577 = arguments.length;
var i__4731__auto___64578 = (0);
while(true){
if((i__4731__auto___64578 < len__4730__auto___64577)){
args__4736__auto__.push((arguments[i__4731__auto___64578]));

var G__64579 = (i__4731__auto___64578 + (1));
i__4731__auto___64578 = G__64579;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60861 = conformed_args__57018__auto__;
var map__60861__$1 = (((((!((map__60861 == null))))?(((((map__60861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60861):map__60861);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60861__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60861__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60861__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq60837){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60837));
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
var len__4730__auto___64597 = arguments.length;
var i__4731__auto___64599 = (0);
while(true){
if((i__4731__auto___64599 < len__4730__auto___64597)){
args__4736__auto__.push((arguments[i__4731__auto___64599]));

var G__64600 = (i__4731__auto___64599 + (1));
i__4731__auto___64599 = G__64600;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60876 = conformed_args__57018__auto__;
var map__60876__$1 = (((((!((map__60876 == null))))?(((((map__60876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60876):map__60876);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60876__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60876__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60876__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq60870){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60870));
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
var len__4730__auto___64626 = arguments.length;
var i__4731__auto___64627 = (0);
while(true){
if((i__4731__auto___64627 < len__4730__auto___64626)){
args__4736__auto__.push((arguments[i__4731__auto___64627]));

var G__64630 = (i__4731__auto___64627 + (1));
i__4731__auto___64627 = G__64630;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60891 = conformed_args__57018__auto__;
var map__60891__$1 = (((((!((map__60891 == null))))?(((((map__60891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60891):map__60891);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60891__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60891__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60891__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq60880){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60880));
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
var len__4730__auto___64650 = arguments.length;
var i__4731__auto___64651 = (0);
while(true){
if((i__4731__auto___64651 < len__4730__auto___64650)){
args__4736__auto__.push((arguments[i__4731__auto___64651]));

var G__64653 = (i__4731__auto___64651 + (1));
i__4731__auto___64651 = G__64653;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60905 = conformed_args__57018__auto__;
var map__60905__$1 = (((((!((map__60905 == null))))?(((((map__60905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60905):map__60905);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60905__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60905__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60905__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq60900){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60900));
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
var len__4730__auto___64683 = arguments.length;
var i__4731__auto___64684 = (0);
while(true){
if((i__4731__auto___64684 < len__4730__auto___64683)){
args__4736__auto__.push((arguments[i__4731__auto___64684]));

var G__64686 = (i__4731__auto___64684 + (1));
i__4731__auto___64684 = G__64686;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60920 = conformed_args__57018__auto__;
var map__60920__$1 = (((((!((map__60920 == null))))?(((((map__60920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60920):map__60920);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60920__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60920__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60920__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq60919){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60919));
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
var len__4730__auto___64706 = arguments.length;
var i__4731__auto___64707 = (0);
while(true){
if((i__4731__auto___64707 < len__4730__auto___64706)){
args__4736__auto__.push((arguments[i__4731__auto___64707]));

var G__64708 = (i__4731__auto___64707 + (1));
i__4731__auto___64707 = G__64708;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60970 = conformed_args__57018__auto__;
var map__60970__$1 = (((((!((map__60970 == null))))?(((((map__60970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60970):map__60970);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60970__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60970__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60970__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq60947){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60947));
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
var len__4730__auto___64722 = arguments.length;
var i__4731__auto___64723 = (0);
while(true){
if((i__4731__auto___64723 < len__4730__auto___64722)){
args__4736__auto__.push((arguments[i__4731__auto___64723]));

var G__64725 = (i__4731__auto___64723 + (1));
i__4731__auto___64723 = G__64725;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__60989 = conformed_args__57018__auto__;
var map__60989__$1 = (((((!((map__60989 == null))))?(((((map__60989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60989):map__60989);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60989__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60989__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60989__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq60986){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60986));
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
var len__4730__auto___64734 = arguments.length;
var i__4731__auto___64735 = (0);
while(true){
if((i__4731__auto___64735 < len__4730__auto___64734)){
args__4736__auto__.push((arguments[i__4731__auto___64735]));

var G__64736 = (i__4731__auto___64735 + (1));
i__4731__auto___64735 = G__64736;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61010 = conformed_args__57018__auto__;
var map__61010__$1 = (((((!((map__61010 == null))))?(((((map__61010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61010):map__61010);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61010__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61010__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61010__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq60995){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60995));
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
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61048 = conformed_args__57018__auto__;
var map__61048__$1 = (((((!((map__61048 == null))))?(((((map__61048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61048):map__61048);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61048__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61048__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61048__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq61029){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61029));
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
var len__4730__auto___64778 = arguments.length;
var i__4731__auto___64779 = (0);
while(true){
if((i__4731__auto___64779 < len__4730__auto___64778)){
args__4736__auto__.push((arguments[i__4731__auto___64779]));

var G__64782 = (i__4731__auto___64779 + (1));
i__4731__auto___64779 = G__64782;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61081 = conformed_args__57018__auto__;
var map__61081__$1 = (((((!((map__61081 == null))))?(((((map__61081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61081):map__61081);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61081__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61081__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61081__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq61067){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61067));
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
var len__4730__auto___64794 = arguments.length;
var i__4731__auto___64795 = (0);
while(true){
if((i__4731__auto___64795 < len__4730__auto___64794)){
args__4736__auto__.push((arguments[i__4731__auto___64795]));

var G__64796 = (i__4731__auto___64795 + (1));
i__4731__auto___64795 = G__64796;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61121 = conformed_args__57018__auto__;
var map__61121__$1 = (((((!((map__61121 == null))))?(((((map__61121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61121):map__61121);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61121__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61121__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61121__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq61103){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61103));
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
var len__4730__auto___64824 = arguments.length;
var i__4731__auto___64825 = (0);
while(true){
if((i__4731__auto___64825 < len__4730__auto___64824)){
args__4736__auto__.push((arguments[i__4731__auto___64825]));

var G__64826 = (i__4731__auto___64825 + (1));
i__4731__auto___64825 = G__64826;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61135 = conformed_args__57018__auto__;
var map__61135__$1 = (((((!((map__61135 == null))))?(((((map__61135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61135):map__61135);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61135__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61135__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61135__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq61129){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61129));
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
var len__4730__auto___64847 = arguments.length;
var i__4731__auto___64848 = (0);
while(true){
if((i__4731__auto___64848 < len__4730__auto___64847)){
args__4736__auto__.push((arguments[i__4731__auto___64848]));

var G__64850 = (i__4731__auto___64848 + (1));
i__4731__auto___64848 = G__64850;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61156 = conformed_args__57018__auto__;
var map__61156__$1 = (((((!((map__61156 == null))))?(((((map__61156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61156):map__61156);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61156__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61156__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61156__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq61144){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61144));
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
var len__4730__auto___64860 = arguments.length;
var i__4731__auto___64861 = (0);
while(true){
if((i__4731__auto___64861 < len__4730__auto___64860)){
args__4736__auto__.push((arguments[i__4731__auto___64861]));

var G__64867 = (i__4731__auto___64861 + (1));
i__4731__auto___64861 = G__64867;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61174 = conformed_args__57018__auto__;
var map__61174__$1 = (((((!((map__61174 == null))))?(((((map__61174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61174):map__61174);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61174__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61174__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61174__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq61167){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61167));
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
var len__4730__auto___64892 = arguments.length;
var i__4731__auto___64893 = (0);
while(true){
if((i__4731__auto___64893 < len__4730__auto___64892)){
args__4736__auto__.push((arguments[i__4731__auto___64893]));

var G__64895 = (i__4731__auto___64893 + (1));
i__4731__auto___64893 = G__64895;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61203 = conformed_args__57018__auto__;
var map__61203__$1 = (((((!((map__61203 == null))))?(((((map__61203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61203):map__61203);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61203__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61203__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61203__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq61188){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61188));
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
var len__4730__auto___64926 = arguments.length;
var i__4731__auto___64928 = (0);
while(true){
if((i__4731__auto___64928 < len__4730__auto___64926)){
args__4736__auto__.push((arguments[i__4731__auto___64928]));

var G__64929 = (i__4731__auto___64928 + (1));
i__4731__auto___64928 = G__64929;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61217 = conformed_args__57018__auto__;
var map__61217__$1 = (((((!((map__61217 == null))))?(((((map__61217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61217):map__61217);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61217__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61217__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61217__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq61212){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61212));
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
var len__4730__auto___64947 = arguments.length;
var i__4731__auto___64948 = (0);
while(true){
if((i__4731__auto___64948 < len__4730__auto___64947)){
args__4736__auto__.push((arguments[i__4731__auto___64948]));

var G__64949 = (i__4731__auto___64948 + (1));
i__4731__auto___64948 = G__64949;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61236 = conformed_args__57018__auto__;
var map__61236__$1 = (((((!((map__61236 == null))))?(((((map__61236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61236):map__61236);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61236__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61236__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61236__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq61228){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61228));
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
var len__4730__auto___64960 = arguments.length;
var i__4731__auto___64961 = (0);
while(true){
if((i__4731__auto___64961 < len__4730__auto___64960)){
args__4736__auto__.push((arguments[i__4731__auto___64961]));

var G__64966 = (i__4731__auto___64961 + (1));
i__4731__auto___64961 = G__64966;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61257 = conformed_args__57018__auto__;
var map__61257__$1 = (((((!((map__61257 == null))))?(((((map__61257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61257):map__61257);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61257__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61257__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61257__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq61248){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61248));
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
var len__4730__auto___64980 = arguments.length;
var i__4731__auto___64984 = (0);
while(true){
if((i__4731__auto___64984 < len__4730__auto___64980)){
args__4736__auto__.push((arguments[i__4731__auto___64984]));

var G__64985 = (i__4731__auto___64984 + (1));
i__4731__auto___64984 = G__64985;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61282 = conformed_args__57018__auto__;
var map__61282__$1 = (((((!((map__61282 == null))))?(((((map__61282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61282):map__61282);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61282__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61282__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61282__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq61266){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61266));
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
var len__4730__auto___65020 = arguments.length;
var i__4731__auto___65021 = (0);
while(true){
if((i__4731__auto___65021 < len__4730__auto___65020)){
args__4736__auto__.push((arguments[i__4731__auto___65021]));

var G__65024 = (i__4731__auto___65021 + (1));
i__4731__auto___65021 = G__65024;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61299 = conformed_args__57018__auto__;
var map__61299__$1 = (((((!((map__61299 == null))))?(((((map__61299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61299):map__61299);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61299__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61299__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61299__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq61293){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61293));
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
var len__4730__auto___65040 = arguments.length;
var i__4731__auto___65042 = (0);
while(true){
if((i__4731__auto___65042 < len__4730__auto___65040)){
args__4736__auto__.push((arguments[i__4731__auto___65042]));

var G__65044 = (i__4731__auto___65042 + (1));
i__4731__auto___65042 = G__65044;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61309 = conformed_args__57018__auto__;
var map__61309__$1 = (((((!((map__61309 == null))))?(((((map__61309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61309):map__61309);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61309__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61309__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61309__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq61306){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61306));
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
var len__4730__auto___65054 = arguments.length;
var i__4731__auto___65055 = (0);
while(true){
if((i__4731__auto___65055 < len__4730__auto___65054)){
args__4736__auto__.push((arguments[i__4731__auto___65055]));

var G__65057 = (i__4731__auto___65055 + (1));
i__4731__auto___65055 = G__65057;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61330 = conformed_args__57018__auto__;
var map__61330__$1 = (((((!((map__61330 == null))))?(((((map__61330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61330):map__61330);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61330__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61330__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61330__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq61323){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61323));
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
var len__4730__auto___65069 = arguments.length;
var i__4731__auto___65070 = (0);
while(true){
if((i__4731__auto___65070 < len__4730__auto___65069)){
args__4736__auto__.push((arguments[i__4731__auto___65070]));

var G__65072 = (i__4731__auto___65070 + (1));
i__4731__auto___65070 = G__65072;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61348 = conformed_args__57018__auto__;
var map__61348__$1 = (((((!((map__61348 == null))))?(((((map__61348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61348):map__61348);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61348__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61348__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61348__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq61341){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61341));
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
var len__4730__auto___65091 = arguments.length;
var i__4731__auto___65092 = (0);
while(true){
if((i__4731__auto___65092 < len__4730__auto___65091)){
args__4736__auto__.push((arguments[i__4731__auto___65092]));

var G__65093 = (i__4731__auto___65092 + (1));
i__4731__auto___65092 = G__65093;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61378 = conformed_args__57018__auto__;
var map__61378__$1 = (((((!((map__61378 == null))))?(((((map__61378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61378):map__61378);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61378__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61378__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61378__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq61360){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61360));
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
var len__4730__auto___65108 = arguments.length;
var i__4731__auto___65109 = (0);
while(true){
if((i__4731__auto___65109 < len__4730__auto___65108)){
args__4736__auto__.push((arguments[i__4731__auto___65109]));

var G__65112 = (i__4731__auto___65109 + (1));
i__4731__auto___65109 = G__65112;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61384 = conformed_args__57018__auto__;
var map__61384__$1 = (((((!((map__61384 == null))))?(((((map__61384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61384):map__61384);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61384__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61384__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61384__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq61381){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61381));
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
var len__4730__auto___65136 = arguments.length;
var i__4731__auto___65137 = (0);
while(true){
if((i__4731__auto___65137 < len__4730__auto___65136)){
args__4736__auto__.push((arguments[i__4731__auto___65137]));

var G__65138 = (i__4731__auto___65137 + (1));
i__4731__auto___65137 = G__65138;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61401 = conformed_args__57018__auto__;
var map__61401__$1 = (((((!((map__61401 == null))))?(((((map__61401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61401):map__61401);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61401__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61401__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61401__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq61393){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61393));
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
var len__4730__auto___65151 = arguments.length;
var i__4731__auto___65152 = (0);
while(true){
if((i__4731__auto___65152 < len__4730__auto___65151)){
args__4736__auto__.push((arguments[i__4731__auto___65152]));

var G__65154 = (i__4731__auto___65152 + (1));
i__4731__auto___65152 = G__65154;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61412 = conformed_args__57018__auto__;
var map__61412__$1 = (((((!((map__61412 == null))))?(((((map__61412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61412):map__61412);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61412__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61412__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61412__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq61408){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61408));
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
var len__4730__auto___65168 = arguments.length;
var i__4731__auto___65169 = (0);
while(true){
if((i__4731__auto___65169 < len__4730__auto___65168)){
args__4736__auto__.push((arguments[i__4731__auto___65169]));

var G__65171 = (i__4731__auto___65169 + (1));
i__4731__auto___65169 = G__65171;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61431 = conformed_args__57018__auto__;
var map__61431__$1 = (((((!((map__61431 == null))))?(((((map__61431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61431):map__61431);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61431__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61431__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61431__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq61423){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61423));
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
var len__4730__auto___65177 = arguments.length;
var i__4731__auto___65179 = (0);
while(true){
if((i__4731__auto___65179 < len__4730__auto___65177)){
args__4736__auto__.push((arguments[i__4731__auto___65179]));

var G__65184 = (i__4731__auto___65179 + (1));
i__4731__auto___65179 = G__65184;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61451 = conformed_args__57018__auto__;
var map__61451__$1 = (((((!((map__61451 == null))))?(((((map__61451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61451):map__61451);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61451__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61451__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61451__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq61437){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61437));
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
var len__4730__auto___65203 = arguments.length;
var i__4731__auto___65204 = (0);
while(true){
if((i__4731__auto___65204 < len__4730__auto___65203)){
args__4736__auto__.push((arguments[i__4731__auto___65204]));

var G__65205 = (i__4731__auto___65204 + (1));
i__4731__auto___65204 = G__65205;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61477 = conformed_args__57018__auto__;
var map__61477__$1 = (((((!((map__61477 == null))))?(((((map__61477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61477):map__61477);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61477__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61477__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61477__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq61469){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61469));
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
var len__4730__auto___65214 = arguments.length;
var i__4731__auto___65215 = (0);
while(true){
if((i__4731__auto___65215 < len__4730__auto___65214)){
args__4736__auto__.push((arguments[i__4731__auto___65215]));

var G__65217 = (i__4731__auto___65215 + (1));
i__4731__auto___65215 = G__65217;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61516 = conformed_args__57018__auto__;
var map__61516__$1 = (((((!((map__61516 == null))))?(((((map__61516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61516):map__61516);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61516__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61516__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61516__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq61503){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61503));
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
var len__4730__auto___65229 = arguments.length;
var i__4731__auto___65230 = (0);
while(true){
if((i__4731__auto___65230 < len__4730__auto___65229)){
args__4736__auto__.push((arguments[i__4731__auto___65230]));

var G__65232 = (i__4731__auto___65230 + (1));
i__4731__auto___65230 = G__65232;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61535 = conformed_args__57018__auto__;
var map__61535__$1 = (((((!((map__61535 == null))))?(((((map__61535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61535):map__61535);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61535__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61535__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61535__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq61529){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61529));
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
var len__4730__auto___65245 = arguments.length;
var i__4731__auto___65246 = (0);
while(true){
if((i__4731__auto___65246 < len__4730__auto___65245)){
args__4736__auto__.push((arguments[i__4731__auto___65246]));

var G__65247 = (i__4731__auto___65246 + (1));
i__4731__auto___65246 = G__65247;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61546 = conformed_args__57018__auto__;
var map__61546__$1 = (((((!((map__61546 == null))))?(((((map__61546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61546):map__61546);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61546__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61546__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61546__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq61542){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61542));
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
var len__4730__auto___65264 = arguments.length;
var i__4731__auto___65265 = (0);
while(true){
if((i__4731__auto___65265 < len__4730__auto___65264)){
args__4736__auto__.push((arguments[i__4731__auto___65265]));

var G__65266 = (i__4731__auto___65265 + (1));
i__4731__auto___65265 = G__65266;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57018__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__61589 = conformed_args__57018__auto__;
var map__61589__$1 = (((((!((map__61589 == null))))?(((((map__61589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61589):map__61589);
var children__57020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61589__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__57019__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61589__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__57021__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61589__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57020__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57020__auto__);
var attrs_value__57022__auto__ = (function (){var or__4120__auto__ = cljs.core.second(attrs__57019__auto__);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57022__auto__], null),children__57020__auto____$1),css__57021__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq61557){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61557));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
