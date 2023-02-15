class AnswerSpaceComponent {
	constructor(answer, reRender) {
		this.reRender = reRender;
		this.answer = answer.toUpperCase();
		this.answerArray = this.answer
			.split('')
			.map((x) => ({ char: x, isGuessed: false }));

		// Temporary (Component Development)
		this.answerArray[0].isGuessed = true;
		this.answerArray[2].isGuessed = true;
	}

	guess(letter) {
		// console.log('Guessing', letter);
		this.answerArray.forEach((x) => {
			// console.log(x.char, letter);
			if (x.char === letter) {
				// console.log('Matched');
				x.isGuessed = true;
			}
		});
		this.reRender();
	}

	_answerArrayMarkup(answerArray) {
		return answerArray.map((x) => {
			return `<span class="letter">${x.isGuessed ? x.char : ''}</span>`;
		});
	}

	markup() {
		return `
			<div class="answer-space">
				${this._answerArrayMarkup(this.answerArray).join('')}
			</div>
		`;
	}
}

$.AnswerSpace = AnswerSpaceComponent;
