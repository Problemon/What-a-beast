export const DATA = {
  ANSWERS: [
    [1, 1, 2, 3, 2, 1, 2, 1],
    [1, 2, 2, 1, 2, 3, 3, 1],
    [1, 2, 2, 1, 3, 2, 1, 2],
  ],
  STEPS: [
    [
      {
        title: 'Где живет зайчик?',
        images: ['forest', 'house'],
      },
      {
        title: 'Чем покрыто тело зайчика?',
        images: ['bunny-fur', 'needles', 'scales'],
      },
      {
        title: 'Найдите части тела зайчика:',
        images: ['hadgehog-mouth', 'bunny-paws', 'fox-ears'],
      },
    ]
  ]
}

{/* <li class="level__step step step--hidden" data-class="step">
  <header class="step__header">
    <h2 class="step__title title title--step">Найдите части тела зайчика:</h2>
  </header>
  <fieldset class="step__list">
    <label class="step__item">
      <input class="step__radio visually-hidden" type="radio" value="1" name="1-4">
      <picture>
        <source srcset="img/items/hadgehog-ears.webp 1x, img/items/hadgehog-ears@2x.webp 2x">
        <img class="step__image step__image--rounded" src="img/items/hadgehog-ears.png"
          srcset="img/items/hadgehog-ears@2x.png 2x" width="200" height="200" alt="" draggable="false">
      </picture>
    </label>
    <label class="step__item">
      <input class="step__radio visually-hidden" type="radio" value="2" name="1-4">
      <picture>
        <source srcset="img/items/bear-mouth.webp 1x, img/items/bear-mouth@2x.webp 2x">
        <img class="step__image step__image--rounded" src="img/items/bear-mouth.png"
          srcset="img/items/bear-mouth@2x.png 2x" width="200" height="200" alt="" draggable="false">
      </picture>
    </label>
    <label class="step__item">
      <input class="step__radio visually-hidden" type="radio" value="3" name="1-4">
      <picture>
        <source srcset="img/items/bunny-ears.webp 1x, img/items/bunny-ears@2x.webp 2x">
        <img class="step__image step__image--rounded" src="img/items/bunny-ears.png"
          srcset="img/items/bunny-ears@2x.png 2x" width="200" height="200" alt="" draggable="false">
      </picture>
    </label>
  </fieldset>
</li>
<li class="level__step step step--hidden" data-class="step">
  <header class="step__header">
    <h2 class="step__title title title--step">Найдите части тела зайчика:</h2>
  </header>
  <fieldset class="step__list">
    <label class="step__item">
      <input class="step__radio visually-hidden" type="radio" value="1" name="1-5">
      <picture>
        <source srcset="img/items/bear-tail.webp 1x, img/items/bear-tail@2x.webp 2x">
        <img class="step__image step__image--rounded" src="img/items/bear-tail.png"
          srcset="img/items/bear-tail@2x.png 2x" width="200" height="200" alt="" draggable="false">
      </picture>
    </label>
    <label class="step__item">
      <input class="step__radio visually-hidden" type="radio" value="2" name="1-5">
      <picture>
        <source srcset="img/items/bunny-tail.webp 1x, img/items/bunny-tail@2x.webp 2x">
        <img class="step__image step__image--rounded" src="img/items/bunny-tail.png"
          srcset="img/items/bunny-tail@2x.png 2x" width="200" height="200" alt="" draggable="false">
      </picture>
    </label>
    <label class="step__item">
      <input class="step__radio visually-hidden" type="radio" value="3" name="1-5">
      <picture>
        <source srcset="img/items/fox-paws.webp 1x, img/items/fox-paws@2x.webp 2x">
        <img class="step__image step__image--rounded" src="img/items/fox-paws.png"
          srcset="img/items/fox-paws@2x.png 2x" width="200" height="200" alt="" draggable="false">
      </picture>
    </label>
  </fieldset>
</li>
<li class="level__step step step--hidden" data-class="step">
  <header class="step__header">
    <h2 class="step__title title title--step">Найдите части тела зайчика:</h2>
  </header>
  <fieldset class="step__list">
    <label class="step__item">
      <input class="step__radio visually-hidden" type="radio" value="1" name="1-6">
      <picture>
        <source srcset="img/items/bunny-mouth.webp 1x, img/items/bunny-mouth@2x.webp 2x">
        <img class="step__image step__image--rounded" src="img/items/bunny-mouth.png"
          srcset="img/items/bunny-mouth@2x.png 2x" width="200" height="200" alt="" draggable="false">
      </picture>
    </label>
    <label class="step__item">
      <input class="step__radio visually-hidden" type="radio" value="2" name="1-6">
      <picture>
        <source srcset="img/items/bear-ears.webp 1x, img/items/bear-ears@2x.webp 2x">
        <img class="step__image step__image--rounded" src="img/items/bear-ears.png"
          srcset="img/items/bear-ears@2x.png 2x" width="200" height="200" alt="" draggable="false">
      </picture>
    </label>
    <label class="step__item">
      <input class="step__radio visually-hidden" type="radio" value="3" name="1-6">
      <picture>
        <source srcset="img/items/hadgehog-tail.webp 1x, img/items/hadgehog-tail@2x.webp 2x">
        <img class="step__image step__image--rounded" src="img/items/hadgehog-tail.png"
          srcset="img/items/hadgehog-tail@2x.png 2x" width="200" height="200" alt="" draggable="false">
      </picture>
    </label>
  </fieldset>
</li>
<li class="level__step step step--hidden" data-class="step">
  <header class="step__header">
    <h2 class="step__title title title--step">Чем питается зайчик?</h2>
  </header>
  <fieldset class="step__list">
    <label class="step__item">
      <input class="step__radio visually-hidden" type="radio" value="1" name="1-7">
      <picture>
        <source srcset="img/items/fish.webp 1x, img/items/fish@2x.webp 2x">
        <img class="step__image step__image--rounded" src="img/items/fish.png" srcset="img/items/fish@2x.png 2x"
          width="200" height="200" alt="" draggable="false">
      </picture>
    </label>
    <label class="step__item">
      <input class="step__radio visually-hidden" type="radio" value="2" name="1-7">
      <picture>
        <source srcset="img/items/wood.webp 1x, img/items/wood@2x.webp 2x">
        <img class="step__image step__image--rounded" src="img/items/wood.png" srcset="img/items/wood@2x.png 2x"
          width="200" height="200" alt="" draggable="false">
      </picture>
    </label>
    <label class="step__item">
      <input class="step__radio visually-hidden" type="radio" value="3" name="1-7">
      <picture>
        <source srcset="img/items/honey.webp 1x, img/items/honey@2x.webp 2x">
        <img class="step__image step__image--rounded" src="img/items/honey.png"
          srcset="img/items/honey@2x.png 2x" width="200" height="200" alt="" draggable="false">
      </picture>
    </label>
  </fieldset>
</li>
<li class="level__step step step--hidden" data-class="step">
  <header class="step__header">
    <h2 class="step__title title title--step">Чем питается зайчик?</h2>
  </header>
  <fieldset class="step__list">
    <label class="step__item">
      <input class="step__radio visually-hidden" type="radio" value="1" name="1-8">
      <picture>
        <source srcset="img/items/grass.webp 1x, img/items/grass@2x.webp 2x">
        <img class="step__image step__image--rounded" src="img/items/grass.png"
          srcset="img/items/grass@2x.png 2x" width="200" height="200" alt="" draggable="false">
      </picture>
    </label>
    <label class="step__item">
      <input class="step__radio visually-hidden" type="radio" value="2" name="1-8">
      <picture>
        <source srcset="img/items/worm.webp 1x, img/items/worm@2x.webp 2x">
        <img class="step__image step__image--rounded" src="img/items/worm.png" srcset="img/items/worm@2x.png 2x"
          width="200" height="200" alt="" draggable="false">
      </picture>
    </label>
    <label class="step__item">
      <input class="step__radio visually-hidden" type="radio" value="3" name="1-7">
      <picture>
        <source srcset="img/items/meat.webp 1x, img/items/meat@2x.webp 2x">
        <img class="step__image step__image--rounded" src="img/items/meat.png" srcset="img/items/meat@2x.png 2x"
          width="200" height="200" alt="" draggable="false">
      </picture>
    </label>
  </fieldset>
</li> */}
