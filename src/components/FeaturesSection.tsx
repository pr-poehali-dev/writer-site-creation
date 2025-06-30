import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "Library",
      title: "Электронная библиотека",
      description:
        "Доступ к полной коллекции произведений в цифровом формате с возможностью онлайн-чтения",
      action: "Открыть библиотеку",
    },
    {
      icon: "Search",
      title: "Поиск по ключевым словам",
      description:
        "Мощная система поиска по содержанию книг, персонажам, темам и цитатам",
      action: "Попробовать поиск",
    },
    {
      icon: "GraduationCap",
      title: "Образовательные курсы",
      description:
        "Курсы по литературному мастерству, истории и анализу произведений",
      action: "Смотреть курсы",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Особые возможности
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Современные инструменты для глубокого погружения в мир литературы
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 border-slate-200"
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={feature.icon as any}
                    size={32}
                    className="text-primary"
                  />
                </div>
                <CardTitle className="text-xl text-slate-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
                <Button variant="outline" className="w-full">
                  {feature.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-slate-100 rounded-2xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Быстрый поиск по библиотеке
            </h3>
            <p className="text-slate-600">
              Найдите произведения, персонажей или цитаты за секунды
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Icon
                  name="Search"
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                />
                <Input
                  placeholder="Поиск по произведениям, персонажам, темам..."
                  className="pl-10 h-12 bg-white border-slate-300"
                />
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
                Найти
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {[
                "волшебство",
                "история",
                "приключения",
                "дружба",
                "средневековье",
              ].map((tag, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="text-xs bg-white/50 hover:bg-white border border-slate-200"
                >
                  #{tag}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
