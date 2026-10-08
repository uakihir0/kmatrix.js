import { MatrixFactory_instance3fm5toc5ucz1p as MatrixFactory_instance } from './kmatrix-core.mjs';
import {
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
} from './kotlin-kotlin-stdlib.mjs';
import { MatrixStreamFactory_instance3c7ri61dpc3l3 as MatrixStreamFactory_instance } from './kmatrix-stream.mjs';
import './ktor-ktor-client-core.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class KmatrixFactory {
  i3y(uri, accessToken) {
    return MatrixFactory_instance.instance(uri, accessToken);
  }
  instance(uri, accessToken, $super) {
    accessToken = accessToken === VOID ? '' : accessToken;
    return $super === VOID ? this.i3y(uri, accessToken) : $super.i3y.call(this, uri, accessToken);
  }
  v5e(uri, accessToken) {
    return MatrixStreamFactory_instance.instance(uri, accessToken);
  }
  stream(uri, accessToken, $super) {
    accessToken = accessToken === VOID ? '' : accessToken;
    return $super === VOID ? this.v5e(uri, accessToken) : $super.v5e.call(this, uri, accessToken);
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
var KmatrixFactory_0 = {getInstance: KmatrixFactory_getInstance};
export {
  KmatrixFactory_0 as KmatrixFactory,
};
//endregion

//# sourceMappingURL=kmatrix-all.mjs.map
