import {BaseSubscriptionEvent} from "./BaseSubscriptionEvent";
import {SubscriptionEventName} from "./SubscriptionEventName";
import {SubscriptionSubType} from "./SubscriptionSubType";

export class RenewedSubscriptionFromRetryEvent extends BaseSubscriptionEvent {
    constructor({data, userData}: { data: Record<string, unknown>, userData?: string }) {
        super(
            SubscriptionEventName.AFFISE_SUBSCRIPTION_RENEWAL_FROM_BILLING_RETRY,
            SubscriptionSubType.AFFISE_SUB_RENEWED_SUBSCRIPTION_FROM_RETRY,
            data,
            userData,
        );
    }
}
