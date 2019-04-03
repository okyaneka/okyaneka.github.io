import {MDCRipple} from '@material/ripple/index';
import {MDCFloatingLabel} from '@material/floating-label';
import {MDCTextField} from '@material/textfield';

const ripple = new MDCRipple(document.querySelector('.foo-button'));
const floatingLabel = new MDCFloatingLabel(document.querySelector('.mdc-floating-label'));
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));