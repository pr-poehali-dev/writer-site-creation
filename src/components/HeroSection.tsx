import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-primary text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Мир сказок и
                <span className="text-primary-200 block">истории</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Погрузитесь в удивительные сказки и захватывающие исторические
                романы, которые переносят читателей в мир волшебства и давних
                времён
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Читать произведения
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900"
              >
                <Icon name="User" size={20} className="mr-2" />О писателе
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-primary/20 to-slate-600/20 rounded-2xl shadow-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                <Icon name="Feather" size={120} className="text-primary-200" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-slate-600/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
