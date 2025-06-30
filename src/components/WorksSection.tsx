import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const WorksSection = () => {
  const fairyTales = [
    {
      title: "Волшебный лес",
      description:
        "История о маленькой девочке, которая открыла дверь в мир говорящих животных",
      year: "2023",
    },
    {
      title: "Звёздный замок",
      description:
        "Приключения принца, который отправился на поиски падающих звёзд",
      year: "2022",
    },
    {
      title: "Добрый дракон",
      description:
        "Сказка о дружбе между деревенским мальчиком и мудрым драконом",
      year: "2024",
    },
  ];

  const historicalNovels = [
    {
      title: "Последний боярин",
      description:
        "Эпическая сага о временах Ивана Грозного и судьбе знатного рода",
      year: "2023",
    },
    {
      title: "Дочь купца",
      description: "Роман о любви и предательстве в средневековом Новгороде",
      year: "2022",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Произведения
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Коллекция сказок и исторических романов, созданных с любовью к
            литературе
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Icon name="Sparkles" size={28} className="text-primary" />
              <h3 className="text-2xl font-bold text-slate-900">Сказки</h3>
            </div>

            <div className="space-y-4">
              {fairyTales.map((tale, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg text-slate-900">
                        {tale.title}
                      </CardTitle>
                      <Badge variant="secondary">{tale.year}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{tale.description}</p>
                    <Button variant="outline" size="sm">
                      <Icon name="Eye" size={16} className="mr-2" />
                      Читать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Icon name="Crown" size={28} className="text-primary" />
              <h3 className="text-2xl font-bold text-slate-900">
                Исторические романы
              </h3>
            </div>

            <div className="space-y-4">
              {historicalNovels.map((novel, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg text-slate-900">
                        {novel.title}
                      </CardTitle>
                      <Badge variant="secondary">{novel.year}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{novel.description}</p>
                    <Button variant="outline" size="sm">
                      <Icon name="Eye" size={16} className="mr-2" />
                      Читать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Icon name="Library" size={20} className="mr-2" />
            Посмотреть все произведения
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
