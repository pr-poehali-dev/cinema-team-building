import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

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

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Тарифы
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите оптимальный формат для вашего мероприятия
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Старт',
                price: 'от 150 000 ₽',
                description: 'Для небольших команд',
                features: [
                  '5 роликов по 15 секунд',
                  '2 киножанра на выбор',
                  '10 костюмов',
                  'Базовая локация',
                  'Команда из 4 человек',
                  'Публичный показ'
                ],
                popular: false,
                color: 'from-primary/20 to-primary/5'
              },
              {
                name: 'Премиум',
                price: 'от 250 000 ₽',
                description: 'Самый популярный',
                features: [
                  '10 роликов по 15 секунд',
                  '4 киножанра на выбор',
                  '20 костюмов',
                  'Премиум локация',
                  'Команда из 6 человек',
                  'Банкет включен',
                  'Монтаж с эффектами',
                  'Публичный показ'
                ],
                popular: true,
                color: 'from-secondary/20 to-secondary/5'
              },
              {
                name: 'VIP',
                price: 'от 400 000 ₽',
                description: 'Максимальный формат',
                features: [
                  '15 роликов по 15 секунд',
                  'Без ограничений по жанрам',
                  '30+ костюмов',
                  'Эксклюзивная локация',
                  'Команда из 10 человек',
                  'Премиум банкет',
                  'Кинематографичный монтаж',
                  'Публичный показ + копии',
                  'Фотограф в подарок'
                ],
                popular: false,
                color: 'from-accent/20 to-accent/5'
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up ${plan.popular ? 'border-secondary scale-105' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-secondary text-secondary-foreground text-sm py-1 px-4">
                      ⭐ Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader className={`bg-gradient-to-br ${plan.color} rounded-t-lg`}>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-heading font-bold">{plan.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg" variant={plan.popular ? 'default' : 'outline'}>
                    Выбрать тариф
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Частые вопросы
            </h2>
            <p className="text-xl text-muted-foreground">
              Ответы на самые популярные вопросы
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: 'Сколько человек может участвовать?',
                answer: 'Рекомендуем группы от 15 до 100 человек. Для больших команд можем организовать несколько съёмочных площадок одновременно.'
              },
              {
                question: 'Как долго длится мероприятие?',
                answer: 'Стандартная программа занимает 3 часа: 2 часа на съёмки и банкет, 1 час на монтаж и показ. Можем адаптировать под ваши пожелания.'
              },
              {
                question: 'Что если погода испортится?',
                answer: 'У нас всегда есть резервный план! Мы можем быстро перенести мероприятие в крытую локацию или предложить альтернативную дату.'
              },
              {
                question: 'Нужна ли актёрская подготовка?',
                answer: 'Совершенно нет! Наш режиссёр поможет каждому раскрыться перед камерой. Главное — желание повеселиться и попробовать себя в новой роли.'
              },
              {
                question: 'Можно выбрать свои фильмы?',
                answer: 'Конечно! У нас есть библиотека из 50+ культовых фильмов, но мы с удовольствием добавим ваши любимые картины в программу.'
              },
              {
                question: 'Как получить готовые видео?',
                answer: 'Показываем ролики сразу в конце вечера. В течение 2-3 дней высылаем на почту все файлы в высоком качестве для соцсетей и архива.'
              }
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border-2 rounded-xl px-6 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Готовы стать звёздами?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Оставьте заявку, и мы свяжемся с вами в течение часа, чтобы обсудить детали вашего кино-вечера
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <Icon name="Mail" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@kinotimbilding.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Работаем</h3>
                    <p className="text-muted-foreground">По всей России и СНГ</p>
                  </div>
                </div>
              </div>
              <img 
                src="https://cdn.poehali.dev/projects/02c54270-122a-4cb9-9d42-0192b576ffcc/files/17bb7373-73ee-431d-8101-0aa0a1cfb768.jpg" 
                alt="Показ готовых роликов" 
                className="rounded-2xl shadow-xl w-full object-cover mt-8"
              />
            </div>

            <Card className="border-2 shadow-xl animate-scale-in">
              <CardHeader>
                <CardTitle className="text-2xl">Заказать мероприятие</CardTitle>
                <CardDescription>Заполните форму, и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input 
                      type="email" 
                      placeholder="ivan@company.ru" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input 
                      type="tel" 
                      placeholder="+7 (999) 123-45-67" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Комментарий</label>
                    <Textarea 
                      placeholder="Расскажите о вашем мероприятии..." 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-muted/50 py-12 px-4 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Clapperboard" size={32} className="text-primary" />
                <span className="text-xl font-heading font-bold">КиноТимбилдинг</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Превращаем корпоративы в незабываемые кино-события
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#service" className="hover:text-primary transition-colors">Услуга</a></li>
                <li><a href="#process" className="hover:text-primary transition-colors">Процесс</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (999) 123-45-67</li>
                <li>hello@kinotimbilding.ru</li>
                <li>Работаем по всей России</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Соцсети</h3>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Instagram" size={20} className="text-primary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Youtube" size={20} className="text-primary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Send" size={20} className="text-primary" />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 КиноТимбилдинг. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
