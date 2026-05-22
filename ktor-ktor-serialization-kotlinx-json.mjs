import {
  VOID3gxj6tk5isa35 as VOID,
  Unit_instancev9v8hjid95df as Unit_instance,
} from './kotlin-kotlin-stdlib.mjs';
import { Application_getInstance2wn6cl3kv21f0 as Application_getInstance } from './ktor-ktor-http.mjs';
import { serialization1fpeds7cruos4 as serialization } from './ktor-ktor-serialization-kotlinx.mjs';
import { Jsonsmkyu9xjl7fv as Json } from './kotlinx-serialization-kotlinx-serialization-json.mjs';
//region block: imports
//endregion
//region block: pre-declaration
//endregion
function get_DefaultJson() {
  _init_properties_JsonSupport_kt__yf438r();
  return DefaultJson;
}
var DefaultJson;
function json(_this__u8e3s4, json, contentType) {
  json = json === VOID ? get_DefaultJson() : json;
  contentType = contentType === VOID ? Application_getInstance().h2r_1 : contentType;
  _init_properties_JsonSupport_kt__yf438r();
  serialization(_this__u8e3s4, contentType, json);
}
function DefaultJson$lambda($this$Json) {
  _init_properties_JsonSupport_kt__yf438r();
  $this$Json.z1y_1 = true;
  $this$Json.c1z_1 = true;
  $this$Json.n1z_1 = true;
  $this$Json.o1z_1 = true;
  $this$Json.d1z_1 = false;
  $this$Json.p1z_1 = false;
  return Unit_instance;
}
var properties_initialized_JsonSupport_kt_9cgd93;
function _init_properties_JsonSupport_kt__yf438r() {
  if (!properties_initialized_JsonSupport_kt_9cgd93) {
    properties_initialized_JsonSupport_kt_9cgd93 = true;
    DefaultJson = Json(VOID, DefaultJson$lambda);
  }
}
//region block: exports
export {
  json as jsonu6qnfo3b405p,
};
//endregion

//# sourceMappingURL=ktor-ktor-serialization-kotlinx-json.mjs.map
