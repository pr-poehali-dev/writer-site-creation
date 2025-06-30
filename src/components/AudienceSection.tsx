import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const AudienceSection = () => {
  const audiences = [
    {
      icon: "BookOpen",
      title: "Читатели",
      description: "Погрузитесь в мир сказок и исторических произведений",
      features: [
        "Онлайн-чтение",
        "Рецензии и обсуждения",
        "Личная библиотека",
        "Рекомендации",
      ],
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "GraduationCap",
      title: "Студенты",
      description: "Изучайте литературу с помощью образовательных материалов",
      features: [
        "Анализ произведений",
        "Курсы и лекции",
        "Методические материалы",
        "Исследования",
      ],
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "Users",
      title: "Коллеги-писатели",
      description: "Профессиональное сообщество для обмена опытом",
      features: [
        "Мастер-классы",
        "Критический анализ",
        "Творческие проекты",
        "Networking",
      ],
      color: "bg-purple-50 border-purple-200",
    },
  ];

  const interactiveElements = [
    {
      icon: "MessageSquare",
      title: "Форумы",
      description: "Обсуждение произведений и литературных тем",
      users: "1.2k+",
    },
    {
      icon: "Trophy",
      title: "Викторины",
      description: "Проверьте знание произведений и истории",
      users: "800+",
    },
    {
      icon: "Monitor",
      title: "Онлайн-чтение",
      description: "Читайте произведения прямо в браузере",
      users: "2.5k+",
    },
    {
      icon: "Calendar",
      title: "События",
      description: "Литературные встречи и презентации",
      users: "400+",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Для каждого читателя
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Персонализированный опыт для читателей, студентов и коллег-писателей
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {audiences.map((audience, index) => (
            <Card
              key={index}
              className={`${audience.color} hover:shadow-lg transition-all duration-300`}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                  <Icon
                    name={audience.icon as any}
                    size={24}
                    className="text-primary"
                  />
                </div>
                <CardTitle className="text-xl text-slate-900">
                  {audience.title}
                </CardTitle>
                <p className="text-slate-600">{audience.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {audience.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Присоединиться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Интерактивные возможности
            </h3>
            <p className="text-slate-600">
              Активное сообщество для обсуждений и совместного изучения
              литературы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interactiveElements.map((element, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-md transition-shadow bg-white"
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon
                      name={element.icon as any}
                      size={20}
                      className="text-primary"
                    />
                  </div>
                  <CardTitle className="text-lg text-slate-900">
                    {element.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-slate-600">
                    {element.description}
                  </p>
                  <div className="flex justify-center">
                    <Badge variant="secondary" className="text-xs">
                      {element.users} участников
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Участвовать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
