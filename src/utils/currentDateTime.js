export const currentDateTime = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  let hour = date.getHours();
  const mins = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12;

  return `${day}/${month}/${year} ${hour}:${mins}:${seconds} ${ampm}`;
};
