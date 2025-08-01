'use client';

import { useState } from 'react';
import NotificationList from '../components/NotificationList';
import NewNotification from '../components/NewNotification';
import EditNotification from '../components/EditNotification';

// Definimos os tipos de telas possíveis para nosso estado
type View = 'list' | 'new' | 'edit';

export default function NotificationsPage() {
  // Estado para controlar a tela atual, começando pela lista
  const [currentView, setCurrentView] = useState<View>('list');
  // Estado para guardar o ID da notificação a ser editada
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Função para lidar com a troca de telas, chamada pelos componentes filhos
  const handleViewChange = (view: View, id?: string) => {
    setCurrentView(view);
    if (id) {
      setSelectedId(id);
    }
  };

  // Função para renderizar o componente correto baseado no estado 'currentView'
  const renderView = () => {
    switch (currentView) {
      case 'new':
        return <NewNotification onViewChange={() => handleViewChange('list')} />;
      case 'edit':
        // Usamos '!' para afirmar que selectedId não será nulo aqui
        return <EditNotification notificationId={selectedId!} onViewChange={() => handleViewChange('list')} />;
      case 'list':
      default:
        return <NotificationList onViewChange={handleViewChange} />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md">
        {renderView()}
      </div>
    </div>
  );
}