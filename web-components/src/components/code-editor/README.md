# Code Editor

### Attributes

- `copyLocalization` : String
- `copiedLocalization` : String
- `method` : String
- `accept-language` : String
- `url` : String

### Styling

Add style overrides by accessing the `code-editor` part.

```css
md-code-editor::part(code-editor) {
  background-color: green;
}
```

### Slots

#### Named Slots

Use named slots for setting specific content to the correct area.
`slot="method"`
`slot="code-url"`
`slot="code-block"`
