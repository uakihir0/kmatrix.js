import {
  createThis2j2avj17cvnv2 as createThis,
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
} from './kotlin-kotlin-stdlib.mjs';
import { MatrixFactory_getInstance1dfc67ns81rhf as MatrixFactory_getInstance } from './kmatrix-core.mjs';
import { MatrixStreamFactory_getInstancec7y2ivw87h02 as MatrixStreamFactory_getInstance } from './kmatrix-stream.mjs';
import './ktor-ktor-client-core.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class KmatrixFactory_0 {
  static new_work_socialhub_kmatrix_KmatrixFactory_b1k7dq_k$($box) {
    var $this = createThis(this, $box);
    KmatrixFactory_instance = $this;
    return $this;
  }
  instance_ex8uqd_k$(uri, accessToken) {
    return MatrixFactory_getInstance().instance(uri, accessToken);
  }
  instance(uri, accessToken, $super) {
    accessToken = accessToken === VOID ? '' : accessToken;
    return $super === VOID ? this.instance_ex8uqd_k$(uri, accessToken) : $super.instance_ex8uqd_k$.call(this, uri, accessToken);
  }
  stream_jyaim8_k$(uri, accessToken) {
    return MatrixStreamFactory_getInstance().instance(uri, accessToken);
  }
  stream(uri, accessToken, $super) {
    accessToken = accessToken === VOID ? '' : accessToken;
    return $super === VOID ? this.stream_jyaim8_k$(uri, accessToken) : $super.stream_jyaim8_k$.call(this, uri, accessToken);
  }
}
//endregion
var KmatrixFactory_instance;
function KmatrixFactory_getInstance() {
  if (KmatrixFactory_instance === VOID)
    KmatrixFactory_0.new_work_socialhub_kmatrix_KmatrixFactory_b1k7dq_k$();
  return KmatrixFactory_instance;
}
//region block: post-declaration
initMetadataForObject(KmatrixFactory_0, 'KmatrixFactory');
//endregion
//region block: exports
var KmatrixFactory = {getInstance: KmatrixFactory_getInstance};
export {
  KmatrixFactory as KmatrixFactory,
};
//endregion

//# sourceMappingURL=kmatrix-all.mjs.map
