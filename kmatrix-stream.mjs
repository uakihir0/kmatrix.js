import {
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  LinkedHashMap1zhqxkxv3xnkl as LinkedHashMap,
  Unit_instance3vdlo4e4f5ggx as Unit_instance,
  ArrayList3it5z8td81qkl as ArrayList,
  joinToString1cxrrlmo0chqs as joinToString,
  PrimitiveClasses_getInstance143761yrsca9q as PrimitiveClasses_getInstance,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  closeFinally1sadm0w9gt3u4 as closeFinally,
  getKClass3t8tygqu4lcxf as getKClass,
  isInterface3d6p8outrmvmk as isInterface,
  fromInt2ii0rejb1w62w as fromInt,
  multiply2k9eolhnz1bjv as multiply,
  Exceptiondt2hlxn7j7vw as Exception,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  shiftLeft3tsh2sstjchzn as shiftLeft,
  Default_getInstance3u7accvuecmtb as Default_getInstance,
  add2suhfggl4zvkk as add,
  constructCallableReference23y65rf941mch as constructCallableReference,
  protoOf180f3jzyo7rfj as protoOf,
  RuntimeException1r3t0zl97011n as RuntimeException,
  captureStack1fzi4aczwc4hg as captureStack,
} from './kotlin-kotlin-stdlib.mjs';
import {
  flow3tazazxj2t7g4 as flow,
  delay3e2ei0hoxjoud as delay,
} from './kotlinx-coroutines-core.mjs';
import {
  encodeURLParameter1u3y18ab0iker as encodeURLParameter,
  Application_getInstance17ubdrb0i0ohu as Application_getInstance,
  Companion_getInstance1pptfj8vjmgsz as Companion_getInstance,
} from './ktor-ktor-http.mjs';
import {
  HttpClient3584jcajl7sef as HttpClient,
  HttpRequestBuilder15f2nnx9sjuv1 as HttpRequestBuilder,
  url2l6iw5ri21nxb as url,
  header3kx6g3yb4df1r as header,
  HttpStatement3zxb33q8lku as HttpStatement,
  get_HttpTimeout3mcrbvfnvmyx2 as get_HttpTimeout,
} from './ktor-ktor-client-core.mjs';
import { TypeInfo2nbxsuf4v8os2 as TypeInfo } from './ktor-ktor-utils.mjs';
import { SyncResponse9w6o34sib0b5 as SyncResponse } from './kmatrix-core.mjs';
import {
  serializer1i4e9ym37oxmo as serializer,
  KSerializerzf77vz1967fq as KSerializer,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import { IOException1wyutdmfe71nu as IOException } from './kotlinx-io-kotlinx-io-core.mjs';
import { jsonu6qnfo3b405p as json } from './ktor-ktor-serialization-kotlinx-json.mjs';
import { get_ContentNegotiationcp59ye9rorjc as get_ContentNegotiation } from './ktor-ktor-client-content-negotiation.mjs';
import { Jsonsmkyu9xjl7fv as Json } from './kotlinx-serialization-kotlinx-serialization-json.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class MatrixStream {}
function syncStreamWithTimeout(timeout, maxRetry, $super) {
  timeout = timeout === VOID ? 30000n : timeout;
  maxRetry = maxRetry === VOID ? 5 : maxRetry;
  return $super === VOID ? this.w5d(timeout, maxRetry) : $super.w5d.call(this, timeout, maxRetry);
}
function syncStreamWithRequest(request, maxRetry, $super) {
  maxRetry = maxRetry === VOID ? 5 : maxRetry;
  return $super === VOID ? this.x5d(request, maxRetry) : $super.x5d.call(this, request, maxRetry);
}
class MatrixStreamFactory {
  i3y(uri, accessToken) {
    return new MatrixStreamImpl(uri, accessToken);
  }
  instance(uri, accessToken, $super) {
    accessToken = accessToken === VOID ? '' : accessToken;
    return $super === VOID ? this.i3y(uri, accessToken) : $super.i3y.call(this, uri, accessToken);
  }
}
class MatrixStreamImpl$defaultConfig$1 {
  constructor() {
    this.k5e_1 = 30000n;
    this.l5e_1 = 5;
    this.m5e_1 = 1000n;
    this.n5e_1 = 30000n;
    this.o5e_1 = true;
  }
  p5e(_set____db54di) {
    this.k5e_1 = _set____db54di;
  }
  x4e() {
    return this.k5e_1;
  }
  q5e(_set____db54di) {
    this.l5e_1 = _set____db54di;
  }
  h5e() {
    return this.l5e_1;
  }
  i5e() {
    return this.m5e_1;
  }
  j5e() {
    return this.n5e_1;
  }
  e4b() {
    return this.o5e_1;
  }
}
class MatrixStreamImpl$copy$1 {
  constructor(this$0) {
    this.c5e_1 = this$0.b5e_1.k5e_1;
    this.d5e_1 = this$0.b5e_1.l5e_1;
    this.e5e_1 = this$0.b5e_1.m5e_1;
    this.f5e_1 = this$0.b5e_1.n5e_1;
    this.g5e_1 = this$0.b5e_1.o5e_1;
  }
  p5e(_set____db54di) {
    this.c5e_1 = _set____db54di;
  }
  x4e() {
    return this.c5e_1;
  }
  q5e(_set____db54di) {
    this.d5e_1 = _set____db54di;
  }
  h5e() {
    return this.d5e_1;
  }
  i5e() {
    return this.e5e_1;
  }
  j5e() {
    return this.f5e_1;
  }
  e4b() {
    return this.g5e_1;
  }
}
class MatrixStreamImpl {
  constructor(uri, accessToken) {
    this.y5d_1 = uri;
    this.z5d_1 = accessToken;
    var tmp = this;
    tmp.a5e_1 = Json(VOID, MatrixStreamImpl$json$lambda);
    var tmp_0 = this;
    tmp_0.b5e_1 = new MatrixStreamImpl$defaultConfig$1();
  }
  uri() {
    return this.y5d_1;
  }
  accessToken() {
    return this.z5d_1;
  }
  w5d(timeout, maxRetry) {
    var config = copy(this, this.b5e_1);
    if (timeout == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      config.p5e(timeout);
    }
    // Inline function 'kotlin.let' call
    config.q5e(maxRetry);
    return syncStreamInternal(this, null, config);
  }
  x5d(request, maxRetry) {
    var config = copy(this, this.b5e_1);
    // Inline function 'kotlin.let' call
    config.q5e(maxRetry);
    return syncStreamInternal(this, request, config);
  }
}
class MatrixStreamException extends RuntimeException {
  constructor(message, cause) {
    return new.target.u5e(message, cause);
  }
  static u5e(message, cause) {
    cause = cause === VOID ? null : cause;
    var $this = this.cd(message, cause);
    captureStack($this, $this.t5e_1);
    return $this;
  }
}
//endregion
var MatrixStreamFactory_instance;
function MatrixStreamFactory_getInstance() {
  return MatrixStreamFactory_instance;
}
function syncStreamInternal($this, request, config) {
  return flow(MatrixStreamImpl$syncStreamInternal$slambda(request, config, $this));
}
function *fetchSync($this, uri, accessToken, since, request, timeout, $completion) {
  // Inline function 'kotlin.collections.buildMap' call
  // Inline function 'kotlin.collections.buildMapInternal' call
  // Inline function 'kotlin.apply' call
  var this_0 = LinkedHashMap.y4();
  if (!(since == null)) {
    this_0.z3('since', since);
  }
  if (timeout > 0n) {
    this_0.z3('timeout', timeout.toString());
  }
  var tmp1_safe_receiver = request == null ? null : request.filter;
  if (tmp1_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    this_0.z3('filter', tmp1_safe_receiver);
  }
  var tmp3_safe_receiver = request == null ? null : request.fullState;
  if (tmp3_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    this_0.z3('full_state', tmp3_safe_receiver.toString());
  }
  var tmp5_safe_receiver = request == null ? null : request.setPresence;
  if (tmp5_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    this_0.z3('set_presence', tmp5_safe_receiver);
  }
  var queryParams = this_0.z4();
  var tmp;
  // Inline function 'kotlin.collections.isNotEmpty' call
  if (!queryParams.j1()) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList.n2(queryParams.g2());
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = queryParams.u2().l1();
    while (_iterator__ex2g4s.m1()) {
      var item = _iterator__ex2g4s.n1();
      var tmp$ret$14 = item.v2() + '=' + encodeURLParameter(item.w2());
      destination.d2(tmp$ret$14);
    }
    var params = joinToString(destination, '&');
    tmp = uri + '/_matrix/client/v3/sync?' + params;
  } else {
    tmp = uri + '/_matrix/client/v3/sync?timeout=' + timeout.toString();
  }
  var url_0 = tmp;
  var lastException = null;
  // Inline function 'kotlin.repeat' call
  var inductionVariable = 0;
  if (inductionVariable < 3)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      try {
        var tmp0 = HttpClient(MatrixStreamImpl$fetchSync$lambda(timeout, $this));
        var tmp$ret$17;
        $l$block: {
          // Inline function 'kotlin.use' call
          var exception = null;
          try {
            // Inline function 'io.ktor.client.request.get' call
            // Inline function 'io.ktor.client.request.get' call
            // Inline function 'kotlin.apply' call
            var this_1 = new HttpRequestBuilder();
            url(this_1, url_0);
            header(this_1, 'Authorization', 'Bearer ' + accessToken);
            header(this_1, 'Accept', Application_getInstance().u2q_1.toString());
            // Inline function 'io.ktor.client.request.get' call
            this_1.j3f_1 = Companion_getInstance().i2y_1;
            // Inline function 'io.ktor.client.request.request' call
            // Inline function 'io.ktor.client.call.body' call
            var tmp_0 = (yield* (new HttpStatement(this_1, tmp0)).a3v($completion)).h3g();
            // Inline function 'io.ktor.util.reflect.typeInfo' call
            var tmp_1 = PrimitiveClasses_getInstance().kf();
            // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
            var tmp_2;
            try {
              tmp_2 = createKType(PrimitiveClasses_getInstance().kf(), arrayOf([]), false);
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
            var tmp$ret$28 = tmp_2;
            var tmp$ret$27 = new TypeInfo(tmp_1, tmp$ret$28);
            var tmp_4 = yield* tmp_0.e3g(tmp$ret$27, $completion);
            tmp$ret$17 = (!(tmp_4 == null) ? typeof tmp_4 === 'string' : false) ? tmp_4 : THROW_CCE();
            break $l$block;
          } catch ($p_0) {
            if ($p_0 instanceof Error) {
              var e = $p_0;
              exception = e;
              throw e;
            } else {
              throw $p_0;
            }
          }
          finally {
            closeFinally(tmp0, exception);
          }
        }
        var body = tmp$ret$17;
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_2 = $this.a5e_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_3 = this_2.x1c();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_4 = serializer(this_3, createKType(getKClass(SyncResponse), arrayOf([]), false));
        var tmp$ret$30 = isInterface(this_4, KSerializer) ? this_4 : THROW_CCE();
        return this_2.k1d(tmp$ret$30, body);
      } catch ($p_1) {
        if ($p_1 instanceof Exception) {
          var e_0 = $p_1;
          lastException = e_0;
          if (e_0 instanceof IOException) {
            // Inline function 'kotlin.Long.times' call
            var other = index + 1 | 0;
            var tmp$ret$32 = multiply(1000n, fromInt(other));
            yield* delay(tmp$ret$32, $completion);
          } else {
            throw e_0;
          }
        } else {
          throw $p_1;
        }
      }
    }
     while (inductionVariable < 3);
  var tmp0_elvis_lhs = lastException;
  throw tmp0_elvis_lhs == null ? IOException.u2d('Unknown error fetching sync') : tmp0_elvis_lhs;
}
function copy($this, $receiver) {
  // Inline function 'kotlin.apply' call
  var this_0 = new MatrixStreamImpl$copy$1($this);
  this_0.c5e_1 = $receiver.x4e();
  this_0.d5e_1 = $receiver.h5e();
  this_0.e5e_1 = $receiver.i5e();
  this_0.f5e_1 = $receiver.j5e();
  this_0.g5e_1 = $receiver.e4b();
  return this_0;
}
function MatrixStreamImpl$json$lambda($this$Json) {
  $this$Json.c1z_1 = true;
  $this$Json.a1z_1 = true;
  return Unit_instance;
}
function MatrixStreamImpl$syncStreamInternal$slambda($request, $config, this$0) {
  return constructCallableReference(function *($this$flow, $completion) {
    var tmp0_safe_receiver = $request;
    var since = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.since;
    var retryCount = 0;
    while ($config.e4b()) {
      try {
        var response = yield* /*#__NOINLINE__*/fetchSync(this$0, this$0.y5d_1, this$0.z5d_1, since, $request, $config.x4e(), $completion);
        since = response.nextBatch;
        retryCount = 0;
        yield* $this$flow.g19(response, $completion);
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          if (retryCount >= $config.h5e()) {
            throw MatrixStreamException.u5e('Max retry count reached: ' + retryCount, e);
          }
          var tmp0 = multiply($config.i5e(), shiftLeft(1n, retryCount));
          // Inline function 'kotlin.comparisons.minOf' call
          var b = $config.j5e();
          var tmp$ret$0 = tmp0 <= b ? tmp0 : b;
          var backoff = add(tmp$ret$0, Default_getInstance().dl(1000n));
          yield* delay(backoff, $completion);
          retryCount = retryCount + 1 | 0;
        } else {
          throw $p;
        }
      }
    }
    return Unit_instance;
  }, 1);
}
function MatrixStreamImpl$fetchSync$lambda$lambda($timeout) {
  return ($this$install) => {
    $this$install.x3o(add($timeout, 5000n));
    return Unit_instance;
  };
}
function MatrixStreamImpl$fetchSync$lambda$lambda_0(this$0) {
  return ($this$install) => {
    json($this$install, this$0.a5e_1);
    return Unit_instance;
  };
}
function MatrixStreamImpl$fetchSync$lambda($timeout, this$0) {
  return ($this$HttpClient) => {
    var tmp = get_HttpTimeout();
    $this$HttpClient.s3f(tmp, MatrixStreamImpl$fetchSync$lambda$lambda($timeout));
    var tmp_0 = get_ContentNegotiation();
    $this$HttpClient.s3f(tmp_0, MatrixStreamImpl$fetchSync$lambda$lambda_0(this$0));
    return Unit_instance;
  };
}
//region block: post-declaration
initMetadataForInterface(MatrixStream, 'MatrixStream');
initMetadataForObject(MatrixStreamFactory, 'MatrixStreamFactory');
initMetadataForClass(MatrixStreamImpl$defaultConfig$1);
initMetadataForClass(MatrixStreamImpl$copy$1);
protoOf(MatrixStreamImpl).syncStreamWithTimeout = syncStreamWithTimeout;
protoOf(MatrixStreamImpl).syncStreamWithRequest = syncStreamWithRequest;
initMetadataForClass(MatrixStreamImpl, 'MatrixStreamImpl', VOID, VOID, [MatrixStream], [5]);
initMetadataForClass(MatrixStreamException, 'MatrixStreamException');
//endregion
//region block: init
MatrixStreamFactory_instance = new MatrixStreamFactory();
//endregion
//region block: exports
var MatrixStreamFactory_0 = {getInstance: MatrixStreamFactory_getInstance};
export {
  MatrixStreamFactory_0 as MatrixStreamFactory,
  MatrixStreamImpl as MatrixStreamImpl,
};
export {
  MatrixStreamFactory_instance as MatrixStreamFactory_instance3c7ri61dpc3l3,
};
//endregion

//# sourceMappingURL=kmatrix-stream.mjs.map
