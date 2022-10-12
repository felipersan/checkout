export const translateYupErrorMessage = (msg: string, field: string) => {
  let msgLower = msg.toLowerCase()
  if (msgLower.includes('is a required field')) {
    return '*' + field + ' é obrigatório'
  }
  if (msgLower.includes("must be a valid email")) {
    return '*Tem que ser um email válido'
  }
  if (msgLower.includes(" must be a `number` type")) {
    return '*O campo deve conter apenas números'
  }
  return msg;
}