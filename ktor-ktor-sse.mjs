import {
  VOID3gxj6tk5isa35 as VOID,
  createThis2j2avj17cvnv2 as createThis,
  toString30pk9tzaqopn as toString,
  hashCodeq5arwsb9dgti as hashCode,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  getBigIntHashCode294hi5bdhtj6e as getBigIntHashCode,
  equals2au1ep9vhcato as equals,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  StringBuildermazzzhj6kkai as StringBuilder,
  Unit_getInstance3uavtu4x7ly6a as Unit_getInstance,
  toString1pkumu07cwy4m as toString_0,
  Regexxgw0gjiagf4z as Regex,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class ServerSentEventMetadata {}
class TypedServerSentEvent {
  static new_io_ktor_sse_TypedServerSentEvent_so4e_k$(data, event, id, retry, comments, $box) {
    data = data === VOID ? null : data;
    event = event === VOID ? null : event;
    id = id === VOID ? null : id;
    retry = retry === VOID ? null : retry;
    comments = comments === VOID ? null : comments;
    var $this = createThis(this, $box);
    $this.data_1 = data;
    $this.event_1 = event;
    $this.id_1 = id;
    $this.retry_1 = retry;
    $this.comments_1 = comments;
    return $this;
  }
  get_data_wokkxf_k$() {
    return this.data_1;
  }
  get_event_ir25pt_k$() {
    return this.event_1;
  }
  get_id_kntnx8_k$() {
    return this.id_1;
  }
  get_retry_ixwxvj_k$() {
    return this.retry_1;
  }
  get_comments_t9igfx_k$() {
    return this.comments_1;
  }
  toString_vs4gzz_k$(serializer) {
    var tmp0_safe_receiver = this.data_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = serializer(tmp0_safe_receiver);
    }
    return eventToString(tmp, this.event_1, this.id_1, this.retry_1, this.comments_1);
  }
  component1_7eebsc_k$() {
    return this.data_1;
  }
  component2_7eebsb_k$() {
    return this.event_1;
  }
  component3_7eebsa_k$() {
    return this.id_1;
  }
  component4_7eebs9_k$() {
    return this.retry_1;
  }
  component5_7eebs8_k$() {
    return this.comments_1;
  }
  copy_p69ldr_k$(data, event, id, retry, comments) {
    return TypedServerSentEvent.new_io_ktor_sse_TypedServerSentEvent_so4e_k$(data, event, id, retry, comments);
  }
  copy$default_njk4fs_k$(data, event, id, retry, comments, $super) {
    data = data === VOID ? this.data_1 : data;
    event = event === VOID ? this.event_1 : event;
    id = id === VOID ? this.id_1 : id;
    retry = retry === VOID ? this.retry_1 : retry;
    comments = comments === VOID ? this.comments_1 : comments;
    return $super === VOID ? this.copy_p69ldr_k$(data, event, id, retry, comments) : $super.copy_p69ldr_k$.call(this, data, event, id, retry, comments);
  }
  toString() {
    return 'TypedServerSentEvent(data=' + toString(this.data_1) + ', event=' + this.event_1 + ', id=' + this.id_1 + ', retry=' + toString(this.retry_1) + ', comments=' + this.comments_1 + ')';
  }
  hashCode() {
    var result = this.data_1 == null ? 0 : hashCode(this.data_1);
    result = imul(result, 31) + (this.event_1 == null ? 0 : getStringHashCode(this.event_1)) | 0;
    result = imul(result, 31) + (this.id_1 == null ? 0 : getStringHashCode(this.id_1)) | 0;
    result = imul(result, 31) + (this.retry_1 == null ? 0 : getBigIntHashCode(this.retry_1)) | 0;
    result = imul(result, 31) + (this.comments_1 == null ? 0 : getStringHashCode(this.comments_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof TypedServerSentEvent))
      return false;
    if (!equals(this.data_1, other.data_1))
      return false;
    if (!(this.event_1 == other.event_1))
      return false;
    if (!(this.id_1 == other.id_1))
      return false;
    if (!(this.retry_1 == other.retry_1))
      return false;
    if (!(this.comments_1 == other.comments_1))
      return false;
    return true;
  }
}
class ServerSentEvent {
  static new_io_ktor_sse_ServerSentEvent_lcuqbr_k$(data, event, id, retry, comments, $box) {
    data = data === VOID ? null : data;
    event = event === VOID ? null : event;
    id = id === VOID ? null : id;
    retry = retry === VOID ? null : retry;
    comments = comments === VOID ? null : comments;
    var $this = createThis(this, $box);
    $this.data_1 = data;
    $this.event_1 = event;
    $this.id_1 = id;
    $this.retry_1 = retry;
    $this.comments_1 = comments;
    return $this;
  }
  get_data_wokkxf_k$() {
    return this.data_1;
  }
  get_event_ir25pt_k$() {
    return this.event_1;
  }
  get_id_kntnx8_k$() {
    return this.id_1;
  }
  get_retry_ixwxvj_k$() {
    return this.retry_1;
  }
  get_comments_t9igfx_k$() {
    return this.comments_1;
  }
  toString() {
    return eventToString(this.data_1, this.event_1, this.id_1, this.retry_1, this.comments_1);
  }
  component1_7eebsc_k$() {
    return this.data_1;
  }
  component2_7eebsb_k$() {
    return this.event_1;
  }
  component3_7eebsa_k$() {
    return this.id_1;
  }
  component4_7eebs9_k$() {
    return this.retry_1;
  }
  component5_7eebs8_k$() {
    return this.comments_1;
  }
  copy_vjzxum_k$(data, event, id, retry, comments) {
    return ServerSentEvent.new_io_ktor_sse_ServerSentEvent_lcuqbr_k$(data, event, id, retry, comments);
  }
  copy$default_8od5v1_k$(data, event, id, retry, comments, $super) {
    data = data === VOID ? this.data_1 : data;
    event = event === VOID ? this.event_1 : event;
    id = id === VOID ? this.id_1 : id;
    retry = retry === VOID ? this.retry_1 : retry;
    comments = comments === VOID ? this.comments_1 : comments;
    return $super === VOID ? this.copy_vjzxum_k$(data, event, id, retry, comments) : $super.copy_vjzxum_k$.call(this, data, event, id, retry, comments);
  }
  hashCode() {
    var result = this.data_1 == null ? 0 : getStringHashCode(this.data_1);
    result = imul(result, 31) + (this.event_1 == null ? 0 : getStringHashCode(this.event_1)) | 0;
    result = imul(result, 31) + (this.id_1 == null ? 0 : getStringHashCode(this.id_1)) | 0;
    result = imul(result, 31) + (this.retry_1 == null ? 0 : getBigIntHashCode(this.retry_1)) | 0;
    result = imul(result, 31) + (this.comments_1 == null ? 0 : getStringHashCode(this.comments_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof ServerSentEvent))
      return false;
    if (!(this.data_1 == other.data_1))
      return false;
    if (!(this.event_1 == other.event_1))
      return false;
    if (!(this.id_1 == other.id_1))
      return false;
    if (!(this.retry_1 == other.retry_1))
      return false;
    if (!(this.comments_1 == other.comments_1))
      return false;
    return true;
  }
}
//endregion
function get_END_OF_LINE_VARIANTS() {
  _init_properties_ServerSentEvent_kt__rkyey5();
  return END_OF_LINE_VARIANTS;
}
var END_OF_LINE_VARIANTS;
function eventToString(data, event, id, retry, comments) {
  _init_properties_ServerSentEvent_kt__rkyey5();
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder.new_kotlin_text_StringBuilder_q3um6c_k$();
  appendField(this_0, 'event', event);
  appendField(this_0, 'data', data);
  appendField(this_0, 'id', id);
  appendField(this_0, 'retry', retry);
  appendField(this_0, '', comments);
  return this_0.toString();
}
function appendField(_this__u8e3s4, name, value) {
  _init_properties_ServerSentEvent_kt__rkyey5();
  if (!(value == null)) {
    var tmp0 = toString_0(value);
    // Inline function 'kotlin.text.split' call
    var values = get_END_OF_LINE_VARIANTS().split_p7ck23_k$(tmp0, 0);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = values.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      _this__u8e3s4.append_22ad7x_k$(name + ': ' + element + '\r\n');
    }
  }
}
var properties_initialized_ServerSentEvent_kt_x8r4bz;
function _init_properties_ServerSentEvent_kt__rkyey5() {
  if (!properties_initialized_ServerSentEvent_kt_x8r4bz) {
    properties_initialized_ServerSentEvent_kt_x8r4bz = true;
    END_OF_LINE_VARIANTS = Regex.new_kotlin_text_Regex_w1xv3y_k$('\r\n|\r|\n');
  }
}
//region block: post-declaration
initMetadataForInterface(ServerSentEventMetadata, 'ServerSentEventMetadata');
initMetadataForClass(TypedServerSentEvent, 'TypedServerSentEvent', TypedServerSentEvent.new_io_ktor_sse_TypedServerSentEvent_so4e_k$, VOID, [ServerSentEventMetadata]);
initMetadataForClass(ServerSentEvent, 'ServerSentEvent', ServerSentEvent.new_io_ktor_sse_ServerSentEvent_lcuqbr_k$, VOID, [ServerSentEventMetadata]);
//endregion
//region block: exports
export {
  ServerSentEvent as ServerSentEvent2gltw5g1nk569,
  TypedServerSentEvent as TypedServerSentEvent3gtcgyg98sl20,
};
//endregion

//# sourceMappingURL=ktor-ktor-sse.mjs.map
