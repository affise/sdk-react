import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class DeepLinkedEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.DEEP_LINKED, userData, timeStampMillis);
    }
}
