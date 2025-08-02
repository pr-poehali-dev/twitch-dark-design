import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-minecraft-dark">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-minecraft-darker/95 backdrop-blur-sm border-b border-minecraft-green/20">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-minecraft font-bold bg-gradient-to-r from-minecraft-green to-minecraft-purple bg-clip-text text-transparent">
                MINECRAFT STREAMER
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#streams" className="text-minecraft-text hover:text-minecraft-green transition-colors">Стримы</a>
              <a href="#gallery" className="text-minecraft-text hover:text-minecraft-green transition-colors">Галерея</a>
              <a href="#stats" className="text-minecraft-text hover:text-minecraft-green transition-colors">Статистика</a>
              <a href="#merch" className="text-minecraft-text hover:text-minecraft-green transition-colors">Мерч</a>
              <Button className="bg-minecraft-green hover:bg-minecraft-green/80 text-minecraft-dark font-bold">
                <Icon name="Heart" size={16} className="mr-2" />
                ДОНАТ
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-minecraft-purple/20 to-minecraft-green/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-minecraft font-black mb-6 bg-gradient-to-r from-minecraft-green via-minecraft-purple to-minecraft-accent bg-clip-text text-transparent">
              МАЙНКРАФТ СТРИМЕР
            </h1>
            <p className="text-xl font-body text-minecraft-text/80 mb-8 max-w-2xl mx-auto">
              Строим миры, покоряем измерения и создаем незабываемые моменты вместе с тысячами зрителей каждый день
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-minecraft-green hover:bg-minecraft-green/80 text-minecraft-dark font-bold text-lg px-8">
                <Icon name="Play" size={20} className="mr-2" />
                СМОТРЕТЬ СТРИМ
              </Button>
              <Button size="lg" variant="outline" className="border-minecraft-purple text-minecraft-purple hover:bg-minecraft-purple hover:text-white font-bold text-lg px-8">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                ПОДПИСАТЬСЯ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Status */}
      <section className="py-8 bg-minecraft-darker">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-minecraft-text font-bold">СЕЙЧАС В ЭФИРЕ</span>
            </div>
            <span className="text-minecraft-green">2,847 зрителей</span>
            <span className="text-minecraft-text/60">•</span>
            <span className="text-minecraft-text">Строим замок в End</span>
          </div>
        </div>
      </section>

      {/* Donation Goal */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto bg-minecraft-darker border-minecraft-green/30">
            <CardHeader>
              <CardTitle className="text-center font-minecraft text-minecraft-green">ЦЕЛЬ СТРИМА</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-minecraft-text">
                  <span>Новая видеокарта для записи</span>
                  <span>75,000 ₽ / 100,000 ₽</span>
                </div>
                <Progress value={75} className="h-4" />
                <div className="text-center">
                  <Button className="bg-minecraft-accent hover:bg-minecraft-accent/80 text-minecraft-dark font-bold">
                    <Icon name="Gift" size={16} className="mr-2" />
                    ПОДДЕРЖАТЬ 50₽
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stream Schedule */}
      <section id="streams" className="py-16 bg-minecraft-darker">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-minecraft font-bold text-center mb-12 text-minecraft-green">РАСПИСАНИЕ СТРИМОВ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { day: "ПН", time: "20:00", game: "Выживание", status: "upcoming" },
              { day: "ВТ", time: "19:30", game: "Модпак SkyFactory", status: "upcoming" },
              { day: "СР", time: "21:00", game: "PvP Турнир", status: "live" },
              { day: "ЧТ", time: "20:00", game: "Строительство", status: "upcoming" },
              { day: "ПТ", time: "22:00", game: "Приватный сервер", status: "upcoming" },
              { day: "СБ", time: "15:00", game: "Марафон 8 часов", status: "upcoming" }
            ].map((stream) => (
              <Card key={stream.day} className="bg-minecraft-dark border-minecraft-green/30 hover:border-minecraft-green/60 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-minecraft font-bold text-minecraft-green">{stream.day}</div>
                    {stream.status === "live" && (
                      <Badge className="bg-red-500 text-white animate-pulse">LIVE</Badge>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-minecraft-text">
                      <Icon name="Clock" size={16} className="mr-2 text-minecraft-green" />
                      {stream.time}
                    </div>
                    <div className="flex items-center text-minecraft-text">
                      <Icon name="Gamepad2" size={16} className="mr-2 text-minecraft-purple" />
                      {stream.game}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-minecraft font-bold text-center mb-12 text-minecraft-purple">ГАЛЕРЕЯ ПОСТРОЕК</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 1, title: "Замок в горах", desc: "Эпичная крепость со рвом", image: "/img/7e4085d0-6915-404c-9407-3d0aa5dc5213.jpg" },
              { id: 2, title: "Подводный город", desc: "Атлантида в майнкрафте", image: "/img/6fb23965-987c-4eb7-b57b-120999d5330a.jpg" },
              { id: 3, title: "Космическая станция", desc: "База в измерении Энд", image: "/img/3657c3fa-a211-4c16-ae90-8b0b6c8e83df.jpg" },
              { id: 4, title: "Летающий остров", desc: "Магический парящий город", image: null },
              { id: 5, title: "Пиратский корабль", desc: "Огромная каравелла в океане", image: null },
              { id: 6, title: "Драконье логово", desc: "Тайная база дракона", image: null }
            ].map((item) => (
              <Card key={item.id} className="group bg-minecraft-dark border-minecraft-purple/30 hover:border-minecraft-purple/60 transition-all overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-minecraft-purple/20 to-minecraft-green/20 relative overflow-hidden">
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-minecraft-dark/50 flex items-center justify-center">
                      <Icon name="Image" size={48} className="text-minecraft-text/40" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-minecraft-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-minecraft text-minecraft-green mb-2">{item.title}</h3>
                      <p className="text-sm text-minecraft-text/80">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Achievements */}
      <section id="stats" className="py-16 bg-minecraft-darker">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-minecraft font-bold text-center mb-12 text-minecraft-accent">СТАТИСТИКА И ДОСТИЖЕНИЯ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: "Часов в игре", value: "2,847", icon: "Clock" },
              { title: "Построек", value: "156", icon: "Home" },
              { title: "Убито мобов", value: "45,672", icon: "Sword" },
              { title: "Добыто алмазов", value: "1,234", icon: "Gem" }
            ].map((stat) => (
              <Card key={stat.title} className="bg-minecraft-dark border-minecraft-accent/30 text-center">
                <CardContent className="p-6">
                  <Icon name={stat.icon as any} size={32} className="mx-auto mb-4 text-minecraft-accent" />
                  <div className="text-3xl font-minecraft font-bold text-minecraft-green mb-2">{stat.value}</div>
                  <div className="text-minecraft-text/80">{stat.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-minecraft-dark border-minecraft-green/30">
              <CardHeader>
                <CardTitle className="font-minecraft text-minecraft-green">ПОСЛЕДНИЕ ДОСТИЖЕНИЯ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Укротитель драконов", desc: "Победил Дракона Края 10 раз", progress: 100 },
                    { name: "Мастер-строитель", desc: "Построил 150 уникальных зданий", progress: 95 },
                    { name: "Собиратель редкостей", desc: "Собрал все виды блоков", progress: 78 },
                  ].map((achievement) => (
                    <div key={achievement.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-minecraft text-minecraft-text">{achievement.name}</span>
                        <span className="text-minecraft-green">{achievement.progress}%</span>
                      </div>
                      <Progress value={achievement.progress} className="h-2" />
                      <p className="text-sm text-minecraft-text/60">{achievement.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-minecraft-dark border-minecraft-purple/30">
              <CardHeader>
                <CardTitle className="font-minecraft text-minecraft-purple">ПРОГРЕСС МИРА</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-minecraft-text">Исследовано мира</span>
                      <span className="text-minecraft-green">67%</span>
                    </div>
                    <Progress value={67} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-minecraft-text">Измерения пройдены</span>
                      <span className="text-minecraft-purple">3/4</span>
                    </div>
                    <Progress value={75} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-minecraft-text">Боссы побеждены</span>
                      <span className="text-minecraft-accent">8/12</span>
                    </div>
                    <Progress value={66} className="h-3" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Merch Store */}
      <section id="merch" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-minecraft font-bold text-center mb-12 text-minecraft-green">МАГАЗИН МЕРЧА</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Футболка Creeper", price: "1,990₽", image: "👕" },
              { name: "Кружка с логотипом", price: "690₽", image: "☕" },
              { name: "Худи Enderman", price: "3,490₽", image: "🧥" },
              { name: "Наклейки набор", price: "290₽", image: "🏷️" },
              { name: "Рюкзак Minecraft", price: "2,790₽", image: "🎒" },
              { name: "Брелок Алмазный меч", price: "390₽", image: "🗝️" }
            ].map((item) => (
              <Card key={item.name} className="bg-minecraft-dark border-minecraft-green/30 hover:border-minecraft-green/60 transition-colors">
                <CardContent className="p-6">
                  <div className="text-6xl text-center mb-4">{item.image}</div>
                  <h3 className="font-minecraft text-minecraft-green text-center mb-2">{item.name}</h3>
                  <div className="text-2xl font-bold text-minecraft-accent text-center mb-4">{item.price}</div>
                  <Button className="w-full bg-minecraft-purple hover:bg-minecraft-purple/80 text-white font-bold">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    КУПИТЬ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-minecraft-darker border-t border-minecraft-green/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-minecraft text-minecraft-green mb-4">СОЦСЕТИ</h3>
              <div className="space-y-2">
                <a href="#" className="flex items-center text-minecraft-text hover:text-minecraft-green transition-colors">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Twitch
                </a>
                <a href="#" className="flex items-center text-minecraft-text hover:text-minecraft-green transition-colors">
                  <Icon name="Youtube" size={16} className="mr-2" />
                  YouTube
                </a>
                <a href="#" className="flex items-center text-minecraft-text hover:text-minecraft-green transition-colors">
                  <Icon name="Send" size={16} className="mr-2" />
                  Telegram
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-minecraft text-minecraft-purple mb-4">ПОДДЕРЖКА</h3>
              <div className="space-y-2">
                <a href="#" className="block text-minecraft-text hover:text-minecraft-purple transition-colors">
                  Donationalerts
                </a>
                <a href="#" className="block text-minecraft-text hover:text-minecraft-purple transition-colors">
                  Boosty
                </a>
                <a href="#" className="block text-minecraft-text hover:text-minecraft-purple transition-colors">
                  PayPal
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-minecraft text-minecraft-accent mb-4">КОНТАКТЫ</h3>
              <div className="space-y-2">
                <p className="text-minecraft-text">
                  По вопросам сотрудничества:
                </p>
                <a href="mailto:business@streamer.com" className="text-minecraft-accent hover:text-minecraft-accent/80 transition-colors">
                  business@streamer.com
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-minecraft-green/20 mt-8 pt-8 text-center">
            <p className="text-minecraft-text/60">
              © 2024 Minecraft Streamer. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}