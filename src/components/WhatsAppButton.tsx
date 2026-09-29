import { whatsappLink } from "../data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hello SHESHISANE! I'd like to find out more about your services.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      <span className="hidden md:inline-block whitespace-nowrap rounded-full bg-navy-900 px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-1">
        Chat with us
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl shadow-black/20 transition-transform duration-300 hover:scale-110">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-60" />
        <svg viewBox="0 0 32 32" className="relative h-7 w-7 fill-white">
          <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.393.7 4.62 1.912 6.49L4 29l7.7-1.87A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.8a9.76 9.76 0 0 1-4.98-1.365l-.357-.212-4.573 1.11 1.222-4.455-.234-.365A9.75 9.75 0 1 1 25.75 15a9.76 9.76 0 0 1-9.746 9.8Zm5.36-7.32c-.294-.147-1.74-.858-2.01-.956-.27-.098-.467-.147-.663.147-.196.294-.76.956-.932 1.152-.171.196-.343.22-.637.073-.294-.147-1.242-.458-2.366-1.462-.874-.78-1.464-1.744-1.636-2.038-.171-.294-.018-.453.129-.6.132-.132.294-.343.44-.514.148-.172.196-.294.294-.49.098-.196.049-.367-.024-.514-.073-.147-.663-1.6-.909-2.19-.24-.575-.484-.497-.663-.506l-.564-.01c-.196 0-.514.073-.784.367-.27.294-1.03 1.006-1.03 2.453 0 1.446 1.055 2.844 1.202 3.04.147.196 2.077 3.17 5.032 4.445.703.303 1.252.484 1.68.62.706.224 1.348.192 1.856.117.566-.084 1.74-.712 1.985-1.4.245-.688.245-1.278.171-1.4-.073-.122-.269-.196-.563-.343Z" />
        </svg>
      </span>
    </a>
  );
}
