type Nullable<T> = T | null | undefined
declare function KtSingleton<T>(): T & (abstract new() => any);
export declare interface KtMap<K, V> {
    asJsReadonlyMapView(): ReadonlyMap<K, V>;
    readonly __doNotUseOrImplementIt: {
        readonly "kotlin.collections.KtMap": unique symbol;
    };
}
export declare namespace KtMap {
    function fromJsMap<K, V>(map: ReadonlyMap<K, V>): KtMap<K, V>;
}
export declare interface MatrixStream {
    uri(): string;
    accessToken(): string;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kmatrix.stream.MatrixStream": unique symbol;
    };
}
export declare abstract class MatrixStreamFactory {
    static readonly getInstance: () => typeof MatrixStreamFactory.$metadata$.type;
    private constructor();
}
export declare namespace MatrixStreamFactory {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        abstract class type extends KtSingleton<constructor>() {
            private constructor();
        }
        abstract class constructor {
            instance(uri: string, accessToken?: string): MatrixStream;
            private constructor();
        }
    }
}
/** @deprecated  */
export declare const initHook: { get(): any; };
export declare interface Matrix {
    login(): LoginResource;
    accounts(): AccountsResource;
    profile(): ProfileResource;
    rooms(): RoomsResource;
    sync(): SyncResource;
    filter(): FilterResource;
    presence(): PresenceResource;
    media(): MediaResource;
    devices(): DevicesResource;
    directory(): DirectoryResource;
    tags(): TagsResource;
    pushRules(): PushRulesResource;
    search(): SearchResource;
    userDirectory(): UserDirectoryResource;
    versions(): VersionsResource;
    capabilities(): CapabilitiesResource;
    accountData(): AccountDataResource;
    notifications(): NotificationsResource;
    events(): EventsResource;
    relations(): RelationsResource;
    voip(): VoIPResource;
    pushers(): PushersResource;
    uri(): string;
    accessToken(): string;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kmatrix.Matrix": unique symbol;
    };
}
export declare abstract class MatrixFactory {
    static readonly getInstance: () => typeof MatrixFactory.$metadata$.type;
    private constructor();
}
export declare namespace MatrixFactory {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        abstract class type extends KtSingleton<constructor>() {
            private constructor();
        }
        abstract class constructor {
            instance(uri: string, accessToken?: string): Matrix;
            private constructor();
        }
    }
}
export declare interface AccountDataResource {
    getAccountData(request: AccountDataGetRequest): Promise<Response<string>>;
    setAccountData(request: AccountDataSetRequest): Promise<ResponseUnit>;
    getRoomAccountData(request: AccountDataGetRequest): Promise<Response<string>>;
    setRoomAccountData(request: AccountDataSetRequest): Promise<ResponseUnit>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kmatrix.api.AccountDataResource": unique symbol;
    };
}
export declare interface AccountsResource {
    whoami(): Promise<Response<AccountsWhoamiResponse>>;
    logout(): Promise<ResponseUnit>;
    logoutAll(): Promise<ResponseUnit>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kmatrix.api.AccountsResource": unique symbol;
    };
}
export declare interface CapabilitiesResource {
    getCapabilities(): Promise<Response<CapabilitiesGetResponse>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kmatrix.api.CapabilitiesResource": unique symbol;
    };
}
export declare interface DevicesResource {
    getDevices(): Promise<Response<DevicesGetResponse>>;
    getDevice(deviceId: string): Promise<Response<DevicesGetDeviceResponse>>;
    updateDevice(request: DevicesUpdateRequest): Promise<ResponseUnit>;
    deleteDevice(request: DevicesDeleteRequest): Promise<ResponseUnit>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kmatrix.api.DevicesResource": unique symbol;
    };
}
export declare interface DirectoryResource {
    resolveAlias(roomAlias: string): Promise<Response<DirectoryResolveAliasResponse>>;
    setAlias(request: DirectorySetAliasRequest): Promise<ResponseUnit>;
    deleteAlias(roomAlias: string): Promise<ResponseUnit>;
    getPublicRooms(request: DirectoryGetPublicRoomsRequest): Promise<Response<DirectoryGetPublicRoomsResponse>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kmatrix.api.DirectoryResource": unique symbol;
    };
}
export declare interface EventsResource {
    getEvent(roomId: string, eventId: string): Promise<Response<EventsGetEventResponse>>;
    getContext(request: EventsGetContextRequest): Promise<Response<EventsGetContextResponse>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kmatrix.api.EventsResource": unique symbol;
    };
}
export declare interface FilterResource {
    createFilter(request: FilterCreateRequest): Promise<Response<FilterCreateResponse>>;
    getFilter(request: FilterGetRequest): Promise<Response<FilterGetResponse>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kmatrix.api.FilterResource": unique symbol;
    };
}
export declare interface LoginResource {
    getLoginFlows(): Promise<Response<LoginGetLoginFlowsResponse>>;
    loginWithPassword(request: LoginPasswordRequest): Promise<Response<LoginPasswordResponse>>;
    ssoRedirectUrl(request: LoginSsoRedirectRequest): string;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kmatrix.api.LoginResource": unique symbol;
    };
}
export declare interface MediaResource {
    upload(request: MediaUploadRequest): Promise<Response<MediaUploadResponse>>;
    download(request: MediaDownloadRequest): Promise<Int8Array>;
    thumbnail(request: MediaThumbnailRequest): Promise<Int8Array>;
    getConfig(): Promise<Response<MediaGetConfigResponse>>;
    previewUrl(request: MediaPreviewUrlRequest): Promise<Response<MediaPreviewUrlResponse>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kmatrix.api.MediaResource": unique symbol;
    };
}
export declare interface NotificationsResource {
    getNotifications(request: NotificationsGetRequest): Promise<Response<NotificationsGetResponse>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kmatrix.api.NotificationsResource": unique symbol;
    };
}
export declare interface PresenceResource {
    getPresence(userId: string): Promise<Response<PresenceGetResponse>>;
    setPresence(request: PresenceSetRequest): Promise<ResponseUnit>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kmatrix.api.PresenceResource": unique symbol;
    };
}
export declare interface ProfileResource {
    getProfile(userId: string): Promise<Response<ProfileGetProfileResponse>>;
    getDisplayName(userId: string): Promise<Response<ProfileGetDisplayNameResponse>>;
    setDisplayName(request: ProfileSetDisplayNameRequest): Promise<ResponseUnit>;
    getAvatarUrl(userId: string): Promise<Response<ProfileGetAvatarUrlResponse>>;
    setAvatarUrl(request: ProfileSetAvatarUrlRequest): Promise<ResponseUnit>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kmatrix.api.ProfileResource": unique symbol;
    };
}
export declare interface PushRulesResource {
    getPushRules(): Promise<Response<PushRulesGetResponse>>;
    getEnabled(scope: string, kind: string, ruleId: string): Promise<Response<PushRulesGetEnabledResponse>>;
    setEnabled(request: PushRulesSetEnabledRequest): Promise<ResponseUnit>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kmatrix.api.PushRulesResource": unique symbol;
    };
}
export declare interface PushersResource {
    getPushers(): Promise<Response<PushersGetResponse>>;
    setPusher(request: PushersSetRequest): Promise<ResponseUnit>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kmatrix.api.PushersResource": unique symbol;
    };
}
export declare interface RelationsResource {
    getRelations(request: RelationsGetRequest): Promise<Response<RelationsGetResponse>>;
    getThreads(request: ThreadsGetRequest): Promise<Response<ThreadsGetResponse>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kmatrix.api.RelationsResource": unique symbol;
    };
}
export declare interface RoomsResource {
    createRoom(request: RoomsCreateRoomRequest): Promise<Response<RoomsCreateRoomResponse>>;
    joinRoom(request: RoomsJoinRoomRequest): Promise<Response<RoomsJoinRoomResponse>>;
    leaveRoom(request: RoomsLeaveRoomRequest): Promise<ResponseUnit>;
    invite(request: RoomsInviteRequest): Promise<ResponseUnit>;
    getJoinedRooms(): Promise<Response<RoomsGetJoinedRoomsResponse>>;
    getRoomName(roomId: string): Promise<Response<RoomsGetRoomNameResponse>>;
    getMembers(roomId: string): Promise<Response<RoomsGetMembersResponse>>;
    getJoinedMembers(roomId: string): Promise<Response<RoomsGetJoinedMembersResponse>>;
    getMessages(request: RoomsGetMessagesRequest): Promise<Response<RoomsGetMessagesResponse>>;
    sendMessage(request: RoomsSendMessageRequest): Promise<Response<RoomsSendMessageResponse>>;
    redactEvent(request: RoomsRedactEventRequest): Promise<Response<RoomsRedactEventResponse>>;
    setTyping(request: RoomsTypingRequest): Promise<ResponseUnit>;
    sendReceipt(request: RoomsSendReceiptRequest): Promise<ResponseUnit>;
    setReadMarkers(request: RoomsSetReadMarkersRequest): Promise<ResponseUnit>;
    ban(request: RoomsBanRequest): Promise<ResponseUnit>;
    unban(request: RoomsUnbanRequest): Promise<ResponseUnit>;
    kick(request: RoomsKickRequest): Promise<ResponseUnit>;
    getStateEvent(roomId: string, eventType: string, stateKey?: string): Promise<Response<string>>;
    sendStateEvent(request: RoomsSendStateEventRequest): Promise<Response<RoomsSendStateEventResponse>>;
    forgetRoom(request: RoomsForgetRoomRequest): Promise<ResponseUnit>;
    getState(roomId: string): Promise<Response<Array<RoomsStateEvent>>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kmatrix.api.RoomsResource": unique symbol;
    };
}
export declare interface SearchResource {
    search(request: SearchRequest): Promise<Response<SearchResponse>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kmatrix.api.SearchResource": unique symbol;
    };
}
export declare interface SyncResource {
    sync(request: SyncRequest): Promise<Response<SyncResponse>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kmatrix.api.SyncResource": unique symbol;
    };
}
export declare interface TagsResource {
    getTags(userId: string, roomId: string): Promise<Response<TagsGetResponse>>;
    setTag(request: TagsSetRequest): Promise<ResponseUnit>;
    deleteTag(request: TagsDeleteRequest): Promise<ResponseUnit>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kmatrix.api.TagsResource": unique symbol;
    };
}
export declare interface UserDirectoryResource {
    search(request: UserDirectorySearchRequest): Promise<Response<UserDirectorySearchResponse>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kmatrix.api.UserDirectoryResource": unique symbol;
    };
}
export declare interface VersionsResource {
    getVersions(): Promise<Response<VersionsGetResponse>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kmatrix.api.VersionsResource": unique symbol;
    };
}
export declare interface VoIPResource {
    getTurnServer(): Promise<Response<VoIPGetTurnServerResponse>>;
    readonly __doNotUseOrImplementIt: {
        readonly "work.socialhub.kmatrix.api.VoIPResource": unique symbol;
    };
}
export declare class AccountDataGetRequest {
    constructor();
    get userId(): Nullable<string>;
    set userId(value: Nullable<string>);
    get roomId(): Nullable<string>;
    set roomId(value: Nullable<string>);
    get type(): Nullable<string>;
    set type(value: Nullable<string>);
}
export declare namespace AccountDataGetRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => AccountDataGetRequest;
    }
}
export declare class AccountDataSetRequest {
    constructor();
    get userId(): Nullable<string>;
    set userId(value: Nullable<string>);
    get roomId(): Nullable<string>;
    set roomId(value: Nullable<string>);
    get type(): Nullable<string>;
    set type(value: Nullable<string>);
    get data(): Nullable<string>;
    set data(value: Nullable<string>);
}
export declare namespace AccountDataSetRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => AccountDataSetRequest;
    }
}
export declare class DevicesDeleteRequest {
    constructor();
    get deviceId(): Nullable<string>;
    set deviceId(value: Nullable<string>);
}
export declare namespace DevicesDeleteRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => DevicesDeleteRequest;
    }
}
export declare class DevicesUpdateRequest {
    constructor();
    get deviceId(): Nullable<string>;
    set deviceId(value: Nullable<string>);
    get displayName(): Nullable<string>;
    set displayName(value: Nullable<string>);
}
export declare namespace DevicesUpdateRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => DevicesUpdateRequest;
    }
}
export declare class DirectoryGetPublicRoomsRequest {
    constructor();
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get since(): Nullable<string>;
    set since(value: Nullable<string>);
    get server(): Nullable<string>;
    set server(value: Nullable<string>);
}
export declare namespace DirectoryGetPublicRoomsRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => DirectoryGetPublicRoomsRequest;
    }
}
export declare class DirectorySetAliasRequest {
    constructor();
    get roomAlias(): Nullable<string>;
    set roomAlias(value: Nullable<string>);
    get roomId(): Nullable<string>;
    set roomId(value: Nullable<string>);
}
export declare namespace DirectorySetAliasRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => DirectorySetAliasRequest;
    }
}
export declare class EventsGetContextRequest {
    constructor();
    get roomId(): Nullable<string>;
    set roomId(value: Nullable<string>);
    get eventId(): Nullable<string>;
    set eventId(value: Nullable<string>);
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get filter(): Nullable<string>;
    set filter(value: Nullable<string>);
}
export declare namespace EventsGetContextRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => EventsGetContextRequest;
    }
}
export declare class FilterCreateRequest {
    constructor();
    get userId(): Nullable<string>;
    set userId(value: Nullable<string>);
    get eventTypes(): Nullable<Array<string>>;
    set eventTypes(value: Nullable<Array<string>>);
    get notEventTypes(): Nullable<Array<string>>;
    set notEventTypes(value: Nullable<Array<string>>);
    get rooms(): Nullable<Array<string>>;
    set rooms(value: Nullable<Array<string>>);
    get notRooms(): Nullable<Array<string>>;
    set notRooms(value: Nullable<Array<string>>);
    get senders(): Nullable<Array<string>>;
    set senders(value: Nullable<Array<string>>);
    get notSenders(): Nullable<Array<string>>;
    set notSenders(value: Nullable<Array<string>>);
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get includeLeave(): Nullable<boolean>;
    set includeLeave(value: Nullable<boolean>);
}
export declare namespace FilterCreateRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FilterCreateRequest;
    }
}
export declare class FilterGetRequest {
    constructor();
    get userId(): Nullable<string>;
    set userId(value: Nullable<string>);
    get filterId(): Nullable<string>;
    set filterId(value: Nullable<string>);
}
export declare namespace FilterGetRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FilterGetRequest;
    }
}
export declare class LoginPasswordRequest {
    constructor();
    get user(): Nullable<string>;
    set user(value: Nullable<string>);
    get password(): Nullable<string>;
    set password(value: Nullable<string>);
    get initialDeviceDisplayName(): Nullable<string>;
    set initialDeviceDisplayName(value: Nullable<string>);
}
export declare namespace LoginPasswordRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => LoginPasswordRequest;
    }
}
export declare class LoginSsoRedirectRequest {
    constructor();
    get redirectUrl(): Nullable<string>;
    set redirectUrl(value: Nullable<string>);
}
export declare namespace LoginSsoRedirectRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => LoginSsoRedirectRequest;
    }
}
export declare class MediaDownloadRequest {
    constructor();
    get serverName(): Nullable<string>;
    set serverName(value: Nullable<string>);
    get mediaId(): Nullable<string>;
    set mediaId(value: Nullable<string>);
    get allowRemote(): Nullable<boolean>;
    set allowRemote(value: Nullable<boolean>);
}
export declare namespace MediaDownloadRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => MediaDownloadRequest;
    }
}
export declare class MediaPreviewUrlRequest {
    constructor();
    get url(): Nullable<string>;
    set url(value: Nullable<string>);
    get ts(): Nullable<bigint>;
    set ts(value: Nullable<bigint>);
}
export declare namespace MediaPreviewUrlRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => MediaPreviewUrlRequest;
    }
}
export declare class MediaThumbnailRequest {
    constructor();
    get serverName(): Nullable<string>;
    set serverName(value: Nullable<string>);
    get mediaId(): Nullable<string>;
    set mediaId(value: Nullable<string>);
    get width(): Nullable<number>;
    set width(value: Nullable<number>);
    get height(): Nullable<number>;
    set height(value: Nullable<number>);
    get method(): Nullable<string>;
    set method(value: Nullable<string>);
}
export declare namespace MediaThumbnailRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => MediaThumbnailRequest;
    }
}
export declare class MediaUploadRequest {
    constructor();
    get fileName(): Nullable<string>;
    set fileName(value: Nullable<string>);
    get contentType(): Nullable<string>;
    set contentType(value: Nullable<string>);
    get bytes(): Nullable<Int8Array>;
    set bytes(value: Nullable<Int8Array>);
}
export declare namespace MediaUploadRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => MediaUploadRequest;
    }
}
export declare class NotificationsGetRequest {
    constructor();
    get from(): Nullable<string>;
    set from(value: Nullable<string>);
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get only(): Nullable<string>;
    set only(value: Nullable<string>);
}
export declare namespace NotificationsGetRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NotificationsGetRequest;
    }
}
export declare class PresenceSetRequest {
    constructor();
    get userId(): Nullable<string>;
    set userId(value: Nullable<string>);
    get presence(): Nullable<string>;
    set presence(value: Nullable<string>);
    get statusMsg(): Nullable<string>;
    set statusMsg(value: Nullable<string>);
}
export declare namespace PresenceSetRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => PresenceSetRequest;
    }
}
export declare class ProfileSetAvatarUrlRequest {
    constructor();
    get userId(): Nullable<string>;
    set userId(value: Nullable<string>);
    get avatarUrl(): Nullable<string>;
    set avatarUrl(value: Nullable<string>);
}
export declare namespace ProfileSetAvatarUrlRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ProfileSetAvatarUrlRequest;
    }
}
export declare class ProfileSetDisplayNameRequest {
    constructor();
    get userId(): Nullable<string>;
    set userId(value: Nullable<string>);
    get displayname(): Nullable<string>;
    set displayname(value: Nullable<string>);
}
export declare namespace ProfileSetDisplayNameRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ProfileSetDisplayNameRequest;
    }
}
export declare class PushRulesSetEnabledRequest {
    constructor();
    get scope(): Nullable<string>;
    set scope(value: Nullable<string>);
    get kind(): Nullable<string>;
    set kind(value: Nullable<string>);
    get ruleId(): Nullable<string>;
    set ruleId(value: Nullable<string>);
    get enabled(): Nullable<boolean>;
    set enabled(value: Nullable<boolean>);
}
export declare namespace PushRulesSetEnabledRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => PushRulesSetEnabledRequest;
    }
}
export declare class PushersSetRequest {
    constructor();
    get pushkey(): Nullable<string>;
    set pushkey(value: Nullable<string>);
    get kind(): Nullable<string>;
    set kind(value: Nullable<string>);
    get appId(): Nullable<string>;
    set appId(value: Nullable<string>);
    get appDisplayName(): Nullable<string>;
    set appDisplayName(value: Nullable<string>);
    get deviceDisplayName(): Nullable<string>;
    set deviceDisplayName(value: Nullable<string>);
    get profileTag(): Nullable<string>;
    set profileTag(value: Nullable<string>);
    get lang(): Nullable<string>;
    set lang(value: Nullable<string>);
    get data(): Nullable<PusherData>;
    set data(value: Nullable<PusherData>);
    get append(): Nullable<boolean>;
    set append(value: Nullable<boolean>);
    get enabled(): Nullable<boolean>;
    set enabled(value: Nullable<boolean>);
}
export declare namespace PushersSetRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => PushersSetRequest;
    }
}
export declare class PusherData {
    constructor();
    get url(): Nullable<string>;
    set url(value: Nullable<string>);
    get format(): Nullable<string>;
    set format(value: Nullable<string>);
}
export declare namespace PusherData {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => PusherData;
    }
}
export declare class RelationsGetRequest {
    constructor();
    get roomId(): Nullable<string>;
    set roomId(value: Nullable<string>);
    get eventId(): Nullable<string>;
    set eventId(value: Nullable<string>);
    get relType(): Nullable<string>;
    set relType(value: Nullable<string>);
    get eventType(): Nullable<string>;
    set eventType(value: Nullable<string>);
    get from(): Nullable<string>;
    set from(value: Nullable<string>);
    get to(): Nullable<string>;
    set to(value: Nullable<string>);
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get dir(): Nullable<string>;
    set dir(value: Nullable<string>);
}
export declare namespace RelationsGetRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RelationsGetRequest;
    }
}
export declare class ThreadsGetRequest {
    constructor();
    get roomId(): Nullable<string>;
    set roomId(value: Nullable<string>);
    get include(): Nullable<string>;
    set include(value: Nullable<string>);
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get from(): Nullable<string>;
    set from(value: Nullable<string>);
}
export declare namespace ThreadsGetRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ThreadsGetRequest;
    }
}
export declare class RoomsBanRequest {
    constructor();
    get roomId(): Nullable<string>;
    set roomId(value: Nullable<string>);
    get userId(): Nullable<string>;
    set userId(value: Nullable<string>);
    get reason(): Nullable<string>;
    set reason(value: Nullable<string>);
}
export declare namespace RoomsBanRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsBanRequest;
    }
}
export declare class RoomsCreateRoomRequest {
    constructor();
    get visibility(): Nullable<string>;
    set visibility(value: Nullable<string>);
    get roomAliasName(): Nullable<string>;
    set roomAliasName(value: Nullable<string>);
    get name(): Nullable<string>;
    set name(value: Nullable<string>);
    get topic(): Nullable<string>;
    set topic(value: Nullable<string>);
    get invite(): Nullable<Array<string>>;
    set invite(value: Nullable<Array<string>>);
    get preset(): Nullable<string>;
    set preset(value: Nullable<string>);
    get isDirect(): Nullable<boolean>;
    set isDirect(value: Nullable<boolean>);
}
export declare namespace RoomsCreateRoomRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsCreateRoomRequest;
    }
}
export declare class RoomsForgetRoomRequest {
    constructor();
    get roomId(): Nullable<string>;
    set roomId(value: Nullable<string>);
}
export declare namespace RoomsForgetRoomRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsForgetRoomRequest;
    }
}
export declare class RoomsGetJoinedRoomsRequest {
    constructor();
}
export declare namespace RoomsGetJoinedRoomsRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsGetJoinedRoomsRequest;
    }
}
export declare class RoomsGetMessagesRequest {
    constructor();
    get roomId(): Nullable<string>;
    set roomId(value: Nullable<string>);
    get from(): Nullable<string>;
    set from(value: Nullable<string>);
    get to(): Nullable<string>;
    set to(value: Nullable<string>);
    get dir(): Nullable<string>;
    set dir(value: Nullable<string>);
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get filter(): Nullable<string>;
    set filter(value: Nullable<string>);
}
export declare namespace RoomsGetMessagesRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsGetMessagesRequest;
    }
}
export declare class RoomsInviteRequest {
    constructor();
    get roomId(): Nullable<string>;
    set roomId(value: Nullable<string>);
    get userId(): Nullable<string>;
    set userId(value: Nullable<string>);
    get reason(): Nullable<string>;
    set reason(value: Nullable<string>);
}
export declare namespace RoomsInviteRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsInviteRequest;
    }
}
export declare class RoomsJoinRoomRequest {
    constructor();
    get roomIdOrAlias(): Nullable<string>;
    set roomIdOrAlias(value: Nullable<string>);
    get reason(): Nullable<string>;
    set reason(value: Nullable<string>);
}
export declare namespace RoomsJoinRoomRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsJoinRoomRequest;
    }
}
export declare class RoomsKickRequest {
    constructor();
    get roomId(): Nullable<string>;
    set roomId(value: Nullable<string>);
    get userId(): Nullable<string>;
    set userId(value: Nullable<string>);
    get reason(): Nullable<string>;
    set reason(value: Nullable<string>);
}
export declare namespace RoomsKickRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsKickRequest;
    }
}
export declare class RoomsLeaveRoomRequest {
    constructor();
    get roomId(): Nullable<string>;
    set roomId(value: Nullable<string>);
    get reason(): Nullable<string>;
    set reason(value: Nullable<string>);
}
export declare namespace RoomsLeaveRoomRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsLeaveRoomRequest;
    }
}
export declare class RoomsRedactEventRequest {
    constructor();
    get roomId(): Nullable<string>;
    set roomId(value: Nullable<string>);
    get eventId(): Nullable<string>;
    set eventId(value: Nullable<string>);
    get reason(): Nullable<string>;
    set reason(value: Nullable<string>);
}
export declare namespace RoomsRedactEventRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsRedactEventRequest;
    }
}
export declare class RoomsSendMessageRequest {
    constructor();
    get roomId(): Nullable<string>;
    set roomId(value: Nullable<string>);
    get body(): Nullable<string>;
    set body(value: Nullable<string>);
    get msgtype(): Nullable<string>;
    set msgtype(value: Nullable<string>);
}
export declare namespace RoomsSendMessageRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsSendMessageRequest;
    }
}
export declare class RoomsSendReceiptRequest {
    constructor();
    get roomId(): Nullable<string>;
    set roomId(value: Nullable<string>);
    get eventId(): Nullable<string>;
    set eventId(value: Nullable<string>);
    get receiptType(): Nullable<string>;
    set receiptType(value: Nullable<string>);
    get threadId(): Nullable<string>;
    set threadId(value: Nullable<string>);
}
export declare namespace RoomsSendReceiptRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsSendReceiptRequest;
    }
}
export declare class RoomsSendStateEventRequest {
    constructor();
    get roomId(): Nullable<string>;
    set roomId(value: Nullable<string>);
    get eventType(): Nullable<string>;
    set eventType(value: Nullable<string>);
    get stateKey(): Nullable<string>;
    set stateKey(value: Nullable<string>);
    get body(): Nullable<string>;
    set body(value: Nullable<string>);
}
export declare namespace RoomsSendStateEventRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsSendStateEventRequest;
    }
}
export declare class RoomsSetReadMarkersRequest {
    constructor();
    get roomId(): Nullable<string>;
    set roomId(value: Nullable<string>);
    get fullyRead(): Nullable<string>;
    set fullyRead(value: Nullable<string>);
    get read(): Nullable<string>;
    set read(value: Nullable<string>);
    get readPrivate(): Nullable<string>;
    set readPrivate(value: Nullable<string>);
}
export declare namespace RoomsSetReadMarkersRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsSetReadMarkersRequest;
    }
}
export declare class RoomsTypingRequest {
    constructor();
    get roomId(): Nullable<string>;
    set roomId(value: Nullable<string>);
    get userId(): Nullable<string>;
    set userId(value: Nullable<string>);
    get typing(): Nullable<boolean>;
    set typing(value: Nullable<boolean>);
    get timeout(): Nullable<number>;
    set timeout(value: Nullable<number>);
}
export declare namespace RoomsTypingRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsTypingRequest;
    }
}
export declare class RoomsUnbanRequest {
    constructor();
    get roomId(): Nullable<string>;
    set roomId(value: Nullable<string>);
    get userId(): Nullable<string>;
    set userId(value: Nullable<string>);
    get reason(): Nullable<string>;
    set reason(value: Nullable<string>);
}
export declare namespace RoomsUnbanRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsUnbanRequest;
    }
}
export declare class SearchRequest {
    constructor();
    get searchTerm(): Nullable<string>;
    set searchTerm(value: Nullable<string>);
    get keys(): Nullable<Array<string>>;
    set keys(value: Nullable<Array<string>>);
    get orderBy(): Nullable<string>;
    set orderBy(value: Nullable<string>);
    get roomIds(): Nullable<Array<string>>;
    set roomIds(value: Nullable<Array<string>>);
    get nextBatch(): Nullable<string>;
    set nextBatch(value: Nullable<string>);
}
export declare namespace SearchRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => SearchRequest;
    }
}
export declare class SyncRequest {
    constructor();
    get since(): Nullable<string>;
    set since(value: Nullable<string>);
    get timeout(): Nullable<number>;
    set timeout(value: Nullable<number>);
    get filter(): Nullable<string>;
    set filter(value: Nullable<string>);
    get fullState(): Nullable<boolean>;
    set fullState(value: Nullable<boolean>);
    get setPresence(): Nullable<string>;
    set setPresence(value: Nullable<string>);
}
export declare namespace SyncRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => SyncRequest;
    }
}
export declare class TagsDeleteRequest {
    constructor();
    get userId(): Nullable<string>;
    set userId(value: Nullable<string>);
    get roomId(): Nullable<string>;
    set roomId(value: Nullable<string>);
    get tag(): Nullable<string>;
    set tag(value: Nullable<string>);
}
export declare namespace TagsDeleteRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => TagsDeleteRequest;
    }
}
export declare class TagsSetRequest {
    constructor();
    get userId(): Nullable<string>;
    set userId(value: Nullable<string>);
    get roomId(): Nullable<string>;
    set roomId(value: Nullable<string>);
    get tag(): Nullable<string>;
    set tag(value: Nullable<string>);
    get order(): Nullable<number>;
    set order(value: Nullable<number>);
}
export declare namespace TagsSetRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => TagsSetRequest;
    }
}
export declare class UserDirectorySearchRequest {
    constructor();
    get searchTerm(): Nullable<string>;
    set searchTerm(value: Nullable<string>);
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
}
export declare namespace UserDirectorySearchRequest {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => UserDirectorySearchRequest;
    }
}
export declare class Response<T> {
    constructor(data: T);
    get data(): T;
    set data(value: T);
    get limit(): Nullable<RateLimit>;
    set limit(value: Nullable<RateLimit>);
    get json(): Nullable<string>;
    set json(value: Nullable<string>);
}
export declare namespace Response {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new <T>() => Response<T>;
    }
}
export declare class ResponseUnit {
    constructor();
    get limit(): Nullable<RateLimit>;
    set limit(value: Nullable<RateLimit>);
}
export declare namespace ResponseUnit {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ResponseUnit;
    }
}
export declare class AccountsWhoamiResponse {
    constructor();
    get userId(): string;
    set userId(value: string);
    get deviceId(): Nullable<string>;
    set deviceId(value: Nullable<string>);
    get isGuest(): boolean;
    set isGuest(value: boolean);
}
export declare namespace AccountsWhoamiResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => AccountsWhoamiResponse;
    }
}
export declare class CapabilitiesGetResponse {
    constructor();
    get capabilities(): CapabilitiesGetResponse.Capabilities;
    set capabilities(value: CapabilitiesGetResponse.Capabilities);
}
export declare namespace CapabilitiesGetResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => CapabilitiesGetResponse;
    }
    class Capabilities {
        constructor();
        get changePassword(): Nullable<CapabilitiesGetResponse.ChangePassword>;
        set changePassword(value: Nullable<CapabilitiesGetResponse.ChangePassword>);
        get roomVersions(): Nullable<CapabilitiesGetResponse.RoomVersions>;
        set roomVersions(value: Nullable<CapabilitiesGetResponse.RoomVersions>);
        get setDisplayname(): Nullable<CapabilitiesGetResponse.BooleanCapability>;
        set setDisplayname(value: Nullable<CapabilitiesGetResponse.BooleanCapability>);
        get setAvatarUrl(): Nullable<CapabilitiesGetResponse.BooleanCapability>;
        set setAvatarUrl(value: Nullable<CapabilitiesGetResponse.BooleanCapability>);
        get thirdPartyIdChanges(): Nullable<CapabilitiesGetResponse.BooleanCapability>;
        set thirdPartyIdChanges(value: Nullable<CapabilitiesGetResponse.BooleanCapability>);
    }
    namespace Capabilities {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Capabilities;
        }
    }
    class ChangePassword {
        constructor();
        get enabled(): boolean;
        set enabled(value: boolean);
    }
    namespace ChangePassword {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChangePassword;
        }
    }
    class BooleanCapability {
        constructor();
        get enabled(): boolean;
        set enabled(value: boolean);
    }
    namespace BooleanCapability {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BooleanCapability;
        }
    }
    class RoomVersions {
        constructor();
        get default(): string;
        set default(value: string);
        get available(): KtMap<string, string>;
        set available(value: KtMap<string, string>);
    }
    namespace RoomVersions {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RoomVersions;
        }
    }
}
export declare class DevicesGetDeviceResponse {
    constructor();
    get deviceId(): string;
    set deviceId(value: string);
    get displayName(): Nullable<string>;
    set displayName(value: Nullable<string>);
    get lastSeenIp(): Nullable<string>;
    set lastSeenIp(value: Nullable<string>);
    get lastSeenTs(): Nullable<bigint>;
    set lastSeenTs(value: Nullable<bigint>);
}
export declare namespace DevicesGetDeviceResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => DevicesGetDeviceResponse;
    }
}
export declare class DevicesGetResponse {
    constructor();
    get devices(): Array<Device>;
    set devices(value: Array<Device>);
}
export declare namespace DevicesGetResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => DevicesGetResponse;
    }
}
export declare class Device {
    constructor();
    get deviceId(): string;
    set deviceId(value: string);
    get displayName(): Nullable<string>;
    set displayName(value: Nullable<string>);
    get lastSeenIp(): Nullable<string>;
    set lastSeenIp(value: Nullable<string>);
    get lastSeenTs(): Nullable<bigint>;
    set lastSeenTs(value: Nullable<bigint>);
}
export declare namespace Device {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => Device;
    }
}
export declare class DirectoryGetPublicRoomsResponse {
    constructor();
    get chunk(): Array<PublicRoomChunk>;
    set chunk(value: Array<PublicRoomChunk>);
    get nextBatch(): Nullable<string>;
    set nextBatch(value: Nullable<string>);
    get prevBatch(): Nullable<string>;
    set prevBatch(value: Nullable<string>);
    get totalRoomCountEstimate(): Nullable<bigint>;
    set totalRoomCountEstimate(value: Nullable<bigint>);
}
export declare namespace DirectoryGetPublicRoomsResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => DirectoryGetPublicRoomsResponse;
    }
}
export declare class PublicRoomChunk {
    constructor();
    get roomId(): string;
    set roomId(value: string);
    get name(): Nullable<string>;
    set name(value: Nullable<string>);
    get topic(): Nullable<string>;
    set topic(value: Nullable<string>);
    get numJoinedMembers(): bigint;
    set numJoinedMembers(value: bigint);
    get canonicalAlias(): Nullable<string>;
    set canonicalAlias(value: Nullable<string>);
    get aliases(): Nullable<Array<string>>;
    set aliases(value: Nullable<Array<string>>);
    get worldReadable(): boolean;
    set worldReadable(value: boolean);
    get guestCanJoin(): boolean;
    set guestCanJoin(value: boolean);
    get avatarUrl(): Nullable<string>;
    set avatarUrl(value: Nullable<string>);
    get joinRule(): Nullable<string>;
    set joinRule(value: Nullable<string>);
}
export declare namespace PublicRoomChunk {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => PublicRoomChunk;
    }
}
export declare class DirectoryResolveAliasResponse {
    constructor();
    get roomId(): string;
    set roomId(value: string);
    get servers(): Array<string>;
    set servers(value: Array<string>);
}
export declare namespace DirectoryResolveAliasResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => DirectoryResolveAliasResponse;
    }
}
export declare class EventsGetContextResponse {
    constructor();
    get start(): Nullable<string>;
    set start(value: Nullable<string>);
    get end(): Nullable<string>;
    set end(value: Nullable<string>);
    get event(): Nullable<EventsGetContextResponse.ContextEvent>;
    set event(value: Nullable<EventsGetContextResponse.ContextEvent>);
    get eventsBefore(): Array<EventsGetContextResponse.ContextEvent>;
    set eventsBefore(value: Array<EventsGetContextResponse.ContextEvent>);
    get eventsAfter(): Array<EventsGetContextResponse.ContextEvent>;
    set eventsAfter(value: Array<EventsGetContextResponse.ContextEvent>);
    get state(): Array<EventsGetContextResponse.ContextEvent>;
    set state(value: Array<EventsGetContextResponse.ContextEvent>);
}
export declare namespace EventsGetContextResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => EventsGetContextResponse;
    }
    class ContextEvent {
        constructor();
        get content(): KtMap<string, any/* JsonElement */>;
        set content(value: KtMap<string, any/* JsonElement */>);
        get eventId(): string;
        set eventId(value: string);
        get originServerTs(): bigint;
        set originServerTs(value: bigint);
        get roomId(): Nullable<string>;
        set roomId(value: Nullable<string>);
        get sender(): string;
        set sender(value: string);
        get type(): string;
        set type(value: string);
        get stateKey(): Nullable<string>;
        set stateKey(value: Nullable<string>);
    }
    namespace ContextEvent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ContextEvent;
        }
    }
}
export declare class EventsGetEventResponse {
    constructor();
    get content(): KtMap<string, any/* JsonElement */>;
    set content(value: KtMap<string, any/* JsonElement */>);
    get eventId(): string;
    set eventId(value: string);
    get originServerTs(): bigint;
    set originServerTs(value: bigint);
    get roomId(): string;
    set roomId(value: string);
    get sender(): string;
    set sender(value: string);
    get type(): string;
    set type(value: string);
    get stateKey(): Nullable<string>;
    set stateKey(value: Nullable<string>);
    get unsigned(): Nullable<KtMap<string, any/* JsonElement */>>;
    set unsigned(value: Nullable<KtMap<string, any/* JsonElement */>>);
}
export declare namespace EventsGetEventResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => EventsGetEventResponse;
    }
}
export declare class FilterCreateResponse {
    constructor();
    get filterId(): string;
    set filterId(value: string);
}
export declare namespace FilterCreateResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FilterCreateResponse;
    }
}
export declare class FilterGetResponse {
    constructor();
    get eventFields(): Nullable<Array<string>>;
    set eventFields(value: Nullable<Array<string>>);
    get eventFormat(): Nullable<string>;
    set eventFormat(value: Nullable<string>);
    get presence(): Nullable<EventFilter>;
    set presence(value: Nullable<EventFilter>);
    get accountData(): Nullable<EventFilter>;
    set accountData(value: Nullable<EventFilter>);
    get room(): Nullable<RoomFilter>;
    set room(value: Nullable<RoomFilter>);
}
export declare namespace FilterGetResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => FilterGetResponse;
    }
}
export declare class EventFilter {
    constructor();
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get notSenders(): Nullable<Array<string>>;
    set notSenders(value: Nullable<Array<string>>);
    get notTypes(): Nullable<Array<string>>;
    set notTypes(value: Nullable<Array<string>>);
    get senders(): Nullable<Array<string>>;
    set senders(value: Nullable<Array<string>>);
    get types(): Nullable<Array<string>>;
    set types(value: Nullable<Array<string>>);
}
export declare namespace EventFilter {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => EventFilter;
    }
}
export declare class RoomFilter {
    constructor();
    get notRooms(): Nullable<Array<string>>;
    set notRooms(value: Nullable<Array<string>>);
    get rooms(): Nullable<Array<string>>;
    set rooms(value: Nullable<Array<string>>);
    get ephemeral(): Nullable<RoomEventFilter>;
    set ephemeral(value: Nullable<RoomEventFilter>);
    get includeLeave(): Nullable<boolean>;
    set includeLeave(value: Nullable<boolean>);
    get state(): Nullable<RoomEventFilter>;
    set state(value: Nullable<RoomEventFilter>);
    get timeline(): Nullable<RoomEventFilter>;
    set timeline(value: Nullable<RoomEventFilter>);
    get accountData(): Nullable<RoomEventFilter>;
    set accountData(value: Nullable<RoomEventFilter>);
}
export declare namespace RoomFilter {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomFilter;
    }
}
export declare class RoomEventFilter {
    constructor();
    get limit(): Nullable<number>;
    set limit(value: Nullable<number>);
    get notSenders(): Nullable<Array<string>>;
    set notSenders(value: Nullable<Array<string>>);
    get notTypes(): Nullable<Array<string>>;
    set notTypes(value: Nullable<Array<string>>);
    get senders(): Nullable<Array<string>>;
    set senders(value: Nullable<Array<string>>);
    get types(): Nullable<Array<string>>;
    set types(value: Nullable<Array<string>>);
    get notRooms(): Nullable<Array<string>>;
    set notRooms(value: Nullable<Array<string>>);
    get rooms(): Nullable<Array<string>>;
    set rooms(value: Nullable<Array<string>>);
    get containsUrl(): Nullable<boolean>;
    set containsUrl(value: Nullable<boolean>);
    get includeRedundantMembers(): Nullable<boolean>;
    set includeRedundantMembers(value: Nullable<boolean>);
    get lazyLoadMembers(): Nullable<boolean>;
    set lazyLoadMembers(value: Nullable<boolean>);
}
export declare namespace RoomEventFilter {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomEventFilter;
    }
}
export declare class LoginGetLoginFlowsResponse {
    constructor();
    get flows(): Array<LoginFlow>;
    set flows(value: Array<LoginFlow>);
}
export declare namespace LoginGetLoginFlowsResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => LoginGetLoginFlowsResponse;
    }
}
export declare class LoginFlow {
    constructor();
    get type(): string;
    set type(value: string);
}
export declare namespace LoginFlow {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => LoginFlow;
    }
}
export declare class LoginPasswordResponse {
    constructor();
    get userId(): string;
    set userId(value: string);
    get accessToken(): string;
    set accessToken(value: string);
    get deviceId(): string;
    set deviceId(value: string);
    get homeServer(): Nullable<string>;
    set homeServer(value: Nullable<string>);
}
export declare namespace LoginPasswordResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => LoginPasswordResponse;
    }
}
export declare class MediaGetConfigResponse {
    constructor();
    get uploadSize(): Nullable<bigint>;
    set uploadSize(value: Nullable<bigint>);
}
export declare namespace MediaGetConfigResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => MediaGetConfigResponse;
    }
}
export declare class MediaPreviewUrlResponse {
    constructor();
    get ogTitle(): Nullable<string>;
    set ogTitle(value: Nullable<string>);
    get ogDescription(): Nullable<string>;
    set ogDescription(value: Nullable<string>);
    get ogImage(): Nullable<string>;
    set ogImage(value: Nullable<string>);
    get ogImageType(): Nullable<string>;
    set ogImageType(value: Nullable<string>);
    get ogImageWidth(): Nullable<number>;
    set ogImageWidth(value: Nullable<number>);
    get ogImageHeight(): Nullable<number>;
    set ogImageHeight(value: Nullable<number>);
    get matrixImageSize(): Nullable<bigint>;
    set matrixImageSize(value: Nullable<bigint>);
    get ogType(): Nullable<string>;
    set ogType(value: Nullable<string>);
    get ogUrl(): Nullable<string>;
    set ogUrl(value: Nullable<string>);
    get ogSiteName(): Nullable<string>;
    set ogSiteName(value: Nullable<string>);
}
export declare namespace MediaPreviewUrlResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => MediaPreviewUrlResponse;
    }
}
export declare class MediaUploadResponse {
    constructor();
    get contentUri(): string;
    set contentUri(value: string);
}
export declare namespace MediaUploadResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => MediaUploadResponse;
    }
}
export declare class NotificationsGetResponse {
    constructor();
    get nextToken(): Nullable<string>;
    set nextToken(value: Nullable<string>);
    get notifications(): Array<NotificationsGetResponse.Notification>;
    set notifications(value: Array<NotificationsGetResponse.Notification>);
}
export declare namespace NotificationsGetResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => NotificationsGetResponse;
    }
    class Notification {
        constructor();
        get actions(): Array<any/* JsonElement */>;
        set actions(value: Array<any/* JsonElement */>);
        get event(): NotificationsGetResponse.Event;
        set event(value: NotificationsGetResponse.Event);
        get profileTag(): Nullable<string>;
        set profileTag(value: Nullable<string>);
        get read(): boolean;
        set read(value: boolean);
        get roomId(): string;
        set roomId(value: string);
        get ts(): bigint;
        set ts(value: bigint);
    }
    namespace Notification {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Notification;
        }
    }
    class Event {
        constructor();
        get content(): KtMap<string, any/* JsonElement */>;
        set content(value: KtMap<string, any/* JsonElement */>);
        get eventId(): string;
        set eventId(value: string);
        get originServerTs(): bigint;
        set originServerTs(value: bigint);
        get roomId(): Nullable<string>;
        set roomId(value: Nullable<string>);
        get sender(): string;
        set sender(value: string);
        get type(): string;
        set type(value: string);
        get stateKey(): Nullable<string>;
        set stateKey(value: Nullable<string>);
    }
    namespace Event {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Event;
        }
    }
}
export declare class PresenceGetResponse {
    constructor();
    get presence(): string;
    set presence(value: string);
    get lastActiveAgo(): Nullable<bigint>;
    set lastActiveAgo(value: Nullable<bigint>);
    get statusMsg(): Nullable<string>;
    set statusMsg(value: Nullable<string>);
    get currentlyActive(): Nullable<boolean>;
    set currentlyActive(value: Nullable<boolean>);
}
export declare namespace PresenceGetResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => PresenceGetResponse;
    }
}
export declare class ProfileGetAvatarUrlResponse {
    constructor();
    get avatarUrl(): Nullable<string>;
    set avatarUrl(value: Nullable<string>);
}
export declare namespace ProfileGetAvatarUrlResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ProfileGetAvatarUrlResponse;
    }
}
export declare class ProfileGetDisplayNameResponse {
    constructor();
    get displayname(): Nullable<string>;
    set displayname(value: Nullable<string>);
}
export declare namespace ProfileGetDisplayNameResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ProfileGetDisplayNameResponse;
    }
}
export declare class ProfileGetProfileResponse {
    constructor();
    get displayname(): Nullable<string>;
    set displayname(value: Nullable<string>);
    get avatarUrl(): Nullable<string>;
    set avatarUrl(value: Nullable<string>);
}
export declare namespace ProfileGetProfileResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ProfileGetProfileResponse;
    }
}
export declare class PushRulesGetEnabledResponse {
    constructor();
    get enabled(): boolean;
    set enabled(value: boolean);
}
export declare namespace PushRulesGetEnabledResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => PushRulesGetEnabledResponse;
    }
}
export declare class PushRulesGetResponse {
    constructor();
    get global(): Nullable<PushRuleset>;
    set global(value: Nullable<PushRuleset>);
}
export declare namespace PushRulesGetResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => PushRulesGetResponse;
    }
}
export declare class PushRuleset {
    constructor();
    get override(): Nullable<Array<PushRule>>;
    set override(value: Nullable<Array<PushRule>>);
    get content(): Nullable<Array<PushRule>>;
    set content(value: Nullable<Array<PushRule>>);
    get room(): Nullable<Array<PushRule>>;
    set room(value: Nullable<Array<PushRule>>);
    get sender(): Nullable<Array<PushRule>>;
    set sender(value: Nullable<Array<PushRule>>);
    get underride(): Nullable<Array<PushRule>>;
    set underride(value: Nullable<Array<PushRule>>);
}
export declare namespace PushRuleset {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => PushRuleset;
    }
}
export declare class PushRule {
    constructor();
    get ruleId(): string;
    set ruleId(value: string);
    get default(): boolean;
    set default(value: boolean);
    get enabled(): boolean;
    set enabled(value: boolean);
    get conditions(): Nullable<Array<PushCondition>>;
    set conditions(value: Nullable<Array<PushCondition>>);
    get actions(): Array<Nullable<any>>;
    set actions(value: Array<Nullable<any>>);
    get pattern(): Nullable<string>;
    set pattern(value: Nullable<string>);
}
export declare namespace PushRule {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => PushRule;
    }
}
export declare class PushCondition {
    constructor();
    get kind(): string;
    set kind(value: string);
    get key(): Nullable<string>;
    set key(value: Nullable<string>);
    get pattern(): Nullable<string>;
    set pattern(value: Nullable<string>);
    get is(): Nullable<string>;
    set is(value: Nullable<string>);
}
export declare namespace PushCondition {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => PushCondition;
    }
}
export declare class PushersGetResponse {
    constructor();
    get pushers(): Array<PushersGetResponse.Pusher>;
    set pushers(value: Array<PushersGetResponse.Pusher>);
}
export declare namespace PushersGetResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => PushersGetResponse;
    }
    class Pusher {
        constructor();
        get pushkey(): string;
        set pushkey(value: string);
        get kind(): string;
        set kind(value: string);
        get appId(): string;
        set appId(value: string);
        get appDisplayName(): string;
        set appDisplayName(value: string);
        get deviceDisplayName(): string;
        set deviceDisplayName(value: string);
        get profileTag(): Nullable<string>;
        set profileTag(value: Nullable<string>);
        get lang(): string;
        set lang(value: string);
        get data(): PushersGetResponse.PusherData;
        set data(value: PushersGetResponse.PusherData);
        get enabled(): Nullable<boolean>;
        set enabled(value: Nullable<boolean>);
    }
    namespace Pusher {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Pusher;
        }
    }
    class PusherData {
        constructor();
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get format(): Nullable<string>;
        set format(value: Nullable<string>);
    }
    namespace PusherData {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PusherData;
        }
    }
}
export declare class RelationsGetResponse {
    constructor();
    get chunk(): Array<RelationsGetResponse.RelationEvent>;
    set chunk(value: Array<RelationsGetResponse.RelationEvent>);
    get nextBatch(): Nullable<string>;
    set nextBatch(value: Nullable<string>);
    get prevBatch(): Nullable<string>;
    set prevBatch(value: Nullable<string>);
}
export declare namespace RelationsGetResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RelationsGetResponse;
    }
    class RelationEvent {
        constructor();
        get content(): KtMap<string, any/* JsonElement */>;
        set content(value: KtMap<string, any/* JsonElement */>);
        get eventId(): string;
        set eventId(value: string);
        get originServerTs(): bigint;
        set originServerTs(value: bigint);
        get roomId(): Nullable<string>;
        set roomId(value: Nullable<string>);
        get sender(): string;
        set sender(value: string);
        get type(): string;
        set type(value: string);
        get stateKey(): Nullable<string>;
        set stateKey(value: Nullable<string>);
    }
    namespace RelationEvent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RelationEvent;
        }
    }
}
export declare class ThreadsGetResponse {
    constructor();
    get chunk(): Array<ThreadsGetResponse.ThreadEvent>;
    set chunk(value: Array<ThreadsGetResponse.ThreadEvent>);
    get nextBatch(): Nullable<string>;
    set nextBatch(value: Nullable<string>);
}
export declare namespace ThreadsGetResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => ThreadsGetResponse;
    }
    class ThreadEvent {
        constructor();
        get content(): KtMap<string, any/* JsonElement */>;
        set content(value: KtMap<string, any/* JsonElement */>);
        get eventId(): string;
        set eventId(value: string);
        get originServerTs(): bigint;
        set originServerTs(value: bigint);
        get roomId(): Nullable<string>;
        set roomId(value: Nullable<string>);
        get sender(): string;
        set sender(value: string);
        get type(): string;
        set type(value: string);
        get unsigned(): Nullable<KtMap<string, any/* JsonElement */>>;
        set unsigned(value: Nullable<KtMap<string, any/* JsonElement */>>);
    }
    namespace ThreadEvent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ThreadEvent;
        }
    }
}
export declare class RoomsCreateRoomResponse {
    constructor();
    get roomId(): string;
    set roomId(value: string);
}
export declare namespace RoomsCreateRoomResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsCreateRoomResponse;
    }
}
export declare class RoomsGetJoinedMembersResponse {
    constructor();
    get joined(): KtMap<string, RoomMember>;
    set joined(value: KtMap<string, RoomMember>);
}
export declare namespace RoomsGetJoinedMembersResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsGetJoinedMembersResponse;
    }
}
export declare class RoomMember {
    constructor();
    get displayName(): Nullable<string>;
    set displayName(value: Nullable<string>);
    get avatarUrl(): Nullable<string>;
    set avatarUrl(value: Nullable<string>);
}
export declare namespace RoomMember {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomMember;
    }
}
export declare class RoomsGetJoinedRoomsResponse {
    constructor();
    get joinedRooms(): Array<string>;
    set joinedRooms(value: Array<string>);
}
export declare namespace RoomsGetJoinedRoomsResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsGetJoinedRoomsResponse;
    }
}
export declare class RoomsGetMembersResponse {
    constructor();
    get chunk(): Array<RoomEvent>;
    set chunk(value: Array<RoomEvent>);
}
export declare namespace RoomsGetMembersResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsGetMembersResponse;
    }
}
export declare class RoomsGetMessagesResponse {
    constructor();
    get start(): string;
    set start(value: string);
    get end(): Nullable<string>;
    set end(value: Nullable<string>);
    get chunk(): Array<RoomEvent>;
    set chunk(value: Array<RoomEvent>);
    get state(): Nullable<Array<RoomEvent>>;
    set state(value: Nullable<Array<RoomEvent>>);
}
export declare namespace RoomsGetMessagesResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsGetMessagesResponse;
    }
}
export declare class RoomEvent {
    constructor();
    get type(): string;
    set type(value: string);
    get eventId(): string;
    set eventId(value: string);
    get sender(): string;
    set sender(value: string);
    get originServerTs(): bigint;
    set originServerTs(value: bigint);
    get content(): KtMap<string, Nullable<any>>;
    set content(value: KtMap<string, Nullable<any>>);
    get roomId(): Nullable<string>;
    set roomId(value: Nullable<string>);
    get stateKey(): Nullable<string>;
    set stateKey(value: Nullable<string>);
    get unsigned(): Nullable<KtMap<string, Nullable<any>>>;
    set unsigned(value: Nullable<KtMap<string, Nullable<any>>>);
}
export declare namespace RoomEvent {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomEvent;
    }
}
export declare class RoomsGetRoomNameResponse {
    constructor();
    get name(): string;
    set name(value: string);
}
export declare namespace RoomsGetRoomNameResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsGetRoomNameResponse;
    }
}
export declare class RoomsGetStateEventResponse {
    constructor();
    get content(): KtMap<string, Nullable<any>>;
    set content(value: KtMap<string, Nullable<any>>);
}
export declare namespace RoomsGetStateEventResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsGetStateEventResponse;
    }
}
export declare class RoomsStateEvent {
    constructor();
    get content(): KtMap<string, any/* JsonElement */>;
    set content(value: KtMap<string, any/* JsonElement */>);
    get eventId(): string;
    set eventId(value: string);
    get originServerTs(): bigint;
    set originServerTs(value: bigint);
    get roomId(): Nullable<string>;
    set roomId(value: Nullable<string>);
    get sender(): string;
    set sender(value: string);
    get type(): string;
    set type(value: string);
    get stateKey(): string;
    set stateKey(value: string);
}
export declare namespace RoomsStateEvent {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsStateEvent;
    }
}
export declare class RoomsJoinRoomResponse {
    constructor();
    get roomId(): string;
    set roomId(value: string);
}
export declare namespace RoomsJoinRoomResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsJoinRoomResponse;
    }
}
export declare class RoomsRedactEventResponse {
    constructor();
    get eventId(): string;
    set eventId(value: string);
}
export declare namespace RoomsRedactEventResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsRedactEventResponse;
    }
}
export declare class RoomsSendMessageResponse {
    constructor();
    get eventId(): string;
    set eventId(value: string);
}
export declare namespace RoomsSendMessageResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsSendMessageResponse;
    }
}
export declare class RoomsSendStateEventResponse {
    constructor();
    get eventId(): string;
    set eventId(value: string);
}
export declare namespace RoomsSendStateEventResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RoomsSendStateEventResponse;
    }
}
export declare class SearchResponse {
    constructor();
    get searchCategories(): Nullable<SearchCategories>;
    set searchCategories(value: Nullable<SearchCategories>);
}
export declare namespace SearchResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => SearchResponse;
    }
}
export declare class SearchCategories {
    constructor();
    get roomEvents(): Nullable<SearchRoomEvents>;
    set roomEvents(value: Nullable<SearchRoomEvents>);
}
export declare namespace SearchCategories {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => SearchCategories;
    }
}
export declare class SearchRoomEvents {
    constructor();
    get count(): Nullable<bigint>;
    set count(value: Nullable<bigint>);
    get results(): Array<SearchResult>;
    set results(value: Array<SearchResult>);
    get nextBatch(): Nullable<string>;
    set nextBatch(value: Nullable<string>);
}
export declare namespace SearchRoomEvents {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => SearchRoomEvents;
    }
}
export declare class SearchResult {
    constructor();
    get rank(): Nullable<number>;
    set rank(value: Nullable<number>);
    get result(): Nullable<SearchResultEvent>;
    set result(value: Nullable<SearchResultEvent>);
}
export declare namespace SearchResult {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => SearchResult;
    }
}
export declare class SearchResultEvent {
    constructor();
    get eventId(): Nullable<string>;
    set eventId(value: Nullable<string>);
    get type(): Nullable<string>;
    set type(value: Nullable<string>);
    get sender(): Nullable<string>;
    set sender(value: Nullable<string>);
    get roomId(): Nullable<string>;
    set roomId(value: Nullable<string>);
    get originServerTs(): Nullable<bigint>;
    set originServerTs(value: Nullable<bigint>);
    get content(): Nullable<SearchResultContent>;
    set content(value: Nullable<SearchResultContent>);
}
export declare namespace SearchResultEvent {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => SearchResultEvent;
    }
}
export declare class SearchResultContent {
    constructor();
    get msgtype(): Nullable<string>;
    set msgtype(value: Nullable<string>);
    get body(): Nullable<string>;
    set body(value: Nullable<string>);
}
export declare namespace SearchResultContent {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => SearchResultContent;
    }
}
export declare class SyncResponse {
    constructor();
    get nextBatch(): string;
    set nextBatch(value: string);
    get rooms(): Nullable<SyncRooms>;
    set rooms(value: Nullable<SyncRooms>);
    get accountData(): Nullable<SyncAccountData>;
    set accountData(value: Nullable<SyncAccountData>);
}
export declare namespace SyncResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => SyncResponse;
    }
}
export declare class SyncRooms {
    constructor();
    get join(): Nullable<KtMap<string, SyncJoinedRoom>>;
    set join(value: Nullable<KtMap<string, SyncJoinedRoom>>);
    get invite(): Nullable<KtMap<string, SyncInvitedRoom>>;
    set invite(value: Nullable<KtMap<string, SyncInvitedRoom>>);
    get leave(): Nullable<KtMap<string, SyncLeftRoom>>;
    set leave(value: Nullable<KtMap<string, SyncLeftRoom>>);
}
export declare namespace SyncRooms {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => SyncRooms;
    }
}
export declare class SyncJoinedRoom {
    constructor();
    get timeline(): Nullable<SyncTimeline>;
    set timeline(value: Nullable<SyncTimeline>);
    get state(): Nullable<SyncState>;
    set state(value: Nullable<SyncState>);
    get accountData(): Nullable<SyncAccountData>;
    set accountData(value: Nullable<SyncAccountData>);
    get ephemeral(): Nullable<SyncEphemeral>;
    set ephemeral(value: Nullable<SyncEphemeral>);
    get unreadNotifications(): Nullable<SyncUnreadNotifications>;
    set unreadNotifications(value: Nullable<SyncUnreadNotifications>);
}
export declare namespace SyncJoinedRoom {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => SyncJoinedRoom;
    }
}
export declare class SyncInvitedRoom {
    constructor();
    get inviteState(): Nullable<SyncInviteState>;
    set inviteState(value: Nullable<SyncInviteState>);
}
export declare namespace SyncInvitedRoom {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => SyncInvitedRoom;
    }
}
export declare class SyncLeftRoom {
    constructor();
    get timeline(): Nullable<SyncTimeline>;
    set timeline(value: Nullable<SyncTimeline>);
    get state(): Nullable<SyncState>;
    set state(value: Nullable<SyncState>);
    get accountData(): Nullable<SyncAccountData>;
    set accountData(value: Nullable<SyncAccountData>);
}
export declare namespace SyncLeftRoom {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => SyncLeftRoom;
    }
}
export declare class SyncTimeline {
    constructor();
    get events(): Array<RoomEvent>;
    set events(value: Array<RoomEvent>);
    get limited(): Nullable<boolean>;
    set limited(value: Nullable<boolean>);
    get prevBatch(): Nullable<string>;
    set prevBatch(value: Nullable<string>);
}
export declare namespace SyncTimeline {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => SyncTimeline;
    }
}
export declare class SyncState {
    constructor();
    get events(): Array<RoomEvent>;
    set events(value: Array<RoomEvent>);
}
export declare namespace SyncState {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => SyncState;
    }
}
export declare class SyncAccountData {
    constructor();
    get events(): Array<RoomEvent>;
    set events(value: Array<RoomEvent>);
}
export declare namespace SyncAccountData {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => SyncAccountData;
    }
}
export declare class SyncEphemeral {
    constructor();
    get events(): Array<RoomEvent>;
    set events(value: Array<RoomEvent>);
}
export declare namespace SyncEphemeral {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => SyncEphemeral;
    }
}
export declare class SyncUnreadNotifications {
    constructor();
    get highlightCount(): Nullable<number>;
    set highlightCount(value: Nullable<number>);
    get notificationCount(): Nullable<number>;
    set notificationCount(value: Nullable<number>);
}
export declare namespace SyncUnreadNotifications {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => SyncUnreadNotifications;
    }
}
export declare class SyncInviteState {
    constructor();
    get events(): Array<RoomEvent>;
    set events(value: Array<RoomEvent>);
}
export declare namespace SyncInviteState {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => SyncInviteState;
    }
}
export declare class TagsGetResponse {
    constructor();
    get tags(): KtMap<string, TagContent>;
    set tags(value: KtMap<string, TagContent>);
}
export declare namespace TagsGetResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => TagsGetResponse;
    }
}
export declare class TagContent {
    constructor();
    get order(): Nullable<number>;
    set order(value: Nullable<number>);
}
export declare namespace TagContent {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => TagContent;
    }
}
export declare class UserDirectorySearchResponse {
    constructor();
    get results(): Array<UserDirectoryUser>;
    set results(value: Array<UserDirectoryUser>);
    get limited(): boolean;
    set limited(value: boolean);
}
export declare namespace UserDirectorySearchResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => UserDirectorySearchResponse;
    }
}
export declare class UserDirectoryUser {
    constructor();
    get userId(): string;
    set userId(value: string);
    get displayName(): Nullable<string>;
    set displayName(value: Nullable<string>);
    get avatarUrl(): Nullable<string>;
    set avatarUrl(value: Nullable<string>);
}
export declare namespace UserDirectoryUser {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => UserDirectoryUser;
    }
}
export declare class VersionsGetResponse {
    constructor();
    get versions(): Array<string>;
    set versions(value: Array<string>);
    get unstableFeatures(): Nullable<KtMap<string, boolean>>;
    set unstableFeatures(value: Nullable<KtMap<string, boolean>>);
}
export declare namespace VersionsGetResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => VersionsGetResponse;
    }
}
export declare class VoIPGetTurnServerResponse {
    constructor();
    get username(): string;
    set username(value: string);
    get password(): string;
    set password(value: string);
    get uris(): Array<string>;
    set uris(value: Array<string>);
    get ttl(): number;
    set ttl(value: number);
}
export declare namespace VoIPGetTurnServerResponse {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => VoIPGetTurnServerResponse;
    }
}
export declare class Room {
    constructor();
    get roomId(): string;
    set roomId(value: string);
    get name(): Nullable<string>;
    set name(value: Nullable<string>);
    get topic(): Nullable<string>;
    set topic(value: Nullable<string>);
}
export declare namespace Room {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => Room;
    }
}
export declare class RateLimit {
    constructor();
    get limit(): number;
    set limit(value: number);
    get remaining(): number;
    set remaining(value: number);
    get reset(): Nullable<any>/* Nullable<Instant> */;
    set reset(value: Nullable<any>/* Nullable<Instant> */);
}
export declare namespace RateLimit {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => RateLimit;
    }
    abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
        private constructor();
    }
    namespace Companion {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                of(response: any/* HttpResponse */): Nullable<RateLimit>;
                private constructor();
            }
        }
    }
}
export declare abstract class KmatrixFactory {
    static readonly getInstance: () => typeof KmatrixFactory.$metadata$.type;
    private constructor();
}
export declare namespace KmatrixFactory {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        abstract class type extends KtSingleton<constructor>() {
            private constructor();
        }
        abstract class constructor {
            instance(uri: string, accessToken?: string): Matrix;
            stream(uri: string, accessToken?: string): MatrixStream;
            private constructor();
        }
    }
}