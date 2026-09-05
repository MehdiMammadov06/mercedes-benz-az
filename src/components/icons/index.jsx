// Saytda istifadə olunan bütün ikonlar. Hamısı `currentColor` ilə işləyir,
// yəni rəngi Tailwind-in `text-*` klassı ilə idarə olunur.

export function MercedesStar({ className = 'h-10 w-10', strokeWidth = 3 }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="46" />
      {/* Üç şüalı ulduz: yuxarı, sol-aşağı, sağ-aşağı */}
      <path d="M50 50 V4 M50 50 L10 73 M50 50 L90 73" strokeLinecap="butt" />
    </svg>
  );
}

export function CarIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11h.5a1.5 1.5 0 0 1 1.5 1.5V16a1 1 0 0 1-1 1h-1v.5a1.5 1.5 0 0 1-3 0V17H8v.5a1.5 1.5 0 0 1-3 0V17H4a1 1 0 0 1-1-1v-3.5A1.5 1.5 0 0 1 4.5 11H5zm2.1 0h9.8l-1.1-3.4a.5.5 0 0 0-.5-.35H8.7a.5.5 0 0 0-.5.35L7.1 11zM6.5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm11 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    </svg>
  );
}

// --- Kateqoriya (kuzov növü) ikonları ---
// Hər biri fərqli avtomobil siluetı. currentColor ilə işləyir.

export function SedanIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 14l1.5-1 2-3.5A2 2 0 0 1 8.3 8.5h6.4a2 2 0 0 1 1.6.8L19 13l2 1v2h-2" />
      <path d="M5 16H3v-2" />
      <path d="M8.5 16h7" />
      <circle cx="7" cy="16.5" r="1.6" />
      <circle cx="17" cy="16.5" r="1.6" />
    </svg>
  );
}

export function SuvIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 15v-2l1.5-1 1.5-3.2A2 2 0 0 1 7.8 7.6h7.2a2 2 0 0 1 1.5.7L20 12l1 1v2h-2" />
      <path d="M5 15H3" />
      <path d="M9 8v3.5M14 8v3.5M6 11.5h13" />
      <path d="M8.5 15h7" />
      <circle cx="7" cy="15.5" r="1.7" />
      <circle cx="17" cy="15.5" r="1.7" />
    </svg>
  );
}

export function CoupeIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 15l1-1 3-4c.6-.8 1.4-1.2 2.5-1.2h4c1.6 0 3 .8 4.2 2L21 14v1h-2" />
      <path d="M5 15H3v-1" />
      <path d="M8.5 15h7" />
      <circle cx="7" cy="15.5" r="1.6" />
      <circle cx="17" cy="15.5" r="1.6" />
    </svg>
  );
}

export function CabrioletIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 15l1-1 2.5-2.8" />
      <path d="M6.5 11.2C8 9.7 10 9 12 9c2.3 0 4.4.9 6 2.6L21 14v1h-2" />
      <path d="M5 15H3v-1" />
      <path d="M8.5 15h7" />
      <circle cx="7" cy="15.5" r="1.6" />
      <circle cx="17" cy="15.5" r="1.6" />
    </svg>
  );
}

export function ElectricIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 14l1.5-1 2-3.5A2 2 0 0 1 8.3 8.5h6.4a2 2 0 0 1 1.6.8L19 13l2 1v2h-2" />
      <path d="M5 16H3v-2M8.5 16h7" />
      <circle cx="7" cy="16.5" r="1.6" />
      <circle cx="17" cy="16.5" r="1.6" />
      <path d="M12 4.5l-1.6 2.4h2.2L11 9.5" strokeWidth="1.2" />
    </svg>
  );
}

export function MpvIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 15V9.5c0-.8.6-1.5 1.5-1.5h11c.8 0 1.6.4 2 1.1L21 13v2h-2" />
      <path d="M5 15H3" />
      <path d="M9 8v7M14 8v6" />
      <path d="M8.5 15h7" />
      <circle cx="7" cy="15.5" r="1.7" />
      <circle cx="17" cy="15.5" r="1.7" />
    </svg>
  );
}

export function HatchbackIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 15l1-1 2.2-3.4A2 2 0 0 1 7.9 9.6h5.5c1 0 1.9.4 2.6 1.1L20 15h1v0h-2" />
      <path d="M5 15H3v-1" />
      <path d="M8.5 15h7" />
      <circle cx="7" cy="15.5" r="1.6" />
      <circle cx="17" cy="15.5" r="1.6" />
    </svg>
  );
}

export function MenuIcon({ className = 'h-6 w-6' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function CloseIcon({ className = 'h-6 w-6' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ArrowRight({ className = 'h-4 w-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ChevronLeft({ className = 'h-5 w-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

export function ChevronRight({ className = 'h-5 w-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function FacebookIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
    </svg>
  );
}

export function InstagramIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ChevronUp({ className = 'h-5 w-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 15l6-6 6 6" />
    </svg>
  );
}

// --- Stock (mövcud avtomobillər) kartı üçün spec ikonları ---

export function CalendarIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" />
    </svg>
  );
}

export function PaletteIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3a9 9 0 0 0 0 18c1.1 0 1.8-.9 1.8-1.9 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.1 0-1 .8-1.8 1.8-1.8H16a5 5 0 0 0 5-5c0-3.9-4-7-9-7z" />
      <circle cx="7.5" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="11" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function GearboxIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="6" r="1.6" />
      <circle cx="18" cy="6" r="1.6" />
      <circle cx="6" cy="18" r="1.6" />
      <path d="M6 7.6v8.8M18 7.6V12a4 4 0 0 1-4 4H6" />
    </svg>
  );
}

export function FuelIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 21V6a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v15" />
      <path d="M3.5 21h12M5 12h9" />
      <path d="M14 8l2.8 2.8c.4.4.7 1 .7 1.6V17a1.6 1.6 0 0 0 3.2 0V9.5L18 6.8" />
    </svg>
  );
}

export function HeartIcon({ className = 'h-5 w-5', filled = false }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20.5l-1.3-1.15C6 15.1 3 12.4 3 9.1 3 6.6 5 4.7 7.4 4.7c1.4 0 2.7.65 3.6 1.7.9-1.05 2.2-1.7 3.6-1.7C17 4.7 19 6.6 19 9.1c0 3.3-3 6-7.7 10.25L12 20.5z" />
    </svg>
  );
}

export function LocationIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function GaugeIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 18a8 8 0 1 1 16 0" />
      <path d="M12 14l3.5-3.5" />
      <circle cx="12" cy="14" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SearchIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

export function ChevronDown({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function PhoneIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.5 5.5c0-.6.4-1 1-1h2.6c.5 0 .9.3 1 .8l.8 3c.1.4 0 .8-.3 1.1L8 10.8a12 12 0 0 0 5.2 5.2l1.4-1.6c.3-.3.7-.4 1.1-.3l3 .8c.5.1.8.5.8 1V18c0 .6-.4 1-1 1A14.5 14.5 0 0 1 4.5 5.5z" />
    </svg>
  );
}

export function GlobeIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.4 2.5 15.6 0 18M12 3c-2.5 2.4-2.5 15.6 0 18" />
    </svg>
  );
}
