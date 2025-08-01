'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { notifications, Notification } from '@/lib/data';

// 1. Recebemos uma nova propriedade: onViewChange.
// É uma função que permitirá a este componente "avisar" o pai que queremos mudar de tela.
type NotificationListProps = {
  onViewChange: (view: 'new' | 'edit', id?: string) => void;
};

export default function NotificationList({ onViewChange }: NotificationListProps) {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [filteredNotifications, setFilteredNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    if (activeFilter === 'Todos') {
      setFilteredNotifications(notifications);
    } else {
      const filtered = notifications.filter(
        (notification) => notification.status === activeFilter
      );
      setFilteredNotifications(filtered);
    }
  }, [activeFilter]);

  return (
    <div>
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Zappy Kiwify</h1>
              <p className="text-gray-600 mt-1">
                Gerencie aqui as notificações disparadas a partir dos eventos da Kiwify.
              </p>
            </div>
            {/* 2. O botão agora chama a função onViewChange para ir para a tela de 'new'. */}
            <button 
              onClick={() => onViewChange('new')}
              className="bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              + Notificação
            </button>
          </div>

          <div className="mt-6 flex items-center space-x-2">
            {/* ... botões de filtro ... */}
          </div>
        </div>

        <div>
          {filteredNotifications.map((notification) => (
            <div key={notification.id} className="flex items-center justify-between p-4 px-6 border-b border-gray-200 last:border-b-0">
              <span className="font-medium text-gray-700">{notification.name}</span>
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${notification.status === 'Ativo' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                  {notification.status}
                </span>
                {/* 3. O botão de editar também chama a função, passando a view 'edit' e o ID da notificação. */}
                <button 
                  onClick={() => onViewChange('edit', notification.id)}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Editar
                </button>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}