import {
  THROW_IAE23kobfj9wdoxr as THROW_IAE,
  enumEntries20mr21zbe3az4 as enumEntries,
  Unit_getInstance3uavtu4x7ly6a as Unit_getInstance,
  Enum3alwj03lh1n41 as Enum,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  createThis2j2avj17cvnv2 as createThis,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  VOID3gxj6tk5isa35 as VOID,
  split2bvyvnrlcifjv as split,
  lastOrNull1aq5oz189qoe1 as lastOrNull,
  IllegalStateExceptionkoljg5n0nrlr as IllegalStateException,
  toString1pkumu07cwy4m as toString,
  ArrayList3it5z8td81qkl as ArrayList,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  copyToArray2j022khrow2yi as copyToArray,
  getKClass3t8tygqu4lcxf as getKClass,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  first58ocm7j58k3q as first,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  closeFinally1sadm0w9gt3u4 as closeFinally,
  suspendOrReturn49pspzlx5djv as suspendOrReturn,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  Regexxgw0gjiagf4z as Regex,
  PrimitiveClasses_getInstance6p7zmos9nw3c as PrimitiveClasses_getInstance,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isByteArray4nnzfn1x4o3w as isByteArray,
  decodeToString1x4faah2liw2p as decodeToString,
  lazy2hsh8ze7j6ikd as lazy,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef3hckxc0xueiaj as getPropertyCallableRef,
  isBlank1dvkhjjvox3p0 as isBlank,
} from './kotlin-kotlin-stdlib.mjs';
import { toByteArray1i3ns5jnoqlv6 as toByteArray } from './ktor-ktor-io.mjs';
import {
  Text_getInstance38vnirw8um9kn as Text_getInstance,
  Image_getInstance9jd83dxj23ti as Image_getInstance,
  Video_getInstance35ogo9nibdg3x as Video_getInstance,
  ContentType1svlpabm9v7iz as ContentType,
  Application_getInstanceueakgx5l255p as Application_getInstance,
  URLBuilder1nlnzfhn643pn as URLBuilder,
  takeFromkqlcz7c6dx2r as takeFrom,
  MultiPart_getInstance2hpkqlzozpomu as MultiPart_getInstance,
  contentType1lwcfjsjo0z8g as contentType,
  Companion_getInstance363ajpo4f7xlh as Companion_getInstance,
  HeadersBuilder3h7sn3kkvu98m as HeadersBuilder,
  append2z8giuo6jcxrf as append,
  OutgoingContent3t2ohmyam9o76 as OutgoingContent,
  NullBody_getInstance2u702elx58iz7 as NullBody_getInstance,
  Companion_getInstance1qo23ej9noujo as Companion_getInstance_0,
  ParametersBuilder1ry9ntvvg567r as ParametersBuilder,
  Companion_getInstance12092dx8psw4e as Companion_getInstance_1,
  ByteArrayContent9zol65b22hp0 as ByteArrayContent,
  Urlowwyg1lanrqp as Url,
} from './ktor-ktor-http.mjs';
import {
  HttpClient3584jcajl7sef as HttpClient,
  HttpRequestBuilder15f2nnx9sjuv1 as HttpRequestBuilder,
  url1ln4fngdmzeq5 as url,
  headers24pki7ce1busg as headers,
  timeout39ggydbhmf7b9 as timeout,
  FormBuilder2h86ly8mj760k as FormBuilder,
  formData16t43gxqji6d8 as formData,
  MultiPartFormDataContent67pixgga9hu4 as MultiPartFormDataContent,
  FormDataContent25s3w8cik3m7q as FormDataContent,
  HttpStatement3zxb33q8lku as HttpStatement,
  ProxyBuilder_getInstanced04g4g1br1z as ProxyBuilder_getInstance,
} from './ktor-ktor-client-core.mjs';
import {
  TypeInfo2nbxsuf4v8os2 as TypeInfo,
  toMap1agg4casweo9p as toMap,
} from './ktor-ktor-utils.mjs';
import { Jsonsmkyu9xjl7fv as Json } from './kotlinx-serialization-kotlinx-serialization-json.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Type extends Enum {
  static new_work_socialhub_khttpclient_HttpParameter_Type_8zvn9q_k$(name, ordinal, $box) {
    return this.new_kotlin_Enum_a1ijns_k$(name, ordinal, $box);
  }
}
class Companion {
  static new_work_socialhub_khttpclient_HttpParameter_Companion_ksa9iz_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance = $this;
    return $this;
  }
  query_r463rc_k$(key, value) {
    return HttpParameter.new_work_socialhub_khttpclient_HttpParameter_eaf4t2_k$(Type_QUERY_getInstance(), key, value);
  }
  param_rhfqfh_k$(key, value) {
    return HttpParameter.new_work_socialhub_khttpclient_HttpParameter_eaf4t2_k$(Type_PARAM_getInstance(), key, value);
  }
  file_65915o_k$(key, fileName, fileBody) {
    return HttpParameter.new_work_socialhub_khttpclient_HttpParameter_eaf4t2_k$(Type_FILE_getInstance(), key, null, fileName, fileBody);
  }
  json_tyne5q_k$(json) {
    return HttpParameter.new_work_socialhub_khttpclient_HttpParameter_eaf4t2_k$(Type_JSON_getInstance(), 'json', null, 'file.json', toByteArray(json));
  }
}
class HttpParameter {
  static new_work_socialhub_khttpclient_HttpParameter_eaf4t2_k$(type, key, value, fileName, fileBody, $box) {
    Companion_getInstance_2();
    value = value === VOID ? null : value;
    fileName = fileName === VOID ? null : fileName;
    fileBody = fileBody === VOID ? null : fileBody;
    var $this = createThis(this, $box);
    $this.type_1 = type;
    $this.key_1 = key;
    $this.value_1 = value;
    $this.fileName_1 = fileName;
    $this.fileBody_1 = fileBody;
    return $this;
  }
  get_type_wovaf7_k$() {
    return this.type_1;
  }
  get_key_18j28a_k$() {
    return this.key_1;
  }
  get_value_j01efc_k$() {
    return this.value_1;
  }
  get_fileName_r258mo_k$() {
    return this.fileName_1;
  }
  get_fileBody_r1xuyv_k$() {
    return this.fileBody_1;
  }
  fileExtension_kyjtgd_k$() {
    var tmp0_safe_receiver = this.fileName_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : split(tmp0_safe_receiver, ['.']);
    return tmp1_safe_receiver == null ? null : lastOrNull(tmp1_safe_receiver);
  }
  fileContentType_sakr3r_k$() {
    switch (this.fileExtension_kyjtgd_k$()) {
      case 'txt':
        return Text_getInstance().get_Plain_ifc0ap_k$();
      case 'html':
        return Text_getInstance().get_Html_wo3384_k$();
      case 'css':
        return Text_getInstance().get_CSS_18jwcm_k$();
      case 'csv':
        return Text_getInstance().get_CSV_18jwcj_k$();
      case 'jpg':
      case 'jpeg':
        return Image_getInstance().get_JPEG_wo3lip_k$();
      case 'png':
        return Image_getInstance().get_PNG_18jmu8_k$();
      case 'gif':
        return Image_getInstance().get_GIF_18jtmt_k$();
      case 'svg':
        return Image_getInstance().get_SVG_18jkf9_k$();
      case 'mpeg':
        return Video_getInstance().get_MPEG_wo5iha_k$();
      case 'mp4':
        return Video_getInstance().get_MP4_18jp14_k$();
      case 'mov':
        return Video_getInstance().get_QuickTime_7v18bz_k$();
      case 'webm':
        return ContentType.new_io_ktor_http_ContentType_8k9r4z_k$('video', 'webm');
      case 'json':
        return Application_getInstance().get_Json_wo4ci9_k$();
      case 'xml':
        return Application_getInstance().get_Xml_18jg4y_k$();
      case 'zip':
        return Application_getInstance().get_Zip_18jeqw_k$();
      case 'pdf':
        return Application_getInstance().get_Pdf_18jmaf_k$();
    }
    return Application_getInstance().get_OctetStream_nfka06_k$();
  }
}
class HttpRequest {
  static new_work_socialhub_khttpclient_HttpRequest_9usdg4_k$($box) {
    var $this = createThis(this, $box);
    $this.schema_1 = 'https';
    $this.host_1 = null;
    $this.path_1 = null;
    $this.port_1 = null;
    $this.url_1 = null;
    $this.accept_1 = null;
    $this.userAgent_1 = 'kHttpClient/1.0';
    var tmp = $this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.params_1 = ArrayList.new_kotlin_collections_ArrayList_h94ppk_k$();
    var tmp_0 = $this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.header_1 = LinkedHashMap.new_kotlin_collections_LinkedHashMap_8xehp8_k$();
    $this.forceMultipartFormData_1 = false;
    $this.forceApplicationFormUrlEncoded_1 = false;
    $this.followRedirect_1 = true;
    $this.skipSSLValidation_1 = false;
    $this.requestTimeoutMillis_1 = null;
    $this.connectTimeoutMillis_1 = null;
    $this.socketTimeoutMillis_1 = null;
    return $this;
  }
  set_schema_ah6guk_k$(_set____db54di) {
    this.schema_1 = _set____db54di;
  }
  get_schema_je6tuy_k$() {
    return this.schema_1;
  }
  set_host_ry2fea_k$(_set____db54di) {
    this.host_1 = _set____db54di;
  }
  get_host_wonf8x_k$() {
    return this.host_1;
  }
  set_path_kc1l6z_k$(_set____db54di) {
    this.path_1 = _set____db54di;
  }
  get_path_wos8ry_k$() {
    return this.path_1;
  }
  set_port_9es2ar_k$(_set____db54di) {
    this.port_1 = _set____db54di;
  }
  get_port_wosj4a_k$() {
    return this.port_1;
  }
  set_url_fvthdx_k$(_set____db54di) {
    this.url_1 = _set____db54di;
  }
  get_url_18iuii_k$() {
    return this.url_1;
  }
  set_accept_nhv2jy_k$(_set____db54di) {
    this.accept_1 = _set____db54di;
  }
  get_accept_avafwx_k$() {
    return this.accept_1;
  }
  set_userAgent_8igxae_k$(_set____db54di) {
    this.userAgent_1 = _set____db54di;
  }
  get_userAgent_dnxump_k$() {
    return this.userAgent_1;
  }
  get_params_hy4oen_k$() {
    return this.params_1;
  }
  get_header_e7o2vq_k$() {
    return this.header_1;
  }
  set_forceMultipartFormData_i23dpl_k$(_set____db54di) {
    this.forceMultipartFormData_1 = _set____db54di;
  }
  get_forceMultipartFormData_g7otko_k$() {
    return this.forceMultipartFormData_1;
  }
  set_forceApplicationFormUrlEncoded_n2kkvk_k$(_set____db54di) {
    this.forceApplicationFormUrlEncoded_1 = _set____db54di;
  }
  get_forceApplicationFormUrlEncoded_j7bqs1_k$() {
    return this.forceApplicationFormUrlEncoded_1;
  }
  set_followRedirect_gnzcob_k$(_set____db54di) {
    this.followRedirect_1 = _set____db54di;
  }
  get_followRedirect_r61hl6_k$() {
    return this.followRedirect_1;
  }
  set_skipSSLValidation_vxv48c_k$(_set____db54di) {
    this.skipSSLValidation_1 = _set____db54di;
  }
  get_skipSSLValidation_injbgd_k$() {
    return this.skipSSLValidation_1;
  }
  set_requestTimeoutMillis_xyy1t6_k$(_set____db54di) {
    this.requestTimeoutMillis_1 = _set____db54di;
  }
  get_requestTimeoutMillis_rgkxdt_k$() {
    return this.requestTimeoutMillis_1;
  }
  set_connectTimeoutMillis_lkrilr_k$(_set____db54di) {
    this.connectTimeoutMillis_1 = _set____db54di;
  }
  get_connectTimeoutMillis_jog9kq_k$() {
    return this.connectTimeoutMillis_1;
  }
  set_socketTimeoutMillis_wmp1zo_k$(_set____db54di) {
    this.socketTimeoutMillis_1 = _set____db54di;
  }
  get_socketTimeoutMillis_3uzxud_k$() {
    return this.socketTimeoutMillis_1;
  }
  schema_nqvidj_k$(schema) {
    // Inline function 'kotlin.also' call
    this.schema_1 = schema;
    return this;
  }
  host_oz5yoi_k$(host) {
    // Inline function 'kotlin.also' call
    this.host_1 = host;
    return this;
  }
  path_3j3ft7_k$(path) {
    // Inline function 'kotlin.also' call
    this.path_1 = path;
    return this;
  }
  port_td6q2_k$(port) {
    // Inline function 'kotlin.also' call
    this.port_1 = port;
    return this;
  }
  url_uv2bth_k$(url) {
    // Inline function 'kotlin.also' call
    this.url_1 = url;
    return this;
  }
  accept_nclv9q_k$(accept) {
    // Inline function 'kotlin.also' call
    this.accept_1 = accept;
    return this;
  }
  userAgent_79bk8w_k$(userAgent) {
    // Inline function 'kotlin.also' call
    this.userAgent_1 = userAgent;
    return this;
  }
  header_32bnnx_k$(key, value) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.set' call
    this.header_1.put_4fpzoq_k$(key, value);
    return this;
  }
  forceMultipartFormData_kdsoq2_k$(forceMultipartFormData) {
    // Inline function 'kotlin.also' call
    this.forceMultipartFormData_1 = forceMultipartFormData;
    return this;
  }
  forceApplicationFormUrlEncoded_75e9ul_k$(forceApplicationFormUrlEncoded) {
    // Inline function 'kotlin.also' call
    this.forceApplicationFormUrlEncoded_1 = forceApplicationFormUrlEncoded;
    return this;
  }
  followRedirect_pnbnu0_k$(followRedirect) {
    // Inline function 'kotlin.also' call
    this.followRedirect_1 = followRedirect;
    return this;
  }
  skipSSLValidation_rsj18h_k$(skipSSLValidation) {
    // Inline function 'kotlin.also' call
    this.skipSSLValidation_1 = skipSSLValidation;
    return this;
  }
  requestTimeoutMillis_6pin1y_k$(requestTimeoutMillis) {
    // Inline function 'kotlin.also' call
    this.requestTimeoutMillis_1 = requestTimeoutMillis;
    return this;
  }
  connectTimeoutMillis_b5elap_k$(connectTimeoutMillis) {
    // Inline function 'kotlin.also' call
    this.connectTimeoutMillis_1 = connectTimeoutMillis;
    return this;
  }
  socketTimeoutMillis_qj3ug6_k$(socketTimeoutMillis) {
    // Inline function 'kotlin.also' call
    this.socketTimeoutMillis_1 = socketTimeoutMillis;
    return this;
  }
  query_u1ndh0_k$(key, value) {
    // Inline function 'kotlin.also' call
    this.params_1.add_utx5q5_k$(Companion_getInstance_2().query_r463rc_k$(key, toString(value)));
    return this;
  }
  queries_u14c3j_k$(queries) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = queries.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var k = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var v = element.get_value_j01efc_k$();
      this.query_u1ndh0_k$(k, v);
    }
    return this;
  }
  param_sgc4j3_k$(key, value) {
    // Inline function 'kotlin.also' call
    this.params_1.add_utx5q5_k$(Companion_getInstance_2().param_rhfqfh_k$(key, toString(value)));
    return this;
  }
  params_lw6ktd_k$(params) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = params.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var k = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var v = element.get_value_j01efc_k$();
      this.param_sgc4j3_k$(k, v);
    }
    return this;
  }
  file_65915o_k$(key, fileName, fileBody) {
    // Inline function 'kotlin.also' call
    this.params_1.add_utx5q5_k$(Companion_getInstance_2().file_65915o_k$(key, fileName, fileBody));
    return this;
  }
  json_tyne5q_k$(json) {
    // Inline function 'kotlin.also' call
    this.params_1.add_utx5q5_k$(Companion_getInstance_2().json_tyne5q_k$(json));
    return this;
  }
  pathValue_hbfy18_k$(key, value) {
    // Inline function 'kotlin.also' call
    var tmp = this;
    var tmp0_safe_receiver = this.path_1;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.text.toRegex' call
      var this_0 = '{' + key + '}';
      // Inline function 'kotlin.text.replace' call
      tmp_0 = Regex.new_kotlin_text_Regex_w1xv3y_k$(this_0).replace_1ix0wf_k$(tmp0_safe_receiver, value);
    }
    tmp.path_1 = tmp_0;
    var tmp_1 = this;
    var tmp1_safe_receiver = this.url_1;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.text.toRegex' call
      var this_1 = '{' + key + '}';
      // Inline function 'kotlin.text.replace' call
      tmp_2 = Regex.new_kotlin_text_Regex_w1xv3y_k$(this_1).replace_1ix0wf_k$(tmp1_safe_receiver, value);
    }
    tmp_1.url_1 = tmp_2;
    return this;
  }
  get_tw9lwx_k$($completion) {
    return proceed(this, Companion_getInstance_1().get_Get_18jsxf_k$(), $completion);
  }
  post_orxkcl_k$($completion) {
    return proceed(this, Companion_getInstance_1().get_Post_wo83k9_k$(), $completion);
  }
  put_8d9n9m_k$($completion) {
    return proceed(this, Companion_getInstance_1().get_Put_18jlve_k$(), $completion);
  }
  delete_9fal9i_k$($completion) {
    return proceed(this, Companion_getInstance_1().get_Delete_2tr9d8_k$(), $completion);
  }
  patch_oqby59_k$($completion) {
    return proceed(this, Companion_getInstance_1().get_Patch_if5ddr_k$(), $completion);
  }
  forceMultipart_5yucl8_k$(forceMultipart) {
    // Inline function 'kotlin.also' call
    this.forceMultipartFormData_1 = forceMultipart;
    return this;
  }
}
class Companion_0 {
  static new_work_socialhub_khttpclient_HttpResponse_Companion_mwtiyp_k$($box) {
    var $this = createThis(this, $box);
    Companion_instance_0 = $this;
    var tmp = $this;
    tmp.mapper_1 = Json(VOID, HttpResponse$Companion$mapper$lambda);
    return $this;
  }
  from_h247jb_k$(response, $completion) {
    return suspendOrReturn(/*#__NOINLINE__*/_generator_from__qou0de.bind(VOID, this, response), $completion);
  }
  get_mapper_giyu6i_k$() {
    return this.mapper_1;
  }
}
class HttpResponse {
  static new_work_socialhub_khttpclient_HttpResponse_4p6sm6_k$(status, headers, body, $box) {
    Companion_getInstance_3();
    var $this = createThis(this, $box);
    $this.status_1 = status;
    $this.headers_1 = headers;
    $this.body_1 = body;
    var tmp = $this;
    tmp.stringBody$delegate_1 = lazy(HttpResponse$stringBody$delegate$lambda($this));
    return $this;
  }
  get_status_jnf6d7_k$() {
    return this.status_1;
  }
  get_headers_ef25jx_k$() {
    return this.headers_1;
  }
  get_body_wojkyz_k$() {
    return this.body_1;
  }
  get_stringBody_otz1zw_k$() {
    var tmp0 = this.stringBody$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('stringBody', 1, tmp, HttpResponse$_get_stringBody_$ref_nmyr7m(), null);
    return tmp0.get_value_j01efc_k$();
  }
}
//endregion
var Type_QUERY_instance;
var Type_PARAM_instance;
var Type_FILE_instance;
var Type_JSON_instance;
function values() {
  return [Type_QUERY_getInstance(), Type_PARAM_getInstance(), Type_FILE_getInstance(), Type_JSON_getInstance()];
}
function valueOf(value) {
  switch (value) {
    case 'QUERY':
      return Type_QUERY_getInstance();
    case 'PARAM':
      return Type_PARAM_getInstance();
    case 'FILE':
      return Type_FILE_getInstance();
    case 'JSON':
      return Type_JSON_getInstance();
    default:
      Type_initEntries();
      THROW_IAE('No enum constant work.socialhub.khttpclient.HttpParameter.Type.' + value);
      break;
  }
}
function get_entries() {
  if ($ENTRIES == null)
    $ENTRIES = enumEntries(values());
  return $ENTRIES;
}
var Type_entriesInitialized;
function Type_initEntries() {
  if (Type_entriesInitialized)
    return Unit_getInstance();
  Type_entriesInitialized = true;
  Type_QUERY_instance = Type.new_work_socialhub_khttpclient_HttpParameter_Type_8zvn9q_k$('QUERY', 0);
  Type_PARAM_instance = Type.new_work_socialhub_khttpclient_HttpParameter_Type_8zvn9q_k$('PARAM', 1);
  Type_FILE_instance = Type.new_work_socialhub_khttpclient_HttpParameter_Type_8zvn9q_k$('FILE', 2);
  Type_JSON_instance = Type.new_work_socialhub_khttpclient_HttpParameter_Type_8zvn9q_k$('JSON', 3);
}
var $ENTRIES;
var Companion_instance;
function Companion_getInstance_2() {
  if (Companion_instance === VOID)
    Companion.new_work_socialhub_khttpclient_HttpParameter_Companion_ksa9iz_k$();
  return Companion_instance;
}
function Type_QUERY_getInstance() {
  Type_initEntries();
  return Type_QUERY_instance;
}
function Type_PARAM_getInstance() {
  Type_initEntries();
  return Type_PARAM_instance;
}
function Type_FILE_getInstance() {
  Type_initEntries();
  return Type_FILE_instance;
}
function Type_JSON_getInstance() {
  Type_initEntries();
  return Type_JSON_instance;
}
function *_generator_proceed__7fi2iu($this, method, $completion) {
  var req = $this;
  var tmp0 = HttpClient(HttpRequest$proceed$lambda(req));
  var tmp$ret$62;
  $l$block_0: {
    // Inline function 'kotlin.use' call
    var exception = null;
    try {
      var tmp0_safe_receiver = $this.accept_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.collections.set' call
        $this.header_1.put_4fpzoq_k$('Accept', tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $this.userAgent_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        var tmp0_0 = $this.header_1;
        // Inline function 'kotlin.collections.set' call
        var key = 'User-Agent';
        tmp0_0.put_4fpzoq_k$(key, tmp1_safe_receiver);
      }
      var tmp = Companion_getInstance_3();
      // Inline function 'io.ktor.client.request.request' call
      // Inline function 'kotlin.apply' call
      var this_0 = HttpRequestBuilder.new_io_ktor_client_request_HttpRequestBuilder_fz6gpm_k$();
      this_0.set_method_hoo95u_k$(method);
      if (!(req.url_1 == null)) {
        // Inline function 'kotlin.checkNotNull' call
        var tmp0_1 = req.url_1;
        var tmp$ret$7;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          if (tmp0_1 == null) {
            var message = 'Required value was null.';
            throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$(toString(message));
          } else {
            tmp$ret$7 = tmp0_1;
            break $l$block;
          }
        }
        var tmp_0 = tmp$ret$7;
        takeFrom(this_0.get_url_18iuii_k$(), URLBuilder(tmp_0));
      } else {
        url(this_0, req.schema_1, req.host_1, req.port_1, req.path_1);
      }
      headers(this_0, HttpRequest$proceed$lambda_0(req));
      timeout(this_0, HttpRequest$proceed$lambda_1(req));
      if (!$this.forceMultipartFormData_1 && !$this.forceApplicationFormUrlEncoded_1 && req.params_1.get_size_woubt6_k$() === 1 && canSendOnly($this, first(req.params_1))) {
        var param = first(req.params_1);
        // Inline function 'io.ktor.client.request.setBody' call
        var body = ByteArrayContent.new_io_ktor_http_content_ByteArrayContent_k6hg32_k$(ensureNotNull(param.get_fileBody_r1xuyv_k$()), param.fileContentType_sakr3r_k$());
        if (body == null) {
          this_0.set_body_slfhxt_k$(NullBody_getInstance());
          // Inline function 'io.ktor.util.reflect.typeInfo' call
          var tmp_1 = getKClass(ByteArrayContent);
          // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
          var tmp_2;
          try {
            tmp_2 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
          } catch ($p) {
            var tmp_3;
            if ($p instanceof Error) {
              var _unused_var__etf5q3 = $p;
              tmp_3 = null;
            } else {
              throw $p;
            }
            tmp_2 = tmp_3;
          }
          var tmp$ret$9 = tmp_2;
          var tmp$ret$10 = TypeInfo.new_io_ktor_util_reflect_TypeInfo_x2ms91_k$(tmp_1, tmp$ret$9);
          this_0.set_bodyType_8pgqkl_k$(tmp$ret$10);
        } else {
          if (body instanceof OutgoingContent) {
            this_0.set_body_slfhxt_k$(body);
            this_0.set_bodyType_8pgqkl_k$(null);
          } else {
            this_0.set_body_slfhxt_k$(body);
            // Inline function 'io.ktor.util.reflect.typeInfo' call
            var tmp_4 = getKClass(ByteArrayContent);
            // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
            var tmp_5;
            try {
              tmp_5 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
            } catch ($p) {
              var tmp_6;
              if ($p instanceof Error) {
                var _unused_var__etf5q3_0 = $p;
                tmp_6 = null;
              } else {
                throw $p;
              }
              tmp_5 = tmp_6;
            }
            var tmp$ret$11 = tmp_5;
            var tmp$ret$12 = TypeInfo.new_io_ktor_util_reflect_TypeInfo_x2ms91_k$(tmp_4, tmp$ret$11);
            this_0.set_bodyType_8pgqkl_k$(tmp$ret$12);
          }
        }
      } else {
        if (method.equals(Companion_getInstance_1().get_Get_18jsxf_k$())) {
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s = req.params_1.iterator_jk1svi_k$();
          while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
            var element = _iterator__ex2g4s.next_20eer_k$();
            if (element.get_type_wovaf7_k$().get_ordinal_ip24qg_k$() === 0) {
              this_0.get_url_18iuii_k$().get_parameters_cl4rkd_k$().append_rhug0a_k$(element.get_key_18j28a_k$(), ensureNotNull(element.get_value_j01efc_k$()));
            } else {
              throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$('Request Body is not supported in the GET method.');
            }
          }
        } else {
          // Inline function 'kotlin.collections.filter' call
          var tmp0_2 = req.params_1;
          // Inline function 'kotlin.collections.filterTo' call
          var destination = ArrayList.new_kotlin_collections_ArrayList_h94ppk_k$();
          var _iterator__ex2g4s_0 = tmp0_2.iterator_jk1svi_k$();
          while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
            var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
            if (element_0.get_type_wovaf7_k$().equals(Type_QUERY_getInstance())) {
              destination.add_utx5q5_k$(element_0);
            }
          }
          var queries = destination;
          // Inline function 'kotlin.collections.filter' call
          var tmp0_3 = req.params_1;
          // Inline function 'kotlin.collections.filterTo' call
          var destination_0 = ArrayList.new_kotlin_collections_ArrayList_h94ppk_k$();
          var _iterator__ex2g4s_1 = tmp0_3.iterator_jk1svi_k$();
          while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
            var element_1 = _iterator__ex2g4s_1.next_20eer_k$();
            if (element_1.get_type_wovaf7_k$().equals(Type_PARAM_getInstance())) {
              destination_0.add_utx5q5_k$(element_1);
            }
          }
          var params = destination_0;
          // Inline function 'kotlin.collections.filter' call
          var tmp0_4 = req.params_1;
          // Inline function 'kotlin.collections.filterTo' call
          var destination_1 = ArrayList.new_kotlin_collections_ArrayList_h94ppk_k$();
          var _iterator__ex2g4s_2 = tmp0_4.iterator_jk1svi_k$();
          while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
            var element_2 = _iterator__ex2g4s_2.next_20eer_k$();
            if (element_2.get_type_wovaf7_k$().equals(Type_FILE_getInstance())) {
              destination_1.add_utx5q5_k$(element_2);
            }
          }
          var files = destination_1;
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!queries.isEmpty_y1axqb_k$()) {
            // Inline function 'kotlin.collections.forEach' call
            var _iterator__ex2g4s_3 = queries.iterator_jk1svi_k$();
            while (_iterator__ex2g4s_3.hasNext_bitz1p_k$()) {
              var element_3 = _iterator__ex2g4s_3.next_20eer_k$();
              this_0.get_url_18iuii_k$().get_parameters_cl4rkd_k$().append_rhug0a_k$(element_3.get_key_18j28a_k$(), ensureNotNull(element_3.get_value_j01efc_k$()));
            }
          }
          var tmp_7;
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!params.isEmpty_y1axqb_k$()) {
            tmp_7 = true;
          } else {
            // Inline function 'kotlin.collections.isNotEmpty' call
            tmp_7 = !files.isEmpty_y1axqb_k$();
          }
          if (tmp_7) {
            if ($this.forceApplicationFormUrlEncoded_1) {
              // Inline function 'kotlin.collections.isNotEmpty' call
              if (!files.isEmpty_y1axqb_k$()) {
                throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$('ApplicationFormUrlEncoded cannot send files.');
              }
              contentType(this_0, Application_getInstance().get_FormUrlEncoded_vh57zg_k$());
              // Inline function 'io.ktor.http.Companion.build' call
              Companion_getInstance_0();
              // Inline function 'kotlin.apply' call
              var this_1 = ParametersBuilder();
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s_4 = params.iterator_jk1svi_k$();
              while (_iterator__ex2g4s_4.hasNext_bitz1p_k$()) {
                var element_4 = _iterator__ex2g4s_4.next_20eer_k$();
                this_1.append_rhug0a_k$(element_4.get_key_18j28a_k$(), ensureNotNull(element_4.get_value_j01efc_k$()));
              }
              var tmp$ret$35 = this_1.build_1k0s4u_k$();
              // Inline function 'io.ktor.client.request.setBody' call
              var body_0 = FormDataContent.new_io_ktor_client_request_forms_FormDataContent_nmay8h_k$(tmp$ret$35);
              if (body_0 == null) {
                this_0.set_body_slfhxt_k$(NullBody_getInstance());
                // Inline function 'io.ktor.util.reflect.typeInfo' call
                var tmp_8 = getKClass(FormDataContent);
                // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
                var tmp_9;
                try {
                  tmp_9 = createKType(getKClass(FormDataContent), arrayOf([]), false);
                } catch ($p) {
                  var tmp_10;
                  if ($p instanceof Error) {
                    var _unused_var__etf5q3_1 = $p;
                    tmp_10 = null;
                  } else {
                    throw $p;
                  }
                  tmp_9 = tmp_10;
                }
                var tmp$ret$36 = tmp_9;
                var tmp$ret$37 = TypeInfo.new_io_ktor_util_reflect_TypeInfo_x2ms91_k$(tmp_8, tmp$ret$36);
                this_0.set_bodyType_8pgqkl_k$(tmp$ret$37);
              } else {
                if (body_0 instanceof OutgoingContent) {
                  this_0.set_body_slfhxt_k$(body_0);
                  this_0.set_bodyType_8pgqkl_k$(null);
                } else {
                  this_0.set_body_slfhxt_k$(body_0);
                  // Inline function 'io.ktor.util.reflect.typeInfo' call
                  var tmp_11 = getKClass(FormDataContent);
                  // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
                  var tmp_12;
                  try {
                    tmp_12 = createKType(getKClass(FormDataContent), arrayOf([]), false);
                  } catch ($p) {
                    var tmp_13;
                    if ($p instanceof Error) {
                      var _unused_var__etf5q3_2 = $p;
                      tmp_13 = null;
                    } else {
                      throw $p;
                    }
                    tmp_12 = tmp_13;
                  }
                  var tmp$ret$38 = tmp_12;
                  var tmp$ret$39 = TypeInfo.new_io_ktor_util_reflect_TypeInfo_x2ms91_k$(tmp_11, tmp$ret$38);
                  this_0.set_bodyType_8pgqkl_k$(tmp$ret$39);
                }
              }
            } else {
              contentType(this_0, MultiPart_getInstance().get_FormData_mwpwuh_k$());
              // Inline function 'io.ktor.client.request.forms.formData' call
              // Inline function 'kotlin.apply' call
              var this_2 = FormBuilder.new_io_ktor_client_request_forms_FormBuilder_59xqtd_k$();
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s_5 = params.iterator_jk1svi_k$();
              while (_iterator__ex2g4s_5.hasNext_bitz1p_k$()) {
                var element_5 = _iterator__ex2g4s_5.next_20eer_k$();
                this_2.append$default_90frxg_k$(element_5.get_key_18j28a_k$(), ensureNotNull(element_5.get_value_j01efc_k$()));
              }
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s_6 = files.iterator_jk1svi_k$();
              while (_iterator__ex2g4s_6.hasNext_bitz1p_k$()) {
                var element_6 = _iterator__ex2g4s_6.next_20eer_k$();
                var tmp_14 = element_6.get_key_18j28a_k$();
                var tmp_15 = ensureNotNull(element_6.get_fileBody_r1xuyv_k$());
                // Inline function 'io.ktor.http.Companion.build' call
                Companion_getInstance();
                // Inline function 'kotlin.apply' call
                var this_3 = HeadersBuilder.new_io_ktor_http_HeadersBuilder_vn4wd3_k$();
                append(this_3, 'Content-Type', element_6.fileContentType_sakr3r_k$());
                this_3.append_rhug0a_k$('Content-Disposition', 'filename=' + element_6.get_fileName_r258mo_k$());
                var tmp$ret$45 = this_3.build_1k0s4u_k$();
                this_2.append_57lmty_k$(tmp_14, tmp_15, tmp$ret$45);
              }
              // Inline function 'kotlin.collections.toTypedArray' call
              var this_4 = this_2.build_3aenbz_k$();
              var tmp$ret$50 = copyToArray(this_4);
              var tmp$ret$51 = formData(tmp$ret$50.slice());
              // Inline function 'io.ktor.client.request.setBody' call
              var body_1 = MultiPartFormDataContent.new_io_ktor_client_request_forms_MultiPartFormDataContent_gpqq62_k$(tmp$ret$51);
              if (body_1 == null) {
                this_0.set_body_slfhxt_k$(NullBody_getInstance());
                // Inline function 'io.ktor.util.reflect.typeInfo' call
                var tmp_16 = getKClass(MultiPartFormDataContent);
                // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
                var tmp_17;
                try {
                  tmp_17 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                } catch ($p) {
                  var tmp_18;
                  if ($p instanceof Error) {
                    var _unused_var__etf5q3_3 = $p;
                    tmp_18 = null;
                  } else {
                    throw $p;
                  }
                  tmp_17 = tmp_18;
                }
                var tmp$ret$52 = tmp_17;
                var tmp$ret$53 = TypeInfo.new_io_ktor_util_reflect_TypeInfo_x2ms91_k$(tmp_16, tmp$ret$52);
                this_0.set_bodyType_8pgqkl_k$(tmp$ret$53);
              } else {
                if (body_1 instanceof OutgoingContent) {
                  this_0.set_body_slfhxt_k$(body_1);
                  this_0.set_bodyType_8pgqkl_k$(null);
                } else {
                  this_0.set_body_slfhxt_k$(body_1);
                  // Inline function 'io.ktor.util.reflect.typeInfo' call
                  var tmp_19 = getKClass(MultiPartFormDataContent);
                  // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
                  var tmp_20;
                  try {
                    tmp_20 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                  } catch ($p) {
                    var tmp_21;
                    if ($p instanceof Error) {
                      var _unused_var__etf5q3_4 = $p;
                      tmp_21 = null;
                    } else {
                      throw $p;
                    }
                    tmp_20 = tmp_21;
                  }
                  var tmp$ret$54 = tmp_20;
                  var tmp$ret$55 = TypeInfo.new_io_ktor_util_reflect_TypeInfo_x2ms91_k$(tmp_19, tmp$ret$54);
                  this_0.set_bodyType_8pgqkl_k$(tmp$ret$55);
                }
              }
            }
          }
        }
      }
      // Inline function 'io.ktor.client.request.request' call
      var tmp_22 = HttpStatement.new_io_ktor_client_statement_HttpStatement_qlb8xt_k$(this_0, tmp0).execute_a2emz4_k$($completion);
      if (tmp_22 === get_COROUTINE_SUSPENDED())
        tmp_22 = yield tmp_22;
      var tmp$ret$60 = tmp_22;
      var tmp_23 = tmp.from_h247jb_k$(tmp$ret$60, $completion);
      if (tmp_23 === get_COROUTINE_SUSPENDED())
        tmp_23 = yield tmp_23;
      tmp$ret$62 = tmp_23;
      break $l$block_0;
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        exception = e;
        throw e;
      } else {
        throw $p;
      }
    }
    finally {
      closeFinally(tmp0, exception);
    }
  }
  return tmp$ret$62;
}
function proceed($this, method, $completion) {
  return suspendOrReturn(/*#__NOINLINE__*/_generator_proceed__7fi2iu.bind(VOID, $this, method), $completion);
}
function canSendOnly($this, param) {
  if (param.get_type_wovaf7_k$().equals(Type_JSON_getInstance()))
    return true;
  var tmp0_subject = param.fileContentType_sakr3r_k$();
  return tmp0_subject.equals(Application_getInstance().get_Json_wo4ci9_k$()) ? true : tmp0_subject.equals(Image_getInstance().get_JPEG_wo3lip_k$()) ? true : tmp0_subject.equals(Image_getInstance().get_PNG_18jmu8_k$()) ? true : tmp0_subject.equals(Image_getInstance().get_GIF_18jtmt_k$()) ? true : tmp0_subject.equals(Video_getInstance().get_MPEG_wo5iha_k$()) ? true : tmp0_subject.equals(Video_getInstance().get_MP4_18jp14_k$()) ? true : tmp0_subject.equals(Video_getInstance().get_QuickTime_7v18bz_k$()) ? true : tmp0_subject.equals(ContentType.new_io_ktor_http_ContentType_8k9r4z_k$('video', 'webm')) ? true : false;
}
function HttpRequest$proceed$lambda($req) {
  return ($this$HttpClient) => {
    applySystemProxy($this$HttpClient);
    var tmp;
    if ($req.skipSSLValidation_1) {
      applySkipSSLValidation($this$HttpClient);
      tmp = Unit_getInstance();
    }
    $this$HttpClient.set_followRedirects_im56s4_k$($req.followRedirect_1);
    return Unit_getInstance();
  };
}
function HttpRequest$proceed$lambda_0($req) {
  return ($this$headers) => {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = $req.header_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var k = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var v = element.get_value_j01efc_k$();
      $this$headers.append_rhug0a_k$(k, v);
    }
    return Unit_getInstance();
  };
}
function HttpRequest$proceed$lambda_1($req) {
  return ($this$timeout) => {
    $this$timeout.set_requestTimeoutMillis_xyy1t6_k$($req.requestTimeoutMillis_1);
    $this$timeout.set_connectTimeoutMillis_lkrilr_k$($req.connectTimeoutMillis_1);
    $this$timeout.set_socketTimeoutMillis_wmp1zo_k$($req.socketTimeoutMillis_1);
    return Unit_getInstance();
  };
}
function *_generator_from__qou0de($this, response, $completion) {
  var tmp = response.get_status_jnf6d7_k$().get_value_j01efc_k$();
  var tmp_0 = toMap(response.get_headers_ef25jx_k$());
  // Inline function 'io.ktor.client.call.body' call
  var tmp_1 = response.get_call_wojxrb_k$();
  // Inline function 'io.ktor.util.reflect.typeInfo' call
  var tmp_2 = PrimitiveClasses_getInstance().get_byteArrayClass_57my8g_k$();
  // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
  var tmp_3;
  try {
    tmp_3 = createKType(PrimitiveClasses_getInstance().get_byteArrayClass_57my8g_k$(), arrayOf([]), false);
  } catch ($p) {
    var tmp_4;
    if ($p instanceof Error) {
      var _unused_var__etf5q3 = $p;
      tmp_4 = null;
    } else {
      throw $p;
    }
    tmp_3 = tmp_4;
  }
  var tmp$ret$0 = tmp_3;
  var tmp$ret$1 = TypeInfo.new_io_ktor_util_reflect_TypeInfo_x2ms91_k$(tmp_2, tmp$ret$0);
  var tmp_5 = tmp_1.bodyNullable_wn8z59_k$(tmp$ret$1, $completion);
  if (tmp_5 === get_COROUTINE_SUSPENDED())
    tmp_5 = yield tmp_5;
  var tmp_6 = tmp_5;
  var tmp$ret$2 = (!(tmp_6 == null) ? isByteArray(tmp_6) : false) ? tmp_6 : THROW_CCE();
  return HttpResponse.new_work_socialhub_khttpclient_HttpResponse_4p6sm6_k$(tmp, tmp_0, tmp$ret$2);
}
function HttpResponse$Companion$mapper$lambda($this$Json) {
  $this$Json.set_ignoreUnknownKeys_pzvtne_k$(true);
  return Unit_getInstance();
}
var Companion_instance_0;
function Companion_getInstance_3() {
  if (Companion_instance_0 === VOID)
    Companion_0.new_work_socialhub_khttpclient_HttpResponse_Companion_mwtiyp_k$();
  return Companion_instance_0;
}
function HttpResponse$stringBody$delegate$lambda(this$0) {
  return () => decodeToString(this$0.body_1);
}
function HttpResponse$_get_stringBody_$ref_nmyr7m() {
  return (p0) => p0.get_stringBody_otz1zw_k$();
}
function applySystemProxy(_this__u8e3s4) {
  var proxyUrl = proxyUrlFromEnv();
  // Inline function 'kotlin.text.isNullOrBlank' call
  if (!(proxyUrl == null || isBlank(proxyUrl))) {
    _this__u8e3s4.engine_24osvz_k$(applySystemProxy$lambda(proxyUrl));
  }
}
function applySystemProxy$lambda($proxyUrl) {
  return ($this$engine) => {
    $this$engine.set_proxy_6o7pub_k$(ProxyBuilder_getInstance().http_koe7wm_k$(Url($proxyUrl)));
    return Unit_getInstance();
  };
}
function applySkipSSLValidation(_this__u8e3s4) {
  throw IllegalStateException.new_kotlin_IllegalStateException_8zpm09_k$('Skip SSL Validation is not supported on JS target.');
}
function proxyUrlFromEnv() {
  return null;
}
//region block: post-declaration
initMetadataForClass(Type, 'Type');
initMetadataForCompanion(Companion);
initMetadataForClass(HttpParameter, 'HttpParameter');
initMetadataForClass(HttpRequest, 'HttpRequest', HttpRequest.new_work_socialhub_khttpclient_HttpRequest_9usdg4_k$, VOID, VOID, [0, 1]);
initMetadataForCompanion(Companion_0, VOID, VOID, [1]);
initMetadataForClass(HttpResponse, 'HttpResponse');
//endregion
//region block: exports
export {
  HttpRequest as HttpRequest3gg7t5d9j2hk9,
};
//endregion

//# sourceMappingURL=khttpclient.mjs.map
