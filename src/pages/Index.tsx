import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

function Index() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      icon: 'Palette',
      title: 'Стандартная оклейка',
      description: 'Широкий выбор цветов и текстур виниловой плёнки для вашего кондиционера',
      price: 'от 3 000 ₽'
    },
    {
      icon: 'Sparkles',
      title: 'Премиум оклейка',
      description: 'Дизайнерские решения с градиентами и эксклюзивными паттернами',
      price: 'от 5 000 ₽'
    },
    {
      icon: 'Image',
      title: 'Индивидуальный дизайн',
      description: 'Печать любого изображения или логотипа на плёнке',
      price: 'от 7 000 ₽'
    },
    {
      icon: 'Shield',
      title: 'Защитная плёнка',
      description: 'Прозрачное покрытие для защиты от царапин и загрязнений',
      price: 'от 2 500 ₽'
    }
  ];

  const advantages = [
    {
      icon: 'Clock',
      title: 'Быстрая установка',
      description: 'Оклейка занимает всего 1-2 часа'
    },
    {
      icon: 'Award',
      title: 'Гарантия качества',
      description: 'Гарантия на работы 2 года'
    },
    {
      icon: 'Zap',
      title: 'Без демонтажа',
      description: 'Работаем без снятия кондиционера'
    },
    {
      icon: 'ThumbsUp',
      title: 'Легкий уход',
      description: 'Плёнку легко мыть и чистить'
    }
  ];

  const portfolio = [
    {
      before: 'https://cdn.poehali.dev/projects/e045c840-e982-4ee8-9d21-a7231057ee79/files/d76184c3-7677-4aa5-840b-e4b1e9ed920f.jpg',
      after: 'https://cdn.poehali.dev/projects/e045c840-e982-4ee8-9d21-a7231057ee79/files/5f958acc-73e8-4e08-9415-c4b1217e220a.jpg',
      title: 'Градиентная оклейка'
    },
    {
      before: 'https://cdn.poehali.dev/projects/e045c840-e982-4ee8-9d21-a7231057ee79/files/ba1444be-d470-4e21-94ed-319f66b6d1b2.jpg',
      after: 'https://cdn.poehali.dev/projects/e045c840-e982-4ee8-9d21-a7231057ee79/files/5f958acc-73e8-4e08-9415-c4b1217e220a.jpg',
      title: 'Яркий дизайн'
    }
  ];

  const faqs = [
    {
      question: 'Как долго держится виниловая плёнка?',
      answer: 'При правильном уходе плёнка служит 5-7 лет. Она устойчива к УФ-излучению и перепадам температур.'
    },
    {
      question: 'Можно ли снять плёнку потом?',
      answer: 'Да, плёнка легко снимается без повреждения поверхности кондиционера. При необходимости можно заменить на новую.'
    },
    {
      question: 'Влияет ли плёнка на работу кондиционера?',
      answer: 'Нет, плёнка наклеивается только на внешний корпус и никак не влияет на работу системы охлаждения.'
    },
    {
      question: 'Как ухаживать за оклеенным кондиционером?',
      answer: 'Достаточно протирать влажной тряпкой. Можно использовать мягкие моющие средства без абразивов.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-cyan-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Wind" className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              АртКлимат
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary">
            Заказать звонок
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
                Преобразите ваш кондиционер
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Оклейка виниловой плёнкой — стильно, быстро и доступно. 
                Превратите обычный кондиционер в элемент дизайна!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-lg">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Заказать оклейку
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть работы
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">500+</div>
                  <div className="text-sm text-muted-foreground">Выполненных работ</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">2 года</div>
                  <div className="text-sm text-muted-foreground">Гарантия</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">1-2 часа</div>
                  <div className="text-sm text-muted-foreground">Время работы</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/e045c840-e982-4ee8-9d21-a7231057ee79/files/5f958acc-73e8-4e08-9415-c4b1217e220a.jpg"
                alt="Оклеенный кондиционер"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Почему выбирают нас
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Мы делаем кондиционеры стильными и уникальными
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {advantages.map((adv, idx) => (
              <Card key={idx} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                  <Icon name={adv.icon} className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{adv.title}</h3>
                <p className="text-muted-foreground">{adv.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Наши работы
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Интерактивное сравнение: до и после оклейки
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-8">
              <img 
                src={portfolio[selectedImage].before}
                alt="До оклейки"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img 
                  src={portfolio[selectedImage].after}
                  alt="После оклейки"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Icon name="ChevronsLeftRight" size={24} />
                </div>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
              />

              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                До
              </div>
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                После
              </div>
            </div>

            <div className="flex justify-center gap-4">
              {portfolio.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedImage(idx);
                    setSliderPosition(50);
                  }}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedImage === idx
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gradient-to-br from-purple-100 via-white to-cyan-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Наши услуги
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Профессиональная оклейка кондиционеров любой сложности
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary">
                <div className="w-16 h-16 bg-gradient-to-br from-primary via-accent to-secondary rounded-2xl flex items-center justify-center mb-4">
                  <Icon name={service.icon} className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {service.price}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Прайс-лист
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Прозрачные цены без скрытых платежей
          </p>
          <Card className="overflow-hidden border-2">
            <div className="divide-y">
              <div className="p-6 bg-gradient-to-r from-primary to-secondary">
                <div className="grid grid-cols-2 gap-4 text-white font-semibold">
                  <div>Услуга</div>
                  <div className="text-right">Цена</div>
                </div>
              </div>
              {[
                ['Консультация и замер', 'Бесплатно'],
                ['Стандартная оклейка (однотонная)', 'от 3 000 ₽'],
                ['Оклейка с градиентом', 'от 4 500 ₽'],
                ['Премиум оклейка (дизайнерская)', 'от 5 000 ₽'],
                ['Печать индивидуального дизайна', 'от 7 000 ₽'],
                ['Защитная плёнка', 'от 2 500 ₽'],
                ['Демонтаж старой плёнки', 'от 1 000 ₽'],
                ['Выезд за МКАД', 'от 500 ₽']
              ].map(([service, price], idx) => (
                <div key={idx} className="p-6 hover:bg-muted/50 transition-colors">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="font-medium">{service}</div>
                    <div className="text-right font-bold text-primary">{price}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <div className="mt-8 text-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
              <Icon name="Calculator" className="mr-2" size={20} />
              Рассчитать точную стоимость
            </Button>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Частые вопросы
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Ответы на популярные вопросы о оклейке кондиционеров
          </p>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <Icon 
                    name={openFaq === idx ? "ChevronUp" : "ChevronDown"} 
                    className="flex-shrink-0 text-primary"
                    size={24}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-muted-foreground">
                    {faq.answer}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary via-accent to-secondary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">
            Готовы преобразить ваш кондиционер?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Оставьте заявку, и мы свяжемся с вами в течение 15 минут
          </p>
          <Card className="p-8 bg-white text-foreground">
            <form className="grid md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Ваше имя"
                className="px-4 py-3 rounded-lg border-2 border-input focus:border-primary outline-none"
              />
              <input 
                type="tel" 
                placeholder="Телефон"
                className="px-4 py-3 rounded-lg border-2 border-input focus:border-primary outline-none"
              />
              <input 
                type="text" 
                placeholder="Адрес"
                className="px-4 py-3 rounded-lg border-2 border-input focus:border-primary outline-none md:col-span-2"
              />
              <textarea 
                placeholder="Комментарий (опционально)"
                rows={4}
                className="px-4 py-3 rounded-lg border-2 border-input focus:border-primary outline-none md:col-span-2"
              />
              <Button 
                type="submit"
                size="lg"
                className="md:col-span-2 bg-gradient-to-r from-primary to-accent text-lg"
              >
                <Icon name="Send" className="mr-2" size={20} />
                Отправить заявку
              </Button>
            </form>
          </Card>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Icon name="Phone" size={32} className="mb-2" />
              <div className="font-semibold">+7 (999) 123-45-67</div>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Mail" size={32} className="mb-2" />
              <div className="font-semibold">info@artclimat.ru</div>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="MapPin" size={32} className="mb-2" />
              <div className="font-semibold">Москва, ул. Примерная, 1</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Wind" className="text-white" size={20} />
            </div>
            <span className="text-lg font-bold">АртКлимат</span>
          </div>
          <p className="text-gray-400">
            © 2024 АртКлимат. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Index;
