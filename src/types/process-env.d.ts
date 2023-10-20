//.env 사용을 위한 모듈
export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            //이곳에 .env변수 타입 선언
            REACT_APP_GOOGLE_MAP_API: string;
            REACT_APP_GOOGLE_MAP_VERSION: string;
            REACT_APP_EARTHQUAKE_API: string;
            REACT_APP_EARTHQUAKE_URL: string;
            REACT_APP_EARTHQUAKE_PARMETER_URL: string;
        }
    }
}