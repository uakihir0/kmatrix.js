import {
  VOID3gxj6tk5isa35 as VOID,
  captureStack1fzi4aczwc4hg as captureStack,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  Exceptiondt2hlxn7j7vw as Exception,
  Unit_instancev9v8hjid95df as Unit_instance,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  isInterface3d6p8outrmvmk as isInterface,
  hashCodeq5arwsb9dgti as hashCode,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
} from './kotlin-kotlin-stdlib.mjs';
import {
  asFlow3ngsnn5xpz8pw as asFlow,
  firstOrNull2dvwxt5rv9o9g as firstOrNull,
  FlowCollector26clgpmzihvke as FlowCollector,
} from './kotlinx-coroutines-core.mjs';
import {
  NullBody_instance3jaj4elqoxne0 as NullBody_instance,
  parseAndSortHeader33xgq5fx7y6j1 as parseAndSortHeader,
} from './ktor-ktor-http.mjs';
import {
  Charsets_getInstanceqkyjyusuh1b0 as Charsets_getInstance,
  forName2faodmskqnoz5 as forName,
  isSupported2nf870ypy50et as isSupported,
} from './ktor-ktor-io.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class ContentConvertException extends Exception {
  static q3e(message, cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.id(message, cause);
    captureStack($this, $this.p3e_1);
    return $this;
  }
}
class JsonConvertException extends ContentConvertException {
  static n3e(message, cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.q3e(message, cause);
    captureStack($this, $this.m3e_1);
    return $this;
  }
}
class Configuration {}
function register$default(contentType, converter, configuration, $super) {
  var tmp;
  if (configuration === VOID) {
    tmp = Configuration$register$lambda;
  } else {
    tmp = configuration;
  }
  configuration = tmp;
  var tmp_0;
  if ($super === VOID) {
    this.r3e(contentType, converter, configuration);
    tmp_0 = Unit_instance;
  } else {
    tmp_0 = $super.r3e.call(this, contentType, converter, configuration);
  }
  return tmp_0;
}
class sam$kotlinx_coroutines_flow_FlowCollector$0 {
  constructor(function_0) {
    this.t3e_1 = function_0;
  }
  *f19(value, $completion) {
    return yield* this.t3e_1(value, $completion);
  }
  l4() {
    return this.t3e_1;
  }
  equals(other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.l4(), other.l4());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  }
  hashCode() {
    return hashCode(this.l4());
  }
}
class deserialize$o$collect$slambda {
  constructor($$this$unsafeFlow, $charset, $typeInfo, $body) {
    this.u3e_1 = $$this$unsafeFlow;
    this.v3e_1 = $charset;
    this.w3e_1 = $typeInfo;
    this.x3e_1 = $body;
  }
  *y3e(value, $completion) {
    var $this$transform = this.u3e_1;
    var tmp$ret$1 = yield* value.z3e(this.v3e_1, this.w3e_1, this.x3e_1, $completion);
    yield* $this$transform.f19(tmp$ret$1, $completion);
    return Unit_instance;
  }
  wc(p1, $completion) {
    return this.y3e(p1, $completion);
  }
}
class deserialize$$inlined$map$1 {
  constructor($this, $charset, $typeInfo, $body) {
    this.a3f_1 = $this;
    this.b3f_1 = $charset;
    this.c3f_1 = $typeInfo;
    this.d3f_1 = $body;
  }
  *e19(collector, $completion) {
    var tmp = deserialize$o$collect$slambda_0(collector, this.b3f_1, this.c3f_1, this.d3f_1);
    yield* this.a3f_1.c19(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp), $completion);
    return Unit_instance;
  }
  c19(collector, $completion) {
    return this.e19(collector, $completion);
  }
}
class deserialize$slambda {
  constructor($body) {
    this.e3f_1 = $body;
  }
  *f3f(it, $completion) {
    return !(it == null) || this.e3f_1.r2f();
  }
  wc(p1, $completion) {
    return this.f3f(p1, $completion);
  }
}
//endregion
function *deserialize(_this__u8e3s4, body, typeInfo, charset, $completion) {
  // Inline function 'kotlinx.coroutines.flow.map' call
  // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
  var this_0 = asFlow(_this__u8e3s4);
  // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
  var tmp = new deserialize$$inlined$map$1(this_0, charset, typeInfo, body);
  var result = yield* firstOrNull(tmp, deserialize$slambda_0(body), $completion);
  var tmp_0;
  if (!(result == null)) {
    tmp_0 = result;
  } else {
    if (!body.r2f()) {
      tmp_0 = body;
    } else {
      var tmp0_safe_receiver = typeInfo.k2p_1;
      if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c1()) === true) {
        tmp_0 = NullBody_instance;
      } else {
        throw ContentConvertException.q3e('No suitable converter found for ' + typeInfo.toString());
      }
    }
  }
  return tmp_0;
}
function suitableCharset(_this__u8e3s4, defaultCharset) {
  defaultCharset = defaultCharset === VOID ? Charsets_getInstance().y2h_1 : defaultCharset;
  var tmp0_elvis_lhs = suitableCharsetOrNull(_this__u8e3s4, defaultCharset);
  return tmp0_elvis_lhs == null ? defaultCharset : tmp0_elvis_lhs;
}
function Configuration$register$lambda(_this__u8e3s4) {
  return Unit_instance;
}
function suitableCharsetOrNull(_this__u8e3s4, defaultCharset) {
  defaultCharset = defaultCharset === VOID ? Charsets_getInstance().y2h_1 : defaultCharset;
  var _iterator__ex2g4s = parseAndSortHeader(_this__u8e3s4.a21('Accept-Charset')).l1();
  while (_iterator__ex2g4s.m1()) {
    var charset = _iterator__ex2g4s.n1().ti();
    if (charset === '*')
      return defaultCharset;
    else if (isSupported(Charsets_getInstance(), charset))
      return forName(Charsets_getInstance(), charset);
  }
  return null;
}
function deserialize$o$collect$slambda_0($$this$unsafeFlow, $charset, $typeInfo, $body) {
  var i = new deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body);
  var l = (value, $completion) => i.y3e(value, $completion);
  l.$arity = 1;
  return l;
}
function deserialize$slambda_0($body) {
  var i = new deserialize$slambda($body);
  var l = (it, $completion) => i.f3f(it, $completion);
  l.$arity = 1;
  return l;
}
//region block: post-declaration
initMetadataForClass(ContentConvertException, 'ContentConvertException');
initMetadataForClass(JsonConvertException, 'JsonConvertException');
initMetadataForInterface(Configuration, 'Configuration');
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForLambda(deserialize$o$collect$slambda, VOID, VOID, [1]);
initMetadataForClass(deserialize$$inlined$map$1, VOID, VOID, VOID, VOID, [1]);
initMetadataForLambda(deserialize$slambda, VOID, VOID, [1]);
//endregion
//region block: exports
export {
  deserialize as deserialize3m9mw3rgwyyjs,
  register$default as register$default3nfw6tn7zx41g,
  Configuration as Configuration20xgygxdzhlk5,
  JsonConvertException as JsonConvertExceptiongnc5x6xwaf77,
  suitableCharset as suitableCharset1jgdcpdzbzgzn,
};
//endregion

//# sourceMappingURL=ktor-ktor-serialization.mjs.map
