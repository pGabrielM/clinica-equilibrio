import { Hero } from '@/components/resources/landing/hero';
import { Services } from '@/components/resources/landing/services';
import { Team } from '@/components/resources/landing/team';
import { BlogPreview } from '@/components/resources/landing/blog-preview';
import { BookingForm } from '@/components/resources/landing/booking-form';
import { ContactForm } from '@/components/resources/landing/contact-form';
import { ContactDetails } from '@/components/resources/landing/contact-details';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Team />
      <BlogPreview />
      <BookingForm />
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Entre em contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos aqui para ajudar. Entre em contato conosco para dúvidas ou agendamentos.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactDetails />
          </div>
        </div>
      </section>
    </>
  );
}
