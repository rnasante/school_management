// Helper to pad a time string so that "9:00" becomes "09:00"
export const padTime = (time) => {
    if (!time) {
        throw new Error("padTime received an undefined value");
    }

    const [hour, minute] = time.split(':');
    // Pad hour to two digits if needed
    return `${hour.padStart(2, '0')}:${minute}`;
  };