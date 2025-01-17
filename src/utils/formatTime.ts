export function fDateTime(isoDateString: string) {
  const date = new Date(isoDateString);

  // Check for a valid date
  //@ts-ignore
  if (isNaN(date)) return null;

  // Extract components
  const day = String(date.getDate()).padStart(2, '0'); // Ensure 2 digits
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  // Determine AM/PM
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  // Construct the formatted date string
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds} ${ampm}`;
}

// Example usage
// const isoDate = '2025-01-16T11:39:54.123Z';
// const formattedDate = fDateTime(isoDate);
// console.log(formattedDate); // Output: "16/01/2025 11:39:54 AM"
