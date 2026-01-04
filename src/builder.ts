import type { ReactiveValue } from "./types";
interface HTMLElementBuilder {
  accessKey(): string;
  accessKey(value: ReactiveValue<string>): this;
  accessKeyLabel(): string;
  autocapitalize(): string;
  autocapitalize(value: ReactiveValue<string>): this;
  autocorrect(): boolean;
  autocorrect(value: ReactiveValue<boolean>): this;
  dir(): string;
  dir(value: ReactiveValue<string>): this;
  draggable(): boolean;
  draggable(value: ReactiveValue<boolean>): this;
  hidden(): boolean;
  hidden(value: ReactiveValue<boolean>): this;
  inert(): boolean;
  inert(value: ReactiveValue<boolean>): this;
  innerText(): string;
  innerText(value: ReactiveValue<string>): this;
  lang(): string;
  lang(value: ReactiveValue<string>): this;
  offsetHeight(): number;
  offsetLeft(): number;
  offsetParent(): Element;
  offsetTop(): number;
  offsetWidth(): number;
  outerText(): string;
  outerText(value: ReactiveValue<string>): this;
  popover(): string;
  popover(value: ReactiveValue<string>): this;
  spellcheck(): boolean;
  spellcheck(value: ReactiveValue<boolean>): this;
  title(): string;
  title(value: ReactiveValue<string>): this;
  translate(): boolean;
  translate(value: ReactiveValue<boolean>): this;
  writingSuggestions(): string;
  writingSuggestions(value: ReactiveValue<string>): this;
  attributes(): NamedNodeMap;
  classList(): DOMTokenList;
  classList(value: ReactiveValue<string>): this;
  className(): string;
  className(value: ReactiveValue<string>): this;
  clientHeight(): number;
  clientLeft(): number;
  clientTop(): number;
  clientWidth(): number;
  currentCSSZoom(): number;
  id(): string;
  id(value: ReactiveValue<string>): this;
  innerHTML(): string;
  innerHTML(value: ReactiveValue<string>): this;
  localName(): string;
  namespaceURI(): string;
  outerHTML(): string;
  outerHTML(value: ReactiveValue<string>): this;
  ownerDocument(): Document;
  part(): DOMTokenList;
  part(value: ReactiveValue<string>): this;
  prefix(): string;
  scrollHeight(): number;
  scrollLeft(): number;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(): number;
  scrollTop(value: ReactiveValue<number>): this;
  scrollWidth(): number;
  shadowRoot(): ShadowRoot;
  slot(): string;
  slot(value: ReactiveValue<string>): this;
  tagName(): string;
  textContent(): string;
  textContent(value: ReactiveValue<string>): this;
  baseURI(): string;
  childNodes(): NodeListOf<ChildNode>;
  firstChild(): ChildNode;
  isConnected(): boolean;
  lastChild(): ChildNode;
  nextSibling(): ChildNode;
  nodeName(): string;
  nodeType(): number;
  nodeValue(): string;
  nodeValue(value: ReactiveValue<string>): this;
  parentElement(): HTMLElement;
  parentNode(): ParentNode;
  previousSibling(): ChildNode;
  ELEMENT_NODE(): 1;
  ATTRIBUTE_NODE(): 2;
  TEXT_NODE(): 3;
  CDATA_SECTION_NODE(): 4;
  ENTITY_REFERENCE_NODE(): 5;
  ENTITY_NODE(): 6;
  PROCESSING_INSTRUCTION_NODE(): 7;
  COMMENT_NODE(): 8;
  DOCUMENT_NODE(): 9;
  DOCUMENT_TYPE_NODE(): 10;
  DOCUMENT_FRAGMENT_NODE(): 11;
  NOTATION_NODE(): 12;
  DOCUMENT_POSITION_DISCONNECTED(): 1;
  DOCUMENT_POSITION_PRECEDING(): 2;
  DOCUMENT_POSITION_FOLLOWING(): 4;
  DOCUMENT_POSITION_CONTAINS(): 8;
  DOCUMENT_POSITION_CONTAINED_BY(): 16;
  DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC(): 32;
  ariaActiveDescendantElement(): Element;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(): string;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(): string;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(): string;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(): string;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(): string;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(): string;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(): string;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(): string;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(): string;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(): string;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(): readonly Element[];
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(): string;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(): readonly Element[];
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(): string;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(): readonly Element[];
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(): string;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(): readonly Element[];
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(): string;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(): readonly Element[];
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(): string;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(): string;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(): string;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(): string;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(): string;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(): readonly Element[];
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(): string;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(): string;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(): string;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(): string;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(): string;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(): string;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(): readonly Element[];
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(): string;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(): string;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(): string;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(): string;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(): string;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(): string;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(): string;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(): string;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(): string;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(): string;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(): string;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(): string;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(): string;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(): string;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(): string;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(): string;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(): string;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(): string;
  ariaValueText(value: ReactiveValue<string>): this;
  role(): string;
  role(value: ReactiveValue<string>): this;
  nextElementSibling(): Element;
  previousElementSibling(): Element;
  childElementCount(): number;
  children(): HTMLCollection;
  firstElementChild(): Element;
  lastElementChild(): Element;
  assignedSlot(): HTMLSlotElement;
  attributeStyleMap(): StylePropertyMap;
  style(): CSSStyleDeclaration;
  style(value: ReactiveValue<string>): this;
  contentEditable(): string;
  contentEditable(value: ReactiveValue<string>): this;
  enterKeyHint(): string;
  enterKeyHint(value: ReactiveValue<string>): this;
  inputMode(): string;
  inputMode(value: ReactiveValue<string>): this;
  isContentEditable(): boolean;
  autofocus(): boolean;
  autofocus(value: ReactiveValue<boolean>): this;
  dataset(): DOMStringMap;
  nonce(): string;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(): number;
  tabIndex(value: ReactiveValue<number>): this;
}

interface HTMLHyperlinkElementUtilsBuilder {
  hash(): string;
  hash(value: ReactiveValue<string>): this;
  host(): string;
  host(value: ReactiveValue<string>): this;
  hostname(): string;
  hostname(value: ReactiveValue<string>): this;
  href(): string;
  href(value: ReactiveValue<string>): this;
  origin(): string;
  password(): string;
  password(value: ReactiveValue<string>): this;
  pathname(): string;
  pathname(value: ReactiveValue<string>): this;
  port(): string;
  port(value: ReactiveValue<string>): this;
  protocol(): string;
  protocol(value: ReactiveValue<string>): this;
  search(): string;
  search(value: ReactiveValue<string>): this;
  username(): string;
  username(value: ReactiveValue<string>): this;
}

interface HTMLAnchorElementBuilder extends HTMLElementBuilder, HTMLHyperlinkElementUtilsBuilder {
  charset(): string;
  charset(value: ReactiveValue<string>): this;
  coords(): string;
  coords(value: ReactiveValue<string>): this;
  download(): string;
  download(value: ReactiveValue<string>): this;
  hreflang(): string;
  hreflang(value: ReactiveValue<string>): this;
  name(): string;
  name(value: ReactiveValue<string>): this;
  ping(): string;
  ping(value: ReactiveValue<string>): this;
  referrerPolicy(): string;
  referrerPolicy(value: ReactiveValue<string>): this;
  rel(): string;
  rel(value: ReactiveValue<string>): this;
  relList(): DOMTokenList;
  relList(value: ReactiveValue<string>): this;
  rev(): string;
  rev(value: ReactiveValue<string>): this;
  shape(): string;
  shape(value: ReactiveValue<string>): this;
  target(): string;
  target(value: ReactiveValue<string>): this;
  text(): string;
  text(value: ReactiveValue<string>): this;
  type(): string;
  type(value: ReactiveValue<string>): this;
}

interface HTMLAreaElementBuilder extends HTMLElementBuilder, HTMLHyperlinkElementUtilsBuilder {
  alt(): string;
  alt(value: ReactiveValue<string>): this;
  coords(): string;
  coords(value: ReactiveValue<string>): this;
  download(): string;
  download(value: ReactiveValue<string>): this;
  noHref(): boolean;
  noHref(value: ReactiveValue<boolean>): this;
  ping(): string;
  ping(value: ReactiveValue<string>): this;
  referrerPolicy(): string;
  referrerPolicy(value: ReactiveValue<string>): this;
  rel(): string;
  rel(value: ReactiveValue<string>): this;
  relList(): DOMTokenList;
  relList(value: ReactiveValue<string>): this;
  shape(): string;
  shape(value: ReactiveValue<string>): this;
  target(): string;
  target(value: ReactiveValue<string>): this;
}

interface HTMLMediaElementBuilder extends HTMLElementBuilder {
  autoplay(): boolean;
  autoplay(value: ReactiveValue<boolean>): this;
  buffered(): TimeRanges;
  controls(): boolean;
  controls(value: ReactiveValue<boolean>): this;
  crossOrigin(): string;
  crossOrigin(value: ReactiveValue<string>): this;
  currentSrc(): string;
  currentTime(): number;
  currentTime(value: ReactiveValue<number>): this;
  defaultMuted(): boolean;
  defaultMuted(value: ReactiveValue<boolean>): this;
  defaultPlaybackRate(): number;
  defaultPlaybackRate(value: ReactiveValue<number>): this;
  disableRemotePlayback(): boolean;
  disableRemotePlayback(value: ReactiveValue<boolean>): this;
  duration(): number;
  ended(): boolean;
  error(): MediaError;
  loop(): boolean;
  loop(value: ReactiveValue<boolean>): this;
  mediaKeys(): MediaKeys;
  muted(): boolean;
  muted(value: ReactiveValue<boolean>): this;
  networkState(): number;
  paused(): boolean;
  playbackRate(): number;
  playbackRate(value: ReactiveValue<number>): this;
  played(): TimeRanges;
  preload(): "" | "none" | "metadata" | "auto";
  preload(value: ReactiveValue<"" | "none" | "metadata" | "auto">): this;
  preservesPitch(): boolean;
  preservesPitch(value: ReactiveValue<boolean>): this;
  readyState(): number;
  remote(): RemotePlayback;
  seekable(): TimeRanges;
  seeking(): boolean;
  sinkId(): string;
  src(): string;
  src(value: ReactiveValue<string>): this;
  srcObject(): MediaProvider;
  srcObject(value: ReactiveValue<MediaProvider>): this;
  textTracks(): TextTrackList;
  volume(): number;
  volume(value: ReactiveValue<number>): this;
  NETWORK_EMPTY(): 0;
  NETWORK_IDLE(): 1;
  NETWORK_LOADING(): 2;
  NETWORK_NO_SOURCE(): 3;
  HAVE_NOTHING(): 0;
  HAVE_METADATA(): 1;
  HAVE_CURRENT_DATA(): 2;
  HAVE_FUTURE_DATA(): 3;
  HAVE_ENOUGH_DATA(): 4;
}

interface HTMLAudioElementBuilder extends HTMLMediaElementBuilder {
}

interface HTMLBaseElementBuilder extends HTMLElementBuilder {
  href(): string;
  href(value: ReactiveValue<string>): this;
  target(): string;
  target(value: ReactiveValue<string>): this;
}

interface HTMLQuoteElementBuilder extends HTMLElementBuilder {
  cite(): string;
  cite(value: ReactiveValue<string>): this;
}

interface WindowEventHandlersBuilder {
}

interface HTMLBodyElementBuilder extends HTMLElementBuilder, WindowEventHandlersBuilder {
  aLink(): string;
  aLink(value: ReactiveValue<string>): this;
  background(): string;
  background(value: ReactiveValue<string>): this;
  bgColor(): string;
  bgColor(value: ReactiveValue<string>): this;
  link(): string;
  link(value: ReactiveValue<string>): this;
  text(): string;
  text(value: ReactiveValue<string>): this;
  vLink(): string;
  vLink(value: ReactiveValue<string>): this;
}

interface HTMLBRElementBuilder extends HTMLElementBuilder {
  clear(): string;
  clear(value: ReactiveValue<string>): this;
}

interface PopoverInvokerElementBuilder {
  popoverTargetAction(): string;
  popoverTargetAction(value: ReactiveValue<string>): this;
  popoverTargetElement(): Element;
  popoverTargetElement(value: ReactiveValue<Element>): this;
}

interface HTMLButtonElementBuilder extends HTMLElementBuilder, PopoverInvokerElementBuilder {
  disabled(): boolean;
  disabled(value: ReactiveValue<boolean>): this;
  form(): HTMLFormElement;
  formAction(): string;
  formAction(value: ReactiveValue<string>): this;
  formEnctype(): string;
  formEnctype(value: ReactiveValue<string>): this;
  formMethod(): string;
  formMethod(value: ReactiveValue<string>): this;
  formNoValidate(): boolean;
  formNoValidate(value: ReactiveValue<boolean>): this;
  formTarget(): string;
  formTarget(value: ReactiveValue<string>): this;
  labels(): NodeListOf<HTMLLabelElement>;
  name(): string;
  name(value: ReactiveValue<string>): this;
  type(): "submit" | "reset" | "button";
  type(value: ReactiveValue<"submit" | "reset" | "button">): this;
  validationMessage(): string;
  validity(): ValidityState;
  value(): string;
  value(value: ReactiveValue<string>): this;
  willValidate(): boolean;
}

interface HTMLCanvasElementBuilder extends HTMLElementBuilder {
  height(): number;
  height(value: ReactiveValue<number>): this;
  width(): number;
  width(value: ReactiveValue<number>): this;
}

interface HTMLTableCaptionElementBuilder extends HTMLElementBuilder {
  align(): string;
  align(value: ReactiveValue<string>): this;
}

interface HTMLTableColElementBuilder extends HTMLElementBuilder {
  align(): string;
  align(value: ReactiveValue<string>): this;
  ch(): string;
  ch(value: ReactiveValue<string>): this;
  chOff(): string;
  chOff(value: ReactiveValue<string>): this;
  span(): number;
  span(value: ReactiveValue<number>): this;
  vAlign(): string;
  vAlign(value: ReactiveValue<string>): this;
  width(): string;
  width(value: ReactiveValue<string>): this;
}

interface HTMLDataElementBuilder extends HTMLElementBuilder {
  value(): string;
  value(value: ReactiveValue<string>): this;
}

interface HTMLDataListElementBuilder extends HTMLElementBuilder {
  options(): HTMLCollectionOf<HTMLOptionElement>;
}

interface HTMLModElementBuilder extends HTMLElementBuilder {
  cite(): string;
  cite(value: ReactiveValue<string>): this;
  dateTime(): string;
  dateTime(value: ReactiveValue<string>): this;
}

interface HTMLDetailsElementBuilder extends HTMLElementBuilder {
  name(): string;
  name(value: ReactiveValue<string>): this;
  open(): boolean;
  open(value: ReactiveValue<boolean>): this;
}

interface HTMLDialogElementBuilder extends HTMLElementBuilder {
  open(): boolean;
  open(value: ReactiveValue<boolean>): this;
  returnValue(): string;
  returnValue(value: ReactiveValue<string>): this;
}

interface HTMLDivElementBuilder extends HTMLElementBuilder {
  align(): string;
  align(value: ReactiveValue<string>): this;
}

interface HTMLDListElementBuilder extends HTMLElementBuilder {
  compact(): boolean;
  compact(value: ReactiveValue<boolean>): this;
}

interface HTMLEmbedElementBuilder extends HTMLElementBuilder {
  align(): string;
  align(value: ReactiveValue<string>): this;
  height(): string;
  height(value: ReactiveValue<string>): this;
  name(): string;
  name(value: ReactiveValue<string>): this;
  src(): string;
  src(value: ReactiveValue<string>): this;
  type(): string;
  type(value: ReactiveValue<string>): this;
  width(): string;
  width(value: ReactiveValue<string>): this;
}

interface HTMLFieldSetElementBuilder extends HTMLElementBuilder {
  disabled(): boolean;
  disabled(value: ReactiveValue<boolean>): this;
  elements(): HTMLCollection;
  form(): HTMLFormElement;
  name(): string;
  name(value: ReactiveValue<string>): this;
  type(): string;
  validationMessage(): string;
  validity(): ValidityState;
  willValidate(): boolean;
}

interface HTMLFormElementBuilder extends HTMLElementBuilder {
  acceptCharset(): string;
  acceptCharset(value: ReactiveValue<string>): this;
  action(): string;
  action(value: ReactiveValue<string>): this;
  autocomplete(): AutoFillBase;
  autocomplete(value: ReactiveValue<AutoFillBase>): this;
  elements(): HTMLFormControlsCollection;
  encoding(): string;
  encoding(value: ReactiveValue<string>): this;
  enctype(): string;
  enctype(value: ReactiveValue<string>): this;
  length(): number;
  method(): string;
  method(value: ReactiveValue<string>): this;
  name(): string;
  name(value: ReactiveValue<string>): this;
  noValidate(): boolean;
  noValidate(value: ReactiveValue<boolean>): this;
  rel(): string;
  rel(value: ReactiveValue<string>): this;
  relList(): DOMTokenList;
  relList(value: ReactiveValue<string>): this;
  target(): string;
  target(value: ReactiveValue<string>): this;
}

interface HTMLHeadingElementBuilder extends HTMLElementBuilder {
  align(): string;
  align(value: ReactiveValue<string>): this;
}

interface HTMLHeadElementBuilder extends HTMLElementBuilder {
}

interface HTMLHRElementBuilder extends HTMLElementBuilder {
  align(): string;
  align(value: ReactiveValue<string>): this;
  color(): string;
  color(value: ReactiveValue<string>): this;
  noShade(): boolean;
  noShade(value: ReactiveValue<boolean>): this;
  size(): string;
  size(value: ReactiveValue<string>): this;
  width(): string;
  width(value: ReactiveValue<string>): this;
}

interface HTMLHtmlElementBuilder extends HTMLElementBuilder {
  version(): string;
  version(value: ReactiveValue<string>): this;
}

interface HTMLIFrameElementBuilder extends HTMLElementBuilder {
  align(): string;
  align(value: ReactiveValue<string>): this;
  allow(): string;
  allow(value: ReactiveValue<string>): this;
  allowFullscreen(): boolean;
  allowFullscreen(value: ReactiveValue<boolean>): this;
  contentDocument(): Document;
  contentWindow(): Window;
  frameBorder(): string;
  frameBorder(value: ReactiveValue<string>): this;
  height(): string;
  height(value: ReactiveValue<string>): this;
  loading(): "eager" | "lazy";
  loading(value: ReactiveValue<"eager" | "lazy">): this;
  longDesc(): string;
  longDesc(value: ReactiveValue<string>): this;
  marginHeight(): string;
  marginHeight(value: ReactiveValue<string>): this;
  marginWidth(): string;
  marginWidth(value: ReactiveValue<string>): this;
  name(): string;
  name(value: ReactiveValue<string>): this;
  referrerPolicy(): ReferrerPolicy;
  referrerPolicy(value: ReactiveValue<ReferrerPolicy>): this;
  sandbox(): DOMTokenList;
  sandbox(value: ReactiveValue<string>): this;
  scrolling(): string;
  scrolling(value: ReactiveValue<string>): this;
  src(): string;
  src(value: ReactiveValue<string>): this;
  srcdoc(): string;
  srcdoc(value: ReactiveValue<string>): this;
  width(): string;
  width(value: ReactiveValue<string>): this;
}

interface HTMLImageElementBuilder extends HTMLElementBuilder {
  align(): string;
  align(value: ReactiveValue<string>): this;
  alt(): string;
  alt(value: ReactiveValue<string>): this;
  border(): string;
  border(value: ReactiveValue<string>): this;
  complete(): boolean;
  crossOrigin(): string;
  crossOrigin(value: ReactiveValue<string>): this;
  currentSrc(): string;
  decoding(): "auto" | "async" | "sync";
  decoding(value: ReactiveValue<"auto" | "async" | "sync">): this;
  fetchPriority(): "auto" | "high" | "low";
  fetchPriority(value: ReactiveValue<"auto" | "high" | "low">): this;
  height(): number;
  height(value: ReactiveValue<number>): this;
  hspace(): number;
  hspace(value: ReactiveValue<number>): this;
  isMap(): boolean;
  isMap(value: ReactiveValue<boolean>): this;
  loading(): "eager" | "lazy";
  loading(value: ReactiveValue<"eager" | "lazy">): this;
  longDesc(): string;
  longDesc(value: ReactiveValue<string>): this;
  lowsrc(): string;
  lowsrc(value: ReactiveValue<string>): this;
  name(): string;
  name(value: ReactiveValue<string>): this;
  naturalHeight(): number;
  naturalWidth(): number;
  referrerPolicy(): string;
  referrerPolicy(value: ReactiveValue<string>): this;
  sizes(): string;
  sizes(value: ReactiveValue<string>): this;
  src(): string;
  src(value: ReactiveValue<string>): this;
  srcset(): string;
  srcset(value: ReactiveValue<string>): this;
  useMap(): string;
  useMap(value: ReactiveValue<string>): this;
  vspace(): number;
  vspace(value: ReactiveValue<number>): this;
  width(): number;
  width(value: ReactiveValue<number>): this;
  x(): number;
  y(): number;
}

interface HTMLInputElementBuilder extends HTMLElementBuilder, PopoverInvokerElementBuilder {
  accept(): string;
  accept(value: ReactiveValue<string>): this;
  align(): string;
  align(value: ReactiveValue<string>): this;
  alt(): string;
  alt(value: ReactiveValue<string>): this;
  autocomplete(): AutoFill;
  autocomplete(value: ReactiveValue<AutoFill>): this;
  capture(): string;
  capture(value: ReactiveValue<string>): this;
  checked(): boolean;
  checked(value: ReactiveValue<boolean>): this;
  defaultChecked(): boolean;
  defaultChecked(value: ReactiveValue<boolean>): this;
  defaultValue(): string;
  defaultValue(value: ReactiveValue<string>): this;
  dirName(): string;
  dirName(value: ReactiveValue<string>): this;
  disabled(): boolean;
  disabled(value: ReactiveValue<boolean>): this;
  files(): FileList;
  files(value: ReactiveValue<FileList>): this;
  form(): HTMLFormElement;
  formAction(): string;
  formAction(value: ReactiveValue<string>): this;
  formEnctype(): string;
  formEnctype(value: ReactiveValue<string>): this;
  formMethod(): string;
  formMethod(value: ReactiveValue<string>): this;
  formNoValidate(): boolean;
  formNoValidate(value: ReactiveValue<boolean>): this;
  formTarget(): string;
  formTarget(value: ReactiveValue<string>): this;
  height(): number;
  height(value: ReactiveValue<number>): this;
  indeterminate(): boolean;
  indeterminate(value: ReactiveValue<boolean>): this;
  labels(): NodeListOf<HTMLLabelElement>;
  list(): HTMLDataListElement;
  max(): string;
  max(value: ReactiveValue<string>): this;
  maxLength(): number;
  maxLength(value: ReactiveValue<number>): this;
  min(): string;
  min(value: ReactiveValue<string>): this;
  minLength(): number;
  minLength(value: ReactiveValue<number>): this;
  multiple(): boolean;
  multiple(value: ReactiveValue<boolean>): this;
  name(): string;
  name(value: ReactiveValue<string>): this;
  pattern(): string;
  pattern(value: ReactiveValue<string>): this;
  placeholder(): string;
  placeholder(value: ReactiveValue<string>): this;
  readOnly(): boolean;
  readOnly(value: ReactiveValue<boolean>): this;
  required(): boolean;
  required(value: ReactiveValue<boolean>): this;
  selectionDirection(): "none" | "forward" | "backward";
  selectionDirection(value: ReactiveValue<"none" | "forward" | "backward">): this;
  selectionEnd(): number;
  selectionEnd(value: ReactiveValue<number>): this;
  selectionStart(): number;
  selectionStart(value: ReactiveValue<number>): this;
  size(): number;
  size(value: ReactiveValue<number>): this;
  src(): string;
  src(value: ReactiveValue<string>): this;
  step(): string;
  step(value: ReactiveValue<string>): this;
  type(): string;
  type(value: ReactiveValue<string>): this;
  useMap(): string;
  useMap(value: ReactiveValue<string>): this;
  validationMessage(): string;
  validity(): ValidityState;
  value(): string;
  value(value: ReactiveValue<string>): this;
  valueAsDate(): Date;
  valueAsDate(value: ReactiveValue<Date>): this;
  valueAsNumber(): number;
  valueAsNumber(value: ReactiveValue<number>): this;
  webkitEntries(): readonly FileSystemEntry[];
  webkitdirectory(): boolean;
  webkitdirectory(value: ReactiveValue<boolean>): this;
  width(): number;
  width(value: ReactiveValue<number>): this;
  willValidate(): boolean;
}

interface HTMLLabelElementBuilder extends HTMLElementBuilder {
  control(): HTMLElement;
  form(): HTMLFormElement;
  htmlFor(): string;
  htmlFor(value: ReactiveValue<string>): this;
}

interface HTMLLegendElementBuilder extends HTMLElementBuilder {
  align(): string;
  align(value: ReactiveValue<string>): this;
  form(): HTMLFormElement;
}

interface HTMLLIElementBuilder extends HTMLElementBuilder {
  type(): string;
  type(value: ReactiveValue<string>): this;
  value(): number;
  value(value: ReactiveValue<number>): this;
}

interface LinkStyleBuilder {
  sheet(): CSSStyleSheet;
}

interface HTMLLinkElementBuilder extends HTMLElementBuilder, LinkStyleBuilder {
  as(): string;
  as(value: ReactiveValue<string>): this;
  blocking(): DOMTokenList;
  blocking(value: ReactiveValue<string>): this;
  charset(): string;
  charset(value: ReactiveValue<string>): this;
  crossOrigin(): string;
  crossOrigin(value: ReactiveValue<string>): this;
  disabled(): boolean;
  disabled(value: ReactiveValue<boolean>): this;
  fetchPriority(): "auto" | "high" | "low";
  fetchPriority(value: ReactiveValue<"auto" | "high" | "low">): this;
  href(): string;
  href(value: ReactiveValue<string>): this;
  hreflang(): string;
  hreflang(value: ReactiveValue<string>): this;
  imageSizes(): string;
  imageSizes(value: ReactiveValue<string>): this;
  imageSrcset(): string;
  imageSrcset(value: ReactiveValue<string>): this;
  integrity(): string;
  integrity(value: ReactiveValue<string>): this;
  media(): string;
  media(value: ReactiveValue<string>): this;
  referrerPolicy(): string;
  referrerPolicy(value: ReactiveValue<string>): this;
  rel(): string;
  rel(value: ReactiveValue<string>): this;
  relList(): DOMTokenList;
  relList(value: ReactiveValue<string>): this;
  rev(): string;
  rev(value: ReactiveValue<string>): this;
  sizes(): DOMTokenList;
  sizes(value: ReactiveValue<string>): this;
  target(): string;
  target(value: ReactiveValue<string>): this;
  type(): string;
  type(value: ReactiveValue<string>): this;
}

interface HTMLMapElementBuilder extends HTMLElementBuilder {
  areas(): HTMLCollection;
  name(): string;
  name(value: ReactiveValue<string>): this;
}

interface HTMLMenuElementBuilder extends HTMLElementBuilder {
  compact(): boolean;
  compact(value: ReactiveValue<boolean>): this;
}

interface HTMLMetaElementBuilder extends HTMLElementBuilder {
  content(): string;
  content(value: ReactiveValue<string>): this;
  httpEquiv(): string;
  httpEquiv(value: ReactiveValue<string>): this;
  media(): string;
  media(value: ReactiveValue<string>): this;
  name(): string;
  name(value: ReactiveValue<string>): this;
  scheme(): string;
  scheme(value: ReactiveValue<string>): this;
}

interface HTMLMeterElementBuilder extends HTMLElementBuilder {
  high(): number;
  high(value: ReactiveValue<number>): this;
  labels(): NodeListOf<HTMLLabelElement>;
  low(): number;
  low(value: ReactiveValue<number>): this;
  max(): number;
  max(value: ReactiveValue<number>): this;
  min(): number;
  min(value: ReactiveValue<number>): this;
  optimum(): number;
  optimum(value: ReactiveValue<number>): this;
  value(): number;
  value(value: ReactiveValue<number>): this;
}

interface HTMLObjectElementBuilder extends HTMLElementBuilder {
  align(): string;
  align(value: ReactiveValue<string>): this;
  archive(): string;
  archive(value: ReactiveValue<string>): this;
  border(): string;
  border(value: ReactiveValue<string>): this;
  code(): string;
  code(value: ReactiveValue<string>): this;
  codeBase(): string;
  codeBase(value: ReactiveValue<string>): this;
  codeType(): string;
  codeType(value: ReactiveValue<string>): this;
  contentDocument(): Document;
  contentWindow(): Window;
  data(): string;
  data(value: ReactiveValue<string>): this;
  declare(): boolean;
  declare(value: ReactiveValue<boolean>): this;
  form(): HTMLFormElement;
  height(): string;
  height(value: ReactiveValue<string>): this;
  hspace(): number;
  hspace(value: ReactiveValue<number>): this;
  name(): string;
  name(value: ReactiveValue<string>): this;
  standby(): string;
  standby(value: ReactiveValue<string>): this;
  type(): string;
  type(value: ReactiveValue<string>): this;
  useMap(): string;
  useMap(value: ReactiveValue<string>): this;
  validationMessage(): string;
  validity(): ValidityState;
  vspace(): number;
  vspace(value: ReactiveValue<number>): this;
  width(): string;
  width(value: ReactiveValue<string>): this;
  willValidate(): boolean;
}

interface HTMLOListElementBuilder extends HTMLElementBuilder {
  compact(): boolean;
  compact(value: ReactiveValue<boolean>): this;
  reversed(): boolean;
  reversed(value: ReactiveValue<boolean>): this;
  start(): number;
  start(value: ReactiveValue<number>): this;
  type(): string;
  type(value: ReactiveValue<string>): this;
}

interface HTMLOptGroupElementBuilder extends HTMLElementBuilder {
  disabled(): boolean;
  disabled(value: ReactiveValue<boolean>): this;
  label(): string;
  label(value: ReactiveValue<string>): this;
}

interface HTMLOptionElementBuilder extends HTMLElementBuilder {
  defaultSelected(): boolean;
  defaultSelected(value: ReactiveValue<boolean>): this;
  disabled(): boolean;
  disabled(value: ReactiveValue<boolean>): this;
  form(): HTMLFormElement;
  index(): number;
  label(): string;
  label(value: ReactiveValue<string>): this;
  selected(): boolean;
  selected(value: ReactiveValue<boolean>): this;
  text(): string;
  text(value: ReactiveValue<string>): this;
  value(): string;
  value(value: ReactiveValue<string>): this;
}

interface HTMLOutputElementBuilder extends HTMLElementBuilder {
  defaultValue(): string;
  defaultValue(value: ReactiveValue<string>): this;
  form(): HTMLFormElement;
  htmlFor(): DOMTokenList;
  htmlFor(value: ReactiveValue<string>): this;
  labels(): NodeListOf<HTMLLabelElement>;
  name(): string;
  name(value: ReactiveValue<string>): this;
  type(): string;
  validationMessage(): string;
  validity(): ValidityState;
  value(): string;
  value(value: ReactiveValue<string>): this;
  willValidate(): boolean;
}

interface HTMLParagraphElementBuilder extends HTMLElementBuilder {
  align(): string;
  align(value: ReactiveValue<string>): this;
}

interface HTMLPictureElementBuilder extends HTMLElementBuilder {
}

interface HTMLPreElementBuilder extends HTMLElementBuilder {
  width(): number;
  width(value: ReactiveValue<number>): this;
}

interface HTMLProgressElementBuilder extends HTMLElementBuilder {
  labels(): NodeListOf<HTMLLabelElement>;
  max(): number;
  max(value: ReactiveValue<number>): this;
  position(): number;
  value(): number;
  value(value: ReactiveValue<number>): this;
}

interface HTMLScriptElementBuilder extends HTMLElementBuilder {
  async(): boolean;
  async(value: ReactiveValue<boolean>): this;
  blocking(): DOMTokenList;
  blocking(value: ReactiveValue<string>): this;
  charset(): string;
  charset(value: ReactiveValue<string>): this;
  crossOrigin(): string;
  crossOrigin(value: ReactiveValue<string>): this;
  defer(): boolean;
  defer(value: ReactiveValue<boolean>): this;
  event(): string;
  event(value: ReactiveValue<string>): this;
  fetchPriority(): "auto" | "high" | "low";
  fetchPriority(value: ReactiveValue<"auto" | "high" | "low">): this;
  htmlFor(): string;
  htmlFor(value: ReactiveValue<string>): this;
  integrity(): string;
  integrity(value: ReactiveValue<string>): this;
  noModule(): boolean;
  noModule(value: ReactiveValue<boolean>): this;
  referrerPolicy(): string;
  referrerPolicy(value: ReactiveValue<string>): this;
  src(): string;
  src(value: ReactiveValue<string>): this;
  text(): string;
  text(value: ReactiveValue<string>): this;
  type(): string;
  type(value: ReactiveValue<string>): this;
}

interface HTMLSelectElementBuilder extends HTMLElementBuilder {
  autocomplete(): AutoFill;
  autocomplete(value: ReactiveValue<AutoFill>): this;
  disabled(): boolean;
  disabled(value: ReactiveValue<boolean>): this;
  form(): HTMLFormElement;
  labels(): NodeListOf<HTMLLabelElement>;
  length(): number;
  length(value: ReactiveValue<number>): this;
  multiple(): boolean;
  multiple(value: ReactiveValue<boolean>): this;
  name(): string;
  name(value: ReactiveValue<string>): this;
  options(): HTMLOptionsCollection;
  required(): boolean;
  required(value: ReactiveValue<boolean>): this;
  selectedIndex(): number;
  selectedIndex(value: ReactiveValue<number>): this;
  selectedOptions(): HTMLCollectionOf<HTMLOptionElement>;
  size(): number;
  size(value: ReactiveValue<number>): this;
  type(): "select-one" | "select-multiple";
  validationMessage(): string;
  validity(): ValidityState;
  value(): string;
  value(value: ReactiveValue<string>): this;
  willValidate(): boolean;
}

interface HTMLSlotElementBuilder extends HTMLElementBuilder {
  name(): string;
  name(value: ReactiveValue<string>): this;
}

interface HTMLSourceElementBuilder extends HTMLElementBuilder {
  height(): number;
  height(value: ReactiveValue<number>): this;
  media(): string;
  media(value: ReactiveValue<string>): this;
  sizes(): string;
  sizes(value: ReactiveValue<string>): this;
  src(): string;
  src(value: ReactiveValue<string>): this;
  srcset(): string;
  srcset(value: ReactiveValue<string>): this;
  type(): string;
  type(value: ReactiveValue<string>): this;
  width(): number;
  width(value: ReactiveValue<number>): this;
}

interface HTMLSpanElementBuilder extends HTMLElementBuilder {
}

interface HTMLStyleElementBuilder extends HTMLElementBuilder, LinkStyleBuilder {
  blocking(): DOMTokenList;
  blocking(value: ReactiveValue<string>): this;
  disabled(): boolean;
  disabled(value: ReactiveValue<boolean>): this;
  media(): string;
  media(value: ReactiveValue<string>): this;
  type(): string;
  type(value: ReactiveValue<string>): this;
}

interface HTMLTableElementBuilder extends HTMLElementBuilder {
  align(): string;
  align(value: ReactiveValue<string>): this;
  bgColor(): string;
  bgColor(value: ReactiveValue<string>): this;
  border(): string;
  border(value: ReactiveValue<string>): this;
  caption(): HTMLTableCaptionElement;
  caption(value: ReactiveValue<HTMLTableCaptionElement>): this;
  cellPadding(): string;
  cellPadding(value: ReactiveValue<string>): this;
  cellSpacing(): string;
  cellSpacing(value: ReactiveValue<string>): this;
  frame(): string;
  frame(value: ReactiveValue<string>): this;
  rows(): HTMLCollectionOf<HTMLTableRowElement>;
  rules(): string;
  rules(value: ReactiveValue<string>): this;
  summary(): string;
  summary(value: ReactiveValue<string>): this;
  tBodies(): HTMLCollectionOf<HTMLTableSectionElement>;
  tFoot(): HTMLTableSectionElement;
  tFoot(value: ReactiveValue<HTMLTableSectionElement>): this;
  tHead(): HTMLTableSectionElement;
  tHead(value: ReactiveValue<HTMLTableSectionElement>): this;
  width(): string;
  width(value: ReactiveValue<string>): this;
}

interface HTMLTableSectionElementBuilder extends HTMLElementBuilder {
  align(): string;
  align(value: ReactiveValue<string>): this;
  ch(): string;
  ch(value: ReactiveValue<string>): this;
  chOff(): string;
  chOff(value: ReactiveValue<string>): this;
  rows(): HTMLCollectionOf<HTMLTableRowElement>;
  vAlign(): string;
  vAlign(value: ReactiveValue<string>): this;
}

interface HTMLTableCellElementBuilder extends HTMLElementBuilder {
  abbr(): string;
  abbr(value: ReactiveValue<string>): this;
  align(): string;
  align(value: ReactiveValue<string>): this;
  axis(): string;
  axis(value: ReactiveValue<string>): this;
  bgColor(): string;
  bgColor(value: ReactiveValue<string>): this;
  cellIndex(): number;
  ch(): string;
  ch(value: ReactiveValue<string>): this;
  chOff(): string;
  chOff(value: ReactiveValue<string>): this;
  colSpan(): number;
  colSpan(value: ReactiveValue<number>): this;
  headers(): string;
  headers(value: ReactiveValue<string>): this;
  height(): string;
  height(value: ReactiveValue<string>): this;
  noWrap(): boolean;
  noWrap(value: ReactiveValue<boolean>): this;
  rowSpan(): number;
  rowSpan(value: ReactiveValue<number>): this;
  scope(): string;
  scope(value: ReactiveValue<string>): this;
  vAlign(): string;
  vAlign(value: ReactiveValue<string>): this;
  width(): string;
  width(value: ReactiveValue<string>): this;
}

interface HTMLTemplateElementBuilder extends HTMLElementBuilder {
  content(): DocumentFragment;
  shadowRootClonable(): boolean;
  shadowRootClonable(value: ReactiveValue<boolean>): this;
  shadowRootDelegatesFocus(): boolean;
  shadowRootDelegatesFocus(value: ReactiveValue<boolean>): this;
  shadowRootMode(): string;
  shadowRootMode(value: ReactiveValue<string>): this;
  shadowRootSerializable(): boolean;
  shadowRootSerializable(value: ReactiveValue<boolean>): this;
}

interface HTMLTextAreaElementBuilder extends HTMLElementBuilder {
  autocomplete(): AutoFill;
  autocomplete(value: ReactiveValue<AutoFill>): this;
  cols(): number;
  cols(value: ReactiveValue<number>): this;
  defaultValue(): string;
  defaultValue(value: ReactiveValue<string>): this;
  dirName(): string;
  dirName(value: ReactiveValue<string>): this;
  disabled(): boolean;
  disabled(value: ReactiveValue<boolean>): this;
  form(): HTMLFormElement;
  labels(): NodeListOf<HTMLLabelElement>;
  maxLength(): number;
  maxLength(value: ReactiveValue<number>): this;
  minLength(): number;
  minLength(value: ReactiveValue<number>): this;
  name(): string;
  name(value: ReactiveValue<string>): this;
  placeholder(): string;
  placeholder(value: ReactiveValue<string>): this;
  readOnly(): boolean;
  readOnly(value: ReactiveValue<boolean>): this;
  required(): boolean;
  required(value: ReactiveValue<boolean>): this;
  rows(): number;
  rows(value: ReactiveValue<number>): this;
  selectionDirection(): "none" | "forward" | "backward";
  selectionDirection(value: ReactiveValue<"none" | "forward" | "backward">): this;
  selectionEnd(): number;
  selectionEnd(value: ReactiveValue<number>): this;
  selectionStart(): number;
  selectionStart(value: ReactiveValue<number>): this;
  textLength(): number;
  type(): string;
  validationMessage(): string;
  validity(): ValidityState;
  value(): string;
  value(value: ReactiveValue<string>): this;
  willValidate(): boolean;
  wrap(): string;
  wrap(value: ReactiveValue<string>): this;
}

interface HTMLTimeElementBuilder extends HTMLElementBuilder {
  dateTime(): string;
  dateTime(value: ReactiveValue<string>): this;
}

interface HTMLTitleElementBuilder extends HTMLElementBuilder {
  text(): string;
  text(value: ReactiveValue<string>): this;
}

interface HTMLTableRowElementBuilder extends HTMLElementBuilder {
  align(): string;
  align(value: ReactiveValue<string>): this;
  bgColor(): string;
  bgColor(value: ReactiveValue<string>): this;
  cells(): HTMLCollectionOf<HTMLTableCellElement>;
  ch(): string;
  ch(value: ReactiveValue<string>): this;
  chOff(): string;
  chOff(value: ReactiveValue<string>): this;
  rowIndex(): number;
  sectionRowIndex(): number;
  vAlign(): string;
  vAlign(value: ReactiveValue<string>): this;
}

interface HTMLTrackElementBuilder extends HTMLElementBuilder {
  default(): boolean;
  default(value: ReactiveValue<boolean>): this;
  kind(): string;
  kind(value: ReactiveValue<string>): this;
  label(): string;
  label(value: ReactiveValue<string>): this;
  readyState(): number;
  src(): string;
  src(value: ReactiveValue<string>): this;
  srclang(): string;
  srclang(value: ReactiveValue<string>): this;
  track(): TextTrack;
  NONE(): 0;
  LOADING(): 1;
  LOADED(): 2;
  ERROR(): 3;
}

interface HTMLUListElementBuilder extends HTMLElementBuilder {
  compact(): boolean;
  compact(value: ReactiveValue<boolean>): this;
  type(): string;
  type(value: ReactiveValue<string>): this;
}

interface HTMLVideoElementBuilder extends HTMLMediaElementBuilder {
  disablePictureInPicture(): boolean;
  disablePictureInPicture(value: ReactiveValue<boolean>): this;
  height(): number;
  height(value: ReactiveValue<number>): this;
  playsInline(): boolean;
  playsInline(value: ReactiveValue<boolean>): this;
  poster(): string;
  poster(value: ReactiveValue<string>): this;
  videoHeight(): number;
  videoWidth(): number;
  width(): number;
  width(value: ReactiveValue<number>): this;
}

interface SVGGraphicsElementBuilder {
  transform(): SVGAnimatedTransformList;
  className(): any;
  ownerSVGElement(): SVGSVGElement;
  viewportElement(): SVGElement;
  attributes(): NamedNodeMap;
  classList(): DOMTokenList;
  classList(value: ReactiveValue<string>): this;
  clientHeight(): number;
  clientLeft(): number;
  clientTop(): number;
  clientWidth(): number;
  currentCSSZoom(): number;
  id(): string;
  id(value: ReactiveValue<string>): this;
  innerHTML(): string;
  innerHTML(value: ReactiveValue<string>): this;
  localName(): string;
  namespaceURI(): string;
  outerHTML(): string;
  outerHTML(value: ReactiveValue<string>): this;
  ownerDocument(): Document;
  part(): DOMTokenList;
  part(value: ReactiveValue<string>): this;
  prefix(): string;
  scrollHeight(): number;
  scrollLeft(): number;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(): number;
  scrollTop(value: ReactiveValue<number>): this;
  scrollWidth(): number;
  shadowRoot(): ShadowRoot;
  slot(): string;
  slot(value: ReactiveValue<string>): this;
  tagName(): string;
  textContent(): string;
  textContent(value: ReactiveValue<string>): this;
  baseURI(): string;
  childNodes(): NodeListOf<ChildNode>;
  firstChild(): ChildNode;
  isConnected(): boolean;
  lastChild(): ChildNode;
  nextSibling(): ChildNode;
  nodeName(): string;
  nodeType(): number;
  nodeValue(): string;
  nodeValue(value: ReactiveValue<string>): this;
  parentElement(): HTMLElement;
  parentNode(): ParentNode;
  previousSibling(): ChildNode;
  ELEMENT_NODE(): 1;
  ATTRIBUTE_NODE(): 2;
  TEXT_NODE(): 3;
  CDATA_SECTION_NODE(): 4;
  ENTITY_REFERENCE_NODE(): 5;
  ENTITY_NODE(): 6;
  PROCESSING_INSTRUCTION_NODE(): 7;
  COMMENT_NODE(): 8;
  DOCUMENT_NODE(): 9;
  DOCUMENT_TYPE_NODE(): 10;
  DOCUMENT_FRAGMENT_NODE(): 11;
  NOTATION_NODE(): 12;
  DOCUMENT_POSITION_DISCONNECTED(): 1;
  DOCUMENT_POSITION_PRECEDING(): 2;
  DOCUMENT_POSITION_FOLLOWING(): 4;
  DOCUMENT_POSITION_CONTAINS(): 8;
  DOCUMENT_POSITION_CONTAINED_BY(): 16;
  DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC(): 32;
  ariaActiveDescendantElement(): Element;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(): string;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(): string;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(): string;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(): string;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(): string;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(): string;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(): string;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(): string;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(): string;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(): string;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(): readonly Element[];
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(): string;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(): readonly Element[];
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(): string;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(): readonly Element[];
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(): string;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(): readonly Element[];
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(): string;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(): readonly Element[];
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(): string;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(): string;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(): string;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(): string;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(): string;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(): readonly Element[];
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(): string;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(): string;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(): string;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(): string;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(): string;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(): string;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(): readonly Element[];
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(): string;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(): string;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(): string;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(): string;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(): string;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(): string;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(): string;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(): string;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(): string;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(): string;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(): string;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(): string;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(): string;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(): string;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(): string;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(): string;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(): string;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(): string;
  ariaValueText(value: ReactiveValue<string>): this;
  role(): string;
  role(value: ReactiveValue<string>): this;
  nextElementSibling(): Element;
  previousElementSibling(): Element;
  childElementCount(): number;
  children(): HTMLCollection;
  firstElementChild(): Element;
  lastElementChild(): Element;
  assignedSlot(): HTMLSlotElement;
  attributeStyleMap(): StylePropertyMap;
  style(): CSSStyleDeclaration;
  style(value: ReactiveValue<string>): this;
  autofocus(): boolean;
  autofocus(value: ReactiveValue<boolean>): this;
  dataset(): DOMStringMap;
  nonce(): string;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(): number;
  tabIndex(value: ReactiveValue<number>): this;
  requiredExtensions(): SVGStringList;
  systemLanguage(): SVGStringList;
}

interface SVGURIReferenceBuilder {
  href(): SVGAnimatedString;
}

interface SVGAElementBuilder extends SVGGraphicsElementBuilder, SVGURIReferenceBuilder {
  rel(): string;
  rel(value: ReactiveValue<string>): this;
  relList(): DOMTokenList;
  relList(value: ReactiveValue<string>): this;
  target(): SVGAnimatedString;
}

interface SVGElementBuilder {
  className(): any;
  ownerSVGElement(): SVGSVGElement;
  viewportElement(): SVGElement;
  attributes(): NamedNodeMap;
  classList(): DOMTokenList;
  classList(value: ReactiveValue<string>): this;
  clientHeight(): number;
  clientLeft(): number;
  clientTop(): number;
  clientWidth(): number;
  currentCSSZoom(): number;
  id(): string;
  id(value: ReactiveValue<string>): this;
  innerHTML(): string;
  innerHTML(value: ReactiveValue<string>): this;
  localName(): string;
  namespaceURI(): string;
  outerHTML(): string;
  outerHTML(value: ReactiveValue<string>): this;
  ownerDocument(): Document;
  part(): DOMTokenList;
  part(value: ReactiveValue<string>): this;
  prefix(): string;
  scrollHeight(): number;
  scrollLeft(): number;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(): number;
  scrollTop(value: ReactiveValue<number>): this;
  scrollWidth(): number;
  shadowRoot(): ShadowRoot;
  slot(): string;
  slot(value: ReactiveValue<string>): this;
  tagName(): string;
  textContent(): string;
  textContent(value: ReactiveValue<string>): this;
  baseURI(): string;
  childNodes(): NodeListOf<ChildNode>;
  firstChild(): ChildNode;
  isConnected(): boolean;
  lastChild(): ChildNode;
  nextSibling(): ChildNode;
  nodeName(): string;
  nodeType(): number;
  nodeValue(): string;
  nodeValue(value: ReactiveValue<string>): this;
  parentElement(): HTMLElement;
  parentNode(): ParentNode;
  previousSibling(): ChildNode;
  ELEMENT_NODE(): 1;
  ATTRIBUTE_NODE(): 2;
  TEXT_NODE(): 3;
  CDATA_SECTION_NODE(): 4;
  ENTITY_REFERENCE_NODE(): 5;
  ENTITY_NODE(): 6;
  PROCESSING_INSTRUCTION_NODE(): 7;
  COMMENT_NODE(): 8;
  DOCUMENT_NODE(): 9;
  DOCUMENT_TYPE_NODE(): 10;
  DOCUMENT_FRAGMENT_NODE(): 11;
  NOTATION_NODE(): 12;
  DOCUMENT_POSITION_DISCONNECTED(): 1;
  DOCUMENT_POSITION_PRECEDING(): 2;
  DOCUMENT_POSITION_FOLLOWING(): 4;
  DOCUMENT_POSITION_CONTAINS(): 8;
  DOCUMENT_POSITION_CONTAINED_BY(): 16;
  DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC(): 32;
  ariaActiveDescendantElement(): Element;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(): string;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(): string;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(): string;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(): string;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(): string;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(): string;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(): string;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(): string;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(): string;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(): string;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(): readonly Element[];
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(): string;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(): readonly Element[];
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(): string;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(): readonly Element[];
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(): string;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(): readonly Element[];
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(): string;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(): readonly Element[];
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(): string;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(): string;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(): string;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(): string;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(): string;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(): readonly Element[];
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(): string;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(): string;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(): string;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(): string;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(): string;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(): string;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(): readonly Element[];
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(): string;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(): string;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(): string;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(): string;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(): string;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(): string;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(): string;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(): string;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(): string;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(): string;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(): string;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(): string;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(): string;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(): string;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(): string;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(): string;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(): string;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(): string;
  ariaValueText(value: ReactiveValue<string>): this;
  role(): string;
  role(value: ReactiveValue<string>): this;
  nextElementSibling(): Element;
  previousElementSibling(): Element;
  childElementCount(): number;
  children(): HTMLCollection;
  firstElementChild(): Element;
  lastElementChild(): Element;
  assignedSlot(): HTMLSlotElement;
  attributeStyleMap(): StylePropertyMap;
  style(): CSSStyleDeclaration;
  style(value: ReactiveValue<string>): this;
  autofocus(): boolean;
  autofocus(value: ReactiveValue<boolean>): this;
  dataset(): DOMStringMap;
  nonce(): string;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(): number;
  tabIndex(value: ReactiveValue<number>): this;
}

interface SVGTestsBuilder {
  requiredExtensions(): SVGStringList;
  systemLanguage(): SVGStringList;
}

interface SVGAnimationElementBuilder extends SVGElementBuilder, SVGTestsBuilder {
  targetElement(): SVGElement;
}

interface SVGAnimateElementBuilder extends SVGAnimationElementBuilder {
}

interface SVGAnimateMotionElementBuilder extends SVGAnimationElementBuilder {
}

interface SVGAnimateTransformElementBuilder extends SVGAnimationElementBuilder {
}

interface SVGGeometryElementBuilder extends SVGGraphicsElementBuilder {
  pathLength(): SVGAnimatedNumber;
}

interface SVGCircleElementBuilder extends SVGGeometryElementBuilder {
  cx(): SVGAnimatedLength;
  cy(): SVGAnimatedLength;
  r(): SVGAnimatedLength;
}

interface SVGClipPathElementBuilder extends SVGElementBuilder {
  clipPathUnits(): SVGAnimatedEnumeration;
  transform(): SVGAnimatedTransformList;
}

interface SVGDefsElementBuilder extends SVGGraphicsElementBuilder {
}

interface SVGDescElementBuilder extends SVGElementBuilder {
}

interface SVGEllipseElementBuilder extends SVGGeometryElementBuilder {
  cx(): SVGAnimatedLength;
  cy(): SVGAnimatedLength;
  rx(): SVGAnimatedLength;
  ry(): SVGAnimatedLength;
}

interface SVGFilterPrimitiveStandardAttributesBuilder {
  height(): SVGAnimatedLength;
  result(): SVGAnimatedString;
  width(): SVGAnimatedLength;
  x(): SVGAnimatedLength;
  y(): SVGAnimatedLength;
}

interface SVGFEBlendElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
  in1(): SVGAnimatedString;
  in2(): SVGAnimatedString;
  mode(): SVGAnimatedEnumeration;
  SVG_FEBLEND_MODE_UNKNOWN(): 0;
  SVG_FEBLEND_MODE_NORMAL(): 1;
  SVG_FEBLEND_MODE_MULTIPLY(): 2;
  SVG_FEBLEND_MODE_SCREEN(): 3;
  SVG_FEBLEND_MODE_DARKEN(): 4;
  SVG_FEBLEND_MODE_LIGHTEN(): 5;
  SVG_FEBLEND_MODE_OVERLAY(): 6;
  SVG_FEBLEND_MODE_COLOR_DODGE(): 7;
  SVG_FEBLEND_MODE_COLOR_BURN(): 8;
  SVG_FEBLEND_MODE_HARD_LIGHT(): 9;
  SVG_FEBLEND_MODE_SOFT_LIGHT(): 10;
  SVG_FEBLEND_MODE_DIFFERENCE(): 11;
  SVG_FEBLEND_MODE_EXCLUSION(): 12;
  SVG_FEBLEND_MODE_HUE(): 13;
  SVG_FEBLEND_MODE_SATURATION(): 14;
  SVG_FEBLEND_MODE_COLOR(): 15;
  SVG_FEBLEND_MODE_LUMINOSITY(): 16;
}

interface SVGFEColorMatrixElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
  in1(): SVGAnimatedString;
  type(): SVGAnimatedEnumeration;
  values(): SVGAnimatedNumberList;
  SVG_FECOLORMATRIX_TYPE_UNKNOWN(): 0;
  SVG_FECOLORMATRIX_TYPE_MATRIX(): 1;
  SVG_FECOLORMATRIX_TYPE_SATURATE(): 2;
  SVG_FECOLORMATRIX_TYPE_HUEROTATE(): 3;
  SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA(): 4;
}

interface SVGFEComponentTransferElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
  in1(): SVGAnimatedString;
}

interface SVGFECompositeElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
  in1(): SVGAnimatedString;
  in2(): SVGAnimatedString;
  k1(): SVGAnimatedNumber;
  k2(): SVGAnimatedNumber;
  k3(): SVGAnimatedNumber;
  k4(): SVGAnimatedNumber;
  operator(): SVGAnimatedEnumeration;
  SVG_FECOMPOSITE_OPERATOR_UNKNOWN(): 0;
  SVG_FECOMPOSITE_OPERATOR_OVER(): 1;
  SVG_FECOMPOSITE_OPERATOR_IN(): 2;
  SVG_FECOMPOSITE_OPERATOR_OUT(): 3;
  SVG_FECOMPOSITE_OPERATOR_ATOP(): 4;
  SVG_FECOMPOSITE_OPERATOR_XOR(): 5;
  SVG_FECOMPOSITE_OPERATOR_ARITHMETIC(): 6;
}

interface SVGFEConvolveMatrixElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
  bias(): SVGAnimatedNumber;
  divisor(): SVGAnimatedNumber;
  edgeMode(): SVGAnimatedEnumeration;
  in1(): SVGAnimatedString;
  kernelMatrix(): SVGAnimatedNumberList;
  kernelUnitLengthX(): SVGAnimatedNumber;
  kernelUnitLengthY(): SVGAnimatedNumber;
  orderX(): SVGAnimatedInteger;
  orderY(): SVGAnimatedInteger;
  preserveAlpha(): SVGAnimatedBoolean;
  targetX(): SVGAnimatedInteger;
  targetY(): SVGAnimatedInteger;
  SVG_EDGEMODE_UNKNOWN(): 0;
  SVG_EDGEMODE_DUPLICATE(): 1;
  SVG_EDGEMODE_WRAP(): 2;
  SVG_EDGEMODE_NONE(): 3;
}

interface SVGFEDiffuseLightingElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
  diffuseConstant(): SVGAnimatedNumber;
  in1(): SVGAnimatedString;
  kernelUnitLengthX(): SVGAnimatedNumber;
  kernelUnitLengthY(): SVGAnimatedNumber;
  surfaceScale(): SVGAnimatedNumber;
}

interface SVGFEDisplacementMapElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
  in1(): SVGAnimatedString;
  in2(): SVGAnimatedString;
  scale(): SVGAnimatedNumber;
  xChannelSelector(): SVGAnimatedEnumeration;
  yChannelSelector(): SVGAnimatedEnumeration;
  SVG_CHANNEL_UNKNOWN(): 0;
  SVG_CHANNEL_R(): 1;
  SVG_CHANNEL_G(): 2;
  SVG_CHANNEL_B(): 3;
  SVG_CHANNEL_A(): 4;
}

interface SVGFEDistantLightElementBuilder extends SVGElementBuilder {
  azimuth(): SVGAnimatedNumber;
  elevation(): SVGAnimatedNumber;
}

interface SVGFEDropShadowElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
  dx(): SVGAnimatedNumber;
  dy(): SVGAnimatedNumber;
  in1(): SVGAnimatedString;
  stdDeviationX(): SVGAnimatedNumber;
  stdDeviationY(): SVGAnimatedNumber;
}

interface SVGFEFloodElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
}

interface SVGComponentTransferFunctionElementBuilder extends SVGElementBuilder {
  amplitude(): SVGAnimatedNumber;
  exponent(): SVGAnimatedNumber;
  intercept(): SVGAnimatedNumber;
  offset(): SVGAnimatedNumber;
  slope(): SVGAnimatedNumber;
  tableValues(): SVGAnimatedNumberList;
  type(): SVGAnimatedEnumeration;
  SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN(): 0;
  SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY(): 1;
  SVG_FECOMPONENTTRANSFER_TYPE_TABLE(): 2;
  SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE(): 3;
  SVG_FECOMPONENTTRANSFER_TYPE_LINEAR(): 4;
  SVG_FECOMPONENTTRANSFER_TYPE_GAMMA(): 5;
}

interface SVGFEFuncAElementBuilder extends SVGComponentTransferFunctionElementBuilder {
}

interface SVGFEFuncBElementBuilder extends SVGComponentTransferFunctionElementBuilder {
}

interface SVGFEFuncGElementBuilder extends SVGComponentTransferFunctionElementBuilder {
}

interface SVGFEFuncRElementBuilder extends SVGComponentTransferFunctionElementBuilder {
}

interface SVGFEGaussianBlurElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
  in1(): SVGAnimatedString;
  stdDeviationX(): SVGAnimatedNumber;
  stdDeviationY(): SVGAnimatedNumber;
}

interface SVGFEImageElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder, SVGURIReferenceBuilder {
  preserveAspectRatio(): SVGAnimatedPreserveAspectRatio;
}

interface SVGFEMergeElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
}

interface SVGFEMergeNodeElementBuilder extends SVGElementBuilder {
  in1(): SVGAnimatedString;
}

interface SVGFEMorphologyElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
  in1(): SVGAnimatedString;
  operator(): SVGAnimatedEnumeration;
  radiusX(): SVGAnimatedNumber;
  radiusY(): SVGAnimatedNumber;
  SVG_MORPHOLOGY_OPERATOR_UNKNOWN(): 0;
  SVG_MORPHOLOGY_OPERATOR_ERODE(): 1;
  SVG_MORPHOLOGY_OPERATOR_DILATE(): 2;
}

interface SVGFEOffsetElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
  dx(): SVGAnimatedNumber;
  dy(): SVGAnimatedNumber;
  in1(): SVGAnimatedString;
}

interface SVGFEPointLightElementBuilder extends SVGElementBuilder {
  x(): SVGAnimatedNumber;
  y(): SVGAnimatedNumber;
  z(): SVGAnimatedNumber;
}

interface SVGFESpecularLightingElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
  in1(): SVGAnimatedString;
  kernelUnitLengthX(): SVGAnimatedNumber;
  kernelUnitLengthY(): SVGAnimatedNumber;
  specularConstant(): SVGAnimatedNumber;
  specularExponent(): SVGAnimatedNumber;
  surfaceScale(): SVGAnimatedNumber;
}

interface SVGFESpotLightElementBuilder extends SVGElementBuilder {
  limitingConeAngle(): SVGAnimatedNumber;
  pointsAtX(): SVGAnimatedNumber;
  pointsAtY(): SVGAnimatedNumber;
  pointsAtZ(): SVGAnimatedNumber;
  specularExponent(): SVGAnimatedNumber;
  x(): SVGAnimatedNumber;
  y(): SVGAnimatedNumber;
  z(): SVGAnimatedNumber;
}

interface SVGFETileElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
  in1(): SVGAnimatedString;
}

interface SVGFETurbulenceElementBuilder extends SVGElementBuilder, SVGFilterPrimitiveStandardAttributesBuilder {
  baseFrequencyX(): SVGAnimatedNumber;
  baseFrequencyY(): SVGAnimatedNumber;
  numOctaves(): SVGAnimatedInteger;
  seed(): SVGAnimatedNumber;
  stitchTiles(): SVGAnimatedEnumeration;
  type(): SVGAnimatedEnumeration;
  SVG_TURBULENCE_TYPE_UNKNOWN(): 0;
  SVG_TURBULENCE_TYPE_FRACTALNOISE(): 1;
  SVG_TURBULENCE_TYPE_TURBULENCE(): 2;
  SVG_STITCHTYPE_UNKNOWN(): 0;
  SVG_STITCHTYPE_STITCH(): 1;
  SVG_STITCHTYPE_NOSTITCH(): 2;
}

interface SVGFilterElementBuilder extends SVGElementBuilder, SVGURIReferenceBuilder {
  filterUnits(): SVGAnimatedEnumeration;
  height(): SVGAnimatedLength;
  primitiveUnits(): SVGAnimatedEnumeration;
  width(): SVGAnimatedLength;
  x(): SVGAnimatedLength;
  y(): SVGAnimatedLength;
}

interface SVGForeignObjectElementBuilder extends SVGGraphicsElementBuilder {
  height(): SVGAnimatedLength;
  width(): SVGAnimatedLength;
  x(): SVGAnimatedLength;
  y(): SVGAnimatedLength;
}

interface SVGGElementBuilder extends SVGGraphicsElementBuilder {
}

interface SVGImageElementBuilder extends SVGGraphicsElementBuilder, SVGURIReferenceBuilder {
  crossOrigin(): string;
  crossOrigin(value: ReactiveValue<string>): this;
  height(): SVGAnimatedLength;
  preserveAspectRatio(): SVGAnimatedPreserveAspectRatio;
  width(): SVGAnimatedLength;
  x(): SVGAnimatedLength;
  y(): SVGAnimatedLength;
}

interface SVGLineElementBuilder extends SVGGeometryElementBuilder {
  x1(): SVGAnimatedLength;
  x2(): SVGAnimatedLength;
  y1(): SVGAnimatedLength;
  y2(): SVGAnimatedLength;
}

interface SVGGradientElementBuilder extends SVGElementBuilder, SVGURIReferenceBuilder {
  gradientTransform(): SVGAnimatedTransformList;
  gradientUnits(): SVGAnimatedEnumeration;
  spreadMethod(): SVGAnimatedEnumeration;
  SVG_SPREADMETHOD_UNKNOWN(): 0;
  SVG_SPREADMETHOD_PAD(): 1;
  SVG_SPREADMETHOD_REFLECT(): 2;
  SVG_SPREADMETHOD_REPEAT(): 3;
}

interface SVGLinearGradientElementBuilder extends SVGGradientElementBuilder {
  x1(): SVGAnimatedLength;
  x2(): SVGAnimatedLength;
  y1(): SVGAnimatedLength;
  y2(): SVGAnimatedLength;
}

interface SVGFitToViewBoxBuilder {
  preserveAspectRatio(): SVGAnimatedPreserveAspectRatio;
  viewBox(): SVGAnimatedRect;
}

interface SVGMarkerElementBuilder extends SVGElementBuilder, SVGFitToViewBoxBuilder {
  markerHeight(): SVGAnimatedLength;
  markerUnits(): SVGAnimatedEnumeration;
  markerWidth(): SVGAnimatedLength;
  orientAngle(): SVGAnimatedAngle;
  orientType(): SVGAnimatedEnumeration;
  refX(): SVGAnimatedLength;
  refY(): SVGAnimatedLength;
  SVG_MARKERUNITS_UNKNOWN(): 0;
  SVG_MARKERUNITS_USERSPACEONUSE(): 1;
  SVG_MARKERUNITS_STROKEWIDTH(): 2;
  SVG_MARKER_ORIENT_UNKNOWN(): 0;
  SVG_MARKER_ORIENT_AUTO(): 1;
  SVG_MARKER_ORIENT_ANGLE(): 2;
}

interface SVGMaskElementBuilder extends SVGElementBuilder {
  height(): SVGAnimatedLength;
  maskContentUnits(): SVGAnimatedEnumeration;
  maskUnits(): SVGAnimatedEnumeration;
  width(): SVGAnimatedLength;
  x(): SVGAnimatedLength;
  y(): SVGAnimatedLength;
}

interface SVGMetadataElementBuilder extends SVGElementBuilder {
}

interface SVGMPathElementBuilder extends SVGElementBuilder, SVGURIReferenceBuilder {
}

interface SVGPathElementBuilder extends SVGGeometryElementBuilder {
}

interface SVGPatternElementBuilder extends SVGElementBuilder, SVGFitToViewBoxBuilder, SVGURIReferenceBuilder {
  height(): SVGAnimatedLength;
  patternContentUnits(): SVGAnimatedEnumeration;
  patternTransform(): SVGAnimatedTransformList;
  patternUnits(): SVGAnimatedEnumeration;
  width(): SVGAnimatedLength;
  x(): SVGAnimatedLength;
  y(): SVGAnimatedLength;
}

interface SVGAnimatedPointsBuilder {
  animatedPoints(): SVGPointList;
  points(): SVGPointList;
}

interface SVGPolygonElementBuilder extends SVGGeometryElementBuilder, SVGAnimatedPointsBuilder {
}

interface SVGPolylineElementBuilder extends SVGGeometryElementBuilder, SVGAnimatedPointsBuilder {
}

interface SVGRadialGradientElementBuilder extends SVGGradientElementBuilder {
  cx(): SVGAnimatedLength;
  cy(): SVGAnimatedLength;
  fr(): SVGAnimatedLength;
  fx(): SVGAnimatedLength;
  fy(): SVGAnimatedLength;
  r(): SVGAnimatedLength;
}

interface SVGRectElementBuilder extends SVGGeometryElementBuilder {
  height(): SVGAnimatedLength;
  rx(): SVGAnimatedLength;
  ry(): SVGAnimatedLength;
  width(): SVGAnimatedLength;
  x(): SVGAnimatedLength;
  y(): SVGAnimatedLength;
}

interface SVGScriptElementBuilder extends SVGElementBuilder, SVGURIReferenceBuilder {
  type(): string;
  type(value: ReactiveValue<string>): this;
}

interface SVGSetElementBuilder extends SVGAnimationElementBuilder {
}

interface SVGStopElementBuilder extends SVGElementBuilder {
  offset(): SVGAnimatedNumber;
}

interface SVGStyleElementBuilder extends SVGElementBuilder, LinkStyleBuilder {
  disabled(): boolean;
  disabled(value: ReactiveValue<boolean>): this;
  media(): string;
  media(value: ReactiveValue<string>): this;
  title(): string;
  title(value: ReactiveValue<string>): this;
  type(): string;
  type(value: ReactiveValue<string>): this;
}

interface SVGSVGElementBuilder extends SVGGraphicsElementBuilder, SVGFitToViewBoxBuilder, WindowEventHandlersBuilder {
  currentScale(): number;
  currentScale(value: ReactiveValue<number>): this;
  currentTranslate(): DOMPointReadOnly;
  height(): SVGAnimatedLength;
  width(): SVGAnimatedLength;
  x(): SVGAnimatedLength;
  y(): SVGAnimatedLength;
}

interface SVGSwitchElementBuilder extends SVGGraphicsElementBuilder {
}

interface SVGSymbolElementBuilder extends SVGElementBuilder, SVGFitToViewBoxBuilder {
}

interface SVGTextContentElementBuilder extends SVGGraphicsElementBuilder {
  lengthAdjust(): SVGAnimatedEnumeration;
  textLength(): SVGAnimatedLength;
  LENGTHADJUST_UNKNOWN(): 0;
  LENGTHADJUST_SPACING(): 1;
  LENGTHADJUST_SPACINGANDGLYPHS(): 2;
}

interface SVGTextPositioningElementBuilder extends SVGTextContentElementBuilder {
  dx(): SVGAnimatedLengthList;
  dy(): SVGAnimatedLengthList;
  rotate(): SVGAnimatedNumberList;
  x(): SVGAnimatedLengthList;
  y(): SVGAnimatedLengthList;
}

interface SVGTextElementBuilder extends SVGTextPositioningElementBuilder {
}

interface SVGTextPathElementBuilder extends SVGTextContentElementBuilder, SVGURIReferenceBuilder {
  method(): SVGAnimatedEnumeration;
  spacing(): SVGAnimatedEnumeration;
  startOffset(): SVGAnimatedLength;
  TEXTPATH_METHODTYPE_UNKNOWN(): 0;
  TEXTPATH_METHODTYPE_ALIGN(): 1;
  TEXTPATH_METHODTYPE_STRETCH(): 2;
  TEXTPATH_SPACINGTYPE_UNKNOWN(): 0;
  TEXTPATH_SPACINGTYPE_AUTO(): 1;
  TEXTPATH_SPACINGTYPE_EXACT(): 2;
}

interface SVGTitleElementBuilder extends SVGElementBuilder {
}

interface SVGTSpanElementBuilder extends SVGTextPositioningElementBuilder {
}

interface SVGUseElementBuilder extends SVGGraphicsElementBuilder, SVGURIReferenceBuilder {
  height(): SVGAnimatedLength;
  width(): SVGAnimatedLength;
  x(): SVGAnimatedLength;
  y(): SVGAnimatedLength;
}

interface SVGViewElementBuilder extends SVGElementBuilder, SVGFitToViewBoxBuilder {
}

interface MathMLElementBuilder {
  attributes(): NamedNodeMap;
  classList(): DOMTokenList;
  classList(value: ReactiveValue<string>): this;
  className(): string;
  className(value: ReactiveValue<string>): this;
  clientHeight(): number;
  clientLeft(): number;
  clientTop(): number;
  clientWidth(): number;
  currentCSSZoom(): number;
  id(): string;
  id(value: ReactiveValue<string>): this;
  innerHTML(): string;
  innerHTML(value: ReactiveValue<string>): this;
  localName(): string;
  namespaceURI(): string;
  outerHTML(): string;
  outerHTML(value: ReactiveValue<string>): this;
  ownerDocument(): Document;
  part(): DOMTokenList;
  part(value: ReactiveValue<string>): this;
  prefix(): string;
  scrollHeight(): number;
  scrollLeft(): number;
  scrollLeft(value: ReactiveValue<number>): this;
  scrollTop(): number;
  scrollTop(value: ReactiveValue<number>): this;
  scrollWidth(): number;
  shadowRoot(): ShadowRoot;
  slot(): string;
  slot(value: ReactiveValue<string>): this;
  tagName(): string;
  textContent(): string;
  textContent(value: ReactiveValue<string>): this;
  baseURI(): string;
  childNodes(): NodeListOf<ChildNode>;
  firstChild(): ChildNode;
  isConnected(): boolean;
  lastChild(): ChildNode;
  nextSibling(): ChildNode;
  nodeName(): string;
  nodeType(): number;
  nodeValue(): string;
  nodeValue(value: ReactiveValue<string>): this;
  parentElement(): HTMLElement;
  parentNode(): ParentNode;
  previousSibling(): ChildNode;
  ELEMENT_NODE(): 1;
  ATTRIBUTE_NODE(): 2;
  TEXT_NODE(): 3;
  CDATA_SECTION_NODE(): 4;
  ENTITY_REFERENCE_NODE(): 5;
  ENTITY_NODE(): 6;
  PROCESSING_INSTRUCTION_NODE(): 7;
  COMMENT_NODE(): 8;
  DOCUMENT_NODE(): 9;
  DOCUMENT_TYPE_NODE(): 10;
  DOCUMENT_FRAGMENT_NODE(): 11;
  NOTATION_NODE(): 12;
  DOCUMENT_POSITION_DISCONNECTED(): 1;
  DOCUMENT_POSITION_PRECEDING(): 2;
  DOCUMENT_POSITION_FOLLOWING(): 4;
  DOCUMENT_POSITION_CONTAINS(): 8;
  DOCUMENT_POSITION_CONTAINED_BY(): 16;
  DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC(): 32;
  ariaActiveDescendantElement(): Element;
  ariaActiveDescendantElement(value: ReactiveValue<Element>): this;
  ariaAtomic(): string;
  ariaAtomic(value: ReactiveValue<string>): this;
  ariaAutoComplete(): string;
  ariaAutoComplete(value: ReactiveValue<string>): this;
  ariaBrailleLabel(): string;
  ariaBrailleLabel(value: ReactiveValue<string>): this;
  ariaBrailleRoleDescription(): string;
  ariaBrailleRoleDescription(value: ReactiveValue<string>): this;
  ariaBusy(): string;
  ariaBusy(value: ReactiveValue<string>): this;
  ariaChecked(): string;
  ariaChecked(value: ReactiveValue<string>): this;
  ariaColCount(): string;
  ariaColCount(value: ReactiveValue<string>): this;
  ariaColIndex(): string;
  ariaColIndex(value: ReactiveValue<string>): this;
  ariaColIndexText(): string;
  ariaColIndexText(value: ReactiveValue<string>): this;
  ariaColSpan(): string;
  ariaColSpan(value: ReactiveValue<string>): this;
  ariaControlsElements(): readonly Element[];
  ariaControlsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaCurrent(): string;
  ariaCurrent(value: ReactiveValue<string>): this;
  ariaDescribedByElements(): readonly Element[];
  ariaDescribedByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDescription(): string;
  ariaDescription(value: ReactiveValue<string>): this;
  ariaDetailsElements(): readonly Element[];
  ariaDetailsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaDisabled(): string;
  ariaDisabled(value: ReactiveValue<string>): this;
  ariaErrorMessageElements(): readonly Element[];
  ariaErrorMessageElements(value: ReactiveValue<readonly Element[]>): this;
  ariaExpanded(): string;
  ariaExpanded(value: ReactiveValue<string>): this;
  ariaFlowToElements(): readonly Element[];
  ariaFlowToElements(value: ReactiveValue<readonly Element[]>): this;
  ariaHasPopup(): string;
  ariaHasPopup(value: ReactiveValue<string>): this;
  ariaHidden(): string;
  ariaHidden(value: ReactiveValue<string>): this;
  ariaInvalid(): string;
  ariaInvalid(value: ReactiveValue<string>): this;
  ariaKeyShortcuts(): string;
  ariaKeyShortcuts(value: ReactiveValue<string>): this;
  ariaLabel(): string;
  ariaLabel(value: ReactiveValue<string>): this;
  ariaLabelledByElements(): readonly Element[];
  ariaLabelledByElements(value: ReactiveValue<readonly Element[]>): this;
  ariaLevel(): string;
  ariaLevel(value: ReactiveValue<string>): this;
  ariaLive(): string;
  ariaLive(value: ReactiveValue<string>): this;
  ariaModal(): string;
  ariaModal(value: ReactiveValue<string>): this;
  ariaMultiLine(): string;
  ariaMultiLine(value: ReactiveValue<string>): this;
  ariaMultiSelectable(): string;
  ariaMultiSelectable(value: ReactiveValue<string>): this;
  ariaOrientation(): string;
  ariaOrientation(value: ReactiveValue<string>): this;
  ariaOwnsElements(): readonly Element[];
  ariaOwnsElements(value: ReactiveValue<readonly Element[]>): this;
  ariaPlaceholder(): string;
  ariaPlaceholder(value: ReactiveValue<string>): this;
  ariaPosInSet(): string;
  ariaPosInSet(value: ReactiveValue<string>): this;
  ariaPressed(): string;
  ariaPressed(value: ReactiveValue<string>): this;
  ariaReadOnly(): string;
  ariaReadOnly(value: ReactiveValue<string>): this;
  ariaRelevant(): string;
  ariaRelevant(value: ReactiveValue<string>): this;
  ariaRequired(): string;
  ariaRequired(value: ReactiveValue<string>): this;
  ariaRoleDescription(): string;
  ariaRoleDescription(value: ReactiveValue<string>): this;
  ariaRowCount(): string;
  ariaRowCount(value: ReactiveValue<string>): this;
  ariaRowIndex(): string;
  ariaRowIndex(value: ReactiveValue<string>): this;
  ariaRowIndexText(): string;
  ariaRowIndexText(value: ReactiveValue<string>): this;
  ariaRowSpan(): string;
  ariaRowSpan(value: ReactiveValue<string>): this;
  ariaSelected(): string;
  ariaSelected(value: ReactiveValue<string>): this;
  ariaSetSize(): string;
  ariaSetSize(value: ReactiveValue<string>): this;
  ariaSort(): string;
  ariaSort(value: ReactiveValue<string>): this;
  ariaValueMax(): string;
  ariaValueMax(value: ReactiveValue<string>): this;
  ariaValueMin(): string;
  ariaValueMin(value: ReactiveValue<string>): this;
  ariaValueNow(): string;
  ariaValueNow(value: ReactiveValue<string>): this;
  ariaValueText(): string;
  ariaValueText(value: ReactiveValue<string>): this;
  role(): string;
  role(value: ReactiveValue<string>): this;
  nextElementSibling(): Element;
  previousElementSibling(): Element;
  childElementCount(): number;
  children(): HTMLCollection;
  firstElementChild(): Element;
  lastElementChild(): Element;
  assignedSlot(): HTMLSlotElement;
  attributeStyleMap(): StylePropertyMap;
  style(): CSSStyleDeclaration;
  style(value: ReactiveValue<string>): this;
  autofocus(): boolean;
  autofocus(value: ReactiveValue<boolean>): this;
  dataset(): DOMStringMap;
  nonce(): string;
  nonce(value: ReactiveValue<string>): this;
  tabIndex(): number;
  tabIndex(value: ReactiveValue<number>): this;
}

