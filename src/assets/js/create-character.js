// Main object to represents the user
let character = {
  pseudo: 'My Pseudo',
  avatar: '',
  class: '',
  level: 1,
  experience: 0,
  // Get an avatar name
  getAvatar: function(avatarName) {
    this.avatar = avatarName;
  },
  // Get a class name
  getClass: function(className) {
    this.class = className;
  },
  debugObject: function() {
    console.log(this.pseudo);
    console.log(this.avatar);
    console.log(this.class);
    console.log(this.level);
    console.log(this.experience);
  }
}


// Character Creation Page
let characterCreation = {
  getAvatar: function() {
    const AVATAR_CHOICE = document.getElementById('avatar-choice');
    const MAIN_AVATAR = document.getElementById('main-avatar');
    let avatarItem = document.getElementsByClassName('avatar-item');

    AVATAR_CHOICE.addEventListener('click', function(event) {
      let elementClicked = event.target;
      switch(elementClicked.id) {
        case 'avatar-ape':
          MAIN_AVATAR.setAttribute('src', 'assets/images/avatars/todo_ape.png');
          character.avatar = 'ape';
        break;
        case 'avatar-dragon':
          MAIN_AVATAR.setAttribute('src', 'assets/images/avatars/todo_dragon.png');
          character.avatar = 'dragon';
        break;
        case 'avatar-elf-f':
          MAIN_AVATAR.setAttribute('src', 'assets/images/avatars/todo_f_elf.png');
          character.avatar = 'elf-f';
        break;
        case 'avatar-human-f':
          MAIN_AVATAR.setAttribute('src', 'assets/images/avatars/todo_f_human.png');
          character.avatar = 'human-f';
        break;
        case 'avatar-orc-f':
          MAIN_AVATAR.setAttribute('src', 'assets/images/avatars/todo_f_orc.png');
          character.avatar = 'orc-f';
        break;
        case 'avatar-elf-m':
          MAIN_AVATAR.setAttribute('src', 'assets/images/avatars/todo_m_elf.png');
          character.avatar = 'elf-m';
        break;
        case 'avatar-human-m':
          MAIN_AVATAR.setAttribute('src', 'assets/images/avatars/todo_m_human.png');
          character.avatar = 'human-m';
        break;
        case 'avatar-orc-m':
          MAIN_AVATAR.setAttribute('src', 'assets/images/avatars/todo_m_orc.png');
          character.avatar = 'orc-m';
        break;
        case 'avatar-panda':
          MAIN_AVATAR.setAttribute('src', 'assets/images/avatars/todo_panda.png');
          character.avatar = 'panda';
        break;
        case 'avatar-unicorn':
          MAIN_AVATAR.setAttribute('src', 'assets/images/avatars/todo_unicorn.png');
          character.avatar = 'unicorn';
        break;
      }
      // Remove all the border colors
      for (let i = 0; i < avatarItem.length; i++) {
        avatarItem[i].style.borderColor = '#93928e';
      }
      // Set the border color to the selected avatar
      elementClicked.style.borderColor = '#e5af29';
      character.debugObject();
    });
  },
  getClass: function() {
    const CLASS_CHOICE = document.getElementById('class-choice');
    let classItem = document.getElementsByClassName('class-item');

    CLASS_CHOICE.addEventListener('click', function(event) {
      let elementClicked = event.target;

      switch(elementClicked.id) {
        case 'class-mage':
          character.class = 'mage';
        break;
        case 'class-rogue':
          character.class = 'rogue';
        break;
        case 'class-warrior':
          character.class = 'warrior';
        break;
      }

      // Remove all the border colors
      for (let i = 0; i < classItem.length; i++) {
        classItem[i].style.borderColor = '#93928e';
      }
      // Set the border color to the selected class
      elementClicked.style.borderColor = '#e5af29';
      character.debugObject();
    });
  },
  getPseudo: function() {
    const PSEUDO_USER_INPUT = document.getElementById('pseudo-user-input');
    const MAIN_PSEUDO = document.querySelector('h1');

    PSEUDO_USER_INPUT.addEventListener('input', function(event) {
      character.pseudo = this.value;
      MAIN_PSEUDO.textContent = this.value;
    });
    character.debugObject();
  }
};

characterCreation.getAvatar();
characterCreation.getClass();
characterCreation.getPseudo();
