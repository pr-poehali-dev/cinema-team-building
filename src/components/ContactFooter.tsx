import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const ContactFooter = () => {
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
    <>
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
    </>
  );
};

export default ContactFooter;
