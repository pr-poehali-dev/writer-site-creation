import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                О писателе
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Александр — талантливый автор, создающий уникальные сказки для
                детей и захватывающие исторические романы для взрослых
                читателей.
              </p>
              <p className="text-slate-600">
                Его произведения переносят читателей в мир волшебства и
                приключений, где каждая страница полна удивительных открытий и
                глубоких смыслов.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-slate-50 border-slate-200">
                <CardContent className="p-0 flex items-center space-x-3">
                  <Icon name="Sparkles" size={24} className="text-primary" />
                  <div>
                    <div className="font-semibold text-slate-900">15+</div>
                    <div className="text-sm text-slate-600">Сказок</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4 bg-slate-50 border-slate-200">
                <CardContent className="p-0 flex items-center space-x-3">
                  <Icon name="BookOpen" size={24} className="text-primary" />
                  <div>
                    <div className="font-semibold text-slate-900">8</div>
                    <div className="text-sm text-slate-600">Романов</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary/10 to-slate-100 rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Quote" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Философия творчества
                  </h3>
                  <p className="text-sm text-slate-600">Взгляд автора</p>
                </div>
              </div>
              <blockquote className="text-lg text-slate-700 italic leading-relaxed">
                "Каждая сказка — это мост между реальностью и мечтой, а каждый
                исторический роман — окно в прошлое, которое помогает понять
                настоящее."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
