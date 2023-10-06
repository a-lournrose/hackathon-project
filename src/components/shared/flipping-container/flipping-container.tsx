import React, { FC, useState } from 'react';
import { Button } from '@components/ui/button';
import { Progress } from '@components/ui/progress';

interface IFlippingContainer {
  contents: React.ReactNode[];
  onFinish?: () => void;
}

const FlippingContainer: FC<IFlippingContainer> = ({ contents, onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prev = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };
  const next = () => {
    if (currentIndex < contents.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onFinish?.();
    }
  };

  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-between">
        <Progress value={((currentIndex + 1) * 100) / contents.length} />
        <div className="w-20 text-right">
          {currentIndex + 1} из {contents.length}
        </div>
      </div>
      <div className="my-6">{contents[currentIndex]}</div>
      <div className="w-full flex items-center space-x-3 justify-end">
        <Button variant="outline" onClick={prev}>
          Назад
        </Button>
        <Button variant="primary" onClick={next}>
          {currentIndex === contents.length - 1 ? 'Закончить' : 'Далее'}
        </Button>
      </div>
    </div>
  );
};

export default FlippingContainer;
