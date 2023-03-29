(function() {
    const card = document.querySelector('.js-card');
  const HappyCells = document.querySelectorAll('.happy-zone');
  const AngryCells = document.querySelectorAll('.angry-zone');

  const dragStart = function () {
      setTimeout(() => {
          this.classList.add('hide');
      }, 0);
      floppaMood.innerText = "Floppa thinking";
  };
  
  const dragEnd = function () {
      this.classList.remove('hide');
  };

  const dragOver = function (evt) {
      evt.preventDefault();
  };

  const dragEnter = function (evt) {
      evt.preventDefault();
      this.classList.add('hovered');
  };

  const dragLeave = function () {
      this.classList.remove('hovered');
  };

  const dragDropForHappy = function () {
      this.append(card);
      this.classList.remove('hovered');
      floppaMood.innerText = "Floppa happy";
      document.getElementById('floppaSelfie').style.backgroundImage="url(FloppaHappy.jpg)";
  };
  const dragDropForAngry = function () {
    this.append(card);
    this.classList.remove('hovered');
    floppaMood.innerText = "Floppa angry";
    document.getElementById('floppaSelfie').style.backgroundImage="url(FloppaAngry.jpg)";
};

  HappyCells.forEach(cell => {
      cell.addEventListener('dragover', dragOver);
      cell.addEventListener('dragenter', dragEnter);
      cell.addEventListener('dragleave', dragLeave);
      cell.addEventListener('drop', dragDropForHappy);
  });
  AngryCells.forEach(cell => {
    cell.addEventListener('dragover', dragOver);
    cell.addEventListener('dragenter', dragEnter);
    cell.addEventListener('dragleave', dragLeave);
    cell.addEventListener('drop', dragDropForAngry);
});


  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);
} ())