import { MatrixFactory_instance3bn0iedl8p1bn as MatrixFactory_instance } from './kmatrix-core.mjs';
import {
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
} from './kotlin-kotlin-stdlib.mjs';
import { MatrixStreamFactory_instance2xjsc51m3shti as MatrixStreamFactory_instance } from './kmatrix-stream.mjs';
import './ktor-ktor-client-core.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class KmatrixFactory {
  k41(uri, accessToken) {
    return MatrixFactory_instance.instance(uri, accessToken);
  }
  instance(uri, accessToken, $super) {
    accessToken = accessToken === VOID ? '' : accessToken;
    return $super === VOID ? this.k41(uri, accessToken) : $super.k41.call(this, uri, accessToken);
  }
  j5i(uri, accessToken) {
    return MatrixStreamFactory_instance.instance(uri, accessToken);
  }
  stream(uri, accessToken, $super) {
    accessToken = accessToken === VOID ? '' : accessToken;
    return $super === VOID ? this.j5i(uri, accessToken) : $super.j5i.call(this, uri, accessToken);
  }
}
//endregion
var KmatrixFactory_instance;
function KmatrixFactory_getInstance() {
  return KmatrixFactory_instance;
}
//region block: post-declaration
initMetadataForObject(KmatrixFactory, 'KmatrixFactory');
//endregion
//region block: init
KmatrixFactory_instance = new KmatrixFactory();
//endregion
//region block: exports
KmatrixFactory.getInstance = KmatrixFactory_getInstance;
export {
  KmatrixFactory as KmatrixFactory,
};
//endregion

//# sourceMappingURL=kmatrix-all.mjs.map
