

import React from 'react';
import { FiVideoOff } from 'react-icons/fi';

interface VideoFeedProps {
  streamUrl?: string;
}

export const VideoFeed: React.FC<VideoFeedProps> = ({ streamUrl }) => {
  return (
    <div className="w-full aspect-video bg-black dark:bg-background-tertiary rounded-lg shadow-inner flex items-center justify-center text-text-secondary overflow-hidden">
      {streamUrl ? (
        <img
          src={streamUrl}
          alt="Monitoramento ao Vivo"
          className="w-full h-full object-contain"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      ) : (
        <div className="flex flex-col items-center">
          <FiVideoOff size={48} className="mb-4" />
          <p className="font-semibold">Nenhuma câmera selecionada</p>
          <p className="text-sm">Escolha uma câmera no seletor para visualizar o feed.</p>
        </div>
      )}
    </div>
  );
};
