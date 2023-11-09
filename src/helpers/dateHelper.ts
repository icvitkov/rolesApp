

/**
 * converts an ISO 8601 UTC date to user's local date - format DD/MM/YYYY.
 * @param isoDateString 
 * @returns
 */
export function toLocalDate(isoDateString: string): string {
    const date = new Date(isoDateString);
  
    // add zeros to day and month
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  }
  