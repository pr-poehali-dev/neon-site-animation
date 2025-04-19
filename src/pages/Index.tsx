import NeonTitle from "@/components/NeonTitle";
import NeonCard from "@/components/NeonCard";
import NeonButton from "@/components/NeonButton";
import { Sparkles, Zap, Stars, MessageSquare } from "lucide-react";

const Index = () => {
  const handleContactClick = () => {
    window.open("https://t.me/vocoders", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background neon-gradient-bg p-4">
      <div className="max-w-4xl w-full text-center space-y-12 py-12">
        {/* Главный заголовок */}
        <div className="space-y-4">
          <NeonTitle color="pink" size="xl">
            Неоновый Мир
          </NeonTitle>
          <p className="neon-text-blue text-xl animate-neon-pulse">
            Добро пожаловать в будущее
          </p>
        </div>

        {/* Карточки с информацией */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <NeonCard color="purple" animated>
            <Stars className="w-8 h-8 text-neon-purple mx-auto mb-4" />
            <NeonTitle color="purple" size="sm">
              Креативность
            </NeonTitle>
            <p className="mt-4 text-gray-300">
              Выражайте свои самые смелые идеи с помощью неоновых цветов и эффектов
            </p>
          </NeonCard>
          
          <NeonCard color="green" animated>
            <Zap className="w-8 h-8 text-neon-green mx-auto mb-4" />
            <NeonTitle color="green" size="sm">
              Энергия
            </NeonTitle>
            <p className="mt-4 text-gray-300">
              Зарядитесь энергией светящихся неоновых элементов вашего дизайна
            </p>
          </NeonCard>
          
          <NeonCard color="yellow" animated>
            <Sparkles className="w-8 h-8 text-neon-yellow mx-auto mb-4" />
            <NeonTitle color="yellow" size="sm">
              Яркость
            </NeonTitle>
            <p className="mt-4 text-gray-300">
              Сияйте ярко в темноте с помощью наших неоновых компонентов
            </p>
          </NeonCard>
        </div>

        {/* Контактная информация */}
        <NeonCard color="blue" className="max-w-md mx-auto">
          <MessageSquare className="w-8 h-8 text-neon-blue mx-auto mb-4" />
          <NeonTitle color="blue" size="sm">
            Связаться с нами
          </NeonTitle>
          <p className="mt-4 text-gray-300">
            У вас есть вопросы или предложения? Напишите нам в Телеграм!
          </p>
          <div className="mt-6">
            <NeonButton 
              color="blue" 
              variant="filled" 
              onClick={handleContactClick}
            >
              Телеграм: @vocoders
            </NeonButton>
          </div>
        </NeonCard>

        {/* Кнопки */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <NeonButton color="blue" size="lg">
            Исследовать
          </NeonButton>
          <NeonButton color="pink" variant="filled" size="lg">
            Начать сейчас
          </NeonButton>
        </div>

        {/* Подвал */}
        <footer className="mt-16">
          <p className="text-sm text-gray-400">
            Создано с ❤️ и неоновой магией
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
