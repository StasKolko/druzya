import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { ReloadIcon } from '@radix-ui/react-icons';
import { cn } from 'shared/lib/classNames';
import cls from './ReloadButton.module.scss';

type ReloadButtonProps = {
  className?: string;
};

export const ReloadButton = ({ className }: ReloadButtonProps) => {
  const { t } = useTranslation();
  const reloadToggle = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <Button
      className={cn([className, cls['reload-button']])}
      option="btn"
      variant="primary"
      size="sm"
      onClick={reloadToggle}
    >
      <ReloadIcon width={24} height={24} />
      {t('Перезагрузить страницу')}
    </Button>
  );
};
