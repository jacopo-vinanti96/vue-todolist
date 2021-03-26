
const app = new Vue ({
  el: '#root',
  data: {
    inputText: null,
    inputDate: null,
    outputArray: [],
  },
  methods: {
    addProject() {
      if ( this.emptyControl(this.inputText) ) {
        this.outputArray.push({ outputDate: this.inputDate, outputProject: [this.inputText] });
        this.inputText = null;
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
  }
});
