import {
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  createThis2j2avj17cvnv2 as createThis,
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class MatrixStream {}
class MatrixStreamFactory_0 {
  static new_work_socialhub_kmatrix_stream_MatrixStreamFactory_1dmgd2_k$($box) {
    var $this = createThis(this, $box);
    MatrixStreamFactory_instance = $this;
    return $this;
  }
  instance_ex8uqd_k$(uri, accessToken) {
    return MatrixStreamImpl.new_work_socialhub_kmatrix_stream_internal_MatrixStreamImpl_eqirjr_k$(uri, accessToken);
  }
  instance(uri, accessToken, $super) {
    accessToken = accessToken === VOID ? '' : accessToken;
    return $super === VOID ? this.instance_ex8uqd_k$(uri, accessToken) : $super.instance_ex8uqd_k$.call(this, uri, accessToken);
  }
}
class MatrixStreamImpl {
  static new_work_socialhub_kmatrix_stream_internal_MatrixStreamImpl_eqirjr_k$(uri, accessToken, $box) {
    var $this = createThis(this, $box);
    $this.uri_2 = uri;
    $this.accessToken_2 = accessToken;
    return $this;
  }
  uri() {
    return this.uri_2;
  }
  accessToken() {
    return this.accessToken_2;
  }
}
//endregion
var MatrixStreamFactory_instance;
function MatrixStreamFactory_getInstance() {
  if (MatrixStreamFactory_instance === VOID)
    MatrixStreamFactory_0.new_work_socialhub_kmatrix_stream_MatrixStreamFactory_1dmgd2_k$();
  return MatrixStreamFactory_instance;
}
function _get_uri__e6i4dh($this) {
  return $this.uri_2;
}
function _get_accessToken__9zuu2s($this) {
  return $this.accessToken_2;
}
//region block: post-declaration
initMetadataForInterface(MatrixStream, 'MatrixStream');
initMetadataForObject(MatrixStreamFactory_0, 'MatrixStreamFactory');
initMetadataForClass(MatrixStreamImpl, 'MatrixStreamImpl', VOID, VOID, [MatrixStream]);
//endregion
//region block: exports
var MatrixStreamFactory = {getInstance: MatrixStreamFactory_getInstance};
export {
  MatrixStreamFactory as MatrixStreamFactory,
};
export {
  MatrixStreamFactory_getInstance as MatrixStreamFactory_getInstancec7y2ivw87h02,
};
//endregion

//# sourceMappingURL=kmatrix-stream.mjs.map
