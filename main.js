import { initProjectDetail } from './js/projectDetail.js';
import { initNavigation } from './js/navigation.js';
import { initScrollAnimations } from './js/animations.js';
import { init3DModel } from './js/model3D.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollAnimations();
  initProjectDetail();
  init3DModel();
});
