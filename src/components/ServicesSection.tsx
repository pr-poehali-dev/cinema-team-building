import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  return (
    <>
      <section id="service" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Что вы получаете
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный режим «под ключ» — от подготовки до финального показа
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: 'Film',
                title: '5-10 роликов',
                description: 'Профессиональные видео по 15 секунд с монтажом и эффектами',
                color: 'text-primary'
              },
              {
                icon: 'Shirt',
                title: 'Полный гардероб',
                description: 'Минимум 5 костюмов на каждый фильм — готовы к мгновенной смене',
                color: 'text-secondary'
              },
              {
                icon: 'Utensils',
                title: 'Банкет на локации',
                description: 'Комфортная площадка, где одновременно проходят съёмки и праздник',
                color: 'text-accent'
              },
              {
                icon: 'Camera',
                title: 'Профессиональная команда',
                description: 'Режиссёр, операторы, стилисты и весь реквизит',
                color: 'text-primary'
              },
              {
                icon: 'Sparkles',
                title: 'Моментальный монтаж',
                description: 'Готовые ролики показываем в конце вечера — wow-эффект гарантирован',
                color: 'text-secondary'
              },
              {
                icon: 'Users',
                title: 'Вовлечение гостей',
                description: 'Каждый становится частью шоу и получает незабываемые эмоции',
                color: 'text-accent'
              }
            ].map((feature, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <Icon name={feature.icon as any} size={48} className={feature.color} />
                  <CardTitle className="text-xl mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img 
                src="https://cdn.poehali.dev/projects/02c54270-122a-4cb9-9d42-0192b576ffcc/files/68c4c32c-e9d8-4d88-b6f9-915626c86c1c.jpg" 
                alt="Подготовка к съёмкам" 
                className="rounded-2xl shadow-xl w-full object-cover"
              />
              <div>
                <h3 className="text-3xl font-heading font-bold mb-4">Всё включено</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Мы берём на себя всю подготовку и реализацию — вы получаете готовое событие без лишних забот.
                </p>
                <ul className="space-y-3">
                  {[
                    'Логистика, реквизит, костюмы, грим',
                    'Экономия времени — всё в одной локации',
                    'Контент для соцсетей и архива',
                    'Резерв оборудования и чёткий тайминг',
                    'Публичный показ в конце вечера'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" size={24} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Как проходит мероприятие
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              3 часа динамичной программы с профессиональной организацией
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Подготовка',
                description: 'Оформляем локацию, готовим костюмы и реквизит, проверяем оборудование',
                icon: 'Settings'
              },
              {
                step: '02',
                title: 'Съёмки',
                description: 'Снимаем 5-10 роликов по 15 минут на каждый — постановка и запись',
                icon: 'Video'
              },
              {
                step: '03',
                title: 'Банкет',
                description: 'Гости наслаждаются праздником, пока идёт профессиональный монтаж',
                icon: 'PartyPopper'
              },
              {
                step: '04',
                title: 'Показ',
                description: 'Смотрим все готовые ролики вместе — эффектный финал вечера',
                icon: 'Monitor'
              }
            ].map((step, index) => (
              <Card key={index} className="relative overflow-hidden border-2 hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="absolute top-0 right-0 text-8xl font-heading font-bold text-primary/5">
                  {step.step}
                </div>
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={step.icon as any} size={32} className="text-primary" />
                  </div>
                  <Badge variant="outline" className="w-fit mb-2">{step.step}</Badge>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
