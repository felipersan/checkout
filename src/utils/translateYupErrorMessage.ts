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
  if (
    msgLower.includes("must be at least") ||
    msgLower.includes("must be less than or equal") ||
    msgLower.includes("must be greater than or equal")
  ) {
    return "*Não atingiu o número mínimo de caracteres";
  }
  if (msgLower.includes("must be at most")) {
    return "*Atingiu o número máximo de caracteres";
  }
  return msg;
}