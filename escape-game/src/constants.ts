export const constants = {
    colors: {
        blue: "#1E90FF",
        darkBlue: "#1F5D99",
        white: "#FFFFFF",
    },
    screens: {
        home: "Home",
        qrScan: "QrScan",
        game: [
            "piratesdelilebourbon/0",
            "piratesdelilebourbon/1",
            "piratesdelilebourbon/2",
            "piratesdelilebourbon/3",
        ],
        notFound: "*",
    },
    options: {
        window: {
            width: 400,
            height: 800,
            scale: 1,
            fontScale: 1,
        },
        windowRatio: "16:9",
    },
};

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
