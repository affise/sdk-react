import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";
import type {AffiseEventProps} from "../base/AffiseEventProps";

export class SubmitApplicationEvent extends NativeEvent {

    constructor(props?: AffiseEventProps) {
        super({...props, eventName: EventName.SUBMIT_APPLICATION});
    }
}
