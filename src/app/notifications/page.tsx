// src/app/notifications/page.tsx

'use client';

import Link from 'next/link';
// 1. Importamos nossos dados de exemplo
import { notifications } from '@/lib/data';

export default function NotificationsPage() {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md">
        
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Zappy Kiwify</h1>
              <p className="text-gray-600 mt-1">
                Gerencie aqui as notificações disparadas a partir dos eventos da Kiwify. [cite: 4]
              </p>
            </div>
            
            <Link href="/notifications/new">
              <button className="bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                + Notificação [cite: 9]
              </button>
            </Link>
          </div>
          {/* Aqui adicionaremos a busca e os filtros no futuro */}
        </div>

        {/* 2. Mapeando os dados para criar a lista */}
        <div>
          {notifications.map((notification) => (
            // A 'key' é um identificador único que o React precisa para cada item da lista.
            <div key={notification.id} className="flex items-center justify-between p-4 px-6 border-b border-gray-200 last:border-b-0">
              
              <span className="font-medium text-gray-700">{notification.name}</span>

              <div className="flex items-center gap-4">
                {/* Lógica para mostrar o status com cores diferentes */}
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  notification.status === 'Ativo' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
                }`}>
                  {notification.status}
                </span>

                <Link href={`/notifications/${notification.id}/edit`}>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold">
                    Editar [cite: 12]
                  </button>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}