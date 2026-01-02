// Auto-generated file

interface __typeSetters {
}

interface EventTargetSetters extends __typeSetters {
}

interface NodeSetters extends EventTargetSetters {
  nodeValue: string;
  textContent: string;
}

interface ARIAMixinSetters {
  ariaActiveDescendantElement: Element;
  ariaAtomic: string;
  ariaAutoComplete: string;
  ariaBrailleLabel: string;
  ariaBrailleRoleDescription: string;
  ariaBusy: string;
  ariaChecked: string;
  ariaColCount: string;
  ariaColIndex: string;
  ariaColIndexText: string;
  ariaColSpan: string;
  ariaControlsElements: readonly Element[];
  ariaCurrent: string;
  ariaDescribedByElements: readonly Element[];
  ariaDescription: string;
  ariaDetailsElements: readonly Element[];
  ariaDisabled: string;
  ariaErrorMessageElements: readonly Element[];
  ariaExpanded: string;
  ariaFlowToElements: readonly Element[];
  ariaHasPopup: string;
  ariaHidden: string;
  ariaInvalid: string;
  ariaKeyShortcuts: string;
  ariaLabel: string;
  ariaLabelledByElements: readonly Element[];
  ariaLevel: string;
  ariaLive: string;
  ariaModal: string;
  ariaMultiLine: string;
  ariaMultiSelectable: string;
  ariaOrientation: string;
  ariaOwnsElements: readonly Element[];
  ariaPlaceholder: string;
  ariaPosInSet: string;
  ariaPressed: string;
  ariaReadOnly: string;
  ariaRelevant: string;
  ariaRequired: string;
  ariaRoleDescription: string;
  ariaRowCount: string;
  ariaRowIndex: string;
  ariaRowIndexText: string;
  ariaRowSpan: string;
  ariaSelected: string;
  ariaSetSize: string;
  ariaSort: string;
  ariaValueMax: string;
  ariaValueMin: string;
  ariaValueNow: string;
  ariaValueText: string;
  role: string;
}

interface AnimatableSetters {
}

interface ChildNodeSetters extends NodeSetters {
}

interface NonDocumentTypeChildNodeSetters {
}

interface ParentNodeSetters extends NodeSetters {
}

interface SlottableSetters {
}

interface ElementSetters extends NodeSetters, ARIAMixinSetters, AnimatableSetters, ChildNodeSetters, NonDocumentTypeChildNodeSetters, ParentNodeSetters, SlottableSetters {
  classList: string;
  className: string;
  id: string;
  innerHTML: string;
  outerHTML: string;
  part: string;
  scrollLeft: number;
  scrollTop: number;
  slot: string;
}

interface ElementCSSInlineStyleSetters {
  style: string;
}

interface ElementContentEditableSetters {
  contentEditable: string;
  enterKeyHint: string;
  inputMode: string;
}

interface GlobalEventHandlersSetters {
}

interface HTMLOrSVGElementSetters {
  autofocus: boolean;
  nonce: string;
  tabIndex: number;
}

interface HTMLElementSetters extends ElementSetters, ElementCSSInlineStyleSetters, ElementContentEditableSetters, GlobalEventHandlersSetters, HTMLOrSVGElementSetters {
  accessKey: string;
  autocapitalize: string;
  autocorrect: boolean;
  dir: string;
  draggable: boolean;
  hidden: boolean;
  inert: boolean;
  innerText: string;
  lang: string;
  outerText: string;
  popover: string;
  spellcheck: boolean;
  title: string;
  translate: boolean;
  writingSuggestions: string;
}

interface HTMLHyperlinkElementUtilsSetters {
  hash: string;
  host: string;
  hostname: string;
  href: string;
  password: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
  username: string;
}

interface HTMLAnchorElementSetters extends HTMLElementSetters, HTMLHyperlinkElementUtilsSetters {
  charset: string;
  coords: string;
  download: string;
  hreflang: string;
  name: string;
  ping: string;
  referrerPolicy: string;
  rel: string;
  relList: string;
  rev: string;
  shape: string;
  target: string;
  text: string;
  type: string;
}

interface HTMLAreaElementSetters extends HTMLElementSetters, HTMLHyperlinkElementUtilsSetters {
  alt: string;
  coords: string;
  download: string;
  noHref: boolean;
  ping: string;
  referrerPolicy: string;
  rel: string;
  relList: string;
  shape: string;
  target: string;
}

interface HTMLMediaElementSetters extends HTMLElementSetters {
  autoplay: boolean;
  controls: boolean;
  crossOrigin: string;
  currentTime: number;
  defaultMuted: boolean;
  defaultPlaybackRate: number;
  disableRemotePlayback: boolean;
  loop: boolean;
  muted: boolean;
  playbackRate: number;
  preload: "" | "none" | "metadata" | "auto";
  preservesPitch: boolean;
  src: string;
  srcObject: MediaProvider;
  volume: number;
}

interface HTMLAudioElementSetters extends HTMLMediaElementSetters {
}

interface HTMLBaseElementSetters extends HTMLElementSetters {
  href: string;
  target: string;
}

interface HTMLQuoteElementSetters extends HTMLElementSetters {
  cite: string;
}

interface WindowEventHandlersSetters {
}

interface HTMLBodyElementSetters extends HTMLElementSetters, WindowEventHandlersSetters {
  aLink: string;
  background: string;
  bgColor: string;
  link: string;
  text: string;
  vLink: string;
}

interface HTMLBRElementSetters extends HTMLElementSetters {
  clear: string;
}

interface PopoverInvokerElementSetters {
  popoverTargetAction: string;
  popoverTargetElement: Element;
}

interface HTMLButtonElementSetters extends HTMLElementSetters, PopoverInvokerElementSetters {
  disabled: boolean;
  formAction: string;
  formEnctype: string;
  formMethod: string;
  formNoValidate: boolean;
  formTarget: string;
  name: string;
  type: "submit" | "reset" | "button";
  value: string;
}

interface HTMLCanvasElementSetters extends HTMLElementSetters {
  height: number;
  width: number;
}

interface HTMLTableCaptionElementSetters extends HTMLElementSetters {
  align: string;
}

interface HTMLTableColElementSetters extends HTMLElementSetters {
  align: string;
  ch: string;
  chOff: string;
  span: number;
  vAlign: string;
  width: string;
}

interface HTMLDataElementSetters extends HTMLElementSetters {
  value: string;
}

interface HTMLDataListElementSetters extends HTMLElementSetters {
}

interface HTMLModElementSetters extends HTMLElementSetters {
  cite: string;
  dateTime: string;
}

interface HTMLDetailsElementSetters extends HTMLElementSetters {
  name: string;
  open: boolean;
}

interface HTMLDialogElementSetters extends HTMLElementSetters {
  open: boolean;
  returnValue: string;
}

interface HTMLDivElementSetters extends HTMLElementSetters {
  align: string;
}

interface HTMLDListElementSetters extends HTMLElementSetters {
  compact: boolean;
}

interface HTMLEmbedElementSetters extends HTMLElementSetters {
  align: string;
  height: string;
  name: string;
  src: string;
  type: string;
  width: string;
}

interface HTMLFieldSetElementSetters extends HTMLElementSetters {
  disabled: boolean;
  name: string;
}

interface HTMLFormElementSetters extends HTMLElementSetters {
  acceptCharset: string;
  action: string;
  autocomplete: AutoFillBase;
  encoding: string;
  enctype: string;
  method: string;
  name: string;
  noValidate: boolean;
  rel: string;
  relList: string;
  target: string;
}

interface HTMLHeadingElementSetters extends HTMLElementSetters {
  align: string;
}

interface HTMLHeadElementSetters extends HTMLElementSetters {
}

interface HTMLHRElementSetters extends HTMLElementSetters {
  align: string;
  color: string;
  noShade: boolean;
  size: string;
  width: string;
}

interface HTMLHtmlElementSetters extends HTMLElementSetters {
  version: string;
}

interface HTMLIFrameElementSetters extends HTMLElementSetters {
  align: string;
  allow: string;
  allowFullscreen: boolean;
  frameBorder: string;
  height: string;
  loading: "eager" | "lazy";
  longDesc: string;
  marginHeight: string;
  marginWidth: string;
  name: string;
  referrerPolicy: ReferrerPolicy;
  sandbox: string;
  scrolling: string;
  src: string;
  srcdoc: string;
  width: string;
}

interface HTMLImageElementSetters extends HTMLElementSetters {
  align: string;
  alt: string;
  border: string;
  crossOrigin: string;
  decoding: "auto" | "async" | "sync";
  fetchPriority: "auto" | "high" | "low";
  height: number;
  hspace: number;
  isMap: boolean;
  loading: "eager" | "lazy";
  longDesc: string;
  lowsrc: string;
  name: string;
  referrerPolicy: string;
  sizes: string;
  src: string;
  srcset: string;
  useMap: string;
  vspace: number;
  width: number;
}

interface HTMLInputElementSetters extends HTMLElementSetters, PopoverInvokerElementSetters {
  accept: string;
  align: string;
  alt: string;
  autocomplete: AutoFill;
  capture: string;
  checked: boolean;
  defaultChecked: boolean;
  defaultValue: string;
  dirName: string;
  disabled: boolean;
  files: FileList;
  formAction: string;
  formEnctype: string;
  formMethod: string;
  formNoValidate: boolean;
  formTarget: string;
  height: number;
  indeterminate: boolean;
  max: string;
  maxLength: number;
  min: string;
  minLength: number;
  multiple: boolean;
  name: string;
  pattern: string;
  placeholder: string;
  readOnly: boolean;
  required: boolean;
  selectionDirection: "none" | "forward" | "backward";
  selectionEnd: number;
  selectionStart: number;
  size: number;
  src: string;
  step: string;
  type: string;
  useMap: string;
  value: string;
  valueAsDate: Date;
  valueAsNumber: number;
  webkitdirectory: boolean;
  width: number;
}

interface HTMLLabelElementSetters extends HTMLElementSetters {
  htmlFor: string;
}

interface HTMLLegendElementSetters extends HTMLElementSetters {
  align: string;
}

interface HTMLLIElementSetters extends HTMLElementSetters {
  type: string;
  value: number;
}

interface LinkStyleSetters {
}

interface HTMLLinkElementSetters extends HTMLElementSetters, LinkStyleSetters {
  as: string;
  blocking: string;
  charset: string;
  crossOrigin: string;
  disabled: boolean;
  fetchPriority: "auto" | "high" | "low";
  href: string;
  hreflang: string;
  imageSizes: string;
  imageSrcset: string;
  integrity: string;
  media: string;
  referrerPolicy: string;
  rel: string;
  relList: string;
  rev: string;
  sizes: string;
  target: string;
  type: string;
}

interface HTMLMapElementSetters extends HTMLElementSetters {
  name: string;
}

interface HTMLMenuElementSetters extends HTMLElementSetters {
  compact: boolean;
}

interface HTMLMetaElementSetters extends HTMLElementSetters {
  content: string;
  httpEquiv: string;
  media: string;
  name: string;
  scheme: string;
}

interface HTMLMeterElementSetters extends HTMLElementSetters {
  high: number;
  low: number;
  max: number;
  min: number;
  optimum: number;
  value: number;
}

interface HTMLObjectElementSetters extends HTMLElementSetters {
  align: string;
  archive: string;
  border: string;
  code: string;
  codeBase: string;
  codeType: string;
  data: string;
  declare: boolean;
  height: string;
  hspace: number;
  name: string;
  standby: string;
  type: string;
  useMap: string;
  vspace: number;
  width: string;
}

interface HTMLOListElementSetters extends HTMLElementSetters {
  compact: boolean;
  reversed: boolean;
  start: number;
  type: string;
}

interface HTMLOptGroupElementSetters extends HTMLElementSetters {
  disabled: boolean;
  label: string;
}

interface HTMLOptionElementSetters extends HTMLElementSetters {
  defaultSelected: boolean;
  disabled: boolean;
  label: string;
  selected: boolean;
  text: string;
  value: string;
}

interface HTMLOutputElementSetters extends HTMLElementSetters {
  defaultValue: string;
  htmlFor: string;
  name: string;
  value: string;
}

interface HTMLParagraphElementSetters extends HTMLElementSetters {
  align: string;
}

interface HTMLPictureElementSetters extends HTMLElementSetters {
}

interface HTMLPreElementSetters extends HTMLElementSetters {
  width: number;
}

interface HTMLProgressElementSetters extends HTMLElementSetters {
  max: number;
  value: number;
}

interface HTMLScriptElementSetters extends HTMLElementSetters {
  async: boolean;
  blocking: string;
  charset: string;
  crossOrigin: string;
  defer: boolean;
  event: string;
  fetchPriority: "auto" | "high" | "low";
  htmlFor: string;
  integrity: string;
  noModule: boolean;
  referrerPolicy: string;
  src: string;
  text: string;
  type: string;
}

interface HTMLSelectElementSetters extends HTMLElementSetters {
  autocomplete: AutoFill;
  disabled: boolean;
  length: number;
  multiple: boolean;
  name: string;
  required: boolean;
  selectedIndex: number;
  size: number;
  value: string;
}

interface HTMLSlotElementSetters extends HTMLElementSetters {
  name: string;
}

interface HTMLSourceElementSetters extends HTMLElementSetters {
  height: number;
  media: string;
  sizes: string;
  src: string;
  srcset: string;
  type: string;
  width: number;
}

interface HTMLSpanElementSetters extends HTMLElementSetters {
}

interface HTMLStyleElementSetters extends HTMLElementSetters, LinkStyleSetters {
  blocking: string;
  disabled: boolean;
  media: string;
  type: string;
}

interface HTMLTableElementSetters extends HTMLElementSetters {
  align: string;
  bgColor: string;
  border: string;
  caption: HTMLTableCaptionElement;
  cellPadding: string;
  cellSpacing: string;
  frame: string;
  rules: string;
  summary: string;
  tFoot: HTMLTableSectionElement;
  tHead: HTMLTableSectionElement;
  width: string;
}

interface HTMLTableSectionElementSetters extends HTMLElementSetters {
  align: string;
  ch: string;
  chOff: string;
  vAlign: string;
}

interface HTMLTableCellElementSetters extends HTMLElementSetters {
  abbr: string;
  align: string;
  axis: string;
  bgColor: string;
  ch: string;
  chOff: string;
  colSpan: number;
  headers: string;
  height: string;
  noWrap: boolean;
  rowSpan: number;
  scope: string;
  vAlign: string;
  width: string;
}

interface HTMLTemplateElementSetters extends HTMLElementSetters {
  shadowRootClonable: boolean;
  shadowRootDelegatesFocus: boolean;
  shadowRootMode: string;
  shadowRootSerializable: boolean;
}

interface HTMLTextAreaElementSetters extends HTMLElementSetters {
  autocomplete: AutoFill;
  cols: number;
  defaultValue: string;
  dirName: string;
  disabled: boolean;
  maxLength: number;
  minLength: number;
  name: string;
  placeholder: string;
  readOnly: boolean;
  required: boolean;
  rows: number;
  selectionDirection: "none" | "forward" | "backward";
  selectionEnd: number;
  selectionStart: number;
  value: string;
  wrap: string;
}

interface HTMLTimeElementSetters extends HTMLElementSetters {
  dateTime: string;
}

interface HTMLTitleElementSetters extends HTMLElementSetters {
  text: string;
}

interface HTMLTableRowElementSetters extends HTMLElementSetters {
  align: string;
  bgColor: string;
  ch: string;
  chOff: string;
  vAlign: string;
}

interface HTMLTrackElementSetters extends HTMLElementSetters {
  default: boolean;
  kind: string;
  label: string;
  src: string;
  srclang: string;
}

interface HTMLUListElementSetters extends HTMLElementSetters {
  compact: boolean;
  type: string;
}

interface HTMLVideoElementSetters extends HTMLMediaElementSetters {
  disablePictureInPicture: boolean;
  height: number;
  playsInline: boolean;
  poster: string;
  width: number;
}

