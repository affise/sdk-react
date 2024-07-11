import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";
import type {AffiseEventProps} from "../base/AffiseEventProps";

/**
 * Event CustomId06
 *
 * @param userData any custom string data.
 * @param timeStampMillis the timestamp event in milliseconds.
 */
export class CustomId06Event extends NativeEvent {

    constructor(props?: AffiseEventProps) {
        super({...props, eventName: EventName.CUSTOM_ID_06});
    }
}
