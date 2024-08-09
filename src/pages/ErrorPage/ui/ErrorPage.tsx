type ErrorPageProps = {
  className?: string;
};

const ErrorPage = ({ className }: ErrorPageProps) => {

  return (
    <div>
      <h1>Ой! Произошла ошибка!</h1>
    </div>
  );
};

export default ErrorPage;
