import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const menuItems = [
    "Главная",
    "О нас",
    "Биография",
    "Произведения",
    "Материалы кабинета",
    "Материалы библиотеки",
    "Образовательный раздел",
    "Игровая зона",
    "Научный раздел",
    "Сообщество",
    "Технические разделы",
    "Информация для партнеров",
    "Новости",
    "Контакты",
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Icon name="BookOpen" className="text-primary" size={28} />
            <h1 className="text-xl font-bold text-slate-800">
              Александр Писатель
            </h1>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.slice(0, 6).map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
            <Button variant="outline" size="sm">
              <Icon name="Menu" size={16} className="mr-2" />
              Ещё
            </Button>
          </nav>

          <Button className="lg:hidden" variant="ghost" size="sm">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
