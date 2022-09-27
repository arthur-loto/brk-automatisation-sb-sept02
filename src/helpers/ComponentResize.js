export const ro = new ResizeObserver(entries => {
    entries.forEach(entry => {
      const event = new CustomEvent('brk-resized', { detail: entry.contentRect });
      entry.target.dispatchEvent(event);
    });
  });
  