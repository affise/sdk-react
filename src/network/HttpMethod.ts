import {getEnumFromString} from "../utils/EnumUtils";

export enum HttpMethod {
    GET = "GET",
    POST = "POST",
}

export function httpMethodFrom(name: string | null): HttpMethod | null {
    if (name == null) return null;
    return getEnumFromString(HttpMethod, name);
}


