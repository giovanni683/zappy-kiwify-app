"use client";

import { Notification } from '@/types/notification';

interface NotificationCardClientProps {
  notification: Notification;
  onClick?: () => void;
  onEdit?: () => void;
  cardHeight?: number; // altura variável do card
}

export function NotificationCardClient({ notification, onClick, onEdit, cardHeight = 295 }: NotificationCardClientProps) {
  // Dados do card
  const title = notification.name || '';
  const isActive = notification.isActive ?? false;
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
                justifyContent: 'center',
                alignItems: 'center',
                padding: 8,
                gap: 13,
                height: 36,
                background: isActive ? '#E1E9E7' : 'rgba(239,68,68,0.2)',
                borderRadius: 100,
              }}
            >
              {isActive ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B4D33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
              )}
              <span
                style={{
                  fontWeight: 600,
                  fontSize: 16,
                  lineHeight: '24px',
                  color: isActive ? '#0B4D33' : '#EF4444',
                  fontFamily: 'Inter, sans-serif',
                  textAlign: 'center',
                }}
              >
                {isActive ? 'Ativo' : 'Inativo'}
              </span>
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