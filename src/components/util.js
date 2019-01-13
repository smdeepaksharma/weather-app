export const getFormattedTime = milliseconds => {
    let date = new Date(milliseconds - new Date().getTimezoneOffset() * 60000);
    return `${date.getHours()}:${date.getMinutes()}`
};

export function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5 / 9).toFixed(2);
}