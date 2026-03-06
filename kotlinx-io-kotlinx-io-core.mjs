import {
  IndexOutOfBoundsException1qfr429iumro0 as IndexOutOfBoundsException,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  toString1pkumu07cwy4m as toString,
  Unit_getInstance3uavtu4x7ly6a as Unit_getInstance,
  fromInt2ii0rejb1w62w as fromInt,
  subtract2orl8z9upxd9l as subtract,
  _Char___init__impl__6a9atx1csff5kwtduxl as _Char___init__impl__6a9atx,
  charArrayOf27f4r3dozbrk1 as charArrayOf,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  Annotation1hwww4cseplu9 as Annotation,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  createThis2j2avj17cvnv2 as createThis,
  toShort36kaw0zjdq3ex as toShort,
  shiftLeft3tsh2sstjchzn as shiftLeft,
  add2suhfggl4zvkk as add,
  convertToInty04h231mmjoh as convertToInt,
  protoOf180f3jzyo7rfj as protoOf,
  StringBuildermazzzhj6kkai as StringBuilder,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  AutoCloseable1l5p57f9lp7kv as AutoCloseable,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  arrayCopytctsywo3h7gj as arrayCopy,
  toByte4i43936u611k as toByte,
  shiftRightUnsigned1ga7wnvbv2qur as shiftRightUnsigned,
  convertToByte2t4hntblnhq2k as convertToByte,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  Char__toInt_impl_vasixd3jl92hthlhyn7 as Char__toInt_impl_vasixd,
  multiply2k9eolhnz1bjv as multiply,
  charCodeAt1yspne1d8erbm as charCodeAt,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  endsWith278181ii8uuo as endsWith,
  startsWith26w8qjqapeeq6 as startsWith,
  substringiqarkczpya5m as substring,
  charArray2ujmm1qusno00 as charArray,
  numberToChar93r9buh19yek as numberToChar,
  concatToString3cxf0c1gqonpo as concatToString,
  Char19o2r8palgjof as Char,
  captureStack1fzi4aczwc4hg as captureStack,
  Exceptiondt2hlxn7j7vw as Exception,
  KProperty02ce7r476m8633 as KProperty0,
  getPropertyCallableRef3hckxc0xueiaj as getPropertyCallableRef,
  UnsupportedOperationException2tkumpmhredt3 as UnsupportedOperationException,
  lazy2hsh8ze7j6ikd as lazy,
  ArrayList3it5z8td81qkl as ArrayList,
  asReversed2y2qzr7vrqd5 as asReversed,
  contains2el4s70rdq4ld as contains,
  getStringHashCode26igk1bx568vk as getStringHashCode,
} from './kotlin-kotlin-stdlib.mjs';
import { UnsafeByteStringOperations_getInstance2jw9qc1452z9u as UnsafeByteStringOperations_getInstance } from './kotlinx-io-kotlinx-io-bytestring.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class InternalIoApi {
  equals(other) {
    if (!(other instanceof InternalIoApi))
      return false;
    other instanceof InternalIoApi || THROW_CCE();
    return true;
  }
  hashCode() {
    return 0;
  }
  toString() {
    return '@kotlinx.io.InternalIoApi(' + ')';
  }
}
class UnsafeIoApi {
  equals(other) {
    if (!(other instanceof UnsafeIoApi))
      return false;
    other instanceof UnsafeIoApi || THROW_CCE();
    return true;
  }
  hashCode() {
    return 0;
  }
  toString() {
    return '@kotlinx.io.UnsafeIoApi(' + ')';
  }
}
class DelicateIoApi {
  equals(other) {
    if (!(other instanceof DelicateIoApi))
      return false;
    other instanceof DelicateIoApi || THROW_CCE();
    return true;
  }
  hashCode() {
    return 0;
  }
  toString() {
    return '@kotlinx.io.DelicateIoApi(' + ')';
  }
}
class RawSource {}
class Source {}
function readAtMostTo$default(sink, startIndex, endIndex, $super) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? sink.length : endIndex;
  return $super === VOID ? this.readAtMostTo_kub29z_k$(sink, startIndex, endIndex) : $super.readAtMostTo_kub29z_k$.call(this, sink, startIndex, endIndex);
}
class RawSink {}
class Sink {}
function write$default(source, startIndex, endIndex, $super) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? source.length : endIndex;
  var tmp;
  if ($super === VOID) {
    this.write_ti570x_k$(source, startIndex, endIndex);
    tmp = Unit_getInstance();
  } else {
    tmp = $super.write_ti570x_k$.call(this, source, startIndex, endIndex);
  }
  return tmp;
}
class Buffer {
  static new_kotlinx_io_Buffer_ca7i83_k$($box) {
    var $this = createThis(this, $box);
    $this.head_1 = null;
    $this.tail_1 = null;
    $this.sizeMut_1 = 0n;
    return $this;
  }
  set_head_gc442i_k$(_set____db54di) {
    this.head_1 = _set____db54di;
  }
  get_head_1rxik1_k$() {
    return this.head_1;
  }
  set_tail_w98yye_k$(_set____db54di) {
    this.tail_1 = _set____db54di;
  }
  get_tail_yzvxr5_k$() {
    return this.tail_1;
  }
  get_size_woubt6_k$() {
    return this.sizeMut_1;
  }
  set_sizeMut_cp56bw_k$(_set____db54di) {
    this.sizeMut_1 = _set____db54di;
  }
  get_sizeMut_lwlia2_k$() {
    return this.sizeMut_1;
  }
  get_buffer_bmaafd_k$() {
    return this;
  }
  exhausted_p1jt55_k$() {
    return this.get_size_woubt6_k$() === 0n;
  }
  require_28r0pl_k$(byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message));
    }
    if (this.get_size_woubt6_k$() < byteCount) {
      throw EOFException.new_kotlinx_io_EOFException_y6c6dc_k$("Buffer doesn't contain required number of bytes (size: " + this.get_size_woubt6_k$().toString() + ', required: ' + byteCount.toString() + ')');
    }
  }
  request_mpoy7z_k$(byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount: ' + byteCount.toString() + ' < 0';
      throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message));
    }
    return this.get_size_woubt6_k$() >= byteCount;
  }
  readByte_ectjk2_k$() {
    var tmp0_elvis_lhs = this.head_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, 1n);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.get_size_woubt6_k$();
    if (segmentSize === 0) {
      this.recycleHead_e8xkbv_k$();
      return this.readByte_ectjk2_k$();
    }
    var v = segment.readByte_newmca_k$();
    this.sizeMut_1 = subtract(this.sizeMut_1, 1n);
    if (segmentSize === 1) {
      this.recycleHead_e8xkbv_k$();
    }
    return v;
  }
  readShort_ilpyey_k$() {
    var tmp0_elvis_lhs = this.head_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, 2n);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.get_size_woubt6_k$();
    if (segmentSize < 2) {
      this.require_28r0pl_k$(2n);
      if (segmentSize === 0) {
        this.recycleHead_e8xkbv_k$();
        return this.readShort_ilpyey_k$();
      }
      // Inline function 'kotlinx.io.and' call
      var tmp_0 = (this.readByte_ectjk2_k$() & 255) << 8;
      // Inline function 'kotlinx.io.and' call
      var tmp$ret$1 = this.readByte_ectjk2_k$() & 255;
      return toShort(tmp_0 | tmp$ret$1);
    }
    var v = segment.readShort_7b409e_k$();
    this.sizeMut_1 = subtract(this.sizeMut_1, 2n);
    if (segmentSize === 2) {
      this.recycleHead_e8xkbv_k$();
    }
    return v;
  }
  readInt_hv8cxl_k$() {
    var tmp0_elvis_lhs = this.head_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, 4n);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.get_size_woubt6_k$();
    if (segmentSize < 4) {
      this.require_28r0pl_k$(4n);
      if (segmentSize === 0) {
        this.recycleHead_e8xkbv_k$();
        return this.readInt_hv8cxl_k$();
      }
      return this.readShort_ilpyey_k$() << 16 | this.readShort_ilpyey_k$() & 65535;
    }
    var v = segment.readInt_wxtzen_k$();
    this.sizeMut_1 = subtract(this.sizeMut_1, 4n);
    if (segmentSize === 4) {
      this.recycleHead_e8xkbv_k$();
    }
    return v;
  }
  readLong_ecnd8u_k$() {
    var tmp0_elvis_lhs = this.head_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, 8n);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.get_size_woubt6_k$();
    if (segmentSize < 8) {
      this.require_28r0pl_k$(8n);
      if (segmentSize === 0) {
        this.recycleHead_e8xkbv_k$();
        return this.readLong_ecnd8u_k$();
      }
      return shiftLeft(fromInt(this.readInt_hv8cxl_k$()), 32) | fromInt(this.readInt_hv8cxl_k$()) & 4294967295n;
    }
    var v = segment.readLong_ud3obe_k$();
    this.sizeMut_1 = subtract(this.sizeMut_1, 8n);
    if (segmentSize === 8) {
      this.recycleHead_e8xkbv_k$();
    }
    return v;
  }
  hintEmit_6b2e5m_k$() {
    return Unit_getInstance();
  }
  emit_jn20hp_k$() {
    return Unit_getInstance();
  }
  flush_shahbo_k$() {
    return Unit_getInstance();
  }
  copyTo_f80oje_k$(out, startIndex, endIndex) {
    checkBounds(this.get_size_woubt6_k$(), startIndex, endIndex);
    if (startIndex === endIndex)
      return Unit_getInstance();
    var currentOffset = startIndex;
    var remainingByteCount = subtract(endIndex, startIndex);
    out.sizeMut_1 = add(out.sizeMut_1, remainingByteCount);
    var s = this.head_1;
    while (currentOffset >= fromInt(ensureNotNull(s).get_limit_kzbf7q_k$() - s.get_pos_c7hn7x_k$() | 0)) {
      currentOffset = subtract(currentOffset, fromInt(s.get_limit_kzbf7q_k$() - s.get_pos_c7hn7x_k$() | 0));
      s = s.get_next_dym7ms_k$();
    }
    while (remainingByteCount > 0n) {
      var copy = ensureNotNull(s).sharedCopy_efss0u_k$();
      copy.set_pos_tbkcm1_k$(copy.get_pos_c7hn7x_k$() + convertToInt(currentOffset) | 0);
      var tmp0 = copy.get_pos_c7hn7x_k$() + convertToInt(remainingByteCount) | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = copy.get_limit_kzbf7q_k$();
      var tmp$ret$0 = Math.min(tmp0, b);
      copy.set_limit_3yu7ea_k$(tmp$ret$0);
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (out.head_1 == null) {
        out.head_1 = copy;
        out.tail_1 = copy;
      } else if (false) {
        out.tail_1 = ensureNotNull(out.tail_1).push_h69db4_k$(copy).compact_he236d_k$();
        if (ensureNotNull(out.tail_1).get_prev_d7or6k_k$() == null) {
          out.head_1 = out.tail_1;
        }
      } else {
        out.tail_1 = ensureNotNull(out.tail_1).push_h69db4_k$(copy);
      }
      remainingByteCount = subtract(remainingByteCount, fromInt(copy.get_limit_kzbf7q_k$() - copy.get_pos_c7hn7x_k$() | 0));
      currentOffset = 0n;
      s = s.get_next_dym7ms_k$();
    }
  }
  copyTo$default_txus2s_k$(out, startIndex, endIndex, $super) {
    startIndex = startIndex === VOID ? 0n : startIndex;
    endIndex = endIndex === VOID ? this.get_size_woubt6_k$() : endIndex;
    var tmp;
    if ($super === VOID) {
      this.copyTo_f80oje_k$(out, startIndex, endIndex);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.copyTo_f80oje_k$.call(this, out, startIndex, endIndex);
    }
    return tmp;
  }
  completeSegmentByteCount_46ltjp_k$() {
    var result = this.get_size_woubt6_k$();
    if (result === 0n)
      return 0n;
    var tail = ensureNotNull(this.tail_1);
    if (tail.get_limit_kzbf7q_k$() < 8192 && tail.get_owner_cz9qry_k$()) {
      result = subtract(result, fromInt(tail.get_limit_kzbf7q_k$() - tail.get_pos_c7hn7x_k$() | 0));
    }
    return result;
  }
  get_ugtq3c_k$(position) {
    if (position < 0n || position >= this.get_size_woubt6_k$()) {
      throw IndexOutOfBoundsException.new_kotlin_IndexOutOfBoundsException_9eekaf_k$('position (' + position.toString() + ') is not within the range [0..size(' + this.get_size_woubt6_k$().toString() + '))');
    }
    if (position === 0n) {
      return ensureNotNull(this.head_1).getUnchecked_g7gmig_k$(0);
    }
    // Inline function 'kotlinx.io.seek' call
    if (this.head_1 == null) {
      return ensureNotNull(null).getUnchecked_g7gmig_k$(convertToInt(subtract(position, -1n)));
    }
    if (subtract(this.get_size_woubt6_k$(), position) < position) {
      var s = this.tail_1;
      var offset = this.get_size_woubt6_k$();
      $l$loop: while (!(s == null) && offset > position) {
        offset = subtract(offset, fromInt(s.get_limit_kzbf7q_k$() - s.get_pos_c7hn7x_k$() | 0));
        if (offset <= position)
          break $l$loop;
        s = s.get_prev_d7or6k_k$();
      }
      var tmp0 = s;
      var offset_0 = offset;
      return ensureNotNull(tmp0).getUnchecked_g7gmig_k$(convertToInt(subtract(position, offset_0)));
    } else {
      var s_0 = this.head_1;
      var offset_1 = 0n;
      $l$loop_0: while (!(s_0 == null)) {
        var tmp0_0 = offset_1;
        // Inline function 'kotlin.Long.plus' call
        var other = s_0.get_limit_kzbf7q_k$() - s_0.get_pos_c7hn7x_k$() | 0;
        var nextOffset = add(tmp0_0, fromInt(other));
        if (nextOffset > position)
          break $l$loop_0;
        s_0 = s_0.get_next_dym7ms_k$();
        offset_1 = nextOffset;
      }
      var tmp0_1 = s_0;
      var offset_2 = offset_1;
      return ensureNotNull(tmp0_1).getUnchecked_g7gmig_k$(convertToInt(subtract(position, offset_2)));
    }
  }
  clear_j9egeb_k$() {
    return this.skip_bgd4sf_k$(this.get_size_woubt6_k$());
  }
  skip_bgd4sf_k$(byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message));
    }
    var remainingByteCount = byteCount;
    while (remainingByteCount > 0n) {
      var tmp0_elvis_lhs = this.head_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw EOFException.new_kotlinx_io_EOFException_y6c6dc_k$('Buffer exhausted before skipping ' + byteCount.toString() + ' bytes.');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var head = tmp;
      var tmp0 = remainingByteCount;
      // Inline function 'kotlinx.io.minOf' call
      var b = head.get_limit_kzbf7q_k$() - head.get_pos_c7hn7x_k$() | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b_0 = fromInt(b);
      var tmp$ret$4 = tmp0 <= b_0 ? tmp0 : b_0;
      var toSkip = convertToInt(tmp$ret$4);
      this.sizeMut_1 = subtract(this.sizeMut_1, fromInt(toSkip));
      remainingByteCount = subtract(remainingByteCount, fromInt(toSkip));
      head.set_pos_tbkcm1_k$(head.get_pos_c7hn7x_k$() + toSkip | 0);
      if (head.get_pos_c7hn7x_k$() === head.get_limit_kzbf7q_k$()) {
        this.recycleHead_e8xkbv_k$();
      }
    }
  }
  readAtMostTo_kub29z_k$(sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    var tmp0_elvis_lhs = this.head_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return -1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var s = tmp;
    var tmp0 = endIndex - startIndex | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = s.get_size_woubt6_k$();
    var toCopy = Math.min(tmp0, b);
    s.readTo_7avxxz_k$(sink, startIndex, startIndex + toCopy | 0);
    this.sizeMut_1 = subtract(this.sizeMut_1, fromInt(toCopy));
    if (isEmpty(s)) {
      this.recycleHead_e8xkbv_k$();
    }
    return toCopy;
  }
  readAtMostTo_nyls31_k$(sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message));
    }
    if (this.get_size_woubt6_k$() === 0n)
      return -1n;
    var bytesWritten = byteCount > this.get_size_woubt6_k$() ? this.get_size_woubt6_k$() : byteCount;
    sink.write_yvqjfp_k$(this, bytesWritten);
    return bytesWritten;
  }
  readTo_rtq83_k$(sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message));
    }
    if (this.get_size_woubt6_k$() < byteCount) {
      sink.write_yvqjfp_k$(this, this.get_size_woubt6_k$());
      throw EOFException.new_kotlinx_io_EOFException_y6c6dc_k$('Buffer exhausted before writing ' + byteCount.toString() + ' bytes. Only ' + this.get_size_woubt6_k$().toString() + ' bytes were written.');
    }
    sink.write_yvqjfp_k$(this, byteCount);
  }
  transferTo_lu4ka2_k$(sink) {
    var byteCount = this.get_size_woubt6_k$();
    if (byteCount > 0n) {
      sink.write_yvqjfp_k$(this, byteCount);
    }
    return byteCount;
  }
  peek_21nx7_k$() {
    return buffered(PeekSource.new_kotlinx_io_PeekSource_1nw5hc_k$(this));
  }
  writableSegment_voqx71_k$(minimumCapacity) {
    // Inline function 'kotlin.require' call
    if (!(minimumCapacity >= 1 && minimumCapacity <= 8192)) {
      var message = 'unexpected capacity (' + minimumCapacity + '), should be in range [1, 8192]';
      throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message));
    }
    if (this.tail_1 == null) {
      var result = SegmentPool_getInstance().take_2451j_k$();
      this.head_1 = result;
      this.tail_1 = result;
      return result;
    }
    var t = ensureNotNull(this.tail_1);
    if ((t.get_limit_kzbf7q_k$() + minimumCapacity | 0) > 8192 || !t.get_owner_cz9qry_k$()) {
      var newTail = t.push_h69db4_k$(SegmentPool_getInstance().take_2451j_k$());
      this.tail_1 = newTail;
      return newTail;
    }
    return t;
  }
  write_ti570x_k$(source, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = source.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    var currentOffset = startIndex;
    while (currentOffset < endIndex) {
      var tail = this.writableSegment_voqx71_k$(1);
      var tmp0 = endIndex - currentOffset | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = tail.get_remainingCapacity_c94947_k$();
      var toCopy = Math.min(tmp0, b);
      tail.write_j6nfmf_k$(source, currentOffset, currentOffset + toCopy | 0);
      currentOffset = currentOffset + toCopy | 0;
    }
    var tmp = this;
    var tmp0_0 = this.sizeMut_1;
    // Inline function 'kotlin.Long.plus' call
    var other = endIndex - startIndex | 0;
    tmp.sizeMut_1 = add(tmp0_0, fromInt(other));
  }
  write_nimze1_k$(source, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message));
    }
    var remainingByteCount = byteCount;
    while (remainingByteCount > 0n) {
      var read = source.readAtMostTo_nyls31_k$(this, remainingByteCount);
      if (read === -1n) {
        throw EOFException.new_kotlinx_io_EOFException_y6c6dc_k$('Source exhausted before reading ' + byteCount.toString() + ' bytes. ' + ('Only ' + subtract(byteCount, remainingByteCount).toString() + ' were read.'));
      }
      remainingByteCount = subtract(remainingByteCount, read);
    }
  }
  write_yvqjfp_k$(source, byteCount) {
    // Inline function 'kotlin.require' call
    if (!!(source === this)) {
      var message = 'source == this';
      throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message));
    }
    checkOffsetAndCount(source.sizeMut_1, 0n, byteCount);
    var remainingByteCount = byteCount;
    while (remainingByteCount > 0n) {
      if (remainingByteCount < fromInt(ensureNotNull(source.head_1).get_size_woubt6_k$())) {
        var tail = this.tail_1;
        var tmp;
        if (!(tail == null) && tail.get_owner_cz9qry_k$()) {
          var tmp0 = remainingByteCount;
          // Inline function 'kotlin.Long.plus' call
          var other = tail.get_limit_kzbf7q_k$();
          var tmp0_0 = add(tmp0, fromInt(other));
          // Inline function 'kotlin.Long.minus' call
          var other_0 = tail.get_shared_lt0222_k$() ? 0 : tail.get_pos_c7hn7x_k$();
          tmp = subtract(tmp0_0, fromInt(other_0)) <= 8192n;
        } else {
          tmp = false;
        }
        if (tmp) {
          ensureNotNull(source.head_1).writeTo_vgyea0_k$(tail, convertToInt(remainingByteCount));
          source.sizeMut_1 = subtract(source.sizeMut_1, remainingByteCount);
          this.sizeMut_1 = add(this.sizeMut_1, remainingByteCount);
          return Unit_getInstance();
        } else {
          source.head_1 = ensureNotNull(source.head_1).split_p6jwdi_k$(convertToInt(remainingByteCount));
        }
      }
      var segmentToMove = ensureNotNull(source.head_1);
      var movedByteCount = fromInt(segmentToMove.get_size_woubt6_k$());
      source.head_1 = segmentToMove.pop_417547_k$();
      if (source.head_1 == null) {
        source.tail_1 = null;
      }
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (this.head_1 == null) {
        this.head_1 = segmentToMove;
        this.tail_1 = segmentToMove;
      } else if (true) {
        this.tail_1 = ensureNotNull(this.tail_1).push_h69db4_k$(segmentToMove).compact_he236d_k$();
        if (ensureNotNull(this.tail_1).get_prev_d7or6k_k$() == null) {
          this.head_1 = this.tail_1;
        }
      } else {
        this.tail_1 = ensureNotNull(this.tail_1).push_h69db4_k$(segmentToMove);
      }
      source.sizeMut_1 = subtract(source.sizeMut_1, movedByteCount);
      this.sizeMut_1 = add(this.sizeMut_1, movedByteCount);
      remainingByteCount = subtract(remainingByteCount, movedByteCount);
    }
  }
  transferFrom_v29myr_k$(source) {
    var totalBytesRead = 0n;
    $l$loop: while (true) {
      var readCount = source.readAtMostTo_nyls31_k$(this, 8192n);
      if (readCount === -1n)
        break $l$loop;
      totalBytesRead = add(totalBytesRead, readCount);
    }
    return totalBytesRead;
  }
  writeByte_9ih3z3_k$(byte) {
    this.writableSegment_voqx71_k$(1).writeByte_naaedl_k$(byte);
    this.sizeMut_1 = add(this.sizeMut_1, 1n);
  }
  writeShort_vn2jsb_k$(short) {
    this.writableSegment_voqx71_k$(2).writeShort_n1l1d9_k$(short);
    this.sizeMut_1 = add(this.sizeMut_1, 2n);
  }
  writeInt_i8xgjs_k$(int) {
    this.writableSegment_voqx71_k$(4).writeInt_6bnyio_k$(int);
    this.sizeMut_1 = add(this.sizeMut_1, 4n);
  }
  writeLong_2rx6yl_k$(long) {
    this.writableSegment_voqx71_k$(8).writeLong_uftc01_k$(long);
    this.sizeMut_1 = add(this.sizeMut_1, 8n);
  }
  copy_1tks5_k$() {
    var result = Buffer.new_kotlinx_io_Buffer_ca7i83_k$();
    if (this.get_size_woubt6_k$() === 0n)
      return result;
    var head = ensureNotNull(this.head_1);
    var headCopy = head.sharedCopy_efss0u_k$();
    result.head_1 = headCopy;
    result.tail_1 = headCopy;
    var s = head.get_next_dym7ms_k$();
    while (!(s == null)) {
      result.tail_1 = ensureNotNull(result.tail_1).push_h69db4_k$(s.sharedCopy_efss0u_k$());
      s = s.get_next_dym7ms_k$();
    }
    result.sizeMut_1 = this.get_size_woubt6_k$();
    return result;
  }
  close_yn9xrc_k$() {
    return Unit_getInstance();
  }
  toString() {
    if (this.get_size_woubt6_k$() === 0n)
      return 'Buffer(size=0)';
    var maxPrintableBytes = 64;
    // Inline function 'kotlinx.io.minOf' call
    var b = this.get_size_woubt6_k$();
    // Inline function 'kotlin.comparisons.minOf' call
    var a = fromInt(maxPrintableBytes);
    var tmp$ret$1 = a <= b ? a : b;
    var len = convertToInt(tmp$ret$1);
    var builder = StringBuilder.new_kotlin_text_StringBuilder_2x6iwq_k$(imul(len, 2) + (this.get_size_woubt6_k$() > fromInt(maxPrintableBytes) ? 1 : 0) | 0);
    var bytesWritten = 0;
    // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
    UnsafeBufferOperations_getInstance();
    var curr = this.head_1;
    while (!(curr == null)) {
      var tmp0 = get_SegmentReadContextImpl();
      var segment = curr;
      var idx = 0;
      while (bytesWritten < len && idx < segment.get_size_woubt6_k$()) {
        var _unary__edvuaz = idx;
        idx = _unary__edvuaz + 1 | 0;
        var b_0 = tmp0.getUnchecked_akrbjy_k$(segment, _unary__edvuaz);
        bytesWritten = bytesWritten + 1 | 0;
        var tmp = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.shr' call
        var tmp$ret$2 = b_0 >> 4;
        var tmp_0 = builder.append_am5a4z_k$(tmp[tmp$ret$2 & 15]);
        var tmp_1 = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.and' call
        var tmp$ret$3 = b_0 & 15;
        tmp_0.append_am5a4z_k$(tmp_1[tmp$ret$3]);
      }
      curr = curr.get_next_dym7ms_k$();
    }
    if (this.get_size_woubt6_k$() > fromInt(maxPrintableBytes)) {
      builder.append_am5a4z_k$(_Char___init__impl__6a9atx(8230));
    }
    return 'Buffer(size=' + this.get_size_woubt6_k$().toString() + ' hex=' + builder.toString() + ')';
  }
  recycleHead_e8xkbv_k$() {
    var oldHead = ensureNotNull(this.head_1);
    var nextHead = oldHead.get_next_dym7ms_k$();
    this.head_1 = nextHead;
    if (nextHead == null) {
      this.tail_1 = null;
    } else {
      nextHead.set_prev_lowsh9_k$(null);
    }
    oldHead.set_next_szvhf1_k$(null);
    SegmentPool_getInstance().recycle_3mobff_k$(oldHead);
  }
  recycleTail_61sxi3_k$() {
    var oldTail = ensureNotNull(this.tail_1);
    var newTail = oldTail.get_prev_d7or6k_k$();
    this.tail_1 = newTail;
    if (newTail == null) {
      this.head_1 = null;
    } else {
      newTail.set_next_szvhf1_k$(null);
    }
    oldTail.set_prev_lowsh9_k$(null);
    SegmentPool_getInstance().recycle_3mobff_k$(oldTail);
  }
}
class PeekSource {
  static new_kotlinx_io_PeekSource_1nw5hc_k$(upstream, $box) {
    var $this = createThis(this, $box);
    $this.upstream_1 = upstream;
    $this.buffer_1 = $this.upstream_1.get_buffer_bmaafd_k$();
    $this.expectedSegment_1 = $this.buffer_1.get_head_1rxik1_k$();
    var tmp = $this;
    var tmp0_safe_receiver = $this.buffer_1.get_head_1rxik1_k$();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_pos_c7hn7x_k$();
    tmp.expectedPos_1 = tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
    $this.closed_1 = false;
    $this.pos_1 = 0n;
    return $this;
  }
  readAtMostTo_nyls31_k$(sink, byteCount) {
    // Inline function 'kotlin.check' call
    if (!!this.closed_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
    }
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message_0 = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    if (!(this.expectedSegment_1 == null || (this.expectedSegment_1 === this.buffer_1.get_head_1rxik1_k$() && this.expectedPos_1 === ensureNotNull(this.buffer_1.get_head_1rxik1_k$()).get_pos_c7hn7x_k$()))) {
      var message_1 = 'Peek source is invalid because upstream source was used';
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message_1));
    }
    if (byteCount === 0n)
      return 0n;
    // Inline function 'kotlin.Long.plus' call
    var this_0 = this.pos_1;
    var tmp$ret$7 = add(this_0, fromInt(1));
    if (!this.upstream_1.request_mpoy7z_k$(tmp$ret$7))
      return -1n;
    if (this.expectedSegment_1 == null && !(this.buffer_1.get_head_1rxik1_k$() == null)) {
      this.expectedSegment_1 = this.buffer_1.get_head_1rxik1_k$();
      this.expectedPos_1 = ensureNotNull(this.buffer_1.get_head_1rxik1_k$()).get_pos_c7hn7x_k$();
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = subtract(this.buffer_1.get_size_woubt6_k$(), this.pos_1);
    var toCopy = byteCount <= b ? byteCount : b;
    this.buffer_1.copyTo_f80oje_k$(sink, this.pos_1, add(this.pos_1, toCopy));
    this.pos_1 = add(this.pos_1, toCopy);
    return toCopy;
  }
  close_yn9xrc_k$() {
    this.closed_1 = true;
  }
}
class RealSource {
  static new_kotlinx_io_RealSource_gm75g7_k$(source, $box) {
    var $this = createThis(this, $box);
    $this.source_1 = source;
    $this.closed_1 = false;
    $this.bufferField_1 = Buffer.new_kotlinx_io_Buffer_ca7i83_k$();
    return $this;
  }
  get_source_jl0x7o_k$() {
    return this.source_1;
  }
  set_closed_z8zuoc_k$(_set____db54di) {
    this.closed_1 = _set____db54di;
  }
  get_closed_byjrzp_k$() {
    return this.closed_1;
  }
  get_buffer_bmaafd_k$() {
    return this.bufferField_1;
  }
  readAtMostTo_nyls31_k$(sink, byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.closed_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message_0));
    }
    if (this.bufferField_1.get_size_woubt6_k$() === 0n) {
      var read = this.source_1.readAtMostTo_nyls31_k$(this.bufferField_1, 8192n);
      if (read === -1n)
        return -1n;
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = this.bufferField_1.get_size_woubt6_k$();
    var toRead = byteCount <= b ? byteCount : b;
    return this.bufferField_1.readAtMostTo_nyls31_k$(sink, toRead);
  }
  exhausted_p1jt55_k$() {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.closed_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
    }
    return this.bufferField_1.exhausted_p1jt55_k$() && this.source_1.readAtMostTo_nyls31_k$(this.bufferField_1, 8192n) === -1n;
  }
  require_28r0pl_k$(byteCount) {
    if (!this.request_mpoy7z_k$(byteCount))
      throw EOFException.new_kotlinx_io_EOFException_y6c6dc_k$("Source doesn't contain required number of bytes (" + byteCount.toString() + ').');
  }
  request_mpoy7z_k$(byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.closed_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message_0));
    }
    while (this.bufferField_1.get_size_woubt6_k$() < byteCount) {
      if (this.source_1.readAtMostTo_nyls31_k$(this.bufferField_1, 8192n) === -1n)
        return false;
    }
    return true;
  }
  readByte_ectjk2_k$() {
    this.require_28r0pl_k$(1n);
    return this.bufferField_1.readByte_ectjk2_k$();
  }
  readAtMostTo_kub29z_k$(sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    if (this.bufferField_1.get_size_woubt6_k$() === 0n) {
      var read = this.source_1.readAtMostTo_nyls31_k$(this.bufferField_1, 8192n);
      if (read === -1n)
        return -1;
    }
    var tmp0 = endIndex - startIndex | 0;
    // Inline function 'kotlinx.io.minOf' call
    var b = this.bufferField_1.get_size_woubt6_k$();
    // Inline function 'kotlin.comparisons.minOf' call
    var a = fromInt(tmp0);
    var tmp$ret$2 = a <= b ? a : b;
    var toRead = convertToInt(tmp$ret$2);
    return this.bufferField_1.readAtMostTo_kub29z_k$(sink, startIndex, startIndex + toRead | 0);
  }
  readTo_rtq83_k$(sink, byteCount) {
    try {
      this.require_28r0pl_k$(byteCount);
    } catch ($p) {
      if ($p instanceof EOFException) {
        var e = $p;
        sink.write_yvqjfp_k$(this.bufferField_1, this.bufferField_1.get_size_woubt6_k$());
        throw e;
      } else {
        throw $p;
      }
    }
    this.bufferField_1.readTo_rtq83_k$(sink, byteCount);
  }
  transferTo_lu4ka2_k$(sink) {
    var totalBytesWritten = 0n;
    while (!(this.source_1.readAtMostTo_nyls31_k$(this.bufferField_1, 8192n) === -1n)) {
      var emitByteCount = this.bufferField_1.completeSegmentByteCount_46ltjp_k$();
      if (emitByteCount > 0n) {
        totalBytesWritten = add(totalBytesWritten, emitByteCount);
        sink.write_yvqjfp_k$(this.bufferField_1, emitByteCount);
      }
    }
    if (this.bufferField_1.get_size_woubt6_k$() > 0n) {
      totalBytesWritten = add(totalBytesWritten, this.bufferField_1.get_size_woubt6_k$());
      sink.write_yvqjfp_k$(this.bufferField_1, this.bufferField_1.get_size_woubt6_k$());
    }
    return totalBytesWritten;
  }
  readShort_ilpyey_k$() {
    this.require_28r0pl_k$(2n);
    return this.bufferField_1.readShort_ilpyey_k$();
  }
  readInt_hv8cxl_k$() {
    this.require_28r0pl_k$(4n);
    return this.bufferField_1.readInt_hv8cxl_k$();
  }
  readLong_ecnd8u_k$() {
    this.require_28r0pl_k$(8n);
    return this.bufferField_1.readLong_ecnd8u_k$();
  }
  skip_bgd4sf_k$(byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.closed_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message_0));
    }
    var remainingByteCount = byteCount;
    while (remainingByteCount > 0n) {
      if (this.bufferField_1.get_size_woubt6_k$() === 0n && this.source_1.readAtMostTo_nyls31_k$(this.bufferField_1, 8192n) === -1n) {
        throw EOFException.new_kotlinx_io_EOFException_y6c6dc_k$('Source exhausted before skipping ' + byteCount.toString() + ' bytes ' + ('(only ' + subtract(remainingByteCount, byteCount).toString() + ' bytes were skipped).'));
      }
      var tmp0 = remainingByteCount;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = this.bufferField_1.get_size_woubt6_k$();
      var toSkip = tmp0 <= b ? tmp0 : b;
      this.bufferField_1.skip_bgd4sf_k$(toSkip);
      remainingByteCount = subtract(remainingByteCount, toSkip);
    }
  }
  peek_21nx7_k$() {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.closed_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
    }
    return buffered(PeekSource.new_kotlinx_io_PeekSource_1nw5hc_k$(this));
  }
  close_yn9xrc_k$() {
    if (this.closed_1)
      return Unit_getInstance();
    this.closed_1 = true;
    this.source_1.close_yn9xrc_k$();
    this.bufferField_1.clear_j9egeb_k$();
  }
  toString() {
    return 'buffered(' + toString(this.source_1) + ')';
  }
}
class Companion {
  static new_kotlinx_io_Segment_Companion_fmhnvv_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance = $this;
    $this.SIZE_1 = 8192;
    $this.SHARE_MINIMUM_1 = 1024;
    return $this;
  }
  get_SIZE_fo5rta_k$() {
    return this.SIZE_1;
  }
  get_SHARE_MINIMUM_96sg1f_k$() {
    return this.SHARE_MINIMUM_1;
  }
  new_79u2a0_k$() {
    return Segment.new_kotlinx_io_Segment_h7eo7w_k$();
  }
  new_jmbae1_k$(data, pos, limit, copyTracker, owner) {
    return Segment.new_kotlinx_io_Segment_uoado9_k$(data, pos, limit, copyTracker, owner);
  }
}
class Segment {
  set_pos_tbkcm1_k$(_set____db54di) {
    this.pos_1 = _set____db54di;
  }
  get_pos_c7hn7x_k$() {
    return this.pos_1;
  }
  set_limit_3yu7ea_k$(_set____db54di) {
    this.limit_1 = _set____db54di;
  }
  get_limit_kzbf7q_k$() {
    return this.limit_1;
  }
  get_shared_lt0222_k$() {
    var tmp0_safe_receiver = this.copyTracker_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_shared_jgtlda_k$();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  set_copyTracker_zbl494_k$(_set____db54di) {
    this.copyTracker_1 = _set____db54di;
  }
  get_copyTracker_4g5ha6_k$() {
    return this.copyTracker_1;
  }
  set_owner_8qbt4d_k$(_set____db54di) {
    this.owner_1 = _set____db54di;
  }
  get_owner_cz9qry_k$() {
    return this.owner_1;
  }
  set_next_szvhf1_k$(_set____db54di) {
    this.next_1 = _set____db54di;
  }
  get_next_dym7ms_k$() {
    return this.next_1;
  }
  set_prev_lowsh9_k$(_set____db54di) {
    this.prev_1 = _set____db54di;
  }
  get_prev_d7or6k_k$() {
    return this.prev_1;
  }
  static new_kotlinx_io_Segment_h7eo7w_k$($box) {
    Companion_getInstance();
    var $this = createThis(this, $box);
    init_kotlinx_io_Segment($this);
    $this.data_1 = new Int8Array(8192);
    $this.owner_1 = true;
    $this.copyTracker_1 = null;
    return $this;
  }
  static new_kotlinx_io_Segment_uoado9_k$(data, pos, limit, shareToken, owner, $box) {
    Companion_getInstance();
    var $this = createThis(this, $box);
    init_kotlinx_io_Segment($this);
    $this.data_1 = data;
    $this.pos_1 = pos;
    $this.limit_1 = limit;
    $this.copyTracker_1 = shareToken;
    $this.owner_1 = owner;
    return $this;
  }
  sharedCopy_efss0u_k$() {
    var tmp0_elvis_lhs = this.copyTracker_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = SegmentPool_getInstance().tracker_hnhzgo_k$();
      this.copyTracker_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var t = tmp;
    var tmp_0 = this.pos_1;
    var tmp_1 = this.limit_1;
    // Inline function 'kotlin.also' call
    t.addCopy_6z3v8m_k$();
    return Segment.new_kotlinx_io_Segment_uoado9_k$(this.data_1, tmp_0, tmp_1, t, false);
  }
  pop_417547_k$() {
    var result = this.next_1;
    if (!(this.prev_1 == null)) {
      ensureNotNull(this.prev_1).next_1 = this.next_1;
    }
    if (!(this.next_1 == null)) {
      ensureNotNull(this.next_1).prev_1 = this.prev_1;
    }
    this.next_1 = null;
    this.prev_1 = null;
    return result;
  }
  push_h69db4_k$(segment) {
    segment.prev_1 = this;
    segment.next_1 = this.next_1;
    if (!(this.next_1 == null)) {
      ensureNotNull(this.next_1).prev_1 = segment;
    }
    this.next_1 = segment;
    return segment;
  }
  split_p6jwdi_k$(byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount > 0 && byteCount <= (this.limit_1 - this.pos_1 | 0))) {
      var message = 'byteCount out of range';
      throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message));
    }
    var prefix;
    if (byteCount >= 1024) {
      prefix = this.sharedCopy_efss0u_k$();
    } else {
      prefix = SegmentPool_getInstance().take_2451j_k$();
      var tmp0 = this.data_1;
      var tmp2 = prefix.data_1;
      var tmp5 = this.pos_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.pos_1 + byteCount | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, 0, tmp5, endIndex);
    }
    prefix.limit_1 = prefix.pos_1 + byteCount | 0;
    this.pos_1 = this.pos_1 + byteCount | 0;
    if (!(this.prev_1 == null)) {
      ensureNotNull(this.prev_1).push_h69db4_k$(prefix);
    } else {
      prefix.next_1 = this;
      this.prev_1 = prefix;
    }
    return prefix;
  }
  compact_he236d_k$() {
    // Inline function 'kotlin.check' call
    if (!!(this.prev_1 == null)) {
      var message = 'cannot compact';
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
    }
    if (!ensureNotNull(this.prev_1).owner_1)
      return this;
    var byteCount = this.limit_1 - this.pos_1 | 0;
    var availableByteCount = (8192 - ensureNotNull(this.prev_1).limit_1 | 0) + (ensureNotNull(this.prev_1).get_shared_lt0222_k$() ? 0 : ensureNotNull(this.prev_1).pos_1) | 0;
    if (byteCount > availableByteCount)
      return this;
    var predecessor = this.prev_1;
    this.writeTo_vgyea0_k$(ensureNotNull(predecessor), byteCount);
    var successor = this.pop_417547_k$();
    // Inline function 'kotlin.check' call
    if (!(successor == null)) {
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$('Check failed.');
    }
    SegmentPool_getInstance().recycle_3mobff_k$(this);
    return predecessor;
  }
  writeByte_naaedl_k$(byte) {
    var _unary__edvuaz = this.limit_1;
    this.limit_1 = _unary__edvuaz + 1 | 0;
    this.data_1[_unary__edvuaz] = byte;
  }
  writeShort_n1l1d9_k$(short) {
    var data = this.data_1;
    var limit = this.limit_1;
    var _unary__edvuaz = limit;
    limit = _unary__edvuaz + 1 | 0;
    data[_unary__edvuaz] = toByte((short >>> 8 | 0) & 255);
    var _unary__edvuaz_0 = limit;
    limit = _unary__edvuaz_0 + 1 | 0;
    data[_unary__edvuaz_0] = toByte(short & 255);
    this.limit_1 = limit;
  }
  writeInt_6bnyio_k$(int) {
    var data = this.data_1;
    var limit = this.limit_1;
    var _unary__edvuaz = limit;
    limit = _unary__edvuaz + 1 | 0;
    data[_unary__edvuaz] = toByte((int >>> 24 | 0) & 255);
    var _unary__edvuaz_0 = limit;
    limit = _unary__edvuaz_0 + 1 | 0;
    data[_unary__edvuaz_0] = toByte((int >>> 16 | 0) & 255);
    var _unary__edvuaz_1 = limit;
    limit = _unary__edvuaz_1 + 1 | 0;
    data[_unary__edvuaz_1] = toByte((int >>> 8 | 0) & 255);
    var _unary__edvuaz_2 = limit;
    limit = _unary__edvuaz_2 + 1 | 0;
    data[_unary__edvuaz_2] = toByte(int & 255);
    this.limit_1 = limit;
  }
  writeLong_uftc01_k$(long) {
    var data = this.data_1;
    var limit = this.limit_1;
    var _unary__edvuaz = limit;
    limit = _unary__edvuaz + 1 | 0;
    data[_unary__edvuaz] = convertToByte(shiftRightUnsigned(long, 56) & 255n);
    var _unary__edvuaz_0 = limit;
    limit = _unary__edvuaz_0 + 1 | 0;
    data[_unary__edvuaz_0] = convertToByte(shiftRightUnsigned(long, 48) & 255n);
    var _unary__edvuaz_1 = limit;
    limit = _unary__edvuaz_1 + 1 | 0;
    data[_unary__edvuaz_1] = convertToByte(shiftRightUnsigned(long, 40) & 255n);
    var _unary__edvuaz_2 = limit;
    limit = _unary__edvuaz_2 + 1 | 0;
    data[_unary__edvuaz_2] = convertToByte(shiftRightUnsigned(long, 32) & 255n);
    var _unary__edvuaz_3 = limit;
    limit = _unary__edvuaz_3 + 1 | 0;
    data[_unary__edvuaz_3] = convertToByte(shiftRightUnsigned(long, 24) & 255n);
    var _unary__edvuaz_4 = limit;
    limit = _unary__edvuaz_4 + 1 | 0;
    data[_unary__edvuaz_4] = convertToByte(shiftRightUnsigned(long, 16) & 255n);
    var _unary__edvuaz_5 = limit;
    limit = _unary__edvuaz_5 + 1 | 0;
    data[_unary__edvuaz_5] = convertToByte(shiftRightUnsigned(long, 8) & 255n);
    var _unary__edvuaz_6 = limit;
    limit = _unary__edvuaz_6 + 1 | 0;
    data[_unary__edvuaz_6] = convertToByte(long & 255n);
    this.limit_1 = limit;
  }
  readByte_newmca_k$() {
    var _unary__edvuaz = this.pos_1;
    this.pos_1 = _unary__edvuaz + 1 | 0;
    return this.data_1[_unary__edvuaz];
  }
  readShort_7b409e_k$() {
    var data = this.data_1;
    var pos = this.pos_1;
    var _unary__edvuaz = pos;
    pos = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp = (data[_unary__edvuaz] & 255) << 8;
    var _unary__edvuaz_0 = pos;
    pos = _unary__edvuaz_0 + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp$ret$1 = data[_unary__edvuaz_0] & 255;
    var s = toShort(tmp | tmp$ret$1);
    this.pos_1 = pos;
    return s;
  }
  readInt_wxtzen_k$() {
    var data = this.data_1;
    var pos = this.pos_1;
    var _unary__edvuaz = pos;
    pos = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp = (data[_unary__edvuaz] & 255) << 24;
    var _unary__edvuaz_0 = pos;
    pos = _unary__edvuaz_0 + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp_0 = tmp | (data[_unary__edvuaz_0] & 255) << 16;
    var _unary__edvuaz_1 = pos;
    pos = _unary__edvuaz_1 + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp_1 = tmp_0 | (data[_unary__edvuaz_1] & 255) << 8;
    var _unary__edvuaz_2 = pos;
    pos = _unary__edvuaz_2 + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var i = tmp_1 | data[_unary__edvuaz_2] & 255;
    this.pos_1 = pos;
    return i;
  }
  readLong_ud3obe_k$() {
    var data = this.data_1;
    var pos = this.pos_1;
    var _unary__edvuaz = pos;
    pos = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var this_0 = data[_unary__edvuaz];
    var tmp$ret$0 = fromInt(this_0) & 255n;
    var tmp = shiftLeft(tmp$ret$0, 56);
    var _unary__edvuaz_0 = pos;
    pos = _unary__edvuaz_0 + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var this_1 = data[_unary__edvuaz_0];
    var tmp$ret$1 = fromInt(this_1) & 255n;
    var tmp_0 = tmp | shiftLeft(tmp$ret$1, 48);
    var _unary__edvuaz_1 = pos;
    pos = _unary__edvuaz_1 + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var this_2 = data[_unary__edvuaz_1];
    var tmp$ret$2 = fromInt(this_2) & 255n;
    var tmp_1 = tmp_0 | shiftLeft(tmp$ret$2, 40);
    var _unary__edvuaz_2 = pos;
    pos = _unary__edvuaz_2 + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var this_3 = data[_unary__edvuaz_2];
    var tmp$ret$3 = fromInt(this_3) & 255n;
    var tmp_2 = tmp_1 | shiftLeft(tmp$ret$3, 32);
    var _unary__edvuaz_3 = pos;
    pos = _unary__edvuaz_3 + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var this_4 = data[_unary__edvuaz_3];
    var tmp$ret$4 = fromInt(this_4) & 255n;
    var tmp_3 = tmp_2 | shiftLeft(tmp$ret$4, 24);
    var _unary__edvuaz_4 = pos;
    pos = _unary__edvuaz_4 + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var this_5 = data[_unary__edvuaz_4];
    var tmp$ret$5 = fromInt(this_5) & 255n;
    var tmp_4 = tmp_3 | shiftLeft(tmp$ret$5, 16);
    var _unary__edvuaz_5 = pos;
    pos = _unary__edvuaz_5 + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var this_6 = data[_unary__edvuaz_5];
    var tmp$ret$6 = fromInt(this_6) & 255n;
    var tmp_5 = tmp_4 | shiftLeft(tmp$ret$6, 8);
    var _unary__edvuaz_6 = pos;
    pos = _unary__edvuaz_6 + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var this_7 = data[_unary__edvuaz_6];
    var v = tmp_5 | fromInt(this_7) & 255n;
    this.pos_1 = pos;
    return v;
  }
  writeTo_vgyea0_k$(sink, byteCount) {
    // Inline function 'kotlin.check' call
    if (!sink.owner_1) {
      var message = 'only owner can write';
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
    }
    if ((sink.limit_1 + byteCount | 0) > 8192) {
      if (sink.get_shared_lt0222_k$())
        throw IllegalArgumentException.new_kotlin_IllegalArgumentException_ix1chy_k$();
      if (((sink.limit_1 + byteCount | 0) - sink.pos_1 | 0) > 8192)
        throw IllegalArgumentException.new_kotlin_IllegalArgumentException_ix1chy_k$();
      var tmp0 = sink.data_1;
      var tmp2 = sink.data_1;
      var tmp5 = sink.pos_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = sink.limit_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, 0, tmp5, endIndex);
      sink.limit_1 = sink.limit_1 - sink.pos_1 | 0;
      sink.pos_1 = 0;
    }
    var tmp0_0 = this.data_1;
    var tmp2_0 = sink.data_1;
    var tmp4 = sink.limit_1;
    var tmp6 = this.pos_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = this.pos_1 + byteCount | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp0_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, tmp2_0, tmp4, tmp6, endIndex_0);
    sink.limit_1 = sink.limit_1 + byteCount | 0;
    this.pos_1 = this.pos_1 + byteCount | 0;
  }
  readTo_7avxxz_k$(dst, dstStartOffset, dstEndOffset) {
    var len = dstEndOffset - dstStartOffset | 0;
    var tmp0 = this.data_1;
    var tmp6 = this.pos_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.pos_1 + len | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, dst, dstStartOffset, tmp6, endIndex);
    this.pos_1 = this.pos_1 + len | 0;
  }
  write_j6nfmf_k$(src, srcStartOffset, srcEndOffset) {
    var tmp2 = this.data_1;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = this.limit_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = src;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp2, destinationOffset, srcStartOffset, srcEndOffset);
    this.limit_1 = this.limit_1 + (srcEndOffset - srcStartOffset | 0) | 0;
  }
  get_size_woubt6_k$() {
    return this.limit_1 - this.pos_1 | 0;
  }
  get_remainingCapacity_c94947_k$() {
    return this.data_1.length - this.limit_1 | 0;
  }
  dataAsByteArray_g1m4im_k$(readOnly) {
    return this.data_1;
  }
  writeBackData_bei69s_k$(data, bytesToCommit) {
    return Unit_getInstance();
  }
  getUnchecked_g7gmig_k$(index) {
    return this.data_1[this.pos_1 + index | 0];
  }
  setUnchecked_5zbo2s_k$(index, value) {
    this.data_1[this.limit_1 + index | 0] = value;
  }
  setUnchecked_fqg8f0_k$(index, b0, b1) {
    var d = this.data_1;
    var l = this.limit_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
  }
  setUnchecked_lebl98_k$(index, b0, b1, b2) {
    var d = this.data_1;
    var l = this.limit_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
  }
  setUnchecked_8pgckc_k$(index, b0, b1, b2, b3) {
    var d = this.data_1;
    var l = this.limit_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
    d[(l + index | 0) + 3 | 0] = b3;
  }
}
class SegmentCopyTracker {
  static new_kotlinx_io_SegmentCopyTracker_juuig_k$($box) {
    return createThis(this, $box);
  }
}
class AlwaysSharedCopyTracker extends SegmentCopyTracker {
  static new_kotlinx_io_AlwaysSharedCopyTracker_9rovdo_k$($box) {
    AlwaysSharedCopyTracker_instance = null;
    var $this = this.new_kotlinx_io_SegmentCopyTracker_juuig_k$($box);
    AlwaysSharedCopyTracker_instance = $this;
    return $this;
  }
  get_shared_jgtlda_k$() {
    return true;
  }
  addCopy_6z3v8m_k$() {
    return Unit_getInstance();
  }
  removeCopy_i5rgnt_k$() {
    return true;
  }
}
class FileSystem {}
function delete$default(path, mustExist, $super) {
  mustExist = mustExist === VOID ? true : mustExist;
  var tmp;
  if ($super === VOID) {
    this.delete_wo7h84_k$(path, mustExist);
    tmp = Unit_getInstance();
  } else {
    tmp = $super.delete_wo7h84_k$.call(this, path, mustExist);
  }
  return tmp;
}
function createDirectories$default(path, mustCreate, $super) {
  mustCreate = mustCreate === VOID ? false : mustCreate;
  var tmp;
  if ($super === VOID) {
    this.createDirectories_7nzr80_k$(path, mustCreate);
    tmp = Unit_getInstance();
  } else {
    tmp = $super.createDirectories_7nzr80_k$.call(this, path, mustCreate);
  }
  return tmp;
}
function sink$default(path, append, $super) {
  append = append === VOID ? false : append;
  return $super === VOID ? this.sink_ed8sos_k$(path, append) : $super.sink_ed8sos_k$.call(this, path, append);
}
class SystemFileSystemImpl {
  static new_kotlinx_io_files_SystemFileSystemImpl_upndjr_k$($box) {
    return createThis(this, $box);
  }
}
class FileMetadata {
  static new_kotlinx_io_files_FileMetadata_ujgqoz_k$(isRegularFile, isDirectory, size, $box) {
    isRegularFile = isRegularFile === VOID ? false : isRegularFile;
    isDirectory = isDirectory === VOID ? false : isDirectory;
    size = size === VOID ? 0n : size;
    var $this = createThis(this, $box);
    $this.isRegularFile_1 = isRegularFile;
    $this.isDirectory_1 = isDirectory;
    $this.size_1 = size;
    return $this;
  }
  get_isRegularFile_wfnog5_k$() {
    return this.isRegularFile_1;
  }
  get_isDirectory_hgpbzu_k$() {
    return this.isDirectory_1;
  }
  get_size_woubt6_k$() {
    return this.size_1;
  }
}
class UnsafeBufferOperations {
  static new_kotlinx_io_unsafe_UnsafeBufferOperations_3e283w_k$($box) {
    var $this = createThis(this, $box);
    UnsafeBufferOperations_instance = $this;
    return $this;
  }
  get_maxSafeWriteCapacity_ix7dyp_k$() {
    return 8192;
  }
  moveToTail_f7osh2_k$(buffer, bytes, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = bytes.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    var segment = Companion_getInstance().new_jmbae1_k$(bytes, startIndex, endIndex, AlwaysSharedCopyTracker_getInstance(), false);
    var tail = buffer.get_tail_yzvxr5_k$();
    if (tail == null) {
      buffer.set_head_gc442i_k$(segment);
      buffer.set_tail_w98yye_k$(segment);
    } else {
      buffer.set_tail_w98yye_k$(tail.push_h69db4_k$(segment));
    }
    var tmp0 = buffer.get_sizeMut_lwlia2_k$();
    // Inline function 'kotlin.Long.plus' call
    var other = endIndex - startIndex | 0;
    var tmp$ret$1 = add(tmp0, fromInt(other));
    buffer.set_sizeMut_cp56bw_k$(tmp$ret$1);
  }
  moveToTail$default_5ltpac_k$(buffer, bytes, startIndex, endIndex, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? bytes.length : endIndex;
    var tmp;
    if ($super === VOID) {
      this.moveToTail_f7osh2_k$(buffer, bytes, startIndex, endIndex);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.moveToTail_f7osh2_k$.call(this, buffer, bytes, startIndex, endIndex);
    }
    return tmp;
  }
  readFromHead_6suamh_k$(buffer, readAction) {
    // Inline function 'kotlin.require' call
    if (!!buffer.exhausted_p1jt55_k$()) {
      var message = 'Buffer is empty';
      throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message));
    }
    var head = ensureNotNull(buffer.get_head_1rxik1_k$());
    var bytesRead = readAction(head.dataAsByteArray_g1m4im_k$(true), head.get_pos_c7hn7x_k$(), head.get_limit_kzbf7q_k$());
    if (!(bytesRead === 0)) {
      if (bytesRead < 0)
        throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$('Returned negative read bytes count');
      if (bytesRead > head.get_size_woubt6_k$())
        throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$('Returned too many bytes');
      buffer.skip_bgd4sf_k$(fromInt(bytesRead));
    }
    return bytesRead;
  }
  readFromHead_cm0j2_k$(buffer, readAction) {
    // Inline function 'kotlin.require' call
    if (!!buffer.exhausted_p1jt55_k$()) {
      var message = 'Buffer is empty';
      throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message));
    }
    var head = ensureNotNull(buffer.get_head_1rxik1_k$());
    var bytesRead = readAction(get_SegmentReadContextImpl(), head);
    if (!(bytesRead === 0)) {
      if (bytesRead < 0)
        throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$('Returned negative read bytes count');
      if (bytesRead > head.get_size_woubt6_k$())
        throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$('Returned too many bytes');
      buffer.skip_bgd4sf_k$(fromInt(bytesRead));
    }
    return bytesRead;
  }
  writeToTail_k0ioxb_k$(buffer, minimumCapacity, writeAction) {
    var tail = buffer.writableSegment_voqx71_k$(minimumCapacity);
    var data = tail.dataAsByteArray_g1m4im_k$(false);
    var bytesWritten = writeAction(data, tail.get_limit_kzbf7q_k$(), data.length);
    if (bytesWritten === minimumCapacity) {
      tail.writeBackData_bei69s_k$(data, bytesWritten);
      tail.set_limit_3yu7ea_k$(tail.get_limit_kzbf7q_k$() + bytesWritten | 0);
      // Inline function 'kotlin.Long.plus' call
      var this_0 = buffer.get_sizeMut_lwlia2_k$();
      var tmp$ret$0 = add(this_0, fromInt(bytesWritten));
      buffer.set_sizeMut_cp56bw_k$(tmp$ret$0);
      return bytesWritten;
    }
    // Inline function 'kotlin.check' call
    if (!(0 <= bytesWritten ? bytesWritten <= tail.get_remainingCapacity_c94947_k$() : false)) {
      var message = 'Invalid number of bytes written: ' + bytesWritten + '. Should be in 0..' + tail.get_remainingCapacity_c94947_k$();
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
    }
    if (!(bytesWritten === 0)) {
      tail.writeBackData_bei69s_k$(data, bytesWritten);
      tail.set_limit_3yu7ea_k$(tail.get_limit_kzbf7q_k$() + bytesWritten | 0);
      // Inline function 'kotlin.Long.plus' call
      var this_1 = buffer.get_sizeMut_lwlia2_k$();
      var tmp$ret$3 = add(this_1, fromInt(bytesWritten));
      buffer.set_sizeMut_cp56bw_k$(tmp$ret$3);
      return bytesWritten;
    }
    if (isEmpty(tail)) {
      buffer.recycleTail_61sxi3_k$();
    }
    return bytesWritten;
  }
  writeToTail_rx223z_k$(buffer, minimumCapacity, writeAction) {
    var tail = buffer.writableSegment_voqx71_k$(minimumCapacity);
    var bytesWritten = writeAction(get_SegmentWriteContextImpl(), tail);
    if (bytesWritten === minimumCapacity) {
      tail.set_limit_3yu7ea_k$(tail.get_limit_kzbf7q_k$() + bytesWritten | 0);
      // Inline function 'kotlin.Long.plus' call
      var this_0 = buffer.get_sizeMut_lwlia2_k$();
      var tmp$ret$0 = add(this_0, fromInt(bytesWritten));
      buffer.set_sizeMut_cp56bw_k$(tmp$ret$0);
      return bytesWritten;
    }
    // Inline function 'kotlin.check' call
    if (!(0 <= bytesWritten ? bytesWritten <= tail.get_remainingCapacity_c94947_k$() : false)) {
      var message = 'Invalid number of bytes written: ' + bytesWritten + '. Should be in 0..' + tail.get_remainingCapacity_c94947_k$();
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
    }
    if (!(bytesWritten === 0)) {
      tail.set_limit_3yu7ea_k$(tail.get_limit_kzbf7q_k$() + bytesWritten | 0);
      // Inline function 'kotlin.Long.plus' call
      var this_1 = buffer.get_sizeMut_lwlia2_k$();
      var tmp$ret$3 = add(this_1, fromInt(bytesWritten));
      buffer.set_sizeMut_cp56bw_k$(tmp$ret$3);
      return bytesWritten;
    }
    if (isEmpty(tail)) {
      buffer.recycleTail_61sxi3_k$();
    }
    return bytesWritten;
  }
  iterate_sp3fsv_k$(buffer, iterationAction) {
    iterationAction(get_BufferIterationContextImpl(), buffer.get_head_1rxik1_k$());
  }
  iterate_27wlwe_k$(buffer, offset, iterationAction) {
    // Inline function 'kotlin.require' call
    if (!(offset >= 0n)) {
      var message = 'Offset must be non-negative: ' + offset.toString();
      throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message));
    }
    if (offset >= buffer.get_size_woubt6_k$()) {
      throw IndexOutOfBoundsException.new_kotlin_IndexOutOfBoundsException_9eekaf_k$("Offset should be less than buffer's size (" + buffer.get_size_woubt6_k$().toString() + '): ' + offset.toString());
    }
    $l$block_1: {
      // Inline function 'kotlinx.io.seek' call
      if (buffer.get_head_1rxik1_k$() == null) {
        iterationAction(get_BufferIterationContextImpl(), null, -1n);
        break $l$block_1;
      }
      if (subtract(buffer.get_size_woubt6_k$(), offset) < offset) {
        var s = buffer.get_tail_yzvxr5_k$();
        var offset_0 = buffer.get_size_woubt6_k$();
        $l$loop: while (!(s == null) && offset_0 > offset) {
          offset_0 = subtract(offset_0, fromInt(s.get_limit_kzbf7q_k$() - s.get_pos_c7hn7x_k$() | 0));
          if (offset_0 <= offset)
            break $l$loop;
          s = s.get_prev_d7or6k_k$();
        }
        var tmp0 = s;
        var o = offset_0;
        iterationAction(get_BufferIterationContextImpl(), tmp0, o);
        break $l$block_1;
      } else {
        var s_0 = buffer.get_head_1rxik1_k$();
        var offset_1 = 0n;
        $l$loop_0: while (!(s_0 == null)) {
          var tmp0_0 = offset_1;
          // Inline function 'kotlin.Long.plus' call
          var other = s_0.get_limit_kzbf7q_k$() - s_0.get_pos_c7hn7x_k$() | 0;
          var nextOffset = add(tmp0_0, fromInt(other));
          if (nextOffset > offset)
            break $l$loop_0;
          s_0 = s_0.get_next_dym7ms_k$();
          offset_1 = nextOffset;
        }
        var tmp0_1 = s_0;
        var o_0 = offset_1;
        iterationAction(get_BufferIterationContextImpl(), tmp0_1, o_0);
        break $l$block_1;
      }
    }
  }
  forEachSegment_g07ukb_k$(buffer, action) {
    var curr = buffer.get_head_1rxik1_k$();
    while (!(curr == null)) {
      action(get_SegmentReadContextImpl(), curr);
      curr = curr.get_next_dym7ms_k$();
    }
  }
}
class SegmentReadContext {}
class SegmentWriteContext {}
class BufferIterationContext {}
class SegmentReadContextImpl$1 {
  static new_kotlinx_io_unsafe__no_name_provided__oaxkm3_k$($box) {
    return createThis(this, $box);
  }
  getUnchecked_akrbjy_k$(segment, offset) {
    return segment.getUnchecked_g7gmig_k$(offset);
  }
}
class SegmentWriteContextImpl$1 {
  static new_kotlinx_io_unsafe__no_name_provided__mh1j51_k$($box) {
    return createThis(this, $box);
  }
  setUnchecked_b2f64i_k$(segment, offset, value) {
    segment.setUnchecked_5zbo2s_k$(offset, value);
  }
  setUnchecked_3svw1y_k$(segment, offset, b0, b1) {
    segment.setUnchecked_fqg8f0_k$(offset, b0, b1);
  }
  setUnchecked_ofazem_k$(segment, offset, b0, b1, b2) {
    segment.setUnchecked_lebl98_k$(offset, b0, b1, b2);
  }
  setUnchecked_7scgvu_k$(segment, offset, b0, b1, b2, b3) {
    segment.setUnchecked_8pgckc_k$(offset, b0, b1, b2, b3);
  }
}
class BufferIterationContextImpl$1 {
  static new_kotlinx_io_unsafe__no_name_provided__15en25_k$($box) {
    return createThis(this, $box);
  }
  next_oktxsl_k$(segment) {
    return segment.get_next_dym7ms_k$();
  }
  getUnchecked_akrbjy_k$(segment, offset) {
    return get_SegmentReadContextImpl().getUnchecked_akrbjy_k$(segment, offset);
  }
}
class IOException extends Exception {
  static new_kotlinx_io_IOException_g40fru_k$($box) {
    var $this = this.new_kotlin_Exception_y0z7co_k$($box);
    init_kotlinx_io_IOException($this);
    return $this;
  }
  static new_kotlinx_io_IOException_uuba9f_k$(message, $box) {
    var $this = this.new_kotlin_Exception_9db8xb_k$(message, $box);
    init_kotlinx_io_IOException($this);
    return $this;
  }
  static new_kotlinx_io_IOException_kd66ke_k$(cause, $box) {
    var $this = this.new_kotlin_Exception_8g70um_k$(cause, $box);
    init_kotlinx_io_IOException($this);
    return $this;
  }
  static new_kotlinx_io_IOException_q2he6h_k$(message, cause, $box) {
    var $this = this.new_kotlin_Exception_mtlthx_k$(message, cause, $box);
    init_kotlinx_io_IOException($this);
    return $this;
  }
}
class EOFException extends IOException {
  static new_kotlinx_io_EOFException_tshwlj_k$($box) {
    var $this = this.new_kotlinx_io_IOException_g40fru_k$($box);
    init_kotlinx_io_EOFException($this);
    return $this;
  }
  static new_kotlinx_io_EOFException_y6c6dc_k$(message, $box) {
    var $this = this.new_kotlinx_io_IOException_uuba9f_k$(message, $box);
    init_kotlinx_io_EOFException($this);
    return $this;
  }
  static new_kotlinx_io_EOFException_mltx6_k$(message, cause, $box) {
    var $this = this.new_kotlinx_io_IOException_q2he6h_k$(message, cause, $box);
    init_kotlinx_io_EOFException($this);
    return $this;
  }
}
class SegmentPool {
  static new_kotlinx_io_SegmentPool_uxuzfo_k$($box) {
    var $this = createThis(this, $box);
    SegmentPool_instance = $this;
    $this.MAX_SIZE_1 = 0;
    $this.byteCount_1 = 0;
    return $this;
  }
  get_MAX_SIZE_bmfi1n_k$() {
    return this.MAX_SIZE_1;
  }
  get_byteCount_pu5ghu_k$() {
    return this.byteCount_1;
  }
  take_2451j_k$() {
    return Companion_getInstance().new_79u2a0_k$();
  }
  recycle_3mobff_k$(segment) {
  }
  tracker_hnhzgo_k$() {
    return AlwaysSharedCopyTracker_getInstance();
  }
}
class FileNotFoundException extends IOException {
  static new_kotlinx_io_files_FileNotFoundException_owlrro_k$(message, $box) {
    var $this = this.new_kotlinx_io_IOException_uuba9f_k$(message, $box);
    captureStack($this, $this.$throwableCtor_3);
    return $this;
  }
}
class SystemFileSystem$1 extends SystemFileSystemImpl {
  static new_kotlinx_io_files__no_name_provided__twaxad_k$($box) {
    return this.new_kotlinx_io_files_SystemFileSystemImpl_upndjr_k$($box);
  }
  exists_hs0cko_k$(path) {
    return get_fs().existsSync(path.get_path_j6ylwq_k$());
  }
  delete_wo7h84_k$(path, mustExist) {
    if (!this.exists_hs0cko_k$(path)) {
      if (mustExist) {
        throw FileNotFoundException.new_kotlinx_io_files_FileNotFoundException_owlrro_k$('File does not exist: ' + path.toString());
      }
      return Unit_getInstance();
    }
    var tmp0_safe_receiver = withCaughtException(SystemFileSystem$o$delete$lambda(path));
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.also' call
      throw IOException.new_kotlinx_io_IOException_q2he6h_k$('Delete failed for ' + path.toString(), tmp0_safe_receiver);
    }
  }
  createDirectories_7nzr80_k$(path, mustCreate) {
    var metadata = this.metadataOrNull_ojv48r_k$(path);
    if (!(metadata == null)) {
      if (mustCreate) {
        throw IOException.new_kotlinx_io_IOException_uuba9f_k$('Path already exists: ' + path.toString());
      }
      if (metadata.get_isRegularFile_wfnog5_k$()) {
        throw IOException.new_kotlinx_io_IOException_uuba9f_k$("Path already exists and it's a file: " + path.toString());
      }
      return Unit_getInstance();
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var parts = ArrayList.new_kotlin_collections_ArrayList_h94ppk_k$();
    var p = path;
    while (!(p == null) && !this.exists_hs0cko_k$(p)) {
      parts.add_utx5q5_k$(p.toString());
      p = p.get_parent_hy4reb_k$();
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = asReversed(parts).iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      get_fs().mkdirSync(element);
    }
  }
  atomicMove_uo79h0_k$(source, destination) {
    if (!this.exists_hs0cko_k$(source)) {
      throw FileNotFoundException.new_kotlinx_io_files_FileNotFoundException_owlrro_k$('Source does not exist: ' + source.get_path_j6ylwq_k$());
    }
    var tmp0_safe_receiver = withCaughtException(SystemFileSystem$o$atomicMove$lambda(source, destination));
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.also' call
      throw IOException.new_kotlinx_io_IOException_q2he6h_k$('Move failed from ' + source.toString() + ' to ' + destination.toString(), tmp0_safe_receiver);
    }
  }
  metadataOrNull_ojv48r_k$(path) {
    if (!this.exists_hs0cko_k$(path))
      return null;
    var metadata = {_v: null};
    var tmp0_safe_receiver = withCaughtException(SystemFileSystem$o$metadataOrNull$lambda(path, metadata));
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.also' call
      throw IOException.new_kotlinx_io_IOException_q2he6h_k$('Stat failed for ' + path.toString(), tmp0_safe_receiver);
    }
    return metadata._v;
  }
  source_rb8tqf_k$(path) {
    return FileSource.new_kotlinx_io_files_FileSource_k39twl_k$(path);
  }
  sink_ed8sos_k$(path, append) {
    return FileSink.new_kotlinx_io_files_FileSink_7loeri_k$(path, append);
  }
  resolve_reyh1k_k$(path) {
    if (!this.exists_hs0cko_k$(path))
      throw FileNotFoundException.new_kotlinx_io_files_FileNotFoundException_owlrro_k$(path.get_path_j6ylwq_k$());
    return Path_2(get_fs().realpathSync.native(path.get_path_j6ylwq_k$()));
  }
  list_p4xs2e_k$(directory) {
    var tmp0_elvis_lhs = this.metadataOrNull_ojv48r_k$(directory);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw FileNotFoundException.new_kotlinx_io_files_FileNotFoundException_owlrro_k$(directory.get_path_j6ylwq_k$());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var metadata = tmp;
    if (!metadata.get_isDirectory_hgpbzu_k$())
      throw IOException.new_kotlinx_io_IOException_uuba9f_k$('Not a directory: ' + directory.get_path_j6ylwq_k$());
    var tmp1_elvis_lhs = get_fs().opendirSync(directory.get_path_j6ylwq_k$());
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      throw IOException.new_kotlinx_io_IOException_uuba9f_k$('Unable to read directory: ' + directory.get_path_j6ylwq_k$());
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var dir = tmp_0;
    try {
      // Inline function 'kotlin.collections.buildList' call
      // Inline function 'kotlin.collections.buildListInternal' call
      // Inline function 'kotlin.apply' call
      var this_0 = ArrayList.new_kotlin_collections_ArrayList_h94ppk_k$();
      var child = dir.readSync();
      while (!(child == null)) {
        this_0.add_utx5q5_k$(Path_0(directory, [child.name]));
        child = dir.readSync();
      }
      return this_0.build_nmwvly_k$();
    }finally {
      dir.closeSync();
    }
  }
}
class Path {
  static new_kotlinx_io_files_Path_8t2kdx_k$(rawPath, any, $box) {
    var $this = createThis(this, $box);
    $this.path_1 = removeTrailingSeparators(rawPath);
    return $this;
  }
  get_path_j6ylwq_k$() {
    return this.path_1;
  }
  get_parent_hy4reb_k$() {
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.path_1;
    if (charSequenceLength(this_0) === 0)
      return null;
    if (get_isWindows()) {
      if (!contains(this.path_1, _Char___init__impl__6a9atx(47)) && !contains(this.path_1, _Char___init__impl__6a9atx(92))) {
        return null;
      }
    } else if (!contains(this.path_1, get_SystemPathSeparator())) {
      return null;
    }
    var p = get_path().dirname(this.path_1);
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(p) === 0) {
      tmp = null;
    } else {
      if (p === this.path_1) {
        tmp = null;
      } else {
        tmp = Path_2(p);
      }
    }
    return tmp;
  }
  get_isAbsolute_4pnyd2_k$() {
    return get_path().isAbsolute(this.path_1);
  }
  get_name_woqyms_k$() {
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.path_1;
    if (charSequenceLength(this_0) === 0)
      return '';
    var p = get_path().basename(this.path_1);
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(p) === 0) {
      tmp = '';
    } else {
      tmp = p;
    }
    return tmp;
  }
  toString() {
    return this.path_1;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Path))
      return false;
    return this.path_1 === other.path_1;
  }
  hashCode() {
    return getStringHashCode(this.path_1);
  }
}
class FileSource {
  static new_kotlinx_io_files_FileSource_k39twl_k$(path, $box) {
    var $this = createThis(this, $box);
    $this.path_1 = path;
    $this.buffer_1 = null;
    $this.closed_1 = false;
    $this.offset_1 = 0;
    $this.fd_1 = open($this, $this.path_1);
    return $this;
  }
  readAtMostTo_nyls31_k$(sink, byteCount) {
    // Inline function 'kotlin.check' call
    if (!!this.closed_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
    }
    if (byteCount === 0n) {
      return 0n;
    }
    if (this.buffer_1 === null) {
      var tmp0_safe_receiver = withCaughtException(FileSource$readAtMostTo$lambda(this));
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.also' call
        throw IOException.new_kotlinx_io_IOException_q2he6h_k$('Failed to read data from ' + this.path_1.path_1, tmp0_safe_receiver);
      }
    }
    var len = ensureNotNull(this.buffer_1).length;
    if (this.offset_1 >= len) {
      return -1n;
    }
    // Inline function 'kotlinx.io.minOf' call
    var b = len - this.offset_1 | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    var b_0 = fromInt(b);
    var bytesToRead = byteCount <= b_0 ? byteCount : b_0;
    var inductionVariable = 0n;
    if (inductionVariable < bytesToRead)
      do {
        var i = inductionVariable;
        inductionVariable = add(inductionVariable, 1n);
        var tmp = ensureNotNull(this.buffer_1);
        var _unary__edvuaz = this.offset_1;
        this.offset_1 = _unary__edvuaz + 1 | 0;
        sink.writeByte_9ih3z3_k$(tmp.readInt8(_unary__edvuaz));
      }
       while (inductionVariable < bytesToRead);
    return bytesToRead;
  }
  close_yn9xrc_k$() {
    if (!this.closed_1) {
      this.closed_1 = true;
      get_fs().closeSync(this.fd_1);
    }
  }
}
class FileSink {
  static new_kotlinx_io_files_FileSink_7loeri_k$(path, append, $box) {
    var $this = createThis(this, $box);
    $this.closed_1 = false;
    $this.fd_1 = open_0($this, path, append);
    return $this;
  }
  write_yvqjfp_k$(source, byteCount) {
    // Inline function 'kotlin.check' call
    if (!!this.closed_1) {
      var message = 'Sink is closed.';
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
    }
    if (byteCount === 0n) {
      return Unit_getInstance();
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = source.get_size_woubt6_k$();
    var remainingBytes = byteCount <= b ? byteCount : b;
    while (remainingBytes > 0n) {
      var segmentBytes = 0;
      // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.readFromHead' call
      UnsafeBufferOperations_getInstance();
      // Inline function 'kotlin.require' call
      if (!!source.exhausted_p1jt55_k$()) {
        var message_0 = 'Buffer is empty';
        throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message_0));
      }
      var head = ensureNotNull(source.get_head_1rxik1_k$());
      var tmp0 = head.dataAsByteArray_g1m4im_k$(true);
      var tmp2 = head.get_pos_c7hn7x_k$();
      segmentBytes = head.get_limit_kzbf7q_k$() - tmp2 | 0;
      var buf = get_buffer().Buffer.allocUnsafe(segmentBytes);
      var inductionVariable = 0;
      var last = segmentBytes;
      if (inductionVariable < last)
        do {
          var offset = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          buf.writeInt8(tmp0[tmp2 + offset | 0], offset);
        }
         while (inductionVariable < last);
      var tmp0_safe_receiver = withCaughtException(FileSink$write$lambda(this, buf));
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.also' call
        throw IOException.new_kotlinx_io_IOException_q2he6h_k$('Write failed', tmp0_safe_receiver);
      }
      var bytesRead = segmentBytes;
      if (!(bytesRead === 0)) {
        if (bytesRead < 0)
          throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$('Returned negative read bytes count');
        if (bytesRead > head.get_size_woubt6_k$())
          throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$('Returned too many bytes');
        source.skip_bgd4sf_k$(fromInt(bytesRead));
      }
      var tmp0_0 = remainingBytes;
      // Inline function 'kotlin.Long.minus' call
      var other = segmentBytes;
      remainingBytes = subtract(tmp0_0, fromInt(other));
    }
  }
  flush_shahbo_k$() {
    return Unit_getInstance();
  }
  close_yn9xrc_k$() {
    if (!this.closed_1) {
      this.closed_1 = true;
      get_fs().closeSync(this.fd_1);
    }
  }
}
//endregion
function get_HEX_DIGIT_CHARS() {
  _init_properties__Util_kt__g8tcl9();
  return HEX_DIGIT_CHARS;
}
var HEX_DIGIT_CHARS;
function and(_this__u8e3s4, other) {
  _init_properties__Util_kt__g8tcl9();
  return _this__u8e3s4 & other;
}
function checkBounds(size, startIndex, endIndex) {
  _init_properties__Util_kt__g8tcl9();
  if (startIndex < 0n || endIndex > size) {
    throw IndexOutOfBoundsException.new_kotlin_IndexOutOfBoundsException_9eekaf_k$('startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') are not within the range [0..size(' + size.toString() + '))');
  }
  if (startIndex > endIndex) {
    throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$('startIndex (' + startIndex.toString() + ') > endIndex (' + endIndex.toString() + ')');
  }
}
function checkByteCount(byteCount) {
  _init_properties__Util_kt__g8tcl9();
  // Inline function 'kotlin.require' call
  if (!(byteCount >= 0n)) {
    var message = 'byteCount (' + byteCount.toString() + ') < 0';
    throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message));
  }
}
function minOf(a, b) {
  _init_properties__Util_kt__g8tcl9();
  // Inline function 'kotlin.comparisons.minOf' call
  var b_0 = fromInt(b);
  return a <= b_0 ? a : b_0;
}
function checkBounds_0(size, startIndex, endIndex) {
  _init_properties__Util_kt__g8tcl9();
  return checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
}
function checkOffsetAndCount(size, offset, byteCount) {
  _init_properties__Util_kt__g8tcl9();
  if (offset < 0n || offset > size || subtract(size, offset) < byteCount || byteCount < 0n) {
    throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$('offset (' + offset.toString() + ') and byteCount (' + byteCount.toString() + ') are not within the range [0..size(' + size.toString() + '))');
  }
}
function minOf_0(a, b) {
  _init_properties__Util_kt__g8tcl9();
  // Inline function 'kotlin.comparisons.minOf' call
  var a_0 = fromInt(a);
  return a_0 <= b ? a_0 : b;
}
function shr(_this__u8e3s4, other) {
  _init_properties__Util_kt__g8tcl9();
  return _this__u8e3s4 >> other;
}
function and_0(_this__u8e3s4, other) {
  _init_properties__Util_kt__g8tcl9();
  return fromInt(_this__u8e3s4) & other;
}
var properties_initialized__Util_kt_67kc5b;
function _init_properties__Util_kt__g8tcl9() {
  if (!properties_initialized__Util_kt_67kc5b) {
    properties_initialized__Util_kt_67kc5b = true;
    // Inline function 'kotlin.charArrayOf' call
    HEX_DIGIT_CHARS = charArrayOf([_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(49), _Char___init__impl__6a9atx(50), _Char___init__impl__6a9atx(51), _Char___init__impl__6a9atx(52), _Char___init__impl__6a9atx(53), _Char___init__impl__6a9atx(54), _Char___init__impl__6a9atx(55), _Char___init__impl__6a9atx(56), _Char___init__impl__6a9atx(57), _Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(98), _Char___init__impl__6a9atx(99), _Char___init__impl__6a9atx(100), _Char___init__impl__6a9atx(101), _Char___init__impl__6a9atx(102)]);
  }
}
function throwEof($this, byteCount) {
  throw EOFException.new_kotlinx_io_EOFException_y6c6dc_k$("Buffer doesn't contain required number of bytes (size: " + $this.get_size_woubt6_k$().toString() + ', required: ' + byteCount.toString() + ')');
}
function pushSegment($this, newTail, tryCompact) {
  if ($this.head_1 == null) {
    $this.head_1 = newTail;
    $this.tail_1 = newTail;
  } else if (tryCompact) {
    $this.tail_1 = ensureNotNull($this.tail_1).push_h69db4_k$(newTail).compact_he236d_k$();
    if (ensureNotNull($this.tail_1).get_prev_d7or6k_k$() == null) {
      $this.head_1 = $this.tail_1;
    }
  } else {
    $this.tail_1 = ensureNotNull($this.tail_1).push_h69db4_k$(newTail);
  }
}
function seek(_this__u8e3s4, fromIndex, lambda) {
  if (_this__u8e3s4.head_1 == null) {
    return lambda(null, -1n);
  }
  if (subtract(_this__u8e3s4.get_size_woubt6_k$(), fromIndex) < fromIndex) {
    var s = _this__u8e3s4.tail_1;
    var offset = _this__u8e3s4.get_size_woubt6_k$();
    $l$loop: while (!(s == null) && offset > fromIndex) {
      offset = subtract(offset, fromInt(s.get_limit_kzbf7q_k$() - s.get_pos_c7hn7x_k$() | 0));
      if (offset <= fromIndex)
        break $l$loop;
      s = s.get_prev_d7or6k_k$();
    }
    return lambda(s, offset);
  } else {
    var s_0 = _this__u8e3s4.head_1;
    var offset_0 = 0n;
    $l$loop_0: while (!(s_0 == null)) {
      var tmp0 = offset_0;
      // Inline function 'kotlin.Long.plus' call
      var other = s_0.get_limit_kzbf7q_k$() - s_0.get_pos_c7hn7x_k$() | 0;
      var nextOffset = add(tmp0, fromInt(other));
      if (nextOffset > fromIndex)
        break $l$loop_0;
      s_0 = s_0.get_next_dym7ms_k$();
      offset_0 = nextOffset;
    }
    return lambda(s_0, offset_0);
  }
}
function indexOf(_this__u8e3s4, byte, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0n : startIndex;
  endIndex = endIndex === VOID ? _this__u8e3s4.get_size_woubt6_k$() : endIndex;
  // Inline function 'kotlin.comparisons.minOf' call
  var b = _this__u8e3s4.get_size_woubt6_k$();
  var endOffset = endIndex <= b ? endIndex : b;
  checkBounds(_this__u8e3s4.get_size_woubt6_k$(), startIndex, endOffset);
  if (startIndex === endOffset)
    return -1n;
  // Inline function 'kotlinx.io.seek' call
  if (_this__u8e3s4.get_head_1rxik1_k$() == null) {
    if (-1n === -1n) {
      return -1n;
    }
    var segment = null;
    var offset = -1n;
    do {
      // Inline function 'kotlin.check' call
      if (!(endOffset > offset)) {
        throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$('Check failed.');
      }
      ensureNotNull(segment);
      var tmp = segment;
      // Inline function 'kotlin.comparisons.maxOf' call
      var a = convertToInt(subtract(startIndex, offset));
      var tmp_0 = Math.max(a, 0);
      var tmp0 = segment.get_size_woubt6_k$();
      // Inline function 'kotlin.comparisons.minOf' call
      var b_0 = convertToInt(subtract(endOffset, offset));
      var tmp$ret$3 = Math.min(tmp0, b_0);
      var idx = indexOf_0(tmp, byte, tmp_0, tmp$ret$3);
      if (!(idx === -1)) {
        return add(offset, fromInt(idx));
      }
      var tmp0_0 = offset;
      // Inline function 'kotlin.Long.plus' call
      var other = segment.get_size_woubt6_k$();
      offset = add(tmp0_0, fromInt(other));
      segment = segment.get_next_dym7ms_k$();
    }
     while (!(segment == null) && offset < endOffset);
    return -1n;
  }
  if (subtract(_this__u8e3s4.get_size_woubt6_k$(), startIndex) < startIndex) {
    var s = _this__u8e3s4.get_tail_yzvxr5_k$();
    var offset_0 = _this__u8e3s4.get_size_woubt6_k$();
    $l$loop: while (!(s == null) && offset_0 > startIndex) {
      offset_0 = subtract(offset_0, fromInt(s.get_limit_kzbf7q_k$() - s.get_pos_c7hn7x_k$() | 0));
      if (offset_0 <= startIndex)
        break $l$loop;
      s = s.get_prev_d7or6k_k$();
    }
    var tmp0_1 = s;
    var o = offset_0;
    if (o === -1n) {
      return -1n;
    }
    var segment_0 = tmp0_1;
    var offset_1 = o;
    do {
      // Inline function 'kotlin.check' call
      if (!(endOffset > offset_1)) {
        throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$('Check failed.');
      }
      ensureNotNull(segment_0);
      var tmp_1 = segment_0;
      // Inline function 'kotlin.comparisons.maxOf' call
      var a_0 = convertToInt(subtract(startIndex, offset_1));
      var tmp_2 = Math.max(a_0, 0);
      var tmp0_2 = segment_0.get_size_woubt6_k$();
      // Inline function 'kotlin.comparisons.minOf' call
      var b_1 = convertToInt(subtract(endOffset, offset_1));
      var tmp$ret$8 = Math.min(tmp0_2, b_1);
      var idx_0 = indexOf_0(tmp_1, byte, tmp_2, tmp$ret$8);
      if (!(idx_0 === -1)) {
        return add(offset_1, fromInt(idx_0));
      }
      var tmp0_3 = offset_1;
      // Inline function 'kotlin.Long.plus' call
      var other_0 = segment_0.get_size_woubt6_k$();
      offset_1 = add(tmp0_3, fromInt(other_0));
      segment_0 = segment_0.get_next_dym7ms_k$();
    }
     while (!(segment_0 == null) && offset_1 < endOffset);
    return -1n;
  } else {
    var s_0 = _this__u8e3s4.get_head_1rxik1_k$();
    var offset_2 = 0n;
    $l$loop_0: while (!(s_0 == null)) {
      var tmp0_4 = offset_2;
      // Inline function 'kotlin.Long.plus' call
      var other_1 = s_0.get_limit_kzbf7q_k$() - s_0.get_pos_c7hn7x_k$() | 0;
      var nextOffset = add(tmp0_4, fromInt(other_1));
      if (nextOffset > startIndex)
        break $l$loop_0;
      s_0 = s_0.get_next_dym7ms_k$();
      offset_2 = nextOffset;
    }
    var tmp0_5 = s_0;
    var o_0 = offset_2;
    if (o_0 === -1n) {
      return -1n;
    }
    var segment_1 = tmp0_5;
    var offset_3 = o_0;
    do {
      // Inline function 'kotlin.check' call
      if (!(endOffset > offset_3)) {
        throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$('Check failed.');
      }
      ensureNotNull(segment_1);
      var tmp_3 = segment_1;
      // Inline function 'kotlin.comparisons.maxOf' call
      var a_1 = convertToInt(subtract(startIndex, offset_3));
      var tmp_4 = Math.max(a_1, 0);
      var tmp0_6 = segment_1.get_size_woubt6_k$();
      // Inline function 'kotlin.comparisons.minOf' call
      var b_2 = convertToInt(subtract(endOffset, offset_3));
      var tmp$ret$13 = Math.min(tmp0_6, b_2);
      var idx_1 = indexOf_0(tmp_3, byte, tmp_4, tmp$ret$13);
      if (!(idx_1 === -1)) {
        return add(offset_3, fromInt(idx_1));
      }
      var tmp0_7 = offset_3;
      // Inline function 'kotlin.Long.plus' call
      var other_2 = segment_1.get_size_woubt6_k$();
      offset_3 = add(tmp0_7, fromInt(other_2));
      segment_1 = segment_1.get_next_dym7ms_k$();
    }
     while (!(segment_1 == null) && offset_3 < endOffset);
    return -1n;
  }
}
function readByteString(_this__u8e3s4, byteCount) {
  return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(readByteArray_0(_this__u8e3s4, byteCount));
}
function buffered(_this__u8e3s4) {
  return RealSource.new_kotlinx_io_RealSource_gm75g7_k$(_this__u8e3s4);
}
function _get_upstream__8b4500($this) {
  return $this.upstream_1;
}
function _get_buffer__tgqkad($this) {
  return $this.buffer_1;
}
function _set_expectedSegment__ufl0ui($this, _set____db54di) {
  $this.expectedSegment_1 = _set____db54di;
}
function _get_expectedSegment__uhstm2($this) {
  return $this.expectedSegment_1;
}
function _set_expectedPos__7eepj($this, _set____db54di) {
  $this.expectedPos_1 = _set____db54di;
}
function _get_expectedPos__u2zrmd($this) {
  return $this.expectedPos_1;
}
function _set_closed__kdb0et($this, _set____db54di) {
  $this.closed_1 = _set____db54di;
}
function _get_closed__iwkfs1($this) {
  return $this.closed_1;
}
function _set_pos__4wcab5($this, _set____db54di) {
  $this.pos_1 = _set____db54di;
}
function _get_pos__e6evgd($this) {
  return $this.pos_1;
}
function _get_bufferField__cx5nm1($this) {
  return $this.bufferField_1;
}
function checkNotClosed($this) {
  // Inline function 'kotlin.check' call
  if (!!$this.closed_1) {
    var message = 'Source is closed.';
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
  }
}
function _get_data__d5abxd($this) {
  return $this.data_1;
}
var Companion_instance;
function Companion_getInstance() {
  if (Companion_instance === VOID)
    Companion.new_kotlinx_io_Segment_Companion_fmhnvv_k$();
  return Companion_instance;
}
function init_kotlinx_io_Segment(_this__u8e3s4) {
  Companion_getInstance();
  _this__u8e3s4.pos_1 = 0;
  _this__u8e3s4.limit_1 = 0;
  _this__u8e3s4.copyTracker_1 = null;
  _this__u8e3s4.owner_1 = false;
  _this__u8e3s4.next_1 = null;
  _this__u8e3s4.prev_1 = null;
}
function isEmpty(_this__u8e3s4) {
  return _this__u8e3s4.get_size_woubt6_k$() === 0;
}
var AlwaysSharedCopyTracker_instance;
function AlwaysSharedCopyTracker_getInstance() {
  if (AlwaysSharedCopyTracker_instance === VOID)
    AlwaysSharedCopyTracker.new_kotlinx_io_AlwaysSharedCopyTracker_9rovdo_k$();
  return AlwaysSharedCopyTracker_instance;
}
function indexOf_0(_this__u8e3s4, byte, startOffset, endOffset) {
  // Inline function 'kotlin.require' call
  if (!(0 <= startOffset ? startOffset < _this__u8e3s4.get_size_woubt6_k$() : false)) {
    var message = '' + startOffset;
    throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message));
  }
  // Inline function 'kotlin.require' call
  if (!(startOffset <= endOffset ? endOffset <= _this__u8e3s4.get_size_woubt6_k$() : false)) {
    var message_0 = '' + endOffset;
    throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message_0));
  }
  var p = _this__u8e3s4.pos_1;
  var data = _this__u8e3s4.dataAsByteArray_g1m4im_k$(true);
  var inductionVariable = startOffset;
  if (inductionVariable < endOffset)
    do {
      var idx = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (data[p + idx | 0] === byte) {
        return idx;
      }
    }
     while (inductionVariable < endOffset);
  return -1;
}
function get_HEX_DIGIT_BYTES() {
  _init_properties_Sinks_kt__92ml72();
  return HEX_DIGIT_BYTES;
}
var HEX_DIGIT_BYTES;
function writeToInternalBuffer(_this__u8e3s4, lambda) {
  _init_properties_Sinks_kt__92ml72();
  lambda(_this__u8e3s4.get_buffer_bmaafd_k$());
  _this__u8e3s4.hintEmit_6b2e5m_k$();
}
var properties_initialized_Sinks_kt_u7wmts;
function _init_properties_Sinks_kt__92ml72() {
  if (!properties_initialized_Sinks_kt_u7wmts) {
    properties_initialized_Sinks_kt_u7wmts = true;
    var tmp = 0;
    var tmp_0 = new Int8Array(16);
    while (tmp < 16) {
      var tmp_1 = tmp;
      var tmp_2;
      if (tmp_1 < 10) {
        // Inline function 'kotlin.code' call
        var this_0 = _Char___init__impl__6a9atx(48);
        tmp_2 = Char__toInt_impl_vasixd(this_0);
      } else {
        // Inline function 'kotlin.code' call
        var this_1 = _Char___init__impl__6a9atx(97);
        tmp_2 = Char__toInt_impl_vasixd(this_1) - 10 | 0;
      }
      tmp_0[tmp_1] = toByte(tmp_2 + tmp_1 | 0);
      tmp = tmp + 1 | 0;
    }
    HEX_DIGIT_BYTES = tmp_0;
  }
}
function readByteArray(_this__u8e3s4) {
  return readByteArrayImpl(_this__u8e3s4, -1);
}
function readByteArray_0(_this__u8e3s4, byteCount) {
  // Inline function 'kotlinx.io.checkByteCount' call
  var byteCount_0 = fromInt(byteCount);
  // Inline function 'kotlin.require' call
  if (!(byteCount_0 >= 0n)) {
    var message = 'byteCount (' + byteCount_0.toString() + ') < 0';
    throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message));
  }
  return readByteArrayImpl(_this__u8e3s4, byteCount);
}
function indexOf_1(_this__u8e3s4, byte, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0n : startIndex;
  endIndex = endIndex === VOID ? 9223372036854775807n : endIndex;
  // Inline function 'kotlin.require' call
  if (!(0n <= startIndex ? startIndex <= endIndex : false)) {
    var tmp;
    if (endIndex < 0n) {
      tmp = 'startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') should be non negative';
    } else {
      tmp = 'startIndex (' + startIndex.toString() + ') is not within the range [0..endIndex(' + endIndex.toString() + '))';
    }
    var message = tmp;
    throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message));
  }
  if (startIndex === endIndex)
    return -1n;
  var offset = startIndex;
  $l$loop: while (true) {
    var tmp_0;
    if (offset < endIndex) {
      // Inline function 'kotlin.Long.plus' call
      var this_0 = offset;
      var tmp$ret$2 = add(this_0, fromInt(1));
      tmp_0 = _this__u8e3s4.request_mpoy7z_k$(tmp$ret$2);
    } else {
      tmp_0 = false;
    }
    if (!tmp_0) {
      break $l$loop;
    }
    var tmp_1 = _this__u8e3s4.get_buffer_bmaafd_k$();
    var tmp_2 = offset;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = _this__u8e3s4.get_buffer_bmaafd_k$().get_size_woubt6_k$();
    var tmp$ret$3 = endIndex <= b ? endIndex : b;
    var idx = indexOf(tmp_1, byte, tmp_2, tmp$ret$3);
    if (!(idx === -1n)) {
      return idx;
    }
    offset = _this__u8e3s4.get_buffer_bmaafd_k$().get_size_woubt6_k$();
  }
  return -1n;
}
function readByteArrayImpl(_this__u8e3s4, size) {
  var arraySize = size;
  if (size === -1) {
    var fetchSize = 2147483647n;
    while (_this__u8e3s4.get_buffer_bmaafd_k$().get_size_woubt6_k$() < 2147483647n && _this__u8e3s4.request_mpoy7z_k$(fetchSize)) {
      // Inline function 'kotlin.Long.times' call
      var this_0 = fetchSize;
      fetchSize = multiply(this_0, fromInt(2));
    }
    // Inline function 'kotlin.check' call
    if (!(_this__u8e3s4.get_buffer_bmaafd_k$().get_size_woubt6_k$() < 2147483647n)) {
      var message = "Can't create an array of size " + _this__u8e3s4.get_buffer_bmaafd_k$().get_size_woubt6_k$().toString();
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
    }
    arraySize = convertToInt(_this__u8e3s4.get_buffer_bmaafd_k$().get_size_woubt6_k$());
  } else {
    _this__u8e3s4.require_28r0pl_k$(fromInt(size));
  }
  var array = new Int8Array(arraySize);
  readTo(_this__u8e3s4.get_buffer_bmaafd_k$(), array);
  return array;
}
function readTo(_this__u8e3s4, sink, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? sink.length : endIndex;
  // Inline function 'kotlinx.io.checkBounds' call
  var size = sink.length;
  checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
  var offset = startIndex;
  while (offset < endIndex) {
    var bytesRead = _this__u8e3s4.readAtMostTo_kub29z_k$(sink, offset, endIndex);
    if (bytesRead === -1) {
      throw EOFException.new_kotlinx_io_EOFException_y6c6dc_k$('Source exhausted before reading ' + (endIndex - startIndex | 0) + ' bytes. ' + ('Only ' + bytesRead + ' bytes were read.'));
    }
    offset = offset + bytesRead | 0;
  }
}
function readString(_this__u8e3s4, byteCount) {
  _this__u8e3s4.require_28r0pl_k$(byteCount);
  return commonReadUtf8(_this__u8e3s4.get_buffer_bmaafd_k$(), byteCount);
}
function readString_0(_this__u8e3s4) {
  _this__u8e3s4.request_mpoy7z_k$(9223372036854775807n);
  return commonReadUtf8(_this__u8e3s4.get_buffer_bmaafd_k$(), _this__u8e3s4.get_buffer_bmaafd_k$().get_size_woubt6_k$());
}
function writeString(_this__u8e3s4, string, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? string.length : endIndex;
  // Inline function 'kotlinx.io.checkBounds' call
  var size = string.length;
  checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
  // Inline function 'kotlinx.io.writeToInternalBuffer' call
  // Inline function 'kotlinx.io.commonWriteUtf8' call
  var this_0 = _this__u8e3s4.get_buffer_bmaafd_k$();
  var i = startIndex;
  while (i < endIndex) {
    var p0 = i;
    // Inline function 'kotlin.code' call
    var this_1 = charCodeAt(string, p0);
    var c = Char__toInt_impl_vasixd(this_1);
    if (c < 128) {
      UnsafeBufferOperations_getInstance();
      $l$block_0: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail = this_0.writableSegment_voqx71_k$(1);
        var ctx = get_SegmentWriteContextImpl();
        var segmentOffset = -i | 0;
        // Inline function 'kotlin.comparisons.minOf' call
        var b = i + tail.get_remainingCapacity_c94947_k$() | 0;
        var runLimit = Math.min(endIndex, b);
        var _unary__edvuaz = i;
        i = _unary__edvuaz + 1 | 0;
        ctx.setUnchecked_b2f64i_k$(tail, segmentOffset + _unary__edvuaz | 0, toByte(c));
        $l$loop: while (i < runLimit) {
          var p0_0 = i;
          // Inline function 'kotlin.code' call
          var this_2 = charCodeAt(string, p0_0);
          c = Char__toInt_impl_vasixd(this_2);
          if (c >= 128)
            break $l$loop;
          var _unary__edvuaz_0 = i;
          i = _unary__edvuaz_0 + 1 | 0;
          ctx.setUnchecked_b2f64i_k$(tail, segmentOffset + _unary__edvuaz_0 | 0, toByte(c));
        }
        var bytesWritten = i + segmentOffset | 0;
        if (bytesWritten === 1) {
          tail.set_limit_3yu7ea_k$(tail.get_limit_kzbf7q_k$() + bytesWritten | 0);
          // Inline function 'kotlin.Long.plus' call
          var this_3 = this_0.get_sizeMut_lwlia2_k$();
          var tmp$ret$7 = add(this_3, fromInt(bytesWritten));
          this_0.set_sizeMut_cp56bw_k$(tmp$ret$7);
          break $l$block_0;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten ? bytesWritten <= tail.get_remainingCapacity_c94947_k$() : false)) {
          var message = 'Invalid number of bytes written: ' + bytesWritten + '. Should be in 0..' + tail.get_remainingCapacity_c94947_k$();
          throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
        }
        if (!(bytesWritten === 0)) {
          tail.set_limit_3yu7ea_k$(tail.get_limit_kzbf7q_k$() + bytesWritten | 0);
          // Inline function 'kotlin.Long.plus' call
          var this_4 = this_0.get_sizeMut_lwlia2_k$();
          var tmp$ret$11 = add(this_4, fromInt(bytesWritten));
          this_0.set_sizeMut_cp56bw_k$(tmp$ret$11);
          break $l$block_0;
        }
        if (isEmpty(tail)) {
          this_0.recycleTail_61sxi3_k$();
        }
      }
    } else if (c < 2048) {
      UnsafeBufferOperations_getInstance();
      $l$block_2: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail_0 = this_0.writableSegment_voqx71_k$(2);
        get_SegmentWriteContextImpl().setUnchecked_3svw1y_k$(tail_0, 0, toByte(c >> 6 | 192), toByte(c & 63 | 128));
        var bytesWritten_0 = 2;
        if (bytesWritten_0 === 2) {
          tail_0.set_limit_3yu7ea_k$(tail_0.get_limit_kzbf7q_k$() + bytesWritten_0 | 0);
          // Inline function 'kotlin.Long.plus' call
          var this_5 = this_0.get_sizeMut_lwlia2_k$();
          var tmp$ret$13 = add(this_5, fromInt(bytesWritten_0));
          this_0.set_sizeMut_cp56bw_k$(tmp$ret$13);
          break $l$block_2;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten_0 ? bytesWritten_0 <= tail_0.get_remainingCapacity_c94947_k$() : false)) {
          var message_0 = 'Invalid number of bytes written: ' + bytesWritten_0 + '. Should be in 0..' + tail_0.get_remainingCapacity_c94947_k$();
          throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message_0));
        }
        if (!(bytesWritten_0 === 0)) {
          tail_0.set_limit_3yu7ea_k$(tail_0.get_limit_kzbf7q_k$() + bytesWritten_0 | 0);
          // Inline function 'kotlin.Long.plus' call
          var this_6 = this_0.get_sizeMut_lwlia2_k$();
          var tmp$ret$17 = add(this_6, fromInt(bytesWritten_0));
          this_0.set_sizeMut_cp56bw_k$(tmp$ret$17);
          break $l$block_2;
        }
        if (isEmpty(tail_0)) {
          this_0.recycleTail_61sxi3_k$();
        }
      }
      i = i + 1 | 0;
    } else if (c < 55296 || c > 57343) {
      UnsafeBufferOperations_getInstance();
      $l$block_4: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail_1 = this_0.writableSegment_voqx71_k$(3);
        get_SegmentWriteContextImpl().setUnchecked_ofazem_k$(tail_1, 0, toByte(c >> 12 | 224), toByte(c >> 6 & 63 | 128), toByte(c & 63 | 128));
        var bytesWritten_1 = 3;
        if (bytesWritten_1 === 3) {
          tail_1.set_limit_3yu7ea_k$(tail_1.get_limit_kzbf7q_k$() + bytesWritten_1 | 0);
          // Inline function 'kotlin.Long.plus' call
          var this_7 = this_0.get_sizeMut_lwlia2_k$();
          var tmp$ret$19 = add(this_7, fromInt(bytesWritten_1));
          this_0.set_sizeMut_cp56bw_k$(tmp$ret$19);
          break $l$block_4;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten_1 ? bytesWritten_1 <= tail_1.get_remainingCapacity_c94947_k$() : false)) {
          var message_1 = 'Invalid number of bytes written: ' + bytesWritten_1 + '. Should be in 0..' + tail_1.get_remainingCapacity_c94947_k$();
          throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message_1));
        }
        if (!(bytesWritten_1 === 0)) {
          tail_1.set_limit_3yu7ea_k$(tail_1.get_limit_kzbf7q_k$() + bytesWritten_1 | 0);
          // Inline function 'kotlin.Long.plus' call
          var this_8 = this_0.get_sizeMut_lwlia2_k$();
          var tmp$ret$23 = add(this_8, fromInt(bytesWritten_1));
          this_0.set_sizeMut_cp56bw_k$(tmp$ret$23);
          break $l$block_4;
        }
        if (isEmpty(tail_1)) {
          this_0.recycleTail_61sxi3_k$();
        }
      }
      i = i + 1 | 0;
    } else {
      var tmp;
      if ((i + 1 | 0) < endIndex) {
        var p0_1 = i + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_9 = charCodeAt(string, p0_1);
        tmp = Char__toInt_impl_vasixd(this_9);
      } else {
        tmp = 0;
      }
      var low = tmp;
      if (c > 56319 || !(56320 <= low ? low <= 57343 : false)) {
        // Inline function 'kotlin.code' call
        var this_10 = _Char___init__impl__6a9atx(63);
        var tmp$ret$26 = Char__toInt_impl_vasixd(this_10);
        this_0.writeByte_9ih3z3_k$(toByte(tmp$ret$26));
        i = i + 1 | 0;
      } else {
        var codePoint = 65536 + ((c & 1023) << 10 | low & 1023) | 0;
        UnsafeBufferOperations_getInstance();
        $l$block_6: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_2 = this_0.writableSegment_voqx71_k$(4);
          get_SegmentWriteContextImpl().setUnchecked_7scgvu_k$(tail_2, 0, toByte(codePoint >> 18 | 240), toByte(codePoint >> 12 & 63 | 128), toByte(codePoint >> 6 & 63 | 128), toByte(codePoint & 63 | 128));
          var bytesWritten_2 = 4;
          if (bytesWritten_2 === 4) {
            tail_2.set_limit_3yu7ea_k$(tail_2.get_limit_kzbf7q_k$() + bytesWritten_2 | 0);
            // Inline function 'kotlin.Long.plus' call
            var this_11 = this_0.get_sizeMut_lwlia2_k$();
            var tmp$ret$28 = add(this_11, fromInt(bytesWritten_2));
            this_0.set_sizeMut_cp56bw_k$(tmp$ret$28);
            break $l$block_6;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten_2 ? bytesWritten_2 <= tail_2.get_remainingCapacity_c94947_k$() : false)) {
            var message_2 = 'Invalid number of bytes written: ' + bytesWritten_2 + '. Should be in 0..' + tail_2.get_remainingCapacity_c94947_k$();
            throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message_2));
          }
          if (!(bytesWritten_2 === 0)) {
            tail_2.set_limit_3yu7ea_k$(tail_2.get_limit_kzbf7q_k$() + bytesWritten_2 | 0);
            // Inline function 'kotlin.Long.plus' call
            var this_12 = this_0.get_sizeMut_lwlia2_k$();
            var tmp$ret$32 = add(this_12, fromInt(bytesWritten_2));
            this_0.set_sizeMut_cp56bw_k$(tmp$ret$32);
            break $l$block_6;
          }
          if (isEmpty(tail_2)) {
            this_0.recycleTail_61sxi3_k$();
          }
        }
        i = i + 2 | 0;
      }
    }
  }
  _this__u8e3s4.hintEmit_6b2e5m_k$();
}
function commonReadUtf8(_this__u8e3s4, byteCount) {
  if (byteCount === 0n)
    return '';
  // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
  UnsafeBufferOperations_getInstance();
  var curr = _this__u8e3s4.get_head_1rxik1_k$();
  while (!(curr == null)) {
    get_SegmentReadContextImpl();
    if (fromInt(curr.get_size_woubt6_k$()) >= byteCount) {
      var result = '';
      // Inline function 'kotlinx.io.unsafe.withData' call
      var tmp0 = curr.dataAsByteArray_g1m4im_k$(true);
      var tmp2 = curr.get_pos_c7hn7x_k$();
      var tmp0_0 = curr.get_limit_kzbf7q_k$();
      // Inline function 'kotlin.math.min' call
      var b = tmp2 + convertToInt(byteCount) | 0;
      var tmp$ret$0 = Math.min(tmp0_0, b);
      result = commonToUtf8String(tmp0, tmp2, tmp$ret$0);
      _this__u8e3s4.skip_bgd4sf_k$(byteCount);
      return result;
    }
    return commonToUtf8String(readByteArray_0(_this__u8e3s4, convertToInt(byteCount)));
  }
  // Inline function 'kotlin.error' call
  var message = 'Unreacheable';
  throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
}
function commonWriteUtf8(_this__u8e3s4, beginIndex, endIndex, charAt) {
  var i = beginIndex;
  while (i < endIndex) {
    // Inline function 'kotlin.code' call
    var this_0 = charAt(i).value_1;
    var c = Char__toInt_impl_vasixd(this_0);
    if (c < 128) {
      UnsafeBufferOperations_getInstance();
      $l$block_0: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail = _this__u8e3s4.writableSegment_voqx71_k$(1);
        var ctx = get_SegmentWriteContextImpl();
        var segmentOffset = -i | 0;
        // Inline function 'kotlin.comparisons.minOf' call
        var b = i + tail.get_remainingCapacity_c94947_k$() | 0;
        var runLimit = Math.min(endIndex, b);
        var _unary__edvuaz = i;
        i = _unary__edvuaz + 1 | 0;
        ctx.setUnchecked_b2f64i_k$(tail, segmentOffset + _unary__edvuaz | 0, toByte(c));
        $l$loop: while (i < runLimit) {
          // Inline function 'kotlin.code' call
          var this_1 = charAt(i).value_1;
          c = Char__toInt_impl_vasixd(this_1);
          if (c >= 128)
            break $l$loop;
          var _unary__edvuaz_0 = i;
          i = _unary__edvuaz_0 + 1 | 0;
          ctx.setUnchecked_b2f64i_k$(tail, segmentOffset + _unary__edvuaz_0 | 0, toByte(c));
        }
        var bytesWritten = i + segmentOffset | 0;
        if (bytesWritten === 1) {
          tail.set_limit_3yu7ea_k$(tail.get_limit_kzbf7q_k$() + bytesWritten | 0);
          // Inline function 'kotlin.Long.plus' call
          var this_2 = _this__u8e3s4.get_sizeMut_lwlia2_k$();
          var tmp$ret$4 = add(this_2, fromInt(bytesWritten));
          _this__u8e3s4.set_sizeMut_cp56bw_k$(tmp$ret$4);
          break $l$block_0;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten ? bytesWritten <= tail.get_remainingCapacity_c94947_k$() : false)) {
          var message = 'Invalid number of bytes written: ' + bytesWritten + '. Should be in 0..' + tail.get_remainingCapacity_c94947_k$();
          throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
        }
        if (!(bytesWritten === 0)) {
          tail.set_limit_3yu7ea_k$(tail.get_limit_kzbf7q_k$() + bytesWritten | 0);
          // Inline function 'kotlin.Long.plus' call
          var this_3 = _this__u8e3s4.get_sizeMut_lwlia2_k$();
          var tmp$ret$8 = add(this_3, fromInt(bytesWritten));
          _this__u8e3s4.set_sizeMut_cp56bw_k$(tmp$ret$8);
          break $l$block_0;
        }
        if (isEmpty(tail)) {
          _this__u8e3s4.recycleTail_61sxi3_k$();
        }
      }
    } else if (c < 2048) {
      UnsafeBufferOperations_getInstance();
      $l$block_2: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail_0 = _this__u8e3s4.writableSegment_voqx71_k$(2);
        get_SegmentWriteContextImpl().setUnchecked_3svw1y_k$(tail_0, 0, toByte(c >> 6 | 192), toByte(c & 63 | 128));
        var bytesWritten_0 = 2;
        if (bytesWritten_0 === 2) {
          tail_0.set_limit_3yu7ea_k$(tail_0.get_limit_kzbf7q_k$() + bytesWritten_0 | 0);
          // Inline function 'kotlin.Long.plus' call
          var this_4 = _this__u8e3s4.get_sizeMut_lwlia2_k$();
          var tmp$ret$10 = add(this_4, fromInt(bytesWritten_0));
          _this__u8e3s4.set_sizeMut_cp56bw_k$(tmp$ret$10);
          break $l$block_2;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten_0 ? bytesWritten_0 <= tail_0.get_remainingCapacity_c94947_k$() : false)) {
          var message_0 = 'Invalid number of bytes written: ' + bytesWritten_0 + '. Should be in 0..' + tail_0.get_remainingCapacity_c94947_k$();
          throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message_0));
        }
        if (!(bytesWritten_0 === 0)) {
          tail_0.set_limit_3yu7ea_k$(tail_0.get_limit_kzbf7q_k$() + bytesWritten_0 | 0);
          // Inline function 'kotlin.Long.plus' call
          var this_5 = _this__u8e3s4.get_sizeMut_lwlia2_k$();
          var tmp$ret$14 = add(this_5, fromInt(bytesWritten_0));
          _this__u8e3s4.set_sizeMut_cp56bw_k$(tmp$ret$14);
          break $l$block_2;
        }
        if (isEmpty(tail_0)) {
          _this__u8e3s4.recycleTail_61sxi3_k$();
        }
      }
      i = i + 1 | 0;
    } else if (c < 55296 || c > 57343) {
      UnsafeBufferOperations_getInstance();
      $l$block_4: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail_1 = _this__u8e3s4.writableSegment_voqx71_k$(3);
        get_SegmentWriteContextImpl().setUnchecked_ofazem_k$(tail_1, 0, toByte(c >> 12 | 224), toByte(c >> 6 & 63 | 128), toByte(c & 63 | 128));
        var bytesWritten_1 = 3;
        if (bytesWritten_1 === 3) {
          tail_1.set_limit_3yu7ea_k$(tail_1.get_limit_kzbf7q_k$() + bytesWritten_1 | 0);
          // Inline function 'kotlin.Long.plus' call
          var this_6 = _this__u8e3s4.get_sizeMut_lwlia2_k$();
          var tmp$ret$16 = add(this_6, fromInt(bytesWritten_1));
          _this__u8e3s4.set_sizeMut_cp56bw_k$(tmp$ret$16);
          break $l$block_4;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten_1 ? bytesWritten_1 <= tail_1.get_remainingCapacity_c94947_k$() : false)) {
          var message_1 = 'Invalid number of bytes written: ' + bytesWritten_1 + '. Should be in 0..' + tail_1.get_remainingCapacity_c94947_k$();
          throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message_1));
        }
        if (!(bytesWritten_1 === 0)) {
          tail_1.set_limit_3yu7ea_k$(tail_1.get_limit_kzbf7q_k$() + bytesWritten_1 | 0);
          // Inline function 'kotlin.Long.plus' call
          var this_7 = _this__u8e3s4.get_sizeMut_lwlia2_k$();
          var tmp$ret$20 = add(this_7, fromInt(bytesWritten_1));
          _this__u8e3s4.set_sizeMut_cp56bw_k$(tmp$ret$20);
          break $l$block_4;
        }
        if (isEmpty(tail_1)) {
          _this__u8e3s4.recycleTail_61sxi3_k$();
        }
      }
      i = i + 1 | 0;
    } else {
      var tmp;
      if ((i + 1 | 0) < endIndex) {
        // Inline function 'kotlin.code' call
        var this_8 = charAt(i + 1 | 0).value_1;
        tmp = Char__toInt_impl_vasixd(this_8);
      } else {
        tmp = 0;
      }
      var low = tmp;
      if (c > 56319 || !(56320 <= low ? low <= 57343 : false)) {
        // Inline function 'kotlin.code' call
        var this_9 = _Char___init__impl__6a9atx(63);
        var tmp$ret$22 = Char__toInt_impl_vasixd(this_9);
        _this__u8e3s4.writeByte_9ih3z3_k$(toByte(tmp$ret$22));
        i = i + 1 | 0;
      } else {
        var codePoint = 65536 + ((c & 1023) << 10 | low & 1023) | 0;
        UnsafeBufferOperations_getInstance();
        $l$block_6: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_2 = _this__u8e3s4.writableSegment_voqx71_k$(4);
          get_SegmentWriteContextImpl().setUnchecked_7scgvu_k$(tail_2, 0, toByte(codePoint >> 18 | 240), toByte(codePoint >> 12 & 63 | 128), toByte(codePoint >> 6 & 63 | 128), toByte(codePoint & 63 | 128));
          var bytesWritten_2 = 4;
          if (bytesWritten_2 === 4) {
            tail_2.set_limit_3yu7ea_k$(tail_2.get_limit_kzbf7q_k$() + bytesWritten_2 | 0);
            // Inline function 'kotlin.Long.plus' call
            var this_10 = _this__u8e3s4.get_sizeMut_lwlia2_k$();
            var tmp$ret$24 = add(this_10, fromInt(bytesWritten_2));
            _this__u8e3s4.set_sizeMut_cp56bw_k$(tmp$ret$24);
            break $l$block_6;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten_2 ? bytesWritten_2 <= tail_2.get_remainingCapacity_c94947_k$() : false)) {
            var message_2 = 'Invalid number of bytes written: ' + bytesWritten_2 + '. Should be in 0..' + tail_2.get_remainingCapacity_c94947_k$();
            throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message_2));
          }
          if (!(bytesWritten_2 === 0)) {
            tail_2.set_limit_3yu7ea_k$(tail_2.get_limit_kzbf7q_k$() + bytesWritten_2 | 0);
            // Inline function 'kotlin.Long.plus' call
            var this_11 = _this__u8e3s4.get_sizeMut_lwlia2_k$();
            var tmp$ret$28 = add(this_11, fromInt(bytesWritten_2));
            _this__u8e3s4.set_sizeMut_cp56bw_k$(tmp$ret$28);
            break $l$block_6;
          }
          if (isEmpty(tail_2)) {
            _this__u8e3s4.recycleTail_61sxi3_k$();
          }
        }
        i = i + 2 | 0;
      }
    }
  }
}
function Path_0(base, parts) {
  return Path_1(base.toString(), parts.slice());
}
function removeTrailingSeparators(path, isWindows_) {
  isWindows_ = isWindows_ === VOID ? get_isWindows() : isWindows_;
  if (isWindows_) {
    var tmp;
    if (path.length > 1) {
      var tmp_0;
      if (charCodeAt(path, 1) === _Char___init__impl__6a9atx(58)) {
        tmp_0 = 3;
      } else if (isUnc(path)) {
        tmp_0 = 2;
      } else {
        tmp_0 = 1;
      }
      tmp = tmp_0;
    } else {
      tmp = 1;
    }
    var limit = tmp;
    return removeTrailingSeparatorsWindows(limit, path);
  }
  return removeTrailingSeparatorsUnix(path);
}
function Path_1(base, parts) {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder.new_kotlin_text_StringBuilder_q3um6c_k$();
  this_0.append_22ad7x_k$(base);
  // Inline function 'kotlin.collections.forEach' call
  var inductionVariable = 0;
  var last = parts.length;
  while (inductionVariable < last) {
    var element = parts[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      tmp = !endsWith(this_0, get_SystemPathSeparator());
    } else {
      tmp = false;
    }
    if (tmp) {
      this_0.append_am5a4z_k$(get_SystemPathSeparator());
    }
    this_0.append_22ad7x_k$(element);
  }
  var tmp$ret$5 = this_0.toString();
  return Path_2(tmp$ret$5);
}
function isUnc(path) {
  if (path.length < 2)
    return false;
  if (startsWith(path, '\\\\'))
    return true;
  if (startsWith(path, '//'))
    return true;
  return false;
}
function removeTrailingSeparatorsWindows(suffixLength, path) {
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.require' call
  if (!(suffixLength >= 1)) {
    var message = 'Failed requirement.';
    throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString(message));
  }
  var idx = path.length;
  $l$loop: while (idx > suffixLength) {
    var c = charCodeAt(path, idx - 1 | 0);
    if (!(c === _Char___init__impl__6a9atx(92)) && !(c === _Char___init__impl__6a9atx(47)))
      break $l$loop;
    idx = idx - 1 | 0;
  }
  return substring(path, 0, idx);
}
function removeTrailingSeparatorsUnix(path) {
  var idx = path.length;
  while (idx > 1 && charCodeAt(path, idx - 1 | 0) === _Char___init__impl__6a9atx(47)) {
    idx = idx - 1 | 0;
  }
  return substring(path, 0, idx);
}
function commonToUtf8String(_this__u8e3s4, beginIndex, endIndex) {
  beginIndex = beginIndex === VOID ? 0 : beginIndex;
  endIndex = endIndex === VOID ? _this__u8e3s4.length : endIndex;
  if (beginIndex < 0 || endIndex > _this__u8e3s4.length || beginIndex > endIndex) {
    throw IndexOutOfBoundsException.new_kotlin_IndexOutOfBoundsException_9eekaf_k$('size=' + _this__u8e3s4.length + ' beginIndex=' + beginIndex + ' endIndex=' + endIndex);
  }
  var chars = charArray(endIndex - beginIndex | 0);
  var length = 0;
  // Inline function 'kotlinx.io.internal.processUtf16Chars' call
  var index = beginIndex;
  while (index < endIndex) {
    var b0 = _this__u8e3s4[index];
    if (b0 >= 0) {
      var c = numberToChar(b0);
      var _unary__edvuaz = length;
      length = _unary__edvuaz + 1 | 0;
      chars[_unary__edvuaz] = c;
      index = index + 1 | 0;
      while (index < endIndex && _this__u8e3s4[index] >= 0) {
        var _unary__edvuaz_0 = index;
        index = _unary__edvuaz_0 + 1 | 0;
        var c_0 = numberToChar(_this__u8e3s4[_unary__edvuaz_0]);
        var _unary__edvuaz_1 = length;
        length = _unary__edvuaz_1 + 1 | 0;
        chars[_unary__edvuaz_1] = c_0;
      }
    } else {
      // Inline function 'kotlinx.io.shr' call
      if (b0 >> 5 === -2) {
        var tmp = index;
        var tmp2 = index;
        var tmp$ret$5;
        $l$block_0: {
          // Inline function 'kotlinx.io.internal.process2Utf8Bytes' call
          if (endIndex <= (tmp2 + 1 | 0)) {
            var c_1 = numberToChar(65533);
            var _unary__edvuaz_2 = length;
            length = _unary__edvuaz_2 + 1 | 0;
            chars[_unary__edvuaz_2] = c_1;
            tmp$ret$5 = 1;
            break $l$block_0;
          }
          var b0_0 = _this__u8e3s4[tmp2];
          var b1 = _this__u8e3s4[tmp2 + 1 | 0];
          // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
          // Inline function 'kotlinx.io.and' call
          if (!((b1 & 192) === 128)) {
            var c_2 = numberToChar(65533);
            var _unary__edvuaz_3 = length;
            length = _unary__edvuaz_3 + 1 | 0;
            chars[_unary__edvuaz_3] = c_2;
            tmp$ret$5 = 1;
            break $l$block_0;
          }
          var codePoint = 3968 ^ b1 ^ b0_0 << 6;
          if (codePoint < 128) {
            var c_3 = numberToChar(65533);
            var _unary__edvuaz_4 = length;
            length = _unary__edvuaz_4 + 1 | 0;
            chars[_unary__edvuaz_4] = c_3;
          } else {
            var c_4 = numberToChar(codePoint);
            var _unary__edvuaz_5 = length;
            length = _unary__edvuaz_5 + 1 | 0;
            chars[_unary__edvuaz_5] = c_4;
          }
          tmp$ret$5 = 2;
        }
        index = tmp + tmp$ret$5 | 0;
      } else {
        // Inline function 'kotlinx.io.shr' call
        if (b0 >> 4 === -2) {
          var tmp_0 = index;
          var tmp2_0 = index;
          var tmp$ret$19;
          $l$block_4: {
            // Inline function 'kotlinx.io.internal.process3Utf8Bytes' call
            if (endIndex <= (tmp2_0 + 2 | 0)) {
              var c_5 = numberToChar(65533);
              var _unary__edvuaz_6 = length;
              length = _unary__edvuaz_6 + 1 | 0;
              chars[_unary__edvuaz_6] = c_5;
              var tmp_1;
              if (endIndex <= (tmp2_0 + 1 | 0)) {
                tmp_1 = true;
              } else {
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                tmp_1 = !((_this__u8e3s4[tmp2_0 + 1 | 0] & 192) === 128);
              }
              if (tmp_1) {
                tmp$ret$19 = 1;
                break $l$block_4;
              } else {
                tmp$ret$19 = 2;
                break $l$block_4;
              }
            }
            var b0_1 = _this__u8e3s4[tmp2_0];
            var b1_0 = _this__u8e3s4[tmp2_0 + 1 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b1_0 & 192) === 128)) {
              var c_6 = numberToChar(65533);
              var _unary__edvuaz_7 = length;
              length = _unary__edvuaz_7 + 1 | 0;
              chars[_unary__edvuaz_7] = c_6;
              tmp$ret$19 = 1;
              break $l$block_4;
            }
            var b2 = _this__u8e3s4[tmp2_0 + 2 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b2 & 192) === 128)) {
              var c_7 = numberToChar(65533);
              var _unary__edvuaz_8 = length;
              length = _unary__edvuaz_8 + 1 | 0;
              chars[_unary__edvuaz_8] = c_7;
              tmp$ret$19 = 2;
              break $l$block_4;
            }
            var codePoint_0 = -123008 ^ b2 ^ b1_0 << 6 ^ b0_1 << 12;
            if (codePoint_0 < 2048) {
              var c_8 = numberToChar(65533);
              var _unary__edvuaz_9 = length;
              length = _unary__edvuaz_9 + 1 | 0;
              chars[_unary__edvuaz_9] = c_8;
            } else if (55296 <= codePoint_0 ? codePoint_0 <= 57343 : false) {
              var c_9 = numberToChar(65533);
              var _unary__edvuaz_10 = length;
              length = _unary__edvuaz_10 + 1 | 0;
              chars[_unary__edvuaz_10] = c_9;
            } else {
              var c_10 = numberToChar(codePoint_0);
              var _unary__edvuaz_11 = length;
              length = _unary__edvuaz_11 + 1 | 0;
              chars[_unary__edvuaz_11] = c_10;
            }
            tmp$ret$19 = 3;
          }
          index = tmp_0 + tmp$ret$19 | 0;
        } else {
          // Inline function 'kotlinx.io.shr' call
          if (b0 >> 3 === -2) {
            var tmp_2 = index;
            var tmp2_1 = index;
            var tmp$ret$41;
            $l$block_10: {
              // Inline function 'kotlinx.io.internal.process4Utf8Bytes' call
              if (endIndex <= (tmp2_1 + 3 | 0)) {
                if (!(65533 === 65533)) {
                  var c_11 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_12 = length;
                  length = _unary__edvuaz_12 + 1 | 0;
                  chars[_unary__edvuaz_12] = c_11;
                  var c_12 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_13 = length;
                  length = _unary__edvuaz_13 + 1 | 0;
                  chars[_unary__edvuaz_13] = c_12;
                } else {
                  var c_13 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_14 = length;
                  length = _unary__edvuaz_14 + 1 | 0;
                  chars[_unary__edvuaz_14] = c_13;
                }
                var tmp_3;
                if (endIndex <= (tmp2_1 + 1 | 0)) {
                  tmp_3 = true;
                } else {
                  // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                  // Inline function 'kotlinx.io.and' call
                  tmp_3 = !((_this__u8e3s4[tmp2_1 + 1 | 0] & 192) === 128);
                }
                if (tmp_3) {
                  tmp$ret$41 = 1;
                  break $l$block_10;
                } else {
                  var tmp_4;
                  if (endIndex <= (tmp2_1 + 2 | 0)) {
                    tmp_4 = true;
                  } else {
                    // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                    // Inline function 'kotlinx.io.and' call
                    tmp_4 = !((_this__u8e3s4[tmp2_1 + 2 | 0] & 192) === 128);
                  }
                  if (tmp_4) {
                    tmp$ret$41 = 2;
                    break $l$block_10;
                  } else {
                    tmp$ret$41 = 3;
                    break $l$block_10;
                  }
                }
              }
              var b0_2 = _this__u8e3s4[tmp2_1];
              var b1_1 = _this__u8e3s4[tmp2_1 + 1 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b1_1 & 192) === 128)) {
                if (!(65533 === 65533)) {
                  var c_14 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_15 = length;
                  length = _unary__edvuaz_15 + 1 | 0;
                  chars[_unary__edvuaz_15] = c_14;
                  var c_15 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_16 = length;
                  length = _unary__edvuaz_16 + 1 | 0;
                  chars[_unary__edvuaz_16] = c_15;
                } else {
                  var c_16 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_17 = length;
                  length = _unary__edvuaz_17 + 1 | 0;
                  chars[_unary__edvuaz_17] = c_16;
                }
                tmp$ret$41 = 1;
                break $l$block_10;
              }
              var b2_0 = _this__u8e3s4[tmp2_1 + 2 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b2_0 & 192) === 128)) {
                if (!(65533 === 65533)) {
                  var c_17 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_18 = length;
                  length = _unary__edvuaz_18 + 1 | 0;
                  chars[_unary__edvuaz_18] = c_17;
                  var c_18 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_19 = length;
                  length = _unary__edvuaz_19 + 1 | 0;
                  chars[_unary__edvuaz_19] = c_18;
                } else {
                  var c_19 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_20 = length;
                  length = _unary__edvuaz_20 + 1 | 0;
                  chars[_unary__edvuaz_20] = c_19;
                }
                tmp$ret$41 = 2;
                break $l$block_10;
              }
              var b3 = _this__u8e3s4[tmp2_1 + 3 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b3 & 192) === 128)) {
                if (!(65533 === 65533)) {
                  var c_20 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_21 = length;
                  length = _unary__edvuaz_21 + 1 | 0;
                  chars[_unary__edvuaz_21] = c_20;
                  var c_21 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_22 = length;
                  length = _unary__edvuaz_22 + 1 | 0;
                  chars[_unary__edvuaz_22] = c_21;
                } else {
                  var c_22 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_23 = length;
                  length = _unary__edvuaz_23 + 1 | 0;
                  chars[_unary__edvuaz_23] = c_22;
                }
                tmp$ret$41 = 3;
                break $l$block_10;
              }
              var codePoint_1 = 3678080 ^ b3 ^ b2_0 << 6 ^ b1_1 << 12 ^ b0_2 << 18;
              if (codePoint_1 > 1114111) {
                if (!(65533 === 65533)) {
                  var c_23 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_24 = length;
                  length = _unary__edvuaz_24 + 1 | 0;
                  chars[_unary__edvuaz_24] = c_23;
                  var c_24 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_25 = length;
                  length = _unary__edvuaz_25 + 1 | 0;
                  chars[_unary__edvuaz_25] = c_24;
                } else {
                  var c_25 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_26 = length;
                  length = _unary__edvuaz_26 + 1 | 0;
                  chars[_unary__edvuaz_26] = c_25;
                }
              } else if (55296 <= codePoint_1 ? codePoint_1 <= 57343 : false) {
                if (!(65533 === 65533)) {
                  var c_26 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_27 = length;
                  length = _unary__edvuaz_27 + 1 | 0;
                  chars[_unary__edvuaz_27] = c_26;
                  var c_27 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_28 = length;
                  length = _unary__edvuaz_28 + 1 | 0;
                  chars[_unary__edvuaz_28] = c_27;
                } else {
                  var c_28 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_29 = length;
                  length = _unary__edvuaz_29 + 1 | 0;
                  chars[_unary__edvuaz_29] = c_28;
                }
              } else if (codePoint_1 < 65536) {
                if (!(65533 === 65533)) {
                  var c_29 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_30 = length;
                  length = _unary__edvuaz_30 + 1 | 0;
                  chars[_unary__edvuaz_30] = c_29;
                  var c_30 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_31 = length;
                  length = _unary__edvuaz_31 + 1 | 0;
                  chars[_unary__edvuaz_31] = c_30;
                } else {
                  var c_31 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_32 = length;
                  length = _unary__edvuaz_32 + 1 | 0;
                  chars[_unary__edvuaz_32] = c_31;
                }
              } else {
                if (!(codePoint_1 === 65533)) {
                  var c_32 = numberToChar((codePoint_1 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_33 = length;
                  length = _unary__edvuaz_33 + 1 | 0;
                  chars[_unary__edvuaz_33] = c_32;
                  var c_33 = numberToChar((codePoint_1 & 1023) + 56320 | 0);
                  var _unary__edvuaz_34 = length;
                  length = _unary__edvuaz_34 + 1 | 0;
                  chars[_unary__edvuaz_34] = c_33;
                } else {
                  var c_34 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_35 = length;
                  length = _unary__edvuaz_35 + 1 | 0;
                  chars[_unary__edvuaz_35] = c_34;
                }
              }
              tmp$ret$41 = 4;
            }
            index = tmp_2 + tmp$ret$41 | 0;
          } else {
            var c_35 = _Char___init__impl__6a9atx(65533);
            var _unary__edvuaz_36 = length;
            length = _unary__edvuaz_36 + 1 | 0;
            chars[_unary__edvuaz_36] = c_35;
            index = index + 1 | 0;
          }
        }
      }
    }
  }
  return concatToString(chars, 0, length);
}
function processUtf16Chars(_this__u8e3s4, beginIndex, endIndex, yield_0) {
  var index = beginIndex;
  while (index < endIndex) {
    var b0 = _this__u8e3s4[index];
    if (b0 >= 0) {
      yield_0(new Char(numberToChar(b0)));
      index = index + 1 | 0;
      while (index < endIndex && _this__u8e3s4[index] >= 0) {
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        yield_0(new Char(numberToChar(_this__u8e3s4[_unary__edvuaz])));
      }
    } else {
      // Inline function 'kotlinx.io.shr' call
      if (b0 >> 5 === -2) {
        var tmp = index;
        var tmp2 = index;
        var tmp$ret$2;
        $l$block_0: {
          // Inline function 'kotlinx.io.internal.process2Utf8Bytes' call
          if (endIndex <= (tmp2 + 1 | 0)) {
            yield_0(new Char(numberToChar(65533)));
            tmp$ret$2 = 1;
            break $l$block_0;
          }
          var b0_0 = _this__u8e3s4[tmp2];
          var b1 = _this__u8e3s4[tmp2 + 1 | 0];
          // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
          // Inline function 'kotlinx.io.and' call
          if (!((b1 & 192) === 128)) {
            yield_0(new Char(numberToChar(65533)));
            tmp$ret$2 = 1;
            break $l$block_0;
          }
          var codePoint = 3968 ^ b1 ^ b0_0 << 6;
          if (codePoint < 128) {
            yield_0(new Char(numberToChar(65533)));
          } else {
            yield_0(new Char(numberToChar(codePoint)));
          }
          tmp$ret$2 = 2;
        }
        index = tmp + tmp$ret$2 | 0;
      } else {
        // Inline function 'kotlinx.io.shr' call
        if (b0 >> 4 === -2) {
          var tmp_0 = index;
          var tmp2_0 = index;
          var tmp$ret$12;
          $l$block_4: {
            // Inline function 'kotlinx.io.internal.process3Utf8Bytes' call
            if (endIndex <= (tmp2_0 + 2 | 0)) {
              yield_0(new Char(numberToChar(65533)));
              var tmp_1;
              if (endIndex <= (tmp2_0 + 1 | 0)) {
                tmp_1 = true;
              } else {
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                tmp_1 = !((_this__u8e3s4[tmp2_0 + 1 | 0] & 192) === 128);
              }
              if (tmp_1) {
                tmp$ret$12 = 1;
                break $l$block_4;
              } else {
                tmp$ret$12 = 2;
                break $l$block_4;
              }
            }
            var b0_1 = _this__u8e3s4[tmp2_0];
            var b1_0 = _this__u8e3s4[tmp2_0 + 1 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b1_0 & 192) === 128)) {
              yield_0(new Char(numberToChar(65533)));
              tmp$ret$12 = 1;
              break $l$block_4;
            }
            var b2 = _this__u8e3s4[tmp2_0 + 2 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b2 & 192) === 128)) {
              yield_0(new Char(numberToChar(65533)));
              tmp$ret$12 = 2;
              break $l$block_4;
            }
            var codePoint_0 = -123008 ^ b2 ^ b1_0 << 6 ^ b0_1 << 12;
            if (codePoint_0 < 2048) {
              yield_0(new Char(numberToChar(65533)));
            } else if (55296 <= codePoint_0 ? codePoint_0 <= 57343 : false) {
              yield_0(new Char(numberToChar(65533)));
            } else {
              yield_0(new Char(numberToChar(codePoint_0)));
            }
            tmp$ret$12 = 3;
          }
          index = tmp_0 + tmp$ret$12 | 0;
        } else {
          // Inline function 'kotlinx.io.shr' call
          if (b0 >> 3 === -2) {
            var tmp_2 = index;
            var tmp2_1 = index;
            var tmp$ret$26;
            $l$block_10: {
              // Inline function 'kotlinx.io.internal.process4Utf8Bytes' call
              if (endIndex <= (tmp2_1 + 3 | 0)) {
                if (!(65533 === 65533)) {
                  yield_0(new Char(numberToChar((65533 >>> 10 | 0) + 55232 | 0)));
                  yield_0(new Char(numberToChar((65533 & 1023) + 56320 | 0)));
                } else {
                  yield_0(new Char(_Char___init__impl__6a9atx(65533)));
                }
                var tmp_3;
                if (endIndex <= (tmp2_1 + 1 | 0)) {
                  tmp_3 = true;
                } else {
                  // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                  // Inline function 'kotlinx.io.and' call
                  tmp_3 = !((_this__u8e3s4[tmp2_1 + 1 | 0] & 192) === 128);
                }
                if (tmp_3) {
                  tmp$ret$26 = 1;
                  break $l$block_10;
                } else {
                  var tmp_4;
                  if (endIndex <= (tmp2_1 + 2 | 0)) {
                    tmp_4 = true;
                  } else {
                    // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                    // Inline function 'kotlinx.io.and' call
                    tmp_4 = !((_this__u8e3s4[tmp2_1 + 2 | 0] & 192) === 128);
                  }
                  if (tmp_4) {
                    tmp$ret$26 = 2;
                    break $l$block_10;
                  } else {
                    tmp$ret$26 = 3;
                    break $l$block_10;
                  }
                }
              }
              var b0_2 = _this__u8e3s4[tmp2_1];
              var b1_1 = _this__u8e3s4[tmp2_1 + 1 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b1_1 & 192) === 128)) {
                if (!(65533 === 65533)) {
                  yield_0(new Char(numberToChar((65533 >>> 10 | 0) + 55232 | 0)));
                  yield_0(new Char(numberToChar((65533 & 1023) + 56320 | 0)));
                } else {
                  yield_0(new Char(_Char___init__impl__6a9atx(65533)));
                }
                tmp$ret$26 = 1;
                break $l$block_10;
              }
              var b2_0 = _this__u8e3s4[tmp2_1 + 2 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b2_0 & 192) === 128)) {
                if (!(65533 === 65533)) {
                  yield_0(new Char(numberToChar((65533 >>> 10 | 0) + 55232 | 0)));
                  yield_0(new Char(numberToChar((65533 & 1023) + 56320 | 0)));
                } else {
                  yield_0(new Char(_Char___init__impl__6a9atx(65533)));
                }
                tmp$ret$26 = 2;
                break $l$block_10;
              }
              var b3 = _this__u8e3s4[tmp2_1 + 3 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b3 & 192) === 128)) {
                if (!(65533 === 65533)) {
                  yield_0(new Char(numberToChar((65533 >>> 10 | 0) + 55232 | 0)));
                  yield_0(new Char(numberToChar((65533 & 1023) + 56320 | 0)));
                } else {
                  yield_0(new Char(_Char___init__impl__6a9atx(65533)));
                }
                tmp$ret$26 = 3;
                break $l$block_10;
              }
              var codePoint_1 = 3678080 ^ b3 ^ b2_0 << 6 ^ b1_1 << 12 ^ b0_2 << 18;
              if (codePoint_1 > 1114111) {
                if (!(65533 === 65533)) {
                  yield_0(new Char(numberToChar((65533 >>> 10 | 0) + 55232 | 0)));
                  yield_0(new Char(numberToChar((65533 & 1023) + 56320 | 0)));
                } else {
                  yield_0(new Char(_Char___init__impl__6a9atx(65533)));
                }
              } else if (55296 <= codePoint_1 ? codePoint_1 <= 57343 : false) {
                if (!(65533 === 65533)) {
                  yield_0(new Char(numberToChar((65533 >>> 10 | 0) + 55232 | 0)));
                  yield_0(new Char(numberToChar((65533 & 1023) + 56320 | 0)));
                } else {
                  yield_0(new Char(_Char___init__impl__6a9atx(65533)));
                }
              } else if (codePoint_1 < 65536) {
                if (!(65533 === 65533)) {
                  yield_0(new Char(numberToChar((65533 >>> 10 | 0) + 55232 | 0)));
                  yield_0(new Char(numberToChar((65533 & 1023) + 56320 | 0)));
                } else {
                  yield_0(new Char(_Char___init__impl__6a9atx(65533)));
                }
              } else {
                if (!(codePoint_1 === 65533)) {
                  yield_0(new Char(numberToChar((codePoint_1 >>> 10 | 0) + 55232 | 0)));
                  yield_0(new Char(numberToChar((codePoint_1 & 1023) + 56320 | 0)));
                } else {
                  yield_0(new Char(_Char___init__impl__6a9atx(65533)));
                }
              }
              tmp$ret$26 = 4;
            }
            index = tmp_2 + tmp$ret$26 | 0;
          } else {
            yield_0(new Char(_Char___init__impl__6a9atx(65533)));
            index = index + 1 | 0;
          }
        }
      }
    }
  }
}
function process2Utf8Bytes(_this__u8e3s4, beginIndex, endIndex, yield_0) {
  if (endIndex <= (beginIndex + 1 | 0)) {
    yield_0(65533);
    return 1;
  }
  var b0 = _this__u8e3s4[beginIndex];
  var b1 = _this__u8e3s4[beginIndex + 1 | 0];
  // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
  // Inline function 'kotlinx.io.and' call
  if (!((b1 & 192) === 128)) {
    yield_0(65533);
    return 1;
  }
  var codePoint = 3968 ^ b1 ^ b0 << 6;
  if (codePoint < 128)
    yield_0(65533);
  else
    yield_0(codePoint);
  return 2;
}
function process3Utf8Bytes(_this__u8e3s4, beginIndex, endIndex, yield_0) {
  if (endIndex <= (beginIndex + 2 | 0)) {
    yield_0(65533);
    var tmp;
    if (endIndex <= (beginIndex + 1 | 0)) {
      tmp = true;
    } else {
      // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
      // Inline function 'kotlinx.io.and' call
      tmp = !((_this__u8e3s4[beginIndex + 1 | 0] & 192) === 128);
    }
    if (tmp) {
      return 1;
    } else {
      return 2;
    }
  }
  var b0 = _this__u8e3s4[beginIndex];
  var b1 = _this__u8e3s4[beginIndex + 1 | 0];
  // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
  // Inline function 'kotlinx.io.and' call
  if (!((b1 & 192) === 128)) {
    yield_0(65533);
    return 1;
  }
  var b2 = _this__u8e3s4[beginIndex + 2 | 0];
  // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
  // Inline function 'kotlinx.io.and' call
  if (!((b2 & 192) === 128)) {
    yield_0(65533);
    return 2;
  }
  var codePoint = -123008 ^ b2 ^ b1 << 6 ^ b0 << 12;
  if (codePoint < 2048) {
    yield_0(65533);
  } else if (55296 <= codePoint ? codePoint <= 57343 : false) {
    yield_0(65533);
  } else {
    yield_0(codePoint);
  }
  return 3;
}
function process4Utf8Bytes(_this__u8e3s4, beginIndex, endIndex, yield_0) {
  if (endIndex <= (beginIndex + 3 | 0)) {
    yield_0(65533);
    var tmp;
    if (endIndex <= (beginIndex + 1 | 0)) {
      tmp = true;
    } else {
      // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
      // Inline function 'kotlinx.io.and' call
      tmp = !((_this__u8e3s4[beginIndex + 1 | 0] & 192) === 128);
    }
    if (tmp) {
      return 1;
    } else {
      var tmp_0;
      if (endIndex <= (beginIndex + 2 | 0)) {
        tmp_0 = true;
      } else {
        // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
        // Inline function 'kotlinx.io.and' call
        tmp_0 = !((_this__u8e3s4[beginIndex + 2 | 0] & 192) === 128);
      }
      if (tmp_0) {
        return 2;
      } else {
        return 3;
      }
    }
  }
  var b0 = _this__u8e3s4[beginIndex];
  var b1 = _this__u8e3s4[beginIndex + 1 | 0];
  // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
  // Inline function 'kotlinx.io.and' call
  if (!((b1 & 192) === 128)) {
    yield_0(65533);
    return 1;
  }
  var b2 = _this__u8e3s4[beginIndex + 2 | 0];
  // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
  // Inline function 'kotlinx.io.and' call
  if (!((b2 & 192) === 128)) {
    yield_0(65533);
    return 2;
  }
  var b3 = _this__u8e3s4[beginIndex + 3 | 0];
  // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
  // Inline function 'kotlinx.io.and' call
  if (!((b3 & 192) === 128)) {
    yield_0(65533);
    return 3;
  }
  var codePoint = 3678080 ^ b3 ^ b2 << 6 ^ b1 << 12 ^ b0 << 18;
  if (codePoint > 1114111) {
    yield_0(65533);
  } else if (55296 <= codePoint ? codePoint <= 57343 : false) {
    yield_0(65533);
  } else if (codePoint < 65536) {
    yield_0(65533);
  } else {
    yield_0(codePoint);
  }
  return 4;
}
function isUtf8Continuation(byte) {
  // Inline function 'kotlinx.io.and' call
  return (byte & 192) === 128;
}
function get_SegmentReadContextImpl() {
  _init_properties_UnsafeBufferOperations_kt__xw75gy();
  return SegmentReadContextImpl;
}
var SegmentReadContextImpl;
function get_SegmentWriteContextImpl() {
  _init_properties_UnsafeBufferOperations_kt__xw75gy();
  return SegmentWriteContextImpl;
}
var SegmentWriteContextImpl;
function get_BufferIterationContextImpl() {
  _init_properties_UnsafeBufferOperations_kt__xw75gy();
  return BufferIterationContextImpl;
}
var BufferIterationContextImpl;
var UnsafeBufferOperations_instance;
function UnsafeBufferOperations_getInstance() {
  if (UnsafeBufferOperations_instance === VOID)
    UnsafeBufferOperations.new_kotlinx_io_unsafe_UnsafeBufferOperations_3e283w_k$();
  return UnsafeBufferOperations_instance;
}
function withData(_this__u8e3s4, segment, readAction) {
  _init_properties_UnsafeBufferOperations_kt__xw75gy();
  readAction(segment.dataAsByteArray_g1m4im_k$(true), segment.get_pos_c7hn7x_k$(), segment.get_limit_kzbf7q_k$());
}
var properties_initialized_UnsafeBufferOperations_kt_2xfgoc;
function _init_properties_UnsafeBufferOperations_kt__xw75gy() {
  if (!properties_initialized_UnsafeBufferOperations_kt_2xfgoc) {
    properties_initialized_UnsafeBufferOperations_kt_2xfgoc = true;
    SegmentReadContextImpl = SegmentReadContextImpl$1.new_kotlinx_io_unsafe__no_name_provided__oaxkm3_k$();
    SegmentWriteContextImpl = SegmentWriteContextImpl$1.new_kotlinx_io_unsafe__no_name_provided__mh1j51_k$();
    BufferIterationContextImpl = BufferIterationContextImpl$1.new_kotlinx_io_unsafe__no_name_provided__15en25_k$();
  }
}
function init_kotlinx_io_IOException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.$throwableCtor_2);
}
function init_kotlinx_io_EOFException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.$throwableCtor_3);
}
function withCaughtException(block) {
  try {
    block();
    return null;
  } catch ($p) {
    if ($p instanceof Error) {
      var t = $p;
      return t;
    } else {
      throw $p;
    }
  }
}
var SegmentPool_instance;
function SegmentPool_getInstance() {
  if (SegmentPool_instance === VOID)
    SegmentPool.new_kotlinx_io_SegmentPool_uxuzfo_k$();
  return SegmentPool_instance;
}
function get_path() {
  _init_properties_nodeModulesJs_kt__ngjjzw();
  var tmp0 = path$delegate;
  var tmp = KProperty0;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('path', 0, tmp, _get_path_$ref_hpvpv9(), null);
  return tmp0.get_value_j01efc_k$();
}
var path$delegate;
function get_fs() {
  _init_properties_nodeModulesJs_kt__ngjjzw();
  var tmp0 = fs$delegate;
  var tmp = KProperty0;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('fs', 0, tmp, _get_fs_$ref_rnlob1(), null);
  return tmp0.get_value_j01efc_k$();
}
var fs$delegate;
function get_os() {
  _init_properties_nodeModulesJs_kt__ngjjzw();
  var tmp0 = os$delegate;
  var tmp = KProperty0;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('os', 0, tmp, _get_os_$ref_hoy4d2(), null);
  return tmp0.get_value_j01efc_k$();
}
var os$delegate;
function get_buffer() {
  _init_properties_nodeModulesJs_kt__ngjjzw();
  var tmp0 = buffer$delegate;
  var tmp = KProperty0;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('buffer', 0, tmp, _get_buffer_$ref_mc964a(), null);
  return tmp0.get_value_j01efc_k$();
}
var buffer$delegate;
function path$delegate$lambda() {
  _init_properties_nodeModulesJs_kt__ngjjzw();
  var tmp;
  try {
    tmp = eval('require')('path');
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Error) {
      var e = $p;
      throw UnsupportedOperationException.new_kotlin_UnsupportedOperationException_iaim4v_k$("Module 'path' could not be imported", e);
    } else {
      throw $p;
    }
  }
  return tmp;
}
function _get_path_$ref_hpvpv9() {
  return () => get_path();
}
function fs$delegate$lambda() {
  _init_properties_nodeModulesJs_kt__ngjjzw();
  var tmp;
  try {
    tmp = eval('require')('fs');
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Error) {
      var e = $p;
      throw UnsupportedOperationException.new_kotlin_UnsupportedOperationException_iaim4v_k$("Module 'fs' could not be imported", e);
    } else {
      throw $p;
    }
  }
  return tmp;
}
function _get_fs_$ref_rnlob1() {
  return () => get_fs();
}
function os$delegate$lambda() {
  _init_properties_nodeModulesJs_kt__ngjjzw();
  var tmp;
  try {
    tmp = eval('require')('os');
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Error) {
      var e = $p;
      throw UnsupportedOperationException.new_kotlin_UnsupportedOperationException_iaim4v_k$("Module 'os' could not be imported", e);
    } else {
      throw $p;
    }
  }
  return tmp;
}
function _get_os_$ref_hoy4d2() {
  return () => get_os();
}
function buffer$delegate$lambda() {
  _init_properties_nodeModulesJs_kt__ngjjzw();
  var tmp;
  try {
    tmp = eval('require')('buffer');
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Error) {
      var e = $p;
      throw UnsupportedOperationException.new_kotlin_UnsupportedOperationException_iaim4v_k$("Module 'buffer' could not be imported", e);
    } else {
      throw $p;
    }
  }
  return tmp;
}
function _get_buffer_$ref_mc964a() {
  return () => get_buffer();
}
var properties_initialized_nodeModulesJs_kt_oooz8e;
function _init_properties_nodeModulesJs_kt__ngjjzw() {
  if (!properties_initialized_nodeModulesJs_kt_oooz8e) {
    properties_initialized_nodeModulesJs_kt_oooz8e = true;
    path$delegate = lazy(path$delegate$lambda);
    fs$delegate = lazy(fs$delegate$lambda);
    os$delegate = lazy(os$delegate$lambda);
    buffer$delegate = lazy(buffer$delegate$lambda);
  }
}
function get_SystemFileSystem() {
  _init_properties_FileSystemNodeJs_kt__m4c3u();
  return SystemFileSystem;
}
var SystemFileSystem;
function get_isWindows() {
  _init_properties_FileSystemNodeJs_kt__m4c3u();
  return isWindows;
}
var isWindows;
function SystemFileSystem$o$delete$lambda($path) {
  return () => {
    var tmp0_elvis_lhs = get_fs().statSync($path.get_path_j6ylwq_k$());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw FileNotFoundException.new_kotlinx_io_files_FileNotFoundException_owlrro_k$('File does not exist: ' + $path.toString());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stats = tmp;
    var tmp_0;
    if (stats.isDirectory()) {
      get_fs().rmdirSync($path.get_path_j6ylwq_k$());
      tmp_0 = Unit_getInstance();
    } else {
      get_fs().rmSync($path.get_path_j6ylwq_k$());
      tmp_0 = Unit_getInstance();
    }
    return Unit_getInstance();
  };
}
function SystemFileSystem$o$atomicMove$lambda($source, $destination) {
  return () => {
    get_fs().renameSync($source.get_path_j6ylwq_k$(), $destination.get_path_j6ylwq_k$());
    return Unit_getInstance();
  };
}
function SystemFileSystem$o$metadataOrNull$lambda($path, $metadata) {
  return () => {
    var tmp0_elvis_lhs = get_fs().statSync($path.get_path_j6ylwq_k$());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stat = tmp;
    var mode = stat.mode;
    var isFile = (mode & get_fs().constants.S_IFMT) === get_fs().constants.S_IFREG;
    $metadata._v = FileMetadata.new_kotlinx_io_files_FileMetadata_ujgqoz_k$(isFile, (mode & get_fs().constants.S_IFMT) === get_fs().constants.S_IFDIR, isFile ? fromInt(stat.size) : -1n);
    return Unit_getInstance();
  };
}
var properties_initialized_FileSystemNodeJs_kt_vmmd20;
function _init_properties_FileSystemNodeJs_kt__m4c3u() {
  if (!properties_initialized_FileSystemNodeJs_kt_vmmd20) {
    properties_initialized_FileSystemNodeJs_kt_vmmd20 = true;
    SystemFileSystem = SystemFileSystem$1.new_kotlinx_io_files__no_name_provided__twaxad_k$();
    isWindows = get_os().platform() === 'win32';
  }
}
function get_SystemPathSeparator() {
  _init_properties_PathsNodeJs_kt__bvvvsp();
  var tmp0 = SystemPathSeparator$delegate;
  var tmp = KProperty0;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('SystemPathSeparator', 0, tmp, _get_SystemPathSeparator_$ref_lvdbpt(), null);
  return tmp0.get_value_j01efc_k$().value_1;
}
var SystemPathSeparator$delegate;
function _get_path__dbvv7q($this) {
  return $this.path_1;
}
function _set_buffer__uxh4x5($this, _set____db54di) {
  $this.buffer_1 = _set____db54di;
}
function _get_buffer__tgqkad_0($this) {
  return $this.buffer_1;
}
function _set_closed__kdb0et_0($this, _set____db54di) {
  $this.closed_1 = _set____db54di;
}
function _get_closed__iwkfs1_0($this) {
  return $this.closed_1;
}
function _set_offset__aq0ezo($this, _set____db54di) {
  $this.offset_1 = _set____db54di;
}
function _get_offset__c6qzmg($this) {
  return $this.offset_1;
}
function _get_fd__ndc0wd($this) {
  return $this.fd_1;
}
function open($this, path) {
  if (!get_fs().existsSync(path.path_1)) {
    throw FileNotFoundException.new_kotlinx_io_files_FileNotFoundException_owlrro_k$('File does not exist: ' + path.path_1);
  }
  var fd = {_v: -1};
  var tmp0_safe_receiver = withCaughtException(FileSource$open$lambda(fd, path));
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.also' call
    throw IOException.new_kotlinx_io_IOException_q2he6h_k$('Failed to open a file ' + path.path_1 + '.', tmp0_safe_receiver);
  }
  if (fd._v < 0)
    throw IOException.new_kotlinx_io_IOException_uuba9f_k$('Failed to open a file ' + path.path_1 + '.');
  return fd._v;
}
function FileSource$open$lambda($fd, $path) {
  return () => {
    $fd._v = get_fs().openSync($path.path_1, 'r');
    return Unit_getInstance();
  };
}
function FileSource$readAtMostTo$lambda(this$0) {
  return () => {
    this$0.buffer_1 = get_fs().readFileSync(this$0.fd_1, null);
    return Unit_getInstance();
  };
}
function _set_closed__kdb0et_1($this, _set____db54di) {
  $this.closed_1 = _set____db54di;
}
function _get_closed__iwkfs1_1($this) {
  return $this.closed_1;
}
function _get_fd__ndc0wd_0($this) {
  return $this.fd_1;
}
function open_0($this, path, append) {
  var flags = append ? 'a' : 'w';
  var fd = {_v: -1};
  var tmp0_safe_receiver = withCaughtException(FileSink$open$lambda(fd, path, flags));
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.also' call
    throw IOException.new_kotlinx_io_IOException_q2he6h_k$('Failed to open a file ' + path.path_1 + '.', tmp0_safe_receiver);
  }
  if (fd._v < 0)
    throw IOException.new_kotlinx_io_IOException_uuba9f_k$('Failed to open a file ' + path.path_1 + '.');
  return fd._v;
}
function FileSink$open$lambda($fd, $path, $flags) {
  return () => {
    $fd._v = get_fs().openSync($path.path_1, $flags);
    return Unit_getInstance();
  };
}
function FileSink$write$lambda(this$0, $buf) {
  return () => {
    get_fs().writeFileSync(this$0.fd_1, $buf);
    return Unit_getInstance();
  };
}
function Path_2(path) {
  _init_properties_PathsNodeJs_kt__bvvvsp();
  return Path.new_kotlinx_io_files_Path_8t2kdx_k$(path, null);
}
function SystemPathSeparator$delegate$lambda() {
  _init_properties_PathsNodeJs_kt__bvvvsp();
  var sep = get_path().sep;
  // Inline function 'kotlin.check' call
  if (!(sep.length === 1)) {
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$('Check failed.');
  }
  return new Char(charCodeAt(sep, 0));
}
function _get_SystemPathSeparator_$ref_lvdbpt() {
  return () => new Char(get_SystemPathSeparator());
}
var properties_initialized_PathsNodeJs_kt_2u5gc7;
function _init_properties_PathsNodeJs_kt__bvvvsp() {
  if (!properties_initialized_PathsNodeJs_kt_2u5gc7) {
    properties_initialized_PathsNodeJs_kt_2u5gc7 = true;
    SystemPathSeparator$delegate = lazy(SystemPathSeparator$delegate$lambda);
  }
}
//region block: post-declaration
initMetadataForClass(InternalIoApi, 'InternalIoApi', VOID, VOID, [Annotation]);
initMetadataForClass(UnsafeIoApi, 'UnsafeIoApi', VOID, VOID, [Annotation]);
initMetadataForClass(DelicateIoApi, 'DelicateIoApi', VOID, VOID, [Annotation]);
initMetadataForInterface(RawSource, 'RawSource', VOID, VOID, [AutoCloseable]);
initMetadataForInterface(Source, 'Source', VOID, VOID, [RawSource]);
initMetadataForInterface(RawSink, 'RawSink', VOID, VOID, [AutoCloseable]);
initMetadataForInterface(Sink, 'Sink', VOID, VOID, [RawSink]);
protoOf(Buffer).readAtMostTo$default_wtrooa_k$ = readAtMostTo$default;
protoOf(Buffer).write$default_h97jte_k$ = write$default;
initMetadataForClass(Buffer, 'Buffer', Buffer.new_kotlinx_io_Buffer_ca7i83_k$, VOID, [Source, Sink]);
initMetadataForClass(PeekSource, 'PeekSource', VOID, VOID, [RawSource]);
protoOf(RealSource).readAtMostTo$default_wtrooa_k$ = readAtMostTo$default;
initMetadataForClass(RealSource, 'RealSource', VOID, VOID, [Source]);
initMetadataForCompanion(Companion);
initMetadataForClass(Segment, 'Segment');
initMetadataForClass(SegmentCopyTracker, 'SegmentCopyTracker');
initMetadataForObject(AlwaysSharedCopyTracker, 'AlwaysSharedCopyTracker');
initMetadataForInterface(FileSystem, 'FileSystem');
protoOf(SystemFileSystemImpl).delete$default_6ix9e7_k$ = delete$default;
protoOf(SystemFileSystemImpl).createDirectories$default_dm5znv_k$ = createDirectories$default;
protoOf(SystemFileSystemImpl).sink$default_v7kfux_k$ = sink$default;
initMetadataForClass(SystemFileSystemImpl, 'SystemFileSystemImpl', VOID, VOID, [FileSystem]);
initMetadataForClass(FileMetadata, 'FileMetadata', FileMetadata.new_kotlinx_io_files_FileMetadata_ujgqoz_k$);
initMetadataForObject(UnsafeBufferOperations, 'UnsafeBufferOperations');
initMetadataForInterface(SegmentReadContext, 'SegmentReadContext');
initMetadataForInterface(SegmentWriteContext, 'SegmentWriteContext');
initMetadataForInterface(BufferIterationContext, 'BufferIterationContext', VOID, VOID, [SegmentReadContext]);
initMetadataForClass(SegmentReadContextImpl$1, VOID, VOID, VOID, [SegmentReadContext]);
initMetadataForClass(SegmentWriteContextImpl$1, VOID, VOID, VOID, [SegmentWriteContext]);
initMetadataForClass(BufferIterationContextImpl$1, VOID, VOID, VOID, [BufferIterationContext]);
initMetadataForClass(IOException, 'IOException', IOException.new_kotlinx_io_IOException_g40fru_k$);
initMetadataForClass(EOFException, 'EOFException', EOFException.new_kotlinx_io_EOFException_tshwlj_k$);
initMetadataForObject(SegmentPool, 'SegmentPool');
initMetadataForClass(FileNotFoundException, 'FileNotFoundException');
initMetadataForClass(SystemFileSystem$1);
initMetadataForClass(Path, 'Path');
initMetadataForClass(FileSource, 'FileSource', VOID, VOID, [RawSource]);
initMetadataForClass(FileSink, 'FileSink', VOID, VOID, [RawSink]);
//endregion
//region block: exports
export {
  Buffer as Buffergs925ekssbch,
  EOFException as EOFExceptionh831u25jcq9n,
  IOException as IOException1wyutdmfe71nu,
  Source as Source1shr0ps16u4p4,
  indexOf_1 as indexOf29nspdgx2e3ap,
  readByteArray_0 as readByteArray1fhzfwi2j014k,
  readByteArray as readByteArray1ri21h2rciakw,
  readByteString as readByteString2hnsbql6t4ads,
  readString_0 as readString2nvggcfaijfhd,
  readString as readString3v6duspiz33tv,
  writeString as writeString33ca4btrgctw7,
};
//endregion

//# sourceMappingURL=kotlinx-io-kotlinx-io-core.mjs.map
