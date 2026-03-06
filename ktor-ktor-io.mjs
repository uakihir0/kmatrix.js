import {
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  Annotation1hwww4cseplu9 as Annotation,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  createThis2j2avj17cvnv2 as createThis,
  Companion_getInstance3n41f8hyfek1c as Companion_getInstance,
  Unit_getInstance3uavtu4x7ly6a as Unit_getInstance,
  _Result___init__impl__xyqfz83a5421h46yeyh as _Result___init__impl__xyqfz8,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  toString30pk9tzaqopn as toString,
  hashCodeq5arwsb9dgti as hashCode,
  equals2au1ep9vhcato as equals,
  createFailure8paxfkfa5dc7 as createFailure,
  Result3t1vadv16kmzk as Result,
  toString1h6jjoch8cjt8 as toString_0,
  newThrowablezl37abp36p5f as newThrowable,
  stackTraceToString2670q6lbhdojj as stackTraceToString,
  protoOf180f3jzyo7rfj as protoOf,
  fromInt2ii0rejb1w62w as fromInt,
  numberToLong2pakxeg38estk as numberToLong,
  add2suhfggl4zvkk as add,
  intercepted2ogpsikxxj4u0 as intercepted,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  isInterface3d6p8outrmvmk as isInterface,
  returnIfSuspended1blqheeew1z6h as returnIfSuspended,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  suspendOrReturn49pspzlx5djv as suspendOrReturn,
  convertToInty04h231mmjoh as convertToInt,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  captureStack1fzi4aczwc4hg as captureStack,
  get_ONEazvfdh9ju3d4 as get_ONE,
  replace3le3ie7l9k8aq as replace,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  toString1pkumu07cwy4m as toString_1,
  subtract2orl8z9upxd9l as subtract,
  StringBuildermazzzhj6kkai as StringBuilder,
  EmptyCoroutineContext_getInstance10e98b8bnsvr1 as EmptyCoroutineContext_getInstance,
  Continuation1aa2oekvx7jm7 as Continuation,
  initMetadataForFunctionReferencen3g5fpj34t8u as initMetadataForFunctionReference,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  KSuspendFunction01d1bcxhy9idvz as KSuspendFunction0,
  SuspendFunction032kxzcbrcbtj6 as SuspendFunction0,
  SuspendFunction118o2kzhbyvufs as SuspendFunction1,
  CancellationException3b36o9qz53rgr as CancellationException,
  THROW_IAE23kobfj9wdoxr as THROW_IAE,
  enumEntries20mr21zbe3az4 as enumEntries,
  Enum3alwj03lh1n41 as Enum,
  ArrayList3it5z8td81qkl as ArrayList,
  listOf1jh22dvmctj1r as listOf,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  encodeToByteArray22651fhg4p67t as encodeToByteArray,
  AutoCloseable1l5p57f9lp7kv as AutoCloseable,
  _Char___init__impl__6a9atx1csff5kwtduxl as _Char___init__impl__6a9atx,
  replaceqbix900hl8kl as replace_0,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  charSequenceSubSequence1iwpdba8s3jc7 as charSequenceSubSequence,
  isCharSequence1ju9jr1w86plq as isCharSequence,
  trim11nh7r46at6sx as trim,
  toByte4i43936u611k as toByte,
  decodeToString1x4faah2liw2p as decodeToString,
  setOf45ia9pnfhe90 as setOf,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  Char__toInt_impl_vasixd3jl92hthlhyn7 as Char__toInt_impl_vasixd,
} from './kotlin-kotlin-stdlib.mjs';
import {
  CancellableContinuationImpl1cx201opicavg as CancellableContinuationImpl,
  CoroutineScopefcb5f5dwqcas as CoroutineScope,
  launch1c91vkjzdi9sd as launch,
  startCoroutineCancellable18shtfwdieib as startCoroutineCancellable,
  get_job2zvlvce9o9a29 as get_job,
  Job13y4jkazwjho0 as Job,
  cancel1xim2hrvjmwpn as cancel,
  CopyableThrowable1mvc99jcyvivf as CopyableThrowable,
  Dispatchers_getInstancewbokwrm9sosb as Dispatchers_getInstance,
} from './kotlinx-coroutines-core.mjs';
import {
  Buffergs925ekssbch as Buffer,
  IOException1wyutdmfe71nu as IOException,
  indexOf29nspdgx2e3ap as indexOf,
  EOFExceptionh831u25jcq9n as EOFException,
  readByteString2hnsbql6t4ads as readByteString,
  readString3v6duspiz33tv as readString,
  readString2nvggcfaijfhd as readString_0,
  readByteArray1fhzfwi2j014k as readByteArray,
  writeString33ca4btrgctw7 as writeString,
  readByteArray1ri21h2rciakw as readByteArray_0,
} from './kotlinx-io-kotlinx-io-core.mjs';
import { atomic$ref$130aurmcwdfdf1 as atomic$ref$1 } from './kotlinx-atomicfu.mjs';
import { decodeToString2ede220pr5xir as decodeToString_0 } from './kotlinx-io-kotlinx-io-bytestring.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class InternalAPI {
  equals(other) {
    if (!(other instanceof InternalAPI))
      return false;
    other instanceof InternalAPI || THROW_CCE();
    return true;
  }
  hashCode() {
    return 0;
  }
  toString() {
    return '@io.ktor.utils.io.InternalAPI(' + ')';
  }
}
class KtorDsl {
  equals(other) {
    if (!(other instanceof KtorDsl))
      return false;
    other instanceof KtorDsl || THROW_CCE();
    return true;
  }
  hashCode() {
    return 0;
  }
  toString() {
    return '@io.ktor.utils.io.KtorDsl(' + ')';
  }
}
class ByteWriteChannel {}
function get_autoFlush() {
  return false;
}
class BufferedByteWriteChannel {}
class Companion {
  static new_io_ktor_utils_io_ByteChannel_Slot_Companion_g3wmxy_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance = $this;
    $this.CLOSED_1 = Closed.new_io_ktor_utils_io_ByteChannel_Slot_Closed_fdo8xx_k$(null);
    var tmp = $this;
    // Inline function 'kotlin.Companion.success' call
    Companion_getInstance();
    tmp.RESUME_1 = _Result___init__impl__xyqfz8(Unit_getInstance());
    return $this;
  }
  get_CLOSED_3p2npn_k$() {
    return this.CLOSED_1;
  }
  get_RESUME_dsp8bb_k$() {
    return this.RESUME_1;
  }
}
class Slot {}
class Empty {
  static new_io_ktor_utils_io_ByteChannel_Slot_Empty_6am6h3_k$($box) {
    var $this = createThis(this, $box);
    Empty_instance = $this;
    return $this;
  }
  toString() {
    return 'Empty';
  }
  hashCode() {
    return -231472095;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Empty))
      return false;
    return true;
  }
}
class Closed {
  static new_io_ktor_utils_io_ByteChannel_Slot_Closed_fdo8xx_k$(cause, $box) {
    var $this = createThis(this, $box);
    $this.cause_1 = cause;
    return $this;
  }
  get_cause_iplhs0_k$() {
    return this.cause_1;
  }
  component1_7eebsc_k$() {
    return this.cause_1;
  }
  copy_ci9aw1_k$(cause) {
    return Closed.new_io_ktor_utils_io_ByteChannel_Slot_Closed_fdo8xx_k$(cause);
  }
  copy$default_lgf8ht_k$(cause, $super) {
    cause = cause === VOID ? this.cause_1 : cause;
    return $super === VOID ? this.copy_ci9aw1_k$(cause) : $super.copy_ci9aw1_k$.call(this, cause);
  }
  toString() {
    return 'Closed(cause=' + toString(this.cause_1) + ')';
  }
  hashCode() {
    return this.cause_1 == null ? 0 : hashCode(this.cause_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Closed))
      return false;
    if (!equals(this.cause_1, other.cause_1))
      return false;
    return true;
  }
}
class Task {}
function resume() {
  return this.get_continuation_7yron4_k$().resumeWith_dtxwbr_k$(Companion_getInstance_0().RESUME_1);
}
function resume_0(throwable) {
  var tmp = this.get_continuation_7yron4_k$();
  var tmp_0;
  if (throwable == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.Companion.failure' call
    Companion_getInstance();
    var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(throwable));
    tmp_0 = new Result(tmp$ret$2);
  }
  var tmp1_elvis_lhs = tmp_0;
  return tmp.resumeWith_dtxwbr_k$(tmp1_elvis_lhs == null ? Companion_getInstance_0().RESUME_1 : tmp1_elvis_lhs.value_1);
}
function resume$default(throwable, $super) {
  throwable = throwable === VOID ? null : throwable;
  var tmp;
  if ($super === VOID) {
    this.resume_xzb95z_k$(throwable);
    tmp = Unit_getInstance();
  } else {
    resume_0(throwable);
    tmp = Unit_getInstance();
  }
  return tmp;
}
class Read {
  static new_io_ktor_utils_io_ByteChannel_Slot_Read_geb8qp_k$(continuation, $box) {
    var $this = createThis(this, $box);
    $this.continuation_1 = continuation;
    $this.created_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = $this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('ReadTask 0x' + toString_0(hashCode($this.continuation_1), 16));
      stackTraceToString(this_0);
      tmp.created_1 = this_0;
    }
    return $this;
  }
  get_continuation_7yron4_k$() {
    return this.continuation_1;
  }
  set_created_hmp26d_k$(_set____db54di) {
    this.created_1 = _set____db54di;
  }
  get_created_i9xfr3_k$() {
    return this.created_1;
  }
  taskName_6sat74_k$() {
    return 'read';
  }
}
class Write {
  static new_io_ktor_utils_io_ByteChannel_Slot_Write_m0gf0t_k$(continuation, $box) {
    var $this = createThis(this, $box);
    $this.continuation_1 = continuation;
    $this.created_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = $this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('WriteTask 0x' + toString_0(hashCode($this.continuation_1), 16));
      stackTraceToString(this_0);
      tmp.created_1 = this_0;
    }
    return $this;
  }
  get_continuation_7yron4_k$() {
    return this.continuation_1;
  }
  set_created_hmp26d_k$(_set____db54di) {
    this.created_1 = _set____db54di;
  }
  get_created_i9xfr3_k$() {
    return this.created_1;
  }
  taskName_6sat74_k$() {
    return 'write';
  }
}
class ByteReadChannel {}
function awaitContent$default(min, $completion, $super) {
  min = min === VOID ? 1 : min;
  return $super === VOID ? this.awaitContent_gb4pzk_k$(min, $completion) : $super.awaitContent_gb4pzk_k$.call(this, min, $completion);
}
class ByteChannel {
  static new_io_ktor_utils_io_ByteChannel_95dkw9_k$(autoFlush, $box) {
    autoFlush = autoFlush === VOID ? false : autoFlush;
    var $this = createThis(this, $box);
    $this.autoFlush_1 = autoFlush;
    $this.flushBuffer_1 = Buffer.new_kotlinx_io_Buffer_ca7i83_k$();
    $this.flushBufferSize_1 = 0;
    $this.flushBufferMutex_1 = new Object();
    $this.suspensionSlot_1 = atomic$ref$1(Empty_getInstance());
    $this._readBuffer_1 = Buffer.new_kotlinx_io_Buffer_ca7i83_k$();
    $this._writeBuffer_1 = Buffer.new_kotlinx_io_Buffer_ca7i83_k$();
    $this._closedCause_1 = atomic$ref$1(null);
    return $this;
  }
  get_autoFlush_zfdl3o_k$() {
    return this.autoFlush_1;
  }
  get_readBuffer_yjmj9b_k$() {
    var tmp0_safe_receiver = this._closedCause_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.throwOrNull_cyi9f_k$(ClosedReadChannelException$_init_$ref_ix0089());
    }
    if (this._readBuffer_1.exhausted_p1jt55_k$()) {
      moveFlushToReadBuffer(this);
    }
    return this._readBuffer_1;
  }
  get_writeBuffer_t7kuc6_k$() {
    if (this.get_isClosedForWrite_seyg5n_k$()) {
      var tmp0_safe_receiver = this._closedCause_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp = tmp0_safe_receiver.throwOrNull_cyi9f_k$(ClosedWriteChannelException$_init_$ref_ef15ty());
      }
      if (tmp == null)
        throw ClosedWriteChannelException.new_io_ktor_utils_io_ClosedWriteChannelException_o2rmk5_k$();
    }
    return this._writeBuffer_1;
  }
  get_closedCause_o1qcj8_k$() {
    var tmp0_safe_receiver = this._closedCause_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wrapCause$default_rqpy7l_k$();
  }
  get_isClosedForWrite_seyg5n_k$() {
    return !(this._closedCause_1.get_kotlinx$atomicfu$value_vi2am5_k$() == null);
  }
  get_isClosedForRead_ajcc1s_k$() {
    return !(this.get_closedCause_o1qcj8_k$() == null) || (this.get_isClosedForWrite_seyg5n_k$() && this.flushBufferSize_1 === 0 && this._readBuffer_1.exhausted_p1jt55_k$());
  }
  awaitContent_gb4pzk_k$(min, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_awaitContent__vf28kb.bind(VOID, this, min), $completion);
  }
  flush_j5grz3_k$($completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_flush__owbk1c.bind(VOID, this), $completion);
  }
  flushWriteBuffer_z39w8l_k$() {
    if (this._writeBuffer_1.exhausted_p1jt55_k$())
      return Unit_getInstance();
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    this.flushBufferMutex_1;
    var count = convertToInt(this._writeBuffer_1.get_size_woubt6_k$());
    this.flushBuffer_1.transferFrom_v29myr_k$(this._writeBuffer_1);
    this.flushBufferSize_1 = this.flushBufferSize_1 + count | 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = this.suspensionSlot_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var tmp;
    if (current instanceof Read) {
      tmp = this.suspensionSlot_1.atomicfu$compareAndSet(current, Empty_getInstance());
    } else {
      tmp = false;
    }
    if (tmp) {
      current.resume_2o15jx_k$();
    }
  }
  close_yn9xrc_k$() {
    this.flushWriteBuffer_z39w8l_k$();
    if (!this._closedCause_1.atomicfu$compareAndSet(null, get_CLOSED()))
      return Unit_getInstance();
    closeSlot(this, null);
  }
  flushAndClose_e4ofuo_k$($completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_flushAndClose__wsi7db.bind(VOID, this), $completion);
  }
  cancel_9i2dv0_k$(cause) {
    if (!(this._closedCause_1.get_kotlinx$atomicfu$value_vi2am5_k$() == null))
      return Unit_getInstance();
    var closedToken = CloseToken.new_io_ktor_utils_io_CloseToken_qqi3q2_k$(cause);
    this._closedCause_1.atomicfu$compareAndSet(null, closedToken);
    var wrappedCause = closedToken.wrapCause$default_rqpy7l_k$();
    closeSlot(this, wrappedCause);
  }
  toString() {
    return 'ByteChannel[' + hashCode(this) + ']';
  }
}
class ConcurrentIOException extends IllegalStateException {
  static new_io_ktor_utils_io_ConcurrentIOException_y0oz14_k$(taskName, cause, $box) {
    cause = cause === VOID ? null : cause;
    var $this = this.new_kotlin_IllegalStateException_i7u1tp_k$('Concurrent ' + taskName + ' attempts', cause, $box);
    captureStack($this, $this.$throwableCtor_4);
    return $this;
  }
}
class ByteChannelScanner {
  static new_io_ktor_utils_io_ByteChannelScanner_3vnos1_k$(channel, matchString, writeChannel, limit, $box) {
    limit = limit === VOID ? 9223372036854775807n : limit;
    var $this = createThis(this, $box);
    $this.channel_1 = channel;
    $this.matchString_1 = matchString;
    $this.writeChannel_1 = writeChannel;
    $this.limit_1 = limit;
    // Inline function 'kotlin.require' call
    if (!($this.matchString_1.get_size_woubt6_k$() > 0)) {
      var message = 'Empty match string not permitted for scanning';
      throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString_1(message));
    }
    $this.input_1 = $this.channel_1.get_readBuffer_yjmj9b_k$();
    $this.partialMatchTable_1 = buildPartialMatchTable($this);
    $this.partialMatchBuffer_1 = Buffer.new_kotlinx_io_Buffer_ca7i83_k$();
    $this.bytesRead_1 = 0n;
    $this.matchIndex_1 = 0;
    return $this;
  }
  findNext_elfkay_k$(ignoreMissing, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_findNext__stdkn8.bind(VOID, this, ignoreMissing), $completion);
  }
  findNext$default_gg62yz_k$(ignoreMissing, $completion, $super) {
    ignoreMissing = ignoreMissing === VOID ? false : ignoreMissing;
    return $super === VOID ? this.findNext_elfkay_k$(ignoreMissing, $completion) : $super.findNext_elfkay_k$.call(this, ignoreMissing, $completion);
  }
}
class ByteReadChannel$Companion$Empty$1 {
  static new_io_ktor_utils_io_ByteReadChannel_Companion__no_name_provided__xj03uj_k$($box) {
    var $this = createThis(this, $box);
    $this.closedCause_1 = null;
    $this.readBuffer_1 = Buffer.new_kotlinx_io_Buffer_ca7i83_k$();
    return $this;
  }
  get_closedCause_o1qcj8_k$() {
    return this.closedCause_1;
  }
  get_isClosedForRead_ajcc1s_k$() {
    return true;
  }
  get_readBuffer_yjmj9b_k$() {
    return this.readBuffer_1;
  }
  awaitContent_gb4pzk_k$(min, $completion) {
    return false;
  }
  cancel_9i2dv0_k$(cause) {
  }
}
class Companion_0 {
  static new_io_ktor_utils_io_ByteReadChannel_Companion_s57v2t_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance_0 = $this;
    var tmp = $this;
    tmp.Empty_1 = ByteReadChannel$Companion$Empty$1.new_io_ktor_utils_io_ByteReadChannel_Companion__no_name_provided__xj03uj_k$();
    return $this;
  }
  get_Empty_i9b85g_k$() {
    return this.Empty_1;
  }
}
class ChannelJob {}
class WriterJob {
  static new_io_ktor_utils_io_WriterJob_du9gmh_k$(channel, job, $box) {
    var $this = createThis(this, $box);
    $this.channel_1 = channel;
    $this.job_1 = job;
    return $this;
  }
  get_channel_dhi7tm_k$() {
    return this.channel_1;
  }
  get_job_18j2r0_k$() {
    return this.job_1;
  }
}
class WriterScope {
  static new_io_ktor_utils_io_WriterScope_nxsjj3_k$(channel, coroutineContext, $box) {
    var $this = createThis(this, $box);
    $this.channel_1 = channel;
    $this.coroutineContext_1 = coroutineContext;
    return $this;
  }
  get_channel_dhi7tm_k$() {
    return this.channel_1;
  }
  get_coroutineContext_115oqo_k$() {
    return this.coroutineContext_1;
  }
}
class NO_CALLBACK$1 {
  static new_io_ktor_utils_io__no_name_provided__3dveuk_k$($box) {
    var $this = createThis(this, $box);
    $this.context_1 = EmptyCoroutineContext_getInstance();
    return $this;
  }
  get_context_h02k06_k$() {
    return this.context_1;
  }
  resumeWith_b9cu3x_k$(result) {
    return Unit_getInstance();
  }
  resumeWith_dtxwbr_k$(result) {
    return this.resumeWith_b9cu3x_k$(result);
  }
}
class ByteWriteChannel$flushAndClose$ref {
  static new_io_ktor_utils_io_ByteWriteChannel$flushAndClose$ref_xvudqg_k$(p0, $box) {
    var $this = createThis(this, $box);
    $this.f$0__1 = p0;
    return $this;
  }
  invoke_vgi6qb_k$($completion) {
    return this.f$0__1.flushAndClose_e4ofuo_k$($completion);
  }
  get_name_woqyms_k$() {
    return 'flushAndClose';
  }
}
class writer$slambda {
  static new_io_ktor_utils_io_writer$slambda_h9f5qn_k$($block, $channel, $box) {
    var $this = createThis(this, $box);
    $this.$block_1 = $block;
    $this.$channel_1 = $channel;
    return $this;
  }
  invoke_ri3sjx_k$($this$launch, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_invoke__zhh2q8.bind(VOID, this, $this$launch), $completion);
  }
  invoke_ja922n_k$(p1, $completion) {
    return this.invoke_ri3sjx_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class CloseToken {
  static new_io_ktor_utils_io_CloseToken_qqi3q2_k$(origin, $box) {
    var $this = createThis(this, $box);
    $this.origin_1 = origin;
    return $this;
  }
  wrapCause_rnti1o_k$(wrap) {
    var tmp0_subject = this.origin_1;
    var tmp;
    if (tmp0_subject == null) {
      tmp = null;
    } else {
      if (isInterface(tmp0_subject, CopyableThrowable)) {
        tmp = this.origin_1.createCopy_mmw9ld_k$();
      } else {
        if (tmp0_subject instanceof CancellationException) {
          tmp = CancellationException.new_kotlin_coroutines_cancellation_CancellationException_snzioo_k$(this.origin_1.message, this.origin_1);
        } else {
          tmp = wrap(this.origin_1);
        }
      }
    }
    return tmp;
  }
  wrapCause$default_rqpy7l_k$(wrap, $super) {
    var tmp;
    if (wrap === VOID) {
      tmp = ClosedByteChannelException$_init_$ref_yjp351();
    } else {
      tmp = wrap;
    }
    wrap = tmp;
    return $super === VOID ? this.wrapCause_rnti1o_k$(wrap) : $super.wrapCause_rnti1o_k$.call(this, wrap);
  }
  throwOrNull_cyi9f_k$(wrap) {
    var tmp0_safe_receiver = this.wrapCause_rnti1o_k$(wrap);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return tmp;
  }
}
class CountedByteReadChannel {
  static new_io_ktor_utils_io_CountedByteReadChannel_chc685_k$(delegate, $box) {
    var $this = createThis(this, $box);
    $this.delegate_1 = delegate;
    $this.buffer_1 = Buffer.new_kotlinx_io_Buffer_ca7i83_k$();
    $this.initial_1 = 0n;
    $this.consumed_1 = 0n;
    return $this;
  }
  get_delegate_i94tki_k$() {
    return this.delegate_1;
  }
  get_totalBytesRead_dai8jq_k$() {
    updateConsumed(this);
    return this.consumed_1;
  }
  get_closedCause_o1qcj8_k$() {
    return this.delegate_1.get_closedCause_o1qcj8_k$();
  }
  get_isClosedForRead_ajcc1s_k$() {
    return this.buffer_1.exhausted_p1jt55_k$() && this.delegate_1.get_isClosedForRead_ajcc1s_k$();
  }
  get_readBuffer_yjmj9b_k$() {
    transferFromDelegate(this);
    return this.buffer_1;
  }
  awaitContent_gb4pzk_k$(min, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_awaitContent__vf28kb_0.bind(VOID, this, min), $completion);
  }
  cancel_9i2dv0_k$(cause) {
    this.delegate_1.cancel_9i2dv0_k$(cause);
    this.buffer_1.close_yn9xrc_k$();
  }
}
class ClosedByteChannelException extends IOException {
  static new_io_ktor_utils_io_ClosedByteChannelException_6q08ba_k$(cause, $box) {
    cause = cause === VOID ? null : cause;
    var $this = this.new_kotlinx_io_IOException_q2he6h_k$(cause == null ? null : cause.message, cause, $box);
    captureStack($this, $this.$throwableCtor_3);
    return $this;
  }
}
class ClosedReadChannelException extends ClosedByteChannelException {
  static new_io_ktor_utils_io_ClosedReadChannelException_478xi5_k$(cause, $box) {
    cause = cause === VOID ? null : cause;
    var $this = this.new_io_ktor_utils_io_ClosedByteChannelException_6q08ba_k$(cause, $box);
    captureStack($this, $this.$throwableCtor_4);
    return $this;
  }
}
class ClosedWriteChannelException extends ClosedByteChannelException {
  static new_io_ktor_utils_io_ClosedWriteChannelException_o2rmk5_k$(cause, $box) {
    cause = cause === VOID ? null : cause;
    var $this = this.new_io_ktor_utils_io_ClosedByteChannelException_6q08ba_k$(cause, $box);
    captureStack($this, $this.$throwableCtor_4);
    return $this;
  }
}
class JvmSerializable {}
class JvmSerializer {}
class DummyJvmSimpleSerializerReplacement {
  static new_io_ktor_utils_io_DummyJvmSimpleSerializerReplacement_667n1g_k$($box) {
    var $this = createThis(this, $box);
    DummyJvmSimpleSerializerReplacement_instance = $this;
    return $this;
  }
}
class LineEnding extends Enum {
  static new_io_ktor_utils_io_LineEnding_hr9d6k_k$(name, ordinal, $box) {
    return this.new_kotlin_Enum_a1ijns_k$(name, ordinal, $box);
  }
}
class Companion_1 {
  static new_io_ktor_utils_io_LineEndingMode_Companion_bmiibz_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance_1 = $this;
    $this.CR_1 = _LineEndingMode___init__impl__jo5bul(1);
    $this.LF_1 = _LineEndingMode___init__impl__jo5bul(2);
    $this.CRLF_1 = _LineEndingMode___init__impl__jo5bul(4);
    $this.Any_1 = _LineEndingMode___init__impl__jo5bul(7);
    $this.values_1 = listOf([new LineEndingMode($this.CR_1), new LineEndingMode($this.LF_1), new LineEndingMode($this.CRLF_1)]);
    return $this;
  }
  get_CR_oadccb_k$() {
    return this.CR_1;
  }
  get_LF_b8k5ow_k$() {
    return this.LF_1;
  }
  get_CRLF_gdqv27_k$() {
    return this.CRLF_1;
  }
  get_Any_jwln0w_k$() {
    return this.Any_1;
  }
}
class LineEndingMode {
  constructor(mode) {
    Companion_getInstance_2();
    this.mode_1 = mode;
  }
  toString() {
    return LineEndingMode__toString_impl_j4h76r(this.mode_1);
  }
  hashCode() {
    return LineEndingMode__hashCode_impl_2mopm4(this.mode_1);
  }
  equals(other) {
    return LineEndingMode__equals_impl_qyr4nk(this.mode_1, other);
  }
}
class SourceByteReadChannel {
  static new_io_ktor_utils_io_SourceByteReadChannel_dt8lnk_k$(source, $box) {
    var $this = createThis(this, $box);
    $this.source_1 = source;
    $this.closed_1 = null;
    return $this;
  }
  get_closedCause_o1qcj8_k$() {
    var tmp0_safe_receiver = this.closed_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wrapCause$default_rqpy7l_k$();
  }
  get_isClosedForRead_ajcc1s_k$() {
    return this.source_1.exhausted_p1jt55_k$();
  }
  get_readBuffer_yjmj9b_k$() {
    var tmp0_safe_receiver = this.get_closedCause_o1qcj8_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.source_1.get_buffer_bmaafd_k$();
  }
  awaitContent_gb4pzk_k$(min, $completion) {
    var tmp0_safe_receiver = this.get_closedCause_o1qcj8_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.source_1.request_mpoy7z_k$(fromInt(min));
  }
  cancel_9i2dv0_k$(cause) {
    if (!(this.closed_1 == null))
      return Unit_getInstance();
    this.source_1.close_yn9xrc_k$();
    var tmp = this;
    var tmp1_elvis_lhs = cause == null ? null : cause.message;
    tmp.closed_1 = CloseToken.new_io_ktor_utils_io_CloseToken_qqi3q2_k$(IOException.new_kotlinx_io_IOException_q2he6h_k$(tmp1_elvis_lhs == null ? 'Channel was cancelled' : tmp1_elvis_lhs, cause));
  }
}
class MalformedInputException extends IOException {
  static new_io_ktor_utils_io_charsets_MalformedInputException_bwajs7_k$(message, $box) {
    var $this = this.new_kotlinx_io_IOException_uuba9f_k$(message, $box);
    captureStack($this, $this.$throwableCtor_3);
    return $this;
  }
}
class TooLongLineException extends MalformedInputException {
  static new_io_ktor_utils_io_charsets_TooLongLineException_gppm0c_k$(message, $box) {
    var $this = this.new_io_ktor_utils_io_charsets_MalformedInputException_bwajs7_k$(message, $box);
    captureStack($this, $this.$throwableCtor_4);
    return $this;
  }
}
class ObjectPool {}
function close() {
  this.dispose_3nnxhr_k$();
}
class DefaultPool {
  static new_io_ktor_utils_io_pool_DefaultPool_w7e179_k$(capacity, $box) {
    var $this = createThis(this, $box);
    $this.capacity_1 = capacity;
    var tmp = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = $this.capacity_1;
    tmp.instances_1 = Array(size);
    $this.size_1 = 0;
    return $this;
  }
  get_capacity_wxbgcd_k$() {
    return this.capacity_1;
  }
  disposeInstance_6ek0a2_k$(instance) {
  }
  clearInstance_nfz4jw_k$(instance) {
    return instance;
  }
  validateInstance_6mwbhp_k$(instance) {
  }
  borrow_mvkpor_k$() {
    if (this.size_1 === 0)
      return this.produceInstance_xswihh_k$();
    this.size_1 = this.size_1 - 1 | 0;
    var idx = this.size_1;
    var tmp = this.instances_1[idx];
    var instance = !(tmp == null) ? tmp : THROW_CCE();
    this.instances_1[idx] = null;
    return this.clearInstance_nfz4jw_k$(instance);
  }
  recycle_d2xv5h_k$(instance) {
    this.validateInstance_6mwbhp_k$(instance);
    if (this.size_1 === this.capacity_1) {
      this.disposeInstance_6ek0a2_k$(instance);
    } else {
      var _unary__edvuaz = this.size_1;
      this.size_1 = _unary__edvuaz + 1 | 0;
      this.instances_1[_unary__edvuaz] = instance;
    }
  }
  dispose_3nnxhr_k$() {
    var inductionVariable = 0;
    var last = this.size_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.instances_1[i];
        var instance = !(tmp == null) ? tmp : THROW_CCE();
        this.instances_1[i] = null;
        this.disposeInstance_6ek0a2_k$(instance);
      }
       while (inductionVariable < last);
    this.size_1 = 0;
  }
}
class ByteArrayPool$1 extends DefaultPool {
  static new_io_ktor_utils_io_pool__no_name_provided__fsr6nz_k$($box) {
    return this.new_io_ktor_utils_io_pool_DefaultPool_w7e179_k$(128, $box);
  }
  produceInstance_xswihh_k$() {
    return new Int8Array(4096);
  }
}
class NoPoolImpl {
  static new_io_ktor_utils_io_pool_NoPoolImpl_id47dp_k$($box) {
    return createThis(this, $box);
  }
  get_capacity_wxbgcd_k$() {
    return 0;
  }
  recycle_d2xv5h_k$(instance) {
    return Unit_getInstance();
  }
  dispose_3nnxhr_k$() {
    return Unit_getInstance();
  }
}
class Companion_2 {
  static new_io_ktor_utils_io_charsets_Charset_Companion_kfk10r_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance_2 = $this;
    return $this;
  }
  forName_etcah2_k$(name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().UTF_8__1;
    }
    var tmp;
    var tmp_0;
    switch (name) {
      case 'ISO-8859-1':
      case 'iso-8859-1':
        tmp_0 = true;
        break;
      default:
        // Inline function 'kotlin.let' call

        var it = replace_0(name, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
        var tmp_1;
        if (it === 'iso-8859-1') {
          tmp_1 = true;
        } else {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_1 = it.toLowerCase() === 'iso-8859-1';
        }

        tmp_0 = tmp_1;
        break;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = name === 'latin1' || name === 'Latin1';
    }
    if (tmp) {
      return Charsets_getInstance().ISO_8859_1__1;
    }
    throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$('Charset ' + name + ' is not supported');
  }
  isSupported_c9nas6_k$(charset) {
    var tmp;
    switch (charset) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        tmp = true;
        break;
      default:
        var tmp_0;
        var tmp_1;
        switch (charset) {
          case 'ISO-8859-1':
          case 'iso-8859-1':
            tmp_1 = true;
            break;
          default:
            // Inline function 'kotlin.let' call

            var it = replace_0(charset, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
            var tmp_2;
            if (it === 'iso-8859-1') {
              tmp_2 = true;
            } else {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp_2 = it.toLowerCase() === 'iso-8859-1';
            }

            tmp_1 = tmp_2;
            break;
        }

        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = charset === 'latin1';
        }

        if (tmp_0) {
          tmp = true;
        } else {
          tmp = false;
        }

        break;
    }
    return tmp;
  }
}
class Charset {
  static new_io_ktor_utils_io_charsets_Charset_jbp9ny_k$(_name, $box) {
    Companion_getInstance_3();
    var $this = createThis(this, $box);
    $this._name_1 = _name;
    return $this;
  }
  get__name_srescf_k$() {
    return this._name_1;
  }
  equals(other) {
    if (this === other)
      return true;
    if (other == null || !(this.constructor == other.constructor))
      return false;
    if (!(other instanceof Charset))
      THROW_CCE();
    return this._name_1 === other._name_1;
  }
  hashCode() {
    return getStringHashCode(this._name_1);
  }
  toString() {
    return this._name_1;
  }
}
class Charsets {
  static new_io_ktor_utils_io_charsets_Charsets_4c36q4_k$($box) {
    var $this = createThis(this, $box);
    Charsets_instance = $this;
    $this.UTF_8__1 = CharsetImpl.new_io_ktor_utils_io_charsets_CharsetImpl_7x1cg6_k$('UTF-8');
    $this.ISO_8859_1__1 = CharsetImpl.new_io_ktor_utils_io_charsets_CharsetImpl_7x1cg6_k$('ISO-8859-1');
    return $this;
  }
  get_UTF_8_ihn39z_k$() {
    return this.UTF_8__1;
  }
  get_ISO_8859_1_y3qebr_k$() {
    return this.ISO_8859_1__1;
  }
}
class CharsetDecoder {
  static new_io_ktor_utils_io_charsets_CharsetDecoder_q0qq1p_k$(_charset, $box) {
    var $this = createThis(this, $box);
    $this._charset_1 = _charset;
    return $this;
  }
  get__charset_c5gayc_k$() {
    return this._charset_1;
  }
}
class CharsetEncoder {
  static new_io_ktor_utils_io_charsets_CharsetEncoder_cznjql_k$(_charset, $box) {
    var $this = createThis(this, $box);
    $this._charset_1 = _charset;
    return $this;
  }
  get__charset_c5gayc_k$() {
    return this._charset_1;
  }
}
class CharsetImpl extends Charset {
  static new_io_ktor_utils_io_charsets_CharsetImpl_7x1cg6_k$(name, $box) {
    return this.new_io_ktor_utils_io_charsets_Charset_jbp9ny_k$(name, $box);
  }
  newEncoder_gqwcdg_k$() {
    return CharsetEncoderImpl.new_io_ktor_utils_io_charsets_CharsetEncoderImpl_7zhzmt_k$(this);
  }
  newDecoder_zcettw_k$() {
    return CharsetDecoderImpl.new_io_ktor_utils_io_charsets_CharsetDecoderImpl_1ucbal_k$(this);
  }
}
class CharsetEncoderImpl extends CharsetEncoder {
  static new_io_ktor_utils_io_charsets_CharsetEncoderImpl_7zhzmt_k$(charset, $box) {
    var $this = this.new_io_ktor_utils_io_charsets_CharsetEncoder_cznjql_k$(charset, $box);
    $this.charset_1 = charset;
    return $this;
  }
  copy_2crzso_k$(charset) {
    return CharsetEncoderImpl.new_io_ktor_utils_io_charsets_CharsetEncoderImpl_7zhzmt_k$(charset);
  }
  copy$default_73mtqm_k$(charset, $super) {
    charset = charset === VOID ? this.charset_1 : charset;
    return $super === VOID ? this.copy_2crzso_k$(charset) : $super.copy_2crzso_k$.call(this, charset);
  }
  toString() {
    return 'CharsetEncoderImpl(charset=' + this.charset_1.toString() + ')';
  }
  hashCode() {
    return this.charset_1.hashCode();
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    if (!this.charset_1.equals(other.charset_1))
      return false;
    return true;
  }
}
class CharsetDecoderImpl extends CharsetDecoder {
  static new_io_ktor_utils_io_charsets_CharsetDecoderImpl_1ucbal_k$(charset, $box) {
    var $this = this.new_io_ktor_utils_io_charsets_CharsetDecoder_q0qq1p_k$(charset, $box);
    $this.charset_1 = charset;
    return $this;
  }
  copy_2crzso_k$(charset) {
    return CharsetDecoderImpl.new_io_ktor_utils_io_charsets_CharsetDecoderImpl_1ucbal_k$(charset);
  }
  copy$default_ng4zhe_k$(charset, $super) {
    charset = charset === VOID ? this.charset_1 : charset;
    return $super === VOID ? this.copy_2crzso_k$(charset) : $super.copy_2crzso_k$.call(this, charset);
  }
  toString() {
    return 'CharsetDecoderImpl(charset=' + this.charset_1.toString() + ')';
  }
  hashCode() {
    return this.charset_1.hashCode();
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    if (!this.charset_1.equals(other.charset_1))
      return false;
    return true;
  }
}
class Decoder {}
class toKtor$1 {
  static new_io_ktor_utils_io_charsets__no_name_provided__l13rfd_k$($this_toKtor, $box) {
    var $this = createThis(this, $box);
    $this.$this_toKtor_1 = $this_toKtor;
    return $this;
  }
  decode_m3924y_k$() {
    return this.$this_toKtor_1.decode();
  }
  decode_hpap4q_k$(buffer) {
    return this.$this_toKtor_1.decode(buffer);
  }
  decode_mvpnei_k$(buffer, options) {
    return this.$this_toKtor_1.decode(buffer, options);
  }
}
class TextDecoderFallback {
  static new_io_ktor_utils_io_charsets_TextDecoderFallback_grsb47_k$(encoding, fatal, $box) {
    var $this = createThis(this, $box);
    $this.fatal_1 = fatal;
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var requestedEncoding = toString_1(trim(isCharSequence(encoding) ? encoding : THROW_CCE())).toLowerCase();
    // Inline function 'kotlin.check' call
    if (!get_ENCODING_ALIASES().contains_aljjnj_k$(requestedEncoding)) {
      var message = encoding + ' is not supported.';
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString_1(message));
    }
    return $this;
  }
  get_fatal_ir8ue3_k$() {
    return this.fatal_1;
  }
  decode_m3924y_k$() {
    return '';
  }
  decode_hpap4q_k$(buffer) {
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = Buffer.new_kotlinx_io_Buffer_ca7i83_k$();
    var bytes = buffer instanceof Int8Array ? buffer : THROW_CCE();
    var inductionVariable = 0;
    var last = bytes.length;
    if (inductionVariable < last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var byte = bytes[index];
        var point = toCodePoint(byte);
        if (point < 0) {
          // Inline function 'kotlin.check' call
          if (!!this.fatal_1) {
            var message = 'Invalid character: ' + point;
            throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString_1(message));
          }
          writeFully_0(builder, get_REPLACEMENT());
          continue $l$loop;
        }
        if (point > 255) {
          builder.writeByte_9ih3z3_k$(toByte(point >> 8));
        }
        builder.writeByte_9ih3z3_k$(toByte(point & 255));
      }
       while (inductionVariable < last);
    return decodeToString(readByteArray_0(builder));
  }
  decode_mvpnei_k$(buffer, options) {
    return this.decode_hpap4q_k$(buffer);
  }
}
class Closeable {}
class ReentrantLock {
  static new_io_ktor_utils_io_locks_ReentrantLock_yswlqs_k$($box) {
    return createThis(this, $box);
  }
  lock_fp5s9n_k$() {
  }
  tryLock_hapj0a_k$() {
    return true;
  }
  unlock_85w96c_k$() {
  }
}
//endregion
var Companion_instance;
function Companion_getInstance_0() {
  if (Companion_instance === VOID)
    Companion.new_io_ktor_utils_io_ByteChannel_Slot_Companion_g3wmxy_k$();
  return Companion_instance;
}
var Empty_instance;
function Empty_getInstance() {
  if (Empty_instance === VOID)
    Empty.new_io_ktor_utils_io_ByteChannel_Slot_Empty_6am6h3_k$();
  return Empty_instance;
}
function _get_flushBuffer__b837ot($this) {
  return $this.flushBuffer_1;
}
function _set_flushBufferSize__cczs68($this, _set____db54di) {
  $this.flushBufferSize_1 = _set____db54di;
}
function _get_flushBufferSize__299kno($this) {
  return $this.flushBufferSize_1;
}
function _get_flushBufferMutex__1lwq4w($this) {
  return $this.flushBufferMutex_1;
}
function _get_suspensionSlot__z54oi8($this) {
  return $this.suspensionSlot_1;
}
function _get__readBuffer__8m0p3w($this) {
  return $this._readBuffer_1;
}
function _get__writeBuffer__9iscuj($this) {
  return $this._writeBuffer_1;
}
function _get__closedCause__8g8v4j($this) {
  return $this._closedCause_1;
}
function *_generator_awaitContent__vf28kb($this, min, $completion) {
  rethrowCloseCauseIfNeeded($this);
  if ($this._readBuffer_1.get_size_woubt6_k$() >= fromInt(min))
    return true;
  // Inline function 'io.ktor.utils.io.ByteChannel.sleepWhile' call
  $l$loop: while (add(numberToLong($this.flushBufferSize_1), $this._readBuffer_1.get_size_woubt6_k$()) < fromInt(min) && $this._closedCause_1.get_kotlinx$atomicfu$value_vi2am5_k$() == null) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine' call
    // Inline function 'kotlin.js.suspendCoroutineUninterceptedOrReturnJS' call
    var cancellable = CancellableContinuationImpl.new_kotlinx_coroutines_CancellableContinuationImpl_haohsk_k$(intercepted($completion), 1);
    cancellable.initCancellability_shqc60_k$();
    var tmp2 = Read.new_io_ktor_utils_io_ByteChannel_Slot_Read_geb8qp_k$(cancellable);
    $l$block_0: {
      // Inline function 'io.ktor.utils.io.ByteChannel.trySuspend' call
      var previous = $this.suspensionSlot_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (!(previous instanceof Closed)) {
        if (!$this.suspensionSlot_1.atomicfu$compareAndSet(previous, tmp2)) {
          tmp2.resume_2o15jx_k$();
          break $l$block_0;
        }
      }
      if (previous instanceof Read) {
        previous.resume_xzb95z_k$(ConcurrentIOException.new_io_ktor_utils_io_ConcurrentIOException_y0oz14_k$(tmp2.taskName_6sat74_k$(), previous.get_created_i9xfr3_k$()));
      } else {
        if (isInterface(previous, Task)) {
          previous.resume_2o15jx_k$();
        } else {
          if (previous instanceof Closed) {
            tmp2.resume_xzb95z_k$(previous.cause_1);
            break $l$block_0;
          } else {
            if (!equals(previous, Empty_getInstance())) {
              noWhenBranchMatchedException();
            }
          }
        }
      }
      if (!(add(numberToLong($this.flushBufferSize_1), $this._readBuffer_1.get_size_woubt6_k$()) < fromInt(min) && $this._closedCause_1.get_kotlinx$atomicfu$value_vi2am5_k$() == null)) {
        // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
        var current = $this.suspensionSlot_1.get_kotlinx$atomicfu$value_vi2am5_k$();
        var tmp;
        if (current instanceof Read) {
          tmp = $this.suspensionSlot_1.atomicfu$compareAndSet(current, Empty_getInstance());
        } else {
          tmp = false;
        }
        if (tmp) {
          current.resume_2o15jx_k$();
        }
      }
    }
    var tmp$ret$6 = cancellable.getResult_fck196_k$();
    var tmp_0 = returnIfSuspended(tmp$ret$6, $completion);
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      tmp_0 = yield tmp_0;
  }
  if ($this._readBuffer_1.get_size_woubt6_k$() < 1048576n) {
    moveFlushToReadBuffer($this);
  }
  return $this._readBuffer_1.get_size_woubt6_k$() >= fromInt(min);
}
function moveFlushToReadBuffer($this) {
  // Inline function 'io.ktor.utils.io.locks.synchronized' call
  $this.flushBufferMutex_1;
  $this.flushBuffer_1.transferTo_lu4ka2_k$($this._readBuffer_1);
  $this.flushBufferSize_1 = 0;
  // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
  var current = $this.suspensionSlot_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  var tmp;
  if (current instanceof Write) {
    tmp = $this.suspensionSlot_1.atomicfu$compareAndSet(current, Empty_getInstance());
  } else {
    tmp = false;
  }
  if (tmp) {
    current.resume_2o15jx_k$();
  }
}
function *_generator_flush__owbk1c($this, $completion) {
  rethrowCloseCauseIfNeeded($this);
  $this.flushWriteBuffer_z39w8l_k$();
  if ($this.flushBufferSize_1 < 1048576)
    return Unit_getInstance();
  // Inline function 'io.ktor.utils.io.ByteChannel.sleepWhile' call
  $l$loop: while ($this.flushBufferSize_1 >= 1048576 && $this._closedCause_1.get_kotlinx$atomicfu$value_vi2am5_k$() == null) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine' call
    // Inline function 'kotlin.js.suspendCoroutineUninterceptedOrReturnJS' call
    var cancellable = CancellableContinuationImpl.new_kotlinx_coroutines_CancellableContinuationImpl_haohsk_k$(intercepted($completion), 1);
    cancellable.initCancellability_shqc60_k$();
    var tmp2 = Write.new_io_ktor_utils_io_ByteChannel_Slot_Write_m0gf0t_k$(cancellable);
    $l$block_0: {
      // Inline function 'io.ktor.utils.io.ByteChannel.trySuspend' call
      var previous = $this.suspensionSlot_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (!(previous instanceof Closed)) {
        if (!$this.suspensionSlot_1.atomicfu$compareAndSet(previous, tmp2)) {
          tmp2.resume_2o15jx_k$();
          break $l$block_0;
        }
      }
      if (previous instanceof Write) {
        previous.resume_xzb95z_k$(ConcurrentIOException.new_io_ktor_utils_io_ConcurrentIOException_y0oz14_k$(tmp2.taskName_6sat74_k$(), previous.get_created_i9xfr3_k$()));
      } else {
        if (isInterface(previous, Task)) {
          previous.resume_2o15jx_k$();
        } else {
          if (previous instanceof Closed) {
            tmp2.resume_xzb95z_k$(previous.cause_1);
            break $l$block_0;
          } else {
            if (!equals(previous, Empty_getInstance())) {
              noWhenBranchMatchedException();
            }
          }
        }
      }
      if (!($this.flushBufferSize_1 >= 1048576 && $this._closedCause_1.get_kotlinx$atomicfu$value_vi2am5_k$() == null)) {
        // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
        var current = $this.suspensionSlot_1.get_kotlinx$atomicfu$value_vi2am5_k$();
        var tmp;
        if (current instanceof Write) {
          tmp = $this.suspensionSlot_1.atomicfu$compareAndSet(current, Empty_getInstance());
        } else {
          tmp = false;
        }
        if (tmp) {
          current.resume_2o15jx_k$();
        }
      }
    }
    var tmp$ret$6 = cancellable.getResult_fck196_k$();
    var tmp_0 = returnIfSuspended(tmp$ret$6, $completion);
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      tmp_0 = yield tmp_0;
  }
  return Unit_getInstance();
}
function *_generator_flushAndClose__wsi7db($this, $completion) {
  // Inline function 'kotlin.runCatching' call
  var tmp;
  try {
    Companion_getInstance();
    var tmp_0 = $this.flush_j5grz3_k$($completion);
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      tmp_0 = yield tmp_0;
    // Inline function 'kotlin.Companion.success' call
    tmp = _Result___init__impl__xyqfz8(Unit_getInstance());
  } catch ($p) {
    var tmp_1;
    if ($p instanceof Error) {
      var e = $p;
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      tmp_1 = _Result___init__impl__xyqfz8(createFailure(e));
    } else {
      throw $p;
    }
    tmp = tmp_1;
  }
  if (!$this._closedCause_1.atomicfu$compareAndSet(null, get_CLOSED()))
    return Unit_getInstance();
  closeSlot($this, null);
  return Unit_getInstance();
}
function closeSlot($this, cause) {
  var closeContinuation = !(cause == null) ? Closed.new_io_ktor_utils_io_ByteChannel_Slot_Closed_fdo8xx_k$(cause) : Companion_getInstance_0().CLOSED_1;
  var continuation = $this.suspensionSlot_1.atomicfu$getAndSet(closeContinuation);
  if (isInterface(continuation, Task)) {
    continuation.resume_xzb95z_k$(cause);
  }
}
function ClosedReadChannelException$_init_$ref_ix0089() {
  var l = (p0) => ClosedReadChannelException.new_io_ktor_utils_io_ClosedReadChannelException_478xi5_k$(p0);
  l.callableName = '<init>';
  return l;
}
function ClosedWriteChannelException$_init_$ref_ef15ty() {
  var l = (p0) => ClosedWriteChannelException.new_io_ktor_utils_io_ClosedWriteChannelException_o2rmk5_k$(p0);
  l.callableName = '<init>';
  return l;
}
function ByteReadChannel_0(content, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? content.length : length;
  // Inline function 'kotlin.also' call
  var this_0 = Buffer.new_kotlinx_io_Buffer_ca7i83_k$();
  this_0.write_ti570x_k$(content, offset, offset + length | 0);
  var source = this_0;
  return ByteReadChannel_1(source);
}
function ByteReadChannel_1(source) {
  return SourceByteReadChannel.new_io_ktor_utils_io_SourceByteReadChannel_dt8lnk_k$(source);
}
function _get_channel__c6e3yq($this) {
  return $this.channel_1;
}
function _get_matchString__icybdn($this) {
  return $this.matchString_1;
}
function _get_writeChannel__b585eh($this) {
  return $this.writeChannel_1;
}
function _get_limit__eq4zuy($this) {
  return $this.limit_1;
}
function _get_input__g2gq7t($this) {
  return $this.input_1;
}
function _get_partialMatchTable__pbrnl3($this) {
  return $this.partialMatchTable_1;
}
function _get_partialMatchBuffer__x8vmxz($this) {
  return $this.partialMatchBuffer_1;
}
function _set_bytesRead__s3qsos($this, _set____db54di) {
  $this.bytesRead_1 = _set____db54di;
}
function _get_bytesRead__173nps($this) {
  return $this.bytesRead_1;
}
function _set_matchIndex__68l1ka($this, _set____db54di) {
  $this.matchIndex_1 = _set____db54di;
}
function _get_matchIndex__8tnjky($this) {
  return $this.matchIndex_1;
}
function *_generator_findNext__stdkn8($this, ignoreMissing, $completion) {
  $this.bytesRead_1 = 0n;
  $l$loop: while (true) {
    var tmp;
    if (!$this.input_1.exhausted_p1jt55_k$()) {
      tmp = true;
    } else {
      var tmp_0 = $this.channel_1.awaitContent$default_j7khmh_k$(VOID, $completion);
      if (tmp_0 === get_COROUTINE_SUSPENDED())
        tmp_0 = yield tmp_0;
      tmp = tmp_0;
    }
    if (!tmp) {
      break $l$loop;
    }
    var tmp_1 = advanceToNextPotentialMatch($this, $completion);
    if (tmp_1 === get_COROUTINE_SUSPENDED())
      tmp_1 = yield tmp_1;
    var tmp_2 = checkFullMatch($this, $completion);
    if (tmp_2 === get_COROUTINE_SUSPENDED())
      tmp_2 = yield tmp_2;
    if (tmp_2) {
      return $this.bytesRead_1;
    }
  }
  if (!ignoreMissing) {
    throw IOException.new_kotlinx_io_IOException_uuba9f_k$('Expected "' + toSingleLineString($this, $this.matchString_1) + '" but encountered end of input');
  }
  $this.bytesRead_1 = add($this.bytesRead_1, $this.partialMatchBuffer_1.transferTo_lu4ka2_k$($this.writeChannel_1.get_writeBuffer_t7kuc6_k$()));
  var tmp_3 = $this.writeChannel_1.flush_j5grz3_k$($completion);
  if (tmp_3 === get_COROUTINE_SUSPENDED())
    tmp_3 = yield tmp_3;
  return $this.bytesRead_1;
}
function buildPartialMatchTable($this) {
  var table = new Int32Array($this.matchString_1.get_size_woubt6_k$());
  var j = 0;
  var inductionVariable = 1;
  var last = $this.matchString_1.get_size_woubt6_k$();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      while (j > 0 && !($this.matchString_1.get_c1px32_k$(i) === $this.matchString_1.get_c1px32_k$(j))) {
        j = table[j - 1 | 0];
      }
      if ($this.matchString_1.get_c1px32_k$(i) === $this.matchString_1.get_c1px32_k$(j)) {
        j = j + 1 | 0;
      }
      table[i] = j;
    }
     while (inductionVariable < last);
  return table;
}
function *_generator_advanceToNextPotentialMatch__2ypy7x($this, $completion) {
  $l$loop: while (true) {
    var tmp;
    if (!$this.input_1.exhausted_p1jt55_k$()) {
      tmp = true;
    } else {
      var tmp_0 = $this.channel_1.awaitContent$default_j7khmh_k$(VOID, $completion);
      if (tmp_0 === get_COROUTINE_SUSPENDED())
        tmp_0 = yield tmp_0;
      tmp = tmp_0;
    }
    if (!tmp) {
      break $l$loop;
    }
    var nextMatch = indexOf($this.input_1, $this.matchString_1.get_c1px32_k$(0));
    if (nextMatch === -1n) {
      var tmp_1 = $this.input_1;
      checkBounds($this, (tmp_1 instanceof Buffer ? tmp_1 : THROW_CCE()).get_size_woubt6_k$());
      $this.bytesRead_1 = add($this.bytesRead_1, $this.input_1.transferTo_lu4ka2_k$($this.writeChannel_1.get_writeBuffer_t7kuc6_k$()));
      var tmp_2 = flushIfNeeded($this.writeChannel_1, $completion);
      if (tmp_2 === get_COROUTINE_SUSPENDED())
        tmp_2 = yield tmp_2;
    } else {
      checkBounds($this, nextMatch);
      var tmp_3 = $this;
      var tmp_4 = $this.bytesRead_1;
      var tmp_5 = $this.writeChannel_1.get_writeBuffer_t7kuc6_k$();
      tmp_3.bytesRead_1 = add(tmp_4, $this.input_1.readAtMostTo_nyls31_k$(tmp_5 instanceof Buffer ? tmp_5 : THROW_CCE(), nextMatch));
      var tmp_6 = flushIfNeeded($this.writeChannel_1, $completion);
      if (tmp_6 === get_COROUTINE_SUSPENDED())
        tmp_6 = yield tmp_6;
      return Unit_getInstance();
    }
  }
  return Unit_getInstance();
}
function advanceToNextPotentialMatch($this, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_advanceToNextPotentialMatch__2ypy7x.bind(VOID, $this), $completion);
}
function *_generator_checkFullMatch__turpx6($this, $completion) {
  $l$loop: while (true) {
    var tmp;
    if (!$this.input_1.exhausted_p1jt55_k$()) {
      tmp = true;
    } else {
      var tmp_0 = $this.channel_1.awaitContent$default_j7khmh_k$(VOID, $completion);
      if (tmp_0 === get_COROUTINE_SUSPENDED())
        tmp_0 = yield tmp_0;
      tmp = tmp_0;
    }
    if (!tmp) {
      break $l$loop;
    }
    var byte = $this.input_1.readByte_ectjk2_k$();
    if ($this.matchIndex_1 > 0 && !(byte === $this.matchString_1.get_c1px32_k$($this.matchIndex_1))) {
      var oldMatchIndex = $this.matchIndex_1;
      while ($this.matchIndex_1 > 0 && !(byte === $this.matchString_1.get_c1px32_k$($this.matchIndex_1))) {
        $this.matchIndex_1 = $this.partialMatchTable_1[$this.matchIndex_1 - 1 | 0];
      }
      var retained = fromInt(oldMatchIndex - $this.matchIndex_1 | 0);
      checkBounds($this, retained);
      var tmp_1 = $this;
      var tmp_2 = $this.bytesRead_1;
      var tmp_3 = $this.writeChannel_1.get_writeBuffer_t7kuc6_k$();
      tmp_1.bytesRead_1 = add(tmp_2, $this.partialMatchBuffer_1.readAtMostTo_nyls31_k$(tmp_3 instanceof Buffer ? tmp_3 : THROW_CCE(), retained));
      if ($this.matchIndex_1 === 0 && !(byte === $this.matchString_1.get_c1px32_k$($this.matchIndex_1))) {
        var tmp_4 = writeByte($this.writeChannel_1, byte, $completion);
        if (tmp_4 === get_COROUTINE_SUSPENDED())
          tmp_4 = yield tmp_4;
        var _unary__edvuaz = $this.bytesRead_1;
        $this.bytesRead_1 = add(_unary__edvuaz, get_ONE());
        return false;
      }
    }
    $this.matchIndex_1 = $this.matchIndex_1 + 1 | 0;
    if ($this.matchIndex_1 === $this.matchString_1.get_size_woubt6_k$()) {
      return true;
    }
    $this.partialMatchBuffer_1.writeByte_9ih3z3_k$(byte);
  }
  return false;
}
function checkFullMatch($this, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_checkFullMatch__turpx6.bind(VOID, $this), $completion);
}
function checkBounds($this, extra) {
  if (add($this.bytesRead_1, extra) > $this.limit_1) {
    throw IOException.new_kotlinx_io_IOException_uuba9f_k$('Limit of ' + $this.limit_1.toString() + ' bytes exceeded ' + ('while searching for "' + toSingleLineString($this, $this.matchString_1) + '"'));
  }
}
function toSingleLineString($this, _this__u8e3s4) {
  return replace(decodeToString_0(_this__u8e3s4), '\n', '\\n');
}
var Companion_instance_0;
function Companion_getInstance_1() {
  if (Companion_instance_0 === VOID)
    Companion_0.new_io_ktor_utils_io_ByteReadChannel_Companion_s57v2t_k$();
  return Companion_instance_0;
}
function cancel_0(_this__u8e3s4) {
  _this__u8e3s4.cancel_9i2dv0_k$(IOException.new_kotlinx_io_IOException_uuba9f_k$('Channel was cancelled'));
}
function *_generator_readRemaining__kd4xx0(_this__u8e3s4, $completion) {
  var result = BytePacketBuilder();
  while (!_this__u8e3s4.get_isClosedForRead_ajcc1s_k$()) {
    result.transferFrom_v29myr_k$(_this__u8e3s4.get_readBuffer_yjmj9b_k$());
    var tmp = _this__u8e3s4.awaitContent$default_j7khmh_k$(VOID, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
  }
  rethrowCloseCauseIfNeeded_0(_this__u8e3s4);
  return result.get_buffer_bmaafd_k$();
}
function readRemaining(_this__u8e3s4, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_readRemaining__kd4xx0.bind(VOID, _this__u8e3s4), $completion);
}
function *_generator_toByteArray__v3q9dq(_this__u8e3s4, $completion) {
  var tmp = readBuffer(_this__u8e3s4, $completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  return readBytes(tmp);
}
function toByteArray(_this__u8e3s4, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_toByteArray__v3q9dq.bind(VOID, _this__u8e3s4), $completion);
}
function *_generator_copyTo__iu4794(_this__u8e3s4, channel, limit, $completion) {
  var remaining = limit;
  try {
    while (!_this__u8e3s4.get_isClosedForRead_ajcc1s_k$() && remaining > 0n) {
      if (_this__u8e3s4.get_readBuffer_yjmj9b_k$().exhausted_p1jt55_k$()) {
        var tmp = _this__u8e3s4.awaitContent$default_j7khmh_k$(VOID, $completion);
        if (tmp === get_COROUTINE_SUSPENDED())
          tmp = yield tmp;
      }
      var tmp0 = remaining;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = get_remaining(_this__u8e3s4.get_readBuffer_yjmj9b_k$());
      var count = tmp0 <= b ? tmp0 : b;
      _this__u8e3s4.get_readBuffer_yjmj9b_k$().readTo_rtq83_k$(channel.get_writeBuffer_t7kuc6_k$(), count);
      remaining = subtract(remaining, count);
      var tmp_0 = channel.flush_j5grz3_k$($completion);
      if (tmp_0 === get_COROUTINE_SUSPENDED())
        tmp_0 = yield tmp_0;
    }
  } catch ($p) {
    if ($p instanceof Error) {
      var cause = $p;
      _this__u8e3s4.cancel_9i2dv0_k$(cause);
      close_0(channel, cause);
      throw cause;
    } else {
      throw $p;
    }
  }
  finally {
    var tmp_1 = channel.flush_j5grz3_k$($completion);
    if (tmp_1 === get_COROUTINE_SUSPENDED())
      tmp_1 = yield tmp_1;
  }
  return subtract(limit, remaining);
}
function copyTo(_this__u8e3s4, channel, limit, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_copyTo__iu4794.bind(VOID, _this__u8e3s4, channel, limit), $completion);
}
function *_generator_discard__skcevq(_this__u8e3s4, max, $completion) {
  var remaining = max;
  while (remaining > 0n && !_this__u8e3s4.get_isClosedForRead_ajcc1s_k$()) {
    if (get_availableForRead(_this__u8e3s4) === 0) {
      var tmp = _this__u8e3s4.awaitContent$default_j7khmh_k$(VOID, $completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
    }
    var tmp0 = remaining;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = get_remaining(_this__u8e3s4.get_readBuffer_yjmj9b_k$());
    var count = tmp0 <= b ? tmp0 : b;
    discard_0(_this__u8e3s4.get_readBuffer_yjmj9b_k$(), count);
    remaining = subtract(remaining, count);
  }
  return subtract(max, remaining);
}
function discard(_this__u8e3s4, max, $completion) {
  max = max === VOID ? 9223372036854775807n : max;
  return suspendOrReturn(/*#__NOINLINE__*/_generator_discard__skcevq.bind(VOID, _this__u8e3s4, max), $completion);
}
function *_generator_copyAndClose__xxcx0u(_this__u8e3s4, channel, $completion) {
  var result = 0n;
  try {
    while (!_this__u8e3s4.get_isClosedForRead_ajcc1s_k$()) {
      result = add(result, _this__u8e3s4.get_readBuffer_yjmj9b_k$().transferTo_lu4ka2_k$(channel.get_writeBuffer_t7kuc6_k$()));
      var tmp = channel.flush_j5grz3_k$($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var tmp_0 = _this__u8e3s4.awaitContent$default_j7khmh_k$(VOID, $completion);
      if (tmp_0 === get_COROUTINE_SUSPENDED())
        tmp_0 = yield tmp_0;
    }
    var tmp0_safe_receiver = _this__u8e3s4.get_closedCause_o1qcj8_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  } catch ($p) {
    if ($p instanceof Error) {
      var cause = $p;
      _this__u8e3s4.cancel_9i2dv0_k$(cause);
      close_0(channel, cause);
      throw cause;
    } else {
      throw $p;
    }
  }
  finally {
    var tmp_1 = channel.flushAndClose_e4ofuo_k$($completion);
    if (tmp_1 === get_COROUTINE_SUSPENDED())
      tmp_1 = yield tmp_1;
  }
  return result;
}
function copyAndClose(_this__u8e3s4, channel, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_copyAndClose__xxcx0u.bind(VOID, _this__u8e3s4, channel), $completion);
}
function *_generator_copyTo__iu4794_0(_this__u8e3s4, channel, $completion) {
  var result = 0n;
  try {
    while (!_this__u8e3s4.get_isClosedForRead_ajcc1s_k$()) {
      result = add(result, _this__u8e3s4.get_readBuffer_yjmj9b_k$().transferTo_lu4ka2_k$(channel.get_writeBuffer_t7kuc6_k$()));
      var tmp = channel.flush_j5grz3_k$($completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
      var tmp_0 = _this__u8e3s4.awaitContent$default_j7khmh_k$(VOID, $completion);
      if (tmp_0 === get_COROUTINE_SUSPENDED())
        tmp_0 = yield tmp_0;
    }
  } catch ($p) {
    if ($p instanceof Error) {
      var cause = $p;
      _this__u8e3s4.cancel_9i2dv0_k$(cause);
      close_0(channel, cause);
      throw cause;
    } else {
      throw $p;
    }
  }
  finally {
    var tmp_1 = channel.flush_j5grz3_k$($completion);
    if (tmp_1 === get_COROUTINE_SUSPENDED())
      tmp_1 = yield tmp_1;
  }
  return result;
}
function copyTo_0(_this__u8e3s4, channel, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_copyTo__iu4794_0.bind(VOID, _this__u8e3s4, channel), $completion);
}
function *_generator_readAvailable__ki7w73(_this__u8e3s4, buffer, offset, length, $completion) {
  if (_this__u8e3s4.get_isClosedForRead_ajcc1s_k$())
    return -1;
  if (_this__u8e3s4.get_readBuffer_yjmj9b_k$().exhausted_p1jt55_k$()) {
    var tmp = _this__u8e3s4.awaitContent$default_j7khmh_k$(VOID, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
  }
  if (_this__u8e3s4.get_isClosedForRead_ajcc1s_k$())
    return -1;
  return readAvailable_0(_this__u8e3s4.get_readBuffer_yjmj9b_k$(), buffer, offset, length);
}
function readAvailable(_this__u8e3s4, buffer, offset, length, $completion) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? buffer.length - offset | 0 : length;
  return suspendOrReturn(/*#__NOINLINE__*/_generator_readAvailable__ki7w73.bind(VOID, _this__u8e3s4, buffer, offset, length), $completion);
}
function *_generator_readLine__gnpvha(_this__u8e3s4, lineEnding, $completion) {
  var result = StringBuilder.new_kotlin_text_StringBuilder_q3um6c_k$();
  var tmp;
  var tmp_0 = readLineTo(_this__u8e3s4, result, lineEnding, $completion);
  if (tmp_0 === get_COROUTINE_SUSPENDED())
    tmp_0 = yield tmp_0;
  if (tmp_0 >= 0n) {
    tmp = result.toString();
  } else {
    tmp = null;
  }
  return tmp;
}
function readLine(_this__u8e3s4, lineEnding, $completion) {
  lineEnding = lineEnding === VOID ? LineEnding_Default_getInstance() : lineEnding;
  return suspendOrReturn(/*#__NOINLINE__*/_generator_readLine__gnpvha.bind(VOID, _this__u8e3s4, lineEnding), $completion);
}
function *_generator_skipIfFound__8uzshe(_this__u8e3s4, byteString, $completion) {
  var tmp = peek(_this__u8e3s4, byteString.get_size_woubt6_k$(), $completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  if (equals(tmp, byteString)) {
    var tmp_0 = discard(_this__u8e3s4, fromInt(byteString.get_size_woubt6_k$()), $completion);
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      tmp_0 = yield tmp_0;
    return true;
  }
  return false;
}
function skipIfFound(_this__u8e3s4, byteString, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_skipIfFound__8uzshe.bind(VOID, _this__u8e3s4, byteString), $completion);
}
function *_generator_readPacket__axk2oa(_this__u8e3s4, packet, $completion) {
  var result = Buffer.new_kotlinx_io_Buffer_ca7i83_k$();
  $l$loop: while (result.get_size_woubt6_k$() < fromInt(packet)) {
    if (_this__u8e3s4.get_readBuffer_yjmj9b_k$().exhausted_p1jt55_k$()) {
      var tmp = _this__u8e3s4.awaitContent$default_j7khmh_k$(VOID, $completion);
      if (tmp === get_COROUTINE_SUSPENDED())
        tmp = yield tmp;
    }
    if (_this__u8e3s4.get_isClosedForRead_ajcc1s_k$())
      break $l$loop;
    if (get_remaining(_this__u8e3s4.get_readBuffer_yjmj9b_k$()) > subtract(numberToLong(packet), result.get_size_woubt6_k$())) {
      _this__u8e3s4.get_readBuffer_yjmj9b_k$().readTo_rtq83_k$(result, subtract(numberToLong(packet), result.get_size_woubt6_k$()));
    } else {
      _this__u8e3s4.get_readBuffer_yjmj9b_k$().transferTo_lu4ka2_k$(result);
    }
  }
  if (result.get_size_woubt6_k$() < fromInt(packet)) {
    throw EOFException.new_kotlinx_io_EOFException_y6c6dc_k$('Not enough data available, required ' + packet + ' bytes but only ' + result.get_size_woubt6_k$().toString() + ' available');
  }
  return result;
}
function readPacket(_this__u8e3s4, packet, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_readPacket__axk2oa.bind(VOID, _this__u8e3s4, packet), $completion);
}
function readUntil(_this__u8e3s4, matchString, writeChannel, limit, ignoreMissing, $completion) {
  limit = limit === VOID ? 9223372036854775807n : limit;
  ignoreMissing = ignoreMissing === VOID ? false : ignoreMissing;
  return ByteChannelScanner.new_io_ktor_utils_io_ByteChannelScanner_3vnos1_k$(_this__u8e3s4, matchString, writeChannel, limit).findNext_elfkay_k$(ignoreMissing, $completion);
}
function readLineStrictTo(_this__u8e3s4, out, limit, lineEnding, $completion) {
  limit = limit === VOID ? 9223372036854775807n : limit;
  lineEnding = lineEnding === VOID ? LineEnding_Default_getInstance() : lineEnding;
  // Inline function 'kotlin.require' call
  if (!(limit >= 0n)) {
    var message = 'Limit (' + limit.toString() + ') should be non-negative';
    throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString_1(message));
  }
  return internalReadLineTo(_this__u8e3s4, out, limit, lineEnding.equals(LineEnding_Lenient_getInstance()), true, $completion);
}
function rethrowCloseCauseIfNeeded(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.get_closedCause_o1qcj8_k$();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
}
function rethrowCloseCauseIfNeeded_0(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.get_closedCause_o1qcj8_k$();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
}
function *_generator_readBuffer__s1sw5u(_this__u8e3s4, $completion) {
  var result = Buffer.new_kotlinx_io_Buffer_ca7i83_k$();
  while (!_this__u8e3s4.get_isClosedForRead_ajcc1s_k$()) {
    result.transferFrom_v29myr_k$(_this__u8e3s4.get_readBuffer_yjmj9b_k$());
    var tmp = _this__u8e3s4.awaitContent$default_j7khmh_k$(VOID, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
  }
  var tmp0_safe_receiver = _this__u8e3s4.get_closedCause_o1qcj8_k$();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
  return result;
}
function readBuffer(_this__u8e3s4, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_readBuffer__s1sw5u.bind(VOID, _this__u8e3s4), $completion);
}
function get_availableForRead(_this__u8e3s4) {
  return convertToInt(_this__u8e3s4.get_readBuffer_yjmj9b_k$().get_buffer_bmaafd_k$().get_size_woubt6_k$());
}
function readLineTo(_this__u8e3s4, out, lineEnding, $completion) {
  lineEnding = lineEnding === VOID ? LineEnding_Default_getInstance() : lineEnding;
  return internalReadLineTo(_this__u8e3s4, out, 9223372036854775807n, lineEnding.equals(LineEnding_Lenient_getInstance()), false, $completion);
}
function *_generator_peek__qjkkqb(_this__u8e3s4, count, $completion) {
  if (_this__u8e3s4.get_isClosedForRead_ajcc1s_k$())
    return null;
  var tmp = _this__u8e3s4.awaitContent_gb4pzk_k$(count, $completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  if (!tmp)
    return null;
  return readByteString(_this__u8e3s4.get_readBuffer_yjmj9b_k$().peek_21nx7_k$(), count);
}
function peek(_this__u8e3s4, count, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_peek__qjkkqb.bind(VOID, _this__u8e3s4, count), $completion);
}
function *_generator_internalReadLineTo__5n8dpi(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, $completion) {
  var readBuffer = _this__u8e3s4.get_readBuffer_yjmj9b_k$();
  if (readBuffer.exhausted_p1jt55_k$()) {
    var tmp = _this__u8e3s4.awaitContent$default_j7khmh_k$(VOID, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
  }
  if (_this__u8e3s4.get_isClosedForRead_ajcc1s_k$())
    return -1n;
  var consumed = {_v: 0n};
  $l$loop: while (consumed._v < limit && !_this__u8e3s4.get_isClosedForRead_ajcc1s_k$()) {
    var limitLeft = subtract(limit, consumed._v);
    var lfIndex = indexOf(readBuffer, 10, VOID, limitLeft);
    var crIndex = internalReadLineTo$scanForSoleCr(readBuffer, lenientLineEnding, lfIndex, limitLeft);
    if (crIndex >= 0n) {
      internalReadLineTo$transferString(readBuffer, out, consumed, crIndex);
      discard_0(readBuffer, 1n);
      return consumed._v;
    }
    if (lfIndex === 0n) {
      discard_0(readBuffer, 1n);
      return consumed._v;
    }
    if (lfIndex > 0n) {
      var tmp_0;
      var tmp_1 = readBuffer.get_buffer_bmaafd_k$();
      // Inline function 'kotlin.Long.minus' call
      var tmp$ret$0 = subtract(lfIndex, fromInt(1));
      if (tmp_1.get_ugtq3c_k$(tmp$ret$0) === 13) {
        tmp_0 = 1n;
      } else {
        tmp_0 = 0n;
      }
      var isCrlf = tmp_0;
      internalReadLineTo$transferString(readBuffer, out, consumed, subtract(lfIndex, isCrlf));
      discard_0(readBuffer, add(numberToLong(1), isCrlf));
      return consumed._v;
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = get_remaining(readBuffer);
    var count = limitLeft <= b ? limitLeft : b;
    var tmp_2 = readBuffer.get_buffer_bmaafd_k$();
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$2 = subtract(count, fromInt(1));
    if (tmp_2.get_ugtq3c_k$(tmp$ret$2) === 13) {
      // Inline function 'kotlin.Long.minus' call
      var tmp$ret$3 = subtract(count, fromInt(1));
      internalReadLineTo$transferString(readBuffer, out, consumed, tmp$ret$3);
      var tmp_3 = internalReadLineTo$discardCrlfOrCr(readBuffer, _this__u8e3s4, lenientLineEnding, $completion);
      if (tmp_3 === get_COROUTINE_SUSPENDED())
        tmp_3 = yield tmp_3;
      if (tmp_3)
        return consumed._v;
      internalReadLineTo$transferString(readBuffer, out, consumed, 1n);
    } else {
      internalReadLineTo$transferString(readBuffer, out, consumed, count);
    }
    var tmp_4;
    if (consumed._v < limit && get_remaining(readBuffer) === 0n) {
      var tmp_5 = _this__u8e3s4.awaitContent$default_j7khmh_k$(VOID, $completion);
      if (tmp_5 === get_COROUTINE_SUSPENDED())
        tmp_5 = yield tmp_5;
      tmp_4 = !tmp_5;
    } else {
      tmp_4 = false;
    }
    if (tmp_4)
      break $l$loop;
  }
  if (consumed._v === 0n && _this__u8e3s4.get_isClosedForRead_ajcc1s_k$())
    return -1n;
  // Inline function 'kotlin.check' call
  if (!(consumed._v <= limit)) {
    var message = 'Consumed bytes exceed the limit: ' + consumed._v.toString() + ' > ' + limit.toString() + ". It's an implementation bug, please report it.";
    throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString_1(message));
  }
  if (consumed._v === limit) {
    if (limit === 9223372036854775807n)
      throw TooLongLineException.new_io_ktor_utils_io_charsets_TooLongLineException_gppm0c_k$('Max line length exceeded');
    var tmp_6;
    if (get_remaining(readBuffer) === 0n) {
      var tmp_7 = _this__u8e3s4.awaitContent$default_j7khmh_k$(VOID, $completion);
      if (tmp_7 === get_COROUTINE_SUSPENDED())
        tmp_7 = yield tmp_7;
      tmp_6 = !tmp_7;
    } else {
      tmp_6 = false;
    }
    if (tmp_6) {
      throwEndOfStreamException(consumed._v);
    }
    var tmp0_subject = readBuffer.get_buffer_bmaafd_k$().get_ugtq3c_k$(0n);
    if (tmp0_subject === 10) {
      discard_0(readBuffer, 1n);
      return consumed._v;
    } else if (tmp0_subject === 13) {
      var tmp_8 = internalReadLineTo$discardCrlfOrCr(readBuffer, _this__u8e3s4, lenientLineEnding, $completion);
      if (tmp_8 === get_COROUTINE_SUSPENDED())
        tmp_8 = yield tmp_8;
      if (tmp_8)
        return consumed._v;
    }
    throwTooLongLineException(limit);
  }
  if (throwOnIncompleteLine) {
    throwEndOfStreamException(consumed._v);
  }
  return consumed._v;
}
function internalReadLineTo(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_internalReadLineTo__5n8dpi.bind(VOID, _this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine), $completion);
}
function throwEndOfStreamException(consumed) {
  throw EOFException.new_kotlinx_io_EOFException_y6c6dc_k$('Unexpected end of stream after reading ' + consumed.toString() + ' characters');
}
function throwTooLongLineException(limit) {
  throw TooLongLineException.new_io_ktor_utils_io_charsets_TooLongLineException_gppm0c_k$('Line exceeds limit of ' + limit.toString() + ' characters');
}
function rethrowCloseCauseIfNeeded_1(_this__u8e3s4) {
  var tmp0_safe_receiver = _this__u8e3s4.get_closedCause_o1qcj8_k$();
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp0_safe_receiver;
  }
}
function internalReadLineTo$transferString(readBuffer, $out, consumed, count) {
  if (count > 0n) {
    var string = readString(readBuffer, count);
    $out.append_jgojdo_k$(string);
    var tmp0 = consumed._v;
    // Inline function 'kotlin.Long.plus' call
    var other = string.length;
    consumed._v = add(tmp0, fromInt(other));
  }
}
function internalReadLineTo$scanForSoleCr(_this__u8e3s4, $lenientLineEnding, lfIndex, limitLeft) {
  if (!$lenientLineEnding)
    return -1n;
  var tmp;
  if (lfIndex === -1n) {
    // Inline function 'kotlin.Long.minus' call
    var this_0 = get_remaining(_this__u8e3s4);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = subtract(this_0, fromInt(1));
    tmp = limitLeft <= b ? limitLeft : b;
  } else if (lfIndex === 0n) {
    tmp = 0n;
  } else {
    // Inline function 'kotlin.Long.minus' call
    tmp = subtract(lfIndex, fromInt(1));
  }
  var endIndex = tmp;
  return indexOf(_this__u8e3s4, 13, VOID, endIndex);
}
function *_generator_internalReadLineTo$discardCrlfOrCr__fwcpdd(_this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding, $completion) {
  var tmp;
  var tmp_0;
  if (get_remaining(_this__u8e3s4) >= 2n) {
    tmp_0 = true;
  } else {
    var tmp_1 = $this_internalReadLineTo.awaitContent_gb4pzk_k$(2, $completion);
    if (tmp_1 === get_COROUTINE_SUSPENDED())
      tmp_1 = yield tmp_1;
    tmp_0 = tmp_1;
  }
  if (tmp_0) {
    tmp = _this__u8e3s4.get_buffer_bmaafd_k$().get_ugtq3c_k$(1n) === 10;
  } else {
    tmp = false;
  }
  if (tmp) {
    discard_0(_this__u8e3s4, 2n);
    return true;
  }
  if ($lenientLineEnding) {
    discard_0(_this__u8e3s4, 1n);
    return true;
  }
  return false;
}
function internalReadLineTo$discardCrlfOrCr(_this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_internalReadLineTo$discardCrlfOrCr__fwcpdd.bind(VOID, _this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding), $completion);
}
function *_generator_flushIfNeeded__xji6le(_this__u8e3s4, $completion) {
  rethrowCloseCauseIfNeeded_1(_this__u8e3s4);
  if (_this__u8e3s4.get_autoFlush_zfdl3o_k$() || get_size(_this__u8e3s4.get_writeBuffer_t7kuc6_k$()) >= 1048576) {
    var tmp = _this__u8e3s4.flush_j5grz3_k$($completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
  }
  return Unit_getInstance();
}
function flushIfNeeded(_this__u8e3s4, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_flushIfNeeded__xji6le.bind(VOID, _this__u8e3s4), $completion);
}
function get_NO_CALLBACK() {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  return NO_CALLBACK;
}
var NO_CALLBACK;
function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
  coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
  autoFlush = autoFlush === VOID ? false : autoFlush;
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  return writer_0(_this__u8e3s4, coroutineContext, ByteChannel.new_io_ktor_utils_io_ByteChannel_95dkw9_k$(), block);
}
function invokeOnCompletion(_this__u8e3s4, block) {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  return _this__u8e3s4.get_job_18j2r0_k$().invokeOnCompletion_n6cffu_k$(block);
}
function *_generator_writeFully__hb5mir(_this__u8e3s4, value, startIndex, endIndex, $completion) {
  _this__u8e3s4.get_writeBuffer_t7kuc6_k$().write_ti570x_k$(value, startIndex, endIndex);
  var tmp = flushIfNeeded(_this__u8e3s4, $completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  return Unit_getInstance();
}
function writeFully(_this__u8e3s4, value, startIndex, endIndex, $completion) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? value.length : endIndex;
  return suspendOrReturn(/*#__NOINLINE__*/_generator_writeFully__hb5mir.bind(VOID, _this__u8e3s4, value, startIndex, endIndex), $completion);
}
function close_0(_this__u8e3s4, cause) {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  if (cause == null) {
    fireAndForget(ByteWriteChannel$flushAndClose$ref_0(_this__u8e3s4));
  } else {
    _this__u8e3s4.cancel_9i2dv0_k$(cause);
  }
}
function *_generator_writePacket__qqx68d(_this__u8e3s4, source, $completion) {
  while (!source.exhausted_p1jt55_k$()) {
    _this__u8e3s4.get_writeBuffer_t7kuc6_k$().write_nimze1_k$(source, get_remaining(source));
    var tmp = flushIfNeeded(_this__u8e3s4, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
  }
  return Unit_getInstance();
}
function writePacket(_this__u8e3s4, source, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_writePacket__qqx68d.bind(VOID, _this__u8e3s4, source), $completion);
}
function writer_0(_this__u8e3s4, coroutineContext, channel, block) {
  coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  // Inline function 'kotlin.apply' call
  var this_0 = launch(_this__u8e3s4, coroutineContext, VOID, writer$slambda_0(block, channel));
  this_0.invokeOnCompletion_n6cffu_k$(writer$lambda(channel));
  var job = this_0;
  return WriterJob.new_io_ktor_utils_io_WriterJob_du9gmh_k$(channel, job);
}
function fireAndForget(_this__u8e3s4) {
  _init_properties_ByteWriteChannelOperations_kt__i7slrs();
  startCoroutineCancellable(_this__u8e3s4, get_NO_CALLBACK());
}
function *_generator_writeByte__k05tl9(_this__u8e3s4, value, $completion) {
  _this__u8e3s4.get_writeBuffer_t7kuc6_k$().writeByte_9ih3z3_k$(value);
  var tmp = flushIfNeeded(_this__u8e3s4, $completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  return Unit_getInstance();
}
function writeByte(_this__u8e3s4, value, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_writeByte__k05tl9.bind(VOID, _this__u8e3s4, value), $completion);
}
function ByteWriteChannel$flushAndClose$ref_0(p0) {
  var i = ByteWriteChannel$flushAndClose$ref.new_io_ktor_utils_io_ByteWriteChannel$flushAndClose$ref_xvudqg_k$(p0);
  var l = ($completion) => i.invoke_vgi6qb_k$($completion);
  l.callableName = 'flushAndClose';
  l.$arity = 0;
  return l;
}
function *_generator_invoke__zhh2q8($this, $this$launch, $completion) {
  var nested = Job(get_job($this$launch.get_coroutineContext_115oqo_k$()));
  try {
    var tmp = $this.$block_1(WriterScope.new_io_ktor_utils_io_WriterScope_nxsjj3_k$($this.$channel_1, $this$launch.get_coroutineContext_115oqo_k$().plus_s13ygv_k$(nested)), $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      tmp = yield tmp;
    nested.complete_9ww6vb_k$();
    if (get_job($this$launch.get_coroutineContext_115oqo_k$()).get_isCancelled_trk8pu_k$()) {
      $this.$channel_1.cancel_9i2dv0_k$(get_job($this$launch.get_coroutineContext_115oqo_k$()).getCancellationException_8i1q6u_k$());
    }
  } catch ($p) {
    if ($p instanceof Error) {
      var cause = $p;
      cancel(nested, 'Exception thrown while writing to channel', cause);
      $this.$channel_1.cancel_9i2dv0_k$(cause);
    } else {
      throw $p;
    }
  }
  finally {
    var tmp_0 = nested.join_wqfvqz_k$($completion);
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      tmp_0 = yield tmp_0;
    // Inline function 'kotlin.runCatching' call
    var tmp_1;
    try {
      Companion_getInstance();
      var tmp_2 = $this.$channel_1.flushAndClose_e4ofuo_k$($completion);
      if (tmp_2 === get_COROUTINE_SUSPENDED())
        tmp_2 = yield tmp_2;
      // Inline function 'kotlin.Companion.success' call
      tmp_1 = _Result___init__impl__xyqfz8(Unit_getInstance());
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        tmp_3 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp_1 = tmp_3;
    }
  }
  return Unit_getInstance();
}
function writer$slambda_0($block, $channel) {
  var i = writer$slambda.new_io_ktor_utils_io_writer$slambda_h9f5qn_k$($block, $channel);
  var l = ($this$launch, $completion) => i.invoke_ri3sjx_k$($this$launch, $completion);
  l.$arity = 1;
  return l;
}
function writer$lambda($channel) {
  return (it) => {
    var tmp;
    if (!(it == null) && !$channel.get_isClosedForWrite_seyg5n_k$()) {
      $channel.cancel_9i2dv0_k$(it);
      tmp = Unit_getInstance();
    }
    return Unit_getInstance();
  };
}
var properties_initialized_ByteWriteChannelOperations_kt_acrf6u;
function _init_properties_ByteWriteChannelOperations_kt__i7slrs() {
  if (!properties_initialized_ByteWriteChannelOperations_kt_acrf6u) {
    properties_initialized_ByteWriteChannelOperations_kt_acrf6u = true;
    NO_CALLBACK = NO_CALLBACK$1.new_io_ktor_utils_io__no_name_provided__3dveuk_k$();
  }
}
function get_CLOSED() {
  _init_properties_CloseToken_kt__9ucr41();
  return CLOSED;
}
var CLOSED;
function _get_origin__hwq945($this) {
  return $this.origin_1;
}
function ClosedByteChannelException$_init_$ref_yjp351() {
  var l = (p0) => ClosedByteChannelException.new_io_ktor_utils_io_ClosedByteChannelException_6q08ba_k$(p0);
  l.callableName = '<init>';
  return l;
}
var properties_initialized_CloseToken_kt_lgg8zn;
function _init_properties_CloseToken_kt__9ucr41() {
  if (!properties_initialized_CloseToken_kt_lgg8zn) {
    properties_initialized_CloseToken_kt_lgg8zn = true;
    CLOSED = CloseToken.new_io_ktor_utils_io_CloseToken_qqi3q2_k$(null);
  }
}
function _get_buffer__tgqkad($this) {
  return $this.buffer_1;
}
function _set_initial__5sx0zj($this, _set____db54di) {
  $this.initial_1 = _set____db54di;
}
function _get_initial__vf5bcj($this) {
  return $this.initial_1;
}
function _set_consumed__uchkof($this, _set____db54di) {
  $this.consumed_1 = _set____db54di;
}
function _get_consumed__hjl97n($this) {
  return $this.consumed_1;
}
function *_generator_awaitContent__vf28kb_0($this, min, $completion) {
  if ($this.get_readBuffer_yjmj9b_k$().get_size_woubt6_k$() >= fromInt(min)) {
    return true;
  }
  var tmp = $this.delegate_1.awaitContent_gb4pzk_k$(min, $completion);
  if (tmp === get_COROUTINE_SUSPENDED())
    tmp = yield tmp;
  if (tmp) {
    transferFromDelegate($this);
    return true;
  }
  return false;
}
function transferFromDelegate($this) {
  updateConsumed($this);
  var appended = $this.buffer_1.transferFrom_v29myr_k$($this.delegate_1.get_readBuffer_yjmj9b_k$());
  $this.initial_1 = add($this.initial_1, appended);
}
function updateConsumed($this) {
  $this.consumed_1 = add($this.consumed_1, subtract($this.initial_1, $this.buffer_1.get_size_woubt6_k$()));
  $this.initial_1 = $this.buffer_1.get_size_woubt6_k$();
}
function counted(_this__u8e3s4) {
  return CountedByteReadChannel.new_io_ktor_utils_io_CountedByteReadChannel_chc685_k$(_this__u8e3s4);
}
function readText(_this__u8e3s4) {
  return readString_0(_this__u8e3s4);
}
var DummyJvmSimpleSerializerReplacement_instance;
function DummyJvmSimpleSerializerReplacement_getInstance() {
  if (DummyJvmSimpleSerializerReplacement_instance === VOID)
    DummyJvmSimpleSerializerReplacement.new_io_ktor_utils_io_DummyJvmSimpleSerializerReplacement_667n1g_k$();
  return DummyJvmSimpleSerializerReplacement_instance;
}
var LineEnding_Default_instance;
var LineEnding_Lenient_instance;
function values() {
  return [LineEnding_Default_getInstance(), LineEnding_Lenient_getInstance()];
}
function valueOf(value) {
  switch (value) {
    case 'Default':
      return LineEnding_Default_getInstance();
    case 'Lenient':
      return LineEnding_Lenient_getInstance();
    default:
      LineEnding_initEntries();
      THROW_IAE('No enum constant io.ktor.utils.io.LineEnding.' + value);
      break;
  }
}
function get_entries() {
  if ($ENTRIES == null)
    $ENTRIES = enumEntries(values());
  return $ENTRIES;
}
var LineEnding_entriesInitialized;
function LineEnding_initEntries() {
  if (LineEnding_entriesInitialized)
    return Unit_getInstance();
  LineEnding_entriesInitialized = true;
  LineEnding_Default_instance = LineEnding.new_io_ktor_utils_io_LineEnding_hr9d6k_k$('Default', 0);
  LineEnding_Lenient_instance = LineEnding.new_io_ktor_utils_io_LineEnding_hr9d6k_k$('Lenient', 1);
}
var $ENTRIES;
function LineEnding_Default_getInstance() {
  LineEnding_initEntries();
  return LineEnding_Default_instance;
}
function LineEnding_Lenient_getInstance() {
  LineEnding_initEntries();
  return LineEnding_Lenient_instance;
}
function _get_values__tel787($this) {
  return $this.values_1;
}
function _LineEndingMode___init__impl__jo5bul(mode) {
  return mode;
}
function _get_mode__dah3bc($this) {
  return $this;
}
function LineEndingMode__contains_impl_q5pr68($this, other) {
  return (_get_mode__dah3bc($this) | _get_mode__dah3bc(other)) === _get_mode__dah3bc($this);
}
function LineEndingMode__plus_impl_ttpz2j($this, other) {
  return _LineEndingMode___init__impl__jo5bul(_get_mode__dah3bc($this) | _get_mode__dah3bc(other));
}
function LineEndingMode__toString_impl_j4h76r($this) {
  var tmp;
  if ($this === Companion_getInstance_2().CR_1) {
    tmp = 'CR';
  } else if ($this === Companion_getInstance_2().LF_1) {
    tmp = 'LF';
  } else if ($this === Companion_getInstance_2().CRLF_1) {
    tmp = 'CRLF';
  } else {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = Companion_getInstance_2().values_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList.new_kotlin_collections_ArrayList_h94ppk_k$();
    var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var it = element.mode_1;
      if (LineEndingMode__contains_impl_q5pr68($this, it)) {
        destination.add_utx5q5_k$(element);
      }
    }
    tmp = toString_1(destination);
  }
  return tmp;
}
var Companion_instance_1;
function Companion_getInstance_2() {
  if (Companion_instance_1 === VOID)
    Companion_1.new_io_ktor_utils_io_LineEndingMode_Companion_bmiibz_k$();
  return Companion_instance_1;
}
function LineEndingMode__hashCode_impl_2mopm4($this) {
  return $this;
}
function LineEndingMode__equals_impl_qyr4nk($this, other) {
  if (!(other instanceof LineEndingMode))
    return false;
  if (!($this === other.mode_1))
    return false;
  return true;
}
function _get_source__4cuw5s($this) {
  return $this.source_1;
}
function _set_closed__kdb0et($this, _set____db54di) {
  $this.closed_1 = _set____db54di;
}
function _get_closed__iwkfs1($this) {
  return $this.closed_1;
}
function decode(_this__u8e3s4, input, max) {
  max = max === VOID ? 2147483647 : max;
  var tmp0 = fromInt(max);
  // Inline function 'kotlin.comparisons.minOf' call
  var b = input.get_buffer_bmaafd_k$().get_size_woubt6_k$();
  var tmp$ret$0 = tmp0 <= b ? tmp0 : b;
  // Inline function 'kotlin.text.buildString' call
  var capacity = convertToInt(tmp$ret$0);
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder.new_kotlin_text_StringBuilder_2x6iwq_k$(capacity);
  decode_0(_this__u8e3s4, input, this_0, max);
  return this_0.toString();
}
function encode(_this__u8e3s4, input, fromIndex, toIndex) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
  // Inline function 'io.ktor.utils.io.core.buildPacket' call
  var builder = Buffer.new_kotlinx_io_Buffer_ca7i83_k$();
  encodeToImpl(_this__u8e3s4, builder, input, fromIndex, toIndex);
  return builder;
}
function encodeToImpl(_this__u8e3s4, destination, input, fromIndex, toIndex) {
  var start = fromIndex;
  if (start >= toIndex)
    return Unit_getInstance();
  $l$loop: while (true) {
    var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, destination);
    // Inline function 'kotlin.check' call
    if (!(rc >= 0)) {
      throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$('Check failed.');
    }
    start = start + rc | 0;
    if (start >= toIndex)
      break $l$loop;
  }
}
function canRead(_this__u8e3s4) {
  return !_this__u8e3s4.exhausted_p1jt55_k$();
}
function readBytes(_this__u8e3s4, count) {
  count = count === VOID ? convertToInt(_this__u8e3s4.get_size_woubt6_k$()) : count;
  return readByteArray(_this__u8e3s4, count);
}
function buildPacket(block) {
  var builder = Buffer.new_kotlinx_io_Buffer_ca7i83_k$();
  block(builder);
  return builder;
}
function BytePacketBuilder() {
  return Buffer.new_kotlinx_io_Buffer_ca7i83_k$();
}
function writeFully_0(_this__u8e3s4, buffer, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? buffer.length - offset | 0 : length;
  _this__u8e3s4.write_ti570x_k$(buffer, offset, offset + length | 0);
}
function build(_this__u8e3s4) {
  return _this__u8e3s4.get_buffer_bmaafd_k$();
}
function get_size(_this__u8e3s4) {
  return convertToInt(_this__u8e3s4.get_buffer_bmaafd_k$().get_size_woubt6_k$());
}
function get_ByteReadPacketEmpty() {
  _init_properties_ByteReadPacket_kt__28475y();
  return ByteReadPacketEmpty;
}
var ByteReadPacketEmpty;
function ByteReadPacket(array, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? array.length : length;
  _init_properties_ByteReadPacket_kt__28475y();
  // Inline function 'kotlin.apply' call
  var this_0 = Buffer.new_kotlinx_io_Buffer_ca7i83_k$();
  this_0.write_ti570x_k$(array, offset, offset + length | 0);
  return this_0;
}
function get_remaining(_this__u8e3s4) {
  _init_properties_ByteReadPacket_kt__28475y();
  return _this__u8e3s4.get_buffer_bmaafd_k$().get_size_woubt6_k$();
}
function takeWhile(_this__u8e3s4, block) {
  _init_properties_ByteReadPacket_kt__28475y();
  while (!_this__u8e3s4.exhausted_p1jt55_k$() && block(_this__u8e3s4.get_buffer_bmaafd_k$())) {
  }
}
function discard_0(_this__u8e3s4, count) {
  count = count === VOID ? 9223372036854775807n : count;
  _init_properties_ByteReadPacket_kt__28475y();
  _this__u8e3s4.request_mpoy7z_k$(count);
  // Inline function 'kotlin.comparisons.minOf' call
  var b = get_remaining(_this__u8e3s4);
  var countToDiscard = count <= b ? count : b;
  _this__u8e3s4.get_buffer_bmaafd_k$().skip_bgd4sf_k$(countToDiscard);
  return countToDiscard;
}
var properties_initialized_ByteReadPacket_kt_hw4st4;
function _init_properties_ByteReadPacket_kt__28475y() {
  if (!properties_initialized_ByteReadPacket_kt_hw4st4) {
    properties_initialized_ByteReadPacket_kt_hw4st4 = true;
    ByteReadPacketEmpty = Buffer.new_kotlinx_io_Buffer_ca7i83_k$();
  }
}
function readAvailable_0(_this__u8e3s4, buffer, offset, length) {
  offset = offset === VOID ? 0 : offset;
  length = length === VOID ? buffer.length - offset | 0 : length;
  var result = _this__u8e3s4.readAtMostTo_kub29z_k$(buffer, offset, offset + length | 0);
  return result === -1 ? 0 : result;
}
function toByteArray_0(_this__u8e3s4, charset) {
  charset = charset === VOID ? Charsets_getInstance().get_UTF_8_ihn39z_k$() : charset;
  if (charset.equals(Charsets_getInstance().get_UTF_8_ihn39z_k$()))
    return encodeToByteArray(_this__u8e3s4, VOID, VOID, true);
  return encodeToByteArray_0(charset.newEncoder_gqwcdg_k$(), _this__u8e3s4, 0, _this__u8e3s4.length);
}
function readText_0(_this__u8e3s4, charset, max) {
  charset = charset === VOID ? Charsets_getInstance().get_UTF_8_ihn39z_k$() : charset;
  max = max === VOID ? 2147483647 : max;
  if (charset.equals(Charsets_getInstance().get_UTF_8_ihn39z_k$())) {
    if (max === 2147483647)
      return readString_0(_this__u8e3s4);
    var tmp0 = _this__u8e3s4.get_buffer_bmaafd_k$().get_size_woubt6_k$();
    // Inline function 'kotlin.math.min' call
    var b = fromInt(max);
    var count = tmp0 <= b ? tmp0 : b;
    return readString(_this__u8e3s4, count);
  }
  return decode(charset.newDecoder_zcettw_k$(), _this__u8e3s4, max);
}
function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
  charset = charset === VOID ? Charsets_getInstance().get_UTF_8_ihn39z_k$() : charset;
  if (charset === Charsets_getInstance().get_UTF_8_ihn39z_k$()) {
    return writeString(_this__u8e3s4, toString_1(text), fromIndex, toIndex);
  }
  encodeToImpl(charset.newEncoder_gqwcdg_k$(), _this__u8e3s4, text, fromIndex, toIndex);
}
function get_ByteArrayPool() {
  _init_properties_ByteArrayPool_kt__kfi3uj();
  return ByteArrayPool;
}
var ByteArrayPool;
var properties_initialized_ByteArrayPool_kt_td6pfh;
function _init_properties_ByteArrayPool_kt__kfi3uj() {
  if (!properties_initialized_ByteArrayPool_kt_td6pfh) {
    properties_initialized_ByteArrayPool_kt_td6pfh = true;
    ByteArrayPool = ByteArrayPool$1.new_io_ktor_utils_io_pool__no_name_provided__fsr6nz_k$();
  }
}
function useInstance(_this__u8e3s4, block) {
  var instance = _this__u8e3s4.borrow_mvkpor_k$();
  try {
    return block(instance);
  }finally {
    _this__u8e3s4.recycle_d2xv5h_k$(instance);
  }
}
var Companion_instance_2;
function Companion_getInstance_3() {
  if (Companion_instance_2 === VOID)
    Companion_2.new_io_ktor_utils_io_charsets_Charset_Companion_kfk10r_k$();
  return Companion_instance_2;
}
function get_name(_this__u8e3s4) {
  return _this__u8e3s4._name_1;
}
var Charsets_instance;
function Charsets_getInstance() {
  if (Charsets_instance === VOID)
    Charsets.new_io_ktor_utils_io_charsets_Charsets_4c36q4_k$();
  return Charsets_instance;
}
function forName(_this__u8e3s4, name) {
  return Companion_getInstance_3().forName_etcah2_k$(name);
}
function decode_0(_this__u8e3s4, input, dst, max) {
  var decoder = Decoder_0(get_name(get_charset(_this__u8e3s4)), true);
  var tmp0 = input.get_buffer_bmaafd_k$().get_size_woubt6_k$();
  // Inline function 'kotlin.comparisons.minOf' call
  var b = fromInt(max);
  var count = tmp0 <= b ? tmp0 : b;
  var array = readByteArray(input, convertToInt(count));
  var tmp;
  try {
    // Inline function 'org.khronos.webgl.toInt8Array' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp = decoder.decode_hpap4q_k$(array);
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Error) {
      var cause = $p;
      var tmp0_elvis_lhs = cause.message;
      throw MalformedInputException.new_io_ktor_utils_io_charsets_MalformedInputException_bwajs7_k$('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
    } else {
      throw $p;
    }
  }
  var result = tmp;
  dst.append_jgojdo_k$(result);
  return result.length;
}
function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.require' call
  if (!(fromIndex <= toIndex)) {
    var message = 'Failed requirement.';
    throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString_1(message));
  }
  if (get_charset_0(_this__u8e3s4).equals(Charsets_getInstance().ISO_8859_1__1)) {
    return encodeISO88591(input, fromIndex, toIndex, dst);
  }
  // Inline function 'kotlin.require' call
  if (!(get_charset_0(_this__u8e3s4) === Charsets_getInstance().UTF_8__1)) {
    var message_0 = 'Only UTF-8 encoding is supported in JS';
    throw IllegalArgumentException.new_kotlin_IllegalArgumentException_f8t9r5_k$(toString_1(message_0));
  }
  var encoder = new TextEncoder();
  // Inline function 'kotlin.text.substring' call
  var tmp$ret$5 = toString_1(charSequenceSubSequence(input, fromIndex, toIndex));
  var result = encoder.encode(tmp$ret$5);
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  dst.write$default_h97jte_k$(result);
  return result.length;
}
function encodeToByteArray_0(_this__u8e3s4, input, fromIndex, toIndex) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
  return encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex);
}
function get_charset(_this__u8e3s4) {
  return _this__u8e3s4._charset_1;
}
function get_charset_0(_this__u8e3s4) {
  return _this__u8e3s4._charset_1;
}
function encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
  var start = fromIndex;
  if (start >= toIndex)
    return new Int8Array(0);
  var dst = Buffer.new_kotlinx_io_Buffer_ca7i83_k$();
  var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, dst);
  start = start + rc | 0;
  if (start === toIndex) {
    return readByteArray_0(dst);
  }
  encodeToImpl(_this__u8e3s4, dst, input, start, toIndex);
  return readByteArray_0(dst);
}
function _get_charset__c43qgr($this) {
  return $this.charset_1;
}
function component1($this) {
  return $this.charset_1;
}
function _get_charset__c43qgr_0($this) {
  return $this.charset_1;
}
function component1_0($this) {
  return $this.charset_1;
}
function Decoder_0(encoding, fatal) {
  fatal = fatal === VOID ? true : fatal;
  var tmp;
  try {
    tmp = toKtor(new TextDecoder(encoding, textDecoderOptions(fatal)));
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Error) {
      var cause = $p;
      tmp_0 = TextDecoderFallback.new_io_ktor_utils_io_charsets_TextDecoderFallback_grsb47_k$(encoding, fatal);
    } else {
      throw $p;
    }
    tmp = tmp_0;
  }
  return tmp;
}
function toKtor(_this__u8e3s4) {
  return toKtor$1.new_io_ktor_utils_io_charsets__no_name_provided__l13rfd_k$(_this__u8e3s4);
}
function textDecoderOptions(fatal) {
  fatal = fatal === VOID ? false : fatal;
  // Inline function 'kotlin.apply' call
  var this_0 = new Object();
  // Inline function 'kotlin.js.asDynamic' call
  // Inline function 'kotlin.with' call
  this_0.fatal = fatal;
  return this_0;
}
function get_ENCODING_ALIASES() {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  return ENCODING_ALIASES;
}
var ENCODING_ALIASES;
function get_REPLACEMENT() {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  return REPLACEMENT;
}
var REPLACEMENT;
function toCodePoint(_this__u8e3s4) {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  var value = _this__u8e3s4 & 255;
  if (isASCII(value)) {
    return value;
  }
  return get_WIN1252_TABLE()[value - 128 | 0];
}
function isASCII(_this__u8e3s4) {
  _init_properties_TextDecoderFallback_js_kt__an7r6m();
  return 0 <= _this__u8e3s4 ? _this__u8e3s4 <= 127 : false;
}
var properties_initialized_TextDecoderFallback_js_kt_6rekzk;
function _init_properties_TextDecoderFallback_js_kt__an7r6m() {
  if (!properties_initialized_TextDecoderFallback_js_kt_6rekzk) {
    properties_initialized_TextDecoderFallback_js_kt_6rekzk = true;
    ENCODING_ALIASES = setOf(['ansi_x3.4-1968', 'ascii', 'cp1252', 'cp819', 'csisolatin1', 'ibm819', 'iso-8859-1', 'iso-ir-100', 'iso8859-1', 'iso88591', 'iso_8859-1', 'iso_8859-1:1987', 'l1', 'latin1', 'us-ascii', 'windows-1252', 'x-cp1252']);
    // Inline function 'kotlin.byteArrayOf' call
    REPLACEMENT = new Int8Array([-17, -65, -67]);
  }
}
function get_DEVELOPMENT_MODE() {
  return false;
}
function ioDispatcher() {
  return Dispatchers_getInstance().get_Default_goqax4_k$();
}
function JvmSerializerReplacement(serializer, value) {
  return DummyJvmSimpleSerializerReplacement_getInstance();
}
function encodeISO88591(input, fromIndex, toIndex, dst) {
  if (fromIndex >= toIndex)
    return 0;
  var inductionVariable = fromIndex;
  if (inductionVariable < toIndex)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.code' call
      var this_0 = charSequenceGet(input, index);
      var character = Char__toInt_impl_vasixd(this_0);
      if (character > 255) {
        failedToMapError(character);
      }
      dst.writeByte_9ih3z3_k$(toByte(character));
    }
     while (inductionVariable < toIndex);
  return toIndex - fromIndex | 0;
}
function failedToMapError(ch) {
  throw MalformedInputException.new_io_ktor_utils_io_charsets_MalformedInputException_bwajs7_k$('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
}
function get_WIN1252_TABLE() {
  _init_properties_Win1252Table_kt__tl0v64();
  return WIN1252_TABLE;
}
var WIN1252_TABLE;
var properties_initialized_Win1252Table_kt_pkmjoq;
function _init_properties_Win1252Table_kt__tl0v64() {
  if (!properties_initialized_Win1252Table_kt_pkmjoq) {
    properties_initialized_Win1252Table_kt_pkmjoq = true;
    // Inline function 'kotlin.intArrayOf' call
    WIN1252_TABLE = new Int32Array([8364, -1, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, -1, 381, -1, -1, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, -1, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]);
  }
}
function get_atomicfu$reentrantLock() {
  _init_properties_Synchronized_kt__f4zdjg();
  return Lock;
}
var Lock;
function synchronized(lock, block) {
  _init_properties_Synchronized_kt__f4zdjg();
  return block();
}
var properties_initialized_Synchronized_kt_8bwsba;
function _init_properties_Synchronized_kt__f4zdjg() {
  if (!properties_initialized_Synchronized_kt_8bwsba) {
    properties_initialized_Synchronized_kt_8bwsba = true;
    Lock = ReentrantLock.new_io_ktor_utils_io_locks_ReentrantLock_yswlqs_k$();
  }
}
function _get_instances__6pklt9($this) {
  return $this.instances_1;
}
function _set_size__9twho6($this, _set____db54di) {
  $this.size_1 = _set____db54di;
}
function _get_size__ddoh9m($this) {
  return $this.size_1;
}
//region block: post-declaration
initMetadataForClass(InternalAPI, 'InternalAPI', VOID, VOID, [Annotation]);
initMetadataForClass(KtorDsl, 'KtorDsl', VOID, VOID, [Annotation]);
initMetadataForInterface(ByteWriteChannel, 'ByteWriteChannel', VOID, VOID, VOID, [0]);
initMetadataForInterface(BufferedByteWriteChannel, 'BufferedByteWriteChannel', VOID, VOID, [ByteWriteChannel], [0]);
initMetadataForCompanion(Companion);
initMetadataForInterface(Slot, 'Slot');
initMetadataForObject(Empty, 'Empty', VOID, VOID, [Slot]);
initMetadataForClass(Closed, 'Closed', VOID, VOID, [Slot]);
initMetadataForInterface(Task, 'Task', VOID, VOID, [Slot]);
protoOf(Read).resume_2o15jx_k$ = resume;
protoOf(Read).resume_xzb95z_k$ = resume_0;
protoOf(Read).resume$default_53elu8_k$ = resume$default;
initMetadataForClass(Read, 'Read', VOID, VOID, [Task]);
protoOf(Write).resume_2o15jx_k$ = resume;
protoOf(Write).resume_xzb95z_k$ = resume_0;
protoOf(Write).resume$default_53elu8_k$ = resume$default;
initMetadataForClass(Write, 'Write', VOID, VOID, [Task]);
initMetadataForInterface(ByteReadChannel, 'ByteReadChannel', VOID, VOID, VOID, [1]);
protoOf(ByteChannel).awaitContent$default_j7khmh_k$ = awaitContent$default;
initMetadataForClass(ByteChannel, 'ByteChannel', ByteChannel.new_io_ktor_utils_io_ByteChannel_95dkw9_k$, VOID, [ByteReadChannel, BufferedByteWriteChannel], [1, 0]);
initMetadataForClass(ConcurrentIOException, 'ConcurrentIOException');
initMetadataForClass(ByteChannelScanner, 'ByteChannelScanner', VOID, VOID, VOID, [1, 0]);
protoOf(ByteReadChannel$Companion$Empty$1).awaitContent$default_j7khmh_k$ = awaitContent$default;
initMetadataForClass(ByteReadChannel$Companion$Empty$1, VOID, VOID, VOID, [ByteReadChannel], [1]);
initMetadataForCompanion(Companion_0);
initMetadataForInterface(ChannelJob, 'ChannelJob');
initMetadataForClass(WriterJob, 'WriterJob', VOID, VOID, [ChannelJob]);
initMetadataForClass(WriterScope, 'WriterScope', VOID, VOID, [CoroutineScope]);
initMetadataForClass(NO_CALLBACK$1, VOID, VOID, VOID, [Continuation]);
initMetadataForFunctionReference(ByteWriteChannel$flushAndClose$ref, VOID, VOID, [0]);
initMetadataForLambda(writer$slambda, VOID, VOID, [1]);
initMetadataForClass(CloseToken, 'CloseToken');
protoOf(CountedByteReadChannel).awaitContent$default_j7khmh_k$ = awaitContent$default;
initMetadataForClass(CountedByteReadChannel, 'CountedByteReadChannel', VOID, VOID, [ByteReadChannel], [1]);
initMetadataForClass(ClosedByteChannelException, 'ClosedByteChannelException', ClosedByteChannelException.new_io_ktor_utils_io_ClosedByteChannelException_6q08ba_k$);
initMetadataForClass(ClosedReadChannelException, 'ClosedReadChannelException', ClosedReadChannelException.new_io_ktor_utils_io_ClosedReadChannelException_478xi5_k$);
initMetadataForClass(ClosedWriteChannelException, 'ClosedWriteChannelException', ClosedWriteChannelException.new_io_ktor_utils_io_ClosedWriteChannelException_o2rmk5_k$);
initMetadataForInterface(JvmSerializable, 'JvmSerializable');
initMetadataForInterface(JvmSerializer, 'JvmSerializer', VOID, VOID, [JvmSerializable]);
initMetadataForObject(DummyJvmSimpleSerializerReplacement, 'DummyJvmSimpleSerializerReplacement');
initMetadataForClass(LineEnding, 'LineEnding');
initMetadataForCompanion(Companion_1);
initMetadataForClass(LineEndingMode, 'LineEndingMode');
protoOf(SourceByteReadChannel).awaitContent$default_j7khmh_k$ = awaitContent$default;
initMetadataForClass(SourceByteReadChannel, 'SourceByteReadChannel', VOID, VOID, [ByteReadChannel], [1]);
initMetadataForClass(MalformedInputException, 'MalformedInputException');
initMetadataForClass(TooLongLineException, 'TooLongLineException');
initMetadataForInterface(ObjectPool, 'ObjectPool', VOID, VOID, [AutoCloseable]);
protoOf(DefaultPool).close_yn9xrc_k$ = close;
initMetadataForClass(DefaultPool, 'DefaultPool', VOID, VOID, [ObjectPool]);
initMetadataForClass(ByteArrayPool$1);
protoOf(NoPoolImpl).close_yn9xrc_k$ = close;
initMetadataForClass(NoPoolImpl, 'NoPoolImpl', VOID, VOID, [ObjectPool]);
initMetadataForCompanion(Companion_2);
initMetadataForClass(Charset, 'Charset');
initMetadataForObject(Charsets, 'Charsets');
initMetadataForClass(CharsetDecoder, 'CharsetDecoder');
initMetadataForClass(CharsetEncoder, 'CharsetEncoder');
initMetadataForClass(CharsetImpl, 'CharsetImpl');
initMetadataForClass(CharsetEncoderImpl, 'CharsetEncoderImpl');
initMetadataForClass(CharsetDecoderImpl, 'CharsetDecoderImpl');
initMetadataForInterface(Decoder, 'Decoder');
initMetadataForClass(toKtor$1, VOID, VOID, VOID, [Decoder]);
initMetadataForClass(TextDecoderFallback, 'TextDecoderFallback', VOID, VOID, [Decoder]);
initMetadataForInterface(Closeable, 'Closeable', VOID, VOID, [AutoCloseable]);
initMetadataForClass(ReentrantLock, 'ReentrantLock', ReentrantLock.new_io_ktor_utils_io_locks_ReentrantLock_yswlqs_k$);
//endregion
//region block: exports
export {
  LineEnding_Lenient_getInstance as LineEnding_Lenient_getInstanceagvw5ljm3cic,
  copyAndClose as copyAndClose34al3x88c8lha,
  copyTo as copyTo3z8um8xkg7g1,
  copyTo_0 as copyTo1gcgz49nvu9ki,
  discard as discard1prhzj5peltpu,
  readAvailable as readAvailable3vfomv92cg41a,
  readLineStrictTo as readLineStrictTo28itb6tlpz7zv,
  readLine as readLine3kj7x12ugmdjy,
  readPacket as readPacket1r77mz431qe8y,
  readRemaining as readRemaininghtnrfi4c8vp0,
  readUntil as readUntil3k1nh8lpn23ao,
  skipIfFound as skipIfFound1m8ofwnay4fp9,
  toByteArray as toByteArray2f7h1d87fvkuc,
  writeFully as writeFully3jo5sennkizsh,
  writePacket as writePacket2q073y706j8ob,
  LineEndingMode__plus_impl_ttpz2j as LineEndingMode__plus_impl_ttpz2j2y4ckcarwdvhq,
  Charsets_getInstance as Charsets_getInstanceq0o82sizm30g,
  Companion_getInstance_1 as Companion_getInstance2xdbr0bdtxbh1,
  Companion_getInstance_2 as Companion_getInstance1jnwy1jx65t7w,
  MalformedInputException as MalformedInputExceptionbvc6h5ij0ias,
  decode as decode1t43jmuxrxpmo,
  encode as encode35e4rpnc94tb5,
  forName as forName2faodmskqnoz5,
  get_name as get_name2f11g4r0d5pxp,
  BytePacketBuilder as BytePacketBuilder2biodf4wxvlba,
  ByteReadPacket as ByteReadPacket24tdckgvuvatn,
  Closeable as Closeableu07ioona9oji,
  build as buildjygoh729rhy8,
  canRead as canRead1guo8vbveth0f,
  readText_0 as readText27783kyxjxi1g,
  get_remaining as get_remaining1lapv95kcmm0y,
  get_size as get_size2imoy2jq11jxl,
  takeWhile as takeWhile34751tcfg6owx,
  toByteArray_0 as toByteArray1i3ns5jnoqlv6,
  writeFully_0 as writeFully359t6q8kam2g5,
  writeText as writeText19qfzm98fbm4l,
  get_ByteArrayPool as get_ByteArrayPool3f7yrgvqxz9ct,
  DefaultPool as DefaultPool2gb1fm4epwgu9,
  NoPoolImpl as NoPoolImplgos9n8jphzjp,
  ByteChannel as ByteChannel3cxdguezl3lu7,
  ByteReadChannel_0 as ByteReadChannel1cb89sbyipkce,
  ByteReadChannel as ByteReadChannel2wzou76jce72d,
  ClosedByteChannelException as ClosedByteChannelException3il8gfpye60w,
  JvmSerializable as JvmSerializablezgy7l0o2blu6,
  JvmSerializerReplacement as JvmSerializerReplacementzvsywtgmr7jd,
  JvmSerializer as JvmSerializer390xto3pd20pc,
  WriterScope as WriterScope3b0bo1enaee6b,
  cancel_0 as canceldn4b3cdqcfny,
  close_0 as close3semq7pafb42g,
  counted as counted3iniv3aql3f9n,
  invokeOnCompletion as invokeOnCompletion1ziuxzoag0iwj,
  ioDispatcher as ioDispatcher3b9pa3x0duop,
  readText as readText3frapgncbqrcg,
  writer as writer1eia5its2a1fh,
};
//endregion

//# sourceMappingURL=ktor-ktor-io.mjs.map
