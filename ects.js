class ECTS {
    constructor(score) {
        this.score = score;
    }

    ectsFromScore() {
        switch (true) {
            case (this.score >= 90 && this.score <= 100):
                return 'A';
            case (this.score >= 82 && this.score <= 89):
                return 'B';
            case (this.score >= 74 && this.score <= 81):
                return 'C';
            case (this.score >= 65 && this.score <= 73):
                return 'D';
            case (this.score >= 60 && this.score <= 64):
                return 'E';
            case (this.score >= 0 && this.score <= 59):
                return 'F';
            default:
                throw new Error('Invalid score');
        }
    }
}

module.exports = ECTS;