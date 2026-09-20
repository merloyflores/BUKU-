// ============================================================
// Helper para extraer el ID de embed de YouTube de forma segura.
// ------------------------------------------------------------
// El código anterior hacía videoUrl.split('v=')[1], lo que:
//  - rompía con enlaces youtu.be/ID (no tienen "v=")
//  - incluía basura si la URL traía más parámetros (&t=30s, &list=...)
//  - explotaba silenciosamente si videoUrl no era una URL de YouTube
//    (por ejemplo, una ruta local como "/archivo.VLC")
// Esta versión usa el parser nativo de URL y siempre devuelve
// null cuando no se puede extraer un ID de YouTube válido, para
// que la UI decida no renderizar el reproductor en ese caso.
// ============================================================

export function getYouTubeEmbedId(url: string | null | undefined): string | null {
  if (!url) return null;

  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes('youtu.be')) {
      const id = parsed.pathname.replace('/', '');
      return id || null;
    }

    if (parsed.hostname.includes('youtube.com')) {
      const id = parsed.searchParams.get('v');
      return id || null;
    }

    return null;
  } catch {
    // No es una URL válida (ej. una ruta local tipo "/video.mp4")
    return null;
  }
}

export function isYouTubeUrl(url: string | null | undefined): boolean {
  return getYouTubeEmbedId(url) !== null;
}