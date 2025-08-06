"use client";

import { Card } from '@/components/ui/card';
import { StatusBadge } from '@/components/ui/status-badge';
import { Notification } from '@/types/notification';

interface NotificationCardClientProps {
  notification: Notification;
  onClick?: () => void;
  onEdit?: () => void;
}

export function NotificationCardClient({ notification, onClick, onEdit }: NotificationCardClientProps) {
  // Determina se está ativo ou inativo
  // Determina se está ativo ou inativo
  const isActive = notification.isActive;
  return (
    <div
      className="notification-item flex flex-row justify-between items-center bg-white border border-gray-200 cursor-pointer hover:shadow"
      style={{
        width: 400,
        height: 80,
        borderRadius: 16,
        opacity: 1,
        gap: 0,
        padding: 0,
        marginBottom: 16,
        boxSizing: 'border-box',
        position: 'relative',
        alignItems: 'center',
      }}
      onClick={onClick}
    >
      <div className="status-container flex flex-col justify-center items-start p-0 gap-2">
        <p className="title" style={{
          height: 24,
          fontFamily: 'Inter, sans-serif',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: 16,
          lineHeight: '24px',
          textAlign: 'left',
          color: '#000',
          margin: 0,
        }}>{notification.name}</p>
        <div className="status-badge flex flex-row justify-center items-center" style={{
          boxSizing: 'border-box',
          padding: 8,
          gap: 13,
          width: 129,
          height: 36,
          background: isActive ? '#E1E9E7' : 'rgba(239, 68, 68, 0.2)',
          borderRadius: 100,
        }}>
          {isActive ? (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 24, height: 24 }}>
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#0B4D33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 4L12 14.01l-3-3" stroke="#0B4D33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 24, height: 24 }}>
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 9L9 15" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 9L15 15" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
          <span style={{
            width: isActive ? 40 : 53,
            height: 24,
            fontFamily: 'Inter, sans-serif',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: 16,
            lineHeight: '24px',
            textAlign: 'center',
            color: isActive ? '#0B4D33' : '#EF4444',
          }}>{isActive ? 'Ativo' : 'Inativo'}</span>
        </div>
      </div>
      <button
        className="edit-button flex flex-row items-center justify-center gap-2"
        style={{
          padding: 10,
          width: 99,
          height: 44,
          background: '#E5E7EB',
          borderRadius: 100,
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'Inter, sans-serif',
        }}
        onClick={e => { e.stopPropagation(); onEdit && onEdit(); }}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 24, height: 24 }}>
          <path d="M12 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.375 2.625C18.7728 2.22719 19.3109 2.00415 19.875 2.00415C20.4391 2.00415 20.9772 2.22719 21.375 2.625C21.7728 3.02281 21.9959 3.56087 21.9959 4.125C21.9959 4.68913 21.7728 5.22719 21.375 5.625L12 15L8 16L9 12L18.375 2.625Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span style={{
          width: 45,
          height: 24,
          fontFamily: 'Inter, sans-serif',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: 16,
          lineHeight: '24px',
          textAlign: 'center',
          color: '#000',
          display: 'inline-block',
        }}>Editar</span>
      </button>
    </div>
  );
}