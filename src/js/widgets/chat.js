export default class WidgetChat {
  constructor() {
    this.container = document.querySelector('.main_container');
  }

  init() {
    if (!this.container) return;
    const chatHtml = `
    <div class="widget_chat_container">
      <div class="widget_round_button">
      </div>
      <div class="widget widget_chat hide">
        <div class="widget_chat_remove">
          &times;
        </div> 
        <h2>Напишите нам</h2>
        <form class="widget_chat_form">  
          <textarea class="widget_chat_input"></textarea>           
          <div class="widget_controls widget_chat_controls"> 
            <button class="widget_button widget_chat_button">Отправить</button> 
          </div>
        </form>
      </div>
    </div>`;

    this.container.insertAdjacentHTML('beforeEnd', chatHtml);

    this.chatWidgetContainer = this.container.querySelector('.widget_chat_container');
    this.chatWidgetButton = this.chatWidgetContainer.querySelector('.widget_round_button');
    this.chatWidgetWindow = this.chatWidgetContainer.querySelector('.widget_chat');
    this.chatWidgetWindowCloseBtn = this.chatWidgetWindow.querySelector('.widget_chat_remove');

    this.chatWidgetButton.addEventListener('click', (ev) => {
      ev.target.classList.add('hide');
      this.chatWidgetWindow.classList.remove('hide');
    });

    this.chatWidgetWindow.addEventListener('submit', (e) => {
      e.preventDefault();
      this.chatWidgetWindow.classList.add('hide');
      this.chatWidgetButton.classList.remove('hide');
    });

    this.chatWidgetWindowCloseBtn.addEventListener('click', () => {
      this.chatWidgetWindow.classList.add('hide');
      this.chatWidgetButton.classList.remove('hide');
    });
  }
}
