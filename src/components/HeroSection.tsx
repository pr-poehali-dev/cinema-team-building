import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 text-lg py-1 px-4">🎬 Кино-вечер под ключ</Badge>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Превратите команду в <span className="text-primary">звёзд кино</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Корпоративный тимбилдинг с профессиональными съёмками, костюмами и банкетом на открытом воздухе
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="Calendar" size={20} className="mr-2" />
                Забронировать дату
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>
          </div>
          <div className="animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/projects/02c54270-122a-4cb9-9d42-0192b576ffcc/files/0962789f-a1a2-47b1-aded-6515dc8553ee.jpg" 
              alt="Команда на съёмках" 
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
