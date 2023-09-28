export enum AffiseApiMethod {
    INIT = "init",
    IS_INITIALIZED = "is_initialized",
    SEND_EVENTS = "send_events",
    SEND_EVENT = "send_event",
    ADD_PUSH_TOKEN = "add_push_token",
    REGISTER_WEB_VIEW = "register_web_view",
    UNREGISTER_WEB_VIEW = "unregister_web_view",
    SET_SECRET_KEY = "set_secret_id",
    SET_AUTO_CATCHING_TYPES = "set_auto_catching_types",
    SET_OFFLINE_MODE_ENABLED = "set_offline_mode_enabled",
    IS_OFFLINE_MODE_ENABLED = "is_offline_mode_enabled",
    SET_BACKGROUND_TRACKING_ENABLED = "set_background_tracking_enabled",
    IS_BACKGROUND_TRACKING_ENABLED = "is_background_tracking_enabled",
    SET_TRACKING_ENABLED = "set_tracking_enabled",
    IS_TRACKING_ENABLED = "is_tracking_enabled",
    FORGET = "forget",
    SET_ENABLED_METRICS = "set_enabled_metrics",
    CRASH_APPLICATION = "crash_application",
    GET_RANDOM_USER_ID = "get_random_user_id",
    GET_RANDOM_DEVICE_ID = "get_random_device_id",
    GET_PROVIDERS = "get_providers",
    GET_REFERRER_CALLBACK = "get_referrer_callback",
    GET_REFERRER_VALUE_CALLBACK = "get_referrer_value_callback",
    GET_STATUS_CALLBACK = "get_status_callback",
    REGISTER_DEEPLINK_CALLBACK = "register_deeplink_callback",
    SKAD_REGISTER_ERROR_CALLBACK = "skad_register_error_callback",
    SKAD_POSTBACK_ERROR_CALLBACK = "skad_postback_error_callback",
}

export function apiFromString(name: string): AffiseApiMethod | null {
    const enumKey = Object.keys(AffiseApiMethod)[Object.values(AffiseApiMethod).indexOf(name as any)];
    if (enumKey === undefined) return null;
    return AffiseApiMethod[enumKey as keyof typeof AffiseApiMethod];
}
