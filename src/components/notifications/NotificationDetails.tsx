import { ArrowLeft, Edit } from 'lucide-react';
import { StatusBadge } from '@/components/ui/status-badge';
import { mockEvents, mockConnections, mockSectors, mockNotifications } from '@/lib/mock-data';

interface NotificationDetailsProps {
  notificationId: string;
  onBack: () => void;
  onEdit: (id: string) => void;
}

export function NotificationDetails({ notificationId, onBack, onEdit }: NotificationDetailsProps) {
  const notification = mockNotifications.find(n => n.id === notificationId);
  if (!notification) {
    return <div className="p-4">Notificação não encontrada.</div>;
  }
  const event = mockEvents.find(e => e.id === notification.event);
  const connection = mockConnections.find(c => c.id === notification.connection);
  const sector = mockSectors.find(s => s.id === notification.sector);

  return (
    <div
      className="page-container"
      style={{
        fontFamily: 'Inter, sans-serif',
        width: 420,
        minHeight: 992,
        background: '#f0f2f5',
        border: 'none',
        margin: '0',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'relative',
      }}
    >
      {/* Botão Voltar fixo no topo */}
      <button
        onClick={onBack}
        className="flex items-center gap-1 px-4 py-2 bg-[#DCFCE7] rounded-full text-[#0B4D33] font-semibold text-[14px] leading-[17px] border-none shadow-none"
        style={{ width: 90, height: 33, position: 'absolute', left: 16, top: 20, zIndex: 10 }}
      >
        <span className="mr-1" style={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ArrowLeft className="w-5 h-5" /></span>
        <span style={{ fontWeight: 600, fontSize: 14, lineHeight: '17px', color: '#0B4D33' }}>Voltar</span>
      </button>
      {/* Conteúdo principal centralizado */}
      <div
        className="card-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 10,
          gap: 10,
          position: 'absolute',
          width: 388,
          height: 390,
          left: 16,
          top: 118,
          border: '1px solid rgba(0,0,0,0.1)',
          borderRadius: 20,
          background: '#fff',
          boxShadow: 'none',
        }}
      >
        <div
          className="content-wrapper"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: 0,
            gap: 15,
            width: 368,
            height: 370,
            alignSelf: 'stretch',
          }}
        >
          {/* Status */}
          <div className="info-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 0, gap: 8, alignSelf: 'stretch' }}>
            <p className="label" style={{ fontWeight: 500, fontSize: 16, lineHeight: '19px', color: 'rgba(0,0,0,0.7)', alignSelf: 'stretch' }}>Status</p>
            <div className="status-pill" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 8, gap: 13, height: 36, background: notification.isActive ? '#E1E9E7' : 'rgba(239,68,68,0.2)', borderRadius: 100, alignSelf: 'stretch' }}>
              {notification.isActive ? (
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B4D33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              ) : (
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              )}
              <span className="text" style={{ fontWeight: 600, fontSize: 16, lineHeight: '24px', textAlign: 'center', color: notification.isActive ? '#0B4D33' : '#EF4444' }}>{notification.isActive ? 'Ativo' : 'Inativo'}</span>
            </div>
          </div>
          {/* Evento gatilho */}
          <div className="info-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 0, gap: 8, alignSelf: 'stretch' }}>
            <p className="label" style={{ fontWeight: 500, fontSize: 16, lineHeight: '19px', color: 'rgba(0,0,0,0.7)', alignSelf: 'stretch' }}>Evento gatilho</p>
            <p className="value" style={{ fontWeight: 500, fontSize: 16, lineHeight: '24px', color: '#000' }}>{event?.name || notification.event}</p>
          </div>
          {/* Conexão */}
          <div className="info-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 0, gap: 8, alignSelf: 'stretch' }}>
            <p className="label" style={{ fontWeight: 500, fontSize: 16, lineHeight: '19px', color: 'rgba(0,0,0,0.7)', alignSelf: 'stretch' }}>Conexão</p>
            <p className="value" style={{ fontWeight: 500, fontSize: 16, lineHeight: '24px', color: '#000' }}>{connection?.name || notification.connection}</p>
          </div>
          {/* Setor de destino */}
          <div className="info-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 0, gap: 8, alignSelf: 'stretch' }}>
            <p className="label" style={{ fontWeight: 500, fontSize: 16, lineHeight: '19px', color: 'rgba(0,0,0,0.7)', alignSelf: 'stretch' }}>Setor de destino</p>
            <p className="value" style={{ fontWeight: 500, fontSize: 16, lineHeight: '24px', color: '#000' }}>{sector?.name || notification.sector}</p>
          </div>
          {/* Mensagem */}
          <div className="info-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 0, gap: 8, alignSelf: 'stretch' }}>
            <p className="label" style={{ fontWeight: 500, fontSize: 16, lineHeight: '19px', color: 'rgba(0,0,0,0.7)', alignSelf: 'stretch' }}>Mensagem</p>
            <div className="message-box" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', padding: 10, gap: 10, width: 368, minHeight: 67, background: '#F9FAFB', border: '1px solid rgba(0,0,0,0.05)', borderRadius: 12, alignSelf: 'stretch' }}>
              <p style={{ fontWeight: 500, fontSize: 16, lineHeight: '24px', color: '#000', flexGrow: 1, whiteSpace: 'pre-wrap' }}>{notification.message}</p>
            </div>
          </div>
        </div>
        <button onClick={() => onEdit(notification.id)} className="w-[262px] h-[48px] rounded-full bg-[#0B4D33] text-white font-semibold text-[16px] leading-[19px] mx-auto mt-8 flex items-center justify-center" style={{ fontWeight: 600, fontSize: 16, lineHeight: '19px', color: '#fff', position: 'static' }}>
          <Edit className="w-4 h-4 mr-2" />
          Editar notificação
        </button>
      </div>
    </div>
  );
}
