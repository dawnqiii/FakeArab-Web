const MessengerButton = () => {
  return (
    <a
      href="https://www.messenger.com/t/108567818620417"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Chat with us on Messenger"
    >
      <svg
        className="w-7 h-7 text-primary"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.908 1.438 5.503 3.686 7.2V22l3.404-1.869c.908.252 1.871.388 2.91.388 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.088 12.456l-2.55-2.722-4.98 2.722 5.476-5.813 2.615 2.722 4.915-2.722-5.476 5.813z"/>
      </svg>
    </a>
  );
};

export default MessengerButton;
