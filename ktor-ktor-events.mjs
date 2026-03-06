import {
  LockFreeLinkedListNode1f5fxflchw0ko as LockFreeLinkedListNode,
  LockFreeLinkedListHead34jaj1wjnyujz as LockFreeLinkedListHead,
  CopyOnWriteHashMap2wz01l72sexe7 as CopyOnWriteHashMap,
} from './ktor-ktor-utils.mjs';
import { DisposableHandle1uzxt8frdchxn as DisposableHandle } from './kotlinx-coroutines-core.mjs';
import {
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  createThis2j2avj17cvnv2 as createThis,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  equals2au1ep9vhcato as equals,
  Unit_getInstance3uavtu4x7ly6a as Unit_getInstance,
  addSuppressedu5jwjfvsc039 as addSuppressed,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class HandlerRegistration extends LockFreeLinkedListNode {
  static new_io_ktor_events_Events_HandlerRegistration_jb4lx8_k$(handler, $box) {
    var $this = this.new_io_ktor_util_internal_LockFreeLinkedListNode_uiigck_k$($box);
    $this.handler_1 = handler;
    return $this;
  }
  get_handler_cq14kh_k$() {
    return this.handler_1;
  }
  dispose_3nnxhr_k$() {
    this.remove_fgfybg_k$();
  }
}
class Events {
  static new_io_ktor_events_Events_1w723k_k$($box) {
    var $this = createThis(this, $box);
    $this.handlers_1 = CopyOnWriteHashMap.new_io_ktor_util_collections_CopyOnWriteHashMap_3rtrll_k$();
    return $this;
  }
  subscribe_x6ph2e_k$(definition, handler) {
    var registration = HandlerRegistration.new_io_ktor_events_Events_HandlerRegistration_jb4lx8_k$(handler);
    this.handlers_1.computeIfAbsent_gq11cy_k$(definition, Events$subscribe$lambda).addLast_ftvmbg_k$(registration);
    return registration;
  }
  unsubscribe_pdx53x_k$(definition, handler) {
    var tmp0_safe_receiver = this.handlers_1.get_h31hzz_k$(definition);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'io.ktor.util.internal.LockFreeLinkedListHead.forEach' call
      var tmp = tmp0_safe_receiver.get_next_wor1vg_k$();
      var cur = tmp instanceof LockFreeLinkedListNode ? tmp : THROW_CCE();
      while (!equals(cur, tmp0_safe_receiver)) {
        if (cur instanceof HandlerRegistration) {
          var it = cur;
          if (equals(it.handler_1, handler)) {
            it.remove_fgfybg_k$();
          }
        }
        cur = cur.get_nextNode_88zlwi_k$();
      }
    }
  }
  raise_3e7w7u_k$(definition, value) {
    var exception = null;
    var tmp0_safe_receiver = this.handlers_1.get_h31hzz_k$(definition);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'io.ktor.util.internal.LockFreeLinkedListHead.forEach' call
      var tmp = tmp0_safe_receiver.get_next_wor1vg_k$();
      var cur = tmp instanceof LockFreeLinkedListNode ? tmp : THROW_CCE();
      while (!equals(cur, tmp0_safe_receiver)) {
        if (cur instanceof HandlerRegistration) {
          var registration = cur;
          try {
            var tmp_0 = registration.handler_1;
            (typeof tmp_0 === 'function' ? tmp_0 : THROW_CCE())(value);
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              var tmp0_safe_receiver_0 = exception;
              var tmp_1;
              if (tmp0_safe_receiver_0 == null) {
                tmp_1 = null;
              } else {
                addSuppressed(tmp0_safe_receiver_0, e);
                tmp_1 = Unit_getInstance();
              }
              if (tmp_1 == null) {
                // Inline function 'kotlin.run' call
                exception = e;
              }
            } else {
              throw $p;
            }
          }
        }
        cur = cur.get_nextNode_88zlwi_k$();
      }
    }
    var tmp1_safe_receiver = exception;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp1_safe_receiver;
    }
  }
}
class EventDefinition {
  static new_io_ktor_events_EventDefinition_x54dxw_k$($box) {
    return createThis(this, $box);
  }
}
//endregion
function _get_handlers__pkfn2a($this) {
  return $this.handlers_1;
}
function Events$subscribe$lambda(it) {
  return LockFreeLinkedListHead.new_io_ktor_util_internal_LockFreeLinkedListHead_hrwn10_k$();
}
//region block: post-declaration
initMetadataForClass(HandlerRegistration, 'HandlerRegistration', VOID, VOID, [LockFreeLinkedListNode, DisposableHandle]);
initMetadataForClass(Events, 'Events', Events.new_io_ktor_events_Events_1w723k_k$);
initMetadataForClass(EventDefinition, 'EventDefinition', EventDefinition.new_io_ktor_events_EventDefinition_x54dxw_k$);
//endregion
//region block: exports
export {
  EventDefinition as EventDefinition1fymk8xrdelhn,
  Events as Events63tfxre48w4z,
};
//endregion

//# sourceMappingURL=ktor-ktor-events.mjs.map
