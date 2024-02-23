export const apiURL: string =
  'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

export enum Footer {
  COPYRIGHT = 'Todos os direitos reservados - 2020',
}

export enum Form {
  TIME = 'horário',
  MSG_TRAINGING_PERIOD = 'Qual período quer treinar?',
  MORNING_PERIOD = 'Manhã 06:00 às 12:00',
  AFTERNOON_PERIOD = 'Tarde 12:01 às 18:00',
  NIGHT_PERIOD = 'Noite 18:01 às 23:00',
  CLOSED_UNITS = 'Exibir unidades fechadas',
  FIND_UNITS = 'Encontrar unidade',
  CLEAR = 'Limpar',
}

export enum Header {
  NOTE = 'REABERTURA SMART FIT',
  REOPENING_UNITS = 'O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.',
}

export enum Legend {
  MASK = `Máscara`,
  TOWEL = 'Toalha',
  FOUNTAIN = 'Bebedouro',
  LOCKERROOM = 'Vestiários',
  REQUIRED = 'Obrigatório',
  RECOMMENDED = 'Recomendado',
  PARTIAL = 'Parcial',
  FORBIDDEN = 'Proibido',
  CLOSED = 'Fechado',
}
