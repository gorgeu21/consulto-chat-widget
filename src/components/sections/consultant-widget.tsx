"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, MessageCircle, Phone } from 'lucide-react';

export default function ConsultantWidget() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <style jsx global>{`
        @keyframes overlay-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes widget-slide-in {
          from { 
            opacity: 0; 
            transform: translate(100%, -50%); /* Start from right, keep vertical center */
          }
          to { 
            opacity: 1; 
            transform: translate(0, -50%); /* End at natural position, keep vertical center */
          }
        }
        .animate-overlay-fade-in {
          animation: overlay-fade-in 0.4s ease-out forwards;
        }
        .animate-widget-slide-in {
          animation: widget-slide-in 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
        }
        .animate-pulse-soft {
          animation: pulse-soft 2s infinite ease-in-out;
        }
        @keyframes pulse-soft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
      
      {/* Overlay Backdrop */}
      <div 
        className="fixed inset-0 z-40 bg-black/80 backdrop-blur-[4px] animate-overlay-fade-in"
        aria-hidden="true"
      />

      {/* Widget Container */}
      <div 
        className="fixed z-50 right-4 top-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-[400px] sm:right-6 sm:max-w-[420px] md:right-8 bg-[#1A2332] rounded-2xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.5)] overflow-hidden animate-widget-slide-in border border-[#2D3F52]/30"
        role="dialog"
        aria-labelledby="widget-title"
      >
        {/* Close Button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#2D3F52]/50 hover:bg-[#2D3F52] text-[#A8B5C8] hover:text-[#FFFFFF] transition-all duration-200"
          aria-label="Закрыть виджет"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-5 sm:p-6">
          {/* Header Section: Avatar & Title */}
          <div className="flex items-start gap-4 mb-6">
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-2 ring-[#2D3F52] bg-[#2D3F52]">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf1c9248-ff3e-4acd-9da1-612b3ed743d8-consulto-promo-bubble-lovable-app/assets/images/consultant-avatar-b1necHKX-1.jpg" 
                  alt="Персональный консультант" 
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-[#25D366] border-2 border-[#1A2332] animate-pulse-soft"></div>
            </div>
            
            <div className="flex-1 min-w-0 pt-1">
              <h2 id="widget-title" className="text-lg sm:text-l font-semibold text-[#FFFFFF] mb-1">
                Персональный консультант
              </h2>
              <p className="text-sm text-[#A8B5C8] leading-relaxed">
                Отвечу на вопросы по оплате, доставке, обслуживанию техники и помогу выбрать подходящий товар
              </p>
            </div>
          </div>

          {/* Messengers Section */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-[#A8B5C8] mb-3">
              Выберите удобный способ общения
            </h3>
            <div className="space-y-2">
              {/* Telegram Button */}
              <a 
                href="https://t.me/+79995504322" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-full flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-[#2D3F52]/30 hover:bg-[#2D3F52]/50 border border-[#2D3F52]/50 hover:border-[#0088CC]/30 transition-all duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0088CC] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-2.05-1.23-2.12-1.29-.02-.02-.34-.44.84-1.53 1.12-1.02 2.2-2.15 2.5-2.58.06-.09-.07-.27-.26-.2-.79.28-3.08 1.69-4.87 2.68-.31.17-.67.24-1.03.22-.38-.02-1.1-.22-1.63-.38-.66-.2-1.18-.4-1.13-.85.02-.23.36-.45.98-.68 3.86-1.68 6.43-2.78 7.71-3.31 3.66-1.5 4.42-1.76 4.91-1.77.11 0 .35.03.51.16.14.11.18.26.2.37.02.13.02.26 0 .4z"/>
                  </svg>
                </div>
                <span className="text-base sm:text-lg font-medium text-[#FFFFFF] group-hover:text-[#0088CC] transition-colors">
                  Telegram
                </span>
              </a>

              {/* WhatsApp Button */}
              <a 
                href="https://api.whatsapp.com/send/?phone=79995504322" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-full flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-[#2D3F52]/30 hover:bg-[#2D3F52]/50 border border-[#2D3F52]/50 hover:border-[#25D366]/30 transition-all duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.357-5.032c0-5.431 4.453-10.038 10.166-10.038 2.7 0 5.274 1.042 7.191 2.917 1.91 1.875 2.958 4.43 2.95 7.19a9.962 9.962 0 01-9.944 9.952c-.174.01-.347.009-.516-.002zm9.125-15.012c-2.457-2.39-5.727-3.705-9.141-3.705-7.073 0-12.829 5.753-12.829 12.824 0 2.219.567 4.382 1.642 6.257L0 23.518l4.331-1.129a12.784 12.784 0 006.126 1.57h.005c7.098 0 12.853-5.755 12.853-12.827 0-3.418-1.332-6.685-3.738-9.068z"/>
                  </svg>
                </div>
                <span className="text-base sm:text-lg font-medium text-[#FFFFFF] group-hover:text-[#25D366] transition-colors">
                  WhatsApp
                </span>
              </a>

              {/* Online Chat Button */}
              <button className="group w-full flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-[#2D3F52]/30 hover:bg-[#2D3F52]/50 border border-[#2D3F52]/50 hover:border-[#00A8E8]/30 transition-all duration-200">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00A8E8] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="text-base sm:text-lg font-medium text-[#FFFFFF] group-hover:text-[#00A8E8] transition-colors">
                  Онлайн-чат на сайте
                </span>
              </button>
            </div>
          </div>

          {/* Phones Section */}
          <div>
            <h3 className="text-sm font-medium text-[#A8B5C8] mb-3">
              Мы всегда рады помочь по телефону
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {/* Phone Button 1 */}
              <a 
                href="tel:88006004322" 
                className="group flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-[#1F2E3F] hover:bg-[#2A3B50] border border-[#2D3F52]/50 hover:border-[#2D3F52] text-center transition-all duration-200"
              >
                <Phone className="w-5 h-5 text-[#00A8E8] mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm sm:text-base font-semibold text-[#FFFFFF] mb-1">
                  8 800 600 43 22
                </span>
                <span className="text-xs text-[#A8B5C8]">
                  Оформить заказ
                </span>
              </a>

              {/* Phone Button 2 */}
              <a 
                href="tel:+79684994322" 
                className="group flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-[#1F2E3F] hover:bg-[#2A3B50] border border-[#2D3F52]/50 hover:border-[#2D3F52] text-center transition-all duration-200"
              >
                <Phone className="w-5 h-5 text-[#00A8E8] mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm sm:text-base font-semibold text-[#FFFFFF] mb-1">
                  +7 968 499 43 22
                </span>
                <span className="text-xs text-[#A8B5C8]">
                  Служба поддержки
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}