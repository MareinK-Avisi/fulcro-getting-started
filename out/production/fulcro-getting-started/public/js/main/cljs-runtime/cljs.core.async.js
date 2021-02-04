goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__50822 = arguments.length;
switch (G__50822) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50825 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50825 = (function (f,blockable,meta50826){
this.f = f;
this.blockable = blockable;
this.meta50826 = meta50826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50827,meta50826__$1){
var self__ = this;
var _50827__$1 = this;
return (new cljs.core.async.t_cljs$core$async50825(self__.f,self__.blockable,meta50826__$1));
}));

(cljs.core.async.t_cljs$core$async50825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50827){
var self__ = this;
var _50827__$1 = this;
return self__.meta50826;
}));

(cljs.core.async.t_cljs$core$async50825.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50825.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50825.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async50825.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async50825.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta50826","meta50826",-716196148,null)], null);
}));

(cljs.core.async.t_cljs$core$async50825.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50825.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50825");

(cljs.core.async.t_cljs$core$async50825.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async50825");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50825.
 */
cljs.core.async.__GT_t_cljs$core$async50825 = (function cljs$core$async$__GT_t_cljs$core$async50825(f__$1,blockable__$1,meta50826){
return (new cljs.core.async.t_cljs$core$async50825(f__$1,blockable__$1,meta50826));
});

}

return (new cljs.core.async.t_cljs$core$async50825(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__50841 = arguments.length;
switch (G__50841) {
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
var G__50849 = arguments.length;
switch (G__50849) {
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
var G__50857 = arguments.length;
switch (G__50857) {
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
var val_53772 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53772) : fn1.call(null,val_53772));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53772) : fn1.call(null,val_53772));
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
var G__50866 = arguments.length;
switch (G__50866) {
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
var n__4607__auto___53788 = n;
var x_53789 = (0);
while(true){
if((x_53789 < n__4607__auto___53788)){
(a[x_53789] = x_53789);

var G__53791 = (x_53789 + (1));
x_53789 = G__53791;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50879 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50879 = (function (flag,meta50880){
this.flag = flag;
this.meta50880 = meta50880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50881,meta50880__$1){
var self__ = this;
var _50881__$1 = this;
return (new cljs.core.async.t_cljs$core$async50879(self__.flag,meta50880__$1));
}));

(cljs.core.async.t_cljs$core$async50879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50881){
var self__ = this;
var _50881__$1 = this;
return self__.meta50880;
}));

(cljs.core.async.t_cljs$core$async50879.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50879.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50879.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50879.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async50879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta50880","meta50880",593780541,null)], null);
}));

(cljs.core.async.t_cljs$core$async50879.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50879.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50879");

(cljs.core.async.t_cljs$core$async50879.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async50879");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50879.
 */
cljs.core.async.__GT_t_cljs$core$async50879 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async50879(flag__$1,meta50880){
return (new cljs.core.async.t_cljs$core$async50879(flag__$1,meta50880));
});

}

return (new cljs.core.async.t_cljs$core$async50879(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50886 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50886 = (function (flag,cb,meta50887){
this.flag = flag;
this.cb = cb;
this.meta50887 = meta50887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50888,meta50887__$1){
var self__ = this;
var _50888__$1 = this;
return (new cljs.core.async.t_cljs$core$async50886(self__.flag,self__.cb,meta50887__$1));
}));

(cljs.core.async.t_cljs$core$async50886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50888){
var self__ = this;
var _50888__$1 = this;
return self__.meta50887;
}));

(cljs.core.async.t_cljs$core$async50886.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50886.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50886.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50886.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async50886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50887","meta50887",-391316792,null)], null);
}));

(cljs.core.async.t_cljs$core$async50886.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50886");

(cljs.core.async.t_cljs$core$async50886.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async50886");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50886.
 */
cljs.core.async.__GT_t_cljs$core$async50886 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async50886(flag__$1,cb__$1,meta50887){
return (new cljs.core.async.t_cljs$core$async50886(flag__$1,cb__$1,meta50887));
});

}

return (new cljs.core.async.t_cljs$core$async50886(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__50892_SHARP_){
var G__50900 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50892_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50900) : fret.call(null,G__50900));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50893_SHARP_){
var G__50901 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50893_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50901) : fret.call(null,G__50901));
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
var G__53829 = (i + (1));
i = G__53829;
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
var len__4730__auto___53837 = arguments.length;
var i__4731__auto___53838 = (0);
while(true){
if((i__4731__auto___53838 < len__4730__auto___53837)){
args__4736__auto__.push((arguments[i__4731__auto___53838]));

var G__53841 = (i__4731__auto___53838 + (1));
i__4731__auto___53838 = G__53841;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50911){
var map__50912 = p__50911;
var map__50912__$1 = (((((!((map__50912 == null))))?(((((map__50912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50912):map__50912);
var opts = map__50912__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50905){
var G__50906 = cljs.core.first(seq50905);
var seq50905__$1 = cljs.core.next(seq50905);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50906,seq50905__$1);
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
var G__50928 = arguments.length;
switch (G__50928) {
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
var c__50709__auto___53855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50710__auto__ = (function (){var switch__50435__auto__ = (function (state_50962){
var state_val_50963 = (state_50962[(1)]);
if((state_val_50963 === (7))){
var inst_50955 = (state_50962[(2)]);
var state_50962__$1 = state_50962;
var statearr_50970_53857 = state_50962__$1;
(statearr_50970_53857[(2)] = inst_50955);

(statearr_50970_53857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50963 === (1))){
var state_50962__$1 = state_50962;
var statearr_50973_53858 = state_50962__$1;
(statearr_50973_53858[(2)] = null);

(statearr_50973_53858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50963 === (4))){
var inst_50936 = (state_50962[(7)]);
var inst_50936__$1 = (state_50962[(2)]);
var inst_50937 = (inst_50936__$1 == null);
var state_50962__$1 = (function (){var statearr_50975 = state_50962;
(statearr_50975[(7)] = inst_50936__$1);

return statearr_50975;
})();
if(cljs.core.truth_(inst_50937)){
var statearr_50976_53860 = state_50962__$1;
(statearr_50976_53860[(1)] = (5));

} else {
var statearr_50977_53863 = state_50962__$1;
(statearr_50977_53863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50963 === (13))){
var state_50962__$1 = state_50962;
var statearr_50978_53866 = state_50962__$1;
(statearr_50978_53866[(2)] = null);

(statearr_50978_53866[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50963 === (6))){
var inst_50936 = (state_50962[(7)]);
var state_50962__$1 = state_50962;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50962__$1,(11),to,inst_50936);
} else {
if((state_val_50963 === (3))){
var inst_50957 = (state_50962[(2)]);
var state_50962__$1 = state_50962;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50962__$1,inst_50957);
} else {
if((state_val_50963 === (12))){
var state_50962__$1 = state_50962;
var statearr_50979_53869 = state_50962__$1;
(statearr_50979_53869[(2)] = null);

(statearr_50979_53869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50963 === (2))){
var state_50962__$1 = state_50962;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50962__$1,(4),from);
} else {
if((state_val_50963 === (11))){
var inst_50948 = (state_50962[(2)]);
var state_50962__$1 = state_50962;
if(cljs.core.truth_(inst_50948)){
var statearr_50983_53871 = state_50962__$1;
(statearr_50983_53871[(1)] = (12));

} else {
var statearr_50984_53872 = state_50962__$1;
(statearr_50984_53872[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50963 === (9))){
var state_50962__$1 = state_50962;
var statearr_50985_53873 = state_50962__$1;
(statearr_50985_53873[(2)] = null);

(statearr_50985_53873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50963 === (5))){
var state_50962__$1 = state_50962;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50986_53874 = state_50962__$1;
(statearr_50986_53874[(1)] = (8));

} else {
var statearr_50988_53875 = state_50962__$1;
(statearr_50988_53875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50963 === (14))){
var inst_50953 = (state_50962[(2)]);
var state_50962__$1 = state_50962;
var statearr_50991_53876 = state_50962__$1;
(statearr_50991_53876[(2)] = inst_50953);

(statearr_50991_53876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50963 === (10))){
var inst_50945 = (state_50962[(2)]);
var state_50962__$1 = state_50962;
var statearr_50995_53879 = state_50962__$1;
(statearr_50995_53879[(2)] = inst_50945);

(statearr_50995_53879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50963 === (8))){
var inst_50940 = cljs.core.async.close_BANG_(to);
var state_50962__$1 = state_50962;
var statearr_50998_53882 = state_50962__$1;
(statearr_50998_53882[(2)] = inst_50940);

(statearr_50998_53882[(1)] = (10));


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
var cljs$core$async$state_machine__50436__auto__ = null;
var cljs$core$async$state_machine__50436__auto____0 = (function (){
var statearr_51003 = [null,null,null,null,null,null,null,null];
(statearr_51003[(0)] = cljs$core$async$state_machine__50436__auto__);

(statearr_51003[(1)] = (1));

return statearr_51003;
});
var cljs$core$async$state_machine__50436__auto____1 = (function (state_50962){
while(true){
var ret_value__50437__auto__ = (function (){try{while(true){
var result__50438__auto__ = switch__50435__auto__(state_50962);
if(cljs.core.keyword_identical_QMARK_(result__50438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50438__auto__;
}
break;
}
}catch (e51004){var ex__50439__auto__ = e51004;
var statearr_51005_53887 = state_50962;
(statearr_51005_53887[(2)] = ex__50439__auto__);


if(cljs.core.seq((state_50962[(4)]))){
var statearr_51006_53888 = state_50962;
(statearr_51006_53888[(1)] = cljs.core.first((state_50962[(4)])));

} else {
throw ex__50439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53889 = state_50962;
state_50962 = G__53889;
continue;
} else {
return ret_value__50437__auto__;
}
break;
}
});
cljs$core$async$state_machine__50436__auto__ = function(state_50962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50436__auto____1.call(this,state_50962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50436__auto____0;
cljs$core$async$state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50436__auto____1;
return cljs$core$async$state_machine__50436__auto__;
})()
})();
var state__50711__auto__ = (function (){var statearr_51007 = f__50710__auto__();
(statearr_51007[(6)] = c__50709__auto___53855);

return statearr_51007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50711__auto__);
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
var process = (function (p__51020){
var vec__51021 = p__51020;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51021,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51021,(1),null);
var job = vec__51021;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__50709__auto___53894 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50710__auto__ = (function (){var switch__50435__auto__ = (function (state_51029){
var state_val_51030 = (state_51029[(1)]);
if((state_val_51030 === (1))){
var state_51029__$1 = state_51029;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51029__$1,(2),res,v);
} else {
if((state_val_51030 === (2))){
var inst_51026 = (state_51029[(2)]);
var inst_51027 = cljs.core.async.close_BANG_(res);
var state_51029__$1 = (function (){var statearr_51033 = state_51029;
(statearr_51033[(7)] = inst_51026);

return statearr_51033;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51029__$1,inst_51027);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____0 = (function (){
var statearr_51034 = [null,null,null,null,null,null,null,null];
(statearr_51034[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__);

(statearr_51034[(1)] = (1));

return statearr_51034;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____1 = (function (state_51029){
while(true){
var ret_value__50437__auto__ = (function (){try{while(true){
var result__50438__auto__ = switch__50435__auto__(state_51029);
if(cljs.core.keyword_identical_QMARK_(result__50438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50438__auto__;
}
break;
}
}catch (e51035){var ex__50439__auto__ = e51035;
var statearr_51037_53899 = state_51029;
(statearr_51037_53899[(2)] = ex__50439__auto__);


if(cljs.core.seq((state_51029[(4)]))){
var statearr_51038_53900 = state_51029;
(statearr_51038_53900[(1)] = cljs.core.first((state_51029[(4)])));

} else {
throw ex__50439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53903 = state_51029;
state_51029 = G__53903;
continue;
} else {
return ret_value__50437__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__ = function(state_51029){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____1.call(this,state_51029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__;
})()
})();
var state__50711__auto__ = (function (){var statearr_51042 = f__50710__auto__();
(statearr_51042[(6)] = c__50709__auto___53894);

return statearr_51042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50711__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__51044){
var vec__51045 = p__51044;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51045,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51045,(1),null);
var job = vec__51045;
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
var n__4607__auto___53909 = n;
var __53911 = (0);
while(true){
if((__53911 < n__4607__auto___53909)){
var G__51048_53912 = type;
var G__51048_53913__$1 = (((G__51048_53912 instanceof cljs.core.Keyword))?G__51048_53912.fqn:null);
switch (G__51048_53913__$1) {
case "compute":
var c__50709__auto___53915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53911,c__50709__auto___53915,G__51048_53912,G__51048_53913__$1,n__4607__auto___53909,jobs,results,process,async){
return (function (){
var f__50710__auto__ = (function (){var switch__50435__auto__ = ((function (__53911,c__50709__auto___53915,G__51048_53912,G__51048_53913__$1,n__4607__auto___53909,jobs,results,process,async){
return (function (state_51064){
var state_val_51065 = (state_51064[(1)]);
if((state_val_51065 === (1))){
var state_51064__$1 = state_51064;
var statearr_51068_53916 = state_51064__$1;
(statearr_51068_53916[(2)] = null);

(statearr_51068_53916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51065 === (2))){
var state_51064__$1 = state_51064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51064__$1,(4),jobs);
} else {
if((state_val_51065 === (3))){
var inst_51062 = (state_51064[(2)]);
var state_51064__$1 = state_51064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51064__$1,inst_51062);
} else {
if((state_val_51065 === (4))){
var inst_51054 = (state_51064[(2)]);
var inst_51055 = process(inst_51054);
var state_51064__$1 = state_51064;
if(cljs.core.truth_(inst_51055)){
var statearr_51071_53919 = state_51064__$1;
(statearr_51071_53919[(1)] = (5));

} else {
var statearr_51072_53920 = state_51064__$1;
(statearr_51072_53920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51065 === (5))){
var state_51064__$1 = state_51064;
var statearr_51073_53922 = state_51064__$1;
(statearr_51073_53922[(2)] = null);

(statearr_51073_53922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51065 === (6))){
var state_51064__$1 = state_51064;
var statearr_51074_53924 = state_51064__$1;
(statearr_51074_53924[(2)] = null);

(statearr_51074_53924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51065 === (7))){
var inst_51060 = (state_51064[(2)]);
var state_51064__$1 = state_51064;
var statearr_51075_53927 = state_51064__$1;
(statearr_51075_53927[(2)] = inst_51060);

(statearr_51075_53927[(1)] = (3));


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
});})(__53911,c__50709__auto___53915,G__51048_53912,G__51048_53913__$1,n__4607__auto___53909,jobs,results,process,async))
;
return ((function (__53911,switch__50435__auto__,c__50709__auto___53915,G__51048_53912,G__51048_53913__$1,n__4607__auto___53909,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____0 = (function (){
var statearr_51076 = [null,null,null,null,null,null,null];
(statearr_51076[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__);

(statearr_51076[(1)] = (1));

return statearr_51076;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____1 = (function (state_51064){
while(true){
var ret_value__50437__auto__ = (function (){try{while(true){
var result__50438__auto__ = switch__50435__auto__(state_51064);
if(cljs.core.keyword_identical_QMARK_(result__50438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50438__auto__;
}
break;
}
}catch (e51077){var ex__50439__auto__ = e51077;
var statearr_51078_53930 = state_51064;
(statearr_51078_53930[(2)] = ex__50439__auto__);


if(cljs.core.seq((state_51064[(4)]))){
var statearr_51079_53933 = state_51064;
(statearr_51079_53933[(1)] = cljs.core.first((state_51064[(4)])));

} else {
throw ex__50439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53936 = state_51064;
state_51064 = G__53936;
continue;
} else {
return ret_value__50437__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__ = function(state_51064){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____1.call(this,state_51064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__;
})()
;})(__53911,switch__50435__auto__,c__50709__auto___53915,G__51048_53912,G__51048_53913__$1,n__4607__auto___53909,jobs,results,process,async))
})();
var state__50711__auto__ = (function (){var statearr_51080 = f__50710__auto__();
(statearr_51080[(6)] = c__50709__auto___53915);

return statearr_51080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50711__auto__);
});})(__53911,c__50709__auto___53915,G__51048_53912,G__51048_53913__$1,n__4607__auto___53909,jobs,results,process,async))
);


break;
case "async":
var c__50709__auto___53937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53911,c__50709__auto___53937,G__51048_53912,G__51048_53913__$1,n__4607__auto___53909,jobs,results,process,async){
return (function (){
var f__50710__auto__ = (function (){var switch__50435__auto__ = ((function (__53911,c__50709__auto___53937,G__51048_53912,G__51048_53913__$1,n__4607__auto___53909,jobs,results,process,async){
return (function (state_51095){
var state_val_51096 = (state_51095[(1)]);
if((state_val_51096 === (1))){
var state_51095__$1 = state_51095;
var statearr_51099_53940 = state_51095__$1;
(statearr_51099_53940[(2)] = null);

(statearr_51099_53940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (2))){
var state_51095__$1 = state_51095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51095__$1,(4),jobs);
} else {
if((state_val_51096 === (3))){
var inst_51091 = (state_51095[(2)]);
var state_51095__$1 = state_51095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51095__$1,inst_51091);
} else {
if((state_val_51096 === (4))){
var inst_51083 = (state_51095[(2)]);
var inst_51084 = async(inst_51083);
var state_51095__$1 = state_51095;
if(cljs.core.truth_(inst_51084)){
var statearr_51106_53945 = state_51095__$1;
(statearr_51106_53945[(1)] = (5));

} else {
var statearr_51108_53946 = state_51095__$1;
(statearr_51108_53946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (5))){
var state_51095__$1 = state_51095;
var statearr_51110_53948 = state_51095__$1;
(statearr_51110_53948[(2)] = null);

(statearr_51110_53948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (6))){
var state_51095__$1 = state_51095;
var statearr_51111_53950 = state_51095__$1;
(statearr_51111_53950[(2)] = null);

(statearr_51111_53950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (7))){
var inst_51089 = (state_51095[(2)]);
var state_51095__$1 = state_51095;
var statearr_51112_53951 = state_51095__$1;
(statearr_51112_53951[(2)] = inst_51089);

(statearr_51112_53951[(1)] = (3));


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
});})(__53911,c__50709__auto___53937,G__51048_53912,G__51048_53913__$1,n__4607__auto___53909,jobs,results,process,async))
;
return ((function (__53911,switch__50435__auto__,c__50709__auto___53937,G__51048_53912,G__51048_53913__$1,n__4607__auto___53909,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____0 = (function (){
var statearr_51113 = [null,null,null,null,null,null,null];
(statearr_51113[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__);

(statearr_51113[(1)] = (1));

return statearr_51113;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____1 = (function (state_51095){
while(true){
var ret_value__50437__auto__ = (function (){try{while(true){
var result__50438__auto__ = switch__50435__auto__(state_51095);
if(cljs.core.keyword_identical_QMARK_(result__50438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50438__auto__;
}
break;
}
}catch (e51114){var ex__50439__auto__ = e51114;
var statearr_51115_53954 = state_51095;
(statearr_51115_53954[(2)] = ex__50439__auto__);


if(cljs.core.seq((state_51095[(4)]))){
var statearr_51116_53955 = state_51095;
(statearr_51116_53955[(1)] = cljs.core.first((state_51095[(4)])));

} else {
throw ex__50439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53956 = state_51095;
state_51095 = G__53956;
continue;
} else {
return ret_value__50437__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__ = function(state_51095){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____1.call(this,state_51095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__;
})()
;})(__53911,switch__50435__auto__,c__50709__auto___53937,G__51048_53912,G__51048_53913__$1,n__4607__auto___53909,jobs,results,process,async))
})();
var state__50711__auto__ = (function (){var statearr_51117 = f__50710__auto__();
(statearr_51117[(6)] = c__50709__auto___53937);

return statearr_51117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50711__auto__);
});})(__53911,c__50709__auto___53937,G__51048_53912,G__51048_53913__$1,n__4607__auto___53909,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51048_53913__$1)].join('')));

}

var G__53959 = (__53911 + (1));
__53911 = G__53959;
continue;
} else {
}
break;
}

var c__50709__auto___53960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50710__auto__ = (function (){var switch__50435__auto__ = (function (state_51141){
var state_val_51142 = (state_51141[(1)]);
if((state_val_51142 === (7))){
var inst_51137 = (state_51141[(2)]);
var state_51141__$1 = state_51141;
var statearr_51154_53963 = state_51141__$1;
(statearr_51154_53963[(2)] = inst_51137);

(statearr_51154_53963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51142 === (1))){
var state_51141__$1 = state_51141;
var statearr_51155_53964 = state_51141__$1;
(statearr_51155_53964[(2)] = null);

(statearr_51155_53964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51142 === (4))){
var inst_51120 = (state_51141[(7)]);
var inst_51120__$1 = (state_51141[(2)]);
var inst_51121 = (inst_51120__$1 == null);
var state_51141__$1 = (function (){var statearr_51156 = state_51141;
(statearr_51156[(7)] = inst_51120__$1);

return statearr_51156;
})();
if(cljs.core.truth_(inst_51121)){
var statearr_51157_53970 = state_51141__$1;
(statearr_51157_53970[(1)] = (5));

} else {
var statearr_51158_53971 = state_51141__$1;
(statearr_51158_53971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51142 === (6))){
var inst_51125 = (state_51141[(8)]);
var inst_51120 = (state_51141[(7)]);
var inst_51125__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_51127 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51129 = [inst_51120,inst_51125__$1];
var inst_51130 = (new cljs.core.PersistentVector(null,2,(5),inst_51127,inst_51129,null));
var state_51141__$1 = (function (){var statearr_51159 = state_51141;
(statearr_51159[(8)] = inst_51125__$1);

return statearr_51159;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51141__$1,(8),jobs,inst_51130);
} else {
if((state_val_51142 === (3))){
var inst_51139 = (state_51141[(2)]);
var state_51141__$1 = state_51141;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51141__$1,inst_51139);
} else {
if((state_val_51142 === (2))){
var state_51141__$1 = state_51141;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51141__$1,(4),from);
} else {
if((state_val_51142 === (9))){
var inst_51134 = (state_51141[(2)]);
var state_51141__$1 = (function (){var statearr_51161 = state_51141;
(statearr_51161[(9)] = inst_51134);

return statearr_51161;
})();
var statearr_51164_53977 = state_51141__$1;
(statearr_51164_53977[(2)] = null);

(statearr_51164_53977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51142 === (5))){
var inst_51123 = cljs.core.async.close_BANG_(jobs);
var state_51141__$1 = state_51141;
var statearr_51165_53979 = state_51141__$1;
(statearr_51165_53979[(2)] = inst_51123);

(statearr_51165_53979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51142 === (8))){
var inst_51125 = (state_51141[(8)]);
var inst_51132 = (state_51141[(2)]);
var state_51141__$1 = (function (){var statearr_51167 = state_51141;
(statearr_51167[(10)] = inst_51132);

return statearr_51167;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51141__$1,(9),results,inst_51125);
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
var cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____0 = (function (){
var statearr_51170 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51170[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__);

(statearr_51170[(1)] = (1));

return statearr_51170;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____1 = (function (state_51141){
while(true){
var ret_value__50437__auto__ = (function (){try{while(true){
var result__50438__auto__ = switch__50435__auto__(state_51141);
if(cljs.core.keyword_identical_QMARK_(result__50438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50438__auto__;
}
break;
}
}catch (e51173){var ex__50439__auto__ = e51173;
var statearr_51174_53984 = state_51141;
(statearr_51174_53984[(2)] = ex__50439__auto__);


if(cljs.core.seq((state_51141[(4)]))){
var statearr_51176_53985 = state_51141;
(statearr_51176_53985[(1)] = cljs.core.first((state_51141[(4)])));

} else {
throw ex__50439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53986 = state_51141;
state_51141 = G__53986;
continue;
} else {
return ret_value__50437__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__ = function(state_51141){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____1.call(this,state_51141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__;
})()
})();
var state__50711__auto__ = (function (){var statearr_51177 = f__50710__auto__();
(statearr_51177[(6)] = c__50709__auto___53960);

return statearr_51177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50711__auto__);
}));


var c__50709__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50710__auto__ = (function (){var switch__50435__auto__ = (function (state_51221){
var state_val_51222 = (state_51221[(1)]);
if((state_val_51222 === (7))){
var inst_51216 = (state_51221[(2)]);
var state_51221__$1 = state_51221;
var statearr_51228_53989 = state_51221__$1;
(statearr_51228_53989[(2)] = inst_51216);

(statearr_51228_53989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (20))){
var state_51221__$1 = state_51221;
var statearr_51229_53991 = state_51221__$1;
(statearr_51229_53991[(2)] = null);

(statearr_51229_53991[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (1))){
var state_51221__$1 = state_51221;
var statearr_51231_53994 = state_51221__$1;
(statearr_51231_53994[(2)] = null);

(statearr_51231_53994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (4))){
var inst_51181 = (state_51221[(7)]);
var inst_51181__$1 = (state_51221[(2)]);
var inst_51183 = (inst_51181__$1 == null);
var state_51221__$1 = (function (){var statearr_51234 = state_51221;
(statearr_51234[(7)] = inst_51181__$1);

return statearr_51234;
})();
if(cljs.core.truth_(inst_51183)){
var statearr_51236_53996 = state_51221__$1;
(statearr_51236_53996[(1)] = (5));

} else {
var statearr_51239_53997 = state_51221__$1;
(statearr_51239_53997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (15))){
var inst_51198 = (state_51221[(8)]);
var state_51221__$1 = state_51221;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51221__$1,(18),to,inst_51198);
} else {
if((state_val_51222 === (21))){
var inst_51211 = (state_51221[(2)]);
var state_51221__$1 = state_51221;
var statearr_51240_54006 = state_51221__$1;
(statearr_51240_54006[(2)] = inst_51211);

(statearr_51240_54006[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (13))){
var inst_51213 = (state_51221[(2)]);
var state_51221__$1 = (function (){var statearr_51242 = state_51221;
(statearr_51242[(9)] = inst_51213);

return statearr_51242;
})();
var statearr_51243_54007 = state_51221__$1;
(statearr_51243_54007[(2)] = null);

(statearr_51243_54007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (6))){
var inst_51181 = (state_51221[(7)]);
var state_51221__$1 = state_51221;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51221__$1,(11),inst_51181);
} else {
if((state_val_51222 === (17))){
var inst_51206 = (state_51221[(2)]);
var state_51221__$1 = state_51221;
if(cljs.core.truth_(inst_51206)){
var statearr_51246_54009 = state_51221__$1;
(statearr_51246_54009[(1)] = (19));

} else {
var statearr_51247_54011 = state_51221__$1;
(statearr_51247_54011[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (3))){
var inst_51218 = (state_51221[(2)]);
var state_51221__$1 = state_51221;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51221__$1,inst_51218);
} else {
if((state_val_51222 === (12))){
var inst_51195 = (state_51221[(10)]);
var state_51221__$1 = state_51221;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51221__$1,(14),inst_51195);
} else {
if((state_val_51222 === (2))){
var state_51221__$1 = state_51221;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51221__$1,(4),results);
} else {
if((state_val_51222 === (19))){
var state_51221__$1 = state_51221;
var statearr_51251_54015 = state_51221__$1;
(statearr_51251_54015[(2)] = null);

(statearr_51251_54015[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (11))){
var inst_51195 = (state_51221[(2)]);
var state_51221__$1 = (function (){var statearr_51254 = state_51221;
(statearr_51254[(10)] = inst_51195);

return statearr_51254;
})();
var statearr_51255_54016 = state_51221__$1;
(statearr_51255_54016[(2)] = null);

(statearr_51255_54016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (9))){
var state_51221__$1 = state_51221;
var statearr_51256_54018 = state_51221__$1;
(statearr_51256_54018[(2)] = null);

(statearr_51256_54018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (5))){
var state_51221__$1 = state_51221;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51257_54020 = state_51221__$1;
(statearr_51257_54020[(1)] = (8));

} else {
var statearr_51258_54021 = state_51221__$1;
(statearr_51258_54021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (14))){
var inst_51198 = (state_51221[(8)]);
var inst_51198__$1 = (state_51221[(2)]);
var inst_51199 = (inst_51198__$1 == null);
var inst_51200 = cljs.core.not(inst_51199);
var state_51221__$1 = (function (){var statearr_51260 = state_51221;
(statearr_51260[(8)] = inst_51198__$1);

return statearr_51260;
})();
if(inst_51200){
var statearr_51261_54025 = state_51221__$1;
(statearr_51261_54025[(1)] = (15));

} else {
var statearr_51263_54026 = state_51221__$1;
(statearr_51263_54026[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (16))){
var state_51221__$1 = state_51221;
var statearr_51264_54027 = state_51221__$1;
(statearr_51264_54027[(2)] = false);

(statearr_51264_54027[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (10))){
var inst_51191 = (state_51221[(2)]);
var state_51221__$1 = state_51221;
var statearr_51267_54030 = state_51221__$1;
(statearr_51267_54030[(2)] = inst_51191);

(statearr_51267_54030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (18))){
var inst_51203 = (state_51221[(2)]);
var state_51221__$1 = state_51221;
var statearr_51268_54031 = state_51221__$1;
(statearr_51268_54031[(2)] = inst_51203);

(statearr_51268_54031[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51222 === (8))){
var inst_51187 = cljs.core.async.close_BANG_(to);
var state_51221__$1 = state_51221;
var statearr_51270_54035 = state_51221__$1;
(statearr_51270_54035[(2)] = inst_51187);

(statearr_51270_54035[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____0 = (function (){
var statearr_51279 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51279[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__);

(statearr_51279[(1)] = (1));

return statearr_51279;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____1 = (function (state_51221){
while(true){
var ret_value__50437__auto__ = (function (){try{while(true){
var result__50438__auto__ = switch__50435__auto__(state_51221);
if(cljs.core.keyword_identical_QMARK_(result__50438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50438__auto__;
}
break;
}
}catch (e51282){var ex__50439__auto__ = e51282;
var statearr_51283_54042 = state_51221;
(statearr_51283_54042[(2)] = ex__50439__auto__);


if(cljs.core.seq((state_51221[(4)]))){
var statearr_51284_54043 = state_51221;
(statearr_51284_54043[(1)] = cljs.core.first((state_51221[(4)])));

} else {
throw ex__50439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54044 = state_51221;
state_51221 = G__54044;
continue;
} else {
return ret_value__50437__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__ = function(state_51221){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____1.call(this,state_51221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50436__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50436__auto__;
})()
})();
var state__50711__auto__ = (function (){var statearr_51287 = f__50710__auto__();
(statearr_51287[(6)] = c__50709__auto__);

return statearr_51287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50711__auto__);
}));

return c__50709__auto__;
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
var G__51291 = arguments.length;
switch (G__51291) {
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
var G__51298 = arguments.length;
switch (G__51298) {
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
var G__51313 = arguments.length;
switch (G__51313) {
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
var c__50709__auto___54071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50710__auto__ = (function (){var switch__50435__auto__ = (function (state_51343){
var state_val_51344 = (state_51343[(1)]);
if((state_val_51344 === (7))){
var inst_51338 = (state_51343[(2)]);
var state_51343__$1 = state_51343;
var statearr_51349_54078 = state_51343__$1;
(statearr_51349_54078[(2)] = inst_51338);

(statearr_51349_54078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51344 === (1))){
var state_51343__$1 = state_51343;
var statearr_51350_54079 = state_51343__$1;
(statearr_51350_54079[(2)] = null);

(statearr_51350_54079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51344 === (4))){
var inst_51318 = (state_51343[(7)]);
var inst_51318__$1 = (state_51343[(2)]);
var inst_51320 = (inst_51318__$1 == null);
var state_51343__$1 = (function (){var statearr_51352 = state_51343;
(statearr_51352[(7)] = inst_51318__$1);

return statearr_51352;
})();
if(cljs.core.truth_(inst_51320)){
var statearr_51353_54084 = state_51343__$1;
(statearr_51353_54084[(1)] = (5));

} else {
var statearr_51354_54085 = state_51343__$1;
(statearr_51354_54085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51344 === (13))){
var state_51343__$1 = state_51343;
var statearr_51357_54086 = state_51343__$1;
(statearr_51357_54086[(2)] = null);

(statearr_51357_54086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51344 === (6))){
var inst_51318 = (state_51343[(7)]);
var inst_51325 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51318) : p.call(null,inst_51318));
var state_51343__$1 = state_51343;
if(cljs.core.truth_(inst_51325)){
var statearr_51359_54088 = state_51343__$1;
(statearr_51359_54088[(1)] = (9));

} else {
var statearr_51360_54089 = state_51343__$1;
(statearr_51360_54089[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51344 === (3))){
var inst_51341 = (state_51343[(2)]);
var state_51343__$1 = state_51343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51343__$1,inst_51341);
} else {
if((state_val_51344 === (12))){
var state_51343__$1 = state_51343;
var statearr_51365_54090 = state_51343__$1;
(statearr_51365_54090[(2)] = null);

(statearr_51365_54090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51344 === (2))){
var state_51343__$1 = state_51343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51343__$1,(4),ch);
} else {
if((state_val_51344 === (11))){
var inst_51318 = (state_51343[(7)]);
var inst_51329 = (state_51343[(2)]);
var state_51343__$1 = state_51343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51343__$1,(8),inst_51329,inst_51318);
} else {
if((state_val_51344 === (9))){
var state_51343__$1 = state_51343;
var statearr_51368_54097 = state_51343__$1;
(statearr_51368_54097[(2)] = tc);

(statearr_51368_54097[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51344 === (5))){
var inst_51322 = cljs.core.async.close_BANG_(tc);
var inst_51323 = cljs.core.async.close_BANG_(fc);
var state_51343__$1 = (function (){var statearr_51370 = state_51343;
(statearr_51370[(8)] = inst_51322);

return statearr_51370;
})();
var statearr_51372_54103 = state_51343__$1;
(statearr_51372_54103[(2)] = inst_51323);

(statearr_51372_54103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51344 === (14))){
var inst_51336 = (state_51343[(2)]);
var state_51343__$1 = state_51343;
var statearr_51375_54107 = state_51343__$1;
(statearr_51375_54107[(2)] = inst_51336);

(statearr_51375_54107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51344 === (10))){
var state_51343__$1 = state_51343;
var statearr_51378_54108 = state_51343__$1;
(statearr_51378_54108[(2)] = fc);

(statearr_51378_54108[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51344 === (8))){
var inst_51331 = (state_51343[(2)]);
var state_51343__$1 = state_51343;
if(cljs.core.truth_(inst_51331)){
var statearr_51380_54109 = state_51343__$1;
(statearr_51380_54109[(1)] = (12));

} else {
var statearr_51381_54111 = state_51343__$1;
(statearr_51381_54111[(1)] = (13));

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
var cljs$core$async$state_machine__50436__auto__ = null;
var cljs$core$async$state_machine__50436__auto____0 = (function (){
var statearr_51385 = [null,null,null,null,null,null,null,null,null];
(statearr_51385[(0)] = cljs$core$async$state_machine__50436__auto__);

(statearr_51385[(1)] = (1));

return statearr_51385;
});
var cljs$core$async$state_machine__50436__auto____1 = (function (state_51343){
while(true){
var ret_value__50437__auto__ = (function (){try{while(true){
var result__50438__auto__ = switch__50435__auto__(state_51343);
if(cljs.core.keyword_identical_QMARK_(result__50438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50438__auto__;
}
break;
}
}catch (e51393){var ex__50439__auto__ = e51393;
var statearr_51395_54112 = state_51343;
(statearr_51395_54112[(2)] = ex__50439__auto__);


if(cljs.core.seq((state_51343[(4)]))){
var statearr_51397_54113 = state_51343;
(statearr_51397_54113[(1)] = cljs.core.first((state_51343[(4)])));

} else {
throw ex__50439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54120 = state_51343;
state_51343 = G__54120;
continue;
} else {
return ret_value__50437__auto__;
}
break;
}
});
cljs$core$async$state_machine__50436__auto__ = function(state_51343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50436__auto____1.call(this,state_51343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50436__auto____0;
cljs$core$async$state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50436__auto____1;
return cljs$core$async$state_machine__50436__auto__;
})()
})();
var state__50711__auto__ = (function (){var statearr_51402 = f__50710__auto__();
(statearr_51402[(6)] = c__50709__auto___54071);

return statearr_51402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50711__auto__);
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
var c__50709__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50710__auto__ = (function (){var switch__50435__auto__ = (function (state_51443){
var state_val_51445 = (state_51443[(1)]);
if((state_val_51445 === (7))){
var inst_51437 = (state_51443[(2)]);
var state_51443__$1 = state_51443;
var statearr_51450_54122 = state_51443__$1;
(statearr_51450_54122[(2)] = inst_51437);

(statearr_51450_54122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51445 === (1))){
var inst_51415 = init;
var inst_51416 = inst_51415;
var state_51443__$1 = (function (){var statearr_51452 = state_51443;
(statearr_51452[(7)] = inst_51416);

return statearr_51452;
})();
var statearr_51454_54123 = state_51443__$1;
(statearr_51454_54123[(2)] = null);

(statearr_51454_54123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51445 === (4))){
var inst_51422 = (state_51443[(8)]);
var inst_51422__$1 = (state_51443[(2)]);
var inst_51423 = (inst_51422__$1 == null);
var state_51443__$1 = (function (){var statearr_51459 = state_51443;
(statearr_51459[(8)] = inst_51422__$1);

return statearr_51459;
})();
if(cljs.core.truth_(inst_51423)){
var statearr_51461_54127 = state_51443__$1;
(statearr_51461_54127[(1)] = (5));

} else {
var statearr_51462_54128 = state_51443__$1;
(statearr_51462_54128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51445 === (6))){
var inst_51416 = (state_51443[(7)]);
var inst_51426 = (state_51443[(9)]);
var inst_51422 = (state_51443[(8)]);
var inst_51426__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_51416,inst_51422) : f.call(null,inst_51416,inst_51422));
var inst_51428 = cljs.core.reduced_QMARK_(inst_51426__$1);
var state_51443__$1 = (function (){var statearr_51464 = state_51443;
(statearr_51464[(9)] = inst_51426__$1);

return statearr_51464;
})();
if(inst_51428){
var statearr_51465_54133 = state_51443__$1;
(statearr_51465_54133[(1)] = (8));

} else {
var statearr_51466_54134 = state_51443__$1;
(statearr_51466_54134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51445 === (3))){
var inst_51439 = (state_51443[(2)]);
var state_51443__$1 = state_51443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51443__$1,inst_51439);
} else {
if((state_val_51445 === (2))){
var state_51443__$1 = state_51443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51443__$1,(4),ch);
} else {
if((state_val_51445 === (9))){
var inst_51426 = (state_51443[(9)]);
var inst_51416 = inst_51426;
var state_51443__$1 = (function (){var statearr_51477 = state_51443;
(statearr_51477[(7)] = inst_51416);

return statearr_51477;
})();
var statearr_51478_54135 = state_51443__$1;
(statearr_51478_54135[(2)] = null);

(statearr_51478_54135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51445 === (5))){
var inst_51416 = (state_51443[(7)]);
var state_51443__$1 = state_51443;
var statearr_51481_54136 = state_51443__$1;
(statearr_51481_54136[(2)] = inst_51416);

(statearr_51481_54136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51445 === (10))){
var inst_51435 = (state_51443[(2)]);
var state_51443__$1 = state_51443;
var statearr_51484_54138 = state_51443__$1;
(statearr_51484_54138[(2)] = inst_51435);

(statearr_51484_54138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51445 === (8))){
var inst_51426 = (state_51443[(9)]);
var inst_51431 = cljs.core.deref(inst_51426);
var state_51443__$1 = state_51443;
var statearr_51487_54142 = state_51443__$1;
(statearr_51487_54142[(2)] = inst_51431);

(statearr_51487_54142[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__50436__auto__ = null;
var cljs$core$async$reduce_$_state_machine__50436__auto____0 = (function (){
var statearr_51492 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51492[(0)] = cljs$core$async$reduce_$_state_machine__50436__auto__);

(statearr_51492[(1)] = (1));

return statearr_51492;
});
var cljs$core$async$reduce_$_state_machine__50436__auto____1 = (function (state_51443){
while(true){
var ret_value__50437__auto__ = (function (){try{while(true){
var result__50438__auto__ = switch__50435__auto__(state_51443);
if(cljs.core.keyword_identical_QMARK_(result__50438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50438__auto__;
}
break;
}
}catch (e51494){var ex__50439__auto__ = e51494;
var statearr_51495_54143 = state_51443;
(statearr_51495_54143[(2)] = ex__50439__auto__);


if(cljs.core.seq((state_51443[(4)]))){
var statearr_51497_54144 = state_51443;
(statearr_51497_54144[(1)] = cljs.core.first((state_51443[(4)])));

} else {
throw ex__50439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54147 = state_51443;
state_51443 = G__54147;
continue;
} else {
return ret_value__50437__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__50436__auto__ = function(state_51443){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__50436__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__50436__auto____1.call(this,state_51443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__50436__auto____0;
cljs$core$async$reduce_$_state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__50436__auto____1;
return cljs$core$async$reduce_$_state_machine__50436__auto__;
})()
})();
var state__50711__auto__ = (function (){var statearr_51506 = f__50710__auto__();
(statearr_51506[(6)] = c__50709__auto__);

return statearr_51506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50711__auto__);
}));

return c__50709__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__50709__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50710__auto__ = (function (){var switch__50435__auto__ = (function (state_51521){
var state_val_51522 = (state_51521[(1)]);
if((state_val_51522 === (1))){
var inst_51514 = cljs.core.async.reduce(f__$1,init,ch);
var state_51521__$1 = state_51521;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51521__$1,(2),inst_51514);
} else {
if((state_val_51522 === (2))){
var inst_51517 = (state_51521[(2)]);
var inst_51518 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_51517) : f__$1.call(null,inst_51517));
var state_51521__$1 = state_51521;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51521__$1,inst_51518);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__50436__auto__ = null;
var cljs$core$async$transduce_$_state_machine__50436__auto____0 = (function (){
var statearr_51535 = [null,null,null,null,null,null,null];
(statearr_51535[(0)] = cljs$core$async$transduce_$_state_machine__50436__auto__);

(statearr_51535[(1)] = (1));

return statearr_51535;
});
var cljs$core$async$transduce_$_state_machine__50436__auto____1 = (function (state_51521){
while(true){
var ret_value__50437__auto__ = (function (){try{while(true){
var result__50438__auto__ = switch__50435__auto__(state_51521);
if(cljs.core.keyword_identical_QMARK_(result__50438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50438__auto__;
}
break;
}
}catch (e51540){var ex__50439__auto__ = e51540;
var statearr_51543_54151 = state_51521;
(statearr_51543_54151[(2)] = ex__50439__auto__);


if(cljs.core.seq((state_51521[(4)]))){
var statearr_51546_54152 = state_51521;
(statearr_51546_54152[(1)] = cljs.core.first((state_51521[(4)])));

} else {
throw ex__50439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54154 = state_51521;
state_51521 = G__54154;
continue;
} else {
return ret_value__50437__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__50436__auto__ = function(state_51521){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__50436__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__50436__auto____1.call(this,state_51521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__50436__auto____0;
cljs$core$async$transduce_$_state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__50436__auto____1;
return cljs$core$async$transduce_$_state_machine__50436__auto__;
})()
})();
var state__50711__auto__ = (function (){var statearr_51564 = f__50710__auto__();
(statearr_51564[(6)] = c__50709__auto__);

return statearr_51564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50711__auto__);
}));

return c__50709__auto__;
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
var G__51578 = arguments.length;
switch (G__51578) {
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
var c__50709__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50710__auto__ = (function (){var switch__50435__auto__ = (function (state_51622){
var state_val_51623 = (state_51622[(1)]);
if((state_val_51623 === (7))){
var inst_51603 = (state_51622[(2)]);
var state_51622__$1 = state_51622;
var statearr_51630_54158 = state_51622__$1;
(statearr_51630_54158[(2)] = inst_51603);

(statearr_51630_54158[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (1))){
var inst_51593 = cljs.core.seq(coll);
var inst_51595 = inst_51593;
var state_51622__$1 = (function (){var statearr_51632 = state_51622;
(statearr_51632[(7)] = inst_51595);

return statearr_51632;
})();
var statearr_51637_54160 = state_51622__$1;
(statearr_51637_54160[(2)] = null);

(statearr_51637_54160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (4))){
var inst_51595 = (state_51622[(7)]);
var inst_51601 = cljs.core.first(inst_51595);
var state_51622__$1 = state_51622;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51622__$1,(7),ch,inst_51601);
} else {
if((state_val_51623 === (13))){
var inst_51616 = (state_51622[(2)]);
var state_51622__$1 = state_51622;
var statearr_51638_54164 = state_51622__$1;
(statearr_51638_54164[(2)] = inst_51616);

(statearr_51638_54164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (6))){
var inst_51606 = (state_51622[(2)]);
var state_51622__$1 = state_51622;
if(cljs.core.truth_(inst_51606)){
var statearr_51639_54165 = state_51622__$1;
(statearr_51639_54165[(1)] = (8));

} else {
var statearr_51641_54166 = state_51622__$1;
(statearr_51641_54166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (3))){
var inst_51620 = (state_51622[(2)]);
var state_51622__$1 = state_51622;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51622__$1,inst_51620);
} else {
if((state_val_51623 === (12))){
var state_51622__$1 = state_51622;
var statearr_51642_54167 = state_51622__$1;
(statearr_51642_54167[(2)] = null);

(statearr_51642_54167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (2))){
var inst_51595 = (state_51622[(7)]);
var state_51622__$1 = state_51622;
if(cljs.core.truth_(inst_51595)){
var statearr_51643_54168 = state_51622__$1;
(statearr_51643_54168[(1)] = (4));

} else {
var statearr_51645_54169 = state_51622__$1;
(statearr_51645_54169[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (11))){
var inst_51613 = cljs.core.async.close_BANG_(ch);
var state_51622__$1 = state_51622;
var statearr_51646_54170 = state_51622__$1;
(statearr_51646_54170[(2)] = inst_51613);

(statearr_51646_54170[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (9))){
var state_51622__$1 = state_51622;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51647_54171 = state_51622__$1;
(statearr_51647_54171[(1)] = (11));

} else {
var statearr_51648_54172 = state_51622__$1;
(statearr_51648_54172[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (5))){
var inst_51595 = (state_51622[(7)]);
var state_51622__$1 = state_51622;
var statearr_51650_54173 = state_51622__$1;
(statearr_51650_54173[(2)] = inst_51595);

(statearr_51650_54173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (10))){
var inst_51618 = (state_51622[(2)]);
var state_51622__$1 = state_51622;
var statearr_51651_54175 = state_51622__$1;
(statearr_51651_54175[(2)] = inst_51618);

(statearr_51651_54175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51623 === (8))){
var inst_51595 = (state_51622[(7)]);
var inst_51608 = cljs.core.next(inst_51595);
var inst_51595__$1 = inst_51608;
var state_51622__$1 = (function (){var statearr_51655 = state_51622;
(statearr_51655[(7)] = inst_51595__$1);

return statearr_51655;
})();
var statearr_51656_54178 = state_51622__$1;
(statearr_51656_54178[(2)] = null);

(statearr_51656_54178[(1)] = (2));


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
var cljs$core$async$state_machine__50436__auto__ = null;
var cljs$core$async$state_machine__50436__auto____0 = (function (){
var statearr_51659 = [null,null,null,null,null,null,null,null];
(statearr_51659[(0)] = cljs$core$async$state_machine__50436__auto__);

(statearr_51659[(1)] = (1));

return statearr_51659;
});
var cljs$core$async$state_machine__50436__auto____1 = (function (state_51622){
while(true){
var ret_value__50437__auto__ = (function (){try{while(true){
var result__50438__auto__ = switch__50435__auto__(state_51622);
if(cljs.core.keyword_identical_QMARK_(result__50438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50438__auto__;
}
break;
}
}catch (e51660){var ex__50439__auto__ = e51660;
var statearr_51662_54182 = state_51622;
(statearr_51662_54182[(2)] = ex__50439__auto__);


if(cljs.core.seq((state_51622[(4)]))){
var statearr_51663_54183 = state_51622;
(statearr_51663_54183[(1)] = cljs.core.first((state_51622[(4)])));

} else {
throw ex__50439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54184 = state_51622;
state_51622 = G__54184;
continue;
} else {
return ret_value__50437__auto__;
}
break;
}
});
cljs$core$async$state_machine__50436__auto__ = function(state_51622){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50436__auto____1.call(this,state_51622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50436__auto____0;
cljs$core$async$state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50436__auto____1;
return cljs$core$async$state_machine__50436__auto__;
})()
})();
var state__50711__auto__ = (function (){var statearr_51665 = f__50710__auto__();
(statearr_51665[(6)] = c__50709__auto__);

return statearr_51665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50711__auto__);
}));

return c__50709__auto__;
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
var G__51670 = arguments.length;
switch (G__51670) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_54190 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_54190(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_54195 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_54195(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_54197 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_54197(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_54203 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_54203(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51727 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51727 = (function (ch,cs,meta51728){
this.ch = ch;
this.cs = cs;
this.meta51728 = meta51728;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51729,meta51728__$1){
var self__ = this;
var _51729__$1 = this;
return (new cljs.core.async.t_cljs$core$async51727(self__.ch,self__.cs,meta51728__$1));
}));

(cljs.core.async.t_cljs$core$async51727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51729){
var self__ = this;
var _51729__$1 = this;
return self__.meta51728;
}));

(cljs.core.async.t_cljs$core$async51727.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51727.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51727.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51727.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async51727.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async51727.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async51727.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta51728","meta51728",-45640706,null)], null);
}));

(cljs.core.async.t_cljs$core$async51727.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51727.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51727");

(cljs.core.async.t_cljs$core$async51727.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async51727");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51727.
 */
cljs.core.async.__GT_t_cljs$core$async51727 = (function cljs$core$async$mult_$___GT_t_cljs$core$async51727(ch__$1,cs__$1,meta51728){
return (new cljs.core.async.t_cljs$core$async51727(ch__$1,cs__$1,meta51728));
});

}

return (new cljs.core.async.t_cljs$core$async51727(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__50709__auto___54213 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50710__auto__ = (function (){var switch__50435__auto__ = (function (state_51928){
var state_val_51929 = (state_51928[(1)]);
if((state_val_51929 === (7))){
var inst_51922 = (state_51928[(2)]);
var state_51928__$1 = state_51928;
var statearr_51937_54214 = state_51928__$1;
(statearr_51937_54214[(2)] = inst_51922);

(statearr_51937_54214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (20))){
var inst_51798 = (state_51928[(7)]);
var inst_51813 = cljs.core.first(inst_51798);
var inst_51814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51813,(0),null);
var inst_51815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51813,(1),null);
var state_51928__$1 = (function (){var statearr_51939 = state_51928;
(statearr_51939[(8)] = inst_51814);

return statearr_51939;
})();
if(cljs.core.truth_(inst_51815)){
var statearr_51940_54218 = state_51928__$1;
(statearr_51940_54218[(1)] = (22));

} else {
var statearr_51943_54220 = state_51928__$1;
(statearr_51943_54220[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (27))){
var inst_51855 = (state_51928[(9)]);
var inst_51863 = (state_51928[(10)]);
var inst_51853 = (state_51928[(11)]);
var inst_51758 = (state_51928[(12)]);
var inst_51863__$1 = cljs.core._nth(inst_51853,inst_51855);
var inst_51864 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51863__$1,inst_51758,done);
var state_51928__$1 = (function (){var statearr_51948 = state_51928;
(statearr_51948[(10)] = inst_51863__$1);

return statearr_51948;
})();
if(cljs.core.truth_(inst_51864)){
var statearr_51949_54223 = state_51928__$1;
(statearr_51949_54223[(1)] = (30));

} else {
var statearr_51953_54225 = state_51928__$1;
(statearr_51953_54225[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (1))){
var state_51928__$1 = state_51928;
var statearr_51959_54227 = state_51928__$1;
(statearr_51959_54227[(2)] = null);

(statearr_51959_54227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (24))){
var inst_51798 = (state_51928[(7)]);
var inst_51823 = (state_51928[(2)]);
var inst_51827 = cljs.core.next(inst_51798);
var inst_51769 = inst_51827;
var inst_51770 = null;
var inst_51771 = (0);
var inst_51772 = (0);
var state_51928__$1 = (function (){var statearr_51964 = state_51928;
(statearr_51964[(13)] = inst_51823);

(statearr_51964[(14)] = inst_51771);

(statearr_51964[(15)] = inst_51769);

(statearr_51964[(16)] = inst_51770);

(statearr_51964[(17)] = inst_51772);

return statearr_51964;
})();
var statearr_51966_54228 = state_51928__$1;
(statearr_51966_54228[(2)] = null);

(statearr_51966_54228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (39))){
var state_51928__$1 = state_51928;
var statearr_51972_54229 = state_51928__$1;
(statearr_51972_54229[(2)] = null);

(statearr_51972_54229[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (4))){
var inst_51758 = (state_51928[(12)]);
var inst_51758__$1 = (state_51928[(2)]);
var inst_51759 = (inst_51758__$1 == null);
var state_51928__$1 = (function (){var statearr_51973 = state_51928;
(statearr_51973[(12)] = inst_51758__$1);

return statearr_51973;
})();
if(cljs.core.truth_(inst_51759)){
var statearr_51978_54232 = state_51928__$1;
(statearr_51978_54232[(1)] = (5));

} else {
var statearr_51979_54235 = state_51928__$1;
(statearr_51979_54235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (15))){
var inst_51771 = (state_51928[(14)]);
var inst_51769 = (state_51928[(15)]);
var inst_51770 = (state_51928[(16)]);
var inst_51772 = (state_51928[(17)]);
var inst_51790 = (state_51928[(2)]);
var inst_51792 = (inst_51772 + (1));
var tmp51969 = inst_51771;
var tmp51970 = inst_51769;
var tmp51971 = inst_51770;
var inst_51769__$1 = tmp51970;
var inst_51770__$1 = tmp51971;
var inst_51771__$1 = tmp51969;
var inst_51772__$1 = inst_51792;
var state_51928__$1 = (function (){var statearr_51984 = state_51928;
(statearr_51984[(18)] = inst_51790);

(statearr_51984[(14)] = inst_51771__$1);

(statearr_51984[(15)] = inst_51769__$1);

(statearr_51984[(16)] = inst_51770__$1);

(statearr_51984[(17)] = inst_51772__$1);

return statearr_51984;
})();
var statearr_51986_54240 = state_51928__$1;
(statearr_51986_54240[(2)] = null);

(statearr_51986_54240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (21))){
var inst_51831 = (state_51928[(2)]);
var state_51928__$1 = state_51928;
var statearr_51991_54241 = state_51928__$1;
(statearr_51991_54241[(2)] = inst_51831);

(statearr_51991_54241[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (31))){
var inst_51863 = (state_51928[(10)]);
var inst_51868 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51863);
var state_51928__$1 = state_51928;
var statearr_51992_54242 = state_51928__$1;
(statearr_51992_54242[(2)] = inst_51868);

(statearr_51992_54242[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (32))){
var inst_51852 = (state_51928[(19)]);
var inst_51855 = (state_51928[(9)]);
var inst_51853 = (state_51928[(11)]);
var inst_51854 = (state_51928[(20)]);
var inst_51870 = (state_51928[(2)]);
var inst_51872 = (inst_51855 + (1));
var tmp51987 = inst_51852;
var tmp51988 = inst_51853;
var tmp51989 = inst_51854;
var inst_51852__$1 = tmp51987;
var inst_51853__$1 = tmp51988;
var inst_51854__$1 = tmp51989;
var inst_51855__$1 = inst_51872;
var state_51928__$1 = (function (){var statearr_52006 = state_51928;
(statearr_52006[(19)] = inst_51852__$1);

(statearr_52006[(9)] = inst_51855__$1);

(statearr_52006[(21)] = inst_51870);

(statearr_52006[(11)] = inst_51853__$1);

(statearr_52006[(20)] = inst_51854__$1);

return statearr_52006;
})();
var statearr_52008_54247 = state_51928__$1;
(statearr_52008_54247[(2)] = null);

(statearr_52008_54247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (40))){
var inst_51888 = (state_51928[(22)]);
var inst_51897 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51888);
var state_51928__$1 = state_51928;
var statearr_52010_54248 = state_51928__$1;
(statearr_52010_54248[(2)] = inst_51897);

(statearr_52010_54248[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (33))){
var inst_51875 = (state_51928[(23)]);
var inst_51878 = cljs.core.chunked_seq_QMARK_(inst_51875);
var state_51928__$1 = state_51928;
if(inst_51878){
var statearr_52012_54250 = state_51928__$1;
(statearr_52012_54250[(1)] = (36));

} else {
var statearr_52013_54251 = state_51928__$1;
(statearr_52013_54251[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (13))){
var inst_51783 = (state_51928[(24)]);
var inst_51787 = cljs.core.async.close_BANG_(inst_51783);
var state_51928__$1 = state_51928;
var statearr_52015_54253 = state_51928__$1;
(statearr_52015_54253[(2)] = inst_51787);

(statearr_52015_54253[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (22))){
var inst_51814 = (state_51928[(8)]);
var inst_51820 = cljs.core.async.close_BANG_(inst_51814);
var state_51928__$1 = state_51928;
var statearr_52021_54254 = state_51928__$1;
(statearr_52021_54254[(2)] = inst_51820);

(statearr_52021_54254[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (36))){
var inst_51875 = (state_51928[(23)]);
var inst_51880 = cljs.core.chunk_first(inst_51875);
var inst_51882 = cljs.core.chunk_rest(inst_51875);
var inst_51884 = cljs.core.count(inst_51880);
var inst_51852 = inst_51882;
var inst_51853 = inst_51880;
var inst_51854 = inst_51884;
var inst_51855 = (0);
var state_51928__$1 = (function (){var statearr_52029 = state_51928;
(statearr_52029[(19)] = inst_51852);

(statearr_52029[(9)] = inst_51855);

(statearr_52029[(11)] = inst_51853);

(statearr_52029[(20)] = inst_51854);

return statearr_52029;
})();
var statearr_52030_54257 = state_51928__$1;
(statearr_52030_54257[(2)] = null);

(statearr_52030_54257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (41))){
var inst_51875 = (state_51928[(23)]);
var inst_51899 = (state_51928[(2)]);
var inst_51900 = cljs.core.next(inst_51875);
var inst_51852 = inst_51900;
var inst_51853 = null;
var inst_51854 = (0);
var inst_51855 = (0);
var state_51928__$1 = (function (){var statearr_52031 = state_51928;
(statearr_52031[(19)] = inst_51852);

(statearr_52031[(9)] = inst_51855);

(statearr_52031[(25)] = inst_51899);

(statearr_52031[(11)] = inst_51853);

(statearr_52031[(20)] = inst_51854);

return statearr_52031;
})();
var statearr_52032_54264 = state_51928__$1;
(statearr_52032_54264[(2)] = null);

(statearr_52032_54264[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (43))){
var state_51928__$1 = state_51928;
var statearr_52033_54265 = state_51928__$1;
(statearr_52033_54265[(2)] = null);

(statearr_52033_54265[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (29))){
var inst_51909 = (state_51928[(2)]);
var state_51928__$1 = state_51928;
var statearr_52038_54267 = state_51928__$1;
(statearr_52038_54267[(2)] = inst_51909);

(statearr_52038_54267[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (44))){
var inst_51919 = (state_51928[(2)]);
var state_51928__$1 = (function (){var statearr_52039 = state_51928;
(statearr_52039[(26)] = inst_51919);

return statearr_52039;
})();
var statearr_52040_54268 = state_51928__$1;
(statearr_52040_54268[(2)] = null);

(statearr_52040_54268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (6))){
var inst_51843 = (state_51928[(27)]);
var inst_51842 = cljs.core.deref(cs);
var inst_51843__$1 = cljs.core.keys(inst_51842);
var inst_51845 = cljs.core.count(inst_51843__$1);
var inst_51846 = cljs.core.reset_BANG_(dctr,inst_51845);
var inst_51851 = cljs.core.seq(inst_51843__$1);
var inst_51852 = inst_51851;
var inst_51853 = null;
var inst_51854 = (0);
var inst_51855 = (0);
var state_51928__$1 = (function (){var statearr_52042 = state_51928;
(statearr_52042[(19)] = inst_51852);

(statearr_52042[(9)] = inst_51855);

(statearr_52042[(11)] = inst_51853);

(statearr_52042[(27)] = inst_51843__$1);

(statearr_52042[(20)] = inst_51854);

(statearr_52042[(28)] = inst_51846);

return statearr_52042;
})();
var statearr_52044_54271 = state_51928__$1;
(statearr_52044_54271[(2)] = null);

(statearr_52044_54271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (28))){
var inst_51852 = (state_51928[(19)]);
var inst_51875 = (state_51928[(23)]);
var inst_51875__$1 = cljs.core.seq(inst_51852);
var state_51928__$1 = (function (){var statearr_52045 = state_51928;
(statearr_52045[(23)] = inst_51875__$1);

return statearr_52045;
})();
if(inst_51875__$1){
var statearr_52046_54274 = state_51928__$1;
(statearr_52046_54274[(1)] = (33));

} else {
var statearr_52048_54275 = state_51928__$1;
(statearr_52048_54275[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (25))){
var inst_51855 = (state_51928[(9)]);
var inst_51854 = (state_51928[(20)]);
var inst_51857 = (inst_51855 < inst_51854);
var inst_51858 = inst_51857;
var state_51928__$1 = state_51928;
if(cljs.core.truth_(inst_51858)){
var statearr_52052_54276 = state_51928__$1;
(statearr_52052_54276[(1)] = (27));

} else {
var statearr_52053_54277 = state_51928__$1;
(statearr_52053_54277[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (34))){
var state_51928__$1 = state_51928;
var statearr_52054_54281 = state_51928__$1;
(statearr_52054_54281[(2)] = null);

(statearr_52054_54281[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (17))){
var state_51928__$1 = state_51928;
var statearr_52055_54282 = state_51928__$1;
(statearr_52055_54282[(2)] = null);

(statearr_52055_54282[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (3))){
var inst_51924 = (state_51928[(2)]);
var state_51928__$1 = state_51928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51928__$1,inst_51924);
} else {
if((state_val_51929 === (12))){
var inst_51837 = (state_51928[(2)]);
var state_51928__$1 = state_51928;
var statearr_52059_54283 = state_51928__$1;
(statearr_52059_54283[(2)] = inst_51837);

(statearr_52059_54283[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (2))){
var state_51928__$1 = state_51928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51928__$1,(4),ch);
} else {
if((state_val_51929 === (23))){
var state_51928__$1 = state_51928;
var statearr_52060_54285 = state_51928__$1;
(statearr_52060_54285[(2)] = null);

(statearr_52060_54285[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (35))){
var inst_51907 = (state_51928[(2)]);
var state_51928__$1 = state_51928;
var statearr_52062_54287 = state_51928__$1;
(statearr_52062_54287[(2)] = inst_51907);

(statearr_52062_54287[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (19))){
var inst_51798 = (state_51928[(7)]);
var inst_51803 = cljs.core.chunk_first(inst_51798);
var inst_51804 = cljs.core.chunk_rest(inst_51798);
var inst_51805 = cljs.core.count(inst_51803);
var inst_51769 = inst_51804;
var inst_51770 = inst_51803;
var inst_51771 = inst_51805;
var inst_51772 = (0);
var state_51928__$1 = (function (){var statearr_52063 = state_51928;
(statearr_52063[(14)] = inst_51771);

(statearr_52063[(15)] = inst_51769);

(statearr_52063[(16)] = inst_51770);

(statearr_52063[(17)] = inst_51772);

return statearr_52063;
})();
var statearr_52064_54292 = state_51928__$1;
(statearr_52064_54292[(2)] = null);

(statearr_52064_54292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (11))){
var inst_51769 = (state_51928[(15)]);
var inst_51798 = (state_51928[(7)]);
var inst_51798__$1 = cljs.core.seq(inst_51769);
var state_51928__$1 = (function (){var statearr_52066 = state_51928;
(statearr_52066[(7)] = inst_51798__$1);

return statearr_52066;
})();
if(inst_51798__$1){
var statearr_52068_54296 = state_51928__$1;
(statearr_52068_54296[(1)] = (16));

} else {
var statearr_52069_54297 = state_51928__$1;
(statearr_52069_54297[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (9))){
var inst_51839 = (state_51928[(2)]);
var state_51928__$1 = state_51928;
var statearr_52070_54298 = state_51928__$1;
(statearr_52070_54298[(2)] = inst_51839);

(statearr_52070_54298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (5))){
var inst_51767 = cljs.core.deref(cs);
var inst_51768 = cljs.core.seq(inst_51767);
var inst_51769 = inst_51768;
var inst_51770 = null;
var inst_51771 = (0);
var inst_51772 = (0);
var state_51928__$1 = (function (){var statearr_52071 = state_51928;
(statearr_52071[(14)] = inst_51771);

(statearr_52071[(15)] = inst_51769);

(statearr_52071[(16)] = inst_51770);

(statearr_52071[(17)] = inst_51772);

return statearr_52071;
})();
var statearr_52072_54305 = state_51928__$1;
(statearr_52072_54305[(2)] = null);

(statearr_52072_54305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (14))){
var state_51928__$1 = state_51928;
var statearr_52074_54307 = state_51928__$1;
(statearr_52074_54307[(2)] = null);

(statearr_52074_54307[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (45))){
var inst_51916 = (state_51928[(2)]);
var state_51928__$1 = state_51928;
var statearr_52075_54308 = state_51928__$1;
(statearr_52075_54308[(2)] = inst_51916);

(statearr_52075_54308[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (26))){
var inst_51843 = (state_51928[(27)]);
var inst_51911 = (state_51928[(2)]);
var inst_51912 = cljs.core.seq(inst_51843);
var state_51928__$1 = (function (){var statearr_52077 = state_51928;
(statearr_52077[(29)] = inst_51911);

return statearr_52077;
})();
if(inst_51912){
var statearr_52078_54310 = state_51928__$1;
(statearr_52078_54310[(1)] = (42));

} else {
var statearr_52080_54313 = state_51928__$1;
(statearr_52080_54313[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (16))){
var inst_51798 = (state_51928[(7)]);
var inst_51801 = cljs.core.chunked_seq_QMARK_(inst_51798);
var state_51928__$1 = state_51928;
if(inst_51801){
var statearr_52081_54314 = state_51928__$1;
(statearr_52081_54314[(1)] = (19));

} else {
var statearr_52082_54315 = state_51928__$1;
(statearr_52082_54315[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (38))){
var inst_51903 = (state_51928[(2)]);
var state_51928__$1 = state_51928;
var statearr_52085_54317 = state_51928__$1;
(statearr_52085_54317[(2)] = inst_51903);

(statearr_52085_54317[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (30))){
var state_51928__$1 = state_51928;
var statearr_52088_54320 = state_51928__$1;
(statearr_52088_54320[(2)] = null);

(statearr_52088_54320[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (10))){
var inst_51770 = (state_51928[(16)]);
var inst_51772 = (state_51928[(17)]);
var inst_51782 = cljs.core._nth(inst_51770,inst_51772);
var inst_51783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51782,(0),null);
var inst_51784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51782,(1),null);
var state_51928__$1 = (function (){var statearr_52089 = state_51928;
(statearr_52089[(24)] = inst_51783);

return statearr_52089;
})();
if(cljs.core.truth_(inst_51784)){
var statearr_52090_54324 = state_51928__$1;
(statearr_52090_54324[(1)] = (13));

} else {
var statearr_52091_54326 = state_51928__$1;
(statearr_52091_54326[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (18))){
var inst_51835 = (state_51928[(2)]);
var state_51928__$1 = state_51928;
var statearr_52093_54328 = state_51928__$1;
(statearr_52093_54328[(2)] = inst_51835);

(statearr_52093_54328[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (42))){
var state_51928__$1 = state_51928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51928__$1,(45),dchan);
} else {
if((state_val_51929 === (37))){
var inst_51875 = (state_51928[(23)]);
var inst_51888 = (state_51928[(22)]);
var inst_51758 = (state_51928[(12)]);
var inst_51888__$1 = cljs.core.first(inst_51875);
var inst_51891 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51888__$1,inst_51758,done);
var state_51928__$1 = (function (){var statearr_52094 = state_51928;
(statearr_52094[(22)] = inst_51888__$1);

return statearr_52094;
})();
if(cljs.core.truth_(inst_51891)){
var statearr_52095_54330 = state_51928__$1;
(statearr_52095_54330[(1)] = (39));

} else {
var statearr_52099_54331 = state_51928__$1;
(statearr_52099_54331[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51929 === (8))){
var inst_51771 = (state_51928[(14)]);
var inst_51772 = (state_51928[(17)]);
var inst_51776 = (inst_51772 < inst_51771);
var inst_51777 = inst_51776;
var state_51928__$1 = state_51928;
if(cljs.core.truth_(inst_51777)){
var statearr_52101_54333 = state_51928__$1;
(statearr_52101_54333[(1)] = (10));

} else {
var statearr_52102_54335 = state_51928__$1;
(statearr_52102_54335[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__50436__auto__ = null;
var cljs$core$async$mult_$_state_machine__50436__auto____0 = (function (){
var statearr_52106 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52106[(0)] = cljs$core$async$mult_$_state_machine__50436__auto__);

(statearr_52106[(1)] = (1));

return statearr_52106;
});
var cljs$core$async$mult_$_state_machine__50436__auto____1 = (function (state_51928){
while(true){
var ret_value__50437__auto__ = (function (){try{while(true){
var result__50438__auto__ = switch__50435__auto__(state_51928);
if(cljs.core.keyword_identical_QMARK_(result__50438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50438__auto__;
}
break;
}
}catch (e52109){var ex__50439__auto__ = e52109;
var statearr_52111_54342 = state_51928;
(statearr_52111_54342[(2)] = ex__50439__auto__);


if(cljs.core.seq((state_51928[(4)]))){
var statearr_52112_54343 = state_51928;
(statearr_52112_54343[(1)] = cljs.core.first((state_51928[(4)])));

} else {
throw ex__50439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54345 = state_51928;
state_51928 = G__54345;
continue;
} else {
return ret_value__50437__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__50436__auto__ = function(state_51928){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__50436__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__50436__auto____1.call(this,state_51928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__50436__auto____0;
cljs$core$async$mult_$_state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__50436__auto____1;
return cljs$core$async$mult_$_state_machine__50436__auto__;
})()
})();
var state__50711__auto__ = (function (){var statearr_52118 = f__50710__auto__();
(statearr_52118[(6)] = c__50709__auto___54213);

return statearr_52118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50711__auto__);
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
var G__52124 = arguments.length;
switch (G__52124) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_54356 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_54356(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_54363 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_54363(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_54370 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_54370(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_54373 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_54373(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_54379 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_54379(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___54388 = arguments.length;
var i__4731__auto___54389 = (0);
while(true){
if((i__4731__auto___54389 < len__4730__auto___54388)){
args__4736__auto__.push((arguments[i__4731__auto___54389]));

var G__54390 = (i__4731__auto___54389 + (1));
i__4731__auto___54389 = G__54390;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__52188){
var map__52189 = p__52188;
var map__52189__$1 = (((((!((map__52189 == null))))?(((((map__52189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52189):map__52189);
var opts = map__52189__$1;
var statearr_52194_54393 = state;
(statearr_52194_54393[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_52196_54395 = state;
(statearr_52196_54395[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_52197_54396 = state;
(statearr_52197_54396[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq52183){
var G__52184 = cljs.core.first(seq52183);
var seq52183__$1 = cljs.core.next(seq52183);
var G__52185 = cljs.core.first(seq52183__$1);
var seq52183__$2 = cljs.core.next(seq52183__$1);
var G__52186 = cljs.core.first(seq52183__$2);
var seq52183__$3 = cljs.core.next(seq52183__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52184,G__52185,G__52186,seq52183__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52223 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52223 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta52224){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta52224 = meta52224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52225,meta52224__$1){
var self__ = this;
var _52225__$1 = this;
return (new cljs.core.async.t_cljs$core$async52223(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta52224__$1));
}));

(cljs.core.async.t_cljs$core$async52223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52225){
var self__ = this;
var _52225__$1 = this;
return self__.meta52224;
}));

(cljs.core.async.t_cljs$core$async52223.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52223.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async52223.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52223.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52223.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52223.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52223.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52223.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async52223.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta52224","meta52224",896822970,null)], null);
}));

(cljs.core.async.t_cljs$core$async52223.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52223");

(cljs.core.async.t_cljs$core$async52223.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async52223");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52223.
 */
cljs.core.async.__GT_t_cljs$core$async52223 = (function cljs$core$async$mix_$___GT_t_cljs$core$async52223(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52224){
return (new cljs.core.async.t_cljs$core$async52223(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52224));
});

}

return (new cljs.core.async.t_cljs$core$async52223(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50709__auto___54414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50710__auto__ = (function (){var switch__50435__auto__ = (function (state_52415){
var state_val_52417 = (state_52415[(1)]);
if((state_val_52417 === (7))){
var inst_52266 = (state_52415[(2)]);
var state_52415__$1 = state_52415;
var statearr_52426_54416 = state_52415__$1;
(statearr_52426_54416[(2)] = inst_52266);

(statearr_52426_54416[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (20))){
var inst_52278 = (state_52415[(7)]);
var state_52415__$1 = state_52415;
var statearr_52429_54417 = state_52415__$1;
(statearr_52429_54417[(2)] = inst_52278);

(statearr_52429_54417[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (27))){
var state_52415__$1 = state_52415;
var statearr_52431_54418 = state_52415__$1;
(statearr_52431_54418[(2)] = null);

(statearr_52431_54418[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (1))){
var inst_52252 = (state_52415[(8)]);
var inst_52252__$1 = calc_state();
var inst_52254 = (inst_52252__$1 == null);
var inst_52255 = cljs.core.not(inst_52254);
var state_52415__$1 = (function (){var statearr_52445 = state_52415;
(statearr_52445[(8)] = inst_52252__$1);

return statearr_52445;
})();
if(inst_52255){
var statearr_52448_54420 = state_52415__$1;
(statearr_52448_54420[(1)] = (2));

} else {
var statearr_52454_54421 = state_52415__$1;
(statearr_52454_54421[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (24))){
var inst_52324 = (state_52415[(9)]);
var inst_52371 = (state_52415[(10)]);
var inst_52334 = (state_52415[(11)]);
var inst_52371__$1 = (inst_52324.cljs$core$IFn$_invoke$arity$1 ? inst_52324.cljs$core$IFn$_invoke$arity$1(inst_52334) : inst_52324.call(null,inst_52334));
var state_52415__$1 = (function (){var statearr_52467 = state_52415;
(statearr_52467[(10)] = inst_52371__$1);

return statearr_52467;
})();
if(cljs.core.truth_(inst_52371__$1)){
var statearr_52468_54426 = state_52415__$1;
(statearr_52468_54426[(1)] = (29));

} else {
var statearr_52469_54428 = state_52415__$1;
(statearr_52469_54428[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (4))){
var inst_52269 = (state_52415[(2)]);
var state_52415__$1 = state_52415;
if(cljs.core.truth_(inst_52269)){
var statearr_52475_54429 = state_52415__$1;
(statearr_52475_54429[(1)] = (8));

} else {
var statearr_52478_54430 = state_52415__$1;
(statearr_52478_54430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (15))){
var inst_52314 = (state_52415[(2)]);
var state_52415__$1 = state_52415;
if(cljs.core.truth_(inst_52314)){
var statearr_52479_54431 = state_52415__$1;
(statearr_52479_54431[(1)] = (19));

} else {
var statearr_52481_54432 = state_52415__$1;
(statearr_52481_54432[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (21))){
var inst_52322 = (state_52415[(12)]);
var inst_52322__$1 = (state_52415[(2)]);
var inst_52324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52322__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52322__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52322__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_52415__$1 = (function (){var statearr_52487 = state_52415;
(statearr_52487[(9)] = inst_52324);

(statearr_52487[(12)] = inst_52322__$1);

(statearr_52487[(13)] = inst_52325);

return statearr_52487;
})();
return cljs.core.async.ioc_alts_BANG_(state_52415__$1,(22),inst_52326);
} else {
if((state_val_52417 === (31))){
var inst_52391 = (state_52415[(2)]);
var state_52415__$1 = state_52415;
if(cljs.core.truth_(inst_52391)){
var statearr_52492_54438 = state_52415__$1;
(statearr_52492_54438[(1)] = (32));

} else {
var statearr_52493_54439 = state_52415__$1;
(statearr_52493_54439[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (32))){
var inst_52333 = (state_52415[(14)]);
var state_52415__$1 = state_52415;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52415__$1,(35),out,inst_52333);
} else {
if((state_val_52417 === (33))){
var inst_52322 = (state_52415[(12)]);
var inst_52278 = inst_52322;
var state_52415__$1 = (function (){var statearr_52495 = state_52415;
(statearr_52495[(7)] = inst_52278);

return statearr_52495;
})();
var statearr_52496_54440 = state_52415__$1;
(statearr_52496_54440[(2)] = null);

(statearr_52496_54440[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (13))){
var inst_52278 = (state_52415[(7)]);
var inst_52300 = inst_52278.cljs$lang$protocol_mask$partition0$;
var inst_52301 = (inst_52300 & (64));
var inst_52303 = inst_52278.cljs$core$ISeq$;
var inst_52304 = (cljs.core.PROTOCOL_SENTINEL === inst_52303);
var inst_52305 = ((inst_52301) || (inst_52304));
var state_52415__$1 = state_52415;
if(cljs.core.truth_(inst_52305)){
var statearr_52500_54441 = state_52415__$1;
(statearr_52500_54441[(1)] = (16));

} else {
var statearr_52503_54442 = state_52415__$1;
(statearr_52503_54442[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (22))){
var inst_52334 = (state_52415[(11)]);
var inst_52333 = (state_52415[(14)]);
var inst_52332 = (state_52415[(2)]);
var inst_52333__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52332,(0),null);
var inst_52334__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52332,(1),null);
var inst_52338 = (inst_52333__$1 == null);
var inst_52339 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52334__$1,change);
var inst_52340 = ((inst_52338) || (inst_52339));
var state_52415__$1 = (function (){var statearr_52505 = state_52415;
(statearr_52505[(11)] = inst_52334__$1);

(statearr_52505[(14)] = inst_52333__$1);

return statearr_52505;
})();
if(cljs.core.truth_(inst_52340)){
var statearr_52506_54446 = state_52415__$1;
(statearr_52506_54446[(1)] = (23));

} else {
var statearr_52508_54447 = state_52415__$1;
(statearr_52508_54447[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (36))){
var inst_52322 = (state_52415[(12)]);
var inst_52278 = inst_52322;
var state_52415__$1 = (function (){var statearr_52511 = state_52415;
(statearr_52511[(7)] = inst_52278);

return statearr_52511;
})();
var statearr_52514_54451 = state_52415__$1;
(statearr_52514_54451[(2)] = null);

(statearr_52514_54451[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (29))){
var inst_52371 = (state_52415[(10)]);
var state_52415__$1 = state_52415;
var statearr_52516_54455 = state_52415__$1;
(statearr_52516_54455[(2)] = inst_52371);

(statearr_52516_54455[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (6))){
var state_52415__$1 = state_52415;
var statearr_52517_54456 = state_52415__$1;
(statearr_52517_54456[(2)] = false);

(statearr_52517_54456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (28))){
var inst_52348 = (state_52415[(2)]);
var inst_52354 = calc_state();
var inst_52278 = inst_52354;
var state_52415__$1 = (function (){var statearr_52520 = state_52415;
(statearr_52520[(7)] = inst_52278);

(statearr_52520[(15)] = inst_52348);

return statearr_52520;
})();
var statearr_52522_54457 = state_52415__$1;
(statearr_52522_54457[(2)] = null);

(statearr_52522_54457[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (25))){
var inst_52410 = (state_52415[(2)]);
var state_52415__$1 = state_52415;
var statearr_52523_54458 = state_52415__$1;
(statearr_52523_54458[(2)] = inst_52410);

(statearr_52523_54458[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (34))){
var inst_52408 = (state_52415[(2)]);
var state_52415__$1 = state_52415;
var statearr_52526_54459 = state_52415__$1;
(statearr_52526_54459[(2)] = inst_52408);

(statearr_52526_54459[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (17))){
var state_52415__$1 = state_52415;
var statearr_52529_54461 = state_52415__$1;
(statearr_52529_54461[(2)] = false);

(statearr_52529_54461[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (3))){
var state_52415__$1 = state_52415;
var statearr_52533_54465 = state_52415__$1;
(statearr_52533_54465[(2)] = false);

(statearr_52533_54465[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (12))){
var inst_52412 = (state_52415[(2)]);
var state_52415__$1 = state_52415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52415__$1,inst_52412);
} else {
if((state_val_52417 === (2))){
var inst_52252 = (state_52415[(8)]);
var inst_52258 = inst_52252.cljs$lang$protocol_mask$partition0$;
var inst_52259 = (inst_52258 & (64));
var inst_52260 = inst_52252.cljs$core$ISeq$;
var inst_52261 = (cljs.core.PROTOCOL_SENTINEL === inst_52260);
var inst_52262 = ((inst_52259) || (inst_52261));
var state_52415__$1 = state_52415;
if(cljs.core.truth_(inst_52262)){
var statearr_52539_54468 = state_52415__$1;
(statearr_52539_54468[(1)] = (5));

} else {
var statearr_52540_54469 = state_52415__$1;
(statearr_52540_54469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (23))){
var inst_52333 = (state_52415[(14)]);
var inst_52343 = (inst_52333 == null);
var state_52415__$1 = state_52415;
if(cljs.core.truth_(inst_52343)){
var statearr_52543_54470 = state_52415__$1;
(statearr_52543_54470[(1)] = (26));

} else {
var statearr_52546_54471 = state_52415__$1;
(statearr_52546_54471[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (35))){
var inst_52396 = (state_52415[(2)]);
var state_52415__$1 = state_52415;
if(cljs.core.truth_(inst_52396)){
var statearr_52547_54472 = state_52415__$1;
(statearr_52547_54472[(1)] = (36));

} else {
var statearr_52548_54473 = state_52415__$1;
(statearr_52548_54473[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (19))){
var inst_52278 = (state_52415[(7)]);
var inst_52318 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52278);
var state_52415__$1 = state_52415;
var statearr_52550_54477 = state_52415__$1;
(statearr_52550_54477[(2)] = inst_52318);

(statearr_52550_54477[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (11))){
var inst_52278 = (state_52415[(7)]);
var inst_52291 = (inst_52278 == null);
var inst_52293 = cljs.core.not(inst_52291);
var state_52415__$1 = state_52415;
if(inst_52293){
var statearr_52552_54479 = state_52415__$1;
(statearr_52552_54479[(1)] = (13));

} else {
var statearr_52554_54480 = state_52415__$1;
(statearr_52554_54480[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (9))){
var inst_52252 = (state_52415[(8)]);
var state_52415__$1 = state_52415;
var statearr_52555_54482 = state_52415__$1;
(statearr_52555_54482[(2)] = inst_52252);

(statearr_52555_54482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (5))){
var state_52415__$1 = state_52415;
var statearr_52558_54483 = state_52415__$1;
(statearr_52558_54483[(2)] = true);

(statearr_52558_54483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (14))){
var state_52415__$1 = state_52415;
var statearr_52560_54484 = state_52415__$1;
(statearr_52560_54484[(2)] = false);

(statearr_52560_54484[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (26))){
var inst_52334 = (state_52415[(11)]);
var inst_52345 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_52334);
var state_52415__$1 = state_52415;
var statearr_52564_54485 = state_52415__$1;
(statearr_52564_54485[(2)] = inst_52345);

(statearr_52564_54485[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (16))){
var state_52415__$1 = state_52415;
var statearr_52565_54487 = state_52415__$1;
(statearr_52565_54487[(2)] = true);

(statearr_52565_54487[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (38))){
var inst_52402 = (state_52415[(2)]);
var state_52415__$1 = state_52415;
var statearr_52570_54488 = state_52415__$1;
(statearr_52570_54488[(2)] = inst_52402);

(statearr_52570_54488[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (30))){
var inst_52324 = (state_52415[(9)]);
var inst_52325 = (state_52415[(13)]);
var inst_52334 = (state_52415[(11)]);
var inst_52382 = cljs.core.empty_QMARK_(inst_52324);
var inst_52387 = (inst_52325.cljs$core$IFn$_invoke$arity$1 ? inst_52325.cljs$core$IFn$_invoke$arity$1(inst_52334) : inst_52325.call(null,inst_52334));
var inst_52388 = cljs.core.not(inst_52387);
var inst_52389 = ((inst_52382) && (inst_52388));
var state_52415__$1 = state_52415;
var statearr_52574_54490 = state_52415__$1;
(statearr_52574_54490[(2)] = inst_52389);

(statearr_52574_54490[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (10))){
var inst_52252 = (state_52415[(8)]);
var inst_52274 = (state_52415[(2)]);
var inst_52275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52274,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52274,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52274,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_52278 = inst_52252;
var state_52415__$1 = (function (){var statearr_52578 = state_52415;
(statearr_52578[(7)] = inst_52278);

(statearr_52578[(16)] = inst_52276);

(statearr_52578[(17)] = inst_52277);

(statearr_52578[(18)] = inst_52275);

return statearr_52578;
})();
var statearr_52579_54494 = state_52415__$1;
(statearr_52579_54494[(2)] = null);

(statearr_52579_54494[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (18))){
var inst_52311 = (state_52415[(2)]);
var state_52415__$1 = state_52415;
var statearr_52580_54496 = state_52415__$1;
(statearr_52580_54496[(2)] = inst_52311);

(statearr_52580_54496[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (37))){
var state_52415__$1 = state_52415;
var statearr_52582_54497 = state_52415__$1;
(statearr_52582_54497[(2)] = null);

(statearr_52582_54497[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52417 === (8))){
var inst_52252 = (state_52415[(8)]);
var inst_52271 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52252);
var state_52415__$1 = state_52415;
var statearr_52585_54498 = state_52415__$1;
(statearr_52585_54498[(2)] = inst_52271);

(statearr_52585_54498[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__50436__auto__ = null;
var cljs$core$async$mix_$_state_machine__50436__auto____0 = (function (){
var statearr_52590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52590[(0)] = cljs$core$async$mix_$_state_machine__50436__auto__);

(statearr_52590[(1)] = (1));

return statearr_52590;
});
var cljs$core$async$mix_$_state_machine__50436__auto____1 = (function (state_52415){
while(true){
var ret_value__50437__auto__ = (function (){try{while(true){
var result__50438__auto__ = switch__50435__auto__(state_52415);
if(cljs.core.keyword_identical_QMARK_(result__50438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50438__auto__;
}
break;
}
}catch (e52591){var ex__50439__auto__ = e52591;
var statearr_52593_54500 = state_52415;
(statearr_52593_54500[(2)] = ex__50439__auto__);


if(cljs.core.seq((state_52415[(4)]))){
var statearr_52596_54501 = state_52415;
(statearr_52596_54501[(1)] = cljs.core.first((state_52415[(4)])));

} else {
throw ex__50439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54502 = state_52415;
state_52415 = G__54502;
continue;
} else {
return ret_value__50437__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__50436__auto__ = function(state_52415){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__50436__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__50436__auto____1.call(this,state_52415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__50436__auto____0;
cljs$core$async$mix_$_state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__50436__auto____1;
return cljs$core$async$mix_$_state_machine__50436__auto__;
})()
})();
var state__50711__auto__ = (function (){var statearr_52599 = f__50710__auto__();
(statearr_52599[(6)] = c__50709__auto___54414);

return statearr_52599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50711__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_54505 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_54505(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_54511 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_54511(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_54520 = (function() {
var G__54521 = null;
var G__54521__1 = (function (p){
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
var G__54521__2 = (function (p,v){
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
G__54521 = function(p,v){
switch(arguments.length){
case 1:
return G__54521__1.call(this,p);
case 2:
return G__54521__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__54521.cljs$core$IFn$_invoke$arity$1 = G__54521__1;
G__54521.cljs$core$IFn$_invoke$arity$2 = G__54521__2;
return G__54521;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__52640 = arguments.length;
switch (G__52640) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_54520(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_54520(p,v);
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
var G__52661 = arguments.length;
switch (G__52661) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__52656_SHARP_){
if(cljs.core.truth_((p1__52656_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__52656_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__52656_SHARP_.call(null,topic)))){
return p1__52656_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__52656_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52668 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52668 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta52669){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta52669 = meta52669;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52670,meta52669__$1){
var self__ = this;
var _52670__$1 = this;
return (new cljs.core.async.t_cljs$core$async52668(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta52669__$1));
}));

(cljs.core.async.t_cljs$core$async52668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52670){
var self__ = this;
var _52670__$1 = this;
return self__.meta52669;
}));

(cljs.core.async.t_cljs$core$async52668.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52668.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async52668.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52668.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async52668.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async52668.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async52668.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async52668.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta52669","meta52669",1899768808,null)], null);
}));

(cljs.core.async.t_cljs$core$async52668.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52668.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52668");

(cljs.core.async.t_cljs$core$async52668.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async52668");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52668.
 */
cljs.core.async.__GT_t_cljs$core$async52668 = (function cljs$core$async$__GT_t_cljs$core$async52668(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52669){
return (new cljs.core.async.t_cljs$core$async52668(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52669));
});

}

return (new cljs.core.async.t_cljs$core$async52668(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50709__auto___54538 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50710__auto__ = (function (){var switch__50435__auto__ = (function (state_52784){
var state_val_52785 = (state_52784[(1)]);
if((state_val_52785 === (7))){
var inst_52780 = (state_52784[(2)]);
var state_52784__$1 = state_52784;
var statearr_52788_54542 = state_52784__$1;
(statearr_52788_54542[(2)] = inst_52780);

(statearr_52788_54542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52785 === (20))){
var state_52784__$1 = state_52784;
var statearr_52790_54543 = state_52784__$1;
(statearr_52790_54543[(2)] = null);

(statearr_52790_54543[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52785 === (1))){
var state_52784__$1 = state_52784;
var statearr_52796_54544 = state_52784__$1;
(statearr_52796_54544[(2)] = null);

(statearr_52796_54544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52785 === (24))){
var inst_52763 = (state_52784[(7)]);
var inst_52772 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_52763);
var state_52784__$1 = state_52784;
var statearr_52801_54545 = state_52784__$1;
(statearr_52801_54545[(2)] = inst_52772);

(statearr_52801_54545[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52785 === (4))){
var inst_52697 = (state_52784[(8)]);
var inst_52697__$1 = (state_52784[(2)]);
var inst_52699 = (inst_52697__$1 == null);
var state_52784__$1 = (function (){var statearr_52804 = state_52784;
(statearr_52804[(8)] = inst_52697__$1);

return statearr_52804;
})();
if(cljs.core.truth_(inst_52699)){
var statearr_52805_54547 = state_52784__$1;
(statearr_52805_54547[(1)] = (5));

} else {
var statearr_52806_54548 = state_52784__$1;
(statearr_52806_54548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52785 === (15))){
var inst_52757 = (state_52784[(2)]);
var state_52784__$1 = state_52784;
var statearr_52808_54549 = state_52784__$1;
(statearr_52808_54549[(2)] = inst_52757);

(statearr_52808_54549[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52785 === (21))){
var inst_52777 = (state_52784[(2)]);
var state_52784__$1 = (function (){var statearr_52809 = state_52784;
(statearr_52809[(9)] = inst_52777);

return statearr_52809;
})();
var statearr_52810_54551 = state_52784__$1;
(statearr_52810_54551[(2)] = null);

(statearr_52810_54551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52785 === (13))){
var inst_52729 = (state_52784[(10)]);
var inst_52737 = cljs.core.chunked_seq_QMARK_(inst_52729);
var state_52784__$1 = state_52784;
if(inst_52737){
var statearr_52812_54553 = state_52784__$1;
(statearr_52812_54553[(1)] = (16));

} else {
var statearr_52814_54554 = state_52784__$1;
(statearr_52814_54554[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52785 === (22))){
var inst_52769 = (state_52784[(2)]);
var state_52784__$1 = state_52784;
if(cljs.core.truth_(inst_52769)){
var statearr_52818_54555 = state_52784__$1;
(statearr_52818_54555[(1)] = (23));

} else {
var statearr_52819_54556 = state_52784__$1;
(statearr_52819_54556[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52785 === (6))){
var inst_52697 = (state_52784[(8)]);
var inst_52763 = (state_52784[(7)]);
var inst_52765 = (state_52784[(11)]);
var inst_52763__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_52697) : topic_fn.call(null,inst_52697));
var inst_52764 = cljs.core.deref(mults);
var inst_52765__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52764,inst_52763__$1);
var state_52784__$1 = (function (){var statearr_52824 = state_52784;
(statearr_52824[(7)] = inst_52763__$1);

(statearr_52824[(11)] = inst_52765__$1);

return statearr_52824;
})();
if(cljs.core.truth_(inst_52765__$1)){
var statearr_52827_54557 = state_52784__$1;
(statearr_52827_54557[(1)] = (19));

} else {
var statearr_52828_54558 = state_52784__$1;
(statearr_52828_54558[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52785 === (25))){
var inst_52774 = (state_52784[(2)]);
var state_52784__$1 = state_52784;
var statearr_52830_54559 = state_52784__$1;
(statearr_52830_54559[(2)] = inst_52774);

(statearr_52830_54559[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52785 === (17))){
var inst_52729 = (state_52784[(10)]);
var inst_52745 = cljs.core.first(inst_52729);
var inst_52749 = cljs.core.async.muxch_STAR_(inst_52745);
var inst_52750 = cljs.core.async.close_BANG_(inst_52749);
var inst_52751 = cljs.core.next(inst_52729);
var inst_52709 = inst_52751;
var inst_52710 = null;
var inst_52711 = (0);
var inst_52712 = (0);
var state_52784__$1 = (function (){var statearr_52836 = state_52784;
(statearr_52836[(12)] = inst_52709);

(statearr_52836[(13)] = inst_52750);

(statearr_52836[(14)] = inst_52712);

(statearr_52836[(15)] = inst_52711);

(statearr_52836[(16)] = inst_52710);

return statearr_52836;
})();
var statearr_52838_54563 = state_52784__$1;
(statearr_52838_54563[(2)] = null);

(statearr_52838_54563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52785 === (3))){
var inst_52782 = (state_52784[(2)]);
var state_52784__$1 = state_52784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52784__$1,inst_52782);
} else {
if((state_val_52785 === (12))){
var inst_52759 = (state_52784[(2)]);
var state_52784__$1 = state_52784;
var statearr_52845_54564 = state_52784__$1;
(statearr_52845_54564[(2)] = inst_52759);

(statearr_52845_54564[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52785 === (2))){
var state_52784__$1 = state_52784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52784__$1,(4),ch);
} else {
if((state_val_52785 === (23))){
var state_52784__$1 = state_52784;
var statearr_52848_54565 = state_52784__$1;
(statearr_52848_54565[(2)] = null);

(statearr_52848_54565[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52785 === (19))){
var inst_52697 = (state_52784[(8)]);
var inst_52765 = (state_52784[(11)]);
var inst_52767 = cljs.core.async.muxch_STAR_(inst_52765);
var state_52784__$1 = state_52784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52784__$1,(22),inst_52767,inst_52697);
} else {
if((state_val_52785 === (11))){
var inst_52709 = (state_52784[(12)]);
var inst_52729 = (state_52784[(10)]);
var inst_52729__$1 = cljs.core.seq(inst_52709);
var state_52784__$1 = (function (){var statearr_52852 = state_52784;
(statearr_52852[(10)] = inst_52729__$1);

return statearr_52852;
})();
if(inst_52729__$1){
var statearr_52853_54572 = state_52784__$1;
(statearr_52853_54572[(1)] = (13));

} else {
var statearr_52854_54575 = state_52784__$1;
(statearr_52854_54575[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52785 === (9))){
var inst_52761 = (state_52784[(2)]);
var state_52784__$1 = state_52784;
var statearr_52860_54576 = state_52784__$1;
(statearr_52860_54576[(2)] = inst_52761);

(statearr_52860_54576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52785 === (5))){
var inst_52706 = cljs.core.deref(mults);
var inst_52707 = cljs.core.vals(inst_52706);
var inst_52708 = cljs.core.seq(inst_52707);
var inst_52709 = inst_52708;
var inst_52710 = null;
var inst_52711 = (0);
var inst_52712 = (0);
var state_52784__$1 = (function (){var statearr_52861 = state_52784;
(statearr_52861[(12)] = inst_52709);

(statearr_52861[(14)] = inst_52712);

(statearr_52861[(15)] = inst_52711);

(statearr_52861[(16)] = inst_52710);

return statearr_52861;
})();
var statearr_52862_54577 = state_52784__$1;
(statearr_52862_54577[(2)] = null);

(statearr_52862_54577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52785 === (14))){
var state_52784__$1 = state_52784;
var statearr_52870_54579 = state_52784__$1;
(statearr_52870_54579[(2)] = null);

(statearr_52870_54579[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52785 === (16))){
var inst_52729 = (state_52784[(10)]);
var inst_52739 = cljs.core.chunk_first(inst_52729);
var inst_52741 = cljs.core.chunk_rest(inst_52729);
var inst_52742 = cljs.core.count(inst_52739);
var inst_52709 = inst_52741;
var inst_52710 = inst_52739;
var inst_52711 = inst_52742;
var inst_52712 = (0);
var state_52784__$1 = (function (){var statearr_52872 = state_52784;
(statearr_52872[(12)] = inst_52709);

(statearr_52872[(14)] = inst_52712);

(statearr_52872[(15)] = inst_52711);

(statearr_52872[(16)] = inst_52710);

return statearr_52872;
})();
var statearr_52876_54583 = state_52784__$1;
(statearr_52876_54583[(2)] = null);

(statearr_52876_54583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52785 === (10))){
var inst_52709 = (state_52784[(12)]);
var inst_52712 = (state_52784[(14)]);
var inst_52711 = (state_52784[(15)]);
var inst_52710 = (state_52784[(16)]);
var inst_52717 = cljs.core._nth(inst_52710,inst_52712);
var inst_52720 = cljs.core.async.muxch_STAR_(inst_52717);
var inst_52721 = cljs.core.async.close_BANG_(inst_52720);
var inst_52722 = (inst_52712 + (1));
var tmp52866 = inst_52709;
var tmp52867 = inst_52711;
var tmp52868 = inst_52710;
var inst_52709__$1 = tmp52866;
var inst_52710__$1 = tmp52868;
var inst_52711__$1 = tmp52867;
var inst_52712__$1 = inst_52722;
var state_52784__$1 = (function (){var statearr_52880 = state_52784;
(statearr_52880[(17)] = inst_52721);

(statearr_52880[(12)] = inst_52709__$1);

(statearr_52880[(14)] = inst_52712__$1);

(statearr_52880[(15)] = inst_52711__$1);

(statearr_52880[(16)] = inst_52710__$1);

return statearr_52880;
})();
var statearr_52883_54589 = state_52784__$1;
(statearr_52883_54589[(2)] = null);

(statearr_52883_54589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52785 === (18))){
var inst_52754 = (state_52784[(2)]);
var state_52784__$1 = state_52784;
var statearr_52886_54592 = state_52784__$1;
(statearr_52886_54592[(2)] = inst_52754);

(statearr_52886_54592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52785 === (8))){
var inst_52712 = (state_52784[(14)]);
var inst_52711 = (state_52784[(15)]);
var inst_52714 = (inst_52712 < inst_52711);
var inst_52715 = inst_52714;
var state_52784__$1 = state_52784;
if(cljs.core.truth_(inst_52715)){
var statearr_52887_54594 = state_52784__$1;
(statearr_52887_54594[(1)] = (10));

} else {
var statearr_52888_54595 = state_52784__$1;
(statearr_52888_54595[(1)] = (11));

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
var cljs$core$async$state_machine__50436__auto__ = null;
var cljs$core$async$state_machine__50436__auto____0 = (function (){
var statearr_52896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52896[(0)] = cljs$core$async$state_machine__50436__auto__);

(statearr_52896[(1)] = (1));

return statearr_52896;
});
var cljs$core$async$state_machine__50436__auto____1 = (function (state_52784){
while(true){
var ret_value__50437__auto__ = (function (){try{while(true){
var result__50438__auto__ = switch__50435__auto__(state_52784);
if(cljs.core.keyword_identical_QMARK_(result__50438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50438__auto__;
}
break;
}
}catch (e52897){var ex__50439__auto__ = e52897;
var statearr_52898_54597 = state_52784;
(statearr_52898_54597[(2)] = ex__50439__auto__);


if(cljs.core.seq((state_52784[(4)]))){
var statearr_52899_54600 = state_52784;
(statearr_52899_54600[(1)] = cljs.core.first((state_52784[(4)])));

} else {
throw ex__50439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54602 = state_52784;
state_52784 = G__54602;
continue;
} else {
return ret_value__50437__auto__;
}
break;
}
});
cljs$core$async$state_machine__50436__auto__ = function(state_52784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50436__auto____1.call(this,state_52784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50436__auto____0;
cljs$core$async$state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50436__auto____1;
return cljs$core$async$state_machine__50436__auto__;
})()
})();
var state__50711__auto__ = (function (){var statearr_52904 = f__50710__auto__();
(statearr_52904[(6)] = c__50709__auto___54538);

return statearr_52904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50711__auto__);
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
var G__52912 = arguments.length;
switch (G__52912) {
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
var G__52924 = arguments.length;
switch (G__52924) {
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
var G__52934 = arguments.length;
switch (G__52934) {
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
var c__50709__auto___54630 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50710__auto__ = (function (){var switch__50435__auto__ = (function (state_52999){
var state_val_53001 = (state_52999[(1)]);
if((state_val_53001 === (7))){
var state_52999__$1 = state_52999;
var statearr_53005_54631 = state_52999__$1;
(statearr_53005_54631[(2)] = null);

(statearr_53005_54631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53001 === (1))){
var state_52999__$1 = state_52999;
var statearr_53008_54635 = state_52999__$1;
(statearr_53008_54635[(2)] = null);

(statearr_53008_54635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53001 === (4))){
var inst_52949 = (state_52999[(7)]);
var inst_52950 = (state_52999[(8)]);
var inst_52952 = (inst_52950 < inst_52949);
var state_52999__$1 = state_52999;
if(cljs.core.truth_(inst_52952)){
var statearr_53009_54637 = state_52999__$1;
(statearr_53009_54637[(1)] = (6));

} else {
var statearr_53010_54638 = state_52999__$1;
(statearr_53010_54638[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53001 === (15))){
var inst_52983 = (state_52999[(9)]);
var inst_52988 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_52983);
var state_52999__$1 = state_52999;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52999__$1,(17),out,inst_52988);
} else {
if((state_val_53001 === (13))){
var inst_52983 = (state_52999[(9)]);
var inst_52983__$1 = (state_52999[(2)]);
var inst_52984 = cljs.core.some(cljs.core.nil_QMARK_,inst_52983__$1);
var state_52999__$1 = (function (){var statearr_53015 = state_52999;
(statearr_53015[(9)] = inst_52983__$1);

return statearr_53015;
})();
if(cljs.core.truth_(inst_52984)){
var statearr_53017_54639 = state_52999__$1;
(statearr_53017_54639[(1)] = (14));

} else {
var statearr_53019_54640 = state_52999__$1;
(statearr_53019_54640[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53001 === (6))){
var state_52999__$1 = state_52999;
var statearr_53022_54641 = state_52999__$1;
(statearr_53022_54641[(2)] = null);

(statearr_53022_54641[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53001 === (17))){
var inst_52990 = (state_52999[(2)]);
var state_52999__$1 = (function (){var statearr_53030 = state_52999;
(statearr_53030[(10)] = inst_52990);

return statearr_53030;
})();
var statearr_53033_54643 = state_52999__$1;
(statearr_53033_54643[(2)] = null);

(statearr_53033_54643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53001 === (3))){
var inst_52995 = (state_52999[(2)]);
var state_52999__$1 = state_52999;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52999__$1,inst_52995);
} else {
if((state_val_53001 === (12))){
var _ = (function (){var statearr_53034 = state_52999;
(statearr_53034[(4)] = cljs.core.rest((state_52999[(4)])));

return statearr_53034;
})();
var state_52999__$1 = state_52999;
var ex53027 = (state_52999__$1[(2)]);
var statearr_53039_54648 = state_52999__$1;
(statearr_53039_54648[(5)] = ex53027);


if((ex53027 instanceof Object)){
var statearr_53040_54649 = state_52999__$1;
(statearr_53040_54649[(1)] = (11));

(statearr_53040_54649[(5)] = null);

} else {
throw ex53027;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53001 === (2))){
var inst_52946 = cljs.core.reset_BANG_(dctr,cnt);
var inst_52949 = cnt;
var inst_52950 = (0);
var state_52999__$1 = (function (){var statearr_53045 = state_52999;
(statearr_53045[(7)] = inst_52949);

(statearr_53045[(8)] = inst_52950);

(statearr_53045[(11)] = inst_52946);

return statearr_53045;
})();
var statearr_53047_54659 = state_52999__$1;
(statearr_53047_54659[(2)] = null);

(statearr_53047_54659[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53001 === (11))){
var inst_52958 = (state_52999[(2)]);
var inst_52959 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_52999__$1 = (function (){var statearr_53048 = state_52999;
(statearr_53048[(12)] = inst_52958);

return statearr_53048;
})();
var statearr_53050_54661 = state_52999__$1;
(statearr_53050_54661[(2)] = inst_52959);

(statearr_53050_54661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53001 === (9))){
var inst_52950 = (state_52999[(8)]);
var _ = (function (){var statearr_53057 = state_52999;
(statearr_53057[(4)] = cljs.core.cons((12),(state_52999[(4)])));

return statearr_53057;
})();
var inst_52967 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_52950) : chs__$1.call(null,inst_52950));
var inst_52968 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_52950) : done.call(null,inst_52950));
var inst_52969 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_52967,inst_52968);
var ___$1 = (function (){var statearr_53058 = state_52999;
(statearr_53058[(4)] = cljs.core.rest((state_52999[(4)])));

return statearr_53058;
})();
var state_52999__$1 = state_52999;
var statearr_53059_54667 = state_52999__$1;
(statearr_53059_54667[(2)] = inst_52969);

(statearr_53059_54667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53001 === (5))){
var inst_52980 = (state_52999[(2)]);
var state_52999__$1 = (function (){var statearr_53060 = state_52999;
(statearr_53060[(13)] = inst_52980);

return statearr_53060;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52999__$1,(13),dchan);
} else {
if((state_val_53001 === (14))){
var inst_52986 = cljs.core.async.close_BANG_(out);
var state_52999__$1 = state_52999;
var statearr_53065_54671 = state_52999__$1;
(statearr_53065_54671[(2)] = inst_52986);

(statearr_53065_54671[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53001 === (16))){
var inst_52993 = (state_52999[(2)]);
var state_52999__$1 = state_52999;
var statearr_53068_54672 = state_52999__$1;
(statearr_53068_54672[(2)] = inst_52993);

(statearr_53068_54672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53001 === (10))){
var inst_52950 = (state_52999[(8)]);
var inst_52972 = (state_52999[(2)]);
var inst_52973 = (inst_52950 + (1));
var inst_52950__$1 = inst_52973;
var state_52999__$1 = (function (){var statearr_53071 = state_52999;
(statearr_53071[(8)] = inst_52950__$1);

(statearr_53071[(14)] = inst_52972);

return statearr_53071;
})();
var statearr_53072_54673 = state_52999__$1;
(statearr_53072_54673[(2)] = null);

(statearr_53072_54673[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53001 === (8))){
var inst_52978 = (state_52999[(2)]);
var state_52999__$1 = state_52999;
var statearr_53073_54674 = state_52999__$1;
(statearr_53073_54674[(2)] = inst_52978);

(statearr_53073_54674[(1)] = (5));


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
var cljs$core$async$state_machine__50436__auto__ = null;
var cljs$core$async$state_machine__50436__auto____0 = (function (){
var statearr_53075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53075[(0)] = cljs$core$async$state_machine__50436__auto__);

(statearr_53075[(1)] = (1));

return statearr_53075;
});
var cljs$core$async$state_machine__50436__auto____1 = (function (state_52999){
while(true){
var ret_value__50437__auto__ = (function (){try{while(true){
var result__50438__auto__ = switch__50435__auto__(state_52999);
if(cljs.core.keyword_identical_QMARK_(result__50438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50438__auto__;
}
break;
}
}catch (e53078){var ex__50439__auto__ = e53078;
var statearr_53079_54676 = state_52999;
(statearr_53079_54676[(2)] = ex__50439__auto__);


if(cljs.core.seq((state_52999[(4)]))){
var statearr_53081_54677 = state_52999;
(statearr_53081_54677[(1)] = cljs.core.first((state_52999[(4)])));

} else {
throw ex__50439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54678 = state_52999;
state_52999 = G__54678;
continue;
} else {
return ret_value__50437__auto__;
}
break;
}
});
cljs$core$async$state_machine__50436__auto__ = function(state_52999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50436__auto____1.call(this,state_52999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50436__auto____0;
cljs$core$async$state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50436__auto____1;
return cljs$core$async$state_machine__50436__auto__;
})()
})();
var state__50711__auto__ = (function (){var statearr_53084 = f__50710__auto__();
(statearr_53084[(6)] = c__50709__auto___54630);

return statearr_53084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50711__auto__);
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
var G__53088 = arguments.length;
switch (G__53088) {
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
var c__50709__auto___54681 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50710__auto__ = (function (){var switch__50435__auto__ = (function (state_53129){
var state_val_53130 = (state_53129[(1)]);
if((state_val_53130 === (7))){
var inst_53105 = (state_53129[(7)]);
var inst_53106 = (state_53129[(8)]);
var inst_53105__$1 = (state_53129[(2)]);
var inst_53106__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53105__$1,(0),null);
var inst_53107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53105__$1,(1),null);
var inst_53108 = (inst_53106__$1 == null);
var state_53129__$1 = (function (){var statearr_53133 = state_53129;
(statearr_53133[(7)] = inst_53105__$1);

(statearr_53133[(8)] = inst_53106__$1);

(statearr_53133[(9)] = inst_53107);

return statearr_53133;
})();
if(cljs.core.truth_(inst_53108)){
var statearr_53135_54683 = state_53129__$1;
(statearr_53135_54683[(1)] = (8));

} else {
var statearr_53137_54684 = state_53129__$1;
(statearr_53137_54684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53130 === (1))){
var inst_53094 = cljs.core.vec(chs);
var inst_53095 = inst_53094;
var state_53129__$1 = (function (){var statearr_53140 = state_53129;
(statearr_53140[(10)] = inst_53095);

return statearr_53140;
})();
var statearr_53141_54687 = state_53129__$1;
(statearr_53141_54687[(2)] = null);

(statearr_53141_54687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53130 === (4))){
var inst_53095 = (state_53129[(10)]);
var state_53129__$1 = state_53129;
return cljs.core.async.ioc_alts_BANG_(state_53129__$1,(7),inst_53095);
} else {
if((state_val_53130 === (6))){
var inst_53124 = (state_53129[(2)]);
var state_53129__$1 = state_53129;
var statearr_53142_54688 = state_53129__$1;
(statearr_53142_54688[(2)] = inst_53124);

(statearr_53142_54688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53130 === (3))){
var inst_53126 = (state_53129[(2)]);
var state_53129__$1 = state_53129;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53129__$1,inst_53126);
} else {
if((state_val_53130 === (2))){
var inst_53095 = (state_53129[(10)]);
var inst_53097 = cljs.core.count(inst_53095);
var inst_53098 = (inst_53097 > (0));
var state_53129__$1 = state_53129;
if(cljs.core.truth_(inst_53098)){
var statearr_53147_54690 = state_53129__$1;
(statearr_53147_54690[(1)] = (4));

} else {
var statearr_53148_54691 = state_53129__$1;
(statearr_53148_54691[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53130 === (11))){
var inst_53095 = (state_53129[(10)]);
var inst_53116 = (state_53129[(2)]);
var tmp53144 = inst_53095;
var inst_53095__$1 = tmp53144;
var state_53129__$1 = (function (){var statearr_53151 = state_53129;
(statearr_53151[(11)] = inst_53116);

(statearr_53151[(10)] = inst_53095__$1);

return statearr_53151;
})();
var statearr_53152_54693 = state_53129__$1;
(statearr_53152_54693[(2)] = null);

(statearr_53152_54693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53130 === (9))){
var inst_53106 = (state_53129[(8)]);
var state_53129__$1 = state_53129;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53129__$1,(11),out,inst_53106);
} else {
if((state_val_53130 === (5))){
var inst_53122 = cljs.core.async.close_BANG_(out);
var state_53129__$1 = state_53129;
var statearr_53158_54695 = state_53129__$1;
(statearr_53158_54695[(2)] = inst_53122);

(statearr_53158_54695[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53130 === (10))){
var inst_53120 = (state_53129[(2)]);
var state_53129__$1 = state_53129;
var statearr_53159_54696 = state_53129__$1;
(statearr_53159_54696[(2)] = inst_53120);

(statearr_53159_54696[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53130 === (8))){
var inst_53105 = (state_53129[(7)]);
var inst_53106 = (state_53129[(8)]);
var inst_53095 = (state_53129[(10)]);
var inst_53107 = (state_53129[(9)]);
var inst_53110 = (function (){var cs = inst_53095;
var vec__53100 = inst_53105;
var v = inst_53106;
var c = inst_53107;
return (function (p1__53085_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__53085_SHARP_);
});
})();
var inst_53111 = cljs.core.filterv(inst_53110,inst_53095);
var inst_53095__$1 = inst_53111;
var state_53129__$1 = (function (){var statearr_53161 = state_53129;
(statearr_53161[(10)] = inst_53095__$1);

return statearr_53161;
})();
var statearr_53163_54701 = state_53129__$1;
(statearr_53163_54701[(2)] = null);

(statearr_53163_54701[(1)] = (2));


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
var cljs$core$async$state_machine__50436__auto__ = null;
var cljs$core$async$state_machine__50436__auto____0 = (function (){
var statearr_53167 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53167[(0)] = cljs$core$async$state_machine__50436__auto__);

(statearr_53167[(1)] = (1));

return statearr_53167;
});
var cljs$core$async$state_machine__50436__auto____1 = (function (state_53129){
while(true){
var ret_value__50437__auto__ = (function (){try{while(true){
var result__50438__auto__ = switch__50435__auto__(state_53129);
if(cljs.core.keyword_identical_QMARK_(result__50438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50438__auto__;
}
break;
}
}catch (e53168){var ex__50439__auto__ = e53168;
var statearr_53169_54703 = state_53129;
(statearr_53169_54703[(2)] = ex__50439__auto__);


if(cljs.core.seq((state_53129[(4)]))){
var statearr_53170_54705 = state_53129;
(statearr_53170_54705[(1)] = cljs.core.first((state_53129[(4)])));

} else {
throw ex__50439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54706 = state_53129;
state_53129 = G__54706;
continue;
} else {
return ret_value__50437__auto__;
}
break;
}
});
cljs$core$async$state_machine__50436__auto__ = function(state_53129){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50436__auto____1.call(this,state_53129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50436__auto____0;
cljs$core$async$state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50436__auto____1;
return cljs$core$async$state_machine__50436__auto__;
})()
})();
var state__50711__auto__ = (function (){var statearr_53175 = f__50710__auto__();
(statearr_53175[(6)] = c__50709__auto___54681);

return statearr_53175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50711__auto__);
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
var G__53182 = arguments.length;
switch (G__53182) {
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
var c__50709__auto___54712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50710__auto__ = (function (){var switch__50435__auto__ = (function (state_53211){
var state_val_53212 = (state_53211[(1)]);
if((state_val_53212 === (7))){
var inst_53192 = (state_53211[(7)]);
var inst_53192__$1 = (state_53211[(2)]);
var inst_53193 = (inst_53192__$1 == null);
var inst_53194 = cljs.core.not(inst_53193);
var state_53211__$1 = (function (){var statearr_53215 = state_53211;
(statearr_53215[(7)] = inst_53192__$1);

return statearr_53215;
})();
if(inst_53194){
var statearr_53218_54713 = state_53211__$1;
(statearr_53218_54713[(1)] = (8));

} else {
var statearr_53219_54715 = state_53211__$1;
(statearr_53219_54715[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53212 === (1))){
var inst_53187 = (0);
var state_53211__$1 = (function (){var statearr_53220 = state_53211;
(statearr_53220[(8)] = inst_53187);

return statearr_53220;
})();
var statearr_53221_54719 = state_53211__$1;
(statearr_53221_54719[(2)] = null);

(statearr_53221_54719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53212 === (4))){
var state_53211__$1 = state_53211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53211__$1,(7),ch);
} else {
if((state_val_53212 === (6))){
var inst_53205 = (state_53211[(2)]);
var state_53211__$1 = state_53211;
var statearr_53222_54720 = state_53211__$1;
(statearr_53222_54720[(2)] = inst_53205);

(statearr_53222_54720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53212 === (3))){
var inst_53207 = (state_53211[(2)]);
var inst_53209 = cljs.core.async.close_BANG_(out);
var state_53211__$1 = (function (){var statearr_53223 = state_53211;
(statearr_53223[(9)] = inst_53207);

return statearr_53223;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53211__$1,inst_53209);
} else {
if((state_val_53212 === (2))){
var inst_53187 = (state_53211[(8)]);
var inst_53189 = (inst_53187 < n);
var state_53211__$1 = state_53211;
if(cljs.core.truth_(inst_53189)){
var statearr_53224_54722 = state_53211__$1;
(statearr_53224_54722[(1)] = (4));

} else {
var statearr_53225_54723 = state_53211__$1;
(statearr_53225_54723[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53212 === (11))){
var inst_53187 = (state_53211[(8)]);
var inst_53197 = (state_53211[(2)]);
var inst_53198 = (inst_53187 + (1));
var inst_53187__$1 = inst_53198;
var state_53211__$1 = (function (){var statearr_53226 = state_53211;
(statearr_53226[(10)] = inst_53197);

(statearr_53226[(8)] = inst_53187__$1);

return statearr_53226;
})();
var statearr_53227_54724 = state_53211__$1;
(statearr_53227_54724[(2)] = null);

(statearr_53227_54724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53212 === (9))){
var state_53211__$1 = state_53211;
var statearr_53229_54725 = state_53211__$1;
(statearr_53229_54725[(2)] = null);

(statearr_53229_54725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53212 === (5))){
var state_53211__$1 = state_53211;
var statearr_53230_54727 = state_53211__$1;
(statearr_53230_54727[(2)] = null);

(statearr_53230_54727[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53212 === (10))){
var inst_53202 = (state_53211[(2)]);
var state_53211__$1 = state_53211;
var statearr_53231_54728 = state_53211__$1;
(statearr_53231_54728[(2)] = inst_53202);

(statearr_53231_54728[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53212 === (8))){
var inst_53192 = (state_53211[(7)]);
var state_53211__$1 = state_53211;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53211__$1,(11),out,inst_53192);
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
var cljs$core$async$state_machine__50436__auto__ = null;
var cljs$core$async$state_machine__50436__auto____0 = (function (){
var statearr_53236 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53236[(0)] = cljs$core$async$state_machine__50436__auto__);

(statearr_53236[(1)] = (1));

return statearr_53236;
});
var cljs$core$async$state_machine__50436__auto____1 = (function (state_53211){
while(true){
var ret_value__50437__auto__ = (function (){try{while(true){
var result__50438__auto__ = switch__50435__auto__(state_53211);
if(cljs.core.keyword_identical_QMARK_(result__50438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50438__auto__;
}
break;
}
}catch (e53237){var ex__50439__auto__ = e53237;
var statearr_53238_54734 = state_53211;
(statearr_53238_54734[(2)] = ex__50439__auto__);


if(cljs.core.seq((state_53211[(4)]))){
var statearr_53244_54736 = state_53211;
(statearr_53244_54736[(1)] = cljs.core.first((state_53211[(4)])));

} else {
throw ex__50439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54737 = state_53211;
state_53211 = G__54737;
continue;
} else {
return ret_value__50437__auto__;
}
break;
}
});
cljs$core$async$state_machine__50436__auto__ = function(state_53211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50436__auto____1.call(this,state_53211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50436__auto____0;
cljs$core$async$state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50436__auto____1;
return cljs$core$async$state_machine__50436__auto__;
})()
})();
var state__50711__auto__ = (function (){var statearr_53246 = f__50710__auto__();
(statearr_53246[(6)] = c__50709__auto___54712);

return statearr_53246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50711__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53249 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53249 = (function (f,ch,meta53250){
this.f = f;
this.ch = ch;
this.meta53250 = meta53250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53251,meta53250__$1){
var self__ = this;
var _53251__$1 = this;
return (new cljs.core.async.t_cljs$core$async53249(self__.f,self__.ch,meta53250__$1));
}));

(cljs.core.async.t_cljs$core$async53249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53251){
var self__ = this;
var _53251__$1 = this;
return self__.meta53250;
}));

(cljs.core.async.t_cljs$core$async53249.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53249.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53249.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53249.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53249.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53256 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53256 = (function (f,ch,meta53250,_,fn1,meta53257){
this.f = f;
this.ch = ch;
this.meta53250 = meta53250;
this._ = _;
this.fn1 = fn1;
this.meta53257 = meta53257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53258,meta53257__$1){
var self__ = this;
var _53258__$1 = this;
return (new cljs.core.async.t_cljs$core$async53256(self__.f,self__.ch,self__.meta53250,self__._,self__.fn1,meta53257__$1));
}));

(cljs.core.async.t_cljs$core$async53256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53258){
var self__ = this;
var _53258__$1 = this;
return self__.meta53257;
}));

(cljs.core.async.t_cljs$core$async53256.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53256.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async53256.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async53256.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__53247_SHARP_){
var G__53264 = (((p1__53247_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__53247_SHARP_) : self__.f.call(null,p1__53247_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__53264) : f1.call(null,G__53264));
});
}));

(cljs.core.async.t_cljs$core$async53256.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53250","meta53250",-1266101121,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async53249","cljs.core.async/t_cljs$core$async53249",1082606594,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta53257","meta53257",-1680165880,null)], null);
}));

(cljs.core.async.t_cljs$core$async53256.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53256.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53256");

(cljs.core.async.t_cljs$core$async53256.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async53256");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53256.
 */
cljs.core.async.__GT_t_cljs$core$async53256 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53256(f__$1,ch__$1,meta53250__$1,___$2,fn1__$1,meta53257){
return (new cljs.core.async.t_cljs$core$async53256(f__$1,ch__$1,meta53250__$1,___$2,fn1__$1,meta53257));
});

}

return (new cljs.core.async.t_cljs$core$async53256(self__.f,self__.ch,self__.meta53250,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4109__auto__ = ret;
if(cljs.core.truth_(and__4109__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4109__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__53272 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__53272) : self__.f.call(null,G__53272));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async53249.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53249.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async53249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53250","meta53250",-1266101121,null)], null);
}));

(cljs.core.async.t_cljs$core$async53249.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53249");

(cljs.core.async.t_cljs$core$async53249.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async53249");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53249.
 */
cljs.core.async.__GT_t_cljs$core$async53249 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53249(f__$1,ch__$1,meta53250){
return (new cljs.core.async.t_cljs$core$async53249(f__$1,ch__$1,meta53250));
});

}

return (new cljs.core.async.t_cljs$core$async53249(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53276 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53276 = (function (f,ch,meta53277){
this.f = f;
this.ch = ch;
this.meta53277 = meta53277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53278,meta53277__$1){
var self__ = this;
var _53278__$1 = this;
return (new cljs.core.async.t_cljs$core$async53276(self__.f,self__.ch,meta53277__$1));
}));

(cljs.core.async.t_cljs$core$async53276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53278){
var self__ = this;
var _53278__$1 = this;
return self__.meta53277;
}));

(cljs.core.async.t_cljs$core$async53276.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53276.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53276.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53276.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async53276.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53276.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async53276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53277","meta53277",-1683903258,null)], null);
}));

(cljs.core.async.t_cljs$core$async53276.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53276");

(cljs.core.async.t_cljs$core$async53276.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async53276");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53276.
 */
cljs.core.async.__GT_t_cljs$core$async53276 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async53276(f__$1,ch__$1,meta53277){
return (new cljs.core.async.t_cljs$core$async53276(f__$1,ch__$1,meta53277));
});

}

return (new cljs.core.async.t_cljs$core$async53276(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53290 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53290 = (function (p,ch,meta53291){
this.p = p;
this.ch = ch;
this.meta53291 = meta53291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53292,meta53291__$1){
var self__ = this;
var _53292__$1 = this;
return (new cljs.core.async.t_cljs$core$async53290(self__.p,self__.ch,meta53291__$1));
}));

(cljs.core.async.t_cljs$core$async53290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53292){
var self__ = this;
var _53292__$1 = this;
return self__.meta53291;
}));

(cljs.core.async.t_cljs$core$async53290.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53290.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53290.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async53290.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53290.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async53290.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53290.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async53290.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53291","meta53291",-391705723,null)], null);
}));

(cljs.core.async.t_cljs$core$async53290.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53290");

(cljs.core.async.t_cljs$core$async53290.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async53290");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53290.
 */
cljs.core.async.__GT_t_cljs$core$async53290 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async53290(p__$1,ch__$1,meta53291){
return (new cljs.core.async.t_cljs$core$async53290(p__$1,ch__$1,meta53291));
});

}

return (new cljs.core.async.t_cljs$core$async53290(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__53313 = arguments.length;
switch (G__53313) {
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
var c__50709__auto___54774 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50710__auto__ = (function (){var switch__50435__auto__ = (function (state_53336){
var state_val_53337 = (state_53336[(1)]);
if((state_val_53337 === (7))){
var inst_53331 = (state_53336[(2)]);
var state_53336__$1 = state_53336;
var statearr_53338_54776 = state_53336__$1;
(statearr_53338_54776[(2)] = inst_53331);

(statearr_53338_54776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53337 === (1))){
var state_53336__$1 = state_53336;
var statearr_53339_54778 = state_53336__$1;
(statearr_53339_54778[(2)] = null);

(statearr_53339_54778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53337 === (4))){
var inst_53316 = (state_53336[(7)]);
var inst_53316__$1 = (state_53336[(2)]);
var inst_53317 = (inst_53316__$1 == null);
var state_53336__$1 = (function (){var statearr_53343 = state_53336;
(statearr_53343[(7)] = inst_53316__$1);

return statearr_53343;
})();
if(cljs.core.truth_(inst_53317)){
var statearr_53344_54781 = state_53336__$1;
(statearr_53344_54781[(1)] = (5));

} else {
var statearr_53345_54782 = state_53336__$1;
(statearr_53345_54782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53337 === (6))){
var inst_53316 = (state_53336[(7)]);
var inst_53321 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_53316) : p.call(null,inst_53316));
var state_53336__$1 = state_53336;
if(cljs.core.truth_(inst_53321)){
var statearr_53346_54786 = state_53336__$1;
(statearr_53346_54786[(1)] = (8));

} else {
var statearr_53347_54787 = state_53336__$1;
(statearr_53347_54787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53337 === (3))){
var inst_53333 = (state_53336[(2)]);
var state_53336__$1 = state_53336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53336__$1,inst_53333);
} else {
if((state_val_53337 === (2))){
var state_53336__$1 = state_53336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53336__$1,(4),ch);
} else {
if((state_val_53337 === (11))){
var inst_53325 = (state_53336[(2)]);
var state_53336__$1 = state_53336;
var statearr_53349_54788 = state_53336__$1;
(statearr_53349_54788[(2)] = inst_53325);

(statearr_53349_54788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53337 === (9))){
var state_53336__$1 = state_53336;
var statearr_53350_54790 = state_53336__$1;
(statearr_53350_54790[(2)] = null);

(statearr_53350_54790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53337 === (5))){
var inst_53319 = cljs.core.async.close_BANG_(out);
var state_53336__$1 = state_53336;
var statearr_53351_54791 = state_53336__$1;
(statearr_53351_54791[(2)] = inst_53319);

(statearr_53351_54791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53337 === (10))){
var inst_53328 = (state_53336[(2)]);
var state_53336__$1 = (function (){var statearr_53352 = state_53336;
(statearr_53352[(8)] = inst_53328);

return statearr_53352;
})();
var statearr_53353_54794 = state_53336__$1;
(statearr_53353_54794[(2)] = null);

(statearr_53353_54794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53337 === (8))){
var inst_53316 = (state_53336[(7)]);
var state_53336__$1 = state_53336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53336__$1,(11),out,inst_53316);
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
var cljs$core$async$state_machine__50436__auto__ = null;
var cljs$core$async$state_machine__50436__auto____0 = (function (){
var statearr_53354 = [null,null,null,null,null,null,null,null,null];
(statearr_53354[(0)] = cljs$core$async$state_machine__50436__auto__);

(statearr_53354[(1)] = (1));

return statearr_53354;
});
var cljs$core$async$state_machine__50436__auto____1 = (function (state_53336){
while(true){
var ret_value__50437__auto__ = (function (){try{while(true){
var result__50438__auto__ = switch__50435__auto__(state_53336);
if(cljs.core.keyword_identical_QMARK_(result__50438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50438__auto__;
}
break;
}
}catch (e53355){var ex__50439__auto__ = e53355;
var statearr_53356_54800 = state_53336;
(statearr_53356_54800[(2)] = ex__50439__auto__);


if(cljs.core.seq((state_53336[(4)]))){
var statearr_53357_54802 = state_53336;
(statearr_53357_54802[(1)] = cljs.core.first((state_53336[(4)])));

} else {
throw ex__50439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54803 = state_53336;
state_53336 = G__54803;
continue;
} else {
return ret_value__50437__auto__;
}
break;
}
});
cljs$core$async$state_machine__50436__auto__ = function(state_53336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50436__auto____1.call(this,state_53336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50436__auto____0;
cljs$core$async$state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50436__auto____1;
return cljs$core$async$state_machine__50436__auto__;
})()
})();
var state__50711__auto__ = (function (){var statearr_53358 = f__50710__auto__();
(statearr_53358[(6)] = c__50709__auto___54774);

return statearr_53358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50711__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__53360 = arguments.length;
switch (G__53360) {
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
var c__50709__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50710__auto__ = (function (){var switch__50435__auto__ = (function (state_53425){
var state_val_53426 = (state_53425[(1)]);
if((state_val_53426 === (7))){
var inst_53421 = (state_53425[(2)]);
var state_53425__$1 = state_53425;
var statearr_53427_54811 = state_53425__$1;
(statearr_53427_54811[(2)] = inst_53421);

(statearr_53427_54811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53426 === (20))){
var inst_53391 = (state_53425[(7)]);
var inst_53402 = (state_53425[(2)]);
var inst_53403 = cljs.core.next(inst_53391);
var inst_53377 = inst_53403;
var inst_53378 = null;
var inst_53379 = (0);
var inst_53380 = (0);
var state_53425__$1 = (function (){var statearr_53428 = state_53425;
(statearr_53428[(8)] = inst_53402);

(statearr_53428[(9)] = inst_53380);

(statearr_53428[(10)] = inst_53377);

(statearr_53428[(11)] = inst_53379);

(statearr_53428[(12)] = inst_53378);

return statearr_53428;
})();
var statearr_53429_54814 = state_53425__$1;
(statearr_53429_54814[(2)] = null);

(statearr_53429_54814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53426 === (1))){
var state_53425__$1 = state_53425;
var statearr_53430_54816 = state_53425__$1;
(statearr_53430_54816[(2)] = null);

(statearr_53430_54816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53426 === (4))){
var inst_53366 = (state_53425[(13)]);
var inst_53366__$1 = (state_53425[(2)]);
var inst_53367 = (inst_53366__$1 == null);
var state_53425__$1 = (function (){var statearr_53431 = state_53425;
(statearr_53431[(13)] = inst_53366__$1);

return statearr_53431;
})();
if(cljs.core.truth_(inst_53367)){
var statearr_53432_54818 = state_53425__$1;
(statearr_53432_54818[(1)] = (5));

} else {
var statearr_53433_54819 = state_53425__$1;
(statearr_53433_54819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53426 === (15))){
var state_53425__$1 = state_53425;
var statearr_53437_54821 = state_53425__$1;
(statearr_53437_54821[(2)] = null);

(statearr_53437_54821[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53426 === (21))){
var state_53425__$1 = state_53425;
var statearr_53438_54822 = state_53425__$1;
(statearr_53438_54822[(2)] = null);

(statearr_53438_54822[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53426 === (13))){
var inst_53380 = (state_53425[(9)]);
var inst_53377 = (state_53425[(10)]);
var inst_53379 = (state_53425[(11)]);
var inst_53378 = (state_53425[(12)]);
var inst_53387 = (state_53425[(2)]);
var inst_53388 = (inst_53380 + (1));
var tmp53434 = inst_53377;
var tmp53435 = inst_53379;
var tmp53436 = inst_53378;
var inst_53377__$1 = tmp53434;
var inst_53378__$1 = tmp53436;
var inst_53379__$1 = tmp53435;
var inst_53380__$1 = inst_53388;
var state_53425__$1 = (function (){var statearr_53439 = state_53425;
(statearr_53439[(14)] = inst_53387);

(statearr_53439[(9)] = inst_53380__$1);

(statearr_53439[(10)] = inst_53377__$1);

(statearr_53439[(11)] = inst_53379__$1);

(statearr_53439[(12)] = inst_53378__$1);

return statearr_53439;
})();
var statearr_53440_54831 = state_53425__$1;
(statearr_53440_54831[(2)] = null);

(statearr_53440_54831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53426 === (22))){
var state_53425__$1 = state_53425;
var statearr_53443_54833 = state_53425__$1;
(statearr_53443_54833[(2)] = null);

(statearr_53443_54833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53426 === (6))){
var inst_53366 = (state_53425[(13)]);
var inst_53375 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_53366) : f.call(null,inst_53366));
var inst_53376 = cljs.core.seq(inst_53375);
var inst_53377 = inst_53376;
var inst_53378 = null;
var inst_53379 = (0);
var inst_53380 = (0);
var state_53425__$1 = (function (){var statearr_53444 = state_53425;
(statearr_53444[(9)] = inst_53380);

(statearr_53444[(10)] = inst_53377);

(statearr_53444[(11)] = inst_53379);

(statearr_53444[(12)] = inst_53378);

return statearr_53444;
})();
var statearr_53445_54841 = state_53425__$1;
(statearr_53445_54841[(2)] = null);

(statearr_53445_54841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53426 === (17))){
var inst_53391 = (state_53425[(7)]);
var inst_53395 = cljs.core.chunk_first(inst_53391);
var inst_53396 = cljs.core.chunk_rest(inst_53391);
var inst_53397 = cljs.core.count(inst_53395);
var inst_53377 = inst_53396;
var inst_53378 = inst_53395;
var inst_53379 = inst_53397;
var inst_53380 = (0);
var state_53425__$1 = (function (){var statearr_53447 = state_53425;
(statearr_53447[(9)] = inst_53380);

(statearr_53447[(10)] = inst_53377);

(statearr_53447[(11)] = inst_53379);

(statearr_53447[(12)] = inst_53378);

return statearr_53447;
})();
var statearr_53448_54844 = state_53425__$1;
(statearr_53448_54844[(2)] = null);

(statearr_53448_54844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53426 === (3))){
var inst_53423 = (state_53425[(2)]);
var state_53425__$1 = state_53425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53425__$1,inst_53423);
} else {
if((state_val_53426 === (12))){
var inst_53411 = (state_53425[(2)]);
var state_53425__$1 = state_53425;
var statearr_53451_54847 = state_53425__$1;
(statearr_53451_54847[(2)] = inst_53411);

(statearr_53451_54847[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53426 === (2))){
var state_53425__$1 = state_53425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53425__$1,(4),in$);
} else {
if((state_val_53426 === (23))){
var inst_53419 = (state_53425[(2)]);
var state_53425__$1 = state_53425;
var statearr_53452_54849 = state_53425__$1;
(statearr_53452_54849[(2)] = inst_53419);

(statearr_53452_54849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53426 === (19))){
var inst_53406 = (state_53425[(2)]);
var state_53425__$1 = state_53425;
var statearr_53453_54851 = state_53425__$1;
(statearr_53453_54851[(2)] = inst_53406);

(statearr_53453_54851[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53426 === (11))){
var inst_53391 = (state_53425[(7)]);
var inst_53377 = (state_53425[(10)]);
var inst_53391__$1 = cljs.core.seq(inst_53377);
var state_53425__$1 = (function (){var statearr_53454 = state_53425;
(statearr_53454[(7)] = inst_53391__$1);

return statearr_53454;
})();
if(inst_53391__$1){
var statearr_53455_54855 = state_53425__$1;
(statearr_53455_54855[(1)] = (14));

} else {
var statearr_53456_54856 = state_53425__$1;
(statearr_53456_54856[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53426 === (9))){
var inst_53413 = (state_53425[(2)]);
var inst_53414 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_53425__$1 = (function (){var statearr_53457 = state_53425;
(statearr_53457[(15)] = inst_53413);

return statearr_53457;
})();
if(cljs.core.truth_(inst_53414)){
var statearr_53458_54858 = state_53425__$1;
(statearr_53458_54858[(1)] = (21));

} else {
var statearr_53459_54860 = state_53425__$1;
(statearr_53459_54860[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53426 === (5))){
var inst_53369 = cljs.core.async.close_BANG_(out);
var state_53425__$1 = state_53425;
var statearr_53460_54862 = state_53425__$1;
(statearr_53460_54862[(2)] = inst_53369);

(statearr_53460_54862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53426 === (14))){
var inst_53391 = (state_53425[(7)]);
var inst_53393 = cljs.core.chunked_seq_QMARK_(inst_53391);
var state_53425__$1 = state_53425;
if(inst_53393){
var statearr_53461_54864 = state_53425__$1;
(statearr_53461_54864[(1)] = (17));

} else {
var statearr_53462_54865 = state_53425__$1;
(statearr_53462_54865[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53426 === (16))){
var inst_53409 = (state_53425[(2)]);
var state_53425__$1 = state_53425;
var statearr_53463_54866 = state_53425__$1;
(statearr_53463_54866[(2)] = inst_53409);

(statearr_53463_54866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53426 === (10))){
var inst_53380 = (state_53425[(9)]);
var inst_53378 = (state_53425[(12)]);
var inst_53385 = cljs.core._nth(inst_53378,inst_53380);
var state_53425__$1 = state_53425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53425__$1,(13),out,inst_53385);
} else {
if((state_val_53426 === (18))){
var inst_53391 = (state_53425[(7)]);
var inst_53400 = cljs.core.first(inst_53391);
var state_53425__$1 = state_53425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53425__$1,(20),out,inst_53400);
} else {
if((state_val_53426 === (8))){
var inst_53380 = (state_53425[(9)]);
var inst_53379 = (state_53425[(11)]);
var inst_53382 = (inst_53380 < inst_53379);
var inst_53383 = inst_53382;
var state_53425__$1 = state_53425;
if(cljs.core.truth_(inst_53383)){
var statearr_53464_54872 = state_53425__$1;
(statearr_53464_54872[(1)] = (10));

} else {
var statearr_53465_54874 = state_53425__$1;
(statearr_53465_54874[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__50436__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__50436__auto____0 = (function (){
var statearr_53466 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53466[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__50436__auto__);

(statearr_53466[(1)] = (1));

return statearr_53466;
});
var cljs$core$async$mapcat_STAR__$_state_machine__50436__auto____1 = (function (state_53425){
while(true){
var ret_value__50437__auto__ = (function (){try{while(true){
var result__50438__auto__ = switch__50435__auto__(state_53425);
if(cljs.core.keyword_identical_QMARK_(result__50438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50438__auto__;
}
break;
}
}catch (e53470){var ex__50439__auto__ = e53470;
var statearr_53471_54881 = state_53425;
(statearr_53471_54881[(2)] = ex__50439__auto__);


if(cljs.core.seq((state_53425[(4)]))){
var statearr_53472_54882 = state_53425;
(statearr_53472_54882[(1)] = cljs.core.first((state_53425[(4)])));

} else {
throw ex__50439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54884 = state_53425;
state_53425 = G__54884;
continue;
} else {
return ret_value__50437__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__50436__auto__ = function(state_53425){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__50436__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__50436__auto____1.call(this,state_53425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__50436__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__50436__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__50436__auto__;
})()
})();
var state__50711__auto__ = (function (){var statearr_53476 = f__50710__auto__();
(statearr_53476[(6)] = c__50709__auto__);

return statearr_53476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50711__auto__);
}));

return c__50709__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__53478 = arguments.length;
switch (G__53478) {
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
var G__53483 = arguments.length;
switch (G__53483) {
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
var G__53487 = arguments.length;
switch (G__53487) {
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
var c__50709__auto___54900 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50710__auto__ = (function (){var switch__50435__auto__ = (function (state_53514){
var state_val_53515 = (state_53514[(1)]);
if((state_val_53515 === (7))){
var inst_53509 = (state_53514[(2)]);
var state_53514__$1 = state_53514;
var statearr_53517_54903 = state_53514__$1;
(statearr_53517_54903[(2)] = inst_53509);

(statearr_53517_54903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (1))){
var inst_53488 = null;
var state_53514__$1 = (function (){var statearr_53518 = state_53514;
(statearr_53518[(7)] = inst_53488);

return statearr_53518;
})();
var statearr_53519_54905 = state_53514__$1;
(statearr_53519_54905[(2)] = null);

(statearr_53519_54905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (4))){
var inst_53491 = (state_53514[(8)]);
var inst_53491__$1 = (state_53514[(2)]);
var inst_53495 = (inst_53491__$1 == null);
var inst_53496 = cljs.core.not(inst_53495);
var state_53514__$1 = (function (){var statearr_53520 = state_53514;
(statearr_53520[(8)] = inst_53491__$1);

return statearr_53520;
})();
if(inst_53496){
var statearr_53521_54909 = state_53514__$1;
(statearr_53521_54909[(1)] = (5));

} else {
var statearr_53522_54910 = state_53514__$1;
(statearr_53522_54910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (6))){
var state_53514__$1 = state_53514;
var statearr_53523_54911 = state_53514__$1;
(statearr_53523_54911[(2)] = null);

(statearr_53523_54911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (3))){
var inst_53511 = (state_53514[(2)]);
var inst_53512 = cljs.core.async.close_BANG_(out);
var state_53514__$1 = (function (){var statearr_53526 = state_53514;
(statearr_53526[(9)] = inst_53511);

return statearr_53526;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53514__$1,inst_53512);
} else {
if((state_val_53515 === (2))){
var state_53514__$1 = state_53514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53514__$1,(4),ch);
} else {
if((state_val_53515 === (11))){
var inst_53491 = (state_53514[(8)]);
var inst_53503 = (state_53514[(2)]);
var inst_53488 = inst_53491;
var state_53514__$1 = (function (){var statearr_53527 = state_53514;
(statearr_53527[(7)] = inst_53488);

(statearr_53527[(10)] = inst_53503);

return statearr_53527;
})();
var statearr_53528_54920 = state_53514__$1;
(statearr_53528_54920[(2)] = null);

(statearr_53528_54920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (9))){
var inst_53491 = (state_53514[(8)]);
var state_53514__$1 = state_53514;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53514__$1,(11),out,inst_53491);
} else {
if((state_val_53515 === (5))){
var inst_53491 = (state_53514[(8)]);
var inst_53488 = (state_53514[(7)]);
var inst_53498 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53491,inst_53488);
var state_53514__$1 = state_53514;
if(inst_53498){
var statearr_53531_54923 = state_53514__$1;
(statearr_53531_54923[(1)] = (8));

} else {
var statearr_53532_54924 = state_53514__$1;
(statearr_53532_54924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (10))){
var inst_53506 = (state_53514[(2)]);
var state_53514__$1 = state_53514;
var statearr_53533_54925 = state_53514__$1;
(statearr_53533_54925[(2)] = inst_53506);

(statearr_53533_54925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (8))){
var inst_53488 = (state_53514[(7)]);
var tmp53530 = inst_53488;
var inst_53488__$1 = tmp53530;
var state_53514__$1 = (function (){var statearr_53534 = state_53514;
(statearr_53534[(7)] = inst_53488__$1);

return statearr_53534;
})();
var statearr_53535_54929 = state_53514__$1;
(statearr_53535_54929[(2)] = null);

(statearr_53535_54929[(1)] = (2));


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
var cljs$core$async$state_machine__50436__auto__ = null;
var cljs$core$async$state_machine__50436__auto____0 = (function (){
var statearr_53536 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53536[(0)] = cljs$core$async$state_machine__50436__auto__);

(statearr_53536[(1)] = (1));

return statearr_53536;
});
var cljs$core$async$state_machine__50436__auto____1 = (function (state_53514){
while(true){
var ret_value__50437__auto__ = (function (){try{while(true){
var result__50438__auto__ = switch__50435__auto__(state_53514);
if(cljs.core.keyword_identical_QMARK_(result__50438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50438__auto__;
}
break;
}
}catch (e53537){var ex__50439__auto__ = e53537;
var statearr_53538_54938 = state_53514;
(statearr_53538_54938[(2)] = ex__50439__auto__);


if(cljs.core.seq((state_53514[(4)]))){
var statearr_53539_54939 = state_53514;
(statearr_53539_54939[(1)] = cljs.core.first((state_53514[(4)])));

} else {
throw ex__50439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54948 = state_53514;
state_53514 = G__54948;
continue;
} else {
return ret_value__50437__auto__;
}
break;
}
});
cljs$core$async$state_machine__50436__auto__ = function(state_53514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50436__auto____1.call(this,state_53514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50436__auto____0;
cljs$core$async$state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50436__auto____1;
return cljs$core$async$state_machine__50436__auto__;
})()
})();
var state__50711__auto__ = (function (){var statearr_53540 = f__50710__auto__();
(statearr_53540[(6)] = c__50709__auto___54900);

return statearr_53540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50711__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__53542 = arguments.length;
switch (G__53542) {
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
var c__50709__auto___54960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50710__auto__ = (function (){var switch__50435__auto__ = (function (state_53584){
var state_val_53585 = (state_53584[(1)]);
if((state_val_53585 === (7))){
var inst_53580 = (state_53584[(2)]);
var state_53584__$1 = state_53584;
var statearr_53586_54965 = state_53584__$1;
(statearr_53586_54965[(2)] = inst_53580);

(statearr_53586_54965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53585 === (1))){
var inst_53545 = (new Array(n));
var inst_53546 = inst_53545;
var inst_53547 = (0);
var state_53584__$1 = (function (){var statearr_53587 = state_53584;
(statearr_53587[(7)] = inst_53547);

(statearr_53587[(8)] = inst_53546);

return statearr_53587;
})();
var statearr_53588_54969 = state_53584__$1;
(statearr_53588_54969[(2)] = null);

(statearr_53588_54969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53585 === (4))){
var inst_53550 = (state_53584[(9)]);
var inst_53550__$1 = (state_53584[(2)]);
var inst_53551 = (inst_53550__$1 == null);
var inst_53553 = cljs.core.not(inst_53551);
var state_53584__$1 = (function (){var statearr_53589 = state_53584;
(statearr_53589[(9)] = inst_53550__$1);

return statearr_53589;
})();
if(inst_53553){
var statearr_53590_54970 = state_53584__$1;
(statearr_53590_54970[(1)] = (5));

} else {
var statearr_53591_54971 = state_53584__$1;
(statearr_53591_54971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53585 === (15))){
var inst_53574 = (state_53584[(2)]);
var state_53584__$1 = state_53584;
var statearr_53592_54973 = state_53584__$1;
(statearr_53592_54973[(2)] = inst_53574);

(statearr_53592_54973[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53585 === (13))){
var state_53584__$1 = state_53584;
var statearr_53593_54974 = state_53584__$1;
(statearr_53593_54974[(2)] = null);

(statearr_53593_54974[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53585 === (6))){
var inst_53547 = (state_53584[(7)]);
var inst_53570 = (inst_53547 > (0));
var state_53584__$1 = state_53584;
if(cljs.core.truth_(inst_53570)){
var statearr_53594_54976 = state_53584__$1;
(statearr_53594_54976[(1)] = (12));

} else {
var statearr_53595_54978 = state_53584__$1;
(statearr_53595_54978[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53585 === (3))){
var inst_53582 = (state_53584[(2)]);
var state_53584__$1 = state_53584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53584__$1,inst_53582);
} else {
if((state_val_53585 === (12))){
var inst_53546 = (state_53584[(8)]);
var inst_53572 = cljs.core.vec(inst_53546);
var state_53584__$1 = state_53584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53584__$1,(15),out,inst_53572);
} else {
if((state_val_53585 === (2))){
var state_53584__$1 = state_53584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53584__$1,(4),ch);
} else {
if((state_val_53585 === (11))){
var inst_53564 = (state_53584[(2)]);
var inst_53565 = (new Array(n));
var inst_53546 = inst_53565;
var inst_53547 = (0);
var state_53584__$1 = (function (){var statearr_53596 = state_53584;
(statearr_53596[(7)] = inst_53547);

(statearr_53596[(10)] = inst_53564);

(statearr_53596[(8)] = inst_53546);

return statearr_53596;
})();
var statearr_53597_54983 = state_53584__$1;
(statearr_53597_54983[(2)] = null);

(statearr_53597_54983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53585 === (9))){
var inst_53546 = (state_53584[(8)]);
var inst_53562 = cljs.core.vec(inst_53546);
var state_53584__$1 = state_53584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53584__$1,(11),out,inst_53562);
} else {
if((state_val_53585 === (5))){
var inst_53550 = (state_53584[(9)]);
var inst_53547 = (state_53584[(7)]);
var inst_53557 = (state_53584[(11)]);
var inst_53546 = (state_53584[(8)]);
var inst_53555 = (inst_53546[inst_53547] = inst_53550);
var inst_53557__$1 = (inst_53547 + (1));
var inst_53558 = (inst_53557__$1 < n);
var state_53584__$1 = (function (){var statearr_53600 = state_53584;
(statearr_53600[(12)] = inst_53555);

(statearr_53600[(11)] = inst_53557__$1);

return statearr_53600;
})();
if(cljs.core.truth_(inst_53558)){
var statearr_53601_54990 = state_53584__$1;
(statearr_53601_54990[(1)] = (8));

} else {
var statearr_53602_54991 = state_53584__$1;
(statearr_53602_54991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53585 === (14))){
var inst_53577 = (state_53584[(2)]);
var inst_53578 = cljs.core.async.close_BANG_(out);
var state_53584__$1 = (function (){var statearr_53604 = state_53584;
(statearr_53604[(13)] = inst_53577);

return statearr_53604;
})();
var statearr_53605_54992 = state_53584__$1;
(statearr_53605_54992[(2)] = inst_53578);

(statearr_53605_54992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53585 === (10))){
var inst_53568 = (state_53584[(2)]);
var state_53584__$1 = state_53584;
var statearr_53606_54994 = state_53584__$1;
(statearr_53606_54994[(2)] = inst_53568);

(statearr_53606_54994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53585 === (8))){
var inst_53557 = (state_53584[(11)]);
var inst_53546 = (state_53584[(8)]);
var tmp53603 = inst_53546;
var inst_53546__$1 = tmp53603;
var inst_53547 = inst_53557;
var state_53584__$1 = (function (){var statearr_53607 = state_53584;
(statearr_53607[(7)] = inst_53547);

(statearr_53607[(8)] = inst_53546__$1);

return statearr_53607;
})();
var statearr_53608_54995 = state_53584__$1;
(statearr_53608_54995[(2)] = null);

(statearr_53608_54995[(1)] = (2));


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
var cljs$core$async$state_machine__50436__auto__ = null;
var cljs$core$async$state_machine__50436__auto____0 = (function (){
var statearr_53609 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53609[(0)] = cljs$core$async$state_machine__50436__auto__);

(statearr_53609[(1)] = (1));

return statearr_53609;
});
var cljs$core$async$state_machine__50436__auto____1 = (function (state_53584){
while(true){
var ret_value__50437__auto__ = (function (){try{while(true){
var result__50438__auto__ = switch__50435__auto__(state_53584);
if(cljs.core.keyword_identical_QMARK_(result__50438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50438__auto__;
}
break;
}
}catch (e53610){var ex__50439__auto__ = e53610;
var statearr_53611_54998 = state_53584;
(statearr_53611_54998[(2)] = ex__50439__auto__);


if(cljs.core.seq((state_53584[(4)]))){
var statearr_53612_55002 = state_53584;
(statearr_53612_55002[(1)] = cljs.core.first((state_53584[(4)])));

} else {
throw ex__50439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55004 = state_53584;
state_53584 = G__55004;
continue;
} else {
return ret_value__50437__auto__;
}
break;
}
});
cljs$core$async$state_machine__50436__auto__ = function(state_53584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50436__auto____1.call(this,state_53584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50436__auto____0;
cljs$core$async$state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50436__auto____1;
return cljs$core$async$state_machine__50436__auto__;
})()
})();
var state__50711__auto__ = (function (){var statearr_53614 = f__50710__auto__();
(statearr_53614[(6)] = c__50709__auto___54960);

return statearr_53614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50711__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__53616 = arguments.length;
switch (G__53616) {
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
var c__50709__auto___55008 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50710__auto__ = (function (){var switch__50435__auto__ = (function (state_53659){
var state_val_53660 = (state_53659[(1)]);
if((state_val_53660 === (7))){
var inst_53655 = (state_53659[(2)]);
var state_53659__$1 = state_53659;
var statearr_53661_55010 = state_53659__$1;
(statearr_53661_55010[(2)] = inst_53655);

(statearr_53661_55010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53660 === (1))){
var inst_53617 = [];
var inst_53618 = inst_53617;
var inst_53619 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_53659__$1 = (function (){var statearr_53664 = state_53659;
(statearr_53664[(7)] = inst_53619);

(statearr_53664[(8)] = inst_53618);

return statearr_53664;
})();
var statearr_53666_55014 = state_53659__$1;
(statearr_53666_55014[(2)] = null);

(statearr_53666_55014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53660 === (4))){
var inst_53622 = (state_53659[(9)]);
var inst_53622__$1 = (state_53659[(2)]);
var inst_53623 = (inst_53622__$1 == null);
var inst_53624 = cljs.core.not(inst_53623);
var state_53659__$1 = (function (){var statearr_53667 = state_53659;
(statearr_53667[(9)] = inst_53622__$1);

return statearr_53667;
})();
if(inst_53624){
var statearr_53668_55017 = state_53659__$1;
(statearr_53668_55017[(1)] = (5));

} else {
var statearr_53669_55018 = state_53659__$1;
(statearr_53669_55018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53660 === (15))){
var inst_53649 = (state_53659[(2)]);
var state_53659__$1 = state_53659;
var statearr_53670_55020 = state_53659__$1;
(statearr_53670_55020[(2)] = inst_53649);

(statearr_53670_55020[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53660 === (13))){
var state_53659__$1 = state_53659;
var statearr_53671_55022 = state_53659__$1;
(statearr_53671_55022[(2)] = null);

(statearr_53671_55022[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53660 === (6))){
var inst_53618 = (state_53659[(8)]);
var inst_53644 = inst_53618.length;
var inst_53645 = (inst_53644 > (0));
var state_53659__$1 = state_53659;
if(cljs.core.truth_(inst_53645)){
var statearr_53675_55025 = state_53659__$1;
(statearr_53675_55025[(1)] = (12));

} else {
var statearr_53676_55027 = state_53659__$1;
(statearr_53676_55027[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53660 === (3))){
var inst_53657 = (state_53659[(2)]);
var state_53659__$1 = state_53659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53659__$1,inst_53657);
} else {
if((state_val_53660 === (12))){
var inst_53618 = (state_53659[(8)]);
var inst_53647 = cljs.core.vec(inst_53618);
var state_53659__$1 = state_53659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53659__$1,(15),out,inst_53647);
} else {
if((state_val_53660 === (2))){
var state_53659__$1 = state_53659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53659__$1,(4),ch);
} else {
if((state_val_53660 === (11))){
var inst_53626 = (state_53659[(10)]);
var inst_53622 = (state_53659[(9)]);
var inst_53637 = (state_53659[(2)]);
var inst_53638 = [];
var inst_53639 = inst_53638.push(inst_53622);
var inst_53618 = inst_53638;
var inst_53619 = inst_53626;
var state_53659__$1 = (function (){var statearr_53680 = state_53659;
(statearr_53680[(11)] = inst_53637);

(statearr_53680[(7)] = inst_53619);

(statearr_53680[(8)] = inst_53618);

(statearr_53680[(12)] = inst_53639);

return statearr_53680;
})();
var statearr_53681_55038 = state_53659__$1;
(statearr_53681_55038[(2)] = null);

(statearr_53681_55038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53660 === (9))){
var inst_53618 = (state_53659[(8)]);
var inst_53635 = cljs.core.vec(inst_53618);
var state_53659__$1 = state_53659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53659__$1,(11),out,inst_53635);
} else {
if((state_val_53660 === (5))){
var inst_53626 = (state_53659[(10)]);
var inst_53622 = (state_53659[(9)]);
var inst_53619 = (state_53659[(7)]);
var inst_53626__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_53622) : f.call(null,inst_53622));
var inst_53627 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53626__$1,inst_53619);
var inst_53628 = cljs.core.keyword_identical_QMARK_(inst_53619,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_53629 = ((inst_53627) || (inst_53628));
var state_53659__$1 = (function (){var statearr_53682 = state_53659;
(statearr_53682[(10)] = inst_53626__$1);

return statearr_53682;
})();
if(cljs.core.truth_(inst_53629)){
var statearr_53684_55041 = state_53659__$1;
(statearr_53684_55041[(1)] = (8));

} else {
var statearr_53685_55042 = state_53659__$1;
(statearr_53685_55042[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53660 === (14))){
var inst_53652 = (state_53659[(2)]);
var inst_53653 = cljs.core.async.close_BANG_(out);
var state_53659__$1 = (function (){var statearr_53689 = state_53659;
(statearr_53689[(13)] = inst_53652);

return statearr_53689;
})();
var statearr_53690_55044 = state_53659__$1;
(statearr_53690_55044[(2)] = inst_53653);

(statearr_53690_55044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53660 === (10))){
var inst_53642 = (state_53659[(2)]);
var state_53659__$1 = state_53659;
var statearr_53693_55048 = state_53659__$1;
(statearr_53693_55048[(2)] = inst_53642);

(statearr_53693_55048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53660 === (8))){
var inst_53626 = (state_53659[(10)]);
var inst_53622 = (state_53659[(9)]);
var inst_53618 = (state_53659[(8)]);
var inst_53631 = inst_53618.push(inst_53622);
var tmp53688 = inst_53618;
var inst_53618__$1 = tmp53688;
var inst_53619 = inst_53626;
var state_53659__$1 = (function (){var statearr_53695 = state_53659;
(statearr_53695[(7)] = inst_53619);

(statearr_53695[(14)] = inst_53631);

(statearr_53695[(8)] = inst_53618__$1);

return statearr_53695;
})();
var statearr_53697_55052 = state_53659__$1;
(statearr_53697_55052[(2)] = null);

(statearr_53697_55052[(1)] = (2));


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
var cljs$core$async$state_machine__50436__auto__ = null;
var cljs$core$async$state_machine__50436__auto____0 = (function (){
var statearr_53700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53700[(0)] = cljs$core$async$state_machine__50436__auto__);

(statearr_53700[(1)] = (1));

return statearr_53700;
});
var cljs$core$async$state_machine__50436__auto____1 = (function (state_53659){
while(true){
var ret_value__50437__auto__ = (function (){try{while(true){
var result__50438__auto__ = switch__50435__auto__(state_53659);
if(cljs.core.keyword_identical_QMARK_(result__50438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50438__auto__;
}
break;
}
}catch (e53703){var ex__50439__auto__ = e53703;
var statearr_53704_55054 = state_53659;
(statearr_53704_55054[(2)] = ex__50439__auto__);


if(cljs.core.seq((state_53659[(4)]))){
var statearr_53708_55056 = state_53659;
(statearr_53708_55056[(1)] = cljs.core.first((state_53659[(4)])));

} else {
throw ex__50439__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50437__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55059 = state_53659;
state_53659 = G__55059;
continue;
} else {
return ret_value__50437__auto__;
}
break;
}
});
cljs$core$async$state_machine__50436__auto__ = function(state_53659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50436__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50436__auto____1.call(this,state_53659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50436__auto____0;
cljs$core$async$state_machine__50436__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50436__auto____1;
return cljs$core$async$state_machine__50436__auto__;
})()
})();
var state__50711__auto__ = (function (){var statearr_53709 = f__50710__auto__();
(statearr_53709[(6)] = c__50709__auto___55008);

return statearr_53709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50711__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
