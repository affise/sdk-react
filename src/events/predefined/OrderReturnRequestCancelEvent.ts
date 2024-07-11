import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";
import type {AffiseEventProps} from "../base/AffiseEventProps";

export class OrderReturnRequestCancelEvent extends NativeEvent {

    constructor(props?: AffiseEventProps) {
        super({...props, eventName: EventName.ORDER_RETURN_REQUEST_CANCEL});
    }
}
