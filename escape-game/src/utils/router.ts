import { constants } from "@/constants";

export function isRouteHandled (route: string) : boolean {
    function isInArray(value: string, list: any[] | object) {
        if (typeof list === 'object') list = Object.values(list);
        // @ts-expect-error: list object is transformed in an array
        for (const element of list) {
            if (typeof element === 'string') {
                if (element === value) return true;
            } else if (Array.isArray(element) || typeof element === 'object') {
                if (isInArray(value, element)) return true;
            }
        }
        return false;
    }

    return isInArray(route, constants.screens);
}
