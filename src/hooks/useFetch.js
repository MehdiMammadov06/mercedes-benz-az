import { useEffect, useState } from 'react';

/**
 * Verilən URL-dən JSON çəkən ümumi hook.
 *
 * İstifadəsi:
 *   const { data, isLoading, error } = useFetch('/data/models.json');
 *   const { data } = useFetch('/data/models.json', { delay: 600 });
 *
 * `delay` — süni gecikmə (ms). Real serverin cavab müddətini imitasiya edir
 * ki, skeleton loading göstərmək üçün vaxt olsun. Lokal fayl dərhal
 * yüklənir, gecikmə olmasa skeleton görünmür.
 */
export function useFetch(url, { delay = 0 } = {}) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // AbortController sorğunu həqiqətən dayandırır. Komponent yox olanda
    // (istifadəçi başqa səhifəyə keçəndə) cavab gəlsə də nəzərə alınmır —
    // əks halda mövcud olmayan komponentin state-ini dəyişməyə çalışardıq.
    const controller = new AbortController();

    async function load() {
      setIsLoading(true);
      setError(null);

      try {
        if (delay > 0) {
          await new Promise((resolve) => setTimeout(resolve, delay));
        }

        const response = await fetch(url, { signal: controller.signal });

        // Diqqət: fetch 404 və 500 kimi cavablarda xəta ATMIR.
        // Ona görə status kodunu özümüz yoxlamalıyıq.
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        setData(await response.json());
      } catch (err) {
        // Sorğu bizim tərəfimizdən dayandırılıbsa, bu xəta deyil
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    load();

    // Təmizlik funksiyası: komponent yox olanda və ya `url` dəyişəndə işləyir
    return () => controller.abort();
  }, [url, delay]);

  return { data, isLoading, error };
}
