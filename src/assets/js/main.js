// Add quest page
let quests = {
  questContent: '',
  questCategory: '',
  completed: false,
  xp: 50,
  debugQuest: function() {
    console.log(this.questContent);
    console.log(this.questCategory);
  }
};

// Manage quests
let questManagement = {
  addQuest: function() {
    const CONFIRM_ADD_QUEST = document.getElementById('confirm-add-quest');
    const QUEST_USER_INPUT = document.getElementById('quest-user-input');
    const ADD_QUEST_CATEGORY = document.getElementById('add-quest-category');

    QUEST_USER_INPUT.addEventListener('input', function() {
      quests.questContent = this.value;
      quests.debugQuest();
    });

    ADD_QUEST_CATEGORY.addEventListener('click', function() {
      quests.questCategory = 'category 1';
      quests.debugQuest();
    });

    CONFIRM_ADD_QUEST.addEventListener('click', function(event) {
      // debugger;
      const CONTENT_ADD_QUEST_PAGE = document.getElementById('content-add-quest-page');
      const FIRST_DEFAULT_QUEST = document.getElementById('first-default-quest');
      let questElement = document.createElement('div');
      let questElementContent = document.createElement('div');
      let questElementCategory = document.createElement('div');
      let questElementXP = document.createElement('div');
      let questElementAdd = document.createElement('div');
      let questElementAddIcon = document.createElement('i');
      questElement.className = 'add-quest-content-default-group';
      questElementContent.className = 'content-default-quest-disable';
      questElementContent.textContent = quests.questContent;
      questElementCategory.className = 'quest-category-item';
      questElementXP.className = 'content-quest-xp-disable';
      questElementXP.textContent = '50xp';
      questElementAdd.className = 'confirm-add-quest-disable';
      questElementAddIcon.className= 'fas fa-check';
      questElementAdd.appendChild(questElementAddIcon);

      CONTENT_ADD_QUEST_PAGE.insertBefore(questElement, FIRST_DEFAULT_QUEST);
      questElement.appendChild(questElementContent);
      questElement.appendChild(questElementCategory);
      questElement.appendChild(questElementXP);
      questElement.appendChild(questElementAdd);

      quests.debugQuest();
      event.preventDefault();
    });
  }
};

questManagement.addQuest();
