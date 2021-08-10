# Checkbox

### Attributes

- `autofocus` : Boolean - toggles checkmark to get default focus
- `checked` : Boolean - toggles checked status
- `indeterminate` : Boolean - toggles indeterminate style
- `disabled` : Boolean - toggles disabled state
- `label` : String - sets the checkbos's label text

### Slots

#### Unnamed Slots

The Unnamed `<slot>` will render any content you pass between the `<md-checkbox></md-checkbox>` tags.

```html
<md-checkbox>
  <slot>Some Content</span>
</md-checkbox>
```