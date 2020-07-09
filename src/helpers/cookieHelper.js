import cookies from 'js-cookie';

export const cookieHelper = {
    setCookie,
    removeCookie,
    getCookie
}

function setCookie(key, value) {
    if (process.browser) {
        let d = new Date();
        d.setTime(d.getTime() + (10*60*1000))
        cookies.set(key, value, {
            expires: d,
            path: '/'
        });
    }
};

function removeCookie(key) {
    if (process.browser) {
        cookies.remove(key);
    }
};

function getCookie(key, req) {
    return process.browser ? getCookieFromBrowser(key) : getCookieFromServer(key, req);
};

const getCookieFromBrowser = key => {
    return cookies.get(key);
};

const getCookieFromServer = (key, req) => {
    if (!req.headers.cookies) {
        return undefined;
    }
    const rawCookie = req.headers.cookies.split(';').find(c => c.trim().startsWith(`${key}=`));
    if (!rawCookie) {
        return undefined;
    }
    return rawCookie.split('=')[1];
};