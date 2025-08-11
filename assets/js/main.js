// Convert UTC timestamp to user's local timezone
document.addEventListener('DOMContentLoaded', () => {
    // Cache DOM elements once
    const utcElement = document.getElementById('timestamp-utc');
    const localElement = document.getElementById('timestamp-local');
    
    // Early return if elements don't exist
    if (!utcElement || !localElement) return;
    
    try {
        const utcTimeString = utcElement.textContent.trim();
        if (!utcTimeString) return;
        
        // Parse UTC timestamp - normalize to ISO 8601 and ensure UTC
        const isoUtc = utcTimeString
            .replace(/\sUTC$/i, 'Z')   // " ... UTC" -> " ...Z"
            .replace(' ', 'T');        // "YYYY-MM-DD HH:mm:ssZ" -> "YYYY-MM-DDTHH:mm:ssZ"
        const utcDate = new Date(isoUtc);
        
        // Validate date
        if (isNaN(utcDate.getTime())) {
            console.warn('Invalid date format:', utcTimeString);
            return;
        }
        
        // Format in user's local timezone
        const localTimeString = utcDate.toLocaleString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
            timeZoneName: 'short'
        });
        
        // Update DOM once
        localElement.textContent = `Last updated: ${localTimeString}`;
        
    } catch (error) {
        console.error('Error converting timestamp:', error);
        // Fallback: show original UTC time if conversion fails
        localElement.textContent = `Last updated: ${utcElement.textContent.trim()}`;
    }
});
