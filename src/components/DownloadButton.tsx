'use client';

import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DownloadButtonProps {
  content: string;
  filename: string;
}

export function DownloadButton({ content, filename }: DownloadButtonProps) {
  const handleDownload = () => {
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleDownload}
      className="bg-[#161b22] border-[#30363d] hover:border-[#22c55e] hover:text-[#22c55e] transition-colors"
    >
      <Download className="h-4 w-4 mr-2" />
      Download
    </Button>
  );
}
