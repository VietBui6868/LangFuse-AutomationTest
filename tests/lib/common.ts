export function convertToCustomDate(year: string, month: string, day: number, hour: number, minute: number, ampm: string): string {
    // Convert month string to a month number (1 = January, 2 = February, ...)
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthIndex = monthNames.indexOf(month.slice(0, 3)) + 1;  // Extract first 3 letters and get the index

    if (monthIndex === 0) {
        throw new Error("Invalid month name provided");
    }

    // Adjust hour for AM/PM
    if (ampm.toUpperCase() === "AM" && hour === 12) {
        hour = 0;  // Handle midnight case (12 AM -> 00)
    } else if (ampm.toUpperCase() === "PM" && hour !== 12) {
        hour += 12;  // Convert PM to 24-hour format (1 PM -> 13)
    }

    // Format the values with leading zeros where necessary
    const dayStr = day.toString().padStart(2, '0');  // Ensure 2 digits
    const hourStr = hour.toString().padStart(2, '0');  // Ensure 2 digits
    const minuteStr = minute.toString().padStart(2, '0');  // Ensure 2 digits
    const yearStr = year.slice(-2);  // Get the last two digits of the year (string handling)

    // Convert the month number to a 3-letter abbreviation
    const monthStr = monthNames[monthIndex - 1];

    // Return the formatted date string
    return `${monthStr} ${dayStr}, ${yearStr} : ${hourStr}:${minuteStr}`;
}