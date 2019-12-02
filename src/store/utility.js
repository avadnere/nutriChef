import moment from "moment";

export const updatedObject = (oldObject, updatedValues) => {
    return {
        ...oldObject,
        ...updatedValues
    }
};

export const currentWeekArray = () => {
    var startOfWeek = moment().startOf('isoWeek');
    var endOfWeek = moment().endOf('isoWeek');

    var days = [];
    var day = startOfWeek;

    while (day <= endOfWeek) {
        days.push(day.format("YYYY-MM-DD"));
        day = day.clone().add(1, 'd');
    }
    return days;
}

export const getUNIXTimestamp = (date_in_string) => {
    let date = new Date(date_in_string);
    date = date.setDate(date.getDate() + 1);
    return date;
}

export const filterRange = (arr, propName, a, b) => {
    return arr.filter(item => (a <= (item.data())[propName] && (item.data())[propName] <= b));
}
