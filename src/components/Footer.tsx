
const Footer = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>
        <div className="text-center text-gray-500 text-sm mt-4">
          © 2024 YourApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
