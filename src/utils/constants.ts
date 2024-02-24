export const apiURL: string =
  'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

export enum Footer {
  COPYRIGHT = 'Todos os direitos reservados - 2020',
}

export enum Form {
  AFTERNOON = 'Tarde',
  AFTERNOON_PERIOD = '12:01 às 18:00',
  CLEAR = 'Limpar',
  CLOSED_UNITS = 'Exibir unidades fechadas',
  FIND_UNITS = 'Encontrar unidade',
  FOUND_UNITS = 'Resultados encontrados:',
  MORNING = 'Manhã',
  MORNING_PERIOD = '06:00 às 12:00',
  MSG_TRAINGING_PERIOD = 'Qual período quer treinar?',
  NIGHT = 'Noite',
  NIGHT_PERIOD = '18:01 às 23:00',
  TIME = 'Horário',
}

export enum Header {
  NOTE = 'REABERTURA SMART FIT',
  REOPENING_UNITS = 'O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.',
}

export enum Legend {
  CLOSED = 'Fechado',
  FORBIDDEN = 'Proibido',
  FOUNTAIN = 'Bebedouro',
  LOCKERROOM = 'Vestiários',
  MASK = `Máscara`,
  PARTIAL = 'Parcial',
  RECOMMENDED = 'Recomendado',
  REQUIRED = 'Obrigatório',
  TOWEL = 'Toalha',
}
