export type Notification = {
  id: string;
  name: string;
  status: 'Ativo' | 'Inativo';
};


export const notifications: Notification[] = [
  { id: '1', name: 'Compra aprovada', status: 'Ativo' }, // [cite: 10, 13]
  { id: '2', name: 'Recuperação de boleto 24h', status: 'Ativo' }, // [cite: 14, 17]
  { id: '3', name: 'Carrinho abandonado-ofera', status: 'Inativo' }, // [cite: 18, 20]
  { id: '4', name: 'Assinatura atrasada', status: 'Ativo' }, // [cite: 21, 22]
];