import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function MobileMenu() {
  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
        <Link href="#services" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors">
          Serviços
        </Link>
        <Link href="#team" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors">
          Equipe
        </Link>
        <Link href="#blog" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors">
          Blog
        </Link>
        <Link href="#booking" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors">
          Agendamento
        </Link>
        <Link href="#contact" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors">
          Contato
        </Link>
        <div className="px-3 py-2">
          <Link href="#booking">
            <Button className="w-full">Agende sua consulta</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}