# ComboBox

Combobox is a complex component used to render selection lists that can be searched, filtered, and mutli-selected.

### Attributes

- `label` : String -
- `options` : Array -
- `custom-options` : Array -
- `placeholder` : String -
- `is-multi` : Boolean -
- `disabled` : Boolean -
- `ordered` : Boolean -
- `expanded` : Boolean -
- `compact` : Boolean -
- `no-clear-icon` : Boolean -
- `select-when-in-focus` : Boolean -
- `selectedOptions` : Array -
- `visible-option` : Number -
- `option-id` : String -
- `option-value` : String -
- `with-custom-content` : Boolean -
- `searchable` : Boolean -
- `shape` : String -
- `value` : Array -
- `input-value` : String -
- `allow-custom-value` : Boolean -
- `autofocus` : Boolean -
- `no-results-i18n` : String -
- `no-options-i18n` : String -
- `search-trim-space` : Boolean -
- `invalid` : Boolean -
- `invalid-text-i18n` : String -
- `aria-label` : String -
- `clear-aria-label` : String -
- `arrow-aria-label` : String -

### Styling

The wrapping container of the button can be reached via CSS by using the `::part()` selector, using one of the available part selectors below for targeted styling access.
`combobox`
`group`
`multiwrap`
`multiwrap`
`combobox-options`
`combobox-option`
`label`
`message`

```CSS
md-combobox::part(group) {
  font-size: 14px;
  max-width: 600px;
  width: 100px;
}
```

### Slots

#### Named Slots

Combobox has a named slot that is dynamically generated based upon the option text content when the `isMulti` state is active