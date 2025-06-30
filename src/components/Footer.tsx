import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icon name="BookOpen" size={24} className="text-primary" />
              <h3 className="text-lg font-semibold">Александр Писатель</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Мир сказок и исторических произведений, созданный с любовью к
              литературе
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Произведения</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Сказки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Исторические романы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Новые издания
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Разделы</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Биография
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Сообщество
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Новости
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Связь</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Icon name="Mail" size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Icon name="Users" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 Александр Писатель. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
