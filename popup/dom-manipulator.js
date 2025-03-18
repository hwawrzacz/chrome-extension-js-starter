export class DomManipulator {
  submitButtonSelector = '#submit-button'

  getSubmitButton() {
    const element = document.querySelector(this.submitButtonSelector)
    if (!element) throw new Error('Submit button was not found');

    return element
    }
}
