type NewNotificationProps = {
  onViewChange: (view: 'list') => void;
};

export default function NewNotification({ onViewChange }: NewNotificationProps) {
  return (
    <div className="p-6">
      <button onClick={() => onViewChange('list')} className="text-blue-600 hover:underline mb-4">
        &lt; Voltar
      </button>
      <h1 className="text-2xl font-bold">Nova Notificação</h1>
      <p className="mt-4">Formulário de criação aparecerá aqui...</p>
    </div>
  );
}