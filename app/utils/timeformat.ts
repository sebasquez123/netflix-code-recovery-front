export const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export const friendlyTimeFormat = (time: Date) => {
  const pastTime = new Date(time);
  const now = new Date();
  const diff = Math.floor((now.getTime() - pastTime.getTime()) / 60000);
  if (diff < 15) return 'Quedan ' + diff + ' minutos';

  if (diff > 15 && diff <= 60) return 'Vencido hace ' + diff + ' minutos';
  if (diff > 60) return 'Vencido hace mucho tiempo';
};
