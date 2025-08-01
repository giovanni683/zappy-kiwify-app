// src/app/notifications/page.tsx

'use client'; // Importante para interatividade

import Link from 'next/link';

// Componente da página exportado como padrão
export default function NotificationsPage() {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Zappy Kiwify</h1>
            <p className="text-gray-600 mt-1">
              Gerencie aqui todas as notificações automáticas disparadas aos seus clientes a partir dos eventos da Kiwify.
            </p>
          </div>
          
          <Link href="/notifications/new">
            <button className="bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              + Notificação
            </button>
          </Link>
        </div>

        <div className="mt-8">
          <p>A lista de notificações aparecerá aqui...</p>
        </div>

      </div>
    </div>
  );
}