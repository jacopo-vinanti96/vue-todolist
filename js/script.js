
const app = new Vue ({
  el: '#root',
  data: {
    inputText: null,
    inputDate: null,
    outputArray: [],
  },
  methods: {
    addProject() {
      if ( this.emptyControl(this.inputText) && this.inputDate != null ) {
        let i = 0;
        while ( i < this.outputArray.length && this.inputText != null && this.outputArray.length > 0 ) {
          if ( this.outputArray[i].outputDate.includes(this.inputDate) ) {
            this.projectPush(i);
          } else {
            this.projectDatePush();
          }
          i++;
        }
        if ( this.outputArray.length == 0 ) {
          this.projectDatePush();
        }
      } else {
        if ( this.inputDate == null ) {
          alert('Insert a date');
        }
      }
    },
    removeProject( arrayIndex, projectIndex ) {
      this.outputArray[arrayIndex].outputProject.splice( projectIndex, 1 );
    },
    emptyControl (word) {
      // Controllo se l' input è vuoto
      if (word.length === 0 || !word.trim()) {
        alert("Please enter a word");
        return false;
      } else {
        return true;
      }
    },
    projectPush(index) {
      this.outputArray[index].outputProject.push(this.inputText);
      this.inputText = null;
      this.inputDate = null;
    },
    projectDatePush() {
      this.outputArray.push({ outputDate: this.inputDate, outputProject: [this.inputText] });
      this.inputText = null;
      this.inputDate = null;
    },
  }
});
