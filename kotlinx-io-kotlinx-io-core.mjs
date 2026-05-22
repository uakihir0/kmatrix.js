import {
  IndexOutOfBoundsException1qfr429iumro0 as IndexOutOfBoundsException,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  subtract2orl8z9upxd9l as subtract,
  _Char___init__impl__6a9atx2gndcvjvc5pke as _Char___init__impl__6a9atx,
  charArrayOf27f4r3dozbrk1 as charArrayOf,
  toString1pkumu07cwy4m as toString,
  Unit_instancev9v8hjid95df as Unit_instance,
  toShort36kaw0zjdq3ex as toShort,
  add2suhfggl4zvkk as add,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  fromInt2ii0rejb1w62w as fromInt,
  convertToInty04h231mmjoh as convertToInt,
  protoOf180f3jzyo7rfj as protoOf,
  StringBuildermazzzhj6kkai as StringBuilder,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  AutoCloseable1l5p57f9lp7kv as AutoCloseable,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  createThis2j2avj17cvnv2 as createThis,
  arrayCopytctsywo3h7gj as arrayCopy,
  toByte4i43936u611k as toByte,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  multiply2k9eolhnz1bjv as multiply,
  charCodeAt1yspne1d8erbm as charCodeAt,
  Char__toInt_impl_vasixdnyockrdnmht5 as Char__toInt_impl_vasixd,
  charArray2ujmm1qusno00 as charArray,
  numberToChar93r9buh19yek as numberToChar,
  concatToString3cxf0c1gqonpo as concatToString,
  captureStack1fzi4aczwc4hg as captureStack,
  Exceptiondt2hlxn7j7vw as Exception,
} from './kotlin-kotlin-stdlib.mjs';
import { UnsafeByteStringOperations_instance8alnioa9o8zd as UnsafeByteStringOperations_instance } from './kotlinx-io-kotlinx-io-bytestring.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Source {}
class Sink {}
function write$default(source, startIndex, endIndex, $super) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? source.length : endIndex;
  var tmp;
  if ($super === VOID) {
    this.e2c(source, startIndex, endIndex);
    tmp = Unit_instance;
  } else {
    tmp = $super.e2c.call(this, source, startIndex, endIndex);
  }
  return tmp;
}
class Buffer {
  constructor() {
    this.n2a_1 = null;
    this.o2a_1 = null;
    this.p2a_1 = 0n;
  }
  g2() {
    return this.p2a_1;
  }
  u2a() {
    return this;
  }
  v2a() {
    return this.g2() === 0n;
  }
  w2a(byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException.c2(toString(message));
    }
    if (this.g2() < byteCount) {
      throw EOFException.t2a("Buffer doesn't contain required number of bytes (size: " + this.g2().toString() + ', required: ' + byteCount.toString() + ')');
    }
  }
  x2a(byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount: ' + byteCount.toString() + ' < 0';
      throw IllegalArgumentException.c2(toString(message));
    }
    return this.g2() >= byteCount;
  }
  y2a() {
    var tmp0_elvis_lhs = this.n2a_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, 1n);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.g2();
    if (segmentSize === 0) {
      this.g2b();
      return this.y2a();
    }
    var v = segment.h2b();
    this.p2a_1 = subtract(this.p2a_1, 1n);
    if (segmentSize === 1) {
      this.g2b();
    }
    return v;
  }
  i2b() {
    var tmp0_elvis_lhs = this.n2a_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, 2n);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.g2();
    if (segmentSize < 2) {
      this.w2a(2n);
      if (segmentSize === 0) {
        this.g2b();
        return this.i2b();
      }
      // Inline function 'kotlinx.io.and' call
      var tmp_0 = (this.y2a() & 255) << 8;
      // Inline function 'kotlinx.io.and' call
      var tmp$ret$1 = this.y2a() & 255;
      return toShort(tmp_0 | tmp$ret$1);
    }
    var v = segment.j2b();
    this.p2a_1 = subtract(this.p2a_1, 2n);
    if (segmentSize === 2) {
      this.g2b();
    }
    return v;
  }
  k2b() {
    return Unit_instance;
  }
  l2b(out, startIndex, endIndex) {
    checkBounds(this.g2(), startIndex, endIndex);
    if (startIndex === endIndex)
      return Unit_instance;
    var currentOffset = startIndex;
    var remainingByteCount = subtract(endIndex, startIndex);
    out.p2a_1 = add(out.p2a_1, remainingByteCount);
    var s = this.n2a_1;
    while (currentOffset >= fromInt(ensureNotNull(s).b2b_1 - s.a2b_1 | 0)) {
      currentOffset = subtract(currentOffset, fromInt(s.b2b_1 - s.a2b_1 | 0));
      s = s.e2b_1;
    }
    while (remainingByteCount > 0n) {
      var copy = ensureNotNull(s).m2b();
      copy.a2b_1 = copy.a2b_1 + convertToInt(currentOffset) | 0;
      var tmp = copy;
      var tmp0 = copy.a2b_1 + convertToInt(remainingByteCount) | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = copy.b2b_1;
      tmp.b2b_1 = Math.min(tmp0, b);
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (out.n2a_1 == null) {
        out.n2a_1 = copy;
        out.o2a_1 = copy;
      } else if (false) {
        out.o2a_1 = ensureNotNull(out.o2a_1).n2b(copy).o2b();
        if (ensureNotNull(out.o2a_1).f2b_1 == null) {
          out.n2a_1 = out.o2a_1;
        }
      } else {
        out.o2a_1 = ensureNotNull(out.o2a_1).n2b(copy);
      }
      remainingByteCount = subtract(remainingByteCount, fromInt(copy.b2b_1 - copy.a2b_1 | 0));
      currentOffset = 0n;
      s = s.e2b_1;
    }
  }
  p2b() {
    var result = this.g2();
    if (result === 0n)
      return 0n;
    var tail = ensureNotNull(this.o2a_1);
    if (tail.b2b_1 < 8192 && tail.d2b_1) {
      result = subtract(result, fromInt(tail.b2b_1 - tail.a2b_1 | 0));
    }
    return result;
  }
  q2b(position) {
    if (position < 0n || position >= this.g2()) {
      throw IndexOutOfBoundsException.od('position (' + position.toString() + ') is not within the range [0..size(' + this.g2().toString() + '))');
    }
    if (position === 0n) {
      return ensureNotNull(this.n2a_1).r2b(0);
    }
    $l$block_1: {
      // Inline function 'kotlinx.io.seek' call
      if (this.n2a_1 == null) {
        return ensureNotNull(null).r2b(convertToInt(subtract(position, -1n)));
      }
      if (subtract(this.g2(), position) < position) {
        var s = this.o2a_1;
        var offset = this.g2();
        $l$loop: while (!(s == null) && offset > position) {
          offset = subtract(offset, fromInt(s.b2b_1 - s.a2b_1 | 0));
          if (offset <= position)
            break $l$loop;
          s = s.f2b_1;
        }
        var tmp0 = s;
        var offset_0 = offset;
        return ensureNotNull(tmp0).r2b(convertToInt(subtract(position, offset_0)));
      } else {
        var s_0 = this.n2a_1;
        var offset_1 = 0n;
        $l$loop_0: while (!(s_0 == null)) {
          var tmp0_0 = offset_1;
          // Inline function 'kotlin.Long.plus' call
          var other = s_0.b2b_1 - s_0.a2b_1 | 0;
          var nextOffset = add(tmp0_0, fromInt(other));
          if (nextOffset > position)
            break $l$loop_0;
          s_0 = s_0.e2b_1;
          offset_1 = nextOffset;
        }
        var tmp0_1 = s_0;
        var offset_2 = offset_1;
        return ensureNotNull(tmp0_1).r2b(convertToInt(subtract(position, offset_2)));
      }
    }
  }
  c4() {
    return this.s2b(this.g2());
  }
  s2b(byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.c2(toString(message));
    }
    var remainingByteCount = byteCount;
    while (remainingByteCount > 0n) {
      var tmp0_elvis_lhs = this.n2a_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw EOFException.t2a('Buffer exhausted before skipping ' + byteCount.toString() + ' bytes.');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var head = tmp;
      var tmp0 = remainingByteCount;
      // Inline function 'kotlinx.io.minOf' call
      var b = head.b2b_1 - head.a2b_1 | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b_0 = fromInt(b);
      var tmp$ret$3 = tmp0 <= b_0 ? tmp0 : b_0;
      var toSkip = convertToInt(tmp$ret$3);
      this.p2a_1 = subtract(this.p2a_1, fromInt(toSkip));
      remainingByteCount = subtract(remainingByteCount, fromInt(toSkip));
      head.a2b_1 = head.a2b_1 + toSkip | 0;
      if (head.a2b_1 === head.b2b_1) {
        this.g2b();
      }
    }
  }
  t2b(sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    var tmp0_elvis_lhs = this.n2a_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return -1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var s = tmp;
    var tmp0 = endIndex - startIndex | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = s.g2();
    var toCopy = Math.min(tmp0, b);
    s.u2b(sink, startIndex, startIndex + toCopy | 0);
    this.p2a_1 = subtract(this.p2a_1, fromInt(toCopy));
    if (isEmpty(s)) {
      this.g2b();
    }
    return toCopy;
  }
  v2b(sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.c2(toString(message));
    }
    if (this.g2() === 0n)
      return -1n;
    var bytesWritten = byteCount > this.g2() ? this.g2() : byteCount;
    sink.w2b(this, bytesWritten);
    return bytesWritten;
  }
  x2b(sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.c2(toString(message));
    }
    if (this.g2() < byteCount) {
      sink.w2b(this, this.g2());
      throw EOFException.t2a('Buffer exhausted before writing ' + byteCount.toString() + ' bytes. Only ' + this.g2().toString() + ' bytes were written.');
    }
    sink.w2b(this, byteCount);
  }
  y2b(sink) {
    var byteCount = this.g2();
    if (byteCount > 0n) {
      sink.w2b(this, byteCount);
    }
    return byteCount;
  }
  z2b() {
    return buffered(new PeekSource(this));
  }
  a2c(minimumCapacity) {
    // Inline function 'kotlin.require' call
    if (!(minimumCapacity >= 1 && minimumCapacity <= 8192)) {
      var message = 'unexpected capacity (' + minimumCapacity + '), should be in range [1, 8192]';
      throw IllegalArgumentException.c2(toString(message));
    }
    if (this.o2a_1 == null) {
      var result = SegmentPool_instance.d2c();
      this.n2a_1 = result;
      this.o2a_1 = result;
      return result;
    }
    var t = ensureNotNull(this.o2a_1);
    if ((t.b2b_1 + minimumCapacity | 0) > 8192 || !t.d2b_1) {
      var newTail = t.n2b(SegmentPool_instance.d2c());
      this.o2a_1 = newTail;
      return newTail;
    }
    return t;
  }
  e2c(source, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = source.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    var currentOffset = startIndex;
    while (currentOffset < endIndex) {
      var tail = this.a2c(1);
      var tmp0 = endIndex - currentOffset | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = tail.f2c();
      var toCopy = Math.min(tmp0, b);
      tail.g2c(source, currentOffset, currentOffset + toCopy | 0);
      currentOffset = currentOffset + toCopy | 0;
    }
    var tmp = this;
    var tmp0_0 = this.p2a_1;
    // Inline function 'kotlin.Long.plus' call
    var other = endIndex - startIndex | 0;
    tmp.p2a_1 = add(tmp0_0, fromInt(other));
  }
  i2c(source, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.c2(toString(message));
    }
    var remainingByteCount = byteCount;
    while (remainingByteCount > 0n) {
      var read = source.v2b(this, remainingByteCount);
      if (read === -1n) {
        throw EOFException.t2a('Source exhausted before reading ' + byteCount.toString() + ' bytes. ' + ('Only ' + subtract(byteCount, remainingByteCount).toString() + ' were read.'));
      }
      remainingByteCount = subtract(remainingByteCount, read);
    }
  }
  w2b(source, byteCount) {
    // Inline function 'kotlin.require' call
    if (!!(source === this)) {
      var message = 'source == this';
      throw IllegalArgumentException.c2(toString(message));
    }
    checkOffsetAndCount(source.p2a_1, 0n, byteCount);
    var remainingByteCount = byteCount;
    while (remainingByteCount > 0n) {
      if (remainingByteCount < fromInt(ensureNotNull(source.n2a_1).g2())) {
        var tail = this.o2a_1;
        var tmp;
        if (!(tail == null) && tail.d2b_1) {
          var tmp0 = remainingByteCount;
          // Inline function 'kotlin.Long.plus' call
          var other = tail.b2b_1;
          var tmp0_0 = add(tmp0, fromInt(other));
          // Inline function 'kotlin.Long.minus' call
          var other_0 = tail.j2c() ? 0 : tail.a2b_1;
          tmp = subtract(tmp0_0, fromInt(other_0)) <= 8192n;
        } else {
          tmp = false;
        }
        if (tmp) {
          ensureNotNull(source.n2a_1).l2c(tail, convertToInt(remainingByteCount));
          source.p2a_1 = subtract(source.p2a_1, remainingByteCount);
          this.p2a_1 = add(this.p2a_1, remainingByteCount);
          return Unit_instance;
        } else {
          source.n2a_1 = ensureNotNull(source.n2a_1).k2c(convertToInt(remainingByteCount));
        }
      }
      var segmentToMove = ensureNotNull(source.n2a_1);
      var movedByteCount = fromInt(segmentToMove.g2());
      source.n2a_1 = segmentToMove.m2c();
      if (source.n2a_1 == null) {
        source.o2a_1 = null;
      }
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (this.n2a_1 == null) {
        this.n2a_1 = segmentToMove;
        this.o2a_1 = segmentToMove;
      } else if (true) {
        this.o2a_1 = ensureNotNull(this.o2a_1).n2b(segmentToMove).o2b();
        if (ensureNotNull(this.o2a_1).f2b_1 == null) {
          this.n2a_1 = this.o2a_1;
        }
      } else {
        this.o2a_1 = ensureNotNull(this.o2a_1).n2b(segmentToMove);
      }
      source.p2a_1 = subtract(source.p2a_1, movedByteCount);
      this.p2a_1 = add(this.p2a_1, movedByteCount);
      remainingByteCount = subtract(remainingByteCount, movedByteCount);
    }
  }
  n2c(source) {
    var totalBytesRead = 0n;
    $l$loop: while (true) {
      var readCount = source.v2b(this, 8192n);
      if (readCount === -1n)
        break $l$loop;
      totalBytesRead = add(totalBytesRead, readCount);
    }
    return totalBytesRead;
  }
  o2c(byte) {
    this.a2c(1).p2c(byte);
    this.p2a_1 = add(this.p2a_1, 1n);
  }
  q2c(short) {
    this.a2c(2).r2c(short);
    this.p2a_1 = add(this.p2a_1, 2n);
  }
  a6() {
    return Unit_instance;
  }
  toString() {
    if (this.g2() === 0n)
      return 'Buffer(size=0)';
    var maxPrintableBytes = 64;
    // Inline function 'kotlinx.io.minOf' call
    var b = this.g2();
    // Inline function 'kotlin.comparisons.minOf' call
    var a = fromInt(maxPrintableBytes);
    var tmp$ret$0 = a <= b ? a : b;
    var len = convertToInt(tmp$ret$0);
    var builder = StringBuilder.jb(imul(len, 2) + (this.g2() > fromInt(maxPrintableBytes) ? 1 : 0) | 0);
    var bytesWritten = 0;
    // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
    var curr = this.n2a_1;
    while (!(curr == null)) {
      var tmp0 = get_SegmentReadContextImpl();
      var segment = curr;
      var idx = 0;
      while (bytesWritten < len && idx < segment.g2()) {
        var _unary__edvuaz = idx;
        idx = _unary__edvuaz + 1 | 0;
        var b_0 = tmp0.s2c(segment, _unary__edvuaz);
        bytesWritten = bytesWritten + 1 | 0;
        var tmp = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.shr' call
        var tmp$ret$4 = b_0 >> 4;
        var tmp_0 = builder.k1(tmp[tmp$ret$4 & 15]);
        var tmp_1 = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.and' call
        var tmp$ret$5 = b_0 & 15;
        tmp_0.k1(tmp_1[tmp$ret$5]);
      }
      curr = curr.e2b_1;
    }
    if (this.g2() > fromInt(maxPrintableBytes)) {
      builder.k1(_Char___init__impl__6a9atx(8230));
    }
    return 'Buffer(size=' + this.g2().toString() + ' hex=' + builder.toString() + ')';
  }
  g2b() {
    var oldHead = ensureNotNull(this.n2a_1);
    var nextHead = oldHead.e2b_1;
    this.n2a_1 = nextHead;
    if (nextHead == null) {
      this.o2a_1 = null;
    } else {
      nextHead.f2b_1 = null;
    }
    oldHead.e2b_1 = null;
    SegmentPool_instance.t2c(oldHead);
  }
  u2c() {
    var oldTail = ensureNotNull(this.o2a_1);
    var newTail = oldTail.f2b_1;
    this.o2a_1 = newTail;
    if (newTail == null) {
      this.n2a_1 = null;
    } else {
      newTail.e2b_1 = null;
    }
    oldTail.f2b_1 = null;
    SegmentPool_instance.t2c(oldTail);
  }
}
class PeekSource {
  constructor(upstream) {
    this.v2c_1 = upstream;
    this.w2c_1 = this.v2c_1.u2a();
    this.x2c_1 = this.w2c_1.n2a_1;
    var tmp = this;
    var tmp0_safe_receiver = this.w2c_1.n2a_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a2b_1;
    tmp.y2c_1 = tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
    this.z2c_1 = false;
    this.a2d_1 = 0n;
  }
  v2b(sink, byteCount) {
    // Inline function 'kotlin.check' call
    if (!!this.z2c_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.o(toString(message));
    }
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message_0 = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException.c2(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    if (!(this.x2c_1 == null || (this.x2c_1 === this.w2c_1.n2a_1 && this.y2c_1 === ensureNotNull(this.w2c_1.n2a_1).a2b_1))) {
      var message_1 = 'Peek source is invalid because upstream source was used';
      throw IllegalStateException.o(toString(message_1));
    }
    if (byteCount === 0n)
      return 0n;
    // Inline function 'kotlin.Long.plus' call
    var this_0 = this.a2d_1;
    var tmp$ret$7 = add(this_0, fromInt(1));
    if (!this.v2c_1.x2a(tmp$ret$7))
      return -1n;
    if (this.x2c_1 == null && !(this.w2c_1.n2a_1 == null)) {
      this.x2c_1 = this.w2c_1.n2a_1;
      this.y2c_1 = ensureNotNull(this.w2c_1.n2a_1).a2b_1;
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = subtract(this.w2c_1.g2(), this.a2d_1);
    var toCopy = byteCount <= b ? byteCount : b;
    this.w2c_1.l2b(sink, this.a2d_1, add(this.a2d_1, toCopy));
    this.a2d_1 = add(this.a2d_1, toCopy);
    return toCopy;
  }
  a6() {
    this.z2c_1 = true;
  }
}
class RealSource {
  constructor(source) {
    this.b2d_1 = source;
    this.c2d_1 = false;
    this.d2d_1 = new Buffer();
  }
  u2a() {
    return this.d2d_1;
  }
  v2b(sink, byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.c2d_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.o(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException.c2(toString(message_0));
    }
    if (this.d2d_1.g2() === 0n) {
      var read = this.b2d_1.v2b(this.d2d_1, 8192n);
      if (read === -1n)
        return -1n;
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = this.d2d_1.g2();
    var toRead = byteCount <= b ? byteCount : b;
    return this.d2d_1.v2b(sink, toRead);
  }
  v2a() {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.c2d_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.o(toString(message));
    }
    return this.d2d_1.v2a() && this.b2d_1.v2b(this.d2d_1, 8192n) === -1n;
  }
  w2a(byteCount) {
    if (!this.x2a(byteCount))
      throw EOFException.t2a("Source doesn't contain required number of bytes (" + byteCount.toString() + ').');
  }
  x2a(byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.c2d_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.o(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException.c2(toString(message_0));
    }
    while (this.d2d_1.g2() < byteCount) {
      if (this.b2d_1.v2b(this.d2d_1, 8192n) === -1n)
        return false;
    }
    return true;
  }
  y2a() {
    this.w2a(1n);
    return this.d2d_1.y2a();
  }
  t2b(sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    if (this.d2d_1.g2() === 0n) {
      var read = this.b2d_1.v2b(this.d2d_1, 8192n);
      if (read === -1n)
        return -1;
    }
    var tmp0 = endIndex - startIndex | 0;
    // Inline function 'kotlinx.io.minOf' call
    var b = this.d2d_1.g2();
    // Inline function 'kotlin.comparisons.minOf' call
    var a = fromInt(tmp0);
    var tmp$ret$1 = a <= b ? a : b;
    var toRead = convertToInt(tmp$ret$1);
    return this.d2d_1.t2b(sink, startIndex, startIndex + toRead | 0);
  }
  x2b(sink, byteCount) {
    try {
      this.w2a(byteCount);
    } catch ($p) {
      if ($p instanceof EOFException) {
        var e = $p;
        sink.w2b(this.d2d_1, this.d2d_1.g2());
        throw e;
      } else {
        throw $p;
      }
    }
    this.d2d_1.x2b(sink, byteCount);
  }
  y2b(sink) {
    var totalBytesWritten = 0n;
    while (!(this.b2d_1.v2b(this.d2d_1, 8192n) === -1n)) {
      var emitByteCount = this.d2d_1.p2b();
      if (emitByteCount > 0n) {
        totalBytesWritten = add(totalBytesWritten, emitByteCount);
        sink.w2b(this.d2d_1, emitByteCount);
      }
    }
    if (this.d2d_1.g2() > 0n) {
      totalBytesWritten = add(totalBytesWritten, this.d2d_1.g2());
      sink.w2b(this.d2d_1, this.d2d_1.g2());
    }
    return totalBytesWritten;
  }
  i2b() {
    this.w2a(2n);
    return this.d2d_1.i2b();
  }
  z2b() {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.c2d_1) {
      var message = 'Source is closed.';
      throw IllegalStateException.o(toString(message));
    }
    return buffered(new PeekSource(this));
  }
  a6() {
    if (this.c2d_1)
      return Unit_instance;
    this.c2d_1 = true;
    this.b2d_1.a6();
    this.d2d_1.c4();
  }
  toString() {
    return 'buffered(' + toString(this.b2d_1) + ')';
  }
}
class Companion {
  constructor() {
    this.e2d_1 = 8192;
    this.f2d_1 = 1024;
  }
  g2d() {
    return Segment.h2d();
  }
}
class Segment {
  j2c() {
    var tmp0_safe_receiver = this.c2b_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i2d();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  static h2d() {
    var $this = createThis(this);
    init_kotlinx_io_Segment($this);
    $this.z2a_1 = new Int8Array(8192);
    $this.d2b_1 = true;
    $this.c2b_1 = null;
    return $this;
  }
  static j2d(data, pos, limit, shareToken, owner) {
    var $this = createThis(this);
    init_kotlinx_io_Segment($this);
    $this.z2a_1 = data;
    $this.a2b_1 = pos;
    $this.b2b_1 = limit;
    $this.c2b_1 = shareToken;
    $this.d2b_1 = owner;
    return $this;
  }
  m2b() {
    var tmp0_elvis_lhs = this.c2b_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = SegmentPool_instance.k2d();
      this.c2b_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var t = tmp;
    var tmp_0 = this.a2b_1;
    var tmp_1 = this.b2b_1;
    // Inline function 'kotlin.also' call
    t.l2d();
    return Segment.j2d(this.z2a_1, tmp_0, tmp_1, t, false);
  }
  m2c() {
    var result = this.e2b_1;
    if (!(this.f2b_1 == null)) {
      ensureNotNull(this.f2b_1).e2b_1 = this.e2b_1;
    }
    if (!(this.e2b_1 == null)) {
      ensureNotNull(this.e2b_1).f2b_1 = this.f2b_1;
    }
    this.e2b_1 = null;
    this.f2b_1 = null;
    return result;
  }
  n2b(segment) {
    segment.f2b_1 = this;
    segment.e2b_1 = this.e2b_1;
    if (!(this.e2b_1 == null)) {
      ensureNotNull(this.e2b_1).f2b_1 = segment;
    }
    this.e2b_1 = segment;
    return segment;
  }
  k2c(byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount > 0 && byteCount <= (this.b2b_1 - this.a2b_1 | 0))) {
      var message = 'byteCount out of range';
      throw IllegalArgumentException.c2(toString(message));
    }
    var prefix;
    if (byteCount >= 1024) {
      prefix = this.m2b();
    } else {
      prefix = SegmentPool_instance.d2c();
      var tmp0 = this.z2a_1;
      var tmp2 = prefix.z2a_1;
      var tmp5 = this.a2b_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.a2b_1 + byteCount | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, 0, tmp5, endIndex);
    }
    prefix.b2b_1 = prefix.a2b_1 + byteCount | 0;
    this.a2b_1 = this.a2b_1 + byteCount | 0;
    if (!(this.f2b_1 == null)) {
      ensureNotNull(this.f2b_1).n2b(prefix);
    } else {
      prefix.e2b_1 = this;
      this.f2b_1 = prefix;
    }
    return prefix;
  }
  o2b() {
    // Inline function 'kotlin.check' call
    if (!!(this.f2b_1 == null)) {
      var message = 'cannot compact';
      throw IllegalStateException.o(toString(message));
    }
    if (!ensureNotNull(this.f2b_1).d2b_1)
      return this;
    var byteCount = this.b2b_1 - this.a2b_1 | 0;
    var availableByteCount = (8192 - ensureNotNull(this.f2b_1).b2b_1 | 0) + (ensureNotNull(this.f2b_1).j2c() ? 0 : ensureNotNull(this.f2b_1).a2b_1) | 0;
    if (byteCount > availableByteCount)
      return this;
    var predecessor = this.f2b_1;
    this.l2c(ensureNotNull(predecessor), byteCount);
    var successor = this.m2c();
    // Inline function 'kotlin.check' call
    if (!(successor == null)) {
      throw IllegalStateException.o('Check failed.');
    }
    SegmentPool_instance.t2c(this);
    return predecessor;
  }
  p2c(byte) {
    var _unary__edvuaz = this.b2b_1;
    this.b2b_1 = _unary__edvuaz + 1 | 0;
    this.z2a_1[_unary__edvuaz] = byte;
  }
  r2c(short) {
    var data = this.z2a_1;
    var limit = this.b2b_1;
    var _unary__edvuaz = limit;
    limit = _unary__edvuaz + 1 | 0;
    data[_unary__edvuaz] = toByte((short >>> 8 | 0) & 255);
    var _unary__edvuaz_0 = limit;
    limit = _unary__edvuaz_0 + 1 | 0;
    data[_unary__edvuaz_0] = toByte(short & 255);
    this.b2b_1 = limit;
  }
  h2b() {
    var _unary__edvuaz = this.a2b_1;
    this.a2b_1 = _unary__edvuaz + 1 | 0;
    return this.z2a_1[_unary__edvuaz];
  }
  j2b() {
    var data = this.z2a_1;
    var pos = this.a2b_1;
    var _unary__edvuaz = pos;
    pos = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp = (data[_unary__edvuaz] & 255) << 8;
    var _unary__edvuaz_0 = pos;
    pos = _unary__edvuaz_0 + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp$ret$1 = data[_unary__edvuaz_0] & 255;
    var s = toShort(tmp | tmp$ret$1);
    this.a2b_1 = pos;
    return s;
  }
  l2c(sink, byteCount) {
    // Inline function 'kotlin.check' call
    if (!sink.d2b_1) {
      var message = 'only owner can write';
      throw IllegalStateException.o(toString(message));
    }
    if ((sink.b2b_1 + byteCount | 0) > 8192) {
      if (sink.j2c())
        throw IllegalArgumentException.dd();
      if (((sink.b2b_1 + byteCount | 0) - sink.a2b_1 | 0) > 8192)
        throw IllegalArgumentException.dd();
      var tmp0 = sink.z2a_1;
      var tmp2 = sink.z2a_1;
      var tmp5 = sink.a2b_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = sink.b2b_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, 0, tmp5, endIndex);
      sink.b2b_1 = sink.b2b_1 - sink.a2b_1 | 0;
      sink.a2b_1 = 0;
    }
    var tmp0_0 = this.z2a_1;
    var tmp2_0 = sink.z2a_1;
    var tmp4 = sink.b2b_1;
    var tmp6 = this.a2b_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = this.a2b_1 + byteCount | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp0_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, tmp2_0, tmp4, tmp6, endIndex_0);
    sink.b2b_1 = sink.b2b_1 + byteCount | 0;
    this.a2b_1 = this.a2b_1 + byteCount | 0;
  }
  u2b(dst, dstStartOffset, dstEndOffset) {
    var len = dstEndOffset - dstStartOffset | 0;
    var tmp0 = this.z2a_1;
    var tmp6 = this.a2b_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.a2b_1 + len | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, dst, dstStartOffset, tmp6, endIndex);
    this.a2b_1 = this.a2b_1 + len | 0;
  }
  g2c(src, srcStartOffset, srcEndOffset) {
    var tmp2 = this.z2a_1;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = this.b2b_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = src;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp2, destinationOffset, srcStartOffset, srcEndOffset);
    this.b2b_1 = this.b2b_1 + (srcEndOffset - srcStartOffset | 0) | 0;
  }
  g2() {
    return this.b2b_1 - this.a2b_1 | 0;
  }
  f2c() {
    return this.z2a_1.length - this.b2b_1 | 0;
  }
  m2d(readOnly) {
    return this.z2a_1;
  }
  r2b(index) {
    return this.z2a_1[this.a2b_1 + index | 0];
  }
  n2d(index, value) {
    this.z2a_1[this.b2b_1 + index | 0] = value;
  }
  o2d(index, b0, b1) {
    var d = this.z2a_1;
    var l = this.b2b_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
  }
  p2d(index, b0, b1, b2) {
    var d = this.z2a_1;
    var l = this.b2b_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
  }
  q2d(index, b0, b1, b2, b3) {
    var d = this.z2a_1;
    var l = this.b2b_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
    d[(l + index | 0) + 3 | 0] = b3;
  }
}
class SegmentCopyTracker {}
class AlwaysSharedCopyTracker extends SegmentCopyTracker {
  constructor() {
    AlwaysSharedCopyTracker_instance = null;
    super();
    AlwaysSharedCopyTracker_instance = this;
  }
  i2d() {
    return true;
  }
  l2d() {
    return Unit_instance;
  }
}
class UnsafeBufferOperations {}
class SegmentReadContextImpl$1 {
  s2c(segment, offset) {
    return segment.r2b(offset);
  }
}
class SegmentWriteContextImpl$1 {
  u2d(segment, offset, value) {
    segment.n2d(offset, value);
  }
  t2d(segment, offset, b0, b1) {
    segment.o2d(offset, b0, b1);
  }
  s2d(segment, offset, b0, b1, b2) {
    segment.p2d(offset, b0, b1, b2);
  }
  r2d(segment, offset, b0, b1, b2, b3) {
    segment.q2d(offset, b0, b1, b2, b3);
  }
}
class BufferIterationContextImpl$1 {
  s2c(segment, offset) {
    return get_SegmentReadContextImpl().s2c(segment, offset);
  }
}
class IOException extends Exception {
  static x2d() {
    var $this = this.gd();
    init_kotlinx_io_IOException($this);
    return $this;
  }
  static y2d(message) {
    var $this = this.hd(message);
    init_kotlinx_io_IOException($this);
    return $this;
  }
  static z2d(message, cause) {
    var $this = this.id(message, cause);
    init_kotlinx_io_IOException($this);
    return $this;
  }
}
class EOFException extends IOException {
  static a2e() {
    var $this = this.x2d();
    init_kotlinx_io_EOFException($this);
    return $this;
  }
  static t2a(message) {
    var $this = this.y2d(message);
    init_kotlinx_io_EOFException($this);
    return $this;
  }
}
class SegmentPool {
  constructor() {
    this.b2c_1 = 0;
    this.c2c_1 = 0;
  }
  d2c() {
    return Companion_instance.g2d();
  }
  t2c(segment) {
  }
  k2d() {
    return AlwaysSharedCopyTracker_getInstance();
  }
}
//endregion
function get_HEX_DIGIT_CHARS() {
  _init_properties__Util_kt__g8tcl9();
  return HEX_DIGIT_CHARS;
}
var HEX_DIGIT_CHARS;
function checkBounds(size, startIndex, endIndex) {
  _init_properties__Util_kt__g8tcl9();
  if (startIndex < 0n || endIndex > size) {
    throw IndexOutOfBoundsException.od('startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') are not within the range [0..size(' + size.toString() + '))');
  }
  if (startIndex > endIndex) {
    throw IllegalArgumentException.c2('startIndex (' + startIndex.toString() + ') > endIndex (' + endIndex.toString() + ')');
  }
}
function checkOffsetAndCount(size, offset, byteCount) {
  _init_properties__Util_kt__g8tcl9();
  if (offset < 0n || offset > size || subtract(size, offset) < byteCount || byteCount < 0n) {
    throw IllegalArgumentException.c2('offset (' + offset.toString() + ') and byteCount (' + byteCount.toString() + ') are not within the range [0..size(' + size.toString() + '))');
  }
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
  throw EOFException.t2a("Buffer doesn't contain required number of bytes (size: " + $this.g2().toString() + ', required: ' + byteCount.toString() + ')');
}
function indexOf(_this__u8e3s4, byte, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0n : startIndex;
  endIndex = endIndex === VOID ? _this__u8e3s4.g2() : endIndex;
  // Inline function 'kotlin.comparisons.minOf' call
  var b = _this__u8e3s4.g2();
  var endOffset = endIndex <= b ? endIndex : b;
  checkBounds(_this__u8e3s4.g2(), startIndex, endOffset);
  if (startIndex === endOffset)
    return -1n;
  $l$block_1: {
    // Inline function 'kotlinx.io.seek' call
    if (_this__u8e3s4.n2a_1 == null) {
      if (-1n === -1n) {
        return -1n;
      }
      var segment = null;
      var offset = -1n;
      do {
        // Inline function 'kotlin.check' call
        if (!(endOffset > offset)) {
          throw IllegalStateException.o('Check failed.');
        }
        ensureNotNull(segment);
        var tmp = segment;
        // Inline function 'kotlin.comparisons.maxOf' call
        var a = convertToInt(subtract(startIndex, offset));
        var tmp_0 = Math.max(a, 0);
        var tmp0 = segment.g2();
        // Inline function 'kotlin.comparisons.minOf' call
        var b_0 = convertToInt(subtract(endOffset, offset));
        var tmp$ret$5 = Math.min(tmp0, b_0);
        var idx = indexOf_0(tmp, byte, tmp_0, tmp$ret$5);
        if (!(idx === -1)) {
          return add(offset, fromInt(idx));
        }
        var tmp0_0 = offset;
        // Inline function 'kotlin.Long.plus' call
        var other = segment.g2();
        offset = add(tmp0_0, fromInt(other));
        segment = segment.e2b_1;
      }
       while (!(segment == null) && offset < endOffset);
      return -1n;
    }
    if (subtract(_this__u8e3s4.g2(), startIndex) < startIndex) {
      var s = _this__u8e3s4.o2a_1;
      var offset_0 = _this__u8e3s4.g2();
      $l$loop: while (!(s == null) && offset_0 > startIndex) {
        offset_0 = subtract(offset_0, fromInt(s.b2b_1 - s.a2b_1 | 0));
        if (offset_0 <= startIndex)
          break $l$loop;
        s = s.f2b_1;
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
          throw IllegalStateException.o('Check failed.');
        }
        ensureNotNull(segment_0);
        var tmp_1 = segment_0;
        // Inline function 'kotlin.comparisons.maxOf' call
        var a_0 = convertToInt(subtract(startIndex, offset_1));
        var tmp_2 = Math.max(a_0, 0);
        var tmp0_2 = segment_0.g2();
        // Inline function 'kotlin.comparisons.minOf' call
        var b_1 = convertToInt(subtract(endOffset, offset_1));
        var tmp$ret$10 = Math.min(tmp0_2, b_1);
        var idx_0 = indexOf_0(tmp_1, byte, tmp_2, tmp$ret$10);
        if (!(idx_0 === -1)) {
          return add(offset_1, fromInt(idx_0));
        }
        var tmp0_3 = offset_1;
        // Inline function 'kotlin.Long.plus' call
        var other_0 = segment_0.g2();
        offset_1 = add(tmp0_3, fromInt(other_0));
        segment_0 = segment_0.e2b_1;
      }
       while (!(segment_0 == null) && offset_1 < endOffset);
      return -1n;
    } else {
      var s_0 = _this__u8e3s4.n2a_1;
      var offset_2 = 0n;
      $l$loop_0: while (!(s_0 == null)) {
        var tmp0_4 = offset_2;
        // Inline function 'kotlin.Long.plus' call
        var other_1 = s_0.b2b_1 - s_0.a2b_1 | 0;
        var nextOffset = add(tmp0_4, fromInt(other_1));
        if (nextOffset > startIndex)
          break $l$loop_0;
        s_0 = s_0.e2b_1;
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
          throw IllegalStateException.o('Check failed.');
        }
        ensureNotNull(segment_1);
        var tmp_3 = segment_1;
        // Inline function 'kotlin.comparisons.maxOf' call
        var a_1 = convertToInt(subtract(startIndex, offset_3));
        var tmp_4 = Math.max(a_1, 0);
        var tmp0_6 = segment_1.g2();
        // Inline function 'kotlin.comparisons.minOf' call
        var b_2 = convertToInt(subtract(endOffset, offset_3));
        var tmp$ret$16 = Math.min(tmp0_6, b_2);
        var idx_1 = indexOf_0(tmp_3, byte, tmp_4, tmp$ret$16);
        if (!(idx_1 === -1)) {
          return add(offset_3, fromInt(idx_1));
        }
        var tmp0_7 = offset_3;
        // Inline function 'kotlin.Long.plus' call
        var other_2 = segment_1.g2();
        offset_3 = add(tmp0_7, fromInt(other_2));
        segment_1 = segment_1.e2b_1;
      }
       while (!(segment_1 == null) && offset_3 < endOffset);
      return -1n;
    }
  }
}
function readByteString(_this__u8e3s4, byteCount) {
  return UnsafeByteStringOperations_instance.m2a(readByteArray_0(_this__u8e3s4, byteCount));
}
function buffered(_this__u8e3s4) {
  return new RealSource(_this__u8e3s4);
}
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
function init_kotlinx_io_Segment(_this__u8e3s4) {
  _this__u8e3s4.a2b_1 = 0;
  _this__u8e3s4.b2b_1 = 0;
  _this__u8e3s4.c2b_1 = null;
  _this__u8e3s4.d2b_1 = false;
  _this__u8e3s4.e2b_1 = null;
  _this__u8e3s4.f2b_1 = null;
}
function isEmpty(_this__u8e3s4) {
  return _this__u8e3s4.g2() === 0;
}
var AlwaysSharedCopyTracker_instance;
function AlwaysSharedCopyTracker_getInstance() {
  if (AlwaysSharedCopyTracker_instance === VOID)
    new AlwaysSharedCopyTracker();
  return AlwaysSharedCopyTracker_instance;
}
function indexOf_0(_this__u8e3s4, byte, startOffset, endOffset) {
  // Inline function 'kotlin.require' call
  if (!(0 <= startOffset ? startOffset < _this__u8e3s4.g2() : false)) {
    var message = '' + startOffset;
    throw IllegalArgumentException.c2(toString(message));
  }
  // Inline function 'kotlin.require' call
  if (!(startOffset <= endOffset ? endOffset <= _this__u8e3s4.g2() : false)) {
    var message_0 = '' + endOffset;
    throw IllegalArgumentException.c2(toString(message_0));
  }
  var p = _this__u8e3s4.a2b_1;
  var data = _this__u8e3s4.m2d(true);
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
function readByteArray(_this__u8e3s4) {
  return readByteArrayImpl(_this__u8e3s4, -1);
}
function readByteArray_0(_this__u8e3s4, byteCount) {
  // Inline function 'kotlinx.io.checkByteCount' call
  var byteCount_0 = fromInt(byteCount);
  // Inline function 'kotlin.require' call
  if (!(byteCount_0 >= 0n)) {
    var message = 'byteCount (' + byteCount_0.toString() + ') < 0';
    throw IllegalArgumentException.c2(toString(message));
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
    throw IllegalArgumentException.c2(toString(message));
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
      tmp_0 = _this__u8e3s4.x2a(tmp$ret$2);
    } else {
      tmp_0 = false;
    }
    if (!tmp_0) {
      break $l$loop;
    }
    var tmp_1 = _this__u8e3s4.u2a();
    var tmp_2 = offset;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = _this__u8e3s4.u2a().g2();
    var tmp$ret$3 = endIndex <= b ? endIndex : b;
    var idx = indexOf(tmp_1, byte, tmp_2, tmp$ret$3);
    if (!(idx === -1n)) {
      return idx;
    }
    offset = _this__u8e3s4.u2a().g2();
  }
  return -1n;
}
function readByteArrayImpl(_this__u8e3s4, size) {
  var arraySize = size;
  if (size === -1) {
    var fetchSize = 2147483647n;
    while (_this__u8e3s4.u2a().g2() < 2147483647n && _this__u8e3s4.x2a(fetchSize)) {
      // Inline function 'kotlin.Long.times' call
      var this_0 = fetchSize;
      fetchSize = multiply(this_0, fromInt(2));
    }
    // Inline function 'kotlin.check' call
    if (!(_this__u8e3s4.u2a().g2() < 2147483647n)) {
      var message = "Can't create an array of size " + _this__u8e3s4.u2a().g2().toString();
      throw IllegalStateException.o(toString(message));
    }
    arraySize = convertToInt(_this__u8e3s4.u2a().g2());
  } else {
    _this__u8e3s4.w2a(fromInt(size));
  }
  var array = new Int8Array(arraySize);
  readTo(_this__u8e3s4.u2a(), array);
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
    var bytesRead = _this__u8e3s4.t2b(sink, offset, endIndex);
    if (bytesRead === -1) {
      throw EOFException.t2a('Source exhausted before reading ' + (endIndex - startIndex | 0) + ' bytes. ' + ('Only ' + bytesRead + ' bytes were read.'));
    }
    offset = offset + bytesRead | 0;
  }
}
function readString(_this__u8e3s4, byteCount) {
  _this__u8e3s4.w2a(byteCount);
  return commonReadUtf8(_this__u8e3s4.u2a(), byteCount);
}
function readString_0(_this__u8e3s4) {
  _this__u8e3s4.x2a(9223372036854775807n);
  return commonReadUtf8(_this__u8e3s4.u2a(), _this__u8e3s4.u2a().g2());
}
function writeString(_this__u8e3s4, string, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? string.length : endIndex;
  // Inline function 'kotlinx.io.checkBounds' call
  var size = string.length;
  checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
  // Inline function 'kotlinx.io.writeToInternalBuffer' call
  // Inline function 'kotlinx.io.commonWriteUtf8' call
  var this_0 = _this__u8e3s4.u2a();
  var i = startIndex;
  while (i < endIndex) {
    var p0 = i;
    // Inline function 'kotlin.code' call
    var this_1 = charCodeAt(string, p0);
    var c = Char__toInt_impl_vasixd(this_1);
    if (c < 128) {
      $l$block_0: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail = this_0.a2c(1);
        var ctx = get_SegmentWriteContextImpl();
        var segmentOffset = -i | 0;
        // Inline function 'kotlin.comparisons.minOf' call
        var b = i + tail.f2c() | 0;
        var runLimit = Math.min(endIndex, b);
        var _unary__edvuaz = i;
        i = _unary__edvuaz + 1 | 0;
        ctx.u2d(tail, segmentOffset + _unary__edvuaz | 0, toByte(c));
        $l$loop: while (i < runLimit) {
          var p0_0 = i;
          // Inline function 'kotlin.code' call
          var this_2 = charCodeAt(string, p0_0);
          c = Char__toInt_impl_vasixd(this_2);
          if (c >= 128)
            break $l$loop;
          var _unary__edvuaz_0 = i;
          i = _unary__edvuaz_0 + 1 | 0;
          ctx.u2d(tail, segmentOffset + _unary__edvuaz_0 | 0, toByte(c));
        }
        var bytesWritten = i + segmentOffset | 0;
        if (bytesWritten === 1) {
          tail.b2b_1 = tail.b2b_1 + bytesWritten | 0;
          var tmp = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_3 = this_0.p2a_1;
          tmp.p2a_1 = add(this_3, fromInt(bytesWritten));
          break $l$block_0;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten ? bytesWritten <= tail.f2c() : false)) {
          var message = 'Invalid number of bytes written: ' + bytesWritten + '. Should be in 0..' + tail.f2c();
          throw IllegalStateException.o(toString(message));
        }
        if (!(bytesWritten === 0)) {
          tail.b2b_1 = tail.b2b_1 + bytesWritten | 0;
          var tmp_0 = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_4 = this_0.p2a_1;
          tmp_0.p2a_1 = add(this_4, fromInt(bytesWritten));
          break $l$block_0;
        }
        if (isEmpty(tail)) {
          this_0.u2c();
        }
      }
    } else if (c < 2048) {
      $l$block_2: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail_0 = this_0.a2c(2);
        get_SegmentWriteContextImpl().t2d(tail_0, 0, toByte(c >> 6 | 192), toByte(c & 63 | 128));
        var bytesWritten_0 = 2;
        if (bytesWritten_0 === 2) {
          tail_0.b2b_1 = tail_0.b2b_1 + bytesWritten_0 | 0;
          var tmp_1 = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_5 = this_0.p2a_1;
          tmp_1.p2a_1 = add(this_5, fromInt(bytesWritten_0));
          break $l$block_2;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten_0 ? bytesWritten_0 <= tail_0.f2c() : false)) {
          var message_0 = 'Invalid number of bytes written: ' + bytesWritten_0 + '. Should be in 0..' + tail_0.f2c();
          throw IllegalStateException.o(toString(message_0));
        }
        if (!(bytesWritten_0 === 0)) {
          tail_0.b2b_1 = tail_0.b2b_1 + bytesWritten_0 | 0;
          var tmp_2 = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_6 = this_0.p2a_1;
          tmp_2.p2a_1 = add(this_6, fromInt(bytesWritten_0));
          break $l$block_2;
        }
        if (isEmpty(tail_0)) {
          this_0.u2c();
        }
      }
      i = i + 1 | 0;
    } else if (c < 55296 || c > 57343) {
      $l$block_4: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail_1 = this_0.a2c(3);
        get_SegmentWriteContextImpl().s2d(tail_1, 0, toByte(c >> 12 | 224), toByte(c >> 6 & 63 | 128), toByte(c & 63 | 128));
        var bytesWritten_1 = 3;
        if (bytesWritten_1 === 3) {
          tail_1.b2b_1 = tail_1.b2b_1 + bytesWritten_1 | 0;
          var tmp_3 = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_7 = this_0.p2a_1;
          tmp_3.p2a_1 = add(this_7, fromInt(bytesWritten_1));
          break $l$block_4;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten_1 ? bytesWritten_1 <= tail_1.f2c() : false)) {
          var message_1 = 'Invalid number of bytes written: ' + bytesWritten_1 + '. Should be in 0..' + tail_1.f2c();
          throw IllegalStateException.o(toString(message_1));
        }
        if (!(bytesWritten_1 === 0)) {
          tail_1.b2b_1 = tail_1.b2b_1 + bytesWritten_1 | 0;
          var tmp_4 = this_0;
          // Inline function 'kotlin.Long.plus' call
          var this_8 = this_0.p2a_1;
          tmp_4.p2a_1 = add(this_8, fromInt(bytesWritten_1));
          break $l$block_4;
        }
        if (isEmpty(tail_1)) {
          this_0.u2c();
        }
      }
      i = i + 1 | 0;
    } else {
      var tmp_5;
      if ((i + 1 | 0) < endIndex) {
        var p0_1 = i + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_9 = charCodeAt(string, p0_1);
        tmp_5 = Char__toInt_impl_vasixd(this_9);
      } else {
        tmp_5 = 0;
      }
      var low = tmp_5;
      if (c > 56319 || !(56320 <= low ? low <= 57343 : false)) {
        // Inline function 'kotlin.code' call
        var this_10 = _Char___init__impl__6a9atx(63);
        var tmp$ret$29 = Char__toInt_impl_vasixd(this_10);
        this_0.o2c(toByte(tmp$ret$29));
        i = i + 1 | 0;
      } else {
        var codePoint = 65536 + ((c & 1023) << 10 | low & 1023) | 0;
        $l$block_6: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_2 = this_0.a2c(4);
          get_SegmentWriteContextImpl().r2d(tail_2, 0, toByte(codePoint >> 18 | 240), toByte(codePoint >> 12 & 63 | 128), toByte(codePoint >> 6 & 63 | 128), toByte(codePoint & 63 | 128));
          var bytesWritten_2 = 4;
          if (bytesWritten_2 === 4) {
            tail_2.b2b_1 = tail_2.b2b_1 + bytesWritten_2 | 0;
            var tmp_6 = this_0;
            // Inline function 'kotlin.Long.plus' call
            var this_11 = this_0.p2a_1;
            tmp_6.p2a_1 = add(this_11, fromInt(bytesWritten_2));
            break $l$block_6;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten_2 ? bytesWritten_2 <= tail_2.f2c() : false)) {
            var message_2 = 'Invalid number of bytes written: ' + bytesWritten_2 + '. Should be in 0..' + tail_2.f2c();
            throw IllegalStateException.o(toString(message_2));
          }
          if (!(bytesWritten_2 === 0)) {
            tail_2.b2b_1 = tail_2.b2b_1 + bytesWritten_2 | 0;
            var tmp_7 = this_0;
            // Inline function 'kotlin.Long.plus' call
            var this_12 = this_0.p2a_1;
            tmp_7.p2a_1 = add(this_12, fromInt(bytesWritten_2));
            break $l$block_6;
          }
          if (isEmpty(tail_2)) {
            this_0.u2c();
          }
        }
        i = i + 2 | 0;
      }
    }
  }
  _this__u8e3s4.k2b();
}
function commonReadUtf8(_this__u8e3s4, byteCount) {
  if (byteCount === 0n)
    return '';
  // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
  var curr = _this__u8e3s4.n2a_1;
  while (!(curr == null)) {
    get_SegmentReadContextImpl();
    if (fromInt(curr.g2()) >= byteCount) {
      var result = '';
      // Inline function 'kotlinx.io.unsafe.withData' call
      var tmp0 = curr.m2d(true);
      var tmp2 = curr.a2b_1;
      var tmp0_0 = curr.b2b_1;
      // Inline function 'kotlin.math.min' call
      var b = tmp2 + convertToInt(byteCount) | 0;
      var tmp$ret$4 = Math.min(tmp0_0, b);
      result = commonToUtf8String(tmp0, tmp2, tmp$ret$4);
      _this__u8e3s4.s2b(byteCount);
      return result;
    }
    return commonToUtf8String(readByteArray_0(_this__u8e3s4, convertToInt(byteCount)));
  }
  // Inline function 'kotlin.error' call
  var message = 'Unreacheable';
  throw IllegalStateException.o(toString(message));
}
function commonToUtf8String(_this__u8e3s4, beginIndex, endIndex) {
  beginIndex = beginIndex === VOID ? 0 : beginIndex;
  endIndex = endIndex === VOID ? _this__u8e3s4.length : endIndex;
  if (beginIndex < 0 || endIndex > _this__u8e3s4.length || beginIndex > endIndex) {
    throw IndexOutOfBoundsException.od('size=' + _this__u8e3s4.length + ' beginIndex=' + beginIndex + ' endIndex=' + endIndex);
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
        var tmp$ret$4;
        $l$block_0: {
          // Inline function 'kotlinx.io.internal.process2Utf8Bytes' call
          if (endIndex <= (tmp2 + 1 | 0)) {
            var c_1 = numberToChar(65533);
            var _unary__edvuaz_2 = length;
            length = _unary__edvuaz_2 + 1 | 0;
            chars[_unary__edvuaz_2] = c_1;
            tmp$ret$4 = 1;
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
            tmp$ret$4 = 1;
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
          tmp$ret$4 = 2;
        }
        index = tmp + tmp$ret$4 | 0;
      } else {
        // Inline function 'kotlinx.io.shr' call
        if (b0 >> 4 === -2) {
          var tmp_0 = index;
          var tmp2_0 = index;
          var tmp$ret$16;
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
                tmp$ret$16 = 1;
                break $l$block_4;
              } else {
                tmp$ret$16 = 2;
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
              tmp$ret$16 = 1;
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
              tmp$ret$16 = 2;
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
            tmp$ret$16 = 3;
          }
          index = tmp_0 + tmp$ret$16 | 0;
        } else {
          // Inline function 'kotlinx.io.shr' call
          if (b0 >> 3 === -2) {
            var tmp_2 = index;
            var tmp2_1 = index;
            var tmp$ret$36;
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
                  tmp$ret$36 = 1;
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
                    tmp$ret$36 = 2;
                    break $l$block_10;
                  } else {
                    tmp$ret$36 = 3;
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
                tmp$ret$36 = 1;
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
                tmp$ret$36 = 2;
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
                tmp$ret$36 = 3;
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
              tmp$ret$36 = 4;
            }
            index = tmp_2 + tmp$ret$36 | 0;
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
var BufferIterationContextImpl;
var UnsafeBufferOperations_instance;
function UnsafeBufferOperations_getInstance() {
  return UnsafeBufferOperations_instance;
}
var properties_initialized_UnsafeBufferOperations_kt_2xfgoc;
function _init_properties_UnsafeBufferOperations_kt__xw75gy() {
  if (!properties_initialized_UnsafeBufferOperations_kt_2xfgoc) {
    properties_initialized_UnsafeBufferOperations_kt_2xfgoc = true;
    SegmentReadContextImpl = new SegmentReadContextImpl$1();
    SegmentWriteContextImpl = new SegmentWriteContextImpl$1();
    BufferIterationContextImpl = new BufferIterationContextImpl$1();
  }
}
function init_kotlinx_io_IOException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.w2d_1);
}
function init_kotlinx_io_EOFException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.s2a_1);
}
var SegmentPool_instance;
function SegmentPool_getInstance() {
  return SegmentPool_instance;
}
//region block: post-declaration
initMetadataForInterface(Source, 'Source', VOID, VOID, [AutoCloseable]);
initMetadataForInterface(Sink, 'Sink', VOID, VOID, [AutoCloseable]);
protoOf(Buffer).h2c = write$default;
initMetadataForClass(Buffer, 'Buffer', Buffer, VOID, [Source, Sink]);
initMetadataForClass(PeekSource, 'PeekSource', VOID, VOID, [AutoCloseable]);
initMetadataForClass(RealSource, 'RealSource', VOID, VOID, [Source]);
initMetadataForCompanion(Companion);
initMetadataForClass(Segment, 'Segment');
initMetadataForClass(SegmentCopyTracker, 'SegmentCopyTracker');
initMetadataForObject(AlwaysSharedCopyTracker, 'AlwaysSharedCopyTracker');
initMetadataForObject(UnsafeBufferOperations, 'UnsafeBufferOperations');
initMetadataForClass(SegmentReadContextImpl$1);
initMetadataForClass(SegmentWriteContextImpl$1);
initMetadataForClass(BufferIterationContextImpl$1);
initMetadataForClass(IOException, 'IOException', IOException.x2d);
initMetadataForClass(EOFException, 'EOFException', EOFException.a2e);
initMetadataForObject(SegmentPool, 'SegmentPool');
//endregion
//region block: init
Companion_instance = new Companion();
UnsafeBufferOperations_instance = new UnsafeBufferOperations();
SegmentPool_instance = new SegmentPool();
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
