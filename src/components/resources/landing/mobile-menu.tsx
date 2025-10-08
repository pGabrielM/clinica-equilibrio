import Link from "next/link";
import { Button } from "@/components/commons/button";

export function MobileMenu() {
  return (
    <div className="md:hidden">
      <div className="bg-background space-y-1 border-t px-2 pt-2 pb-3 sm:px-3">
        <Link
          href="#services"
          className="text-muted-foreground hover:text-primary block px-3 py-2 transition-colors"
        >
          Serviços
        </Link>
        <Link
          href="#team"
          className="text-muted-foreground hover:text-primary block px-3 py-2 transition-colors"
        >
          Equipe
        </Link>
        <Link
          href="#blog"
          className="text-muted-foreground hover:text-primary block px-3 py-2 transition-colors"
        >
          Blog
        </Link>
        <Link
          href="#booking"
          className="text-muted-foreground hover:text-primary block px-3 py-2 transition-colors"
        >
          Agendamento
        </Link>
        <Link
          href="#contact"
          className="text-muted-foreground hover:text-primary block px-3 py-2 transition-colors"
        >
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
