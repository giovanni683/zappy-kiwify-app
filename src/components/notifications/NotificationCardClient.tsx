"use client";

import React from 'react';
import { Notification } from '@/types/notification';

interface NotificationCardClientProps {
  notification: Notification;
  onClick?: () => void;
  onEdit?: () => void;
  onToggleActive?: (id: string, active: boolean) => void;
  cardHeight?: number; // altura variável do card
}

export function NotificationCardClient({ notification, onClick, onEdit, cardHeight = 295, onToggleActive }: NotificationCardClientProps) {
  // Dados do card
  const title = notification.name || '';
  const [isActive, setIsActive] = React.useState(notification.isActive ?? false);
  const [loading, setLoading] = React.useState(false);

  // Toggle handler assíncrono
  const handleToggle = async () => {
    const newActive = !isActive;
    setLoading(true);
    try {
      if (onToggleActive) {
        await onToggleActive(notification.id, newActive);
      }
      setIsActive(newActive);
    } catch (error) {
      // Feedback de erro pode ser adicionado aqui
      alert('Erro ao atualizar notificação.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className="cursor-pointer"
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 0,
        gap: 0,
        width: 404, // largura principal
        height: cardHeight,
        background: '#fff',
        border: '1px solid rgba(0,0,0,0.05)',
        borderRadius: 12,
        marginBottom: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          padding: '24px 24px 0 24px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 10,
            padding: 0,
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: 16,
              lineHeight: '24px',
              color: '#000',
              fontFamily: 'Inter, sans-serif',
              margin: 0,
            }}
          >
            {title}
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10, // espaço entre pílula e botão editar
              marginTop: 16,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 7,
              }}
            >
              <span
                style={{
                  fontWeight: 600,
                  fontSize: 16,
                  lineHeight: '19px',
                  color: '#000',
                  fontFamily: 'Inter, sans-serif',
                  marginRight: 7,
                }}
                id={`toggle-label-${notification.id}`}
              >
                Ativar notificação
              </span>
              <button
                type="button"
                aria-pressed={isActive}
                aria-labelledby={`toggle-label-${notification.id}`}
                onClick={handleToggle}
                disabled={loading}
                style={{
                  position: 'relative',
                  width: 36,
                  height: 17,
                  background: isActive ? '#0B4D33' : '#E1E1E1',
                  borderRadius: 100,
                  border: 'none',
                  outline: 'none',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.7 : 1,
                  transition: 'background 0.2s',
                  marginRight: 10,
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: isActive ? 20 : 1,
                    top: 1,
                    width: 15,
                    height: 15,
                    background: isActive ? '#0B4D33' : '#ACACAC',
                    borderRadius: '50%',
                    boxShadow: '0px 9px 40px rgba(0,0,0,0.105)',
                    transition: 'left 0.2s, background 0.2s',
                  }}
                  aria-hidden="true"
                />
              </button>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: 99,
                height: 44,
                background: '#E5E7EB',
                borderRadius: 100,
                cursor: 'pointer',
                marginRight: 26, // margem à direita do botão editar
              }}
              onClick={onEdit}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path></svg>
              <span
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: '24px',
                  color: '#000',
                  fontFamily: 'Inter, sans-serif',
                  textAlign: 'center',
                }}
              >
                Editar
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Conteúdo extra do card pode ser renderizado aqui, ajustando a altura conforme necessário */}
    </div>
  );
}