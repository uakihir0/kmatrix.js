import {
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  captureStack1fzi4aczwc4hg as captureStack,
  Exceptiondt2hlxn7j7vw as Exception,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  PrimitiveClasses_getInstanceds06xwqrwfdm as PrimitiveClasses_getInstance,
  LazyThreadSafetyMode_PUBLICATION_getInstance3qslfm3vqg6y3 as LazyThreadSafetyMode_PUBLICATION_getInstance,
  lazy1261dae0bgscp as lazy,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  Unit_instancev9v8hjid95df as Unit_instance,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  protoOf180f3jzyo7rfj as protoOf,
  createThis2j2avj17cvnv2 as createThis,
  throwUninitializedPropertyAccessException14fok093f3k3t as throwUninitializedPropertyAccessException,
  emptyMapr06gerzljqtm as emptyMap,
  equals2au1ep9vhcato as equals,
  getKClass3t8tygqu4lcxf as getKClass,
  toInt2q8uldh7sc951 as toInt,
  Companion_getInstancec1c8yhxwuclv as Companion_getInstance,
  toLongkk4waq8msp1k as toLong,
  defineProp3ur6h3slcvq4x as defineProp,
  isInterface3d6p8outrmvmk as isInterface,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  promisify1z0ncraq1ipzh as promisify,
  await2s6xyuld384ut as await_0,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  getBooleanHashCode1bbj3u6b3v0a7 as getBooleanHashCode,
  arrayOf1akklvh2at202 as arrayOf,
  createKType31ecntyyaay3k as createKType,
  toString30pk9tzaqopn as toString,
  toString1pkumu07cwy4m as toString_0,
  hashCodeq5arwsb9dgti as hashCode,
  StringBuildermazzzhj6kkai as StringBuilder,
  get_ONEazvfdh9ju3d4 as get_ONE,
  add2suhfggl4zvkk as add,
  Default_getInstance2tudkf86ziur0 as Default_getInstance,
  getBigIntHashCode294hi5bdhtj6e as getBigIntHashCode,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  contains3ue2qo8xhmpf1 as contains,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  createInvariantKTypeProjection3h5364czc0a8w as createInvariantKTypeProjection,
  getNumberHashCode2l4nbdcihl25f as getNumberHashCode,
  UnsupportedOperationException2tkumpmhredt3 as UnsupportedOperationException,
} from './kotlin-kotlin-stdlib.mjs';
import {
  StringSerializer_getInstance11v9md0a7d9yk as StringSerializer_getInstance,
  ReferenceArraySerializer3juj1vqolxkrs as ReferenceArraySerializer,
  PluginGeneratedSerialDescriptorqdzeg5asqhfg as PluginGeneratedSerialDescriptor,
  LongSerializer_getInstance2fim4572ialei as LongSerializer_getInstance,
  UnknownFieldExceptiona60e3a6v1xqo as UnknownFieldException,
  get_nullable197rfua9r7fsz as get_nullable,
  typeParametersSerializers2likxjr48tr7y as typeParametersSerializers,
  GeneratedSerializer1f7t7hssdd2ws as GeneratedSerializer,
  throwMissingFieldException2cmke0v3ynf14 as throwMissingFieldException,
  SerializableWithd2dap36updxd as SerializableWith,
  BooleanSerializer_getInstance2fsi2wywr82nt as BooleanSerializer_getInstance,
  LinkedHashMapSerializermaoj2nyji7op as LinkedHashMapSerializer,
  IntSerializer_getInstanceuhm8c1wku08l as IntSerializer_getInstance,
  ContextualSerializer1uidivg94sh5v as ContextualSerializer,
  DoubleSerializer_getInstance1wncowm4p8ecy as DoubleSerializer_getInstance,
  serializer1i4e9ym37oxmo as serializer,
  KSerializerzf77vz1967fq as KSerializer,
  SerializersModuleBuilderfxsfdohcdipc as SerializersModuleBuilder,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  JsonElementSerializer_getInstance78doow9tocv6 as JsonElementSerializer_getInstance,
  JsonElementf07o4p6p57al as JsonElement,
  Jsonsmkyu9xjl7fv as Json,
} from './kotlinx-serialization-kotlinx-serialization-json.mjs';
import { AnySerializer_getInstance32lcggytvsxb8 as AnySerializer_getInstance } from './kmpcommon.mjs';
import { CoroutineScopefcb5f5dwqcas as CoroutineScope } from './kotlinx-coroutines-core.mjs';
import { HttpRequest3gg7t5d9j2hk9 as HttpRequest } from './khttpclient.mjs';
import {
  encodeURLPathPart6y0hlser8v0t as encodeURLPathPart,
  encodeURLParameter1u3y18ab0iker as encodeURLParameter,
  Application_getInstance2wn6cl3kv21f0 as Application_getInstance,
} from './ktor-ktor-http.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
class Matrix {}
class MatrixException extends Exception {
  static e43(e) {
    var $this = this.jd(e);
    init_work_socialhub_kmatrix_MatrixException($this);
    return $this;
  }
  static f43(status, body) {
    var $this = this.hd('status code: ' + status + ', body: ' + body);
    init_work_socialhub_kmatrix_MatrixException($this);
    $this.b43_1 = status;
    $this.c43_1 = body;
    return $this;
  }
}
class MatrixFactory {
  g43(uri, accessToken) {
    return new MatrixImpl(uri, accessToken);
  }
  instance(uri, accessToken, $super) {
    accessToken = accessToken === VOID ? '' : accessToken;
    return $super === VOID ? this.g43(uri, accessToken) : $super.g43.call(this, uri, accessToken);
  }
}
class AccountDataResource {}
function *getAccountData$suspendBridge(request, $completion) {
}
function *setAccountData$suspendBridge(request, $completion) {
}
function *getRoomAccountData$suspendBridge(request, $completion) {
}
function *setRoomAccountData$suspendBridge(request, $completion) {
}
class AccountsResource {}
function *whoami$suspendBridge($completion) {
}
function *logout$suspendBridge($completion) {
}
function *logoutAll$suspendBridge($completion) {
}
function *register$suspendBridge(request, $completion) {
}
function *changePassword$suspendBridge(request, $completion) {
}
class CapabilitiesResource {}
function *getCapabilities$suspendBridge($completion) {
}
class DevicesResource {}
function *getDevices$suspendBridge($completion) {
}
function *getDevice$suspendBridge(deviceId, $completion) {
}
function *updateDevice$suspendBridge(request, $completion) {
}
function *deleteDevice$suspendBridge(request, $completion) {
}
class DirectoryResource {}
function *resolveAlias$suspendBridge(roomAlias, $completion) {
}
function *setAlias$suspendBridge(request, $completion) {
}
function *deleteAlias$suspendBridge(roomAlias, $completion) {
}
function *getPublicRooms$suspendBridge(request, $completion) {
}
class EventsResource {}
function *getEvent$suspendBridge(roomId, eventId, $completion) {
}
function *getContext$suspendBridge(request, $completion) {
}
class FilterResource {}
function *createFilter$suspendBridge(request, $completion) {
}
function *getFilter$suspendBridge(request, $completion) {
}
function *deleteFilter$suspendBridge(request, $completion) {
}
class LoginResource {}
function *getLoginFlows$suspendBridge($completion) {
}
function *loginWithPassword$suspendBridge(request, $completion) {
}
class MediaResource {}
function *upload$suspendBridge(request, $completion) {
}
function *download$suspendBridge(request, $completion) {
}
function *thumbnail$suspendBridge(request, $completion) {
}
function *getConfig$suspendBridge($completion) {
}
function *previewUrl$suspendBridge(request, $completion) {
}
class NotificationsResource {}
function *getNotifications$suspendBridge(request, $completion) {
}
class PresenceResource {}
function *getPresence$suspendBridge(userId, $completion) {
}
function *setPresence$suspendBridge(request, $completion) {
}
class ProfileResource {}
function *getProfile$suspendBridge(userId, $completion) {
}
function *getDisplayName$suspendBridge(userId, $completion) {
}
function *setDisplayName$suspendBridge(request, $completion) {
}
function *getAvatarUrl$suspendBridge(userId, $completion) {
}
function *setAvatarUrl$suspendBridge(request, $completion) {
}
class PushRulesResource {}
function *getPushRules$suspendBridge($completion) {
}
function *getEnabled$suspendBridge(scope, kind, ruleId, $completion) {
}
function *setEnabled$suspendBridge(request, $completion) {
}
function *createRule$suspendBridge(request, $completion) {
}
function *deleteRule$suspendBridge(request, $completion) {
}
class PushersResource {}
function *getPushers$suspendBridge($completion) {
}
function *setPusher$suspendBridge(request, $completion) {
}
class RelationsResource {}
function *getRelations$suspendBridge(request, $completion) {
}
function *getThreads$suspendBridge(request, $completion) {
}
class RoomsResource {}
function *createRoom$suspendBridge(request, $completion) {
}
function *joinRoom$suspendBridge(request, $completion) {
}
function *leaveRoom$suspendBridge(request, $completion) {
}
function *invite$suspendBridge(request, $completion) {
}
function *getJoinedRooms$suspendBridge($completion) {
}
function *getRoomName$suspendBridge(roomId, $completion) {
}
function *getMembers$suspendBridge(roomId, $completion) {
}
function *getJoinedMembers$suspendBridge(roomId, $completion) {
}
function *getMessages$suspendBridge(request, $completion) {
}
function *sendMessage$suspendBridge(request, $completion) {
}
function *redactEvent$suspendBridge(request, $completion) {
}
function *setTyping$suspendBridge(request, $completion) {
}
function *sendReceipt$suspendBridge(request, $completion) {
}
function *setReadMarkers$suspendBridge(request, $completion) {
}
function *ban$suspendBridge(request, $completion) {
}
function *unban$suspendBridge(request, $completion) {
}
function *kick$suspendBridge(request, $completion) {
}
function getStateEvent$default(roomId, eventType, stateKey, $completion, $super) {
  stateKey = stateKey === VOID ? '' : stateKey;
  return $super === VOID ? this.r4a(roomId, eventType, stateKey, $completion) : $super.r4a.call(this, roomId, eventType, stateKey, $completion);
}
function *getStateEvent$suspendBridge(roomId, eventType, stateKey, $completion) {
}
function getStateEventBlocking$default(roomId, eventType, stateKey, $super) {
  stateKey = stateKey === VOID ? '' : stateKey;
  return $super === VOID ? this.u4a(roomId, eventType, stateKey) : $super.u4a.call(this, roomId, eventType, stateKey);
}
function *sendStateEvent$suspendBridge(request, $completion) {
}
function *forgetRoom$suspendBridge(request, $completion) {
}
function *getState$suspendBridge(roomId, $completion) {
}
class SearchResource {}
function *search$suspendBridge(request, $completion) {
}
class SyncResource {}
function *sync$suspendBridge(request, $completion) {
}
class TagsResource {}
function *getTags$suspendBridge(userId, roomId, $completion) {
}
function *setTag$suspendBridge(request, $completion) {
}
function *deleteTag$suspendBridge(request, $completion) {
}
class UserDirectoryResource {}
function *search$suspendBridge_0(request, $completion) {
}
class VersionsResource {}
function *getVersions$suspendBridge($completion) {
}
class VoIPResource {}
function *getTurnServer$suspendBridge($completion) {
}
class ChangePasswordRequest {
  constructor() {
    this.auth = null;
    this.newPassword = null;
    this.session = null;
    this.logoutDevices = null;
    this.logoutDevicesAll = null;
  }
  d4c(_set____db54di) {
    this.auth = _set____db54di;
  }
  e4c() {
    return this.auth;
  }
  f4c(_set____db54di) {
    this.newPassword = _set____db54di;
  }
  g4c() {
    return this.newPassword;
  }
  h4c(_set____db54di) {
    this.session = _set____db54di;
  }
  i4c() {
    return this.session;
  }
  j4c(_set____db54di) {
    this.logoutDevices = _set____db54di;
  }
  k4c() {
    return this.logoutDevices;
  }
  l4c(_set____db54di) {
    this.logoutDevicesAll = _set____db54di;
  }
  m4c() {
    return this.logoutDevicesAll;
  }
}
class RegisterRequest {
  constructor() {
    this.username = null;
    this.password = null;
    this.initialDeviceDisplayName = null;
    this.auth = null;
    this.session = null;
    this.did = null;
    this.bindEmail = null;
  }
  n4c(_set____db54di) {
    this.username = _set____db54di;
  }
  o4c() {
    return this.username;
  }
  p4c(_set____db54di) {
    this.password = _set____db54di;
  }
  r33() {
    return this.password;
  }
  q4c(_set____db54di) {
    this.initialDeviceDisplayName = _set____db54di;
  }
  r4c() {
    return this.initialDeviceDisplayName;
  }
  d4c(_set____db54di) {
    this.auth = _set____db54di;
  }
  e4c() {
    return this.auth;
  }
  h4c(_set____db54di) {
    this.session = _set____db54di;
  }
  i4c() {
    return this.session;
  }
  s4c(_set____db54di) {
    this.did = _set____db54di;
  }
  t4c() {
    return this.did;
  }
  u4c(_set____db54di) {
    this.bindEmail = _set____db54di;
  }
  v4c() {
    return this.bindEmail;
  }
}
class AccountDataGetRequest {
  constructor() {
    this.userId = null;
    this.roomId = null;
    this.type = null;
  }
  w4c(_set____db54di) {
    this.userId = _set____db54di;
  }
  x4c() {
    return this.userId;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  a4d(_set____db54di) {
    this.type = _set____db54di;
  }
  b4d() {
    return this.type;
  }
}
class AccountDataSetRequest {
  constructor() {
    this.userId = null;
    this.roomId = null;
    this.type = null;
    this.data = null;
  }
  w4c(_set____db54di) {
    this.userId = _set____db54di;
  }
  x4c() {
    return this.userId;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  a4d(_set____db54di) {
    this.type = _set____db54di;
  }
  b4d() {
    return this.type;
  }
  c4d(_set____db54di) {
    this.data = _set____db54di;
  }
  d4d() {
    return this.data;
  }
}
class DevicesDeleteRequest {
  constructor() {
    this.deviceId = null;
  }
  e4d(_set____db54di) {
    this.deviceId = _set____db54di;
  }
  f4d() {
    return this.deviceId;
  }
}
class DevicesUpdateRequest {
  constructor() {
    this.deviceId = null;
    this.displayName = null;
  }
  e4d(_set____db54di) {
    this.deviceId = _set____db54di;
  }
  f4d() {
    return this.deviceId;
  }
  g4d(_set____db54di) {
    this.displayName = _set____db54di;
  }
  h4d() {
    return this.displayName;
  }
}
class DirectoryGetPublicRoomsRequest {
  constructor() {
    this.limit = null;
    this.since = null;
    this.server = null;
  }
  i4d(_set____db54di) {
    this.limit = _set____db54di;
  }
  j4d() {
    return this.limit;
  }
  k4d(_set____db54di) {
    this.since = _set____db54di;
  }
  l4d() {
    return this.since;
  }
  m4d(_set____db54di) {
    this.server = _set____db54di;
  }
  n4d() {
    return this.server;
  }
}
class DirectorySetAliasRequest {
  constructor() {
    this.roomAlias = null;
    this.roomId = null;
  }
  o4d(_set____db54di) {
    this.roomAlias = _set____db54di;
  }
  p4d() {
    return this.roomAlias;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
}
class EventsGetContextRequest {
  constructor() {
    this.roomId = null;
    this.eventId = null;
    this.limit = null;
    this.filter = null;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  q4d(_set____db54di) {
    this.eventId = _set____db54di;
  }
  r4d() {
    return this.eventId;
  }
  i4d(_set____db54di) {
    this.limit = _set____db54di;
  }
  j4d() {
    return this.limit;
  }
  s4d(_set____db54di) {
    this.filter = _set____db54di;
  }
  t4d() {
    return this.filter;
  }
}
class DeleteFilterRequest {
  constructor() {
    this.userId = null;
    this.filterId = null;
  }
  w4c(_set____db54di) {
    this.userId = _set____db54di;
  }
  x4c() {
    return this.userId;
  }
  u4d(_set____db54di) {
    this.filterId = _set____db54di;
  }
  v4d() {
    return this.filterId;
  }
}
class FilterCreateRequest {
  constructor() {
    this.userId = null;
    this.eventTypes = null;
    this.notEventTypes = null;
    this.rooms = null;
    this.notRooms = null;
    this.senders = null;
    this.notSenders = null;
    this.limit = null;
    this.includeLeave = null;
  }
  w4c(_set____db54di) {
    this.userId = _set____db54di;
  }
  x4c() {
    return this.userId;
  }
  w4d(_set____db54di) {
    this.eventTypes = _set____db54di;
  }
  x4d() {
    return this.eventTypes;
  }
  y4d(_set____db54di) {
    this.notEventTypes = _set____db54di;
  }
  z4d() {
    return this.notEventTypes;
  }
  a4e(_set____db54di) {
    this.rooms = _set____db54di;
  }
  b4e() {
    return this.rooms;
  }
  c4e(_set____db54di) {
    this.notRooms = _set____db54di;
  }
  d4e() {
    return this.notRooms;
  }
  e4e(_set____db54di) {
    this.senders = _set____db54di;
  }
  f4e() {
    return this.senders;
  }
  g4e(_set____db54di) {
    this.notSenders = _set____db54di;
  }
  h4e() {
    return this.notSenders;
  }
  i4d(_set____db54di) {
    this.limit = _set____db54di;
  }
  j4d() {
    return this.limit;
  }
  i4e(_set____db54di) {
    this.includeLeave = _set____db54di;
  }
  j4e() {
    return this.includeLeave;
  }
}
class FilterGetRequest {
  constructor() {
    this.userId = null;
    this.filterId = null;
  }
  w4c(_set____db54di) {
    this.userId = _set____db54di;
  }
  x4c() {
    return this.userId;
  }
  u4d(_set____db54di) {
    this.filterId = _set____db54di;
  }
  v4d() {
    return this.filterId;
  }
}
class LoginPasswordRequest {
  constructor() {
    this.user = null;
    this.password = null;
    this.initialDeviceDisplayName = null;
  }
  p33(_set____db54di) {
    this.user = _set____db54di;
  }
  q33() {
    return this.user;
  }
  p4c(_set____db54di) {
    this.password = _set____db54di;
  }
  r33() {
    return this.password;
  }
  q4c(_set____db54di) {
    this.initialDeviceDisplayName = _set____db54di;
  }
  r4c() {
    return this.initialDeviceDisplayName;
  }
}
class LoginSsoRedirectRequest {
  constructor() {
    this.redirectUrl = null;
  }
  k4e(_set____db54di) {
    this.redirectUrl = _set____db54di;
  }
  l4e() {
    return this.redirectUrl;
  }
}
class MediaDownloadRequest {
  constructor() {
    this.serverName = null;
    this.mediaId = null;
    this.allowRemote = null;
  }
  m4e(_set____db54di) {
    this.serverName = _set____db54di;
  }
  n4e() {
    return this.serverName;
  }
  o4e(_set____db54di) {
    this.mediaId = _set____db54di;
  }
  p4e() {
    return this.mediaId;
  }
  q4e(_set____db54di) {
    this.allowRemote = _set____db54di;
  }
  r4e() {
    return this.allowRemote;
  }
}
class MediaPreviewUrlRequest {
  constructor() {
    this.url = null;
    this.ts = null;
  }
  s4e(_set____db54di) {
    this.url = _set____db54di;
  }
  l3i() {
    return this.url;
  }
  t4e(_set____db54di) {
    this.ts = _set____db54di;
  }
  u4e() {
    return this.ts;
  }
}
class MediaThumbnailRequest {
  constructor() {
    this.serverName = null;
    this.mediaId = null;
    this.width = null;
    this.height = null;
    this.method = null;
  }
  m4e(_set____db54di) {
    this.serverName = _set____db54di;
  }
  n4e() {
    return this.serverName;
  }
  o4e(_set____db54di) {
    this.mediaId = _set____db54di;
  }
  p4e() {
    return this.mediaId;
  }
  v4e(_set____db54di) {
    this.width = _set____db54di;
  }
  w4e() {
    return this.width;
  }
  x4e(_set____db54di) {
    this.height = _set____db54di;
  }
  y4e() {
    return this.height;
  }
  z4e(_set____db54di) {
    this.method = _set____db54di;
  }
  k3i() {
    return this.method;
  }
}
class MediaUploadRequest {
  constructor() {
    this.fileName = null;
    this.contentType = null;
    this.bytes = null;
  }
  a4f(_set____db54di) {
    this.fileName = _set____db54di;
  }
  b4f() {
    return this.fileName;
  }
  c4f(_set____db54di) {
    this.contentType = _set____db54di;
  }
  n34() {
    return this.contentType;
  }
  d4f(_set____db54di) {
    this.bytes = _set____db54di;
  }
  e4f() {
    return this.bytes;
  }
}
class NotificationsGetRequest {
  constructor() {
    this.from = null;
    this.limit = null;
    this.only = null;
  }
  f4f(_set____db54di) {
    this.from = _set____db54di;
  }
  g4f() {
    return this.from;
  }
  i4d(_set____db54di) {
    this.limit = _set____db54di;
  }
  j4d() {
    return this.limit;
  }
  h4f(_set____db54di) {
    this.only = _set____db54di;
  }
  i4f() {
    return this.only;
  }
}
class PresenceSetRequest {
  constructor() {
    this.userId = null;
    this.presence = null;
    this.statusMsg = null;
  }
  w4c(_set____db54di) {
    this.userId = _set____db54di;
  }
  x4c() {
    return this.userId;
  }
  j4f(_set____db54di) {
    this.presence = _set____db54di;
  }
  k4f() {
    return this.presence;
  }
  l4f(_set____db54di) {
    this.statusMsg = _set____db54di;
  }
  m4f() {
    return this.statusMsg;
  }
}
class ProfileSetAvatarUrlRequest {
  constructor() {
    this.userId = null;
    this.avatarUrl = null;
  }
  w4c(_set____db54di) {
    this.userId = _set____db54di;
  }
  x4c() {
    return this.userId;
  }
  n4f(_set____db54di) {
    this.avatarUrl = _set____db54di;
  }
  o4f() {
    return this.avatarUrl;
  }
}
class ProfileSetDisplayNameRequest {
  constructor() {
    this.userId = null;
    this.displayname = null;
  }
  w4c(_set____db54di) {
    this.userId = _set____db54di;
  }
  x4c() {
    return this.userId;
  }
  p4f(_set____db54di) {
    this.displayname = _set____db54di;
  }
  q4f() {
    return this.displayname;
  }
}
class PushRulesCreateRequest {
  constructor() {
    this.scope = 'global';
    this.kind = null;
    this.ruleId = null;
    this.conditions = null;
    this.enabled = null;
    this.actions = null;
    this.ruleBody = null;
  }
  r4f(_set____db54di) {
    this.scope = _set____db54di;
  }
  s4f() {
    return this.scope;
  }
  t4f(_set____db54di) {
    this.kind = _set____db54di;
  }
  w1e() {
    return this.kind;
  }
  u4f(_set____db54di) {
    this.ruleId = _set____db54di;
  }
  v4f() {
    return this.ruleId;
  }
  w4f(_set____db54di) {
    this.conditions = _set____db54di;
  }
  x4f() {
    return this.conditions;
  }
  y4f(_set____db54di) {
    this.enabled = _set____db54di;
  }
  z4f() {
    return this.enabled;
  }
  a4g(_set____db54di) {
    this.actions = _set____db54di;
  }
  b4g() {
    return this.actions;
  }
  c4g(_set____db54di) {
    this.ruleBody = _set____db54di;
  }
  d4g() {
    return this.ruleBody;
  }
}
class PushRulesDeleteRequest {
  constructor() {
    this.scope = 'global';
    this.kind = null;
    this.ruleId = null;
  }
  r4f(_set____db54di) {
    this.scope = _set____db54di;
  }
  s4f() {
    return this.scope;
  }
  t4f(_set____db54di) {
    this.kind = _set____db54di;
  }
  w1e() {
    return this.kind;
  }
  u4f(_set____db54di) {
    this.ruleId = _set____db54di;
  }
  v4f() {
    return this.ruleId;
  }
}
class PushRulesSetEnabledRequest {
  constructor() {
    this.scope = 'global';
    this.kind = null;
    this.ruleId = null;
    this.enabled = null;
  }
  r4f(_set____db54di) {
    this.scope = _set____db54di;
  }
  s4f() {
    return this.scope;
  }
  t4f(_set____db54di) {
    this.kind = _set____db54di;
  }
  w1e() {
    return this.kind;
  }
  u4f(_set____db54di) {
    this.ruleId = _set____db54di;
  }
  v4f() {
    return this.ruleId;
  }
  y4f(_set____db54di) {
    this.enabled = _set____db54di;
  }
  z4f() {
    return this.enabled;
  }
}
class PushersSetRequest {
  constructor() {
    this.pushkey = null;
    this.kind = null;
    this.appId = null;
    this.appDisplayName = null;
    this.deviceDisplayName = null;
    this.profileTag = null;
    this.lang = null;
    this.data = null;
    this.append = null;
    this.enabled = null;
  }
  e4g(_set____db54di) {
    this.pushkey = _set____db54di;
  }
  f4g() {
    return this.pushkey;
  }
  t4f(_set____db54di) {
    this.kind = _set____db54di;
  }
  w1e() {
    return this.kind;
  }
  g4g(_set____db54di) {
    this.appId = _set____db54di;
  }
  h4g() {
    return this.appId;
  }
  i4g(_set____db54di) {
    this.appDisplayName = _set____db54di;
  }
  j4g() {
    return this.appDisplayName;
  }
  k4g(_set____db54di) {
    this.deviceDisplayName = _set____db54di;
  }
  l4g() {
    return this.deviceDisplayName;
  }
  m4g(_set____db54di) {
    this.profileTag = _set____db54di;
  }
  n4g() {
    return this.profileTag;
  }
  o4g(_set____db54di) {
    this.lang = _set____db54di;
  }
  p4g() {
    return this.lang;
  }
  q4g(_set____db54di) {
    this.data = _set____db54di;
  }
  d4d() {
    return this.data;
  }
  r4g(_set____db54di) {
    this.append = _set____db54di;
  }
  s4g() {
    return this.append;
  }
  y4f(_set____db54di) {
    this.enabled = _set____db54di;
  }
  z4f() {
    return this.enabled;
  }
}
class PusherData {
  constructor() {
    this.url = null;
    this.format = null;
  }
  s4e(_set____db54di) {
    this.url = _set____db54di;
  }
  l3i() {
    return this.url;
  }
  t4g(_set____db54di) {
    this.format = _set____db54di;
  }
  u4g() {
    return this.format;
  }
}
class RelationsGetRequest {
  constructor() {
    this.roomId = null;
    this.eventId = null;
    this.relType = null;
    this.eventType = null;
    this.from = null;
    this.to = null;
    this.limit = null;
    this.dir = null;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  q4d(_set____db54di) {
    this.eventId = _set____db54di;
  }
  r4d() {
    return this.eventId;
  }
  v4g(_set____db54di) {
    this.relType = _set____db54di;
  }
  w4g() {
    return this.relType;
  }
  x4g(_set____db54di) {
    this.eventType = _set____db54di;
  }
  y4g() {
    return this.eventType;
  }
  f4f(_set____db54di) {
    this.from = _set____db54di;
  }
  g4f() {
    return this.from;
  }
  z4g(_set____db54di) {
    this.to = _set____db54di;
  }
  a4h() {
    return this.to;
  }
  i4d(_set____db54di) {
    this.limit = _set____db54di;
  }
  j4d() {
    return this.limit;
  }
  b4h(_set____db54di) {
    this.dir = _set____db54di;
  }
  c4h() {
    return this.dir;
  }
}
class ThreadsGetRequest {
  constructor() {
    this.roomId = null;
    this.include = null;
    this.limit = null;
    this.from = null;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  d4h(_set____db54di) {
    this.include = _set____db54di;
  }
  e4h() {
    return this.include;
  }
  i4d(_set____db54di) {
    this.limit = _set____db54di;
  }
  j4d() {
    return this.limit;
  }
  f4f(_set____db54di) {
    this.from = _set____db54di;
  }
  g4f() {
    return this.from;
  }
}
class RoomsBanRequest {
  constructor() {
    this.roomId = null;
    this.userId = null;
    this.reason = null;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  w4c(_set____db54di) {
    this.userId = _set____db54di;
  }
  x4c() {
    return this.userId;
  }
  f4h(_set____db54di) {
    this.reason = _set____db54di;
  }
  g4h() {
    return this.reason;
  }
}
class RoomsCreateRoomRequest {
  constructor() {
    this.visibility = null;
    this.roomAliasName = null;
    this.name = null;
    this.topic = null;
    this.invite = null;
    this.preset = null;
    this.isDirect = null;
  }
  h4h(_set____db54di) {
    this.visibility = _set____db54di;
  }
  i4h() {
    return this.visibility;
  }
  j4h(_set____db54di) {
    this.roomAliasName = _set____db54di;
  }
  k4h() {
    return this.roomAliasName;
  }
  l4h(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  m4h(_set____db54di) {
    this.topic = _set____db54di;
  }
  n4h() {
    return this.topic;
  }
  o4h(_set____db54di) {
    this.invite = _set____db54di;
  }
  p4h() {
    return this.invite;
  }
  q4h(_set____db54di) {
    this.preset = _set____db54di;
  }
  r4h() {
    return this.preset;
  }
  s4h(_set____db54di) {
    this.isDirect = _set____db54di;
  }
  t4h() {
    return this.isDirect;
  }
}
class RoomsForgetRoomRequest {
  constructor() {
    this.roomId = null;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
}
class RoomsGetJoinedRoomsRequest {}
class RoomsGetMessagesRequest {
  constructor() {
    this.roomId = null;
    this.from = null;
    this.to = null;
    this.dir = 'b';
    this.limit = null;
    this.filter = null;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  f4f(_set____db54di) {
    this.from = _set____db54di;
  }
  g4f() {
    return this.from;
  }
  z4g(_set____db54di) {
    this.to = _set____db54di;
  }
  a4h() {
    return this.to;
  }
  b4h(_set____db54di) {
    this.dir = _set____db54di;
  }
  c4h() {
    return this.dir;
  }
  i4d(_set____db54di) {
    this.limit = _set____db54di;
  }
  j4d() {
    return this.limit;
  }
  s4d(_set____db54di) {
    this.filter = _set____db54di;
  }
  t4d() {
    return this.filter;
  }
}
class RoomsInviteRequest {
  constructor() {
    this.roomId = null;
    this.userId = null;
    this.reason = null;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  w4c(_set____db54di) {
    this.userId = _set____db54di;
  }
  x4c() {
    return this.userId;
  }
  f4h(_set____db54di) {
    this.reason = _set____db54di;
  }
  g4h() {
    return this.reason;
  }
}
class RoomsJoinRoomRequest {
  constructor() {
    this.roomIdOrAlias = null;
    this.reason = null;
  }
  u4h(_set____db54di) {
    this.roomIdOrAlias = _set____db54di;
  }
  v4h() {
    return this.roomIdOrAlias;
  }
  f4h(_set____db54di) {
    this.reason = _set____db54di;
  }
  g4h() {
    return this.reason;
  }
}
class RoomsKickRequest {
  constructor() {
    this.roomId = null;
    this.userId = null;
    this.reason = null;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  w4c(_set____db54di) {
    this.userId = _set____db54di;
  }
  x4c() {
    return this.userId;
  }
  f4h(_set____db54di) {
    this.reason = _set____db54di;
  }
  g4h() {
    return this.reason;
  }
}
class RoomsLeaveRoomRequest {
  constructor() {
    this.roomId = null;
    this.reason = null;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  f4h(_set____db54di) {
    this.reason = _set____db54di;
  }
  g4h() {
    return this.reason;
  }
}
class RoomsRedactEventRequest {
  constructor() {
    this.roomId = null;
    this.eventId = null;
    this.reason = null;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  q4d(_set____db54di) {
    this.eventId = _set____db54di;
  }
  r4d() {
    return this.eventId;
  }
  f4h(_set____db54di) {
    this.reason = _set____db54di;
  }
  g4h() {
    return this.reason;
  }
}
class RoomsSendMessageRequest {
  constructor() {
    this.roomId = null;
    this.body = null;
    this.msgtype = 'm.text';
    this.replyTo = null;
    this.url = null;
    this.filename = null;
    this.mimetype = null;
    this.thumbnailUrl = null;
    this.thumbnailMimetype = null;
    this.thumbnailSize = null;
    this.width = null;
    this.height = null;
    this.duration = null;
    this.geoUri = null;
    this.description = null;
    this.relatesToType = null;
    this.relatesToEventId = null;
    this.relatesToKey = null;
    this.relatesToRelType = null;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  w4h(_set____db54di) {
    this.body = _set____db54di;
  }
  x4h() {
    return this.body;
  }
  y4h(_set____db54di) {
    this.msgtype = _set____db54di;
  }
  z4h() {
    return this.msgtype;
  }
  a4i(_set____db54di) {
    this.replyTo = _set____db54di;
  }
  b4i() {
    return this.replyTo;
  }
  s4e(_set____db54di) {
    this.url = _set____db54di;
  }
  l3i() {
    return this.url;
  }
  c4i(_set____db54di) {
    this.filename = _set____db54di;
  }
  d4i() {
    return this.filename;
  }
  e4i(_set____db54di) {
    this.mimetype = _set____db54di;
  }
  f4i() {
    return this.mimetype;
  }
  g4i(_set____db54di) {
    this.thumbnailUrl = _set____db54di;
  }
  h4i() {
    return this.thumbnailUrl;
  }
  i4i(_set____db54di) {
    this.thumbnailMimetype = _set____db54di;
  }
  j4i() {
    return this.thumbnailMimetype;
  }
  k4i(_set____db54di) {
    this.thumbnailSize = _set____db54di;
  }
  l4i() {
    return this.thumbnailSize;
  }
  m4i(_set____db54di) {
    this.width = _set____db54di;
  }
  w4e() {
    return this.width;
  }
  n4i(_set____db54di) {
    this.height = _set____db54di;
  }
  y4e() {
    return this.height;
  }
  o4i(_set____db54di) {
    this.duration = _set____db54di;
  }
  p4i() {
    return this.duration;
  }
  q4i(_set____db54di) {
    this.geoUri = _set____db54di;
  }
  r4i() {
    return this.geoUri;
  }
  s4i(_set____db54di) {
    this.description = _set____db54di;
  }
  t4i() {
    return this.description;
  }
  u4i(_set____db54di) {
    this.relatesToType = _set____db54di;
  }
  v4i() {
    return this.relatesToType;
  }
  w4i(_set____db54di) {
    this.relatesToEventId = _set____db54di;
  }
  x4i() {
    return this.relatesToEventId;
  }
  y4i(_set____db54di) {
    this.relatesToKey = _set____db54di;
  }
  z4i() {
    return this.relatesToKey;
  }
  a4j(_set____db54di) {
    this.relatesToRelType = _set____db54di;
  }
  b4j() {
    return this.relatesToRelType;
  }
}
class RoomsSendReceiptRequest {
  constructor() {
    this.roomId = null;
    this.eventId = null;
    this.receiptType = 'm.read';
    this.threadId = null;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  q4d(_set____db54di) {
    this.eventId = _set____db54di;
  }
  r4d() {
    return this.eventId;
  }
  c4j(_set____db54di) {
    this.receiptType = _set____db54di;
  }
  d4j() {
    return this.receiptType;
  }
  e4j(_set____db54di) {
    this.threadId = _set____db54di;
  }
  f4j() {
    return this.threadId;
  }
}
class RoomsSendStateEventRequest {
  constructor() {
    this.roomId = null;
    this.eventType = null;
    this.stateKey = null;
    this.body = null;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  x4g(_set____db54di) {
    this.eventType = _set____db54di;
  }
  y4g() {
    return this.eventType;
  }
  g4j(_set____db54di) {
    this.stateKey = _set____db54di;
  }
  h4j() {
    return this.stateKey;
  }
  w4h(_set____db54di) {
    this.body = _set____db54di;
  }
  x4h() {
    return this.body;
  }
}
class RoomsSetReadMarkersRequest {
  constructor() {
    this.roomId = null;
    this.fullyRead = null;
    this.read = null;
    this.readPrivate = null;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  i4j(_set____db54di) {
    this.fullyRead = _set____db54di;
  }
  j4j() {
    return this.fullyRead;
  }
  k4j(_set____db54di) {
    this.read = _set____db54di;
  }
  l4j() {
    return this.read;
  }
  m4j(_set____db54di) {
    this.readPrivate = _set____db54di;
  }
  n4j() {
    return this.readPrivate;
  }
}
class RoomsTypingRequest {
  constructor() {
    this.roomId = null;
    this.userId = null;
    this.typing = null;
    this.timeout = null;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  w4c(_set____db54di) {
    this.userId = _set____db54di;
  }
  x4c() {
    return this.userId;
  }
  o4j(_set____db54di) {
    this.typing = _set____db54di;
  }
  p4j() {
    return this.typing;
  }
  q4j(_set____db54di) {
    this.timeout = _set____db54di;
  }
  r4j() {
    return this.timeout;
  }
}
class RoomsUnbanRequest {
  constructor() {
    this.roomId = null;
    this.userId = null;
    this.reason = null;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  w4c(_set____db54di) {
    this.userId = _set____db54di;
  }
  x4c() {
    return this.userId;
  }
  f4h(_set____db54di) {
    this.reason = _set____db54di;
  }
  g4h() {
    return this.reason;
  }
}
class SearchRequest {
  constructor() {
    this.searchTerm = null;
    this.keys = null;
    this.orderBy = null;
    this.roomIds = null;
    this.nextBatch = null;
  }
  s4j(_set____db54di) {
    this.searchTerm = _set____db54di;
  }
  t4j() {
    return this.searchTerm;
  }
  u4j(_set____db54di) {
    this.keys = _set____db54di;
  }
  x3() {
    return this.keys;
  }
  v4j(_set____db54di) {
    this.orderBy = _set____db54di;
  }
  w4j() {
    return this.orderBy;
  }
  x4j(_set____db54di) {
    this.roomIds = _set____db54di;
  }
  y4j() {
    return this.roomIds;
  }
  z4j(_set____db54di) {
    this.nextBatch = _set____db54di;
  }
  a4k() {
    return this.nextBatch;
  }
}
class SyncRequest {
  constructor() {
    this.since = null;
    this.timeout = null;
    this.filter = null;
    this.fullState = null;
    this.setPresence = null;
  }
  k4d(_set____db54di) {
    this.since = _set____db54di;
  }
  l4d() {
    return this.since;
  }
  q4j(_set____db54di) {
    this.timeout = _set____db54di;
  }
  r4j() {
    return this.timeout;
  }
  s4d(_set____db54di) {
    this.filter = _set____db54di;
  }
  t4d() {
    return this.filter;
  }
  b4k(_set____db54di) {
    this.fullState = _set____db54di;
  }
  c4k() {
    return this.fullState;
  }
  d4k(_set____db54di) {
    this.setPresence = _set____db54di;
  }
  e4k() {
    return this.setPresence;
  }
}
class TagsDeleteRequest {
  constructor() {
    this.userId = null;
    this.roomId = null;
    this.tag = null;
  }
  w4c(_set____db54di) {
    this.userId = _set____db54di;
  }
  x4c() {
    return this.userId;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  f4k(_set____db54di) {
    this.tag = _set____db54di;
  }
  g4k() {
    return this.tag;
  }
}
class TagsSetRequest {
  constructor() {
    this.userId = null;
    this.roomId = null;
    this.tag = null;
    this.order = null;
  }
  w4c(_set____db54di) {
    this.userId = _set____db54di;
  }
  x4c() {
    return this.userId;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  f4k(_set____db54di) {
    this.tag = _set____db54di;
  }
  g4k() {
    return this.tag;
  }
  h4k(_set____db54di) {
    this.order = _set____db54di;
  }
  i4k() {
    return this.order;
  }
}
class UserDirectorySearchRequest {
  constructor() {
    this.searchTerm = null;
    this.limit = null;
  }
  s4j(_set____db54di) {
    this.searchTerm = _set____db54di;
  }
  t4j() {
    return this.searchTerm;
  }
  i4d(_set____db54di) {
    this.limit = _set____db54di;
  }
  j4d() {
    return this.limit;
  }
}
class Response {
  constructor(data) {
    this.data = data;
    this.limit = null;
    this.json = null;
  }
  j4k(_set____db54di) {
    this.data = _set____db54di;
  }
  d4d() {
    return this.data;
  }
  k4k(_set____db54di) {
    this.limit = _set____db54di;
  }
  j4d() {
    return this.limit;
  }
  l4k(_set____db54di) {
    this.json = _set____db54di;
  }
  l20() {
    return this.json;
  }
}
class ResponseUnit {
  constructor() {
    this.limit = null;
  }
  k4k(_set____db54di) {
    this.limit = _set____db54di;
  }
  j4d() {
    return this.limit;
  }
}
class Companion {
  constructor() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.m4k_1 = [null, null, null, null, lazy(tmp_0, RegisterResponse$Companion$$childSerializers$_anonymous__fwt0di), null, null, null];
  }
}
class $serializer {
  constructor() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.account.RegisterResponse', this, 8);
    tmp0_serialDesc.c1o('access_token', false);
    tmp0_serialDesc.c1o('home_server', false);
    tmp0_serialDesc.c1o('user_id', false);
    tmp0_serialDesc.c1o('device_id', true);
    tmp0_serialDesc.c1o('default_rooms', true);
    tmp0_serialDesc.c1o('next_chunk_ms', true);
    tmp0_serialDesc.c1o('device_display_name', true);
    tmp0_serialDesc.c1o('well_known', true);
    this.n4k_1 = tmp0_serialDesc;
  }
  o4k(encoder, value) {
    var tmp0_desc = this.n4k_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_0().m4k_1;
    tmp1_output.c1i(tmp0_desc, 0, value.accessToken);
    tmp1_output.c1i(tmp0_desc, 1, value.homeServer);
    tmp1_output.c1i(tmp0_desc, 2, value.userId);
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.deviceId == null)) {
      tmp1_output.f1i(tmp0_desc, 3, StringSerializer_getInstance(), value.deviceId);
    }
    if (tmp1_output.j1i(tmp0_desc, 4) ? true : !(value.defaultRooms == null)) {
      tmp1_output.f1i(tmp0_desc, 4, tmp2_cached[4].w2(), value.defaultRooms);
    }
    if (tmp1_output.j1i(tmp0_desc, 5) ? true : !(value.nextChunkMs == null)) {
      tmp1_output.f1i(tmp0_desc, 5, LongSerializer_getInstance(), value.nextChunkMs);
    }
    if (tmp1_output.j1i(tmp0_desc, 6) ? true : !(value.deviceDisplayName == null)) {
      tmp1_output.f1i(tmp0_desc, 6, StringSerializer_getInstance(), value.deviceDisplayName);
    }
    if (tmp1_output.j1i(tmp0_desc, 7) ? true : !(value.wellKnown == null)) {
      tmp1_output.f1i(tmp0_desc, 7, StringSerializer_getInstance(), value.wellKnown);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.o4k(encoder, value instanceof RegisterResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.n4k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_input = decoder.n1g(tmp0_desc);
    var tmp13_cached = Companion_getInstance_0().m4k_1;
    if (tmp12_input.c1h()) {
      tmp4_local0 = tmp12_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.x1g(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.x1g(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.b1h(tmp0_desc, 4, tmp13_cached[4].w2(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.b1h(tmp0_desc, 5, LongSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.b1h(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.b1h(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.x1g(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.x1g(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.b1h(tmp0_desc, 4, tmp13_cached[4].w2(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.b1h(tmp0_desc, 5, LongSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.b1h(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.b1h(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp12_input.o1g(tmp0_desc);
    return RegisterResponse.p4k(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  }
  l1c() {
    return this.n4k_1;
  }
  r1o() {
    var tmp0_cached = Companion_getInstance_0().m4k_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[4].w2()), get_nullable(LongSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class RegisterResponse {
  constructor(accessToken, homeServer, userId, deviceId, defaultRooms, nextChunkMs, deviceDisplayName, wellKnown) {
    Companion_getInstance_0();
    deviceId = deviceId === VOID ? null : deviceId;
    defaultRooms = defaultRooms === VOID ? null : defaultRooms;
    nextChunkMs = nextChunkMs === VOID ? null : nextChunkMs;
    deviceDisplayName = deviceDisplayName === VOID ? null : deviceDisplayName;
    wellKnown = wellKnown === VOID ? null : wellKnown;
    this.accessToken = accessToken;
    this.homeServer = homeServer;
    this.userId = userId;
    this.deviceId = deviceId;
    this.defaultRooms = defaultRooms;
    this.nextChunkMs = nextChunkMs;
    this.deviceDisplayName = deviceDisplayName;
    this.wellKnown = wellKnown;
  }
  q4k() {
    return this.accessToken;
  }
  r4k() {
    return this.homeServer;
  }
  x4c() {
    return this.userId;
  }
  f4d() {
    return this.deviceId;
  }
  s4k() {
    return this.defaultRooms;
  }
  t4k() {
    return this.nextChunkMs;
  }
  l4g() {
    return this.deviceDisplayName;
  }
  u4k() {
    return this.wellKnown;
  }
  static p4k(seen0, accessToken, homeServer, userId, deviceId, defaultRooms, nextChunkMs, deviceDisplayName, wellKnown, serializationConstructorMarker) {
    Companion_getInstance_0();
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance().n4k_1);
    }
    var $this = createThis(this);
    $this.accessToken = accessToken;
    $this.homeServer = homeServer;
    $this.userId = userId;
    if (0 === (seen0 & 8))
      $this.deviceId = null;
    else
      $this.deviceId = deviceId;
    if (0 === (seen0 & 16))
      $this.defaultRooms = null;
    else
      $this.defaultRooms = defaultRooms;
    if (0 === (seen0 & 32))
      $this.nextChunkMs = null;
    else
      $this.nextChunkMs = nextChunkMs;
    if (0 === (seen0 & 64))
      $this.deviceDisplayName = null;
    else
      $this.deviceDisplayName = deviceDisplayName;
    if (0 === (seen0 & 128))
      $this.wellKnown = null;
    else
      $this.wellKnown = wellKnown;
    return $this;
  }
}
class Companion_0 {}
class $serializer_0 {
  constructor() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.accounts.AccountsWhoamiResponse', this, 3);
    tmp0_serialDesc.c1o('user_id', false);
    tmp0_serialDesc.c1o('device_id', true);
    tmp0_serialDesc.c1o('is_guest', true);
    this.v4k_1 = tmp0_serialDesc;
  }
  w4k(encoder, value) {
    var tmp0_desc = this.v4k_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    tmp1_output.c1i(tmp0_desc, 0, value.userId);
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.deviceId == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.deviceId);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.isGuest === false)) {
      tmp1_output.u1h(tmp0_desc, 2, value.isGuest);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.w4k(encoder, value instanceof AccountsWhoamiResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.v4k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_input = decoder.n1g(tmp0_desc);
    if (tmp7_input.c1h()) {
      tmp4_local0 = tmp7_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.p1g(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.p1g(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp7_input.o1g(tmp0_desc);
    return AccountsWhoamiResponse.y4k(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  l1c() {
    return this.v4k_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance()];
  }
}
class AccountsWhoamiResponse {
  constructor() {
    this.deviceId = null;
    this.isGuest = false;
  }
  z4k(_set____db54di) {
    this.x4k_1 = _set____db54di;
  }
  x4c() {
    var tmp = this.x4k_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('userId');
    }
  }
  e4d(_set____db54di) {
    this.deviceId = _set____db54di;
  }
  f4d() {
    return this.deviceId;
  }
  a4l(_set____db54di) {
    this.isGuest = _set____db54di;
  }
  b4l() {
    return this.isGuest;
  }
  static y4k(seen0, userId, deviceId, isGuest, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_0().v4k_1);
    }
    var $this = createThis(this);
    $this.x4k_1 = userId;
    if (0 === (seen0 & 2))
      $this.deviceId = null;
    else
      $this.deviceId = deviceId;
    if (0 === (seen0 & 4))
      $this.isGuest = false;
    else
      $this.isGuest = isGuest;
    return $this;
  }
  get userId() {
    return this.x4c();
  }
  set userId(value) {
    this.z4k(value);
  }
}
class Companion_1 {}
class $serializer_1 {
  constructor() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.capabilities.CapabilitiesGetResponse.Capabilities', this, 5);
    tmp0_serialDesc.c1o('m.change_password', true);
    tmp0_serialDesc.c1o('m.room_versions', true);
    tmp0_serialDesc.c1o('m.set_displayname', true);
    tmp0_serialDesc.c1o('m.set_avatar_url', true);
    tmp0_serialDesc.c1o('m.3pid_changes', true);
    this.c4l_1 = tmp0_serialDesc;
  }
  d4l(encoder, value) {
    var tmp0_desc = this.c4l_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.changePassword == null)) {
      tmp1_output.f1i(tmp0_desc, 0, $serializer_getInstance_2(), value.changePassword);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.roomVersions == null)) {
      tmp1_output.f1i(tmp0_desc, 1, $serializer_getInstance_4(), value.roomVersions);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.setDisplayname == null)) {
      tmp1_output.f1i(tmp0_desc, 2, $serializer_getInstance_3(), value.setDisplayname);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.setAvatarUrl == null)) {
      tmp1_output.f1i(tmp0_desc, 3, $serializer_getInstance_3(), value.setAvatarUrl);
    }
    if (tmp1_output.j1i(tmp0_desc, 4) ? true : !(value.thirdPartyIdChanges == null)) {
      tmp1_output.f1i(tmp0_desc, 4, $serializer_getInstance_3(), value.thirdPartyIdChanges);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.d4l(encoder, value instanceof Capabilities ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.c4l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.n1g(tmp0_desc);
    if (tmp9_input.c1h()) {
      tmp4_local0 = tmp9_input.b1h(tmp0_desc, 0, $serializer_getInstance_2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.b1h(tmp0_desc, 1, $serializer_getInstance_4(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.b1h(tmp0_desc, 2, $serializer_getInstance_3(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.b1h(tmp0_desc, 3, $serializer_getInstance_3(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.b1h(tmp0_desc, 4, $serializer_getInstance_3(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.b1h(tmp0_desc, 0, $serializer_getInstance_2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.b1h(tmp0_desc, 1, $serializer_getInstance_4(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.b1h(tmp0_desc, 2, $serializer_getInstance_3(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.b1h(tmp0_desc, 3, $serializer_getInstance_3(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.b1h(tmp0_desc, 4, $serializer_getInstance_3(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp9_input.o1g(tmp0_desc);
    return Capabilities.e4l(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  l1c() {
    return this.c4l_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_2()), get_nullable($serializer_getInstance_4()), get_nullable($serializer_getInstance_3()), get_nullable($serializer_getInstance_3()), get_nullable($serializer_getInstance_3())];
  }
}
class Companion_2 {}
class $serializer_2 {
  constructor() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.capabilities.CapabilitiesGetResponse.ChangePassword', this, 1);
    tmp0_serialDesc.c1o('enabled', true);
    this.f4l_1 = tmp0_serialDesc;
  }
  g4l(encoder, value) {
    var tmp0_desc = this.f4l_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.enabled === true)) {
      tmp1_output.u1h(tmp0_desc, 0, value.enabled);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.g4l(encoder, value instanceof ChangePassword ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.f4l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.p1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.p1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return ChangePassword.h4l(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.f4l_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance()];
  }
}
class Companion_3 {}
class $serializer_3 {
  constructor() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.capabilities.CapabilitiesGetResponse.BooleanCapability', this, 1);
    tmp0_serialDesc.c1o('enabled', true);
    this.i4l_1 = tmp0_serialDesc;
  }
  j4l(encoder, value) {
    var tmp0_desc = this.i4l_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.enabled === true)) {
      tmp1_output.u1h(tmp0_desc, 0, value.enabled);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.j4l(encoder, value instanceof BooleanCapability ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.i4l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.p1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.p1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return BooleanCapability.k4l(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.i4l_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance()];
  }
}
class Companion_4 {
  constructor() {
    Companion_instance_4 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.l4l_1 = [null, lazy(tmp_0, CapabilitiesGetResponse$RoomVersions$Companion$$childSerializers$_anonymous__trldqp)];
  }
}
class $serializer_4 {
  constructor() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.capabilities.CapabilitiesGetResponse.RoomVersions', this, 2);
    tmp0_serialDesc.c1o('default', true);
    tmp0_serialDesc.c1o('available', true);
    this.m4l_1 = tmp0_serialDesc;
  }
  n4l(encoder, value) {
    var tmp0_desc = this.m4l_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_5().l4l_1;
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.default === '')) {
      tmp1_output.c1i(tmp0_desc, 0, value.default);
    }
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 1)) {
      tmp = true;
    } else {
      var tmp_0 = value.available;
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 1, tmp2_cached[1].w2(), value.available);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.n4l(encoder, value instanceof RoomVersions ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.m4l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.n1g(tmp0_desc);
    var tmp7_cached = Companion_getInstance_5().l4l_1;
    if (tmp6_input.c1h()) {
      tmp4_local0 = tmp6_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.z1g(tmp0_desc, 1, tmp7_cached[1].w2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.z1g(tmp0_desc, 1, tmp7_cached[1].w2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp6_input.o1g(tmp0_desc);
    return RoomVersions.o4l(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  l1c() {
    return this.m4l_1;
  }
  r1o() {
    var tmp0_cached = Companion_getInstance_5().l4l_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1].w2()];
  }
}
class Capabilities {
  constructor() {
    this.changePassword = null;
    this.roomVersions = null;
    this.setDisplayname = null;
    this.setAvatarUrl = null;
    this.thirdPartyIdChanges = null;
  }
  p4l(_set____db54di) {
    this.changePassword = _set____db54di;
  }
  q4l() {
    return this.changePassword;
  }
  r4l(_set____db54di) {
    this.roomVersions = _set____db54di;
  }
  s4l() {
    return this.roomVersions;
  }
  t4l(_set____db54di) {
    this.setDisplayname = _set____db54di;
  }
  u4l() {
    return this.setDisplayname;
  }
  v4l(_set____db54di) {
    this.setAvatarUrl = _set____db54di;
  }
  w4l() {
    return this.setAvatarUrl;
  }
  x4l(_set____db54di) {
    this.thirdPartyIdChanges = _set____db54di;
  }
  y4l() {
    return this.thirdPartyIdChanges;
  }
  static e4l(seen0, changePassword, roomVersions, setDisplayname, setAvatarUrl, thirdPartyIdChanges, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_1().c4l_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.changePassword = null;
    else
      $this.changePassword = changePassword;
    if (0 === (seen0 & 2))
      $this.roomVersions = null;
    else
      $this.roomVersions = roomVersions;
    if (0 === (seen0 & 4))
      $this.setDisplayname = null;
    else
      $this.setDisplayname = setDisplayname;
    if (0 === (seen0 & 8))
      $this.setAvatarUrl = null;
    else
      $this.setAvatarUrl = setAvatarUrl;
    if (0 === (seen0 & 16))
      $this.thirdPartyIdChanges = null;
    else
      $this.thirdPartyIdChanges = thirdPartyIdChanges;
    return $this;
  }
}
class ChangePassword {
  constructor() {
    this.enabled = true;
  }
  z4l(_set____db54di) {
    this.enabled = _set____db54di;
  }
  z4f() {
    return this.enabled;
  }
  static h4l(seen0, enabled, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_2().f4l_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.enabled = true;
    else
      $this.enabled = enabled;
    return $this;
  }
}
class BooleanCapability {
  constructor() {
    this.enabled = true;
  }
  z4l(_set____db54di) {
    this.enabled = _set____db54di;
  }
  z4f() {
    return this.enabled;
  }
  static k4l(seen0, enabled, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_3().i4l_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.enabled = true;
    else
      $this.enabled = enabled;
    return $this;
  }
}
class RoomVersions {
  constructor() {
    Companion_getInstance_5();
    this.default = '';
    var tmp = this;
    // Inline function 'kotlin.collections.mapOf' call
    tmp.available = emptyMap();
  }
  a4m(_set____db54di) {
    this.default = _set____db54di;
  }
  b4m() {
    return this.default;
  }
  c4m(_set____db54di) {
    this.available = _set____db54di;
  }
  d4m() {
    return this.available;
  }
  static o4l(seen0, default_0, available, serializationConstructorMarker) {
    Companion_getInstance_5();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_4().m4l_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.default = '';
    else
      $this.default = default_0;
    if (0 === (seen0 & 2)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.available = emptyMap();
    } else
      $this.available = available;
    return $this;
  }
}
class Companion_5 {}
class $serializer_5 {
  constructor() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.capabilities.CapabilitiesGetResponse', this, 1);
    tmp0_serialDesc.c1o('capabilities', true);
    this.e4m_1 = tmp0_serialDesc;
  }
  f4m(encoder, value) {
    var tmp0_desc = this.e4m_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !equals(value.capabilities, new Capabilities())) {
      tmp1_output.e1i(tmp0_desc, 0, $serializer_getInstance_1(), value.capabilities);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.f4m(encoder, value instanceof CapabilitiesGetResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.e4m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, $serializer_getInstance_1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, $serializer_getInstance_1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return CapabilitiesGetResponse.g4m(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.e4m_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_1()];
  }
}
class CapabilitiesGetResponse {
  constructor() {
    this.capabilities = new Capabilities();
  }
  h4m(_set____db54di) {
    this.capabilities = _set____db54di;
  }
  i4m() {
    return this.capabilities;
  }
  static g4m(seen0, capabilities, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_5().e4m_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.capabilities = new Capabilities();
    else
      $this.capabilities = capabilities;
    return $this;
  }
}
class Companion_6 {}
class $serializer_6 {
  constructor() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.devices.DevicesGetDeviceResponse', this, 4);
    tmp0_serialDesc.c1o('device_id', true);
    tmp0_serialDesc.c1o('display_name', true);
    tmp0_serialDesc.c1o('last_seen_ip', true);
    tmp0_serialDesc.c1o('last_seen_ts', true);
    this.j4m_1 = tmp0_serialDesc;
  }
  k4m(encoder, value) {
    var tmp0_desc = this.j4m_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.deviceId === '')) {
      tmp1_output.c1i(tmp0_desc, 0, value.deviceId);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.displayName == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.displayName);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.lastSeenIp == null)) {
      tmp1_output.f1i(tmp0_desc, 2, StringSerializer_getInstance(), value.lastSeenIp);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.lastSeenTs == null)) {
      tmp1_output.f1i(tmp0_desc, 3, LongSerializer_getInstance(), value.lastSeenTs);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.k4m(encoder, value instanceof DevicesGetDeviceResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.j4m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.n1g(tmp0_desc);
    if (tmp8_input.c1h()) {
      tmp4_local0 = tmp8_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.b1h(tmp0_desc, 3, LongSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.b1h(tmp0_desc, 3, LongSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp8_input.o1g(tmp0_desc);
    return DevicesGetDeviceResponse.l4m(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  l1c() {
    return this.j4m_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(LongSerializer_getInstance())];
  }
}
class DevicesGetDeviceResponse {
  constructor() {
    this.deviceId = '';
    this.displayName = null;
    this.lastSeenIp = null;
    this.lastSeenTs = null;
  }
  m4m(_set____db54di) {
    this.deviceId = _set____db54di;
  }
  f4d() {
    return this.deviceId;
  }
  g4d(_set____db54di) {
    this.displayName = _set____db54di;
  }
  h4d() {
    return this.displayName;
  }
  n4m(_set____db54di) {
    this.lastSeenIp = _set____db54di;
  }
  o4m() {
    return this.lastSeenIp;
  }
  p4m(_set____db54di) {
    this.lastSeenTs = _set____db54di;
  }
  q4m() {
    return this.lastSeenTs;
  }
  static l4m(seen0, deviceId, displayName, lastSeenIp, lastSeenTs, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_6().j4m_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.deviceId = '';
    else
      $this.deviceId = deviceId;
    if (0 === (seen0 & 2))
      $this.displayName = null;
    else
      $this.displayName = displayName;
    if (0 === (seen0 & 4))
      $this.lastSeenIp = null;
    else
      $this.lastSeenIp = lastSeenIp;
    if (0 === (seen0 & 8))
      $this.lastSeenTs = null;
    else
      $this.lastSeenTs = lastSeenTs;
    return $this;
  }
}
class Companion_7 {
  constructor() {
    Companion_instance_7 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.r4m_1 = [lazy(tmp_0, DevicesGetResponse$Companion$$childSerializers$_anonymous__plmvsg)];
  }
}
class $serializer_7 {
  constructor() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.devices.DevicesGetResponse', this, 1);
    tmp0_serialDesc.c1o('devices', true);
    this.s4m_1 = tmp0_serialDesc;
  }
  t4m(encoder, value) {
    var tmp0_desc = this.s4m_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_8().r4m_1;
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.devices;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.devices);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.t4m(encoder, value instanceof DevicesGetResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.s4m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    var tmp6_cached = Companion_getInstance_8().r4m_1;
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, tmp6_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, tmp6_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return DevicesGetResponse.u4m(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.s4m_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_8().r4m_1[0].w2()];
  }
}
class DevicesGetResponse {
  constructor() {
    Companion_getInstance_8();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.devices = [];
  }
  v4m(_set____db54di) {
    this.devices = _set____db54di;
  }
  w4m() {
    return this.devices;
  }
  static u4m(seen0, devices, serializationConstructorMarker) {
    Companion_getInstance_8();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_7().s4m_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.devices = [];
    } else
      $this.devices = devices;
    return $this;
  }
}
class Companion_8 {}
class $serializer_8 {
  constructor() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.devices.Device', this, 4);
    tmp0_serialDesc.c1o('device_id', true);
    tmp0_serialDesc.c1o('display_name', true);
    tmp0_serialDesc.c1o('last_seen_ip', true);
    tmp0_serialDesc.c1o('last_seen_ts', true);
    this.x4m_1 = tmp0_serialDesc;
  }
  y4m(encoder, value) {
    var tmp0_desc = this.x4m_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.deviceId === '')) {
      tmp1_output.c1i(tmp0_desc, 0, value.deviceId);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.displayName == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.displayName);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.lastSeenIp == null)) {
      tmp1_output.f1i(tmp0_desc, 2, StringSerializer_getInstance(), value.lastSeenIp);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.lastSeenTs == null)) {
      tmp1_output.f1i(tmp0_desc, 3, LongSerializer_getInstance(), value.lastSeenTs);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.y4m(encoder, value instanceof Device ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.x4m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.n1g(tmp0_desc);
    if (tmp8_input.c1h()) {
      tmp4_local0 = tmp8_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.b1h(tmp0_desc, 3, LongSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.b1h(tmp0_desc, 3, LongSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp8_input.o1g(tmp0_desc);
    return Device.z4m(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  l1c() {
    return this.x4m_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(LongSerializer_getInstance())];
  }
}
class Device {
  constructor() {
    this.deviceId = '';
    this.displayName = null;
    this.lastSeenIp = null;
    this.lastSeenTs = null;
  }
  m4m(_set____db54di) {
    this.deviceId = _set____db54di;
  }
  f4d() {
    return this.deviceId;
  }
  g4d(_set____db54di) {
    this.displayName = _set____db54di;
  }
  h4d() {
    return this.displayName;
  }
  n4m(_set____db54di) {
    this.lastSeenIp = _set____db54di;
  }
  o4m() {
    return this.lastSeenIp;
  }
  p4m(_set____db54di) {
    this.lastSeenTs = _set____db54di;
  }
  q4m() {
    return this.lastSeenTs;
  }
  static z4m(seen0, deviceId, displayName, lastSeenIp, lastSeenTs, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_8().x4m_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.deviceId = '';
    else
      $this.deviceId = deviceId;
    if (0 === (seen0 & 2))
      $this.displayName = null;
    else
      $this.displayName = displayName;
    if (0 === (seen0 & 4))
      $this.lastSeenIp = null;
    else
      $this.lastSeenIp = lastSeenIp;
    if (0 === (seen0 & 8))
      $this.lastSeenTs = null;
    else
      $this.lastSeenTs = lastSeenTs;
    return $this;
  }
}
class Companion_9 {
  constructor() {
    Companion_instance_9 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.a4n_1 = [lazy(tmp_0, DirectoryGetPublicRoomsResponse$Companion$$childSerializers$_anonymous__v8h9y5), null, null, null];
  }
}
class $serializer_9 {
  constructor() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.directory.DirectoryGetPublicRoomsResponse', this, 4);
    tmp0_serialDesc.c1o('chunk', true);
    tmp0_serialDesc.c1o('next_batch', true);
    tmp0_serialDesc.c1o('prev_batch', true);
    tmp0_serialDesc.c1o('total_room_count_estimate', true);
    this.b4n_1 = tmp0_serialDesc;
  }
  c4n(encoder, value) {
    var tmp0_desc = this.b4n_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_10().a4n_1;
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.chunk;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.chunk);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.nextBatch == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.nextBatch);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.prevBatch == null)) {
      tmp1_output.f1i(tmp0_desc, 2, StringSerializer_getInstance(), value.prevBatch);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.totalRoomCountEstimate == null)) {
      tmp1_output.f1i(tmp0_desc, 3, LongSerializer_getInstance(), value.totalRoomCountEstimate);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.c4n(encoder, value instanceof DirectoryGetPublicRoomsResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.b4n_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.n1g(tmp0_desc);
    var tmp9_cached = Companion_getInstance_10().a4n_1;
    if (tmp8_input.c1h()) {
      tmp4_local0 = tmp8_input.z1g(tmp0_desc, 0, tmp9_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.b1h(tmp0_desc, 3, LongSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.z1g(tmp0_desc, 0, tmp9_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.b1h(tmp0_desc, 3, LongSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp8_input.o1g(tmp0_desc);
    return DirectoryGetPublicRoomsResponse.d4n(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  l1c() {
    return this.b4n_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_10().a4n_1[0].w2(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(LongSerializer_getInstance())];
  }
}
class DirectoryGetPublicRoomsResponse {
  constructor() {
    Companion_getInstance_10();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.chunk = [];
    this.nextBatch = null;
    this.prevBatch = null;
    this.totalRoomCountEstimate = null;
  }
  e4n(_set____db54di) {
    this.chunk = _set____db54di;
  }
  f4n() {
    return this.chunk;
  }
  z4j(_set____db54di) {
    this.nextBatch = _set____db54di;
  }
  a4k() {
    return this.nextBatch;
  }
  g4n(_set____db54di) {
    this.prevBatch = _set____db54di;
  }
  h4n() {
    return this.prevBatch;
  }
  i4n(_set____db54di) {
    this.totalRoomCountEstimate = _set____db54di;
  }
  j4n() {
    return this.totalRoomCountEstimate;
  }
  static d4n(seen0, chunk, nextBatch, prevBatch, totalRoomCountEstimate, serializationConstructorMarker) {
    Companion_getInstance_10();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_9().b4n_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.chunk = [];
    } else
      $this.chunk = chunk;
    if (0 === (seen0 & 2))
      $this.nextBatch = null;
    else
      $this.nextBatch = nextBatch;
    if (0 === (seen0 & 4))
      $this.prevBatch = null;
    else
      $this.prevBatch = prevBatch;
    if (0 === (seen0 & 8))
      $this.totalRoomCountEstimate = null;
    else
      $this.totalRoomCountEstimate = totalRoomCountEstimate;
    return $this;
  }
}
class Companion_10 {
  constructor() {
    Companion_instance_10 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.k4n_1 = [null, null, null, null, null, lazy(tmp_0, PublicRoomChunk$Companion$$childSerializers$_anonymous__jkytfj), null, null, null, null];
  }
}
class $serializer_10 {
  constructor() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.directory.PublicRoomChunk', this, 10);
    tmp0_serialDesc.c1o('room_id', true);
    tmp0_serialDesc.c1o('name', true);
    tmp0_serialDesc.c1o('topic', true);
    tmp0_serialDesc.c1o('num_joined_members', true);
    tmp0_serialDesc.c1o('canonical_alias', true);
    tmp0_serialDesc.c1o('aliases', true);
    tmp0_serialDesc.c1o('world_readable', true);
    tmp0_serialDesc.c1o('guest_can_join', true);
    tmp0_serialDesc.c1o('avatar_url', true);
    tmp0_serialDesc.c1o('join_rule', true);
    this.l4n_1 = tmp0_serialDesc;
  }
  m4n(encoder, value) {
    var tmp0_desc = this.l4n_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_11().k4n_1;
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.roomId === '')) {
      tmp1_output.c1i(tmp0_desc, 0, value.roomId);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.name == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.topic == null)) {
      tmp1_output.f1i(tmp0_desc, 2, StringSerializer_getInstance(), value.topic);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.numJoinedMembers === 0n)) {
      tmp1_output.y1h(tmp0_desc, 3, value.numJoinedMembers);
    }
    if (tmp1_output.j1i(tmp0_desc, 4) ? true : !(value.canonicalAlias == null)) {
      tmp1_output.f1i(tmp0_desc, 4, StringSerializer_getInstance(), value.canonicalAlias);
    }
    if (tmp1_output.j1i(tmp0_desc, 5) ? true : !(value.aliases == null)) {
      tmp1_output.f1i(tmp0_desc, 5, tmp2_cached[5].w2(), value.aliases);
    }
    if (tmp1_output.j1i(tmp0_desc, 6) ? true : !(value.worldReadable === false)) {
      tmp1_output.u1h(tmp0_desc, 6, value.worldReadable);
    }
    if (tmp1_output.j1i(tmp0_desc, 7) ? true : !(value.guestCanJoin === false)) {
      tmp1_output.u1h(tmp0_desc, 7, value.guestCanJoin);
    }
    if (tmp1_output.j1i(tmp0_desc, 8) ? true : !(value.avatarUrl == null)) {
      tmp1_output.f1i(tmp0_desc, 8, StringSerializer_getInstance(), value.avatarUrl);
    }
    if (tmp1_output.j1i(tmp0_desc, 9) ? true : !(value.joinRule == null)) {
      tmp1_output.f1i(tmp0_desc, 9, StringSerializer_getInstance(), value.joinRule);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.m4n(encoder, value instanceof PublicRoomChunk ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.l4n_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = 0n;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = false;
    var tmp11_local7 = false;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_input = decoder.n1g(tmp0_desc);
    var tmp15_cached = Companion_getInstance_11().k4n_1;
    if (tmp14_input.c1h()) {
      tmp4_local0 = tmp14_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp14_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp14_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp14_input.t1g(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp14_input.b1h(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp14_input.b1h(tmp0_desc, 5, tmp15_cached[5].w2(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp14_input.p1g(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp14_input.p1g(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp14_input.b1h(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp14_input.b1h(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp14_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp14_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp14_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp14_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp14_input.t1g(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp14_input.b1h(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp14_input.b1h(tmp0_desc, 5, tmp15_cached[5].w2(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp14_input.p1g(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp14_input.p1g(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp14_input.b1h(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp14_input.b1h(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp14_input.o1g(tmp0_desc);
    return PublicRoomChunk.n4n(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, null);
  }
  l1c() {
    return this.l4n_1;
  }
  r1o() {
    var tmp0_cached = Companion_getInstance_11().k4n_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), LongSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[5].w2()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class PublicRoomChunk {
  constructor() {
    Companion_getInstance_11();
    this.roomId = '';
    this.name = null;
    this.topic = null;
    this.numJoinedMembers = 0n;
    this.canonicalAlias = null;
    this.aliases = null;
    this.worldReadable = false;
    this.guestCanJoin = false;
    this.avatarUrl = null;
    this.joinRule = null;
  }
  o4n(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  l4h(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  m4h(_set____db54di) {
    this.topic = _set____db54di;
  }
  n4h() {
    return this.topic;
  }
  p4n(_set____db54di) {
    this.numJoinedMembers = _set____db54di;
  }
  q4n() {
    return this.numJoinedMembers;
  }
  r4n(_set____db54di) {
    this.canonicalAlias = _set____db54di;
  }
  s4n() {
    return this.canonicalAlias;
  }
  t4n(_set____db54di) {
    this.aliases = _set____db54di;
  }
  u4n() {
    return this.aliases;
  }
  v4n(_set____db54di) {
    this.worldReadable = _set____db54di;
  }
  w4n() {
    return this.worldReadable;
  }
  x4n(_set____db54di) {
    this.guestCanJoin = _set____db54di;
  }
  y4n() {
    return this.guestCanJoin;
  }
  n4f(_set____db54di) {
    this.avatarUrl = _set____db54di;
  }
  o4f() {
    return this.avatarUrl;
  }
  z4n(_set____db54di) {
    this.joinRule = _set____db54di;
  }
  a4o() {
    return this.joinRule;
  }
  static n4n(seen0, roomId, name, topic, numJoinedMembers, canonicalAlias, aliases, worldReadable, guestCanJoin, avatarUrl, joinRule, serializationConstructorMarker) {
    Companion_getInstance_11();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_10().l4n_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.roomId = '';
    else
      $this.roomId = roomId;
    if (0 === (seen0 & 2))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 4))
      $this.topic = null;
    else
      $this.topic = topic;
    if (0 === (seen0 & 8))
      $this.numJoinedMembers = 0n;
    else
      $this.numJoinedMembers = numJoinedMembers;
    if (0 === (seen0 & 16))
      $this.canonicalAlias = null;
    else
      $this.canonicalAlias = canonicalAlias;
    if (0 === (seen0 & 32))
      $this.aliases = null;
    else
      $this.aliases = aliases;
    if (0 === (seen0 & 64))
      $this.worldReadable = false;
    else
      $this.worldReadable = worldReadable;
    if (0 === (seen0 & 128))
      $this.guestCanJoin = false;
    else
      $this.guestCanJoin = guestCanJoin;
    if (0 === (seen0 & 256))
      $this.avatarUrl = null;
    else
      $this.avatarUrl = avatarUrl;
    if (0 === (seen0 & 512))
      $this.joinRule = null;
    else
      $this.joinRule = joinRule;
    return $this;
  }
}
class Companion_11 {
  constructor() {
    Companion_instance_11 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.b4o_1 = [null, lazy(tmp_0, DirectoryResolveAliasResponse$Companion$$childSerializers$_anonymous__obpzjs)];
  }
}
class $serializer_11 {
  constructor() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.directory.DirectoryResolveAliasResponse', this, 2);
    tmp0_serialDesc.c1o('room_id', true);
    tmp0_serialDesc.c1o('servers', true);
    this.c4o_1 = tmp0_serialDesc;
  }
  d4o(encoder, value) {
    var tmp0_desc = this.c4o_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_12().b4o_1;
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.roomId === '')) {
      tmp1_output.c1i(tmp0_desc, 0, value.roomId);
    }
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 1)) {
      tmp = true;
    } else {
      var tmp_0 = value.servers;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 1, tmp2_cached[1].w2(), value.servers);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.d4o(encoder, value instanceof DirectoryResolveAliasResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.c4o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.n1g(tmp0_desc);
    var tmp7_cached = Companion_getInstance_12().b4o_1;
    if (tmp6_input.c1h()) {
      tmp4_local0 = tmp6_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.z1g(tmp0_desc, 1, tmp7_cached[1].w2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.z1g(tmp0_desc, 1, tmp7_cached[1].w2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp6_input.o1g(tmp0_desc);
    return DirectoryResolveAliasResponse.e4o(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  l1c() {
    return this.c4o_1;
  }
  r1o() {
    var tmp0_cached = Companion_getInstance_12().b4o_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1].w2()];
  }
}
class DirectoryResolveAliasResponse {
  constructor() {
    Companion_getInstance_12();
    this.roomId = '';
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.servers = [];
  }
  o4n(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  f4o(_set____db54di) {
    this.servers = _set____db54di;
  }
  g4o() {
    return this.servers;
  }
  static e4o(seen0, roomId, servers, serializationConstructorMarker) {
    Companion_getInstance_12();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_11().c4o_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.roomId = '';
    else
      $this.roomId = roomId;
    if (0 === (seen0 & 2)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.servers = [];
    } else
      $this.servers = servers;
    return $this;
  }
}
class Companion_12 {
  constructor() {
    Companion_instance_12 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.h4o_1 = [lazy(tmp_0, EventsGetContextResponse$ContextEvent$Companion$$childSerializers$_anonymous__rd84k2), null, null, null, null, null, null];
  }
}
class $serializer_12 {
  constructor() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.events.EventsGetContextResponse.ContextEvent', this, 7);
    tmp0_serialDesc.c1o('content', true);
    tmp0_serialDesc.c1o('event_id', true);
    tmp0_serialDesc.c1o('origin_server_ts', true);
    tmp0_serialDesc.c1o('room_id', true);
    tmp0_serialDesc.c1o('sender', true);
    tmp0_serialDesc.c1o('type', true);
    tmp0_serialDesc.c1o('state_key', true);
    this.i4o_1 = tmp0_serialDesc;
  }
  j4o(encoder, value) {
    var tmp0_desc = this.i4o_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_13().h4o_1;
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.content;
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.content);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.eventId === '')) {
      tmp1_output.c1i(tmp0_desc, 1, value.eventId);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.originServerTs === 0n)) {
      tmp1_output.y1h(tmp0_desc, 2, value.originServerTs);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.roomId == null)) {
      tmp1_output.f1i(tmp0_desc, 3, StringSerializer_getInstance(), value.roomId);
    }
    if (tmp1_output.j1i(tmp0_desc, 4) ? true : !(value.sender === '')) {
      tmp1_output.c1i(tmp0_desc, 4, value.sender);
    }
    if (tmp1_output.j1i(tmp0_desc, 5) ? true : !(value.type === '')) {
      tmp1_output.c1i(tmp0_desc, 5, value.type);
    }
    if (tmp1_output.j1i(tmp0_desc, 6) ? true : !(value.stateKey == null)) {
      tmp1_output.f1i(tmp0_desc, 6, StringSerializer_getInstance(), value.stateKey);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.j4o(encoder, value instanceof ContextEvent ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.i4o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0n;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.n1g(tmp0_desc);
    var tmp12_cached = Companion_getInstance_13().h4o_1;
    if (tmp11_input.c1h()) {
      tmp4_local0 = tmp11_input.z1g(tmp0_desc, 0, tmp12_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.x1g(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.t1g(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.x1g(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.x1g(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.b1h(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.z1g(tmp0_desc, 0, tmp12_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.x1g(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.t1g(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.x1g(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.x1g(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.b1h(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp11_input.o1g(tmp0_desc);
    return ContextEvent.k4o(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  l1c() {
    return this.i4o_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_13().h4o_1[0].w2(), StringSerializer_getInstance(), LongSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class ContextEvent {
  constructor() {
    Companion_getInstance_13();
    var tmp = this;
    // Inline function 'kotlin.collections.mapOf' call
    tmp.content = emptyMap();
    this.eventId = '';
    this.originServerTs = 0n;
    this.roomId = null;
    this.sender = '';
    this.type = '';
    this.stateKey = null;
  }
  l4o(_set____db54di) {
    this.content = _set____db54di;
  }
  o20() {
    return this.content;
  }
  m4o(_set____db54di) {
    this.eventId = _set____db54di;
  }
  r4d() {
    return this.eventId;
  }
  n4o(_set____db54di) {
    this.originServerTs = _set____db54di;
  }
  o4o() {
    return this.originServerTs;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  p4o(_set____db54di) {
    this.sender = _set____db54di;
  }
  q4o() {
    return this.sender;
  }
  r4o(_set____db54di) {
    this.type = _set____db54di;
  }
  b4d() {
    return this.type;
  }
  g4j(_set____db54di) {
    this.stateKey = _set____db54di;
  }
  h4j() {
    return this.stateKey;
  }
  static k4o(seen0, content, eventId, originServerTs, roomId, sender, type, stateKey, serializationConstructorMarker) {
    Companion_getInstance_13();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_12().i4o_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.content = emptyMap();
    } else
      $this.content = content;
    if (0 === (seen0 & 2))
      $this.eventId = '';
    else
      $this.eventId = eventId;
    if (0 === (seen0 & 4))
      $this.originServerTs = 0n;
    else
      $this.originServerTs = originServerTs;
    if (0 === (seen0 & 8))
      $this.roomId = null;
    else
      $this.roomId = roomId;
    if (0 === (seen0 & 16))
      $this.sender = '';
    else
      $this.sender = sender;
    if (0 === (seen0 & 32))
      $this.type = '';
    else
      $this.type = type;
    if (0 === (seen0 & 64))
      $this.stateKey = null;
    else
      $this.stateKey = stateKey;
    return $this;
  }
}
class Companion_13 {
  constructor() {
    Companion_instance_13 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, EventsGetContextResponse$Companion$$childSerializers$_anonymous__i1uze1);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, EventsGetContextResponse$Companion$$childSerializers$_anonymous__i1uze1_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.s4o_1 = [null, null, null, tmp_1, tmp_3, lazy(tmp_4, EventsGetContextResponse$Companion$$childSerializers$_anonymous__i1uze1_1)];
  }
}
class $serializer_13 {
  constructor() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.events.EventsGetContextResponse', this, 6);
    tmp0_serialDesc.c1o('start', true);
    tmp0_serialDesc.c1o('end', true);
    tmp0_serialDesc.c1o('event', true);
    tmp0_serialDesc.c1o('events_before', true);
    tmp0_serialDesc.c1o('events_after', true);
    tmp0_serialDesc.c1o('state', true);
    this.t4o_1 = tmp0_serialDesc;
  }
  u4o(encoder, value) {
    var tmp0_desc = this.t4o_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_14().s4o_1;
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.start == null)) {
      tmp1_output.f1i(tmp0_desc, 0, StringSerializer_getInstance(), value.start);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.end == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.end);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.event == null)) {
      tmp1_output.f1i(tmp0_desc, 2, $serializer_getInstance_12(), value.event);
    }
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 3)) {
      tmp = true;
    } else {
      var tmp_0 = value.eventsBefore;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 3, tmp2_cached[3].w2(), value.eventsBefore);
    }
    var tmp_1;
    if (tmp1_output.j1i(tmp0_desc, 4)) {
      tmp_1 = true;
    } else {
      var tmp_2 = value.eventsAfter;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = [];
      tmp_1 = !equals(tmp_2, tmp$ret$3);
    }
    if (tmp_1) {
      tmp1_output.e1i(tmp0_desc, 4, tmp2_cached[4].w2(), value.eventsAfter);
    }
    var tmp_3;
    if (tmp1_output.j1i(tmp0_desc, 5)) {
      tmp_3 = true;
    } else {
      var tmp_4 = value.state;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$6 = [];
      tmp_3 = !equals(tmp_4, tmp$ret$6);
    }
    if (tmp_3) {
      tmp1_output.e1i(tmp0_desc, 5, tmp2_cached[5].w2(), value.state);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.u4o(encoder, value instanceof EventsGetContextResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.t4o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.n1g(tmp0_desc);
    var tmp11_cached = Companion_getInstance_14().s4o_1;
    if (tmp10_input.c1h()) {
      tmp4_local0 = tmp10_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.b1h(tmp0_desc, 2, $serializer_getInstance_12(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.z1g(tmp0_desc, 3, tmp11_cached[3].w2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.z1g(tmp0_desc, 4, tmp11_cached[4].w2(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.z1g(tmp0_desc, 5, tmp11_cached[5].w2(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.b1h(tmp0_desc, 2, $serializer_getInstance_12(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.z1g(tmp0_desc, 3, tmp11_cached[3].w2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.z1g(tmp0_desc, 4, tmp11_cached[4].w2(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.z1g(tmp0_desc, 5, tmp11_cached[5].w2(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp10_input.o1g(tmp0_desc);
    return EventsGetContextResponse.v4o(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  l1c() {
    return this.t4o_1;
  }
  r1o() {
    var tmp0_cached = Companion_getInstance_14().s4o_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_12()), tmp0_cached[3].w2(), tmp0_cached[4].w2(), tmp0_cached[5].w2()];
  }
}
class EventsGetContextResponse {
  constructor() {
    Companion_getInstance_14();
    this.start = null;
    this.end = null;
    this.event = null;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.eventsBefore = [];
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_0.eventsAfter = [];
    var tmp_1 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_1.state = [];
  }
  w4o(_set____db54di) {
    this.start = _set____db54di;
  }
  sl() {
    return this.start;
  }
  x4o(_set____db54di) {
    this.end = _set____db54di;
  }
  y4o() {
    return this.end;
  }
  z4o(_set____db54di) {
    this.event = _set____db54di;
  }
  a4p() {
    return this.event;
  }
  b4p(_set____db54di) {
    this.eventsBefore = _set____db54di;
  }
  c4p() {
    return this.eventsBefore;
  }
  d4p(_set____db54di) {
    this.eventsAfter = _set____db54di;
  }
  e4p() {
    return this.eventsAfter;
  }
  f4p(_set____db54di) {
    this.state = _set____db54di;
  }
  g4p() {
    return this.state;
  }
  static v4o(seen0, start, end, event, eventsBefore, eventsAfter, state, serializationConstructorMarker) {
    Companion_getInstance_14();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_13().t4o_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.start = null;
    else
      $this.start = start;
    if (0 === (seen0 & 2))
      $this.end = null;
    else
      $this.end = end;
    if (0 === (seen0 & 4))
      $this.event = null;
    else
      $this.event = event;
    if (0 === (seen0 & 8)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.eventsBefore = [];
    } else
      $this.eventsBefore = eventsBefore;
    if (0 === (seen0 & 16)) {
      var tmp_0 = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0.eventsAfter = [];
    } else
      $this.eventsAfter = eventsAfter;
    if (0 === (seen0 & 32)) {
      var tmp_1 = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1.state = [];
    } else
      $this.state = state;
    return $this;
  }
}
class Companion_14 {
  constructor() {
    Companion_instance_14 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, EventsGetEventResponse$Companion$$childSerializers$_anonymous__wbia8k);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.h4p_1 = [tmp_1, null, null, null, null, null, null, lazy(tmp_2, EventsGetEventResponse$Companion$$childSerializers$_anonymous__wbia8k_0)];
  }
}
class $serializer_14 {
  constructor() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.events.EventsGetEventResponse', this, 8);
    tmp0_serialDesc.c1o('content', true);
    tmp0_serialDesc.c1o('event_id', true);
    tmp0_serialDesc.c1o('origin_server_ts', true);
    tmp0_serialDesc.c1o('room_id', true);
    tmp0_serialDesc.c1o('sender', true);
    tmp0_serialDesc.c1o('type', true);
    tmp0_serialDesc.c1o('state_key', true);
    tmp0_serialDesc.c1o('unsigned', true);
    this.i4p_1 = tmp0_serialDesc;
  }
  j4p(encoder, value) {
    var tmp0_desc = this.i4p_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_15().h4p_1;
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.content;
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.content);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.eventId === '')) {
      tmp1_output.c1i(tmp0_desc, 1, value.eventId);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.originServerTs === 0n)) {
      tmp1_output.y1h(tmp0_desc, 2, value.originServerTs);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.roomId === '')) {
      tmp1_output.c1i(tmp0_desc, 3, value.roomId);
    }
    if (tmp1_output.j1i(tmp0_desc, 4) ? true : !(value.sender === '')) {
      tmp1_output.c1i(tmp0_desc, 4, value.sender);
    }
    if (tmp1_output.j1i(tmp0_desc, 5) ? true : !(value.type === '')) {
      tmp1_output.c1i(tmp0_desc, 5, value.type);
    }
    if (tmp1_output.j1i(tmp0_desc, 6) ? true : !(value.stateKey == null)) {
      tmp1_output.f1i(tmp0_desc, 6, StringSerializer_getInstance(), value.stateKey);
    }
    if (tmp1_output.j1i(tmp0_desc, 7) ? true : !(value.unsigned == null)) {
      tmp1_output.f1i(tmp0_desc, 7, tmp2_cached[7].w2(), value.unsigned);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.j4p(encoder, value instanceof EventsGetEventResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.i4p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0n;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_input = decoder.n1g(tmp0_desc);
    var tmp13_cached = Companion_getInstance_15().h4p_1;
    if (tmp12_input.c1h()) {
      tmp4_local0 = tmp12_input.z1g(tmp0_desc, 0, tmp13_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.x1g(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.t1g(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.x1g(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.x1g(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.x1g(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.b1h(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.b1h(tmp0_desc, 7, tmp13_cached[7].w2(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.z1g(tmp0_desc, 0, tmp13_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.x1g(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.t1g(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.x1g(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.x1g(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.x1g(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.b1h(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.b1h(tmp0_desc, 7, tmp13_cached[7].w2(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp12_input.o1g(tmp0_desc);
    return EventsGetEventResponse.k4p(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  }
  l1c() {
    return this.i4p_1;
  }
  r1o() {
    var tmp0_cached = Companion_getInstance_15().h4p_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].w2(), StringSerializer_getInstance(), LongSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[7].w2())];
  }
}
class EventsGetEventResponse {
  constructor() {
    Companion_getInstance_15();
    var tmp = this;
    // Inline function 'kotlin.collections.mapOf' call
    tmp.content = emptyMap();
    this.eventId = '';
    this.originServerTs = 0n;
    this.roomId = '';
    this.sender = '';
    this.type = '';
    this.stateKey = null;
    this.unsigned = null;
  }
  l4o(_set____db54di) {
    this.content = _set____db54di;
  }
  o20() {
    return this.content;
  }
  m4o(_set____db54di) {
    this.eventId = _set____db54di;
  }
  r4d() {
    return this.eventId;
  }
  n4o(_set____db54di) {
    this.originServerTs = _set____db54di;
  }
  o4o() {
    return this.originServerTs;
  }
  o4n(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  p4o(_set____db54di) {
    this.sender = _set____db54di;
  }
  q4o() {
    return this.sender;
  }
  r4o(_set____db54di) {
    this.type = _set____db54di;
  }
  b4d() {
    return this.type;
  }
  g4j(_set____db54di) {
    this.stateKey = _set____db54di;
  }
  h4j() {
    return this.stateKey;
  }
  l4p(_set____db54di) {
    this.unsigned = _set____db54di;
  }
  m4p() {
    return this.unsigned;
  }
  static k4p(seen0, content, eventId, originServerTs, roomId, sender, type, stateKey, unsigned, serializationConstructorMarker) {
    Companion_getInstance_15();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_14().i4p_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.content = emptyMap();
    } else
      $this.content = content;
    if (0 === (seen0 & 2))
      $this.eventId = '';
    else
      $this.eventId = eventId;
    if (0 === (seen0 & 4))
      $this.originServerTs = 0n;
    else
      $this.originServerTs = originServerTs;
    if (0 === (seen0 & 8))
      $this.roomId = '';
    else
      $this.roomId = roomId;
    if (0 === (seen0 & 16))
      $this.sender = '';
    else
      $this.sender = sender;
    if (0 === (seen0 & 32))
      $this.type = '';
    else
      $this.type = type;
    if (0 === (seen0 & 64))
      $this.stateKey = null;
    else
      $this.stateKey = stateKey;
    if (0 === (seen0 & 128))
      $this.unsigned = null;
    else
      $this.unsigned = unsigned;
    return $this;
  }
}
class Companion_15 {}
class $serializer_15 {
  constructor() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.filter.FilterCreateResponse', this, 1);
    tmp0_serialDesc.c1o('filter_id', true);
    this.n4p_1 = tmp0_serialDesc;
  }
  o4p(encoder, value) {
    var tmp0_desc = this.n4p_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.filterId === '')) {
      tmp1_output.c1i(tmp0_desc, 0, value.filterId);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.o4p(encoder, value instanceof FilterCreateResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.n4p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return FilterCreateResponse.p4p(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.n4p_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class FilterCreateResponse {
  constructor() {
    this.filterId = '';
  }
  q4p(_set____db54di) {
    this.filterId = _set____db54di;
  }
  v4d() {
    return this.filterId;
  }
  static p4p(seen0, filterId, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_15().n4p_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.filterId = '';
    else
      $this.filterId = filterId;
    return $this;
  }
}
class Companion_16 {
  constructor() {
    Companion_instance_16 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.r4p_1 = [lazy(tmp_0, FilterGetResponse$Companion$$childSerializers$_anonymous__p4prqt), null, null, null, null];
  }
}
class $serializer_16 {
  constructor() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.filter.FilterGetResponse', this, 5);
    tmp0_serialDesc.c1o('event_fields', true);
    tmp0_serialDesc.c1o('event_format', true);
    tmp0_serialDesc.c1o('presence', true);
    tmp0_serialDesc.c1o('account_data', true);
    tmp0_serialDesc.c1o('room', true);
    this.s4p_1 = tmp0_serialDesc;
  }
  t4p(encoder, value) {
    var tmp0_desc = this.s4p_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_17().r4p_1;
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.eventFields == null)) {
      tmp1_output.f1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.eventFields);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.eventFormat == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.eventFormat);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.presence == null)) {
      tmp1_output.f1i(tmp0_desc, 2, $serializer_getInstance_17(), value.presence);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.accountData == null)) {
      tmp1_output.f1i(tmp0_desc, 3, $serializer_getInstance_17(), value.accountData);
    }
    if (tmp1_output.j1i(tmp0_desc, 4) ? true : !(value.room == null)) {
      tmp1_output.f1i(tmp0_desc, 4, $serializer_getInstance_18(), value.room);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.t4p(encoder, value instanceof FilterGetResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.s4p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.n1g(tmp0_desc);
    var tmp10_cached = Companion_getInstance_17().r4p_1;
    if (tmp9_input.c1h()) {
      tmp4_local0 = tmp9_input.b1h(tmp0_desc, 0, tmp10_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.b1h(tmp0_desc, 2, $serializer_getInstance_17(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.b1h(tmp0_desc, 3, $serializer_getInstance_17(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.b1h(tmp0_desc, 4, $serializer_getInstance_18(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.b1h(tmp0_desc, 0, tmp10_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.b1h(tmp0_desc, 2, $serializer_getInstance_17(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.b1h(tmp0_desc, 3, $serializer_getInstance_17(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.b1h(tmp0_desc, 4, $serializer_getInstance_18(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp9_input.o1g(tmp0_desc);
    return FilterGetResponse.u4p(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  l1c() {
    return this.s4p_1;
  }
  r1o() {
    var tmp0_cached = Companion_getInstance_17().r4p_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].w2()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_17()), get_nullable($serializer_getInstance_17()), get_nullable($serializer_getInstance_18())];
  }
}
class FilterGetResponse {
  constructor() {
    Companion_getInstance_17();
    this.eventFields = null;
    this.eventFormat = null;
    this.presence = null;
    this.accountData = null;
    this.room = null;
  }
  v4p(_set____db54di) {
    this.eventFields = _set____db54di;
  }
  w4p() {
    return this.eventFields;
  }
  x4p(_set____db54di) {
    this.eventFormat = _set____db54di;
  }
  y4p() {
    return this.eventFormat;
  }
  z4p(_set____db54di) {
    this.presence = _set____db54di;
  }
  k4f() {
    return this.presence;
  }
  a4q(_set____db54di) {
    this.accountData = _set____db54di;
  }
  b4q() {
    return this.accountData;
  }
  c4q(_set____db54di) {
    this.room = _set____db54di;
  }
  d4q() {
    return this.room;
  }
  static u4p(seen0, eventFields, eventFormat, presence, accountData, room, serializationConstructorMarker) {
    Companion_getInstance_17();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_16().s4p_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.eventFields = null;
    else
      $this.eventFields = eventFields;
    if (0 === (seen0 & 2))
      $this.eventFormat = null;
    else
      $this.eventFormat = eventFormat;
    if (0 === (seen0 & 4))
      $this.presence = null;
    else
      $this.presence = presence;
    if (0 === (seen0 & 8))
      $this.accountData = null;
    else
      $this.accountData = accountData;
    if (0 === (seen0 & 16))
      $this.room = null;
    else
      $this.room = room;
    return $this;
  }
}
class Companion_17 {
  constructor() {
    Companion_instance_17 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, EventFilter$Companion$$childSerializers$_anonymous__549l14);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, EventFilter$Companion$$childSerializers$_anonymous__549l14_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, EventFilter$Companion$$childSerializers$_anonymous__549l14_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.e4q_1 = [null, tmp_1, tmp_3, tmp_5, lazy(tmp_6, EventFilter$Companion$$childSerializers$_anonymous__549l14_2)];
  }
}
class $serializer_17 {
  constructor() {
    $serializer_instance_17 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.filter.EventFilter', this, 5);
    tmp0_serialDesc.c1o('limit', true);
    tmp0_serialDesc.c1o('not_senders', true);
    tmp0_serialDesc.c1o('not_types', true);
    tmp0_serialDesc.c1o('senders', true);
    tmp0_serialDesc.c1o('types', true);
    this.f4q_1 = tmp0_serialDesc;
  }
  g4q(encoder, value) {
    var tmp0_desc = this.f4q_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_18().e4q_1;
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.limit == null)) {
      tmp1_output.f1i(tmp0_desc, 0, IntSerializer_getInstance(), value.limit);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.notSenders == null)) {
      tmp1_output.f1i(tmp0_desc, 1, tmp2_cached[1].w2(), value.notSenders);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.notTypes == null)) {
      tmp1_output.f1i(tmp0_desc, 2, tmp2_cached[2].w2(), value.notTypes);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.senders == null)) {
      tmp1_output.f1i(tmp0_desc, 3, tmp2_cached[3].w2(), value.senders);
    }
    if (tmp1_output.j1i(tmp0_desc, 4) ? true : !(value.types == null)) {
      tmp1_output.f1i(tmp0_desc, 4, tmp2_cached[4].w2(), value.types);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.g4q(encoder, value instanceof EventFilter ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.f4q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.n1g(tmp0_desc);
    var tmp10_cached = Companion_getInstance_18().e4q_1;
    if (tmp9_input.c1h()) {
      tmp4_local0 = tmp9_input.b1h(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.b1h(tmp0_desc, 1, tmp10_cached[1].w2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.b1h(tmp0_desc, 2, tmp10_cached[2].w2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.b1h(tmp0_desc, 3, tmp10_cached[3].w2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.b1h(tmp0_desc, 4, tmp10_cached[4].w2(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.b1h(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.b1h(tmp0_desc, 1, tmp10_cached[1].w2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.b1h(tmp0_desc, 2, tmp10_cached[2].w2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.b1h(tmp0_desc, 3, tmp10_cached[3].w2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.b1h(tmp0_desc, 4, tmp10_cached[4].w2(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp9_input.o1g(tmp0_desc);
    return EventFilter.h4q(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  l1c() {
    return this.f4q_1;
  }
  r1o() {
    var tmp0_cached = Companion_getInstance_18().e4q_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[1].w2()), get_nullable(tmp0_cached[2].w2()), get_nullable(tmp0_cached[3].w2()), get_nullable(tmp0_cached[4].w2())];
  }
}
class EventFilter {
  constructor() {
    Companion_getInstance_18();
    this.limit = null;
    this.notSenders = null;
    this.notTypes = null;
    this.senders = null;
    this.types = null;
  }
  i4d(_set____db54di) {
    this.limit = _set____db54di;
  }
  j4d() {
    return this.limit;
  }
  g4e(_set____db54di) {
    this.notSenders = _set____db54di;
  }
  h4e() {
    return this.notSenders;
  }
  i4q(_set____db54di) {
    this.notTypes = _set____db54di;
  }
  j4q() {
    return this.notTypes;
  }
  e4e(_set____db54di) {
    this.senders = _set____db54di;
  }
  f4e() {
    return this.senders;
  }
  k4q(_set____db54di) {
    this.types = _set____db54di;
  }
  l4q() {
    return this.types;
  }
  static h4q(seen0, limit, notSenders, notTypes, senders, types, serializationConstructorMarker) {
    Companion_getInstance_18();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_17().f4q_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.limit = null;
    else
      $this.limit = limit;
    if (0 === (seen0 & 2))
      $this.notSenders = null;
    else
      $this.notSenders = notSenders;
    if (0 === (seen0 & 4))
      $this.notTypes = null;
    else
      $this.notTypes = notTypes;
    if (0 === (seen0 & 8))
      $this.senders = null;
    else
      $this.senders = senders;
    if (0 === (seen0 & 16))
      $this.types = null;
    else
      $this.types = types;
    return $this;
  }
}
class Companion_18 {
  constructor() {
    Companion_instance_18 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, RoomFilter$Companion$$childSerializers$_anonymous__iuz08n);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.m4q_1 = [tmp_1, lazy(tmp_2, RoomFilter$Companion$$childSerializers$_anonymous__iuz08n_0), null, null, null, null, null];
  }
}
class $serializer_18 {
  constructor() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.filter.RoomFilter', this, 7);
    tmp0_serialDesc.c1o('not_rooms', true);
    tmp0_serialDesc.c1o('rooms', true);
    tmp0_serialDesc.c1o('ephemeral', true);
    tmp0_serialDesc.c1o('include_leave', true);
    tmp0_serialDesc.c1o('state', true);
    tmp0_serialDesc.c1o('timeline', true);
    tmp0_serialDesc.c1o('account_data', true);
    this.n4q_1 = tmp0_serialDesc;
  }
  o4q(encoder, value) {
    var tmp0_desc = this.n4q_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_19().m4q_1;
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.notRooms == null)) {
      tmp1_output.f1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.notRooms);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.rooms == null)) {
      tmp1_output.f1i(tmp0_desc, 1, tmp2_cached[1].w2(), value.rooms);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.ephemeral == null)) {
      tmp1_output.f1i(tmp0_desc, 2, $serializer_getInstance_19(), value.ephemeral);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.includeLeave == null)) {
      tmp1_output.f1i(tmp0_desc, 3, BooleanSerializer_getInstance(), value.includeLeave);
    }
    if (tmp1_output.j1i(tmp0_desc, 4) ? true : !(value.state == null)) {
      tmp1_output.f1i(tmp0_desc, 4, $serializer_getInstance_19(), value.state);
    }
    if (tmp1_output.j1i(tmp0_desc, 5) ? true : !(value.timeline == null)) {
      tmp1_output.f1i(tmp0_desc, 5, $serializer_getInstance_19(), value.timeline);
    }
    if (tmp1_output.j1i(tmp0_desc, 6) ? true : !(value.accountData == null)) {
      tmp1_output.f1i(tmp0_desc, 6, $serializer_getInstance_19(), value.accountData);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.o4q(encoder, value instanceof RoomFilter ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.n4q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.n1g(tmp0_desc);
    var tmp12_cached = Companion_getInstance_19().m4q_1;
    if (tmp11_input.c1h()) {
      tmp4_local0 = tmp11_input.b1h(tmp0_desc, 0, tmp12_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.b1h(tmp0_desc, 1, tmp12_cached[1].w2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.b1h(tmp0_desc, 2, $serializer_getInstance_19(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.b1h(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.b1h(tmp0_desc, 4, $serializer_getInstance_19(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.b1h(tmp0_desc, 5, $serializer_getInstance_19(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.b1h(tmp0_desc, 6, $serializer_getInstance_19(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.b1h(tmp0_desc, 0, tmp12_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.b1h(tmp0_desc, 1, tmp12_cached[1].w2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.b1h(tmp0_desc, 2, $serializer_getInstance_19(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.b1h(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.b1h(tmp0_desc, 4, $serializer_getInstance_19(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.b1h(tmp0_desc, 5, $serializer_getInstance_19(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.b1h(tmp0_desc, 6, $serializer_getInstance_19(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp11_input.o1g(tmp0_desc);
    return RoomFilter.p4q(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  l1c() {
    return this.n4q_1;
  }
  r1o() {
    var tmp0_cached = Companion_getInstance_19().m4q_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].w2()), get_nullable(tmp0_cached[1].w2()), get_nullable($serializer_getInstance_19()), get_nullable(BooleanSerializer_getInstance()), get_nullable($serializer_getInstance_19()), get_nullable($serializer_getInstance_19()), get_nullable($serializer_getInstance_19())];
  }
}
class RoomFilter {
  constructor() {
    Companion_getInstance_19();
    this.notRooms = null;
    this.rooms = null;
    this.ephemeral = null;
    this.includeLeave = null;
    this.state = null;
    this.timeline = null;
    this.accountData = null;
  }
  c4e(_set____db54di) {
    this.notRooms = _set____db54di;
  }
  d4e() {
    return this.notRooms;
  }
  a4e(_set____db54di) {
    this.rooms = _set____db54di;
  }
  b4e() {
    return this.rooms;
  }
  q4q(_set____db54di) {
    this.ephemeral = _set____db54di;
  }
  r4q() {
    return this.ephemeral;
  }
  i4e(_set____db54di) {
    this.includeLeave = _set____db54di;
  }
  j4e() {
    return this.includeLeave;
  }
  s4q(_set____db54di) {
    this.state = _set____db54di;
  }
  g4p() {
    return this.state;
  }
  t4q(_set____db54di) {
    this.timeline = _set____db54di;
  }
  u4q() {
    return this.timeline;
  }
  v4q(_set____db54di) {
    this.accountData = _set____db54di;
  }
  b4q() {
    return this.accountData;
  }
  static p4q(seen0, notRooms, rooms, ephemeral, includeLeave, state, timeline, accountData, serializationConstructorMarker) {
    Companion_getInstance_19();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_18().n4q_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.notRooms = null;
    else
      $this.notRooms = notRooms;
    if (0 === (seen0 & 2))
      $this.rooms = null;
    else
      $this.rooms = rooms;
    if (0 === (seen0 & 4))
      $this.ephemeral = null;
    else
      $this.ephemeral = ephemeral;
    if (0 === (seen0 & 8))
      $this.includeLeave = null;
    else
      $this.includeLeave = includeLeave;
    if (0 === (seen0 & 16))
      $this.state = null;
    else
      $this.state = state;
    if (0 === (seen0 & 32))
      $this.timeline = null;
    else
      $this.timeline = timeline;
    if (0 === (seen0 & 64))
      $this.accountData = null;
    else
      $this.accountData = accountData;
    return $this;
  }
}
class Companion_19 {
  constructor() {
    Companion_instance_19 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, RoomEventFilter$Companion$$childSerializers$_anonymous__h8wx9p);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, RoomEventFilter$Companion$$childSerializers$_anonymous__h8wx9p_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, RoomEventFilter$Companion$$childSerializers$_anonymous__h8wx9p_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_7 = lazy(tmp_6, RoomEventFilter$Companion$$childSerializers$_anonymous__h8wx9p_2);
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_9 = lazy(tmp_8, RoomEventFilter$Companion$$childSerializers$_anonymous__h8wx9p_3);
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.w4q_1 = [null, tmp_1, tmp_3, tmp_5, tmp_7, tmp_9, lazy(tmp_10, RoomEventFilter$Companion$$childSerializers$_anonymous__h8wx9p_4), null, null, null];
  }
}
class $serializer_19 {
  constructor() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.filter.RoomEventFilter', this, 10);
    tmp0_serialDesc.c1o('limit', true);
    tmp0_serialDesc.c1o('not_senders', true);
    tmp0_serialDesc.c1o('not_types', true);
    tmp0_serialDesc.c1o('senders', true);
    tmp0_serialDesc.c1o('types', true);
    tmp0_serialDesc.c1o('not_rooms', true);
    tmp0_serialDesc.c1o('rooms', true);
    tmp0_serialDesc.c1o('contains_url', true);
    tmp0_serialDesc.c1o('include_redundant_members', true);
    tmp0_serialDesc.c1o('lazy_load_members', true);
    this.x4q_1 = tmp0_serialDesc;
  }
  y4q(encoder, value) {
    var tmp0_desc = this.x4q_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_20().w4q_1;
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.limit == null)) {
      tmp1_output.f1i(tmp0_desc, 0, IntSerializer_getInstance(), value.limit);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.notSenders == null)) {
      tmp1_output.f1i(tmp0_desc, 1, tmp2_cached[1].w2(), value.notSenders);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.notTypes == null)) {
      tmp1_output.f1i(tmp0_desc, 2, tmp2_cached[2].w2(), value.notTypes);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.senders == null)) {
      tmp1_output.f1i(tmp0_desc, 3, tmp2_cached[3].w2(), value.senders);
    }
    if (tmp1_output.j1i(tmp0_desc, 4) ? true : !(value.types == null)) {
      tmp1_output.f1i(tmp0_desc, 4, tmp2_cached[4].w2(), value.types);
    }
    if (tmp1_output.j1i(tmp0_desc, 5) ? true : !(value.notRooms == null)) {
      tmp1_output.f1i(tmp0_desc, 5, tmp2_cached[5].w2(), value.notRooms);
    }
    if (tmp1_output.j1i(tmp0_desc, 6) ? true : !(value.rooms == null)) {
      tmp1_output.f1i(tmp0_desc, 6, tmp2_cached[6].w2(), value.rooms);
    }
    if (tmp1_output.j1i(tmp0_desc, 7) ? true : !(value.containsUrl == null)) {
      tmp1_output.f1i(tmp0_desc, 7, BooleanSerializer_getInstance(), value.containsUrl);
    }
    if (tmp1_output.j1i(tmp0_desc, 8) ? true : !(value.includeRedundantMembers == null)) {
      tmp1_output.f1i(tmp0_desc, 8, BooleanSerializer_getInstance(), value.includeRedundantMembers);
    }
    if (tmp1_output.j1i(tmp0_desc, 9) ? true : !(value.lazyLoadMembers == null)) {
      tmp1_output.f1i(tmp0_desc, 9, BooleanSerializer_getInstance(), value.lazyLoadMembers);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.y4q(encoder, value instanceof RoomEventFilter ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.x4q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_input = decoder.n1g(tmp0_desc);
    var tmp15_cached = Companion_getInstance_20().w4q_1;
    if (tmp14_input.c1h()) {
      tmp4_local0 = tmp14_input.b1h(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp14_input.b1h(tmp0_desc, 1, tmp15_cached[1].w2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp14_input.b1h(tmp0_desc, 2, tmp15_cached[2].w2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp14_input.b1h(tmp0_desc, 3, tmp15_cached[3].w2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp14_input.b1h(tmp0_desc, 4, tmp15_cached[4].w2(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp14_input.b1h(tmp0_desc, 5, tmp15_cached[5].w2(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp14_input.b1h(tmp0_desc, 6, tmp15_cached[6].w2(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp14_input.b1h(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp14_input.b1h(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp14_input.b1h(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp14_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp14_input.b1h(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp14_input.b1h(tmp0_desc, 1, tmp15_cached[1].w2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp14_input.b1h(tmp0_desc, 2, tmp15_cached[2].w2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp14_input.b1h(tmp0_desc, 3, tmp15_cached[3].w2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp14_input.b1h(tmp0_desc, 4, tmp15_cached[4].w2(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp14_input.b1h(tmp0_desc, 5, tmp15_cached[5].w2(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp14_input.b1h(tmp0_desc, 6, tmp15_cached[6].w2(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp14_input.b1h(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp14_input.b1h(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp14_input.b1h(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp14_input.o1g(tmp0_desc);
    return RoomEventFilter.z4q(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, null);
  }
  l1c() {
    return this.x4q_1;
  }
  r1o() {
    var tmp0_cached = Companion_getInstance_20().w4q_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[1].w2()), get_nullable(tmp0_cached[2].w2()), get_nullable(tmp0_cached[3].w2()), get_nullable(tmp0_cached[4].w2()), get_nullable(tmp0_cached[5].w2()), get_nullable(tmp0_cached[6].w2()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  }
}
class RoomEventFilter {
  constructor() {
    Companion_getInstance_20();
    this.limit = null;
    this.notSenders = null;
    this.notTypes = null;
    this.senders = null;
    this.types = null;
    this.notRooms = null;
    this.rooms = null;
    this.containsUrl = null;
    this.includeRedundantMembers = null;
    this.lazyLoadMembers = null;
  }
  i4d(_set____db54di) {
    this.limit = _set____db54di;
  }
  j4d() {
    return this.limit;
  }
  g4e(_set____db54di) {
    this.notSenders = _set____db54di;
  }
  h4e() {
    return this.notSenders;
  }
  i4q(_set____db54di) {
    this.notTypes = _set____db54di;
  }
  j4q() {
    return this.notTypes;
  }
  e4e(_set____db54di) {
    this.senders = _set____db54di;
  }
  f4e() {
    return this.senders;
  }
  k4q(_set____db54di) {
    this.types = _set____db54di;
  }
  l4q() {
    return this.types;
  }
  c4e(_set____db54di) {
    this.notRooms = _set____db54di;
  }
  d4e() {
    return this.notRooms;
  }
  a4e(_set____db54di) {
    this.rooms = _set____db54di;
  }
  b4e() {
    return this.rooms;
  }
  a4r(_set____db54di) {
    this.containsUrl = _set____db54di;
  }
  b4r() {
    return this.containsUrl;
  }
  c4r(_set____db54di) {
    this.includeRedundantMembers = _set____db54di;
  }
  d4r() {
    return this.includeRedundantMembers;
  }
  e4r(_set____db54di) {
    this.lazyLoadMembers = _set____db54di;
  }
  f4r() {
    return this.lazyLoadMembers;
  }
  static z4q(seen0, limit, notSenders, notTypes, senders, types, notRooms, rooms, containsUrl, includeRedundantMembers, lazyLoadMembers, serializationConstructorMarker) {
    Companion_getInstance_20();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_19().x4q_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.limit = null;
    else
      $this.limit = limit;
    if (0 === (seen0 & 2))
      $this.notSenders = null;
    else
      $this.notSenders = notSenders;
    if (0 === (seen0 & 4))
      $this.notTypes = null;
    else
      $this.notTypes = notTypes;
    if (0 === (seen0 & 8))
      $this.senders = null;
    else
      $this.senders = senders;
    if (0 === (seen0 & 16))
      $this.types = null;
    else
      $this.types = types;
    if (0 === (seen0 & 32))
      $this.notRooms = null;
    else
      $this.notRooms = notRooms;
    if (0 === (seen0 & 64))
      $this.rooms = null;
    else
      $this.rooms = rooms;
    if (0 === (seen0 & 128))
      $this.containsUrl = null;
    else
      $this.containsUrl = containsUrl;
    if (0 === (seen0 & 256))
      $this.includeRedundantMembers = null;
    else
      $this.includeRedundantMembers = includeRedundantMembers;
    if (0 === (seen0 & 512))
      $this.lazyLoadMembers = null;
    else
      $this.lazyLoadMembers = lazyLoadMembers;
    return $this;
  }
}
class Companion_20 {
  constructor() {
    Companion_instance_20 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.g4r_1 = [lazy(tmp_0, LoginGetLoginFlowsResponse$Companion$$childSerializers$_anonymous__dccxb4)];
  }
}
class $serializer_20 {
  constructor() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.login.LoginGetLoginFlowsResponse', this, 1);
    tmp0_serialDesc.c1o('flows', true);
    this.h4r_1 = tmp0_serialDesc;
  }
  i4r(encoder, value) {
    var tmp0_desc = this.h4r_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_21().g4r_1;
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.flows;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.flows);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.i4r(encoder, value instanceof LoginGetLoginFlowsResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.h4r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    var tmp6_cached = Companion_getInstance_21().g4r_1;
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, tmp6_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, tmp6_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return LoginGetLoginFlowsResponse.j4r(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.h4r_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_21().g4r_1[0].w2()];
  }
}
class LoginGetLoginFlowsResponse {
  constructor() {
    Companion_getInstance_21();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.flows = [];
  }
  k4r(_set____db54di) {
    this.flows = _set____db54di;
  }
  l4r() {
    return this.flows;
  }
  static j4r(seen0, flows, serializationConstructorMarker) {
    Companion_getInstance_21();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_20().h4r_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.flows = [];
    } else
      $this.flows = flows;
    return $this;
  }
}
class Companion_21 {}
class $serializer_21 {
  constructor() {
    $serializer_instance_21 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.login.LoginFlow', this, 1);
    tmp0_serialDesc.c1o('type', false);
    this.m4r_1 = tmp0_serialDesc;
  }
  n4r(encoder, value) {
    var tmp0_desc = this.m4r_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    tmp1_output.c1i(tmp0_desc, 0, value.type);
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.n4r(encoder, value instanceof LoginFlow ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.m4r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return LoginFlow.p4r(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.m4r_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class LoginFlow {
  r4o(_set____db54di) {
    this.o4r_1 = _set____db54di;
  }
  b4d() {
    var tmp = this.o4r_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('type');
    }
  }
  static p4r(seen0, type, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_21().m4r_1);
    }
    var $this = createThis(this);
    $this.o4r_1 = type;
    return $this;
  }
  get type() {
    return this.b4d();
  }
  set type(value) {
    this.r4o(value);
  }
}
class Companion_22 {}
class $serializer_22 {
  constructor() {
    $serializer_instance_22 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.login.LoginPasswordResponse', this, 4);
    tmp0_serialDesc.c1o('user_id', false);
    tmp0_serialDesc.c1o('access_token', false);
    tmp0_serialDesc.c1o('device_id', false);
    tmp0_serialDesc.c1o('home_server', true);
    this.q4r_1 = tmp0_serialDesc;
  }
  r4r(encoder, value) {
    var tmp0_desc = this.q4r_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    tmp1_output.c1i(tmp0_desc, 0, value.userId);
    tmp1_output.c1i(tmp0_desc, 1, value.accessToken);
    tmp1_output.c1i(tmp0_desc, 2, value.deviceId);
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.homeServer == null)) {
      tmp1_output.f1i(tmp0_desc, 3, StringSerializer_getInstance(), value.homeServer);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.r4r(encoder, value instanceof LoginPasswordResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.q4r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.n1g(tmp0_desc);
    if (tmp8_input.c1h()) {
      tmp4_local0 = tmp8_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.x1g(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.x1g(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.x1g(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.x1g(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp8_input.o1g(tmp0_desc);
    return LoginPasswordResponse.v4r(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  l1c() {
    return this.q4r_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class LoginPasswordResponse {
  constructor() {
    this.homeServer = null;
  }
  z4k(_set____db54di) {
    this.s4r_1 = _set____db54di;
  }
  x4c() {
    var tmp = this.s4r_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('userId');
    }
  }
  w4r(_set____db54di) {
    this.t4r_1 = _set____db54di;
  }
  q4k() {
    var tmp = this.t4r_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('accessToken');
    }
  }
  m4m(_set____db54di) {
    this.u4r_1 = _set____db54di;
  }
  f4d() {
    var tmp = this.u4r_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('deviceId');
    }
  }
  x4r(_set____db54di) {
    this.homeServer = _set____db54di;
  }
  r4k() {
    return this.homeServer;
  }
  static v4r(seen0, userId, accessToken, deviceId, homeServer, serializationConstructorMarker) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_22().q4r_1);
    }
    var $this = createThis(this);
    $this.s4r_1 = userId;
    $this.t4r_1 = accessToken;
    $this.u4r_1 = deviceId;
    if (0 === (seen0 & 8))
      $this.homeServer = null;
    else
      $this.homeServer = homeServer;
    return $this;
  }
  get userId() {
    return this.x4c();
  }
  set userId(value) {
    this.z4k(value);
  }
  get accessToken() {
    return this.q4k();
  }
  set accessToken(value) {
    this.w4r(value);
  }
  get deviceId() {
    return this.f4d();
  }
  set deviceId(value) {
    this.m4m(value);
  }
}
class Companion_23 {}
class $serializer_23 {
  constructor() {
    $serializer_instance_23 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.media.MediaGetConfigResponse', this, 1);
    tmp0_serialDesc.c1o('m.upload.size', true);
    this.y4r_1 = tmp0_serialDesc;
  }
  z4r(encoder, value) {
    var tmp0_desc = this.y4r_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.uploadSize == null)) {
      tmp1_output.f1i(tmp0_desc, 0, LongSerializer_getInstance(), value.uploadSize);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.z4r(encoder, value instanceof MediaGetConfigResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.y4r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, LongSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, LongSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return MediaGetConfigResponse.a4s(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.y4r_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(LongSerializer_getInstance())];
  }
}
class MediaGetConfigResponse {
  constructor() {
    this.uploadSize = null;
  }
  b4s(_set____db54di) {
    this.uploadSize = _set____db54di;
  }
  c4s() {
    return this.uploadSize;
  }
  static a4s(seen0, uploadSize, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_23().y4r_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.uploadSize = null;
    else
      $this.uploadSize = uploadSize;
    return $this;
  }
}
class Companion_24 {}
class $serializer_24 {
  constructor() {
    $serializer_instance_24 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.media.MediaPreviewUrlResponse', this, 10);
    tmp0_serialDesc.c1o('og:title', true);
    tmp0_serialDesc.c1o('og:description', true);
    tmp0_serialDesc.c1o('og:image', true);
    tmp0_serialDesc.c1o('og:image:type', true);
    tmp0_serialDesc.c1o('og:image:width', true);
    tmp0_serialDesc.c1o('og:image:height', true);
    tmp0_serialDesc.c1o('matrix:image:size', true);
    tmp0_serialDesc.c1o('og:type', true);
    tmp0_serialDesc.c1o('og:url', true);
    tmp0_serialDesc.c1o('og:site_name', true);
    this.d4s_1 = tmp0_serialDesc;
  }
  e4s(encoder, value) {
    var tmp0_desc = this.d4s_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.ogTitle == null)) {
      tmp1_output.f1i(tmp0_desc, 0, StringSerializer_getInstance(), value.ogTitle);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.ogDescription == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.ogDescription);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.ogImage == null)) {
      tmp1_output.f1i(tmp0_desc, 2, StringSerializer_getInstance(), value.ogImage);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.ogImageType == null)) {
      tmp1_output.f1i(tmp0_desc, 3, StringSerializer_getInstance(), value.ogImageType);
    }
    if (tmp1_output.j1i(tmp0_desc, 4) ? true : !(value.ogImageWidth == null)) {
      tmp1_output.f1i(tmp0_desc, 4, IntSerializer_getInstance(), value.ogImageWidth);
    }
    if (tmp1_output.j1i(tmp0_desc, 5) ? true : !(value.ogImageHeight == null)) {
      tmp1_output.f1i(tmp0_desc, 5, IntSerializer_getInstance(), value.ogImageHeight);
    }
    if (tmp1_output.j1i(tmp0_desc, 6) ? true : !(value.matrixImageSize == null)) {
      tmp1_output.f1i(tmp0_desc, 6, LongSerializer_getInstance(), value.matrixImageSize);
    }
    if (tmp1_output.j1i(tmp0_desc, 7) ? true : !(value.ogType == null)) {
      tmp1_output.f1i(tmp0_desc, 7, StringSerializer_getInstance(), value.ogType);
    }
    if (tmp1_output.j1i(tmp0_desc, 8) ? true : !(value.ogUrl == null)) {
      tmp1_output.f1i(tmp0_desc, 8, StringSerializer_getInstance(), value.ogUrl);
    }
    if (tmp1_output.j1i(tmp0_desc, 9) ? true : !(value.ogSiteName == null)) {
      tmp1_output.f1i(tmp0_desc, 9, StringSerializer_getInstance(), value.ogSiteName);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.e4s(encoder, value instanceof MediaPreviewUrlResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.d4s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_input = decoder.n1g(tmp0_desc);
    if (tmp14_input.c1h()) {
      tmp4_local0 = tmp14_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp14_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp14_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp14_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp14_input.b1h(tmp0_desc, 4, IntSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp14_input.b1h(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp14_input.b1h(tmp0_desc, 6, LongSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp14_input.b1h(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp14_input.b1h(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp14_input.b1h(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp14_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp14_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp14_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp14_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp14_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp14_input.b1h(tmp0_desc, 4, IntSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp14_input.b1h(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp14_input.b1h(tmp0_desc, 6, LongSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp14_input.b1h(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp14_input.b1h(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp14_input.b1h(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp14_input.o1g(tmp0_desc);
    return MediaPreviewUrlResponse.f4s(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, null);
  }
  l1c() {
    return this.d4s_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(LongSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class MediaPreviewUrlResponse {
  constructor() {
    this.ogTitle = null;
    this.ogDescription = null;
    this.ogImage = null;
    this.ogImageType = null;
    this.ogImageWidth = null;
    this.ogImageHeight = null;
    this.matrixImageSize = null;
    this.ogType = null;
    this.ogUrl = null;
    this.ogSiteName = null;
  }
  g4s(_set____db54di) {
    this.ogTitle = _set____db54di;
  }
  h4s() {
    return this.ogTitle;
  }
  i4s(_set____db54di) {
    this.ogDescription = _set____db54di;
  }
  j4s() {
    return this.ogDescription;
  }
  k4s(_set____db54di) {
    this.ogImage = _set____db54di;
  }
  l4s() {
    return this.ogImage;
  }
  m4s(_set____db54di) {
    this.ogImageType = _set____db54di;
  }
  n4s() {
    return this.ogImageType;
  }
  o4s(_set____db54di) {
    this.ogImageWidth = _set____db54di;
  }
  p4s() {
    return this.ogImageWidth;
  }
  q4s(_set____db54di) {
    this.ogImageHeight = _set____db54di;
  }
  r4s() {
    return this.ogImageHeight;
  }
  s4s(_set____db54di) {
    this.matrixImageSize = _set____db54di;
  }
  t4s() {
    return this.matrixImageSize;
  }
  u4s(_set____db54di) {
    this.ogType = _set____db54di;
  }
  v4s() {
    return this.ogType;
  }
  w4s(_set____db54di) {
    this.ogUrl = _set____db54di;
  }
  x4s() {
    return this.ogUrl;
  }
  y4s(_set____db54di) {
    this.ogSiteName = _set____db54di;
  }
  z4s() {
    return this.ogSiteName;
  }
  static f4s(seen0, ogTitle, ogDescription, ogImage, ogImageType, ogImageWidth, ogImageHeight, matrixImageSize, ogType, ogUrl, ogSiteName, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_24().d4s_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.ogTitle = null;
    else
      $this.ogTitle = ogTitle;
    if (0 === (seen0 & 2))
      $this.ogDescription = null;
    else
      $this.ogDescription = ogDescription;
    if (0 === (seen0 & 4))
      $this.ogImage = null;
    else
      $this.ogImage = ogImage;
    if (0 === (seen0 & 8))
      $this.ogImageType = null;
    else
      $this.ogImageType = ogImageType;
    if (0 === (seen0 & 16))
      $this.ogImageWidth = null;
    else
      $this.ogImageWidth = ogImageWidth;
    if (0 === (seen0 & 32))
      $this.ogImageHeight = null;
    else
      $this.ogImageHeight = ogImageHeight;
    if (0 === (seen0 & 64))
      $this.matrixImageSize = null;
    else
      $this.matrixImageSize = matrixImageSize;
    if (0 === (seen0 & 128))
      $this.ogType = null;
    else
      $this.ogType = ogType;
    if (0 === (seen0 & 256))
      $this.ogUrl = null;
    else
      $this.ogUrl = ogUrl;
    if (0 === (seen0 & 512))
      $this.ogSiteName = null;
    else
      $this.ogSiteName = ogSiteName;
    return $this;
  }
}
class Companion_25 {}
class $serializer_25 {
  constructor() {
    $serializer_instance_25 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.media.MediaUploadResponse', this, 1);
    tmp0_serialDesc.c1o('content_uri', true);
    this.a4t_1 = tmp0_serialDesc;
  }
  b4t(encoder, value) {
    var tmp0_desc = this.a4t_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.contentUri === '')) {
      tmp1_output.c1i(tmp0_desc, 0, value.contentUri);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.b4t(encoder, value instanceof MediaUploadResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.a4t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return MediaUploadResponse.c4t(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.a4t_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class MediaUploadResponse {
  constructor() {
    this.contentUri = '';
  }
  d4t(_set____db54di) {
    this.contentUri = _set____db54di;
  }
  e4t() {
    return this.contentUri;
  }
  static c4t(seen0, contentUri, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_25().a4t_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.contentUri = '';
    else
      $this.contentUri = contentUri;
    return $this;
  }
}
class Companion_26 {
  constructor() {
    Companion_instance_26 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.f4t_1 = [lazy(tmp_0, NotificationsGetResponse$Notification$Companion$$childSerializers$_anonymous__yeqkcq), null, null, null, null, null];
  }
}
class $serializer_26 {
  constructor() {
    $serializer_instance_26 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.notifications.NotificationsGetResponse.Notification', this, 6);
    tmp0_serialDesc.c1o('actions', true);
    tmp0_serialDesc.c1o('event', true);
    tmp0_serialDesc.c1o('profile_tag', true);
    tmp0_serialDesc.c1o('read', true);
    tmp0_serialDesc.c1o('room_id', true);
    tmp0_serialDesc.c1o('ts', true);
    this.g4t_1 = tmp0_serialDesc;
  }
  h4t(encoder, value) {
    var tmp0_desc = this.g4t_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_27().f4t_1;
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.actions;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.actions);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !equals(value.event, new Event())) {
      tmp1_output.e1i(tmp0_desc, 1, $serializer_getInstance_27(), value.event);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.profileTag == null)) {
      tmp1_output.f1i(tmp0_desc, 2, StringSerializer_getInstance(), value.profileTag);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.read === false)) {
      tmp1_output.u1h(tmp0_desc, 3, value.read);
    }
    if (tmp1_output.j1i(tmp0_desc, 4) ? true : !(value.roomId === '')) {
      tmp1_output.c1i(tmp0_desc, 4, value.roomId);
    }
    if (tmp1_output.j1i(tmp0_desc, 5) ? true : !(value.ts === 0n)) {
      tmp1_output.y1h(tmp0_desc, 5, value.ts);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.h4t(encoder, value instanceof Notification ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.g4t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = false;
    var tmp8_local4 = null;
    var tmp9_local5 = 0n;
    var tmp10_input = decoder.n1g(tmp0_desc);
    var tmp11_cached = Companion_getInstance_27().f4t_1;
    if (tmp10_input.c1h()) {
      tmp4_local0 = tmp10_input.z1g(tmp0_desc, 0, tmp11_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.z1g(tmp0_desc, 1, $serializer_getInstance_27(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.p1g(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.x1g(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.t1g(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.z1g(tmp0_desc, 0, tmp11_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.z1g(tmp0_desc, 1, $serializer_getInstance_27(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.p1g(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.x1g(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.t1g(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp10_input.o1g(tmp0_desc);
    return Notification.i4t(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  l1c() {
    return this.g4t_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_27().f4t_1[0].w2(), $serializer_getInstance_27(), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), StringSerializer_getInstance(), LongSerializer_getInstance()];
  }
}
class Companion_27 {
  constructor() {
    Companion_instance_27 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.j4t_1 = [lazy(tmp_0, NotificationsGetResponse$Event$Companion$$childSerializers$_anonymous__vjt0yj), null, null, null, null, null, null];
  }
}
class $serializer_27 {
  constructor() {
    $serializer_instance_27 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.notifications.NotificationsGetResponse.Event', this, 7);
    tmp0_serialDesc.c1o('content', true);
    tmp0_serialDesc.c1o('event_id', true);
    tmp0_serialDesc.c1o('origin_server_ts', true);
    tmp0_serialDesc.c1o('room_id', true);
    tmp0_serialDesc.c1o('sender', true);
    tmp0_serialDesc.c1o('type', true);
    tmp0_serialDesc.c1o('state_key', true);
    this.k4t_1 = tmp0_serialDesc;
  }
  l4t(encoder, value) {
    var tmp0_desc = this.k4t_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_28().j4t_1;
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.content;
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.content);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.eventId === '')) {
      tmp1_output.c1i(tmp0_desc, 1, value.eventId);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.originServerTs === 0n)) {
      tmp1_output.y1h(tmp0_desc, 2, value.originServerTs);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.roomId == null)) {
      tmp1_output.f1i(tmp0_desc, 3, StringSerializer_getInstance(), value.roomId);
    }
    if (tmp1_output.j1i(tmp0_desc, 4) ? true : !(value.sender === '')) {
      tmp1_output.c1i(tmp0_desc, 4, value.sender);
    }
    if (tmp1_output.j1i(tmp0_desc, 5) ? true : !(value.type === '')) {
      tmp1_output.c1i(tmp0_desc, 5, value.type);
    }
    if (tmp1_output.j1i(tmp0_desc, 6) ? true : !(value.stateKey == null)) {
      tmp1_output.f1i(tmp0_desc, 6, StringSerializer_getInstance(), value.stateKey);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.l4t(encoder, value instanceof Event ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.k4t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0n;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.n1g(tmp0_desc);
    var tmp12_cached = Companion_getInstance_28().j4t_1;
    if (tmp11_input.c1h()) {
      tmp4_local0 = tmp11_input.z1g(tmp0_desc, 0, tmp12_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.x1g(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.t1g(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.x1g(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.x1g(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.b1h(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.z1g(tmp0_desc, 0, tmp12_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.x1g(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.t1g(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.x1g(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.x1g(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.b1h(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp11_input.o1g(tmp0_desc);
    return Event.m4t(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  l1c() {
    return this.k4t_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_28().j4t_1[0].w2(), StringSerializer_getInstance(), LongSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class Notification {
  constructor() {
    Companion_getInstance_27();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.actions = [];
    this.event = new Event();
    this.profileTag = null;
    this.read = false;
    this.roomId = '';
    this.ts = 0n;
  }
  n4t(_set____db54di) {
    this.actions = _set____db54di;
  }
  b4g() {
    return this.actions;
  }
  o4t(_set____db54di) {
    this.event = _set____db54di;
  }
  a4p() {
    return this.event;
  }
  m4g(_set____db54di) {
    this.profileTag = _set____db54di;
  }
  n4g() {
    return this.profileTag;
  }
  p4t(_set____db54di) {
    this.read = _set____db54di;
  }
  l4j() {
    return this.read;
  }
  o4n(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  q4t(_set____db54di) {
    this.ts = _set____db54di;
  }
  u4e() {
    return this.ts;
  }
  static i4t(seen0, actions, event, profileTag, read, roomId, ts, serializationConstructorMarker) {
    Companion_getInstance_27();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_26().g4t_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.actions = [];
    } else
      $this.actions = actions;
    if (0 === (seen0 & 2))
      $this.event = new Event();
    else
      $this.event = event;
    if (0 === (seen0 & 4))
      $this.profileTag = null;
    else
      $this.profileTag = profileTag;
    if (0 === (seen0 & 8))
      $this.read = false;
    else
      $this.read = read;
    if (0 === (seen0 & 16))
      $this.roomId = '';
    else
      $this.roomId = roomId;
    if (0 === (seen0 & 32))
      $this.ts = 0n;
    else
      $this.ts = ts;
    return $this;
  }
}
class Event {
  constructor() {
    Companion_getInstance_28();
    var tmp = this;
    // Inline function 'kotlin.collections.mapOf' call
    tmp.content = emptyMap();
    this.eventId = '';
    this.originServerTs = 0n;
    this.roomId = null;
    this.sender = '';
    this.type = '';
    this.stateKey = null;
  }
  l4o(_set____db54di) {
    this.content = _set____db54di;
  }
  o20() {
    return this.content;
  }
  m4o(_set____db54di) {
    this.eventId = _set____db54di;
  }
  r4d() {
    return this.eventId;
  }
  n4o(_set____db54di) {
    this.originServerTs = _set____db54di;
  }
  o4o() {
    return this.originServerTs;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  p4o(_set____db54di) {
    this.sender = _set____db54di;
  }
  q4o() {
    return this.sender;
  }
  r4o(_set____db54di) {
    this.type = _set____db54di;
  }
  b4d() {
    return this.type;
  }
  g4j(_set____db54di) {
    this.stateKey = _set____db54di;
  }
  h4j() {
    return this.stateKey;
  }
  static m4t(seen0, content, eventId, originServerTs, roomId, sender, type, stateKey, serializationConstructorMarker) {
    Companion_getInstance_28();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_27().k4t_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.content = emptyMap();
    } else
      $this.content = content;
    if (0 === (seen0 & 2))
      $this.eventId = '';
    else
      $this.eventId = eventId;
    if (0 === (seen0 & 4))
      $this.originServerTs = 0n;
    else
      $this.originServerTs = originServerTs;
    if (0 === (seen0 & 8))
      $this.roomId = null;
    else
      $this.roomId = roomId;
    if (0 === (seen0 & 16))
      $this.sender = '';
    else
      $this.sender = sender;
    if (0 === (seen0 & 32))
      $this.type = '';
    else
      $this.type = type;
    if (0 === (seen0 & 64))
      $this.stateKey = null;
    else
      $this.stateKey = stateKey;
    return $this;
  }
}
class Companion_28 {
  constructor() {
    Companion_instance_28 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.r4t_1 = [null, lazy(tmp_0, NotificationsGetResponse$Companion$$childSerializers$_anonymous__27uumd)];
  }
}
class $serializer_28 {
  constructor() {
    $serializer_instance_28 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.notifications.NotificationsGetResponse', this, 2);
    tmp0_serialDesc.c1o('next_token', true);
    tmp0_serialDesc.c1o('notifications', true);
    this.s4t_1 = tmp0_serialDesc;
  }
  t4t(encoder, value) {
    var tmp0_desc = this.s4t_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_29().r4t_1;
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.nextToken == null)) {
      tmp1_output.f1i(tmp0_desc, 0, StringSerializer_getInstance(), value.nextToken);
    }
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 1)) {
      tmp = true;
    } else {
      var tmp_0 = value.notifications;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 1, tmp2_cached[1].w2(), value.notifications);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.t4t(encoder, value instanceof NotificationsGetResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.s4t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.n1g(tmp0_desc);
    var tmp7_cached = Companion_getInstance_29().r4t_1;
    if (tmp6_input.c1h()) {
      tmp4_local0 = tmp6_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.z1g(tmp0_desc, 1, tmp7_cached[1].w2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.z1g(tmp0_desc, 1, tmp7_cached[1].w2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp6_input.o1g(tmp0_desc);
    return NotificationsGetResponse.u4t(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  l1c() {
    return this.s4t_1;
  }
  r1o() {
    var tmp0_cached = Companion_getInstance_29().r4t_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), tmp0_cached[1].w2()];
  }
}
class NotificationsGetResponse {
  constructor() {
    Companion_getInstance_29();
    this.nextToken = null;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.notifications = [];
  }
  v4t(_set____db54di) {
    this.nextToken = _set____db54di;
  }
  w4t() {
    return this.nextToken;
  }
  x4t(_set____db54di) {
    this.notifications = _set____db54di;
  }
  y4t() {
    return this.notifications;
  }
  static u4t(seen0, nextToken, notifications, serializationConstructorMarker) {
    Companion_getInstance_29();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_28().s4t_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.nextToken = null;
    else
      $this.nextToken = nextToken;
    if (0 === (seen0 & 2)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.notifications = [];
    } else
      $this.notifications = notifications;
    return $this;
  }
}
class Companion_29 {}
class $serializer_29 {
  constructor() {
    $serializer_instance_29 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.presence.PresenceGetResponse', this, 4);
    tmp0_serialDesc.c1o('presence', true);
    tmp0_serialDesc.c1o('last_active_ago', true);
    tmp0_serialDesc.c1o('status_msg', true);
    tmp0_serialDesc.c1o('currently_active', true);
    this.z4t_1 = tmp0_serialDesc;
  }
  a4u(encoder, value) {
    var tmp0_desc = this.z4t_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.presence === '')) {
      tmp1_output.c1i(tmp0_desc, 0, value.presence);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.lastActiveAgo == null)) {
      tmp1_output.f1i(tmp0_desc, 1, LongSerializer_getInstance(), value.lastActiveAgo);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.statusMsg == null)) {
      tmp1_output.f1i(tmp0_desc, 2, StringSerializer_getInstance(), value.statusMsg);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.currentlyActive == null)) {
      tmp1_output.f1i(tmp0_desc, 3, BooleanSerializer_getInstance(), value.currentlyActive);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.a4u(encoder, value instanceof PresenceGetResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.z4t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.n1g(tmp0_desc);
    if (tmp8_input.c1h()) {
      tmp4_local0 = tmp8_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.b1h(tmp0_desc, 1, LongSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.b1h(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.b1h(tmp0_desc, 1, LongSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.b1h(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp8_input.o1g(tmp0_desc);
    return PresenceGetResponse.b4u(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  l1c() {
    return this.z4t_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(LongSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  }
}
class PresenceGetResponse {
  constructor() {
    this.presence = '';
    this.lastActiveAgo = null;
    this.statusMsg = null;
    this.currentlyActive = null;
  }
  c4u(_set____db54di) {
    this.presence = _set____db54di;
  }
  k4f() {
    return this.presence;
  }
  d4u(_set____db54di) {
    this.lastActiveAgo = _set____db54di;
  }
  e4u() {
    return this.lastActiveAgo;
  }
  l4f(_set____db54di) {
    this.statusMsg = _set____db54di;
  }
  m4f() {
    return this.statusMsg;
  }
  f4u(_set____db54di) {
    this.currentlyActive = _set____db54di;
  }
  g4u() {
    return this.currentlyActive;
  }
  static b4u(seen0, presence, lastActiveAgo, statusMsg, currentlyActive, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_29().z4t_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.presence = '';
    else
      $this.presence = presence;
    if (0 === (seen0 & 2))
      $this.lastActiveAgo = null;
    else
      $this.lastActiveAgo = lastActiveAgo;
    if (0 === (seen0 & 4))
      $this.statusMsg = null;
    else
      $this.statusMsg = statusMsg;
    if (0 === (seen0 & 8))
      $this.currentlyActive = null;
    else
      $this.currentlyActive = currentlyActive;
    return $this;
  }
}
class Companion_30 {}
class $serializer_30 {
  constructor() {
    $serializer_instance_30 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.profile.ProfileGetAvatarUrlResponse', this, 1);
    tmp0_serialDesc.c1o('avatar_url', true);
    this.h4u_1 = tmp0_serialDesc;
  }
  i4u(encoder, value) {
    var tmp0_desc = this.h4u_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.avatarUrl == null)) {
      tmp1_output.f1i(tmp0_desc, 0, StringSerializer_getInstance(), value.avatarUrl);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.i4u(encoder, value instanceof ProfileGetAvatarUrlResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.h4u_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return ProfileGetAvatarUrlResponse.j4u(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.h4u_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  }
}
class ProfileGetAvatarUrlResponse {
  constructor() {
    this.avatarUrl = null;
  }
  n4f(_set____db54di) {
    this.avatarUrl = _set____db54di;
  }
  o4f() {
    return this.avatarUrl;
  }
  static j4u(seen0, avatarUrl, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_30().h4u_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.avatarUrl = null;
    else
      $this.avatarUrl = avatarUrl;
    return $this;
  }
}
class Companion_31 {}
class $serializer_31 {
  constructor() {
    $serializer_instance_31 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.profile.ProfileGetDisplayNameResponse', this, 1);
    tmp0_serialDesc.c1o('displayname', true);
    this.k4u_1 = tmp0_serialDesc;
  }
  l4u(encoder, value) {
    var tmp0_desc = this.k4u_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.displayname == null)) {
      tmp1_output.f1i(tmp0_desc, 0, StringSerializer_getInstance(), value.displayname);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.l4u(encoder, value instanceof ProfileGetDisplayNameResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.k4u_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return ProfileGetDisplayNameResponse.m4u(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.k4u_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  }
}
class ProfileGetDisplayNameResponse {
  constructor() {
    this.displayname = null;
  }
  p4f(_set____db54di) {
    this.displayname = _set____db54di;
  }
  q4f() {
    return this.displayname;
  }
  static m4u(seen0, displayname, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_31().k4u_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.displayname = null;
    else
      $this.displayname = displayname;
    return $this;
  }
}
class Companion_32 {}
class $serializer_32 {
  constructor() {
    $serializer_instance_32 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.profile.ProfileGetProfileResponse', this, 2);
    tmp0_serialDesc.c1o('displayname', true);
    tmp0_serialDesc.c1o('avatar_url', true);
    this.n4u_1 = tmp0_serialDesc;
  }
  o4u(encoder, value) {
    var tmp0_desc = this.n4u_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.displayname == null)) {
      tmp1_output.f1i(tmp0_desc, 0, StringSerializer_getInstance(), value.displayname);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.avatarUrl == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.avatarUrl);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.o4u(encoder, value instanceof ProfileGetProfileResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.n4u_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.n1g(tmp0_desc);
    if (tmp6_input.c1h()) {
      tmp4_local0 = tmp6_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp6_input.o1g(tmp0_desc);
    return ProfileGetProfileResponse.p4u(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  l1c() {
    return this.n4u_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class ProfileGetProfileResponse {
  constructor() {
    this.displayname = null;
    this.avatarUrl = null;
  }
  p4f(_set____db54di) {
    this.displayname = _set____db54di;
  }
  q4f() {
    return this.displayname;
  }
  n4f(_set____db54di) {
    this.avatarUrl = _set____db54di;
  }
  o4f() {
    return this.avatarUrl;
  }
  static p4u(seen0, displayname, avatarUrl, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_32().n4u_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.displayname = null;
    else
      $this.displayname = displayname;
    if (0 === (seen0 & 2))
      $this.avatarUrl = null;
    else
      $this.avatarUrl = avatarUrl;
    return $this;
  }
}
class Companion_33 {}
class $serializer_33 {
  constructor() {
    $serializer_instance_33 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.push.PushRulesGetEnabledResponse', this, 1);
    tmp0_serialDesc.c1o('enabled', true);
    this.q4u_1 = tmp0_serialDesc;
  }
  r4u(encoder, value) {
    var tmp0_desc = this.q4u_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.enabled === false)) {
      tmp1_output.u1h(tmp0_desc, 0, value.enabled);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.r4u(encoder, value instanceof PushRulesGetEnabledResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.q4u_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.p1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.p1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return PushRulesGetEnabledResponse.s4u(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.q4u_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance()];
  }
}
class PushRulesGetEnabledResponse {
  constructor() {
    this.enabled = false;
  }
  z4l(_set____db54di) {
    this.enabled = _set____db54di;
  }
  z4f() {
    return this.enabled;
  }
  static s4u(seen0, enabled, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_33().q4u_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.enabled = false;
    else
      $this.enabled = enabled;
    return $this;
  }
}
class Companion_34 {}
class $serializer_34 {
  constructor() {
    $serializer_instance_34 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.push.PushRulesGetResponse', this, 1);
    tmp0_serialDesc.c1o('global', true);
    this.t4u_1 = tmp0_serialDesc;
  }
  u4u(encoder, value) {
    var tmp0_desc = this.t4u_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.global == null)) {
      tmp1_output.f1i(tmp0_desc, 0, $serializer_getInstance_35(), value.global);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.u4u(encoder, value instanceof PushRulesGetResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.t4u_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, $serializer_getInstance_35(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, $serializer_getInstance_35(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return PushRulesGetResponse.v4u(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.t4u_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_35())];
  }
}
class PushRulesGetResponse {
  constructor() {
    this.global = null;
  }
  w4u(_set____db54di) {
    this.global = _set____db54di;
  }
  x4u() {
    return this.global;
  }
  static v4u(seen0, global, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_34().t4u_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.global = null;
    else
      $this.global = global;
    return $this;
  }
}
class Companion_35 {
  constructor() {
    Companion_instance_35 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, PushRuleset$Companion$$childSerializers$_anonymous__pl3zlq);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, PushRuleset$Companion$$childSerializers$_anonymous__pl3zlq_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, PushRuleset$Companion$$childSerializers$_anonymous__pl3zlq_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_7 = lazy(tmp_6, PushRuleset$Companion$$childSerializers$_anonymous__pl3zlq_2);
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.y4u_1 = [tmp_1, tmp_3, tmp_5, tmp_7, lazy(tmp_8, PushRuleset$Companion$$childSerializers$_anonymous__pl3zlq_3)];
  }
}
class $serializer_35 {
  constructor() {
    $serializer_instance_35 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.push.PushRuleset', this, 5);
    tmp0_serialDesc.c1o('override', true);
    tmp0_serialDesc.c1o('content', true);
    tmp0_serialDesc.c1o('room', true);
    tmp0_serialDesc.c1o('sender', true);
    tmp0_serialDesc.c1o('underride', true);
    this.z4u_1 = tmp0_serialDesc;
  }
  a4v(encoder, value) {
    var tmp0_desc = this.z4u_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_36().y4u_1;
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.override == null)) {
      tmp1_output.f1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.override);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.content == null)) {
      tmp1_output.f1i(tmp0_desc, 1, tmp2_cached[1].w2(), value.content);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.room == null)) {
      tmp1_output.f1i(tmp0_desc, 2, tmp2_cached[2].w2(), value.room);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.sender == null)) {
      tmp1_output.f1i(tmp0_desc, 3, tmp2_cached[3].w2(), value.sender);
    }
    if (tmp1_output.j1i(tmp0_desc, 4) ? true : !(value.underride == null)) {
      tmp1_output.f1i(tmp0_desc, 4, tmp2_cached[4].w2(), value.underride);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.a4v(encoder, value instanceof PushRuleset ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.z4u_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.n1g(tmp0_desc);
    var tmp10_cached = Companion_getInstance_36().y4u_1;
    if (tmp9_input.c1h()) {
      tmp4_local0 = tmp9_input.b1h(tmp0_desc, 0, tmp10_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.b1h(tmp0_desc, 1, tmp10_cached[1].w2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.b1h(tmp0_desc, 2, tmp10_cached[2].w2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.b1h(tmp0_desc, 3, tmp10_cached[3].w2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.b1h(tmp0_desc, 4, tmp10_cached[4].w2(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.b1h(tmp0_desc, 0, tmp10_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.b1h(tmp0_desc, 1, tmp10_cached[1].w2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.b1h(tmp0_desc, 2, tmp10_cached[2].w2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.b1h(tmp0_desc, 3, tmp10_cached[3].w2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.b1h(tmp0_desc, 4, tmp10_cached[4].w2(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp9_input.o1g(tmp0_desc);
    return PushRuleset.b4v(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  l1c() {
    return this.z4u_1;
  }
  r1o() {
    var tmp0_cached = Companion_getInstance_36().y4u_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].w2()), get_nullable(tmp0_cached[1].w2()), get_nullable(tmp0_cached[2].w2()), get_nullable(tmp0_cached[3].w2()), get_nullable(tmp0_cached[4].w2())];
  }
}
class PushRuleset {
  constructor() {
    Companion_getInstance_36();
    this.override = null;
    this.content = null;
    this.room = null;
    this.sender = null;
    this.underride = null;
  }
  c4v(_set____db54di) {
    this.override = _set____db54di;
  }
  d4v() {
    return this.override;
  }
  e4v(_set____db54di) {
    this.content = _set____db54di;
  }
  o20() {
    return this.content;
  }
  f4v(_set____db54di) {
    this.room = _set____db54di;
  }
  d4q() {
    return this.room;
  }
  g4v(_set____db54di) {
    this.sender = _set____db54di;
  }
  q4o() {
    return this.sender;
  }
  h4v(_set____db54di) {
    this.underride = _set____db54di;
  }
  i4v() {
    return this.underride;
  }
  static b4v(seen0, override, content, room, sender, underride, serializationConstructorMarker) {
    Companion_getInstance_36();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_35().z4u_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.override = null;
    else
      $this.override = override;
    if (0 === (seen0 & 2))
      $this.content = null;
    else
      $this.content = content;
    if (0 === (seen0 & 4))
      $this.room = null;
    else
      $this.room = room;
    if (0 === (seen0 & 8))
      $this.sender = null;
    else
      $this.sender = sender;
    if (0 === (seen0 & 16))
      $this.underride = null;
    else
      $this.underride = underride;
    return $this;
  }
}
class Companion_36 {
  constructor() {
    Companion_instance_36 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, PushRule$Companion$$childSerializers$_anonymous__penbik);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.j4v_1 = [null, null, null, tmp_1, lazy(tmp_2, PushRule$Companion$$childSerializers$_anonymous__penbik_0), null];
  }
}
class $serializer_36 {
  constructor() {
    $serializer_instance_36 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.push.PushRule', this, 6);
    tmp0_serialDesc.c1o('rule_id', true);
    tmp0_serialDesc.c1o('default', true);
    tmp0_serialDesc.c1o('enabled', true);
    tmp0_serialDesc.c1o('conditions', true);
    tmp0_serialDesc.c1o('actions', true);
    tmp0_serialDesc.c1o('pattern', true);
    this.k4v_1 = tmp0_serialDesc;
  }
  l4v(encoder, value) {
    var tmp0_desc = this.k4v_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_37().j4v_1;
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.ruleId === '')) {
      tmp1_output.c1i(tmp0_desc, 0, value.ruleId);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.default === false)) {
      tmp1_output.u1h(tmp0_desc, 1, value.default);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.enabled === true)) {
      tmp1_output.u1h(tmp0_desc, 2, value.enabled);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.conditions == null)) {
      tmp1_output.f1i(tmp0_desc, 3, tmp2_cached[3].w2(), value.conditions);
    }
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 4)) {
      tmp = true;
    } else {
      var tmp_0 = value.actions;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 4, tmp2_cached[4].w2(), value.actions);
    }
    if (tmp1_output.j1i(tmp0_desc, 5) ? true : !(value.pattern == null)) {
      tmp1_output.f1i(tmp0_desc, 5, StringSerializer_getInstance(), value.pattern);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.l4v(encoder, value instanceof PushRule ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.k4v_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.n1g(tmp0_desc);
    var tmp11_cached = Companion_getInstance_37().j4v_1;
    if (tmp10_input.c1h()) {
      tmp4_local0 = tmp10_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.p1g(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.p1g(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.b1h(tmp0_desc, 3, tmp11_cached[3].w2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.z1g(tmp0_desc, 4, tmp11_cached[4].w2(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.b1h(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.p1g(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.p1g(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.b1h(tmp0_desc, 3, tmp11_cached[3].w2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.z1g(tmp0_desc, 4, tmp11_cached[4].w2(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.b1h(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp10_input.o1g(tmp0_desc);
    return PushRule.m4v(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  l1c() {
    return this.k4v_1;
  }
  r1o() {
    var tmp0_cached = Companion_getInstance_37().j4v_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), get_nullable(tmp0_cached[3].w2()), tmp0_cached[4].w2(), get_nullable(StringSerializer_getInstance())];
  }
}
class PushRule {
  constructor() {
    Companion_getInstance_37();
    this.ruleId = '';
    this.default = false;
    this.enabled = true;
    this.conditions = null;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.actions = [];
    this.pattern = null;
  }
  n4v(_set____db54di) {
    this.ruleId = _set____db54di;
  }
  v4f() {
    return this.ruleId;
  }
  o4v(_set____db54di) {
    this.default = _set____db54di;
  }
  b4m() {
    return this.default;
  }
  z4l(_set____db54di) {
    this.enabled = _set____db54di;
  }
  z4f() {
    return this.enabled;
  }
  p4v(_set____db54di) {
    this.conditions = _set____db54di;
  }
  x4f() {
    return this.conditions;
  }
  q4v(_set____db54di) {
    this.actions = _set____db54di;
  }
  b4g() {
    return this.actions;
  }
  r4v(_set____db54di) {
    this.pattern = _set____db54di;
  }
  s4v() {
    return this.pattern;
  }
  static m4v(seen0, ruleId, default_0, enabled, conditions, actions, pattern, serializationConstructorMarker) {
    Companion_getInstance_37();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_36().k4v_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.ruleId = '';
    else
      $this.ruleId = ruleId;
    if (0 === (seen0 & 2))
      $this.default = false;
    else
      $this.default = default_0;
    if (0 === (seen0 & 4))
      $this.enabled = true;
    else
      $this.enabled = enabled;
    if (0 === (seen0 & 8))
      $this.conditions = null;
    else
      $this.conditions = conditions;
    if (0 === (seen0 & 16)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.actions = [];
    } else
      $this.actions = actions;
    if (0 === (seen0 & 32))
      $this.pattern = null;
    else
      $this.pattern = pattern;
    return $this;
  }
}
class Companion_37 {}
class $serializer_37 {
  constructor() {
    $serializer_instance_37 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.push.PushCondition', this, 4);
    tmp0_serialDesc.c1o('kind', true);
    tmp0_serialDesc.c1o('key', true);
    tmp0_serialDesc.c1o('pattern', true);
    tmp0_serialDesc.c1o('is', true);
    this.t4v_1 = tmp0_serialDesc;
  }
  u4v(encoder, value) {
    var tmp0_desc = this.t4v_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.kind === '')) {
      tmp1_output.c1i(tmp0_desc, 0, value.kind);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.key == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.key);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.pattern == null)) {
      tmp1_output.f1i(tmp0_desc, 2, StringSerializer_getInstance(), value.pattern);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.is == null)) {
      tmp1_output.f1i(tmp0_desc, 3, StringSerializer_getInstance(), value.is);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.u4v(encoder, value instanceof PushCondition ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.t4v_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.n1g(tmp0_desc);
    if (tmp8_input.c1h()) {
      tmp4_local0 = tmp8_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp8_input.o1g(tmp0_desc);
    return PushCondition.v4v(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  l1c() {
    return this.t4v_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class PushCondition {
  constructor() {
    this.kind = '';
    this.key = null;
    this.pattern = null;
    this.is = null;
  }
  w4v(_set____db54di) {
    this.kind = _set____db54di;
  }
  w1e() {
    return this.kind;
  }
  x4v(_set____db54di) {
    this.key = _set____db54di;
  }
  v2() {
    return this.key;
  }
  r4v(_set____db54di) {
    this.pattern = _set____db54di;
  }
  s4v() {
    return this.pattern;
  }
  y4v(_set____db54di) {
    this.is = _set____db54di;
  }
  z4v() {
    return this.is;
  }
  static v4v(seen0, kind, key, pattern, is, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_37().t4v_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.kind = '';
    else
      $this.kind = kind;
    if (0 === (seen0 & 2))
      $this.key = null;
    else
      $this.key = key;
    if (0 === (seen0 & 4))
      $this.pattern = null;
    else
      $this.pattern = pattern;
    if (0 === (seen0 & 8))
      $this.is = null;
    else
      $this.is = is;
    return $this;
  }
}
class Companion_38 {}
class $serializer_38 {
  constructor() {
    $serializer_instance_38 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.pushers.PushersGetResponse.Pusher', this, 9);
    tmp0_serialDesc.c1o('pushkey', true);
    tmp0_serialDesc.c1o('kind', true);
    tmp0_serialDesc.c1o('app_id', true);
    tmp0_serialDesc.c1o('app_display_name', true);
    tmp0_serialDesc.c1o('device_display_name', true);
    tmp0_serialDesc.c1o('profile_tag', true);
    tmp0_serialDesc.c1o('lang', true);
    tmp0_serialDesc.c1o('data', true);
    tmp0_serialDesc.c1o('enabled', true);
    this.a4w_1 = tmp0_serialDesc;
  }
  b4w(encoder, value) {
    var tmp0_desc = this.a4w_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.pushkey === '')) {
      tmp1_output.c1i(tmp0_desc, 0, value.pushkey);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.kind === '')) {
      tmp1_output.c1i(tmp0_desc, 1, value.kind);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.appId === '')) {
      tmp1_output.c1i(tmp0_desc, 2, value.appId);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.appDisplayName === '')) {
      tmp1_output.c1i(tmp0_desc, 3, value.appDisplayName);
    }
    if (tmp1_output.j1i(tmp0_desc, 4) ? true : !(value.deviceDisplayName === '')) {
      tmp1_output.c1i(tmp0_desc, 4, value.deviceDisplayName);
    }
    if (tmp1_output.j1i(tmp0_desc, 5) ? true : !(value.profileTag == null)) {
      tmp1_output.f1i(tmp0_desc, 5, StringSerializer_getInstance(), value.profileTag);
    }
    if (tmp1_output.j1i(tmp0_desc, 6) ? true : !(value.lang === '')) {
      tmp1_output.c1i(tmp0_desc, 6, value.lang);
    }
    if (tmp1_output.j1i(tmp0_desc, 7) ? true : !equals(value.data, new PusherData_0())) {
      tmp1_output.e1i(tmp0_desc, 7, $serializer_getInstance_39(), value.data);
    }
    if (tmp1_output.j1i(tmp0_desc, 8) ? true : !(value.enabled == null)) {
      tmp1_output.f1i(tmp0_desc, 8, BooleanSerializer_getInstance(), value.enabled);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.b4w(encoder, value instanceof Pusher ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.a4w_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_input = decoder.n1g(tmp0_desc);
    if (tmp13_input.c1h()) {
      tmp4_local0 = tmp13_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.x1g(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.x1g(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.x1g(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.x1g(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.b1h(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.x1g(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.z1g(tmp0_desc, 7, $serializer_getInstance_39(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.b1h(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.x1g(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.x1g(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.x1g(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.x1g(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.b1h(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.x1g(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.z1g(tmp0_desc, 7, $serializer_getInstance_39(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.b1h(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp13_input.o1g(tmp0_desc);
    return Pusher.c4w(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  }
  l1c() {
    return this.a4w_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), $serializer_getInstance_39(), get_nullable(BooleanSerializer_getInstance())];
  }
}
class Companion_39 {}
class $serializer_39 {
  constructor() {
    $serializer_instance_39 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.pushers.PushersGetResponse.PusherData', this, 2);
    tmp0_serialDesc.c1o('url', true);
    tmp0_serialDesc.c1o('format', true);
    this.d4w_1 = tmp0_serialDesc;
  }
  e4w(encoder, value) {
    var tmp0_desc = this.d4w_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.url == null)) {
      tmp1_output.f1i(tmp0_desc, 0, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.format == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.format);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.e4w(encoder, value instanceof PusherData_0 ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.d4w_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.n1g(tmp0_desc);
    if (tmp6_input.c1h()) {
      tmp4_local0 = tmp6_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp6_input.o1g(tmp0_desc);
    return PusherData_0.f4w(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  l1c() {
    return this.d4w_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class Pusher {
  constructor() {
    this.pushkey = '';
    this.kind = '';
    this.appId = '';
    this.appDisplayName = '';
    this.deviceDisplayName = '';
    this.profileTag = null;
    this.lang = '';
    this.data = new PusherData_0();
    this.enabled = null;
  }
  g4w(_set____db54di) {
    this.pushkey = _set____db54di;
  }
  f4g() {
    return this.pushkey;
  }
  w4v(_set____db54di) {
    this.kind = _set____db54di;
  }
  w1e() {
    return this.kind;
  }
  h4w(_set____db54di) {
    this.appId = _set____db54di;
  }
  h4g() {
    return this.appId;
  }
  i4w(_set____db54di) {
    this.appDisplayName = _set____db54di;
  }
  j4g() {
    return this.appDisplayName;
  }
  j4w(_set____db54di) {
    this.deviceDisplayName = _set____db54di;
  }
  l4g() {
    return this.deviceDisplayName;
  }
  m4g(_set____db54di) {
    this.profileTag = _set____db54di;
  }
  n4g() {
    return this.profileTag;
  }
  k4w(_set____db54di) {
    this.lang = _set____db54di;
  }
  p4g() {
    return this.lang;
  }
  l4w(_set____db54di) {
    this.data = _set____db54di;
  }
  d4d() {
    return this.data;
  }
  y4f(_set____db54di) {
    this.enabled = _set____db54di;
  }
  z4f() {
    return this.enabled;
  }
  static c4w(seen0, pushkey, kind, appId, appDisplayName, deviceDisplayName, profileTag, lang, data, enabled, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_38().a4w_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.pushkey = '';
    else
      $this.pushkey = pushkey;
    if (0 === (seen0 & 2))
      $this.kind = '';
    else
      $this.kind = kind;
    if (0 === (seen0 & 4))
      $this.appId = '';
    else
      $this.appId = appId;
    if (0 === (seen0 & 8))
      $this.appDisplayName = '';
    else
      $this.appDisplayName = appDisplayName;
    if (0 === (seen0 & 16))
      $this.deviceDisplayName = '';
    else
      $this.deviceDisplayName = deviceDisplayName;
    if (0 === (seen0 & 32))
      $this.profileTag = null;
    else
      $this.profileTag = profileTag;
    if (0 === (seen0 & 64))
      $this.lang = '';
    else
      $this.lang = lang;
    if (0 === (seen0 & 128))
      $this.data = new PusherData_0();
    else
      $this.data = data;
    if (0 === (seen0 & 256))
      $this.enabled = null;
    else
      $this.enabled = enabled;
    return $this;
  }
}
class PusherData_0 {
  constructor() {
    this.url = null;
    this.format = null;
  }
  s4e(_set____db54di) {
    this.url = _set____db54di;
  }
  l3i() {
    return this.url;
  }
  t4g(_set____db54di) {
    this.format = _set____db54di;
  }
  u4g() {
    return this.format;
  }
  static f4w(seen0, url, format, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_39().d4w_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.url = null;
    else
      $this.url = url;
    if (0 === (seen0 & 2))
      $this.format = null;
    else
      $this.format = format;
    return $this;
  }
}
class Companion_40 {
  constructor() {
    Companion_instance_40 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.m4w_1 = [lazy(tmp_0, PushersGetResponse$Companion$$childSerializers$_anonymous__yfz0gv)];
  }
}
class $serializer_40 {
  constructor() {
    $serializer_instance_40 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.pushers.PushersGetResponse', this, 1);
    tmp0_serialDesc.c1o('pushers', true);
    this.n4w_1 = tmp0_serialDesc;
  }
  o4w(encoder, value) {
    var tmp0_desc = this.n4w_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_41().m4w_1;
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.pushers;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.pushers);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.o4w(encoder, value instanceof PushersGetResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.n4w_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    var tmp6_cached = Companion_getInstance_41().m4w_1;
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, tmp6_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, tmp6_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return PushersGetResponse.p4w(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.n4w_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_41().m4w_1[0].w2()];
  }
}
class PushersGetResponse {
  constructor() {
    Companion_getInstance_41();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.pushers = [];
  }
  q4w(_set____db54di) {
    this.pushers = _set____db54di;
  }
  r4w() {
    return this.pushers;
  }
  static p4w(seen0, pushers, serializationConstructorMarker) {
    Companion_getInstance_41();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_40().n4w_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.pushers = [];
    } else
      $this.pushers = pushers;
    return $this;
  }
}
class Companion_41 {
  constructor() {
    Companion_instance_41 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.s4w_1 = [lazy(tmp_0, RelationsGetResponse$RelationEvent$Companion$$childSerializers$_anonymous__t8e6vk), null, null, null, null, null, null];
  }
}
class $serializer_41 {
  constructor() {
    $serializer_instance_41 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.relations.RelationsGetResponse.RelationEvent', this, 7);
    tmp0_serialDesc.c1o('content', true);
    tmp0_serialDesc.c1o('event_id', true);
    tmp0_serialDesc.c1o('origin_server_ts', true);
    tmp0_serialDesc.c1o('room_id', true);
    tmp0_serialDesc.c1o('sender', true);
    tmp0_serialDesc.c1o('type', true);
    tmp0_serialDesc.c1o('state_key', true);
    this.t4w_1 = tmp0_serialDesc;
  }
  u4w(encoder, value) {
    var tmp0_desc = this.t4w_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_42().s4w_1;
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.content;
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.content);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.eventId === '')) {
      tmp1_output.c1i(tmp0_desc, 1, value.eventId);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.originServerTs === 0n)) {
      tmp1_output.y1h(tmp0_desc, 2, value.originServerTs);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.roomId == null)) {
      tmp1_output.f1i(tmp0_desc, 3, StringSerializer_getInstance(), value.roomId);
    }
    if (tmp1_output.j1i(tmp0_desc, 4) ? true : !(value.sender === '')) {
      tmp1_output.c1i(tmp0_desc, 4, value.sender);
    }
    if (tmp1_output.j1i(tmp0_desc, 5) ? true : !(value.type === '')) {
      tmp1_output.c1i(tmp0_desc, 5, value.type);
    }
    if (tmp1_output.j1i(tmp0_desc, 6) ? true : !(value.stateKey == null)) {
      tmp1_output.f1i(tmp0_desc, 6, StringSerializer_getInstance(), value.stateKey);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.u4w(encoder, value instanceof RelationEvent ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.t4w_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0n;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.n1g(tmp0_desc);
    var tmp12_cached = Companion_getInstance_42().s4w_1;
    if (tmp11_input.c1h()) {
      tmp4_local0 = tmp11_input.z1g(tmp0_desc, 0, tmp12_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.x1g(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.t1g(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.x1g(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.x1g(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.b1h(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.z1g(tmp0_desc, 0, tmp12_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.x1g(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.t1g(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.x1g(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.x1g(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.b1h(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp11_input.o1g(tmp0_desc);
    return RelationEvent.v4w(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  l1c() {
    return this.t4w_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_42().s4w_1[0].w2(), StringSerializer_getInstance(), LongSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class RelationEvent {
  constructor() {
    Companion_getInstance_42();
    var tmp = this;
    // Inline function 'kotlin.collections.mapOf' call
    tmp.content = emptyMap();
    this.eventId = '';
    this.originServerTs = 0n;
    this.roomId = null;
    this.sender = '';
    this.type = '';
    this.stateKey = null;
  }
  l4o(_set____db54di) {
    this.content = _set____db54di;
  }
  o20() {
    return this.content;
  }
  m4o(_set____db54di) {
    this.eventId = _set____db54di;
  }
  r4d() {
    return this.eventId;
  }
  n4o(_set____db54di) {
    this.originServerTs = _set____db54di;
  }
  o4o() {
    return this.originServerTs;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  p4o(_set____db54di) {
    this.sender = _set____db54di;
  }
  q4o() {
    return this.sender;
  }
  r4o(_set____db54di) {
    this.type = _set____db54di;
  }
  b4d() {
    return this.type;
  }
  g4j(_set____db54di) {
    this.stateKey = _set____db54di;
  }
  h4j() {
    return this.stateKey;
  }
  static v4w(seen0, content, eventId, originServerTs, roomId, sender, type, stateKey, serializationConstructorMarker) {
    Companion_getInstance_42();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_41().t4w_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.content = emptyMap();
    } else
      $this.content = content;
    if (0 === (seen0 & 2))
      $this.eventId = '';
    else
      $this.eventId = eventId;
    if (0 === (seen0 & 4))
      $this.originServerTs = 0n;
    else
      $this.originServerTs = originServerTs;
    if (0 === (seen0 & 8))
      $this.roomId = null;
    else
      $this.roomId = roomId;
    if (0 === (seen0 & 16))
      $this.sender = '';
    else
      $this.sender = sender;
    if (0 === (seen0 & 32))
      $this.type = '';
    else
      $this.type = type;
    if (0 === (seen0 & 64))
      $this.stateKey = null;
    else
      $this.stateKey = stateKey;
    return $this;
  }
}
class Companion_42 {
  constructor() {
    Companion_instance_42 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.w4w_1 = [lazy(tmp_0, RelationsGetResponse$Companion$$childSerializers$_anonymous__yx9p1y), null, null];
  }
}
class $serializer_42 {
  constructor() {
    $serializer_instance_42 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.relations.RelationsGetResponse', this, 3);
    tmp0_serialDesc.c1o('chunk', true);
    tmp0_serialDesc.c1o('next_batch', true);
    tmp0_serialDesc.c1o('prev_batch', true);
    this.x4w_1 = tmp0_serialDesc;
  }
  y4w(encoder, value) {
    var tmp0_desc = this.x4w_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_43().w4w_1;
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.chunk;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.chunk);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.nextBatch == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.nextBatch);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.prevBatch == null)) {
      tmp1_output.f1i(tmp0_desc, 2, StringSerializer_getInstance(), value.prevBatch);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.y4w(encoder, value instanceof RelationsGetResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.x4w_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.n1g(tmp0_desc);
    var tmp8_cached = Companion_getInstance_43().w4w_1;
    if (tmp7_input.c1h()) {
      tmp4_local0 = tmp7_input.z1g(tmp0_desc, 0, tmp8_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.z1g(tmp0_desc, 0, tmp8_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp7_input.o1g(tmp0_desc);
    return RelationsGetResponse.z4w(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  l1c() {
    return this.x4w_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_43().w4w_1[0].w2(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class RelationsGetResponse {
  constructor() {
    Companion_getInstance_43();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.chunk = [];
    this.nextBatch = null;
    this.prevBatch = null;
  }
  a4x(_set____db54di) {
    this.chunk = _set____db54di;
  }
  f4n() {
    return this.chunk;
  }
  z4j(_set____db54di) {
    this.nextBatch = _set____db54di;
  }
  a4k() {
    return this.nextBatch;
  }
  g4n(_set____db54di) {
    this.prevBatch = _set____db54di;
  }
  h4n() {
    return this.prevBatch;
  }
  static z4w(seen0, chunk, nextBatch, prevBatch, serializationConstructorMarker) {
    Companion_getInstance_43();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_42().x4w_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.chunk = [];
    } else
      $this.chunk = chunk;
    if (0 === (seen0 & 2))
      $this.nextBatch = null;
    else
      $this.nextBatch = nextBatch;
    if (0 === (seen0 & 4))
      $this.prevBatch = null;
    else
      $this.prevBatch = prevBatch;
    return $this;
  }
}
class Companion_43 {
  constructor() {
    Companion_instance_43 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, ThreadsGetResponse$ThreadEvent$Companion$$childSerializers$_anonymous__bxivao);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.b4x_1 = [tmp_1, null, null, null, null, null, lazy(tmp_2, ThreadsGetResponse$ThreadEvent$Companion$$childSerializers$_anonymous__bxivao_0)];
  }
}
class $serializer_43 {
  constructor() {
    $serializer_instance_43 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.relations.ThreadsGetResponse.ThreadEvent', this, 7);
    tmp0_serialDesc.c1o('content', true);
    tmp0_serialDesc.c1o('event_id', true);
    tmp0_serialDesc.c1o('origin_server_ts', true);
    tmp0_serialDesc.c1o('room_id', true);
    tmp0_serialDesc.c1o('sender', true);
    tmp0_serialDesc.c1o('type', true);
    tmp0_serialDesc.c1o('unsigned', true);
    this.c4x_1 = tmp0_serialDesc;
  }
  d4x(encoder, value) {
    var tmp0_desc = this.c4x_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_44().b4x_1;
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.content;
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.content);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.eventId === '')) {
      tmp1_output.c1i(tmp0_desc, 1, value.eventId);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.originServerTs === 0n)) {
      tmp1_output.y1h(tmp0_desc, 2, value.originServerTs);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.roomId == null)) {
      tmp1_output.f1i(tmp0_desc, 3, StringSerializer_getInstance(), value.roomId);
    }
    if (tmp1_output.j1i(tmp0_desc, 4) ? true : !(value.sender === '')) {
      tmp1_output.c1i(tmp0_desc, 4, value.sender);
    }
    if (tmp1_output.j1i(tmp0_desc, 5) ? true : !(value.type === '')) {
      tmp1_output.c1i(tmp0_desc, 5, value.type);
    }
    if (tmp1_output.j1i(tmp0_desc, 6) ? true : !(value.unsigned == null)) {
      tmp1_output.f1i(tmp0_desc, 6, tmp2_cached[6].w2(), value.unsigned);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.d4x(encoder, value instanceof ThreadEvent ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.c4x_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0n;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.n1g(tmp0_desc);
    var tmp12_cached = Companion_getInstance_44().b4x_1;
    if (tmp11_input.c1h()) {
      tmp4_local0 = tmp11_input.z1g(tmp0_desc, 0, tmp12_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.x1g(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.t1g(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.x1g(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.x1g(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.b1h(tmp0_desc, 6, tmp12_cached[6].w2(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.z1g(tmp0_desc, 0, tmp12_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.x1g(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.t1g(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.x1g(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.x1g(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.b1h(tmp0_desc, 6, tmp12_cached[6].w2(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp11_input.o1g(tmp0_desc);
    return ThreadEvent.e4x(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  l1c() {
    return this.c4x_1;
  }
  r1o() {
    var tmp0_cached = Companion_getInstance_44().b4x_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].w2(), StringSerializer_getInstance(), LongSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(tmp0_cached[6].w2())];
  }
}
class ThreadEvent {
  constructor() {
    Companion_getInstance_44();
    var tmp = this;
    // Inline function 'kotlin.collections.mapOf' call
    tmp.content = emptyMap();
    this.eventId = '';
    this.originServerTs = 0n;
    this.roomId = null;
    this.sender = '';
    this.type = '';
    this.unsigned = null;
  }
  l4o(_set____db54di) {
    this.content = _set____db54di;
  }
  o20() {
    return this.content;
  }
  m4o(_set____db54di) {
    this.eventId = _set____db54di;
  }
  r4d() {
    return this.eventId;
  }
  n4o(_set____db54di) {
    this.originServerTs = _set____db54di;
  }
  o4o() {
    return this.originServerTs;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  p4o(_set____db54di) {
    this.sender = _set____db54di;
  }
  q4o() {
    return this.sender;
  }
  r4o(_set____db54di) {
    this.type = _set____db54di;
  }
  b4d() {
    return this.type;
  }
  l4p(_set____db54di) {
    this.unsigned = _set____db54di;
  }
  m4p() {
    return this.unsigned;
  }
  static e4x(seen0, content, eventId, originServerTs, roomId, sender, type, unsigned, serializationConstructorMarker) {
    Companion_getInstance_44();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_43().c4x_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.content = emptyMap();
    } else
      $this.content = content;
    if (0 === (seen0 & 2))
      $this.eventId = '';
    else
      $this.eventId = eventId;
    if (0 === (seen0 & 4))
      $this.originServerTs = 0n;
    else
      $this.originServerTs = originServerTs;
    if (0 === (seen0 & 8))
      $this.roomId = null;
    else
      $this.roomId = roomId;
    if (0 === (seen0 & 16))
      $this.sender = '';
    else
      $this.sender = sender;
    if (0 === (seen0 & 32))
      $this.type = '';
    else
      $this.type = type;
    if (0 === (seen0 & 64))
      $this.unsigned = null;
    else
      $this.unsigned = unsigned;
    return $this;
  }
}
class Companion_44 {
  constructor() {
    Companion_instance_44 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.f4x_1 = [lazy(tmp_0, ThreadsGetResponse$Companion$$childSerializers$_anonymous__ddk0mc), null];
  }
}
class $serializer_44 {
  constructor() {
    $serializer_instance_44 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.relations.ThreadsGetResponse', this, 2);
    tmp0_serialDesc.c1o('chunk', true);
    tmp0_serialDesc.c1o('next_batch', true);
    this.g4x_1 = tmp0_serialDesc;
  }
  h4x(encoder, value) {
    var tmp0_desc = this.g4x_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_45().f4x_1;
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.chunk;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.chunk);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.nextBatch == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.nextBatch);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.h4x(encoder, value instanceof ThreadsGetResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.g4x_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.n1g(tmp0_desc);
    var tmp7_cached = Companion_getInstance_45().f4x_1;
    if (tmp6_input.c1h()) {
      tmp4_local0 = tmp6_input.z1g(tmp0_desc, 0, tmp7_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.z1g(tmp0_desc, 0, tmp7_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp6_input.o1g(tmp0_desc);
    return ThreadsGetResponse.i4x(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  l1c() {
    return this.g4x_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_45().f4x_1[0].w2(), get_nullable(StringSerializer_getInstance())];
  }
}
class ThreadsGetResponse {
  constructor() {
    Companion_getInstance_45();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.chunk = [];
    this.nextBatch = null;
  }
  j4x(_set____db54di) {
    this.chunk = _set____db54di;
  }
  f4n() {
    return this.chunk;
  }
  z4j(_set____db54di) {
    this.nextBatch = _set____db54di;
  }
  a4k() {
    return this.nextBatch;
  }
  static i4x(seen0, chunk, nextBatch, serializationConstructorMarker) {
    Companion_getInstance_45();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_44().g4x_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.chunk = [];
    } else
      $this.chunk = chunk;
    if (0 === (seen0 & 2))
      $this.nextBatch = null;
    else
      $this.nextBatch = nextBatch;
    return $this;
  }
}
class Companion_45 {}
class $serializer_45 {
  constructor() {
    $serializer_instance_45 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomsCreateRoomResponse', this, 1);
    tmp0_serialDesc.c1o('room_id', true);
    this.k4x_1 = tmp0_serialDesc;
  }
  l4x(encoder, value) {
    var tmp0_desc = this.k4x_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.roomId === '')) {
      tmp1_output.c1i(tmp0_desc, 0, value.roomId);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.l4x(encoder, value instanceof RoomsCreateRoomResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.k4x_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return RoomsCreateRoomResponse.m4x(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.k4x_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class RoomsCreateRoomResponse {
  constructor() {
    this.roomId = '';
  }
  o4n(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  static m4x(seen0, roomId, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_45().k4x_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.roomId = '';
    else
      $this.roomId = roomId;
    return $this;
  }
}
class Companion_46 {
  constructor() {
    Companion_instance_46 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.n4x_1 = [lazy(tmp_0, RoomsGetJoinedMembersResponse$Companion$$childSerializers$_anonymous__9y13pz)];
  }
}
class $serializer_46 {
  constructor() {
    $serializer_instance_46 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomsGetJoinedMembersResponse', this, 1);
    tmp0_serialDesc.c1o('joined', true);
    this.o4x_1 = tmp0_serialDesc;
  }
  p4x(encoder, value) {
    var tmp0_desc = this.o4x_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_47().n4x_1;
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.joined;
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.joined);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.p4x(encoder, value instanceof RoomsGetJoinedMembersResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.o4x_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    var tmp6_cached = Companion_getInstance_47().n4x_1;
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, tmp6_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, tmp6_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return RoomsGetJoinedMembersResponse.q4x(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.o4x_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_47().n4x_1[0].w2()];
  }
}
class RoomsGetJoinedMembersResponse {
  constructor() {
    Companion_getInstance_47();
    var tmp = this;
    // Inline function 'kotlin.collections.mapOf' call
    tmp.joined = emptyMap();
  }
  r4x(_set____db54di) {
    this.joined = _set____db54di;
  }
  s4x() {
    return this.joined;
  }
  static q4x(seen0, joined, serializationConstructorMarker) {
    Companion_getInstance_47();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_46().o4x_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.joined = emptyMap();
    } else
      $this.joined = joined;
    return $this;
  }
}
class Companion_47 {}
class $serializer_47 {
  constructor() {
    $serializer_instance_47 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomMember', this, 2);
    tmp0_serialDesc.c1o('display_name', true);
    tmp0_serialDesc.c1o('avatar_url', true);
    this.t4x_1 = tmp0_serialDesc;
  }
  u4x(encoder, value) {
    var tmp0_desc = this.t4x_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.displayName == null)) {
      tmp1_output.f1i(tmp0_desc, 0, StringSerializer_getInstance(), value.displayName);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.avatarUrl == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.avatarUrl);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.u4x(encoder, value instanceof RoomMember ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.t4x_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.n1g(tmp0_desc);
    if (tmp6_input.c1h()) {
      tmp4_local0 = tmp6_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp6_input.o1g(tmp0_desc);
    return RoomMember.v4x(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  l1c() {
    return this.t4x_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class RoomMember {
  constructor() {
    this.displayName = null;
    this.avatarUrl = null;
  }
  g4d(_set____db54di) {
    this.displayName = _set____db54di;
  }
  h4d() {
    return this.displayName;
  }
  n4f(_set____db54di) {
    this.avatarUrl = _set____db54di;
  }
  o4f() {
    return this.avatarUrl;
  }
  static v4x(seen0, displayName, avatarUrl, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_47().t4x_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.displayName = null;
    else
      $this.displayName = displayName;
    if (0 === (seen0 & 2))
      $this.avatarUrl = null;
    else
      $this.avatarUrl = avatarUrl;
    return $this;
  }
}
class Companion_48 {
  constructor() {
    Companion_instance_48 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.w4x_1 = [lazy(tmp_0, RoomsGetJoinedRoomsResponse$Companion$$childSerializers$_anonymous__wacquw)];
  }
}
class $serializer_48 {
  constructor() {
    $serializer_instance_48 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomsGetJoinedRoomsResponse', this, 1);
    tmp0_serialDesc.c1o('joined_rooms', true);
    this.x4x_1 = tmp0_serialDesc;
  }
  y4x(encoder, value) {
    var tmp0_desc = this.x4x_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_49().w4x_1;
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.joinedRooms;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.joinedRooms);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.y4x(encoder, value instanceof RoomsGetJoinedRoomsResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.x4x_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    var tmp6_cached = Companion_getInstance_49().w4x_1;
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, tmp6_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, tmp6_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return RoomsGetJoinedRoomsResponse.z4x(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.x4x_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_49().w4x_1[0].w2()];
  }
}
class RoomsGetJoinedRoomsResponse {
  constructor() {
    Companion_getInstance_49();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.joinedRooms = [];
  }
  a4y(_set____db54di) {
    this.joinedRooms = _set____db54di;
  }
  b4y() {
    return this.joinedRooms;
  }
  static z4x(seen0, joinedRooms, serializationConstructorMarker) {
    Companion_getInstance_49();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_48().x4x_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.joinedRooms = [];
    } else
      $this.joinedRooms = joinedRooms;
    return $this;
  }
}
class Companion_49 {
  constructor() {
    Companion_instance_49 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.c4y_1 = [lazy(tmp_0, RoomsGetMembersResponse$Companion$$childSerializers$_anonymous__w4ei9e)];
  }
}
class $serializer_49 {
  constructor() {
    $serializer_instance_49 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomsGetMembersResponse', this, 1);
    tmp0_serialDesc.c1o('chunk', true);
    this.d4y_1 = tmp0_serialDesc;
  }
  e4y(encoder, value) {
    var tmp0_desc = this.d4y_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_50().c4y_1;
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.chunk;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.chunk);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.e4y(encoder, value instanceof RoomsGetMembersResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.d4y_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    var tmp6_cached = Companion_getInstance_50().c4y_1;
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, tmp6_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, tmp6_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return RoomsGetMembersResponse.f4y(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.d4y_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_50().c4y_1[0].w2()];
  }
}
class RoomsGetMembersResponse {
  constructor() {
    Companion_getInstance_50();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.chunk = [];
  }
  g4y(_set____db54di) {
    this.chunk = _set____db54di;
  }
  f4n() {
    return this.chunk;
  }
  static f4y(seen0, chunk, serializationConstructorMarker) {
    Companion_getInstance_50();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_49().d4y_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.chunk = [];
    } else
      $this.chunk = chunk;
    return $this;
  }
}
class Companion_50 {
  constructor() {
    Companion_instance_50 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, RoomsGetMessagesResponse$Companion$$childSerializers$_anonymous__vgip0f);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.h4y_1 = [null, null, tmp_1, lazy(tmp_2, RoomsGetMessagesResponse$Companion$$childSerializers$_anonymous__vgip0f_0)];
  }
}
class $serializer_50 {
  constructor() {
    $serializer_instance_50 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomsGetMessagesResponse', this, 4);
    tmp0_serialDesc.c1o('start', true);
    tmp0_serialDesc.c1o('end', true);
    tmp0_serialDesc.c1o('chunk', true);
    tmp0_serialDesc.c1o('state', true);
    this.i4y_1 = tmp0_serialDesc;
  }
  j4y(encoder, value) {
    var tmp0_desc = this.i4y_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_51().h4y_1;
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.start === '')) {
      tmp1_output.c1i(tmp0_desc, 0, value.start);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.end == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.end);
    }
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 2)) {
      tmp = true;
    } else {
      var tmp_0 = value.chunk;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 2, tmp2_cached[2].w2(), value.chunk);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.state == null)) {
      tmp1_output.f1i(tmp0_desc, 3, tmp2_cached[3].w2(), value.state);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.j4y(encoder, value instanceof RoomsGetMessagesResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.i4y_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.n1g(tmp0_desc);
    var tmp9_cached = Companion_getInstance_51().h4y_1;
    if (tmp8_input.c1h()) {
      tmp4_local0 = tmp8_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.z1g(tmp0_desc, 2, tmp9_cached[2].w2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.b1h(tmp0_desc, 3, tmp9_cached[3].w2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.z1g(tmp0_desc, 2, tmp9_cached[2].w2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.b1h(tmp0_desc, 3, tmp9_cached[3].w2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp8_input.o1g(tmp0_desc);
    return RoomsGetMessagesResponse.k4y(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  l1c() {
    return this.i4y_1;
  }
  r1o() {
    var tmp0_cached = Companion_getInstance_51().h4y_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), tmp0_cached[2].w2(), get_nullable(tmp0_cached[3].w2())];
  }
}
class RoomsGetMessagesResponse {
  constructor() {
    Companion_getInstance_51();
    this.start = '';
    this.end = null;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.chunk = [];
    this.state = null;
  }
  l4y(_set____db54di) {
    this.start = _set____db54di;
  }
  sl() {
    return this.start;
  }
  x4o(_set____db54di) {
    this.end = _set____db54di;
  }
  y4o() {
    return this.end;
  }
  g4y(_set____db54di) {
    this.chunk = _set____db54di;
  }
  f4n() {
    return this.chunk;
  }
  m4y(_set____db54di) {
    this.state = _set____db54di;
  }
  g4p() {
    return this.state;
  }
  static k4y(seen0, start, end, chunk, state, serializationConstructorMarker) {
    Companion_getInstance_51();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_50().i4y_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.start = '';
    else
      $this.start = start;
    if (0 === (seen0 & 2))
      $this.end = null;
    else
      $this.end = end;
    if (0 === (seen0 & 4)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.chunk = [];
    } else
      $this.chunk = chunk;
    if (0 === (seen0 & 8))
      $this.state = null;
    else
      $this.state = state;
    return $this;
  }
}
class Companion_51 {
  constructor() {
    Companion_instance_51 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, RoomEvent$Companion$$childSerializers$_anonymous__onomqd);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.n4y_1 = [null, null, null, null, tmp_1, null, null, lazy(tmp_2, RoomEvent$Companion$$childSerializers$_anonymous__onomqd_0)];
  }
}
class $serializer_51 {
  constructor() {
    $serializer_instance_51 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomEvent', this, 8);
    tmp0_serialDesc.c1o('type', true);
    tmp0_serialDesc.c1o('event_id', true);
    tmp0_serialDesc.c1o('sender', true);
    tmp0_serialDesc.c1o('origin_server_ts', true);
    tmp0_serialDesc.c1o('content', true);
    tmp0_serialDesc.c1o('room_id', true);
    tmp0_serialDesc.c1o('state_key', true);
    tmp0_serialDesc.c1o('unsigned', true);
    this.o4y_1 = tmp0_serialDesc;
  }
  p4y(encoder, value) {
    var tmp0_desc = this.o4y_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_52().n4y_1;
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.type === '')) {
      tmp1_output.c1i(tmp0_desc, 0, value.type);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.eventId === '')) {
      tmp1_output.c1i(tmp0_desc, 1, value.eventId);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.sender === '')) {
      tmp1_output.c1i(tmp0_desc, 2, value.sender);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.originServerTs === 0n)) {
      tmp1_output.y1h(tmp0_desc, 3, value.originServerTs);
    }
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 4)) {
      tmp = true;
    } else {
      var tmp_0 = value.content;
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 4, tmp2_cached[4].w2(), value.content);
    }
    if (tmp1_output.j1i(tmp0_desc, 5) ? true : !(value.roomId == null)) {
      tmp1_output.f1i(tmp0_desc, 5, StringSerializer_getInstance(), value.roomId);
    }
    if (tmp1_output.j1i(tmp0_desc, 6) ? true : !(value.stateKey == null)) {
      tmp1_output.f1i(tmp0_desc, 6, StringSerializer_getInstance(), value.stateKey);
    }
    if (tmp1_output.j1i(tmp0_desc, 7) ? true : !(value.unsigned == null)) {
      tmp1_output.f1i(tmp0_desc, 7, tmp2_cached[7].w2(), value.unsigned);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.p4y(encoder, value instanceof RoomEvent ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.o4y_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = 0n;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_input = decoder.n1g(tmp0_desc);
    var tmp13_cached = Companion_getInstance_52().n4y_1;
    if (tmp12_input.c1h()) {
      tmp4_local0 = tmp12_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.x1g(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.x1g(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.t1g(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.z1g(tmp0_desc, 4, tmp13_cached[4].w2(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.b1h(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.b1h(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.b1h(tmp0_desc, 7, tmp13_cached[7].w2(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.x1g(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.x1g(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.t1g(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.z1g(tmp0_desc, 4, tmp13_cached[4].w2(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.b1h(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.b1h(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.b1h(tmp0_desc, 7, tmp13_cached[7].w2(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp12_input.o1g(tmp0_desc);
    return RoomEvent.q4y(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  }
  l1c() {
    return this.o4y_1;
  }
  r1o() {
    var tmp0_cached = Companion_getInstance_52().n4y_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), LongSerializer_getInstance(), tmp0_cached[4].w2(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[7].w2())];
  }
}
class RoomEvent {
  constructor() {
    Companion_getInstance_52();
    this.type = '';
    this.eventId = '';
    this.sender = '';
    this.originServerTs = 0n;
    var tmp = this;
    // Inline function 'kotlin.collections.mapOf' call
    tmp.content = emptyMap();
    this.roomId = null;
    this.stateKey = null;
    this.unsigned = null;
  }
  r4o(_set____db54di) {
    this.type = _set____db54di;
  }
  b4d() {
    return this.type;
  }
  m4o(_set____db54di) {
    this.eventId = _set____db54di;
  }
  r4d() {
    return this.eventId;
  }
  p4o(_set____db54di) {
    this.sender = _set____db54di;
  }
  q4o() {
    return this.sender;
  }
  n4o(_set____db54di) {
    this.originServerTs = _set____db54di;
  }
  o4o() {
    return this.originServerTs;
  }
  r4y(_set____db54di) {
    this.content = _set____db54di;
  }
  o20() {
    return this.content;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  g4j(_set____db54di) {
    this.stateKey = _set____db54di;
  }
  h4j() {
    return this.stateKey;
  }
  s4y(_set____db54di) {
    this.unsigned = _set____db54di;
  }
  m4p() {
    return this.unsigned;
  }
  static q4y(seen0, type, eventId, sender, originServerTs, content, roomId, stateKey, unsigned, serializationConstructorMarker) {
    Companion_getInstance_52();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_51().o4y_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.type = '';
    else
      $this.type = type;
    if (0 === (seen0 & 2))
      $this.eventId = '';
    else
      $this.eventId = eventId;
    if (0 === (seen0 & 4))
      $this.sender = '';
    else
      $this.sender = sender;
    if (0 === (seen0 & 8))
      $this.originServerTs = 0n;
    else
      $this.originServerTs = originServerTs;
    if (0 === (seen0 & 16)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.content = emptyMap();
    } else
      $this.content = content;
    if (0 === (seen0 & 32))
      $this.roomId = null;
    else
      $this.roomId = roomId;
    if (0 === (seen0 & 64))
      $this.stateKey = null;
    else
      $this.stateKey = stateKey;
    if (0 === (seen0 & 128))
      $this.unsigned = null;
    else
      $this.unsigned = unsigned;
    return $this;
  }
}
class Companion_52 {}
class $serializer_52 {
  constructor() {
    $serializer_instance_52 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomsGetRoomNameResponse', this, 1);
    tmp0_serialDesc.c1o('name', true);
    this.t4y_1 = tmp0_serialDesc;
  }
  u4y(encoder, value) {
    var tmp0_desc = this.t4y_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.name === '')) {
      tmp1_output.c1i(tmp0_desc, 0, value.name);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.u4y(encoder, value instanceof RoomsGetRoomNameResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.t4y_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return RoomsGetRoomNameResponse.v4y(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.t4y_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class RoomsGetRoomNameResponse {
  constructor() {
    this.name = '';
  }
  w4y(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  static v4y(seen0, name, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_52().t4y_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.name = '';
    else
      $this.name = name;
    return $this;
  }
}
class Companion_53 {
  constructor() {
    Companion_instance_53 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.x4y_1 = [lazy(tmp_0, RoomsGetStateEventResponse$Companion$$childSerializers$_anonymous__xh3qn2)];
  }
}
class $serializer_53 {
  constructor() {
    $serializer_instance_53 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomsGetStateEventResponse', this, 1);
    tmp0_serialDesc.c1o('content', true);
    this.y4y_1 = tmp0_serialDesc;
  }
  z4y(encoder, value) {
    var tmp0_desc = this.y4y_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_54().x4y_1;
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.content;
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.content);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.z4y(encoder, value instanceof RoomsGetStateEventResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.y4y_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    var tmp6_cached = Companion_getInstance_54().x4y_1;
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, tmp6_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, tmp6_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return RoomsGetStateEventResponse.a4z(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.y4y_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_54().x4y_1[0].w2()];
  }
}
class RoomsGetStateEventResponse {
  constructor() {
    Companion_getInstance_54();
    var tmp = this;
    // Inline function 'kotlin.collections.mapOf' call
    tmp.content = emptyMap();
  }
  r4y(_set____db54di) {
    this.content = _set____db54di;
  }
  o20() {
    return this.content;
  }
  static a4z(seen0, content, serializationConstructorMarker) {
    Companion_getInstance_54();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_53().y4y_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.content = emptyMap();
    } else
      $this.content = content;
    return $this;
  }
}
class Companion_54 {
  constructor() {
    Companion_instance_54 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.b4z_1 = [lazy(tmp_0, RoomsStateEvent$Companion$$childSerializers$_anonymous__q4r93d), null, null, null, null, null, null];
  }
}
class $serializer_54 {
  constructor() {
    $serializer_instance_54 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomsStateEvent', this, 7);
    tmp0_serialDesc.c1o('content', true);
    tmp0_serialDesc.c1o('event_id', true);
    tmp0_serialDesc.c1o('origin_server_ts', true);
    tmp0_serialDesc.c1o('room_id', true);
    tmp0_serialDesc.c1o('sender', true);
    tmp0_serialDesc.c1o('type', true);
    tmp0_serialDesc.c1o('state_key', true);
    this.c4z_1 = tmp0_serialDesc;
  }
  d4z(encoder, value) {
    var tmp0_desc = this.c4z_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_55().b4z_1;
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.content;
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.content);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.eventId === '')) {
      tmp1_output.c1i(tmp0_desc, 1, value.eventId);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.originServerTs === 0n)) {
      tmp1_output.y1h(tmp0_desc, 2, value.originServerTs);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.roomId == null)) {
      tmp1_output.f1i(tmp0_desc, 3, StringSerializer_getInstance(), value.roomId);
    }
    if (tmp1_output.j1i(tmp0_desc, 4) ? true : !(value.sender === '')) {
      tmp1_output.c1i(tmp0_desc, 4, value.sender);
    }
    if (tmp1_output.j1i(tmp0_desc, 5) ? true : !(value.type === '')) {
      tmp1_output.c1i(tmp0_desc, 5, value.type);
    }
    if (tmp1_output.j1i(tmp0_desc, 6) ? true : !(value.stateKey === '')) {
      tmp1_output.c1i(tmp0_desc, 6, value.stateKey);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.d4z(encoder, value instanceof RoomsStateEvent ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.c4z_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0n;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.n1g(tmp0_desc);
    var tmp12_cached = Companion_getInstance_55().b4z_1;
    if (tmp11_input.c1h()) {
      tmp4_local0 = tmp11_input.z1g(tmp0_desc, 0, tmp12_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.x1g(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.t1g(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.x1g(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.x1g(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.x1g(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.z1g(tmp0_desc, 0, tmp12_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.x1g(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.t1g(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.x1g(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.x1g(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.x1g(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp11_input.o1g(tmp0_desc);
    return RoomsStateEvent.e4z(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  l1c() {
    return this.c4z_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_55().b4z_1[0].w2(), StringSerializer_getInstance(), LongSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class RoomsStateEvent {
  constructor() {
    Companion_getInstance_55();
    var tmp = this;
    // Inline function 'kotlin.collections.mapOf' call
    tmp.content = emptyMap();
    this.eventId = '';
    this.originServerTs = 0n;
    this.roomId = null;
    this.sender = '';
    this.type = '';
    this.stateKey = '';
  }
  l4o(_set____db54di) {
    this.content = _set____db54di;
  }
  o20() {
    return this.content;
  }
  m4o(_set____db54di) {
    this.eventId = _set____db54di;
  }
  r4d() {
    return this.eventId;
  }
  n4o(_set____db54di) {
    this.originServerTs = _set____db54di;
  }
  o4o() {
    return this.originServerTs;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  p4o(_set____db54di) {
    this.sender = _set____db54di;
  }
  q4o() {
    return this.sender;
  }
  r4o(_set____db54di) {
    this.type = _set____db54di;
  }
  b4d() {
    return this.type;
  }
  f4z(_set____db54di) {
    this.stateKey = _set____db54di;
  }
  h4j() {
    return this.stateKey;
  }
  static e4z(seen0, content, eventId, originServerTs, roomId, sender, type, stateKey, serializationConstructorMarker) {
    Companion_getInstance_55();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_54().c4z_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.content = emptyMap();
    } else
      $this.content = content;
    if (0 === (seen0 & 2))
      $this.eventId = '';
    else
      $this.eventId = eventId;
    if (0 === (seen0 & 4))
      $this.originServerTs = 0n;
    else
      $this.originServerTs = originServerTs;
    if (0 === (seen0 & 8))
      $this.roomId = null;
    else
      $this.roomId = roomId;
    if (0 === (seen0 & 16))
      $this.sender = '';
    else
      $this.sender = sender;
    if (0 === (seen0 & 32))
      $this.type = '';
    else
      $this.type = type;
    if (0 === (seen0 & 64))
      $this.stateKey = '';
    else
      $this.stateKey = stateKey;
    return $this;
  }
}
class Companion_55 {}
class $serializer_55 {
  constructor() {
    $serializer_instance_55 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomsJoinRoomResponse', this, 1);
    tmp0_serialDesc.c1o('room_id', true);
    this.g4z_1 = tmp0_serialDesc;
  }
  h4z(encoder, value) {
    var tmp0_desc = this.g4z_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.roomId === '')) {
      tmp1_output.c1i(tmp0_desc, 0, value.roomId);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.h4z(encoder, value instanceof RoomsJoinRoomResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.g4z_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return RoomsJoinRoomResponse.i4z(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.g4z_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class RoomsJoinRoomResponse {
  constructor() {
    this.roomId = '';
  }
  o4n(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  static i4z(seen0, roomId, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_55().g4z_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.roomId = '';
    else
      $this.roomId = roomId;
    return $this;
  }
}
class Companion_56 {}
class $serializer_56 {
  constructor() {
    $serializer_instance_56 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomsRedactEventResponse', this, 1);
    tmp0_serialDesc.c1o('event_id', true);
    this.j4z_1 = tmp0_serialDesc;
  }
  k4z(encoder, value) {
    var tmp0_desc = this.j4z_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.eventId === '')) {
      tmp1_output.c1i(tmp0_desc, 0, value.eventId);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.k4z(encoder, value instanceof RoomsRedactEventResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.j4z_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return RoomsRedactEventResponse.l4z(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.j4z_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class RoomsRedactEventResponse {
  constructor() {
    this.eventId = '';
  }
  m4o(_set____db54di) {
    this.eventId = _set____db54di;
  }
  r4d() {
    return this.eventId;
  }
  static l4z(seen0, eventId, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_56().j4z_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.eventId = '';
    else
      $this.eventId = eventId;
    return $this;
  }
}
class Companion_57 {}
class $serializer_57 {
  constructor() {
    $serializer_instance_57 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomsSendMessageResponse', this, 1);
    tmp0_serialDesc.c1o('event_id', true);
    this.m4z_1 = tmp0_serialDesc;
  }
  n4z(encoder, value) {
    var tmp0_desc = this.m4z_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.eventId === '')) {
      tmp1_output.c1i(tmp0_desc, 0, value.eventId);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.n4z(encoder, value instanceof RoomsSendMessageResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.m4z_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return RoomsSendMessageResponse.o4z(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.m4z_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class RoomsSendMessageResponse {
  constructor() {
    this.eventId = '';
  }
  m4o(_set____db54di) {
    this.eventId = _set____db54di;
  }
  r4d() {
    return this.eventId;
  }
  static o4z(seen0, eventId, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_57().m4z_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.eventId = '';
    else
      $this.eventId = eventId;
    return $this;
  }
}
class Companion_58 {}
class $serializer_58 {
  constructor() {
    $serializer_instance_58 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.rooms.RoomsSendStateEventResponse', this, 1);
    tmp0_serialDesc.c1o('event_id', true);
    this.p4z_1 = tmp0_serialDesc;
  }
  q4z(encoder, value) {
    var tmp0_desc = this.p4z_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.eventId === '')) {
      tmp1_output.c1i(tmp0_desc, 0, value.eventId);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.q4z(encoder, value instanceof RoomsSendStateEventResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.p4z_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return RoomsSendStateEventResponse.r4z(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.p4z_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class RoomsSendStateEventResponse {
  constructor() {
    this.eventId = '';
  }
  m4o(_set____db54di) {
    this.eventId = _set____db54di;
  }
  r4d() {
    return this.eventId;
  }
  static r4z(seen0, eventId, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_58().p4z_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.eventId = '';
    else
      $this.eventId = eventId;
    return $this;
  }
}
class Companion_59 {}
class $serializer_59 {
  constructor() {
    $serializer_instance_59 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.search.SearchResponse', this, 1);
    tmp0_serialDesc.c1o('search_categories', true);
    this.s4z_1 = tmp0_serialDesc;
  }
  t4z(encoder, value) {
    var tmp0_desc = this.s4z_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.searchCategories == null)) {
      tmp1_output.f1i(tmp0_desc, 0, $serializer_getInstance_60(), value.searchCategories);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.t4z(encoder, value instanceof SearchResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.s4z_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, $serializer_getInstance_60(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, $serializer_getInstance_60(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return SearchResponse.u4z(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.s4z_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_60())];
  }
}
class SearchResponse {
  constructor() {
    this.searchCategories = null;
  }
  v4z(_set____db54di) {
    this.searchCategories = _set____db54di;
  }
  w4z() {
    return this.searchCategories;
  }
  static u4z(seen0, searchCategories, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_59().s4z_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.searchCategories = null;
    else
      $this.searchCategories = searchCategories;
    return $this;
  }
}
class Companion_60 {}
class $serializer_60 {
  constructor() {
    $serializer_instance_60 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.search.SearchCategories', this, 1);
    tmp0_serialDesc.c1o('room_events', true);
    this.x4z_1 = tmp0_serialDesc;
  }
  y4z(encoder, value) {
    var tmp0_desc = this.x4z_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.roomEvents == null)) {
      tmp1_output.f1i(tmp0_desc, 0, $serializer_getInstance_61(), value.roomEvents);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.y4z(encoder, value instanceof SearchCategories ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.x4z_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, $serializer_getInstance_61(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, $serializer_getInstance_61(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return SearchCategories.z4z(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.x4z_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_61())];
  }
}
class SearchCategories {
  constructor() {
    this.roomEvents = null;
  }
  a50(_set____db54di) {
    this.roomEvents = _set____db54di;
  }
  b50() {
    return this.roomEvents;
  }
  static z4z(seen0, roomEvents, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_60().x4z_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.roomEvents = null;
    else
      $this.roomEvents = roomEvents;
    return $this;
  }
}
class Companion_61 {
  constructor() {
    Companion_instance_61 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.c50_1 = [null, lazy(tmp_0, SearchRoomEvents$Companion$$childSerializers$_anonymous__epeb9q), null];
  }
}
class $serializer_61 {
  constructor() {
    $serializer_instance_61 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.search.SearchRoomEvents', this, 3);
    tmp0_serialDesc.c1o('count', true);
    tmp0_serialDesc.c1o('results', true);
    tmp0_serialDesc.c1o('next_batch', true);
    this.d50_1 = tmp0_serialDesc;
  }
  e50(encoder, value) {
    var tmp0_desc = this.d50_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_62().c50_1;
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.count == null)) {
      tmp1_output.f1i(tmp0_desc, 0, LongSerializer_getInstance(), value.count);
    }
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 1)) {
      tmp = true;
    } else {
      var tmp_0 = value.results;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 1, tmp2_cached[1].w2(), value.results);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.nextBatch == null)) {
      tmp1_output.f1i(tmp0_desc, 2, StringSerializer_getInstance(), value.nextBatch);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.e50(encoder, value instanceof SearchRoomEvents ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.d50_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.n1g(tmp0_desc);
    var tmp8_cached = Companion_getInstance_62().c50_1;
    if (tmp7_input.c1h()) {
      tmp4_local0 = tmp7_input.b1h(tmp0_desc, 0, LongSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.z1g(tmp0_desc, 1, tmp8_cached[1].w2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.b1h(tmp0_desc, 0, LongSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.z1g(tmp0_desc, 1, tmp8_cached[1].w2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp7_input.o1g(tmp0_desc);
    return SearchRoomEvents.f50(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  l1c() {
    return this.d50_1;
  }
  r1o() {
    var tmp0_cached = Companion_getInstance_62().c50_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(LongSerializer_getInstance()), tmp0_cached[1].w2(), get_nullable(StringSerializer_getInstance())];
  }
}
class SearchRoomEvents {
  constructor() {
    Companion_getInstance_62();
    this.count = null;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.results = [];
    this.nextBatch = null;
  }
  g50(_set____db54di) {
    this.count = _set____db54di;
  }
  h50() {
    return this.count;
  }
  i50(_set____db54di) {
    this.results = _set____db54di;
  }
  j50() {
    return this.results;
  }
  z4j(_set____db54di) {
    this.nextBatch = _set____db54di;
  }
  a4k() {
    return this.nextBatch;
  }
  static f50(seen0, count, results, nextBatch, serializationConstructorMarker) {
    Companion_getInstance_62();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_61().d50_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.count = null;
    else
      $this.count = count;
    if (0 === (seen0 & 2)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.results = [];
    } else
      $this.results = results;
    if (0 === (seen0 & 4))
      $this.nextBatch = null;
    else
      $this.nextBatch = nextBatch;
    return $this;
  }
}
class Companion_62 {}
class $serializer_62 {
  constructor() {
    $serializer_instance_62 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.search.SearchResult', this, 2);
    tmp0_serialDesc.c1o('rank', true);
    tmp0_serialDesc.c1o('result', true);
    this.k50_1 = tmp0_serialDesc;
  }
  l50(encoder, value) {
    var tmp0_desc = this.k50_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.rank == null)) {
      tmp1_output.f1i(tmp0_desc, 0, DoubleSerializer_getInstance(), value.rank);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.result == null)) {
      tmp1_output.f1i(tmp0_desc, 1, $serializer_getInstance_63(), value.result);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.l50(encoder, value instanceof SearchResult ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.k50_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.n1g(tmp0_desc);
    if (tmp6_input.c1h()) {
      tmp4_local0 = tmp6_input.b1h(tmp0_desc, 0, DoubleSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, $serializer_getInstance_63(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.b1h(tmp0_desc, 0, DoubleSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, $serializer_getInstance_63(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp6_input.o1g(tmp0_desc);
    return SearchResult.m50(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  l1c() {
    return this.k50_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(DoubleSerializer_getInstance()), get_nullable($serializer_getInstance_63())];
  }
}
class SearchResult {
  constructor() {
    this.rank = null;
    this.result = null;
  }
  n50(_set____db54di) {
    this.rank = _set____db54di;
  }
  o50() {
    return this.rank;
  }
  p50(_set____db54di) {
    this.result = _set____db54di;
  }
  q50() {
    return this.result;
  }
  static m50(seen0, rank, result, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_62().k50_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.rank = null;
    else
      $this.rank = rank;
    if (0 === (seen0 & 2))
      $this.result = null;
    else
      $this.result = result;
    return $this;
  }
}
class Companion_63 {}
class $serializer_63 {
  constructor() {
    $serializer_instance_63 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.search.SearchResultEvent', this, 6);
    tmp0_serialDesc.c1o('event_id', true);
    tmp0_serialDesc.c1o('type', true);
    tmp0_serialDesc.c1o('sender', true);
    tmp0_serialDesc.c1o('room_id', true);
    tmp0_serialDesc.c1o('origin_server_ts', true);
    tmp0_serialDesc.c1o('content', true);
    this.r50_1 = tmp0_serialDesc;
  }
  s50(encoder, value) {
    var tmp0_desc = this.r50_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.eventId == null)) {
      tmp1_output.f1i(tmp0_desc, 0, StringSerializer_getInstance(), value.eventId);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.type == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.type);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.sender == null)) {
      tmp1_output.f1i(tmp0_desc, 2, StringSerializer_getInstance(), value.sender);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.roomId == null)) {
      tmp1_output.f1i(tmp0_desc, 3, StringSerializer_getInstance(), value.roomId);
    }
    if (tmp1_output.j1i(tmp0_desc, 4) ? true : !(value.originServerTs == null)) {
      tmp1_output.f1i(tmp0_desc, 4, LongSerializer_getInstance(), value.originServerTs);
    }
    if (tmp1_output.j1i(tmp0_desc, 5) ? true : !(value.content == null)) {
      tmp1_output.f1i(tmp0_desc, 5, $serializer_getInstance_64(), value.content);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.s50(encoder, value instanceof SearchResultEvent ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.r50_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.n1g(tmp0_desc);
    if (tmp10_input.c1h()) {
      tmp4_local0 = tmp10_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.b1h(tmp0_desc, 4, LongSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.b1h(tmp0_desc, 5, $serializer_getInstance_64(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.b1h(tmp0_desc, 4, LongSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.b1h(tmp0_desc, 5, $serializer_getInstance_64(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp10_input.o1g(tmp0_desc);
    return SearchResultEvent.t50(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  }
  l1c() {
    return this.r50_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(LongSerializer_getInstance()), get_nullable($serializer_getInstance_64())];
  }
}
class SearchResultEvent {
  constructor() {
    this.eventId = null;
    this.type = null;
    this.sender = null;
    this.roomId = null;
    this.originServerTs = null;
    this.content = null;
  }
  q4d(_set____db54di) {
    this.eventId = _set____db54di;
  }
  r4d() {
    return this.eventId;
  }
  a4d(_set____db54di) {
    this.type = _set____db54di;
  }
  b4d() {
    return this.type;
  }
  u50(_set____db54di) {
    this.sender = _set____db54di;
  }
  q4o() {
    return this.sender;
  }
  y4c(_set____db54di) {
    this.roomId = _set____db54di;
  }
  z4c() {
    return this.roomId;
  }
  v50(_set____db54di) {
    this.originServerTs = _set____db54di;
  }
  o4o() {
    return this.originServerTs;
  }
  w50(_set____db54di) {
    this.content = _set____db54di;
  }
  o20() {
    return this.content;
  }
  static t50(seen0, eventId, type, sender, roomId, originServerTs, content, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_63().r50_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.eventId = null;
    else
      $this.eventId = eventId;
    if (0 === (seen0 & 2))
      $this.type = null;
    else
      $this.type = type;
    if (0 === (seen0 & 4))
      $this.sender = null;
    else
      $this.sender = sender;
    if (0 === (seen0 & 8))
      $this.roomId = null;
    else
      $this.roomId = roomId;
    if (0 === (seen0 & 16))
      $this.originServerTs = null;
    else
      $this.originServerTs = originServerTs;
    if (0 === (seen0 & 32))
      $this.content = null;
    else
      $this.content = content;
    return $this;
  }
}
class Companion_64 {}
class $serializer_64 {
  constructor() {
    $serializer_instance_64 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.search.SearchResultContent', this, 2);
    tmp0_serialDesc.c1o('msgtype', true);
    tmp0_serialDesc.c1o('body', true);
    this.x50_1 = tmp0_serialDesc;
  }
  y50(encoder, value) {
    var tmp0_desc = this.x50_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.msgtype == null)) {
      tmp1_output.f1i(tmp0_desc, 0, StringSerializer_getInstance(), value.msgtype);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.body == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.body);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.y50(encoder, value instanceof SearchResultContent ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.x50_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.n1g(tmp0_desc);
    if (tmp6_input.c1h()) {
      tmp4_local0 = tmp6_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp6_input.o1g(tmp0_desc);
    return SearchResultContent.z50(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  l1c() {
    return this.x50_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class SearchResultContent {
  constructor() {
    this.msgtype = null;
    this.body = null;
  }
  y4h(_set____db54di) {
    this.msgtype = _set____db54di;
  }
  z4h() {
    return this.msgtype;
  }
  w4h(_set____db54di) {
    this.body = _set____db54di;
  }
  x4h() {
    return this.body;
  }
  static z50(seen0, msgtype, body, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_64().x50_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.msgtype = null;
    else
      $this.msgtype = msgtype;
    if (0 === (seen0 & 2))
      $this.body = null;
    else
      $this.body = body;
    return $this;
  }
}
class Companion_65 {}
class $serializer_65 {
  constructor() {
    $serializer_instance_65 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.sync.SyncResponse', this, 3);
    tmp0_serialDesc.c1o('next_batch', true);
    tmp0_serialDesc.c1o('rooms', true);
    tmp0_serialDesc.c1o('account_data', true);
    this.a51_1 = tmp0_serialDesc;
  }
  b51(encoder, value) {
    var tmp0_desc = this.a51_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.nextBatch === '')) {
      tmp1_output.c1i(tmp0_desc, 0, value.nextBatch);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.rooms == null)) {
      tmp1_output.f1i(tmp0_desc, 1, $serializer_getInstance_66(), value.rooms);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.accountData == null)) {
      tmp1_output.f1i(tmp0_desc, 2, $serializer_getInstance_72(), value.accountData);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.b51(encoder, value instanceof SyncResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.a51_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.n1g(tmp0_desc);
    if (tmp7_input.c1h()) {
      tmp4_local0 = tmp7_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.b1h(tmp0_desc, 1, $serializer_getInstance_66(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.b1h(tmp0_desc, 2, $serializer_getInstance_72(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.b1h(tmp0_desc, 1, $serializer_getInstance_66(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.b1h(tmp0_desc, 2, $serializer_getInstance_72(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp7_input.o1g(tmp0_desc);
    return SyncResponse.c51(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  l1c() {
    return this.a51_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable($serializer_getInstance_66()), get_nullable($serializer_getInstance_72())];
  }
}
class SyncResponse {
  constructor() {
    this.nextBatch = '';
    this.rooms = null;
    this.accountData = null;
  }
  d51(_set____db54di) {
    this.nextBatch = _set____db54di;
  }
  a4k() {
    return this.nextBatch;
  }
  e51(_set____db54di) {
    this.rooms = _set____db54di;
  }
  b4e() {
    return this.rooms;
  }
  f51(_set____db54di) {
    this.accountData = _set____db54di;
  }
  b4q() {
    return this.accountData;
  }
  static c51(seen0, nextBatch, rooms, accountData, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_65().a51_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.nextBatch = '';
    else
      $this.nextBatch = nextBatch;
    if (0 === (seen0 & 2))
      $this.rooms = null;
    else
      $this.rooms = rooms;
    if (0 === (seen0 & 4))
      $this.accountData = null;
    else
      $this.accountData = accountData;
    return $this;
  }
}
class Companion_66 {
  constructor() {
    Companion_instance_66 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, SyncRooms$Companion$$childSerializers$_anonymous__ebc099);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, SyncRooms$Companion$$childSerializers$_anonymous__ebc099_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.g51_1 = [tmp_1, tmp_3, lazy(tmp_4, SyncRooms$Companion$$childSerializers$_anonymous__ebc099_1)];
  }
}
class $serializer_66 {
  constructor() {
    $serializer_instance_66 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.sync.SyncRooms', this, 3);
    tmp0_serialDesc.c1o('join', true);
    tmp0_serialDesc.c1o('invite', true);
    tmp0_serialDesc.c1o('leave', true);
    this.h51_1 = tmp0_serialDesc;
  }
  i51(encoder, value) {
    var tmp0_desc = this.h51_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_67().g51_1;
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.join == null)) {
      tmp1_output.f1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.join);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.invite == null)) {
      tmp1_output.f1i(tmp0_desc, 1, tmp2_cached[1].w2(), value.invite);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.leave == null)) {
      tmp1_output.f1i(tmp0_desc, 2, tmp2_cached[2].w2(), value.leave);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.i51(encoder, value instanceof SyncRooms ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.h51_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.n1g(tmp0_desc);
    var tmp8_cached = Companion_getInstance_67().g51_1;
    if (tmp7_input.c1h()) {
      tmp4_local0 = tmp7_input.b1h(tmp0_desc, 0, tmp8_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.b1h(tmp0_desc, 1, tmp8_cached[1].w2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.b1h(tmp0_desc, 2, tmp8_cached[2].w2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.b1h(tmp0_desc, 0, tmp8_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.b1h(tmp0_desc, 1, tmp8_cached[1].w2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.b1h(tmp0_desc, 2, tmp8_cached[2].w2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp7_input.o1g(tmp0_desc);
    return SyncRooms.j51(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  l1c() {
    return this.h51_1;
  }
  r1o() {
    var tmp0_cached = Companion_getInstance_67().g51_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].w2()), get_nullable(tmp0_cached[1].w2()), get_nullable(tmp0_cached[2].w2())];
  }
}
class SyncRooms {
  constructor() {
    Companion_getInstance_67();
    this.join = null;
    this.invite = null;
    this.leave = null;
  }
  k51(_set____db54di) {
    this.join = _set____db54di;
  }
  l51() {
    return this.join;
  }
  m51(_set____db54di) {
    this.invite = _set____db54di;
  }
  p4h() {
    return this.invite;
  }
  n51(_set____db54di) {
    this.leave = _set____db54di;
  }
  o51() {
    return this.leave;
  }
  static j51(seen0, join, invite, leave, serializationConstructorMarker) {
    Companion_getInstance_67();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_66().h51_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.join = null;
    else
      $this.join = join;
    if (0 === (seen0 & 2))
      $this.invite = null;
    else
      $this.invite = invite;
    if (0 === (seen0 & 4))
      $this.leave = null;
    else
      $this.leave = leave;
    return $this;
  }
}
class Companion_67 {}
class $serializer_67 {
  constructor() {
    $serializer_instance_67 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.sync.SyncJoinedRoom', this, 5);
    tmp0_serialDesc.c1o('timeline', true);
    tmp0_serialDesc.c1o('state', true);
    tmp0_serialDesc.c1o('account_data', true);
    tmp0_serialDesc.c1o('ephemeral', true);
    tmp0_serialDesc.c1o('unread_notifications', true);
    this.p51_1 = tmp0_serialDesc;
  }
  q51(encoder, value) {
    var tmp0_desc = this.p51_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.timeline == null)) {
      tmp1_output.f1i(tmp0_desc, 0, $serializer_getInstance_70(), value.timeline);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.state == null)) {
      tmp1_output.f1i(tmp0_desc, 1, $serializer_getInstance_71(), value.state);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.accountData == null)) {
      tmp1_output.f1i(tmp0_desc, 2, $serializer_getInstance_72(), value.accountData);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.ephemeral == null)) {
      tmp1_output.f1i(tmp0_desc, 3, $serializer_getInstance_73(), value.ephemeral);
    }
    if (tmp1_output.j1i(tmp0_desc, 4) ? true : !(value.unreadNotifications == null)) {
      tmp1_output.f1i(tmp0_desc, 4, $serializer_getInstance_74(), value.unreadNotifications);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.q51(encoder, value instanceof SyncJoinedRoom ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.p51_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.n1g(tmp0_desc);
    if (tmp9_input.c1h()) {
      tmp4_local0 = tmp9_input.b1h(tmp0_desc, 0, $serializer_getInstance_70(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.b1h(tmp0_desc, 1, $serializer_getInstance_71(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.b1h(tmp0_desc, 2, $serializer_getInstance_72(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.b1h(tmp0_desc, 3, $serializer_getInstance_73(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.b1h(tmp0_desc, 4, $serializer_getInstance_74(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.b1h(tmp0_desc, 0, $serializer_getInstance_70(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.b1h(tmp0_desc, 1, $serializer_getInstance_71(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.b1h(tmp0_desc, 2, $serializer_getInstance_72(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.b1h(tmp0_desc, 3, $serializer_getInstance_73(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.b1h(tmp0_desc, 4, $serializer_getInstance_74(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp9_input.o1g(tmp0_desc);
    return SyncJoinedRoom.r51(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  l1c() {
    return this.p51_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_70()), get_nullable($serializer_getInstance_71()), get_nullable($serializer_getInstance_72()), get_nullable($serializer_getInstance_73()), get_nullable($serializer_getInstance_74())];
  }
}
class SyncJoinedRoom {
  constructor() {
    this.timeline = null;
    this.state = null;
    this.accountData = null;
    this.ephemeral = null;
    this.unreadNotifications = null;
  }
  s51(_set____db54di) {
    this.timeline = _set____db54di;
  }
  u4q() {
    return this.timeline;
  }
  t51(_set____db54di) {
    this.state = _set____db54di;
  }
  g4p() {
    return this.state;
  }
  f51(_set____db54di) {
    this.accountData = _set____db54di;
  }
  b4q() {
    return this.accountData;
  }
  u51(_set____db54di) {
    this.ephemeral = _set____db54di;
  }
  r4q() {
    return this.ephemeral;
  }
  v51(_set____db54di) {
    this.unreadNotifications = _set____db54di;
  }
  w51() {
    return this.unreadNotifications;
  }
  static r51(seen0, timeline, state, accountData, ephemeral, unreadNotifications, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_67().p51_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.timeline = null;
    else
      $this.timeline = timeline;
    if (0 === (seen0 & 2))
      $this.state = null;
    else
      $this.state = state;
    if (0 === (seen0 & 4))
      $this.accountData = null;
    else
      $this.accountData = accountData;
    if (0 === (seen0 & 8))
      $this.ephemeral = null;
    else
      $this.ephemeral = ephemeral;
    if (0 === (seen0 & 16))
      $this.unreadNotifications = null;
    else
      $this.unreadNotifications = unreadNotifications;
    return $this;
  }
}
class Companion_68 {}
class $serializer_68 {
  constructor() {
    $serializer_instance_68 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.sync.SyncInvitedRoom', this, 1);
    tmp0_serialDesc.c1o('invite_state', true);
    this.x51_1 = tmp0_serialDesc;
  }
  y51(encoder, value) {
    var tmp0_desc = this.x51_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.inviteState == null)) {
      tmp1_output.f1i(tmp0_desc, 0, $serializer_getInstance_75(), value.inviteState);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.y51(encoder, value instanceof SyncInvitedRoom ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.x51_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, $serializer_getInstance_75(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, $serializer_getInstance_75(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return SyncInvitedRoom.z51(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.x51_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_75())];
  }
}
class SyncInvitedRoom {
  constructor() {
    this.inviteState = null;
  }
  a52(_set____db54di) {
    this.inviteState = _set____db54di;
  }
  b52() {
    return this.inviteState;
  }
  static z51(seen0, inviteState, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_68().x51_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.inviteState = null;
    else
      $this.inviteState = inviteState;
    return $this;
  }
}
class Companion_69 {}
class $serializer_69 {
  constructor() {
    $serializer_instance_69 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.sync.SyncLeftRoom', this, 3);
    tmp0_serialDesc.c1o('timeline', true);
    tmp0_serialDesc.c1o('state', true);
    tmp0_serialDesc.c1o('account_data', true);
    this.c52_1 = tmp0_serialDesc;
  }
  d52(encoder, value) {
    var tmp0_desc = this.c52_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.timeline == null)) {
      tmp1_output.f1i(tmp0_desc, 0, $serializer_getInstance_70(), value.timeline);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.state == null)) {
      tmp1_output.f1i(tmp0_desc, 1, $serializer_getInstance_71(), value.state);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.accountData == null)) {
      tmp1_output.f1i(tmp0_desc, 2, $serializer_getInstance_72(), value.accountData);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.d52(encoder, value instanceof SyncLeftRoom ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.c52_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.n1g(tmp0_desc);
    if (tmp7_input.c1h()) {
      tmp4_local0 = tmp7_input.b1h(tmp0_desc, 0, $serializer_getInstance_70(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.b1h(tmp0_desc, 1, $serializer_getInstance_71(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.b1h(tmp0_desc, 2, $serializer_getInstance_72(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.b1h(tmp0_desc, 0, $serializer_getInstance_70(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.b1h(tmp0_desc, 1, $serializer_getInstance_71(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.b1h(tmp0_desc, 2, $serializer_getInstance_72(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp7_input.o1g(tmp0_desc);
    return SyncLeftRoom.e52(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  l1c() {
    return this.c52_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_70()), get_nullable($serializer_getInstance_71()), get_nullable($serializer_getInstance_72())];
  }
}
class SyncLeftRoom {
  constructor() {
    this.timeline = null;
    this.state = null;
    this.accountData = null;
  }
  s51(_set____db54di) {
    this.timeline = _set____db54di;
  }
  u4q() {
    return this.timeline;
  }
  t51(_set____db54di) {
    this.state = _set____db54di;
  }
  g4p() {
    return this.state;
  }
  f51(_set____db54di) {
    this.accountData = _set____db54di;
  }
  b4q() {
    return this.accountData;
  }
  static e52(seen0, timeline, state, accountData, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_69().c52_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.timeline = null;
    else
      $this.timeline = timeline;
    if (0 === (seen0 & 2))
      $this.state = null;
    else
      $this.state = state;
    if (0 === (seen0 & 4))
      $this.accountData = null;
    else
      $this.accountData = accountData;
    return $this;
  }
}
class Companion_70 {
  constructor() {
    Companion_instance_70 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.f52_1 = [lazy(tmp_0, SyncTimeline$Companion$$childSerializers$_anonymous__av0vyq), null, null];
  }
}
class $serializer_70 {
  constructor() {
    $serializer_instance_70 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.sync.SyncTimeline', this, 3);
    tmp0_serialDesc.c1o('events', true);
    tmp0_serialDesc.c1o('limited', true);
    tmp0_serialDesc.c1o('prev_batch', true);
    this.g52_1 = tmp0_serialDesc;
  }
  h52(encoder, value) {
    var tmp0_desc = this.g52_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_71().f52_1;
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.events;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.events);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.limited == null)) {
      tmp1_output.f1i(tmp0_desc, 1, BooleanSerializer_getInstance(), value.limited);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.prevBatch == null)) {
      tmp1_output.f1i(tmp0_desc, 2, StringSerializer_getInstance(), value.prevBatch);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.h52(encoder, value instanceof SyncTimeline ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.g52_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.n1g(tmp0_desc);
    var tmp8_cached = Companion_getInstance_71().f52_1;
    if (tmp7_input.c1h()) {
      tmp4_local0 = tmp7_input.z1g(tmp0_desc, 0, tmp8_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.b1h(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.z1g(tmp0_desc, 0, tmp8_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.b1h(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp7_input.o1g(tmp0_desc);
    return SyncTimeline.i52(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  l1c() {
    return this.g52_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_71().f52_1[0].w2(), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class SyncTimeline {
  constructor() {
    Companion_getInstance_71();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.events = [];
    this.limited = null;
    this.prevBatch = null;
  }
  j52(_set____db54di) {
    this.events = _set____db54di;
  }
  k52() {
    return this.events;
  }
  l52(_set____db54di) {
    this.limited = _set____db54di;
  }
  m52() {
    return this.limited;
  }
  g4n(_set____db54di) {
    this.prevBatch = _set____db54di;
  }
  h4n() {
    return this.prevBatch;
  }
  static i52(seen0, events, limited, prevBatch, serializationConstructorMarker) {
    Companion_getInstance_71();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_70().g52_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.events = [];
    } else
      $this.events = events;
    if (0 === (seen0 & 2))
      $this.limited = null;
    else
      $this.limited = limited;
    if (0 === (seen0 & 4))
      $this.prevBatch = null;
    else
      $this.prevBatch = prevBatch;
    return $this;
  }
}
class Companion_71 {
  constructor() {
    Companion_instance_71 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.n52_1 = [lazy(tmp_0, SyncState$Companion$$childSerializers$_anonymous__d2b0i4)];
  }
}
class $serializer_71 {
  constructor() {
    $serializer_instance_71 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.sync.SyncState', this, 1);
    tmp0_serialDesc.c1o('events', true);
    this.o52_1 = tmp0_serialDesc;
  }
  p52(encoder, value) {
    var tmp0_desc = this.o52_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_72().n52_1;
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.events;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.events);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.p52(encoder, value instanceof SyncState ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.o52_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    var tmp6_cached = Companion_getInstance_72().n52_1;
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, tmp6_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, tmp6_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return SyncState.q52(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.o52_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_72().n52_1[0].w2()];
  }
}
class SyncState {
  constructor() {
    Companion_getInstance_72();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.events = [];
  }
  j52(_set____db54di) {
    this.events = _set____db54di;
  }
  k52() {
    return this.events;
  }
  static q52(seen0, events, serializationConstructorMarker) {
    Companion_getInstance_72();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_71().o52_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.events = [];
    } else
      $this.events = events;
    return $this;
  }
}
class Companion_72 {
  constructor() {
    Companion_instance_72 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.r52_1 = [lazy(tmp_0, SyncAccountData$Companion$$childSerializers$_anonymous__1rtoxe)];
  }
}
class $serializer_72 {
  constructor() {
    $serializer_instance_72 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.sync.SyncAccountData', this, 1);
    tmp0_serialDesc.c1o('events', true);
    this.s52_1 = tmp0_serialDesc;
  }
  t52(encoder, value) {
    var tmp0_desc = this.s52_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_73().r52_1;
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.events;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.events);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.t52(encoder, value instanceof SyncAccountData ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.s52_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    var tmp6_cached = Companion_getInstance_73().r52_1;
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, tmp6_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, tmp6_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return SyncAccountData.u52(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.s52_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_73().r52_1[0].w2()];
  }
}
class SyncAccountData {
  constructor() {
    Companion_getInstance_73();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.events = [];
  }
  j52(_set____db54di) {
    this.events = _set____db54di;
  }
  k52() {
    return this.events;
  }
  static u52(seen0, events, serializationConstructorMarker) {
    Companion_getInstance_73();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_72().s52_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.events = [];
    } else
      $this.events = events;
    return $this;
  }
}
class Companion_73 {
  constructor() {
    Companion_instance_73 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.v52_1 = [lazy(tmp_0, SyncEphemeral$Companion$$childSerializers$_anonymous__rh13c8)];
  }
}
class $serializer_73 {
  constructor() {
    $serializer_instance_73 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.sync.SyncEphemeral', this, 1);
    tmp0_serialDesc.c1o('events', true);
    this.w52_1 = tmp0_serialDesc;
  }
  x52(encoder, value) {
    var tmp0_desc = this.w52_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_74().v52_1;
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.events;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.events);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.x52(encoder, value instanceof SyncEphemeral ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.w52_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    var tmp6_cached = Companion_getInstance_74().v52_1;
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, tmp6_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, tmp6_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return SyncEphemeral.y52(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.w52_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_74().v52_1[0].w2()];
  }
}
class SyncEphemeral {
  constructor() {
    Companion_getInstance_74();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.events = [];
  }
  j52(_set____db54di) {
    this.events = _set____db54di;
  }
  k52() {
    return this.events;
  }
  static y52(seen0, events, serializationConstructorMarker) {
    Companion_getInstance_74();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_73().w52_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.events = [];
    } else
      $this.events = events;
    return $this;
  }
}
class Companion_74 {}
class $serializer_74 {
  constructor() {
    $serializer_instance_74 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.sync.SyncUnreadNotifications', this, 2);
    tmp0_serialDesc.c1o('highlight_count', true);
    tmp0_serialDesc.c1o('notification_count', true);
    this.z52_1 = tmp0_serialDesc;
  }
  a53(encoder, value) {
    var tmp0_desc = this.z52_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.highlightCount == null)) {
      tmp1_output.f1i(tmp0_desc, 0, IntSerializer_getInstance(), value.highlightCount);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.notificationCount == null)) {
      tmp1_output.f1i(tmp0_desc, 1, IntSerializer_getInstance(), value.notificationCount);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.a53(encoder, value instanceof SyncUnreadNotifications ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.z52_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.n1g(tmp0_desc);
    if (tmp6_input.c1h()) {
      tmp4_local0 = tmp6_input.b1h(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.b1h(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp6_input.o1g(tmp0_desc);
    return SyncUnreadNotifications.b53(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  l1c() {
    return this.z52_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  }
}
class SyncUnreadNotifications {
  constructor() {
    this.highlightCount = null;
    this.notificationCount = null;
  }
  c53(_set____db54di) {
    this.highlightCount = _set____db54di;
  }
  d53() {
    return this.highlightCount;
  }
  e53(_set____db54di) {
    this.notificationCount = _set____db54di;
  }
  f53() {
    return this.notificationCount;
  }
  static b53(seen0, highlightCount, notificationCount, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_74().z52_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.highlightCount = null;
    else
      $this.highlightCount = highlightCount;
    if (0 === (seen0 & 2))
      $this.notificationCount = null;
    else
      $this.notificationCount = notificationCount;
    return $this;
  }
}
class Companion_75 {
  constructor() {
    Companion_instance_75 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.g53_1 = [lazy(tmp_0, SyncInviteState$Companion$$childSerializers$_anonymous__2iq9z1)];
  }
}
class $serializer_75 {
  constructor() {
    $serializer_instance_75 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.sync.SyncInviteState', this, 1);
    tmp0_serialDesc.c1o('events', true);
    this.h53_1 = tmp0_serialDesc;
  }
  i53(encoder, value) {
    var tmp0_desc = this.h53_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_76().g53_1;
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.events;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.events);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.i53(encoder, value instanceof SyncInviteState ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.h53_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    var tmp6_cached = Companion_getInstance_76().g53_1;
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, tmp6_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, tmp6_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return SyncInviteState.j53(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.h53_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_76().g53_1[0].w2()];
  }
}
class SyncInviteState {
  constructor() {
    Companion_getInstance_76();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.events = [];
  }
  j52(_set____db54di) {
    this.events = _set____db54di;
  }
  k52() {
    return this.events;
  }
  static j53(seen0, events, serializationConstructorMarker) {
    Companion_getInstance_76();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_75().h53_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.events = [];
    } else
      $this.events = events;
    return $this;
  }
}
class Companion_76 {
  constructor() {
    Companion_instance_76 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.k53_1 = [lazy(tmp_0, TagsGetResponse$Companion$$childSerializers$_anonymous__3nkk8k)];
  }
}
class $serializer_76 {
  constructor() {
    $serializer_instance_76 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.tags.TagsGetResponse', this, 1);
    tmp0_serialDesc.c1o('tags', true);
    this.l53_1 = tmp0_serialDesc;
  }
  m53(encoder, value) {
    var tmp0_desc = this.l53_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_77().k53_1;
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.tags;
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.tags);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.m53(encoder, value instanceof TagsGetResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.l53_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    var tmp6_cached = Companion_getInstance_77().k53_1;
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, tmp6_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, tmp6_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return TagsGetResponse.n53(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.l53_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_77().k53_1[0].w2()];
  }
}
class TagsGetResponse {
  constructor() {
    Companion_getInstance_77();
    var tmp = this;
    // Inline function 'kotlin.collections.mapOf' call
    tmp.tags = emptyMap();
  }
  o53(_set____db54di) {
    this.tags = _set____db54di;
  }
  p53() {
    return this.tags;
  }
  static n53(seen0, tags, serializationConstructorMarker) {
    Companion_getInstance_77();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_76().l53_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.tags = emptyMap();
    } else
      $this.tags = tags;
    return $this;
  }
}
class Companion_77 {}
class $serializer_77 {
  constructor() {
    $serializer_instance_77 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.tags.TagContent', this, 1);
    tmp0_serialDesc.c1o('order', true);
    this.q53_1 = tmp0_serialDesc;
  }
  r53(encoder, value) {
    var tmp0_desc = this.q53_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.order == null)) {
      tmp1_output.f1i(tmp0_desc, 0, DoubleSerializer_getInstance(), value.order);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.r53(encoder, value instanceof TagContent ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.q53_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, DoubleSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, DoubleSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return TagContent.s53(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.q53_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(DoubleSerializer_getInstance())];
  }
}
class TagContent {
  constructor() {
    this.order = null;
  }
  h4k(_set____db54di) {
    this.order = _set____db54di;
  }
  i4k() {
    return this.order;
  }
  static s53(seen0, order, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_77().q53_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.order = null;
    else
      $this.order = order;
    return $this;
  }
}
class Companion_78 {
  constructor() {
    Companion_instance_78 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.t53_1 = [lazy(tmp_0, UserDirectorySearchResponse$Companion$$childSerializers$_anonymous__u6z7kx), null];
  }
}
class $serializer_78 {
  constructor() {
    $serializer_instance_78 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.userdirectory.UserDirectorySearchResponse', this, 2);
    tmp0_serialDesc.c1o('results', true);
    tmp0_serialDesc.c1o('limited', true);
    this.u53_1 = tmp0_serialDesc;
  }
  v53(encoder, value) {
    var tmp0_desc = this.u53_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_79().t53_1;
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.results;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.results);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.limited === false)) {
      tmp1_output.u1h(tmp0_desc, 1, value.limited);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.v53(encoder, value instanceof UserDirectorySearchResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.u53_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_input = decoder.n1g(tmp0_desc);
    var tmp7_cached = Companion_getInstance_79().t53_1;
    if (tmp6_input.c1h()) {
      tmp4_local0 = tmp6_input.z1g(tmp0_desc, 0, tmp7_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.p1g(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.z1g(tmp0_desc, 0, tmp7_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.p1g(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp6_input.o1g(tmp0_desc);
    return UserDirectorySearchResponse.w53(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  l1c() {
    return this.u53_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_79().t53_1[0].w2(), BooleanSerializer_getInstance()];
  }
}
class UserDirectorySearchResponse {
  constructor() {
    Companion_getInstance_79();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.results = [];
    this.limited = false;
  }
  x53(_set____db54di) {
    this.results = _set____db54di;
  }
  j50() {
    return this.results;
  }
  y53(_set____db54di) {
    this.limited = _set____db54di;
  }
  m52() {
    return this.limited;
  }
  static w53(seen0, results, limited, serializationConstructorMarker) {
    Companion_getInstance_79();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_78().u53_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.results = [];
    } else
      $this.results = results;
    if (0 === (seen0 & 2))
      $this.limited = false;
    else
      $this.limited = limited;
    return $this;
  }
}
class Companion_79 {}
class $serializer_79 {
  constructor() {
    $serializer_instance_79 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.userdirectory.UserDirectoryUser', this, 3);
    tmp0_serialDesc.c1o('user_id', true);
    tmp0_serialDesc.c1o('display_name', true);
    tmp0_serialDesc.c1o('avatar_url', true);
    this.z53_1 = tmp0_serialDesc;
  }
  a54(encoder, value) {
    var tmp0_desc = this.z53_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.userId === '')) {
      tmp1_output.c1i(tmp0_desc, 0, value.userId);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.displayName == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.displayName);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.avatarUrl == null)) {
      tmp1_output.f1i(tmp0_desc, 2, StringSerializer_getInstance(), value.avatarUrl);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.a54(encoder, value instanceof UserDirectoryUser ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.z53_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.n1g(tmp0_desc);
    if (tmp7_input.c1h()) {
      tmp4_local0 = tmp7_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp7_input.o1g(tmp0_desc);
    return UserDirectoryUser.b54(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  l1c() {
    return this.z53_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class UserDirectoryUser {
  constructor() {
    this.userId = '';
    this.displayName = null;
    this.avatarUrl = null;
  }
  z4k(_set____db54di) {
    this.userId = _set____db54di;
  }
  x4c() {
    return this.userId;
  }
  g4d(_set____db54di) {
    this.displayName = _set____db54di;
  }
  h4d() {
    return this.displayName;
  }
  n4f(_set____db54di) {
    this.avatarUrl = _set____db54di;
  }
  o4f() {
    return this.avatarUrl;
  }
  static b54(seen0, userId, displayName, avatarUrl, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_79().z53_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.userId = '';
    else
      $this.userId = userId;
    if (0 === (seen0 & 2))
      $this.displayName = null;
    else
      $this.displayName = displayName;
    if (0 === (seen0 & 4))
      $this.avatarUrl = null;
    else
      $this.avatarUrl = avatarUrl;
    return $this;
  }
}
class Companion_80 {
  constructor() {
    Companion_instance_80 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, VersionsGetResponse$Companion$$childSerializers$_anonymous__fupxo2);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.c54_1 = [tmp_1, lazy(tmp_2, VersionsGetResponse$Companion$$childSerializers$_anonymous__fupxo2_0)];
  }
}
class $serializer_80 {
  constructor() {
    $serializer_instance_80 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.versions.VersionsGetResponse', this, 2);
    tmp0_serialDesc.c1o('versions', true);
    tmp0_serialDesc.c1o('unstable_features', true);
    this.d54_1 = tmp0_serialDesc;
  }
  e54(encoder, value) {
    var tmp0_desc = this.d54_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_81().c54_1;
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 0)) {
      tmp = true;
    } else {
      var tmp_0 = value.versions;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.versions);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.unstableFeatures == null)) {
      tmp1_output.f1i(tmp0_desc, 1, tmp2_cached[1].w2(), value.unstableFeatures);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.e54(encoder, value instanceof VersionsGetResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.d54_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.n1g(tmp0_desc);
    var tmp7_cached = Companion_getInstance_81().c54_1;
    if (tmp6_input.c1h()) {
      tmp4_local0 = tmp6_input.z1g(tmp0_desc, 0, tmp7_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, tmp7_cached[1].w2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.z1g(tmp0_desc, 0, tmp7_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, tmp7_cached[1].w2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp6_input.o1g(tmp0_desc);
    return VersionsGetResponse.f54(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  l1c() {
    return this.d54_1;
  }
  r1o() {
    var tmp0_cached = Companion_getInstance_81().c54_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].w2(), get_nullable(tmp0_cached[1].w2())];
  }
}
class VersionsGetResponse {
  constructor() {
    Companion_getInstance_81();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.versions = [];
    this.unstableFeatures = null;
  }
  g54(_set____db54di) {
    this.versions = _set____db54di;
  }
  h54() {
    return this.versions;
  }
  i54(_set____db54di) {
    this.unstableFeatures = _set____db54di;
  }
  j54() {
    return this.unstableFeatures;
  }
  static f54(seen0, versions, unstableFeatures, serializationConstructorMarker) {
    Companion_getInstance_81();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_80().d54_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.versions = [];
    } else
      $this.versions = versions;
    if (0 === (seen0 & 2))
      $this.unstableFeatures = null;
    else
      $this.unstableFeatures = unstableFeatures;
    return $this;
  }
}
class Companion_81 {
  constructor() {
    Companion_instance_81 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.k54_1 = [null, null, lazy(tmp_0, VoIPGetTurnServerResponse$Companion$$childSerializers$_anonymous__huuw5p), null];
  }
}
class $serializer_81 {
  constructor() {
    $serializer_instance_81 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.api.response.voip.VoIPGetTurnServerResponse', this, 4);
    tmp0_serialDesc.c1o('username', true);
    tmp0_serialDesc.c1o('password', true);
    tmp0_serialDesc.c1o('uris', true);
    tmp0_serialDesc.c1o('ttl', true);
    this.l54_1 = tmp0_serialDesc;
  }
  m54(encoder, value) {
    var tmp0_desc = this.l54_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_82().k54_1;
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.username === '')) {
      tmp1_output.c1i(tmp0_desc, 0, value.username);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.password === '')) {
      tmp1_output.c1i(tmp0_desc, 1, value.password);
    }
    var tmp;
    if (tmp1_output.j1i(tmp0_desc, 2)) {
      tmp = true;
    } else {
      var tmp_0 = value.uris;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.e1i(tmp0_desc, 2, tmp2_cached[2].w2(), value.uris);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.ttl === 0)) {
      tmp1_output.x1h(tmp0_desc, 3, value.ttl);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.m54(encoder, value instanceof VoIPGetTurnServerResponse ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.l54_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = 0;
    var tmp8_input = decoder.n1g(tmp0_desc);
    var tmp9_cached = Companion_getInstance_82().k54_1;
    if (tmp8_input.c1h()) {
      tmp4_local0 = tmp8_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.x1g(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.z1g(tmp0_desc, 2, tmp9_cached[2].w2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.s1g(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.x1g(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.z1g(tmp0_desc, 2, tmp9_cached[2].w2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.s1g(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp8_input.o1g(tmp0_desc);
    return VoIPGetTurnServerResponse.n54(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  l1c() {
    return this.l54_1;
  }
  r1o() {
    var tmp0_cached = Companion_getInstance_82().k54_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].w2(), IntSerializer_getInstance()];
  }
}
class VoIPGetTurnServerResponse {
  constructor() {
    Companion_getInstance_82();
    this.username = '';
    this.password = '';
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.uris = [];
    this.ttl = 0;
  }
  o54(_set____db54di) {
    this.username = _set____db54di;
  }
  o4c() {
    return this.username;
  }
  p54(_set____db54di) {
    this.password = _set____db54di;
  }
  r33() {
    return this.password;
  }
  q54(_set____db54di) {
    this.uris = _set____db54di;
  }
  r54() {
    return this.uris;
  }
  s54(_set____db54di) {
    this.ttl = _set____db54di;
  }
  t54() {
    return this.ttl;
  }
  static n54(seen0, username, password, uris, ttl, serializationConstructorMarker) {
    Companion_getInstance_82();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_81().l54_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.username = '';
    else
      $this.username = username;
    if (0 === (seen0 & 2))
      $this.password = '';
    else
      $this.password = password;
    if (0 === (seen0 & 4)) {
      var tmp = $this;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.uris = [];
    } else
      $this.uris = uris;
    if (0 === (seen0 & 8))
      $this.ttl = 0;
    else
      $this.ttl = ttl;
    return $this;
  }
}
class Companion_82 {}
class $serializer_82 {
  constructor() {
    $serializer_instance_82 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.entity.Room', this, 3);
    tmp0_serialDesc.c1o('room_id', false);
    tmp0_serialDesc.c1o('name', true);
    tmp0_serialDesc.c1o('topic', true);
    this.u54_1 = tmp0_serialDesc;
  }
  v54(encoder, value) {
    var tmp0_desc = this.u54_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    tmp1_output.c1i(tmp0_desc, 0, value.roomId);
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.name == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.topic == null)) {
      tmp1_output.f1i(tmp0_desc, 2, StringSerializer_getInstance(), value.topic);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.v54(encoder, value instanceof Room ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.u54_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.n1g(tmp0_desc);
    if (tmp7_input.c1h()) {
      tmp4_local0 = tmp7_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp7_input.o1g(tmp0_desc);
    return Room.x54(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  l1c() {
    return this.u54_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class Room {
  constructor() {
    this.name = null;
    this.topic = null;
  }
  o4n(_set____db54di) {
    this.w54_1 = _set____db54di;
  }
  z4c() {
    var tmp = this.w54_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('roomId');
    }
  }
  l4h(_set____db54di) {
    this.name = _set____db54di;
  }
  d1() {
    return this.name;
  }
  m4h(_set____db54di) {
    this.topic = _set____db54di;
  }
  n4h() {
    return this.topic;
  }
  static x54(seen0, roomId, name, topic, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_82().u54_1);
    }
    var $this = createThis(this);
    $this.w54_1 = roomId;
    if (0 === (seen0 & 2))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 4))
      $this.topic = null;
    else
      $this.topic = topic;
    return $this;
  }
  get roomId() {
    return this.z4c();
  }
  set roomId(value) {
    this.o4n(value);
  }
}
class Companion_83 {
  constructor() {
    this.y54_1 = 'X-RateLimit-Limit';
    this.z54_1 = 'X-RateLimit-Remaining';
    this.a55_1 = 'X-RateLimit-Reset';
  }
  of(response) {
    try {
      var limit = response.w42_1.w3('X-RateLimit-Limit');
      var remaining = response.w42_1.w3('X-RateLimit-Remaining');
      var reset = response.w42_1.w3('X-RateLimit-Reset');
      // Inline function 'kotlin.also' call
      var this_0 = new RateLimit();
      var tmp;
      if (limit == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp = !limit.j1();
      }
      if (tmp === true) {
        this_0.limit = toInt(limit.f2(0));
      }
      var tmp_0;
      if (remaining == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_0 = !remaining.j1();
      }
      if (tmp_0 === true) {
        this_0.remaining = toInt(remaining.f2(0));
      }
      var tmp_1;
      if (reset == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_1 = !reset.j1();
      }
      if (tmp_1 === true) {
        this_0.reset = Companion_getInstance().yo(toLong(reset.f2(0)));
      }
      return this_0;
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        return null;
      } else {
        throw $p;
      }
    }
  }
}
class RateLimit {
  constructor() {
    this.limit = 0;
    this.remaining = 0;
    this.reset = null;
  }
  b55(_set____db54di) {
    this.limit = _set____db54di;
  }
  j4d() {
    return this.limit;
  }
  c55(_set____db54di) {
    this.remaining = _set____db54di;
  }
  d55() {
    return this.remaining;
  }
  e55(_set____db54di) {
    this.reset = _set____db54di;
  }
  f55() {
    return this.reset;
  }
}
class AbstractResourceImpl {
  constructor(uri) {
    this.j55_1 = uri;
  }
  k55(_this__u8e3s4, key, value) {
    if (!(value == null)) {
      _this__u8e3s4.q42(key, value);
    }
    return _this__u8e3s4;
  }
}
class AbstractAuthResourceImpl extends AbstractResourceImpl {
  constructor(uri, accessToken) {
    super(uri);
    this.h55_1 = accessToken;
  }
  i55() {
    return 'Bearer ' + this.h55_1;
  }
}
class AccountDataResourceImpl$getAccountDataBlocking$slambda {
  constructor(this$0, $request) {
    this.l55_1 = this$0;
    this.m55_1 = $request;
  }
  *n55($this$toBlocking, $completion) {
    return yield* this.l55_1.i43(this.m55_1, $completion);
  }
  wc(p1, $completion) {
    return this.n55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountDataResourceImpl$setAccountDataBlocking$slambda {
  constructor(this$0, $request) {
    this.o55_1 = this$0;
    this.p55_1 = $request;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.o55_1.l43(this.p55_1, $completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountDataResourceImpl$getRoomAccountDataBlocking$slambda {
  constructor(this$0, $request) {
    this.r55_1 = this$0;
    this.s55_1 = $request;
  }
  *n55($this$toBlocking, $completion) {
    return yield* this.r55_1.o43(this.s55_1, $completion);
  }
  wc(p1, $completion) {
    return this.n55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountDataResourceImpl$setRoomAccountDataBlocking$slambda {
  constructor(this$0, $request) {
    this.t55_1 = this$0;
    this.u55_1 = $request;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.t55_1.r43(this.u55_1, $completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountDataResourceImpl extends AbstractAuthResourceImpl {
  *h43(request, $completion) {
    try {
      var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/user/' + request.userId + '/account_data/' + request.type).p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).r42($completion);
      if (response.v42_1 === 200) {
        // Inline function 'kotlin.also' call
        var this_0 = new Response(response.z42());
        this_0.json = response.z42();
        return this_0;
      }
      throw MatrixException.f43(response.v42_1, response.z42());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
        throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  getAccountData(request) {
    return promisify(($completion) => this.h43(request, $completion));
  }
  *i43(request, $completion) {
    return this.getAccountData === protoOf(AccountDataResourceImpl).getAccountData ? (yield* this.h43(request, $completion)) : (yield* await_0(this.getAccountData(request), $completion));
  }
  j43(request) {
    return toBlocking(AccountDataResourceImpl$getAccountDataBlocking$slambda_0(this, request));
  }
  *k43(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp = (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/user/' + request.userId + '/account_data/' + request.type).p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1);
        var tmp0_elvis_lhs = request.data;
        var response = yield* tmp.n41(tmp0_elvis_lhs == null ? '{}' : tmp0_elvis_lhs).t42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  setAccountData(request) {
    return promisify(($completion) => this.k43(request, $completion));
  }
  *l43(request, $completion) {
    return this.setAccountData === protoOf(AccountDataResourceImpl).setAccountData ? (yield* this.k43(request, $completion)) : (yield* await_0(this.setAccountData(request), $completion));
  }
  m43(request) {
    return toBlocking(AccountDataResourceImpl$setAccountDataBlocking$slambda_0(this, request));
  }
  *n43(request, $completion) {
    try {
      var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/user/' + request.userId + '/rooms/' + request.roomId + '/account_data/' + request.type).p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).r42($completion);
      if (response.v42_1 === 200) {
        // Inline function 'kotlin.also' call
        var this_0 = new Response(response.z42());
        this_0.json = response.z42();
        return this_0;
      }
      throw MatrixException.f43(response.v42_1, response.z42());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
        throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  getRoomAccountData(request) {
    return promisify(($completion) => this.n43(request, $completion));
  }
  *o43(request, $completion) {
    return this.getRoomAccountData === protoOf(AccountDataResourceImpl).getRoomAccountData ? (yield* this.n43(request, $completion)) : (yield* await_0(this.getRoomAccountData(request), $completion));
  }
  p43(request) {
    return toBlocking(AccountDataResourceImpl$getRoomAccountDataBlocking$slambda_0(this, request));
  }
  *q43(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp = (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/user/' + request.userId + '/rooms/' + request.roomId + '/account_data/' + request.type).p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1);
        var tmp0_elvis_lhs = request.data;
        var response = yield* tmp.n41(tmp0_elvis_lhs == null ? '{}' : tmp0_elvis_lhs).t42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  setRoomAccountData(request) {
    return promisify(($completion) => this.q43(request, $completion));
  }
  *r43(request, $completion) {
    return this.setRoomAccountData === protoOf(AccountDataResourceImpl).setRoomAccountData ? (yield* this.q43(request, $completion)) : (yield* await_0(this.setRoomAccountData(request), $completion));
  }
  s43(request) {
    return toBlocking(AccountDataResourceImpl$setRoomAccountDataBlocking$slambda_0(this, request));
  }
}
class Companion_84 {}
class $serializer_83 {
  constructor() {
    $serializer_instance_83 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.AccountsResourceImpl.RegisterBody', this, 7);
    tmp0_serialDesc.c1o('username', true);
    tmp0_serialDesc.c1o('password', true);
    tmp0_serialDesc.c1o('initial_device_display_name', true);
    tmp0_serialDesc.c1o('auth', true);
    tmp0_serialDesc.c1o('session', true);
    tmp0_serialDesc.c1o('did', true);
    tmp0_serialDesc.c1o('bind_email', true);
    this.y55_1 = tmp0_serialDesc;
  }
  z55(encoder, value) {
    var tmp0_desc = this.y55_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.a56_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 0, StringSerializer_getInstance(), value.a56_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.b56_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.b56_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.c56_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 2, StringSerializer_getInstance(), value.c56_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.d56_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 3, StringSerializer_getInstance(), value.d56_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 4) ? true : !(value.e56_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 4, StringSerializer_getInstance(), value.e56_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 5) ? true : !(value.f56_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 5, StringSerializer_getInstance(), value.f56_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 6) ? true : !(value.g56_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 6, BooleanSerializer_getInstance(), value.g56_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.z55(encoder, value instanceof RegisterBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.y55_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.n1g(tmp0_desc);
    if (tmp11_input.c1h()) {
      tmp4_local0 = tmp11_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.b1h(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.b1h(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.b1h(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.b1h(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.b1h(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.b1h(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp11_input.o1g(tmp0_desc);
    return RegisterBody.h56(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  l1c() {
    return this.y55_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  }
}
class Companion_85 {}
class $serializer_84 {
  constructor() {
    $serializer_instance_84 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.AccountsResourceImpl.ChangePasswordBody', this, 4);
    tmp0_serialDesc.c1o('auth', false);
    tmp0_serialDesc.c1o('new_password', false);
    tmp0_serialDesc.c1o('logout_devices', true);
    tmp0_serialDesc.c1o('logout_devices_all', true);
    this.i56_1 = tmp0_serialDesc;
  }
  j56(encoder, value) {
    var tmp0_desc = this.i56_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    tmp1_output.e1i(tmp0_desc, 0, $serializer_getInstance_85(), value.k56_1);
    tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.l56_1);
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.m56_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 2, BooleanSerializer_getInstance(), value.m56_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.n56_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 3, BooleanSerializer_getInstance(), value.n56_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.j56(encoder, value instanceof ChangePasswordBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.i56_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.n1g(tmp0_desc);
    if (tmp8_input.c1h()) {
      tmp4_local0 = tmp8_input.z1g(tmp0_desc, 0, $serializer_getInstance_85(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.b1h(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.b1h(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.z1g(tmp0_desc, 0, $serializer_getInstance_85(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.b1h(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.b1h(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp8_input.o1g(tmp0_desc);
    return ChangePasswordBody.o56(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  l1c() {
    return this.i56_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_85(), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  }
}
class Companion_86 {}
class $serializer_85 {
  constructor() {
    $serializer_instance_85 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.AccountsResourceImpl.ChangePasswordAuth', this, 2);
    tmp0_serialDesc.c1o('type', false);
    tmp0_serialDesc.c1o('password', false);
    this.p56_1 = tmp0_serialDesc;
  }
  q56(encoder, value) {
    var tmp0_desc = this.p56_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    tmp1_output.c1i(tmp0_desc, 0, value.r56_1);
    tmp1_output.c1i(tmp0_desc, 1, value.s56_1);
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.q56(encoder, value instanceof ChangePasswordAuth ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.p56_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.n1g(tmp0_desc);
    if (tmp6_input.c1h()) {
      tmp4_local0 = tmp6_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.x1g(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.x1g(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp6_input.o1g(tmp0_desc);
    return ChangePasswordAuth.t56(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  l1c() {
    return this.p56_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class RegisterBody {
  constructor(username, password, initialDeviceDisplayName, auth, session, did, bindEmail) {
    username = username === VOID ? null : username;
    password = password === VOID ? null : password;
    initialDeviceDisplayName = initialDeviceDisplayName === VOID ? null : initialDeviceDisplayName;
    auth = auth === VOID ? null : auth;
    session = session === VOID ? null : session;
    did = did === VOID ? null : did;
    bindEmail = bindEmail === VOID ? null : bindEmail;
    this.a56_1 = username;
    this.b56_1 = password;
    this.c56_1 = initialDeviceDisplayName;
    this.d56_1 = auth;
    this.e56_1 = session;
    this.f56_1 = did;
    this.g56_1 = bindEmail;
  }
  toString() {
    return 'RegisterBody(username=' + this.a56_1 + ', password=' + this.b56_1 + ', initialDeviceDisplayName=' + this.c56_1 + ', auth=' + this.d56_1 + ', session=' + this.e56_1 + ', did=' + this.f56_1 + ', bindEmail=' + this.g56_1 + ')';
  }
  hashCode() {
    var result = this.a56_1 == null ? 0 : getStringHashCode(this.a56_1);
    result = imul(result, 31) + (this.b56_1 == null ? 0 : getStringHashCode(this.b56_1)) | 0;
    result = imul(result, 31) + (this.c56_1 == null ? 0 : getStringHashCode(this.c56_1)) | 0;
    result = imul(result, 31) + (this.d56_1 == null ? 0 : getStringHashCode(this.d56_1)) | 0;
    result = imul(result, 31) + (this.e56_1 == null ? 0 : getStringHashCode(this.e56_1)) | 0;
    result = imul(result, 31) + (this.f56_1 == null ? 0 : getStringHashCode(this.f56_1)) | 0;
    result = imul(result, 31) + (this.g56_1 == null ? 0 : getBooleanHashCode(this.g56_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof RegisterBody))
      return false;
    if (!(this.a56_1 == other.a56_1))
      return false;
    if (!(this.b56_1 == other.b56_1))
      return false;
    if (!(this.c56_1 == other.c56_1))
      return false;
    if (!(this.d56_1 == other.d56_1))
      return false;
    if (!(this.e56_1 == other.e56_1))
      return false;
    if (!(this.f56_1 == other.f56_1))
      return false;
    if (!(this.g56_1 == other.g56_1))
      return false;
    return true;
  }
  static h56(seen0, username, password, initialDeviceDisplayName, auth, session, did, bindEmail, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_83().y55_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.a56_1 = null;
    else
      $this.a56_1 = username;
    if (0 === (seen0 & 2))
      $this.b56_1 = null;
    else
      $this.b56_1 = password;
    if (0 === (seen0 & 4))
      $this.c56_1 = null;
    else
      $this.c56_1 = initialDeviceDisplayName;
    if (0 === (seen0 & 8))
      $this.d56_1 = null;
    else
      $this.d56_1 = auth;
    if (0 === (seen0 & 16))
      $this.e56_1 = null;
    else
      $this.e56_1 = session;
    if (0 === (seen0 & 32))
      $this.f56_1 = null;
    else
      $this.f56_1 = did;
    if (0 === (seen0 & 64))
      $this.g56_1 = null;
    else
      $this.g56_1 = bindEmail;
    return $this;
  }
}
class ChangePasswordBody {
  constructor(auth, newPassword, logoutDevices, logoutDevicesAll) {
    logoutDevices = logoutDevices === VOID ? null : logoutDevices;
    logoutDevicesAll = logoutDevicesAll === VOID ? null : logoutDevicesAll;
    this.k56_1 = auth;
    this.l56_1 = newPassword;
    this.m56_1 = logoutDevices;
    this.n56_1 = logoutDevicesAll;
  }
  toString() {
    return 'ChangePasswordBody(auth=' + this.k56_1.toString() + ', newPassword=' + this.l56_1 + ', logoutDevices=' + this.m56_1 + ', logoutDevicesAll=' + this.n56_1 + ')';
  }
  hashCode() {
    var result = this.k56_1.hashCode();
    result = imul(result, 31) + (this.l56_1 == null ? 0 : getStringHashCode(this.l56_1)) | 0;
    result = imul(result, 31) + (this.m56_1 == null ? 0 : getBooleanHashCode(this.m56_1)) | 0;
    result = imul(result, 31) + (this.n56_1 == null ? 0 : getBooleanHashCode(this.n56_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof ChangePasswordBody))
      return false;
    if (!this.k56_1.equals(other.k56_1))
      return false;
    if (!(this.l56_1 == other.l56_1))
      return false;
    if (!(this.m56_1 == other.m56_1))
      return false;
    if (!(this.n56_1 == other.n56_1))
      return false;
    return true;
  }
  static o56(seen0, auth, newPassword, logoutDevices, logoutDevicesAll, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_84().i56_1);
    }
    var $this = createThis(this);
    $this.k56_1 = auth;
    $this.l56_1 = newPassword;
    if (0 === (seen0 & 4))
      $this.m56_1 = null;
    else
      $this.m56_1 = logoutDevices;
    if (0 === (seen0 & 8))
      $this.n56_1 = null;
    else
      $this.n56_1 = logoutDevicesAll;
    return $this;
  }
}
class ChangePasswordAuth {
  constructor(type, password) {
    this.r56_1 = type;
    this.s56_1 = password;
  }
  toString() {
    return 'ChangePasswordAuth(type=' + this.r56_1 + ', password=' + this.s56_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.r56_1);
    result = imul(result, 31) + getStringHashCode(this.s56_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof ChangePasswordAuth))
      return false;
    if (!(this.r56_1 === other.r56_1))
      return false;
    if (!(this.s56_1 === other.s56_1))
      return false;
    return true;
  }
  static t56(seen0, type, password, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_85().p56_1);
    }
    var $this = createThis(this);
    $this.r56_1 = type;
    $this.s56_1 = password;
    return $this;
  }
}
class AccountsResourceImpl$whoamiBlocking$slambda {
  constructor(this$0) {
    this.u56_1 = this$0;
  }
  *v56($this$toBlocking, $completion) {
    return yield* this.u56_1.u43($completion);
  }
  wc(p1, $completion) {
    return this.v56((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$logoutBlocking$slambda {
  constructor(this$0) {
    this.w56_1 = this$0;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.w56_1.x43($completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$logoutAllBlocking$slambda {
  constructor(this$0) {
    this.x56_1 = this$0;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.x56_1.a44($completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$registerBlocking$slambda {
  constructor(this$0, $request) {
    this.y56_1 = this$0;
    this.z56_1 = $request;
  }
  *a57($this$toBlocking, $completion) {
    return yield* this.y56_1.d44(this.z56_1, $completion);
  }
  wc(p1, $completion) {
    return this.a57((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl$changePasswordBlocking$slambda {
  constructor(this$0, $request) {
    this.b57_1 = this$0;
    this.c57_1 = $request;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.b57_1.g44(this.c57_1, $completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class AccountsResourceImpl extends AbstractAuthResourceImpl {
  *t43($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/account/whoami').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(AccountsWhoamiResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  whoami() {
    return promisify(($completion) => this.t43($completion));
  }
  *u43($completion) {
    return this.whoami === protoOf(AccountsResourceImpl).whoami ? (yield* this.t43($completion)) : (yield* await_0(this.whoami(), $completion));
  }
  v43() {
    return toBlocking(AccountsResourceImpl$whoamiBlocking$slambda_0(this));
  }
  *w43($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/logout').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41('{}').s42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  logout() {
    return promisify(($completion) => this.w43($completion));
  }
  *x43($completion) {
    return this.logout === protoOf(AccountsResourceImpl).logout ? (yield* this.w43($completion)) : (yield* await_0(this.logout(), $completion));
  }
  y43() {
    return toBlocking(AccountsResourceImpl$logoutBlocking$slambda_0(this));
  }
  *z43($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/logout/all').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41('{}').s42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  logoutAll() {
    return promisify(($completion) => this.z43($completion));
  }
  *a44($completion) {
    return this.logoutAll === protoOf(AccountsResourceImpl).logoutAll ? (yield* this.z43($completion)) : (yield* await_0(this.logoutAll(), $completion));
  }
  b44() {
    return toBlocking(AccountsResourceImpl$logoutAllBlocking$slambda_0(this));
  }
  *c44(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new RegisterBody(request.username, request.password, request.initialDeviceDisplayName, request.auth, request.session, request.did, request.bindEmail);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.f57_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.w1c();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(RegisterBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.i1d(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/register').o42(MediaType_getInstance().x55_1).n41(body).s42($completion);
        if (response.v42_1 === 200) {
          var tmp0_0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj_0 = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_3 = tmp0_0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_4 = this_3.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_5 = serializer(this_4, createKType(getKClass(RegisterResponse), arrayOf([]), false));
          var tmp$ret$8 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
          var tmp$ret$6 = this_3.j1d(tmp$ret$8, obj_0);
          // Inline function 'kotlin.also' call
          var this_6 = new Response(tmp$ret$6);
          this_6.limit = Companion_instance_83.of(response);
          this_6.json = response.z42();
          tmp$ret$0 = this_6;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  register(request) {
    return promisify(($completion) => this.c44(request, $completion));
  }
  *d44(request, $completion) {
    return this.register === protoOf(AccountsResourceImpl).register ? (yield* this.c44(request, $completion)) : (yield* await_0(this.register(request), $completion));
  }
  e44(request) {
    return toBlocking(AccountsResourceImpl$registerBlocking$slambda_0(this, request));
  }
  *f44(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0 = InternalUtility_getInstance();
        var tmp0_elvis_lhs = request.auth;
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new ChangePasswordBody(new ChangePasswordAuth('m.login.password', tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs), request.newPassword, request.logoutDevices, request.logoutDevicesAll);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.f57_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.w1c();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(ChangePasswordBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.i1d(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/account/password').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41(body).s42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  changePassword(request) {
    return promisify(($completion) => this.f44(request, $completion));
  }
  *g44(request, $completion) {
    return this.changePassword === protoOf(AccountsResourceImpl).changePassword ? (yield* this.f44(request, $completion)) : (yield* await_0(this.changePassword(request), $completion));
  }
  h44(request) {
    return toBlocking(AccountsResourceImpl$changePasswordBlocking$slambda_0(this, request));
  }
}
class CapabilitiesResourceImpl$getCapabilitiesBlocking$slambda {
  constructor(this$0) {
    this.g57_1 = this$0;
  }
  *h57($this$toBlocking, $completion) {
    return yield* this.g57_1.j44($completion);
  }
  wc(p1, $completion) {
    return this.h57((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class CapabilitiesResourceImpl extends AbstractAuthResourceImpl {
  *i44($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/capabilities').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(CapabilitiesGetResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getCapabilities() {
    return promisify(($completion) => this.i44($completion));
  }
  *j44($completion) {
    return this.getCapabilities === protoOf(CapabilitiesResourceImpl).getCapabilities ? (yield* this.i44($completion)) : (yield* await_0(this.getCapabilities(), $completion));
  }
  k44() {
    return toBlocking(CapabilitiesResourceImpl$getCapabilitiesBlocking$slambda_0(this));
  }
}
class Companion_87 {}
class $serializer_86 {
  constructor() {
    $serializer_instance_86 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.DevicesResourceImpl.UpdateDeviceBody', this, 1);
    tmp0_serialDesc.c1o('display_name', true);
    this.k57_1 = tmp0_serialDesc;
  }
  l57(encoder, value) {
    var tmp0_desc = this.k57_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.m57_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 0, StringSerializer_getInstance(), value.m57_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.l57(encoder, value instanceof UpdateDeviceBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.k57_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return UpdateDeviceBody.n57(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.k57_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  }
}
class UpdateDeviceBody {
  constructor(displayName) {
    displayName = displayName === VOID ? null : displayName;
    this.m57_1 = displayName;
  }
  toString() {
    return 'UpdateDeviceBody(displayName=' + this.m57_1 + ')';
  }
  hashCode() {
    return this.m57_1 == null ? 0 : getStringHashCode(this.m57_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof UpdateDeviceBody))
      return false;
    if (!(this.m57_1 == other.m57_1))
      return false;
    return true;
  }
  static n57(seen0, displayName, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_86().k57_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.m57_1 = null;
    else
      $this.m57_1 = displayName;
    return $this;
  }
}
class DevicesResourceImpl$getDevicesBlocking$slambda {
  constructor(this$0) {
    this.o57_1 = this$0;
  }
  *p57($this$toBlocking, $completion) {
    return yield* this.o57_1.m44($completion);
  }
  wc(p1, $completion) {
    return this.p57((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class DevicesResourceImpl$getDeviceBlocking$slambda {
  constructor(this$0, $deviceId) {
    this.q57_1 = this$0;
    this.r57_1 = $deviceId;
  }
  *s57($this$toBlocking, $completion) {
    return yield* this.q57_1.p44(this.r57_1, $completion);
  }
  wc(p1, $completion) {
    return this.s57((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class DevicesResourceImpl$updateDeviceBlocking$slambda {
  constructor(this$0, $request) {
    this.t57_1 = this$0;
    this.u57_1 = $request;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.t57_1.s44(this.u57_1, $completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class DevicesResourceImpl$deleteDeviceBlocking$slambda {
  constructor(this$0, $request) {
    this.v57_1 = this$0;
    this.w57_1 = $request;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.v57_1.v44(this.w57_1, $completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class DevicesResourceImpl extends AbstractAuthResourceImpl {
  *l44($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/devices').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(DevicesGetResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getDevices() {
    return promisify(($completion) => this.l44($completion));
  }
  *m44($completion) {
    return this.getDevices === protoOf(DevicesResourceImpl).getDevices ? (yield* this.l44($completion)) : (yield* await_0(this.getDevices(), $completion));
  }
  n44() {
    return toBlocking(DevicesResourceImpl$getDevicesBlocking$slambda_0(this));
  }
  *o44(deviceId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/devices/' + deviceId).p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(DevicesGetDeviceResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getDevice(deviceId) {
    return promisify(($completion) => this.o44(deviceId, $completion));
  }
  *p44(deviceId, $completion) {
    return this.getDevice === protoOf(DevicesResourceImpl).getDevice ? (yield* this.o44(deviceId, $completion)) : (yield* await_0(this.getDevice(deviceId), $completion));
  }
  q44(deviceId) {
    return toBlocking(DevicesResourceImpl$getDeviceBlocking$slambda_0(this, deviceId));
  }
  *r44(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.deviceId;
        var deviceId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new UpdateDeviceBody(request.displayName);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.f57_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.w1c();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(UpdateDeviceBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.i1d(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/devices/' + deviceId).p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41(body).t42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  updateDevice(request) {
    return promisify(($completion) => this.r44(request, $completion));
  }
  *s44(request, $completion) {
    return this.updateDevice === protoOf(DevicesResourceImpl).updateDevice ? (yield* this.r44(request, $completion)) : (yield* await_0(this.updateDevice(request), $completion));
  }
  t44(request) {
    return toBlocking(DevicesResourceImpl$updateDeviceBlocking$slambda_0(this, request));
  }
  *u44(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.deviceId;
        var deviceId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/devices/' + deviceId).p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).u42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  deleteDevice(request) {
    return promisify(($completion) => this.u44(request, $completion));
  }
  *v44(request, $completion) {
    return this.deleteDevice === protoOf(DevicesResourceImpl).deleteDevice ? (yield* this.u44(request, $completion)) : (yield* await_0(this.deleteDevice(request), $completion));
  }
  w44(request) {
    return toBlocking(DevicesResourceImpl$deleteDeviceBlocking$slambda_0(this, request));
  }
}
class Companion_88 {}
class $serializer_87 {
  constructor() {
    $serializer_instance_87 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.DirectoryResourceImpl.SetAliasBody', this, 1);
    tmp0_serialDesc.c1o('room_id', false);
    this.z57_1 = tmp0_serialDesc;
  }
  a58(encoder, value) {
    var tmp0_desc = this.z57_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    tmp1_output.c1i(tmp0_desc, 0, value.b58_1);
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.a58(encoder, value instanceof SetAliasBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.z57_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return SetAliasBody.c58(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.z57_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class SetAliasBody {
  constructor(roomId) {
    this.b58_1 = roomId;
  }
  toString() {
    return 'SetAliasBody(roomId=' + this.b58_1 + ')';
  }
  hashCode() {
    return getStringHashCode(this.b58_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SetAliasBody))
      return false;
    if (!(this.b58_1 === other.b58_1))
      return false;
    return true;
  }
  static c58(seen0, roomId, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_87().z57_1);
    }
    var $this = createThis(this);
    $this.b58_1 = roomId;
    return $this;
  }
}
class DirectoryResourceImpl$resolveAliasBlocking$slambda {
  constructor(this$0, $roomAlias) {
    this.d58_1 = this$0;
    this.e58_1 = $roomAlias;
  }
  *f58($this$toBlocking, $completion) {
    return yield* this.d58_1.y44(this.e58_1, $completion);
  }
  wc(p1, $completion) {
    return this.f58((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class DirectoryResourceImpl$setAliasBlocking$slambda {
  constructor(this$0, $request) {
    this.g58_1 = this$0;
    this.h58_1 = $request;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.g58_1.b45(this.h58_1, $completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class DirectoryResourceImpl$deleteAliasBlocking$slambda {
  constructor(this$0, $roomAlias) {
    this.i58_1 = this$0;
    this.j58_1 = $roomAlias;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.i58_1.e45(this.j58_1, $completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class DirectoryResourceImpl$getPublicRoomsBlocking$slambda {
  constructor(this$0, $request) {
    this.k58_1 = this$0;
    this.l58_1 = $request;
  }
  *m58($this$toBlocking, $completion) {
    return yield* this.k58_1.h45(this.l58_1, $completion);
  }
  wc(p1, $completion) {
    return this.m58((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class DirectoryResourceImpl extends AbstractAuthResourceImpl {
  *x44(roomAlias, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/directory/room/' + encodeURLPathPart(roomAlias)).o42(MediaType_getInstance().x55_1).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(DirectoryResolveAliasResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  resolveAlias(roomAlias) {
    return promisify(($completion) => this.x44(roomAlias, $completion));
  }
  *y44(roomAlias, $completion) {
    return this.resolveAlias === protoOf(DirectoryResourceImpl).resolveAlias ? (yield* this.x44(roomAlias, $completion)) : (yield* await_0(this.resolveAlias(roomAlias), $completion));
  }
  z44(roomAlias) {
    return toBlocking(DirectoryResourceImpl$resolveAliasBlocking$slambda_0(this, roomAlias));
  }
  *a45(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.roomAlias;
        var roomAlias = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        var tmp1_elvis_lhs = request.roomId;
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new SetAliasBody(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.f57_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.w1c();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(SetAliasBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.i1d(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/directory/room/' + encodeURLPathPart(roomAlias)).p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41(body).t42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  setAlias(request) {
    return promisify(($completion) => this.a45(request, $completion));
  }
  *b45(request, $completion) {
    return this.setAlias === protoOf(DirectoryResourceImpl).setAlias ? (yield* this.a45(request, $completion)) : (yield* await_0(this.setAlias(request), $completion));
  }
  c45(request) {
    return toBlocking(DirectoryResourceImpl$setAliasBlocking$slambda_0(this, request));
  }
  *d45(roomAlias, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/directory/room/' + encodeURLPathPart(roomAlias)).p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).u42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  deleteAlias(roomAlias) {
    return promisify(($completion) => this.d45(roomAlias, $completion));
  }
  *e45(roomAlias, $completion) {
    return this.deleteAlias === protoOf(DirectoryResourceImpl).deleteAlias ? (yield* this.d45(roomAlias, $completion)) : (yield* await_0(this.deleteAlias(roomAlias), $completion));
  }
  f45(roomAlias) {
    return toBlocking(DirectoryResourceImpl$deleteAliasBlocking$slambda_0(this, roomAlias));
  }
  *g45(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.k55(this.k55(this.k55((new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/publicRooms').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1), 'limit', request.limit), 'since', request.since), 'server', request.server).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(DirectoryGetPublicRoomsResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getPublicRooms(request) {
    return promisify(($completion) => this.g45(request, $completion));
  }
  *h45(request, $completion) {
    return this.getPublicRooms === protoOf(DirectoryResourceImpl).getPublicRooms ? (yield* this.g45(request, $completion)) : (yield* await_0(this.getPublicRooms(request), $completion));
  }
  i45(request) {
    return toBlocking(DirectoryResourceImpl$getPublicRoomsBlocking$slambda_0(this, request));
  }
}
class EventsResourceImpl$getEventBlocking$slambda {
  constructor(this$0, $roomId, $eventId) {
    this.p58_1 = this$0;
    this.q58_1 = $roomId;
    this.r58_1 = $eventId;
  }
  *s58($this$toBlocking, $completion) {
    return yield* this.p58_1.k45(this.q58_1, this.r58_1, $completion);
  }
  wc(p1, $completion) {
    return this.s58((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class EventsResourceImpl$getContextBlocking$slambda {
  constructor(this$0, $request) {
    this.t58_1 = this$0;
    this.u58_1 = $request;
  }
  *v58($this$toBlocking, $completion) {
    return yield* this.t58_1.n45(this.u58_1, $completion);
  }
  wc(p1, $completion) {
    return this.v58((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class EventsResourceImpl extends AbstractAuthResourceImpl {
  *j45(roomId, eventId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/rooms/' + roomId + '/event/' + eventId).p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(EventsGetEventResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getEvent(roomId, eventId) {
    return promisify(($completion) => this.j45(roomId, eventId, $completion));
  }
  *k45(roomId, eventId, $completion) {
    return this.getEvent === protoOf(EventsResourceImpl).getEvent ? (yield* this.j45(roomId, eventId, $completion)) : (yield* await_0(this.getEvent(roomId, eventId), $completion));
  }
  l45(roomId, eventId) {
    return toBlocking(EventsResourceImpl$getEventBlocking$slambda_0(this, roomId, eventId));
  }
  *m45(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.k55(this.k55((new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/rooms/' + request.roomId + '/context/' + request.eventId).p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1), 'limit', request.limit), 'filter', request.filter).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(EventsGetContextResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getContext(request) {
    return promisify(($completion) => this.m45(request, $completion));
  }
  *n45(request, $completion) {
    return this.getContext === protoOf(EventsResourceImpl).getContext ? (yield* this.m45(request, $completion)) : (yield* await_0(this.getContext(request), $completion));
  }
  o45(request) {
    return toBlocking(EventsResourceImpl$getContextBlocking$slambda_0(this, request));
  }
}
class Companion_89 {}
class $serializer_88 {
  constructor() {
    $serializer_instance_88 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.FilterResourceImpl.CreateFilterBody', this, 1);
    tmp0_serialDesc.c1o('room', true);
    this.y58_1 = tmp0_serialDesc;
  }
  z58(encoder, value) {
    var tmp0_desc = this.y58_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.a59_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 0, $serializer_getInstance_89(), value.a59_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.z58(encoder, value instanceof CreateFilterBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.y58_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, $serializer_getInstance_89(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, $serializer_getInstance_89(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return CreateFilterBody.b59(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.y58_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_89())];
  }
}
class Companion_90 {
  constructor() {
    Companion_instance_90 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, FilterResourceImpl$CreateFilterRoomFilter$Companion$$childSerializers$_anonymous__x9bbx7);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.c59_1 = [tmp_1, lazy(tmp_2, FilterResourceImpl$CreateFilterRoomFilter$Companion$$childSerializers$_anonymous__x9bbx7_0), null, null];
  }
}
class $serializer_89 {
  constructor() {
    $serializer_instance_89 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.FilterResourceImpl.CreateFilterRoomFilter', this, 4);
    tmp0_serialDesc.c1o('rooms', true);
    tmp0_serialDesc.c1o('not_rooms', true);
    tmp0_serialDesc.c1o('include_leave', true);
    tmp0_serialDesc.c1o('timeline', true);
    this.d59_1 = tmp0_serialDesc;
  }
  e59(encoder, value) {
    var tmp0_desc = this.d59_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_91().c59_1;
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.f59_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.f59_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.g59_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 1, tmp2_cached[1].w2(), value.g59_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.h59_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 2, BooleanSerializer_getInstance(), value.h59_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.i59_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 3, $serializer_getInstance_90(), value.i59_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.e59(encoder, value instanceof CreateFilterRoomFilter ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.d59_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.n1g(tmp0_desc);
    var tmp9_cached = Companion_getInstance_91().c59_1;
    if (tmp8_input.c1h()) {
      tmp4_local0 = tmp8_input.b1h(tmp0_desc, 0, tmp9_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.b1h(tmp0_desc, 1, tmp9_cached[1].w2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.b1h(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.b1h(tmp0_desc, 3, $serializer_getInstance_90(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.b1h(tmp0_desc, 0, tmp9_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.b1h(tmp0_desc, 1, tmp9_cached[1].w2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.b1h(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.b1h(tmp0_desc, 3, $serializer_getInstance_90(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp8_input.o1g(tmp0_desc);
    return CreateFilterRoomFilter.j59(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  l1c() {
    return this.d59_1;
  }
  r1o() {
    var tmp0_cached = Companion_getInstance_91().c59_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].w2()), get_nullable(tmp0_cached[1].w2()), get_nullable(BooleanSerializer_getInstance()), get_nullable($serializer_getInstance_90())];
  }
}
class Companion_91 {
  constructor() {
    Companion_instance_91 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, FilterResourceImpl$CreateFilterRoomEventFilter$Companion$$childSerializers$_anonymous__ofao4b);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, FilterResourceImpl$CreateFilterRoomEventFilter$Companion$$childSerializers$_anonymous__ofao4b_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, FilterResourceImpl$CreateFilterRoomEventFilter$Companion$$childSerializers$_anonymous__ofao4b_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.k59_1 = [tmp_1, tmp_3, tmp_5, lazy(tmp_6, FilterResourceImpl$CreateFilterRoomEventFilter$Companion$$childSerializers$_anonymous__ofao4b_2), null];
  }
}
class $serializer_90 {
  constructor() {
    $serializer_instance_90 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.FilterResourceImpl.CreateFilterRoomEventFilter', this, 5);
    tmp0_serialDesc.c1o('types', true);
    tmp0_serialDesc.c1o('not_types', true);
    tmp0_serialDesc.c1o('senders', true);
    tmp0_serialDesc.c1o('not_senders', true);
    tmp0_serialDesc.c1o('limit', true);
    this.l59_1 = tmp0_serialDesc;
  }
  m59(encoder, value) {
    var tmp0_desc = this.l59_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_92().k59_1;
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.n59_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.n59_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.o59_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 1, tmp2_cached[1].w2(), value.o59_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.p59_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 2, tmp2_cached[2].w2(), value.p59_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.q59_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 3, tmp2_cached[3].w2(), value.q59_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 4) ? true : !(value.r59_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 4, IntSerializer_getInstance(), value.r59_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.m59(encoder, value instanceof CreateFilterRoomEventFilter ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.l59_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.n1g(tmp0_desc);
    var tmp10_cached = Companion_getInstance_92().k59_1;
    if (tmp9_input.c1h()) {
      tmp4_local0 = tmp9_input.b1h(tmp0_desc, 0, tmp10_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.b1h(tmp0_desc, 1, tmp10_cached[1].w2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.b1h(tmp0_desc, 2, tmp10_cached[2].w2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.b1h(tmp0_desc, 3, tmp10_cached[3].w2(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.b1h(tmp0_desc, 4, IntSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.b1h(tmp0_desc, 0, tmp10_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.b1h(tmp0_desc, 1, tmp10_cached[1].w2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.b1h(tmp0_desc, 2, tmp10_cached[2].w2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.b1h(tmp0_desc, 3, tmp10_cached[3].w2(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.b1h(tmp0_desc, 4, IntSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp9_input.o1g(tmp0_desc);
    return CreateFilterRoomEventFilter.s59(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  }
  l1c() {
    return this.l59_1;
  }
  r1o() {
    var tmp0_cached = Companion_getInstance_92().k59_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].w2()), get_nullable(tmp0_cached[1].w2()), get_nullable(tmp0_cached[2].w2()), get_nullable(tmp0_cached[3].w2()), get_nullable(IntSerializer_getInstance())];
  }
}
class CreateFilterBody {
  constructor(room) {
    room = room === VOID ? null : room;
    this.a59_1 = room;
  }
  toString() {
    return 'CreateFilterBody(room=' + toString(this.a59_1) + ')';
  }
  hashCode() {
    return this.a59_1 == null ? 0 : this.a59_1.hashCode();
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CreateFilterBody))
      return false;
    if (!equals(this.a59_1, other.a59_1))
      return false;
    return true;
  }
  static b59(seen0, room, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_88().y58_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.a59_1 = null;
    else
      $this.a59_1 = room;
    return $this;
  }
}
class CreateFilterRoomFilter {
  constructor(rooms, notRooms, includeLeave, timeline) {
    Companion_getInstance_91();
    rooms = rooms === VOID ? null : rooms;
    notRooms = notRooms === VOID ? null : notRooms;
    includeLeave = includeLeave === VOID ? null : includeLeave;
    timeline = timeline === VOID ? null : timeline;
    this.f59_1 = rooms;
    this.g59_1 = notRooms;
    this.h59_1 = includeLeave;
    this.i59_1 = timeline;
  }
  toString() {
    return 'CreateFilterRoomFilter(rooms=' + toString_0(this.f59_1) + ', notRooms=' + toString_0(this.g59_1) + ', includeLeave=' + this.h59_1 + ', timeline=' + toString(this.i59_1) + ')';
  }
  hashCode() {
    var result = this.f59_1 == null ? 0 : hashCode(this.f59_1);
    result = imul(result, 31) + (this.g59_1 == null ? 0 : hashCode(this.g59_1)) | 0;
    result = imul(result, 31) + (this.h59_1 == null ? 0 : getBooleanHashCode(this.h59_1)) | 0;
    result = imul(result, 31) + (this.i59_1 == null ? 0 : this.i59_1.hashCode()) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CreateFilterRoomFilter))
      return false;
    if (!equals(this.f59_1, other.f59_1))
      return false;
    if (!equals(this.g59_1, other.g59_1))
      return false;
    if (!(this.h59_1 == other.h59_1))
      return false;
    if (!equals(this.i59_1, other.i59_1))
      return false;
    return true;
  }
  static j59(seen0, rooms, notRooms, includeLeave, timeline, serializationConstructorMarker) {
    Companion_getInstance_91();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_89().d59_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.f59_1 = null;
    else
      $this.f59_1 = rooms;
    if (0 === (seen0 & 2))
      $this.g59_1 = null;
    else
      $this.g59_1 = notRooms;
    if (0 === (seen0 & 4))
      $this.h59_1 = null;
    else
      $this.h59_1 = includeLeave;
    if (0 === (seen0 & 8))
      $this.i59_1 = null;
    else
      $this.i59_1 = timeline;
    return $this;
  }
}
class CreateFilterRoomEventFilter {
  constructor(types, notTypes, senders, notSenders, limit) {
    Companion_getInstance_92();
    types = types === VOID ? null : types;
    notTypes = notTypes === VOID ? null : notTypes;
    senders = senders === VOID ? null : senders;
    notSenders = notSenders === VOID ? null : notSenders;
    limit = limit === VOID ? null : limit;
    this.n59_1 = types;
    this.o59_1 = notTypes;
    this.p59_1 = senders;
    this.q59_1 = notSenders;
    this.r59_1 = limit;
  }
  toString() {
    return 'CreateFilterRoomEventFilter(types=' + toString_0(this.n59_1) + ', notTypes=' + toString_0(this.o59_1) + ', senders=' + toString_0(this.p59_1) + ', notSenders=' + toString_0(this.q59_1) + ', limit=' + this.r59_1 + ')';
  }
  hashCode() {
    var result = this.n59_1 == null ? 0 : hashCode(this.n59_1);
    result = imul(result, 31) + (this.o59_1 == null ? 0 : hashCode(this.o59_1)) | 0;
    result = imul(result, 31) + (this.p59_1 == null ? 0 : hashCode(this.p59_1)) | 0;
    result = imul(result, 31) + (this.q59_1 == null ? 0 : hashCode(this.q59_1)) | 0;
    result = imul(result, 31) + (this.r59_1 == null ? 0 : this.r59_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CreateFilterRoomEventFilter))
      return false;
    if (!equals(this.n59_1, other.n59_1))
      return false;
    if (!equals(this.o59_1, other.o59_1))
      return false;
    if (!equals(this.p59_1, other.p59_1))
      return false;
    if (!equals(this.q59_1, other.q59_1))
      return false;
    if (!(this.r59_1 == other.r59_1))
      return false;
    return true;
  }
  static s59(seen0, types, notTypes, senders, notSenders, limit, serializationConstructorMarker) {
    Companion_getInstance_92();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_90().l59_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.n59_1 = null;
    else
      $this.n59_1 = types;
    if (0 === (seen0 & 2))
      $this.o59_1 = null;
    else
      $this.o59_1 = notTypes;
    if (0 === (seen0 & 4))
      $this.p59_1 = null;
    else
      $this.p59_1 = senders;
    if (0 === (seen0 & 8))
      $this.q59_1 = null;
    else
      $this.q59_1 = notSenders;
    if (0 === (seen0 & 16))
      $this.r59_1 = null;
    else
      $this.r59_1 = limit;
    return $this;
  }
}
class FilterResourceImpl$createFilterBlocking$slambda {
  constructor(this$0, $request) {
    this.t59_1 = this$0;
    this.u59_1 = $request;
  }
  *v59($this$toBlocking, $completion) {
    return yield* this.t59_1.q45(this.u59_1, $completion);
  }
  wc(p1, $completion) {
    return this.v59((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class FilterResourceImpl$getFilterBlocking$slambda {
  constructor(this$0, $request) {
    this.w59_1 = this$0;
    this.x59_1 = $request;
  }
  *y59($this$toBlocking, $completion) {
    return yield* this.w59_1.t45(this.x59_1, $completion);
  }
  wc(p1, $completion) {
    return this.y59((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class FilterResourceImpl$deleteFilterBlocking$slambda {
  constructor(this$0, $request) {
    this.z59_1 = this$0;
    this.a5a_1 = $request;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.z59_1.w45(this.a5a_1, $completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class FilterResourceImpl extends AbstractAuthResourceImpl {
  *p45(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp0_elvis_lhs = request.userId;
        var userId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp;
        if (!(request.rooms == null) || !(request.notRooms == null) || !(request.limit == null) || !(request.eventTypes == null) || !(request.notEventTypes == null) || !(request.includeLeave == null)) {
          var tmp_0 = request.rooms;
          var tmp_1 = request.notRooms;
          var tmp_2 = request.includeLeave;
          var tmp_3;
          if (!(request.eventTypes == null) || !(request.notEventTypes == null) || !(request.senders == null) || !(request.notSenders == null) || !(request.limit == null)) {
            tmp_3 = new CreateFilterRoomEventFilter(request.eventTypes, request.notEventTypes, request.senders, request.notSenders, request.limit);
          } else {
            tmp_3 = null;
          }
          tmp = new CreateFilterRoomFilter(tmp_0, tmp_1, tmp_2, tmp_3);
        } else {
          tmp = null;
        }
        var roomFilter = tmp;
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new CreateFilterBody(roomFilter);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.f57_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.w1c();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(CreateFilterBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.i1d(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/user/' + userId + '/filter').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41(body).s42($completion);
        if (response.v42_1 === 200) {
          var tmp0_0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj_0 = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_3 = tmp0_0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_4 = this_3.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_5 = serializer(this_4, createKType(getKClass(FilterCreateResponse), arrayOf([]), false));
          var tmp$ret$8 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
          var tmp$ret$6 = this_3.j1d(tmp$ret$8, obj_0);
          // Inline function 'kotlin.also' call
          var this_6 = new Response(tmp$ret$6);
          this_6.limit = Companion_instance_83.of(response);
          this_6.json = response.z42();
          tmp$ret$0 = this_6;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  createFilter(request) {
    return promisify(($completion) => this.p45(request, $completion));
  }
  *q45(request, $completion) {
    return this.createFilter === protoOf(FilterResourceImpl).createFilter ? (yield* this.p45(request, $completion)) : (yield* await_0(this.createFilter(request), $completion));
  }
  r45(request) {
    return toBlocking(FilterResourceImpl$createFilterBlocking$slambda_0(this, request));
  }
  *s45(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp0_elvis_lhs = request.userId;
        var userId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = request.filterId;
        var filterId = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/user/' + userId + '/filter/' + filterId).p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(FilterGetResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getFilter(request) {
    return promisify(($completion) => this.s45(request, $completion));
  }
  *t45(request, $completion) {
    return this.getFilter === protoOf(FilterResourceImpl).getFilter ? (yield* this.s45(request, $completion)) : (yield* await_0(this.getFilter(request), $completion));
  }
  u45(request) {
    return toBlocking(FilterResourceImpl$getFilterBlocking$slambda_0(this, request));
  }
  *v45(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.userId;
        var userId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = request.filterId;
        var filterId = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/user/' + userId + '/filter/' + filterId).p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41('{}').u42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  deleteFilter(request) {
    return promisify(($completion) => this.v45(request, $completion));
  }
  *w45(request, $completion) {
    return this.deleteFilter === protoOf(FilterResourceImpl).deleteFilter ? (yield* this.v45(request, $completion)) : (yield* await_0(this.deleteFilter(request), $completion));
  }
  x45(request) {
    return toBlocking(FilterResourceImpl$deleteFilterBlocking$slambda_0(this, request));
  }
}
class InternalUtility {
  constructor() {
    InternalUtility_instance = this;
    var tmp = this;
    tmp.f57_1 = Json(VOID, InternalUtility$json$lambda);
  }
}
class Companion_92 {}
class $serializer_91 {
  constructor() {
    $serializer_instance_91 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.LoginResourceImpl.LoginPasswordBody', this, 4);
    tmp0_serialDesc.c1o('type', true);
    tmp0_serialDesc.c1o('identifier', false);
    tmp0_serialDesc.c1o('password', false);
    tmp0_serialDesc.c1o('initial_device_display_name', true);
    this.d5a_1 = tmp0_serialDesc;
  }
  e5a(encoder, value) {
    var tmp0_desc = this.d5a_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.f5a_1 === 'm.login.password')) {
      tmp1_output.c1i(tmp0_desc, 0, value.f5a_1);
    }
    tmp1_output.e1i(tmp0_desc, 1, $serializer_getInstance_92(), value.g5a_1);
    tmp1_output.c1i(tmp0_desc, 2, value.h5a_1);
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.i5a_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 3, StringSerializer_getInstance(), value.i5a_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.e5a(encoder, value instanceof LoginPasswordBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.d5a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.n1g(tmp0_desc);
    if (tmp8_input.c1h()) {
      tmp4_local0 = tmp8_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.z1g(tmp0_desc, 1, $serializer_getInstance_92(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.x1g(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.z1g(tmp0_desc, 1, $serializer_getInstance_92(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.x1g(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp8_input.o1g(tmp0_desc);
    return LoginPasswordBody.j5a(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  l1c() {
    return this.d5a_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), $serializer_getInstance_92(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class Companion_93 {}
class $serializer_92 {
  constructor() {
    $serializer_instance_92 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.LoginResourceImpl.LoginPasswordIdentifier', this, 2);
    tmp0_serialDesc.c1o('type', true);
    tmp0_serialDesc.c1o('user', false);
    this.k5a_1 = tmp0_serialDesc;
  }
  l5a(encoder, value) {
    var tmp0_desc = this.k5a_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.m5a_1 === 'm.id.user')) {
      tmp1_output.c1i(tmp0_desc, 0, value.m5a_1);
    }
    tmp1_output.c1i(tmp0_desc, 1, value.n5a_1);
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.l5a(encoder, value instanceof LoginPasswordIdentifier ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.k5a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.n1g(tmp0_desc);
    if (tmp6_input.c1h()) {
      tmp4_local0 = tmp6_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.x1g(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.x1g(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp6_input.o1g(tmp0_desc);
    return LoginPasswordIdentifier.o5a(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  l1c() {
    return this.k5a_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  }
}
class LoginPasswordBody {
  constructor(type, identifier, password, initialDeviceDisplayName) {
    type = type === VOID ? 'm.login.password' : type;
    initialDeviceDisplayName = initialDeviceDisplayName === VOID ? null : initialDeviceDisplayName;
    this.f5a_1 = type;
    this.g5a_1 = identifier;
    this.h5a_1 = password;
    this.i5a_1 = initialDeviceDisplayName;
  }
  toString() {
    return 'LoginPasswordBody(type=' + this.f5a_1 + ', identifier=' + this.g5a_1.toString() + ', password=' + this.h5a_1 + ', initialDeviceDisplayName=' + this.i5a_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.f5a_1);
    result = imul(result, 31) + this.g5a_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.h5a_1) | 0;
    result = imul(result, 31) + (this.i5a_1 == null ? 0 : getStringHashCode(this.i5a_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof LoginPasswordBody))
      return false;
    if (!(this.f5a_1 === other.f5a_1))
      return false;
    if (!this.g5a_1.equals(other.g5a_1))
      return false;
    if (!(this.h5a_1 === other.h5a_1))
      return false;
    if (!(this.i5a_1 == other.i5a_1))
      return false;
    return true;
  }
  static j5a(seen0, type, identifier, password, initialDeviceDisplayName, serializationConstructorMarker) {
    if (!(6 === (6 & seen0))) {
      throwMissingFieldException(seen0, 6, $serializer_getInstance_91().d5a_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.f5a_1 = 'm.login.password';
    else
      $this.f5a_1 = type;
    $this.g5a_1 = identifier;
    $this.h5a_1 = password;
    if (0 === (seen0 & 8))
      $this.i5a_1 = null;
    else
      $this.i5a_1 = initialDeviceDisplayName;
    return $this;
  }
}
class LoginPasswordIdentifier {
  constructor(type, user) {
    type = type === VOID ? 'm.id.user' : type;
    this.m5a_1 = type;
    this.n5a_1 = user;
  }
  toString() {
    return 'LoginPasswordIdentifier(type=' + this.m5a_1 + ', user=' + this.n5a_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.m5a_1);
    result = imul(result, 31) + getStringHashCode(this.n5a_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof LoginPasswordIdentifier))
      return false;
    if (!(this.m5a_1 === other.m5a_1))
      return false;
    if (!(this.n5a_1 === other.n5a_1))
      return false;
    return true;
  }
  static o5a(seen0, type, user, serializationConstructorMarker) {
    if (!(2 === (2 & seen0))) {
      throwMissingFieldException(seen0, 2, $serializer_getInstance_92().k5a_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.m5a_1 = 'm.id.user';
    else
      $this.m5a_1 = type;
    $this.n5a_1 = user;
    return $this;
  }
}
class LoginResourceImpl$getLoginFlowsBlocking$slambda {
  constructor(this$0) {
    this.p5a_1 = this$0;
  }
  *q5a($this$toBlocking, $completion) {
    return yield* this.p5a_1.z45($completion);
  }
  wc(p1, $completion) {
    return this.q5a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class LoginResourceImpl$loginWithPasswordBlocking$slambda {
  constructor(this$0, $request) {
    this.r5a_1 = this$0;
    this.s5a_1 = $request;
  }
  *t5a($this$toBlocking, $completion) {
    return yield* this.r5a_1.c46(this.s5a_1, $completion);
  }
  wc(p1, $completion) {
    return this.t5a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class LoginResourceImpl extends AbstractResourceImpl {
  *y45($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/login').o42(MediaType_getInstance().x55_1).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(LoginGetLoginFlowsResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getLoginFlows() {
    return promisify(($completion) => this.y45($completion));
  }
  *z45($completion) {
    return this.getLoginFlows === protoOf(LoginResourceImpl).getLoginFlows ? (yield* this.y45($completion)) : (yield* await_0(this.getLoginFlows(), $completion));
  }
  a46() {
    return toBlocking(LoginResourceImpl$getLoginFlowsBlocking$slambda_0(this));
  }
  *b46(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp0 = InternalUtility_getInstance();
        var tmp0_elvis_lhs = request.user;
        var tmp = new LoginPasswordIdentifier(VOID, tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
        var tmp1_elvis_lhs = request.password;
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new LoginPasswordBody(VOID, tmp, tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs, request.initialDeviceDisplayName);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.f57_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.w1c();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(LoginPasswordBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.i1d(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/login').o42(MediaType_getInstance().x55_1).n41(body).s42($completion);
        if (response.v42_1 === 200) {
          var tmp0_0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj_0 = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_3 = tmp0_0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_4 = this_3.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_5 = serializer(this_4, createKType(getKClass(LoginPasswordResponse), arrayOf([]), false));
          var tmp$ret$8 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
          var tmp$ret$6 = this_3.j1d(tmp$ret$8, obj_0);
          // Inline function 'kotlin.also' call
          var this_6 = new Response(tmp$ret$6);
          this_6.limit = Companion_instance_83.of(response);
          this_6.json = response.z42();
          tmp$ret$0 = this_6;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  loginWithPassword(request) {
    return promisify(($completion) => this.b46(request, $completion));
  }
  *c46(request, $completion) {
    return this.loginWithPassword === protoOf(LoginResourceImpl).loginWithPassword ? (yield* this.b46(request, $completion)) : (yield* await_0(this.loginWithPassword(request), $completion));
  }
  d46(request) {
    return toBlocking(LoginResourceImpl$loginWithPasswordBlocking$slambda_0(this, request));
  }
  ssoRedirectUrl(request) {
    return this.j55_1 + '/_matrix/client/v3/login/sso/redirect?redirectUrl=' + request.redirectUrl;
  }
}
class MatrixImpl {
  constructor(uri, accessToken) {
    this.v5a_1 = uri;
    this.w5a_1 = accessToken;
    this.x5a_1 = new LoginResourceImpl(this.v5a_1);
    this.y5a_1 = new AccountsResourceImpl(this.v5a_1, this.w5a_1);
    this.z5a_1 = new ProfileResourceImpl(this.v5a_1, this.w5a_1);
    this.a5b_1 = new RoomsResourceImpl(this.v5a_1, this.w5a_1);
    this.b5b_1 = new SyncResourceImpl(this.v5a_1, this.w5a_1);
    this.c5b_1 = new FilterResourceImpl(this.v5a_1, this.w5a_1);
    this.d5b_1 = new PresenceResourceImpl(this.v5a_1, this.w5a_1);
    this.e5b_1 = new MediaResourceImpl(this.v5a_1, this.w5a_1);
    this.f5b_1 = new DevicesResourceImpl(this.v5a_1, this.w5a_1);
    this.g5b_1 = new DirectoryResourceImpl(this.v5a_1, this.w5a_1);
    this.h5b_1 = new TagsResourceImpl(this.v5a_1, this.w5a_1);
    this.i5b_1 = new PushRulesResourceImpl(this.v5a_1, this.w5a_1);
    this.j5b_1 = new SearchResourceImpl(this.v5a_1, this.w5a_1);
    this.k5b_1 = new UserDirectoryResourceImpl(this.v5a_1, this.w5a_1);
    this.l5b_1 = new VersionsResourceImpl(this.v5a_1);
    this.m5b_1 = new CapabilitiesResourceImpl(this.v5a_1, this.w5a_1);
    this.n5b_1 = new AccountDataResourceImpl(this.v5a_1, this.w5a_1);
    this.o5b_1 = new NotificationsResourceImpl(this.v5a_1, this.w5a_1);
    this.p5b_1 = new EventsResourceImpl(this.v5a_1, this.w5a_1);
    this.q5b_1 = new RelationsResourceImpl(this.v5a_1, this.w5a_1);
    this.r5b_1 = new VoIPResourceImpl(this.v5a_1, this.w5a_1);
    this.s5b_1 = new PushersResourceImpl(this.v5a_1, this.w5a_1);
  }
  uri() {
    return this.v5a_1;
  }
  accessToken() {
    return this.w5a_1;
  }
  login() {
    return this.x5a_1;
  }
  accounts() {
    return this.y5a_1;
  }
  profile() {
    return this.z5a_1;
  }
  rooms() {
    return this.a5b_1;
  }
  sync() {
    return this.b5b_1;
  }
  filter() {
    return this.c5b_1;
  }
  presence() {
    return this.d5b_1;
  }
  media() {
    return this.e5b_1;
  }
  devices() {
    return this.f5b_1;
  }
  directory() {
    return this.g5b_1;
  }
  tags() {
    return this.h5b_1;
  }
  pushRules() {
    return this.i5b_1;
  }
  search() {
    return this.j5b_1;
  }
  userDirectory() {
    return this.k5b_1;
  }
  versions() {
    return this.l5b_1;
  }
  capabilities() {
    return this.m5b_1;
  }
  accountData() {
    return this.n5b_1;
  }
  notifications() {
    return this.o5b_1;
  }
  events() {
    return this.p5b_1;
  }
  relations() {
    return this.q5b_1;
  }
  voip() {
    return this.r5b_1;
  }
  pushers() {
    return this.s5b_1;
  }
}
class MediaResourceImpl$uploadBlocking$slambda {
  constructor(this$0, $request) {
    this.t5b_1 = this$0;
    this.u5b_1 = $request;
  }
  *v5b($this$toBlocking, $completion) {
    return yield* this.t5b_1.f46(this.u5b_1, $completion);
  }
  wc(p1, $completion) {
    return this.v5b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class MediaResourceImpl$downloadBlocking$slambda {
  constructor(this$0, $request) {
    this.w5b_1 = this$0;
    this.x5b_1 = $request;
  }
  *y5b($this$toBlocking, $completion) {
    return yield* this.w5b_1.i46(this.x5b_1, $completion);
  }
  wc(p1, $completion) {
    return this.y5b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class MediaResourceImpl$thumbnailBlocking$slambda {
  constructor(this$0, $request) {
    this.z5b_1 = this$0;
    this.a5c_1 = $request;
  }
  *y5b($this$toBlocking, $completion) {
    return yield* this.z5b_1.l46(this.a5c_1, $completion);
  }
  wc(p1, $completion) {
    return this.y5b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class MediaResourceImpl$getConfigBlocking$slambda {
  constructor(this$0) {
    this.b5c_1 = this$0;
  }
  *c5c($this$toBlocking, $completion) {
    return yield* this.b5c_1.o46($completion);
  }
  wc(p1, $completion) {
    return this.c5c((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class MediaResourceImpl$previewUrlBlocking$slambda {
  constructor(this$0, $request) {
    this.d5c_1 = this$0;
    this.e5c_1 = $request;
  }
  *f5c($this$toBlocking, $completion) {
    return yield* this.d5c_1.r46(this.e5c_1, $completion);
  }
  wc(p1, $completion) {
    return this.f5c((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class MediaResourceImpl extends AbstractAuthResourceImpl {
  *e46(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder.h1();
        this_0.i1(this.j55_1 + '/_matrix/media/v3/upload');
        var tmp0_safe_receiver = request.fileName;
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          this_0.i1('?filename=' + encodeURLParameter(tmp0_safe_receiver));
        }
        var url = this_0.toString();
        var tmp = (new HttpRequest()).n42(url).p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1);
        var tmp0_elvis_lhs = request.fileName;
        var tmp_0 = tmp0_elvis_lhs == null ? 'upload' : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = request.bytes;
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          // Inline function 'kotlin.byteArrayOf' call
          tmp_1 = new Int8Array([]);
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        var response = yield* tmp.m41('file', tmp_0, tmp_1).s42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_1 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_2 = this_1.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_3 = serializer(this_2, createKType(getKClass(MediaUploadResponse), arrayOf([]), false));
          var tmp$ret$10 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
          var tmp$ret$8 = this_1.j1d(tmp$ret$10, obj);
          // Inline function 'kotlin.also' call
          var this_4 = new Response(tmp$ret$8);
          this_4.limit = Companion_instance_83.of(response);
          this_4.json = response.z42();
          tmp$ret$0 = this_4;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  upload(request) {
    return promisify(($completion) => this.e46(request, $completion));
  }
  *f46(request, $completion) {
    return this.upload === protoOf(MediaResourceImpl).upload ? (yield* this.e46(request, $completion)) : (yield* await_0(this.upload(request), $completion));
  }
  g46(request) {
    return toBlocking(MediaResourceImpl$uploadBlocking$slambda_0(this, request));
  }
  *h46(request, $completion) {
    try {
      var tmp0_elvis_lhs = request.serverName;
      var serverName = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = request.mediaId;
      var mediaId = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
      var response = yield* this.k55((new HttpRequest()).n42(this.j55_1 + '/_matrix/media/v3/download/' + serverName + '/' + mediaId).p42('Authorization', this.i55()), 'allow_remote', request.allowRemote).r42($completion);
      if (response.v42_1 === 200) {
        return response.x42_1;
      }
      throw MatrixException.f43(response.v42_1, response.z42());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp2_elvis_lhs = e instanceof MatrixException ? e : null;
        throw tmp2_elvis_lhs == null ? MatrixException.e43(e) : tmp2_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  download(request) {
    return promisify(($completion) => this.h46(request, $completion));
  }
  *i46(request, $completion) {
    return this.download === protoOf(MediaResourceImpl).download ? (yield* this.h46(request, $completion)) : (yield* await_0(this.download(request), $completion));
  }
  j46(request) {
    return toBlocking(MediaResourceImpl$downloadBlocking$slambda_0(this, request));
  }
  *k46(request, $completion) {
    try {
      var tmp0_elvis_lhs = request.serverName;
      var serverName = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = request.mediaId;
      var mediaId = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
      var response = yield* this.k55(this.k55(this.k55((new HttpRequest()).n42(this.j55_1 + '/_matrix/media/v3/thumbnail/' + serverName + '/' + mediaId).p42('Authorization', this.i55()), 'width', request.width), 'height', request.height), 'method', request.method).r42($completion);
      if (response.v42_1 === 200) {
        return response.x42_1;
      }
      throw MatrixException.f43(response.v42_1, response.z42());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp2_elvis_lhs = e instanceof MatrixException ? e : null;
        throw tmp2_elvis_lhs == null ? MatrixException.e43(e) : tmp2_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  thumbnail(request) {
    return promisify(($completion) => this.k46(request, $completion));
  }
  *l46(request, $completion) {
    return this.thumbnail === protoOf(MediaResourceImpl).thumbnail ? (yield* this.k46(request, $completion)) : (yield* await_0(this.thumbnail(request), $completion));
  }
  m46(request) {
    return toBlocking(MediaResourceImpl$thumbnailBlocking$slambda_0(this, request));
  }
  *n46($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/media/v3/config').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(MediaGetConfigResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getConfig() {
    return promisify(($completion) => this.n46($completion));
  }
  *o46($completion) {
    return this.getConfig === protoOf(MediaResourceImpl).getConfig ? (yield* this.n46($completion)) : (yield* await_0(this.getConfig(), $completion));
  }
  p46() {
    return toBlocking(MediaResourceImpl$getConfigBlocking$slambda_0(this));
  }
  *q46(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.k55(this.k55((new HttpRequest()).n42(this.j55_1 + '/_matrix/media/v3/preview_url').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1), 'url', request.url), 'ts', request.ts).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(MediaPreviewUrlResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  previewUrl(request) {
    return promisify(($completion) => this.q46(request, $completion));
  }
  *r46(request, $completion) {
    return this.previewUrl === protoOf(MediaResourceImpl).previewUrl ? (yield* this.q46(request, $completion)) : (yield* await_0(this.previewUrl(request), $completion));
  }
  s46(request) {
    return toBlocking(MediaResourceImpl$previewUrlBlocking$slambda_0(this, request));
  }
}
class NotificationsResourceImpl$getNotificationsBlocking$slambda {
  constructor(this$0, $request) {
    this.i5c_1 = this$0;
    this.j5c_1 = $request;
  }
  *k5c($this$toBlocking, $completion) {
    return yield* this.i5c_1.u46(this.j5c_1, $completion);
  }
  wc(p1, $completion) {
    return this.k5c((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class NotificationsResourceImpl extends AbstractAuthResourceImpl {
  *t46(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.k55(this.k55(this.k55((new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/notifications').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1), 'from', request.from), 'limit', request.limit), 'only', request.only).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(NotificationsGetResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getNotifications(request) {
    return promisify(($completion) => this.t46(request, $completion));
  }
  *u46(request, $completion) {
    return this.getNotifications === protoOf(NotificationsResourceImpl).getNotifications ? (yield* this.t46(request, $completion)) : (yield* await_0(this.getNotifications(request), $completion));
  }
  v46(request) {
    return toBlocking(NotificationsResourceImpl$getNotificationsBlocking$slambda_0(this, request));
  }
}
class Companion_94 {}
class $serializer_93 {
  constructor() {
    $serializer_instance_93 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.PresenceResourceImpl.SetPresenceBody', this, 2);
    tmp0_serialDesc.c1o('presence', false);
    tmp0_serialDesc.c1o('status_msg', true);
    this.n5c_1 = tmp0_serialDesc;
  }
  o5c(encoder, value) {
    var tmp0_desc = this.n5c_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    tmp1_output.c1i(tmp0_desc, 0, value.p5c_1);
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.q5c_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.q5c_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.o5c(encoder, value instanceof SetPresenceBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.n5c_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.n1g(tmp0_desc);
    if (tmp6_input.c1h()) {
      tmp4_local0 = tmp6_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp6_input.o1g(tmp0_desc);
    return SetPresenceBody.r5c(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  l1c() {
    return this.n5c_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class SetPresenceBody {
  constructor(presence, statusMsg) {
    statusMsg = statusMsg === VOID ? null : statusMsg;
    this.p5c_1 = presence;
    this.q5c_1 = statusMsg;
  }
  toString() {
    return 'SetPresenceBody(presence=' + this.p5c_1 + ', statusMsg=' + this.q5c_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.p5c_1);
    result = imul(result, 31) + (this.q5c_1 == null ? 0 : getStringHashCode(this.q5c_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SetPresenceBody))
      return false;
    if (!(this.p5c_1 === other.p5c_1))
      return false;
    if (!(this.q5c_1 == other.q5c_1))
      return false;
    return true;
  }
  static r5c(seen0, presence, statusMsg, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_93().n5c_1);
    }
    var $this = createThis(this);
    $this.p5c_1 = presence;
    if (0 === (seen0 & 2))
      $this.q5c_1 = null;
    else
      $this.q5c_1 = statusMsg;
    return $this;
  }
}
class PresenceResourceImpl$getPresenceBlocking$slambda {
  constructor(this$0, $userId) {
    this.s5c_1 = this$0;
    this.t5c_1 = $userId;
  }
  *u5c($this$toBlocking, $completion) {
    return yield* this.s5c_1.x46(this.t5c_1, $completion);
  }
  wc(p1, $completion) {
    return this.u5c((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class PresenceResourceImpl$setPresenceBlocking$slambda {
  constructor(this$0, $request) {
    this.v5c_1 = this$0;
    this.w5c_1 = $request;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.v5c_1.a47(this.w5c_1, $completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class PresenceResourceImpl extends AbstractAuthResourceImpl {
  *w46(userId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/presence/' + userId + '/status').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(PresenceGetResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getPresence(userId) {
    return promisify(($completion) => this.w46(userId, $completion));
  }
  *x46(userId, $completion) {
    return this.getPresence === protoOf(PresenceResourceImpl).getPresence ? (yield* this.w46(userId, $completion)) : (yield* await_0(this.getPresence(userId), $completion));
  }
  y46(userId) {
    return toBlocking(PresenceResourceImpl$getPresenceBlocking$slambda_0(this, userId));
  }
  *z46(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.userId;
        var userId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        var tmp1_elvis_lhs = request.presence;
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new SetPresenceBody(tmp1_elvis_lhs == null ? 'online' : tmp1_elvis_lhs, request.statusMsg);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.f57_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.w1c();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(SetPresenceBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.i1d(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/presence/' + userId + '/status').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41(body).t42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  setPresence(request) {
    return promisify(($completion) => this.z46(request, $completion));
  }
  *a47(request, $completion) {
    return this.setPresence === protoOf(PresenceResourceImpl).setPresence ? (yield* this.z46(request, $completion)) : (yield* await_0(this.setPresence(request), $completion));
  }
  b47(request) {
    return toBlocking(PresenceResourceImpl$setPresenceBlocking$slambda_0(this, request));
  }
}
class Companion_95 {}
class $serializer_94 {
  constructor() {
    $serializer_instance_94 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.ProfileResourceImpl.SetDisplayNameBody', this, 1);
    tmp0_serialDesc.c1o('displayname', true);
    this.z5c_1 = tmp0_serialDesc;
  }
  a5d(encoder, value) {
    var tmp0_desc = this.z5c_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.b5d_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 0, StringSerializer_getInstance(), value.b5d_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.a5d(encoder, value instanceof SetDisplayNameBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.z5c_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return SetDisplayNameBody.c5d(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.z5c_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  }
}
class Companion_96 {}
class $serializer_95 {
  constructor() {
    $serializer_instance_95 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.ProfileResourceImpl.SetAvatarUrlBody', this, 1);
    tmp0_serialDesc.c1o('avatar_url', true);
    this.d5d_1 = tmp0_serialDesc;
  }
  e5d(encoder, value) {
    var tmp0_desc = this.d5d_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.f5d_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 0, StringSerializer_getInstance(), value.f5d_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.e5d(encoder, value instanceof SetAvatarUrlBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.d5d_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return SetAvatarUrlBody.g5d(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.d5d_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  }
}
class SetDisplayNameBody {
  constructor(displayname) {
    displayname = displayname === VOID ? null : displayname;
    this.b5d_1 = displayname;
  }
  toString() {
    return 'SetDisplayNameBody(displayname=' + this.b5d_1 + ')';
  }
  hashCode() {
    return this.b5d_1 == null ? 0 : getStringHashCode(this.b5d_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SetDisplayNameBody))
      return false;
    if (!(this.b5d_1 == other.b5d_1))
      return false;
    return true;
  }
  static c5d(seen0, displayname, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_94().z5c_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.b5d_1 = null;
    else
      $this.b5d_1 = displayname;
    return $this;
  }
}
class SetAvatarUrlBody {
  constructor(avatarUrl) {
    avatarUrl = avatarUrl === VOID ? null : avatarUrl;
    this.f5d_1 = avatarUrl;
  }
  toString() {
    return 'SetAvatarUrlBody(avatarUrl=' + this.f5d_1 + ')';
  }
  hashCode() {
    return this.f5d_1 == null ? 0 : getStringHashCode(this.f5d_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SetAvatarUrlBody))
      return false;
    if (!(this.f5d_1 == other.f5d_1))
      return false;
    return true;
  }
  static g5d(seen0, avatarUrl, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_95().d5d_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.f5d_1 = null;
    else
      $this.f5d_1 = avatarUrl;
    return $this;
  }
}
class ProfileResourceImpl$getProfileBlocking$slambda {
  constructor(this$0, $userId) {
    this.h5d_1 = this$0;
    this.i5d_1 = $userId;
  }
  *j5d($this$toBlocking, $completion) {
    return yield* this.h5d_1.d47(this.i5d_1, $completion);
  }
  wc(p1, $completion) {
    return this.j5d((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ProfileResourceImpl$getDisplayNameBlocking$slambda {
  constructor(this$0, $userId) {
    this.k5d_1 = this$0;
    this.l5d_1 = $userId;
  }
  *m5d($this$toBlocking, $completion) {
    return yield* this.k5d_1.g47(this.l5d_1, $completion);
  }
  wc(p1, $completion) {
    return this.m5d((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ProfileResourceImpl$setDisplayNameBlocking$slambda {
  constructor(this$0, $request) {
    this.n5d_1 = this$0;
    this.o5d_1 = $request;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.n5d_1.j47(this.o5d_1, $completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ProfileResourceImpl$getAvatarUrlBlocking$slambda {
  constructor(this$0, $userId) {
    this.p5d_1 = this$0;
    this.q5d_1 = $userId;
  }
  *r5d($this$toBlocking, $completion) {
    return yield* this.p5d_1.m47(this.q5d_1, $completion);
  }
  wc(p1, $completion) {
    return this.r5d((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ProfileResourceImpl$setAvatarUrlBlocking$slambda {
  constructor(this$0, $request) {
    this.s5d_1 = this$0;
    this.t5d_1 = $request;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.s5d_1.p47(this.t5d_1, $completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class ProfileResourceImpl extends AbstractAuthResourceImpl {
  *c47(userId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/profile/' + userId).o42(MediaType_getInstance().x55_1).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(ProfileGetProfileResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getProfile(userId) {
    return promisify(($completion) => this.c47(userId, $completion));
  }
  *d47(userId, $completion) {
    return this.getProfile === protoOf(ProfileResourceImpl).getProfile ? (yield* this.c47(userId, $completion)) : (yield* await_0(this.getProfile(userId), $completion));
  }
  e47(userId) {
    return toBlocking(ProfileResourceImpl$getProfileBlocking$slambda_0(this, userId));
  }
  *f47(userId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/profile/' + userId + '/displayname').o42(MediaType_getInstance().x55_1).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(ProfileGetDisplayNameResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getDisplayName(userId) {
    return promisify(($completion) => this.f47(userId, $completion));
  }
  *g47(userId, $completion) {
    return this.getDisplayName === protoOf(ProfileResourceImpl).getDisplayName ? (yield* this.f47(userId, $completion)) : (yield* await_0(this.getDisplayName(userId), $completion));
  }
  h47(userId) {
    return toBlocking(ProfileResourceImpl$getDisplayNameBlocking$slambda_0(this, userId));
  }
  *i47(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.userId;
        var userId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new SetDisplayNameBody(request.displayname);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.f57_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.w1c();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(SetDisplayNameBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.i1d(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/profile/' + userId + '/displayname').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41(body).t42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  setDisplayName(request) {
    return promisify(($completion) => this.i47(request, $completion));
  }
  *j47(request, $completion) {
    return this.setDisplayName === protoOf(ProfileResourceImpl).setDisplayName ? (yield* this.i47(request, $completion)) : (yield* await_0(this.setDisplayName(request), $completion));
  }
  k47(request) {
    return toBlocking(ProfileResourceImpl$setDisplayNameBlocking$slambda_0(this, request));
  }
  *l47(userId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/profile/' + userId + '/avatar_url').o42(MediaType_getInstance().x55_1).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(ProfileGetAvatarUrlResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getAvatarUrl(userId) {
    return promisify(($completion) => this.l47(userId, $completion));
  }
  *m47(userId, $completion) {
    return this.getAvatarUrl === protoOf(ProfileResourceImpl).getAvatarUrl ? (yield* this.l47(userId, $completion)) : (yield* await_0(this.getAvatarUrl(userId), $completion));
  }
  n47(userId) {
    return toBlocking(ProfileResourceImpl$getAvatarUrlBlocking$slambda_0(this, userId));
  }
  *o47(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.userId;
        var userId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new SetAvatarUrlBody(request.avatarUrl);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.f57_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.w1c();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(SetAvatarUrlBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.i1d(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/profile/' + userId + '/avatar_url').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41(body).t42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  setAvatarUrl(request) {
    return promisify(($completion) => this.o47(request, $completion));
  }
  *p47(request, $completion) {
    return this.setAvatarUrl === protoOf(ProfileResourceImpl).setAvatarUrl ? (yield* this.o47(request, $completion)) : (yield* await_0(this.setAvatarUrl(request), $completion));
  }
  q47(request) {
    return toBlocking(ProfileResourceImpl$setAvatarUrlBlocking$slambda_0(this, request));
  }
}
class Companion_97 {}
class $serializer_96 {
  constructor() {
    $serializer_instance_96 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.PushRulesResourceImpl.SetEnabledBody', this, 1);
    tmp0_serialDesc.c1o('enabled', false);
    this.w5d_1 = tmp0_serialDesc;
  }
  x5d(encoder, value) {
    var tmp0_desc = this.w5d_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    tmp1_output.u1h(tmp0_desc, 0, value.y5d_1);
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.x5d(encoder, value instanceof SetEnabledBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.w5d_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.p1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.p1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return SetEnabledBody.z5d(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.w5d_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance()];
  }
}
class SetEnabledBody {
  constructor(enabled) {
    this.y5d_1 = enabled;
  }
  toString() {
    return 'SetEnabledBody(enabled=' + this.y5d_1 + ')';
  }
  hashCode() {
    return getBooleanHashCode(this.y5d_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SetEnabledBody))
      return false;
    if (!(this.y5d_1 === other.y5d_1))
      return false;
    return true;
  }
  static z5d(seen0, enabled, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_96().w5d_1);
    }
    var $this = createThis(this);
    $this.y5d_1 = enabled;
    return $this;
  }
}
class PushRulesResourceImpl$getPushRulesBlocking$slambda {
  constructor(this$0) {
    this.a5e_1 = this$0;
  }
  *b5e($this$toBlocking, $completion) {
    return yield* this.a5e_1.s47($completion);
  }
  wc(p1, $completion) {
    return this.b5e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class PushRulesResourceImpl$getEnabledBlocking$slambda {
  constructor(this$0, $scope, $kind, $ruleId) {
    this.c5e_1 = this$0;
    this.d5e_1 = $scope;
    this.e5e_1 = $kind;
    this.f5e_1 = $ruleId;
  }
  *g5e($this$toBlocking, $completion) {
    return yield* this.c5e_1.v47(this.d5e_1, this.e5e_1, this.f5e_1, $completion);
  }
  wc(p1, $completion) {
    return this.g5e((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class PushRulesResourceImpl$setEnabledBlocking$slambda {
  constructor(this$0, $request) {
    this.h5e_1 = this$0;
    this.i5e_1 = $request;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.h5e_1.y47(this.i5e_1, $completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class PushRulesResourceImpl$createRuleBlocking$slambda {
  constructor(this$0, $request) {
    this.j5e_1 = this$0;
    this.k5e_1 = $request;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.j5e_1.b48(this.k5e_1, $completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class PushRulesResourceImpl$deleteRuleBlocking$slambda {
  constructor(this$0, $request) {
    this.l5e_1 = this$0;
    this.m5e_1 = $request;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.l5e_1.e48(this.m5e_1, $completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class PushRulesResourceImpl extends AbstractAuthResourceImpl {
  *r47($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/pushrules/').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(PushRulesGetResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getPushRules() {
    return promisify(($completion) => this.r47($completion));
  }
  *s47($completion) {
    return this.getPushRules === protoOf(PushRulesResourceImpl).getPushRules ? (yield* this.r47($completion)) : (yield* await_0(this.getPushRules(), $completion));
  }
  t47() {
    return toBlocking(PushRulesResourceImpl$getPushRulesBlocking$slambda_0(this));
  }
  *u47(scope, kind, ruleId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/pushrules/' + scope + '/' + kind + '/' + ruleId + '/enabled').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(PushRulesGetEnabledResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getEnabled(scope, kind, ruleId) {
    return promisify(($completion) => this.u47(scope, kind, ruleId, $completion));
  }
  *v47(scope, kind, ruleId, $completion) {
    return this.getEnabled === protoOf(PushRulesResourceImpl).getEnabled ? (yield* this.u47(scope, kind, ruleId, $completion)) : (yield* await_0(this.getEnabled(scope, kind, ruleId), $completion));
  }
  w47(scope, kind, ruleId) {
    return toBlocking(PushRulesResourceImpl$getEnabledBlocking$slambda_0(this, scope, kind, ruleId));
  }
  *x47(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.scope;
        var scope = tmp0_elvis_lhs == null ? 'global' : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = request.kind;
        var kind = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        var tmp2_elvis_lhs = request.ruleId;
        var ruleId = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        var tmp3_elvis_lhs = request.enabled;
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new SetEnabledBody(tmp3_elvis_lhs == null ? true : tmp3_elvis_lhs);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.f57_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.w1c();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(SetEnabledBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.i1d(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/pushrules/' + scope + '/' + kind + '/' + ruleId + '/enabled').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41(body).t42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  setEnabled(request) {
    return promisify(($completion) => this.x47(request, $completion));
  }
  *y47(request, $completion) {
    return this.setEnabled === protoOf(PushRulesResourceImpl).setEnabled ? (yield* this.x47(request, $completion)) : (yield* await_0(this.setEnabled(request), $completion));
  }
  z47(request) {
    return toBlocking(PushRulesResourceImpl$setEnabledBlocking$slambda_0(this, request));
  }
  *a48(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.scope;
        var scope = tmp0_elvis_lhs == null ? 'global' : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = request.kind;
        var kind = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        var tmp2_elvis_lhs = request.ruleId;
        var ruleId = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
        var tmp3_elvis_lhs = request.ruleBody;
        var body = tmp3_elvis_lhs == null ? '{}' : tmp3_elvis_lhs;
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/pushrules/' + scope + '/' + kind + '/' + ruleId).p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41(body).t42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  createRule(request) {
    return promisify(($completion) => this.a48(request, $completion));
  }
  *b48(request, $completion) {
    return this.createRule === protoOf(PushRulesResourceImpl).createRule ? (yield* this.a48(request, $completion)) : (yield* await_0(this.createRule(request), $completion));
  }
  c48(request) {
    return toBlocking(PushRulesResourceImpl$createRuleBlocking$slambda_0(this, request));
  }
  *d48(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.scope;
        var scope = tmp0_elvis_lhs == null ? 'global' : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = request.kind;
        var kind = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        var tmp2_elvis_lhs = request.ruleId;
        var ruleId = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/pushrules/' + scope + '/' + kind + '/' + ruleId).p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41('{}').u42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  deleteRule(request) {
    return promisify(($completion) => this.d48(request, $completion));
  }
  *e48(request, $completion) {
    return this.deleteRule === protoOf(PushRulesResourceImpl).deleteRule ? (yield* this.d48(request, $completion)) : (yield* await_0(this.deleteRule(request), $completion));
  }
  f48(request) {
    return toBlocking(PushRulesResourceImpl$deleteRuleBlocking$slambda_0(this, request));
  }
}
class Companion_98 {}
class $serializer_97 {
  constructor() {
    $serializer_instance_97 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.PushersResourceImpl.SetPusherBody.PusherDataBody', this, 2);
    tmp0_serialDesc.c1o('url', true);
    tmp0_serialDesc.c1o('format', true);
    this.p5e_1 = tmp0_serialDesc;
  }
  q5e(encoder, value) {
    var tmp0_desc = this.p5e_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.r5e_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 0, StringSerializer_getInstance(), value.r5e_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.s5e_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.s5e_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.q5e(encoder, value instanceof PusherDataBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.p5e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.n1g(tmp0_desc);
    if (tmp6_input.c1h()) {
      tmp4_local0 = tmp6_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp6_input.o1g(tmp0_desc);
    return PusherDataBody.t5e(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  l1c() {
    return this.p5e_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class PusherDataBody {
  constructor(url, format) {
    url = url === VOID ? null : url;
    format = format === VOID ? null : format;
    this.r5e_1 = url;
    this.s5e_1 = format;
  }
  toString() {
    return 'PusherDataBody(url=' + this.r5e_1 + ', format=' + this.s5e_1 + ')';
  }
  hashCode() {
    var result = this.r5e_1 == null ? 0 : getStringHashCode(this.r5e_1);
    result = imul(result, 31) + (this.s5e_1 == null ? 0 : getStringHashCode(this.s5e_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof PusherDataBody))
      return false;
    if (!(this.r5e_1 == other.r5e_1))
      return false;
    if (!(this.s5e_1 == other.s5e_1))
      return false;
    return true;
  }
  static t5e(seen0, url, format, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_97().p5e_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.r5e_1 = null;
    else
      $this.r5e_1 = url;
    if (0 === (seen0 & 2))
      $this.s5e_1 = null;
    else
      $this.s5e_1 = format;
    return $this;
  }
}
class Companion_99 {}
class $serializer_98 {
  constructor() {
    $serializer_instance_98 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.PushersResourceImpl.SetPusherBody', this, 10);
    tmp0_serialDesc.c1o('pushkey', false);
    tmp0_serialDesc.c1o('kind', false);
    tmp0_serialDesc.c1o('app_id', false);
    tmp0_serialDesc.c1o('app_display_name', false);
    tmp0_serialDesc.c1o('device_display_name', false);
    tmp0_serialDesc.c1o('profile_tag', false);
    tmp0_serialDesc.c1o('lang', false);
    tmp0_serialDesc.c1o('data', false);
    tmp0_serialDesc.c1o('append', false);
    tmp0_serialDesc.c1o('enabled', false);
    this.u5e_1 = tmp0_serialDesc;
  }
  v5e(encoder, value) {
    var tmp0_desc = this.u5e_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    tmp1_output.c1i(tmp0_desc, 0, value.w5e_1);
    tmp1_output.c1i(tmp0_desc, 1, value.x5e_1);
    tmp1_output.c1i(tmp0_desc, 2, value.y5e_1);
    tmp1_output.c1i(tmp0_desc, 3, value.z5e_1);
    tmp1_output.c1i(tmp0_desc, 4, value.a5f_1);
    tmp1_output.f1i(tmp0_desc, 5, StringSerializer_getInstance(), value.b5f_1);
    tmp1_output.c1i(tmp0_desc, 6, value.c5f_1);
    tmp1_output.e1i(tmp0_desc, 7, $serializer_getInstance_97(), value.d5f_1);
    tmp1_output.f1i(tmp0_desc, 8, BooleanSerializer_getInstance(), value.e5f_1);
    tmp1_output.f1i(tmp0_desc, 9, BooleanSerializer_getInstance(), value.f5f_1);
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.v5e(encoder, value instanceof SetPusherBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.u5e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_input = decoder.n1g(tmp0_desc);
    if (tmp14_input.c1h()) {
      tmp4_local0 = tmp14_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp14_input.x1g(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp14_input.x1g(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp14_input.x1g(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp14_input.x1g(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp14_input.b1h(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp14_input.x1g(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp14_input.z1g(tmp0_desc, 7, $serializer_getInstance_97(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp14_input.b1h(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp14_input.b1h(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp14_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp14_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp14_input.x1g(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp14_input.x1g(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp14_input.x1g(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp14_input.x1g(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp14_input.b1h(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp14_input.x1g(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp14_input.z1g(tmp0_desc, 7, $serializer_getInstance_97(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp14_input.b1h(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp14_input.b1h(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp14_input.o1g(tmp0_desc);
    return SetPusherBody.g5f(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, null);
  }
  l1c() {
    return this.u5e_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), $serializer_getInstance_97(), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  }
}
class SetPusherBody {
  constructor(pushkey, kind, appId, appDisplayName, deviceDisplayName, profileTag, lang, data, append, enabled) {
    this.w5e_1 = pushkey;
    this.x5e_1 = kind;
    this.y5e_1 = appId;
    this.z5e_1 = appDisplayName;
    this.a5f_1 = deviceDisplayName;
    this.b5f_1 = profileTag;
    this.c5f_1 = lang;
    this.d5f_1 = data;
    this.e5f_1 = append;
    this.f5f_1 = enabled;
  }
  toString() {
    return 'SetPusherBody(pushkey=' + this.w5e_1 + ', kind=' + this.x5e_1 + ', appId=' + this.y5e_1 + ', appDisplayName=' + this.z5e_1 + ', deviceDisplayName=' + this.a5f_1 + ', profileTag=' + this.b5f_1 + ', lang=' + this.c5f_1 + ', data=' + this.d5f_1.toString() + ', append=' + this.e5f_1 + ', enabled=' + this.f5f_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.w5e_1);
    result = imul(result, 31) + getStringHashCode(this.x5e_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.y5e_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.z5e_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.a5f_1) | 0;
    result = imul(result, 31) + (this.b5f_1 == null ? 0 : getStringHashCode(this.b5f_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.c5f_1) | 0;
    result = imul(result, 31) + this.d5f_1.hashCode() | 0;
    result = imul(result, 31) + (this.e5f_1 == null ? 0 : getBooleanHashCode(this.e5f_1)) | 0;
    result = imul(result, 31) + (this.f5f_1 == null ? 0 : getBooleanHashCode(this.f5f_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SetPusherBody))
      return false;
    if (!(this.w5e_1 === other.w5e_1))
      return false;
    if (!(this.x5e_1 === other.x5e_1))
      return false;
    if (!(this.y5e_1 === other.y5e_1))
      return false;
    if (!(this.z5e_1 === other.z5e_1))
      return false;
    if (!(this.a5f_1 === other.a5f_1))
      return false;
    if (!(this.b5f_1 == other.b5f_1))
      return false;
    if (!(this.c5f_1 === other.c5f_1))
      return false;
    if (!this.d5f_1.equals(other.d5f_1))
      return false;
    if (!(this.e5f_1 == other.e5f_1))
      return false;
    if (!(this.f5f_1 == other.f5f_1))
      return false;
    return true;
  }
  static g5f(seen0, pushkey, kind, appId, appDisplayName, deviceDisplayName, profileTag, lang, data, append, enabled, serializationConstructorMarker) {
    if (!(1023 === (1023 & seen0))) {
      throwMissingFieldException(seen0, 1023, $serializer_getInstance_98().u5e_1);
    }
    var $this = createThis(this);
    $this.w5e_1 = pushkey;
    $this.x5e_1 = kind;
    $this.y5e_1 = appId;
    $this.z5e_1 = appDisplayName;
    $this.a5f_1 = deviceDisplayName;
    $this.b5f_1 = profileTag;
    $this.c5f_1 = lang;
    $this.d5f_1 = data;
    $this.e5f_1 = append;
    $this.f5f_1 = enabled;
    return $this;
  }
}
class PushersResourceImpl$getPushersBlocking$slambda {
  constructor(this$0) {
    this.h5f_1 = this$0;
  }
  *i5f($this$toBlocking, $completion) {
    return yield* this.h5f_1.h48($completion);
  }
  wc(p1, $completion) {
    return this.i5f((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class PushersResourceImpl$setPusherBlocking$slambda {
  constructor(this$0, $request) {
    this.j5f_1 = this$0;
    this.k5f_1 = $request;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.j5f_1.k48(this.k5f_1, $completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class PushersResourceImpl extends AbstractAuthResourceImpl {
  *g48($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/pushers').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(PushersGetResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getPushers() {
    return promisify(($completion) => this.g48($completion));
  }
  *h48($completion) {
    return this.getPushers === protoOf(PushersResourceImpl).getPushers ? (yield* this.g48($completion)) : (yield* await_0(this.getPushers(), $completion));
  }
  i48() {
    return toBlocking(PushersResourceImpl$getPushersBlocking$slambda_0(this));
  }
  *j48(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0 = InternalUtility_getInstance();
        var tmp0_elvis_lhs = request.pushkey;
        var tmp = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = request.kind;
        var tmp_0 = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        var tmp2_elvis_lhs = request.appId;
        var tmp_1 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
        var tmp3_elvis_lhs = request.appDisplayName;
        var tmp_2 = tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
        var tmp4_elvis_lhs = request.deviceDisplayName;
        var tmp_3 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
        var tmp_4 = request.profileTag;
        var tmp5_elvis_lhs = request.lang;
        var tmp_5 = tmp5_elvis_lhs == null ? '' : tmp5_elvis_lhs;
        var tmp6_safe_receiver = request.data;
        var tmp_6;
        if (tmp6_safe_receiver == null) {
          tmp_6 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_6 = new PusherDataBody(tmp6_safe_receiver.url, tmp6_safe_receiver.format);
        }
        var tmp7_elvis_lhs = tmp_6;
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new SetPusherBody(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp7_elvis_lhs == null ? new PusherDataBody() : tmp7_elvis_lhs, request.append, request.enabled);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.f57_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.w1c();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(SetPusherBody), arrayOf([]), false));
        var tmp$ret$6 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.i1d(tmp$ret$6, obj);
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/pushers/set').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41(body).s42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  setPusher(request) {
    return promisify(($completion) => this.j48(request, $completion));
  }
  *k48(request, $completion) {
    return this.setPusher === protoOf(PushersResourceImpl).setPusher ? (yield* this.j48(request, $completion)) : (yield* await_0(this.setPusher(request), $completion));
  }
  l48(request) {
    return toBlocking(PushersResourceImpl$setPusherBlocking$slambda_0(this, request));
  }
}
class RelationsResourceImpl$getRelationsBlocking$slambda {
  constructor(this$0, $request) {
    this.n5f_1 = this$0;
    this.o5f_1 = $request;
  }
  *p5f($this$toBlocking, $completion) {
    return yield* this.n5f_1.n48(this.o5f_1, $completion);
  }
  wc(p1, $completion) {
    return this.p5f((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RelationsResourceImpl$getThreadsBlocking$slambda {
  constructor(this$0, $request) {
    this.q5f_1 = this$0;
    this.r5f_1 = $request;
  }
  *s5f($this$toBlocking, $completion) {
    return yield* this.q5f_1.q48(this.r5f_1, $completion);
  }
  wc(p1, $completion) {
    return this.s5f((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RelationsResourceImpl extends AbstractAuthResourceImpl {
  *m48(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder.h1();
        this_0.i1(this.j55_1 + '/_matrix/client/v1/rooms/' + request.roomId + '/relations/' + request.eventId);
        if (!(request.relType == null)) {
          this_0.i1('/' + request.relType);
          if (!(request.eventType == null)) {
            this_0.i1('/' + request.eventType);
          }
        }
        var url = this_0.toString();
        var response = yield* this.k55(this.k55(this.k55(this.k55((new HttpRequest()).n42(url).p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1), 'from', request.from), 'to', request.to), 'limit', request.limit), 'dir', request.dir).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_1 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_2 = this_1.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_3 = serializer(this_2, createKType(getKClass(RelationsGetResponse), arrayOf([]), false));
          var tmp$ret$7 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
          var tmp$ret$5 = this_1.j1d(tmp$ret$7, obj);
          // Inline function 'kotlin.also' call
          var this_4 = new Response(tmp$ret$5);
          this_4.limit = Companion_instance_83.of(response);
          this_4.json = response.z42();
          tmp$ret$0 = this_4;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getRelations(request) {
    return promisify(($completion) => this.m48(request, $completion));
  }
  *n48(request, $completion) {
    return this.getRelations === protoOf(RelationsResourceImpl).getRelations ? (yield* this.m48(request, $completion)) : (yield* await_0(this.getRelations(request), $completion));
  }
  o48(request) {
    return toBlocking(RelationsResourceImpl$getRelationsBlocking$slambda_0(this, request));
  }
  *p48(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.k55(this.k55(this.k55((new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v1/rooms/' + request.roomId + '/threads').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1), 'include', request.include), 'limit', request.limit), 'from', request.from).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(ThreadsGetResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getThreads(request) {
    return promisify(($completion) => this.p48(request, $completion));
  }
  *q48(request, $completion) {
    return this.getThreads === protoOf(RelationsResourceImpl).getThreads ? (yield* this.p48(request, $completion)) : (yield* await_0(this.getThreads(request), $completion));
  }
  r48(request) {
    return toBlocking(RelationsResourceImpl$getThreadsBlocking$slambda_0(this, request));
  }
}
class Companion_100 {
  constructor() {
    Companion_instance_100 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.v5f_1 = [null, null, null, null, lazy(tmp_0, RoomsResourceImpl$CreateRoomBody$Companion$$childSerializers$_anonymous__q3r2ul), null, null];
  }
}
class $serializer_99 {
  constructor() {
    $serializer_instance_99 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.CreateRoomBody', this, 7);
    tmp0_serialDesc.c1o('visibility', true);
    tmp0_serialDesc.c1o('room_alias_name', true);
    tmp0_serialDesc.c1o('name', true);
    tmp0_serialDesc.c1o('topic', true);
    tmp0_serialDesc.c1o('invite', true);
    tmp0_serialDesc.c1o('preset', true);
    tmp0_serialDesc.c1o('is_direct', true);
    this.w5f_1 = tmp0_serialDesc;
  }
  x5f(encoder, value) {
    var tmp0_desc = this.w5f_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_101().v5f_1;
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.y5f_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 0, StringSerializer_getInstance(), value.y5f_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.z5f_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.z5f_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.a5g_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 2, StringSerializer_getInstance(), value.a5g_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.b5g_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 3, StringSerializer_getInstance(), value.b5g_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 4) ? true : !(value.c5g_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 4, tmp2_cached[4].w2(), value.c5g_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 5) ? true : !(value.d5g_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 5, StringSerializer_getInstance(), value.d5g_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 6) ? true : !(value.e5g_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 6, BooleanSerializer_getInstance(), value.e5g_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.x5f(encoder, value instanceof CreateRoomBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.w5f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.n1g(tmp0_desc);
    var tmp12_cached = Companion_getInstance_101().v5f_1;
    if (tmp11_input.c1h()) {
      tmp4_local0 = tmp11_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.b1h(tmp0_desc, 4, tmp12_cached[4].w2(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.b1h(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.b1h(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.b1h(tmp0_desc, 4, tmp12_cached[4].w2(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.b1h(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.b1h(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp11_input.o1g(tmp0_desc);
    return CreateRoomBody.f5g(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  }
  l1c() {
    return this.w5f_1;
  }
  r1o() {
    var tmp0_cached = Companion_getInstance_101().v5f_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[4].w2()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  }
}
class Companion_101 {}
class $serializer_100 {
  constructor() {
    $serializer_instance_100 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.JoinRoomBody', this, 1);
    tmp0_serialDesc.c1o('reason', true);
    this.g5g_1 = tmp0_serialDesc;
  }
  h5g(encoder, value) {
    var tmp0_desc = this.g5g_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.i5g_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 0, StringSerializer_getInstance(), value.i5g_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.h5g(encoder, value instanceof JoinRoomBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.g5g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return JoinRoomBody.j5g(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.g5g_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  }
}
class Companion_102 {}
class $serializer_101 {
  constructor() {
    $serializer_instance_101 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.LeaveRoomBody', this, 1);
    tmp0_serialDesc.c1o('reason', true);
    this.k5g_1 = tmp0_serialDesc;
  }
  l5g(encoder, value) {
    var tmp0_desc = this.k5g_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.m5g_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 0, StringSerializer_getInstance(), value.m5g_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.l5g(encoder, value instanceof LeaveRoomBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.k5g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return LeaveRoomBody.n5g(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.k5g_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  }
}
class Companion_103 {}
class $serializer_102 {
  constructor() {
    $serializer_instance_102 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.InviteBody', this, 2);
    tmp0_serialDesc.c1o('user_id', false);
    tmp0_serialDesc.c1o('reason', true);
    this.o5g_1 = tmp0_serialDesc;
  }
  p5g(encoder, value) {
    var tmp0_desc = this.o5g_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    tmp1_output.c1i(tmp0_desc, 0, value.q5g_1);
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.r5g_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.r5g_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.p5g(encoder, value instanceof InviteBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.o5g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.n1g(tmp0_desc);
    if (tmp6_input.c1h()) {
      tmp4_local0 = tmp6_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp6_input.o1g(tmp0_desc);
    return InviteBody.s5g(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  l1c() {
    return this.o5g_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class Companion_104 {}
class $serializer_103 {
  constructor() {
    $serializer_instance_103 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.RedactEventBody', this, 1);
    tmp0_serialDesc.c1o('reason', true);
    this.t5g_1 = tmp0_serialDesc;
  }
  u5g(encoder, value) {
    var tmp0_desc = this.t5g_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.v5g_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 0, StringSerializer_getInstance(), value.v5g_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.u5g(encoder, value instanceof RedactEventBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.t5g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return RedactEventBody.w5g(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.t5g_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  }
}
class Companion_105 {}
class $serializer_104 {
  constructor() {
    $serializer_instance_104 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.TypingBody', this, 2);
    tmp0_serialDesc.c1o('typing', false);
    tmp0_serialDesc.c1o('timeout', true);
    this.x5g_1 = tmp0_serialDesc;
  }
  y5g(encoder, value) {
    var tmp0_desc = this.x5g_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    tmp1_output.u1h(tmp0_desc, 0, value.z5g_1);
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.a5h_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 1, IntSerializer_getInstance(), value.a5h_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.y5g(encoder, value instanceof TypingBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.x5g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_local1 = null;
    var tmp6_input = decoder.n1g(tmp0_desc);
    if (tmp6_input.c1h()) {
      tmp4_local0 = tmp6_input.p1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.p1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp6_input.o1g(tmp0_desc);
    return TypingBody.b5h(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  l1c() {
    return this.x5g_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance(), get_nullable(IntSerializer_getInstance())];
  }
}
class Companion_106 {}
class $serializer_105 {
  constructor() {
    $serializer_instance_105 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.SendReceiptBody', this, 1);
    tmp0_serialDesc.c1o('thread_id', true);
    this.c5h_1 = tmp0_serialDesc;
  }
  d5h(encoder, value) {
    var tmp0_desc = this.c5h_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.e5h_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 0, StringSerializer_getInstance(), value.e5h_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.d5h(encoder, value instanceof SendReceiptBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.c5h_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return SendReceiptBody.f5h(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.c5h_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  }
}
class Companion_107 {}
class $serializer_106 {
  constructor() {
    $serializer_instance_106 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.SetReadMarkersBody', this, 3);
    tmp0_serialDesc.c1o('m.fully_read', true);
    tmp0_serialDesc.c1o('m.read', true);
    tmp0_serialDesc.c1o('m.read.private', true);
    this.g5h_1 = tmp0_serialDesc;
  }
  h5h(encoder, value) {
    var tmp0_desc = this.g5h_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.i5h_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 0, StringSerializer_getInstance(), value.i5h_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.j5h_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.j5h_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.k5h_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 2, StringSerializer_getInstance(), value.k5h_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.h5h(encoder, value instanceof SetReadMarkersBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.g5h_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.n1g(tmp0_desc);
    if (tmp7_input.c1h()) {
      tmp4_local0 = tmp7_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.b1h(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp7_input.o1g(tmp0_desc);
    return SetReadMarkersBody.l5h(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  l1c() {
    return this.g5h_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  }
}
class Companion_108 {}
class $serializer_107 {
  constructor() {
    $serializer_instance_107 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.SendMessageBody', this, 16);
    tmp0_serialDesc.c1o('msgtype', false);
    tmp0_serialDesc.c1o('body', false);
    tmp0_serialDesc.c1o('format', true);
    tmp0_serialDesc.c1o('formatted_body', true);
    tmp0_serialDesc.c1o('url', true);
    tmp0_serialDesc.c1o('filename', true);
    tmp0_serialDesc.c1o('mimetype', true);
    tmp0_serialDesc.c1o('thumbnail_url', true);
    tmp0_serialDesc.c1o('thumbnail_mimetype', true);
    tmp0_serialDesc.c1o('thumbnail_size', true);
    tmp0_serialDesc.c1o('width', true);
    tmp0_serialDesc.c1o('height', true);
    tmp0_serialDesc.c1o('duration', true);
    tmp0_serialDesc.c1o('geo_uri', true);
    tmp0_serialDesc.c1o('description', true);
    tmp0_serialDesc.c1o('m.relates_to', true);
    this.m5h_1 = tmp0_serialDesc;
  }
  n5h(encoder, value) {
    var tmp0_desc = this.m5h_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    tmp1_output.c1i(tmp0_desc, 0, value.o5h_1);
    tmp1_output.c1i(tmp0_desc, 1, value.p5h_1);
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.q5h_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 2, StringSerializer_getInstance(), value.q5h_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.r5h_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 3, StringSerializer_getInstance(), value.r5h_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 4) ? true : !(value.s5h_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 4, StringSerializer_getInstance(), value.s5h_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 5) ? true : !(value.t5h_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 5, StringSerializer_getInstance(), value.t5h_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 6) ? true : !(value.u5h_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 6, StringSerializer_getInstance(), value.u5h_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 7) ? true : !(value.v5h_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 7, StringSerializer_getInstance(), value.v5h_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 8) ? true : !(value.w5h_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 8, StringSerializer_getInstance(), value.w5h_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 9) ? true : !(value.x5h_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 9, LongSerializer_getInstance(), value.x5h_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 10) ? true : !(value.y5h_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 10, LongSerializer_getInstance(), value.y5h_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 11) ? true : !(value.z5h_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 11, LongSerializer_getInstance(), value.z5h_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 12) ? true : !(value.a5i_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 12, LongSerializer_getInstance(), value.a5i_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 13) ? true : !(value.b5i_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 13, StringSerializer_getInstance(), value.b5i_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 14) ? true : !(value.c5i_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 14, StringSerializer_getInstance(), value.c5i_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 15) ? true : !(value.d5i_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 15, $serializer_getInstance_108(), value.d5i_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.n5h(encoder, value instanceof SendMessageBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.m5h_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp18_local14 = null;
    var tmp19_local15 = null;
    var tmp20_input = decoder.n1g(tmp0_desc);
    if (tmp20_input.c1h()) {
      tmp4_local0 = tmp20_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp20_input.x1g(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp20_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp20_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp20_input.b1h(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp20_input.b1h(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp20_input.b1h(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp20_input.b1h(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp20_input.b1h(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp20_input.b1h(tmp0_desc, 9, LongSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp20_input.b1h(tmp0_desc, 10, LongSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp20_input.b1h(tmp0_desc, 11, LongSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp20_input.b1h(tmp0_desc, 12, LongSerializer_getInstance(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp20_input.b1h(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp20_input.b1h(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp20_input.b1h(tmp0_desc, 15, $serializer_getInstance_108(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp20_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp20_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp20_input.x1g(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp20_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp20_input.b1h(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp20_input.b1h(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp20_input.b1h(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp20_input.b1h(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp20_input.b1h(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp20_input.b1h(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp20_input.b1h(tmp0_desc, 9, LongSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp20_input.b1h(tmp0_desc, 10, LongSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp20_input.b1h(tmp0_desc, 11, LongSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp20_input.b1h(tmp0_desc, 12, LongSerializer_getInstance(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp20_input.b1h(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp20_input.b1h(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp20_input.b1h(tmp0_desc, 15, $serializer_getInstance_108(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp20_input.o1g(tmp0_desc);
    return SendMessageBody.e5i(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, null);
  }
  l1c() {
    return this.m5h_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(LongSerializer_getInstance()), get_nullable(LongSerializer_getInstance()), get_nullable(LongSerializer_getInstance()), get_nullable(LongSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_108())];
  }
}
class Companion_109 {}
class $serializer_108 {
  constructor() {
    $serializer_instance_108 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.SendMessageRelatesTo', this, 3);
    tmp0_serialDesc.c1o('m.in_reply_to', true);
    tmp0_serialDesc.c1o('m.annotation', true);
    tmp0_serialDesc.c1o('m.reference', true);
    this.f5i_1 = tmp0_serialDesc;
  }
  g5i(encoder, value) {
    var tmp0_desc = this.f5i_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.h5i_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 0, $serializer_getInstance_109(), value.h5i_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.i5i_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 1, $serializer_getInstance_110(), value.i5i_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.j5i_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 2, $serializer_getInstance_111(), value.j5i_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.g5i(encoder, value instanceof SendMessageRelatesTo ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.f5i_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.n1g(tmp0_desc);
    if (tmp7_input.c1h()) {
      tmp4_local0 = tmp7_input.b1h(tmp0_desc, 0, $serializer_getInstance_109(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.b1h(tmp0_desc, 1, $serializer_getInstance_110(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.b1h(tmp0_desc, 2, $serializer_getInstance_111(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.b1h(tmp0_desc, 0, $serializer_getInstance_109(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.b1h(tmp0_desc, 1, $serializer_getInstance_110(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.b1h(tmp0_desc, 2, $serializer_getInstance_111(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp7_input.o1g(tmp0_desc);
    return SendMessageRelatesTo.k5i(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  l1c() {
    return this.f5i_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_109()), get_nullable($serializer_getInstance_110()), get_nullable($serializer_getInstance_111())];
  }
}
class Companion_110 {}
class $serializer_109 {
  constructor() {
    $serializer_instance_109 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.SendMessageInReplyTo', this, 1);
    tmp0_serialDesc.c1o('event_id', false);
    this.l5i_1 = tmp0_serialDesc;
  }
  m5i(encoder, value) {
    var tmp0_desc = this.l5i_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    tmp1_output.c1i(tmp0_desc, 0, value.n5i_1);
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.m5i(encoder, value instanceof SendMessageInReplyTo ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.l5i_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return SendMessageInReplyTo.o5i(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.l5i_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  }
}
class Companion_111 {}
class $serializer_110 {
  constructor() {
    $serializer_instance_110 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.SendMessageAnnotation', this, 3);
    tmp0_serialDesc.c1o('event_id', false);
    tmp0_serialDesc.c1o('key', false);
    tmp0_serialDesc.c1o('rel_type', true);
    this.p5i_1 = tmp0_serialDesc;
  }
  q5i(encoder, value) {
    var tmp0_desc = this.p5i_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    tmp1_output.c1i(tmp0_desc, 0, value.r5i_1);
    tmp1_output.c1i(tmp0_desc, 1, value.s5i_1);
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.t5i_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 2, StringSerializer_getInstance(), value.t5i_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.q5i(encoder, value instanceof SendMessageAnnotation ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.p5i_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.n1g(tmp0_desc);
    if (tmp7_input.c1h()) {
      tmp4_local0 = tmp7_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.x1g(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.x1g(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp7_input.o1g(tmp0_desc);
    return SendMessageAnnotation.u5i(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  }
  l1c() {
    return this.p5i_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class Companion_112 {}
class $serializer_111 {
  constructor() {
    $serializer_instance_111 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.SendMessageReference', this, 2);
    tmp0_serialDesc.c1o('event_id', false);
    tmp0_serialDesc.c1o('rel_type', true);
    this.v5i_1 = tmp0_serialDesc;
  }
  w5i(encoder, value) {
    var tmp0_desc = this.v5i_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    tmp1_output.c1i(tmp0_desc, 0, value.x5i_1);
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.y5i_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.y5i_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.w5i(encoder, value instanceof SendMessageReference ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.v5i_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.n1g(tmp0_desc);
    if (tmp6_input.c1h()) {
      tmp4_local0 = tmp6_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp6_input.o1g(tmp0_desc);
    return SendMessageReference.z5i(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  l1c() {
    return this.v5i_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class Companion_113 {}
class $serializer_112 {
  constructor() {
    $serializer_instance_112 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.BanBody', this, 2);
    tmp0_serialDesc.c1o('user_id', false);
    tmp0_serialDesc.c1o('reason', true);
    this.a5j_1 = tmp0_serialDesc;
  }
  b5j(encoder, value) {
    var tmp0_desc = this.a5j_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    tmp1_output.c1i(tmp0_desc, 0, value.c5j_1);
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.d5j_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.d5j_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.b5j(encoder, value instanceof BanBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.a5j_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.n1g(tmp0_desc);
    if (tmp6_input.c1h()) {
      tmp4_local0 = tmp6_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp6_input.o1g(tmp0_desc);
    return BanBody.e5j(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  l1c() {
    return this.a5j_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class Companion_114 {}
class $serializer_113 {
  constructor() {
    $serializer_instance_113 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.UnbanBody', this, 2);
    tmp0_serialDesc.c1o('user_id', false);
    tmp0_serialDesc.c1o('reason', true);
    this.f5j_1 = tmp0_serialDesc;
  }
  g5j(encoder, value) {
    var tmp0_desc = this.f5j_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    tmp1_output.c1i(tmp0_desc, 0, value.h5j_1);
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.i5j_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.i5j_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.g5j(encoder, value instanceof UnbanBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.f5j_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.n1g(tmp0_desc);
    if (tmp6_input.c1h()) {
      tmp4_local0 = tmp6_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp6_input.o1g(tmp0_desc);
    return UnbanBody.j5j(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  l1c() {
    return this.f5j_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class Companion_115 {}
class $serializer_114 {
  constructor() {
    $serializer_instance_114 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.RoomsResourceImpl.KickBody', this, 2);
    tmp0_serialDesc.c1o('user_id', false);
    tmp0_serialDesc.c1o('reason', true);
    this.k5j_1 = tmp0_serialDesc;
  }
  l5j(encoder, value) {
    var tmp0_desc = this.k5j_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    tmp1_output.c1i(tmp0_desc, 0, value.m5j_1);
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.n5j_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 1, StringSerializer_getInstance(), value.n5j_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.l5j(encoder, value instanceof KickBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.k5j_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.n1g(tmp0_desc);
    if (tmp6_input.c1h()) {
      tmp4_local0 = tmp6_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp6_input.o1g(tmp0_desc);
    return KickBody.o5j(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  l1c() {
    return this.k5j_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  }
}
class CreateRoomBody {
  constructor(visibility, roomAliasName, name, topic, invite, preset, isDirect) {
    Companion_getInstance_101();
    visibility = visibility === VOID ? null : visibility;
    roomAliasName = roomAliasName === VOID ? null : roomAliasName;
    name = name === VOID ? null : name;
    topic = topic === VOID ? null : topic;
    invite = invite === VOID ? null : invite;
    preset = preset === VOID ? null : preset;
    isDirect = isDirect === VOID ? null : isDirect;
    this.y5f_1 = visibility;
    this.z5f_1 = roomAliasName;
    this.a5g_1 = name;
    this.b5g_1 = topic;
    this.c5g_1 = invite;
    this.d5g_1 = preset;
    this.e5g_1 = isDirect;
  }
  toString() {
    return 'CreateRoomBody(visibility=' + this.y5f_1 + ', roomAliasName=' + this.z5f_1 + ', name=' + this.a5g_1 + ', topic=' + this.b5g_1 + ', invite=' + toString_0(this.c5g_1) + ', preset=' + this.d5g_1 + ', isDirect=' + this.e5g_1 + ')';
  }
  hashCode() {
    var result = this.y5f_1 == null ? 0 : getStringHashCode(this.y5f_1);
    result = imul(result, 31) + (this.z5f_1 == null ? 0 : getStringHashCode(this.z5f_1)) | 0;
    result = imul(result, 31) + (this.a5g_1 == null ? 0 : getStringHashCode(this.a5g_1)) | 0;
    result = imul(result, 31) + (this.b5g_1 == null ? 0 : getStringHashCode(this.b5g_1)) | 0;
    result = imul(result, 31) + (this.c5g_1 == null ? 0 : hashCode(this.c5g_1)) | 0;
    result = imul(result, 31) + (this.d5g_1 == null ? 0 : getStringHashCode(this.d5g_1)) | 0;
    result = imul(result, 31) + (this.e5g_1 == null ? 0 : getBooleanHashCode(this.e5g_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof CreateRoomBody))
      return false;
    if (!(this.y5f_1 == other.y5f_1))
      return false;
    if (!(this.z5f_1 == other.z5f_1))
      return false;
    if (!(this.a5g_1 == other.a5g_1))
      return false;
    if (!(this.b5g_1 == other.b5g_1))
      return false;
    if (!equals(this.c5g_1, other.c5g_1))
      return false;
    if (!(this.d5g_1 == other.d5g_1))
      return false;
    if (!(this.e5g_1 == other.e5g_1))
      return false;
    return true;
  }
  static f5g(seen0, visibility, roomAliasName, name, topic, invite, preset, isDirect, serializationConstructorMarker) {
    Companion_getInstance_101();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_99().w5f_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.y5f_1 = null;
    else
      $this.y5f_1 = visibility;
    if (0 === (seen0 & 2))
      $this.z5f_1 = null;
    else
      $this.z5f_1 = roomAliasName;
    if (0 === (seen0 & 4))
      $this.a5g_1 = null;
    else
      $this.a5g_1 = name;
    if (0 === (seen0 & 8))
      $this.b5g_1 = null;
    else
      $this.b5g_1 = topic;
    if (0 === (seen0 & 16))
      $this.c5g_1 = null;
    else
      $this.c5g_1 = invite;
    if (0 === (seen0 & 32))
      $this.d5g_1 = null;
    else
      $this.d5g_1 = preset;
    if (0 === (seen0 & 64))
      $this.e5g_1 = null;
    else
      $this.e5g_1 = isDirect;
    return $this;
  }
}
class JoinRoomBody {
  constructor(reason) {
    reason = reason === VOID ? null : reason;
    this.i5g_1 = reason;
  }
  toString() {
    return 'JoinRoomBody(reason=' + this.i5g_1 + ')';
  }
  hashCode() {
    return this.i5g_1 == null ? 0 : getStringHashCode(this.i5g_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof JoinRoomBody))
      return false;
    if (!(this.i5g_1 == other.i5g_1))
      return false;
    return true;
  }
  static j5g(seen0, reason, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_100().g5g_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.i5g_1 = null;
    else
      $this.i5g_1 = reason;
    return $this;
  }
}
class LeaveRoomBody {
  constructor(reason) {
    reason = reason === VOID ? null : reason;
    this.m5g_1 = reason;
  }
  toString() {
    return 'LeaveRoomBody(reason=' + this.m5g_1 + ')';
  }
  hashCode() {
    return this.m5g_1 == null ? 0 : getStringHashCode(this.m5g_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof LeaveRoomBody))
      return false;
    if (!(this.m5g_1 == other.m5g_1))
      return false;
    return true;
  }
  static n5g(seen0, reason, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_101().k5g_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.m5g_1 = null;
    else
      $this.m5g_1 = reason;
    return $this;
  }
}
class InviteBody {
  constructor(userId, reason) {
    reason = reason === VOID ? null : reason;
    this.q5g_1 = userId;
    this.r5g_1 = reason;
  }
  toString() {
    return 'InviteBody(userId=' + this.q5g_1 + ', reason=' + this.r5g_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.q5g_1);
    result = imul(result, 31) + (this.r5g_1 == null ? 0 : getStringHashCode(this.r5g_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof InviteBody))
      return false;
    if (!(this.q5g_1 === other.q5g_1))
      return false;
    if (!(this.r5g_1 == other.r5g_1))
      return false;
    return true;
  }
  static s5g(seen0, userId, reason, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_102().o5g_1);
    }
    var $this = createThis(this);
    $this.q5g_1 = userId;
    if (0 === (seen0 & 2))
      $this.r5g_1 = null;
    else
      $this.r5g_1 = reason;
    return $this;
  }
}
class RedactEventBody {
  constructor(reason) {
    reason = reason === VOID ? null : reason;
    this.v5g_1 = reason;
  }
  toString() {
    return 'RedactEventBody(reason=' + this.v5g_1 + ')';
  }
  hashCode() {
    return this.v5g_1 == null ? 0 : getStringHashCode(this.v5g_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof RedactEventBody))
      return false;
    if (!(this.v5g_1 == other.v5g_1))
      return false;
    return true;
  }
  static w5g(seen0, reason, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_103().t5g_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.v5g_1 = null;
    else
      $this.v5g_1 = reason;
    return $this;
  }
}
class TypingBody {
  constructor(typing, timeout) {
    timeout = timeout === VOID ? null : timeout;
    this.z5g_1 = typing;
    this.a5h_1 = timeout;
  }
  toString() {
    return 'TypingBody(typing=' + this.z5g_1 + ', timeout=' + this.a5h_1 + ')';
  }
  hashCode() {
    var result = getBooleanHashCode(this.z5g_1);
    result = imul(result, 31) + (this.a5h_1 == null ? 0 : this.a5h_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof TypingBody))
      return false;
    if (!(this.z5g_1 === other.z5g_1))
      return false;
    if (!(this.a5h_1 == other.a5h_1))
      return false;
    return true;
  }
  static b5h(seen0, typing, timeout, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_104().x5g_1);
    }
    var $this = createThis(this);
    $this.z5g_1 = typing;
    if (0 === (seen0 & 2))
      $this.a5h_1 = null;
    else
      $this.a5h_1 = timeout;
    return $this;
  }
}
class SendReceiptBody {
  constructor(threadId) {
    threadId = threadId === VOID ? null : threadId;
    this.e5h_1 = threadId;
  }
  toString() {
    return 'SendReceiptBody(threadId=' + this.e5h_1 + ')';
  }
  hashCode() {
    return this.e5h_1 == null ? 0 : getStringHashCode(this.e5h_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SendReceiptBody))
      return false;
    if (!(this.e5h_1 == other.e5h_1))
      return false;
    return true;
  }
  static f5h(seen0, threadId, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_105().c5h_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.e5h_1 = null;
    else
      $this.e5h_1 = threadId;
    return $this;
  }
}
class SetReadMarkersBody {
  constructor(fullyRead, read, readPrivate) {
    fullyRead = fullyRead === VOID ? null : fullyRead;
    read = read === VOID ? null : read;
    readPrivate = readPrivate === VOID ? null : readPrivate;
    this.i5h_1 = fullyRead;
    this.j5h_1 = read;
    this.k5h_1 = readPrivate;
  }
  toString() {
    return 'SetReadMarkersBody(fullyRead=' + this.i5h_1 + ', read=' + this.j5h_1 + ', readPrivate=' + this.k5h_1 + ')';
  }
  hashCode() {
    var result = this.i5h_1 == null ? 0 : getStringHashCode(this.i5h_1);
    result = imul(result, 31) + (this.j5h_1 == null ? 0 : getStringHashCode(this.j5h_1)) | 0;
    result = imul(result, 31) + (this.k5h_1 == null ? 0 : getStringHashCode(this.k5h_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SetReadMarkersBody))
      return false;
    if (!(this.i5h_1 == other.i5h_1))
      return false;
    if (!(this.j5h_1 == other.j5h_1))
      return false;
    if (!(this.k5h_1 == other.k5h_1))
      return false;
    return true;
  }
  static l5h(seen0, fullyRead, read, readPrivate, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_106().g5h_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.i5h_1 = null;
    else
      $this.i5h_1 = fullyRead;
    if (0 === (seen0 & 2))
      $this.j5h_1 = null;
    else
      $this.j5h_1 = read;
    if (0 === (seen0 & 4))
      $this.k5h_1 = null;
    else
      $this.k5h_1 = readPrivate;
    return $this;
  }
}
class SendMessageBody {
  constructor(msgtype, body, format, formattedBody, url, filename, mimetype, thumbnailUrl, thumbnailMimetype, thumbnailSize, width, height, duration, geoUri, description, relatesTo) {
    format = format === VOID ? null : format;
    formattedBody = formattedBody === VOID ? null : formattedBody;
    url = url === VOID ? null : url;
    filename = filename === VOID ? null : filename;
    mimetype = mimetype === VOID ? null : mimetype;
    thumbnailUrl = thumbnailUrl === VOID ? null : thumbnailUrl;
    thumbnailMimetype = thumbnailMimetype === VOID ? null : thumbnailMimetype;
    thumbnailSize = thumbnailSize === VOID ? null : thumbnailSize;
    width = width === VOID ? null : width;
    height = height === VOID ? null : height;
    duration = duration === VOID ? null : duration;
    geoUri = geoUri === VOID ? null : geoUri;
    description = description === VOID ? null : description;
    relatesTo = relatesTo === VOID ? null : relatesTo;
    this.o5h_1 = msgtype;
    this.p5h_1 = body;
    this.q5h_1 = format;
    this.r5h_1 = formattedBody;
    this.s5h_1 = url;
    this.t5h_1 = filename;
    this.u5h_1 = mimetype;
    this.v5h_1 = thumbnailUrl;
    this.w5h_1 = thumbnailMimetype;
    this.x5h_1 = thumbnailSize;
    this.y5h_1 = width;
    this.z5h_1 = height;
    this.a5i_1 = duration;
    this.b5i_1 = geoUri;
    this.c5i_1 = description;
    this.d5i_1 = relatesTo;
  }
  toString() {
    return 'SendMessageBody(msgtype=' + this.o5h_1 + ', body=' + this.p5h_1 + ', format=' + this.q5h_1 + ', formattedBody=' + this.r5h_1 + ', url=' + this.s5h_1 + ', filename=' + this.t5h_1 + ', mimetype=' + this.u5h_1 + ', thumbnailUrl=' + this.v5h_1 + ', thumbnailMimetype=' + this.w5h_1 + ', thumbnailSize=' + toString(this.x5h_1) + ', width=' + toString(this.y5h_1) + ', height=' + toString(this.z5h_1) + ', duration=' + toString(this.a5i_1) + ', geoUri=' + this.b5i_1 + ', description=' + this.c5i_1 + ', relatesTo=' + toString(this.d5i_1) + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.o5h_1);
    result = imul(result, 31) + getStringHashCode(this.p5h_1) | 0;
    result = imul(result, 31) + (this.q5h_1 == null ? 0 : getStringHashCode(this.q5h_1)) | 0;
    result = imul(result, 31) + (this.r5h_1 == null ? 0 : getStringHashCode(this.r5h_1)) | 0;
    result = imul(result, 31) + (this.s5h_1 == null ? 0 : getStringHashCode(this.s5h_1)) | 0;
    result = imul(result, 31) + (this.t5h_1 == null ? 0 : getStringHashCode(this.t5h_1)) | 0;
    result = imul(result, 31) + (this.u5h_1 == null ? 0 : getStringHashCode(this.u5h_1)) | 0;
    result = imul(result, 31) + (this.v5h_1 == null ? 0 : getStringHashCode(this.v5h_1)) | 0;
    result = imul(result, 31) + (this.w5h_1 == null ? 0 : getStringHashCode(this.w5h_1)) | 0;
    result = imul(result, 31) + (this.x5h_1 == null ? 0 : getBigIntHashCode(this.x5h_1)) | 0;
    result = imul(result, 31) + (this.y5h_1 == null ? 0 : getBigIntHashCode(this.y5h_1)) | 0;
    result = imul(result, 31) + (this.z5h_1 == null ? 0 : getBigIntHashCode(this.z5h_1)) | 0;
    result = imul(result, 31) + (this.a5i_1 == null ? 0 : getBigIntHashCode(this.a5i_1)) | 0;
    result = imul(result, 31) + (this.b5i_1 == null ? 0 : getStringHashCode(this.b5i_1)) | 0;
    result = imul(result, 31) + (this.c5i_1 == null ? 0 : getStringHashCode(this.c5i_1)) | 0;
    result = imul(result, 31) + (this.d5i_1 == null ? 0 : this.d5i_1.hashCode()) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SendMessageBody))
      return false;
    if (!(this.o5h_1 === other.o5h_1))
      return false;
    if (!(this.p5h_1 === other.p5h_1))
      return false;
    if (!(this.q5h_1 == other.q5h_1))
      return false;
    if (!(this.r5h_1 == other.r5h_1))
      return false;
    if (!(this.s5h_1 == other.s5h_1))
      return false;
    if (!(this.t5h_1 == other.t5h_1))
      return false;
    if (!(this.u5h_1 == other.u5h_1))
      return false;
    if (!(this.v5h_1 == other.v5h_1))
      return false;
    if (!(this.w5h_1 == other.w5h_1))
      return false;
    if (!(this.x5h_1 == other.x5h_1))
      return false;
    if (!(this.y5h_1 == other.y5h_1))
      return false;
    if (!(this.z5h_1 == other.z5h_1))
      return false;
    if (!(this.a5i_1 == other.a5i_1))
      return false;
    if (!(this.b5i_1 == other.b5i_1))
      return false;
    if (!(this.c5i_1 == other.c5i_1))
      return false;
    if (!equals(this.d5i_1, other.d5i_1))
      return false;
    return true;
  }
  static e5i(seen0, msgtype, body, format, formattedBody, url, filename, mimetype, thumbnailUrl, thumbnailMimetype, thumbnailSize, width, height, duration, geoUri, description, relatesTo, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_107().m5h_1);
    }
    var $this = createThis(this);
    $this.o5h_1 = msgtype;
    $this.p5h_1 = body;
    if (0 === (seen0 & 4))
      $this.q5h_1 = null;
    else
      $this.q5h_1 = format;
    if (0 === (seen0 & 8))
      $this.r5h_1 = null;
    else
      $this.r5h_1 = formattedBody;
    if (0 === (seen0 & 16))
      $this.s5h_1 = null;
    else
      $this.s5h_1 = url;
    if (0 === (seen0 & 32))
      $this.t5h_1 = null;
    else
      $this.t5h_1 = filename;
    if (0 === (seen0 & 64))
      $this.u5h_1 = null;
    else
      $this.u5h_1 = mimetype;
    if (0 === (seen0 & 128))
      $this.v5h_1 = null;
    else
      $this.v5h_1 = thumbnailUrl;
    if (0 === (seen0 & 256))
      $this.w5h_1 = null;
    else
      $this.w5h_1 = thumbnailMimetype;
    if (0 === (seen0 & 512))
      $this.x5h_1 = null;
    else
      $this.x5h_1 = thumbnailSize;
    if (0 === (seen0 & 1024))
      $this.y5h_1 = null;
    else
      $this.y5h_1 = width;
    if (0 === (seen0 & 2048))
      $this.z5h_1 = null;
    else
      $this.z5h_1 = height;
    if (0 === (seen0 & 4096))
      $this.a5i_1 = null;
    else
      $this.a5i_1 = duration;
    if (0 === (seen0 & 8192))
      $this.b5i_1 = null;
    else
      $this.b5i_1 = geoUri;
    if (0 === (seen0 & 16384))
      $this.c5i_1 = null;
    else
      $this.c5i_1 = description;
    if (0 === (seen0 & 32768))
      $this.d5i_1 = null;
    else
      $this.d5i_1 = relatesTo;
    return $this;
  }
}
class SendMessageRelatesTo {
  constructor(inReplyTo, annotation, reference) {
    inReplyTo = inReplyTo === VOID ? null : inReplyTo;
    annotation = annotation === VOID ? null : annotation;
    reference = reference === VOID ? null : reference;
    this.h5i_1 = inReplyTo;
    this.i5i_1 = annotation;
    this.j5i_1 = reference;
  }
  toString() {
    return 'SendMessageRelatesTo(inReplyTo=' + toString(this.h5i_1) + ', annotation=' + toString(this.i5i_1) + ', reference=' + toString(this.j5i_1) + ')';
  }
  hashCode() {
    var result = this.h5i_1 == null ? 0 : this.h5i_1.hashCode();
    result = imul(result, 31) + (this.i5i_1 == null ? 0 : this.i5i_1.hashCode()) | 0;
    result = imul(result, 31) + (this.j5i_1 == null ? 0 : this.j5i_1.hashCode()) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SendMessageRelatesTo))
      return false;
    if (!equals(this.h5i_1, other.h5i_1))
      return false;
    if (!equals(this.i5i_1, other.i5i_1))
      return false;
    if (!equals(this.j5i_1, other.j5i_1))
      return false;
    return true;
  }
  static k5i(seen0, inReplyTo, annotation, reference, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_108().f5i_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.h5i_1 = null;
    else
      $this.h5i_1 = inReplyTo;
    if (0 === (seen0 & 2))
      $this.i5i_1 = null;
    else
      $this.i5i_1 = annotation;
    if (0 === (seen0 & 4))
      $this.j5i_1 = null;
    else
      $this.j5i_1 = reference;
    return $this;
  }
}
class SendMessageInReplyTo {
  constructor(eventId) {
    this.n5i_1 = eventId;
  }
  toString() {
    return 'SendMessageInReplyTo(eventId=' + this.n5i_1 + ')';
  }
  hashCode() {
    return getStringHashCode(this.n5i_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SendMessageInReplyTo))
      return false;
    if (!(this.n5i_1 === other.n5i_1))
      return false;
    return true;
  }
  static o5i(seen0, eventId, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_109().l5i_1);
    }
    var $this = createThis(this);
    $this.n5i_1 = eventId;
    return $this;
  }
}
class SendMessageAnnotation {
  constructor(eventId, key, relType) {
    relType = relType === VOID ? null : relType;
    this.r5i_1 = eventId;
    this.s5i_1 = key;
    this.t5i_1 = relType;
  }
  toString() {
    return 'SendMessageAnnotation(eventId=' + this.r5i_1 + ', key=' + this.s5i_1 + ', relType=' + this.t5i_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.r5i_1);
    result = imul(result, 31) + getStringHashCode(this.s5i_1) | 0;
    result = imul(result, 31) + (this.t5i_1 == null ? 0 : getStringHashCode(this.t5i_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SendMessageAnnotation))
      return false;
    if (!(this.r5i_1 === other.r5i_1))
      return false;
    if (!(this.s5i_1 === other.s5i_1))
      return false;
    if (!(this.t5i_1 == other.t5i_1))
      return false;
    return true;
  }
  static u5i(seen0, eventId, key, relType, serializationConstructorMarker) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_110().p5i_1);
    }
    var $this = createThis(this);
    $this.r5i_1 = eventId;
    $this.s5i_1 = key;
    if (0 === (seen0 & 4))
      $this.t5i_1 = null;
    else
      $this.t5i_1 = relType;
    return $this;
  }
}
class SendMessageReference {
  constructor(eventId, relType) {
    relType = relType === VOID ? null : relType;
    this.x5i_1 = eventId;
    this.y5i_1 = relType;
  }
  toString() {
    return 'SendMessageReference(eventId=' + this.x5i_1 + ', relType=' + this.y5i_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.x5i_1);
    result = imul(result, 31) + (this.y5i_1 == null ? 0 : getStringHashCode(this.y5i_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SendMessageReference))
      return false;
    if (!(this.x5i_1 === other.x5i_1))
      return false;
    if (!(this.y5i_1 == other.y5i_1))
      return false;
    return true;
  }
  static z5i(seen0, eventId, relType, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_111().v5i_1);
    }
    var $this = createThis(this);
    $this.x5i_1 = eventId;
    if (0 === (seen0 & 2))
      $this.y5i_1 = null;
    else
      $this.y5i_1 = relType;
    return $this;
  }
}
class BanBody {
  constructor(userId, reason) {
    reason = reason === VOID ? null : reason;
    this.c5j_1 = userId;
    this.d5j_1 = reason;
  }
  toString() {
    return 'BanBody(userId=' + this.c5j_1 + ', reason=' + this.d5j_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.c5j_1);
    result = imul(result, 31) + (this.d5j_1 == null ? 0 : getStringHashCode(this.d5j_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof BanBody))
      return false;
    if (!(this.c5j_1 === other.c5j_1))
      return false;
    if (!(this.d5j_1 == other.d5j_1))
      return false;
    return true;
  }
  static e5j(seen0, userId, reason, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_112().a5j_1);
    }
    var $this = createThis(this);
    $this.c5j_1 = userId;
    if (0 === (seen0 & 2))
      $this.d5j_1 = null;
    else
      $this.d5j_1 = reason;
    return $this;
  }
}
class UnbanBody {
  constructor(userId, reason) {
    reason = reason === VOID ? null : reason;
    this.h5j_1 = userId;
    this.i5j_1 = reason;
  }
  toString() {
    return 'UnbanBody(userId=' + this.h5j_1 + ', reason=' + this.i5j_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.h5j_1);
    result = imul(result, 31) + (this.i5j_1 == null ? 0 : getStringHashCode(this.i5j_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof UnbanBody))
      return false;
    if (!(this.h5j_1 === other.h5j_1))
      return false;
    if (!(this.i5j_1 == other.i5j_1))
      return false;
    return true;
  }
  static j5j(seen0, userId, reason, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_113().f5j_1);
    }
    var $this = createThis(this);
    $this.h5j_1 = userId;
    if (0 === (seen0 & 2))
      $this.i5j_1 = null;
    else
      $this.i5j_1 = reason;
    return $this;
  }
}
class KickBody {
  constructor(userId, reason) {
    reason = reason === VOID ? null : reason;
    this.m5j_1 = userId;
    this.n5j_1 = reason;
  }
  toString() {
    return 'KickBody(userId=' + this.m5j_1 + ', reason=' + this.n5j_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.m5j_1);
    result = imul(result, 31) + (this.n5j_1 == null ? 0 : getStringHashCode(this.n5j_1)) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof KickBody))
      return false;
    if (!(this.m5j_1 === other.m5j_1))
      return false;
    if (!(this.n5j_1 == other.n5j_1))
      return false;
    return true;
  }
  static o5j(seen0, userId, reason, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_114().k5j_1);
    }
    var $this = createThis(this);
    $this.m5j_1 = userId;
    if (0 === (seen0 & 2))
      $this.n5j_1 = null;
    else
      $this.n5j_1 = reason;
    return $this;
  }
}
class RoomsResourceImpl$createRoomBlocking$slambda {
  constructor(this$0, $request) {
    this.s5j_1 = this$0;
    this.t5j_1 = $request;
  }
  *u5j($this$toBlocking, $completion) {
    return yield* this.s5j_1.t48(this.t5j_1, $completion);
  }
  wc(p1, $completion) {
    return this.u5j((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$joinRoomBlocking$slambda {
  constructor(this$0, $request) {
    this.v5j_1 = this$0;
    this.w5j_1 = $request;
  }
  *x5j($this$toBlocking, $completion) {
    return yield* this.v5j_1.w48(this.w5j_1, $completion);
  }
  wc(p1, $completion) {
    return this.x5j((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$leaveRoomBlocking$slambda {
  constructor(this$0, $request) {
    this.y5j_1 = this$0;
    this.z5j_1 = $request;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.y5j_1.z48(this.z5j_1, $completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$inviteBlocking$slambda {
  constructor(this$0, $request) {
    this.a5k_1 = this$0;
    this.b5k_1 = $request;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.a5k_1.c49(this.b5k_1, $completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$getJoinedRoomsBlocking$slambda {
  constructor(this$0) {
    this.c5k_1 = this$0;
  }
  *d5k($this$toBlocking, $completion) {
    return yield* this.c5k_1.f49($completion);
  }
  wc(p1, $completion) {
    return this.d5k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$getRoomNameBlocking$slambda {
  constructor(this$0, $roomId) {
    this.e5k_1 = this$0;
    this.f5k_1 = $roomId;
  }
  *g5k($this$toBlocking, $completion) {
    return yield* this.e5k_1.i49(this.f5k_1, $completion);
  }
  wc(p1, $completion) {
    return this.g5k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$getMembersBlocking$slambda {
  constructor(this$0, $roomId) {
    this.h5k_1 = this$0;
    this.i5k_1 = $roomId;
  }
  *j5k($this$toBlocking, $completion) {
    return yield* this.h5k_1.l49(this.i5k_1, $completion);
  }
  wc(p1, $completion) {
    return this.j5k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$getJoinedMembersBlocking$slambda {
  constructor(this$0, $roomId) {
    this.k5k_1 = this$0;
    this.l5k_1 = $roomId;
  }
  *m5k($this$toBlocking, $completion) {
    return yield* this.k5k_1.o49(this.l5k_1, $completion);
  }
  wc(p1, $completion) {
    return this.m5k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$getMessagesBlocking$slambda {
  constructor(this$0, $request) {
    this.n5k_1 = this$0;
    this.o5k_1 = $request;
  }
  *p5k($this$toBlocking, $completion) {
    return yield* this.n5k_1.r49(this.o5k_1, $completion);
  }
  wc(p1, $completion) {
    return this.p5k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$sendMessageBlocking$slambda {
  constructor(this$0, $request) {
    this.q5k_1 = this$0;
    this.r5k_1 = $request;
  }
  *s5k($this$toBlocking, $completion) {
    return yield* this.q5k_1.u49(this.r5k_1, $completion);
  }
  wc(p1, $completion) {
    return this.s5k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$redactEventBlocking$slambda {
  constructor(this$0, $request) {
    this.t5k_1 = this$0;
    this.u5k_1 = $request;
  }
  *v5k($this$toBlocking, $completion) {
    return yield* this.t5k_1.x49(this.u5k_1, $completion);
  }
  wc(p1, $completion) {
    return this.v5k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$setTypingBlocking$slambda {
  constructor(this$0, $request) {
    this.w5k_1 = this$0;
    this.x5k_1 = $request;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.w5k_1.a4a(this.x5k_1, $completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$sendReceiptBlocking$slambda {
  constructor(this$0, $request) {
    this.y5k_1 = this$0;
    this.z5k_1 = $request;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.y5k_1.d4a(this.z5k_1, $completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$setReadMarkersBlocking$slambda {
  constructor(this$0, $request) {
    this.a5l_1 = this$0;
    this.b5l_1 = $request;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.a5l_1.g4a(this.b5l_1, $completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$banBlocking$slambda {
  constructor(this$0, $request) {
    this.c5l_1 = this$0;
    this.d5l_1 = $request;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.c5l_1.j4a(this.d5l_1, $completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$unbanBlocking$slambda {
  constructor(this$0, $request) {
    this.e5l_1 = this$0;
    this.f5l_1 = $request;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.e5l_1.m4a(this.f5l_1, $completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$kickBlocking$slambda {
  constructor(this$0, $request) {
    this.g5l_1 = this$0;
    this.h5l_1 = $request;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.g5l_1.p4a(this.h5l_1, $completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$getStateEventBlocking$slambda {
  constructor(this$0, $roomId, $eventType, $stateKey) {
    this.i5l_1 = this$0;
    this.j5l_1 = $roomId;
    this.k5l_1 = $eventType;
    this.l5l_1 = $stateKey;
  }
  *n55($this$toBlocking, $completion) {
    return yield* this.i5l_1.t4a(this.j5l_1, this.k5l_1, this.l5l_1, $completion);
  }
  wc(p1, $completion) {
    return this.n55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$sendStateEventBlocking$slambda {
  constructor(this$0, $request) {
    this.m5l_1 = this$0;
    this.n5l_1 = $request;
  }
  *o5l($this$toBlocking, $completion) {
    return yield* this.m5l_1.x4a(this.n5l_1, $completion);
  }
  wc(p1, $completion) {
    return this.o5l((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$forgetRoomBlocking$slambda {
  constructor(this$0, $request) {
    this.p5l_1 = this$0;
    this.q5l_1 = $request;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.p5l_1.a4b(this.q5l_1, $completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl$getStateBlocking$slambda {
  constructor(this$0, $roomId) {
    this.r5l_1 = this$0;
    this.s5l_1 = $roomId;
  }
  *t5l($this$toBlocking, $completion) {
    return yield* this.r5l_1.d4b(this.s5l_1, $completion);
  }
  wc(p1, $completion) {
    return this.t5l((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class RoomsResourceImpl extends AbstractAuthResourceImpl {
  constructor(uri, accessToken) {
    super(uri, accessToken);
    this.r5j_1 = 0n;
  }
  *s48(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new CreateRoomBody(request.visibility, request.roomAliasName, request.name, request.topic, request.invite, request.preset, request.isDirect);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.f57_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.w1c();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(CreateRoomBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.i1d(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/createRoom').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41(body).s42($completion);
        if (response.v42_1 === 200) {
          var tmp0_0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj_0 = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_3 = tmp0_0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_4 = this_3.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_5 = serializer(this_4, createKType(getKClass(RoomsCreateRoomResponse), arrayOf([]), false));
          var tmp$ret$8 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
          var tmp$ret$6 = this_3.j1d(tmp$ret$8, obj_0);
          // Inline function 'kotlin.also' call
          var this_6 = new Response(tmp$ret$6);
          this_6.limit = Companion_instance_83.of(response);
          this_6.json = response.z42();
          tmp$ret$0 = this_6;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  createRoom(request) {
    return promisify(($completion) => this.s48(request, $completion));
  }
  *t48(request, $completion) {
    return this.createRoom === protoOf(RoomsResourceImpl).createRoom ? (yield* this.s48(request, $completion)) : (yield* await_0(this.createRoom(request), $completion));
  }
  u48(request) {
    return toBlocking(RoomsResourceImpl$createRoomBlocking$slambda_0(this, request));
  }
  *v48(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp0_elvis_lhs = request.roomIdOrAlias;
        var roomIdOrAlias = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new JoinRoomBody(request.reason);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.f57_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.w1c();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(JoinRoomBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.i1d(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/join/' + roomIdOrAlias).p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41(body).s42($completion);
        if (response.v42_1 === 200) {
          var tmp0_0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj_0 = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_3 = tmp0_0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_4 = this_3.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_5 = serializer(this_4, createKType(getKClass(RoomsJoinRoomResponse), arrayOf([]), false));
          var tmp$ret$8 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
          var tmp$ret$6 = this_3.j1d(tmp$ret$8, obj_0);
          // Inline function 'kotlin.also' call
          var this_6 = new Response(tmp$ret$6);
          this_6.limit = Companion_instance_83.of(response);
          this_6.json = response.z42();
          tmp$ret$0 = this_6;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  joinRoom(request) {
    return promisify(($completion) => this.v48(request, $completion));
  }
  *w48(request, $completion) {
    return this.joinRoom === protoOf(RoomsResourceImpl).joinRoom ? (yield* this.v48(request, $completion)) : (yield* await_0(this.joinRoom(request), $completion));
  }
  x48(request) {
    return toBlocking(RoomsResourceImpl$joinRoomBlocking$slambda_0(this, request));
  }
  *y48(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.roomId;
        var roomId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new LeaveRoomBody(request.reason);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.f57_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.w1c();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(LeaveRoomBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.i1d(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/rooms/' + roomId + '/leave').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41(body).s42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  leaveRoom(request) {
    return promisify(($completion) => this.y48(request, $completion));
  }
  *z48(request, $completion) {
    return this.leaveRoom === protoOf(RoomsResourceImpl).leaveRoom ? (yield* this.y48(request, $completion)) : (yield* await_0(this.leaveRoom(request), $completion));
  }
  a49(request) {
    return toBlocking(RoomsResourceImpl$leaveRoomBlocking$slambda_0(this, request));
  }
  *b49(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.roomId;
        var roomId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        var tmp1_elvis_lhs = request.userId;
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new InviteBody(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs, request.reason);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.f57_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.w1c();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(InviteBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.i1d(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/rooms/' + roomId + '/invite').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41(body).s42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  invite(request) {
    return promisify(($completion) => this.b49(request, $completion));
  }
  *c49(request, $completion) {
    return this.invite === protoOf(RoomsResourceImpl).invite ? (yield* this.b49(request, $completion)) : (yield* await_0(this.invite(request), $completion));
  }
  d49(request) {
    return toBlocking(RoomsResourceImpl$inviteBlocking$slambda_0(this, request));
  }
  *e49($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/joined_rooms').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(RoomsGetJoinedRoomsResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getJoinedRooms() {
    return promisify(($completion) => this.e49($completion));
  }
  *f49($completion) {
    return this.getJoinedRooms === protoOf(RoomsResourceImpl).getJoinedRooms ? (yield* this.e49($completion)) : (yield* await_0(this.getJoinedRooms(), $completion));
  }
  g49() {
    return toBlocking(RoomsResourceImpl$getJoinedRoomsBlocking$slambda_0(this));
  }
  *h49(roomId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/rooms/' + roomId + '/state/m.room.name').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(RoomsGetRoomNameResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getRoomName(roomId) {
    return promisify(($completion) => this.h49(roomId, $completion));
  }
  *i49(roomId, $completion) {
    return this.getRoomName === protoOf(RoomsResourceImpl).getRoomName ? (yield* this.h49(roomId, $completion)) : (yield* await_0(this.getRoomName(roomId), $completion));
  }
  j49(roomId) {
    return toBlocking(RoomsResourceImpl$getRoomNameBlocking$slambda_0(this, roomId));
  }
  *k49(roomId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/rooms/' + roomId + '/members').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(RoomsGetMembersResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getMembers(roomId) {
    return promisify(($completion) => this.k49(roomId, $completion));
  }
  *l49(roomId, $completion) {
    return this.getMembers === protoOf(RoomsResourceImpl).getMembers ? (yield* this.k49(roomId, $completion)) : (yield* await_0(this.getMembers(roomId), $completion));
  }
  m49(roomId) {
    return toBlocking(RoomsResourceImpl$getMembersBlocking$slambda_0(this, roomId));
  }
  *n49(roomId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/rooms/' + roomId + '/joined_members').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(RoomsGetJoinedMembersResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getJoinedMembers(roomId) {
    return promisify(($completion) => this.n49(roomId, $completion));
  }
  *o49(roomId, $completion) {
    return this.getJoinedMembers === protoOf(RoomsResourceImpl).getJoinedMembers ? (yield* this.n49(roomId, $completion)) : (yield* await_0(this.getJoinedMembers(roomId), $completion));
  }
  p49(roomId) {
    return toBlocking(RoomsResourceImpl$getJoinedMembersBlocking$slambda_0(this, roomId));
  }
  *q49(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp0_elvis_lhs = request.roomId;
        var roomId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var response = yield* this.k55(this.k55(this.k55(this.k55(this.k55((new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/rooms/' + roomId + '/messages').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1), 'from', request.from), 'to', request.to), 'dir', request.dir), 'limit', request.limit), 'filter', request.filter).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(RoomsGetMessagesResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getMessages(request) {
    return promisify(($completion) => this.q49(request, $completion));
  }
  *r49(request, $completion) {
    return this.getMessages === protoOf(RoomsResourceImpl).getMessages ? (yield* this.q49(request, $completion)) : (yield* await_0(this.getMessages(request), $completion));
  }
  s49(request) {
    return toBlocking(RoomsResourceImpl$getMessagesBlocking$slambda_0(this, request));
  }
  *t49(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp0_elvis_lhs = request.roomId;
        var roomId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var txnId = generateTxnId(this);
        var tmp;
        if (!(request.relatesToType == null) || !(request.relatesToEventId == null) || !(request.relatesToKey == null) || !(request.relatesToRelType == null) || !(request.replyTo == null)) {
          var tmp_0;
          if (!(request.replyTo == null) || request.relatesToType === 'm.in_reply_to') {
            var tmp1_elvis_lhs = request.replyTo;
            var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? request.relatesToEventId : tmp1_elvis_lhs;
            tmp_0 = new SendMessageInReplyTo(tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs);
          } else {
            tmp_0 = null;
          }
          var tmp_1 = tmp_0;
          var tmp_2;
          if (request.relatesToType === 'm.annotation') {
            var tmp3_elvis_lhs = request.relatesToEventId;
            var tmp_3 = tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
            var tmp4_elvis_lhs = request.relatesToKey;
            tmp_2 = new SendMessageAnnotation(tmp_3, tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs, request.relatesToRelType);
          } else {
            tmp_2 = null;
          }
          var tmp_4 = tmp_2;
          var tmp_5;
          if (request.relatesToType === 'm.reference') {
            var tmp5_elvis_lhs = request.relatesToEventId;
            tmp_5 = new SendMessageReference(tmp5_elvis_lhs == null ? '' : tmp5_elvis_lhs, request.relatesToRelType);
          } else {
            tmp_5 = null;
          }
          tmp = new SendMessageRelatesTo(tmp_1, tmp_4, tmp_5);
        } else {
          tmp = null;
        }
        var relatesTo = tmp;
        var isHtml = request.msgtype === 'm.text' && !(request.body == null) && contains(ensureNotNull(request.body), '<') && contains(ensureNotNull(request.body), '>');
        var tmp0 = InternalUtility_getInstance();
        var tmp6_elvis_lhs = request.msgtype;
        var tmp_6 = tmp6_elvis_lhs == null ? 'm.text' : tmp6_elvis_lhs;
        var tmp7_elvis_lhs = request.body;
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new SendMessageBody(tmp_6, tmp7_elvis_lhs == null ? '' : tmp7_elvis_lhs, isHtml ? 'org.matrix.custom.html' : null, isHtml ? request.body : null, request.url, request.filename, request.mimetype, request.thumbnailUrl, request.thumbnailMimetype, request.thumbnailSize, request.width, request.height, request.duration, request.geoUri, request.description, relatesTo);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.f57_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.w1c();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(SendMessageBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.i1d(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/rooms/' + roomId + '/send/m.room.message/' + txnId).p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41(body).t42($completion);
        if (response.v42_1 === 200) {
          var tmp0_0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj_0 = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_3 = tmp0_0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_4 = this_3.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_5 = serializer(this_4, createKType(getKClass(RoomsSendMessageResponse), arrayOf([]), false));
          var tmp$ret$8 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
          var tmp$ret$6 = this_3.j1d(tmp$ret$8, obj_0);
          // Inline function 'kotlin.also' call
          var this_6 = new Response(tmp$ret$6);
          this_6.limit = Companion_instance_83.of(response);
          this_6.json = response.z42();
          tmp$ret$0 = this_6;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  sendMessage(request) {
    return promisify(($completion) => this.t49(request, $completion));
  }
  *u49(request, $completion) {
    return this.sendMessage === protoOf(RoomsResourceImpl).sendMessage ? (yield* this.t49(request, $completion)) : (yield* await_0(this.sendMessage(request), $completion));
  }
  v49(request) {
    return toBlocking(RoomsResourceImpl$sendMessageBlocking$slambda_0(this, request));
  }
  *w49(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp0_elvis_lhs = request.roomId;
        var roomId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = request.eventId;
        var eventId = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        var txnId = generateTxnId(this);
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new RedactEventBody(request.reason);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.f57_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.w1c();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(RedactEventBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.i1d(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/rooms/' + roomId + '/redact/' + eventId + '/' + txnId).p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41(body).t42($completion);
        if (response.v42_1 === 200) {
          var tmp0_0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj_0 = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_3 = tmp0_0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_4 = this_3.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_5 = serializer(this_4, createKType(getKClass(RoomsRedactEventResponse), arrayOf([]), false));
          var tmp$ret$8 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
          var tmp$ret$6 = this_3.j1d(tmp$ret$8, obj_0);
          // Inline function 'kotlin.also' call
          var this_6 = new Response(tmp$ret$6);
          this_6.limit = Companion_instance_83.of(response);
          this_6.json = response.z42();
          tmp$ret$0 = this_6;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  redactEvent(request) {
    return promisify(($completion) => this.w49(request, $completion));
  }
  *x49(request, $completion) {
    return this.redactEvent === protoOf(RoomsResourceImpl).redactEvent ? (yield* this.w49(request, $completion)) : (yield* await_0(this.redactEvent(request), $completion));
  }
  y49(request) {
    return toBlocking(RoomsResourceImpl$redactEventBlocking$slambda_0(this, request));
  }
  *z49(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.roomId;
        var roomId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = request.userId;
        var userId = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        var tmp2_elvis_lhs = request.typing;
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new TypingBody(tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs, request.timeout);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.f57_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.w1c();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(TypingBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.i1d(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/rooms/' + roomId + '/typing/' + userId).p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41(body).t42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  setTyping(request) {
    return promisify(($completion) => this.z49(request, $completion));
  }
  *a4a(request, $completion) {
    return this.setTyping === protoOf(RoomsResourceImpl).setTyping ? (yield* this.z49(request, $completion)) : (yield* await_0(this.setTyping(request), $completion));
  }
  b4a(request) {
    return toBlocking(RoomsResourceImpl$setTypingBlocking$slambda_0(this, request));
  }
  *c4a(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.roomId;
        var roomId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = request.receiptType;
        var receiptType = tmp1_elvis_lhs == null ? 'm.read' : tmp1_elvis_lhs;
        var tmp2_elvis_lhs = request.eventId;
        var eventId = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new SendReceiptBody(request.threadId);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.f57_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.w1c();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(SendReceiptBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.i1d(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/rooms/' + roomId + '/receipt/' + receiptType + '/' + eventId).p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41(body).s42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  sendReceipt(request) {
    return promisify(($completion) => this.c4a(request, $completion));
  }
  *d4a(request, $completion) {
    return this.sendReceipt === protoOf(RoomsResourceImpl).sendReceipt ? (yield* this.c4a(request, $completion)) : (yield* await_0(this.sendReceipt(request), $completion));
  }
  e4a(request) {
    return toBlocking(RoomsResourceImpl$sendReceiptBlocking$slambda_0(this, request));
  }
  *f4a(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.roomId;
        var roomId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new SetReadMarkersBody(request.fullyRead, request.read, request.readPrivate);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.f57_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.w1c();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(SetReadMarkersBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.i1d(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/rooms/' + roomId + '/read_markers').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41(body).s42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  setReadMarkers(request) {
    return promisify(($completion) => this.f4a(request, $completion));
  }
  *g4a(request, $completion) {
    return this.setReadMarkers === protoOf(RoomsResourceImpl).setReadMarkers ? (yield* this.f4a(request, $completion)) : (yield* await_0(this.setReadMarkers(request), $completion));
  }
  h4a(request) {
    return toBlocking(RoomsResourceImpl$setReadMarkersBlocking$slambda_0(this, request));
  }
  *i4a(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.roomId;
        var roomId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        var tmp1_elvis_lhs = request.userId;
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new BanBody(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs, request.reason);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.f57_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.w1c();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(BanBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.i1d(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/rooms/' + roomId + '/ban').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41(body).s42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  ban(request) {
    return promisify(($completion) => this.i4a(request, $completion));
  }
  *j4a(request, $completion) {
    return this.ban === protoOf(RoomsResourceImpl).ban ? (yield* this.i4a(request, $completion)) : (yield* await_0(this.ban(request), $completion));
  }
  k4a(request) {
    return toBlocking(RoomsResourceImpl$banBlocking$slambda_0(this, request));
  }
  *l4a(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.roomId;
        var roomId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        var tmp1_elvis_lhs = request.userId;
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new UnbanBody(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs, request.reason);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.f57_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.w1c();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(UnbanBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.i1d(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/rooms/' + roomId + '/unban').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41(body).s42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  unban(request) {
    return promisify(($completion) => this.l4a(request, $completion));
  }
  *m4a(request, $completion) {
    return this.unban === protoOf(RoomsResourceImpl).unban ? (yield* this.l4a(request, $completion)) : (yield* await_0(this.unban(request), $completion));
  }
  n4a(request) {
    return toBlocking(RoomsResourceImpl$unbanBlocking$slambda_0(this, request));
  }
  *o4a(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.roomId;
        var roomId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        var tmp1_elvis_lhs = request.userId;
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new KickBody(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs, request.reason);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.f57_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.w1c();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(KickBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.i1d(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/rooms/' + roomId + '/kick').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41(body).s42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  kick(request) {
    return promisify(($completion) => this.o4a(request, $completion));
  }
  *p4a(request, $completion) {
    return this.kick === protoOf(RoomsResourceImpl).kick ? (yield* this.o4a(request, $completion)) : (yield* await_0(this.kick(request), $completion));
  }
  q4a(request) {
    return toBlocking(RoomsResourceImpl$kickBlocking$slambda_0(this, request));
  }
  *r4a(roomId, eventType, stateKey, $completion) {
    try {
      var tmp;
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(stateKey) === 0) {
        tmp = this.j55_1 + '/_matrix/client/v3/rooms/' + roomId + '/state/' + eventType;
      } else {
        tmp = this.j55_1 + '/_matrix/client/v3/rooms/' + roomId + '/state/' + eventType + '/' + stateKey;
      }
      var url = tmp;
      var response = yield* (new HttpRequest()).n42(url).p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).r42($completion);
      if (response.v42_1 === 200) {
        // Inline function 'kotlin.also' call
        var this_0 = new Response(response.z42());
        this_0.json = response.z42();
        return this_0;
      }
      throw MatrixException.f43(response.v42_1, response.z42());
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
        throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
      } else {
        throw $p;
      }
    }
  }
  getStateEvent(roomId, eventType, stateKey) {
    return promisify(($completion) => this.s4a(roomId, eventType, stateKey, $completion));
  }
  *t4a(roomId, eventType, stateKey, $completion) {
    return this.getStateEvent === protoOf(RoomsResourceImpl).getStateEvent ? (yield* this.s4a(roomId, eventType, stateKey, $completion)) : (yield* await_0(this.getStateEvent(roomId, eventType, stateKey), $completion));
  }
  u4a(roomId, eventType, stateKey) {
    return toBlocking(RoomsResourceImpl$getStateEventBlocking$slambda_0(this, roomId, eventType, stateKey));
  }
  *w4a(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp0_elvis_lhs = request.roomId;
        var roomId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = request.eventType;
        var eventType = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        var tmp2_elvis_lhs = request.stateKey;
        var stateKey = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
        var tmp;
        // Inline function 'kotlin.text.isEmpty' call
        if (charSequenceLength(stateKey) === 0) {
          tmp = this.j55_1 + '/_matrix/client/v3/rooms/' + roomId + '/state/' + eventType;
        } else {
          tmp = this.j55_1 + '/_matrix/client/v3/rooms/' + roomId + '/state/' + eventType + '/' + stateKey;
        }
        var url = tmp;
        var tmp_0 = (new HttpRequest()).n42(url).p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1);
        var tmp3_elvis_lhs = request.body;
        var response = yield* tmp_0.n41(tmp3_elvis_lhs == null ? '{}' : tmp3_elvis_lhs).t42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(RoomsSendStateEventResponse), arrayOf([]), false));
          var tmp$ret$5 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$3 = this_0.j1d(tmp$ret$5, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$3);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  sendStateEvent(request) {
    return promisify(($completion) => this.w4a(request, $completion));
  }
  *x4a(request, $completion) {
    return this.sendStateEvent === protoOf(RoomsResourceImpl).sendStateEvent ? (yield* this.w4a(request, $completion)) : (yield* await_0(this.sendStateEvent(request), $completion));
  }
  y4a(request) {
    return toBlocking(RoomsResourceImpl$sendStateEventBlocking$slambda_0(this, request));
  }
  *z4a(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/rooms/' + request.roomId + '/forget').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41('{}').s42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  forgetRoom(request) {
    return promisify(($completion) => this.z4a(request, $completion));
  }
  *a4b(request, $completion) {
    return this.forgetRoom === protoOf(RoomsResourceImpl).forgetRoom ? (yield* this.z4a(request, $completion)) : (yield* await_0(this.forgetRoom(request), $completion));
  }
  b4b(request) {
    return toBlocking(RoomsResourceImpl$forgetRoomBlocking$slambda_0(this, request));
  }
  *c4b(roomId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/rooms/' + roomId + '/state').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().jf(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(RoomsStateEvent), arrayOf([]), false))]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getState(roomId) {
    return promisify(($completion) => this.c4b(roomId, $completion));
  }
  *d4b(roomId, $completion) {
    return this.getState === protoOf(RoomsResourceImpl).getState ? (yield* this.c4b(roomId, $completion)) : (yield* await_0(this.getState(roomId), $completion));
  }
  e4b(roomId) {
    return toBlocking(RoomsResourceImpl$getStateBlocking$slambda_0(this, roomId));
  }
}
class Companion_116 {}
class $serializer_115 {
  constructor() {
    $serializer_instance_115 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.SearchResourceImpl.SearchBody', this, 1);
    tmp0_serialDesc.c1o('search_categories', false);
    this.u5l_1 = tmp0_serialDesc;
  }
  v5l(encoder, value) {
    var tmp0_desc = this.u5l_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    tmp1_output.e1i(tmp0_desc, 0, $serializer_getInstance_116(), value.w5l_1);
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.v5l(encoder, value instanceof SearchBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.u5l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, $serializer_getInstance_116(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, $serializer_getInstance_116(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return SearchBody.x5l(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.u5l_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_116()];
  }
}
class Companion_117 {}
class $serializer_116 {
  constructor() {
    $serializer_instance_116 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.SearchResourceImpl.SearchCategoriesBody', this, 1);
    tmp0_serialDesc.c1o('room_events', false);
    this.y5l_1 = tmp0_serialDesc;
  }
  z5l(encoder, value) {
    var tmp0_desc = this.y5l_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    tmp1_output.e1i(tmp0_desc, 0, $serializer_getInstance_117(), value.a5m_1);
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.z5l(encoder, value instanceof SearchCategoriesBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.y5l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, $serializer_getInstance_117(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.z1g(tmp0_desc, 0, $serializer_getInstance_117(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return SearchCategoriesBody.b5m(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.y5l_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_117()];
  }
}
class Companion_118 {
  constructor() {
    Companion_instance_118 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.c5m_1 = [null, lazy(tmp_0, SearchResourceImpl$SearchRoomEventsBody$Companion$$childSerializers$_anonymous__dvhhb6), null, null];
  }
}
class $serializer_117 {
  constructor() {
    $serializer_instance_117 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.SearchResourceImpl.SearchRoomEventsBody', this, 4);
    tmp0_serialDesc.c1o('search_term', false);
    tmp0_serialDesc.c1o('keys', true);
    tmp0_serialDesc.c1o('order_by', true);
    tmp0_serialDesc.c1o('filter', true);
    this.d5m_1 = tmp0_serialDesc;
  }
  e5m(encoder, value) {
    var tmp0_desc = this.d5m_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_119().c5m_1;
    tmp1_output.c1i(tmp0_desc, 0, value.f5m_1);
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.g5m_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 1, tmp2_cached[1].w2(), value.g5m_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 2) ? true : !(value.h5m_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 2, StringSerializer_getInstance(), value.h5m_1);
    }
    if (tmp1_output.j1i(tmp0_desc, 3) ? true : !(value.i5m_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 3, $serializer_getInstance_118(), value.i5m_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.e5m(encoder, value instanceof SearchRoomEventsBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.d5m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.n1g(tmp0_desc);
    var tmp9_cached = Companion_getInstance_119().c5m_1;
    if (tmp8_input.c1h()) {
      tmp4_local0 = tmp8_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.b1h(tmp0_desc, 1, tmp9_cached[1].w2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.b1h(tmp0_desc, 3, $serializer_getInstance_118(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.b1h(tmp0_desc, 1, tmp9_cached[1].w2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.b1h(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.b1h(tmp0_desc, 3, $serializer_getInstance_118(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp8_input.o1g(tmp0_desc);
    return SearchRoomEventsBody.j5m(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  }
  l1c() {
    return this.d5m_1;
  }
  r1o() {
    var tmp0_cached = Companion_getInstance_119().c5m_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(tmp0_cached[1].w2()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_118())];
  }
}
class Companion_119 {
  constructor() {
    Companion_instance_119 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.k5m_1 = [lazy(tmp_0, SearchResourceImpl$SearchFilterBody$Companion$$childSerializers$_anonymous__ydckg6)];
  }
}
class $serializer_118 {
  constructor() {
    $serializer_instance_118 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.SearchResourceImpl.SearchFilterBody', this, 1);
    tmp0_serialDesc.c1o('rooms', true);
    this.l5m_1 = tmp0_serialDesc;
  }
  m5m(encoder, value) {
    var tmp0_desc = this.l5m_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    var tmp2_cached = Companion_getInstance_120().k5m_1;
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.n5m_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 0, tmp2_cached[0].w2(), value.n5m_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.m5m(encoder, value instanceof SearchFilterBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.l5m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    var tmp6_cached = Companion_getInstance_120().k5m_1;
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, tmp6_cached[0].w2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, tmp6_cached[0].w2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return SearchFilterBody.o5m(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.l5m_1;
  }
  r1o() {
    var tmp0_cached = Companion_getInstance_120().k5m_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].w2())];
  }
}
class SearchBody {
  constructor(searchCategories) {
    this.w5l_1 = searchCategories;
  }
  toString() {
    return 'SearchBody(searchCategories=' + this.w5l_1.toString() + ')';
  }
  hashCode() {
    return this.w5l_1.hashCode();
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SearchBody))
      return false;
    if (!this.w5l_1.equals(other.w5l_1))
      return false;
    return true;
  }
  static x5l(seen0, searchCategories, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_115().u5l_1);
    }
    var $this = createThis(this);
    $this.w5l_1 = searchCategories;
    return $this;
  }
}
class SearchCategoriesBody {
  constructor(roomEvents) {
    this.a5m_1 = roomEvents;
  }
  toString() {
    return 'SearchCategoriesBody(roomEvents=' + this.a5m_1.toString() + ')';
  }
  hashCode() {
    return this.a5m_1.hashCode();
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SearchCategoriesBody))
      return false;
    if (!this.a5m_1.equals(other.a5m_1))
      return false;
    return true;
  }
  static b5m(seen0, roomEvents, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_116().y5l_1);
    }
    var $this = createThis(this);
    $this.a5m_1 = roomEvents;
    return $this;
  }
}
class SearchRoomEventsBody {
  constructor(searchTerm, keys, orderBy, filter) {
    Companion_getInstance_119();
    keys = keys === VOID ? null : keys;
    orderBy = orderBy === VOID ? null : orderBy;
    filter = filter === VOID ? null : filter;
    this.f5m_1 = searchTerm;
    this.g5m_1 = keys;
    this.h5m_1 = orderBy;
    this.i5m_1 = filter;
  }
  toString() {
    return 'SearchRoomEventsBody(searchTerm=' + this.f5m_1 + ', keys=' + toString_0(this.g5m_1) + ', orderBy=' + this.h5m_1 + ', filter=' + toString(this.i5m_1) + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.f5m_1);
    result = imul(result, 31) + (this.g5m_1 == null ? 0 : hashCode(this.g5m_1)) | 0;
    result = imul(result, 31) + (this.h5m_1 == null ? 0 : getStringHashCode(this.h5m_1)) | 0;
    result = imul(result, 31) + (this.i5m_1 == null ? 0 : this.i5m_1.hashCode()) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SearchRoomEventsBody))
      return false;
    if (!(this.f5m_1 === other.f5m_1))
      return false;
    if (!equals(this.g5m_1, other.g5m_1))
      return false;
    if (!(this.h5m_1 == other.h5m_1))
      return false;
    if (!equals(this.i5m_1, other.i5m_1))
      return false;
    return true;
  }
  static j5m(seen0, searchTerm, keys, orderBy, filter, serializationConstructorMarker) {
    Companion_getInstance_119();
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_117().d5m_1);
    }
    var $this = createThis(this);
    $this.f5m_1 = searchTerm;
    if (0 === (seen0 & 2))
      $this.g5m_1 = null;
    else
      $this.g5m_1 = keys;
    if (0 === (seen0 & 4))
      $this.h5m_1 = null;
    else
      $this.h5m_1 = orderBy;
    if (0 === (seen0 & 8))
      $this.i5m_1 = null;
    else
      $this.i5m_1 = filter;
    return $this;
  }
}
class SearchFilterBody {
  constructor(rooms) {
    Companion_getInstance_120();
    rooms = rooms === VOID ? null : rooms;
    this.n5m_1 = rooms;
  }
  toString() {
    return 'SearchFilterBody(rooms=' + toString_0(this.n5m_1) + ')';
  }
  hashCode() {
    return this.n5m_1 == null ? 0 : hashCode(this.n5m_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SearchFilterBody))
      return false;
    if (!equals(this.n5m_1, other.n5m_1))
      return false;
    return true;
  }
  static o5m(seen0, rooms, serializationConstructorMarker) {
    Companion_getInstance_120();
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_118().l5m_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.n5m_1 = null;
    else
      $this.n5m_1 = rooms;
    return $this;
  }
}
class SearchResourceImpl$searchBlocking$slambda {
  constructor(this$0, $request) {
    this.p5m_1 = this$0;
    this.q5m_1 = $request;
  }
  *r5m($this$toBlocking, $completion) {
    return yield* this.p5m_1.g4b(this.q5m_1, $completion);
  }
  wc(p1, $completion) {
    return this.r5m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class SearchResourceImpl extends AbstractAuthResourceImpl {
  *f4b(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp0_elvis_lhs = request.searchTerm;
        var tmp = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp_0 = request.keys;
        var tmp_1 = request.orderBy;
        var tmp_2;
        if (!(request.roomIds == null)) {
          tmp_2 = new SearchFilterBody(request.roomIds);
        } else {
          tmp_2 = null;
        }
        var roomEvents = new SearchRoomEventsBody(tmp, tmp_0, tmp_1, tmp_2);
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new SearchBody(new SearchCategoriesBody(roomEvents));
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.f57_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.w1c();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(SearchBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.i1d(tmp$ret$4, obj);
        var response = yield* this.k55((new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/search').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1), 'next_batch', request.nextBatch).n41(body).s42($completion);
        if (response.v42_1 === 200) {
          var tmp0_0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj_0 = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_3 = tmp0_0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_4 = this_3.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_5 = serializer(this_4, createKType(getKClass(SearchResponse), arrayOf([]), false));
          var tmp$ret$8 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
          var tmp$ret$6 = this_3.j1d(tmp$ret$8, obj_0);
          // Inline function 'kotlin.also' call
          var this_6 = new Response(tmp$ret$6);
          this_6.limit = Companion_instance_83.of(response);
          this_6.json = response.z42();
          tmp$ret$0 = this_6;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  search(request) {
    return promisify(($completion) => this.f4b(request, $completion));
  }
  *g4b(request, $completion) {
    return this.search === protoOf(SearchResourceImpl).search ? (yield* this.f4b(request, $completion)) : (yield* await_0(this.search(request), $completion));
  }
  h4b(request) {
    return toBlocking(SearchResourceImpl$searchBlocking$slambda_0(this, request));
  }
}
class SyncResourceImpl$syncBlocking$slambda {
  constructor(this$0, $request) {
    this.u5m_1 = this$0;
    this.v5m_1 = $request;
  }
  *w5m($this$toBlocking, $completion) {
    return yield* this.u5m_1.j4b(this.v5m_1, $completion);
  }
  wc(p1, $completion) {
    return this.w5m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class SyncResourceImpl extends AbstractAuthResourceImpl {
  *i4b(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* this.k55(this.k55(this.k55(this.k55(this.k55((new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/sync').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1), 'since', request.since), 'timeout', request.timeout), 'filter', request.filter), 'full_state', request.fullState), 'set_presence', request.setPresence).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(SyncResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  sync(request) {
    return promisify(($completion) => this.i4b(request, $completion));
  }
  *j4b(request, $completion) {
    return this.sync === protoOf(SyncResourceImpl).sync ? (yield* this.i4b(request, $completion)) : (yield* await_0(this.sync(request), $completion));
  }
  k4b(request) {
    return toBlocking(SyncResourceImpl$syncBlocking$slambda_0(this, request));
  }
}
class Companion_120 {}
class $serializer_119 {
  constructor() {
    $serializer_instance_119 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.TagsResourceImpl.SetTagBody', this, 1);
    tmp0_serialDesc.c1o('order', true);
    this.z5m_1 = tmp0_serialDesc;
  }
  a5n(encoder, value) {
    var tmp0_desc = this.z5m_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    if (tmp1_output.j1i(tmp0_desc, 0) ? true : !(value.b5n_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 0, DoubleSerializer_getInstance(), value.b5n_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.a5n(encoder, value instanceof SetTagBody ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.z5m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.n1g(tmp0_desc);
    if (tmp5_input.c1h()) {
      tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, DoubleSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.b1h(tmp0_desc, 0, DoubleSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp5_input.o1g(tmp0_desc);
    return SetTagBody.c5n(tmp3_bitMask0, tmp4_local0, null);
  }
  l1c() {
    return this.z5m_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(DoubleSerializer_getInstance())];
  }
}
class SetTagBody {
  constructor(order) {
    order = order === VOID ? null : order;
    this.b5n_1 = order;
  }
  toString() {
    return 'SetTagBody(order=' + this.b5n_1 + ')';
  }
  hashCode() {
    return this.b5n_1 == null ? 0 : getNumberHashCode(this.b5n_1);
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SetTagBody))
      return false;
    if (!equals(this.b5n_1, other.b5n_1))
      return false;
    return true;
  }
  static c5n(seen0, order, serializationConstructorMarker) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_119().z5m_1);
    }
    var $this = createThis(this);
    if (0 === (seen0 & 1))
      $this.b5n_1 = null;
    else
      $this.b5n_1 = order;
    return $this;
  }
}
class TagsResourceImpl$getTagsBlocking$slambda {
  constructor(this$0, $userId, $roomId) {
    this.d5n_1 = this$0;
    this.e5n_1 = $userId;
    this.f5n_1 = $roomId;
  }
  *g5n($this$toBlocking, $completion) {
    return yield* this.d5n_1.m4b(this.e5n_1, this.f5n_1, $completion);
  }
  wc(p1, $completion) {
    return this.g5n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class TagsResourceImpl$setTagBlocking$slambda {
  constructor(this$0, $request) {
    this.h5n_1 = this$0;
    this.i5n_1 = $request;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.h5n_1.p4b(this.i5n_1, $completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class TagsResourceImpl$deleteTagBlocking$slambda {
  constructor(this$0, $request) {
    this.j5n_1 = this$0;
    this.k5n_1 = $request;
  }
  *q55($this$toBlocking, $completion) {
    return yield* this.j5n_1.s4b(this.k5n_1, $completion);
  }
  wc(p1, $completion) {
    return this.q55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class TagsResourceImpl extends AbstractAuthResourceImpl {
  *l4b(userId, roomId, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/user/' + userId + '/rooms/' + roomId + '/tags').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(TagsGetResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getTags(userId, roomId) {
    return promisify(($completion) => this.l4b(userId, roomId, $completion));
  }
  *m4b(userId, roomId, $completion) {
    return this.getTags === protoOf(TagsResourceImpl).getTags ? (yield* this.l4b(userId, roomId, $completion)) : (yield* await_0(this.getTags(userId, roomId), $completion));
  }
  n4b(userId, roomId) {
    return toBlocking(TagsResourceImpl$getTagsBlocking$slambda_0(this, userId, roomId));
  }
  *o4b(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.userId;
        var userId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = request.roomId;
        var roomId = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        var tmp2_elvis_lhs = request.tag;
        var tag = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
        var tmp0 = InternalUtility_getInstance();
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new SetTagBody(request.order);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.f57_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.w1c();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(SetTagBody), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.i1d(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/user/' + userId + '/rooms/' + roomId + '/tags/' + tag).p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41(body).t42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_3 = new ResponseUnit();
          this_3.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  setTag(request) {
    return promisify(($completion) => this.o4b(request, $completion));
  }
  *p4b(request, $completion) {
    return this.setTag === protoOf(TagsResourceImpl).setTag ? (yield* this.o4b(request, $completion)) : (yield* await_0(this.setTag(request), $completion));
  }
  q4b(request) {
    return toBlocking(TagsResourceImpl$setTagBlocking$slambda_0(this, request));
  }
  *r4b(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceedUnit' call
      try {
        var tmp0_elvis_lhs = request.userId;
        var userId = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = request.roomId;
        var roomId = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
        var tmp2_elvis_lhs = request.tag;
        var tag = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/user/' + userId + '/rooms/' + roomId + '/tags/' + tag).p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).u42($completion);
        if (response.v42_1 === 200) {
          // Inline function 'kotlin.also' call
          var this_0 = new ResponseUnit();
          this_0.limit = Companion_instance_83.of(response);
          tmp$ret$0 = this_0;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  deleteTag(request) {
    return promisify(($completion) => this.r4b(request, $completion));
  }
  *s4b(request, $completion) {
    return this.deleteTag === protoOf(TagsResourceImpl).deleteTag ? (yield* this.r4b(request, $completion)) : (yield* await_0(this.deleteTag(request), $completion));
  }
  t4b(request) {
    return toBlocking(TagsResourceImpl$deleteTagBlocking$slambda_0(this, request));
  }
}
class Companion_121 {}
class $serializer_120 {
  constructor() {
    $serializer_instance_120 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kmatrix.internal.UserDirectoryResourceImpl.SearchBody', this, 2);
    tmp0_serialDesc.c1o('search_term', false);
    tmp0_serialDesc.c1o('limit', true);
    this.n5n_1 = tmp0_serialDesc;
  }
  o5n(encoder, value) {
    var tmp0_desc = this.n5n_1;
    var tmp1_output = encoder.n1g(tmp0_desc);
    tmp1_output.c1i(tmp0_desc, 0, value.p5n_1);
    if (tmp1_output.j1i(tmp0_desc, 1) ? true : !(value.q5n_1 == null)) {
      tmp1_output.f1i(tmp0_desc, 1, IntSerializer_getInstance(), value.q5n_1);
    }
    tmp1_output.o1g(tmp0_desc);
  }
  y1c(encoder, value) {
    return this.o5n(encoder, value instanceof SearchBody_0 ? value : THROW_CCE());
  }
  z1c(decoder) {
    var tmp0_desc = this.n5n_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.n1g(tmp0_desc);
    if (tmp6_input.c1h()) {
      tmp4_local0 = tmp6_input.x1g(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.d1h(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.x1g(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.b1h(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException.x1d(tmp2_index);
        }
      }
    tmp6_input.o1g(tmp0_desc);
    return SearchBody_0.r5n(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  }
  l1c() {
    return this.n5n_1;
  }
  r1o() {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(IntSerializer_getInstance())];
  }
}
class SearchBody_0 {
  constructor(searchTerm, limit) {
    limit = limit === VOID ? null : limit;
    this.p5n_1 = searchTerm;
    this.q5n_1 = limit;
  }
  toString() {
    return 'SearchBody(searchTerm=' + this.p5n_1 + ', limit=' + this.q5n_1 + ')';
  }
  hashCode() {
    var result = getStringHashCode(this.p5n_1);
    result = imul(result, 31) + (this.q5n_1 == null ? 0 : this.q5n_1) | 0;
    return result;
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof SearchBody_0))
      return false;
    if (!(this.p5n_1 === other.p5n_1))
      return false;
    if (!(this.q5n_1 == other.q5n_1))
      return false;
    return true;
  }
  static r5n(seen0, searchTerm, limit, serializationConstructorMarker) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_120().n5n_1);
    }
    var $this = createThis(this);
    $this.p5n_1 = searchTerm;
    if (0 === (seen0 & 2))
      $this.q5n_1 = null;
    else
      $this.q5n_1 = limit;
    return $this;
  }
}
class UserDirectoryResourceImpl$searchBlocking$slambda {
  constructor(this$0, $request) {
    this.s5n_1 = this$0;
    this.t5n_1 = $request;
  }
  *u5n($this$toBlocking, $completion) {
    return yield* this.s5n_1.v4b(this.t5n_1, $completion);
  }
  wc(p1, $completion) {
    return this.u5n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class UserDirectoryResourceImpl extends AbstractAuthResourceImpl {
  *u4b(request, $completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var tmp0 = InternalUtility_getInstance();
        var tmp0_elvis_lhs = request.searchTerm;
        // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.toJson' call
        var obj = new SearchBody_0(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, request.limit);
        // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
        var this_0 = tmp0.f57_1;
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.w1c();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(SearchBody_0), arrayOf([]), false));
        var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        var body = this_0.i1d(tmp$ret$4, obj);
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/user_directory/search').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).n41(body).s42($completion);
        if (response.v42_1 === 200) {
          var tmp0_0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj_0 = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_3 = tmp0_0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_4 = this_3.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_5 = serializer(this_4, createKType(getKClass(UserDirectorySearchResponse), arrayOf([]), false));
          var tmp$ret$8 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
          var tmp$ret$6 = this_3.j1d(tmp$ret$8, obj_0);
          // Inline function 'kotlin.also' call
          var this_6 = new Response(tmp$ret$6);
          this_6.limit = Companion_instance_83.of(response);
          this_6.json = response.z42();
          tmp$ret$0 = this_6;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs_0 = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs_0 == null ? MatrixException.e43(e) : tmp0_elvis_lhs_0;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  search(request) {
    return promisify(($completion) => this.u4b(request, $completion));
  }
  *v4b(request, $completion) {
    return this.search === protoOf(UserDirectoryResourceImpl).search ? (yield* this.u4b(request, $completion)) : (yield* await_0(this.search(request), $completion));
  }
  w4b(request) {
    return toBlocking(UserDirectoryResourceImpl$searchBlocking$slambda_0(this, request));
  }
}
class VersionsResourceImpl$getVersionsBlocking$slambda {
  constructor(this$0) {
    this.x5n_1 = this$0;
  }
  *y5n($this$toBlocking, $completion) {
    return yield* this.x5n_1.y4b($completion);
  }
  wc(p1, $completion) {
    return this.y5n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class VersionsResourceImpl extends AbstractResourceImpl {
  *x4b($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/versions').o42(MediaType_getInstance().x55_1).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(VersionsGetResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getVersions() {
    return promisify(($completion) => this.x4b($completion));
  }
  *y4b($completion) {
    return this.getVersions === protoOf(VersionsResourceImpl).getVersions ? (yield* this.x4b($completion)) : (yield* await_0(this.getVersions(), $completion));
  }
  z4b() {
    return toBlocking(VersionsResourceImpl$getVersionsBlocking$slambda_0(this));
  }
}
class VoIPResourceImpl$getTurnServerBlocking$slambda {
  constructor(this$0) {
    this.a5o_1 = this$0;
  }
  *b5o($this$toBlocking, $completion) {
    return yield* this.a5o_1.b4c($completion);
  }
  wc(p1, $completion) {
    return this.b5o((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  }
}
class VoIPResourceImpl extends AbstractAuthResourceImpl {
  *a4c($completion) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'work.socialhub.kmatrix.internal.AbstractResourceImpl.proceed' call
      try {
        var response = yield* (new HttpRequest()).n42(this.j55_1 + '/_matrix/client/v3/voip/turnServer').p42('Authorization', this.i55()).o42(MediaType_getInstance().x55_1).r42($completion);
        if (response.v42_1 === 200) {
          var tmp0 = InternalUtility_getInstance();
          // Inline function 'work.socialhub.kmatrix.internal.InternalUtility.fromJson' call
          var obj = response.z42();
          // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
          var this_0 = tmp0.f57_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.w1c();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(VoIPGetTurnServerResponse), arrayOf([]), false));
          var tmp$ret$4 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$2 = this_0.j1d(tmp$ret$4, obj);
          // Inline function 'kotlin.also' call
          var this_3 = new Response(tmp$ret$2);
          this_3.limit = Companion_instance_83.of(response);
          this_3.json = response.z42();
          tmp$ret$0 = this_3;
          break $l$block;
        }
        throw MatrixException.f43(response.v42_1, response.z42());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          var tmp0_elvis_lhs = e instanceof MatrixException ? e : null;
          throw tmp0_elvis_lhs == null ? MatrixException.e43(e) : tmp0_elvis_lhs;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  getTurnServer() {
    return promisify(($completion) => this.a4c($completion));
  }
  *b4c($completion) {
    return this.getTurnServer === protoOf(VoIPResourceImpl).getTurnServer ? (yield* this.a4c($completion)) : (yield* await_0(this.getTurnServer(), $completion));
  }
  c4c() {
    return toBlocking(VoIPResourceImpl$getTurnServerBlocking$slambda_0(this));
  }
}
class MediaType {
  constructor() {
    MediaType_instance = this;
    this.x55_1 = Application_getInstance().h2r_1.toString();
  }
}
//endregion
function init_work_socialhub_kmatrix_MatrixException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.d43_1);
  _this__u8e3s4.b43_1 = null;
  _this__u8e3s4.c43_1 = null;
}
var MatrixFactory_instance;
function MatrixFactory_getInstance() {
  return MatrixFactory_instance;
}
function RegisterResponse$Companion$$childSerializers$_anonymous__fwt0di() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
var Companion_instance;
function Companion_getInstance_0() {
  if (Companion_instance === VOID)
    new Companion();
  return Companion_instance;
}
var $serializer_instance;
function $serializer_getInstance() {
  if ($serializer_instance === VOID)
    new $serializer();
  return $serializer_instance;
}
var Companion_instance_0;
function Companion_getInstance_1() {
  return Companion_instance_0;
}
var $serializer_instance_0;
function $serializer_getInstance_0() {
  if ($serializer_instance_0 === VOID)
    new $serializer_0();
  return $serializer_instance_0;
}
var Companion_instance_1;
function Companion_getInstance_2() {
  return Companion_instance_1;
}
var $serializer_instance_1;
function $serializer_getInstance_1() {
  if ($serializer_instance_1 === VOID)
    new $serializer_1();
  return $serializer_instance_1;
}
var Companion_instance_2;
function Companion_getInstance_3() {
  return Companion_instance_2;
}
var $serializer_instance_2;
function $serializer_getInstance_2() {
  if ($serializer_instance_2 === VOID)
    new $serializer_2();
  return $serializer_instance_2;
}
var Companion_instance_3;
function Companion_getInstance_4() {
  return Companion_instance_3;
}
var $serializer_instance_3;
function $serializer_getInstance_3() {
  if ($serializer_instance_3 === VOID)
    new $serializer_3();
  return $serializer_instance_3;
}
function CapabilitiesGetResponse$RoomVersions$Companion$$childSerializers$_anonymous__trldqp() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), StringSerializer_getInstance());
}
var Companion_instance_4;
function Companion_getInstance_5() {
  if (Companion_instance_4 === VOID)
    new Companion_4();
  return Companion_instance_4;
}
var $serializer_instance_4;
function $serializer_getInstance_4() {
  if ($serializer_instance_4 === VOID)
    new $serializer_4();
  return $serializer_instance_4;
}
var Companion_instance_5;
function Companion_getInstance_6() {
  return Companion_instance_5;
}
var $serializer_instance_5;
function $serializer_getInstance_5() {
  if ($serializer_instance_5 === VOID)
    new $serializer_5();
  return $serializer_instance_5;
}
var Companion_instance_6;
function Companion_getInstance_7() {
  return Companion_instance_6;
}
var $serializer_instance_6;
function $serializer_getInstance_6() {
  if ($serializer_instance_6 === VOID)
    new $serializer_6();
  return $serializer_instance_6;
}
function DevicesGetResponse$Companion$$childSerializers$_anonymous__plmvsg() {
  return new ReferenceArraySerializer(getKClass(Device), $serializer_getInstance_8());
}
var Companion_instance_7;
function Companion_getInstance_8() {
  if (Companion_instance_7 === VOID)
    new Companion_7();
  return Companion_instance_7;
}
var $serializer_instance_7;
function $serializer_getInstance_7() {
  if ($serializer_instance_7 === VOID)
    new $serializer_7();
  return $serializer_instance_7;
}
var Companion_instance_8;
function Companion_getInstance_9() {
  return Companion_instance_8;
}
var $serializer_instance_8;
function $serializer_getInstance_8() {
  if ($serializer_instance_8 === VOID)
    new $serializer_8();
  return $serializer_instance_8;
}
function DirectoryGetPublicRoomsResponse$Companion$$childSerializers$_anonymous__v8h9y5() {
  return new ReferenceArraySerializer(getKClass(PublicRoomChunk), $serializer_getInstance_10());
}
var Companion_instance_9;
function Companion_getInstance_10() {
  if (Companion_instance_9 === VOID)
    new Companion_9();
  return Companion_instance_9;
}
var $serializer_instance_9;
function $serializer_getInstance_9() {
  if ($serializer_instance_9 === VOID)
    new $serializer_9();
  return $serializer_instance_9;
}
function PublicRoomChunk$Companion$$childSerializers$_anonymous__jkytfj() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
var Companion_instance_10;
function Companion_getInstance_11() {
  if (Companion_instance_10 === VOID)
    new Companion_10();
  return Companion_instance_10;
}
var $serializer_instance_10;
function $serializer_getInstance_10() {
  if ($serializer_instance_10 === VOID)
    new $serializer_10();
  return $serializer_instance_10;
}
function DirectoryResolveAliasResponse$Companion$$childSerializers$_anonymous__obpzjs() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
var Companion_instance_11;
function Companion_getInstance_12() {
  if (Companion_instance_11 === VOID)
    new Companion_11();
  return Companion_instance_11;
}
var $serializer_instance_11;
function $serializer_getInstance_11() {
  if ($serializer_instance_11 === VOID)
    new $serializer_11();
  return $serializer_instance_11;
}
function EventsGetContextResponse$ContextEvent$Companion$$childSerializers$_anonymous__rd84k2() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
}
var Companion_instance_12;
function Companion_getInstance_13() {
  if (Companion_instance_12 === VOID)
    new Companion_12();
  return Companion_instance_12;
}
var $serializer_instance_12;
function $serializer_getInstance_12() {
  if ($serializer_instance_12 === VOID)
    new $serializer_12();
  return $serializer_instance_12;
}
function EventsGetContextResponse$Companion$$childSerializers$_anonymous__i1uze1() {
  return new ReferenceArraySerializer(getKClass(ContextEvent), $serializer_getInstance_12());
}
function EventsGetContextResponse$Companion$$childSerializers$_anonymous__i1uze1_0() {
  return new ReferenceArraySerializer(getKClass(ContextEvent), $serializer_getInstance_12());
}
function EventsGetContextResponse$Companion$$childSerializers$_anonymous__i1uze1_1() {
  return new ReferenceArraySerializer(getKClass(ContextEvent), $serializer_getInstance_12());
}
var Companion_instance_13;
function Companion_getInstance_14() {
  if (Companion_instance_13 === VOID)
    new Companion_13();
  return Companion_instance_13;
}
var $serializer_instance_13;
function $serializer_getInstance_13() {
  if ($serializer_instance_13 === VOID)
    new $serializer_13();
  return $serializer_instance_13;
}
function EventsGetEventResponse$Companion$$childSerializers$_anonymous__wbia8k() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
}
function EventsGetEventResponse$Companion$$childSerializers$_anonymous__wbia8k_0() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
}
var Companion_instance_14;
function Companion_getInstance_15() {
  if (Companion_instance_14 === VOID)
    new Companion_14();
  return Companion_instance_14;
}
var $serializer_instance_14;
function $serializer_getInstance_14() {
  if ($serializer_instance_14 === VOID)
    new $serializer_14();
  return $serializer_instance_14;
}
var Companion_instance_15;
function Companion_getInstance_16() {
  return Companion_instance_15;
}
var $serializer_instance_15;
function $serializer_getInstance_15() {
  if ($serializer_instance_15 === VOID)
    new $serializer_15();
  return $serializer_instance_15;
}
function FilterGetResponse$Companion$$childSerializers$_anonymous__p4prqt() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
var Companion_instance_16;
function Companion_getInstance_17() {
  if (Companion_instance_16 === VOID)
    new Companion_16();
  return Companion_instance_16;
}
var $serializer_instance_16;
function $serializer_getInstance_16() {
  if ($serializer_instance_16 === VOID)
    new $serializer_16();
  return $serializer_instance_16;
}
function EventFilter$Companion$$childSerializers$_anonymous__549l14() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
function EventFilter$Companion$$childSerializers$_anonymous__549l14_0() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
function EventFilter$Companion$$childSerializers$_anonymous__549l14_1() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
function EventFilter$Companion$$childSerializers$_anonymous__549l14_2() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
var Companion_instance_17;
function Companion_getInstance_18() {
  if (Companion_instance_17 === VOID)
    new Companion_17();
  return Companion_instance_17;
}
var $serializer_instance_17;
function $serializer_getInstance_17() {
  if ($serializer_instance_17 === VOID)
    new $serializer_17();
  return $serializer_instance_17;
}
function RoomFilter$Companion$$childSerializers$_anonymous__iuz08n() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
function RoomFilter$Companion$$childSerializers$_anonymous__iuz08n_0() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
var Companion_instance_18;
function Companion_getInstance_19() {
  if (Companion_instance_18 === VOID)
    new Companion_18();
  return Companion_instance_18;
}
var $serializer_instance_18;
function $serializer_getInstance_18() {
  if ($serializer_instance_18 === VOID)
    new $serializer_18();
  return $serializer_instance_18;
}
function RoomEventFilter$Companion$$childSerializers$_anonymous__h8wx9p() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
function RoomEventFilter$Companion$$childSerializers$_anonymous__h8wx9p_0() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
function RoomEventFilter$Companion$$childSerializers$_anonymous__h8wx9p_1() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
function RoomEventFilter$Companion$$childSerializers$_anonymous__h8wx9p_2() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
function RoomEventFilter$Companion$$childSerializers$_anonymous__h8wx9p_3() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
function RoomEventFilter$Companion$$childSerializers$_anonymous__h8wx9p_4() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
var Companion_instance_19;
function Companion_getInstance_20() {
  if (Companion_instance_19 === VOID)
    new Companion_19();
  return Companion_instance_19;
}
var $serializer_instance_19;
function $serializer_getInstance_19() {
  if ($serializer_instance_19 === VOID)
    new $serializer_19();
  return $serializer_instance_19;
}
function LoginGetLoginFlowsResponse$Companion$$childSerializers$_anonymous__dccxb4() {
  return new ReferenceArraySerializer(getKClass(LoginFlow), $serializer_getInstance_21());
}
var Companion_instance_20;
function Companion_getInstance_21() {
  if (Companion_instance_20 === VOID)
    new Companion_20();
  return Companion_instance_20;
}
var $serializer_instance_20;
function $serializer_getInstance_20() {
  if ($serializer_instance_20 === VOID)
    new $serializer_20();
  return $serializer_instance_20;
}
var Companion_instance_21;
function Companion_getInstance_22() {
  return Companion_instance_21;
}
var $serializer_instance_21;
function $serializer_getInstance_21() {
  if ($serializer_instance_21 === VOID)
    new $serializer_21();
  return $serializer_instance_21;
}
var Companion_instance_22;
function Companion_getInstance_23() {
  return Companion_instance_22;
}
var $serializer_instance_22;
function $serializer_getInstance_22() {
  if ($serializer_instance_22 === VOID)
    new $serializer_22();
  return $serializer_instance_22;
}
var Companion_instance_23;
function Companion_getInstance_24() {
  return Companion_instance_23;
}
var $serializer_instance_23;
function $serializer_getInstance_23() {
  if ($serializer_instance_23 === VOID)
    new $serializer_23();
  return $serializer_instance_23;
}
var Companion_instance_24;
function Companion_getInstance_25() {
  return Companion_instance_24;
}
var $serializer_instance_24;
function $serializer_getInstance_24() {
  if ($serializer_instance_24 === VOID)
    new $serializer_24();
  return $serializer_instance_24;
}
var Companion_instance_25;
function Companion_getInstance_26() {
  return Companion_instance_25;
}
var $serializer_instance_25;
function $serializer_getInstance_25() {
  if ($serializer_instance_25 === VOID)
    new $serializer_25();
  return $serializer_instance_25;
}
function NotificationsGetResponse$Notification$Companion$$childSerializers$_anonymous__yeqkcq() {
  return new ReferenceArraySerializer(getKClass(JsonElement), JsonElementSerializer_getInstance());
}
var Companion_instance_26;
function Companion_getInstance_27() {
  if (Companion_instance_26 === VOID)
    new Companion_26();
  return Companion_instance_26;
}
var $serializer_instance_26;
function $serializer_getInstance_26() {
  if ($serializer_instance_26 === VOID)
    new $serializer_26();
  return $serializer_instance_26;
}
function NotificationsGetResponse$Event$Companion$$childSerializers$_anonymous__vjt0yj() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
}
var Companion_instance_27;
function Companion_getInstance_28() {
  if (Companion_instance_27 === VOID)
    new Companion_27();
  return Companion_instance_27;
}
var $serializer_instance_27;
function $serializer_getInstance_27() {
  if ($serializer_instance_27 === VOID)
    new $serializer_27();
  return $serializer_instance_27;
}
function NotificationsGetResponse$Companion$$childSerializers$_anonymous__27uumd() {
  return new ReferenceArraySerializer(getKClass(Notification), $serializer_getInstance_26());
}
var Companion_instance_28;
function Companion_getInstance_29() {
  if (Companion_instance_28 === VOID)
    new Companion_28();
  return Companion_instance_28;
}
var $serializer_instance_28;
function $serializer_getInstance_28() {
  if ($serializer_instance_28 === VOID)
    new $serializer_28();
  return $serializer_instance_28;
}
var Companion_instance_29;
function Companion_getInstance_30() {
  return Companion_instance_29;
}
var $serializer_instance_29;
function $serializer_getInstance_29() {
  if ($serializer_instance_29 === VOID)
    new $serializer_29();
  return $serializer_instance_29;
}
var Companion_instance_30;
function Companion_getInstance_31() {
  return Companion_instance_30;
}
var $serializer_instance_30;
function $serializer_getInstance_30() {
  if ($serializer_instance_30 === VOID)
    new $serializer_30();
  return $serializer_instance_30;
}
var Companion_instance_31;
function Companion_getInstance_32() {
  return Companion_instance_31;
}
var $serializer_instance_31;
function $serializer_getInstance_31() {
  if ($serializer_instance_31 === VOID)
    new $serializer_31();
  return $serializer_instance_31;
}
var Companion_instance_32;
function Companion_getInstance_33() {
  return Companion_instance_32;
}
var $serializer_instance_32;
function $serializer_getInstance_32() {
  if ($serializer_instance_32 === VOID)
    new $serializer_32();
  return $serializer_instance_32;
}
var Companion_instance_33;
function Companion_getInstance_34() {
  return Companion_instance_33;
}
var $serializer_instance_33;
function $serializer_getInstance_33() {
  if ($serializer_instance_33 === VOID)
    new $serializer_33();
  return $serializer_instance_33;
}
var Companion_instance_34;
function Companion_getInstance_35() {
  return Companion_instance_34;
}
var $serializer_instance_34;
function $serializer_getInstance_34() {
  if ($serializer_instance_34 === VOID)
    new $serializer_34();
  return $serializer_instance_34;
}
function PushRuleset$Companion$$childSerializers$_anonymous__pl3zlq() {
  return new ReferenceArraySerializer(getKClass(PushRule), $serializer_getInstance_36());
}
function PushRuleset$Companion$$childSerializers$_anonymous__pl3zlq_0() {
  return new ReferenceArraySerializer(getKClass(PushRule), $serializer_getInstance_36());
}
function PushRuleset$Companion$$childSerializers$_anonymous__pl3zlq_1() {
  return new ReferenceArraySerializer(getKClass(PushRule), $serializer_getInstance_36());
}
function PushRuleset$Companion$$childSerializers$_anonymous__pl3zlq_2() {
  return new ReferenceArraySerializer(getKClass(PushRule), $serializer_getInstance_36());
}
function PushRuleset$Companion$$childSerializers$_anonymous__pl3zlq_3() {
  return new ReferenceArraySerializer(getKClass(PushRule), $serializer_getInstance_36());
}
var Companion_instance_35;
function Companion_getInstance_36() {
  if (Companion_instance_35 === VOID)
    new Companion_35();
  return Companion_instance_35;
}
var $serializer_instance_35;
function $serializer_getInstance_35() {
  if ($serializer_instance_35 === VOID)
    new $serializer_35();
  return $serializer_instance_35;
}
function PushRule$Companion$$childSerializers$_anonymous__penbik() {
  return new ReferenceArraySerializer(getKClass(PushCondition), $serializer_getInstance_37());
}
function PushRule$Companion$$childSerializers$_anonymous__penbik_0() {
  var tmp = PrimitiveClasses_getInstance().ze();
  var tmp_0 = PrimitiveClasses_getInstance().ze();
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp$ret$0 = [];
  return new ReferenceArraySerializer(tmp, get_nullable(new ContextualSerializer(tmp_0, null, tmp$ret$0)));
}
var Companion_instance_36;
function Companion_getInstance_37() {
  if (Companion_instance_36 === VOID)
    new Companion_36();
  return Companion_instance_36;
}
var $serializer_instance_36;
function $serializer_getInstance_36() {
  if ($serializer_instance_36 === VOID)
    new $serializer_36();
  return $serializer_instance_36;
}
var Companion_instance_37;
function Companion_getInstance_38() {
  return Companion_instance_37;
}
var $serializer_instance_37;
function $serializer_getInstance_37() {
  if ($serializer_instance_37 === VOID)
    new $serializer_37();
  return $serializer_instance_37;
}
var Companion_instance_38;
function Companion_getInstance_39() {
  return Companion_instance_38;
}
var $serializer_instance_38;
function $serializer_getInstance_38() {
  if ($serializer_instance_38 === VOID)
    new $serializer_38();
  return $serializer_instance_38;
}
var Companion_instance_39;
function Companion_getInstance_40() {
  return Companion_instance_39;
}
var $serializer_instance_39;
function $serializer_getInstance_39() {
  if ($serializer_instance_39 === VOID)
    new $serializer_39();
  return $serializer_instance_39;
}
function PushersGetResponse$Companion$$childSerializers$_anonymous__yfz0gv() {
  return new ReferenceArraySerializer(getKClass(Pusher), $serializer_getInstance_38());
}
var Companion_instance_40;
function Companion_getInstance_41() {
  if (Companion_instance_40 === VOID)
    new Companion_40();
  return Companion_instance_40;
}
var $serializer_instance_40;
function $serializer_getInstance_40() {
  if ($serializer_instance_40 === VOID)
    new $serializer_40();
  return $serializer_instance_40;
}
function RelationsGetResponse$RelationEvent$Companion$$childSerializers$_anonymous__t8e6vk() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
}
var Companion_instance_41;
function Companion_getInstance_42() {
  if (Companion_instance_41 === VOID)
    new Companion_41();
  return Companion_instance_41;
}
var $serializer_instance_41;
function $serializer_getInstance_41() {
  if ($serializer_instance_41 === VOID)
    new $serializer_41();
  return $serializer_instance_41;
}
function RelationsGetResponse$Companion$$childSerializers$_anonymous__yx9p1y() {
  return new ReferenceArraySerializer(getKClass(RelationEvent), $serializer_getInstance_41());
}
var Companion_instance_42;
function Companion_getInstance_43() {
  if (Companion_instance_42 === VOID)
    new Companion_42();
  return Companion_instance_42;
}
var $serializer_instance_42;
function $serializer_getInstance_42() {
  if ($serializer_instance_42 === VOID)
    new $serializer_42();
  return $serializer_instance_42;
}
function ThreadsGetResponse$ThreadEvent$Companion$$childSerializers$_anonymous__bxivao() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
}
function ThreadsGetResponse$ThreadEvent$Companion$$childSerializers$_anonymous__bxivao_0() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
}
var Companion_instance_43;
function Companion_getInstance_44() {
  if (Companion_instance_43 === VOID)
    new Companion_43();
  return Companion_instance_43;
}
var $serializer_instance_43;
function $serializer_getInstance_43() {
  if ($serializer_instance_43 === VOID)
    new $serializer_43();
  return $serializer_instance_43;
}
function ThreadsGetResponse$Companion$$childSerializers$_anonymous__ddk0mc() {
  return new ReferenceArraySerializer(getKClass(ThreadEvent), $serializer_getInstance_43());
}
var Companion_instance_44;
function Companion_getInstance_45() {
  if (Companion_instance_44 === VOID)
    new Companion_44();
  return Companion_instance_44;
}
var $serializer_instance_44;
function $serializer_getInstance_44() {
  if ($serializer_instance_44 === VOID)
    new $serializer_44();
  return $serializer_instance_44;
}
var Companion_instance_45;
function Companion_getInstance_46() {
  return Companion_instance_45;
}
var $serializer_instance_45;
function $serializer_getInstance_45() {
  if ($serializer_instance_45 === VOID)
    new $serializer_45();
  return $serializer_instance_45;
}
function RoomsGetJoinedMembersResponse$Companion$$childSerializers$_anonymous__9y13pz() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), $serializer_getInstance_47());
}
var Companion_instance_46;
function Companion_getInstance_47() {
  if (Companion_instance_46 === VOID)
    new Companion_46();
  return Companion_instance_46;
}
var $serializer_instance_46;
function $serializer_getInstance_46() {
  if ($serializer_instance_46 === VOID)
    new $serializer_46();
  return $serializer_instance_46;
}
var Companion_instance_47;
function Companion_getInstance_48() {
  return Companion_instance_47;
}
var $serializer_instance_47;
function $serializer_getInstance_47() {
  if ($serializer_instance_47 === VOID)
    new $serializer_47();
  return $serializer_instance_47;
}
function RoomsGetJoinedRoomsResponse$Companion$$childSerializers$_anonymous__wacquw() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
var Companion_instance_48;
function Companion_getInstance_49() {
  if (Companion_instance_48 === VOID)
    new Companion_48();
  return Companion_instance_48;
}
var $serializer_instance_48;
function $serializer_getInstance_48() {
  if ($serializer_instance_48 === VOID)
    new $serializer_48();
  return $serializer_instance_48;
}
function RoomsGetMembersResponse$Companion$$childSerializers$_anonymous__w4ei9e() {
  return new ReferenceArraySerializer(getKClass(RoomEvent), $serializer_getInstance_51());
}
var Companion_instance_49;
function Companion_getInstance_50() {
  if (Companion_instance_49 === VOID)
    new Companion_49();
  return Companion_instance_49;
}
var $serializer_instance_49;
function $serializer_getInstance_49() {
  if ($serializer_instance_49 === VOID)
    new $serializer_49();
  return $serializer_instance_49;
}
function RoomsGetMessagesResponse$Companion$$childSerializers$_anonymous__vgip0f() {
  return new ReferenceArraySerializer(getKClass(RoomEvent), $serializer_getInstance_51());
}
function RoomsGetMessagesResponse$Companion$$childSerializers$_anonymous__vgip0f_0() {
  return new ReferenceArraySerializer(getKClass(RoomEvent), $serializer_getInstance_51());
}
var Companion_instance_50;
function Companion_getInstance_51() {
  if (Companion_instance_50 === VOID)
    new Companion_50();
  return Companion_instance_50;
}
var $serializer_instance_50;
function $serializer_getInstance_50() {
  if ($serializer_instance_50 === VOID)
    new $serializer_50();
  return $serializer_instance_50;
}
function RoomEvent$Companion$$childSerializers$_anonymous__onomqd() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), get_nullable(AnySerializer_getInstance()));
}
function RoomEvent$Companion$$childSerializers$_anonymous__onomqd_0() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), get_nullable(AnySerializer_getInstance()));
}
var Companion_instance_51;
function Companion_getInstance_52() {
  if (Companion_instance_51 === VOID)
    new Companion_51();
  return Companion_instance_51;
}
var $serializer_instance_51;
function $serializer_getInstance_51() {
  if ($serializer_instance_51 === VOID)
    new $serializer_51();
  return $serializer_instance_51;
}
var Companion_instance_52;
function Companion_getInstance_53() {
  return Companion_instance_52;
}
var $serializer_instance_52;
function $serializer_getInstance_52() {
  if ($serializer_instance_52 === VOID)
    new $serializer_52();
  return $serializer_instance_52;
}
function RoomsGetStateEventResponse$Companion$$childSerializers$_anonymous__xh3qn2() {
  var tmp = StringSerializer_getInstance();
  var tmp_0 = PrimitiveClasses_getInstance().ze();
  // Inline function 'kotlin.arrayOf' call
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp$ret$0 = [];
  return new LinkedHashMapSerializer(tmp, get_nullable(new ContextualSerializer(tmp_0, null, tmp$ret$0)));
}
var Companion_instance_53;
function Companion_getInstance_54() {
  if (Companion_instance_53 === VOID)
    new Companion_53();
  return Companion_instance_53;
}
var $serializer_instance_53;
function $serializer_getInstance_53() {
  if ($serializer_instance_53 === VOID)
    new $serializer_53();
  return $serializer_instance_53;
}
function RoomsStateEvent$Companion$$childSerializers$_anonymous__q4r93d() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
}
var Companion_instance_54;
function Companion_getInstance_55() {
  if (Companion_instance_54 === VOID)
    new Companion_54();
  return Companion_instance_54;
}
var $serializer_instance_54;
function $serializer_getInstance_54() {
  if ($serializer_instance_54 === VOID)
    new $serializer_54();
  return $serializer_instance_54;
}
var Companion_instance_55;
function Companion_getInstance_56() {
  return Companion_instance_55;
}
var $serializer_instance_55;
function $serializer_getInstance_55() {
  if ($serializer_instance_55 === VOID)
    new $serializer_55();
  return $serializer_instance_55;
}
var Companion_instance_56;
function Companion_getInstance_57() {
  return Companion_instance_56;
}
var $serializer_instance_56;
function $serializer_getInstance_56() {
  if ($serializer_instance_56 === VOID)
    new $serializer_56();
  return $serializer_instance_56;
}
var Companion_instance_57;
function Companion_getInstance_58() {
  return Companion_instance_57;
}
var $serializer_instance_57;
function $serializer_getInstance_57() {
  if ($serializer_instance_57 === VOID)
    new $serializer_57();
  return $serializer_instance_57;
}
var Companion_instance_58;
function Companion_getInstance_59() {
  return Companion_instance_58;
}
var $serializer_instance_58;
function $serializer_getInstance_58() {
  if ($serializer_instance_58 === VOID)
    new $serializer_58();
  return $serializer_instance_58;
}
var Companion_instance_59;
function Companion_getInstance_60() {
  return Companion_instance_59;
}
var $serializer_instance_59;
function $serializer_getInstance_59() {
  if ($serializer_instance_59 === VOID)
    new $serializer_59();
  return $serializer_instance_59;
}
var Companion_instance_60;
function Companion_getInstance_61() {
  return Companion_instance_60;
}
var $serializer_instance_60;
function $serializer_getInstance_60() {
  if ($serializer_instance_60 === VOID)
    new $serializer_60();
  return $serializer_instance_60;
}
function SearchRoomEvents$Companion$$childSerializers$_anonymous__epeb9q() {
  return new ReferenceArraySerializer(getKClass(SearchResult), $serializer_getInstance_62());
}
var Companion_instance_61;
function Companion_getInstance_62() {
  if (Companion_instance_61 === VOID)
    new Companion_61();
  return Companion_instance_61;
}
var $serializer_instance_61;
function $serializer_getInstance_61() {
  if ($serializer_instance_61 === VOID)
    new $serializer_61();
  return $serializer_instance_61;
}
var Companion_instance_62;
function Companion_getInstance_63() {
  return Companion_instance_62;
}
var $serializer_instance_62;
function $serializer_getInstance_62() {
  if ($serializer_instance_62 === VOID)
    new $serializer_62();
  return $serializer_instance_62;
}
var Companion_instance_63;
function Companion_getInstance_64() {
  return Companion_instance_63;
}
var $serializer_instance_63;
function $serializer_getInstance_63() {
  if ($serializer_instance_63 === VOID)
    new $serializer_63();
  return $serializer_instance_63;
}
var Companion_instance_64;
function Companion_getInstance_65() {
  return Companion_instance_64;
}
var $serializer_instance_64;
function $serializer_getInstance_64() {
  if ($serializer_instance_64 === VOID)
    new $serializer_64();
  return $serializer_instance_64;
}
var Companion_instance_65;
function Companion_getInstance_66() {
  return Companion_instance_65;
}
var $serializer_instance_65;
function $serializer_getInstance_65() {
  if ($serializer_instance_65 === VOID)
    new $serializer_65();
  return $serializer_instance_65;
}
function SyncRooms$Companion$$childSerializers$_anonymous__ebc099() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), $serializer_getInstance_67());
}
function SyncRooms$Companion$$childSerializers$_anonymous__ebc099_0() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), $serializer_getInstance_68());
}
function SyncRooms$Companion$$childSerializers$_anonymous__ebc099_1() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), $serializer_getInstance_69());
}
var Companion_instance_66;
function Companion_getInstance_67() {
  if (Companion_instance_66 === VOID)
    new Companion_66();
  return Companion_instance_66;
}
var $serializer_instance_66;
function $serializer_getInstance_66() {
  if ($serializer_instance_66 === VOID)
    new $serializer_66();
  return $serializer_instance_66;
}
var Companion_instance_67;
function Companion_getInstance_68() {
  return Companion_instance_67;
}
var $serializer_instance_67;
function $serializer_getInstance_67() {
  if ($serializer_instance_67 === VOID)
    new $serializer_67();
  return $serializer_instance_67;
}
var Companion_instance_68;
function Companion_getInstance_69() {
  return Companion_instance_68;
}
var $serializer_instance_68;
function $serializer_getInstance_68() {
  if ($serializer_instance_68 === VOID)
    new $serializer_68();
  return $serializer_instance_68;
}
var Companion_instance_69;
function Companion_getInstance_70() {
  return Companion_instance_69;
}
var $serializer_instance_69;
function $serializer_getInstance_69() {
  if ($serializer_instance_69 === VOID)
    new $serializer_69();
  return $serializer_instance_69;
}
function SyncTimeline$Companion$$childSerializers$_anonymous__av0vyq() {
  return new ReferenceArraySerializer(getKClass(RoomEvent), $serializer_getInstance_51());
}
var Companion_instance_70;
function Companion_getInstance_71() {
  if (Companion_instance_70 === VOID)
    new Companion_70();
  return Companion_instance_70;
}
var $serializer_instance_70;
function $serializer_getInstance_70() {
  if ($serializer_instance_70 === VOID)
    new $serializer_70();
  return $serializer_instance_70;
}
function SyncState$Companion$$childSerializers$_anonymous__d2b0i4() {
  return new ReferenceArraySerializer(getKClass(RoomEvent), $serializer_getInstance_51());
}
var Companion_instance_71;
function Companion_getInstance_72() {
  if (Companion_instance_71 === VOID)
    new Companion_71();
  return Companion_instance_71;
}
var $serializer_instance_71;
function $serializer_getInstance_71() {
  if ($serializer_instance_71 === VOID)
    new $serializer_71();
  return $serializer_instance_71;
}
function SyncAccountData$Companion$$childSerializers$_anonymous__1rtoxe() {
  return new ReferenceArraySerializer(getKClass(RoomEvent), $serializer_getInstance_51());
}
var Companion_instance_72;
function Companion_getInstance_73() {
  if (Companion_instance_72 === VOID)
    new Companion_72();
  return Companion_instance_72;
}
var $serializer_instance_72;
function $serializer_getInstance_72() {
  if ($serializer_instance_72 === VOID)
    new $serializer_72();
  return $serializer_instance_72;
}
function SyncEphemeral$Companion$$childSerializers$_anonymous__rh13c8() {
  return new ReferenceArraySerializer(getKClass(RoomEvent), $serializer_getInstance_51());
}
var Companion_instance_73;
function Companion_getInstance_74() {
  if (Companion_instance_73 === VOID)
    new Companion_73();
  return Companion_instance_73;
}
var $serializer_instance_73;
function $serializer_getInstance_73() {
  if ($serializer_instance_73 === VOID)
    new $serializer_73();
  return $serializer_instance_73;
}
var Companion_instance_74;
function Companion_getInstance_75() {
  return Companion_instance_74;
}
var $serializer_instance_74;
function $serializer_getInstance_74() {
  if ($serializer_instance_74 === VOID)
    new $serializer_74();
  return $serializer_instance_74;
}
function SyncInviteState$Companion$$childSerializers$_anonymous__2iq9z1() {
  return new ReferenceArraySerializer(getKClass(RoomEvent), $serializer_getInstance_51());
}
var Companion_instance_75;
function Companion_getInstance_76() {
  if (Companion_instance_75 === VOID)
    new Companion_75();
  return Companion_instance_75;
}
var $serializer_instance_75;
function $serializer_getInstance_75() {
  if ($serializer_instance_75 === VOID)
    new $serializer_75();
  return $serializer_instance_75;
}
function TagsGetResponse$Companion$$childSerializers$_anonymous__3nkk8k() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), $serializer_getInstance_77());
}
var Companion_instance_76;
function Companion_getInstance_77() {
  if (Companion_instance_76 === VOID)
    new Companion_76();
  return Companion_instance_76;
}
var $serializer_instance_76;
function $serializer_getInstance_76() {
  if ($serializer_instance_76 === VOID)
    new $serializer_76();
  return $serializer_instance_76;
}
var Companion_instance_77;
function Companion_getInstance_78() {
  return Companion_instance_77;
}
var $serializer_instance_77;
function $serializer_getInstance_77() {
  if ($serializer_instance_77 === VOID)
    new $serializer_77();
  return $serializer_instance_77;
}
function UserDirectorySearchResponse$Companion$$childSerializers$_anonymous__u6z7kx() {
  return new ReferenceArraySerializer(getKClass(UserDirectoryUser), $serializer_getInstance_79());
}
var Companion_instance_78;
function Companion_getInstance_79() {
  if (Companion_instance_78 === VOID)
    new Companion_78();
  return Companion_instance_78;
}
var $serializer_instance_78;
function $serializer_getInstance_78() {
  if ($serializer_instance_78 === VOID)
    new $serializer_78();
  return $serializer_instance_78;
}
var Companion_instance_79;
function Companion_getInstance_80() {
  return Companion_instance_79;
}
var $serializer_instance_79;
function $serializer_getInstance_79() {
  if ($serializer_instance_79 === VOID)
    new $serializer_79();
  return $serializer_instance_79;
}
function VersionsGetResponse$Companion$$childSerializers$_anonymous__fupxo2() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
function VersionsGetResponse$Companion$$childSerializers$_anonymous__fupxo2_0() {
  return new LinkedHashMapSerializer(StringSerializer_getInstance(), BooleanSerializer_getInstance());
}
var Companion_instance_80;
function Companion_getInstance_81() {
  if (Companion_instance_80 === VOID)
    new Companion_80();
  return Companion_instance_80;
}
var $serializer_instance_80;
function $serializer_getInstance_80() {
  if ($serializer_instance_80 === VOID)
    new $serializer_80();
  return $serializer_instance_80;
}
function VoIPGetTurnServerResponse$Companion$$childSerializers$_anonymous__huuw5p() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
var Companion_instance_81;
function Companion_getInstance_82() {
  if (Companion_instance_81 === VOID)
    new Companion_81();
  return Companion_instance_81;
}
var $serializer_instance_81;
function $serializer_getInstance_81() {
  if ($serializer_instance_81 === VOID)
    new $serializer_81();
  return $serializer_instance_81;
}
var Companion_instance_82;
function Companion_getInstance_83() {
  return Companion_instance_82;
}
var $serializer_instance_82;
function $serializer_getInstance_82() {
  if ($serializer_instance_82 === VOID)
    new $serializer_82();
  return $serializer_instance_82;
}
var Companion_instance_83;
function Companion_getInstance_84() {
  return Companion_instance_83;
}
function AccountDataResourceImpl$getAccountDataBlocking$slambda_0(this$0, $request) {
  var i = new AccountDataResourceImpl$getAccountDataBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.n55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountDataResourceImpl$setAccountDataBlocking$slambda_0(this$0, $request) {
  var i = new AccountDataResourceImpl$setAccountDataBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountDataResourceImpl$getRoomAccountDataBlocking$slambda_0(this$0, $request) {
  var i = new AccountDataResourceImpl$getRoomAccountDataBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.n55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountDataResourceImpl$setRoomAccountDataBlocking$slambda_0(this$0, $request) {
  var i = new AccountDataResourceImpl$setRoomAccountDataBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
var Companion_instance_84;
function Companion_getInstance_85() {
  return Companion_instance_84;
}
var $serializer_instance_83;
function $serializer_getInstance_83() {
  if ($serializer_instance_83 === VOID)
    new $serializer_83();
  return $serializer_instance_83;
}
var Companion_instance_85;
function Companion_getInstance_86() {
  return Companion_instance_85;
}
var $serializer_instance_84;
function $serializer_getInstance_84() {
  if ($serializer_instance_84 === VOID)
    new $serializer_84();
  return $serializer_instance_84;
}
var Companion_instance_86;
function Companion_getInstance_87() {
  return Companion_instance_86;
}
var $serializer_instance_85;
function $serializer_getInstance_85() {
  if ($serializer_instance_85 === VOID)
    new $serializer_85();
  return $serializer_instance_85;
}
function AccountsResourceImpl$whoamiBlocking$slambda_0(this$0) {
  var i = new AccountsResourceImpl$whoamiBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.v56($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$logoutBlocking$slambda_0(this$0) {
  var i = new AccountsResourceImpl$logoutBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$logoutAllBlocking$slambda_0(this$0) {
  var i = new AccountsResourceImpl$logoutAllBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$registerBlocking$slambda_0(this$0, $request) {
  var i = new AccountsResourceImpl$registerBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.a57($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function AccountsResourceImpl$changePasswordBlocking$slambda_0(this$0, $request) {
  var i = new AccountsResourceImpl$changePasswordBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function CapabilitiesResourceImpl$getCapabilitiesBlocking$slambda_0(this$0) {
  var i = new CapabilitiesResourceImpl$getCapabilitiesBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.h57($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
var Companion_instance_87;
function Companion_getInstance_88() {
  return Companion_instance_87;
}
var $serializer_instance_86;
function $serializer_getInstance_86() {
  if ($serializer_instance_86 === VOID)
    new $serializer_86();
  return $serializer_instance_86;
}
function DevicesResourceImpl$getDevicesBlocking$slambda_0(this$0) {
  var i = new DevicesResourceImpl$getDevicesBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.p57($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function DevicesResourceImpl$getDeviceBlocking$slambda_0(this$0, $deviceId) {
  var i = new DevicesResourceImpl$getDeviceBlocking$slambda(this$0, $deviceId);
  var l = ($this$toBlocking, $completion) => i.s57($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function DevicesResourceImpl$updateDeviceBlocking$slambda_0(this$0, $request) {
  var i = new DevicesResourceImpl$updateDeviceBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function DevicesResourceImpl$deleteDeviceBlocking$slambda_0(this$0, $request) {
  var i = new DevicesResourceImpl$deleteDeviceBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
var Companion_instance_88;
function Companion_getInstance_89() {
  return Companion_instance_88;
}
var $serializer_instance_87;
function $serializer_getInstance_87() {
  if ($serializer_instance_87 === VOID)
    new $serializer_87();
  return $serializer_instance_87;
}
function DirectoryResourceImpl$resolveAliasBlocking$slambda_0(this$0, $roomAlias) {
  var i = new DirectoryResourceImpl$resolveAliasBlocking$slambda(this$0, $roomAlias);
  var l = ($this$toBlocking, $completion) => i.f58($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function DirectoryResourceImpl$setAliasBlocking$slambda_0(this$0, $request) {
  var i = new DirectoryResourceImpl$setAliasBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function DirectoryResourceImpl$deleteAliasBlocking$slambda_0(this$0, $roomAlias) {
  var i = new DirectoryResourceImpl$deleteAliasBlocking$slambda(this$0, $roomAlias);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function DirectoryResourceImpl$getPublicRoomsBlocking$slambda_0(this$0, $request) {
  var i = new DirectoryResourceImpl$getPublicRoomsBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.m58($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function EventsResourceImpl$getEventBlocking$slambda_0(this$0, $roomId, $eventId) {
  var i = new EventsResourceImpl$getEventBlocking$slambda(this$0, $roomId, $eventId);
  var l = ($this$toBlocking, $completion) => i.s58($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function EventsResourceImpl$getContextBlocking$slambda_0(this$0, $request) {
  var i = new EventsResourceImpl$getContextBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.v58($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
var Companion_instance_89;
function Companion_getInstance_90() {
  return Companion_instance_89;
}
var $serializer_instance_88;
function $serializer_getInstance_88() {
  if ($serializer_instance_88 === VOID)
    new $serializer_88();
  return $serializer_instance_88;
}
function FilterResourceImpl$CreateFilterRoomFilter$Companion$$childSerializers$_anonymous__x9bbx7() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
function FilterResourceImpl$CreateFilterRoomFilter$Companion$$childSerializers$_anonymous__x9bbx7_0() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
var Companion_instance_90;
function Companion_getInstance_91() {
  if (Companion_instance_90 === VOID)
    new Companion_90();
  return Companion_instance_90;
}
var $serializer_instance_89;
function $serializer_getInstance_89() {
  if ($serializer_instance_89 === VOID)
    new $serializer_89();
  return $serializer_instance_89;
}
function FilterResourceImpl$CreateFilterRoomEventFilter$Companion$$childSerializers$_anonymous__ofao4b() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
function FilterResourceImpl$CreateFilterRoomEventFilter$Companion$$childSerializers$_anonymous__ofao4b_0() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
function FilterResourceImpl$CreateFilterRoomEventFilter$Companion$$childSerializers$_anonymous__ofao4b_1() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
function FilterResourceImpl$CreateFilterRoomEventFilter$Companion$$childSerializers$_anonymous__ofao4b_2() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
var Companion_instance_91;
function Companion_getInstance_92() {
  if (Companion_instance_91 === VOID)
    new Companion_91();
  return Companion_instance_91;
}
var $serializer_instance_90;
function $serializer_getInstance_90() {
  if ($serializer_instance_90 === VOID)
    new $serializer_90();
  return $serializer_instance_90;
}
function FilterResourceImpl$createFilterBlocking$slambda_0(this$0, $request) {
  var i = new FilterResourceImpl$createFilterBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.v59($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function FilterResourceImpl$getFilterBlocking$slambda_0(this$0, $request) {
  var i = new FilterResourceImpl$getFilterBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.y59($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function FilterResourceImpl$deleteFilterBlocking$slambda_0(this$0, $request) {
  var i = new FilterResourceImpl$deleteFilterBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function InternalUtility$json$lambda($this$Json) {
  $this$Json.a1z_1 = false;
  $this$Json.z1y_1 = true;
  $this$Json.b1z_1 = true;
  var tmp = $this$Json;
  // Inline function 'kotlinx.serialization.modules.SerializersModule' call
  var builder = new SerializersModuleBuilder();
  builder.h1x(PrimitiveClasses_getInstance().ze(), AnySerializer_getInstance());
  tmp.q1z_1 = builder.f1m();
  return Unit_instance;
}
var InternalUtility_instance;
function InternalUtility_getInstance() {
  if (InternalUtility_instance === VOID)
    new InternalUtility();
  return InternalUtility_instance;
}
var Companion_instance_92;
function Companion_getInstance_93() {
  return Companion_instance_92;
}
var $serializer_instance_91;
function $serializer_getInstance_91() {
  if ($serializer_instance_91 === VOID)
    new $serializer_91();
  return $serializer_instance_91;
}
var Companion_instance_93;
function Companion_getInstance_94() {
  return Companion_instance_93;
}
var $serializer_instance_92;
function $serializer_getInstance_92() {
  if ($serializer_instance_92 === VOID)
    new $serializer_92();
  return $serializer_instance_92;
}
function LoginResourceImpl$getLoginFlowsBlocking$slambda_0(this$0) {
  var i = new LoginResourceImpl$getLoginFlowsBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.q5a($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function LoginResourceImpl$loginWithPasswordBlocking$slambda_0(this$0, $request) {
  var i = new LoginResourceImpl$loginWithPasswordBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.t5a($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function MediaResourceImpl$uploadBlocking$slambda_0(this$0, $request) {
  var i = new MediaResourceImpl$uploadBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.v5b($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function MediaResourceImpl$downloadBlocking$slambda_0(this$0, $request) {
  var i = new MediaResourceImpl$downloadBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.y5b($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function MediaResourceImpl$thumbnailBlocking$slambda_0(this$0, $request) {
  var i = new MediaResourceImpl$thumbnailBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.y5b($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function MediaResourceImpl$getConfigBlocking$slambda_0(this$0) {
  var i = new MediaResourceImpl$getConfigBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.c5c($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function MediaResourceImpl$previewUrlBlocking$slambda_0(this$0, $request) {
  var i = new MediaResourceImpl$previewUrlBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.f5c($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function NotificationsResourceImpl$getNotificationsBlocking$slambda_0(this$0, $request) {
  var i = new NotificationsResourceImpl$getNotificationsBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.k5c($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
var Companion_instance_94;
function Companion_getInstance_95() {
  return Companion_instance_94;
}
var $serializer_instance_93;
function $serializer_getInstance_93() {
  if ($serializer_instance_93 === VOID)
    new $serializer_93();
  return $serializer_instance_93;
}
function PresenceResourceImpl$getPresenceBlocking$slambda_0(this$0, $userId) {
  var i = new PresenceResourceImpl$getPresenceBlocking$slambda(this$0, $userId);
  var l = ($this$toBlocking, $completion) => i.u5c($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function PresenceResourceImpl$setPresenceBlocking$slambda_0(this$0, $request) {
  var i = new PresenceResourceImpl$setPresenceBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
var Companion_instance_95;
function Companion_getInstance_96() {
  return Companion_instance_95;
}
var $serializer_instance_94;
function $serializer_getInstance_94() {
  if ($serializer_instance_94 === VOID)
    new $serializer_94();
  return $serializer_instance_94;
}
var Companion_instance_96;
function Companion_getInstance_97() {
  return Companion_instance_96;
}
var $serializer_instance_95;
function $serializer_getInstance_95() {
  if ($serializer_instance_95 === VOID)
    new $serializer_95();
  return $serializer_instance_95;
}
function ProfileResourceImpl$getProfileBlocking$slambda_0(this$0, $userId) {
  var i = new ProfileResourceImpl$getProfileBlocking$slambda(this$0, $userId);
  var l = ($this$toBlocking, $completion) => i.j5d($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ProfileResourceImpl$getDisplayNameBlocking$slambda_0(this$0, $userId) {
  var i = new ProfileResourceImpl$getDisplayNameBlocking$slambda(this$0, $userId);
  var l = ($this$toBlocking, $completion) => i.m5d($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ProfileResourceImpl$setDisplayNameBlocking$slambda_0(this$0, $request) {
  var i = new ProfileResourceImpl$setDisplayNameBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ProfileResourceImpl$getAvatarUrlBlocking$slambda_0(this$0, $userId) {
  var i = new ProfileResourceImpl$getAvatarUrlBlocking$slambda(this$0, $userId);
  var l = ($this$toBlocking, $completion) => i.r5d($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function ProfileResourceImpl$setAvatarUrlBlocking$slambda_0(this$0, $request) {
  var i = new ProfileResourceImpl$setAvatarUrlBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
var Companion_instance_97;
function Companion_getInstance_98() {
  return Companion_instance_97;
}
var $serializer_instance_96;
function $serializer_getInstance_96() {
  if ($serializer_instance_96 === VOID)
    new $serializer_96();
  return $serializer_instance_96;
}
function PushRulesResourceImpl$getPushRulesBlocking$slambda_0(this$0) {
  var i = new PushRulesResourceImpl$getPushRulesBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.b5e($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function PushRulesResourceImpl$getEnabledBlocking$slambda_0(this$0, $scope, $kind, $ruleId) {
  var i = new PushRulesResourceImpl$getEnabledBlocking$slambda(this$0, $scope, $kind, $ruleId);
  var l = ($this$toBlocking, $completion) => i.g5e($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function PushRulesResourceImpl$setEnabledBlocking$slambda_0(this$0, $request) {
  var i = new PushRulesResourceImpl$setEnabledBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function PushRulesResourceImpl$createRuleBlocking$slambda_0(this$0, $request) {
  var i = new PushRulesResourceImpl$createRuleBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function PushRulesResourceImpl$deleteRuleBlocking$slambda_0(this$0, $request) {
  var i = new PushRulesResourceImpl$deleteRuleBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
var Companion_instance_98;
function Companion_getInstance_99() {
  return Companion_instance_98;
}
var $serializer_instance_97;
function $serializer_getInstance_97() {
  if ($serializer_instance_97 === VOID)
    new $serializer_97();
  return $serializer_instance_97;
}
var Companion_instance_99;
function Companion_getInstance_100() {
  return Companion_instance_99;
}
var $serializer_instance_98;
function $serializer_getInstance_98() {
  if ($serializer_instance_98 === VOID)
    new $serializer_98();
  return $serializer_instance_98;
}
function PushersResourceImpl$getPushersBlocking$slambda_0(this$0) {
  var i = new PushersResourceImpl$getPushersBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.i5f($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function PushersResourceImpl$setPusherBlocking$slambda_0(this$0, $request) {
  var i = new PushersResourceImpl$setPusherBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RelationsResourceImpl$getRelationsBlocking$slambda_0(this$0, $request) {
  var i = new RelationsResourceImpl$getRelationsBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.p5f($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RelationsResourceImpl$getThreadsBlocking$slambda_0(this$0, $request) {
  var i = new RelationsResourceImpl$getThreadsBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.s5f($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$CreateRoomBody$Companion$$childSerializers$_anonymous__q3r2ul() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
var Companion_instance_100;
function Companion_getInstance_101() {
  if (Companion_instance_100 === VOID)
    new Companion_100();
  return Companion_instance_100;
}
var $serializer_instance_99;
function $serializer_getInstance_99() {
  if ($serializer_instance_99 === VOID)
    new $serializer_99();
  return $serializer_instance_99;
}
var Companion_instance_101;
function Companion_getInstance_102() {
  return Companion_instance_101;
}
var $serializer_instance_100;
function $serializer_getInstance_100() {
  if ($serializer_instance_100 === VOID)
    new $serializer_100();
  return $serializer_instance_100;
}
var Companion_instance_102;
function Companion_getInstance_103() {
  return Companion_instance_102;
}
var $serializer_instance_101;
function $serializer_getInstance_101() {
  if ($serializer_instance_101 === VOID)
    new $serializer_101();
  return $serializer_instance_101;
}
var Companion_instance_103;
function Companion_getInstance_104() {
  return Companion_instance_103;
}
var $serializer_instance_102;
function $serializer_getInstance_102() {
  if ($serializer_instance_102 === VOID)
    new $serializer_102();
  return $serializer_instance_102;
}
var Companion_instance_104;
function Companion_getInstance_105() {
  return Companion_instance_104;
}
var $serializer_instance_103;
function $serializer_getInstance_103() {
  if ($serializer_instance_103 === VOID)
    new $serializer_103();
  return $serializer_instance_103;
}
var Companion_instance_105;
function Companion_getInstance_106() {
  return Companion_instance_105;
}
var $serializer_instance_104;
function $serializer_getInstance_104() {
  if ($serializer_instance_104 === VOID)
    new $serializer_104();
  return $serializer_instance_104;
}
var Companion_instance_106;
function Companion_getInstance_107() {
  return Companion_instance_106;
}
var $serializer_instance_105;
function $serializer_getInstance_105() {
  if ($serializer_instance_105 === VOID)
    new $serializer_105();
  return $serializer_instance_105;
}
var Companion_instance_107;
function Companion_getInstance_108() {
  return Companion_instance_107;
}
var $serializer_instance_106;
function $serializer_getInstance_106() {
  if ($serializer_instance_106 === VOID)
    new $serializer_106();
  return $serializer_instance_106;
}
var Companion_instance_108;
function Companion_getInstance_109() {
  return Companion_instance_108;
}
var $serializer_instance_107;
function $serializer_getInstance_107() {
  if ($serializer_instance_107 === VOID)
    new $serializer_107();
  return $serializer_instance_107;
}
var Companion_instance_109;
function Companion_getInstance_110() {
  return Companion_instance_109;
}
var $serializer_instance_108;
function $serializer_getInstance_108() {
  if ($serializer_instance_108 === VOID)
    new $serializer_108();
  return $serializer_instance_108;
}
var Companion_instance_110;
function Companion_getInstance_111() {
  return Companion_instance_110;
}
var $serializer_instance_109;
function $serializer_getInstance_109() {
  if ($serializer_instance_109 === VOID)
    new $serializer_109();
  return $serializer_instance_109;
}
var Companion_instance_111;
function Companion_getInstance_112() {
  return Companion_instance_111;
}
var $serializer_instance_110;
function $serializer_getInstance_110() {
  if ($serializer_instance_110 === VOID)
    new $serializer_110();
  return $serializer_instance_110;
}
var Companion_instance_112;
function Companion_getInstance_113() {
  return Companion_instance_112;
}
var $serializer_instance_111;
function $serializer_getInstance_111() {
  if ($serializer_instance_111 === VOID)
    new $serializer_111();
  return $serializer_instance_111;
}
var Companion_instance_113;
function Companion_getInstance_114() {
  return Companion_instance_113;
}
var $serializer_instance_112;
function $serializer_getInstance_112() {
  if ($serializer_instance_112 === VOID)
    new $serializer_112();
  return $serializer_instance_112;
}
var Companion_instance_114;
function Companion_getInstance_115() {
  return Companion_instance_114;
}
var $serializer_instance_113;
function $serializer_getInstance_113() {
  if ($serializer_instance_113 === VOID)
    new $serializer_113();
  return $serializer_instance_113;
}
var Companion_instance_115;
function Companion_getInstance_116() {
  return Companion_instance_115;
}
var $serializer_instance_114;
function $serializer_getInstance_114() {
  if ($serializer_instance_114 === VOID)
    new $serializer_114();
  return $serializer_instance_114;
}
function generateTxnId($this) {
  var _unary__edvuaz = $this.r5j_1;
  $this.r5j_1 = add(_unary__edvuaz, get_ONE());
  return 'kmatrix_' + $this.r5j_1.toString() + '_' + Default_getInstance().dl(0n, 100000n).toString();
}
function RoomsResourceImpl$createRoomBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$createRoomBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.u5j($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$joinRoomBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$joinRoomBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.x5j($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$leaveRoomBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$leaveRoomBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$inviteBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$inviteBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$getJoinedRoomsBlocking$slambda_0(this$0) {
  var i = new RoomsResourceImpl$getJoinedRoomsBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.d5k($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$getRoomNameBlocking$slambda_0(this$0, $roomId) {
  var i = new RoomsResourceImpl$getRoomNameBlocking$slambda(this$0, $roomId);
  var l = ($this$toBlocking, $completion) => i.g5k($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$getMembersBlocking$slambda_0(this$0, $roomId) {
  var i = new RoomsResourceImpl$getMembersBlocking$slambda(this$0, $roomId);
  var l = ($this$toBlocking, $completion) => i.j5k($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$getJoinedMembersBlocking$slambda_0(this$0, $roomId) {
  var i = new RoomsResourceImpl$getJoinedMembersBlocking$slambda(this$0, $roomId);
  var l = ($this$toBlocking, $completion) => i.m5k($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$getMessagesBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$getMessagesBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.p5k($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$sendMessageBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$sendMessageBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.s5k($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$redactEventBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$redactEventBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.v5k($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$setTypingBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$setTypingBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$sendReceiptBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$sendReceiptBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$setReadMarkersBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$setReadMarkersBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$banBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$banBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$unbanBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$unbanBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$kickBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$kickBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$getStateEventBlocking$slambda_0(this$0, $roomId, $eventType, $stateKey) {
  var i = new RoomsResourceImpl$getStateEventBlocking$slambda(this$0, $roomId, $eventType, $stateKey);
  var l = ($this$toBlocking, $completion) => i.n55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$sendStateEventBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$sendStateEventBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.o5l($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$forgetRoomBlocking$slambda_0(this$0, $request) {
  var i = new RoomsResourceImpl$forgetRoomBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function RoomsResourceImpl$getStateBlocking$slambda_0(this$0, $roomId) {
  var i = new RoomsResourceImpl$getStateBlocking$slambda(this$0, $roomId);
  var l = ($this$toBlocking, $completion) => i.t5l($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
var Companion_instance_116;
function Companion_getInstance_117() {
  return Companion_instance_116;
}
var $serializer_instance_115;
function $serializer_getInstance_115() {
  if ($serializer_instance_115 === VOID)
    new $serializer_115();
  return $serializer_instance_115;
}
var Companion_instance_117;
function Companion_getInstance_118() {
  return Companion_instance_117;
}
var $serializer_instance_116;
function $serializer_getInstance_116() {
  if ($serializer_instance_116 === VOID)
    new $serializer_116();
  return $serializer_instance_116;
}
function SearchResourceImpl$SearchRoomEventsBody$Companion$$childSerializers$_anonymous__dvhhb6() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
var Companion_instance_118;
function Companion_getInstance_119() {
  if (Companion_instance_118 === VOID)
    new Companion_118();
  return Companion_instance_118;
}
var $serializer_instance_117;
function $serializer_getInstance_117() {
  if ($serializer_instance_117 === VOID)
    new $serializer_117();
  return $serializer_instance_117;
}
function SearchResourceImpl$SearchFilterBody$Companion$$childSerializers$_anonymous__ydckg6() {
  return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kf(), StringSerializer_getInstance());
}
var Companion_instance_119;
function Companion_getInstance_120() {
  if (Companion_instance_119 === VOID)
    new Companion_119();
  return Companion_instance_119;
}
var $serializer_instance_118;
function $serializer_getInstance_118() {
  if ($serializer_instance_118 === VOID)
    new $serializer_118();
  return $serializer_instance_118;
}
function SearchResourceImpl$searchBlocking$slambda_0(this$0, $request) {
  var i = new SearchResourceImpl$searchBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.r5m($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function SyncResourceImpl$syncBlocking$slambda_0(this$0, $request) {
  var i = new SyncResourceImpl$syncBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.w5m($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
var Companion_instance_120;
function Companion_getInstance_121() {
  return Companion_instance_120;
}
var $serializer_instance_119;
function $serializer_getInstance_119() {
  if ($serializer_instance_119 === VOID)
    new $serializer_119();
  return $serializer_instance_119;
}
function TagsResourceImpl$getTagsBlocking$slambda_0(this$0, $userId, $roomId) {
  var i = new TagsResourceImpl$getTagsBlocking$slambda(this$0, $userId, $roomId);
  var l = ($this$toBlocking, $completion) => i.g5n($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function TagsResourceImpl$setTagBlocking$slambda_0(this$0, $request) {
  var i = new TagsResourceImpl$setTagBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function TagsResourceImpl$deleteTagBlocking$slambda_0(this$0, $request) {
  var i = new TagsResourceImpl$deleteTagBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.q55($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
var Companion_instance_121;
function Companion_getInstance_122() {
  return Companion_instance_121;
}
var $serializer_instance_120;
function $serializer_getInstance_120() {
  if ($serializer_instance_120 === VOID)
    new $serializer_120();
  return $serializer_instance_120;
}
function UserDirectoryResourceImpl$searchBlocking$slambda_0(this$0, $request) {
  var i = new UserDirectoryResourceImpl$searchBlocking$slambda(this$0, $request);
  var l = ($this$toBlocking, $completion) => i.u5n($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function VersionsResourceImpl$getVersionsBlocking$slambda_0(this$0) {
  var i = new VersionsResourceImpl$getVersionsBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.y5n($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
function VoIPResourceImpl$getTurnServerBlocking$slambda_0(this$0) {
  var i = new VoIPResourceImpl$getTurnServerBlocking$slambda(this$0);
  var l = ($this$toBlocking, $completion) => i.b5o($this$toBlocking, $completion);
  l.$arity = 1;
  return l;
}
var MediaType_instance;
function MediaType_getInstance() {
  if (MediaType_instance === VOID)
    new MediaType();
  return MediaType_instance;
}
function toBlocking(block) {
  throw UnsupportedOperationException.q9('Blocking operations are not supported in JavaScript. Please use suspend functions or Promise-based APIs instead.');
}
//region block: post-declaration
initMetadataForInterface(Matrix, 'Matrix');
initMetadataForClass(MatrixException, 'MatrixException');
initMetadataForObject(MatrixFactory, 'MatrixFactory');
initMetadataForInterface(AccountDataResource, 'AccountDataResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(AccountsResource, 'AccountsResource', VOID, VOID, VOID, [0, 1, 2]);
initMetadataForInterface(CapabilitiesResource, 'CapabilitiesResource', VOID, VOID, VOID, [0, 1]);
initMetadataForInterface(DevicesResource, 'DevicesResource', VOID, VOID, VOID, [0, 1, 2]);
initMetadataForInterface(DirectoryResource, 'DirectoryResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(EventsResource, 'EventsResource', VOID, VOID, VOID, [2, 3, 1]);
initMetadataForInterface(FilterResource, 'FilterResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(LoginResource, 'LoginResource', VOID, VOID, VOID, [0, 1, 2]);
initMetadataForInterface(MediaResource, 'MediaResource', VOID, VOID, VOID, [1, 2, 0]);
initMetadataForInterface(NotificationsResource, 'NotificationsResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(PresenceResource, 'PresenceResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(ProfileResource, 'ProfileResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(PushRulesResource, 'PushRulesResource', VOID, VOID, VOID, [0, 1, 3, 4, 2]);
initMetadataForInterface(PushersResource, 'PushersResource', VOID, VOID, VOID, [0, 1, 2]);
initMetadataForInterface(RelationsResource, 'RelationsResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(RoomsResource, 'RoomsResource', VOID, VOID, VOID, [1, 2, 0, 3, 4]);
initMetadataForInterface(SearchResource, 'SearchResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(SyncResource, 'SyncResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(TagsResource, 'TagsResource', VOID, VOID, VOID, [2, 3, 1]);
initMetadataForInterface(UserDirectoryResource, 'UserDirectoryResource', VOID, VOID, VOID, [1, 2]);
initMetadataForInterface(VersionsResource, 'VersionsResource', VOID, VOID, VOID, [0, 1]);
initMetadataForInterface(VoIPResource, 'VoIPResource', VOID, VOID, VOID, [0, 1]);
initMetadataForClass(ChangePasswordRequest, 'ChangePasswordRequest', ChangePasswordRequest);
initMetadataForClass(RegisterRequest, 'RegisterRequest', RegisterRequest);
initMetadataForClass(AccountDataGetRequest, 'AccountDataGetRequest', AccountDataGetRequest);
initMetadataForClass(AccountDataSetRequest, 'AccountDataSetRequest', AccountDataSetRequest);
initMetadataForClass(DevicesDeleteRequest, 'DevicesDeleteRequest', DevicesDeleteRequest);
initMetadataForClass(DevicesUpdateRequest, 'DevicesUpdateRequest', DevicesUpdateRequest);
initMetadataForClass(DirectoryGetPublicRoomsRequest, 'DirectoryGetPublicRoomsRequest', DirectoryGetPublicRoomsRequest);
initMetadataForClass(DirectorySetAliasRequest, 'DirectorySetAliasRequest', DirectorySetAliasRequest);
initMetadataForClass(EventsGetContextRequest, 'EventsGetContextRequest', EventsGetContextRequest);
initMetadataForClass(DeleteFilterRequest, 'DeleteFilterRequest', DeleteFilterRequest);
initMetadataForClass(FilterCreateRequest, 'FilterCreateRequest', FilterCreateRequest);
initMetadataForClass(FilterGetRequest, 'FilterGetRequest', FilterGetRequest);
initMetadataForClass(LoginPasswordRequest, 'LoginPasswordRequest', LoginPasswordRequest);
initMetadataForClass(LoginSsoRedirectRequest, 'LoginSsoRedirectRequest', LoginSsoRedirectRequest);
initMetadataForClass(MediaDownloadRequest, 'MediaDownloadRequest', MediaDownloadRequest);
initMetadataForClass(MediaPreviewUrlRequest, 'MediaPreviewUrlRequest', MediaPreviewUrlRequest);
initMetadataForClass(MediaThumbnailRequest, 'MediaThumbnailRequest', MediaThumbnailRequest);
initMetadataForClass(MediaUploadRequest, 'MediaUploadRequest', MediaUploadRequest);
initMetadataForClass(NotificationsGetRequest, 'NotificationsGetRequest', NotificationsGetRequest);
initMetadataForClass(PresenceSetRequest, 'PresenceSetRequest', PresenceSetRequest);
initMetadataForClass(ProfileSetAvatarUrlRequest, 'ProfileSetAvatarUrlRequest', ProfileSetAvatarUrlRequest);
initMetadataForClass(ProfileSetDisplayNameRequest, 'ProfileSetDisplayNameRequest', ProfileSetDisplayNameRequest);
initMetadataForClass(PushRulesCreateRequest, 'PushRulesCreateRequest', PushRulesCreateRequest);
initMetadataForClass(PushRulesDeleteRequest, 'PushRulesDeleteRequest', PushRulesDeleteRequest);
initMetadataForClass(PushRulesSetEnabledRequest, 'PushRulesSetEnabledRequest', PushRulesSetEnabledRequest);
initMetadataForClass(PushersSetRequest, 'PushersSetRequest', PushersSetRequest);
initMetadataForClass(PusherData, 'PusherData', PusherData);
initMetadataForClass(RelationsGetRequest, 'RelationsGetRequest', RelationsGetRequest);
initMetadataForClass(ThreadsGetRequest, 'ThreadsGetRequest', ThreadsGetRequest);
initMetadataForClass(RoomsBanRequest, 'RoomsBanRequest', RoomsBanRequest);
initMetadataForClass(RoomsCreateRoomRequest, 'RoomsCreateRoomRequest', RoomsCreateRoomRequest);
initMetadataForClass(RoomsForgetRoomRequest, 'RoomsForgetRoomRequest', RoomsForgetRoomRequest);
initMetadataForClass(RoomsGetJoinedRoomsRequest, 'RoomsGetJoinedRoomsRequest', RoomsGetJoinedRoomsRequest);
initMetadataForClass(RoomsGetMessagesRequest, 'RoomsGetMessagesRequest', RoomsGetMessagesRequest);
initMetadataForClass(RoomsInviteRequest, 'RoomsInviteRequest', RoomsInviteRequest);
initMetadataForClass(RoomsJoinRoomRequest, 'RoomsJoinRoomRequest', RoomsJoinRoomRequest);
initMetadataForClass(RoomsKickRequest, 'RoomsKickRequest', RoomsKickRequest);
initMetadataForClass(RoomsLeaveRoomRequest, 'RoomsLeaveRoomRequest', RoomsLeaveRoomRequest);
initMetadataForClass(RoomsRedactEventRequest, 'RoomsRedactEventRequest', RoomsRedactEventRequest);
initMetadataForClass(RoomsSendMessageRequest, 'RoomsSendMessageRequest', RoomsSendMessageRequest);
initMetadataForClass(RoomsSendReceiptRequest, 'RoomsSendReceiptRequest', RoomsSendReceiptRequest);
initMetadataForClass(RoomsSendStateEventRequest, 'RoomsSendStateEventRequest', RoomsSendStateEventRequest);
initMetadataForClass(RoomsSetReadMarkersRequest, 'RoomsSetReadMarkersRequest', RoomsSetReadMarkersRequest);
initMetadataForClass(RoomsTypingRequest, 'RoomsTypingRequest', RoomsTypingRequest);
initMetadataForClass(RoomsUnbanRequest, 'RoomsUnbanRequest', RoomsUnbanRequest);
initMetadataForClass(SearchRequest, 'SearchRequest', SearchRequest);
initMetadataForClass(SyncRequest, 'SyncRequest', SyncRequest);
initMetadataForClass(TagsDeleteRequest, 'TagsDeleteRequest', TagsDeleteRequest);
initMetadataForClass(TagsSetRequest, 'TagsSetRequest', TagsSetRequest);
initMetadataForClass(UserDirectorySearchRequest, 'UserDirectorySearchRequest', UserDirectorySearchRequest);
initMetadataForClass(Response, 'Response');
initMetadataForClass(ResponseUnit, 'ResponseUnit', ResponseUnit);
initMetadataForCompanion(Companion);
protoOf($serializer).s1o = typeParametersSerializers;
initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RegisterResponse, 'RegisterResponse', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
initMetadataForCompanion(Companion_0);
protoOf($serializer_0).s1o = typeParametersSerializers;
initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(AccountsWhoamiResponse, 'AccountsWhoamiResponse', AccountsWhoamiResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
initMetadataForCompanion(Companion_1);
protoOf($serializer_1).s1o = typeParametersSerializers;
initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_2);
protoOf($serializer_2).s1o = typeParametersSerializers;
initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_3);
protoOf($serializer_3).s1o = typeParametersSerializers;
initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_4);
protoOf($serializer_4).s1o = typeParametersSerializers;
initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Capabilities, 'Capabilities', Capabilities, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
initMetadataForClass(ChangePassword, 'ChangePassword', ChangePassword, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
initMetadataForClass(BooleanCapability, 'BooleanCapability', BooleanCapability, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
initMetadataForClass(RoomVersions, 'RoomVersions', RoomVersions, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
initMetadataForCompanion(Companion_5);
protoOf($serializer_5).s1o = typeParametersSerializers;
initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CapabilitiesGetResponse, 'CapabilitiesGetResponse', CapabilitiesGetResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
initMetadataForCompanion(Companion_6);
protoOf($serializer_6).s1o = typeParametersSerializers;
initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(DevicesGetDeviceResponse, 'DevicesGetDeviceResponse', DevicesGetDeviceResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
initMetadataForCompanion(Companion_7);
protoOf($serializer_7).s1o = typeParametersSerializers;
initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(DevicesGetResponse, 'DevicesGetResponse', DevicesGetResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
initMetadataForCompanion(Companion_8);
protoOf($serializer_8).s1o = typeParametersSerializers;
initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Device, 'Device', Device, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
initMetadataForCompanion(Companion_9);
protoOf($serializer_9).s1o = typeParametersSerializers;
initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(DirectoryGetPublicRoomsResponse, 'DirectoryGetPublicRoomsResponse', DirectoryGetPublicRoomsResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_9});
initMetadataForCompanion(Companion_10);
protoOf($serializer_10).s1o = typeParametersSerializers;
initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PublicRoomChunk, 'PublicRoomChunk', PublicRoomChunk, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_10});
initMetadataForCompanion(Companion_11);
protoOf($serializer_11).s1o = typeParametersSerializers;
initMetadataForObject($serializer_11, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(DirectoryResolveAliasResponse, 'DirectoryResolveAliasResponse', DirectoryResolveAliasResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_11});
initMetadataForCompanion(Companion_12);
protoOf($serializer_12).s1o = typeParametersSerializers;
initMetadataForObject($serializer_12, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ContextEvent, 'ContextEvent', ContextEvent, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_12});
initMetadataForCompanion(Companion_13);
protoOf($serializer_13).s1o = typeParametersSerializers;
initMetadataForObject($serializer_13, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(EventsGetContextResponse, 'EventsGetContextResponse', EventsGetContextResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_13});
initMetadataForCompanion(Companion_14);
protoOf($serializer_14).s1o = typeParametersSerializers;
initMetadataForObject($serializer_14, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(EventsGetEventResponse, 'EventsGetEventResponse', EventsGetEventResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_14});
initMetadataForCompanion(Companion_15);
protoOf($serializer_15).s1o = typeParametersSerializers;
initMetadataForObject($serializer_15, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(FilterCreateResponse, 'FilterCreateResponse', FilterCreateResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_15});
initMetadataForCompanion(Companion_16);
protoOf($serializer_16).s1o = typeParametersSerializers;
initMetadataForObject($serializer_16, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(FilterGetResponse, 'FilterGetResponse', FilterGetResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_16});
initMetadataForCompanion(Companion_17);
protoOf($serializer_17).s1o = typeParametersSerializers;
initMetadataForObject($serializer_17, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(EventFilter, 'EventFilter', EventFilter, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_17});
initMetadataForCompanion(Companion_18);
protoOf($serializer_18).s1o = typeParametersSerializers;
initMetadataForObject($serializer_18, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomFilter, 'RoomFilter', RoomFilter, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_18});
initMetadataForCompanion(Companion_19);
protoOf($serializer_19).s1o = typeParametersSerializers;
initMetadataForObject($serializer_19, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomEventFilter, 'RoomEventFilter', RoomEventFilter, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_19});
initMetadataForCompanion(Companion_20);
protoOf($serializer_20).s1o = typeParametersSerializers;
initMetadataForObject($serializer_20, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LoginGetLoginFlowsResponse, 'LoginGetLoginFlowsResponse', LoginGetLoginFlowsResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_20});
initMetadataForCompanion(Companion_21);
protoOf($serializer_21).s1o = typeParametersSerializers;
initMetadataForObject($serializer_21, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LoginFlow, 'LoginFlow', LoginFlow, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_21});
initMetadataForCompanion(Companion_22);
protoOf($serializer_22).s1o = typeParametersSerializers;
initMetadataForObject($serializer_22, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LoginPasswordResponse, 'LoginPasswordResponse', LoginPasswordResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_22});
initMetadataForCompanion(Companion_23);
protoOf($serializer_23).s1o = typeParametersSerializers;
initMetadataForObject($serializer_23, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(MediaGetConfigResponse, 'MediaGetConfigResponse', MediaGetConfigResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_23});
initMetadataForCompanion(Companion_24);
protoOf($serializer_24).s1o = typeParametersSerializers;
initMetadataForObject($serializer_24, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(MediaPreviewUrlResponse, 'MediaPreviewUrlResponse', MediaPreviewUrlResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_24});
initMetadataForCompanion(Companion_25);
protoOf($serializer_25).s1o = typeParametersSerializers;
initMetadataForObject($serializer_25, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(MediaUploadResponse, 'MediaUploadResponse', MediaUploadResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_25});
initMetadataForCompanion(Companion_26);
protoOf($serializer_26).s1o = typeParametersSerializers;
initMetadataForObject($serializer_26, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_27);
protoOf($serializer_27).s1o = typeParametersSerializers;
initMetadataForObject($serializer_27, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Notification, 'Notification', Notification, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_26});
initMetadataForClass(Event, 'Event', Event, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_27});
initMetadataForCompanion(Companion_28);
protoOf($serializer_28).s1o = typeParametersSerializers;
initMetadataForObject($serializer_28, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(NotificationsGetResponse, 'NotificationsGetResponse', NotificationsGetResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_28});
initMetadataForCompanion(Companion_29);
protoOf($serializer_29).s1o = typeParametersSerializers;
initMetadataForObject($serializer_29, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PresenceGetResponse, 'PresenceGetResponse', PresenceGetResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_29});
initMetadataForCompanion(Companion_30);
protoOf($serializer_30).s1o = typeParametersSerializers;
initMetadataForObject($serializer_30, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ProfileGetAvatarUrlResponse, 'ProfileGetAvatarUrlResponse', ProfileGetAvatarUrlResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_30});
initMetadataForCompanion(Companion_31);
protoOf($serializer_31).s1o = typeParametersSerializers;
initMetadataForObject($serializer_31, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ProfileGetDisplayNameResponse, 'ProfileGetDisplayNameResponse', ProfileGetDisplayNameResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_31});
initMetadataForCompanion(Companion_32);
protoOf($serializer_32).s1o = typeParametersSerializers;
initMetadataForObject($serializer_32, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ProfileGetProfileResponse, 'ProfileGetProfileResponse', ProfileGetProfileResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_32});
initMetadataForCompanion(Companion_33);
protoOf($serializer_33).s1o = typeParametersSerializers;
initMetadataForObject($serializer_33, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PushRulesGetEnabledResponse, 'PushRulesGetEnabledResponse', PushRulesGetEnabledResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_33});
initMetadataForCompanion(Companion_34);
protoOf($serializer_34).s1o = typeParametersSerializers;
initMetadataForObject($serializer_34, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PushRulesGetResponse, 'PushRulesGetResponse', PushRulesGetResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_34});
initMetadataForCompanion(Companion_35);
protoOf($serializer_35).s1o = typeParametersSerializers;
initMetadataForObject($serializer_35, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PushRuleset, 'PushRuleset', PushRuleset, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_35});
initMetadataForCompanion(Companion_36);
protoOf($serializer_36).s1o = typeParametersSerializers;
initMetadataForObject($serializer_36, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PushRule, 'PushRule', PushRule, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_36});
initMetadataForCompanion(Companion_37);
protoOf($serializer_37).s1o = typeParametersSerializers;
initMetadataForObject($serializer_37, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PushCondition, 'PushCondition', PushCondition, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_37});
initMetadataForCompanion(Companion_38);
protoOf($serializer_38).s1o = typeParametersSerializers;
initMetadataForObject($serializer_38, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_39);
protoOf($serializer_39).s1o = typeParametersSerializers;
initMetadataForObject($serializer_39, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Pusher, 'Pusher', Pusher, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_38});
initMetadataForClass(PusherData_0, 'PusherData', PusherData_0, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_39});
initMetadataForCompanion(Companion_40);
protoOf($serializer_40).s1o = typeParametersSerializers;
initMetadataForObject($serializer_40, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PushersGetResponse, 'PushersGetResponse', PushersGetResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_40});
initMetadataForCompanion(Companion_41);
protoOf($serializer_41).s1o = typeParametersSerializers;
initMetadataForObject($serializer_41, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RelationEvent, 'RelationEvent', RelationEvent, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_41});
initMetadataForCompanion(Companion_42);
protoOf($serializer_42).s1o = typeParametersSerializers;
initMetadataForObject($serializer_42, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RelationsGetResponse, 'RelationsGetResponse', RelationsGetResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_42});
initMetadataForCompanion(Companion_43);
protoOf($serializer_43).s1o = typeParametersSerializers;
initMetadataForObject($serializer_43, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ThreadEvent, 'ThreadEvent', ThreadEvent, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_43});
initMetadataForCompanion(Companion_44);
protoOf($serializer_44).s1o = typeParametersSerializers;
initMetadataForObject($serializer_44, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(ThreadsGetResponse, 'ThreadsGetResponse', ThreadsGetResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_44});
initMetadataForCompanion(Companion_45);
protoOf($serializer_45).s1o = typeParametersSerializers;
initMetadataForObject($serializer_45, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomsCreateRoomResponse, 'RoomsCreateRoomResponse', RoomsCreateRoomResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_45});
initMetadataForCompanion(Companion_46);
protoOf($serializer_46).s1o = typeParametersSerializers;
initMetadataForObject($serializer_46, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomsGetJoinedMembersResponse, 'RoomsGetJoinedMembersResponse', RoomsGetJoinedMembersResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_46});
initMetadataForCompanion(Companion_47);
protoOf($serializer_47).s1o = typeParametersSerializers;
initMetadataForObject($serializer_47, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomMember, 'RoomMember', RoomMember, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_47});
initMetadataForCompanion(Companion_48);
protoOf($serializer_48).s1o = typeParametersSerializers;
initMetadataForObject($serializer_48, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomsGetJoinedRoomsResponse, 'RoomsGetJoinedRoomsResponse', RoomsGetJoinedRoomsResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_48});
initMetadataForCompanion(Companion_49);
protoOf($serializer_49).s1o = typeParametersSerializers;
initMetadataForObject($serializer_49, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomsGetMembersResponse, 'RoomsGetMembersResponse', RoomsGetMembersResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_49});
initMetadataForCompanion(Companion_50);
protoOf($serializer_50).s1o = typeParametersSerializers;
initMetadataForObject($serializer_50, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomsGetMessagesResponse, 'RoomsGetMessagesResponse', RoomsGetMessagesResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_50});
initMetadataForCompanion(Companion_51);
protoOf($serializer_51).s1o = typeParametersSerializers;
initMetadataForObject($serializer_51, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomEvent, 'RoomEvent', RoomEvent, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_51});
initMetadataForCompanion(Companion_52);
protoOf($serializer_52).s1o = typeParametersSerializers;
initMetadataForObject($serializer_52, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomsGetRoomNameResponse, 'RoomsGetRoomNameResponse', RoomsGetRoomNameResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_52});
initMetadataForCompanion(Companion_53);
protoOf($serializer_53).s1o = typeParametersSerializers;
initMetadataForObject($serializer_53, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomsGetStateEventResponse, 'RoomsGetStateEventResponse', RoomsGetStateEventResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_53});
initMetadataForCompanion(Companion_54);
protoOf($serializer_54).s1o = typeParametersSerializers;
initMetadataForObject($serializer_54, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomsStateEvent, 'RoomsStateEvent', RoomsStateEvent, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_54});
initMetadataForCompanion(Companion_55);
protoOf($serializer_55).s1o = typeParametersSerializers;
initMetadataForObject($serializer_55, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomsJoinRoomResponse, 'RoomsJoinRoomResponse', RoomsJoinRoomResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_55});
initMetadataForCompanion(Companion_56);
protoOf($serializer_56).s1o = typeParametersSerializers;
initMetadataForObject($serializer_56, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomsRedactEventResponse, 'RoomsRedactEventResponse', RoomsRedactEventResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_56});
initMetadataForCompanion(Companion_57);
protoOf($serializer_57).s1o = typeParametersSerializers;
initMetadataForObject($serializer_57, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomsSendMessageResponse, 'RoomsSendMessageResponse', RoomsSendMessageResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_57});
initMetadataForCompanion(Companion_58);
protoOf($serializer_58).s1o = typeParametersSerializers;
initMetadataForObject($serializer_58, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RoomsSendStateEventResponse, 'RoomsSendStateEventResponse', RoomsSendStateEventResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_58});
initMetadataForCompanion(Companion_59);
protoOf($serializer_59).s1o = typeParametersSerializers;
initMetadataForObject($serializer_59, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SearchResponse, 'SearchResponse', SearchResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_59});
initMetadataForCompanion(Companion_60);
protoOf($serializer_60).s1o = typeParametersSerializers;
initMetadataForObject($serializer_60, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SearchCategories, 'SearchCategories', SearchCategories, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_60});
initMetadataForCompanion(Companion_61);
protoOf($serializer_61).s1o = typeParametersSerializers;
initMetadataForObject($serializer_61, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SearchRoomEvents, 'SearchRoomEvents', SearchRoomEvents, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_61});
initMetadataForCompanion(Companion_62);
protoOf($serializer_62).s1o = typeParametersSerializers;
initMetadataForObject($serializer_62, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SearchResult, 'SearchResult', SearchResult, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_62});
initMetadataForCompanion(Companion_63);
protoOf($serializer_63).s1o = typeParametersSerializers;
initMetadataForObject($serializer_63, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SearchResultEvent, 'SearchResultEvent', SearchResultEvent, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_63});
initMetadataForCompanion(Companion_64);
protoOf($serializer_64).s1o = typeParametersSerializers;
initMetadataForObject($serializer_64, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SearchResultContent, 'SearchResultContent', SearchResultContent, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_64});
initMetadataForCompanion(Companion_65);
protoOf($serializer_65).s1o = typeParametersSerializers;
initMetadataForObject($serializer_65, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SyncResponse, 'SyncResponse', SyncResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_65});
initMetadataForCompanion(Companion_66);
protoOf($serializer_66).s1o = typeParametersSerializers;
initMetadataForObject($serializer_66, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SyncRooms, 'SyncRooms', SyncRooms, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_66});
initMetadataForCompanion(Companion_67);
protoOf($serializer_67).s1o = typeParametersSerializers;
initMetadataForObject($serializer_67, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SyncJoinedRoom, 'SyncJoinedRoom', SyncJoinedRoom, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_67});
initMetadataForCompanion(Companion_68);
protoOf($serializer_68).s1o = typeParametersSerializers;
initMetadataForObject($serializer_68, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SyncInvitedRoom, 'SyncInvitedRoom', SyncInvitedRoom, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_68});
initMetadataForCompanion(Companion_69);
protoOf($serializer_69).s1o = typeParametersSerializers;
initMetadataForObject($serializer_69, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SyncLeftRoom, 'SyncLeftRoom', SyncLeftRoom, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_69});
initMetadataForCompanion(Companion_70);
protoOf($serializer_70).s1o = typeParametersSerializers;
initMetadataForObject($serializer_70, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SyncTimeline, 'SyncTimeline', SyncTimeline, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_70});
initMetadataForCompanion(Companion_71);
protoOf($serializer_71).s1o = typeParametersSerializers;
initMetadataForObject($serializer_71, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SyncState, 'SyncState', SyncState, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_71});
initMetadataForCompanion(Companion_72);
protoOf($serializer_72).s1o = typeParametersSerializers;
initMetadataForObject($serializer_72, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SyncAccountData, 'SyncAccountData', SyncAccountData, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_72});
initMetadataForCompanion(Companion_73);
protoOf($serializer_73).s1o = typeParametersSerializers;
initMetadataForObject($serializer_73, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SyncEphemeral, 'SyncEphemeral', SyncEphemeral, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_73});
initMetadataForCompanion(Companion_74);
protoOf($serializer_74).s1o = typeParametersSerializers;
initMetadataForObject($serializer_74, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SyncUnreadNotifications, 'SyncUnreadNotifications', SyncUnreadNotifications, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_74});
initMetadataForCompanion(Companion_75);
protoOf($serializer_75).s1o = typeParametersSerializers;
initMetadataForObject($serializer_75, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SyncInviteState, 'SyncInviteState', SyncInviteState, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_75});
initMetadataForCompanion(Companion_76);
protoOf($serializer_76).s1o = typeParametersSerializers;
initMetadataForObject($serializer_76, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(TagsGetResponse, 'TagsGetResponse', TagsGetResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_76});
initMetadataForCompanion(Companion_77);
protoOf($serializer_77).s1o = typeParametersSerializers;
initMetadataForObject($serializer_77, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(TagContent, 'TagContent', TagContent, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_77});
initMetadataForCompanion(Companion_78);
protoOf($serializer_78).s1o = typeParametersSerializers;
initMetadataForObject($serializer_78, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(UserDirectorySearchResponse, 'UserDirectorySearchResponse', UserDirectorySearchResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_78});
initMetadataForCompanion(Companion_79);
protoOf($serializer_79).s1o = typeParametersSerializers;
initMetadataForObject($serializer_79, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(UserDirectoryUser, 'UserDirectoryUser', UserDirectoryUser, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_79});
initMetadataForCompanion(Companion_80);
protoOf($serializer_80).s1o = typeParametersSerializers;
initMetadataForObject($serializer_80, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(VersionsGetResponse, 'VersionsGetResponse', VersionsGetResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_80});
initMetadataForCompanion(Companion_81);
protoOf($serializer_81).s1o = typeParametersSerializers;
initMetadataForObject($serializer_81, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(VoIPGetTurnServerResponse, 'VoIPGetTurnServerResponse', VoIPGetTurnServerResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_81});
initMetadataForCompanion(Companion_82);
protoOf($serializer_82).s1o = typeParametersSerializers;
initMetadataForObject($serializer_82, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(Room, 'Room', Room, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_82});
initMetadataForCompanion(Companion_83);
initMetadataForClass(RateLimit, 'RateLimit', RateLimit);
initMetadataForClass(AbstractResourceImpl, 'AbstractResourceImpl', VOID, VOID, VOID, [1]);
initMetadataForClass(AbstractAuthResourceImpl, 'AbstractAuthResourceImpl', VOID, VOID, VOID, [1]);
initMetadataForLambda(AccountDataResourceImpl$getAccountDataBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountDataResourceImpl$setAccountDataBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountDataResourceImpl$getRoomAccountDataBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountDataResourceImpl$setRoomAccountDataBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(AccountDataResourceImpl, 'AccountDataResourceImpl', VOID, VOID, [AccountDataResource], [1]);
initMetadataForCompanion(Companion_84);
protoOf($serializer_83).s1o = typeParametersSerializers;
initMetadataForObject($serializer_83, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_85);
protoOf($serializer_84).s1o = typeParametersSerializers;
initMetadataForObject($serializer_84, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_86);
protoOf($serializer_85).s1o = typeParametersSerializers;
initMetadataForObject($serializer_85, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(RegisterBody, 'RegisterBody', RegisterBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_83});
initMetadataForClass(ChangePasswordBody, 'ChangePasswordBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_84});
initMetadataForClass(ChangePasswordAuth, 'ChangePasswordAuth', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_85});
initMetadataForLambda(AccountsResourceImpl$whoamiBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$logoutBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$logoutAllBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$registerBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(AccountsResourceImpl$changePasswordBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(AccountsResourceImpl, 'AccountsResourceImpl', VOID, VOID, [AccountsResource], [0, 1]);
initMetadataForLambda(CapabilitiesResourceImpl$getCapabilitiesBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(CapabilitiesResourceImpl, 'CapabilitiesResourceImpl', VOID, VOID, [CapabilitiesResource], [0, 1]);
initMetadataForCompanion(Companion_87);
protoOf($serializer_86).s1o = typeParametersSerializers;
initMetadataForObject($serializer_86, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(UpdateDeviceBody, 'UpdateDeviceBody', UpdateDeviceBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_86});
initMetadataForLambda(DevicesResourceImpl$getDevicesBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(DevicesResourceImpl$getDeviceBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(DevicesResourceImpl$updateDeviceBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(DevicesResourceImpl$deleteDeviceBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(DevicesResourceImpl, 'DevicesResourceImpl', VOID, VOID, [DevicesResource], [0, 1]);
initMetadataForCompanion(Companion_88);
protoOf($serializer_87).s1o = typeParametersSerializers;
initMetadataForObject($serializer_87, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SetAliasBody, 'SetAliasBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_87});
initMetadataForLambda(DirectoryResourceImpl$resolveAliasBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(DirectoryResourceImpl$setAliasBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(DirectoryResourceImpl$deleteAliasBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(DirectoryResourceImpl$getPublicRoomsBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(DirectoryResourceImpl, 'DirectoryResourceImpl', VOID, VOID, [DirectoryResource], [1]);
initMetadataForLambda(EventsResourceImpl$getEventBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(EventsResourceImpl$getContextBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(EventsResourceImpl, 'EventsResourceImpl', VOID, VOID, [EventsResource], [2, 1]);
initMetadataForCompanion(Companion_89);
protoOf($serializer_88).s1o = typeParametersSerializers;
initMetadataForObject($serializer_88, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_90);
protoOf($serializer_89).s1o = typeParametersSerializers;
initMetadataForObject($serializer_89, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_91);
protoOf($serializer_90).s1o = typeParametersSerializers;
initMetadataForObject($serializer_90, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CreateFilterBody, 'CreateFilterBody', CreateFilterBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_88});
initMetadataForClass(CreateFilterRoomFilter, 'CreateFilterRoomFilter', CreateFilterRoomFilter, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_89});
initMetadataForClass(CreateFilterRoomEventFilter, 'CreateFilterRoomEventFilter', CreateFilterRoomEventFilter, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_90});
initMetadataForLambda(FilterResourceImpl$createFilterBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(FilterResourceImpl$getFilterBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(FilterResourceImpl$deleteFilterBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(FilterResourceImpl, 'FilterResourceImpl', VOID, VOID, [FilterResource], [1]);
initMetadataForObject(InternalUtility, 'InternalUtility');
initMetadataForCompanion(Companion_92);
protoOf($serializer_91).s1o = typeParametersSerializers;
initMetadataForObject($serializer_91, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_93);
protoOf($serializer_92).s1o = typeParametersSerializers;
initMetadataForObject($serializer_92, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(LoginPasswordBody, 'LoginPasswordBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_91});
initMetadataForClass(LoginPasswordIdentifier, 'LoginPasswordIdentifier', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_92});
initMetadataForLambda(LoginResourceImpl$getLoginFlowsBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(LoginResourceImpl$loginWithPasswordBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(LoginResourceImpl, 'LoginResourceImpl', VOID, VOID, [LoginResource], [0, 1]);
initMetadataForClass(MatrixImpl, 'MatrixImpl', VOID, VOID, [Matrix]);
initMetadataForLambda(MediaResourceImpl$uploadBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(MediaResourceImpl$downloadBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(MediaResourceImpl$thumbnailBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(MediaResourceImpl$getConfigBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(MediaResourceImpl$previewUrlBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(MediaResourceImpl, 'MediaResourceImpl', VOID, VOID, [MediaResource], [1, 0]);
initMetadataForLambda(NotificationsResourceImpl$getNotificationsBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(NotificationsResourceImpl, 'NotificationsResourceImpl', VOID, VOID, [NotificationsResource], [1]);
initMetadataForCompanion(Companion_94);
protoOf($serializer_93).s1o = typeParametersSerializers;
initMetadataForObject($serializer_93, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SetPresenceBody, 'SetPresenceBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_93});
initMetadataForLambda(PresenceResourceImpl$getPresenceBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(PresenceResourceImpl$setPresenceBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(PresenceResourceImpl, 'PresenceResourceImpl', VOID, VOID, [PresenceResource], [1]);
initMetadataForCompanion(Companion_95);
protoOf($serializer_94).s1o = typeParametersSerializers;
initMetadataForObject($serializer_94, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_96);
protoOf($serializer_95).s1o = typeParametersSerializers;
initMetadataForObject($serializer_95, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SetDisplayNameBody, 'SetDisplayNameBody', SetDisplayNameBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_94});
initMetadataForClass(SetAvatarUrlBody, 'SetAvatarUrlBody', SetAvatarUrlBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_95});
initMetadataForLambda(ProfileResourceImpl$getProfileBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(ProfileResourceImpl$getDisplayNameBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(ProfileResourceImpl$setDisplayNameBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(ProfileResourceImpl$getAvatarUrlBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(ProfileResourceImpl$setAvatarUrlBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(ProfileResourceImpl, 'ProfileResourceImpl', VOID, VOID, [ProfileResource], [1]);
initMetadataForCompanion(Companion_97);
protoOf($serializer_96).s1o = typeParametersSerializers;
initMetadataForObject($serializer_96, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SetEnabledBody, 'SetEnabledBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_96});
initMetadataForLambda(PushRulesResourceImpl$getPushRulesBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(PushRulesResourceImpl$getEnabledBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(PushRulesResourceImpl$setEnabledBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(PushRulesResourceImpl$createRuleBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(PushRulesResourceImpl$deleteRuleBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(PushRulesResourceImpl, 'PushRulesResourceImpl', VOID, VOID, [PushRulesResource], [0, 3, 1]);
initMetadataForCompanion(Companion_98);
protoOf($serializer_97).s1o = typeParametersSerializers;
initMetadataForObject($serializer_97, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(PusherDataBody, 'PusherDataBody', PusherDataBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_97});
initMetadataForCompanion(Companion_99);
protoOf($serializer_98).s1o = typeParametersSerializers;
initMetadataForObject($serializer_98, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SetPusherBody, 'SetPusherBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_98});
initMetadataForLambda(PushersResourceImpl$getPushersBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(PushersResourceImpl$setPusherBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(PushersResourceImpl, 'PushersResourceImpl', VOID, VOID, [PushersResource], [0, 1]);
initMetadataForLambda(RelationsResourceImpl$getRelationsBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RelationsResourceImpl$getThreadsBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(RelationsResourceImpl, 'RelationsResourceImpl', VOID, VOID, [RelationsResource], [1]);
initMetadataForCompanion(Companion_100);
protoOf($serializer_99).s1o = typeParametersSerializers;
initMetadataForObject($serializer_99, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_101);
protoOf($serializer_100).s1o = typeParametersSerializers;
initMetadataForObject($serializer_100, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_102);
protoOf($serializer_101).s1o = typeParametersSerializers;
initMetadataForObject($serializer_101, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_103);
protoOf($serializer_102).s1o = typeParametersSerializers;
initMetadataForObject($serializer_102, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_104);
protoOf($serializer_103).s1o = typeParametersSerializers;
initMetadataForObject($serializer_103, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_105);
protoOf($serializer_104).s1o = typeParametersSerializers;
initMetadataForObject($serializer_104, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_106);
protoOf($serializer_105).s1o = typeParametersSerializers;
initMetadataForObject($serializer_105, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_107);
protoOf($serializer_106).s1o = typeParametersSerializers;
initMetadataForObject($serializer_106, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_108);
protoOf($serializer_107).s1o = typeParametersSerializers;
initMetadataForObject($serializer_107, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_109);
protoOf($serializer_108).s1o = typeParametersSerializers;
initMetadataForObject($serializer_108, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_110);
protoOf($serializer_109).s1o = typeParametersSerializers;
initMetadataForObject($serializer_109, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_111);
protoOf($serializer_110).s1o = typeParametersSerializers;
initMetadataForObject($serializer_110, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_112);
protoOf($serializer_111).s1o = typeParametersSerializers;
initMetadataForObject($serializer_111, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_113);
protoOf($serializer_112).s1o = typeParametersSerializers;
initMetadataForObject($serializer_112, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_114);
protoOf($serializer_113).s1o = typeParametersSerializers;
initMetadataForObject($serializer_113, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_115);
protoOf($serializer_114).s1o = typeParametersSerializers;
initMetadataForObject($serializer_114, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(CreateRoomBody, 'CreateRoomBody', CreateRoomBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_99});
initMetadataForClass(JoinRoomBody, 'JoinRoomBody', JoinRoomBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_100});
initMetadataForClass(LeaveRoomBody, 'LeaveRoomBody', LeaveRoomBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_101});
initMetadataForClass(InviteBody, 'InviteBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_102});
initMetadataForClass(RedactEventBody, 'RedactEventBody', RedactEventBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_103});
initMetadataForClass(TypingBody, 'TypingBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_104});
initMetadataForClass(SendReceiptBody, 'SendReceiptBody', SendReceiptBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_105});
initMetadataForClass(SetReadMarkersBody, 'SetReadMarkersBody', SetReadMarkersBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_106});
initMetadataForClass(SendMessageBody, 'SendMessageBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_107});
initMetadataForClass(SendMessageRelatesTo, 'SendMessageRelatesTo', SendMessageRelatesTo, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_108});
initMetadataForClass(SendMessageInReplyTo, 'SendMessageInReplyTo', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_109});
initMetadataForClass(SendMessageAnnotation, 'SendMessageAnnotation', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_110});
initMetadataForClass(SendMessageReference, 'SendMessageReference', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_111});
initMetadataForClass(BanBody, 'BanBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_112});
initMetadataForClass(UnbanBody, 'UnbanBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_113});
initMetadataForClass(KickBody, 'KickBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_114});
initMetadataForLambda(RoomsResourceImpl$createRoomBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$joinRoomBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$leaveRoomBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$inviteBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$getJoinedRoomsBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$getRoomNameBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$getMembersBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$getJoinedMembersBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$getMessagesBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$sendMessageBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$redactEventBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$setTypingBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$sendReceiptBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$setReadMarkersBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$banBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$unbanBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$kickBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$getStateEventBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$sendStateEventBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$forgetRoomBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(RoomsResourceImpl$getStateBlocking$slambda, VOID, VOID, [1]);
protoOf(RoomsResourceImpl).s4a = getStateEvent$default;
protoOf(RoomsResourceImpl).v4a = getStateEventBlocking$default;
initMetadataForClass(RoomsResourceImpl, 'RoomsResourceImpl', VOID, VOID, [RoomsResource], [1, 0, 3]);
initMetadataForCompanion(Companion_116);
protoOf($serializer_115).s1o = typeParametersSerializers;
initMetadataForObject($serializer_115, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_117);
protoOf($serializer_116).s1o = typeParametersSerializers;
initMetadataForObject($serializer_116, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_118);
protoOf($serializer_117).s1o = typeParametersSerializers;
initMetadataForObject($serializer_117, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForCompanion(Companion_119);
protoOf($serializer_118).s1o = typeParametersSerializers;
initMetadataForObject($serializer_118, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SearchBody, 'SearchBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_115});
initMetadataForClass(SearchCategoriesBody, 'SearchCategoriesBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_116});
initMetadataForClass(SearchRoomEventsBody, 'SearchRoomEventsBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_117});
initMetadataForClass(SearchFilterBody, 'SearchFilterBody', SearchFilterBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_118});
initMetadataForLambda(SearchResourceImpl$searchBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(SearchResourceImpl, 'SearchResourceImpl', VOID, VOID, [SearchResource], [1]);
initMetadataForLambda(SyncResourceImpl$syncBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(SyncResourceImpl, 'SyncResourceImpl', VOID, VOID, [SyncResource], [1]);
initMetadataForCompanion(Companion_120);
protoOf($serializer_119).s1o = typeParametersSerializers;
initMetadataForObject($serializer_119, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SetTagBody, 'SetTagBody', SetTagBody, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_119});
initMetadataForLambda(TagsResourceImpl$getTagsBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(TagsResourceImpl$setTagBlocking$slambda, VOID, VOID, [1]);
initMetadataForLambda(TagsResourceImpl$deleteTagBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(TagsResourceImpl, 'TagsResourceImpl', VOID, VOID, [TagsResource], [2, 1]);
initMetadataForCompanion(Companion_121);
protoOf($serializer_120).s1o = typeParametersSerializers;
initMetadataForObject($serializer_120, '$serializer', VOID, VOID, [GeneratedSerializer]);
initMetadataForClass(SearchBody_0, 'SearchBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_120});
initMetadataForLambda(UserDirectoryResourceImpl$searchBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(UserDirectoryResourceImpl, 'UserDirectoryResourceImpl', VOID, VOID, [UserDirectoryResource], [1]);
initMetadataForLambda(VersionsResourceImpl$getVersionsBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(VersionsResourceImpl, 'VersionsResourceImpl', VOID, VOID, [VersionsResource], [0, 1]);
initMetadataForLambda(VoIPResourceImpl$getTurnServerBlocking$slambda, VOID, VOID, [1]);
initMetadataForClass(VoIPResourceImpl, 'VoIPResourceImpl', VOID, VOID, [VoIPResource], [0, 1]);
initMetadataForObject(MediaType, 'MediaType');
//endregion
//region block: init
MatrixFactory_instance = new MatrixFactory();
Companion_instance_0 = new Companion_0();
Companion_instance_1 = new Companion_1();
Companion_instance_2 = new Companion_2();
Companion_instance_3 = new Companion_3();
Companion_instance_5 = new Companion_5();
Companion_instance_6 = new Companion_6();
Companion_instance_8 = new Companion_8();
Companion_instance_15 = new Companion_15();
Companion_instance_21 = new Companion_21();
Companion_instance_22 = new Companion_22();
Companion_instance_23 = new Companion_23();
Companion_instance_24 = new Companion_24();
Companion_instance_25 = new Companion_25();
Companion_instance_29 = new Companion_29();
Companion_instance_30 = new Companion_30();
Companion_instance_31 = new Companion_31();
Companion_instance_32 = new Companion_32();
Companion_instance_33 = new Companion_33();
Companion_instance_34 = new Companion_34();
Companion_instance_37 = new Companion_37();
Companion_instance_38 = new Companion_38();
Companion_instance_39 = new Companion_39();
Companion_instance_45 = new Companion_45();
Companion_instance_47 = new Companion_47();
Companion_instance_52 = new Companion_52();
Companion_instance_55 = new Companion_55();
Companion_instance_56 = new Companion_56();
Companion_instance_57 = new Companion_57();
Companion_instance_58 = new Companion_58();
Companion_instance_59 = new Companion_59();
Companion_instance_60 = new Companion_60();
Companion_instance_62 = new Companion_62();
Companion_instance_63 = new Companion_63();
Companion_instance_64 = new Companion_64();
Companion_instance_65 = new Companion_65();
Companion_instance_67 = new Companion_67();
Companion_instance_68 = new Companion_68();
Companion_instance_69 = new Companion_69();
Companion_instance_74 = new Companion_74();
Companion_instance_77 = new Companion_77();
Companion_instance_79 = new Companion_79();
Companion_instance_82 = new Companion_82();
Companion_instance_83 = new Companion_83();
Companion_instance_84 = new Companion_84();
Companion_instance_85 = new Companion_85();
Companion_instance_86 = new Companion_86();
Companion_instance_87 = new Companion_87();
Companion_instance_88 = new Companion_88();
Companion_instance_89 = new Companion_89();
Companion_instance_92 = new Companion_92();
Companion_instance_93 = new Companion_93();
Companion_instance_94 = new Companion_94();
Companion_instance_95 = new Companion_95();
Companion_instance_96 = new Companion_96();
Companion_instance_97 = new Companion_97();
Companion_instance_98 = new Companion_98();
Companion_instance_99 = new Companion_99();
Companion_instance_101 = new Companion_101();
Companion_instance_102 = new Companion_102();
Companion_instance_103 = new Companion_103();
Companion_instance_104 = new Companion_104();
Companion_instance_105 = new Companion_105();
Companion_instance_106 = new Companion_106();
Companion_instance_107 = new Companion_107();
Companion_instance_108 = new Companion_108();
Companion_instance_109 = new Companion_109();
Companion_instance_110 = new Companion_110();
Companion_instance_111 = new Companion_111();
Companion_instance_112 = new Companion_112();
Companion_instance_113 = new Companion_113();
Companion_instance_114 = new Companion_114();
Companion_instance_115 = new Companion_115();
Companion_instance_116 = new Companion_116();
Companion_instance_117 = new Companion_117();
Companion_instance_120 = new Companion_120();
Companion_instance_121 = new Companion_121();
//endregion
//region block: exports
var MatrixFactory_0 = {getInstance: MatrixFactory_getInstance};
CapabilitiesGetResponse.Capabilities = Capabilities;
CapabilitiesGetResponse.ChangePassword = ChangePassword;
CapabilitiesGetResponse.BooleanCapability = BooleanCapability;
CapabilitiesGetResponse.RoomVersions = RoomVersions;
EventsGetContextResponse.ContextEvent = ContextEvent;
NotificationsGetResponse.Notification = Notification;
NotificationsGetResponse.Event = Event;
PushersGetResponse.Pusher = Pusher;
PushersGetResponse.PusherData = PusherData_0;
RelationsGetResponse.RelationEvent = RelationEvent;
ThreadsGetResponse.ThreadEvent = ThreadEvent;
defineProp(RateLimit, 'Companion', Companion_getInstance_84, VOID, true);
export {
  MatrixFactory_0 as MatrixFactory,
  ChangePasswordRequest as ChangePasswordRequest,
  RegisterRequest as RegisterRequest,
  AccountDataGetRequest as AccountDataGetRequest,
  AccountDataSetRequest as AccountDataSetRequest,
  DevicesDeleteRequest as DevicesDeleteRequest,
  DevicesUpdateRequest as DevicesUpdateRequest,
  DirectoryGetPublicRoomsRequest as DirectoryGetPublicRoomsRequest,
  DirectorySetAliasRequest as DirectorySetAliasRequest,
  EventsGetContextRequest as EventsGetContextRequest,
  DeleteFilterRequest as DeleteFilterRequest,
  FilterCreateRequest as FilterCreateRequest,
  FilterGetRequest as FilterGetRequest,
  LoginPasswordRequest as LoginPasswordRequest,
  LoginSsoRedirectRequest as LoginSsoRedirectRequest,
  MediaDownloadRequest as MediaDownloadRequest,
  MediaPreviewUrlRequest as MediaPreviewUrlRequest,
  MediaThumbnailRequest as MediaThumbnailRequest,
  MediaUploadRequest as MediaUploadRequest,
  NotificationsGetRequest as NotificationsGetRequest,
  PresenceSetRequest as PresenceSetRequest,
  ProfileSetAvatarUrlRequest as ProfileSetAvatarUrlRequest,
  ProfileSetDisplayNameRequest as ProfileSetDisplayNameRequest,
  PushRulesCreateRequest as PushRulesCreateRequest,
  PushRulesDeleteRequest as PushRulesDeleteRequest,
  PushRulesSetEnabledRequest as PushRulesSetEnabledRequest,
  PushersSetRequest as PushersSetRequest,
  PusherData as PusherData,
  RelationsGetRequest as RelationsGetRequest,
  ThreadsGetRequest as ThreadsGetRequest,
  RoomsBanRequest as RoomsBanRequest,
  RoomsCreateRoomRequest as RoomsCreateRoomRequest,
  RoomsForgetRoomRequest as RoomsForgetRoomRequest,
  RoomsGetJoinedRoomsRequest as RoomsGetJoinedRoomsRequest,
  RoomsGetMessagesRequest as RoomsGetMessagesRequest,
  RoomsInviteRequest as RoomsInviteRequest,
  RoomsJoinRoomRequest as RoomsJoinRoomRequest,
  RoomsKickRequest as RoomsKickRequest,
  RoomsLeaveRoomRequest as RoomsLeaveRoomRequest,
  RoomsRedactEventRequest as RoomsRedactEventRequest,
  RoomsSendMessageRequest as RoomsSendMessageRequest,
  RoomsSendReceiptRequest as RoomsSendReceiptRequest,
  RoomsSendStateEventRequest as RoomsSendStateEventRequest,
  RoomsSetReadMarkersRequest as RoomsSetReadMarkersRequest,
  RoomsTypingRequest as RoomsTypingRequest,
  RoomsUnbanRequest as RoomsUnbanRequest,
  SearchRequest as SearchRequest,
  SyncRequest as SyncRequest,
  TagsDeleteRequest as TagsDeleteRequest,
  TagsSetRequest as TagsSetRequest,
  UserDirectorySearchRequest as UserDirectorySearchRequest,
  Response as Response,
  ResponseUnit as ResponseUnit,
  RegisterResponse as RegisterResponse,
  AccountsWhoamiResponse as AccountsWhoamiResponse,
  CapabilitiesGetResponse as CapabilitiesGetResponse,
  DevicesGetDeviceResponse as DevicesGetDeviceResponse,
  DevicesGetResponse as DevicesGetResponse,
  Device as Device,
  DirectoryGetPublicRoomsResponse as DirectoryGetPublicRoomsResponse,
  PublicRoomChunk as PublicRoomChunk,
  DirectoryResolveAliasResponse as DirectoryResolveAliasResponse,
  EventsGetContextResponse as EventsGetContextResponse,
  EventsGetEventResponse as EventsGetEventResponse,
  FilterCreateResponse as FilterCreateResponse,
  FilterGetResponse as FilterGetResponse,
  EventFilter as EventFilter,
  RoomFilter as RoomFilter,
  RoomEventFilter as RoomEventFilter,
  LoginGetLoginFlowsResponse as LoginGetLoginFlowsResponse,
  LoginFlow as LoginFlow,
  LoginPasswordResponse as LoginPasswordResponse,
  MediaGetConfigResponse as MediaGetConfigResponse,
  MediaPreviewUrlResponse as MediaPreviewUrlResponse,
  MediaUploadResponse as MediaUploadResponse,
  NotificationsGetResponse as NotificationsGetResponse,
  PresenceGetResponse as PresenceGetResponse,
  ProfileGetAvatarUrlResponse as ProfileGetAvatarUrlResponse,
  ProfileGetDisplayNameResponse as ProfileGetDisplayNameResponse,
  ProfileGetProfileResponse as ProfileGetProfileResponse,
  PushRulesGetEnabledResponse as PushRulesGetEnabledResponse,
  PushRulesGetResponse as PushRulesGetResponse,
  PushRuleset as PushRuleset,
  PushRule as PushRule,
  PushCondition as PushCondition,
  PushersGetResponse as PushersGetResponse,
  RelationsGetResponse as RelationsGetResponse,
  ThreadsGetResponse as ThreadsGetResponse,
  RoomsCreateRoomResponse as RoomsCreateRoomResponse,
  RoomsGetJoinedMembersResponse as RoomsGetJoinedMembersResponse,
  RoomMember as RoomMember,
  RoomsGetJoinedRoomsResponse as RoomsGetJoinedRoomsResponse,
  RoomsGetMembersResponse as RoomsGetMembersResponse,
  RoomsGetMessagesResponse as RoomsGetMessagesResponse,
  RoomEvent as RoomEvent,
  RoomsGetRoomNameResponse as RoomsGetRoomNameResponse,
  RoomsGetStateEventResponse as RoomsGetStateEventResponse,
  RoomsStateEvent as RoomsStateEvent,
  RoomsJoinRoomResponse as RoomsJoinRoomResponse,
  RoomsRedactEventResponse as RoomsRedactEventResponse,
  RoomsSendMessageResponse as RoomsSendMessageResponse,
  RoomsSendStateEventResponse as RoomsSendStateEventResponse,
  SearchResponse as SearchResponse,
  SearchCategories as SearchCategories,
  SearchRoomEvents as SearchRoomEvents,
  SearchResult as SearchResult,
  SearchResultEvent as SearchResultEvent,
  SearchResultContent as SearchResultContent,
  SyncResponse as SyncResponse,
  SyncRooms as SyncRooms,
  SyncJoinedRoom as SyncJoinedRoom,
  SyncInvitedRoom as SyncInvitedRoom,
  SyncLeftRoom as SyncLeftRoom,
  SyncTimeline as SyncTimeline,
  SyncState as SyncState,
  SyncAccountData as SyncAccountData,
  SyncEphemeral as SyncEphemeral,
  SyncUnreadNotifications as SyncUnreadNotifications,
  SyncInviteState as SyncInviteState,
  TagsGetResponse as TagsGetResponse,
  TagContent as TagContent,
  UserDirectorySearchResponse as UserDirectorySearchResponse,
  UserDirectoryUser as UserDirectoryUser,
  VersionsGetResponse as VersionsGetResponse,
  VoIPGetTurnServerResponse as VoIPGetTurnServerResponse,
  Room as Room,
  RateLimit as RateLimit,
};
export {
  MatrixFactory_instance as MatrixFactory_instance1i47jjnqbr685,
  SyncResponse as SyncResponse9w6o34sib0b5,
};
//endregion

//# sourceMappingURL=kmatrix-core.mjs.map
