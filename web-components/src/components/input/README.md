# Input

The Input web component provides a flexible interface for HTML Inputs and Text Areas that can be used as normal HTML elements.

### Attributes

- `ariaDescribedBy` : String - pass-through to shadow DOM
- `ariaInvalid` : String - pass-through to shadow DOM
- `ariaLabel` : String - pass-through to shadow DOM
- `autofocus` : Boolean - pass-through to shadow DOM
- `auxiliaryContentPosition` : String - toggle style class for postioning
- `clear` : Boolean - toggle clear input button
- `clearAriaLabel` : String - aria label for the clear button
- `compact` : Boolean - toggle compact style
- `containerSize` : String - set input container size
- `disabled` : Boolean - toggle disabled state
- `id` : String
- `inputSize` : String - set input size
- `isFilled` : Boolean - true if input is filled
- `isLoading` : Boolean - toggle loading state
- `label` : String
- `helpText` : String
- `hide-message` : Boolean - toggle help message visibility
- `htmlId` : String - pass through ID to shadow DOM
- `messageArr` : Array - list of help messages to render when needed
- `min` : Number - pass through ID to shadow DOM
- `max` : Number - pass through ID to shadow DOM
- `maxLength` : Number - pass through ID to shadow DOM
- `multi` : Boolean - toggle multi line styling
- `multiline` : Boolean - change input to Text Area
- `name` : String - pass-through to shadow DOM
- `nestedLevel` : Number - declare level for nesting inputs pattern
- `placeholder` : String - pass-through to shadow DOM
- `readOnly` : Boolean - pass-through to shadow DOM
- `required` : Boolean - pass-through to shadow DOM
- `searchable` : Boolean - toggle searchable style
- `secondaryLabel` : String - text for a secondary label text
- `select-when-in-focus` : Boolean - set default focus
- `shape` : String - default rectangle or `pill` shaped
- `type` : String - pass-through to shadow DOM
- `value` : String - pass-through to shadow DOM

### Styling

The wrapping container of the button can be reached via CSS by using the `::part()` selector.
"input"
"message"
For example, in your application's stylesheet you can say:

```CSS
md-input::part(input) {
  background-color: red;
  font-size: 18px;
}
```

### Slots

#### Named Slots

Use named slots to target child element content to the correct area:

`slot="input-section"`
`slot="input-section-right"`

```html
<md-input
  label="Search Pill"
  htmlId="inputSearchClearPill"
  containerSize="small-12"
  placeholder="Enter Text"
  shape="pill"
  searchable
  autofocus
></md-input>
```
