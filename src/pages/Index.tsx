import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PricingFaqSection from '@/components/PricingFaqSection';
import ContactFooter from '@/components/ContactFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Clapperboard" size={32} className="text-primary" />
            <span className="text-2xl font-heading font-bold">КиноТимбилдинг</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#service" className="hover:text-primary transition-colors">Услуга</a>
            <a href="#process" className="hover:text-primary transition-colors">Процесс</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button size="lg" className="hidden md:flex">
            Заказать
          </Button>
        </div>
      </nav>

      <HeroSection />
      <ServicesSection />
      <PricingFaqSection />
      <ContactFooter />
    </div>
  );
};

export default Index;
