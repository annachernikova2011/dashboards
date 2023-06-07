class Card {
    constructor(card, options) {
      this.card = document.getElementById(card);
      if (!this.card) return;
      this.isCardWrapper = options.isWrapper;
      this.wrapperTheme = options.wrapperTheme;
      this.cardTitleStyle = options.cardTitleStyle;
      this.cardTheme = options.cardTheme;
      this.badgeIsHidden = options.badge.isHidden;
      this.badgeStyle = options.badge.style;
      this.badgeIsNum = options.badge.isNum;
    }

    #setWrapperOptions() {
      const wrapper = this.card.parentElement.closest('.cards-row');
      if (!wrapper) return; 
      this.isCardWrapper ? '' : wrapper.classList.add('cards-row_transparent');
      this.wrapperTheme === 'dark' ? wrapper.classList.add('cards-row_dark'): wrapper.classList.remove('cards-row_dark')
    }

    #setCardOptions() {
      const cardTitle = this.card.querySelector('.card__title');
      if (!cardTitle) return;
      this.cardTheme === 'dark' ? this.card.classList.add('card_dark'): this.card.classList.remove('card_dark');
      this.cardTheme === 'transparent' ? this.card.classList.add('card_transparent'): this.card.classList.remove('card_transparent');
      
      switch (this.cardTitleStyle) {
        case 'medium':
          cardTitle.classList.add('card__title_medium');
          break;
        case 'big':
          cardTitle.classList.add('card__title_big');
          break;
        default:
          cardTitle.classList.add('normal');
      }
    }

    #setBadgeOptions() {
      const badge = this.card.querySelector('.badge');
      if (!badge) return;
      this.badgeIsHidden ? badge.classList.add('badge_hidden') : badge.classList.remove('badge_hidden');
      this.badgeStyle === 'up' ? badge.classList.add('badge_up') : badge.classList.add('badge_down');
      this.badgeIsNum ? badge.classList.add('badge_num') : badge.classList.remove('badge_num');
    }

    init() {
      this.#setWrapperOptions();
      this.#setCardOptions();
      this.#setBadgeOptions();
    }
  }
