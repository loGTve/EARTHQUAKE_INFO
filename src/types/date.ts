type DateRule = {
    day: string;
    month: string;
    year: string;
}
/** 오늘 날짜 받아오기 (Type: Date) */
const getTodayDate: Date = new Date();
    
const getToday: DateRule = {
    day: getTodayDate.getDate().toString().padStart(2, '0'),
    month: (getTodayDate.getMonth()+1).toString().padStart(2, '0'),
    year: getTodayDate.getFullYear().toString(),
};

/** 오늘 날짜 (yyyy/mm/dd) */
export const today: string = getToday.year + getToday.month + getToday.day;


/** 3일전 날짜 받아오기  */
const getPastThreeDate: Date = new Date(getTodayDate.setDate(getTodayDate.getDate() - 2));

const getPastDate: DateRule = {
    day: getPastThreeDate.getDate().toString().padStart(2, '0'),
    month: (getPastThreeDate.getMonth()+1).toString().padStart(2, '0'),
    year: getPastThreeDate.getFullYear().toString(),
};

/** 3일전 날짜 (yyyy/mm/dd) */
export const pastThreeDay: string = getPastDate.year + getPastDate.month + getPastDate.day;