import PhotoSwipeLightbox from '/js/photoswipe-lightbox.js';
import PhotoSwipe from '/js/photoswipe.js';
const lightbox = new PhotoSwipeLightbox({
        gallery: '#gallery',
        children: 'a',
        spacing: 0.5,
        pswpModule: PhotoSwipe
  });

lightbox.init();
