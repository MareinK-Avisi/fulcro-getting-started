goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__50256 = arguments.length;
switch (G__50256) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50261 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50261 = (function (f,blockable,meta50262){
this.f = f;
this.blockable = blockable;
this.meta50262 = meta50262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50263,meta50262__$1){
var self__ = this;
var _50263__$1 = this;
return (new cljs.core.async.t_cljs$core$async50261(self__.f,self__.blockable,meta50262__$1));
}));

(cljs.core.async.t_cljs$core$async50261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50263){
var self__ = this;
var _50263__$1 = this;
return self__.meta50262;
}));

(cljs.core.async.t_cljs$core$async50261.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50261.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50261.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async50261.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async50261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta50262","meta50262",-719685266,null)], null);
}));

(cljs.core.async.t_cljs$core$async50261.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50261");

(cljs.core.async.t_cljs$core$async50261.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async50261");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50261.
 */
cljs.core.async.__GT_t_cljs$core$async50261 = (function cljs$core$async$__GT_t_cljs$core$async50261(f__$1,blockable__$1,meta50262){
return (new cljs.core.async.t_cljs$core$async50261(f__$1,blockable__$1,meta50262));
});

}

return (new cljs.core.async.t_cljs$core$async50261(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__50326 = arguments.length;
switch (G__50326) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__50362 = arguments.length;
switch (G__50362) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__50378 = arguments.length;
switch (G__50378) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_53481 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53481) : fn1.call(null,val_53481));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53481) : fn1.call(null,val_53481));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__50388 = arguments.length;
switch (G__50388) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___53503 = n;
var x_53504 = (0);
while(true){
if((x_53504 < n__4607__auto___53503)){
(a[x_53504] = x_53504);

var G__53505 = (x_53504 + (1));
x_53504 = G__53505;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50417 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50417 = (function (flag,meta50418){
this.flag = flag;
this.meta50418 = meta50418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50419,meta50418__$1){
var self__ = this;
var _50419__$1 = this;
return (new cljs.core.async.t_cljs$core$async50417(self__.flag,meta50418__$1));
}));

(cljs.core.async.t_cljs$core$async50417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50419){
var self__ = this;
var _50419__$1 = this;
return self__.meta50418;
}));

(cljs.core.async.t_cljs$core$async50417.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50417.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50417.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50417.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async50417.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta50418","meta50418",-1033272142,null)], null);
}));

(cljs.core.async.t_cljs$core$async50417.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50417");

(cljs.core.async.t_cljs$core$async50417.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async50417");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50417.
 */
cljs.core.async.__GT_t_cljs$core$async50417 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async50417(flag__$1,meta50418){
return (new cljs.core.async.t_cljs$core$async50417(flag__$1,meta50418));
});

}

return (new cljs.core.async.t_cljs$core$async50417(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50455 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50455 = (function (flag,cb,meta50456){
this.flag = flag;
this.cb = cb;
this.meta50456 = meta50456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50457,meta50456__$1){
var self__ = this;
var _50457__$1 = this;
return (new cljs.core.async.t_cljs$core$async50455(self__.flag,self__.cb,meta50456__$1));
}));

(cljs.core.async.t_cljs$core$async50455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50457){
var self__ = this;
var _50457__$1 = this;
return self__.meta50456;
}));

(cljs.core.async.t_cljs$core$async50455.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50455.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50455.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50455.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async50455.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50456","meta50456",357630524,null)], null);
}));

(cljs.core.async.t_cljs$core$async50455.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50455.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50455");

(cljs.core.async.t_cljs$core$async50455.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async50455");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50455.
 */
cljs.core.async.__GT_t_cljs$core$async50455 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async50455(flag__$1,cb__$1,meta50456){
return (new cljs.core.async.t_cljs$core$async50455(flag__$1,cb__$1,meta50456));
});

}

return (new cljs.core.async.t_cljs$core$async50455(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50480_SHARP_){
var G__50492 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50480_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50492) : fret.call(null,G__50492));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50481_SHARP_){
var G__50493 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50481_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50493) : fret.call(null,G__50493));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4120__auto__ = wport;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return port;
}
})()], null));
} else {
var G__53541 = (i + (1));
i = G__53541;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4120__auto__ = ret;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4109__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4109__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4109__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53548 = arguments.length;
var i__4731__auto___53549 = (0);
while(true){
if((i__4731__auto___53549 < len__4730__auto___53548)){
args__4736__auto__.push((arguments[i__4731__auto___53549]));

var G__53552 = (i__4731__auto___53549 + (1));
i__4731__auto___53549 = G__53552;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50509){
var map__50510 = p__50509;
var map__50510__$1 = (((((!((map__50510 == null))))?(((((map__50510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50510):map__50510);
var opts = map__50510__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50502){
var G__50503 = cljs.core.first(seq50502);
var seq50502__$1 = cljs.core.next(seq50502);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50503,seq50502__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__50537 = arguments.length;
switch (G__50537) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__50116__auto___53566 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50117__auto__ = (function (){var switch__49967__auto__ = (function (state_50575){
var state_val_50576 = (state_50575[(1)]);
if((state_val_50576 === (7))){
var inst_50571 = (state_50575[(2)]);
var state_50575__$1 = state_50575;
var statearr_50581_53567 = state_50575__$1;
(statearr_50581_53567[(2)] = inst_50571);

(statearr_50581_53567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50576 === (1))){
var state_50575__$1 = state_50575;
var statearr_50583_53569 = state_50575__$1;
(statearr_50583_53569[(2)] = null);

(statearr_50583_53569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50576 === (4))){
var inst_50554 = (state_50575[(7)]);
var inst_50554__$1 = (state_50575[(2)]);
var inst_50555 = (inst_50554__$1 == null);
var state_50575__$1 = (function (){var statearr_50585 = state_50575;
(statearr_50585[(7)] = inst_50554__$1);

return statearr_50585;
})();
if(cljs.core.truth_(inst_50555)){
var statearr_50586_53570 = state_50575__$1;
(statearr_50586_53570[(1)] = (5));

} else {
var statearr_50587_53572 = state_50575__$1;
(statearr_50587_53572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50576 === (13))){
var state_50575__$1 = state_50575;
var statearr_50589_53575 = state_50575__$1;
(statearr_50589_53575[(2)] = null);

(statearr_50589_53575[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50576 === (6))){
var inst_50554 = (state_50575[(7)]);
var state_50575__$1 = state_50575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50575__$1,(11),to,inst_50554);
} else {
if((state_val_50576 === (3))){
var inst_50573 = (state_50575[(2)]);
var state_50575__$1 = state_50575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50575__$1,inst_50573);
} else {
if((state_val_50576 === (12))){
var state_50575__$1 = state_50575;
var statearr_50596_53578 = state_50575__$1;
(statearr_50596_53578[(2)] = null);

(statearr_50596_53578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50576 === (2))){
var state_50575__$1 = state_50575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50575__$1,(4),from);
} else {
if((state_val_50576 === (11))){
var inst_50564 = (state_50575[(2)]);
var state_50575__$1 = state_50575;
if(cljs.core.truth_(inst_50564)){
var statearr_50597_53582 = state_50575__$1;
(statearr_50597_53582[(1)] = (12));

} else {
var statearr_50598_53583 = state_50575__$1;
(statearr_50598_53583[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50576 === (9))){
var state_50575__$1 = state_50575;
var statearr_50599_53584 = state_50575__$1;
(statearr_50599_53584[(2)] = null);

(statearr_50599_53584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50576 === (5))){
var state_50575__$1 = state_50575;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50601_53585 = state_50575__$1;
(statearr_50601_53585[(1)] = (8));

} else {
var statearr_50602_53586 = state_50575__$1;
(statearr_50602_53586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50576 === (14))){
var inst_50569 = (state_50575[(2)]);
var state_50575__$1 = state_50575;
var statearr_50603_53587 = state_50575__$1;
(statearr_50603_53587[(2)] = inst_50569);

(statearr_50603_53587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50576 === (10))){
var inst_50561 = (state_50575[(2)]);
var state_50575__$1 = state_50575;
var statearr_50604_53588 = state_50575__$1;
(statearr_50604_53588[(2)] = inst_50561);

(statearr_50604_53588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50576 === (8))){
var inst_50558 = cljs.core.async.close_BANG_(to);
var state_50575__$1 = state_50575;
var statearr_50605_53589 = state_50575__$1;
(statearr_50605_53589[(2)] = inst_50558);

(statearr_50605_53589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49968__auto__ = null;
var cljs$core$async$state_machine__49968__auto____0 = (function (){
var statearr_50610 = [null,null,null,null,null,null,null,null];
(statearr_50610[(0)] = cljs$core$async$state_machine__49968__auto__);

(statearr_50610[(1)] = (1));

return statearr_50610;
});
var cljs$core$async$state_machine__49968__auto____1 = (function (state_50575){
while(true){
var ret_value__49969__auto__ = (function (){try{while(true){
var result__49970__auto__ = switch__49967__auto__(state_50575);
if(cljs.core.keyword_identical_QMARK_(result__49970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49970__auto__;
}
break;
}
}catch (e50612){var ex__49971__auto__ = e50612;
var statearr_50613_53594 = state_50575;
(statearr_50613_53594[(2)] = ex__49971__auto__);


if(cljs.core.seq((state_50575[(4)]))){
var statearr_50614_53595 = state_50575;
(statearr_50614_53595[(1)] = cljs.core.first((state_50575[(4)])));

} else {
throw ex__49971__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53598 = state_50575;
state_50575 = G__53598;
continue;
} else {
return ret_value__49969__auto__;
}
break;
}
});
cljs$core$async$state_machine__49968__auto__ = function(state_50575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49968__auto____1.call(this,state_50575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49968__auto____0;
cljs$core$async$state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49968__auto____1;
return cljs$core$async$state_machine__49968__auto__;
})()
})();
var state__50118__auto__ = (function (){var statearr_50615 = f__50117__auto__();
(statearr_50615[(6)] = c__50116__auto___53566);

return statearr_50615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50118__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__50622){
var vec__50624 = p__50622;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50624,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50624,(1),null);
var job = vec__50624;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__50116__auto___53601 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50117__auto__ = (function (){var switch__49967__auto__ = (function (state_50637){
var state_val_50638 = (state_50637[(1)]);
if((state_val_50638 === (1))){
var state_50637__$1 = state_50637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50637__$1,(2),res,v);
} else {
if((state_val_50638 === (2))){
var inst_50634 = (state_50637[(2)]);
var inst_50635 = cljs.core.async.close_BANG_(res);
var state_50637__$1 = (function (){var statearr_50639 = state_50637;
(statearr_50639[(7)] = inst_50634);

return statearr_50639;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50637__$1,inst_50635);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____0 = (function (){
var statearr_50640 = [null,null,null,null,null,null,null,null];
(statearr_50640[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__);

(statearr_50640[(1)] = (1));

return statearr_50640;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____1 = (function (state_50637){
while(true){
var ret_value__49969__auto__ = (function (){try{while(true){
var result__49970__auto__ = switch__49967__auto__(state_50637);
if(cljs.core.keyword_identical_QMARK_(result__49970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49970__auto__;
}
break;
}
}catch (e50641){var ex__49971__auto__ = e50641;
var statearr_50642_53607 = state_50637;
(statearr_50642_53607[(2)] = ex__49971__auto__);


if(cljs.core.seq((state_50637[(4)]))){
var statearr_50643_53609 = state_50637;
(statearr_50643_53609[(1)] = cljs.core.first((state_50637[(4)])));

} else {
throw ex__49971__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53611 = state_50637;
state_50637 = G__53611;
continue;
} else {
return ret_value__49969__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__ = function(state_50637){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____1.call(this,state_50637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__;
})()
})();
var state__50118__auto__ = (function (){var statearr_50646 = f__50117__auto__();
(statearr_50646[(6)] = c__50116__auto___53601);

return statearr_50646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50118__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__50647){
var vec__50648 = p__50647;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50648,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50648,(1),null);
var job = vec__50648;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4607__auto___53614 = n;
var __53616 = (0);
while(true){
if((__53616 < n__4607__auto___53614)){
var G__50653_53617 = type;
var G__50653_53618__$1 = (((G__50653_53617 instanceof cljs.core.Keyword))?G__50653_53617.fqn:null);
switch (G__50653_53618__$1) {
case "compute":
var c__50116__auto___53620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53616,c__50116__auto___53620,G__50653_53617,G__50653_53618__$1,n__4607__auto___53614,jobs,results,process,async){
return (function (){
var f__50117__auto__ = (function (){var switch__49967__auto__ = ((function (__53616,c__50116__auto___53620,G__50653_53617,G__50653_53618__$1,n__4607__auto___53614,jobs,results,process,async){
return (function (state_50670){
var state_val_50671 = (state_50670[(1)]);
if((state_val_50671 === (1))){
var state_50670__$1 = state_50670;
var statearr_50672_53624 = state_50670__$1;
(statearr_50672_53624[(2)] = null);

(statearr_50672_53624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50671 === (2))){
var state_50670__$1 = state_50670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50670__$1,(4),jobs);
} else {
if((state_val_50671 === (3))){
var inst_50668 = (state_50670[(2)]);
var state_50670__$1 = state_50670;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50670__$1,inst_50668);
} else {
if((state_val_50671 === (4))){
var inst_50656 = (state_50670[(2)]);
var inst_50657 = process(inst_50656);
var state_50670__$1 = state_50670;
if(cljs.core.truth_(inst_50657)){
var statearr_50675_53628 = state_50670__$1;
(statearr_50675_53628[(1)] = (5));

} else {
var statearr_50676_53629 = state_50670__$1;
(statearr_50676_53629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50671 === (5))){
var state_50670__$1 = state_50670;
var statearr_50677_53630 = state_50670__$1;
(statearr_50677_53630[(2)] = null);

(statearr_50677_53630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50671 === (6))){
var state_50670__$1 = state_50670;
var statearr_50679_53631 = state_50670__$1;
(statearr_50679_53631[(2)] = null);

(statearr_50679_53631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50671 === (7))){
var inst_50662 = (state_50670[(2)]);
var state_50670__$1 = state_50670;
var statearr_50683_53632 = state_50670__$1;
(statearr_50683_53632[(2)] = inst_50662);

(statearr_50683_53632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__53616,c__50116__auto___53620,G__50653_53617,G__50653_53618__$1,n__4607__auto___53614,jobs,results,process,async))
;
return ((function (__53616,switch__49967__auto__,c__50116__auto___53620,G__50653_53617,G__50653_53618__$1,n__4607__auto___53614,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____0 = (function (){
var statearr_50684 = [null,null,null,null,null,null,null];
(statearr_50684[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__);

(statearr_50684[(1)] = (1));

return statearr_50684;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____1 = (function (state_50670){
while(true){
var ret_value__49969__auto__ = (function (){try{while(true){
var result__49970__auto__ = switch__49967__auto__(state_50670);
if(cljs.core.keyword_identical_QMARK_(result__49970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49970__auto__;
}
break;
}
}catch (e50685){var ex__49971__auto__ = e50685;
var statearr_50686_53638 = state_50670;
(statearr_50686_53638[(2)] = ex__49971__auto__);


if(cljs.core.seq((state_50670[(4)]))){
var statearr_50688_53639 = state_50670;
(statearr_50688_53639[(1)] = cljs.core.first((state_50670[(4)])));

} else {
throw ex__49971__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53642 = state_50670;
state_50670 = G__53642;
continue;
} else {
return ret_value__49969__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__ = function(state_50670){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____1.call(this,state_50670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__;
})()
;})(__53616,switch__49967__auto__,c__50116__auto___53620,G__50653_53617,G__50653_53618__$1,n__4607__auto___53614,jobs,results,process,async))
})();
var state__50118__auto__ = (function (){var statearr_50694 = f__50117__auto__();
(statearr_50694[(6)] = c__50116__auto___53620);

return statearr_50694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50118__auto__);
});})(__53616,c__50116__auto___53620,G__50653_53617,G__50653_53618__$1,n__4607__auto___53614,jobs,results,process,async))
);


break;
case "async":
var c__50116__auto___53644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53616,c__50116__auto___53644,G__50653_53617,G__50653_53618__$1,n__4607__auto___53614,jobs,results,process,async){
return (function (){
var f__50117__auto__ = (function (){var switch__49967__auto__ = ((function (__53616,c__50116__auto___53644,G__50653_53617,G__50653_53618__$1,n__4607__auto___53614,jobs,results,process,async){
return (function (state_50707){
var state_val_50708 = (state_50707[(1)]);
if((state_val_50708 === (1))){
var state_50707__$1 = state_50707;
var statearr_50711_53645 = state_50707__$1;
(statearr_50711_53645[(2)] = null);

(statearr_50711_53645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50708 === (2))){
var state_50707__$1 = state_50707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50707__$1,(4),jobs);
} else {
if((state_val_50708 === (3))){
var inst_50705 = (state_50707[(2)]);
var state_50707__$1 = state_50707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50707__$1,inst_50705);
} else {
if((state_val_50708 === (4))){
var inst_50697 = (state_50707[(2)]);
var inst_50698 = async(inst_50697);
var state_50707__$1 = state_50707;
if(cljs.core.truth_(inst_50698)){
var statearr_50712_53649 = state_50707__$1;
(statearr_50712_53649[(1)] = (5));

} else {
var statearr_50713_53651 = state_50707__$1;
(statearr_50713_53651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50708 === (5))){
var state_50707__$1 = state_50707;
var statearr_50714_53652 = state_50707__$1;
(statearr_50714_53652[(2)] = null);

(statearr_50714_53652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50708 === (6))){
var state_50707__$1 = state_50707;
var statearr_50715_53653 = state_50707__$1;
(statearr_50715_53653[(2)] = null);

(statearr_50715_53653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50708 === (7))){
var inst_50703 = (state_50707[(2)]);
var state_50707__$1 = state_50707;
var statearr_50716_53654 = state_50707__$1;
(statearr_50716_53654[(2)] = inst_50703);

(statearr_50716_53654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__53616,c__50116__auto___53644,G__50653_53617,G__50653_53618__$1,n__4607__auto___53614,jobs,results,process,async))
;
return ((function (__53616,switch__49967__auto__,c__50116__auto___53644,G__50653_53617,G__50653_53618__$1,n__4607__auto___53614,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____0 = (function (){
var statearr_50718 = [null,null,null,null,null,null,null];
(statearr_50718[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__);

(statearr_50718[(1)] = (1));

return statearr_50718;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____1 = (function (state_50707){
while(true){
var ret_value__49969__auto__ = (function (){try{while(true){
var result__49970__auto__ = switch__49967__auto__(state_50707);
if(cljs.core.keyword_identical_QMARK_(result__49970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49970__auto__;
}
break;
}
}catch (e50719){var ex__49971__auto__ = e50719;
var statearr_50720_53658 = state_50707;
(statearr_50720_53658[(2)] = ex__49971__auto__);


if(cljs.core.seq((state_50707[(4)]))){
var statearr_50721_53660 = state_50707;
(statearr_50721_53660[(1)] = cljs.core.first((state_50707[(4)])));

} else {
throw ex__49971__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53663 = state_50707;
state_50707 = G__53663;
continue;
} else {
return ret_value__49969__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__ = function(state_50707){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____1.call(this,state_50707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__;
})()
;})(__53616,switch__49967__auto__,c__50116__auto___53644,G__50653_53617,G__50653_53618__$1,n__4607__auto___53614,jobs,results,process,async))
})();
var state__50118__auto__ = (function (){var statearr_50722 = f__50117__auto__();
(statearr_50722[(6)] = c__50116__auto___53644);

return statearr_50722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50118__auto__);
});})(__53616,c__50116__auto___53644,G__50653_53617,G__50653_53618__$1,n__4607__auto___53614,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50653_53618__$1)].join('')));

}

var G__53664 = (__53616 + (1));
__53616 = G__53664;
continue;
} else {
}
break;
}

var c__50116__auto___53665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50117__auto__ = (function (){var switch__49967__auto__ = (function (state_50752){
var state_val_50753 = (state_50752[(1)]);
if((state_val_50753 === (7))){
var inst_50748 = (state_50752[(2)]);
var state_50752__$1 = state_50752;
var statearr_50756_53667 = state_50752__$1;
(statearr_50756_53667[(2)] = inst_50748);

(statearr_50756_53667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50753 === (1))){
var state_50752__$1 = state_50752;
var statearr_50757_53669 = state_50752__$1;
(statearr_50757_53669[(2)] = null);

(statearr_50757_53669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50753 === (4))){
var inst_50729 = (state_50752[(7)]);
var inst_50729__$1 = (state_50752[(2)]);
var inst_50730 = (inst_50729__$1 == null);
var state_50752__$1 = (function (){var statearr_50758 = state_50752;
(statearr_50758[(7)] = inst_50729__$1);

return statearr_50758;
})();
if(cljs.core.truth_(inst_50730)){
var statearr_50759_53670 = state_50752__$1;
(statearr_50759_53670[(1)] = (5));

} else {
var statearr_50760_53671 = state_50752__$1;
(statearr_50760_53671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50753 === (6))){
var inst_50734 = (state_50752[(8)]);
var inst_50729 = (state_50752[(7)]);
var inst_50734__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_50738 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50739 = [inst_50729,inst_50734__$1];
var inst_50740 = (new cljs.core.PersistentVector(null,2,(5),inst_50738,inst_50739,null));
var state_50752__$1 = (function (){var statearr_50763 = state_50752;
(statearr_50763[(8)] = inst_50734__$1);

return statearr_50763;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50752__$1,(8),jobs,inst_50740);
} else {
if((state_val_50753 === (3))){
var inst_50750 = (state_50752[(2)]);
var state_50752__$1 = state_50752;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50752__$1,inst_50750);
} else {
if((state_val_50753 === (2))){
var state_50752__$1 = state_50752;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50752__$1,(4),from);
} else {
if((state_val_50753 === (9))){
var inst_50745 = (state_50752[(2)]);
var state_50752__$1 = (function (){var statearr_50772 = state_50752;
(statearr_50772[(9)] = inst_50745);

return statearr_50772;
})();
var statearr_50773_53674 = state_50752__$1;
(statearr_50773_53674[(2)] = null);

(statearr_50773_53674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50753 === (5))){
var inst_50732 = cljs.core.async.close_BANG_(jobs);
var state_50752__$1 = state_50752;
var statearr_50774_53675 = state_50752__$1;
(statearr_50774_53675[(2)] = inst_50732);

(statearr_50774_53675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50753 === (8))){
var inst_50734 = (state_50752[(8)]);
var inst_50742 = (state_50752[(2)]);
var state_50752__$1 = (function (){var statearr_50775 = state_50752;
(statearr_50775[(10)] = inst_50742);

return statearr_50775;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50752__$1,(9),results,inst_50734);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____0 = (function (){
var statearr_50776 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50776[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__);

(statearr_50776[(1)] = (1));

return statearr_50776;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____1 = (function (state_50752){
while(true){
var ret_value__49969__auto__ = (function (){try{while(true){
var result__49970__auto__ = switch__49967__auto__(state_50752);
if(cljs.core.keyword_identical_QMARK_(result__49970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49970__auto__;
}
break;
}
}catch (e50777){var ex__49971__auto__ = e50777;
var statearr_50778_53679 = state_50752;
(statearr_50778_53679[(2)] = ex__49971__auto__);


if(cljs.core.seq((state_50752[(4)]))){
var statearr_50780_53680 = state_50752;
(statearr_50780_53680[(1)] = cljs.core.first((state_50752[(4)])));

} else {
throw ex__49971__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53682 = state_50752;
state_50752 = G__53682;
continue;
} else {
return ret_value__49969__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__ = function(state_50752){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____1.call(this,state_50752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__;
})()
})();
var state__50118__auto__ = (function (){var statearr_50782 = f__50117__auto__();
(statearr_50782[(6)] = c__50116__auto___53665);

return statearr_50782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50118__auto__);
}));


var c__50116__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50117__auto__ = (function (){var switch__49967__auto__ = (function (state_50826){
var state_val_50827 = (state_50826[(1)]);
if((state_val_50827 === (7))){
var inst_50822 = (state_50826[(2)]);
var state_50826__$1 = state_50826;
var statearr_50828_53683 = state_50826__$1;
(statearr_50828_53683[(2)] = inst_50822);

(statearr_50828_53683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50827 === (20))){
var state_50826__$1 = state_50826;
var statearr_50829_53687 = state_50826__$1;
(statearr_50829_53687[(2)] = null);

(statearr_50829_53687[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50827 === (1))){
var state_50826__$1 = state_50826;
var statearr_50832_53690 = state_50826__$1;
(statearr_50832_53690[(2)] = null);

(statearr_50832_53690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50827 === (4))){
var inst_50785 = (state_50826[(7)]);
var inst_50785__$1 = (state_50826[(2)]);
var inst_50786 = (inst_50785__$1 == null);
var state_50826__$1 = (function (){var statearr_50834 = state_50826;
(statearr_50834[(7)] = inst_50785__$1);

return statearr_50834;
})();
if(cljs.core.truth_(inst_50786)){
var statearr_50835_53694 = state_50826__$1;
(statearr_50835_53694[(1)] = (5));

} else {
var statearr_50836_53695 = state_50826__$1;
(statearr_50836_53695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50827 === (15))){
var inst_50798 = (state_50826[(8)]);
var state_50826__$1 = state_50826;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50826__$1,(18),to,inst_50798);
} else {
if((state_val_50827 === (21))){
var inst_50817 = (state_50826[(2)]);
var state_50826__$1 = state_50826;
var statearr_50837_53696 = state_50826__$1;
(statearr_50837_53696[(2)] = inst_50817);

(statearr_50837_53696[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50827 === (13))){
var inst_50819 = (state_50826[(2)]);
var state_50826__$1 = (function (){var statearr_50838 = state_50826;
(statearr_50838[(9)] = inst_50819);

return statearr_50838;
})();
var statearr_50839_53698 = state_50826__$1;
(statearr_50839_53698[(2)] = null);

(statearr_50839_53698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50827 === (6))){
var inst_50785 = (state_50826[(7)]);
var state_50826__$1 = state_50826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50826__$1,(11),inst_50785);
} else {
if((state_val_50827 === (17))){
var inst_50812 = (state_50826[(2)]);
var state_50826__$1 = state_50826;
if(cljs.core.truth_(inst_50812)){
var statearr_50842_53700 = state_50826__$1;
(statearr_50842_53700[(1)] = (19));

} else {
var statearr_50843_53702 = state_50826__$1;
(statearr_50843_53702[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50827 === (3))){
var inst_50824 = (state_50826[(2)]);
var state_50826__$1 = state_50826;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50826__$1,inst_50824);
} else {
if((state_val_50827 === (12))){
var inst_50795 = (state_50826[(10)]);
var state_50826__$1 = state_50826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50826__$1,(14),inst_50795);
} else {
if((state_val_50827 === (2))){
var state_50826__$1 = state_50826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50826__$1,(4),results);
} else {
if((state_val_50827 === (19))){
var state_50826__$1 = state_50826;
var statearr_50844_53705 = state_50826__$1;
(statearr_50844_53705[(2)] = null);

(statearr_50844_53705[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50827 === (11))){
var inst_50795 = (state_50826[(2)]);
var state_50826__$1 = (function (){var statearr_50845 = state_50826;
(statearr_50845[(10)] = inst_50795);

return statearr_50845;
})();
var statearr_50846_53706 = state_50826__$1;
(statearr_50846_53706[(2)] = null);

(statearr_50846_53706[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50827 === (9))){
var state_50826__$1 = state_50826;
var statearr_50849_53708 = state_50826__$1;
(statearr_50849_53708[(2)] = null);

(statearr_50849_53708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50827 === (5))){
var state_50826__$1 = state_50826;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50850_53710 = state_50826__$1;
(statearr_50850_53710[(1)] = (8));

} else {
var statearr_50851_53711 = state_50826__$1;
(statearr_50851_53711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50827 === (14))){
var inst_50798 = (state_50826[(8)]);
var inst_50798__$1 = (state_50826[(2)]);
var inst_50805 = (inst_50798__$1 == null);
var inst_50806 = cljs.core.not(inst_50805);
var state_50826__$1 = (function (){var statearr_50852 = state_50826;
(statearr_50852[(8)] = inst_50798__$1);

return statearr_50852;
})();
if(inst_50806){
var statearr_50853_53712 = state_50826__$1;
(statearr_50853_53712[(1)] = (15));

} else {
var statearr_50854_53713 = state_50826__$1;
(statearr_50854_53713[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50827 === (16))){
var state_50826__$1 = state_50826;
var statearr_50855_53714 = state_50826__$1;
(statearr_50855_53714[(2)] = false);

(statearr_50855_53714[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50827 === (10))){
var inst_50792 = (state_50826[(2)]);
var state_50826__$1 = state_50826;
var statearr_50858_53717 = state_50826__$1;
(statearr_50858_53717[(2)] = inst_50792);

(statearr_50858_53717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50827 === (18))){
var inst_50809 = (state_50826[(2)]);
var state_50826__$1 = state_50826;
var statearr_50859_53718 = state_50826__$1;
(statearr_50859_53718[(2)] = inst_50809);

(statearr_50859_53718[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50827 === (8))){
var inst_50789 = cljs.core.async.close_BANG_(to);
var state_50826__$1 = state_50826;
var statearr_50860_53719 = state_50826__$1;
(statearr_50860_53719[(2)] = inst_50789);

(statearr_50860_53719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____0 = (function (){
var statearr_50861 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50861[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__);

(statearr_50861[(1)] = (1));

return statearr_50861;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____1 = (function (state_50826){
while(true){
var ret_value__49969__auto__ = (function (){try{while(true){
var result__49970__auto__ = switch__49967__auto__(state_50826);
if(cljs.core.keyword_identical_QMARK_(result__49970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49970__auto__;
}
break;
}
}catch (e50862){var ex__49971__auto__ = e50862;
var statearr_50863_53721 = state_50826;
(statearr_50863_53721[(2)] = ex__49971__auto__);


if(cljs.core.seq((state_50826[(4)]))){
var statearr_50864_53722 = state_50826;
(statearr_50864_53722[(1)] = cljs.core.first((state_50826[(4)])));

} else {
throw ex__49971__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53725 = state_50826;
state_50826 = G__53725;
continue;
} else {
return ret_value__49969__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__ = function(state_50826){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____1.call(this,state_50826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49968__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49968__auto__;
})()
})();
var state__50118__auto__ = (function (){var statearr_50868 = f__50117__auto__();
(statearr_50868[(6)] = c__50116__auto__);

return statearr_50868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50118__auto__);
}));

return c__50116__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__50870 = arguments.length;
switch (G__50870) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__50878 = arguments.length;
switch (G__50878) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__50893 = arguments.length;
switch (G__50893) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__50116__auto___53742 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50117__auto__ = (function (){var switch__49967__auto__ = (function (state_50923){
var state_val_50924 = (state_50923[(1)]);
if((state_val_50924 === (7))){
var inst_50919 = (state_50923[(2)]);
var state_50923__$1 = state_50923;
var statearr_50925_53744 = state_50923__$1;
(statearr_50925_53744[(2)] = inst_50919);

(statearr_50925_53744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50924 === (1))){
var state_50923__$1 = state_50923;
var statearr_50928_53745 = state_50923__$1;
(statearr_50928_53745[(2)] = null);

(statearr_50928_53745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50924 === (4))){
var inst_50896 = (state_50923[(7)]);
var inst_50896__$1 = (state_50923[(2)]);
var inst_50897 = (inst_50896__$1 == null);
var state_50923__$1 = (function (){var statearr_50929 = state_50923;
(statearr_50929[(7)] = inst_50896__$1);

return statearr_50929;
})();
if(cljs.core.truth_(inst_50897)){
var statearr_50930_53746 = state_50923__$1;
(statearr_50930_53746[(1)] = (5));

} else {
var statearr_50931_53747 = state_50923__$1;
(statearr_50931_53747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50924 === (13))){
var state_50923__$1 = state_50923;
var statearr_50932_53749 = state_50923__$1;
(statearr_50932_53749[(2)] = null);

(statearr_50932_53749[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50924 === (6))){
var inst_50896 = (state_50923[(7)]);
var inst_50902 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50896) : p.call(null,inst_50896));
var state_50923__$1 = state_50923;
if(cljs.core.truth_(inst_50902)){
var statearr_50937_53751 = state_50923__$1;
(statearr_50937_53751[(1)] = (9));

} else {
var statearr_50938_53752 = state_50923__$1;
(statearr_50938_53752[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50924 === (3))){
var inst_50921 = (state_50923[(2)]);
var state_50923__$1 = state_50923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50923__$1,inst_50921);
} else {
if((state_val_50924 === (12))){
var state_50923__$1 = state_50923;
var statearr_50939_53753 = state_50923__$1;
(statearr_50939_53753[(2)] = null);

(statearr_50939_53753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50924 === (2))){
var state_50923__$1 = state_50923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50923__$1,(4),ch);
} else {
if((state_val_50924 === (11))){
var inst_50896 = (state_50923[(7)]);
var inst_50907 = (state_50923[(2)]);
var state_50923__$1 = state_50923;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50923__$1,(8),inst_50907,inst_50896);
} else {
if((state_val_50924 === (9))){
var state_50923__$1 = state_50923;
var statearr_50940_53757 = state_50923__$1;
(statearr_50940_53757[(2)] = tc);

(statearr_50940_53757[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50924 === (5))){
var inst_50899 = cljs.core.async.close_BANG_(tc);
var inst_50900 = cljs.core.async.close_BANG_(fc);
var state_50923__$1 = (function (){var statearr_50941 = state_50923;
(statearr_50941[(8)] = inst_50899);

return statearr_50941;
})();
var statearr_50942_53758 = state_50923__$1;
(statearr_50942_53758[(2)] = inst_50900);

(statearr_50942_53758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50924 === (14))){
var inst_50917 = (state_50923[(2)]);
var state_50923__$1 = state_50923;
var statearr_50943_53761 = state_50923__$1;
(statearr_50943_53761[(2)] = inst_50917);

(statearr_50943_53761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50924 === (10))){
var state_50923__$1 = state_50923;
var statearr_50944_53762 = state_50923__$1;
(statearr_50944_53762[(2)] = fc);

(statearr_50944_53762[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50924 === (8))){
var inst_50909 = (state_50923[(2)]);
var state_50923__$1 = state_50923;
if(cljs.core.truth_(inst_50909)){
var statearr_50947_53763 = state_50923__$1;
(statearr_50947_53763[(1)] = (12));

} else {
var statearr_50948_53767 = state_50923__$1;
(statearr_50948_53767[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49968__auto__ = null;
var cljs$core$async$state_machine__49968__auto____0 = (function (){
var statearr_50949 = [null,null,null,null,null,null,null,null,null];
(statearr_50949[(0)] = cljs$core$async$state_machine__49968__auto__);

(statearr_50949[(1)] = (1));

return statearr_50949;
});
var cljs$core$async$state_machine__49968__auto____1 = (function (state_50923){
while(true){
var ret_value__49969__auto__ = (function (){try{while(true){
var result__49970__auto__ = switch__49967__auto__(state_50923);
if(cljs.core.keyword_identical_QMARK_(result__49970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49970__auto__;
}
break;
}
}catch (e50950){var ex__49971__auto__ = e50950;
var statearr_50951_53768 = state_50923;
(statearr_50951_53768[(2)] = ex__49971__auto__);


if(cljs.core.seq((state_50923[(4)]))){
var statearr_50953_53769 = state_50923;
(statearr_50953_53769[(1)] = cljs.core.first((state_50923[(4)])));

} else {
throw ex__49971__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53776 = state_50923;
state_50923 = G__53776;
continue;
} else {
return ret_value__49969__auto__;
}
break;
}
});
cljs$core$async$state_machine__49968__auto__ = function(state_50923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49968__auto____1.call(this,state_50923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49968__auto____0;
cljs$core$async$state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49968__auto____1;
return cljs$core$async$state_machine__49968__auto__;
})()
})();
var state__50118__auto__ = (function (){var statearr_50959 = f__50117__auto__();
(statearr_50959[(6)] = c__50116__auto___53742);

return statearr_50959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50118__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__50116__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50117__auto__ = (function (){var switch__49967__auto__ = (function (state_50981){
var state_val_50982 = (state_50981[(1)]);
if((state_val_50982 === (7))){
var inst_50977 = (state_50981[(2)]);
var state_50981__$1 = state_50981;
var statearr_50984_53777 = state_50981__$1;
(statearr_50984_53777[(2)] = inst_50977);

(statearr_50984_53777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (1))){
var inst_50960 = init;
var inst_50961 = inst_50960;
var state_50981__$1 = (function (){var statearr_50989 = state_50981;
(statearr_50989[(7)] = inst_50961);

return statearr_50989;
})();
var statearr_50990_53780 = state_50981__$1;
(statearr_50990_53780[(2)] = null);

(statearr_50990_53780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (4))){
var inst_50964 = (state_50981[(8)]);
var inst_50964__$1 = (state_50981[(2)]);
var inst_50965 = (inst_50964__$1 == null);
var state_50981__$1 = (function (){var statearr_50991 = state_50981;
(statearr_50991[(8)] = inst_50964__$1);

return statearr_50991;
})();
if(cljs.core.truth_(inst_50965)){
var statearr_50992_53787 = state_50981__$1;
(statearr_50992_53787[(1)] = (5));

} else {
var statearr_50993_53788 = state_50981__$1;
(statearr_50993_53788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (6))){
var inst_50961 = (state_50981[(7)]);
var inst_50968 = (state_50981[(9)]);
var inst_50964 = (state_50981[(8)]);
var inst_50968__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_50961,inst_50964) : f.call(null,inst_50961,inst_50964));
var inst_50969 = cljs.core.reduced_QMARK_(inst_50968__$1);
var state_50981__$1 = (function (){var statearr_50994 = state_50981;
(statearr_50994[(9)] = inst_50968__$1);

return statearr_50994;
})();
if(inst_50969){
var statearr_50995_53789 = state_50981__$1;
(statearr_50995_53789[(1)] = (8));

} else {
var statearr_50996_53790 = state_50981__$1;
(statearr_50996_53790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (3))){
var inst_50979 = (state_50981[(2)]);
var state_50981__$1 = state_50981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50981__$1,inst_50979);
} else {
if((state_val_50982 === (2))){
var state_50981__$1 = state_50981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50981__$1,(4),ch);
} else {
if((state_val_50982 === (9))){
var inst_50968 = (state_50981[(9)]);
var inst_50961 = inst_50968;
var state_50981__$1 = (function (){var statearr_50997 = state_50981;
(statearr_50997[(7)] = inst_50961);

return statearr_50997;
})();
var statearr_50998_53794 = state_50981__$1;
(statearr_50998_53794[(2)] = null);

(statearr_50998_53794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (5))){
var inst_50961 = (state_50981[(7)]);
var state_50981__$1 = state_50981;
var statearr_50999_53801 = state_50981__$1;
(statearr_50999_53801[(2)] = inst_50961);

(statearr_50999_53801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (10))){
var inst_50975 = (state_50981[(2)]);
var state_50981__$1 = state_50981;
var statearr_51000_53802 = state_50981__$1;
(statearr_51000_53802[(2)] = inst_50975);

(statearr_51000_53802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (8))){
var inst_50968 = (state_50981[(9)]);
var inst_50971 = cljs.core.deref(inst_50968);
var state_50981__$1 = state_50981;
var statearr_51004_53803 = state_50981__$1;
(statearr_51004_53803[(2)] = inst_50971);

(statearr_51004_53803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__49968__auto__ = null;
var cljs$core$async$reduce_$_state_machine__49968__auto____0 = (function (){
var statearr_51005 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51005[(0)] = cljs$core$async$reduce_$_state_machine__49968__auto__);

(statearr_51005[(1)] = (1));

return statearr_51005;
});
var cljs$core$async$reduce_$_state_machine__49968__auto____1 = (function (state_50981){
while(true){
var ret_value__49969__auto__ = (function (){try{while(true){
var result__49970__auto__ = switch__49967__auto__(state_50981);
if(cljs.core.keyword_identical_QMARK_(result__49970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49970__auto__;
}
break;
}
}catch (e51006){var ex__49971__auto__ = e51006;
var statearr_51007_53807 = state_50981;
(statearr_51007_53807[(2)] = ex__49971__auto__);


if(cljs.core.seq((state_50981[(4)]))){
var statearr_51010_53809 = state_50981;
(statearr_51010_53809[(1)] = cljs.core.first((state_50981[(4)])));

} else {
throw ex__49971__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53812 = state_50981;
state_50981 = G__53812;
continue;
} else {
return ret_value__49969__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__49968__auto__ = function(state_50981){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__49968__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__49968__auto____1.call(this,state_50981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__49968__auto____0;
cljs$core$async$reduce_$_state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__49968__auto____1;
return cljs$core$async$reduce_$_state_machine__49968__auto__;
})()
})();
var state__50118__auto__ = (function (){var statearr_51012 = f__50117__auto__();
(statearr_51012[(6)] = c__50116__auto__);

return statearr_51012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50118__auto__);
}));

return c__50116__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__50116__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50117__auto__ = (function (){var switch__49967__auto__ = (function (state_51018){
var state_val_51019 = (state_51018[(1)]);
if((state_val_51019 === (1))){
var inst_51013 = cljs.core.async.reduce(f__$1,init,ch);
var state_51018__$1 = state_51018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51018__$1,(2),inst_51013);
} else {
if((state_val_51019 === (2))){
var inst_51015 = (state_51018[(2)]);
var inst_51016 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_51015) : f__$1.call(null,inst_51015));
var state_51018__$1 = state_51018;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51018__$1,inst_51016);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__49968__auto__ = null;
var cljs$core$async$transduce_$_state_machine__49968__auto____0 = (function (){
var statearr_51028 = [null,null,null,null,null,null,null];
(statearr_51028[(0)] = cljs$core$async$transduce_$_state_machine__49968__auto__);

(statearr_51028[(1)] = (1));

return statearr_51028;
});
var cljs$core$async$transduce_$_state_machine__49968__auto____1 = (function (state_51018){
while(true){
var ret_value__49969__auto__ = (function (){try{while(true){
var result__49970__auto__ = switch__49967__auto__(state_51018);
if(cljs.core.keyword_identical_QMARK_(result__49970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49970__auto__;
}
break;
}
}catch (e51035){var ex__49971__auto__ = e51035;
var statearr_51036_53823 = state_51018;
(statearr_51036_53823[(2)] = ex__49971__auto__);


if(cljs.core.seq((state_51018[(4)]))){
var statearr_51037_53824 = state_51018;
(statearr_51037_53824[(1)] = cljs.core.first((state_51018[(4)])));

} else {
throw ex__49971__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53825 = state_51018;
state_51018 = G__53825;
continue;
} else {
return ret_value__49969__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__49968__auto__ = function(state_51018){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__49968__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__49968__auto____1.call(this,state_51018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__49968__auto____0;
cljs$core$async$transduce_$_state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__49968__auto____1;
return cljs$core$async$transduce_$_state_machine__49968__auto__;
})()
})();
var state__50118__auto__ = (function (){var statearr_51038 = f__50117__auto__();
(statearr_51038[(6)] = c__50116__auto__);

return statearr_51038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50118__auto__);
}));

return c__50116__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__51043 = arguments.length;
switch (G__51043) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__50116__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50117__auto__ = (function (){var switch__49967__auto__ = (function (state_51082){
var state_val_51083 = (state_51082[(1)]);
if((state_val_51083 === (7))){
var inst_51062 = (state_51082[(2)]);
var state_51082__$1 = state_51082;
var statearr_51084_53828 = state_51082__$1;
(statearr_51084_53828[(2)] = inst_51062);

(statearr_51084_53828[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51083 === (1))){
var inst_51052 = cljs.core.seq(coll);
var inst_51053 = inst_51052;
var state_51082__$1 = (function (){var statearr_51085 = state_51082;
(statearr_51085[(7)] = inst_51053);

return statearr_51085;
})();
var statearr_51086_53829 = state_51082__$1;
(statearr_51086_53829[(2)] = null);

(statearr_51086_53829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51083 === (4))){
var inst_51053 = (state_51082[(7)]);
var inst_51060 = cljs.core.first(inst_51053);
var state_51082__$1 = state_51082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51082__$1,(7),ch,inst_51060);
} else {
if((state_val_51083 === (13))){
var inst_51076 = (state_51082[(2)]);
var state_51082__$1 = state_51082;
var statearr_51090_53835 = state_51082__$1;
(statearr_51090_53835[(2)] = inst_51076);

(statearr_51090_53835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51083 === (6))){
var inst_51065 = (state_51082[(2)]);
var state_51082__$1 = state_51082;
if(cljs.core.truth_(inst_51065)){
var statearr_51091_53837 = state_51082__$1;
(statearr_51091_53837[(1)] = (8));

} else {
var statearr_51092_53838 = state_51082__$1;
(statearr_51092_53838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51083 === (3))){
var inst_51080 = (state_51082[(2)]);
var state_51082__$1 = state_51082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51082__$1,inst_51080);
} else {
if((state_val_51083 === (12))){
var state_51082__$1 = state_51082;
var statearr_51093_53844 = state_51082__$1;
(statearr_51093_53844[(2)] = null);

(statearr_51093_53844[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51083 === (2))){
var inst_51053 = (state_51082[(7)]);
var state_51082__$1 = state_51082;
if(cljs.core.truth_(inst_51053)){
var statearr_51094_53847 = state_51082__$1;
(statearr_51094_53847[(1)] = (4));

} else {
var statearr_51095_53849 = state_51082__$1;
(statearr_51095_53849[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51083 === (11))){
var inst_51071 = cljs.core.async.close_BANG_(ch);
var state_51082__$1 = state_51082;
var statearr_51096_53850 = state_51082__$1;
(statearr_51096_53850[(2)] = inst_51071);

(statearr_51096_53850[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51083 === (9))){
var state_51082__$1 = state_51082;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51098_53851 = state_51082__$1;
(statearr_51098_53851[(1)] = (11));

} else {
var statearr_51099_53852 = state_51082__$1;
(statearr_51099_53852[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51083 === (5))){
var inst_51053 = (state_51082[(7)]);
var state_51082__$1 = state_51082;
var statearr_51100_53853 = state_51082__$1;
(statearr_51100_53853[(2)] = inst_51053);

(statearr_51100_53853[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51083 === (10))){
var inst_51078 = (state_51082[(2)]);
var state_51082__$1 = state_51082;
var statearr_51101_53855 = state_51082__$1;
(statearr_51101_53855[(2)] = inst_51078);

(statearr_51101_53855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51083 === (8))){
var inst_51053 = (state_51082[(7)]);
var inst_51067 = cljs.core.next(inst_51053);
var inst_51053__$1 = inst_51067;
var state_51082__$1 = (function (){var statearr_51106 = state_51082;
(statearr_51106[(7)] = inst_51053__$1);

return statearr_51106;
})();
var statearr_51107_53856 = state_51082__$1;
(statearr_51107_53856[(2)] = null);

(statearr_51107_53856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49968__auto__ = null;
var cljs$core$async$state_machine__49968__auto____0 = (function (){
var statearr_51110 = [null,null,null,null,null,null,null,null];
(statearr_51110[(0)] = cljs$core$async$state_machine__49968__auto__);

(statearr_51110[(1)] = (1));

return statearr_51110;
});
var cljs$core$async$state_machine__49968__auto____1 = (function (state_51082){
while(true){
var ret_value__49969__auto__ = (function (){try{while(true){
var result__49970__auto__ = switch__49967__auto__(state_51082);
if(cljs.core.keyword_identical_QMARK_(result__49970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49970__auto__;
}
break;
}
}catch (e51111){var ex__49971__auto__ = e51111;
var statearr_51112_53857 = state_51082;
(statearr_51112_53857[(2)] = ex__49971__auto__);


if(cljs.core.seq((state_51082[(4)]))){
var statearr_51113_53864 = state_51082;
(statearr_51113_53864[(1)] = cljs.core.first((state_51082[(4)])));

} else {
throw ex__49971__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53865 = state_51082;
state_51082 = G__53865;
continue;
} else {
return ret_value__49969__auto__;
}
break;
}
});
cljs$core$async$state_machine__49968__auto__ = function(state_51082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49968__auto____1.call(this,state_51082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49968__auto____0;
cljs$core$async$state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49968__auto____1;
return cljs$core$async$state_machine__49968__auto__;
})()
})();
var state__50118__auto__ = (function (){var statearr_51117 = f__50117__auto__();
(statearr_51117[(6)] = c__50116__auto__);

return statearr_51117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50118__auto__);
}));

return c__50116__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__51119 = arguments.length;
switch (G__51119) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_53868 = (function (_){
var x__4422__auto__ = (((_ == null))?null:_);
var m__4423__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4423__auto__.call(null,_));
} else {
var m__4420__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4420__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_53868(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_53876 = (function (m,ch,close_QMARK_){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4423__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4420__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4420__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_53876(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_53877 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_53877(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_53879 = (function (m){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4423__auto__.call(null,m));
} else {
var m__4420__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4420__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_53879(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51137 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51137 = (function (ch,cs,meta51138){
this.ch = ch;
this.cs = cs;
this.meta51138 = meta51138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51139,meta51138__$1){
var self__ = this;
var _51139__$1 = this;
return (new cljs.core.async.t_cljs$core$async51137(self__.ch,self__.cs,meta51138__$1));
}));

(cljs.core.async.t_cljs$core$async51137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51139){
var self__ = this;
var _51139__$1 = this;
return self__.meta51138;
}));

(cljs.core.async.t_cljs$core$async51137.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51137.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51137.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51137.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async51137.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async51137.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async51137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta51138","meta51138",248306340,null)], null);
}));

(cljs.core.async.t_cljs$core$async51137.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51137");

(cljs.core.async.t_cljs$core$async51137.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async51137");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51137.
 */
cljs.core.async.__GT_t_cljs$core$async51137 = (function cljs$core$async$mult_$___GT_t_cljs$core$async51137(ch__$1,cs__$1,meta51138){
return (new cljs.core.async.t_cljs$core$async51137(ch__$1,cs__$1,meta51138));
});

}

return (new cljs.core.async.t_cljs$core$async51137(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__50116__auto___53887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50117__auto__ = (function (){var switch__49967__auto__ = (function (state_51300){
var state_val_51301 = (state_51300[(1)]);
if((state_val_51301 === (7))){
var inst_51295 = (state_51300[(2)]);
var state_51300__$1 = state_51300;
var statearr_51304_53888 = state_51300__$1;
(statearr_51304_53888[(2)] = inst_51295);

(statearr_51304_53888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (20))){
var inst_51190 = (state_51300[(7)]);
var inst_51203 = cljs.core.first(inst_51190);
var inst_51204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51203,(0),null);
var inst_51205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51203,(1),null);
var state_51300__$1 = (function (){var statearr_51307 = state_51300;
(statearr_51307[(8)] = inst_51204);

return statearr_51307;
})();
if(cljs.core.truth_(inst_51205)){
var statearr_51308_53890 = state_51300__$1;
(statearr_51308_53890[(1)] = (22));

} else {
var statearr_51310_53891 = state_51300__$1;
(statearr_51310_53891[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (27))){
var inst_51235 = (state_51300[(9)]);
var inst_51150 = (state_51300[(10)]);
var inst_51233 = (state_51300[(11)]);
var inst_51240 = (state_51300[(12)]);
var inst_51240__$1 = cljs.core._nth(inst_51233,inst_51235);
var inst_51241 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51240__$1,inst_51150,done);
var state_51300__$1 = (function (){var statearr_51314 = state_51300;
(statearr_51314[(12)] = inst_51240__$1);

return statearr_51314;
})();
if(cljs.core.truth_(inst_51241)){
var statearr_51315_53892 = state_51300__$1;
(statearr_51315_53892[(1)] = (30));

} else {
var statearr_51316_53893 = state_51300__$1;
(statearr_51316_53893[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (1))){
var state_51300__$1 = state_51300;
var statearr_51317_53895 = state_51300__$1;
(statearr_51317_53895[(2)] = null);

(statearr_51317_53895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (24))){
var inst_51190 = (state_51300[(7)]);
var inst_51210 = (state_51300[(2)]);
var inst_51211 = cljs.core.next(inst_51190);
var inst_51162 = inst_51211;
var inst_51163 = null;
var inst_51164 = (0);
var inst_51165 = (0);
var state_51300__$1 = (function (){var statearr_51319 = state_51300;
(statearr_51319[(13)] = inst_51162);

(statearr_51319[(14)] = inst_51210);

(statearr_51319[(15)] = inst_51163);

(statearr_51319[(16)] = inst_51165);

(statearr_51319[(17)] = inst_51164);

return statearr_51319;
})();
var statearr_51323_53897 = state_51300__$1;
(statearr_51323_53897[(2)] = null);

(statearr_51323_53897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (39))){
var state_51300__$1 = state_51300;
var statearr_51327_53898 = state_51300__$1;
(statearr_51327_53898[(2)] = null);

(statearr_51327_53898[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (4))){
var inst_51150 = (state_51300[(10)]);
var inst_51150__$1 = (state_51300[(2)]);
var inst_51152 = (inst_51150__$1 == null);
var state_51300__$1 = (function (){var statearr_51329 = state_51300;
(statearr_51329[(10)] = inst_51150__$1);

return statearr_51329;
})();
if(cljs.core.truth_(inst_51152)){
var statearr_51330_53899 = state_51300__$1;
(statearr_51330_53899[(1)] = (5));

} else {
var statearr_51331_53900 = state_51300__$1;
(statearr_51331_53900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (15))){
var inst_51162 = (state_51300[(13)]);
var inst_51163 = (state_51300[(15)]);
var inst_51165 = (state_51300[(16)]);
var inst_51164 = (state_51300[(17)]);
var inst_51183 = (state_51300[(2)]);
var inst_51185 = (inst_51165 + (1));
var tmp51324 = inst_51162;
var tmp51325 = inst_51163;
var tmp51326 = inst_51164;
var inst_51162__$1 = tmp51324;
var inst_51163__$1 = tmp51325;
var inst_51164__$1 = tmp51326;
var inst_51165__$1 = inst_51185;
var state_51300__$1 = (function (){var statearr_51336 = state_51300;
(statearr_51336[(13)] = inst_51162__$1);

(statearr_51336[(18)] = inst_51183);

(statearr_51336[(15)] = inst_51163__$1);

(statearr_51336[(16)] = inst_51165__$1);

(statearr_51336[(17)] = inst_51164__$1);

return statearr_51336;
})();
var statearr_51337_53903 = state_51300__$1;
(statearr_51337_53903[(2)] = null);

(statearr_51337_53903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (21))){
var inst_51214 = (state_51300[(2)]);
var state_51300__$1 = state_51300;
var statearr_51342_53904 = state_51300__$1;
(statearr_51342_53904[(2)] = inst_51214);

(statearr_51342_53904[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (31))){
var inst_51240 = (state_51300[(12)]);
var inst_51245 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51240);
var state_51300__$1 = state_51300;
var statearr_51344_53905 = state_51300__$1;
(statearr_51344_53905[(2)] = inst_51245);

(statearr_51344_53905[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (32))){
var inst_51235 = (state_51300[(9)]);
var inst_51232 = (state_51300[(19)]);
var inst_51234 = (state_51300[(20)]);
var inst_51233 = (state_51300[(11)]);
var inst_51247 = (state_51300[(2)]);
var inst_51248 = (inst_51235 + (1));
var tmp51338 = inst_51232;
var tmp51339 = inst_51234;
var tmp51340 = inst_51233;
var inst_51232__$1 = tmp51338;
var inst_51233__$1 = tmp51340;
var inst_51234__$1 = tmp51339;
var inst_51235__$1 = inst_51248;
var state_51300__$1 = (function (){var statearr_51348 = state_51300;
(statearr_51348[(9)] = inst_51235__$1);

(statearr_51348[(19)] = inst_51232__$1);

(statearr_51348[(20)] = inst_51234__$1);

(statearr_51348[(21)] = inst_51247);

(statearr_51348[(11)] = inst_51233__$1);

return statearr_51348;
})();
var statearr_51349_53909 = state_51300__$1;
(statearr_51349_53909[(2)] = null);

(statearr_51349_53909[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (40))){
var inst_51266 = (state_51300[(22)]);
var inst_51270 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51266);
var state_51300__$1 = state_51300;
var statearr_51351_53911 = state_51300__$1;
(statearr_51351_53911[(2)] = inst_51270);

(statearr_51351_53911[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (33))){
var inst_51253 = (state_51300[(23)]);
var inst_51257 = cljs.core.chunked_seq_QMARK_(inst_51253);
var state_51300__$1 = state_51300;
if(inst_51257){
var statearr_51354_53914 = state_51300__$1;
(statearr_51354_53914[(1)] = (36));

} else {
var statearr_51356_53915 = state_51300__$1;
(statearr_51356_53915[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (13))){
var inst_51176 = (state_51300[(24)]);
var inst_51179 = cljs.core.async.close_BANG_(inst_51176);
var state_51300__$1 = state_51300;
var statearr_51359_53916 = state_51300__$1;
(statearr_51359_53916[(2)] = inst_51179);

(statearr_51359_53916[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (22))){
var inst_51204 = (state_51300[(8)]);
var inst_51207 = cljs.core.async.close_BANG_(inst_51204);
var state_51300__$1 = state_51300;
var statearr_51362_53920 = state_51300__$1;
(statearr_51362_53920[(2)] = inst_51207);

(statearr_51362_53920[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (36))){
var inst_51253 = (state_51300[(23)]);
var inst_51259 = cljs.core.chunk_first(inst_51253);
var inst_51260 = cljs.core.chunk_rest(inst_51253);
var inst_51262 = cljs.core.count(inst_51259);
var inst_51232 = inst_51260;
var inst_51233 = inst_51259;
var inst_51234 = inst_51262;
var inst_51235 = (0);
var state_51300__$1 = (function (){var statearr_51364 = state_51300;
(statearr_51364[(9)] = inst_51235);

(statearr_51364[(19)] = inst_51232);

(statearr_51364[(20)] = inst_51234);

(statearr_51364[(11)] = inst_51233);

return statearr_51364;
})();
var statearr_51365_53921 = state_51300__$1;
(statearr_51365_53921[(2)] = null);

(statearr_51365_53921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (41))){
var inst_51253 = (state_51300[(23)]);
var inst_51272 = (state_51300[(2)]);
var inst_51273 = cljs.core.next(inst_51253);
var inst_51232 = inst_51273;
var inst_51233 = null;
var inst_51234 = (0);
var inst_51235 = (0);
var state_51300__$1 = (function (){var statearr_51367 = state_51300;
(statearr_51367[(9)] = inst_51235);

(statearr_51367[(19)] = inst_51232);

(statearr_51367[(25)] = inst_51272);

(statearr_51367[(20)] = inst_51234);

(statearr_51367[(11)] = inst_51233);

return statearr_51367;
})();
var statearr_51369_53924 = state_51300__$1;
(statearr_51369_53924[(2)] = null);

(statearr_51369_53924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (43))){
var state_51300__$1 = state_51300;
var statearr_51370_53925 = state_51300__$1;
(statearr_51370_53925[(2)] = null);

(statearr_51370_53925[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (29))){
var inst_51282 = (state_51300[(2)]);
var state_51300__$1 = state_51300;
var statearr_51372_53928 = state_51300__$1;
(statearr_51372_53928[(2)] = inst_51282);

(statearr_51372_53928[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (44))){
var inst_51292 = (state_51300[(2)]);
var state_51300__$1 = (function (){var statearr_51373 = state_51300;
(statearr_51373[(26)] = inst_51292);

return statearr_51373;
})();
var statearr_51374_53929 = state_51300__$1;
(statearr_51374_53929[(2)] = null);

(statearr_51374_53929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (6))){
var inst_51224 = (state_51300[(27)]);
var inst_51223 = cljs.core.deref(cs);
var inst_51224__$1 = cljs.core.keys(inst_51223);
var inst_51225 = cljs.core.count(inst_51224__$1);
var inst_51226 = cljs.core.reset_BANG_(dctr,inst_51225);
var inst_51231 = cljs.core.seq(inst_51224__$1);
var inst_51232 = inst_51231;
var inst_51233 = null;
var inst_51234 = (0);
var inst_51235 = (0);
var state_51300__$1 = (function (){var statearr_51377 = state_51300;
(statearr_51377[(9)] = inst_51235);

(statearr_51377[(19)] = inst_51232);

(statearr_51377[(27)] = inst_51224__$1);

(statearr_51377[(28)] = inst_51226);

(statearr_51377[(20)] = inst_51234);

(statearr_51377[(11)] = inst_51233);

return statearr_51377;
})();
var statearr_51378_53933 = state_51300__$1;
(statearr_51378_53933[(2)] = null);

(statearr_51378_53933[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (28))){
var inst_51232 = (state_51300[(19)]);
var inst_51253 = (state_51300[(23)]);
var inst_51253__$1 = cljs.core.seq(inst_51232);
var state_51300__$1 = (function (){var statearr_51380 = state_51300;
(statearr_51380[(23)] = inst_51253__$1);

return statearr_51380;
})();
if(inst_51253__$1){
var statearr_51382_53935 = state_51300__$1;
(statearr_51382_53935[(1)] = (33));

} else {
var statearr_51383_53936 = state_51300__$1;
(statearr_51383_53936[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (25))){
var inst_51235 = (state_51300[(9)]);
var inst_51234 = (state_51300[(20)]);
var inst_51237 = (inst_51235 < inst_51234);
var inst_51238 = inst_51237;
var state_51300__$1 = state_51300;
if(cljs.core.truth_(inst_51238)){
var statearr_51385_53937 = state_51300__$1;
(statearr_51385_53937[(1)] = (27));

} else {
var statearr_51386_53938 = state_51300__$1;
(statearr_51386_53938[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (34))){
var state_51300__$1 = state_51300;
var statearr_51388_53939 = state_51300__$1;
(statearr_51388_53939[(2)] = null);

(statearr_51388_53939[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (17))){
var state_51300__$1 = state_51300;
var statearr_51390_53941 = state_51300__$1;
(statearr_51390_53941[(2)] = null);

(statearr_51390_53941[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (3))){
var inst_51298 = (state_51300[(2)]);
var state_51300__$1 = state_51300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51300__$1,inst_51298);
} else {
if((state_val_51301 === (12))){
var inst_51219 = (state_51300[(2)]);
var state_51300__$1 = state_51300;
var statearr_51393_53942 = state_51300__$1;
(statearr_51393_53942[(2)] = inst_51219);

(statearr_51393_53942[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (2))){
var state_51300__$1 = state_51300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51300__$1,(4),ch);
} else {
if((state_val_51301 === (23))){
var state_51300__$1 = state_51300;
var statearr_51395_53943 = state_51300__$1;
(statearr_51395_53943[(2)] = null);

(statearr_51395_53943[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (35))){
var inst_51280 = (state_51300[(2)]);
var state_51300__$1 = state_51300;
var statearr_51396_53944 = state_51300__$1;
(statearr_51396_53944[(2)] = inst_51280);

(statearr_51396_53944[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (19))){
var inst_51190 = (state_51300[(7)]);
var inst_51195 = cljs.core.chunk_first(inst_51190);
var inst_51196 = cljs.core.chunk_rest(inst_51190);
var inst_51197 = cljs.core.count(inst_51195);
var inst_51162 = inst_51196;
var inst_51163 = inst_51195;
var inst_51164 = inst_51197;
var inst_51165 = (0);
var state_51300__$1 = (function (){var statearr_51398 = state_51300;
(statearr_51398[(13)] = inst_51162);

(statearr_51398[(15)] = inst_51163);

(statearr_51398[(16)] = inst_51165);

(statearr_51398[(17)] = inst_51164);

return statearr_51398;
})();
var statearr_51400_53950 = state_51300__$1;
(statearr_51400_53950[(2)] = null);

(statearr_51400_53950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (11))){
var inst_51162 = (state_51300[(13)]);
var inst_51190 = (state_51300[(7)]);
var inst_51190__$1 = cljs.core.seq(inst_51162);
var state_51300__$1 = (function (){var statearr_51404 = state_51300;
(statearr_51404[(7)] = inst_51190__$1);

return statearr_51404;
})();
if(inst_51190__$1){
var statearr_51405_53951 = state_51300__$1;
(statearr_51405_53951[(1)] = (16));

} else {
var statearr_51406_53952 = state_51300__$1;
(statearr_51406_53952[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (9))){
var inst_51221 = (state_51300[(2)]);
var state_51300__$1 = state_51300;
var statearr_51408_53955 = state_51300__$1;
(statearr_51408_53955[(2)] = inst_51221);

(statearr_51408_53955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (5))){
var inst_51160 = cljs.core.deref(cs);
var inst_51161 = cljs.core.seq(inst_51160);
var inst_51162 = inst_51161;
var inst_51163 = null;
var inst_51164 = (0);
var inst_51165 = (0);
var state_51300__$1 = (function (){var statearr_51410 = state_51300;
(statearr_51410[(13)] = inst_51162);

(statearr_51410[(15)] = inst_51163);

(statearr_51410[(16)] = inst_51165);

(statearr_51410[(17)] = inst_51164);

return statearr_51410;
})();
var statearr_51412_53957 = state_51300__$1;
(statearr_51412_53957[(2)] = null);

(statearr_51412_53957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (14))){
var state_51300__$1 = state_51300;
var statearr_51413_53958 = state_51300__$1;
(statearr_51413_53958[(2)] = null);

(statearr_51413_53958[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (45))){
var inst_51289 = (state_51300[(2)]);
var state_51300__$1 = state_51300;
var statearr_51415_53961 = state_51300__$1;
(statearr_51415_53961[(2)] = inst_51289);

(statearr_51415_53961[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (26))){
var inst_51224 = (state_51300[(27)]);
var inst_51284 = (state_51300[(2)]);
var inst_51285 = cljs.core.seq(inst_51224);
var state_51300__$1 = (function (){var statearr_51417 = state_51300;
(statearr_51417[(29)] = inst_51284);

return statearr_51417;
})();
if(inst_51285){
var statearr_51418_53966 = state_51300__$1;
(statearr_51418_53966[(1)] = (42));

} else {
var statearr_51419_53967 = state_51300__$1;
(statearr_51419_53967[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (16))){
var inst_51190 = (state_51300[(7)]);
var inst_51193 = cljs.core.chunked_seq_QMARK_(inst_51190);
var state_51300__$1 = state_51300;
if(inst_51193){
var statearr_51421_53968 = state_51300__$1;
(statearr_51421_53968[(1)] = (19));

} else {
var statearr_51422_53969 = state_51300__$1;
(statearr_51422_53969[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (38))){
var inst_51276 = (state_51300[(2)]);
var state_51300__$1 = state_51300;
var statearr_51423_53970 = state_51300__$1;
(statearr_51423_53970[(2)] = inst_51276);

(statearr_51423_53970[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (30))){
var state_51300__$1 = state_51300;
var statearr_51425_53971 = state_51300__$1;
(statearr_51425_53971[(2)] = null);

(statearr_51425_53971[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (10))){
var inst_51163 = (state_51300[(15)]);
var inst_51165 = (state_51300[(16)]);
var inst_51175 = cljs.core._nth(inst_51163,inst_51165);
var inst_51176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51175,(0),null);
var inst_51177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51175,(1),null);
var state_51300__$1 = (function (){var statearr_51427 = state_51300;
(statearr_51427[(24)] = inst_51176);

return statearr_51427;
})();
if(cljs.core.truth_(inst_51177)){
var statearr_51428_53972 = state_51300__$1;
(statearr_51428_53972[(1)] = (13));

} else {
var statearr_51430_53973 = state_51300__$1;
(statearr_51430_53973[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (18))){
var inst_51217 = (state_51300[(2)]);
var state_51300__$1 = state_51300;
var statearr_51431_53974 = state_51300__$1;
(statearr_51431_53974[(2)] = inst_51217);

(statearr_51431_53974[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (42))){
var state_51300__$1 = state_51300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51300__$1,(45),dchan);
} else {
if((state_val_51301 === (37))){
var inst_51150 = (state_51300[(10)]);
var inst_51266 = (state_51300[(22)]);
var inst_51253 = (state_51300[(23)]);
var inst_51266__$1 = cljs.core.first(inst_51253);
var inst_51267 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51266__$1,inst_51150,done);
var state_51300__$1 = (function (){var statearr_51433 = state_51300;
(statearr_51433[(22)] = inst_51266__$1);

return statearr_51433;
})();
if(cljs.core.truth_(inst_51267)){
var statearr_51435_53975 = state_51300__$1;
(statearr_51435_53975[(1)] = (39));

} else {
var statearr_51436_53976 = state_51300__$1;
(statearr_51436_53976[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51301 === (8))){
var inst_51165 = (state_51300[(16)]);
var inst_51164 = (state_51300[(17)]);
var inst_51167 = (inst_51165 < inst_51164);
var inst_51168 = inst_51167;
var state_51300__$1 = state_51300;
if(cljs.core.truth_(inst_51168)){
var statearr_51438_53979 = state_51300__$1;
(statearr_51438_53979[(1)] = (10));

} else {
var statearr_51439_53980 = state_51300__$1;
(statearr_51439_53980[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__49968__auto__ = null;
var cljs$core$async$mult_$_state_machine__49968__auto____0 = (function (){
var statearr_51446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51446[(0)] = cljs$core$async$mult_$_state_machine__49968__auto__);

(statearr_51446[(1)] = (1));

return statearr_51446;
});
var cljs$core$async$mult_$_state_machine__49968__auto____1 = (function (state_51300){
while(true){
var ret_value__49969__auto__ = (function (){try{while(true){
var result__49970__auto__ = switch__49967__auto__(state_51300);
if(cljs.core.keyword_identical_QMARK_(result__49970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49970__auto__;
}
break;
}
}catch (e51448){var ex__49971__auto__ = e51448;
var statearr_51449_53984 = state_51300;
(statearr_51449_53984[(2)] = ex__49971__auto__);


if(cljs.core.seq((state_51300[(4)]))){
var statearr_51450_53987 = state_51300;
(statearr_51450_53987[(1)] = cljs.core.first((state_51300[(4)])));

} else {
throw ex__49971__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53989 = state_51300;
state_51300 = G__53989;
continue;
} else {
return ret_value__49969__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__49968__auto__ = function(state_51300){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__49968__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__49968__auto____1.call(this,state_51300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__49968__auto____0;
cljs$core$async$mult_$_state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__49968__auto____1;
return cljs$core$async$mult_$_state_machine__49968__auto__;
})()
})();
var state__50118__auto__ = (function (){var statearr_51454 = f__50117__auto__();
(statearr_51454[(6)] = c__50116__auto___53887);

return statearr_51454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50118__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__51465 = arguments.length;
switch (G__51465) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_53993 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_53993(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_53998 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_53998(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_54001 = (function (m){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4423__auto__.call(null,m));
} else {
var m__4420__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4420__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_54001(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_54003 = (function (m,state_map){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4423__auto__.call(null,m,state_map));
} else {
var m__4420__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4420__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_54003(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_54007 = (function (m,mode){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4423__auto__.call(null,m,mode));
} else {
var m__4420__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4420__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_54007(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___54009 = arguments.length;
var i__4731__auto___54010 = (0);
while(true){
if((i__4731__auto___54010 < len__4730__auto___54009)){
args__4736__auto__.push((arguments[i__4731__auto___54010]));

var G__54011 = (i__4731__auto___54010 + (1));
i__4731__auto___54010 = G__54011;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51583){
var map__51585 = p__51583;
var map__51585__$1 = (((((!((map__51585 == null))))?(((((map__51585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51585):map__51585);
var opts = map__51585__$1;
var statearr_51593_54013 = state;
(statearr_51593_54013[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_51599_54014 = state;
(statearr_51599_54014[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_51606_54016 = state;
(statearr_51606_54016[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51562){
var G__51563 = cljs.core.first(seq51562);
var seq51562__$1 = cljs.core.next(seq51562);
var G__51564 = cljs.core.first(seq51562__$1);
var seq51562__$2 = cljs.core.next(seq51562__$1);
var G__51565 = cljs.core.first(seq51562__$2);
var seq51562__$3 = cljs.core.next(seq51562__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51563,G__51564,G__51565,seq51562__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51629 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51629 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51630){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta51630 = meta51630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51631,meta51630__$1){
var self__ = this;
var _51631__$1 = this;
return (new cljs.core.async.t_cljs$core$async51629(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta51630__$1));
}));

(cljs.core.async.t_cljs$core$async51629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51631){
var self__ = this;
var _51631__$1 = this;
return self__.meta51630;
}));

(cljs.core.async.t_cljs$core$async51629.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51629.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async51629.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51629.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51629.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51629.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51629.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51629.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51629.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta51630","meta51630",-1630027804,null)], null);
}));

(cljs.core.async.t_cljs$core$async51629.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51629.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51629");

(cljs.core.async.t_cljs$core$async51629.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async51629");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51629.
 */
cljs.core.async.__GT_t_cljs$core$async51629 = (function cljs$core$async$mix_$___GT_t_cljs$core$async51629(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51630){
return (new cljs.core.async.t_cljs$core$async51629(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51630));
});

}

return (new cljs.core.async.t_cljs$core$async51629(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50116__auto___54041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50117__auto__ = (function (){var switch__49967__auto__ = (function (state_51801){
var state_val_51802 = (state_51801[(1)]);
if((state_val_51802 === (7))){
var inst_51680 = (state_51801[(2)]);
var state_51801__$1 = state_51801;
var statearr_51809_54042 = state_51801__$1;
(statearr_51809_54042[(2)] = inst_51680);

(statearr_51809_54042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (20))){
var inst_51696 = (state_51801[(7)]);
var state_51801__$1 = state_51801;
var statearr_51814_54046 = state_51801__$1;
(statearr_51814_54046[(2)] = inst_51696);

(statearr_51814_54046[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (27))){
var state_51801__$1 = state_51801;
var statearr_51816_54049 = state_51801__$1;
(statearr_51816_54049[(2)] = null);

(statearr_51816_54049[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (1))){
var inst_51665 = (state_51801[(8)]);
var inst_51665__$1 = calc_state();
var inst_51667 = (inst_51665__$1 == null);
var inst_51668 = cljs.core.not(inst_51667);
var state_51801__$1 = (function (){var statearr_51818 = state_51801;
(statearr_51818[(8)] = inst_51665__$1);

return statearr_51818;
})();
if(inst_51668){
var statearr_51819_54052 = state_51801__$1;
(statearr_51819_54052[(1)] = (2));

} else {
var statearr_51820_54053 = state_51801__$1;
(statearr_51820_54053[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (24))){
var inst_51725 = (state_51801[(9)]);
var inst_51763 = (state_51801[(10)]);
var inst_51736 = (state_51801[(11)]);
var inst_51763__$1 = (inst_51725.cljs$core$IFn$_invoke$arity$1 ? inst_51725.cljs$core$IFn$_invoke$arity$1(inst_51736) : inst_51725.call(null,inst_51736));
var state_51801__$1 = (function (){var statearr_51824 = state_51801;
(statearr_51824[(10)] = inst_51763__$1);

return statearr_51824;
})();
if(cljs.core.truth_(inst_51763__$1)){
var statearr_51827_54057 = state_51801__$1;
(statearr_51827_54057[(1)] = (29));

} else {
var statearr_51828_54058 = state_51801__$1;
(statearr_51828_54058[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (4))){
var inst_51686 = (state_51801[(2)]);
var state_51801__$1 = state_51801;
if(cljs.core.truth_(inst_51686)){
var statearr_51833_54061 = state_51801__$1;
(statearr_51833_54061[(1)] = (8));

} else {
var statearr_51835_54064 = state_51801__$1;
(statearr_51835_54064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (15))){
var inst_51718 = (state_51801[(2)]);
var state_51801__$1 = state_51801;
if(cljs.core.truth_(inst_51718)){
var statearr_51839_54066 = state_51801__$1;
(statearr_51839_54066[(1)] = (19));

} else {
var statearr_51840_54069 = state_51801__$1;
(statearr_51840_54069[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (21))){
var inst_51724 = (state_51801[(12)]);
var inst_51724__$1 = (state_51801[(2)]);
var inst_51725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51724__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51724__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51724__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51801__$1 = (function (){var statearr_51844 = state_51801;
(statearr_51844[(9)] = inst_51725);

(statearr_51844[(13)] = inst_51726);

(statearr_51844[(12)] = inst_51724__$1);

return statearr_51844;
})();
return cljs.core.async.ioc_alts_BANG_(state_51801__$1,(22),inst_51727);
} else {
if((state_val_51802 === (31))){
var inst_51775 = (state_51801[(2)]);
var state_51801__$1 = state_51801;
if(cljs.core.truth_(inst_51775)){
var statearr_51851_54074 = state_51801__$1;
(statearr_51851_54074[(1)] = (32));

} else {
var statearr_51852_54075 = state_51801__$1;
(statearr_51852_54075[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (32))){
var inst_51735 = (state_51801[(14)]);
var state_51801__$1 = state_51801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51801__$1,(35),out,inst_51735);
} else {
if((state_val_51802 === (33))){
var inst_51724 = (state_51801[(12)]);
var inst_51696 = inst_51724;
var state_51801__$1 = (function (){var statearr_51860 = state_51801;
(statearr_51860[(7)] = inst_51696);

return statearr_51860;
})();
var statearr_51862_54082 = state_51801__$1;
(statearr_51862_54082[(2)] = null);

(statearr_51862_54082[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (13))){
var inst_51696 = (state_51801[(7)]);
var inst_51707 = inst_51696.cljs$lang$protocol_mask$partition0$;
var inst_51708 = (inst_51707 & (64));
var inst_51709 = inst_51696.cljs$core$ISeq$;
var inst_51710 = (cljs.core.PROTOCOL_SENTINEL === inst_51709);
var inst_51711 = ((inst_51708) || (inst_51710));
var state_51801__$1 = state_51801;
if(cljs.core.truth_(inst_51711)){
var statearr_51869_54090 = state_51801__$1;
(statearr_51869_54090[(1)] = (16));

} else {
var statearr_51871_54091 = state_51801__$1;
(statearr_51871_54091[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (22))){
var inst_51736 = (state_51801[(11)]);
var inst_51735 = (state_51801[(14)]);
var inst_51734 = (state_51801[(2)]);
var inst_51735__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51734,(0),null);
var inst_51736__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51734,(1),null);
var inst_51744 = (inst_51735__$1 == null);
var inst_51745 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51736__$1,change);
var inst_51746 = ((inst_51744) || (inst_51745));
var state_51801__$1 = (function (){var statearr_51872 = state_51801;
(statearr_51872[(11)] = inst_51736__$1);

(statearr_51872[(14)] = inst_51735__$1);

return statearr_51872;
})();
if(cljs.core.truth_(inst_51746)){
var statearr_51880_54098 = state_51801__$1;
(statearr_51880_54098[(1)] = (23));

} else {
var statearr_51881_54099 = state_51801__$1;
(statearr_51881_54099[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (36))){
var inst_51724 = (state_51801[(12)]);
var inst_51696 = inst_51724;
var state_51801__$1 = (function (){var statearr_51884 = state_51801;
(statearr_51884[(7)] = inst_51696);

return statearr_51884;
})();
var statearr_51886_54103 = state_51801__$1;
(statearr_51886_54103[(2)] = null);

(statearr_51886_54103[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (29))){
var inst_51763 = (state_51801[(10)]);
var state_51801__$1 = state_51801;
var statearr_51893_54108 = state_51801__$1;
(statearr_51893_54108[(2)] = inst_51763);

(statearr_51893_54108[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (6))){
var state_51801__$1 = state_51801;
var statearr_51894_54111 = state_51801__$1;
(statearr_51894_54111[(2)] = false);

(statearr_51894_54111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (28))){
var inst_51756 = (state_51801[(2)]);
var inst_51760 = calc_state();
var inst_51696 = inst_51760;
var state_51801__$1 = (function (){var statearr_51902 = state_51801;
(statearr_51902[(15)] = inst_51756);

(statearr_51902[(7)] = inst_51696);

return statearr_51902;
})();
var statearr_51905_54114 = state_51801__$1;
(statearr_51905_54114[(2)] = null);

(statearr_51905_54114[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (25))){
var inst_51793 = (state_51801[(2)]);
var state_51801__$1 = state_51801;
var statearr_51906_54119 = state_51801__$1;
(statearr_51906_54119[(2)] = inst_51793);

(statearr_51906_54119[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (34))){
var inst_51787 = (state_51801[(2)]);
var state_51801__$1 = state_51801;
var statearr_51912_54122 = state_51801__$1;
(statearr_51912_54122[(2)] = inst_51787);

(statearr_51912_54122[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (17))){
var state_51801__$1 = state_51801;
var statearr_51913_54128 = state_51801__$1;
(statearr_51913_54128[(2)] = false);

(statearr_51913_54128[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (3))){
var state_51801__$1 = state_51801;
var statearr_51920_54131 = state_51801__$1;
(statearr_51920_54131[(2)] = false);

(statearr_51920_54131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (12))){
var inst_51795 = (state_51801[(2)]);
var state_51801__$1 = state_51801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51801__$1,inst_51795);
} else {
if((state_val_51802 === (2))){
var inst_51665 = (state_51801[(8)]);
var inst_51671 = inst_51665.cljs$lang$protocol_mask$partition0$;
var inst_51672 = (inst_51671 & (64));
var inst_51674 = inst_51665.cljs$core$ISeq$;
var inst_51675 = (cljs.core.PROTOCOL_SENTINEL === inst_51674);
var inst_51676 = ((inst_51672) || (inst_51675));
var state_51801__$1 = state_51801;
if(cljs.core.truth_(inst_51676)){
var statearr_51927_54135 = state_51801__$1;
(statearr_51927_54135[(1)] = (5));

} else {
var statearr_51928_54136 = state_51801__$1;
(statearr_51928_54136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (23))){
var inst_51735 = (state_51801[(14)]);
var inst_51751 = (inst_51735 == null);
var state_51801__$1 = state_51801;
if(cljs.core.truth_(inst_51751)){
var statearr_51933_54138 = state_51801__$1;
(statearr_51933_54138[(1)] = (26));

} else {
var statearr_51937_54139 = state_51801__$1;
(statearr_51937_54139[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (35))){
var inst_51778 = (state_51801[(2)]);
var state_51801__$1 = state_51801;
if(cljs.core.truth_(inst_51778)){
var statearr_51942_54142 = state_51801__$1;
(statearr_51942_54142[(1)] = (36));

} else {
var statearr_51948_54145 = state_51801__$1;
(statearr_51948_54145[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (19))){
var inst_51696 = (state_51801[(7)]);
var inst_51721 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51696);
var state_51801__$1 = state_51801;
var statearr_51949_54147 = state_51801__$1;
(statearr_51949_54147[(2)] = inst_51721);

(statearr_51949_54147[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (11))){
var inst_51696 = (state_51801[(7)]);
var inst_51702 = (inst_51696 == null);
var inst_51703 = cljs.core.not(inst_51702);
var state_51801__$1 = state_51801;
if(inst_51703){
var statearr_51953_54148 = state_51801__$1;
(statearr_51953_54148[(1)] = (13));

} else {
var statearr_51954_54151 = state_51801__$1;
(statearr_51954_54151[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (9))){
var inst_51665 = (state_51801[(8)]);
var state_51801__$1 = state_51801;
var statearr_51961_54153 = state_51801__$1;
(statearr_51961_54153[(2)] = inst_51665);

(statearr_51961_54153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (5))){
var state_51801__$1 = state_51801;
var statearr_51962_54154 = state_51801__$1;
(statearr_51962_54154[(2)] = true);

(statearr_51962_54154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (14))){
var state_51801__$1 = state_51801;
var statearr_51969_54161 = state_51801__$1;
(statearr_51969_54161[(2)] = false);

(statearr_51969_54161[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (26))){
var inst_51736 = (state_51801[(11)]);
var inst_51753 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_51736);
var state_51801__$1 = state_51801;
var statearr_51975_54162 = state_51801__$1;
(statearr_51975_54162[(2)] = inst_51753);

(statearr_51975_54162[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (16))){
var state_51801__$1 = state_51801;
var statearr_51984_54163 = state_51801__$1;
(statearr_51984_54163[(2)] = true);

(statearr_51984_54163[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (38))){
var inst_51783 = (state_51801[(2)]);
var state_51801__$1 = state_51801;
var statearr_51991_54165 = state_51801__$1;
(statearr_51991_54165[(2)] = inst_51783);

(statearr_51991_54165[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (30))){
var inst_51725 = (state_51801[(9)]);
var inst_51736 = (state_51801[(11)]);
var inst_51726 = (state_51801[(13)]);
var inst_51767 = cljs.core.empty_QMARK_(inst_51725);
var inst_51769 = (inst_51726.cljs$core$IFn$_invoke$arity$1 ? inst_51726.cljs$core$IFn$_invoke$arity$1(inst_51736) : inst_51726.call(null,inst_51736));
var inst_51772 = cljs.core.not(inst_51769);
var inst_51773 = ((inst_51767) && (inst_51772));
var state_51801__$1 = state_51801;
var statearr_51994_54167 = state_51801__$1;
(statearr_51994_54167[(2)] = inst_51773);

(statearr_51994_54167[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (10))){
var inst_51665 = (state_51801[(8)]);
var inst_51691 = (state_51801[(2)]);
var inst_51693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51691,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51691,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51691,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51696 = inst_51665;
var state_51801__$1 = (function (){var statearr_51998 = state_51801;
(statearr_51998[(7)] = inst_51696);

(statearr_51998[(16)] = inst_51695);

(statearr_51998[(17)] = inst_51693);

(statearr_51998[(18)] = inst_51694);

return statearr_51998;
})();
var statearr_52003_54170 = state_51801__$1;
(statearr_52003_54170[(2)] = null);

(statearr_52003_54170[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (18))){
var inst_51715 = (state_51801[(2)]);
var state_51801__$1 = state_51801;
var statearr_52007_54171 = state_51801__$1;
(statearr_52007_54171[(2)] = inst_51715);

(statearr_52007_54171[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (37))){
var state_51801__$1 = state_51801;
var statearr_52008_54175 = state_51801__$1;
(statearr_52008_54175[(2)] = null);

(statearr_52008_54175[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51802 === (8))){
var inst_51665 = (state_51801[(8)]);
var inst_51688 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51665);
var state_51801__$1 = state_51801;
var statearr_52012_54178 = state_51801__$1;
(statearr_52012_54178[(2)] = inst_51688);

(statearr_52012_54178[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__49968__auto__ = null;
var cljs$core$async$mix_$_state_machine__49968__auto____0 = (function (){
var statearr_52016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52016[(0)] = cljs$core$async$mix_$_state_machine__49968__auto__);

(statearr_52016[(1)] = (1));

return statearr_52016;
});
var cljs$core$async$mix_$_state_machine__49968__auto____1 = (function (state_51801){
while(true){
var ret_value__49969__auto__ = (function (){try{while(true){
var result__49970__auto__ = switch__49967__auto__(state_51801);
if(cljs.core.keyword_identical_QMARK_(result__49970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49970__auto__;
}
break;
}
}catch (e52019){var ex__49971__auto__ = e52019;
var statearr_52021_54184 = state_51801;
(statearr_52021_54184[(2)] = ex__49971__auto__);


if(cljs.core.seq((state_51801[(4)]))){
var statearr_52022_54185 = state_51801;
(statearr_52022_54185[(1)] = cljs.core.first((state_51801[(4)])));

} else {
throw ex__49971__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54186 = state_51801;
state_51801 = G__54186;
continue;
} else {
return ret_value__49969__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__49968__auto__ = function(state_51801){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__49968__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__49968__auto____1.call(this,state_51801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__49968__auto____0;
cljs$core$async$mix_$_state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__49968__auto____1;
return cljs$core$async$mix_$_state_machine__49968__auto__;
})()
})();
var state__50118__auto__ = (function (){var statearr_52029 = f__50117__auto__();
(statearr_52029[(6)] = c__50116__auto___54041);

return statearr_52029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50118__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_54189 = (function (p,v,ch,close_QMARK_){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4423__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4420__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4420__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_54189(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_54197 = (function (p,v,ch){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4423__auto__.call(null,p,v,ch));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4420__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_54197(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_54198 = (function() {
var G__54199 = null;
var G__54199__1 = (function (p){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4423__auto__.call(null,p));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4420__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__54199__2 = (function (p,v){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4423__auto__.call(null,p,v));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4420__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__54199 = function(p,v){
switch(arguments.length){
case 1:
return G__54199__1.call(this,p);
case 2:
return G__54199__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__54199.cljs$core$IFn$_invoke$arity$1 = G__54199__1;
G__54199.cljs$core$IFn$_invoke$arity$2 = G__54199__2;
return G__54199;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__52086 = arguments.length;
switch (G__52086) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_54198(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_54198(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__52105 = arguments.length;
switch (G__52105) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4120__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__52095_SHARP_){
if(cljs.core.truth_((p1__52095_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__52095_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__52095_SHARP_.call(null,topic)))){
return p1__52095_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__52095_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52111 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52111 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta52112){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta52112 = meta52112;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52113,meta52112__$1){
var self__ = this;
var _52113__$1 = this;
return (new cljs.core.async.t_cljs$core$async52111(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta52112__$1));
}));

(cljs.core.async.t_cljs$core$async52111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52113){
var self__ = this;
var _52113__$1 = this;
return self__.meta52112;
}));

(cljs.core.async.t_cljs$core$async52111.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52111.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async52111.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52111.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async52111.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async52111.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async52111.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async52111.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta52112","meta52112",-1659163507,null)], null);
}));

(cljs.core.async.t_cljs$core$async52111.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52111.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52111");

(cljs.core.async.t_cljs$core$async52111.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async52111");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52111.
 */
cljs.core.async.__GT_t_cljs$core$async52111 = (function cljs$core$async$__GT_t_cljs$core$async52111(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52112){
return (new cljs.core.async.t_cljs$core$async52111(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52112));
});

}

return (new cljs.core.async.t_cljs$core$async52111(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50116__auto___54221 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50117__auto__ = (function (){var switch__49967__auto__ = (function (state_52207){
var state_val_52208 = (state_52207[(1)]);
if((state_val_52208 === (7))){
var inst_52203 = (state_52207[(2)]);
var state_52207__$1 = state_52207;
var statearr_52210_54223 = state_52207__$1;
(statearr_52210_54223[(2)] = inst_52203);

(statearr_52210_54223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (20))){
var state_52207__$1 = state_52207;
var statearr_52212_54226 = state_52207__$1;
(statearr_52212_54226[(2)] = null);

(statearr_52212_54226[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (1))){
var state_52207__$1 = state_52207;
var statearr_52215_54228 = state_52207__$1;
(statearr_52215_54228[(2)] = null);

(statearr_52215_54228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (24))){
var inst_52186 = (state_52207[(7)]);
var inst_52195 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_52186);
var state_52207__$1 = state_52207;
var statearr_52218_54232 = state_52207__$1;
(statearr_52218_54232[(2)] = inst_52195);

(statearr_52218_54232[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (4))){
var inst_52125 = (state_52207[(8)]);
var inst_52125__$1 = (state_52207[(2)]);
var inst_52131 = (inst_52125__$1 == null);
var state_52207__$1 = (function (){var statearr_52221 = state_52207;
(statearr_52221[(8)] = inst_52125__$1);

return statearr_52221;
})();
if(cljs.core.truth_(inst_52131)){
var statearr_52223_54239 = state_52207__$1;
(statearr_52223_54239[(1)] = (5));

} else {
var statearr_52224_54240 = state_52207__$1;
(statearr_52224_54240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (15))){
var inst_52180 = (state_52207[(2)]);
var state_52207__$1 = state_52207;
var statearr_52225_54243 = state_52207__$1;
(statearr_52225_54243[(2)] = inst_52180);

(statearr_52225_54243[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (21))){
var inst_52200 = (state_52207[(2)]);
var state_52207__$1 = (function (){var statearr_52226 = state_52207;
(statearr_52226[(9)] = inst_52200);

return statearr_52226;
})();
var statearr_52227_54244 = state_52207__$1;
(statearr_52227_54244[(2)] = null);

(statearr_52227_54244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (13))){
var inst_52160 = (state_52207[(10)]);
var inst_52162 = cljs.core.chunked_seq_QMARK_(inst_52160);
var state_52207__$1 = state_52207;
if(inst_52162){
var statearr_52229_54246 = state_52207__$1;
(statearr_52229_54246[(1)] = (16));

} else {
var statearr_52232_54248 = state_52207__$1;
(statearr_52232_54248[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (22))){
var inst_52192 = (state_52207[(2)]);
var state_52207__$1 = state_52207;
if(cljs.core.truth_(inst_52192)){
var statearr_52234_54251 = state_52207__$1;
(statearr_52234_54251[(1)] = (23));

} else {
var statearr_52235_54252 = state_52207__$1;
(statearr_52235_54252[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (6))){
var inst_52188 = (state_52207[(11)]);
var inst_52125 = (state_52207[(8)]);
var inst_52186 = (state_52207[(7)]);
var inst_52186__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_52125) : topic_fn.call(null,inst_52125));
var inst_52187 = cljs.core.deref(mults);
var inst_52188__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52187,inst_52186__$1);
var state_52207__$1 = (function (){var statearr_52238 = state_52207;
(statearr_52238[(11)] = inst_52188__$1);

(statearr_52238[(7)] = inst_52186__$1);

return statearr_52238;
})();
if(cljs.core.truth_(inst_52188__$1)){
var statearr_52241_54257 = state_52207__$1;
(statearr_52241_54257[(1)] = (19));

} else {
var statearr_52242_54258 = state_52207__$1;
(statearr_52242_54258[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (25))){
var inst_52197 = (state_52207[(2)]);
var state_52207__$1 = state_52207;
var statearr_52245_54259 = state_52207__$1;
(statearr_52245_54259[(2)] = inst_52197);

(statearr_52245_54259[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (17))){
var inst_52160 = (state_52207[(10)]);
var inst_52171 = cljs.core.first(inst_52160);
var inst_52172 = cljs.core.async.muxch_STAR_(inst_52171);
var inst_52173 = cljs.core.async.close_BANG_(inst_52172);
var inst_52174 = cljs.core.next(inst_52160);
var inst_52143 = inst_52174;
var inst_52144 = null;
var inst_52145 = (0);
var inst_52146 = (0);
var state_52207__$1 = (function (){var statearr_52248 = state_52207;
(statearr_52248[(12)] = inst_52145);

(statearr_52248[(13)] = inst_52146);

(statearr_52248[(14)] = inst_52144);

(statearr_52248[(15)] = inst_52143);

(statearr_52248[(16)] = inst_52173);

return statearr_52248;
})();
var statearr_52250_54261 = state_52207__$1;
(statearr_52250_54261[(2)] = null);

(statearr_52250_54261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (3))){
var inst_52205 = (state_52207[(2)]);
var state_52207__$1 = state_52207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52207__$1,inst_52205);
} else {
if((state_val_52208 === (12))){
var inst_52182 = (state_52207[(2)]);
var state_52207__$1 = state_52207;
var statearr_52251_54263 = state_52207__$1;
(statearr_52251_54263[(2)] = inst_52182);

(statearr_52251_54263[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (2))){
var state_52207__$1 = state_52207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52207__$1,(4),ch);
} else {
if((state_val_52208 === (23))){
var state_52207__$1 = state_52207;
var statearr_52258_54264 = state_52207__$1;
(statearr_52258_54264[(2)] = null);

(statearr_52258_54264[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (19))){
var inst_52188 = (state_52207[(11)]);
var inst_52125 = (state_52207[(8)]);
var inst_52190 = cljs.core.async.muxch_STAR_(inst_52188);
var state_52207__$1 = state_52207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52207__$1,(22),inst_52190,inst_52125);
} else {
if((state_val_52208 === (11))){
var inst_52160 = (state_52207[(10)]);
var inst_52143 = (state_52207[(15)]);
var inst_52160__$1 = cljs.core.seq(inst_52143);
var state_52207__$1 = (function (){var statearr_52262 = state_52207;
(statearr_52262[(10)] = inst_52160__$1);

return statearr_52262;
})();
if(inst_52160__$1){
var statearr_52264_54271 = state_52207__$1;
(statearr_52264_54271[(1)] = (13));

} else {
var statearr_52265_54272 = state_52207__$1;
(statearr_52265_54272[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (9))){
var inst_52184 = (state_52207[(2)]);
var state_52207__$1 = state_52207;
var statearr_52267_54273 = state_52207__$1;
(statearr_52267_54273[(2)] = inst_52184);

(statearr_52267_54273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (5))){
var inst_52140 = cljs.core.deref(mults);
var inst_52141 = cljs.core.vals(inst_52140);
var inst_52142 = cljs.core.seq(inst_52141);
var inst_52143 = inst_52142;
var inst_52144 = null;
var inst_52145 = (0);
var inst_52146 = (0);
var state_52207__$1 = (function (){var statearr_52268 = state_52207;
(statearr_52268[(12)] = inst_52145);

(statearr_52268[(13)] = inst_52146);

(statearr_52268[(14)] = inst_52144);

(statearr_52268[(15)] = inst_52143);

return statearr_52268;
})();
var statearr_52269_54275 = state_52207__$1;
(statearr_52269_54275[(2)] = null);

(statearr_52269_54275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (14))){
var state_52207__$1 = state_52207;
var statearr_52279_54276 = state_52207__$1;
(statearr_52279_54276[(2)] = null);

(statearr_52279_54276[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (16))){
var inst_52160 = (state_52207[(10)]);
var inst_52164 = cljs.core.chunk_first(inst_52160);
var inst_52166 = cljs.core.chunk_rest(inst_52160);
var inst_52167 = cljs.core.count(inst_52164);
var inst_52143 = inst_52166;
var inst_52144 = inst_52164;
var inst_52145 = inst_52167;
var inst_52146 = (0);
var state_52207__$1 = (function (){var statearr_52283 = state_52207;
(statearr_52283[(12)] = inst_52145);

(statearr_52283[(13)] = inst_52146);

(statearr_52283[(14)] = inst_52144);

(statearr_52283[(15)] = inst_52143);

return statearr_52283;
})();
var statearr_52285_54279 = state_52207__$1;
(statearr_52285_54279[(2)] = null);

(statearr_52285_54279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (10))){
var inst_52145 = (state_52207[(12)]);
var inst_52146 = (state_52207[(13)]);
var inst_52144 = (state_52207[(14)]);
var inst_52143 = (state_52207[(15)]);
var inst_52151 = cljs.core._nth(inst_52144,inst_52146);
var inst_52152 = cljs.core.async.muxch_STAR_(inst_52151);
var inst_52153 = cljs.core.async.close_BANG_(inst_52152);
var inst_52157 = (inst_52146 + (1));
var tmp52275 = inst_52145;
var tmp52276 = inst_52144;
var tmp52277 = inst_52143;
var inst_52143__$1 = tmp52277;
var inst_52144__$1 = tmp52276;
var inst_52145__$1 = tmp52275;
var inst_52146__$1 = inst_52157;
var state_52207__$1 = (function (){var statearr_52288 = state_52207;
(statearr_52288[(12)] = inst_52145__$1);

(statearr_52288[(13)] = inst_52146__$1);

(statearr_52288[(14)] = inst_52144__$1);

(statearr_52288[(17)] = inst_52153);

(statearr_52288[(15)] = inst_52143__$1);

return statearr_52288;
})();
var statearr_52289_54283 = state_52207__$1;
(statearr_52289_54283[(2)] = null);

(statearr_52289_54283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (18))){
var inst_52177 = (state_52207[(2)]);
var state_52207__$1 = state_52207;
var statearr_52291_54284 = state_52207__$1;
(statearr_52291_54284[(2)] = inst_52177);

(statearr_52291_54284[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52208 === (8))){
var inst_52145 = (state_52207[(12)]);
var inst_52146 = (state_52207[(13)]);
var inst_52148 = (inst_52146 < inst_52145);
var inst_52149 = inst_52148;
var state_52207__$1 = state_52207;
if(cljs.core.truth_(inst_52149)){
var statearr_52295_54285 = state_52207__$1;
(statearr_52295_54285[(1)] = (10));

} else {
var statearr_52296_54286 = state_52207__$1;
(statearr_52296_54286[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49968__auto__ = null;
var cljs$core$async$state_machine__49968__auto____0 = (function (){
var statearr_52299 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52299[(0)] = cljs$core$async$state_machine__49968__auto__);

(statearr_52299[(1)] = (1));

return statearr_52299;
});
var cljs$core$async$state_machine__49968__auto____1 = (function (state_52207){
while(true){
var ret_value__49969__auto__ = (function (){try{while(true){
var result__49970__auto__ = switch__49967__auto__(state_52207);
if(cljs.core.keyword_identical_QMARK_(result__49970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49970__auto__;
}
break;
}
}catch (e52300){var ex__49971__auto__ = e52300;
var statearr_52302_54295 = state_52207;
(statearr_52302_54295[(2)] = ex__49971__auto__);


if(cljs.core.seq((state_52207[(4)]))){
var statearr_52305_54296 = state_52207;
(statearr_52305_54296[(1)] = cljs.core.first((state_52207[(4)])));

} else {
throw ex__49971__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54298 = state_52207;
state_52207 = G__54298;
continue;
} else {
return ret_value__49969__auto__;
}
break;
}
});
cljs$core$async$state_machine__49968__auto__ = function(state_52207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49968__auto____1.call(this,state_52207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49968__auto____0;
cljs$core$async$state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49968__auto____1;
return cljs$core$async$state_machine__49968__auto__;
})()
})();
var state__50118__auto__ = (function (){var statearr_52309 = f__50117__auto__();
(statearr_52309[(6)] = c__50116__auto___54221);

return statearr_52309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50118__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__52316 = arguments.length;
switch (G__52316) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__52331 = arguments.length;
switch (G__52331) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__52341 = arguments.length;
switch (G__52341) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__50116__auto___54317 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50117__auto__ = (function (){var switch__49967__auto__ = (function (state_52411){
var state_val_52412 = (state_52411[(1)]);
if((state_val_52412 === (7))){
var state_52411__$1 = state_52411;
var statearr_52415_54318 = state_52411__$1;
(statearr_52415_54318[(2)] = null);

(statearr_52415_54318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (1))){
var state_52411__$1 = state_52411;
var statearr_52420_54320 = state_52411__$1;
(statearr_52420_54320[(2)] = null);

(statearr_52420_54320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (4))){
var inst_52357 = (state_52411[(7)]);
var inst_52355 = (state_52411[(8)]);
var inst_52360 = (inst_52357 < inst_52355);
var state_52411__$1 = state_52411;
if(cljs.core.truth_(inst_52360)){
var statearr_52421_54323 = state_52411__$1;
(statearr_52421_54323[(1)] = (6));

} else {
var statearr_52423_54324 = state_52411__$1;
(statearr_52423_54324[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (15))){
var inst_52391 = (state_52411[(9)]);
var inst_52396 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_52391);
var state_52411__$1 = state_52411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52411__$1,(17),out,inst_52396);
} else {
if((state_val_52412 === (13))){
var inst_52391 = (state_52411[(9)]);
var inst_52391__$1 = (state_52411[(2)]);
var inst_52392 = cljs.core.some(cljs.core.nil_QMARK_,inst_52391__$1);
var state_52411__$1 = (function (){var statearr_52426 = state_52411;
(statearr_52426[(9)] = inst_52391__$1);

return statearr_52426;
})();
if(cljs.core.truth_(inst_52392)){
var statearr_52429_54332 = state_52411__$1;
(statearr_52429_54332[(1)] = (14));

} else {
var statearr_52430_54333 = state_52411__$1;
(statearr_52430_54333[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (6))){
var state_52411__$1 = state_52411;
var statearr_52432_54334 = state_52411__$1;
(statearr_52432_54334[(2)] = null);

(statearr_52432_54334[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (17))){
var inst_52398 = (state_52411[(2)]);
var state_52411__$1 = (function (){var statearr_52437 = state_52411;
(statearr_52437[(10)] = inst_52398);

return statearr_52437;
})();
var statearr_52442_54338 = state_52411__$1;
(statearr_52442_54338[(2)] = null);

(statearr_52442_54338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (3))){
var inst_52403 = (state_52411[(2)]);
var state_52411__$1 = state_52411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52411__$1,inst_52403);
} else {
if((state_val_52412 === (12))){
var _ = (function (){var statearr_52447 = state_52411;
(statearr_52447[(4)] = cljs.core.rest((state_52411[(4)])));

return statearr_52447;
})();
var state_52411__$1 = state_52411;
var ex52436 = (state_52411__$1[(2)]);
var statearr_52451_54347 = state_52411__$1;
(statearr_52451_54347[(5)] = ex52436);


if((ex52436 instanceof Object)){
var statearr_52452_54348 = state_52411__$1;
(statearr_52452_54348[(1)] = (11));

(statearr_52452_54348[(5)] = null);

} else {
throw ex52436;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (2))){
var inst_52354 = cljs.core.reset_BANG_(dctr,cnt);
var inst_52355 = cnt;
var inst_52357 = (0);
var state_52411__$1 = (function (){var statearr_52460 = state_52411;
(statearr_52460[(7)] = inst_52357);

(statearr_52460[(11)] = inst_52354);

(statearr_52460[(8)] = inst_52355);

return statearr_52460;
})();
var statearr_52462_54352 = state_52411__$1;
(statearr_52462_54352[(2)] = null);

(statearr_52462_54352[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (11))){
var inst_52367 = (state_52411[(2)]);
var inst_52368 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_52411__$1 = (function (){var statearr_52467 = state_52411;
(statearr_52467[(12)] = inst_52367);

return statearr_52467;
})();
var statearr_52468_54354 = state_52411__$1;
(statearr_52468_54354[(2)] = inst_52368);

(statearr_52468_54354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (9))){
var inst_52357 = (state_52411[(7)]);
var _ = (function (){var statearr_52473 = state_52411;
(statearr_52473[(4)] = cljs.core.cons((12),(state_52411[(4)])));

return statearr_52473;
})();
var inst_52374 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_52357) : chs__$1.call(null,inst_52357));
var inst_52376 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_52357) : done.call(null,inst_52357));
var inst_52377 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_52374,inst_52376);
var ___$1 = (function (){var statearr_52474 = state_52411;
(statearr_52474[(4)] = cljs.core.rest((state_52411[(4)])));

return statearr_52474;
})();
var state_52411__$1 = state_52411;
var statearr_52476_54358 = state_52411__$1;
(statearr_52476_54358[(2)] = inst_52377);

(statearr_52476_54358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (5))){
var inst_52389 = (state_52411[(2)]);
var state_52411__$1 = (function (){var statearr_52477 = state_52411;
(statearr_52477[(13)] = inst_52389);

return statearr_52477;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52411__$1,(13),dchan);
} else {
if((state_val_52412 === (14))){
var inst_52394 = cljs.core.async.close_BANG_(out);
var state_52411__$1 = state_52411;
var statearr_52478_54359 = state_52411__$1;
(statearr_52478_54359[(2)] = inst_52394);

(statearr_52478_54359[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (16))){
var inst_52401 = (state_52411[(2)]);
var state_52411__$1 = state_52411;
var statearr_52484_54361 = state_52411__$1;
(statearr_52484_54361[(2)] = inst_52401);

(statearr_52484_54361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (10))){
var inst_52357 = (state_52411[(7)]);
var inst_52381 = (state_52411[(2)]);
var inst_52382 = (inst_52357 + (1));
var inst_52357__$1 = inst_52382;
var state_52411__$1 = (function (){var statearr_52487 = state_52411;
(statearr_52487[(14)] = inst_52381);

(statearr_52487[(7)] = inst_52357__$1);

return statearr_52487;
})();
var statearr_52489_54366 = state_52411__$1;
(statearr_52489_54366[(2)] = null);

(statearr_52489_54366[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (8))){
var inst_52386 = (state_52411[(2)]);
var state_52411__$1 = state_52411;
var statearr_52490_54369 = state_52411__$1;
(statearr_52490_54369[(2)] = inst_52386);

(statearr_52490_54369[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49968__auto__ = null;
var cljs$core$async$state_machine__49968__auto____0 = (function (){
var statearr_52494 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52494[(0)] = cljs$core$async$state_machine__49968__auto__);

(statearr_52494[(1)] = (1));

return statearr_52494;
});
var cljs$core$async$state_machine__49968__auto____1 = (function (state_52411){
while(true){
var ret_value__49969__auto__ = (function (){try{while(true){
var result__49970__auto__ = switch__49967__auto__(state_52411);
if(cljs.core.keyword_identical_QMARK_(result__49970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49970__auto__;
}
break;
}
}catch (e52496){var ex__49971__auto__ = e52496;
var statearr_52497_54377 = state_52411;
(statearr_52497_54377[(2)] = ex__49971__auto__);


if(cljs.core.seq((state_52411[(4)]))){
var statearr_52498_54379 = state_52411;
(statearr_52498_54379[(1)] = cljs.core.first((state_52411[(4)])));

} else {
throw ex__49971__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54381 = state_52411;
state_52411 = G__54381;
continue;
} else {
return ret_value__49969__auto__;
}
break;
}
});
cljs$core$async$state_machine__49968__auto__ = function(state_52411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49968__auto____1.call(this,state_52411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49968__auto____0;
cljs$core$async$state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49968__auto____1;
return cljs$core$async$state_machine__49968__auto__;
})()
})();
var state__50118__auto__ = (function (){var statearr_52501 = f__50117__auto__();
(statearr_52501[(6)] = c__50116__auto___54317);

return statearr_52501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50118__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__52510 = arguments.length;
switch (G__52510) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50116__auto___54390 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50117__auto__ = (function (){var switch__49967__auto__ = (function (state_52563){
var state_val_52564 = (state_52563[(1)]);
if((state_val_52564 === (7))){
var inst_52536 = (state_52563[(7)]);
var inst_52537 = (state_52563[(8)]);
var inst_52536__$1 = (state_52563[(2)]);
var inst_52537__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52536__$1,(0),null);
var inst_52538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52536__$1,(1),null);
var inst_52539 = (inst_52537__$1 == null);
var state_52563__$1 = (function (){var statearr_52570 = state_52563;
(statearr_52570[(7)] = inst_52536__$1);

(statearr_52570[(8)] = inst_52537__$1);

(statearr_52570[(9)] = inst_52538);

return statearr_52570;
})();
if(cljs.core.truth_(inst_52539)){
var statearr_52574_54391 = state_52563__$1;
(statearr_52574_54391[(1)] = (8));

} else {
var statearr_52575_54392 = state_52563__$1;
(statearr_52575_54392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52564 === (1))){
var inst_52522 = cljs.core.vec(chs);
var inst_52523 = inst_52522;
var state_52563__$1 = (function (){var statearr_52579 = state_52563;
(statearr_52579[(10)] = inst_52523);

return statearr_52579;
})();
var statearr_52582_54394 = state_52563__$1;
(statearr_52582_54394[(2)] = null);

(statearr_52582_54394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52564 === (4))){
var inst_52523 = (state_52563[(10)]);
var state_52563__$1 = state_52563;
return cljs.core.async.ioc_alts_BANG_(state_52563__$1,(7),inst_52523);
} else {
if((state_val_52564 === (6))){
var inst_52557 = (state_52563[(2)]);
var state_52563__$1 = state_52563;
var statearr_52591_54395 = state_52563__$1;
(statearr_52591_54395[(2)] = inst_52557);

(statearr_52591_54395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52564 === (3))){
var inst_52559 = (state_52563[(2)]);
var state_52563__$1 = state_52563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52563__$1,inst_52559);
} else {
if((state_val_52564 === (2))){
var inst_52523 = (state_52563[(10)]);
var inst_52527 = cljs.core.count(inst_52523);
var inst_52528 = (inst_52527 > (0));
var state_52563__$1 = state_52563;
if(cljs.core.truth_(inst_52528)){
var statearr_52593_54396 = state_52563__$1;
(statearr_52593_54396[(1)] = (4));

} else {
var statearr_52594_54397 = state_52563__$1;
(statearr_52594_54397[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52564 === (11))){
var inst_52523 = (state_52563[(10)]);
var inst_52549 = (state_52563[(2)]);
var tmp52592 = inst_52523;
var inst_52523__$1 = tmp52592;
var state_52563__$1 = (function (){var statearr_52595 = state_52563;
(statearr_52595[(10)] = inst_52523__$1);

(statearr_52595[(11)] = inst_52549);

return statearr_52595;
})();
var statearr_52596_54399 = state_52563__$1;
(statearr_52596_54399[(2)] = null);

(statearr_52596_54399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52564 === (9))){
var inst_52537 = (state_52563[(8)]);
var state_52563__$1 = state_52563;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52563__$1,(11),out,inst_52537);
} else {
if((state_val_52564 === (5))){
var inst_52555 = cljs.core.async.close_BANG_(out);
var state_52563__$1 = state_52563;
var statearr_52607_54400 = state_52563__$1;
(statearr_52607_54400[(2)] = inst_52555);

(statearr_52607_54400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52564 === (10))){
var inst_52553 = (state_52563[(2)]);
var state_52563__$1 = state_52563;
var statearr_52613_54402 = state_52563__$1;
(statearr_52613_54402[(2)] = inst_52553);

(statearr_52613_54402[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52564 === (8))){
var inst_52523 = (state_52563[(10)]);
var inst_52536 = (state_52563[(7)]);
var inst_52537 = (state_52563[(8)]);
var inst_52538 = (state_52563[(9)]);
var inst_52543 = (function (){var cs = inst_52523;
var vec__52532 = inst_52536;
var v = inst_52537;
var c = inst_52538;
return (function (p1__52504_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__52504_SHARP_);
});
})();
var inst_52544 = cljs.core.filterv(inst_52543,inst_52523);
var inst_52523__$1 = inst_52544;
var state_52563__$1 = (function (){var statearr_52627 = state_52563;
(statearr_52627[(10)] = inst_52523__$1);

return statearr_52627;
})();
var statearr_52628_54405 = state_52563__$1;
(statearr_52628_54405[(2)] = null);

(statearr_52628_54405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49968__auto__ = null;
var cljs$core$async$state_machine__49968__auto____0 = (function (){
var statearr_52640 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52640[(0)] = cljs$core$async$state_machine__49968__auto__);

(statearr_52640[(1)] = (1));

return statearr_52640;
});
var cljs$core$async$state_machine__49968__auto____1 = (function (state_52563){
while(true){
var ret_value__49969__auto__ = (function (){try{while(true){
var result__49970__auto__ = switch__49967__auto__(state_52563);
if(cljs.core.keyword_identical_QMARK_(result__49970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49970__auto__;
}
break;
}
}catch (e52650){var ex__49971__auto__ = e52650;
var statearr_52652_54407 = state_52563;
(statearr_52652_54407[(2)] = ex__49971__auto__);


if(cljs.core.seq((state_52563[(4)]))){
var statearr_52653_54408 = state_52563;
(statearr_52653_54408[(1)] = cljs.core.first((state_52563[(4)])));

} else {
throw ex__49971__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54410 = state_52563;
state_52563 = G__54410;
continue;
} else {
return ret_value__49969__auto__;
}
break;
}
});
cljs$core$async$state_machine__49968__auto__ = function(state_52563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49968__auto____1.call(this,state_52563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49968__auto____0;
cljs$core$async$state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49968__auto____1;
return cljs$core$async$state_machine__49968__auto__;
})()
})();
var state__50118__auto__ = (function (){var statearr_52662 = f__50117__auto__();
(statearr_52662[(6)] = c__50116__auto___54390);

return statearr_52662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50118__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__52677 = arguments.length;
switch (G__52677) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50116__auto___54417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50117__auto__ = (function (){var switch__49967__auto__ = (function (state_52712){
var state_val_52713 = (state_52712[(1)]);
if((state_val_52713 === (7))){
var inst_52693 = (state_52712[(7)]);
var inst_52693__$1 = (state_52712[(2)]);
var inst_52695 = (inst_52693__$1 == null);
var inst_52696 = cljs.core.not(inst_52695);
var state_52712__$1 = (function (){var statearr_52719 = state_52712;
(statearr_52719[(7)] = inst_52693__$1);

return statearr_52719;
})();
if(inst_52696){
var statearr_52720_54419 = state_52712__$1;
(statearr_52720_54419[(1)] = (8));

} else {
var statearr_52723_54420 = state_52712__$1;
(statearr_52723_54420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52713 === (1))){
var inst_52687 = (0);
var state_52712__$1 = (function (){var statearr_52726 = state_52712;
(statearr_52726[(8)] = inst_52687);

return statearr_52726;
})();
var statearr_52728_54421 = state_52712__$1;
(statearr_52728_54421[(2)] = null);

(statearr_52728_54421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52713 === (4))){
var state_52712__$1 = state_52712;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52712__$1,(7),ch);
} else {
if((state_val_52713 === (6))){
var inst_52707 = (state_52712[(2)]);
var state_52712__$1 = state_52712;
var statearr_52732_54423 = state_52712__$1;
(statearr_52732_54423[(2)] = inst_52707);

(statearr_52732_54423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52713 === (3))){
var inst_52709 = (state_52712[(2)]);
var inst_52710 = cljs.core.async.close_BANG_(out);
var state_52712__$1 = (function (){var statearr_52735 = state_52712;
(statearr_52735[(9)] = inst_52709);

return statearr_52735;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52712__$1,inst_52710);
} else {
if((state_val_52713 === (2))){
var inst_52687 = (state_52712[(8)]);
var inst_52690 = (inst_52687 < n);
var state_52712__$1 = state_52712;
if(cljs.core.truth_(inst_52690)){
var statearr_52740_54425 = state_52712__$1;
(statearr_52740_54425[(1)] = (4));

} else {
var statearr_52743_54426 = state_52712__$1;
(statearr_52743_54426[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52713 === (11))){
var inst_52687 = (state_52712[(8)]);
var inst_52699 = (state_52712[(2)]);
var inst_52700 = (inst_52687 + (1));
var inst_52687__$1 = inst_52700;
var state_52712__$1 = (function (){var statearr_52744 = state_52712;
(statearr_52744[(8)] = inst_52687__$1);

(statearr_52744[(10)] = inst_52699);

return statearr_52744;
})();
var statearr_52746_54430 = state_52712__$1;
(statearr_52746_54430[(2)] = null);

(statearr_52746_54430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52713 === (9))){
var state_52712__$1 = state_52712;
var statearr_52749_54431 = state_52712__$1;
(statearr_52749_54431[(2)] = null);

(statearr_52749_54431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52713 === (5))){
var state_52712__$1 = state_52712;
var statearr_52752_54432 = state_52712__$1;
(statearr_52752_54432[(2)] = null);

(statearr_52752_54432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52713 === (10))){
var inst_52704 = (state_52712[(2)]);
var state_52712__$1 = state_52712;
var statearr_52754_54433 = state_52712__$1;
(statearr_52754_54433[(2)] = inst_52704);

(statearr_52754_54433[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52713 === (8))){
var inst_52693 = (state_52712[(7)]);
var state_52712__$1 = state_52712;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52712__$1,(11),out,inst_52693);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49968__auto__ = null;
var cljs$core$async$state_machine__49968__auto____0 = (function (){
var statearr_52759 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52759[(0)] = cljs$core$async$state_machine__49968__auto__);

(statearr_52759[(1)] = (1));

return statearr_52759;
});
var cljs$core$async$state_machine__49968__auto____1 = (function (state_52712){
while(true){
var ret_value__49969__auto__ = (function (){try{while(true){
var result__49970__auto__ = switch__49967__auto__(state_52712);
if(cljs.core.keyword_identical_QMARK_(result__49970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49970__auto__;
}
break;
}
}catch (e52762){var ex__49971__auto__ = e52762;
var statearr_52764_54438 = state_52712;
(statearr_52764_54438[(2)] = ex__49971__auto__);


if(cljs.core.seq((state_52712[(4)]))){
var statearr_52768_54439 = state_52712;
(statearr_52768_54439[(1)] = cljs.core.first((state_52712[(4)])));

} else {
throw ex__49971__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54441 = state_52712;
state_52712 = G__54441;
continue;
} else {
return ret_value__49969__auto__;
}
break;
}
});
cljs$core$async$state_machine__49968__auto__ = function(state_52712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49968__auto____1.call(this,state_52712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49968__auto____0;
cljs$core$async$state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49968__auto____1;
return cljs$core$async$state_machine__49968__auto__;
})()
})();
var state__50118__auto__ = (function (){var statearr_52771 = f__50117__auto__();
(statearr_52771[(6)] = c__50116__auto___54417);

return statearr_52771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50118__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52783 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52783 = (function (f,ch,meta52784){
this.f = f;
this.ch = ch;
this.meta52784 = meta52784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52785,meta52784__$1){
var self__ = this;
var _52785__$1 = this;
return (new cljs.core.async.t_cljs$core$async52783(self__.f,self__.ch,meta52784__$1));
}));

(cljs.core.async.t_cljs$core$async52783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52785){
var self__ = this;
var _52785__$1 = this;
return self__.meta52784;
}));

(cljs.core.async.t_cljs$core$async52783.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52783.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52783.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52783.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52783.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52800 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52800 = (function (f,ch,meta52784,_,fn1,meta52801){
this.f = f;
this.ch = ch;
this.meta52784 = meta52784;
this._ = _;
this.fn1 = fn1;
this.meta52801 = meta52801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52802,meta52801__$1){
var self__ = this;
var _52802__$1 = this;
return (new cljs.core.async.t_cljs$core$async52800(self__.f,self__.ch,self__.meta52784,self__._,self__.fn1,meta52801__$1));
}));

(cljs.core.async.t_cljs$core$async52800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52802){
var self__ = this;
var _52802__$1 = this;
return self__.meta52801;
}));

(cljs.core.async.t_cljs$core$async52800.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52800.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async52800.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async52800.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__52779_SHARP_){
var G__52820 = (((p1__52779_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__52779_SHARP_) : self__.f.call(null,p1__52779_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__52820) : f1.call(null,G__52820));
});
}));

(cljs.core.async.t_cljs$core$async52800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52784","meta52784",252714252,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async52783","cljs.core.async/t_cljs$core$async52783",-23613083,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta52801","meta52801",-925699558,null)], null);
}));

(cljs.core.async.t_cljs$core$async52800.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52800");

(cljs.core.async.t_cljs$core$async52800.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async52800");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52800.
 */
cljs.core.async.__GT_t_cljs$core$async52800 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52800(f__$1,ch__$1,meta52784__$1,___$2,fn1__$1,meta52801){
return (new cljs.core.async.t_cljs$core$async52800(f__$1,ch__$1,meta52784__$1,___$2,fn1__$1,meta52801));
});

}

return (new cljs.core.async.t_cljs$core$async52800(self__.f,self__.ch,self__.meta52784,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4109__auto__ = ret;
if(cljs.core.truth_(and__4109__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4109__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__52833 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__52833) : self__.f.call(null,G__52833));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async52783.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52783.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async52783.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52784","meta52784",252714252,null)], null);
}));

(cljs.core.async.t_cljs$core$async52783.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52783.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52783");

(cljs.core.async.t_cljs$core$async52783.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async52783");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52783.
 */
cljs.core.async.__GT_t_cljs$core$async52783 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52783(f__$1,ch__$1,meta52784){
return (new cljs.core.async.t_cljs$core$async52783(f__$1,ch__$1,meta52784));
});

}

return (new cljs.core.async.t_cljs$core$async52783(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52849 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52849 = (function (f,ch,meta52850){
this.f = f;
this.ch = ch;
this.meta52850 = meta52850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52851,meta52850__$1){
var self__ = this;
var _52851__$1 = this;
return (new cljs.core.async.t_cljs$core$async52849(self__.f,self__.ch,meta52850__$1));
}));

(cljs.core.async.t_cljs$core$async52849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52851){
var self__ = this;
var _52851__$1 = this;
return self__.meta52850;
}));

(cljs.core.async.t_cljs$core$async52849.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52849.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52849.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52849.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async52849.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52849.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async52849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52850","meta52850",1376243394,null)], null);
}));

(cljs.core.async.t_cljs$core$async52849.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52849");

(cljs.core.async.t_cljs$core$async52849.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async52849");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52849.
 */
cljs.core.async.__GT_t_cljs$core$async52849 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async52849(f__$1,ch__$1,meta52850){
return (new cljs.core.async.t_cljs$core$async52849(f__$1,ch__$1,meta52850));
});

}

return (new cljs.core.async.t_cljs$core$async52849(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52879 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52879 = (function (p,ch,meta52880){
this.p = p;
this.ch = ch;
this.meta52880 = meta52880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52881,meta52880__$1){
var self__ = this;
var _52881__$1 = this;
return (new cljs.core.async.t_cljs$core$async52879(self__.p,self__.ch,meta52880__$1));
}));

(cljs.core.async.t_cljs$core$async52879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52881){
var self__ = this;
var _52881__$1 = this;
return self__.meta52880;
}));

(cljs.core.async.t_cljs$core$async52879.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52879.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52879.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52879.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52879.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async52879.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52879.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async52879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52880","meta52880",371606864,null)], null);
}));

(cljs.core.async.t_cljs$core$async52879.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52879.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52879");

(cljs.core.async.t_cljs$core$async52879.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async52879");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52879.
 */
cljs.core.async.__GT_t_cljs$core$async52879 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async52879(p__$1,ch__$1,meta52880){
return (new cljs.core.async.t_cljs$core$async52879(p__$1,ch__$1,meta52880));
});

}

return (new cljs.core.async.t_cljs$core$async52879(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__52916 = arguments.length;
switch (G__52916) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50116__auto___54480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50117__auto__ = (function (){var switch__49967__auto__ = (function (state_52945){
var state_val_52946 = (state_52945[(1)]);
if((state_val_52946 === (7))){
var inst_52941 = (state_52945[(2)]);
var state_52945__$1 = state_52945;
var statearr_52952_54481 = state_52945__$1;
(statearr_52952_54481[(2)] = inst_52941);

(statearr_52952_54481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52946 === (1))){
var state_52945__$1 = state_52945;
var statearr_52953_54483 = state_52945__$1;
(statearr_52953_54483[(2)] = null);

(statearr_52953_54483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52946 === (4))){
var inst_52925 = (state_52945[(7)]);
var inst_52925__$1 = (state_52945[(2)]);
var inst_52926 = (inst_52925__$1 == null);
var state_52945__$1 = (function (){var statearr_52956 = state_52945;
(statearr_52956[(7)] = inst_52925__$1);

return statearr_52956;
})();
if(cljs.core.truth_(inst_52926)){
var statearr_52957_54485 = state_52945__$1;
(statearr_52957_54485[(1)] = (5));

} else {
var statearr_52958_54486 = state_52945__$1;
(statearr_52958_54486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52946 === (6))){
var inst_52925 = (state_52945[(7)]);
var inst_52930 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_52925) : p.call(null,inst_52925));
var state_52945__$1 = state_52945;
if(cljs.core.truth_(inst_52930)){
var statearr_52960_54488 = state_52945__$1;
(statearr_52960_54488[(1)] = (8));

} else {
var statearr_52961_54490 = state_52945__$1;
(statearr_52961_54490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52946 === (3))){
var inst_52943 = (state_52945[(2)]);
var state_52945__$1 = state_52945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52945__$1,inst_52943);
} else {
if((state_val_52946 === (2))){
var state_52945__$1 = state_52945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52945__$1,(4),ch);
} else {
if((state_val_52946 === (11))){
var inst_52934 = (state_52945[(2)]);
var state_52945__$1 = state_52945;
var statearr_52964_54493 = state_52945__$1;
(statearr_52964_54493[(2)] = inst_52934);

(statearr_52964_54493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52946 === (9))){
var state_52945__$1 = state_52945;
var statearr_52967_54495 = state_52945__$1;
(statearr_52967_54495[(2)] = null);

(statearr_52967_54495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52946 === (5))){
var inst_52928 = cljs.core.async.close_BANG_(out);
var state_52945__$1 = state_52945;
var statearr_52968_54498 = state_52945__$1;
(statearr_52968_54498[(2)] = inst_52928);

(statearr_52968_54498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52946 === (10))){
var inst_52937 = (state_52945[(2)]);
var state_52945__$1 = (function (){var statearr_52969 = state_52945;
(statearr_52969[(8)] = inst_52937);

return statearr_52969;
})();
var statearr_52970_54500 = state_52945__$1;
(statearr_52970_54500[(2)] = null);

(statearr_52970_54500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52946 === (8))){
var inst_52925 = (state_52945[(7)]);
var state_52945__$1 = state_52945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52945__$1,(11),out,inst_52925);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49968__auto__ = null;
var cljs$core$async$state_machine__49968__auto____0 = (function (){
var statearr_52974 = [null,null,null,null,null,null,null,null,null];
(statearr_52974[(0)] = cljs$core$async$state_machine__49968__auto__);

(statearr_52974[(1)] = (1));

return statearr_52974;
});
var cljs$core$async$state_machine__49968__auto____1 = (function (state_52945){
while(true){
var ret_value__49969__auto__ = (function (){try{while(true){
var result__49970__auto__ = switch__49967__auto__(state_52945);
if(cljs.core.keyword_identical_QMARK_(result__49970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49970__auto__;
}
break;
}
}catch (e52977){var ex__49971__auto__ = e52977;
var statearr_52978_54504 = state_52945;
(statearr_52978_54504[(2)] = ex__49971__auto__);


if(cljs.core.seq((state_52945[(4)]))){
var statearr_52979_54505 = state_52945;
(statearr_52979_54505[(1)] = cljs.core.first((state_52945[(4)])));

} else {
throw ex__49971__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54508 = state_52945;
state_52945 = G__54508;
continue;
} else {
return ret_value__49969__auto__;
}
break;
}
});
cljs$core$async$state_machine__49968__auto__ = function(state_52945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49968__auto____1.call(this,state_52945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49968__auto____0;
cljs$core$async$state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49968__auto____1;
return cljs$core$async$state_machine__49968__auto__;
})()
})();
var state__50118__auto__ = (function (){var statearr_52982 = f__50117__auto__();
(statearr_52982[(6)] = c__50116__auto___54480);

return statearr_52982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50118__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__52991 = arguments.length;
switch (G__52991) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__50116__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50117__auto__ = (function (){var switch__49967__auto__ = (function (state_53078){
var state_val_53079 = (state_53078[(1)]);
if((state_val_53079 === (7))){
var inst_53070 = (state_53078[(2)]);
var state_53078__$1 = state_53078;
var statearr_53090_54517 = state_53078__$1;
(statearr_53090_54517[(2)] = inst_53070);

(statearr_53090_54517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (20))){
var inst_53035 = (state_53078[(7)]);
var inst_53051 = (state_53078[(2)]);
var inst_53052 = cljs.core.next(inst_53035);
var inst_53017 = inst_53052;
var inst_53018 = null;
var inst_53019 = (0);
var inst_53020 = (0);
var state_53078__$1 = (function (){var statearr_53092 = state_53078;
(statearr_53092[(8)] = inst_53019);

(statearr_53092[(9)] = inst_53017);

(statearr_53092[(10)] = inst_53020);

(statearr_53092[(11)] = inst_53051);

(statearr_53092[(12)] = inst_53018);

return statearr_53092;
})();
var statearr_53095_54520 = state_53078__$1;
(statearr_53095_54520[(2)] = null);

(statearr_53095_54520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (1))){
var state_53078__$1 = state_53078;
var statearr_53098_54522 = state_53078__$1;
(statearr_53098_54522[(2)] = null);

(statearr_53098_54522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (4))){
var inst_53005 = (state_53078[(13)]);
var inst_53005__$1 = (state_53078[(2)]);
var inst_53006 = (inst_53005__$1 == null);
var state_53078__$1 = (function (){var statearr_53100 = state_53078;
(statearr_53100[(13)] = inst_53005__$1);

return statearr_53100;
})();
if(cljs.core.truth_(inst_53006)){
var statearr_53102_54525 = state_53078__$1;
(statearr_53102_54525[(1)] = (5));

} else {
var statearr_53104_54526 = state_53078__$1;
(statearr_53104_54526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (15))){
var state_53078__$1 = state_53078;
var statearr_53110_54527 = state_53078__$1;
(statearr_53110_54527[(2)] = null);

(statearr_53110_54527[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (21))){
var state_53078__$1 = state_53078;
var statearr_53113_54530 = state_53078__$1;
(statearr_53113_54530[(2)] = null);

(statearr_53113_54530[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (13))){
var inst_53019 = (state_53078[(8)]);
var inst_53017 = (state_53078[(9)]);
var inst_53020 = (state_53078[(10)]);
var inst_53018 = (state_53078[(12)]);
var inst_53030 = (state_53078[(2)]);
var inst_53032 = (inst_53020 + (1));
var tmp53106 = inst_53019;
var tmp53107 = inst_53017;
var tmp53108 = inst_53018;
var inst_53017__$1 = tmp53107;
var inst_53018__$1 = tmp53108;
var inst_53019__$1 = tmp53106;
var inst_53020__$1 = inst_53032;
var state_53078__$1 = (function (){var statearr_53116 = state_53078;
(statearr_53116[(8)] = inst_53019__$1);

(statearr_53116[(9)] = inst_53017__$1);

(statearr_53116[(14)] = inst_53030);

(statearr_53116[(10)] = inst_53020__$1);

(statearr_53116[(12)] = inst_53018__$1);

return statearr_53116;
})();
var statearr_53119_54533 = state_53078__$1;
(statearr_53119_54533[(2)] = null);

(statearr_53119_54533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (22))){
var state_53078__$1 = state_53078;
var statearr_53125_54535 = state_53078__$1;
(statearr_53125_54535[(2)] = null);

(statearr_53125_54535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (6))){
var inst_53005 = (state_53078[(13)]);
var inst_53015 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_53005) : f.call(null,inst_53005));
var inst_53016 = cljs.core.seq(inst_53015);
var inst_53017 = inst_53016;
var inst_53018 = null;
var inst_53019 = (0);
var inst_53020 = (0);
var state_53078__$1 = (function (){var statearr_53128 = state_53078;
(statearr_53128[(8)] = inst_53019);

(statearr_53128[(9)] = inst_53017);

(statearr_53128[(10)] = inst_53020);

(statearr_53128[(12)] = inst_53018);

return statearr_53128;
})();
var statearr_53129_54543 = state_53078__$1;
(statearr_53129_54543[(2)] = null);

(statearr_53129_54543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (17))){
var inst_53035 = (state_53078[(7)]);
var inst_53041 = cljs.core.chunk_first(inst_53035);
var inst_53043 = cljs.core.chunk_rest(inst_53035);
var inst_53044 = cljs.core.count(inst_53041);
var inst_53017 = inst_53043;
var inst_53018 = inst_53041;
var inst_53019 = inst_53044;
var inst_53020 = (0);
var state_53078__$1 = (function (){var statearr_53130 = state_53078;
(statearr_53130[(8)] = inst_53019);

(statearr_53130[(9)] = inst_53017);

(statearr_53130[(10)] = inst_53020);

(statearr_53130[(12)] = inst_53018);

return statearr_53130;
})();
var statearr_53131_54546 = state_53078__$1;
(statearr_53131_54546[(2)] = null);

(statearr_53131_54546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (3))){
var inst_53073 = (state_53078[(2)]);
var state_53078__$1 = state_53078;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53078__$1,inst_53073);
} else {
if((state_val_53079 === (12))){
var inst_53060 = (state_53078[(2)]);
var state_53078__$1 = state_53078;
var statearr_53132_54551 = state_53078__$1;
(statearr_53132_54551[(2)] = inst_53060);

(statearr_53132_54551[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (2))){
var state_53078__$1 = state_53078;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53078__$1,(4),in$);
} else {
if((state_val_53079 === (23))){
var inst_53068 = (state_53078[(2)]);
var state_53078__$1 = state_53078;
var statearr_53136_54556 = state_53078__$1;
(statearr_53136_54556[(2)] = inst_53068);

(statearr_53136_54556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (19))){
var inst_53055 = (state_53078[(2)]);
var state_53078__$1 = state_53078;
var statearr_53137_54557 = state_53078__$1;
(statearr_53137_54557[(2)] = inst_53055);

(statearr_53137_54557[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (11))){
var inst_53017 = (state_53078[(9)]);
var inst_53035 = (state_53078[(7)]);
var inst_53035__$1 = cljs.core.seq(inst_53017);
var state_53078__$1 = (function (){var statearr_53138 = state_53078;
(statearr_53138[(7)] = inst_53035__$1);

return statearr_53138;
})();
if(inst_53035__$1){
var statearr_53139_54558 = state_53078__$1;
(statearr_53139_54558[(1)] = (14));

} else {
var statearr_53141_54559 = state_53078__$1;
(statearr_53141_54559[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (9))){
var inst_53062 = (state_53078[(2)]);
var inst_53063 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_53078__$1 = (function (){var statearr_53145 = state_53078;
(statearr_53145[(15)] = inst_53062);

return statearr_53145;
})();
if(cljs.core.truth_(inst_53063)){
var statearr_53146_54561 = state_53078__$1;
(statearr_53146_54561[(1)] = (21));

} else {
var statearr_53147_54562 = state_53078__$1;
(statearr_53147_54562[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (5))){
var inst_53008 = cljs.core.async.close_BANG_(out);
var state_53078__$1 = state_53078;
var statearr_53148_54565 = state_53078__$1;
(statearr_53148_54565[(2)] = inst_53008);

(statearr_53148_54565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (14))){
var inst_53035 = (state_53078[(7)]);
var inst_53038 = cljs.core.chunked_seq_QMARK_(inst_53035);
var state_53078__$1 = state_53078;
if(inst_53038){
var statearr_53153_54567 = state_53078__$1;
(statearr_53153_54567[(1)] = (17));

} else {
var statearr_53155_54568 = state_53078__$1;
(statearr_53155_54568[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (16))){
var inst_53058 = (state_53078[(2)]);
var state_53078__$1 = state_53078;
var statearr_53156_54570 = state_53078__$1;
(statearr_53156_54570[(2)] = inst_53058);

(statearr_53156_54570[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53079 === (10))){
var inst_53020 = (state_53078[(10)]);
var inst_53018 = (state_53078[(12)]);
var inst_53028 = cljs.core._nth(inst_53018,inst_53020);
var state_53078__$1 = state_53078;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53078__$1,(13),out,inst_53028);
} else {
if((state_val_53079 === (18))){
var inst_53035 = (state_53078[(7)]);
var inst_53049 = cljs.core.first(inst_53035);
var state_53078__$1 = state_53078;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53078__$1,(20),out,inst_53049);
} else {
if((state_val_53079 === (8))){
var inst_53019 = (state_53078[(8)]);
var inst_53020 = (state_53078[(10)]);
var inst_53022 = (inst_53020 < inst_53019);
var inst_53023 = inst_53022;
var state_53078__$1 = state_53078;
if(cljs.core.truth_(inst_53023)){
var statearr_53160_54575 = state_53078__$1;
(statearr_53160_54575[(1)] = (10));

} else {
var statearr_53161_54576 = state_53078__$1;
(statearr_53161_54576[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__49968__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__49968__auto____0 = (function (){
var statearr_53162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53162[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__49968__auto__);

(statearr_53162[(1)] = (1));

return statearr_53162;
});
var cljs$core$async$mapcat_STAR__$_state_machine__49968__auto____1 = (function (state_53078){
while(true){
var ret_value__49969__auto__ = (function (){try{while(true){
var result__49970__auto__ = switch__49967__auto__(state_53078);
if(cljs.core.keyword_identical_QMARK_(result__49970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49970__auto__;
}
break;
}
}catch (e53165){var ex__49971__auto__ = e53165;
var statearr_53166_54582 = state_53078;
(statearr_53166_54582[(2)] = ex__49971__auto__);


if(cljs.core.seq((state_53078[(4)]))){
var statearr_53168_54584 = state_53078;
(statearr_53168_54584[(1)] = cljs.core.first((state_53078[(4)])));

} else {
throw ex__49971__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54586 = state_53078;
state_53078 = G__54586;
continue;
} else {
return ret_value__49969__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__49968__auto__ = function(state_53078){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__49968__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__49968__auto____1.call(this,state_53078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__49968__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__49968__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__49968__auto__;
})()
})();
var state__50118__auto__ = (function (){var statearr_53169 = f__50117__auto__();
(statearr_53169[(6)] = c__50116__auto__);

return statearr_53169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50118__auto__);
}));

return c__50116__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__53177 = arguments.length;
switch (G__53177) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__53183 = arguments.length;
switch (G__53183) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__53193 = arguments.length;
switch (G__53193) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50116__auto___54604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50117__auto__ = (function (){var switch__49967__auto__ = (function (state_53223){
var state_val_53224 = (state_53223[(1)]);
if((state_val_53224 === (7))){
var inst_53218 = (state_53223[(2)]);
var state_53223__$1 = state_53223;
var statearr_53227_54609 = state_53223__$1;
(statearr_53227_54609[(2)] = inst_53218);

(statearr_53227_54609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53224 === (1))){
var inst_53199 = null;
var state_53223__$1 = (function (){var statearr_53229 = state_53223;
(statearr_53229[(7)] = inst_53199);

return statearr_53229;
})();
var statearr_53231_54611 = state_53223__$1;
(statearr_53231_54611[(2)] = null);

(statearr_53231_54611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53224 === (4))){
var inst_53202 = (state_53223[(8)]);
var inst_53202__$1 = (state_53223[(2)]);
var inst_53204 = (inst_53202__$1 == null);
var inst_53205 = cljs.core.not(inst_53204);
var state_53223__$1 = (function (){var statearr_53232 = state_53223;
(statearr_53232[(8)] = inst_53202__$1);

return statearr_53232;
})();
if(inst_53205){
var statearr_53233_54615 = state_53223__$1;
(statearr_53233_54615[(1)] = (5));

} else {
var statearr_53234_54617 = state_53223__$1;
(statearr_53234_54617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53224 === (6))){
var state_53223__$1 = state_53223;
var statearr_53236_54618 = state_53223__$1;
(statearr_53236_54618[(2)] = null);

(statearr_53236_54618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53224 === (3))){
var inst_53220 = (state_53223[(2)]);
var inst_53221 = cljs.core.async.close_BANG_(out);
var state_53223__$1 = (function (){var statearr_53237 = state_53223;
(statearr_53237[(9)] = inst_53220);

return statearr_53237;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53223__$1,inst_53221);
} else {
if((state_val_53224 === (2))){
var state_53223__$1 = state_53223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53223__$1,(4),ch);
} else {
if((state_val_53224 === (11))){
var inst_53202 = (state_53223[(8)]);
var inst_53212 = (state_53223[(2)]);
var inst_53199 = inst_53202;
var state_53223__$1 = (function (){var statearr_53238 = state_53223;
(statearr_53238[(10)] = inst_53212);

(statearr_53238[(7)] = inst_53199);

return statearr_53238;
})();
var statearr_53239_54623 = state_53223__$1;
(statearr_53239_54623[(2)] = null);

(statearr_53239_54623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53224 === (9))){
var inst_53202 = (state_53223[(8)]);
var state_53223__$1 = state_53223;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53223__$1,(11),out,inst_53202);
} else {
if((state_val_53224 === (5))){
var inst_53202 = (state_53223[(8)]);
var inst_53199 = (state_53223[(7)]);
var inst_53207 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53202,inst_53199);
var state_53223__$1 = state_53223;
if(inst_53207){
var statearr_53246_54624 = state_53223__$1;
(statearr_53246_54624[(1)] = (8));

} else {
var statearr_53248_54627 = state_53223__$1;
(statearr_53248_54627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53224 === (10))){
var inst_53215 = (state_53223[(2)]);
var state_53223__$1 = state_53223;
var statearr_53249_54634 = state_53223__$1;
(statearr_53249_54634[(2)] = inst_53215);

(statearr_53249_54634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53224 === (8))){
var inst_53199 = (state_53223[(7)]);
var tmp53240 = inst_53199;
var inst_53199__$1 = tmp53240;
var state_53223__$1 = (function (){var statearr_53253 = state_53223;
(statearr_53253[(7)] = inst_53199__$1);

return statearr_53253;
})();
var statearr_53254_54637 = state_53223__$1;
(statearr_53254_54637[(2)] = null);

(statearr_53254_54637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49968__auto__ = null;
var cljs$core$async$state_machine__49968__auto____0 = (function (){
var statearr_53255 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53255[(0)] = cljs$core$async$state_machine__49968__auto__);

(statearr_53255[(1)] = (1));

return statearr_53255;
});
var cljs$core$async$state_machine__49968__auto____1 = (function (state_53223){
while(true){
var ret_value__49969__auto__ = (function (){try{while(true){
var result__49970__auto__ = switch__49967__auto__(state_53223);
if(cljs.core.keyword_identical_QMARK_(result__49970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49970__auto__;
}
break;
}
}catch (e53259){var ex__49971__auto__ = e53259;
var statearr_53260_54640 = state_53223;
(statearr_53260_54640[(2)] = ex__49971__auto__);


if(cljs.core.seq((state_53223[(4)]))){
var statearr_53261_54642 = state_53223;
(statearr_53261_54642[(1)] = cljs.core.first((state_53223[(4)])));

} else {
throw ex__49971__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54644 = state_53223;
state_53223 = G__54644;
continue;
} else {
return ret_value__49969__auto__;
}
break;
}
});
cljs$core$async$state_machine__49968__auto__ = function(state_53223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49968__auto____1.call(this,state_53223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49968__auto____0;
cljs$core$async$state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49968__auto____1;
return cljs$core$async$state_machine__49968__auto__;
})()
})();
var state__50118__auto__ = (function (){var statearr_53262 = f__50117__auto__();
(statearr_53262[(6)] = c__50116__auto___54604);

return statearr_53262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50118__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__53267 = arguments.length;
switch (G__53267) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50116__auto___54663 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50117__auto__ = (function (){var switch__49967__auto__ = (function (state_53313){
var state_val_53314 = (state_53313[(1)]);
if((state_val_53314 === (7))){
var inst_53309 = (state_53313[(2)]);
var state_53313__$1 = state_53313;
var statearr_53316_54668 = state_53313__$1;
(statearr_53316_54668[(2)] = inst_53309);

(statearr_53316_54668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (1))){
var inst_53272 = (new Array(n));
var inst_53273 = inst_53272;
var inst_53274 = (0);
var state_53313__$1 = (function (){var statearr_53320 = state_53313;
(statearr_53320[(7)] = inst_53274);

(statearr_53320[(8)] = inst_53273);

return statearr_53320;
})();
var statearr_53323_54673 = state_53313__$1;
(statearr_53323_54673[(2)] = null);

(statearr_53323_54673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (4))){
var inst_53278 = (state_53313[(9)]);
var inst_53278__$1 = (state_53313[(2)]);
var inst_53279 = (inst_53278__$1 == null);
var inst_53280 = cljs.core.not(inst_53279);
var state_53313__$1 = (function (){var statearr_53324 = state_53313;
(statearr_53324[(9)] = inst_53278__$1);

return statearr_53324;
})();
if(inst_53280){
var statearr_53325_54680 = state_53313__$1;
(statearr_53325_54680[(1)] = (5));

} else {
var statearr_53326_54682 = state_53313__$1;
(statearr_53326_54682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (15))){
var inst_53303 = (state_53313[(2)]);
var state_53313__$1 = state_53313;
var statearr_53328_54683 = state_53313__$1;
(statearr_53328_54683[(2)] = inst_53303);

(statearr_53328_54683[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (13))){
var state_53313__$1 = state_53313;
var statearr_53329_54684 = state_53313__$1;
(statearr_53329_54684[(2)] = null);

(statearr_53329_54684[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (6))){
var inst_53274 = (state_53313[(7)]);
var inst_53299 = (inst_53274 > (0));
var state_53313__$1 = state_53313;
if(cljs.core.truth_(inst_53299)){
var statearr_53332_54686 = state_53313__$1;
(statearr_53332_54686[(1)] = (12));

} else {
var statearr_53334_54687 = state_53313__$1;
(statearr_53334_54687[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (3))){
var inst_53311 = (state_53313[(2)]);
var state_53313__$1 = state_53313;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53313__$1,inst_53311);
} else {
if((state_val_53314 === (12))){
var inst_53273 = (state_53313[(8)]);
var inst_53301 = cljs.core.vec(inst_53273);
var state_53313__$1 = state_53313;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53313__$1,(15),out,inst_53301);
} else {
if((state_val_53314 === (2))){
var state_53313__$1 = state_53313;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53313__$1,(4),ch);
} else {
if((state_val_53314 === (11))){
var inst_53290 = (state_53313[(2)]);
var inst_53294 = (new Array(n));
var inst_53273 = inst_53294;
var inst_53274 = (0);
var state_53313__$1 = (function (){var statearr_53335 = state_53313;
(statearr_53335[(10)] = inst_53290);

(statearr_53335[(7)] = inst_53274);

(statearr_53335[(8)] = inst_53273);

return statearr_53335;
})();
var statearr_53336_54694 = state_53313__$1;
(statearr_53336_54694[(2)] = null);

(statearr_53336_54694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (9))){
var inst_53273 = (state_53313[(8)]);
var inst_53288 = cljs.core.vec(inst_53273);
var state_53313__$1 = state_53313;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53313__$1,(11),out,inst_53288);
} else {
if((state_val_53314 === (5))){
var inst_53278 = (state_53313[(9)]);
var inst_53274 = (state_53313[(7)]);
var inst_53273 = (state_53313[(8)]);
var inst_53283 = (state_53313[(11)]);
var inst_53282 = (inst_53273[inst_53274] = inst_53278);
var inst_53283__$1 = (inst_53274 + (1));
var inst_53284 = (inst_53283__$1 < n);
var state_53313__$1 = (function (){var statearr_53339 = state_53313;
(statearr_53339[(12)] = inst_53282);

(statearr_53339[(11)] = inst_53283__$1);

return statearr_53339;
})();
if(cljs.core.truth_(inst_53284)){
var statearr_53340_54695 = state_53313__$1;
(statearr_53340_54695[(1)] = (8));

} else {
var statearr_53342_54696 = state_53313__$1;
(statearr_53342_54696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (14))){
var inst_53306 = (state_53313[(2)]);
var inst_53307 = cljs.core.async.close_BANG_(out);
var state_53313__$1 = (function (){var statearr_53345 = state_53313;
(statearr_53345[(13)] = inst_53306);

return statearr_53345;
})();
var statearr_53349_54703 = state_53313__$1;
(statearr_53349_54703[(2)] = inst_53307);

(statearr_53349_54703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (10))){
var inst_53297 = (state_53313[(2)]);
var state_53313__$1 = state_53313;
var statearr_53350_54704 = state_53313__$1;
(statearr_53350_54704[(2)] = inst_53297);

(statearr_53350_54704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53314 === (8))){
var inst_53273 = (state_53313[(8)]);
var inst_53283 = (state_53313[(11)]);
var tmp53344 = inst_53273;
var inst_53273__$1 = tmp53344;
var inst_53274 = inst_53283;
var state_53313__$1 = (function (){var statearr_53351 = state_53313;
(statearr_53351[(7)] = inst_53274);

(statearr_53351[(8)] = inst_53273__$1);

return statearr_53351;
})();
var statearr_53352_54706 = state_53313__$1;
(statearr_53352_54706[(2)] = null);

(statearr_53352_54706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49968__auto__ = null;
var cljs$core$async$state_machine__49968__auto____0 = (function (){
var statearr_53356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53356[(0)] = cljs$core$async$state_machine__49968__auto__);

(statearr_53356[(1)] = (1));

return statearr_53356;
});
var cljs$core$async$state_machine__49968__auto____1 = (function (state_53313){
while(true){
var ret_value__49969__auto__ = (function (){try{while(true){
var result__49970__auto__ = switch__49967__auto__(state_53313);
if(cljs.core.keyword_identical_QMARK_(result__49970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49970__auto__;
}
break;
}
}catch (e53357){var ex__49971__auto__ = e53357;
var statearr_53358_54713 = state_53313;
(statearr_53358_54713[(2)] = ex__49971__auto__);


if(cljs.core.seq((state_53313[(4)]))){
var statearr_53359_54715 = state_53313;
(statearr_53359_54715[(1)] = cljs.core.first((state_53313[(4)])));

} else {
throw ex__49971__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54716 = state_53313;
state_53313 = G__54716;
continue;
} else {
return ret_value__49969__auto__;
}
break;
}
});
cljs$core$async$state_machine__49968__auto__ = function(state_53313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49968__auto____1.call(this,state_53313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49968__auto____0;
cljs$core$async$state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49968__auto____1;
return cljs$core$async$state_machine__49968__auto__;
})()
})();
var state__50118__auto__ = (function (){var statearr_53360 = f__50117__auto__();
(statearr_53360[(6)] = c__50116__auto___54663);

return statearr_53360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50118__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__53362 = arguments.length;
switch (G__53362) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50116__auto___54724 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50117__auto__ = (function (){var switch__49967__auto__ = (function (state_53406){
var state_val_53407 = (state_53406[(1)]);
if((state_val_53407 === (7))){
var inst_53402 = (state_53406[(2)]);
var state_53406__$1 = state_53406;
var statearr_53409_54726 = state_53406__$1;
(statearr_53409_54726[(2)] = inst_53402);

(statearr_53409_54726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53407 === (1))){
var inst_53365 = [];
var inst_53366 = inst_53365;
var inst_53367 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_53406__$1 = (function (){var statearr_53410 = state_53406;
(statearr_53410[(7)] = inst_53366);

(statearr_53410[(8)] = inst_53367);

return statearr_53410;
})();
var statearr_53411_54729 = state_53406__$1;
(statearr_53411_54729[(2)] = null);

(statearr_53411_54729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53407 === (4))){
var inst_53370 = (state_53406[(9)]);
var inst_53370__$1 = (state_53406[(2)]);
var inst_53371 = (inst_53370__$1 == null);
var inst_53372 = cljs.core.not(inst_53371);
var state_53406__$1 = (function (){var statearr_53413 = state_53406;
(statearr_53413[(9)] = inst_53370__$1);

return statearr_53413;
})();
if(inst_53372){
var statearr_53414_54733 = state_53406__$1;
(statearr_53414_54733[(1)] = (5));

} else {
var statearr_53415_54734 = state_53406__$1;
(statearr_53415_54734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53407 === (15))){
var inst_53396 = (state_53406[(2)]);
var state_53406__$1 = state_53406;
var statearr_53416_54735 = state_53406__$1;
(statearr_53416_54735[(2)] = inst_53396);

(statearr_53416_54735[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53407 === (13))){
var state_53406__$1 = state_53406;
var statearr_53418_54740 = state_53406__$1;
(statearr_53418_54740[(2)] = null);

(statearr_53418_54740[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53407 === (6))){
var inst_53366 = (state_53406[(7)]);
var inst_53391 = inst_53366.length;
var inst_53392 = (inst_53391 > (0));
var state_53406__$1 = state_53406;
if(cljs.core.truth_(inst_53392)){
var statearr_53419_54747 = state_53406__$1;
(statearr_53419_54747[(1)] = (12));

} else {
var statearr_53420_54748 = state_53406__$1;
(statearr_53420_54748[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53407 === (3))){
var inst_53404 = (state_53406[(2)]);
var state_53406__$1 = state_53406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53406__$1,inst_53404);
} else {
if((state_val_53407 === (12))){
var inst_53366 = (state_53406[(7)]);
var inst_53394 = cljs.core.vec(inst_53366);
var state_53406__$1 = state_53406;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53406__$1,(15),out,inst_53394);
} else {
if((state_val_53407 === (2))){
var state_53406__$1 = state_53406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53406__$1,(4),ch);
} else {
if((state_val_53407 === (11))){
var inst_53374 = (state_53406[(10)]);
var inst_53370 = (state_53406[(9)]);
var inst_53384 = (state_53406[(2)]);
var inst_53385 = [];
var inst_53386 = inst_53385.push(inst_53370);
var inst_53366 = inst_53385;
var inst_53367 = inst_53374;
var state_53406__$1 = (function (){var statearr_53421 = state_53406;
(statearr_53421[(11)] = inst_53384);

(statearr_53421[(12)] = inst_53386);

(statearr_53421[(7)] = inst_53366);

(statearr_53421[(8)] = inst_53367);

return statearr_53421;
})();
var statearr_53422_54755 = state_53406__$1;
(statearr_53422_54755[(2)] = null);

(statearr_53422_54755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53407 === (9))){
var inst_53366 = (state_53406[(7)]);
var inst_53382 = cljs.core.vec(inst_53366);
var state_53406__$1 = state_53406;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53406__$1,(11),out,inst_53382);
} else {
if((state_val_53407 === (5))){
var inst_53374 = (state_53406[(10)]);
var inst_53370 = (state_53406[(9)]);
var inst_53367 = (state_53406[(8)]);
var inst_53374__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_53370) : f.call(null,inst_53370));
var inst_53375 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53374__$1,inst_53367);
var inst_53376 = cljs.core.keyword_identical_QMARK_(inst_53367,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_53377 = ((inst_53375) || (inst_53376));
var state_53406__$1 = (function (){var statearr_53423 = state_53406;
(statearr_53423[(10)] = inst_53374__$1);

return statearr_53423;
})();
if(cljs.core.truth_(inst_53377)){
var statearr_53424_54761 = state_53406__$1;
(statearr_53424_54761[(1)] = (8));

} else {
var statearr_53425_54762 = state_53406__$1;
(statearr_53425_54762[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53407 === (14))){
var inst_53399 = (state_53406[(2)]);
var inst_53400 = cljs.core.async.close_BANG_(out);
var state_53406__$1 = (function (){var statearr_53427 = state_53406;
(statearr_53427[(13)] = inst_53399);

return statearr_53427;
})();
var statearr_53428_54765 = state_53406__$1;
(statearr_53428_54765[(2)] = inst_53400);

(statearr_53428_54765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53407 === (10))){
var inst_53389 = (state_53406[(2)]);
var state_53406__$1 = state_53406;
var statearr_53429_54767 = state_53406__$1;
(statearr_53429_54767[(2)] = inst_53389);

(statearr_53429_54767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53407 === (8))){
var inst_53366 = (state_53406[(7)]);
var inst_53374 = (state_53406[(10)]);
var inst_53370 = (state_53406[(9)]);
var inst_53379 = inst_53366.push(inst_53370);
var tmp53426 = inst_53366;
var inst_53366__$1 = tmp53426;
var inst_53367 = inst_53374;
var state_53406__$1 = (function (){var statearr_53431 = state_53406;
(statearr_53431[(7)] = inst_53366__$1);

(statearr_53431[(14)] = inst_53379);

(statearr_53431[(8)] = inst_53367);

return statearr_53431;
})();
var statearr_53432_54771 = state_53406__$1;
(statearr_53432_54771[(2)] = null);

(statearr_53432_54771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__49968__auto__ = null;
var cljs$core$async$state_machine__49968__auto____0 = (function (){
var statearr_53434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53434[(0)] = cljs$core$async$state_machine__49968__auto__);

(statearr_53434[(1)] = (1));

return statearr_53434;
});
var cljs$core$async$state_machine__49968__auto____1 = (function (state_53406){
while(true){
var ret_value__49969__auto__ = (function (){try{while(true){
var result__49970__auto__ = switch__49967__auto__(state_53406);
if(cljs.core.keyword_identical_QMARK_(result__49970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49970__auto__;
}
break;
}
}catch (e53437){var ex__49971__auto__ = e53437;
var statearr_53438_54775 = state_53406;
(statearr_53438_54775[(2)] = ex__49971__auto__);


if(cljs.core.seq((state_53406[(4)]))){
var statearr_53439_54777 = state_53406;
(statearr_53439_54777[(1)] = cljs.core.first((state_53406[(4)])));

} else {
throw ex__49971__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__49969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54779 = state_53406;
state_53406 = G__54779;
continue;
} else {
return ret_value__49969__auto__;
}
break;
}
});
cljs$core$async$state_machine__49968__auto__ = function(state_53406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49968__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49968__auto____1.call(this,state_53406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49968__auto____0;
cljs$core$async$state_machine__49968__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49968__auto____1;
return cljs$core$async$state_machine__49968__auto__;
})()
})();
var state__50118__auto__ = (function (){var statearr_53440 = f__50117__auto__();
(statearr_53440[(6)] = c__50116__auto___54724);

return statearr_53440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50118__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
