import {
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  ArrayList3it5z8td81qkl as ArrayList,
  to2cs3ny02qtbcb as to,
  toMap1vec9topfei08 as toMap,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  toString1pkumu07cwy4m as toString,
  createThis2j2avj17cvnv2 as createThis,
  isInterface3d6p8outrmvmk as isInterface,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  Unit_getInstance3uavtu4x7ly6a as Unit_getInstance,
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
  static new_work_socialhub_kmpcommon_AnySerializer_aeoi24_k$($box) {
    var $this = createThis(this, $box);
    AnySerializer_instance = $this;
    var tmp = $this;
    tmp.additionalSerializer_1 = AnySerializer$additionalSerializer$lambda;
    $this.descriptor_1 = buildClassSerialDescriptor('Any', []);
    return $this;
  }
  set_additionalSerializer_lbmiwd_k$(_set____db54di) {
    this.additionalSerializer_1 = _set____db54di;
  }
  get_additionalSerializer_dfbdsu_k$() {
    return this.additionalSerializer_1;
  }
  get_descriptor_wjt6a0_k$() {
    return this.descriptor_1;
  }
  deserialize_sy6x50_k$(decoder) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!isInterface(decoder, JsonDecoder)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message));
    }
    var element = decoder.decodeJsonElement_6lz9ye_k$();
    return toAny(this, element);
  }
  serialize_qa2em9_k$(encoder, value) {
    if (typeof value === 'number') {
      encoder.encodeInt_y5zi3z_k$(value);
    } else {
      if (typeof value === 'bigint') {
        encoder.encodeLong_3didw_k$(value);
      } else {
        if (typeof value === 'number') {
          encoder.encodeShort_gza6si_k$(value);
        } else {
          if (typeof value === 'number') {
            encoder.encodeFloat_b8b85a_k$(value);
          } else {
            if (typeof value === 'number') {
              encoder.encodeDouble_n270q9_k$(value);
            } else {
              if (typeof value === 'string') {
                encoder.encodeString_424b5v_k$(value);
              } else {
                if (typeof value === 'boolean') {
                  encoder.encodeBoolean_tu2e59_k$(value);
                } else {
                  if (value instanceof Enum) {
                    encoder.encodeString_424b5v_k$(toString(this));
                  } else {
                    if (!this.additionalSerializer_1(encoder, value)) {
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
  serialize_5ase3y_k$(encoder, value) {
    return this.serialize_qa2em9_k$(encoder, !(value == null) ? value : THROW_CCE());
  }
}
//endregion
function toAny($this, _this__u8e3s4) {
  if (_this__u8e3s4 instanceof JsonPrimitive) {
    var tmp;
    if (_this__u8e3s4.get_isString_zep7bw_k$()) {
      tmp = _this__u8e3s4.get_content_h02jrk_k$();
    } else if (!(get_intOrNull(_this__u8e3s4) == null)) {
      tmp = get_int(_this__u8e3s4);
    } else if (!(get_longOrNull(_this__u8e3s4) == null)) {
      tmp = get_long(_this__u8e3s4);
    } else if (!(get_floatOrNull(_this__u8e3s4) == null)) {
      tmp = get_float(_this__u8e3s4);
    } else if (!(get_doubleOrNull(_this__u8e3s4) == null)) {
      tmp = get_double(_this__u8e3s4);
    } else if (!(get_booleanOrNull(_this__u8e3s4) == null)) {
      tmp = get_boolean(_this__u8e3s4);
    } else {
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$("Can't deserialize unknown type: " + toString(_this__u8e3s4));
    }
    return tmp;
  } else {
    if (_this__u8e3s4 instanceof JsonArray) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList.new_kotlin_collections_ArrayList_l811p6_k$(collectionSizeOrDefault(_this__u8e3s4, 10));
      var _iterator__ex2g4s = _this__u8e3s4.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        var tmp$ret$0 = toAny(AnySerializer_getInstance(), item);
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      return destination;
    } else {
      if (_this__u8e3s4 instanceof JsonObject) {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList.new_kotlin_collections_ArrayList_l811p6_k$(_this__u8e3s4.get_size_woubt6_k$());
        // Inline function 'kotlin.collections.iterator' call
        var _iterator__ex2g4s_0 = _this__u8e3s4.get_entries_p20ztl_k$().iterator_jk1svi_k$();
        while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
          var item_0 = _iterator__ex2g4s_0.next_20eer_k$();
          var tmp$ret$4 = to(item_0.get_key_18j28a_k$(), toAny(AnySerializer_getInstance(), item_0.get_value_j01efc_k$()));
          destination_0.add_utx5q5_k$(tmp$ret$4);
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
    AnySerializer.new_work_socialhub_kmpcommon_AnySerializer_aeoi24_k$();
  return AnySerializer_instance;
}
//region block: post-declaration
initMetadataForObject(AnySerializer, 'AnySerializer', VOID, VOID, [KSerializer]);
//endregion
//region block: exports
export {
  AnySerializer_getInstance as AnySerializer_getInstanceml5s7nlbxkd9,
};
//endregion

//# sourceMappingURL=kmpcommon.mjs.map
