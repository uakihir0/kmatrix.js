import {
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  ArrayList3it5z8td81qkl as ArrayList,
  to2cs3ny02qtbcb as to,
  Unit_instancev9v8hjid95df as Unit_instance,
  toMap1vec9topfei08 as toMap,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  toString1pkumu07cwy4m as toString,
  isInterface3d6p8outrmvmk as isInterface,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  println2shhhgwwt4c61 as println,
  Enum3alwj03lh1n41 as Enum,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
} from './kotlin-kotlin-stdlib.mjs';
import {
  JsonObjectee06ihoeeiqj as JsonObject,
  JsonArray2urf8ey7u44sd as JsonArray,
  get_boolean37ml8jnzy6rg3 as get_boolean,
  get_booleanOrNull376axlcpdhkmo as get_booleanOrNull,
  get_double1785hcxaminy4 as get_double,
  get_doubleOrNull2fo14gjg922um as get_doubleOrNull,
  get_float1xtaobzj8js8m as get_float,
  get_floatOrNull2q2ov24agcvgt as get_floatOrNull,
  get_long3gjrkvy7fxjbp as get_long,
  get_longOrNull1kg1ha9scz5pa as get_longOrNull,
  get_int2y6jf75ftml0w as get_int,
  get_intOrNulld29i64b3udf as get_intOrNull,
  JsonPrimitive3ttzjh2ft5dnx as JsonPrimitive,
  JsonDecoder1rijst5ne6qla as JsonDecoder,
} from './kotlinx-serialization-kotlinx-serialization-json.mjs';
import {
  buildClassSerialDescriptors2a6xdp6mrtw as buildClassSerialDescriptor,
  KSerializerzf77vz1967fq as KSerializer,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class AnySerializer {
  constructor() {
    AnySerializer_instance = this;
    var tmp = this;
    tmp.z29_1 = AnySerializer$additionalSerializer$lambda;
    this.a2a_1 = buildClassSerialDescriptor('Any', []);
  }
  l1c() {
    return this.a2a_1;
  }
  z1c(decoder) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!isInterface(decoder, JsonDecoder)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException.c2(toString(message));
    }
    var element = decoder.m20();
    return toAny(this, element);
  }
  b2a(encoder, value) {
    if (typeof value === 'number') {
      encoder.m1h(value);
    } else {
      if (typeof value === 'bigint') {
        encoder.n1h(value);
      } else {
        if (typeof value === 'number') {
          encoder.l1h(value);
        } else {
          if (typeof value === 'number') {
            encoder.o1h(value);
          } else {
            if (typeof value === 'number') {
              encoder.p1h(value);
            } else {
              if (typeof value === 'string') {
                encoder.r1h(value);
              } else {
                if (typeof value === 'boolean') {
                  encoder.j1h(value);
                } else {
                  if (value instanceof Enum) {
                    encoder.r1h(toString(this));
                  } else {
                    if (!this.z29_1(encoder, value)) {
                      println("Can't serialize unknown type: " + toString(getKClassFromExpression(value)));
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  y1c(encoder, value) {
    return this.b2a(encoder, !(value == null) ? value : THROW_CCE());
  }
}
//endregion
function toAny($this, $receiver) {
  if ($receiver instanceof JsonPrimitive) {
    var tmp;
    if ($receiver.n20()) {
      tmp = $receiver.o20();
    } else if (!(get_intOrNull($receiver) == null)) {
      tmp = get_int($receiver);
    } else if (!(get_longOrNull($receiver) == null)) {
      tmp = get_long($receiver);
    } else if (!(get_floatOrNull($receiver) == null)) {
      tmp = get_float($receiver);
    } else if (!(get_doubleOrNull($receiver) == null)) {
      tmp = get_double($receiver);
    } else if (!(get_booleanOrNull($receiver) == null)) {
      tmp = get_boolean($receiver);
    } else {
      throw IllegalStateException.o("Can't deserialize unknown type: " + toString($receiver));
    }
    return tmp;
  } else {
    if ($receiver instanceof JsonArray) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList.n2(collectionSizeOrDefault($receiver, 10));
      var _iterator__ex2g4s = $receiver.l1();
      while (_iterator__ex2g4s.m1()) {
        var item = _iterator__ex2g4s.n1();
        var tmp$ret$2 = toAny(AnySerializer_getInstance(), item);
        destination.d2(tmp$ret$2);
      }
      return destination;
    } else {
      if ($receiver instanceof JsonObject) {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList.n2($receiver.g2());
        // Inline function 'kotlin.collections.iterator' call
        var _iterator__ex2g4s_0 = $receiver.u2().l1();
        while (_iterator__ex2g4s_0.m1()) {
          var item_0 = _iterator__ex2g4s_0.n1();
          var tmp$ret$6 = to(item_0.v2(), toAny(AnySerializer_getInstance(), item_0.w2()));
          destination_0.d2(tmp$ret$6);
        }
        return toMap(destination_0);
      } else {
        noWhenBranchMatchedException();
      }
    }
  }
}
function AnySerializer$additionalSerializer$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
  return false;
}
var AnySerializer_instance;
function AnySerializer_getInstance() {
  if (AnySerializer_instance === VOID)
    new AnySerializer();
  return AnySerializer_instance;
}
//region block: post-declaration
initMetadataForObject(AnySerializer, 'AnySerializer', VOID, VOID, [KSerializer]);
//endregion
//region block: exports
export {
  AnySerializer_getInstance as AnySerializer_getInstance32lcggytvsxb8,
};
//endregion

//# sourceMappingURL=kmpcommon.mjs.map
