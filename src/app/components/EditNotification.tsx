type EditNotificationProps = {
  notificationId: string;
  onViewChange: (view: 'list') => void;
};

export default function EditNotification({ notificationId, onViewChange }: EditNotificationProps) {
  return (
    <div className="p-6">
      <button onClick={() => onViewChange('list')} className="text-blue-600 hover:underline mb-4">
        &lt; Voltar
      </button>
      <h1 className="text-2xl font-bold">Editar Notificação: {notificationId}</h1>
      <p className="mt-4">Formulário de edição aparecerá aqui...</p>
    </div>
  );
}