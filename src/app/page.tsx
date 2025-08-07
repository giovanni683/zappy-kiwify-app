"use client";

import { Plus } from 'lucide-react';
import Link from 'next/link';

import { useState } from 'react';
import { Header } from '@/components/ui/header';
import { Button } from '@/components/ui/button';
import { FilterControls } from '@/components/notifications/FilterControls';
import { NotificationsList } from '@/components/notifications/NotificationsList';
import { NotificationDetails } from '@/components/notifications/NotificationDetails';
import { NewNotification } from '@/components/notifications/NewNotification';
import { EditNotification } from '@/components/notifications/EditNotification';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import useNotificationStore from '@/lib/notification-store';

type Tela = 'lista' | 'detalhes' | 'nova' | 'editar';

export default function HomePage() {
  const {
    searchTerm,
    filterStatus,
    setSearchTerm,
    setFilterStatus,
    getFilteredNotifications,
  } = useNotificationStore();
  const filteredNotifications = getFilteredNotifications();


  const [tela, setTela] = useState<Tela>('lista');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Modal state helpers
  const isModalOpen = tela !== 'lista';

  // Handlers para navegação
  const handleVerDetalhes = (id: string) => {
    setSelectedId(id);
    setTela('detalhes');
  };
  const handleNova = () => {
    setTela('nova');
  };
  const handleEditar = (id: string) => {
    setSelectedId(id);
    setTela('editar');
  };
  const handleVoltar = () => {
    setTela('lista');
    setSelectedId(null);
  };

  return (
    <div
      className="bg-gray-50 min-h-screen"
      style={{ position: 'relative', width:  '420px', minHeight: '100vh', margin: '0 auto' }}
    >
      <Header />
      <div
        style={{
          position: 'absolute',
          left: 16,
          top: 181,
          width: 388,
          height: 608,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-end',
          padding: 0,
          gap: 22,
        }}
      >
        <div style={{ width: 388 }}>
          <h2
            style={{
              color: '#000',
              fontFamily: 'Inter, sans-serif',
              fontSize: 24,
              fontWeight: 700,
              lineHeight: '24px',
              marginBottom: 8,
              textAlign: 'left',
            }}
          >
            Notificações
          </h2>
          <p
            style={{
              color: 'rgba(0, 0, 0, 0.70)',
              fontFamily: 'Inter, sans-serif',
              fontSize: 14,
              fontWeight: 500,
              lineHeight: '24px',
              marginBottom: 16,
              textAlign: 'left',
            }}
          >
            Gerencie aqui as notificações disparadas a partir dos eventos da Kiwify.
          </p>
        </div>
        <div style={{ width: 388, marginBottom: 22 }}>
          <div
            style={{
              boxSizing: 'border-box',
              padding: 16,
              width: 388,
              height: 44,
              border: '1px solid rgba(0, 0, 0, 0.2)',
              borderRadius: 100,
              background: '#fff',
              display: 'block',
            }}
          >
            <FilterControls
              searchTerm={searchTerm}
              filterStatus={filterStatus}
              onSearchChange={setSearchTerm}
              onFilterChange={setFilterStatus}
            />
          </div>
        </div>
        <div style={{ width: 388, display: 'flex', justifyContent: 'flex-end', marginBottom: 22 }}>
          <Button
            onClick={handleNova}
            className="flex items-center gap-2 bg-[#0B4D33] hover:bg-[#166c4e] text-white font-bold px-6 py-2 rounded-full"
            style={{
              width: 144,
              height: 44,
              borderRadius: 100,
              background: '#0B4D33',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
            }}
          >
            <Plus size={24} color="#fff" />
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: 16,
                lineHeight: '24px',
                color: '#fff',
                textAlign: 'center',
              }}
            >
              Notificação
            </span>
          </Button>
        </div>
        <div style={{ width: 388, marginBottom: 22 }}>
          <NotificationsList
            notifications={filteredNotifications}
            onNotificationClick={handleVerDetalhes}
            onNotificationEdit={handleEditar}
          />
        </div>
        {/* Modal para detalhes, nova e editar */}
        <Dialog open={isModalOpen} onOpenChange={open => { if (!open) handleVoltar(); }}>
          <DialogContent className="max-w-lg">
            {tela === 'detalhes' && selectedId && (
              <NotificationDetails
                notificationId={selectedId}
                onBack={handleVoltar}
                onEdit={handleEditar}
              />
            )}
            {tela === 'nova' && (
              <NewNotification onBack={handleVoltar} />
            )}
            {tela === 'editar' && selectedId && (
              <EditNotification notificationId={selectedId} onBack={handleVoltar} />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}