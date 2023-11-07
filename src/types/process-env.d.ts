//.env 사용을 위한 모듈
export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            //이곳에 .env변수 타입 선언
            NEXT_PUBLIC_GOOGLE_MAP_API: string;
            NEXT_PUBLIC_GOOGLE_MAP_VERSION: string;
            NEXT_PUBLIC_EARTHQUAKE_API: string;
            NEXT_PUBLIC_EARTHQUAKE_URL: string;
            NEXT_PUBLIC_EARTHQUAKE_PARMETER_URL: string;
            NEXT_PUBLIC_EARTHQUAKE_PARAMETER_DATE: string;
        }
    }
}