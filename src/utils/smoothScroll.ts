export const smoothScroll = (targetId: string): void => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetRect = targetElement.getBoundingClientRect();
      const offsetTop = targetRect.top + window.pageYOffset;
      const viewportHeight = window.innerHeight;
      const elementHeight = targetElement.offsetHeight;
      const scrollPosition = offsetTop - (viewportHeight / 2) + (elementHeight / 2);
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  };