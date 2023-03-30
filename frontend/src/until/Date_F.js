function Date_F({str}) {
    const date = new Date(str);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear() + 543;
  const hour = date.getHours() % 12 || 12;
  const minute = date.getMinutes();
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
  return `${day}/${month}/${year} ${hour}:${minute.toString().padStart(2, '0')} (${ampm}) `;
}

export default Date_F