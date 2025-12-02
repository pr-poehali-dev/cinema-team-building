import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const PricingFaqSection = () => {
  return (
    <>
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
    </>
  );
};

export default PricingFaqSection;
