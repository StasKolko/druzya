import { cn } from 'shared/lib/classNames';
import { Loader } from 'shared/ui/Loader';
import cls from './PageLoader.module.scss';

type PageLoaderProps = {
  className?: string;
};

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={cn(cls['page-loader'], [className])}>
    <Loader />
  </div>
);
