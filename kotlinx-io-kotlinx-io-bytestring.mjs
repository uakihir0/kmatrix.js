import {
  createThis2j2avj17cvnv2 as createThis,
  toCharArray32huqyw9tt7kx as toCharArray,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  copyOfRange3alro60z4hhf8 as copyOfRange,
  getKClassFromExpression348iqjl4fnx2f as getKClassFromExpression,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  contentEquals1cdp6c846cfdi as contentEquals,
  contentHashCode25jw6rgkgywwr as contentHashCode,
  IndexOutOfBoundsException1qfr429iumro0 as IndexOutOfBoundsException,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  toString1pkumu07cwy4m as toString,
  Unit_getInstance3uavtu4x7ly6a as Unit_getInstance,
  arrayCopytctsywo3h7gj as arrayCopy,
  _UByte___init__impl__g9hnc418b8pq346rvu4 as _UByte___init__impl__g9hnc4,
  _UByte___get_data__impl__jof9qrfg5oujomrowy as _UByte___get_data__impl__jof9qr,
  compareTo3ankvs086tmwq as compareTo,
  StringBuildermazzzhj6kkai as StringBuilder,
  _Char___init__impl__6a9atx1csff5kwtduxl as _Char___init__impl__6a9atx,
  Comparable198qfk8pnblz0 as Comparable,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  decodeToString1x4faah2liw2p as decodeToString,
  Annotation1hwww4cseplu9 as Annotation,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Companion {
  static new_kotlinx_io_bytestring_ByteString_Companion_a57nhh_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance = $this;
    $this.EMPTY_1 = ByteString.new_kotlinx_io_bytestring_ByteString_mjcnc8_k$(new Int8Array(0), null);
    $this.HEX_DIGITS_1 = toCharArray('0123456789abcdef');
    return $this;
  }
  get_EMPTY_2we6ee_k$() {
    return this.EMPTY_1;
  }
  wrap_yhiemk_k$(byteArray) {
    return ByteString.new_kotlinx_io_bytestring_ByteString_mjcnc8_k$(byteArray, null);
  }
}
class ByteString {
  static new_kotlinx_io_bytestring_ByteString_mjcnc8_k$(data, dummy, $box) {
    Companion_getInstance();
    var $this = createThis(this, $box);
    $this.data_1 = data;
    $this.hashCode_2 = 0;
    return $this;
  }
  static new_kotlinx_io_bytestring_ByteString_7stnyz_k$(data, startIndex, endIndex, $box) {
    Companion_getInstance();
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? data.length : endIndex;
    return this.new_kotlinx_io_bytestring_ByteString_mjcnc8_k$(copyOfRange(data, startIndex, endIndex), null, $box);
  }
  get_size_woubt6_k$() {
    return this.data_1.length;
  }
  equals(other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ByteString))
      THROW_CCE();
    if (!(other.data_1.length === this.data_1.length))
      return false;
    if (!(other.hashCode_2 === 0) && !(this.hashCode_2 === 0) && !(other.hashCode_2 === this.hashCode_2))
      return false;
    return contentEquals(this.data_1, other.data_1);
  }
  hashCode() {
    var hc = this.hashCode_2;
    if (hc === 0) {
      hc = contentHashCode(this.data_1);
      this.hashCode_2 = hc;
    }
    return hc;
  }
  get_c1px32_k$(index) {
    if (index < 0 || index >= this.get_size_woubt6_k$())
      throw IndexOutOfBoundsException.new_kotlin_IndexOutOfBoundsException_9eekaf_k$('index (' + index + ') is out of byte string bounds: [0..' + this.get_size_woubt6_k$() + ')');
    return this.data_1[index];
  }
  toByteArray_q2o6eu_k$(startIndex, endIndex) {
    // Inline function 'kotlin.require' call
    if (!(startIndex <= endIndex)) {
      var message = 'startIndex (' + startIndex + ') > endIndex (' + endIndex + ')';
      throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message));
    }
    return copyOfRange(this.data_1, startIndex, endIndex);
  }
  toByteArray$default_jc5aj_k$(startIndex, endIndex, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? this.get_size_woubt6_k$() : endIndex;
    return $super === VOID ? this.toByteArray_q2o6eu_k$(startIndex, endIndex) : $super.toByteArray_q2o6eu_k$.call(this, startIndex, endIndex);
  }
  copyInto_wpxnot_k$(destination, destinationOffset, startIndex, endIndex) {
    // Inline function 'kotlin.require' call
    if (!(startIndex <= endIndex)) {
      var message = 'startIndex (' + startIndex + ') > endIndex (' + endIndex + ')';
      throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message));
    }
    // Inline function 'kotlin.collections.copyInto' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.data_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, destination, destinationOffset, startIndex, endIndex);
  }
  copyInto$default_jhe2in_k$(destination, destinationOffset, startIndex, endIndex, $super) {
    destinationOffset = destinationOffset === VOID ? 0 : destinationOffset;
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? this.get_size_woubt6_k$() : endIndex;
    var tmp;
    if ($super === VOID) {
      this.copyInto_wpxnot_k$(destination, destinationOffset, startIndex, endIndex);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.copyInto_wpxnot_k$.call(this, destination, destinationOffset, startIndex, endIndex);
    }
    return tmp;
  }
  substring_d7lab3_k$(startIndex, endIndex) {
    var tmp;
    if (startIndex === endIndex) {
      tmp = Companion_getInstance().EMPTY_1;
    } else {
      tmp = ByteString.new_kotlinx_io_bytestring_ByteString_7stnyz_k$(this.data_1, startIndex, endIndex);
    }
    return tmp;
  }
  substring$default_i6q0hx_k$(startIndex, endIndex, $super) {
    endIndex = endIndex === VOID ? this.get_size_woubt6_k$() : endIndex;
    return $super === VOID ? this.substring_d7lab3_k$(startIndex, endIndex) : $super.substring_d7lab3_k$.call(this, startIndex, endIndex);
  }
  compareTo_yqa6ez_k$(other) {
    if (other === this)
      return 0;
    var localData = this.data_1;
    var otherData = other.data_1;
    var inductionVariable = 0;
    var tmp0 = this.get_size_woubt6_k$();
    // Inline function 'kotlin.math.min' call
    var b = other.get_size_woubt6_k$();
    var last = Math.min(tmp0, b);
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.toUByte' call
        var this_0 = localData[i];
        var tmp0_0 = _UByte___init__impl__g9hnc4(this_0);
        // Inline function 'kotlin.toUByte' call
        var this_1 = otherData[i];
        // Inline function 'kotlin.UByte.compareTo' call
        var other_0 = _UByte___init__impl__g9hnc4(this_1);
        // Inline function 'kotlin.UByte.toInt' call
        var tmp = _UByte___get_data__impl__jof9qr(tmp0_0) & 255;
        // Inline function 'kotlin.UByte.toInt' call
        var tmp$ret$4 = _UByte___get_data__impl__jof9qr(other_0) & 255;
        var cmp = compareTo(tmp, tmp$ret$4);
        if (!(cmp === 0))
          return cmp;
      }
       while (inductionVariable < last);
    return compareTo(this.get_size_woubt6_k$(), other.get_size_woubt6_k$());
  }
  compareTo_hpufkf_k$(other) {
    return this.compareTo_yqa6ez_k$(other instanceof ByteString ? other : THROW_CCE());
  }
  toString() {
    if (isEmpty(this)) {
      return 'ByteString(size=0)';
    }
    var sizeStr = this.get_size_woubt6_k$().toString();
    var len = (22 + sizeStr.length | 0) + imul(this.get_size_woubt6_k$(), 2) | 0;
    // Inline function 'kotlin.with' call
    var $this$with = StringBuilder.new_kotlin_text_StringBuilder_2x6iwq_k$(len);
    $this$with.append_22ad7x_k$('ByteString(size=');
    $this$with.append_22ad7x_k$(sizeStr);
    $this$with.append_22ad7x_k$(' hex=');
    var localData = this.data_1;
    var inductionVariable = 0;
    var last = this.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b = localData[i];
        $this$with.append_am5a4z_k$(Companion_getInstance().HEX_DIGITS_1[(b >>> 4 | 0) & 15]);
        $this$with.append_am5a4z_k$(Companion_getInstance().HEX_DIGITS_1[b & 15]);
      }
       while (inductionVariable < last);
    return $this$with.append_am5a4z_k$(_Char___init__impl__6a9atx(41)).toString();
  }
  getBackingArrayReference_x19ruh_k$() {
    return this.data_1;
  }
}
class UnsafeByteStringApi {
  equals(other) {
    if (!(other instanceof UnsafeByteStringApi))
      return false;
    other instanceof UnsafeByteStringApi || THROW_CCE();
    return true;
  }
  hashCode() {
    return 0;
  }
  toString() {
    return '@kotlinx.io.bytestring.unsafe.UnsafeByteStringApi(' + ')';
  }
}
class UnsafeByteStringOperations {
  static new_kotlinx_io_bytestring_unsafe_UnsafeByteStringOperations_ku9jks_k$($box) {
    var $this = createThis(this, $box);
    UnsafeByteStringOperations_instance = $this;
    return $this;
  }
  wrapUnsafe_3fobxs_k$(array) {
    return Companion_getInstance().wrap_yhiemk_k$(array);
  }
  withByteArrayUnsafe_wjoldj_k$(byteString, block) {
    block(byteString.getBackingArrayReference_x19ruh_k$());
  }
}
//endregion
function _get_HEX_DIGITS__ouctnl($this) {
  return $this.HEX_DIGITS_1;
}
function _get_data__d5abxd($this) {
  return $this.data_1;
}
function _set_hashCode__t13pwk($this, _set____db54di) {
  $this.hashCode_2 = _set____db54di;
}
function _get_hashCode__t740ls($this) {
  return $this.hashCode_2;
}
var Companion_instance;
function Companion_getInstance() {
  if (Companion_instance === VOID)
    Companion.new_kotlinx_io_bytestring_ByteString_Companion_a57nhh_k$();
  return Companion_instance;
}
function ByteString_0(bytes) {
  var tmp;
  // Inline function 'kotlin.collections.isEmpty' call
  if (bytes.length === 0) {
    tmp = Companion_getInstance().EMPTY_1;
  } else {
    tmp = Companion_getInstance().wrap_yhiemk_k$(bytes);
  }
  return tmp;
}
function decodeToString_0(_this__u8e3s4) {
  return decodeToString(_this__u8e3s4.getBackingArrayReference_x19ruh_k$());
}
function isEmpty(_this__u8e3s4) {
  return _this__u8e3s4.get_size_woubt6_k$() === 0;
}
var UnsafeByteStringOperations_instance;
function UnsafeByteStringOperations_getInstance() {
  if (UnsafeByteStringOperations_instance === VOID)
    UnsafeByteStringOperations.new_kotlinx_io_bytestring_unsafe_UnsafeByteStringOperations_ku9jks_k$();
  return UnsafeByteStringOperations_instance;
}
//region block: post-declaration
initMetadataForCompanion(Companion);
initMetadataForClass(ByteString, 'ByteString', VOID, VOID, [Comparable]);
initMetadataForClass(UnsafeByteStringApi, 'UnsafeByteStringApi', VOID, VOID, [Annotation]);
initMetadataForObject(UnsafeByteStringOperations, 'UnsafeByteStringOperations');
//endregion
//region block: exports
export {
  UnsafeByteStringOperations_getInstance as UnsafeByteStringOperations_getInstance2jw9qc1452z9u,
  ByteString_0 as ByteString3c9fk8lsh3lvs,
  ByteString as ByteString10sanmoo66key,
  decodeToString_0 as decodeToString2ede220pr5xir,
};
//endregion

//# sourceMappingURL=kotlinx-io-kotlinx-io-bytestring.mjs.map
