class AppComponent {
	constructor(root, name) {
		this.root = root;
		this.name = name;

		this.AnswerSpace = new $.AnswerSpace('Pretty', this.render.bind(this));
	}

	markup() {
		// Temporary code for development
		// this.AnswerSpace = AnswerSpace;
		// End of temporary code

		return `
      <h1> Welcome to the game ${this.name}! </h1>
      <div class="answer-space">
        ${this.AnswerSpace.markup()}
      </div>
    `;
	}

	render(ref = this) {
		ref.root.innerHTML = ref.markup();
	}
}

$.App = AppComponent;
