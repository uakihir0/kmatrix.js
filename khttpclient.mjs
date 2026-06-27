import {
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  Enum3alwj03lh1n41 as Enum,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
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
  closeFinally1sadm0w9gt3u4 as closeFinally,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  PrimitiveClasses_getInstance143761yrsca9q as PrimitiveClasses_getInstance,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isByteArray4nnzfn1x4o3w as isByteArray,
  decodeToString1x4faah2liw2p as decodeToString,
  constructCallableReference23y65rf941mch as constructCallableReference,
  lazy2hsh8ze7j6ikd as lazy,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef3hckxc0xueiaj as getPropertyCallableRef,
  isBlank1dvkhjjvox3p0 as isBlank,
} from './kotlin-kotlin-stdlib.mjs';
import { toByteArray1i3ns5jnoqlv6 as toByteArray } from './ktor-ktor-io.mjs';
import {
  Text_getInstancecnzpw4phsgym as Text_getInstance,
  Image_getInstance2xqhwmysw0llt as Image_getInstance,
  Video_getInstance26ibngctwhrg7 as Video_getInstance,
  ContentType1svlpabm9v7iz as ContentType,
  Application_getInstance17ubdrb0i0ohu as Application_getInstance,
  URLBuilder1nlnzfhn643pn as URLBuilder,
  takeFromkqlcz7c6dx2r as takeFrom,
  MultiPart_getInstance1k6b6wx1k1sjr as MultiPart_getInstance,
  contentType1lwcfjsjo0z8g as contentType,
  Companion_getInstance37paccmlttr9s as Companion_getInstance,
  HeadersBuilder3h7sn3kkvu98m as HeadersBuilder,
  append2z8giuo6jcxrf as append,
  OutgoingContent3t2ohmyam9o76 as OutgoingContent,
  NullBody_instanceyfq32eqie90j as NullBody_instance,
  Companion_getInstance2z7k6aavckkrm as Companion_getInstance_0,
  ParametersBuilder1ry9ntvvg567r as ParametersBuilder,
  Companion_getInstance1pptfj8vjmgsz as Companion_getInstance_1,
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
  ProxyBuilder_instance368ierra1kpcs as ProxyBuilder_instance,
} from './ktor-ktor-client-core.mjs';
import {
  TypeInfo2nbxsuf4v8os2 as TypeInfo,
  toMap1agg4casweo9p as toMap,
} from './ktor-ktor-utils.mjs';
import { Jsonsmkyu9xjl7fv as Json } from './kotlinx-serialization-kotlinx-serialization-json.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class Type extends Enum {}
class Companion {
  p3w(key, value) {
    return new HttpParameter(Type_QUERY_getInstance(), key, value);
  }
  q3w(key, fileName, fileBody) {
    return new HttpParameter(Type_FILE_getInstance(), key, null, fileName, fileBody);
  }
  r3w(json) {
    return new HttpParameter(Type_JSON_getInstance(), 'json', null, 'file.json', toByteArray(json));
  }
}
class HttpParameter {
  constructor(type, key, value, fileName, fileBody) {
    value = value === VOID ? null : value;
    fileName = fileName === VOID ? null : fileName;
    fileBody = fileBody === VOID ? null : fileBody;
    this.s3w_1 = type;
    this.t3w_1 = key;
    this.u3w_1 = value;
    this.v3w_1 = fileName;
    this.w3w_1 = fileBody;
  }
  x3w() {
    var tmp0_safe_receiver = this.v3w_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : split(tmp0_safe_receiver, ['.']);
    return tmp1_safe_receiver == null ? null : lastOrNull(tmp1_safe_receiver);
  }
  y3w() {
    switch (this.x3w()) {
      case 'txt':
        return Text_getInstance().q2s_1;
      case 'html':
        return Text_getInstance().t2s_1;
      case 'css':
        return Text_getInstance().r2s_1;
      case 'csv':
        return Text_getInstance().s2s_1;
      case 'jpg':
      case 'jpeg':
        return Image_getInstance().y2r_1;
      case 'png':
        return Image_getInstance().a2s_1;
      case 'gif':
        return Image_getInstance().v2r_1;
      case 'svg':
        return Image_getInstance().b2s_1;
      case 'mpeg':
        return Video_getInstance().a2t_1;
      case 'mp4':
        return Video_getInstance().b2t_1;
      case 'mov':
        return Video_getInstance().d2t_1;
      case 'webm':
        return ContentType.n2q('video', 'webm');
      case 'json':
        return Application_getInstance().v2q_1;
      case 'xml':
        return Application_getInstance().b2r_1;
      case 'zip':
        return Application_getInstance().e2r_1;
      case 'pdf':
        return Application_getInstance().h2r_1;
    }
    return Application_getInstance().y2q_1;
  }
}
class HttpRequest {
  constructor() {
    this.z3w_1 = 'https';
    this.a3x_1 = null;
    this.b3x_1 = null;
    this.c3x_1 = null;
    this.d3x_1 = null;
    this.e3x_1 = null;
    this.f3x_1 = 'kHttpClient/1.0';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.g3x_1 = ArrayList.p2();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.h3x_1 = LinkedHashMap.y4();
    this.i3x_1 = false;
    this.j3x_1 = false;
    this.k3x_1 = true;
    this.l3x_1 = false;
    this.m3x_1 = null;
    this.n3x_1 = null;
    this.o3x_1 = null;
  }
  r3x(url) {
    // Inline function 'kotlin.also' call
    this.d3x_1 = url;
    return this;
  }
  s3x(accept) {
    // Inline function 'kotlin.also' call
    this.e3x_1 = accept;
    return this;
  }
  t3x(key, value) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.set' call
    this.h3x_1.z3(key, value);
    return this;
  }
  u3x(key, value) {
    // Inline function 'kotlin.also' call
    this.g3x_1.d2(Companion_instance.p3w(key, toString(value)));
    return this;
  }
  q3w(key, fileName, fileBody) {
    // Inline function 'kotlin.also' call
    this.g3x_1.d2(Companion_instance.q3w(key, fileName, fileBody));
    return this;
  }
  r3w(json) {
    // Inline function 'kotlin.also' call
    this.g3x_1.d2(Companion_instance.r3w(json));
    return this;
  }
  *v3x($completion) {
    return yield* /*#__NOINLINE__*/proceed(this, Companion_getInstance_1().k2y_1, $completion);
  }
  *w3x($completion) {
    return yield* /*#__NOINLINE__*/proceed(this, Companion_getInstance_1().l2y_1, $completion);
  }
  *x3x($completion) {
    return yield* /*#__NOINLINE__*/proceed(this, Companion_getInstance_1().m2y_1, $completion);
  }
  *y3x($completion) {
    return yield* /*#__NOINLINE__*/proceed(this, Companion_getInstance_1().o2y_1, $completion);
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.p3x_1 = Json(VOID, HttpResponse$Companion$mapper$lambda);
  }
  *q3x(response, $completion) {
    var tmp = response.s3g().h31_1;
    var tmp_0 = toMap(response.j2y());
    // Inline function 'io.ktor.client.call.body' call
    var tmp_1 = response.j3g();
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_2 = PrimitiveClasses_getInstance().of();
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_3;
    try {
      tmp_3 = createKType(PrimitiveClasses_getInstance().of(), arrayOf([]), false);
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
    var tmp$ret$2 = tmp_3;
    var tmp$ret$1 = new TypeInfo(tmp_2, tmp$ret$2);
    var tmp_5 = yield* tmp_1.g3g(tmp$ret$1, $completion);
    var tmp$ret$0 = (!(tmp_5 == null) ? isByteArray(tmp_5) : false) ? tmp_5 : THROW_CCE();
    return new HttpResponse(tmp, tmp_0, tmp$ret$0);
  }
}
class HttpResponse {
  constructor(status, headers, body) {
    Companion_getInstance_3();
    this.z3x_1 = status;
    this.a3y_1 = headers;
    this.b3y_1 = body;
    var tmp = this;
    tmp.c3y_1 = lazy(HttpResponse$stringBody$delegate$lambda(this));
  }
  d3y() {
    var tmp0 = this.c3y_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('stringBody', 1, tmp, HttpResponse$_get_stringBody_$ref_nmyr7m(), null);
    return tmp0.w2();
  }
}
//endregion
var Type_QUERY_instance;
var Type_PARAM_instance;
var Type_FILE_instance;
var Type_JSON_instance;
var Type_entriesInitialized;
function Type_initEntries() {
  if (Type_entriesInitialized)
    return Unit_instance;
  Type_entriesInitialized = true;
  Type_QUERY_instance = new Type('QUERY', 0);
  Type_PARAM_instance = new Type('PARAM', 1);
  Type_FILE_instance = new Type('FILE', 2);
  Type_JSON_instance = new Type('JSON', 3);
}
var Companion_instance;
function Companion_getInstance_2() {
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
function *proceed($this, method, $completion) {
  var req = $this;
  var tmp0 = HttpClient(HttpRequest$proceed$lambda(req));
  var tmp$ret$0;
  $l$block_0: {
    // Inline function 'kotlin.use' call
    var exception = null;
    try {
      var tmp0_safe_receiver = $this.e3x_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.collections.set' call
        $this.h3x_1.z3('Accept', tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $this.f3x_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        var tmp0_0 = $this.h3x_1;
        // Inline function 'kotlin.collections.set' call
        var key = 'User-Agent';
        tmp0_0.z3(key, tmp1_safe_receiver);
      }
      var tmp = Companion_getInstance_3();
      // Inline function 'io.ktor.client.request.request' call
      // Inline function 'kotlin.apply' call
      var this_0 = new HttpRequestBuilder();
      this_0.l3f_1 = method;
      if (!(req.d3x_1 == null)) {
        // Inline function 'kotlin.checkNotNull' call
        var tmp0_1 = req.d3x_1;
        var tmp$ret$12;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          if (tmp0_1 == null) {
            var message = 'Required value was null.';
            throw IllegalStateException.o(toString(message));
          } else {
            tmp$ret$12 = tmp0_1;
            break $l$block;
          }
        }
        var tmp_0 = tmp$ret$12;
        takeFrom(this_0.k3f_1, URLBuilder(tmp_0));
      } else {
        url(this_0, req.z3w_1, req.a3x_1, req.c3x_1, req.b3x_1);
      }
      headers(this_0, HttpRequest$proceed$lambda_0(req));
      timeout(this_0, HttpRequest$proceed$lambda_1(req));
      if (!$this.i3x_1 && !$this.j3x_1 && req.g3x_1.g2() === 1 && canSendOnly($this, first(req.g3x_1))) {
        var param = first(req.g3x_1);
        // Inline function 'io.ktor.client.request.setBody' call
        var body = new ByteArrayContent(ensureNotNull(param.w3w_1), param.y3w());
        if (body == null) {
          this_0.n3f_1 = NullBody_instance;
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
          var tmp$ret$16 = tmp_2;
          var tmp$ret$15 = new TypeInfo(tmp_1, tmp$ret$16);
          this_0.e3j(tmp$ret$15);
        } else {
          if (body instanceof OutgoingContent) {
            this_0.n3f_1 = body;
            this_0.e3j(null);
          } else {
            this_0.n3f_1 = body;
            // Inline function 'io.ktor.util.reflect.typeInfo' call
            var tmp_4 = getKClass(ByteArrayContent);
            // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
            var tmp_5;
            try {
              tmp_5 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
            } catch ($p_0) {
              var tmp_6;
              if ($p_0 instanceof Error) {
                var _unused_var__etf5q3_0 = $p_0;
                tmp_6 = null;
              } else {
                throw $p_0;
              }
              tmp_5 = tmp_6;
            }
            var tmp$ret$18 = tmp_5;
            var tmp$ret$17 = new TypeInfo(tmp_4, tmp$ret$18);
            this_0.e3j(tmp$ret$17);
          }
        }
      } else {
        if (method.equals(Companion_getInstance_1().k2y_1)) {
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s = req.g3x_1.l1();
          while (_iterator__ex2g4s.m1()) {
            var element = _iterator__ex2g4s.n1();
            if (element.s3w_1.s1_1 === 0) {
              this_0.k3f_1.w31_1.j2l(element.t3w_1, ensureNotNull(element.u3w_1));
            } else {
              throw IllegalStateException.o('Request Body is not supported in the GET method.');
            }
          }
        } else {
          // Inline function 'kotlin.collections.filter' call
          var tmp0_2 = req.g3x_1;
          // Inline function 'kotlin.collections.filterTo' call
          var destination = ArrayList.p2();
          var _iterator__ex2g4s_0 = tmp0_2.l1();
          while (_iterator__ex2g4s_0.m1()) {
            var element_0 = _iterator__ex2g4s_0.n1();
            if (element_0.s3w_1.equals(Type_QUERY_getInstance())) {
              destination.d2(element_0);
            }
          }
          var queries = destination;
          // Inline function 'kotlin.collections.filter' call
          var tmp0_3 = req.g3x_1;
          // Inline function 'kotlin.collections.filterTo' call
          var destination_0 = ArrayList.p2();
          var _iterator__ex2g4s_1 = tmp0_3.l1();
          while (_iterator__ex2g4s_1.m1()) {
            var element_1 = _iterator__ex2g4s_1.n1();
            if (element_1.s3w_1.equals(Type_PARAM_getInstance())) {
              destination_0.d2(element_1);
            }
          }
          var params = destination_0;
          // Inline function 'kotlin.collections.filter' call
          var tmp0_4 = req.g3x_1;
          // Inline function 'kotlin.collections.filterTo' call
          var destination_1 = ArrayList.p2();
          var _iterator__ex2g4s_2 = tmp0_4.l1();
          while (_iterator__ex2g4s_2.m1()) {
            var element_2 = _iterator__ex2g4s_2.n1();
            if (element_2.s3w_1.equals(Type_FILE_getInstance())) {
              destination_1.d2(element_2);
            }
          }
          var files = destination_1;
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!queries.j1()) {
            // Inline function 'kotlin.collections.forEach' call
            var _iterator__ex2g4s_3 = queries.l1();
            while (_iterator__ex2g4s_3.m1()) {
              var element_3 = _iterator__ex2g4s_3.n1();
              this_0.k3f_1.w31_1.j2l(element_3.t3w_1, ensureNotNull(element_3.u3w_1));
            }
          }
          var tmp_7;
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!params.j1()) {
            tmp_7 = true;
          } else {
            // Inline function 'kotlin.collections.isNotEmpty' call
            tmp_7 = !files.j1();
          }
          if (tmp_7) {
            if ($this.j3x_1) {
              // Inline function 'kotlin.collections.isNotEmpty' call
              if (!files.j1()) {
                throw IllegalStateException.o('ApplicationFormUrlEncoded cannot send files.');
              }
              contentType(this_0, Application_getInstance().g2r_1);
              // Inline function 'io.ktor.http.Companion.build' call
              Companion_getInstance_0();
              // Inline function 'kotlin.apply' call
              var this_1 = ParametersBuilder();
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s_4 = params.l1();
              while (_iterator__ex2g4s_4.m1()) {
                var element_4 = _iterator__ex2g4s_4.n1();
                this_1.j2l(element_4.t3w_1, ensureNotNull(element_4.u3w_1));
              }
              var tmp$ret$36 = this_1.l2t();
              // Inline function 'io.ktor.client.request.setBody' call
              var body_0 = new FormDataContent(tmp$ret$36);
              if (body_0 == null) {
                this_0.n3f_1 = NullBody_instance;
                // Inline function 'io.ktor.util.reflect.typeInfo' call
                var tmp_8 = getKClass(FormDataContent);
                // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
                var tmp_9;
                try {
                  tmp_9 = createKType(getKClass(FormDataContent), arrayOf([]), false);
                } catch ($p_1) {
                  var tmp_10;
                  if ($p_1 instanceof Error) {
                    var _unused_var__etf5q3_1 = $p_1;
                    tmp_10 = null;
                  } else {
                    throw $p_1;
                  }
                  tmp_9 = tmp_10;
                }
                var tmp$ret$43 = tmp_9;
                var tmp$ret$42 = new TypeInfo(tmp_8, tmp$ret$43);
                this_0.e3j(tmp$ret$42);
              } else {
                if (body_0 instanceof OutgoingContent) {
                  this_0.n3f_1 = body_0;
                  this_0.e3j(null);
                } else {
                  this_0.n3f_1 = body_0;
                  // Inline function 'io.ktor.util.reflect.typeInfo' call
                  var tmp_11 = getKClass(FormDataContent);
                  // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
                  var tmp_12;
                  try {
                    tmp_12 = createKType(getKClass(FormDataContent), arrayOf([]), false);
                  } catch ($p_2) {
                    var tmp_13;
                    if ($p_2 instanceof Error) {
                      var _unused_var__etf5q3_2 = $p_2;
                      tmp_13 = null;
                    } else {
                      throw $p_2;
                    }
                    tmp_12 = tmp_13;
                  }
                  var tmp$ret$45 = tmp_12;
                  var tmp$ret$44 = new TypeInfo(tmp_11, tmp$ret$45);
                  this_0.e3j(tmp$ret$44);
                }
              }
            } else {
              contentType(this_0, MultiPart_getInstance().k2s_1);
              // Inline function 'io.ktor.client.request.forms.formData' call
              // Inline function 'kotlin.apply' call
              var this_2 = new FormBuilder();
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s_5 = params.l1();
              while (_iterator__ex2g4s_5.m1()) {
                var element_5 = _iterator__ex2g4s_5.n1();
                this_2.r3t(element_5.t3w_1, ensureNotNull(element_5.u3w_1));
              }
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s_6 = files.l1();
              while (_iterator__ex2g4s_6.m1()) {
                var element_6 = _iterator__ex2g4s_6.n1();
                var tmp_14 = ensureNotNull(element_6.w3w_1);
                // Inline function 'io.ktor.http.Companion.build' call
                Companion_getInstance();
                // Inline function 'kotlin.apply' call
                var this_3 = new HeadersBuilder();
                append(this_3, 'Content-Type', element_6.y3w());
                this_3.j2l('Content-Disposition', 'filename=' + element_6.v3w_1);
                var tmp$ret$53 = this_3.l2t();
                this_2.s3t(element_6.t3w_1, tmp_14, tmp$ret$53);
              }
              // Inline function 'kotlin.collections.toTypedArray' call
              var this_4 = this_2.t3t();
              var tmp$ret$56 = copyToArray(this_4);
              var tmp$ret$46 = formData(tmp$ret$56.slice());
              // Inline function 'io.ktor.client.request.setBody' call
              var body_1 = new MultiPartFormDataContent(tmp$ret$46);
              if (body_1 == null) {
                this_0.n3f_1 = NullBody_instance;
                // Inline function 'io.ktor.util.reflect.typeInfo' call
                var tmp_15 = getKClass(MultiPartFormDataContent);
                // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
                var tmp_16;
                try {
                  tmp_16 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                } catch ($p_3) {
                  var tmp_17;
                  if ($p_3 instanceof Error) {
                    var _unused_var__etf5q3_3 = $p_3;
                    tmp_17 = null;
                  } else {
                    throw $p_3;
                  }
                  tmp_16 = tmp_17;
                }
                var tmp$ret$59 = tmp_16;
                var tmp$ret$58 = new TypeInfo(tmp_15, tmp$ret$59);
                this_0.e3j(tmp$ret$58);
              } else {
                if (body_1 instanceof OutgoingContent) {
                  this_0.n3f_1 = body_1;
                  this_0.e3j(null);
                } else {
                  this_0.n3f_1 = body_1;
                  // Inline function 'io.ktor.util.reflect.typeInfo' call
                  var tmp_18 = getKClass(MultiPartFormDataContent);
                  // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
                  var tmp_19;
                  try {
                    tmp_19 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                  } catch ($p_4) {
                    var tmp_20;
                    if ($p_4 instanceof Error) {
                      var _unused_var__etf5q3_4 = $p_4;
                      tmp_20 = null;
                    } else {
                      throw $p_4;
                    }
                    tmp_19 = tmp_20;
                  }
                  var tmp$ret$61 = tmp_19;
                  var tmp$ret$60 = new TypeInfo(tmp_18, tmp$ret$61);
                  this_0.e3j(tmp$ret$60);
                }
              }
            }
          }
        }
      }
      // Inline function 'io.ktor.client.request.request' call
      var tmp$ret$8 = yield* (new HttpStatement(this_0, tmp0)).c3v($completion);
      tmp$ret$0 = yield* tmp.q3x(tmp$ret$8, $completion);
      break $l$block_0;
    } catch ($p_5) {
      if ($p_5 instanceof Error) {
        var e = $p_5;
        exception = e;
        throw e;
      } else {
        throw $p_5;
      }
    }
    finally {
      closeFinally(tmp0, exception);
    }
  }
  return tmp$ret$0;
}
function canSendOnly($this, param) {
  if (param.s3w_1.equals(Type_JSON_getInstance()))
    return true;
  var tmp0_subject = param.y3w();
  return tmp0_subject.equals(Application_getInstance().v2q_1) ? true : tmp0_subject.equals(Image_getInstance().y2r_1) ? true : tmp0_subject.equals(Image_getInstance().a2s_1) ? true : tmp0_subject.equals(Image_getInstance().v2r_1) ? true : tmp0_subject.equals(Video_getInstance().a2t_1) ? true : tmp0_subject.equals(Video_getInstance().b2t_1) ? true : tmp0_subject.equals(Video_getInstance().d2t_1) ? true : tmp0_subject.equals(ContentType.n2q('video', 'webm')) ? true : false;
}
function HttpRequest$proceed$lambda($req) {
  return ($this$HttpClient) => {
    applySystemProxy($this$HttpClient);
    var tmp;
    if ($req.l3x_1) {
      applySkipSSLValidation($this$HttpClient);
      tmp = Unit_instance;
    }
    $this$HttpClient.w3e_1 = $req.k3x_1;
    return Unit_instance;
  };
}
function HttpRequest$proceed$lambda_0($req) {
  return ($this$headers) => {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = $req.h3x_1.u2().l1();
    while (_iterator__ex2g4s.m1()) {
      var element = _iterator__ex2g4s.n1();
      // Inline function 'kotlin.collections.component1' call
      var k = element.v2();
      // Inline function 'kotlin.collections.component2' call
      var v = element.w2();
      $this$headers.j2l(k, v);
    }
    return Unit_instance;
  };
}
function HttpRequest$proceed$lambda_1($req) {
  return ($this$timeout) => {
    $this$timeout.z3o($req.m3x_1);
    $this$timeout.a3p($req.n3x_1);
    $this$timeout.b3p($req.o3x_1);
    return Unit_instance;
  };
}
function HttpResponse$Companion$mapper$lambda($this$Json) {
  $this$Json.c1z_1 = true;
  return Unit_instance;
}
var Companion_instance_0;
function Companion_getInstance_3() {
  if (Companion_instance_0 === VOID)
    new Companion_0();
  return Companion_instance_0;
}
function HttpResponse$stringBody$delegate$lambda(this$0) {
  return () => decodeToString(this$0.b3y_1);
}
function HttpResponse$_get_stringBody_$ref_nmyr7m() {
  return constructCallableReference((p0) => p0.d3y(), 1, 0, 32);
}
function applySystemProxy(_this__u8e3s4) {
  var proxyUrl = proxyUrlFromEnv();
  // Inline function 'kotlin.text.isNullOrBlank' call
  if (!(proxyUrl == null || isBlank(proxyUrl))) {
    _this__u8e3s4.t3f(applySystemProxy$lambda(proxyUrl));
  }
}
function applySystemProxy$lambda($proxyUrl) {
  return ($this$engine) => {
    $this$engine.p3j_1 = ProxyBuilder_instance.o3w(Url($proxyUrl));
    return Unit_instance;
  };
}
function applySkipSSLValidation(_this__u8e3s4) {
  throw IllegalStateException.o('Skip SSL Validation is not supported on JS target.');
}
function proxyUrlFromEnv() {
  return null;
}
//region block: post-declaration
initMetadataForClass(Type, 'Type');
initMetadataForCompanion(Companion);
initMetadataForClass(HttpParameter, 'HttpParameter');
initMetadataForClass(HttpRequest, 'HttpRequest', HttpRequest, VOID, VOID, [0, 1]);
initMetadataForCompanion(Companion_0, VOID, VOID, [1]);
initMetadataForClass(HttpResponse, 'HttpResponse');
//endregion
//region block: init
Companion_instance = new Companion();
//endregion
//region block: exports
export {
  HttpRequest as HttpRequest3gg7t5d9j2hk9,
};
//endregion

//# sourceMappingURL=khttpclient.mjs.map
