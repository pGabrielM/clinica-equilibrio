import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function MobileMenu() {
  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
        <Link href="#services" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">
          Serviços
        </Link>
        <Link href="#team" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">
          Equipe
        </Link>
        <Link href="#blog" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">
          Blog
        </Link>
        <Link href="#booking" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">
          Agendamento
        </Link>
        <Link href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">
          Contato
        </Link>
        <div className="px-3 py-2">
          <Button className="w-full">Agende sua sessão</Button>
        </div>
      </div>
    </div>
  );
}