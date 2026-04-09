import { toPng } from 'html-to-image';

async function waitForImages(node: HTMLElement): Promise<void> {
  const images = Array.from(node.querySelectorAll('img'));
  if (images.length === 0) {
    return;
  }

  await Promise.all(
    images.map(
      (img) =>
        new Promise<void>((resolve) => {
          if (img.complete) {
            resolve();
            return;
          }

          img.addEventListener('load', () => resolve(), { once: true });
          img.addEventListener('error', () => resolve(), { once: true });
        }),
    ),
  );
}

export async function exportNodeAsPng(node: HTMLElement, fileName = '自介图.png'): Promise<void> {
  if ('fonts' in document) {
    // 等待字体就绪，减少导出时文字抖动或回退字体
    await document.fonts.ready;
  }

  await waitForImages(node);

  const dataUrl = await toPng(node, {
    pixelRatio: Math.min(3, Math.max(2, window.devicePixelRatio || 2)),
    cacheBust: true,
    backgroundColor: '#ffffff',
  });

  const link = document.createElement('a');
  link.download = fileName;
  link.href = dataUrl;
  link.click();
}
