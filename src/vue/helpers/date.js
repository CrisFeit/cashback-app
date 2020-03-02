 
export function getDate(){
  let date = new Date();
  let mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  let fullDate = [date.getDate(), mes[date.getMonth()], date.getFullYear()].join(' de ');
  let h    = date.getHours()
  let m    = date.getMinutes()
  let hour    = h < 10 ?  "0" + h :  h;
  let min     = m < 10 ?  "0" + m :  m;
  
  return {
    day   : fullDate,
    hours  : `${hour} : ${min}`
  }
}