"use client";

import { NotificationCardClient } from './NotificationCardClient';
import zdk from '@/services/zdk';
import { Notification } from '@/types/notification';

interface NotificationsListProps {
  notifications: Notification[];
  onNotificationClick?: (id: string) => void;
  onNotificationEdit?: (id: string) => void;
}

export function NotificationsList({ notifications, onNotificationClick, onNotificationEdit }: NotificationsListProps) {
  // Atualiza status da notificação no backend
  const handleToggleActive = async (id: string, active: boolean) => {
    try {
      await zdk.put(`/notifications/${id}/active`, { isActive: active });
      // Aqui pode adicionar feedback visual (toast, etc)
    } catch (error) {
      // Feedback de erro
      alert('Erro ao atualizar notificação.');
    }
  };
  if (!notifications || notifications.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        Nenhuma notificação encontrada.
      </div>
    );
  }

  return (
    <div
      style={{
        width: 388,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      {notifications.map((notification) => (
        <NotificationCardClient
          key={notification.id}
          notification={notification}
          onClick={() => (onNotificationClick ? onNotificationClick(notification.id) : undefined)}
          onEdit={() => (onNotificationEdit ? onNotificationEdit(notification.id) : undefined)}
          onToggleActive={handleToggleActive}
        />
      ))}
    </div>
  );
}