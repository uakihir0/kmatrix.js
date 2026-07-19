import {
  VOID3gxj6tk5isa35 as VOID,
  captureStack1fzi4aczwc4hg as captureStack,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  Exceptiondt2hlxn7j7vw as Exception,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  isInterface3d6p8outrmvmk as isInterface,
  hashCodeq5arwsb9dgti as hashCode,
  constructCallableReference23y65rf941mch as constructCallableReference,
} from './kotlin-kotlin-stdlib.mjs';
import {
  asFlow3ngsnn5xpz8pw as asFlow,
  firstOrNull3msc896yik0f1 as firstOrNull,
  FlowCollector26clgpmzihvke as FlowCollector,
} from './kotlinx-coroutines-core.mjs';
import { NullBody_instanceyfq32eqie90j as NullBody_instance } from './ktor-ktor-http.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class ContentConvertException extends Exception {
  constructor(message, cause) {
    return new.target.z3c(message, cause);
  }
  static z3c(message, cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.id(message, cause);
    captureStack($this, $this.y3c_1);
    return $this;
  }
}
class JsonConvertException extends ContentConvertException {
  constructor(message, cause) {
    return new.target.w3c(message, cause);
  }
  static w3c(message, cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.z3c(message, cause);
    captureStack($this, $this.v3c_1);
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
    this.a3d(contentType, converter, configuration);
    tmp_0 = Unit_instance;
  } else {
    tmp_0 = $super.a3d.call(this, contentType, converter, configuration);
  }
  return tmp_0;
}
class sam$kotlinx_coroutines_flow_FlowCollector$0 {
  constructor(function_0) {
    this.c3d_1 = function_0;
  }
  *g19(value, $completion) {
    return yield* this.c3d_1(value, $completion);
  }
  l4() {
    return this.c3d_1;
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
class deserialize$$inlined$map$1 {
  constructor($this, $charset, $typeInfo, $body) {
    this.e3d_1 = $this;
    this.f3d_1 = $charset;
    this.g3d_1 = $typeInfo;
    this.h3d_1 = $body;
  }
  *f19(collector, $completion) {
    var tmp = deserialize$o$collect$slambda(collector, this.f3d_1, this.g3d_1, this.h3d_1);
    yield* this.e3d_1.d19(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp), $completion);
    return Unit_instance;
  }
  d19(collector, $completion) {
    return this.f19(collector, $completion);
  }
}
//endregion
function *deserialize(_this__u8e3s4, body, typeInfo, charset, $completion) {
  // Inline function 'kotlinx.coroutines.flow.map' call
  // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
  var this_0 = asFlow(_this__u8e3s4);
  // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
  var tmp = new deserialize$$inlined$map$1(this_0, charset, typeInfo, body);
  var result = yield* firstOrNull(tmp, deserialize$slambda(body), $completion);
  var tmp_0;
  if (!(result == null)) {
    tmp_0 = result;
  } else {
    if (!body.n2f()) {
      tmp_0 = body;
    } else {
      var tmp0_safe_receiver = typeInfo.a2p_1;
      if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c1()) === true) {
        tmp_0 = NullBody_instance;
      } else {
        throw ContentConvertException.z3c('No suitable converter found for ' + typeInfo.toString());
      }
    }
  }
  return tmp_0;
}
function Configuration$register$lambda(_this__u8e3s4) {
  return Unit_instance;
}
function deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body) {
  return constructCallableReference(function *(value, $completion) {
    var $this$transform = $$this$unsafeFlow;
    var tmp$ret$1 = yield* value.d3d($charset, $typeInfo, $body, $completion);
    yield* $this$transform.g19(tmp$ret$1, $completion);
    return Unit_instance;
  }, 1);
}
function deserialize$slambda($body) {
  return constructCallableReference(function *(it, $completion) {
    return !(it == null) || $body.n2f();
  }, 1);
}
//region block: post-declaration
initMetadataForClass(ContentConvertException, 'ContentConvertException');
initMetadataForClass(JsonConvertException, 'JsonConvertException');
initMetadataForInterface(Configuration, 'Configuration');
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForClass(deserialize$$inlined$map$1, VOID, VOID, VOID, VOID, [1]);
//endregion
//region block: exports
export {
  deserialize as deserializedbfwk7upcilb,
  register$default as register$default1k5lce5zfzlxr,
  Configuration as Configuration20xgygxdzhlk5,
  JsonConvertException as JsonConvertExceptiongnc5x6xwaf77,
};
//endregion

//# sourceMappingURL=ktor-ktor-serialization.mjs.map
