import Collapse from './widgets/collapse';
import Chat from './widgets/chat';
import '../css/style.css';

const collapseWidget = new Collapse();
const chatWidget = new Chat();

document.addEventListener('DOMContentLoaded', () => {
  collapseWidget.init();
  chatWidget.init();
});
