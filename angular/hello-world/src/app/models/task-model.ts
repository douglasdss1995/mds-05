export interface TaskModel {
  id: number;
  nome: string;
  descricao: string;
  concluida: boolean;
  grupo: string;
  ordem: number;
  data_vencimento: Date;
  etiquetas: string;
}
