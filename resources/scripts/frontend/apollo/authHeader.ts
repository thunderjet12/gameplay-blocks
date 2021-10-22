let accessTocken = "";
let refreshToken = "";

export const setAccessToken = ( s: string ) => {
    accessTocken = s;
}

export const getAccessToken = () => {
    return accessTocken;
}

// setRefreshToken

export const setRefreshToken = ( rt: string ) => {
    refreshToken = rt;
}

export const getRefreshToken = ( ) => {
    return refreshToken;
}