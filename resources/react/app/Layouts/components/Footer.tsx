export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto flex max-w-7xl items-center justify-center space-y-6 py-8 text-sm text-gray-700 sm:px-6 lg:px-8">
      <div className="text-left">&copy; {currentYear} - Laravel React</div>
    </footer>
  );
};

export default Footer;
