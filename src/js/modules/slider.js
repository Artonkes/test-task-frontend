import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
export default function initSlider() {
  const root = document.querySelector('.slide');
  if (!root) return;
  return new Swiper(root, {
    modules: [Pagination],
    slidesPerView: 'auto',
    spaceBetween: -310,
    grabCursor: true,
    pagination: {
      el: root.querySelector('.swiper-pagination'),
      clickable: true,
      dynamicBullets: true,
    },
  });
}