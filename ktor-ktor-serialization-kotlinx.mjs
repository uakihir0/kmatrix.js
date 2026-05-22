import {
  ArrayList3it5z8td81qkl as ArrayList,
  Unit_instancev9v8hjid95df as Unit_instance,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  VOID3gxj6tk5isa35 as VOID,
  toString1pkumu07cwy4m as toString,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isInterface3d6p8outrmvmk as isInterface,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  hashCodeq5arwsb9dgti as hashCode,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  KtMap140uvy3s5zad8 as KtMap,
  KtSetjrjc7fhfd6b9 as KtSet,
  firstOrNull1gk7vzkf4h3nq as firstOrNull,
  StringCompanionObject_instance1v0ht40fz3tq0 as StringCompanionObject_instance,
  isArray1hxjqtqy632bc as isArray,
  KtList3hktaavzmj137 as KtList,
  Exceptiondt2hlxn7j7vw as Exception,
  joinToString1cxrrlmo0chqs as joinToString,
  to2cs3ny02qtbcb as to,
  filterNotNull3qfgcwmxhwfxe as filterNotNull,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  HashSet2dzve9y63nf0v as HashSet,
  singleOrNullrknfaxokm1sl as singleOrNull,
  Collection1k04j3hzsbod0 as Collection,
  KClass1cc9rfeybg8hs as KClass,
  emptyList1g2z5xcrvp2zy as emptyList,
} from './kotlin-kotlin-stdlib.mjs';
import {
  KSerializerzf77vz1967fq as KSerializer,
  BinaryFormat3f3aelhmz0ro1 as BinaryFormat,
  StringFormat2r2ka8mzcb3mi as StringFormat,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  serializerOrNull31x2b6nu6gruj as serializerOrNull,
  serializer1rka18p0rjk4x as serializer,
  MapSerializer11kmegt3g5c1g as MapSerializer,
  SetSerializert3lb0yy9iftr as SetSerializer,
  serializer1x79l67jvwntn as serializer_0,
  ListSerializer1hxuk9dx5n9du as ListSerializer,
  get_nullable197rfua9r7fsz as get_nullable,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  ByteArrayContent9zol65b22hp0 as ByteArrayContent,
  withCharsetIfNeeded3sz33ys0x9vfx as withCharsetIfNeeded,
  TextContent1rb6ftlpvl1d2 as TextContent,
  OutgoingContent3t2ohmyam9o76 as OutgoingContent,
} from './ktor-ktor-http.mjs';
import {
  FlowCollector26clgpmzihvke as FlowCollector,
  asFlow3ngsnn5xpz8pw as asFlow,
  firstOrNull2dvwxt5rv9o9g as firstOrNull_0,
} from './kotlinx-coroutines-core.mjs';
import {
  readRemaining1u8soafhjma7y as readRemaining,
  discard3ugntd47xyll6 as discard,
  readText27783kyxjxi1g as readText,
} from './ktor-ktor-io.mjs';
import { readByteArray1ri21h2rciakw as readByteArray } from './kotlinx-io-kotlinx-io-core.mjs';
import { JsonConvertExceptiongnc5x6xwaf77 as JsonConvertException } from './ktor-ktor-serialization.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class KotlinxSerializationConverter$serialize$o$collect$slambda {
  constructor($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value) {
    this.z5o_1 = $$this$unsafeFlow;
    this.a5p_1 = $contentType;
    this.b5p_1 = $charset;
    this.c5p_1 = $typeInfo;
    this.d5p_1 = $value;
  }
  *y3e(value, $completion) {
    var $this$transform = this.z5o_1;
    var tmp$ret$1 = yield* value.q5o(this.a5p_1, this.b5p_1, this.c5p_1, this.d5p_1, $completion);
    yield* $this$transform.f19(tmp$ret$1, $completion);
    return Unit_instance;
  }
  wc(p1, $completion) {
    return this.y3e(p1, $completion);
  }
}
class KotlinxSerializationConverter$deserialize$o$collect$slambda {
  constructor($$this$unsafeFlow, $charset, $typeInfo, $content) {
    this.e5p_1 = $$this$unsafeFlow;
    this.f5p_1 = $charset;
    this.g5p_1 = $typeInfo;
    this.h5p_1 = $content;
  }
  *y3e(value, $completion) {
    var $this$transform = this.e5p_1;
    var tmp$ret$1 = yield* value.z3e(this.f5p_1, this.g5p_1, this.h5p_1, $completion);
    yield* $this$transform.f19(tmp$ret$1, $completion);
    return Unit_instance;
  }
  wc(p1, $completion) {
    return this.y3e(p1, $completion);
  }
}
class sam$kotlinx_coroutines_flow_FlowCollector$0 {
  constructor(function_0) {
    this.i5p_1 = function_0;
  }
  *f19(value, $completion) {
    return yield* this.i5p_1(value, $completion);
  }
  l4() {
    return this.i5p_1;
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
class sam$kotlinx_coroutines_flow_FlowCollector$0_0 {
  constructor(function_0) {
    this.j5p_1 = function_0;
  }
  *f19(value, $completion) {
    return yield* this.j5p_1(value, $completion);
  }
  l4() {
    return this.j5p_1;
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
class KotlinxSerializationConverter$serialize$$inlined$map$1 {
  constructor($this, $contentType, $charset, $typeInfo, $value) {
    this.k5p_1 = $this;
    this.l5p_1 = $contentType;
    this.m5p_1 = $charset;
    this.n5p_1 = $typeInfo;
    this.o5p_1 = $value;
  }
  *e19(collector, $completion) {
    var tmp = KotlinxSerializationConverter$serialize$o$collect$slambda_0(collector, this.l5p_1, this.m5p_1, this.n5p_1, this.o5p_1);
    yield* this.k5p_1.c19(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp), $completion);
    return Unit_instance;
  }
  c19(collector, $completion) {
    return this.e19(collector, $completion);
  }
}
class KotlinxSerializationConverter$serialize$slambda {
  *p5p(it, $completion) {
    return !(it == null);
  }
  wc(p1, $completion) {
    return this.p5p((p1 == null ? true : p1 instanceof OutgoingContent) ? p1 : THROW_CCE(), $completion);
  }
}
class KotlinxSerializationConverter$deserialize$$inlined$map$1 {
  constructor($this, $charset, $typeInfo, $content) {
    this.q5p_1 = $this;
    this.r5p_1 = $charset;
    this.s5p_1 = $typeInfo;
    this.t5p_1 = $content;
  }
  *e19(collector, $completion) {
    var tmp = KotlinxSerializationConverter$deserialize$o$collect$slambda_0(collector, this.r5p_1, this.s5p_1, this.t5p_1);
    yield* this.q5p_1.c19(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp), $completion);
    return Unit_instance;
  }
  c19(collector, $completion) {
    return this.e19(collector, $completion);
  }
}
class KotlinxSerializationConverter$deserialize$slambda {
  constructor($content) {
    this.u5p_1 = $content;
  }
  *f3f(it, $completion) {
    return !(it == null) || this.u5p_1.r2f();
  }
  wc(p1, $completion) {
    return this.f3f(p1, $completion);
  }
}
class KotlinxSerializationConverter {
  constructor(format) {
    this.v5p_1 = format;
    this.w5p_1 = extensions(this.v5p_1);
    var tmp;
    var tmp_0 = this.v5p_1;
    if (isInterface(tmp_0, BinaryFormat)) {
      tmp = true;
    } else {
      var tmp_1 = this.v5p_1;
      tmp = isInterface(tmp_1, StringFormat);
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = 'Only binary and string formats are supported, ' + toString(this.v5p_1) + ' is not supported.';
      throw IllegalArgumentException.c2(toString(message));
    }
  }
  *x5p(contentType, charset, typeInfo, value, $completion) {
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = asFlow(this.w5p_1);
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    var tmp = new KotlinxSerializationConverter$serialize$$inlined$map$1(this_0, contentType, charset, typeInfo, value);
    var fromExtension = yield* firstOrNull_0(tmp, KotlinxSerializationConverter$serialize$slambda_0(), $completion);
    if (!(fromExtension == null))
      return fromExtension;
    var tmp_0;
    try {
      tmp_0 = serializerForTypeInfo(this.v5p_1.w1c(), typeInfo);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof SerializationException) {
        var cause = $p;
        tmp_1 = guessSerializer(value, this.v5p_1.w1c());
      } else {
        throw $p;
      }
      tmp_0 = tmp_1;
    }
    var serializer = tmp_0;
    return serializeContent(this, serializer, this.v5p_1, value, contentType, charset);
  }
  q5o(contentType, charset, typeInfo, value, $completion) {
    return this.x5p(contentType, charset, typeInfo, value, $completion);
  }
  *z3e(charset, typeInfo, content, $completion) {
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = asFlow(this.w5p_1);
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    var tmp = new KotlinxSerializationConverter$deserialize$$inlined$map$1(this_0, charset, typeInfo, content);
    var fromExtension = yield* firstOrNull_0(tmp, KotlinxSerializationConverter$deserialize$slambda_0(content), $completion);
    var tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.w5p_1.j1()) {
      tmp_0 = !(fromExtension == null) || content.r2f();
    } else {
      tmp_0 = false;
    }
    if (tmp_0)
      return fromExtension;
    var serializer = serializerForTypeInfo(this.v5p_1.w1c(), typeInfo);
    var contentPacket = yield* readRemaining(content, $completion);
    try {
      var tmp0_subject = this.v5p_1;
      var tmp_1;
      if (isInterface(tmp0_subject, StringFormat)) {
        tmp_1 = this.v5p_1.j1d(serializer, readText(contentPacket, charset));
      } else {
        if (isInterface(tmp0_subject, BinaryFormat)) {
          tmp_1 = this.v5p_1.l1d(serializer, readByteArray(contentPacket));
        } else {
          discard(contentPacket);
          // Inline function 'kotlin.error' call
          var message = 'Unsupported format ' + toString(this.v5p_1);
          throw IllegalStateException.o(toString(message));
        }
      }
      return tmp_1;
    } catch ($p) {
      if ($p instanceof Error) {
        var cause = $p;
        throw JsonConvertException.n3e('Illegal input: ' + cause.message, cause);
      } else {
        throw $p;
      }
    }
  }
}
//endregion
function extensions(format) {
  // Inline function 'kotlin.collections.mapNotNull' call
  var tmp0 = get_providers();
  // Inline function 'kotlin.collections.mapNotNullTo' call
  var destination = ArrayList.p2();
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = tmp0.l1();
  while (_iterator__ex2g4s.m1()) {
    var element = _iterator__ex2g4s.n1();
    var tmp0_safe_receiver = element.y5o(format);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      destination.d2(tmp0_safe_receiver);
    }
  }
  return destination;
}
function serialization(_this__u8e3s4, contentType, format) {
  _this__u8e3s4.s3e(contentType, new KotlinxSerializationConverter(format));
}
function KotlinxSerializationConverter$serialize$o$collect$slambda_0($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value) {
  var i = new KotlinxSerializationConverter$serialize$o$collect$slambda($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value);
  var l = (value, $completion) => i.y3e(value, $completion);
  l.$arity = 1;
  return l;
}
function KotlinxSerializationConverter$deserialize$o$collect$slambda_0($$this$unsafeFlow, $charset, $typeInfo, $content) {
  var i = new KotlinxSerializationConverter$deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $content);
  var l = (value, $completion) => i.y3e(value, $completion);
  l.$arity = 1;
  return l;
}
function serializeContent($this, serializer, format, value, contentType, charset) {
  var tmp;
  if (isInterface(format, StringFormat)) {
    var content = format.i1d(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
    tmp = new TextContent(content, withCharsetIfNeeded(contentType, charset));
  } else {
    if (isInterface(format, BinaryFormat)) {
      var content_0 = format.k1d(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
      tmp = new ByteArrayContent(content_0, contentType);
    } else {
      // Inline function 'kotlin.error' call
      var message = 'Unsupported format ' + toString(format);
      throw IllegalStateException.o(toString(message));
    }
  }
  return tmp;
}
function KotlinxSerializationConverter$serialize$slambda_0() {
  var i = new KotlinxSerializationConverter$serialize$slambda();
  var l = (it, $completion) => i.p5p(it, $completion);
  l.$arity = 1;
  return l;
}
function KotlinxSerializationConverter$deserialize$slambda_0($content) {
  var i = new KotlinxSerializationConverter$deserialize$slambda($content);
  var l = (it, $completion) => i.f3f(it, $completion);
  l.$arity = 1;
  return l;
}
function serializerForTypeInfo(_this__u8e3s4, typeInfo) {
  var module_0 = _this__u8e3s4;
  var tmp0_safe_receiver = typeInfo.k2p_1;
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    var tmp_0;
    if (tmp0_safe_receiver.b1().j1()) {
      tmp_0 = null;
    } else {
      var tmp0_elvis_lhs = serializerOrNull(module_0, tmp0_safe_receiver);
      tmp_0 = tmp0_elvis_lhs == null ? checkTypeParameters(tmp0_safe_receiver, typeInfo, module_0) : tmp0_elvis_lhs;
    }
    tmp = tmp_0;
  }
  var tmp1_elvis_lhs = tmp;
  var tmp_1;
  if (tmp1_elvis_lhs == null) {
    var tmp2_safe_receiver = module_0.l1e(typeInfo.j2p_1);
    tmp_1 = tmp2_safe_receiver == null ? null : maybeNullable(tmp2_safe_receiver, typeInfo);
  } else {
    tmp_1 = tmp1_elvis_lhs;
  }
  var tmp3_elvis_lhs = tmp_1;
  return tmp3_elvis_lhs == null ? maybeNullable(serializer(typeInfo.j2p_1), typeInfo) : tmp3_elvis_lhs;
}
function guessSerializer(value, module_0) {
  var tmp;
  if (value == null) {
    tmp = get_nullable(serializer_0(StringCompanionObject_instance));
  } else {
    if (isInterface(value, KtList)) {
      tmp = ListSerializer(elementSerializer(value, module_0));
    } else {
      if (isArray(value)) {
        var tmp1_safe_receiver = firstOrNull(value);
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_0 = guessSerializer(tmp1_safe_receiver, module_0);
        }
        var tmp2_elvis_lhs = tmp_0;
        tmp = tmp2_elvis_lhs == null ? ListSerializer(serializer_0(StringCompanionObject_instance)) : tmp2_elvis_lhs;
      } else {
        if (isInterface(value, KtSet)) {
          tmp = SetSerializer(elementSerializer(value, module_0));
        } else {
          if (isInterface(value, KtMap)) {
            var keySerializer = elementSerializer(value.x3(), module_0);
            var valueSerializer = elementSerializer(value.y3(), module_0);
            tmp = MapSerializer(keySerializer, valueSerializer);
          } else {
            var tmp3_elvis_lhs = module_0.l1e(getKClassFromExpression(value));
            tmp = tmp3_elvis_lhs == null ? serializer(getKClassFromExpression(value)) : tmp3_elvis_lhs;
          }
        }
      }
    }
  }
  var tmp_1 = tmp;
  return isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
}
function checkTypeParameters(type, typeInfo, module_0) {
  // Inline function 'kotlin.collections.mapNotNull' call
  var tmp0 = type.b1();
  // Inline function 'kotlin.collections.mapNotNullTo' call
  var destination = ArrayList.p2();
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = tmp0.l1();
  while (_iterator__ex2g4s.m1()) {
    var element = _iterator__ex2g4s.n1();
    var tmp;
    try {
      var tmp0_safe_receiver = element.om_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.takeIf' call
        var tmp_1;
        if (serializerOrNull(module_0, tmp0_safe_receiver) == null) {
          tmp_1 = tmp0_safe_receiver;
        } else {
          tmp_1 = null;
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var _unused_var__etf5q3 = $p;
        return null;
      } else {
        throw $p;
      }
    }
    if (tmp == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      destination.d2(tmp);
    }
  }
  var nonSerializableArgs = destination;
  if (nonSerializableArgs.j1())
    return null;
  var argNames = joinToString(nonSerializableArgs, VOID, VOID, VOID, VOID, VOID, checkTypeParameters$lambda);
  var tmp_3;
  if (nonSerializableArgs.g2() === 1) {
    tmp_3 = to('', 'is');
  } else {
    tmp_3 = to('s', 'are');
  }
  var _destruct__k2r9zo = tmp_3;
  var s = _destruct__k2r9zo.ti();
  var be = _destruct__k2r9zo.ui();
  throw SerializationException.w1d('Serializer for type argument' + s + ' ' + argNames + ' ' + be + " not found for '" + typeInfo.j2p_1.f1() + "'. " + ('Ensure that the listed type' + s + ' ' + be + " marked as '@Serializable'."));
}
function maybeNullable(_this__u8e3s4, typeInfo) {
  var tmp;
  var tmp0_safe_receiver = typeInfo.k2p_1;
  if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c1()) === true) {
    tmp = get_nullable(_this__u8e3s4);
  } else {
    tmp = _this__u8e3s4;
  }
  return tmp;
}
function elementSerializer(_this__u8e3s4, module_0) {
  // Inline function 'kotlin.collections.map' call
  var this_0 = filterNotNull(_this__u8e3s4);
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList.n2(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.l1();
  while (_iterator__ex2g4s.m1()) {
    var item = _iterator__ex2g4s.n1();
    var tmp$ret$2 = guessSerializer(item, module_0);
    destination.d2(tmp$ret$2);
  }
  // Inline function 'kotlin.collections.distinctBy' call
  var set = HashSet.t9();
  var list = ArrayList.p2();
  var _iterator__ex2g4s_0 = destination.l1();
  while (_iterator__ex2g4s_0.m1()) {
    var e = _iterator__ex2g4s_0.n1();
    var key = e.l1c().v1e();
    if (set.d2(key)) {
      list.d2(e);
    }
  }
  var serializers = list;
  if (serializers.g2() > 1) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList.n2(collectionSizeOrDefault(serializers, 10));
    var _iterator__ex2g4s_1 = serializers.l1();
    while (_iterator__ex2g4s_1.m1()) {
      var item_0 = _iterator__ex2g4s_1.n1();
      var tmp$ret$7 = item_0.l1c().v1e();
      destination_0.d2(tmp$ret$7);
    }
    // Inline function 'kotlin.error' call
    var message = 'Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + toString(destination_0));
    throw IllegalStateException.o(toString(message));
  }
  var tmp0_elvis_lhs = singleOrNull(serializers);
  var selected = tmp0_elvis_lhs == null ? serializer_0(StringCompanionObject_instance) : tmp0_elvis_lhs;
  if (selected.l1c().o1e()) {
    return selected;
  }
  if (!isInterface(selected, KSerializer))
    THROW_CCE();
  var tmp$ret$9;
  $l$block_0: {
    // Inline function 'kotlin.collections.any' call
    var tmp;
    if (isInterface(_this__u8e3s4, Collection)) {
      tmp = _this__u8e3s4.j1();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$9 = false;
      break $l$block_0;
    }
    var _iterator__ex2g4s_2 = _this__u8e3s4.l1();
    while (_iterator__ex2g4s_2.m1()) {
      var element = _iterator__ex2g4s_2.n1();
      if (element == null) {
        tmp$ret$9 = true;
        break $l$block_0;
      }
    }
    tmp$ret$9 = false;
  }
  if (tmp$ret$9) {
    return get_nullable(selected);
  }
  return selected;
}
function checkTypeParameters$lambda(it) {
  var clz = it.a1();
  var tmp;
  if (!(clz == null) ? isInterface(clz, KClass) : false) {
    tmp = "'" + clz.f1() + "'";
  } else {
    tmp = "'" + toString(it) + "'";
  }
  return tmp;
}
function get_providers() {
  return emptyList();
}
//region block: post-declaration
initMetadataForLambda(KotlinxSerializationConverter$serialize$o$collect$slambda, VOID, VOID, [1]);
initMetadataForLambda(KotlinxSerializationConverter$deserialize$o$collect$slambda, VOID, VOID, [1]);
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForClass(KotlinxSerializationConverter$serialize$$inlined$map$1, VOID, VOID, VOID, VOID, [1]);
initMetadataForLambda(KotlinxSerializationConverter$serialize$slambda, VOID, VOID, [1]);
initMetadataForClass(KotlinxSerializationConverter$deserialize$$inlined$map$1, VOID, VOID, VOID, VOID, [1]);
initMetadataForLambda(KotlinxSerializationConverter$deserialize$slambda, VOID, VOID, [1]);
initMetadataForClass(KotlinxSerializationConverter, 'KotlinxSerializationConverter', VOID, VOID, VOID, [4, 3]);
//endregion
//region block: exports
export {
  serialization as serialization1fpeds7cruos4,
};
//endregion

//# sourceMappingURL=ktor-ktor-serialization-kotlinx.mjs.map
