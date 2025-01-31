function checkTimeStatus(isoTime: string): string {
  const currentTime = new Date();
  const targetTime = new Date(isoTime);

  if (targetTime < currentTime) {
    return 'Task Expired';
  }

  const timeDifference = targetTime.getTime() - currentTime.getTime();
  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  if (daysLeft === 1) {
    return '1 day';
  } else {
    return `${daysLeft} days left`;
  }
}

export function isFutureTime(isoTime: string): boolean {
  const currentTime = new Date();
  const targetTime = new Date(isoTime);
  return targetTime > currentTime;
}

export default checkTimeStatus;