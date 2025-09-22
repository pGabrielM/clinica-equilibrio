import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Team } from '@/components/team';
import { BlogPreview } from '@/components/blog';
import { BookingForm } from '@/components/booking';
import { ContactForm, ContactDetails } from '@/components/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Team />
      <BlogPreview />
      <BookingForm />
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Entre em contato
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
