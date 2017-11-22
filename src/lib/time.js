export function formatAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  const days = Math.floor(seconds / 86400);

  if (seconds < 10) return 'just now';
  if (days > 1) {
    return `${date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })} at ${date.toLocaleTimeString('en-GB', {
      hour: 'numeric',
      minute: 'numeric',
    })}`;
  } else if (days > 0) {
    return `Yesterday at ${date.toLocaleTimeString('en-GB', {
      hour: 'numeric',
      minute: 'numeric',
    })}`;
  } else {
    console.log(days);
    const hours = Math.floor(seconds / 3600);
    if (hours > 0) {
      return `${hours} hours ago`;
    } else {
      const minutes = Math.floor(seconds / 60);
      if (minutes > 0) {
        return `${minutes} minutes ago`;
      } else {
        return `${seconds} seconds ago`;
      }
    }
  }
}
