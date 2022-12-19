import './slider';
import { modals } from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeStateForm from './modules/changeStateForm';
import timer from './modules/timer';
import images from './modules/images';

document.addEventListener('DOMContentLoaded', () => {

  const stateForm = {};

  changeStateForm(stateForm);
  modals();
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  tabs('.decoration_slider', '.no_click', '.decoration_content>.row>div', 'after_click');
  tabs('.balcon_icons', '.balcon_icons_img', '.big_img>img', 'do_image_more', 'inline-block');
  forms(stateForm);
  timer('#timer', '2022-12-28T10:27:16');
  images();
});