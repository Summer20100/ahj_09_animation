export default class Collapsible {
  constructor() {
    this.container = document.querySelector('.main_container');
  }

  init() {
    if (!this.container) return;
    const seeMoreHTML = `
    <div class="widget widget_collapsible">       
      <div class="widget_controls"> 
        <button class="widget_button">See more</button> 
      </div>
      <div class="widget_footer collapsed">         
        <div class="widget_footer_string">
        Подобный виджет есть в рамках Bootstrap, но как мы с вами "знаем": "jQuery не нужен", поэтому вам нужно реализовать такой же виджет на чистом JS.
        </div>
      </div> 
    </div>`;
    this.container.insertAdjacentHTML('beforeEnd', seeMoreHTML);
    const btnText = document.querySelector('.widget_button');
    this.container.querySelector('.widget_collapsible').addEventListener('click', (e) => {
      if (e.target !== btnText) return;
      btnText.textContent = btnText.textContent === 'Collapse' ? 'See more' : 'Collapse';
      const widgetFooter = e.currentTarget.querySelector('.widget_footer');
      widgetFooter.classList.toggle('collapsed');
      widgetFooter.classList.toggle('show');
    });
  }
}
